from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class DistributorApplication(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending Review'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
        ('under_review', 'Under Review'),
    ]
    
    BUSINESS_TYPE_CHOICES = [
        ('retail', 'Retail'),
        ('wholesale', 'Wholesale'),
        ('both', 'Both Retail & Wholesale'),
    ]
    
    # Personal Information
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    
    # Business Information
    business_name = models.CharField(max_length=200)
    business_type = models.CharField(max_length=20, choices=BUSINESS_TYPE_CHOICES)
    business_address = models.TextField()
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    pincode = models.CharField(max_length=10)
    
    # Experience and Investment
    years_of_experience = models.PositiveIntegerField()
    investment_capacity = models.DecimalField(max_digits=12, decimal_places=2)
    expected_monthly_sales = models.DecimalField(max_digits=12, decimal_places=2)
    
    # Additional Information
    why_fresh = models.TextField(help_text="Why do you want to partner with Fresh?")
    additional_info = models.TextField(blank=True, null=True)
    
    # Application Status
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(default=timezone.now)
    reviewed_at = models.DateTimeField(blank=True, null=True)
    reviewed_by = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True)
    review_notes = models.TextField(blank=True, null=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.business_name} - {self.full_name} ({self.status})"

class Distributor(models.Model):
    """Approved distributors"""
    application = models.OneToOneField(DistributorApplication, on_delete=models.CASCADE)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    distributor_id = models.CharField(max_length=20, unique=True)
    commission_rate = models.DecimalField(max_digits=5, decimal_places=2, default=15.00)
    is_active = models.BooleanField(default=True)
    joined_date = models.DateTimeField(default=timezone.now)
    
    def __str__(self):
        return f"{self.application.business_name} (ID: {self.distributor_id})"