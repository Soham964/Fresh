from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import Product, Category

def category_list(request):
    """
    List all categories
    """
    categories = Category.objects.all()
    data = [{
        'id': cat.id,
        'name': cat.name,
        'description': cat.description
    } for cat in categories]
    
    return JsonResponse({'categories': data})

def product_list(request):
    """
    List all products with filtering
    """
    products = Product.objects.filter(is_active=True)
    
    # Filter by category if provided
    category_id = request.GET.get('category')
    if category_id:
        products = products.filter(category_id=category_id)
    
    # Filter featured products
    featured = request.GET.get('featured')
    if featured == 'true':
        products = products.filter(featured=True)
    
    # Search functionality
    search = request.GET.get('search')
    if search:
        products = products.filter(
            name__icontains=search
        ) | products.filter(
            description__icontains=search
        )
    
    data = []
    for product in products:
        primary_image = product.images.filter(is_primary=True).first()
        data.append({
            'id': product.id,
            'name': product.name,
            'slug': product.slug,
            'category': {
                'id': product.category.id,
                'name': product.category.name
            },
            'short_description': product.short_description,
            'price': str(product.price),
            'is_in_stock': product.is_in_stock,
            'featured': product.featured,
            'primary_image': primary_image.image.url if primary_image else None
        })
    
    return JsonResponse({'products': data})

def product_detail(request, slug):
    """
    Get product details by slug
    """
    product = get_object_or_404(Product, slug=slug, is_active=True)
    
    # Get all images
    images = [{
        'id': img.id,
        'image': img.image.url,
        'alt_text': img.alt_text,
        'is_primary': img.is_primary
    } for img in product.images.all()]
    
    # Get ingredients
    ingredients = [{
        'id': ing.id,
        'name': ing.name,
        'percentage': str(ing.percentage) if ing.percentage else None,
        'is_natural': ing.is_natural
    } for ing in product.ingredients.all()]
    
    data = {
        'id': product.id,
        'name': product.name,
        'slug': product.slug,
        'category': {
            'id': product.category.id,
            'name': product.category.name,
            'description': product.category.description
        },
        'description': product.description,
        'short_description': product.short_description,
        'price': str(product.price),
        'wholesale_price': str(product.wholesale_price),
        'inventory_count': product.inventory_count,
        'is_in_stock': product.is_in_stock,
        'is_low_stock': product.is_low_stock,
        'featured': product.featured,
        'images': images,
        'ingredients': ingredients,
        'created_at': product.created_at.isoformat()
    }
    
    return JsonResponse({'product': data})

def featured_products(request):
    """
    List featured products
    """
    products = Product.objects.filter(is_active=True, featured=True)
    
    data = []
    for product in products:
        primary_image = product.images.filter(is_primary=True).first()
        data.append({
            'id': product.id,
            'name': product.name,
            'slug': product.slug,
            'category': {
                'id': product.category.id,
                'name': product.category.name
            },
            'short_description': product.short_description,
            'price': str(product.price),
            'is_in_stock': product.is_in_stock,
            'featured': product.featured,
            'primary_image': primary_image.image.url if primary_image else None
        })
    
    return JsonResponse({'products': data})