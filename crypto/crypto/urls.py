from django.conf import settings

from django.contrib import admin
from django.urls import path, include, re_path
from main.views import *
from django.views.static import serve

urlpatterns = [
    re_path(r'static/(?P<path>.*)$', serve, {'document_root': settings.STATIC_ROOT}),
    path('admin/', admin.site.urls),
    path('', include('main.urls')),
]

handler404 = pageError