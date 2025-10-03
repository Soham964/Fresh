import sqlite3
import os

# Navigate to the correct database path
db_path = 'fresh-backend/db.sqlite3'

if os.path.exists(db_path):
    print(f"Database found at: {db_path}")
    
    # Connect to database
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # Check if contact table exists
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table' AND name LIKE '%contact%';")
    tables = cursor.fetchall()
    print(f"Contact tables: {tables}")
    
    if tables:
        try:
            # Count total submissions
            cursor.execute("SELECT COUNT(*) FROM contact_contactsubmission;")
            count = cursor.fetchone()[0]
            print(f"Total contact submissions: {count}")
            
            # Get recent submissions
            cursor.execute("SELECT id, name, email, subject, created_at FROM contact_contactsubmission ORDER BY created_at DESC LIMIT 5;")
            records = cursor.fetchall()
            print("\nRecent submissions:")
            for record in records:
                print(f"ID: {record[0]}, Name: {record[1]}, Email: {record[2]}, Subject: {record[3]}, Date: {record[4]}")
                
        except Exception as e:
            print(f"Error querying contact submissions: {e}")
    
    conn.close()
else:
    print(f"Database not found at: {db_path}")