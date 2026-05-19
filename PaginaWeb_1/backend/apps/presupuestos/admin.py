from django.contrib import admin

from .models import SolicitudPresupuesto


@admin.register(SolicitudPresupuesto)
class SolicitudPresupuestoAdmin(admin.ModelAdmin):
    list_display = (
        "nombre",
        "email",
        "poblacion",
        "estado",
        "telefono_completo",
        "creado_en",
    )
    list_filter = ("estado", "poblacion")
    search_fields = ("nombre", "email", "trabajo_realizar")
