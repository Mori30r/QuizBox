from django.db import models
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, User


    
class UserManager(BaseUserManager):
    def create_user(self, email, username, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, username, password, **extra_fields)


    def __str__(self):
        return self.user
    

class  Teacher(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    username = models.CharField(max_length=100, unique=True) # TODO: add unique field
    password = models.CharField(max_length=100)
    email = models.EmailField(max_length=225, unique=True)
    phone_number = models.CharField(max_length=12)
    date_of_birth = models.DateField()
    is_teacher = models.BooleanField(default=True)
    teaching_experience = models.IntegerField()
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserManager()
    
    def __str__(self):
        return self.username
    
    def set_password(self, raw_password):
        self.password = make_password(raw_password)
    
    def save(self, *args, **kwargs):
        self.set_password(self.password)
        super().save(*args, **kwargs)
        
    
    def get_full_name(self):
        return f"{self.first_name} - {self.last_name}"
    

class Student(AbstractBaseUser):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    parent_name = models.CharField(max_length=100)
    grade = models.CharField(max_length=50)
    username = models.CharField(max_length=100,unique=True) # TODO: add unique field
    email = models.EmailField(max_length=225, unique=True)
    phone_number = models.CharField(max_length=12)
    parent_phone_number = models.CharField(max_length=12)
    date_of_birth = models.DateField()
    is_student = models.BooleanField(default=False)
    selected_teacher = models.ForeignKey(Teacher, on_delete=models.SET_NULL, null=True, blank=True, related_name='selected_teachers')
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []


    objects = UserManager()
    

    def __str__(self):
        return self.username
    
    def get_teacher(self):
        return self.teacher
    
    def get_full_name(self):
        return f"{self.first_name} - {self.last_name}"
    
    
class Confirmation(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE, related_name='selected_students')
    is_confirmed = models.BooleanField(default=False)
    
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        if self.is_confirmed:
            self.student.is_student = True
            self.student.save()
    

