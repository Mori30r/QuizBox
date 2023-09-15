from django.contrib import admin
from .models import Student, Teacher, Enrollment, Course

class StudentAdmin(admin.ModelAdmin):
    display_name = [
        'id',
        'number_of_semesters',
        'parent_name',
        'grade',
        'student_code',
        'parent_phone_number',
        'major'
    ]
    
class TeacherAdmin(admin.ModelAdmin):
    display_name = [
        'id',
        'teaching_experience',
        'teacher_code',
        'qualification',
        'specialization'
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


