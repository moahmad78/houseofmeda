import glob

for f in glob.glob('_nuxt/*scroll*.css') + glob.glob('_nuxt/*Mask*.css'):
    with open(f, 'r', encoding='utf-8') as fp:
        print(f, fp.read()[:300])
