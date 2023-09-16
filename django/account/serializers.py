from rest_framework import serializers
from .models import Teacher, Student, Enrollment, Course
from authentication.serializers import UserSerializer

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id', 'course_name'] 

class TeacherSerializer(serializers.ModelSerializer):
    
    user = UserSerializer()
    class Meta:
        model = Teacher
        fields = ['id','user','course','teaching_experience', 'teacher_code', 'qualification', 'specialization']

class StudentSerializer(serializers.ModelSerializer):
    
    user = UserSerializer()
    class Meta:
        model = Student
        fields = ['id','user','number_of_semesters', 'parent_name', 'grade', 'student_code', 'parent_phone_number', 'major', 'enrollment_date', 'courses']
        
        

class EnrollmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enrollment
        fields = '__all__'