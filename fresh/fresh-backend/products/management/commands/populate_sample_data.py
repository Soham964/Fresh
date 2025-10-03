from django.core.management.base import BaseCommand
from products.models import Category, Product, ProductIngredient
from faqs.models import FAQ
from decimal import Decimal

class Command(BaseCommand):
    help = 'Populate database with sample data'

    def handle(self, *args, **options):
        self.stdout.write('Creating sample data...')
        
        # Create categories
        categories_data = [
            {'name': 'Citrus', 'description': 'Fresh citrus-based beverages'},
            {'name': 'Berry', 'description': 'Berry-infused natural drinks'},
            {'name': 'Tropical', 'description': 'Exotic tropical fruit beverages'},
            {'name': 'Herbal', 'description': 'Natural herbal and botanical drinks'},
            {'name': 'Energy', 'description': 'Natural energy boosting beverages'},
        ]
        
        categories = {}
        for cat_data in categories_data:
            category, created = Category.objects.get_or_create(
                name=cat_data['name'],
                defaults={'description': cat_data['description']}
            )
            categories[cat_data['name']] = category
            if created:
                self.stdout.write(f'Created category: {category.name}')
        
        # Create products
        products_data = [
            {
                'name': 'Orange Fresh',
                'category': 'Citrus',
                'short_description': 'Pure orange juice with natural pulp',
                'description': 'Made from freshly squeezed oranges, this beverage contains natural pulp and is rich in Vitamin C. Perfect for breakfast or as a refreshing drink any time of day.',
                'price': Decimal('4.99'),
                'wholesale_price': Decimal('3.50'),
                'inventory_count': 150,
                'featured': True,
                'ingredients': [
                    {'name': 'Fresh Orange Juice', 'percentage': Decimal('95.0'), 'is_natural': True},
                    {'name': 'Natural Orange Pulp', 'percentage': Decimal('4.0'), 'is_natural': True},
                    {'name': 'Citric Acid', 'percentage': Decimal('1.0'), 'is_natural': True},
                ]
            },
            {
                'name': 'Berry Blast',
                'category': 'Berry',
                'short_description': 'Mixed berry antioxidant powerhouse',
                'description': 'A delicious blend of strawberries, blueberries, and raspberries packed with antioxidants and natural sweetness.',
                'price': Decimal('5.49'),
                'wholesale_price': Decimal('3.85'),
                'inventory_count': 120,
                'featured': True,
                'ingredients': [
                    {'name': 'Strawberry Juice', 'percentage': Decimal('40.0'), 'is_natural': True},
                    {'name': 'Blueberry Juice', 'percentage': Decimal('30.0'), 'is_natural': True},
                    {'name': 'Raspberry Juice', 'percentage': Decimal('25.0'), 'is_natural': True},
                    {'name': 'Natural Flavoring', 'percentage': Decimal('5.0'), 'is_natural': True},
                ]
            },
            {
                'name': 'Tropical Paradise',
                'category': 'Tropical',
                'short_description': 'Exotic mango and pineapple fusion',
                'description': 'Transport yourself to a tropical island with this exotic blend of mango, pineapple, and passion fruit.',
                'price': Decimal('5.99'),
                'wholesale_price': Decimal('4.20'),
                'inventory_count': 80,
                'featured': False,
                'ingredients': [
                    {'name': 'Mango Puree', 'percentage': Decimal('50.0'), 'is_natural': True},
                    {'name': 'Pineapple Juice', 'percentage': Decimal('35.0'), 'is_natural': True},
                    {'name': 'Passion Fruit Juice', 'percentage': Decimal('15.0'), 'is_natural': True},
                ]
            },
            {
                'name': 'Green Energy',
                'category': 'Energy',
                'short_description': 'Natural green tea energy boost',
                'description': 'A refreshing blend of green tea, ginseng, and natural caffeine for a healthy energy boost without the crash.',
                'price': Decimal('4.49'),
                'wholesale_price': Decimal('3.15'),
                'inventory_count': 200,
                'featured': True,
                'ingredients': [
                    {'name': 'Green Tea Extract', 'percentage': Decimal('60.0'), 'is_natural': True},
                    {'name': 'Ginseng Extract', 'percentage': Decimal('20.0'), 'is_natural': True},
                    {'name': 'Natural Caffeine', 'percentage': Decimal('15.0'), 'is_natural': True},
                    {'name': 'Honey', 'percentage': Decimal('5.0'), 'is_natural': True},
                ]
            },
            {
                'name': 'Lemon Mint Cooler',
                'category': 'Herbal',
                'short_description': 'Refreshing lemon and mint combination',
                'description': 'A cooling blend of fresh lemon juice and mint leaves, perfect for hot summer days.',
                'price': Decimal('3.99'),
                'wholesale_price': Decimal('2.80'),
                'inventory_count': 180,
                'featured': False,
                'ingredients': [
                    {'name': 'Fresh Lemon Juice', 'percentage': Decimal('70.0'), 'is_natural': True},
                    {'name': 'Mint Extract', 'percentage': Decimal('25.0'), 'is_natural': True},
                    {'name': 'Natural Sweetener', 'percentage': Decimal('5.0'), 'is_natural': True},
                ]
            },
        ]
        
        for product_data in products_data:
            ingredients_data = product_data.pop('ingredients')
            category_name = product_data.pop('category')
            product_data['category'] = categories[category_name]
            
            try:
                product, created = Product.objects.get_or_create(
                    name=product_data['name'],
                    defaults=product_data
                )
            except Exception as e:
                # If product already exists, skip it
                self.stdout.write(f'Product {product_data["name"]} already exists, skipping...')
                continue
            
            if created:
                self.stdout.write(f'Created product: {product.name}')
                
                # Add ingredients
                for ing_data in ingredients_data:
                    ingredient = ProductIngredient.objects.create(
                        product=product,
                        **ing_data
                    )
                    self.stdout.write(f'  Added ingredient: {ingredient.name}')
        
        # Create FAQs
        faqs_data = [
            {
                'question': 'Are your beverages 100% natural?',
                'answer': 'Yes, all our beverages are made from natural ingredients with no artificial preservatives, colors, or flavors.',
                'category': 'ingredients'
            },
            {
                'question': 'How long do your beverages stay fresh?',
                'answer': 'Our beverages have a shelf life of 6 months when stored in a cool, dry place. Once opened, consume within 3 days.',
                'category': 'storage'
            },
            {
                'question': 'Do you offer wholesale pricing?',
                'answer': 'Yes, we offer competitive wholesale pricing for bulk orders. Contact us for a custom quote based on your needs.',
                'category': 'pricing'
            },
            {
                'question': 'What is your minimum order quantity?',
                'answer': 'For retail customers, there is no minimum order. For wholesale, the minimum order is 50 units per product.',
                'category': 'ordering'
            },
            {
                'question': 'Do you ship nationwide?',
                'answer': 'Yes, we ship to all 50 states. Shipping costs vary based on location and order size.',
                'category': 'shipping'
            },
        ]
        
        for faq_data in faqs_data:
            faq, created = FAQ.objects.get_or_create(
                question=faq_data['question'],
                defaults=faq_data
            )
            if created:
                self.stdout.write(f'Created FAQ: {faq.question[:50]}...')
        
        self.stdout.write(self.style.SUCCESS('Sample data created successfully!'))