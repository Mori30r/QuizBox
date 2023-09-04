from rest_framework import generics, status
from django.contrib.auth import get_user_model
from .models import Confirmation, Teacher, Student
from .serializers import StudentSerializer, TeacherSerializer, ConfirmationSerializer
from rest_framework.response import Response
from rest_framework.response import Response
from rest_framework import status
# from .serializers import TeacherLoginSerializer, StudentLoginSerializer
from rest_framework import generics
from rest_framework.exceptions import NotFound

# from django.contrib.auth import authenticate, login

from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework import status



User = get_user_model()






class TeacherRegisterAPIView(CreateAPIView):
    serializer_class = TeacherSerializer

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        teacher = serializer.save()
        headers = self.get_success_headers(serializer.data)
        return Response({'id': teacher.id}, status=status.HTTP_201_CREATED, headers=headers)


class StudentRegisterAPIView(CreateAPIView):
    serializer_class = StudentSerializer

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        student = serializer.save()
        headers = self.get_success_headers(serializer.data)
        return Response({'id': student.id}, status=status.HTTP_201_CREATED, headers=headers)



    
class StudentConfirmationAPIView(generics.CreateAPIView):
    serializer_class = ConfirmationSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        student_id = serializer.validated_data['student'].id
        teacher_id = serializer.validated_data['teacher'].id

        try:
            student = Student.objects.get(id=student_id)
        except Student.DoesNotExist:
            raise NotFound(detail='Invalid student')

        try:
            teacher = Teacher.objects.get(id=teacher_id)
        except Teacher.DoesNotExist:
            raise NotFound(detail='Invalid teacher')

        username = serializer.validated_data.get('username')

        if Student.objects.filter(username=username).exists():
            return self.handle_invalid_username(username)

        confirmation = Confirmation.objects.create(student=student, teacher=teacher, is_confirmed=True)
        student.is_student = True
        student.save()

        return self.get_success_response()

    def handle_invalid_username(self, username):
        return Response(
            data={'message': 'Username already exists'},
            status=status.HTTP_400_BAD_REQUEST
        )

    def get_success_response(self):
        return Response(
            data={'message': 'Student confirmed successfully'},
            status=status.HTTP_201_CREATED
        )


