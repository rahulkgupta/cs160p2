# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render_to_response, get_object_or_404
from django.template import RequestContext
from docs.models import Doc

from django.utils import simplejson


def home(request):
    docs = Doc.objects.all()
    doclist = list(docs)
    js_data = simplejson.dumps(doclist)
    return render_to_response('index.html', {'docs':docs, 'jsdocs': js_data},context_instance=RequestContext(request))
