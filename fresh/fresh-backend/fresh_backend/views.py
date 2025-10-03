from django.http import JsonResponse
from django.shortcuts import render

def api_root(request):
    """
    API Root - Welcome page with available endpoints
    """
    api_endpoints = {
        'message': 'Welcome to Fresh Beverages API!',
        'version': '1.0',
        'endpoints': {
            'products': {
                'list_all': '/api/products/',
                'categories': '/api/products/categories/',
                'featured': '/api/products/featured/',
                'detail': '/api/products/{slug}/',
            },
            'contact': {
                'submit': '/api/contact/submit/ (POST)',
            },
            'admin': '/admin/',
        },
        'sample_data': {
            'products_count': 5,
            'categories_count': 5,
            'featured_products': 3,
        },
        'authentication': {
            'admin_username': 'temp_admin',
            'admin_password': 'temp123456',
        }
    }
    
    return JsonResponse(api_endpoints, json_dumps_params={'indent': 2})

def home(request):
    """
    Beautiful home page with API documentation
    """
    return render(request, 'home.html')