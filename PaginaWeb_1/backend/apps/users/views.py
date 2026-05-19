from django.conf import settings
from django.contrib.auth import get_user_model
from django.contrib.auth.tokens import default_token_generator
from django.core.mail import send_mail
from django.utils.encoding import force_bytes, force_str
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import (
    CambioPasswordSerializer,
    PerfilUpdateSerializer,
    RegistroSerializer,
    UsuarioSerializer,
)

Usuario = get_user_model()


def set_jwt_cookies(response: Response, refresh: RefreshToken) -> None:
    access = str(refresh.access_token)
    refresh_str = str(refresh)
    response.set_cookie(
        settings.JWT_COOKIE_ACCESS,
        access,
        httponly=settings.JWT_COOKIE_HTTPONLY,
        secure=settings.JWT_COOKIE_SECURE,
        samesite=settings.JWT_COOKIE_SAMESITE,
        max_age=int(settings.SIMPLE_JWT["ACCESS_TOKEN_LIFETIME"].total_seconds()),
    )
    response.set_cookie(
        settings.JWT_COOKIE_REFRESH,
        refresh_str,
        httponly=settings.JWT_COOKIE_HTTPONLY,
        secure=settings.JWT_COOKIE_SECURE,
        samesite=settings.JWT_COOKIE_SAMESITE,
        max_age=int(settings.SIMPLE_JWT["REFRESH_TOKEN_LIFETIME"].total_seconds()),
    )


def clear_jwt_cookies(response: Response) -> None:
    response.delete_cookie(settings.JWT_COOKIE_ACCESS)
    response.delete_cookie(settings.JWT_COOKIE_REFRESH)


class CookieTokenObtainPairView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        if response.status_code == 200:
            refresh = RefreshToken(response.data["refresh"])
            set_jwt_cookies(response, refresh)
            username = request.data.get("username")
            user = Usuario.objects.get(username=username)
            response.data["user"] = UsuarioSerializer(user).data
        return response


class RegistroView(generics.CreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = RegistroSerializer
    permission_classes = [permissions.AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        refresh = RefreshToken.for_user(user)
        response = Response(
            {"user": UsuarioSerializer(user).data},
            status=status.HTTP_201_CREATED,
        )
        set_jwt_cookies(response, refresh)
        return response


class LogoutView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        refresh_token = request.COOKIES.get(settings.JWT_COOKIE_REFRESH)
        if refresh_token:
            try:
                token = RefreshToken(refresh_token)
                token.blacklist()
            except Exception:
                pass
        response = Response({"detail": "Sesión cerrada."})
        clear_jwt_cookies(response)
        return response


class PerfilView(generics.RetrieveUpdateAPIView):
    serializer_class = PerfilUpdateSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user

    def retrieve(self, request, *args, **kwargs):
        return Response(UsuarioSerializer(request.user).data)


class CambioPasswordView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        serializer = CambioPasswordSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = request.user
        if not user.check_password(serializer.validated_data["password_actual"]):
            return Response(
                {"password_actual": "Contraseña actual incorrecta."},
                status=status.HTTP_400_BAD_REQUEST,
            )
        user.set_password(serializer.validated_data["password_nueva"])
        user.save()
        return Response({"detail": "Contraseña actualizada correctamente."})


class RecuperarPasswordView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        email = request.data.get("email", "").strip().lower()
        try:
            user = Usuario.objects.get(email__iexact=email)
        except Usuario.DoesNotExist:
            return Response(
                {"detail": "Si el email existe, recibirás instrucciones."},
                status=status.HTTP_200_OK,
            )
        uid = urlsafe_base64_encode(force_bytes(user.pk))
        token = default_token_generator.make_token(user)
        reset_url = f"{settings.FRONTEND_URL}/restablecer-password?uid={uid}&token={token}"
        send_mail(
            subject="Recuperación de contraseña - Obras y Reformas Aarón",
            message=f"Utiliza este enlace para restablecer tu contraseña: {reset_url}",
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[user.email],
            fail_silently=True,
        )
        return Response(
            {"detail": "Si el email existe, recibirás instrucciones."},
            status=status.HTTP_200_OK,
        )


class RestablecerPasswordView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        uid = request.data.get("uid")
        token = request.data.get("token")
        password = request.data.get("password")
        try:
            user_id = force_str(urlsafe_base64_decode(uid))
            user = Usuario.objects.get(pk=user_id)
        except (Usuario.DoesNotExist, ValueError, TypeError):
            return Response(
                {"detail": "Enlace inválido."}, status=status.HTTP_400_BAD_REQUEST
            )
        if not default_token_generator.check_token(user, token):
            return Response(
                {"detail": "Token expirado o inválido."},
                status=status.HTTP_400_BAD_REQUEST,
            )
        user.set_password(password)
        user.save()
        return Response({"detail": "Contraseña restablecida correctamente."})
