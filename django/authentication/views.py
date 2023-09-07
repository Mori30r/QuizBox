from .serializers import UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.request import Request
from .tokens import create_jwt_pair_for_user
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response

class SignUpView(APIView):
    serializer_class = UserSerializer
    permission_classes = []

    def post(self, request, format=None):
        data = request.data
        serializer = self.serializer_class(data=data)

        if serializer.is_valid():
            serializer.save()
            content = {
                "message": "User Created Successfully",
                "data": serializer.data,         
                }
            return Response(data=content, status=status.HTTP_201_CREATED)
        
        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    permission_classes = []

    def post(self, request: Request):
        username = request.data.get("username")
        password = request.data.get("password")

        user = authenticate(username=username, password=password)

        if user is not None:

            tokens = create_jwt_pair_for_user(user)

            response = {"message": "Login Successfull", "tokens": tokens}
            return Response(data=response, status=status.HTTP_200_OK)

        else:
            return Response(data={"message": "Invalid email or password"})

    def get(self, request: Request):
        content = {
                "user": str(request.user),
                "auth": str(request.auth)
        }

        return Response(data=content, status=status.HTTP_200_OK)
    
