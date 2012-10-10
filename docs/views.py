# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render_to_response, get_object_or_404
from django.template import RequestContext
from docs.models import Doc
from django.utils import simplejson


def home(request):
    docs = Doc.objects.all().values()

    for doc in docs:
        doc.date = unicode(docs.date)

    js_data = simplejson.dumps(list(docs))
    return render_to_response('index.html', {'docs':docs, 'jsdocs': js_data},context_instance=RequestContext(request))
