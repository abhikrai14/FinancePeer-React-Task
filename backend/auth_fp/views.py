from django.shortcuts import render
from django.db import connection

from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import sys
from .models import user_fp
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from rest_framework.authtoken.models import Token


@csrf_exempt
def checkuser(request):
    

    new_str = request.body.decode('utf-8')
    usr = json.loads(new_str)
    us = usr['username']
    ps = usr['password']
    user = User.objects.filter(username=us, password=ps).first()
    print(authenticate(username=us,password=ps))
    print(user)

    token = Token.objects.get_or_create(user=user)
        # tk = token.key
    tk ='dsf'
    print(token[0])
    tk=str(token[0])
    if(request.method=='POST'):
        print('sup')
    if user is not None:
        # A backend authenticated the credentials
        em = user.email
        obj = {'username':us,'email':em,'token':tk}

        print('authboth')
        print(login(request,user))
        return JsonResponse(obj)

    else:
        # No backend authenticated the credentials
        return HttpResponse(status=400)


@csrf_exempt
def adduser(request):
     
    new_str = request.body.decode('utf-8')
    usr = json.loads(new_str)
    em = usr['email']
    us = usr['username']
    ps = usr['password']
    if User.objects.filter(email=em).count()==0:      # if unique email address --> add user
        p = User(username=us,email=em,password=ps)
        p.save()
        return HttpResponse()

    else:                                                # else bad request
        return HttpResponse(status=400)


def logout(request):
    logout()
    return HttpResponse()

