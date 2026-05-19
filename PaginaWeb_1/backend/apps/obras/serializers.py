from rest_framework import serializers

from .models import ImagenProyecto, ProyectoObra


class ImagenProyectoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImagenProyecto
        fields = (
            "id",
            "imagen",
            "orden",
            "marcada_borrar",
            "subida_en",
        )
        read_only_fields = ("subida_en",)


class ProyectoObraSerializer(serializers.ModelSerializer):
    imagenes = ImagenProyectoSerializer(many=True, read_only=True)
    imagenes_activas = serializers.SerializerMethodField()

    class Meta:
        model = ProyectoObra
        fields = (
            "id",
            "titulo",
            "descripcion",
            "ubicacion",
            "coste",
            "categoria",
            "destacado",
            "imagen_antes",
            "imagen_despues",
            "imagenes",
            "imagenes_activas",
            "creado_en",
            "actualizado_en",
        )
        read_only_fields = ("creado_en", "actualizado_en")

    def get_imagenes_activas(self, obj):
        qs = obj.imagenes.filter(marcada_borrar=False)
        return ImagenProyectoSerializer(qs, many=True).data


class ImagenProyectoCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImagenProyecto
        fields = ("proyecto", "imagen", "orden")

    def validate(self, attrs):
        proyecto = attrs["proyecto"]
        activas = proyecto.imagenes.filter(marcada_borrar=False).count()
        if activas >= ImagenProyecto.MAX_IMAGENES:
            raise serializers.ValidationError(
                f"Máximo {ImagenProyecto.MAX_IMAGENES} imágenes por proyecto."
            )
        return attrs
