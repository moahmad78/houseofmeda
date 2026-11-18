with open('_nuxt/DIMlyTCg.js', 'r', encoding='utf-8') as f:
    js = f.read()

idx = js.find('items:[{id:"project-1"')
print(js[idx:idx+1200])
