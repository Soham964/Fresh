from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from django.core.management import call_command
import os

class Command(BaseCommand):
    help = 'Create temporary superuser and run server'

    def handle(self, *args, **options):
        User = get_user_model()
        
        # Create temporary superuser if it doesn't exist
        if not User.objects.filter(username='temp_admin').exists():
            User.objects.create_superuser(
                username='temp_admin',
                email='temp@fresh.com',
                password='temp123456'
            )
            self.stdout.write(
                self.style.SUCCESS('Temporary superuser created!')
            )
            self.stdout.write('Username: temp_admin')
            self.stdout.write('Password: temp123456')
        else:
            self.stdout.write('Temporary superuser already exists!')
        
        # Run the server
        self.stdout.write('Starting development server...')
        call_command('runserver', '8000')