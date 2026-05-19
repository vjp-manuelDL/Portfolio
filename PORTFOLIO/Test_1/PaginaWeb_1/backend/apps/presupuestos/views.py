from rest_framework import generics, permissions, viewsets

from apps.users.models import RolUsuario

from .models import SolicitudPresupuesto
from .serializers import (
    SolicitudPresupuestoAdminSerializer,
    SolicitudPresupuestoSerializer,
)


class EsAdminOStaff(permissions.BasePermission):
    def has_permission(self, request, view):
        if not request.user or not request.user.is_authenticated:
            return False
        return request.user.rol in (RolUsuario.ADMIN, RolUsuario.STAFF) or request.user.is_superuser


class CrearSolicitudView(generics.CreateAPIView):
    queryset = SolicitudPresupuesto.objects.all()
    serializer_class = SolicitudPresupuestoSerializer
    permission_classes = [permissions.AllowAny]


class MisSolicitudesView(generics.ListAPIView):
    serializer_class = SolicitudPresupuestoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return SolicitudPresupuesto.objects.filter(usuario=self.request.user)


class SolicitudDetalleView(generics.RetrieveAPIView):
    serializer_class = SolicitudPresupuestoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return SolicitudPresupuesto.objects.filter(usuario=self.request.user)


class SolicitudAdminViewSet(viewsets.ModelViewSet):
    queryset = SolicitudPresupuesto.objects.all()
    serializer_class = SolicitudPresupuestoAdminSerializer
    permission_classes = [EsAdminOStaff]
