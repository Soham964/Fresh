from django.contrib import admin
from .models import Category, Product, ProductImage, ProductIngredient

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'created_at']
    search_fields = ['name']

class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1

class ProductIngredientInline(admin.TabularInline):
    model = ProductIngredient
    extra = 1

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'price', 'wholesale_price', 'inventory_count', 'is_active', 'featured']
    list_filter = ['category', 'is_active', 'featured', 'created_at']
    search_fields = ['name', 'description']
    prepopulated_fields = {'slug': ('name',)}
    list_editable = ['is_active', 'featured', 'inventory_count']
    inlines = [ProductImageInline, ProductIngredientInline]
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('name', 'slug', 'category', 'short_description', 'description')
        }),
        ('Pricing', {
            'fields': ('price', 'wholesale_price')
        }),
        ('Inventory', {
            'fields': ('inventory_count', 'min_stock_level')
        }),
        ('Status', {
            'fields': ('is_active', 'featured')
        }),
    )