import re

# 1. CSS to add
hom_css = """
/* House of Meda - Signature 4 Services Grid on Home Page */
.hom-services-grid {
  display: grid !important;
  grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
  gap: 24px !important;
  width: 100% !important;
  max-width: 1632px !important;
  margin: 40px 0 60px 0 !important;
  box-sizing: border-box !important;
}
.hom-service-card {
  background: #fbfaf8 !important;
  border: 1px solid rgba(112, 83, 53, 0.2) !important;
  border-radius: 8px !important;
  padding: 32px 26px !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between !important;
  min-height: 295px !important;
  transition: all 0.32s cubic-bezier(0.16, 1, 0.3, 1) !important;
  position: relative !important;
  box-sizing: border-box !important;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03) !important;
}
.hom-service-card:hover {
  transform: translateY(-6px) !important;
  border-color: rgba(112, 83, 53, 0.65) !important;
  border-radius: 8px 8px 8px 36px !important;
  box-shadow: 0 22px 44px -12px rgba(112, 83, 53, 0.18) !important;
  background: #ffffff !important;
}
.hom-service-card__top {
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  margin-bottom: 22px !important;
}
.hom-service-num {
  font-family: 'Fraunces', serif !important;
  font-style: italic !important;
  font-size: 26px !important;
  color: #705335 !important;
  line-height: 1 !important;
  font-weight: 500 !important;
}
.hom-service-tag {
  font-family: 'Maison Neue', sans-serif !important;
  font-size: 10px !important;
  letter-spacing: 1.5px !important;
  text-transform: uppercase !important;
  color: rgba(112, 83, 53, 0.9) !important;
  font-weight: 600 !important;
  background: rgba(112, 83, 53, 0.09) !important;
  padding: 4px 10px !important;
  border-radius: 20px !important;
}
.hom-service-title {
  font-family: 'Maison Neue', sans-serif !important;
  font-size: 21px !important;
  font-weight: 500 !important;
  letter-spacing: -0.5px !important;
  margin: 0 0 6px 0 !important;
  color: #1a1a1a !important;
  text-transform: uppercase !important;
}
.hom-service-subtitle {
  font-family: 'Fraunces', serif !important;
  font-style: italic !important;
  font-size: 14px !important;
  color: #705335 !important;
  margin: 0 0 14px 0 !important;
  line-height: 1.3 !important;
}
.hom-service-desc {
  font-family: 'Maison Neue', sans-serif !important;
  font-size: 13px !important;
  line-height: 1.65 !important;
  color: rgba(0, 0, 0, 0.68) !important;
  margin: 0 !important;
}
.hom-service-card__footer {
  border-top: 1px solid rgba(0, 0, 0, 0.07) !important;
  padding-top: 18px !important;
  margin-top: 24px !important;
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
}
.hom-service-types {
  font-family: 'Maison Neue', sans-serif !important;
  font-size: 10.5px !important;
  letter-spacing: 0.6px !important;
  color: rgba(0, 0, 0, 0.45) !important;
  text-transform: uppercase !important;
  font-weight: 400 !important;
}
.hom-service-arrow {
  color: #705335 !important;
  font-size: 16px !important;
  font-weight: 600 !important;
  transition: transform 0.25s ease !important;
}
.hom-service-card:hover .hom-service-arrow {
  transform: translate(3px, -3px) !important;
}
@media (max-width: 1200px) {
  .hom-services-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 20px !important;
  }
}
@media (max-width: 640px) {
  .hom-services-grid {
    grid-template-columns: 1fr !important;
    gap: 16px !important;
  }
}
"""

