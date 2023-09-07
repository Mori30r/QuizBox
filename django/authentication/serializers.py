from rest_framework import serializers
from .models import UserBaseQuizBox
from rest_framework.authtoken.models import Token
from rest_framework import serializers
from .models import UserBaseQuizBox
from django.contrib.auth import authenticate

class UserSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(write_only=True, required=False)

    def validate(self, data):
        password = data.get('password')
        password2 = data.get('password2')

        if not password:
            raise serializers.ValidationError("The password field is required.")

        if password != password2:
            raise serializers.ValidationError("Passwords do not match.")

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
            email=validated_data.get('email'),
            role=validated_data.get('role')
        )
        user.set_password(password)
        user.save()
        Token.objects.create(user=user)
        
        return user

    class Meta:
        model = UserBaseQuizBox
        fields = ('id', 'username', 'first_name', 'last_name', 'email', 'password', 'password2', 'role')
        read_only_fields = ('username',)
        

class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        username = data.get('username')
        password = data.get('password')

        if username and password:
            user = authenticate(username=username, password=password)
            if not user:
                raise serializers.ValidationError('Invalid credentials')
        else:
            raise serializers.ValidationError('Username and password are required')

        data['user'] = user
        
        return data