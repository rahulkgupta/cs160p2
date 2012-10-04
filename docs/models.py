from django.db import models

# Create your models here.

class Doc(models.Model):
    java = models.BooleanField()
    design = models.BooleanField()
    math = models.BooleanField()
    name = models.CharField(max_length=200)
    date = models.DateTimeField()
    author = = models.CharField(max_length=200)
