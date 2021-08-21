from django.urls import include, path
from rest_framework import routers

from .viewsets import UserViewSet, BlogPostViewSet, TechnologyViewSet, ProjectViewSet
from .views import *

app_name = 'api'
# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'blog_posts', BlogPostViewSet)
router.register(r'technologies', TechnologyViewSet)
router.register(r'projects', ProjectViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("current_user", current_user, name="current_user"),
    path("validate_user", validate_user, name="validate"),
]
