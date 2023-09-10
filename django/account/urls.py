from django.urls import path
from . import views

urlpatterns = [
    path('create_account/', views.create_account, name='create_account'),
    path('update_account/', views.update_account, name='update_account'),
    path('enroll-student/', views.enroll_student, name='enroll-student'),
    path('list_student_requests/', views.list_student_requests, name='list_student_requests'),
    path('list_approved_students/<int:teacher_id>/approved_students/', views.list_approved_students, name='approved_students'),
    path('list_approved_teachers_by_student/<int:student_id>/approved_teachers/', views.list_approved_teachers_by_student, name='approved_teachers_by_student'),
    path('approve_student_request/<int:teacher_id>/courses/<int:course_id>/requests/', views.approve_student_request, name='student_requests'),
    
]
