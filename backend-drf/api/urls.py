from django.urls import path
from accounts import views as UserViews
# from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
# from .views import StockPredictionAPIView


urlpatterns = [
    path('register/', UserViews.RegisterView.as_view()),
    
    
]