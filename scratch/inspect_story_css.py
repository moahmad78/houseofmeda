with open('_nuxt/about.BufcynZ0.css', 'r', encoding='utf-8') as f:
    c = f.read()

for term in ['story-image-main', 'story-text-column', 'row-primary', 'story-image-column']:
    idx = c.find(term)
    print(f'=== {term} ===')
    if idx != -1:
        print(c[idx:idx+250])
