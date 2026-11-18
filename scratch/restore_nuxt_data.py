import subprocess, re, glob, os

html_files = glob.glob('*.html') + glob.glob('pages/*.html')
print(f'Restoring __NUXT_DATA__ from HEAD~1 for {len(html_files)} files...')

for f in html_files:
    git_path = f.replace('\\', '/')
    try:
        old_content = subprocess.check_output(['git', 'show', f'HEAD~1:{git_path}'], text=True, encoding='utf-8')
    except Exception as e:
        print(f'Skip {f}: {e}')
        continue
    
    m_old = re.search(r'(<script[^>]*id="__NUXT_DATA__"[^>]*>)(.*?)(</script>)', old_content, re.DOTALL)
    if not m_old:
        print(f'No __NUXT_DATA__ in old {f}')
        continue
    
    old_script_tag = m_old.group(0)
    
    with open(f, 'r', encoding='utf-8') as fp:
        cur_content = fp.read()
    
    m_cur = re.search(r'(<script[^>]*id="__NUXT_DATA__"[^>]*>)(.*?)(</script>)', cur_content, re.DOTALL)
    if not m_cur:
        print(f'No __NUXT_DATA__ in cur {f}')
        continue
        
    new_content = cur_content[:m_cur.start()] + old_script_tag + cur_content[m_cur.end():]
    
    with open(f, 'w', encoding='utf-8') as fp:
        fp.write(new_content)
    print(f'Restored __NUXT_DATA__ in {f}')
