from django.db import models
from authentication.models import UserBaseQuizBox
from django.contrib.auth.models import Group, Permission


class Teacher(models.Model):
    user = models.ForeignKey(
        UserBaseQuizBox, on_delete=models.CASCADE, related_name='teacher')
    teaching_experience = models.IntegerField()
    teacher_code = models.CharField(max_length=10, unique=True)
    qualification = models.CharField(max_length=60, verbose_name="مدرک تحصیلی")
    specialization = models.CharField(
        max_length=60, verbose_name="رشته تدریس استاد")
    teacher_groups = models.ManyToManyField(
        Group, blank=True, related_name='teachers')
    teacher_user_permissions = models.ManyToManyField(
        Permission, blank=True, related_name='teachers')
    course = models.ForeignKey(
        'Course', on_delete=models.CASCADE, related_name='courses', null=True)
    courses = models.ManyToManyField(
        'Course', blank=True, related_name='teachers')

    class Meta:
        verbose_name = 'Teacher'
        verbose_name_plural = 'Teachers'

    def __str__(self):
        return str(self.user.username)


class Student(models.Model):
    user = models.OneToOneField(
        UserBaseQuizBox, on_delete=models.CASCADE, related_name='student')
    number_of_semesters = models.IntegerField(default=0)
    parent_name = models.CharField(max_length=100)
    grade = models.CharField(max_length=50)
    student_code = models.CharField(max_length=10, unique=True)
    parent_phone_number = models.CharField(max_length=12)
    major = models.CharField(max_length=80, verbose_name="رشته تحصیلی")
    enrollment_date = models.DateField(
        verbose_name="تاریخ ورود دانشجو به دانشگاه")
    student_groups = models.ManyToManyField(
        Group, blank=True, related_name='students')
    student_user_permissions = models.ManyToManyField(
        Permission, blank=True, related_name='students')
    courses = models.ManyToManyField('Course', related_name='student_courses')

    class Meta:
        verbose_name = 'Student'
        verbose_name_plural = 'Students'

    def __str__(self):
        return str(self.user.username)


class Course(models.Model):
    name = models.CharField(max_length=50)
    students = models.ManyToManyField(
        Student, blank=True, related_name='course_students')

    def __str__(self):
        return str(self.id)


class Enrollment(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    teacher = models.ForeignKey(
        Teacher, on_delete=models.CASCADE, related_name='enrollments')
    is_approved = models.BooleanField(default=False)

    def __str__(self):
        return str(self.id)
