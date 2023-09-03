from rest_framework import serializers
from .models import Teacher, Student


class TeacherSerializer(serializers.ModelSerializer):
    full_name = serializers.SerializerMethodField()
    
    class Meta:
        model = Teacher
        fields = ['id', 'first_name', 'last_name', 'email', 'phone_number', 'date_of_birth', 'teaching_experience', 'full_name']
        read_only_fields = ['id']
    
    def get_full_name(self, obj):
        return obj.get_full_name()
    

class StudentSerializer(serializers.ModelSerializer):
    teacher = TeacherSerializer(read_only=True)
    
    class Meta:
        model = Student
        fields = ['id', 'first_name', 'last_name', 'parent_name', 'grade', 'email', 'phone_number', 'parent_phone_number', 'date_of_birth', 'teacher']
        read_only_fields = ['id', 'teacher']
    
    def create(self, validated_data):
        teacher_data = validated_data.pop('teacher')
        teacher = Teacher.objects.create(**teacher_data)
        student = Student.objects.create(teacher=teacher, **validated_data)
        return student