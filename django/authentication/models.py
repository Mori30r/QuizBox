from django.db import models
from django.contrib.auth.models import AbstractUser


class UserBaseQuizBox(AbstractUser):
    ROLE_CHOICES = [
        ('Teacher', 'Teacher'),
        ('Student', 'Student')
    ]
    
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)
    
    
    def __str__(self):
        return self.username




