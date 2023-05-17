from django.urls import path, include
from . import views


urlpatterns = [   
    path('', views.comprar_entradas, name="comprar_entradas"),
    path('iniciar_pago/',views.iniciar_pago, name="iniciar_pago"),
    path('pago_exitoso/',views.pago_exitoso,name="pago_exitoso"),
]
