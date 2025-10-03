from django.db import models
from django.utils import timezone

class ContactSubmission(models.Model):
    SUBJECT_CHOICES = [
        ('general', 'General Inquiry'),
        ('product', 'Product Information'),
        ('distributor', 'Distributor Partnership'),
        ('feedback', 'Customer Feedback'),
        ('support', 'Customer Support'),
    ]
    
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True, null=True)
    subject = models.CharField(max_length=20, choices=SUBJECT_CHOICES)
    message = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
    is_resolved = models.BooleanField(default=False)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.name} - {self.subject} ({self.created_at.strftime('%Y-%m-%d')})"