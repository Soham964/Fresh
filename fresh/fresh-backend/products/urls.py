from django.urls import path
from . import views

app_name = 'products'

urlpatterns = [
    path('categories/', views.category_list, name='category_list'),
    path('', views.product_list, name='product_list'),
    path('featured/', views.featured_products, name='featured_products'),
    path('<slug:slug>/', views.product_detail, name='product_detail'),
]