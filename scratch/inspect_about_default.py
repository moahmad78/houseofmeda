with open('_nuxt/JBRSIB3X.js', 'r', encoding='utf-8') as f:
    js = f.read()

idx = js.find('showcaseImage')
print(js[idx-50:idx+600])
