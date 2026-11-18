import glob

failsafe = """<script>
(function(){
  function dismissOpener(){
    var els = document.querySelectorAll('.site-opener, [class*="site-opener"]');
    els.forEach(function(el){
      el.classList.add('is-leaving');
      setTimeout(function(){
        try {
          el.style.setProperty('display','none','important');
          el.style.setProperty('visibility','hidden','important');
          el.style.setProperty('opacity','0','important');
          el.style.setProperty('pointer-events','none','important');
        } catch(e) {}
      }, 350);
    });
  }
  if (document.readyState === 'complete') {
    setTimeout(dismissOpener, 1200);
  } else {
    window.addEventListener('load', function(){ setTimeout(dismissOpener, 1200); });
    setTimeout(dismissOpener, 2000);
  }
})();
</script>
"""

for f in glob.glob('*.html') + glob.glob('pages/*.html'):
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    
    if 'dismissOpener' not in c:
        idx = c.rfind('</body>')
        if idx != -1:
            c = c[:idx] + failsafe + c[idx:]
            with open(f, 'w', encoding='utf-8') as fp:
                fp.write(c)
            print(f'Added failsafe to {f}')
