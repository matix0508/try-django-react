from django.contrib import admin
from django.contrib.auth import logout
from django.contrib.auth.models import User
from django.contrib.auth.views import LogoutView
from django.urls import path, re_path, include
from django.views.generic import TemplateView

# Serializers define the API representation.
from rest_framework import serializers, viewsets, routers

from . import settings

urlpatterns = [
    path("admin/", admin.site.urls),
    path("logout", LogoutView.as_view(next_page=settings.LOGOUT_REDIRECT_URL), name='logout'),
    path("api/", include('api.urls')),
    path("api-auth/", include('rest_framework.urls', namespace='rest_framework')),
    re_path('', TemplateView.as_view(template_name="myapp/index.html")),
]
