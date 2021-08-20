from django.contrib import admin
from django.contrib.auth.models import User
from django.urls import path, re_path, include
from django.views.generic import TemplateView

# Serializers define the API representation.
from rest_framework import serializers, viewsets, routers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'is_staff']


# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("users", include(router.urls)),
    path("api-auth", include('rest_framework.urls', namespace='rest_framework')),
    re_path('', TemplateView.as_view(template_name="myapp/index.html")),
]
