import json, re

# 1. Update api/content/about
with open('api/content/about', 'r', encoding='utf-8') as f:
    d = json.load(f)

d['story']['mainImage'] = '/assets/about/content/section-image-01.jpg'
d['story']['secondaryImage'] = '/assets/about/content/section-image-02.jpg'
d['story']['mainMedia']['url'] = '/assets/about/content/section-image-01.jpg'
d['story']['secondaryMedia']['url'] = '/assets/about/content/section-image-02.jpg'

with open('api/content/about', 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2)
print('Updated api/content/about with section-image-01.jpg and section-image-02.jpg')

# 2. CSS for ensuring text & images are 100% visible and beautifully rendered
story_css = """
/* House of Meda - About Page Story Layout Visibility Fix */
.story-text-column {
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between !important;
  gap: 40px !important;
  visibility: visible !important;
  opacity: 1 !important;
}
.story-copy {
  display: flex !important;
  flex-direction: column !important;
  gap: 20px !important;
  visibility: visible !important;
  opacity: 1 !important;
  margin-top: 24px !important;
}
.story-heading-shell {
  overflow: visible !important;
  visibility: visible !important;
  opacity: 1 !important;
}
.story-heading {
  visibility: visible !important;
  opacity: 1 !important;
  color: #111111 !important;
}
.story-heading-line-mask {
  overflow: visible !important;
  display: block !important;
}
.story-heading-line {
  transform: none !important;
  opacity: 1 !important;
  color: #111111 !important;
  visibility: visible !important;
}
.story-heading-accent {
  color: #705335 !important;
  font-family: 'Fraunces', serif !important;
  font-style: italic !important;
}
.story-description,
.story-description.about-scroll-reveal-text,
.about-scroll-reveal-text {
  visibility: visible !important;
  opacity: 1 !important;
  color: rgba(20, 20, 20, 0.85) !important;
}
.about-story .scroll-reveal-text__segment--reveal {
  color: rgba(20, 20, 20, 0.85) !important;
}
.about-story .scroll-reveal-text__glyph:after {
  opacity: 1 !important;
  color: #111111 !important;
}
.about-story .story-image-main,
.about-story .story-image-column {
  visibility: visible !important;
  opacity: 1 !important;
  background: #f0eee9 !important;
}
.about-story .story-image-main img,
.about-story .story-image-column img {
  opacity: 1 !important;
  display: block !important;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
}
"""

# Update about.html and pages/about.html
for html_file in ['about.html', 'pages/about.html']:
    with open(html_file, 'r', encoding='utf-8') as f:
        html = f.read()

    # Replace broken image URLs
    html = html.replace('/assets/about/content/1777996154558-nobu_.jpg', '/assets/about/content/section-image-01.jpg')
    html = html.replace('/assets/about/content/1777996015930-beymen.avif', '/assets/about/content/section-image-02.jpg')

    # Remove translateY(100%) from story-heading-line
    html = re.sub(r'class="story-heading-line"\s+style="[^"]*"', 'class="story-heading-line" style="opacity:1;transform:none;"', html)

    # Inject CSS before </style>
    if 'House of Meda - About Page Story Layout Visibility Fix' not in html:
        html = html.replace('</style>', story_css + '</style>', 1)

    with open(html_file, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f'Updated {html_file}')

# Also append CSS to _nuxt/about.BufcynZ0.css
css_file = '_nuxt/about.BufcynZ0.css'
with open(css_file, 'r', encoding='utf-8') as f:
    css = f.read()
if 'House of Meda - About Page Story Layout Visibility Fix' not in css:
    css += '\n' + story_css
    with open(css_file, 'w', encoding='utf-8') as f:
        f.write(css)
    print(f'Updated {css_file}')
