from django.conf import settings
from django.core.validators import RegexValidator
from django.db import models


class EstadoPresupuesto(models.TextChoices):
    RECIBIDO = "recibido", "Recibido"
    EN_REVISION = "en_revision", "En revisión"
    VISITA_PROGRAMADA = "visita_programada", "Visita técnica programada"
    PRESUPUESTO_ENVIADO = "presupuesto_enviado", "Presupuesto enviado"
    ACEPTADO = "aceptado", "Aceptado"
    RECHAZADO = "rechazado", "Rechazado"
    CERRADO = "cerrado", "Cerrado"


class SolicitudPresupuesto(models.Model):
    usuario = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="solicitudes_presupuesto",
    )
    nombre = models.CharField(max_length=150)
    telefono_prefijo = models.CharField(max_length=8, default="+34")
    telefono_numero = models.CharField(
        max_length=9,
        validators=[
            RegexValidator(
                regex=r"^\d{9}$",
                message="El número debe tener exactamente 9 dígitos.",
            )
        ],
    )
    email = models.EmailField()
    poblacion = models.CharField(max_length=120)
    trabajo_realizar = models.TextField()
    tipo_reforma = models.CharField(max_length=120, blank=True)
    descripcion = models.TextField(blank=True)
    estado = models.CharField(
        max_length=30,
        choices=EstadoPresupuesto.choices,
        default=EstadoPresupuesto.RECIBIDO,
    )
    acepta_aviso_legal = models.BooleanField(default=False)
    archivo_referencia = models.FileField(
        upload_to="presupuestos/referencias/",
        blank=True,
        null=True,
    )
    fecha_visita_tecnica = models.DateTimeField(null=True, blank=True)
    creado_en = models.DateTimeField(auto_now_add=True)
    actualizado_en = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-creado_en"]
        verbose_name = "Solicitud de Presupuesto"
        verbose_name_plural = "Solicitudes de Presupuesto"

    def __str__(self) -> str:
        return f"{self.nombre} - {self.poblacion}"

    @property
    def telefono_completo(self) -> str:
        return f"{self.telefono_prefijo}{self.telefono_numero}"
