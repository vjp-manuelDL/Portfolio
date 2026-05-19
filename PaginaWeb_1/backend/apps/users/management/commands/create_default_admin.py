from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand

from apps.users.models import RolUsuario

Usuario = get_user_model()

DEFAULT_USERNAME = "admin"
DEFAULT_PASSWORD = "1234Admin*"
DEFAULT_EMAIL = "admin@obrasyreformasaaron.es"


class Command(BaseCommand):
    help = "Crea el superusuario administrador por defecto (admin / 1234Admin*)."

    def handle(self, *args, **options):
        if Usuario.objects.filter(username=DEFAULT_USERNAME).exists():
            user = Usuario.objects.get(username=DEFAULT_USERNAME)
            user.set_password(DEFAULT_PASSWORD)
            user.is_superuser = True
            user.is_staff = True
            user.rol = RolUsuario.ADMIN
            user.email = DEFAULT_EMAIL
            user.save()
            self.stdout.write(
                self.style.WARNING(
                    f"Usuario '{DEFAULT_USERNAME}' actualizado con la contraseña por defecto."
                )
            )
            return

        Usuario.objects.create_superuser(
            username=DEFAULT_USERNAME,
            email=DEFAULT_EMAIL,
            password=DEFAULT_PASSWORD,
            rol=RolUsuario.ADMIN,
            first_name="Administrador",
            last_name="Aarón",
        )
        self.stdout.write(
            self.style.SUCCESS(
                f"Superusuario '{DEFAULT_USERNAME}' creado correctamente."
            )
        )
