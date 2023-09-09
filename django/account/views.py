from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .serializers import TeacherSerializer, StudentSerializer
from .serializers import Student, Teacher
from rest_framework.permissions import IsAuthenticated
from authentication.models import UserBaseQuizBox

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_account(request):
    user_data = request.user
    
    if isinstance(user_data, UserBaseQuizBox):
        if user_data.role == 'Teacher':
            teacher_serializer = TeacherSerializer(data=user_data.__dict__)
            if teacher_serializer.is_valid():
                teacher_serializer.save()
                return Response({'message': 'Teacher account created successfully.'}, status=status.HTTP_201_CREATED)
            else:
                return Response(teacher_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if isinstance(user_data, UserBaseQuizBox):
        if user_data.role == 'Student':
            student_serializer = StudentSerializer(data=user_data.__dict__)
            if student_serializer.is_valid():
                student_serializer.save()
                return Response({'message': 'Student account created successfully.'}, status=status.HTTP_201_CREATED)
            else:
                return Response(student_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            
            
from django.shortcuts import get_object_or_404


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_account(request):
    user_data = request.user
    
    if isinstance(user_data, UserBaseQuizBox):
        if user_data.role == 'Teacher':
            try:
                teacher_instance = Teacher.objects.get(user_quiz_box=user_data)
                teacher_serializer = TeacherSerializer(teacher_instance, data=request.data)
                if teacher_serializer.is_valid():
                    teacher_serializer.save()
                    return Response({'message': 'Teacher account updated successfully.'}, status=status.HTTP_200_OK)
                else:
                    return Response(teacher_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except Teacher.DoesNotExist:
                return Response({'message': 'Teacher account not found.'}, status=status.HTTP_404_NOT_FOUND)
        
        elif user_data.role == 'Student':
            student_instance = get_object_or_404(Student, user_quiz_box=user_data)
            student_serializer = StudentSerializer(student_instance, data=request.data)
            if student_serializer.is_valid():
                student_serializer.save()
                return Response({'message': 'Student account updated successfully.'}, status=status.HTTP_200_OK)
            else:
                return Response(student_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    return Response({'message': 'Invalid user role.'}, status=status.HTTP_400_BAD_REQUEST)