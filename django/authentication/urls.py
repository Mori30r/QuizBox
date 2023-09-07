from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import RegisterViewSet, UserLogInView


app_name = 'authentication'

router = DefaultRouter()
router.register('register', RegisterViewSet, basename='register')


urlpatterns = [
    path('api/', include(router.urls)),
    path('login/', UserLogInView.as_view(), name='user-login'),
]