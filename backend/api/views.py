from django.contrib.auth import authenticate, login
from django.contrib.auth.models import AnonymousUser, User
from django.http import JsonResponse

# Create your views here.
from django.shortcuts import redirect


def current_user(request):
    user = request.user
    if isinstance(user, AnonymousUser):
        return JsonResponse({'user': None})
    return JsonResponse(
        {
            'user': user.username,
        }
    )


def validate_user(request):
    if request.user.is_authenticated:
        return redirect("/")
    user = authenticate(
        username=request.POST.get('username'),
        password=request.POST.get('password')
    )
    if user == request.user:
        return redirect("/api/")
    print(request.POST.get('username'))
    if user:
        login(request, user)
        return JsonResponse({"user": str(user)})
    return JsonResponse({'user': str(user)})


def reload(request):
    return JsonResponse({"OK": "OK"})
