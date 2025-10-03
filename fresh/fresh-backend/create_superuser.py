#!/usr/bin/env python
import os
import django
from django.contrib.auth import get_user_model

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'fresh_backend.settings')
django.setup()

User = get_user_model()

if not User.objects.filter(username='admin').exists():
    User.objects.create_superuser('admin', 'admin@fresh.com', 'admin123')
    print('Superuser created successfully!')
else:
    print('Superuser already exists!')