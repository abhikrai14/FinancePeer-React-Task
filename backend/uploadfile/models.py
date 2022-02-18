from django.db import models

# Create your models here.
from django.core.validators import FileExtensionValidator 



class jsonfile(models.Model):
    name = models.CharField(max_length=255, default='Document_name')
    date = models.DateField(auto_now_add=True)
    createdby = models.CharField(max_length=30,default='user')
    myfile = models.FileField(validators=[FileExtensionValidator(['json'])])
   	

    def __str__(self):
        return self.name
