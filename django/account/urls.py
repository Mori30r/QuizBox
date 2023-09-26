from django.urls import path
from . import views

urlpatterns = [
    path('create_account_teacher/', views.create_account_teacher,
         name='create_account_teacher'),
    path('create_account_student/', views.create_account_student,
         name='create_account_student'),
    path('update_account_teacher/', views.update_account_teacher,
         name='update_account_teacher'),
    path('update_account_student/', views.update_account_student,
         name='update_account_student'),
    path('enroll-student/', views.enroll_student, name='enroll-student'),
    path('list_student_requests/', views.list_student_requests,
         name='list_student_requests'),
    path('list_approved_students/',
         views.list_approved_students, name='approved_students'),
    path('list_approved_teachers_by_student/',
         views.list_approved_teachers_by_student, name='approved_teachers_by_student'),
    path('approve_student_request/',
         views.approve_student_request, name='student_requests'),
    path('teacher_list/', views.teacher_list, name='teacher-list'),
    path('teacher_detail/<int:teacher_id>/',
         views.teacher_details, name='teacher-detail'),
    path('student_list/', views.student_list, name='student-list'),
    path('student_detail/<int:student_id>/',
         views.student_detail, name='student-detail'),
    path('create_course/', views.create_course, name='create_course'),

]
