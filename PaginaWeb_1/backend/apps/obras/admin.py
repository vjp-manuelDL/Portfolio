from django.contrib import admin

from .models import ImagenProyecto, ProyectoObra


class ImagenProyectoInline(admin.TabularInline):
    model = ImagenProyecto
    extra = 0


@admin.register(ProyectoObra)
class ProyectoObraAdmin(admin.ModelAdmin):
    list_display = ("titulo", "categoria", "ubicacion", "destacado", "creado_en")
    list_filter = ("categoria", "destacado")
    search_fields = ("titulo", "ubicacion")
    inlines = [ImagenProyectoInline]
