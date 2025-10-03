"""
URL configuration for fresh_backend project.
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    # Root URLs
    path('', views.home, name='home'),
    path('api/', views.api_root, name='api_root'),
    
    # Admin
    path('admin/', admin.site.urls),
    
    # API endpoints
    path('api/contact/', include('contact.urls')),
    path('api/products/', include('products.urls')),
    # path('api/distributors/', include('distributors.urls')),
    # path('api/orders/', include('orders.urls')),
    # path('api/partnerships/', include('partnerships.urls')),
    # path('api/faqs/', include('faqs.urls')),
]

# Serve media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
