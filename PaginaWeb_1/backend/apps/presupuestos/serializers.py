from rest_framework import serializers

from .models import SolicitudPresupuesto


class SolicitudPresupuestoSerializer(serializers.ModelSerializer):
    telefono_completo = serializers.CharField(read_only=True)

    class Meta:
        model = SolicitudPresupuesto
        fields = (
            "id",
            "nombre",
            "telefono_prefijo",
            "telefono_numero",
            "telefono_completo",
            "email",
            "poblacion",
            "trabajo_realizar",
            "tipo_reforma",
            "descripcion",
            "estado",
            "acepta_aviso_legal",
            "archivo_referencia",
            "fecha_visita_tecnica",
            "creado_en",
            "actualizado_en",
        )
        read_only_fields = (
            "estado",
            "fecha_visita_tecnica",
            "creado_en",
            "actualizado_en",
        )

    def validate_acepta_aviso_legal(self, value):
        if not value:
            raise serializers.ValidationError(
                "Debe aceptar los Términos de Política de Privacidad y Aviso Legal."
            )
        return value

    def validate_telefono_prefijo(self, value):
        if not value.startswith("+"):
            raise serializers.ValidationError("El prefijo debe comenzar con +.")
        return value

    def create(self, validated_data):
        request = self.context.get("request")
        if request and request.user.is_authenticated:
            validated_data["usuario"] = request.user
        return super().create(validated_data)


class SolicitudPresupuestoAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = SolicitudPresupuesto
        fields = (
            "id",
            "nombre",
            "telefono_prefijo",
            "telefono_numero",
            "email",
            "poblacion",
            "trabajo_realizar",
            "estado",
            "fecha_visita_tecnica",
            "creado_en",
        )
