from django.conf import settings
from django.core.exceptions import ValidationError
from django.db import models


class CategoriaObra(models.TextChoices):
    REFORMA = "reforma", "Reforma"
    OBRA = "obra", "Obra"
    DESTACADO = "destacado", "Destacado"


class ProyectoObra(models.Model):
    titulo = models.CharField(max_length=200)
    descripcion = models.TextField()
    ubicacion = models.CharField(max_length=200, default="Plasencia, Cáceres")
    coste = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True)
    categoria = models.CharField(
        max_length=20,
        choices=CategoriaObra.choices,
        default=CategoriaObra.REFORMA,
    )
    destacado = models.BooleanField(default=False)
    imagen_antes = models.ImageField(
        upload_to="obras/antes/", blank=True, null=True
    )
    imagen_despues = models.ImageField(
        upload_to="obras/despues/", blank=True, null=True
    )
    creado_por = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="proyectos_creados",
    )
    creado_en = models.DateTimeField(auto_now_add=True)
    actualizado_en = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-creado_en"]
        verbose_name = "Proyecto de Obra"
        verbose_name_plural = "Proyectos de Obra"

    def __str__(self) -> str:
        return self.titulo


class ImagenProyecto(models.Model):
    MAX_IMAGENES = 4

    proyecto = models.ForeignKey(
        ProyectoObra,
        on_delete=models.CASCADE,
        related_name="imagenes",
    )
    imagen = models.ImageField(upload_to="obras/galeria/")
    orden = models.PositiveSmallIntegerField(default=0)
    marcada_borrar = models.BooleanField(default=False)
    subida_en = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["orden", "subida_en"]
        verbose_name = "Imagen de Proyecto"
        verbose_name_plural = "Imágenes de Proyecto"

    def clean(self):
        if not self.pk:
            count = self.proyecto.imagenes.filter(marcada_borrar=False).count()
            if count >= self.MAX_IMAGENES:
                raise ValidationError(
                    f"Máximo {self.MAX_IMAGENES} imágenes por proyecto."
                )

    def save(self, *args, **kwargs):
        self.full_clean()
        super().save(*args, **kwargs)
