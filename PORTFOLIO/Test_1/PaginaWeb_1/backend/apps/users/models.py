from django.contrib.auth.models import AbstractUser
from django.db import models


class RolUsuario(models.TextChoices):
    CLIENTE = "cliente", "Cliente"
    ADMIN = "admin", "Administrador"
    STAFF = "staff", "Personal"


class Usuario(AbstractUser):
    rol = models.CharField(
        max_length=20,
        choices=RolUsuario.choices,
        default=RolUsuario.CLIENTE,
    )
    telefono = models.CharField(max_length=20, blank=True)
    avatar = models.ImageField(upload_to="avatars/", blank=True, null=True)
    poblacion = models.CharField(max_length=120, blank=True)

    class Meta:
        verbose_name = "Usuario"
        verbose_name_plural = "Usuarios"

    @property
    def es_administrador(self) -> bool:
        return self.rol == RolUsuario.ADMIN or self.is_superuser
