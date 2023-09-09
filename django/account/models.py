from django.db import models
from django.contrib.auth.models import AbstractUser, Group


class AccountProfile(AbstractUser):
    phone_number = models.CharField(max_length=12, blank=True, null=True)
    date_of_birth = models.DateField()
    groups = models.ManyToManyField(Group, verbose_name='Groups', blank=True, help_text='The groups this user belongs to.', related_name='account_profiles')
    
    class Meta:
        verbose_name = 'Account Profile'
        verbose_name_plural = 'Account Profiles'
    

    

class Teacher(AccountProfile):
    teaching_experience = models.IntegerField()
    teacher_code = models.CharField(max_length=10, unique=True)
    qualification = models.CharField(max_length=60, verbose_name="مدرک تحصیلی")
    specialization = models.CharField(max_length=60, verbose_name="رشته تدریس استاد")
    # course = models.ForeignKey('Course', on_delete=models.CASCADE)
    
    class Meta:
        verbose_name = 'Teacher'
        verbose_name_plural = 'Teachers'
        

class Student(AccountProfile):
    number_of_semesters = models.IntegerField()
    parent_name = models.CharField(max_length=100)
    grade = models.CharField(max_length=50)
    student_code = models.CharField(max_length=10, unique=True)
    parent_phone_number = models.CharField(max_length=12, blank=True, null=True)
    major = models.CharField(max_length=80, blank=True, null=True, verbose_name= "رشته تحصیلی")
    enrollment_date = models.DateField(verbose_name="تاریخ ورود دانشجو به دانشگاه")
    
    class Meta:
        verbose_name = 'Student'
        verbose_name_plural = 'Students'
        
        
class Course(models.Model):
    name = models.CharField(max_length=50)
    

class Enrollment(models.Model):
       student = models.ForeignKey(Student, on_delete=models.CASCADE)
       course = models.ForeignKey(Course, on_delete=models.CASCADE)
       teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
       is_approved = models.BooleanField(default=False)