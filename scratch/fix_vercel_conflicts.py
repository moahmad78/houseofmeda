import os, glob

# 1. Delete newsletter.json (leaving api/forms/newsletter.js as the Vercel function)
newsletter_json = os.path.join('api', 'forms', 'newsletter.json')
if os.path.exists(newsletter_json):
    os.remove(newsletter_json)
    print(f'Deleted {newsletter_json}')

# 2. Delete all extensionless duplicates in api/
deleted_count = 0
for root, dirs, files in os.walk('api'):
    for f in files:
        if f.endswith('.json'):
            stem = f[:-5]
            no_ext = os.path.join(root, stem)
            if os.path.exists(no_ext) and os.path.isfile(no_ext):
                os.remove(no_ext)
                print(f'Deleted duplicate extensionless file: {no_ext}')
                deleted_count += 1

print(f'Total extensionless duplicates deleted: {deleted_count}')
