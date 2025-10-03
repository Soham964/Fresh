from django.db import models
from django.utils import timezone

class FAQ(models.Model):
    CATEGORY_CHOICES = [
        ('general', 'General'),
        ('products', 'Products'),
        ('ordering', 'Ordering'),
        ('shipping', 'Shipping'),
        ('distributors', 'Distributors'),
        ('quality', 'Quality & Safety'),
    ]
    
    question = models.CharField(max_length=300)
    answer = models.TextField()
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='general')
    
    # Display and Management
    is_active = models.BooleanField(default=True)
    display_order = models.PositiveIntegerField(default=0)
    
    # Tracking
    view_count = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['category', 'display_order', 'question']
        verbose_name = "FAQ"
        verbose_name_plural = "FAQs"
    
    def __str__(self):
        return self.question[:100] + "..." if len(self.question) > 100 else self.question