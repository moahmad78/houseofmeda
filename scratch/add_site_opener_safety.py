import glob

for f in glob.glob('*.html') + glob.glob('pages/*.html'):
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    
    old_target = ".querySelectorAll('.gb-loader-backdrop"
    new_target = ".querySelectorAll('.site-opener,.gb-loader-backdrop"
    
    if old_target in c:
        c = c.replace(old_target, new_target)
        with open(f, 'w', encoding='utf-8') as fp:
            fp.write(c)
        print(f'Added .site-opener safety to {f}')
