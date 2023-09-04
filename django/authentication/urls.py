from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import  TeacherRegisterAPIView, StudentRegisterAPIView, StudentConfirmationAPIView






urlpatterns = [
    path('teacher/register/', TeacherRegisterAPIView.as_view(), name='teacher-register'),
    path('student/register/', StudentRegisterAPIView.as_view(), name='student-register'),
    path('confirm-student/', StudentConfirmationAPIView.as_view(), name='confirm-student'),
]

urlpatterns = format_suffix_patterns(urlpatterns)