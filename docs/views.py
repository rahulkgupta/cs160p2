# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render_to_response, get_object_or_404
from django.template import RequestContext
from docs.models import Doc


def home(request):
    docs = Doc.objects.all()
    return render_to_response('index.html', {'docs':docs},context_instance=RequestContext(request))
