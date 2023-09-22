from django.urls import path
from .views import create_quiz, create_question

urlpatterns = [
    path('create_quiz/', create_quiz, name='create-quiz'),
    path('create_question/',
         create_question, name='add-question'),
]
