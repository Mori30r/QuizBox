from django.urls import path
from . import views

urlpatterns = [
    path("signup/", views.SignUpView.as_view(), name="signup"),
    path("login/", views.LoginView.as_view(), name="login"),
    path('changepassword/', views.UserChangePasswordView.as_view(), name='changepassword'),
    path('send-reset-password-email/', views.SendPasswordResetEmailView.as_view(), name='send-reset-password-email'),
    path('reset-password/<uid>/<token>/', views.UserPasswordResetView.as_view(), name='reset-password'),
    
]




