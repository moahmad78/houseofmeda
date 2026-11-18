with open('_nuxt/Df6WdBJq.js', 'r', encoding='utf-8') as f:
    js = f.read()

idx = js.find('t("div",ho,')
print(js[idx-50:idx+600])
