import urllib.request, re

urls = [
    'http://127.0.0.1:8777/',
    'http://127.0.0.1:8777/about',
    'http://127.0.0.1:8777/projects',
    'http://127.0.0.1:8777/expertise',
    'http://127.0.0.1:8777/contact',
    'http://127.0.0.1:8777/news-press',
]

for url in urls:
    try:
        req = urllib.request.urlopen(url)
        content = req.read().decode('utf-8')
        visible_cs = re.findall(r'>\s*CASE STUDY\s*<', content, re.IGNORECASE)
        href_cs = re.findall(r'href=["\']/case-study["\']', content, re.IGNORECASE)
        print(f'{url}: Status={req.status}, Len={len(content)}, Visible CS={len(visible_cs)}, Link CS={len(href_cs)}')
    except Exception as e:
        print(f'{url}: ERROR {e}')

# Check /case-study redirect
import http.client
conn = http.client.HTTPConnection('127.0.0.1', 8777)
conn.request('GET', '/case-study')
r = conn.getresponse()
print(f'/case-study -> {r.status} (Location: {r.getheader("Location")})')
