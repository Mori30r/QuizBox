from rest_framework import serializers
from .models import Teacher, Student

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ['id', 'teaching_experience', 'teacher_code', 'qualification', 'specialization']

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['id', 'number_of_semesters', 'parent_name', 'grade', 'student_code', 'parent_phone_number', 'major', 'enrollment_date']