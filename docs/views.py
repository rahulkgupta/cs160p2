# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render_to_response, get_object_or_404
from django.template import RequestContext
from docs.models import Doc
from datetime import datetime
from django.core import serializers
import json
from django.core.serializers.json import DjangoJSONEncoder 


DATETIME_FORMAT = '%Y-%m-%d %H:%M:%S'

def home(request):
    docs = Doc.objects.all()
    temp_output = serializers.serialize('python', docs)
    output = json.dumps(temp_output, cls=DjangoJSONEncoder)

    # for doc in docs:
    #     doc.date = datetime.strftime(docs['date'], DATETIME_FORMAT)

    return render_to_response('index.html', {'docs':docs, 'jsdocs': outputs},context_instance=RequestContext(request))
