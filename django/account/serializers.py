from rest_framework import serializers
from .models import Teacher, Student, Enrollment, Course
from authentication.serializers import UserSerializer
from quiz.serializers import QuizSerializer
from quiz.models import Quiz


class CourseSerializer(serializers.ModelSerializer):
    quizzes = QuizSerializer(many=True, read_only=True)

    class Meta:
        model = Course
        fields = ['id', 'course_name']

    def create(self, validated_data):
        quizzes_data = validated_data.pop('quizzes', [])
        course = Course.objects.create(**validated_data)
        for quiz_data in quizzes_data:
            Quiz.objects.create(course, **quiz_data)
        return course


class TeacherSerializer(serializers.ModelSerializer):

    user = UserSerializer()

    class Meta:
        model = Teacher
        fields = ['id', 'user', 'courses',
                  'teacher_code']


class StudentSerializer(serializers.ModelSerializer):

    user = UserSerializer()

    class Meta:
        model = Student
        fields = ['id', 'user',
                  'student_code', 'major', 'enrollment_date', 'courses']


class EnrollmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enrollment
        fields = '__all__'
