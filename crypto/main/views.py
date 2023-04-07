from django.shortcuts import render
from .models import *

menu = {'menu': ['coins', 'featured', 'contact', 'about'],
        'feat': ['binance', 'latoken', 'btc', 'getio', 'ista']}




def index(req):

    return render(req, 'main/index.html', context={'menu': menu['menu'],
                                                   'feat': menu['feat'],
                                                   'feedback': Feedback.objects.all(),
                                                   })


def login(req):
    return render(req, 'main/login.html')


def pageError(req, exception):
    return render(req, 'main/404page.html' , context={'menu': menu['menu'],
                                                   'feat': menu['feat']})