from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import (
    CrearSolicitudView,
    MisSolicitudesView,
    SolicitudAdminViewSet,
    SolicitudDetalleView,
)

router = DefaultRouter()
router.register(r"admin", SolicitudAdminViewSet, basename="presupuesto-admin")

urlpatterns = [
    path("solicitar/", CrearSolicitudView.as_view(), name="solicitar_presupuesto"),
    path("mis-solicitudes/", MisSolicitudesView.as_view(), name="mis_solicitudes"),
    path("mis-solicitudes/<int:pk>/", SolicitudDetalleView.as_view(), name="solicitud_detalle"),
    path("", include(router.urls)),
]
