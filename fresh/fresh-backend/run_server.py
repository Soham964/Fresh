#!/usr/bin/env python
import os
import django
from django.core.management import execute_from_command_line

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'fresh_backend.settings')

if __name__ == '__main__':
    execute_from_command_line(['manage.py', 'runserver', '8000'])