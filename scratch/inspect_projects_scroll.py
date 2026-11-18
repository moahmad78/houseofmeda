with open('_nuxt/Df6WdBJq.js', 'r', encoding='utf-8') as f:
    js = f.read()

idx = js.find('3480')
print('3480 in Df6WdBJq.js:', idx)

idx2 = js.find('projects-container')
print('projects-container in Df6WdBJq.js:', idx2)
if idx2 != -1:
    print(js[idx2-100:idx2+300])
