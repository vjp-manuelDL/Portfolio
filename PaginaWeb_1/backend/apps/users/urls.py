from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from .views import (
    CambioPasswordView,
    CookieTokenObtainPairView,
    LogoutView,
    PerfilView,
    RecuperarPasswordView,
    RegistroView,
    RestablecerPasswordView,
)

urlpatterns = [
    path("login/", CookieTokenObtainPairView.as_view(), name="login"),
    path("refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("registro/", RegistroView.as_view(), name="registro"),
    path("logout/", LogoutView.as_view(), name="logout"),
    path("perfil/", PerfilView.as_view(), name="perfil"),
    path("cambio-password/", CambioPasswordView.as_view(), name="cambio_password"),
    path(
        "recuperar-password/",
        RecuperarPasswordView.as_view(),
        name="recuperar_password",
    ),
    path(
        "restablecer-password/",
        RestablecerPasswordView.as_view(),
        name="restablecer_password",
    ),
]
