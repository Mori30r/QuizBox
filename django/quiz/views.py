from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from drf_spectacular.utils import extend_schema
from .serializers import (
    QuizInputSerializer,
    QuizSerializer,
    QuestionInputSerializer,
    QuestionSerializer,
    QuestionOptionInputSerializer,
    SubmissionInputSerializer,
    SubmissionResponseSerializer
)


@extend_schema(
    request=QuizInputSerializer,
    responses=QuizSerializer,
    tags=["quiz api"]
)
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_quiz(request):
    quiz_serializer = QuizInputSerializer(data=request.data)
    if quiz_serializer.is_valid():
        quiz_serializer.save()
        return Response(quiz_serializer.data, status=status.HTTP_201_CREATED)
    return Response(quiz_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@extend_schema(
    request=QuestionInputSerializer,
    responses=QuestionSerializer,
    tags=["quiz api"]
)
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_question(request):
    question_serializer = QuestionInputSerializer(data=request.data)
    if question_serializer.is_valid():
        question = question_serializer.save()

        # Adding options to the question
        options_data = request.data.get('options', [])
        options_data = [dict(option, question=question.id)
                        for option in options_data]
        options_serializer = QuestionOptionInputSerializer(
            data=options_data, many=True)
        if options_serializer.is_valid():
            options_serializer.save()

        question_serializer = QuestionSerializer(question)
        return Response(question_serializer.data, status=status.HTTP_201_CREATED)

    return Response(question_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@extend_schema(
    request=SubmissionInputSerializer,
    responses=SubmissionResponseSerializer,
    tags=["quiz api"]
)
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def submit_quiz(request):
    serializer = SubmissionInputSerializer(data=request.data)
    if serializer.is_valid():
        submission = serializer.save()

        data = SubmissionResponseSerializer(submission).data
        return Response(data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
