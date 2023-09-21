from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from drf_spectacular.utils import extend_schema
from .serializers import (
    QuizInputSerializer,
    QuizSerializer
)


@extend_schema(
    request=QuizInputSerializer,
    responses=QuizSerializer
)
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_quiz(request):
    quiz_serializer = QuizInputSerializer(data=request.data)
    if quiz_serializer.is_valid():
        quiz_serializer.save()
        return Response(quiz_serializer.data, status=status.HTTP_201_CREATED)
    return Response(quiz_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
