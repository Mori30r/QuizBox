from django.contrib import admin
from .models import Student, Teacher

class TeacherَAdmin(admin.ModelAdmin):
    list_display = ['email', 'teacher_code']
    

class StudentَAdmin(admin.ModelAdmin):
    list_display = ['email', 'student_code']

admin.site.register(Student, StudentَAdmin)
admin.site.register(Teacher, TeacherَAdmin)