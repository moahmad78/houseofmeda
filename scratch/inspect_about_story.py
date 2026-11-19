with open('about.html', 'r', encoding='utf-8') as f:
    c = f.read()

idx = c.find('class="story-row row-secondary"')
print('row-secondary at:', idx)
if idx != -1:
    print(c[idx-1000:idx+500])
