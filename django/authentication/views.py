from .serializers import UserSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import viewsets
from .models import UserBaseQuizBox
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from rest_framework_simplejwt.tokens import RefreshToken

class RegisterViewSet(viewsets.ModelViewSet):
    queryset = UserBaseQuizBox.objects.all()
    serializer_class  = UserSerializer
    permission_classes = [IsAuthenticated]
    
    
class UserLogInView(generics.CreateAPIView):
    serializer_class = TokenObtainPairSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        refresh_token = serializer.validated_data.get('refresh')
        if refresh_token:
            access_token = RefreshToken(refresh_token).access_token
            response = Response({'refresh_token': refresh_token, 'access_token': str(access_token)}, status=status.HTTP_200_OK)
            response.set_cookie('refresh_token', refresh_token, httponly=True)
            return response
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)

