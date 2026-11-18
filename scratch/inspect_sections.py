with open('index.html', 'r', encoding='utf-8') as f:
    c = f.read()

idx = c.find('</section>')
while idx != -1:
    print(c[idx:idx+200])
    print('-'*50)
    idx = c.find('</section>', idx+1)
