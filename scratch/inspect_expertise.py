with open('index.html', 'r', encoding='utf-8') as f:
    c = f.read()

idx = c.find('class="expertise-stage"')
if idx != -1:
    print(c[idx+3200:idx+4500])
