from django.shortcuts import render
from django.db import connection
from django.core import serializers
from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import sys
from .models import jsonfile
from django.core.files.storage import default_storage
from rest_framework.authtoken.models import Token

import os


@csrf_exempt
def storefile(request):
    name = 'testnaem'
    print(request.user)
    tk = request.POST['token']
    print(tk)
    data = {'token': tk}
    # getting user from token provided in request
    user = Token.objects.get(key=tk).user

    if user:
    # Do something for authenticated users.
        createdby = user.username
        name=request.POST['filename']
        print(name)
        file = request.FILES['myFile']
        # print(type(file))

        instance = jsonfile(name=name,myfile=file,createdby=createdby)
        instance.save()

        return HttpResponse()

    else:
    # Do something for anonymous users.
        print('notauthenticated')
        return HttpResponse(status=400)

    



@csrf_exempt
def display(request):
    
    obj = list(jsonfile.objects.values())   # fetching user from dataase

    for i in obj:
        new_file=i['myfile']
        f = default_storage.open(os.path.join(new_file), 'r')
        data = f.read()
        f.close()
        i['myfile']=json.dumps(data)
    # print(obj)
    # data = serializers.serialize("python", jsonfile.objects.all(), indent=4)
    # jsonfile.objects.first()
    # print(type(data))
    return JsonResponse(obj,safe=False)
    # return HttpResponse()