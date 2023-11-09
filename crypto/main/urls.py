from django.urls import path
from . import views


urlpatterns = [

    path('', views.index, name='main'),
    path('comment', views.comment, name='comm'),
    path('login', views.login, name='login'),
]