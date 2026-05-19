from django.db.models import Q
from rest_framework import permissions, status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from apps.users.models import RolUsuario

from .models import ImagenProyecto, ProyectoObra
from .serializers import (
    ImagenProyectoCreateSerializer,
    ImagenProyectoSerializer,
    ProyectoObraSerializer,
)


class EsAdminOStaff(permissions.BasePermission):
    def has_permission(self, request, view):
        if not request.user or not request.user.is_authenticated:
            return False
        return request.user.rol in (RolUsuario.ADMIN, RolUsuario.STAFF) or request.user.is_superuser


class ProyectoObraViewSet(viewsets.ModelViewSet):
    queryset = ProyectoObra.objects.prefetch_related("imagenes").all()
    serializer_class = ProyectoObraSerializer
    filterset_fields = ["categoria", "destacado"]
    search_fields = ["titulo", "ubicacion", "descripcion"]

    def get_permissions(self):
        if self.action in ("create", "update", "partial_update", "destroy"):
            return [EsAdminOStaff()]
        return [permissions.AllowAny()]

    def get_queryset(self):
        qs = super().get_queryset()
        categoria = self.request.query_params.get("categoria")
        if categoria:
            qs = qs.filter(categoria=categoria)
        return qs

    @action(detail=True, methods=["post"], permission_classes=[EsAdminOStaff])
    def subir_imagen(self, request, pk=None):
        proyecto = self.get_object()
        data = request.data.copy() if hasattr(request.data, "copy") else dict(request.data)
        data["proyecto"] = proyecto.pk
        serializer = ImagenProyectoCreateSerializer(
            data=data,
            context={"request": request},
        )
        serializer.is_valid(raise_exception=True)
        imagen = serializer.save()
        return Response(
            ImagenProyectoSerializer(imagen).data,
            status=status.HTTP_201_CREATED,
        )

    @action(
        detail=True,
        methods=["patch"],
        url_path="imagenes/(?P<imagen_id>[^/.]+)/marcar-borrar",
        permission_classes=[EsAdminOStaff],
    )
    def marcar_imagen_borrar(self, request, pk=None, imagen_id=None):
        proyecto = self.get_object()
        try:
            imagen = proyecto.imagenes.get(pk=imagen_id)
        except ImagenProyecto.DoesNotExist:
            return Response(
                {"detail": "Imagen no encontrada."},
                status=status.HTTP_404_NOT_FOUND,
            )
        imagen.marcada_borrar = request.data.get("marcada_borrar", True)
        imagen.save(update_fields=["marcada_borrar"])
        return Response(ImagenProyectoSerializer(imagen).data)

    @action(
        detail=True,
        methods=["delete"],
        url_path="imagenes/(?P<imagen_id>[^/.]+)/eliminar",
        permission_classes=[EsAdminOStaff],
    )
    def eliminar_imagen(self, request, pk=None, imagen_id=None):
        proyecto = self.get_object()
        try:
            imagen = proyecto.imagenes.get(pk=imagen_id)
        except ImagenProyecto.DoesNotExist:
            return Response(
                {"detail": "Imagen no encontrada."},
                status=status.HTTP_404_NOT_FOUND,
            )
        if imagen.imagen:
            imagen.imagen.delete(save=False)
        imagen.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    @action(detail=False, methods=["get"])
    def destacados(self, request):
        qs = self.get_queryset().filter(
            Q(destacado=True) | Q(imagen_antes__isnull=False)
        )
        serializer = self.get_serializer(qs, many=True)
        return Response(serializer.data)
