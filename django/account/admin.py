from django.contrib import admin
from .models import Student, Teacher, Enrollment, Course


class StudentAdmin(admin.ModelAdmin):
    display_name = [
        'id',
        'student_code',
        'major'
    ]


class TeacherAdmin(admin.ModelAdmin):
    display_name = [
        'id',
        'teacher_code',
    ]


class EnrollmentAdmin(admin.ModelAdmin):
    display_name = [
        'student',
        'course',
        'teacher',
        'is_approved'
    ]


admin.site.register(Student, StudentAdmin)
admin.site.register(Teacher, TeacherAdmin)
admin.site.register(Enrollment, EnrollmentAdmin)
admin.site.register(Course)
