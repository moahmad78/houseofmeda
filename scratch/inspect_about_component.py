with open('_nuxt/BDXYl7ac.js', 'r', encoding='utf-8') as f:
    js = f.read()

idx = js.find('slot-key":"showcase"')
print(js[idx+900:idx+1800])