# 2. HTML snippet
hom_cards_html = '''<div class="hom-services-grid" data-v-8b47d91c=""><div class="hom-service-card" data-v-8b47d91c=""><div class="hom-service-card__top" data-v-8b47d91c=""><span class="hom-service-num" data-v-8b47d91c="">01</span><span class="hom-service-tag" data-v-8b47d91c="">LIVING</span></div><div class="hom-service-card__body" data-v-8b47d91c=""><h3 class="hom-service-title" data-v-8b47d91c="">RESIDENTIAL</h3><p class="hom-service-subtitle" data-v-8b47d91c="">Bespoke Private Sanctuaries</p><p class="hom-service-desc" data-v-8b47d91c="">Tailored residences rooted in restraint, timeless textures, and effortless luxury. Shaped around your daily rhythm.</p></div><div class="hom-service-card__footer" data-v-8b47d91c=""><span class="hom-service-types" data-v-8b47d91c="">Villas · Penthouses · Estates</span><span class="hom-service-arrow" data-v-8b47d91c="">↗</span></div></div><div class="hom-service-card" data-v-8b47d91c=""><div class="hom-service-card__top" data-v-8b47d91c=""><span class="hom-service-num" data-v-8b47d91c="">02</span><span class="hom-service-tag" data-v-8b47d91c="">LEISURE</span></div><div class="hom-service-card__body" data-v-8b47d91c=""><h3 class="hom-service-title" data-v-8b47d91c="">HOSPITALITY</h3><p class="hom-service-subtitle" data-v-8b47d91c="">Immersive Destinations</p><p class="hom-service-desc" data-v-8b47d91c="">Fine dining destinations, luxury boutique resorts, and bespoke lounges curated for indelible guest experiences.</p></div><div class="hom-service-card__footer" data-v-8b47d91c=""><span class="hom-service-types" data-v-8b47d91c="">Hotels · Signature Dining · Lounges</span><span class="hom-service-arrow" data-v-8b47d91c="">↗</span></div></div><div class="hom-service-card" data-v-8b47d91c=""><div class="hom-service-card__top" data-v-8b47d91c=""><span class="hom-service-num" data-v-8b47d91c="">03</span><span class="hom-service-tag" data-v-8b47d91c="">ENTERPRISE</span></div><div class="hom-service-card__body" data-v-8b47d91c=""><h3 class="hom-service-title" data-v-8b47d91c="">COMMERCIAL SPACE</h3><p class="hom-service-subtitle" data-v-8b47d91c="">Workplaces of Tomorrow</p><p class="hom-service-desc" data-v-8b47d91c="">Strategic executive campuses and high-performance corporate environments designed to foster focus and collaboration.</p></div><div class="hom-service-card__footer" data-v-8b47d91c=""><span class="hom-service-types" data-v-8b47d91c="">Corporate HQs · Executive Hubs · Studios</span><span class="hom-service-arrow" data-v-8b47d91c="">↗</span></div></div><div class="hom-service-card" data-v-8b47d91c=""><div class="hom-service-card__top" data-v-8b47d91c=""><span class="hom-service-num" data-v-8b47d91c="">04</span><span class="hom-service-tag" data-v-8b47d91c="">ACADEMIA</span></div><div class="hom-service-card__body" data-v-8b47d91c=""><h3 class="hom-service-title" data-v-8b47d91c="">EDUCATION SPACE</h3><p class="hom-service-subtitle" data-v-8b47d91c="">Environments for Growth</p><p class="hom-service-desc" data-v-8b47d91c="">Dynamic, human-centric educational academies and creative learning hubs engineered to inspire curiosity and innovation.</p></div><div class="hom-service-card__footer" data-v-8b47d91c=""><span class="hom-service-types" data-v-8b47d91c="">Academies · Creative Hubs · Campuses</span><span class="hom-service-arrow" data-v-8b47d91c="">↗</span></div></div></div>'''

# 1. Update _nuxt/index.DW2uzkdI.css
with open('_nuxt/index.DW2uzkdI.css', 'r', encoding='utf-8') as f:
    css = f.read()

css = css.replace('height:calc(3480px*var(--home-scale))', 'height:calc(4080px*var(--home-scale))')
css = css.replace('height:3480px', 'height:4080px')
if '.hom-services-grid' not in css:
    css += '\n' + hom_css

with open('_nuxt/index.DW2uzkdI.css', 'w', encoding='utf-8') as f:
    f.write(css)
print('Updated _nuxt/index.DW2uzkdI.css with height and styling!')

# 2. Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = html.replace('height:calc(3480px*var(--home-scale))', 'height:calc(4080px*var(--home-scale))')
html = html.replace('height:3480px', 'height:4080px')

# Replace the previous hom-sectors-showcase strip with the new complete hom-services-grid
if '<div class="hom-sectors-showcase"' in html:
    idx_start = html.find('<div class="hom-sectors-showcase"')
    idx_end = html.find('</div>', idx_start) + 6
    html = html[:idx_start] + hom_cards_html + html[idx_end:]
    print('Replaced hom-sectors-showcase with hom-services-grid in index.html!')
elif '<div class="projects-list"' in html:
    html = html.replace('<div class="projects-list"', hom_cards_html + '<div class="projects-list"')
    print('Injected hom-services-grid before projects-list in index.html!')

# Also inject CSS into index.html <style> if missing
if '.hom-services-grid' not in html:
    html = html.replace('</style>', hom_css + '</style>', 1)
    print('Injected hom_css into index.html <style>!')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print('Updated index.html successfully!')

# 3. Update _nuxt/Df6WdBJq.js for Vue hydration
with open('_nuxt/Df6WdBJq.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Define the cards HTML as a JS string variable at the top
escaped_html = hom_cards_html.replace('"', '\\"')
hom_cards_var = f'const homServicesCardsHtml="{escaped_html}";'

if 'homServicesCardsHtml' not in js:
    js = hom_cards_var + js
    # In HomeProjects render function:
    target = 't("div",go,['
    replacement = 't("div",{class:"hom-services-grid",innerHTML:homServicesCardsHtml}),t("div",go,['
    if target in js:
        js = js.replace(target, replacement, 1)
        print('Updated HomeProjects render function in _nuxt/Df6WdBJq.js!')
    else:
        print('Target not found in Df6WdBJq.js!')

with open('_nuxt/Df6WdBJq.js', 'w', encoding='utf-8') as f:
    f.write(js)
print('Updated _nuxt/Df6WdBJq.js successfully!')
