from django.contrib import admin
from .models import  UserBaseQuizBox

class UserBaseQuizBoxAdmin(admin.ModelAdmin):
    list_display = ['username', 'role', 'phone_number']

admin.site.register(UserBaseQuizBox, UserBaseQuizBoxAdmin)