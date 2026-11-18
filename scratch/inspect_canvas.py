with open('index.html', 'r', encoding='utf-8') as f:
    c = f.read()

idx = c.find('class="home-page-canvas"')
if idx != -1:
    print(c[idx:idx+1500])
