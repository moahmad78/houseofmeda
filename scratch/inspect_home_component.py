with open('_nuxt/Df6WdBJq.js', 'r', encoding='utf-8') as f:
    js = f.read()

idx = js.find('projects-list')
if idx != -1:
    print(js[idx-200:idx+300])
