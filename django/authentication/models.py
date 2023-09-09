from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission
from account.models import AccountProfile


class UserBaseQuizBox(AbstractUser):
    ROLE_CHOICES = [
        ('Teacher', 'Teacher'),
        ('Student', 'Student')
    ]
    
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)
    account = models.OneToOneField(AccountProfile, blank=True, null=True, on_delete=models.CASCADE, related_name='user_quiz_box')
    user_groups = models.ManyToManyField(Group, verbose_name='Groups', blank=True, help_text='The groups this user belongs to.', related_name='user_quiz_boxes')
    user_permissions = models.ManyToManyField(Permission, verbose_name='User permissions', blank=True, help_text='Specific permissions for this user.', related_name='user_quiz_boxes_custom')

    def __str__(self):
        return self.username
    
    class Meta:
        verbose_name = 'User Base QuizBox'
        verbose_name_plural = 'User Base QuizBoxes'