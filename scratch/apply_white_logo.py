white_logo_css = """
/* House of Meda - White Navbar Logo exclusively for Home Page Hero Navbar */
.home-page .page-top-header-logo img,
.hero .page-top-header-logo img {
  filter: brightness(0) invert(1) !important;
  opacity: 0.95 !important;
}
"""

# 1. Update _nuxt/PageTopHeader.BvJ50k1h.css
with open('_nuxt/PageTopHeader.BvJ50k1h.css', 'r', encoding='utf-8') as f:
    css1 = f.read()
if 'White Navbar Logo exclusively' not in css1:
    css1 += '\n' + white_logo_css
    with open('_nuxt/PageTopHeader.BvJ50k1h.css', 'w', encoding='utf-8') as f:
        f.write(css1)
    print('Updated _nuxt/PageTopHeader.BvJ50k1h.css')

# 2. Update _nuxt/index.DW2uzkdI.css
with open('_nuxt/index.DW2uzkdI.css', 'r', encoding='utf-8') as f:
    css2 = f.read()
if 'White Navbar Logo exclusively' not in css2:
    css2 += '\n' + white_logo_css
    with open('_nuxt/index.DW2uzkdI.css', 'w', encoding='utf-8') as f:
        f.write(css2)
    print('Updated _nuxt/index.DW2uzkdI.css')

# 3. Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()
if 'White Navbar Logo exclusively' not in html:
    html = html.replace('</style>', white_logo_css + '</style>', 1)
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html)
    print('Updated index.html')
