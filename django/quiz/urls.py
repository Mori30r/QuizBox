from django.urls import path
from .views import create_quiz, create_question, submit_quiz

urlpatterns = [
    path('create_quiz/', create_quiz, name='create-quiz'),
    path('create_question/',
         create_question, name='add-question'),
    path('submit_quiz/', submit_quiz, name='submit_quiz')
]
