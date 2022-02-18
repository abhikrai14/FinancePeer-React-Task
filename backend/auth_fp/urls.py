from django.urls import path

from . import views

urlpatterns = [
    path('checkuser/', views.checkuser, name='checkuser'),
    path('adduser/', views.adduser, name='adduser'),
]