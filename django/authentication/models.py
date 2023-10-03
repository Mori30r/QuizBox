from django.db import models
from django.contrib.auth.models import AbstractUser


class UserBaseQuizBox(AbstractUser):
    ROLE_CHOICES = [
        ('Teacher', 'Teacher'),
        ('Student', 'Student')
    ]

    role = models.CharField(max_length=10, choices=ROLE_CHOICES)
    date_of_birth = models.DateField(blank=True, null=True)
    phone_number = models.CharField(max_length=12, blank=True, null=True)

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = 'User Base QuizBox'
        verbose_name_plural = 'User Base QuizBoxes'
