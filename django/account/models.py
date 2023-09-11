from django.db import models
from authentication.models import UserBaseQuizBox
from django.contrib.auth.models import Group, Permission

    

class Teacher(UserBaseQuizBox):
    teaching_experience = models.IntegerField()
    teacher_code = models.CharField(max_length=10, unique=True)
    qualification = models.CharField(max_length=60, verbose_name="مدرک تحصیلی")
    specialization = models.CharField(max_length=60, verbose_name="رشته تدریس استاد")
    teacher_groups = models.ManyToManyField(Group, blank=True, related_name='teachers')
    teacher_user_permissions = models.ManyToManyField(Permission, blank=True, related_name='teachers')
    
    class Meta:
        verbose_name = 'Teacher'
        verbose_name_plural = 'Teachers'
        
    def __str__(self):
        return self.teacher_code


class Student(UserBaseQuizBox):
    number_of_semesters = models.IntegerField(blank=True, null=True)
    parent_name = models.CharField(max_length=100, blank=True, null=True)
    grade = models.CharField(max_length=50, blank=True, null=True)
    student_code = models.CharField(max_length=10, unique=True, blank=True, null=True) 
    parent_phone_number = models.CharField(max_length=12, blank=True, null=True)
    major = models.CharField(max_length=80, blank=True, null=True, verbose_name="رشته تحصیلی")
    enrollment_date = models.DateField(verbose_name="تاریخ ورود دانشجو به دانشگاه", blank=True, null=True)
    student_groups = models.ManyToManyField(Group, blank=True, related_name='students')
    student_user_permissions = models.ManyToManyField(Permission, blank=True, related_name='students')
    
    class Meta:
        verbose_name = 'Student'
        verbose_name_plural = 'Students'
        
    def __str__(self):
        return self.student_code
        
        
class Course(models.Model):
    name = models.CharField(max_length=50)
    

class Enrollment(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE, related_name='enrollments')
    is_approved = models.BooleanField(default=False)