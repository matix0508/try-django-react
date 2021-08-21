from django.contrib.auth.models import User
from rest_framework import serializers

from .models import BlogPost, Project, Technology


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'is_staff', 'is_authenticated']


class BlogPostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = BlogPost
        fields = ['title', 'subtitle', 'text']


class ProjectSerializer(serializers.HyperlinkedModelSerializer):
    technologies = serializers.PrimaryKeyRelatedField(queryset=Technology.objects.all(), many=True)

    class Meta:
        model = Project
        fields = ['topic', 'description', 'link', 'technologies']


class TechnologySerializer(serializers.ModelSerializer):
    project_list = ProjectSerializer(many=True, read_only=True)

    class Meta:
        model = Technology
        fields = ('name', 'project_list')
