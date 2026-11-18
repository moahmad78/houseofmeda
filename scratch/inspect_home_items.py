with open('index.html', 'r', encoding='utf-8') as f:
    c = f.read()

idx = c.find('projects-container')
if idx != -1:
    print(c[idx:idx+3500])
