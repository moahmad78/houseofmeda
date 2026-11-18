with open('index.html', 'r', encoding='utf-8') as f:
    c = f.read()

idx = c.find('class="projects"')
print("Found projects at:", idx)
if idx != -1:
    print(c[idx:idx+2500])

idx_exp = c.find('class="expertise"')
print("\nFound expertise at:", idx_exp)
if idx_exp != -1:
    print(c[idx_exp:idx_exp+1500])
