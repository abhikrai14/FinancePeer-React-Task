from django.urls import path

from . import views

urlpatterns = [
    path('uploadfile/', views.storefile, name='storefile'),
    path('display/', views.display, name='display'),

]