with open('index.html', 'r', encoding='utf-8') as f:
    c = f.read()

# 1. Add sectors showcase strip right after projects-copy-shell
sectors_strip = '''<div class="hom-sectors-showcase" style="display:flex;align-items:center;justify-content:flex-start;gap:18px;margin-top:24px;margin-bottom:8px;flex-wrap:wrap;letter-spacing:2.5px;font-size:12px;text-transform:uppercase;color:#705335;font-weight:600;font-family:'Maison Neue',sans-serif;">
<span class="hom-sector-tag">Residential</span>
<span style="opacity:0.4;font-size:10px;">✦</span>
<span class="hom-sector-tag">Hospitality</span>
<span style="opacity:0.4;font-size:10px;">✦</span>
<span class="hom-sector-tag">Commercial Space</span>
<span style="opacity:0.4;font-size:10px;">✦</span>
<span class="hom-sector-tag">Education Space</span>
</div>'''

target_shell = '</p></div><div class="projects-list"'
if target_shell in c:
    c = c.replace(target_shell, '</p></div>' + sectors_strip + '<div class="projects-list"')
    print("Injected sectors_strip into index.html")
else:
    print("Could not find target_shell in index.html")

# 2. Update the static project card categories & titles
replacements = [
    (
        '<p class="cat" data-v-8b47d91c="">HOSPITALITY</p><p class="title" data-v-8b47d91c="">THE TAJ MAHAL PALACE SUITE</p>',
        '<p class="cat" data-v-8b47d91c="">RESIDENTIAL</p><p class="title" data-v-8b47d91c="">THE RESIDENCE AT KINGFISHER TOWERS</p>'
    ),
    (
        '<p class="cat" data-v-8b47d91c="">HOSPITALITY</p><p class="title" data-v-8b47d91c="">ĀKĒDO LOUNGE & BAR</p>',
        '<p class="cat" data-v-8b47d91c="">HOSPITALITY</p><p class="title" data-v-8b47d91c="">THE TAJ MAHAL PALACE SIGNATURE SUITE</p>'
    ),
    (
        '<p class="cat" data-v-8b47d91c="">OFFICE</p><p class="title" data-v-8b47d91c="">INFOSYS EXECUTIVE CAMPUS</p>',
        '<p class="cat" data-v-8b47d91c="">COMMERCIAL SPACE</p><p class="title" data-v-8b47d91c="">INFOSYS EXECUTIVE CAMPUS BENGALURU</p>'
    ),
    (
        '<p class="cat" data-v-8b47d91c="">HOSPITALITY</p><p class="title" data-v-8b47d91c="">ST. REGIS MUMBAI PRESIDENTIAL SUITE</p>',
        '<p class="cat" data-v-8b47d91c="">EDUCATION SPACE</p><p class="title" data-v-8b47d91c="">AZIM PREMJI ACADEMY & CREATIVE HUB</p>'
    ),
    (
        '<p class="cat" data-v-8b47d91c="">OFFICE</p><p class="title" data-v-8b47d91c="">GODREJ GREEN TECH PAVILION</p>',
        '<p class="cat" data-v-8b47d91c="">RESIDENTIAL</p><p class="title" data-v-8b47d91c="">PRIVATE PENTHOUSE UB CITY</p>'
    ),
    (
        '<p class="cat" data-v-8b47d91c="">OFFICE</p><p class="title" data-v-8b47d91c="">TATA ADVANCED SYSTEMS HQ</p>',
        '<p class="cat" data-v-8b47d91c="">COMMERCIAL SPACE</p><p class="title" data-v-8b47d91c="">TATA LEADERSHIP TOWER BENGALURU</p>'
    ),
    (
        '<p class="cat" data-v-8b47d91c="">RETAIL</p><span aria-hidden="true" class="retail-dot" data-v-8b47d91c=""></span></div><p class="title" data-v-8b47d91c="">LOUIS VUITTON UB CITY</p>',
        '<p class="cat" data-v-8b47d91c="">HOSPITALITY</p><span aria-hidden="true" class="retail-dot" data-v-8b47d91c=""></span></div><p class="title" data-v-8b47d91c="">THE LEELA PALACE SIGNATURE DINING</p>'
    ),
]

for old, new in replacements:
    if old in c:
        c = c.replace(old, new)
        print("Replaced card:", old[:40])
    else:
        print("Not found:", old[:40])

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(c)
print("Updated index.html successfully!")
