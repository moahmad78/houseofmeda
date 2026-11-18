with open('_nuxt/index.DW2uzkdI.css', 'r', encoding='utf-8') as f:
    c = f.read()

idx = c.find('.home-page-shell')
print(c[idx:idx+400])
