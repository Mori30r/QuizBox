from rest_framework import serializers
from .models import Teacher, Student, Confirmation


from django.contrib.auth import authenticate


class TeacherSerializer(serializers.ModelSerializer):
    full_name = serializers.SerializerMethodField()
    is_teacher = serializers.BooleanField(read_only=True)
    password = serializers.CharField(write_only=True)
    confirm_password = serializers.CharField(write_only=True)
    class Meta:
        model = Teacher
        fields = ['id','username', 'first_name', 'last_name', 'email', 'phone_number', 'date_of_birth', 'teaching_experience', 'full_name', 'is_teacher', 'password', 'confirm_password']
        read_only_fields = ['id', 'is_teacher']
        
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def get_full_name(self, obj):
        return obj.get_full_name()
    
    def validate(self, data):
        password = data.get('password')
        confirm_password = data.get('confirm_password')
        
        if password and confirm_password and password != confirm_password:
            raise serializers.ValidationError("Passwords do not match.")

        return data
    
    def create(self, validated_data):
        confirm_password = validated_data.pop('confirm_password', None)
        if confirm_password is None:
            raise serializers.ValidationError("Confirm password is required.")
        
        if validated_data.get('password') != confirm_password:
            raise serializers.ValidationError("Passwords do not match.")
        
    def create(self, validated_data):
        confirm_password = validated_data.get('confirm_password')
        if confirm_password is None:
            raise serializers.ValidationError("Confirm password is required.")
        
        if validated_data.get('password') != confirm_password:
            raise serializers.ValidationError("Passwords do not match.")

        teacher = Teacher.objects.create_user(
            username=validated_data['email'],
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            phone_number=validated_data['phone_number'],
            date_of_birth=validated_data['date_of_birth'],
            teaching_experience=validated_data['teaching_experience']
        )
        return teacher
    
class StudentSerializer(serializers.ModelSerializer):
    full_name = serializers.SerializerMethodField()
    is_student = serializers.BooleanField(read_only=True)
    password = serializers.CharField(write_only=True)
    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = Student
        fields = ['id', 'username','first_name', 'last_name', 'email', 'phone_number', 'date_of_birth', 'full_name', 'is_student', 'password', 'confirm_password', 'selected_teacher']
        extra_kwargs = {
            'password': {'write_only': True},
        }
        read_only_fields = ['id', 'is_student', 'username']
        
    
    def validate(self, data):
        password = data.get('password')
        confirm_password = data.get('confirm_password')

        if password != confirm_password:
            raise serializers.ValidationError("Passwords do not match.")

        return data


    def get_full_name(self, obj):
        return obj.get_full_name()


    def create(self, validated_data):
        confirm_password = validated_data.pop('confirm_password', None)
        if confirm_password is None:
            raise serializers.ValidationError("Confirm password is required.")

        if validated_data.get('password') != confirm_password:
            raise serializers.ValidationError("Passwords do not match.")

        student = Student.objects.create_user(
            username=validated_data['email'],
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            phone_number=validated_data['phone_number'],
            date_of_birth=validated_data['date_of_birth']
        )
        return student
    
    




class ConfirmationSerializer(serializers.ModelSerializer):
    student = serializers.PrimaryKeyRelatedField(queryset=Student.objects.all())
    teacher = serializers.PrimaryKeyRelatedField(queryset=Teacher.objects.all())
    
    class Meta:
        model = Confirmation
        fields = ['id', 'student', 'teacher', 'is_confirmed']
        read_only_fields = ['id']
        
        



