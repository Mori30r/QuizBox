from django.urls import path
from .views import create_quiz

urlpatterns = [
    path('create_quiz/', create_quiz, name='create-quiz')
]
