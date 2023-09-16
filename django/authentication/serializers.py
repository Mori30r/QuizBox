from rest_framework import serializers
from .models import UserBaseQuizBox
from rest_framework.authtoken.models import Token
from rest_framework import serializers
from .models import UserBaseQuizBox
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import smart_str, force_bytes, DjangoUnicodeDecodeError
from .utils import Util

class UserSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(write_only=True, required=False)
    date_of_birth = serializers.DateField(required=False)
    phone_number = serializers.CharField(max_length=12, required=False)

    def validate(self, data):
        password = data.get('password')
        password2 = data.get('password2')
        email = data.get('email')

        if not password:
            raise serializers.ValidationError("The password field is required.")

        if password != password2:
            raise serializers.ValidationError("Passwords do not match.")

        elif not email:
            raise serializers.ValidationError("The email field is required.")

        return data

    def create(self, validated_data):
        password = validated_data.get('password')

        if not password:
            raise serializers.ValidationError("The password field is required.")

        user = UserBaseQuizBox.objects.create_user(
            username=validated_data.get('email'),
            password=password,
            first_name=validated_data.get('first_name'),
            last_name=validated_data.get('last_name'),
            role=validated_data.get('role'),
            date_of_birth=validated_data.get('date_of_birth'),
            phone_number=validated_data.get('phone_number')
        )
        user.set_password(password)
        user.save()
        Token.objects.create(user=user)

        return user

    class Meta:
        model = UserBaseQuizBox
        fields = ['id', 'email', 'first_name', 'last_name', 'password2', 'role', 'date_of_birth', 'phone_number']
        read_only_fields = ['username',]
        
    
class UserChangePasswordSerializer(serializers.Serializer):
    password = serializers.CharField(max_length=255, style={'input_type':'password'}, write_only=True)
    password2 = serializers.CharField(max_length=255, style={'input_type':'password'}, write_only=True)
    
    class Meta:
        fields = ['password', 'password2']

    def validate(self, attrs):
        password = attrs.get('password')
        password2 = attrs.get('password2')
        user = self.context.get('user')
        
        if password != password2: 
            raise serializers.ValidationError("Password and Confirm Password doesn't match")
        
        user.set_password(password)
        user.save()
        return attrs
        


class SendPasswordResetEmailSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=255)
    class Meta:
        fields = ['email']

    def validate(self, attrs):
        email = attrs.get('email')
        if UserBaseQuizBox.objects.filter(username=email).exists():
            user = UserBaseQuizBox.objects.get(username=email)

            uid = urlsafe_base64_encode(force_bytes(user.id))
            print('Encoded UID', uid)
            token = PasswordResetTokenGenerator().make_token(user)
            print('Password Reset Token', token)
            link = 'http://localhost:8000/api/auth/reset/'+uid+'/'+token
            print('Password Reset Link', link)
            # Send EMail
            body = 'Click Following Link to Reset Your Password '+link
            data = {
                'subject':'Reset Your Password',
                'body':body,
                'to_email':user.email
            }
            Util.send_email(data)
            
            return attrs
        else:
            raise serializers.ValidationError('You are not a Registered User')
        
        
        
class UserPasswordResetSerializer(serializers.Serializer):
    password = serializers.CharField(max_length=255, style={'input_type':'password'}, write_only=True)
    password2 = serializers.CharField(max_length=255, style={'input_type':'password'}, write_only=True)
    class Meta:
        fields = ['password', 'password2']

    def validate(self, attrs):
        try:
            password = attrs.get('password')
            password2 = attrs.get('password2')
            uid = self.context.get('uid')
            token = self.context.get('token')
            if password != password2:
                raise serializers.ValidationError("Password and Confirm Password doesn's match")
            id = smart_str(urlsafe_base64_decode(uid))
            user = UserBaseQuizBox.objects.get(id=id)
            if not PasswordResetTokenGenerator().check_token(user, token):
                raise serializers.ValidationError('Token is not Valid or Expired')
            user.set_password(password)
            user.save()
            return attrs
        except DjangoUnicodeDecodeError as identifier:
            PasswordResetTokenGenerator().check_token(user, token)
            raise serializers.ValidationError('Token is not Valid or Expired')