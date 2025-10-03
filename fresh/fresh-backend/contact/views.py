from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.core.mail import send_mail
from django.conf import settings
import json
from .models import ContactSubmission

@csrf_exempt
@require_http_methods(["POST"])
def submit_contact_form(request):
    """
    Submit a contact form
    """
    print(f"Received request: {request.method} {request.get_full_path()}")
    print(f"Request headers: {dict(request.headers)}")
    print(f"Request body: {request.body}")
    
    try:
        data = json.loads(request.body)
        
        # Validate required fields
        required_fields = ['name', 'email', 'subject', 'message']
        for field in required_fields:
            if not data.get(field):
                return JsonResponse({
                    'message': f'{field.title()} is required.',
                    'success': False
                }, status=400)
        
        # Create contact submission
        contact_submission = ContactSubmission.objects.create(
            name=data['name'].strip().title(),
            email=data['email'].lower(),
            phone=data.get('phone', ''),
            subject=data['subject'],
            message=data['message'].strip()
        )
        
        # Send email notification (optional)
        try:
            subject = f"New Contact Form Submission - {contact_submission.get_subject_display()}"
            message = f"""
            New contact form submission received:
            
            Name: {contact_submission.name}
            Email: {contact_submission.email}
            Phone: {contact_submission.phone or 'Not provided'}
            Subject: {contact_submission.get_subject_display()}
            
            Message:
            {contact_submission.message}
            
            Submitted at: {contact_submission.created_at}
            """
            
            print(f"Email would be sent: {subject}")  # For development
            
        except Exception as e:
            print(f"Email sending failed: {e}")
        
        return JsonResponse({
            'message': 'Contact form submitted successfully!',
            'success': True,
            'data': {
                'id': contact_submission.id,
                'name': contact_submission.name,
                'email': contact_submission.email,
                'subject': contact_submission.subject,
                'created_at': contact_submission.created_at.isoformat()
            }
        }, status=201)
    
    except json.JSONDecodeError:
        return JsonResponse({
            'message': 'Invalid JSON data.',
            'success': False
        }, status=400)
    
    except Exception as e:
        return JsonResponse({
            'message': 'An error occurred while processing your request.',
            'success': False
        }, status=500)