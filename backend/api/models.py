from django.db import models


# Create your models here.

class BlogPost(models.Model):
    title = models.CharField(max_length=50)
    subtitle = models.CharField(max_length=100)
    text = models.CharField(max_length=5000)

    def __str__(self) -> str:
        return self.title


class Technology(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name


class Project(models.Model):
    topic = models.CharField(max_length=20)
    description = models.CharField(max_length=1000)
    technologies = models.ManyToManyField(Technology)
    link = models.CharField(max_length=500)

    def __str__(self):
        return self.topic
