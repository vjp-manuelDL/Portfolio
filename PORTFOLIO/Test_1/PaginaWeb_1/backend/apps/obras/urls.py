from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import ProyectoObraViewSet

router = DefaultRouter()
router.register(r"proyectos", ProyectoObraViewSet, basename="proyecto")

urlpatterns = [
    path("", include(router.urls)),
]
