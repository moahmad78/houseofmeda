import urllib.request
for page in ['/about', '/projects', '/expertise', '/contact', '/news-press']:
    res = urllib.request.urlopen('http://127.0.0.1:8777' + page)
    c = res.read().decode('utf-8')
    has_home_page = 'home-page ' in c or 'home-page"' in c
    print(f'{page} -> has .home-page = {has_home_page}')
