from django.db import models
from django.utils import timezone

class Partner(models.Model):
    PARTNER_TYPE_CHOICES = [
        ('technology', 'Technology Partner'),
        ('supplier', 'Supplier'),
        ('distributor', 'Distribution Partner'),
        ('research', 'Research Partner'),
        ('marketing', 'Marketing Partner'),
    ]
    
    name = models.CharField(max_length=200)
    partner_type = models.CharField(max_length=20, choices=PARTNER_TYPE_CHOICES)
    description = models.TextField()
    logo = models.ImageField(upload_to='partners/', blank=True, null=True)
    website = models.URLField(blank=True, null=True)
    contact_email = models.EmailField(blank=True, null=True)
    
    # Partnership Details
    partnership_start_date = models.DateField()
    is_active = models.BooleanField(default=True)
    is_featured = models.BooleanField(default=False)
    
    # Display Order
    display_order = models.PositiveIntegerField(default=0)
    
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['display_order', 'name']
    
    def __str__(self):
        return f"{self.name} ({self.get_partner_type_display()})"

class Partnership(models.Model):
    """Details about specific partnership projects or collaborations"""
    title = models.CharField(max_length=200)
    partner = models.ForeignKey(Partner, on_delete=models.CASCADE, related_name='partnerships')
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    is_ongoing = models.BooleanField(default=True)
    
    # Results/Achievements
    achievements = models.TextField(blank=True, null=True)
    impact = models.TextField(blank=True, null=True)
    
    created_at = models.DateTimeField(default=timezone.now)
    
    class Meta:
        ordering = ['-start_date']
    
    def __str__(self):
        return f"{self.title} - {self.partner.name}"