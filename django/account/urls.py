from django.urls import path
from . import views

urlpatterns = [
    path('create_account/', views.create_account, name='create_account'),
    path('update_account/', views.update_account, name='update_account'),
]
