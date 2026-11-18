with open('_nuxt/Df6WdBJq.js', 'r', encoding='utf-8') as f:
    js = f.read()

idx = js.find('t("div",go,[')
print(js[idx-60:idx+60])
