from django.urls import path
from .views import create_quiz, create_question, submit_quiz, view_student_answers

urlpatterns = [
    path('create_quiz/', create_quiz, name='create-quiz'),
    path('create_question/',
         create_question, name='add-question'),
    path('submit_quiz/', submit_quiz, name='submit_quiz'),
    path('view_student_answers', view_student_answers, name='view_student_answers')
]
