from django.contrib import admin
from .models import  UserBaseQuizBox

class UserAdmin(admin.ModelAdmin):
    list_display = ['username','first_name','last_name',
                    'date_of_birth','phone_number','role']
    

admin.site.register(UserBaseQuizBox, UserAdmin)