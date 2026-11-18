with open('index.html', 'r', encoding='utf-8') as f:
    c = f.read()

idx = c.find('project-info')
while idx != -1:
    print(c[idx:idx+300])
    print('-'*40)
    idx = c.find('project-info', idx+1)
