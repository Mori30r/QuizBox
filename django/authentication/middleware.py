from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework import status

class RefreshTokenMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if not request.COOKIES.get('refresh_token'):
            return self.get_response(request)

        refresh_token = request.COOKIES.get('refresh_token')
        try:
            refresh = RefreshToken(refresh_token)
            access_token = str(refresh.access_token)
            request.META['HTTP_AUTHORIZATION'] = 'Bearer ' + access_token
        except Exception as e:
            error_message = str(e)
            return Response({'error': error_message}, status=status.HTTP_400_BAD_REQUEST)

        response = self.get_response(request)
        return response