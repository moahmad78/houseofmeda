with open('index.html', 'r', encoding='utf-8') as f:
    c = f.read()

import re
matches = re.findall(r'(\.[a-zA-Z0-9_-]*(?:projects|canvas|stage)[^{]*\{[^}]*\})', c)
for m in matches[:15]:
    print(m)
