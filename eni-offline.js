/* WebCopier / ENI — offline URL remap (no live origin) */
(function() {
  const MAP = {"https://yoointerior.com/_nuxt/PageTopHeader.BvJ50k1h.css": "/_nuxt/PageTopHeader.BvJ50k1h.css", "https://yoointerior.com/_nuxt/entry.LZZ4tNNH.css": "/_nuxt/entry.LZZ4tNNH.css", "https://yoointerior.com/_nuxt/HomeCtaButton.BtRHO-Nm.css": "/_nuxt/HomeCtaButton.BtRHO-Nm.css", "https://yoointerior.com/_nuxt/CtsIlryN.js": "/_nuxt/CtsIlryN.js", "https://yoointerior.com/_nuxt/Dfi4zzZB.js": "/_nuxt/Dfi4zzZB.js", "https://yoointerior.com/_nuxt/yeTpss9b.js": "/_nuxt/yeTpss9b.js", "https://yoointerior.com/_nuxt/JkDSH99F.js": "/_nuxt/JkDSH99F.js", "https://yoointerior.com/_nuxt/RdEkidMM.js": "/_nuxt/RdEkidMM.js", "https://yoointerior.com/_nuxt/Df6WdBJq.js": "/_nuxt/Df6WdBJq.js", "https://yoointerior.com/_nuxt/C4qg9H9z.js": "/_nuxt/C4qg9H9z.js", "https://yoointerior.com/assets/about/hero/logo.svg": "/assets/about/hero/logo.svg", "https://yoointerior.com/assets/about/hero/menu-icon.svg": "/assets/about/hero/menu-icon.svg", "https://yoointerior.com/_nuxt/vkF2JcH9.js": "/_nuxt/vkF2JcH9.js", "https://yoointerior.com/_nuxt/JBRSIB3X.js": "/_nuxt/JBRSIB3X.js", "https://yoointerior.com/_nuxt/DIMlyTCg.js": "/_nuxt/DIMlyTCg.js", "https://yoointerior.com/_nuxt/DI_8jMLI.js": "/_nuxt/DI_8jMLI.js", "https://yoointerior.com/_nuxt/BaEV02Hv.js": "/_nuxt/BaEV02Hv.js", "https://yoointerior.com/_nuxt/CjT1cB9E.js": "/_nuxt/CjT1cB9E.js", "https://yoointerior.com/_nuxt/BeaWbFso.js": "/_nuxt/BeaWbFso.js", "https://yoointerior.com/_nuxt/CUEEWdtp.js": "/_nuxt/CUEEWdtp.js", "https://yoointerior.com/_nuxt/C2BJ01Zg.js": "/_nuxt/C2BJ01Zg.js", "https://yoointerior.com/_nuxt/BTPY3-s8.js": "/_nuxt/BTPY3-s8.js", "https://bundles.efilli.com/yoointerior.com.prod.js": "/cdn/bundles.efilli.com/yoointerior.com.prod.js", "https://yoointerior.com/assets/home/expertise/menu-icon.svg": "/assets/home/expertise/menu-icon.svg", "https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,100..900;1,100..900&display=swap": "/cdn/fonts.googleapis.com/css2__q536816d489.css", "https://fonts.googleapis.com/css2": "/cdn/fonts.googleapis.com/css2__q536816d489.css", "https://yoointerior.com/assets/home/expertise/logo.svg": "/assets/home/expertise/logo.svg", "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap": "/cdn/fonts.googleapis.com/css2__qe9cf5a0bd4.css", "https://yoointerior.com/_nuxt/CZayi1Tr.js": "/_nuxt/CZayi1Tr.js", "https://yoointerior.com/_nuxt/CKMxbet5.js": "/_nuxt/CKMxbet5.js", "https://yoointerior.com/assets/home/projects/menu-icon.svg": "/assets/home/projects/menu-icon.svg", "https://yoointerior.com/assets/home/projects/logo.svg": "/assets/home/projects/logo.svg", "https://yoointerior.com/assets/footer/top-line.svg": "/assets/footer/top-line.svg", "https://yoointerior.com/assets/footer/background-1.svg": "/assets/footer/background-1.svg", "https://yoointerior.com/assets/footer/logo.svg": "/assets/footer/logo.svg", "https://yoointerior.com/assets/footer/background-3.svg": "/assets/footer/background-3.svg", "https://yoointerior.com/assets/footer/background-2.svg": "/assets/footer/background-2.svg", "https://yoointerior.com/assets/footer/background-4.svg": "/assets/footer/background-4.svg", "https://yoointerior.com/assets/footer/background-5.svg": "/assets/footer/background-5.svg", "https://yoointerior.com/_nuxt/index.DW2uzkdI.css": "/_nuxt/index.DW2uzkdI.css", "https://yoointerior.com/fonts/maison-neue/MaisonNeueBold.woff": "/fonts/maison-neue/MaisonNeueBold.woff", "https://yoointerior.com/fonts/maison-neue/MaisonNeueBoldItalic.woff": "/fonts/maison-neue/MaisonNeueBoldItalic.woff", "https://yoointerior.com/fonts/maison-neue/MaisonNeueDemi.woff": "/fonts/maison-neue/MaisonNeueDemi.woff", "https://yoointerior.com/fonts/maison-neue/MaisonNeueLight.woff": "/fonts/maison-neue/MaisonNeueLight.woff", "https://yoointerior.com/fonts/maison-neue/MaisonNeueBook.woff": "/fonts/maison-neue/MaisonNeueBook.woff", "https://firebase.googleapis.com/v1alpha/projects/-/apps/1:1098993766011:web:1fbb8333faac3a08e11cde/webConfig": "/cdn/firebase.googleapis.com/v1alpha/projects/-/apps/1_1098993766011_web_1fbb8333faac3a08e11cde/webConfig", "https://yoointerior.com/_nuxt/default.ChOEbfpg.css": "/_nuxt/default.ChOEbfpg.css", "https://yoointerior.com/_nuxt/builds/meta/215151b9-820f-4566-991c-820071f564e3.json": "/_nuxt/builds/meta/215151b9-820f-4566-991c-820071f564e3.json", "https://firebaseinstallations.googleapis.com/v1/projects/user-tourly/installations": "/cdn/firebaseinstallations.googleapis.com/v1/projects/user-tourly/installations", "https://yoointerior.com/api/content/expertise": "/api/content/expertise", "https://yoointerior.com/api/projects?offset=0&limit=10": "/api/projects__q0e747af1e7.json", "https://yoointerior.com/api/projects": "/api/projects__q0e747af1e7.json", "https://yoointerior.com/api/content/about": "/api/content/about", "https://yoointerior.com/api/case-study?offset=0&limit=10": "/api/case-study__q0e747af1e7.json", "https://yoointerior.com/api/case-study": "/api/case-study__q0e747af1e7.json", "https://yoointerior.com/api/news-press?page=1": "/api/news-press__q2679a79d55.json", "https://yoointerior.com/api/news-press": "/api/news-press__q2679a79d55.json", "https://yoointerior.com/api/content/contact": "/api/content/contact", "https://yoointerior.com/_nuxt/expertise.BNG2_SFj.css": "/_nuxt/expertise.BNG2_SFj.css", "https://yoointerior.com/_nuxt/LineMaskMotionText.C1ecjfqu.css": "/_nuxt/LineMaskMotionText.C1ecjfqu.css", "https://yoointerior.com/api/homepage/projects": "/api/homepage/projects", "https://yoointerior.com/_nuxt/B05TU0uQ.js": "/_nuxt/B05TU0uQ.js", "https://yoointerior.com/_nuxt/D4dv9Wcx.js": "/_nuxt/D4dv9Wcx.js", "https://yoointerior.com/_nuxt/Cw1VFGBS.js": "/_nuxt/Cw1VFGBS.js", "https://yoointerior.com/_nuxt/DP3DGAtK.js": "/_nuxt/DP3DGAtK.js", "https://yoointerior.com/_nuxt/Dy2tOd1I.js": "/_nuxt/Dy2tOd1I.js", "https://yoointerior.com/_nuxt/_slug_.C_YEmnFl.css": "/_nuxt/_slug_.C_YEmnFl.css", "https://yoointerior.com/assets/home/projects/project-louis-vuitton.png": "/assets/home/projects/project-louis-vuitton.png", "https://yoointerior.com/assets/home/projects/project-peninsula.png": "/assets/home/projects/project-peninsula.png", "https://media.yoointerior.com/assets/projects/detail/images/1778714670054-1777902793074-cotton-clouds3.webp": "/cdn/media.yoointerior.com/assets/projects/detail/images/1778714670054-1777902793074-cotton-clouds3.webp", "https://yoointerior.com/assets/home/projects/project-akedo.png": "/assets/home/projects/project-akedo.png", "https://yoointerior.com/assets/home/projects/project-nokta.jpg": "/assets/home/projects/project-nokta.jpg", "https://yoointerior.com/assets/home/projects/project-thy.jpg": "/assets/home/projects/project-thy.jpg", "https://yoointerior.com/assets/home/projects/project-stregis.jpg": "/assets/home/projects/project-stregis.jpg", "https://yoointerior.com/assets/home/projects/project-tekfen.jpg": "/assets/home/projects/project-tekfen.jpg", "https://media.yoointerior.com/assets/projects/detail/videos/1777961354941-640-x-853.mp4": "/cdn/media.yoointerior.com/assets/projects/detail/videos/1777961354941-640-x-853.mp4", "https://yoointerior.com/_nuxt/ContactFormDrawer.CLLP7RF6.css": "/_nuxt/ContactFormDrawer.CLLP7RF6.css", "https://yoointerior.com/_nuxt/index.Cac51N69.css": "/_nuxt/index.Cac51N69.css", "https://yoointerior.com/_nuxt/CaseStudyDetailScrollRevealText.DFbxHWF-.css": "/_nuxt/CaseStudyDetailScrollRevealText.DFbxHWF-.css", "https://yoointerior.com/_nuxt/about.BufcynZ0.css": "/_nuxt/about.BufcynZ0.css", "https://yoointerior.com/_nuxt/index.C3p1pkqd.css": "/_nuxt/index.C3p1pkqd.css", "https://yoointerior.com/_nuxt/contact.CNnVjywT.css": "/_nuxt/contact.CNnVjywT.css", "https://yoointerior.com/_nuxt/NewsPressPostCard.qX7L8HcL.css": "/_nuxt/NewsPressPostCard.qX7L8HcL.css", "https://yoointerior.com/_nuxt/index.CAs0v5rD.css": "/_nuxt/index.CAs0v5rD.css", "https://yoointerior.com/_nuxt/DqP_4V7T.js": "/_nuxt/DqP_4V7T.js", "https://yoointerior.com/_nuxt/_RfB4lL5.js": "/_nuxt/_RfB4lL5.js", "https://yoointerior.com/_nuxt/Wyi2L53E.js": "/_nuxt/Wyi2L53E.js", "https://yoointerior.com/_nuxt/BDXYl7ac.js": "/_nuxt/BDXYl7ac.js", "https://yoointerior.com/_nuxt/DDJS4AFO.js": "/_nuxt/DDJS4AFO.js", "https://yoointerior.com/_nuxt/BrGtZ4LD.js": "/_nuxt/BrGtZ4LD.js", "https://yoointerior.com/_nuxt/DPdVDJbt.js": "/_nuxt/DPdVDJbt.js", "https://yoointerior.com/_nuxt/Dve5_Tv8.js": "/_nuxt/Dve5_Tv8.js", "https://yoointerior.com/_nuxt/C9i8siGn.js": "/_nuxt/C9i8siGn.js", "https://yoointerior.com/_nuxt/GxrdVfI0.js": "/_nuxt/GxrdVfI0.js", "https://yoointerior.com/_nuxt/CxG7KyTR.js": "/_nuxt/CxG7KyTR.js", "https://yoointerior.com/_nuxt/erXThYOv.js": "/_nuxt/erXThYOv.js", "https://yoointerior.com/_nuxt/index.D8PrC-ZK.css": "/_nuxt/index.D8PrC-ZK.css", "https://fonts.gstatic.com/s/fraunces/v38/6NUu8FyLNQOQZAnv9bYEvDiIdE9Ea92uemAk_WBq8U_9v0c2Wa0K7iN7hzFUPJH58nib14c1qv86Rg.woff2": "/cdn/fonts.gstatic.com/s/fraunces/v38/6NUu8FyLNQOQZAnv9bYEvDiIdE9Ea92uemAk_WBq8U_9v0c2Wa0K7iN7hzFUPJH58nib14c1qv86Rg.woff2", "https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3OUBGEe.woff2": "/cdn/fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3OUBGEe.woff2", "https://fonts.gstatic.com/s/fraunces/v38/6NUs8FyLNQOQZAnv9ZwNjucMHVn85Ni7emAe9lKqZTnbB-gzTK0K1ChJdt9vIVYX9G37lvd9mvIiQvTm.woff2": "/cdn/fonts.gstatic.com/s/fraunces/v38/6NUs8FyLNQOQZAnv9ZwNjucMHVn85Ni7emAe9lKqZTnbB-gzTK0K1ChJdt9vIVYX9G37lvd9mvIiQvTm.woff2", "https://fonts.gstatic.com/s/fraunces/v38/6NUs8FyLNQOQZAnv9ZwNjucMHVn85Ni7emAe9lKqZTnbB-gzTK0K1ChJdt9vIVYX9G37lvd9mvMiQvTm.woff2": "/cdn/fonts.gstatic.com/s/fraunces/v38/6NUs8FyLNQOQZAnv9ZwNjucMHVn85Ni7emAe9lKqZTnbB-gzTK0K1ChJdt9vIVYX9G37lvd9mvMiQvTm.woff2", "https://fonts.gstatic.com/s/fraunces/v38/6NUu8FyLNQOQZAnv9bYEvDiIdE9Ea92uemAk_WBq8U_9v0c2Wa0K7iN7hzFUPJH58nib14c7qv8.woff2": "/cdn/fonts.gstatic.com/s/fraunces/v38/6NUu8FyLNQOQZAnv9bYEvDiIdE9Ea92uemAk_WBq8U_9v0c2Wa0K7iN7hzFUPJH58nib14c7qv8.woff2", "https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3iUBGEe.woff2": "/cdn/fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3iUBGEe.woff2", "https://yoointerior.com/site.webmanifest": "/site.webmanifest", "https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3GUBGEe.woff2": "/cdn/fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3GUBGEe.woff2", "https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3CUBGEe.woff2": "/cdn/fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3CUBGEe.woff2", "https://fonts.gstatic.com/s/fraunces/v38/6NUu8FyLNQOQZAnv9bYEvDiIdE9Ea92uemAk_WBq8U_9v0c2Wa0K7iN7hzFUPJH58nib14c0qv86Rg.woff2": "/cdn/fonts.gstatic.com/s/fraunces/v38/6NUu8FyLNQOQZAnv9bYEvDiIdE9Ea92uemAk_WBq8U_9v0c2Wa0K7iN7hzFUPJH58nib14c0qv86Rg.woff2", "https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMawCUBGEe.woff2": "/cdn/fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMawCUBGEe.woff2", "https://yoointerior.com/favicon.ico": "/favicon.ico", "https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMaxKUBGEe.woff2": "/cdn/fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMaxKUBGEe.woff2", "https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3KUBGEe.woff2": "/cdn/fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3KUBGEe.woff2", "https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3-UBGEe.woff2": "/cdn/fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3-UBGEe.woff2", "https://yoointerior.com/apple-touch-icon.png": "/apple-touch-icon.png", "https://yoointerior.com/fonts/maison-neue/MaisonNeueBookItalic.woff": "/fonts/maison-neue/MaisonNeueBookItalic.woff", "https://yoointerior.com/fonts/maison-neue/MaisonNeueDemiItalic.woff": "/fonts/maison-neue/MaisonNeueDemiItalic.woff", "https://yoointerior.com/fonts/maison-neue/MaisonNeueLightItalic.woff": "/fonts/maison-neue/MaisonNeueLightItalic.woff", "https://yoointerior.com/assets/expertise/header/logo.svg": "/assets/expertise/header/logo.svg", "https://yoointerior.com/assets/menu/menu-close.svg": "/assets/menu/menu-close.svg", "https://media.yoointerior.com/assets/expertise/sections/divider.svg": "/cdn/media.yoointerior.com/assets/expertise/sections/divider.svg", "https://yoointerior.com/assets/expertise/header/menu-icon.svg": "/assets/expertise/header/menu-icon.svg", "https://yoointerior.com/assets/menu/menu-divider.svg": "/assets/menu/menu-divider.svg", "https://media.yoointerior.com/assets/expertise/sections/1778153779069-molu-390x520.jpg": "/cdn/media.yoointerior.com/assets/expertise/sections/1778153779069-molu-390x520.jpg", "https://yoointerior.com/vendor/leaflet/leaflet.js": "/vendor/leaflet/leaflet.js", "https://yoointerior.com/assets/about/content/team-member-02.jpg": "/assets/about/content/team-member-02.jpg", "https://yoointerior.com/assets/about/references/logo-01.svg": "/assets/about/references/logo-01.svg", "https://media.yoointerior.com/assets/expertise/sections/1778154584059-tam-390x520.jpg": "/cdn/media.yoointerior.com/assets/expertise/sections/1778154584059-tam-390x520.jpg", "https://yoointerior.com/assets/about/content/team-member-01.jpg": "/assets/about/content/team-member-01.jpg", "https://yoointerior.com/assets/about/references/logo-04.svg": "/assets/about/references/logo-04.svg", "https://yoointerior.com/assets/about/icons/download.svg": "/assets/about/icons/download.svg", "https://yoointerior.com/assets/about/content/rest-of-us-01.jpg": "/assets/about/content/rest-of-us-01.jpg", "https://yoointerior.com/assets/about/content/rest-of-us-02.jpg": "/assets/about/content/rest-of-us-02.jpg", "https://yoointerior.com/assets/about/references/logo-02.svg": "/assets/about/references/logo-02.svg", "https://yoointerior.com/assets/about/references/logo-05.svg": "/assets/about/references/logo-05.svg", "https://yoointerior.com/assets/expertise/sections/section-01-card-01.png": "/assets/expertise/sections/section-01-card-01.png", "https://yoointerior.com/assets/home/hero/scroll-head.svg": "/assets/home/hero/scroll-head.svg", "https://yoointerior.com/assets/about/content/section-image-00.png": "/assets/about/content/section-image-00.png", "https://yoointerior.com/assets/home/hero/menu-line.svg": "/assets/home/hero/menu-line.svg", "https://yoointerior.com/assets/about/icons/team-card-divider.svg": "/assets/about/icons/team-card-divider.svg", "https://yoointerior.com/assets/about/icons/more.svg": "/assets/about/icons/more.svg", "https://yoointerior.com/assets/menu/DesignBuild3.mp4": "/assets/menu/DesignBuild3.mp4", "https://yoointerior.com/assets/about/content/team-banner.jpg": "/assets/about/content/team-banner.jpg", "https://yoointerior.com/assets/about/content/rest-of-us-03.png": "/assets/about/content/rest-of-us-03.png", "https://yoointerior.com/assets/about/hero/scroll-line.svg": "/assets/about/hero/scroll-line.svg", "https://yoointerior.com/assets/expertise/sections/section-02-card-02.jpg": "/assets/expertise/sections/section-02-card-02.jpg", "https://yoointerior.com/assets/about/content/section-image-02.jpg": "/assets/about/content/section-image-02.jpg", "https://yoointerior.com/assets/about/references/logo-03.svg": "/assets/about/references/logo-03.svg", "https://media.yoointerior.com/assets/expertise/sections/1778154176844-nobu-390x520.jpg": "/cdn/media.yoointerior.com/assets/expertise/sections/1778154176844-nobu-390x520.jpg", "https://yoointerior.com/assets/about/content/section-image-01.jpg": "/assets/about/content/section-image-01.jpg", "https://yoointerior.com/assets/about/references/logo-06.svg": "/assets/about/references/logo-06.svg", "https://media.yoointerior.com/assets/expertise/sections/1778153996061-thy-390-x-520.mp4": "/cdn/media.yoointerior.com/assets/expertise/sections/1778153996061-thy-390-x-520.mp4", "https://yoointerior.com/vendor/leaflet/leaflet.css": "/vendor/leaflet/leaflet.css", "https://yoointerior.com/assets/home/hero/scroll-line.svg": "/assets/home/hero/scroll-line.svg", "https://yoointerior.com/assets/menu/Design1.mp4": "/assets/menu/Design1.mp4", "https://yoointerior.com/assets/about/content/report-cover.png": "/assets/about/content/report-cover.png", "https://yoointerior.com/assets/about/icons/divider-line.svg": "/assets/about/icons/divider-line.svg", "https://yoointerior.com/assets/expertise/sections/section-03-card-01.png": "/assets/expertise/sections/section-03-card-01.png", "https://yoointerior.com/assets/expertise/sections/section-03-card-02.jpg": "/assets/expertise/sections/section-03-card-02.jpg", "https://yoointerior.com/assets/about/hero/hero-bg-mobile.jpg": "/assets/about/hero/hero-bg-mobile.jpg", "https://yoointerior.com/assets/about/hero/scroll-head.svg": "/assets/about/hero/scroll-head.svg", "https://media.yoointerior.com/assets/expertise/sections/1778153735709-olea-390-x-520.mp4": "/cdn/media.yoointerior.com/assets/expertise/sections/1778153735709-olea-390-x-520.mp4", "https://yoointerior.com/assets/about/content/section-image-03.jpg": "/assets/about/content/section-image-03.jpg", "https://media.yoointerior.com/assets/expertise/sections/1778154720268-nuup-390-x-520.mp4": "/cdn/media.yoointerior.com/assets/expertise/sections/1778154720268-nuup-390-x-520.mp4", "https://yoointerior.com/assets/expertise/sections/section-02-card-01.png": "/assets/expertise/sections/section-02-card-01.png", "https://yoointerior.com/assets/expertise/sections/divider.svg": "/assets/expertise/sections/divider.svg", "https://yoointerior.com/assets/expertise/sections/section-01-card-02.jpg": "/assets/expertise/sections/section-01-card-02.jpg", "https://yoointerior.com/assets/about/content/team-lead.jpg": "/assets/about/content/team-lead.jpg", "https://yoointerior.com/assets/home/hero/logo.svg": "/assets/home/hero/logo.svg", "https://yoointerior.com/assets/menu/Build2.mp4": "/assets/menu/Build2.mp4", "https://yoointerior.com/assets/about/hero/hero-bg-desktop.png": "/assets/about/hero/hero-bg-desktop.png", "https://kbusjbnltvpstuavckvd.supabase.co/storage/v1/object/public/cms-assets/assets/Yoo%202026%20Showreel_1.mp4": "/cdn/kbusjbnltvpstuavckvd.supabase.co/storage/v1/object/public/cms-assets/assets/Yoo 2026 Showreel_1.mp4", "https://kbusjbnltvpstuavckvd.supabase.co/storage/v1/object/public/cms-assets/assets/Yoo%202026%20Showreel_2.mp4": "/cdn/kbusjbnltvpstuavckvd.supabase.co/storage/v1/object/public/cms-assets/assets/Yoo 2026 Showreel_2.mp4", "https://yoointerior.com/vendor/leaflet/images/layers.png": "/vendor/leaflet/images/layers.png", "https://yoointerior.com/vendor/leaflet/images/marker-icon.png": "/vendor/leaflet/images/marker-icon.png", "https://yoointerior.com/vendor/leaflet/images/layers-2x.png": "/vendor/leaflet/images/layers-2x.png"};
  const PATH_ALIAS = {"/yoointerior.com.prod.js": "/cdn/bundles.efilli.com/yoointerior.com.prod.js", "/v1alpha/projects/-/apps/1:1098993766011:web:1fbb8333faac3a08e11cde/webConfig": "/cdn/firebase.googleapis.com/v1alpha/projects/-/apps/1_1098993766011_web_1fbb8333faac3a08e11cde/webConfig", "/v1/projects/user-tourly/installations": "/cdn/firebaseinstallations.googleapis.com/v1/projects/user-tourly/installations", "/assets/projects/detail/images/1778714670054-1777902793074-cotton-clouds3.webp": "/cdn/media.yoointerior.com/assets/projects/detail/images/1778714670054-1777902793074-cotton-clouds3.webp", "/assets/projects/detail/videos/1777961354941-640-x-853.mp4": "/cdn/media.yoointerior.com/assets/projects/detail/videos/1777961354941-640-x-853.mp4", "/s/fraunces/v38/6NUu8FyLNQOQZAnv9bYEvDiIdE9Ea92uemAk_WBq8U_9v0c2Wa0K7iN7hzFUPJH58nib14c1qv86Rg.woff2": "/cdn/fonts.gstatic.com/s/fraunces/v38/6NUu8FyLNQOQZAnv9bYEvDiIdE9Ea92uemAk_WBq8U_9v0c2Wa0K7iN7hzFUPJH58nib14c1qv86Rg.woff2", "/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3OUBGEe.woff2": "/cdn/fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3OUBGEe.woff2", "/s/fraunces/v38/6NUs8FyLNQOQZAnv9ZwNjucMHVn85Ni7emAe9lKqZTnbB-gzTK0K1ChJdt9vIVYX9G37lvd9mvIiQvTm.woff2": "/cdn/fonts.gstatic.com/s/fraunces/v38/6NUs8FyLNQOQZAnv9ZwNjucMHVn85Ni7emAe9lKqZTnbB-gzTK0K1ChJdt9vIVYX9G37lvd9mvIiQvTm.woff2", "/s/fraunces/v38/6NUs8FyLNQOQZAnv9ZwNjucMHVn85Ni7emAe9lKqZTnbB-gzTK0K1ChJdt9vIVYX9G37lvd9mvMiQvTm.woff2": "/cdn/fonts.gstatic.com/s/fraunces/v38/6NUs8FyLNQOQZAnv9ZwNjucMHVn85Ni7emAe9lKqZTnbB-gzTK0K1ChJdt9vIVYX9G37lvd9mvMiQvTm.woff2", "/s/fraunces/v38/6NUu8FyLNQOQZAnv9bYEvDiIdE9Ea92uemAk_WBq8U_9v0c2Wa0K7iN7hzFUPJH58nib14c7qv8.woff2": "/cdn/fonts.gstatic.com/s/fraunces/v38/6NUu8FyLNQOQZAnv9bYEvDiIdE9Ea92uemAk_WBq8U_9v0c2Wa0K7iN7hzFUPJH58nib14c7qv8.woff2", "/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3iUBGEe.woff2": "/cdn/fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3iUBGEe.woff2", "/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3GUBGEe.woff2": "/cdn/fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3GUBGEe.woff2", "/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3CUBGEe.woff2": "/cdn/fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3CUBGEe.woff2", "/s/fraunces/v38/6NUu8FyLNQOQZAnv9bYEvDiIdE9Ea92uemAk_WBq8U_9v0c2Wa0K7iN7hzFUPJH58nib14c0qv86Rg.woff2": "/cdn/fonts.gstatic.com/s/fraunces/v38/6NUu8FyLNQOQZAnv9bYEvDiIdE9Ea92uemAk_WBq8U_9v0c2Wa0K7iN7hzFUPJH58nib14c0qv86Rg.woff2", "/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMawCUBGEe.woff2": "/cdn/fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMawCUBGEe.woff2", "/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMaxKUBGEe.woff2": "/cdn/fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMaxKUBGEe.woff2", "/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3KUBGEe.woff2": "/cdn/fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3KUBGEe.woff2", "/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3-UBGEe.woff2": "/cdn/fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3-UBGEe.woff2", "/assets/expertise/sections/1778153779069-molu-390x520.jpg": "/cdn/media.yoointerior.com/assets/expertise/sections/1778153779069-molu-390x520.jpg", "/assets/expertise/sections/1778154584059-tam-390x520.jpg": "/cdn/media.yoointerior.com/assets/expertise/sections/1778154584059-tam-390x520.jpg", "/assets/expertise/sections/1778154176844-nobu-390x520.jpg": "/cdn/media.yoointerior.com/assets/expertise/sections/1778154176844-nobu-390x520.jpg", "/assets/expertise/sections/1778153996061-thy-390-x-520.mp4": "/cdn/media.yoointerior.com/assets/expertise/sections/1778153996061-thy-390-x-520.mp4", "/assets/expertise/sections/1778153735709-olea-390-x-520.mp4": "/cdn/media.yoointerior.com/assets/expertise/sections/1778153735709-olea-390-x-520.mp4", "/assets/expertise/sections/1778154720268-nuup-390-x-520.mp4": "/cdn/media.yoointerior.com/assets/expertise/sections/1778154720268-nuup-390-x-520.mp4", "/storage/v1/object/public/cms-assets/assets/Yoo%202026%20Showreel_1.mp4": "/cdn/kbusjbnltvpstuavckvd.supabase.co/storage/v1/object/public/cms-assets/assets/Yoo 2026 Showreel_1.mp4", "/storage/v1/object/public/cms-assets/assets/Yoo%202026%20Showreel_2.mp4": "/cdn/kbusjbnltvpstuavckvd.supabase.co/storage/v1/object/public/cms-assets/assets/Yoo 2026 Showreel_2.mp4"};
  const RSC_BY_PATH = {};
  const RSC_BY_QUERY = {};
  const BUNDLES = {};
  const CAPTURED_APIS = {"https://fonts.gstatic.com/s/fraunces/v38/6NUs8FyLNQOQZAnv9ZwNjucMHVn85Ni7emAe9lKqZTnbB-gzTK0K1ChJdt9vIVYX9G37lvd9mv0iQg.woff2": "/https:/fonts.gstatic.com/s/fraunces/v38/6NUs8FyLNQOQZAnv9ZwNjucMHVn85Ni7emAe9lKqZTnbB-gzTK0K1ChJdt9vIVYX9G37lvd9mv0iQg.woff2", "/s/fraunces/v38/6NUs8FyLNQOQZAnv9ZwNjucMHVn85Ni7emAe9lKqZTnbB-gzTK0K1ChJdt9vIVYX9G37lvd9mv0iQg.woff2": "/https:/fonts.gstatic.com/s/fraunces/v38/6NUs8FyLNQOQZAnv9ZwNjucMHVn85Ni7emAe9lKqZTnbB-gzTK0K1ChJdt9vIVYX9G37lvd9mv0iQg.woff2", "https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2": "/https:/fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2", "/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2": "/https:/fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2", "https://firebase.googleapis.com/v1alpha/projects/-/apps/1:1098993766011:web:1fbb8333faac3a08e11cde/webConfig": "/cdn/firebase.googleapis.com/v1alpha/projects/-/apps/1_1098993766011_web_1fbb8333faac3a08e11cde/webConfig", "/v1alpha/projects/-/apps/1:1098993766011:web:1fbb8333faac3a08e11cde/webConfig": "/cdn/firebase.googleapis.com/v1alpha/projects/-/apps/1_1098993766011_web_1fbb8333faac3a08e11cde/webConfig", "https://yoointerior.com/_nuxt/builds/meta/215151b9-820f-4566-991c-820071f564e3.json": "/_nuxt/builds/meta/215151b9-820f-4566-991c-820071f564e3.json", "/_nuxt/builds/meta/215151b9-820f-4566-991c-820071f564e3.json": "/_nuxt/builds/meta/215151b9-820f-4566-991c-820071f564e3.json", "https://firebaseinstallations.googleapis.com/v1/projects/user-tourly/installations": "/cdn/firebaseinstallations.googleapis.com/v1/projects/user-tourly/installations", "/v1/projects/user-tourly/installations": "/cdn/firebaseinstallations.googleapis.com/v1/projects/user-tourly/installations", "https://yoointerior.com/api/content/expertise": "/api/content/expertise", "/api/content/expertise": "/api/content/expertise", "https://yoointerior.com/api/projects?offset=0&limit=10": "/api/projects__q0e747af1e7.json", "https://yoointerior.com/api/projects": "/api/projects__q0e747af1e7.json", "/api/projects": "/api/projects__q0e747af1e7.json", "https://yoointerior.com/api/content/about": "/api/content/about", "/api/content/about": "/api/content/about", "https://yoointerior.com/api/case-study?offset=0&limit=10": "/api/case-study__q0e747af1e7.json", "https://yoointerior.com/api/case-study": "/api/case-study__q0e747af1e7.json", "/api/case-study": "/api/case-study__q0e747af1e7.json", "https://yoointerior.com/api/news-press?page=1": "/api/news-press__q2679a79d55.json", "https://yoointerior.com/api/news-press": "/api/news-press__q2679a79d55.json", "/api/news-press": "/api/news-press__q2679a79d55.json", "https://yoointerior.com/api/content/contact": "/api/content/contact", "/api/content/contact": "/api/content/contact", "https://yoointerior.com/api/homepage/projects": "/api/homepage/projects", "/api/homepage/projects": "/api/homepage/projects"};
  const ORIGIN = "https://yoointerior.com";
  const HOME_PATH = "/";
  const ROOT_CAPTURED = true;
  const TAB_ALIAS = {};
  const TAB_DUP = {};
  const VIEW_FILES = {"/#view=6f9ba62504": "/pages/index__h464e42f5.html", "/#view=5854415299": "/pages/index__h66c32998.html", "/expertise#view=7ad43ed107": "/pages/expertise__h15028eb4.html"};
  const CHROME_MENUS = [];
  let __wcOverlayScrubUntil = 0;
  function originHost(u) {
    try {
      let h = new URL(u, location.href).hostname.toLowerCase();
      if (h.indexOf("www.") === 0) h = h.slice(4);
      return h;
    } catch (e) { return ""; }
  }
  function sameSiteHost(u) {
    const a = originHost(u);
    return !!a && a === originHost(ORIGIN);
  }
  const PAGES = new Set(["/", "/#view=5854415299", "/#view=6f9ba62504", "/expertise", "/expertise#view=7ad43ed107", "/expertise/", "/index.html", "/pages/expertise__h15028eb4.html", "/pages/index__h464e42f5.html", "/pages/index__h66c32998.html"]);
  function _pathNorm(p) {
    return (p || "/").replace(/\/$/, "") || "/";
  }
  function _tabKey(search) {
    const m = String(search || "").match(/[?&]tab=([^&]+)/);
    if (!m) return "";
    let t = m[1];
    try { t = decodeURIComponent(t); } catch (e) {}
    return String(t).toLowerCase().replace(/[^a-z0-9]+/g, "");
  }
  function looksAuthGate(pathname) {
    const segs = (pathname || "/").toLowerCase().split("/").filter(Boolean);
    if (!segs.length) return false;
    const last = segs[segs.length - 1];
    if (["login","signin","sign-in","sign-up","signup","logout","register"].indexOf(last) !== -1) return true;
    return segs.indexOf("auth") !== -1;
  }
  function pathInPages(pathname, search) {
    const raw = pathname || "/";
    const p = (typeof filePathToSpa === "function") ? filePathToSpa(raw) : raw;
    const q = search || "";
    if (q && (PAGES.has(p + q) || PAGES.has(p + q.replace(/^\?/, "?")))) return true;
    if (PAGES.has(p) || PAGES.has(p.replace(/\/$/, "") || "/")) return true;
    if (PAGES.has(raw) || PAGES.has(raw.replace(/\/$/, "") || "/")) return true;
    return false;
  }
  function viewFileForHash() {
    try {
      const hash = String(location.hash || "").replace(/^#/, "");
      if (!hash) return "";
      const p = _pathNorm(location.pathname);
      const q = location.search || "";
      const keys = [];
      if (q) keys.push(p + q + "#" + hash);
      keys.push(p + "#" + hash);
      keys.push((location.pathname || "/") + "#" + hash);
      for (let i = 0; i < keys.length; i++) {
        const dest = VIEW_FILES[keys[i]];
        if (dest) return dest;
      }
    } catch (e) {}
    return "";
  }
  function isEngineViewHash(hash) {
    const h = String(hash || "").replace(/^#/, "");
    return /^view=[0-9a-f]{8,20}$/i.test(h);
  }
  function restoreCapturedHash() {
    try {
      if (location.hash) return;
      // Never invent a hash from an arbitrary VIEW_FILES snapshot. That would
      // navigate a healthy document onto a loading/error freeze.
    } catch (e) {}
  }
  function replayCapturedView() {
    restoreCapturedHash();
    if (isEngineViewHash(location.hash || "")) return;
    const dest = viewFileForHash();
    if (!dest) return;
    try {
      const destUrl = new URL(dest, location.href);
      if (_pathNorm(destUrl.pathname) === _pathNorm(location.pathname)) return;
      location.replace(destUrl.pathname + (location.search || "") + (location.hash || ""));
    } catch (e) {}
  }
  function applyTabAlias(url) {
    try {
      const u = new URL(url, location.href);
      const key = _pathNorm(u.pathname) + (u.search || "");
      const mapped = TAB_ALIAS[key];
      if (mapped) return mapped + (u.hash || "");
    } catch (e) {}
    return url;
  }
  function guardHistUrl(url) {
    if (url == null || url === "") return url;
    url = applyTabAlias(url);
    try {
      const next = new URL(url, location.href);
      if (looksAuthGate(next.pathname)) {
        const home = HOME_PATH || "/";
        const hereAuth = looksAuthGate(location.pathname);
        const onCapturedApp = !hereAuth && (
          pathInPages(location.pathname, location.search || "")
          || isHomeish(location.pathname)
        );
        if (onCapturedApp) return null;
        if (!pathInPages(next.pathname, next.search || "")) return home;
      }
      if (_pathNorm(next.pathname) !== _pathNorm(location.pathname)) return url;
      const nt = _tabKey(next.search);
      const ct = _tabKey(location.search);
      const dups = TAB_DUP[_pathNorm(next.pathname)] || [];
      if (ct && nt && ct !== nt && dups.indexOf(nt) !== -1 && dups.indexOf(ct) === -1) {
        return null;
      }
    } catch (e) {}
    return url;
  }
  function notifyReplayShell() {
    try {
      if (window.parent && window.parent !== window) {
        window.parent.postMessage(
          { wc: "nav", path: location.pathname + location.search + location.hash },
          location.origin
        );
      }
    } catch (e) {}
  }
  try {
    const _push = history.pushState.bind(history);
    const _replace = history.replaceState.bind(history);
    history.pushState = function (s, t, u) {
      if (u != null) {
        const g = guardHistUrl(u);
        if (g === null) return;
        u = g;
      }
      const ret = _push(s, t, u);
      try { markOverlayScrubWindow(); } catch (e) {}
      try { notifyReplayShell(); } catch (e) {}
      return ret;
    };
    history.replaceState = function (s, t, u) {
      if (u != null) {
        const g = guardHistUrl(u);
        if (g === null) return;
        u = g;
      }
      const ret = _replace(s, t, u);
      try { markOverlayScrubWindow(); } catch (e) {}
      try { notifyReplayShell(); } catch (e) {}
      return ret;
    };
    window.addEventListener("popstate", function () { try { notifyReplayShell(); } catch (e) {} });
  } catch (e) {}
  // Next.js and similar apps use location.assign/replace for MPA auth gates.
  // Native Location methods are not wrappable in Chromium; intercept the
  // document navigation instead so an uncaptured login URL cannot reload.
  try {
    if (window.navigation && typeof navigation.addEventListener === "function") {
      navigation.addEventListener("navigate", function (ev) {
        try {
          if (ev.hashChange || ev.downloadRequest) return;
          const dest = ev.destination && ev.destination.url;
          if (!dest) return;
          const next = new URL(dest, location.href);
          const liveHost = ORIGIN && originHost(next.href) === originHost(ORIGIN)
            && next.origin !== location.origin;
          if (liveHost) {
            if (ev.cancelable) ev.preventDefault();
            try {
              if (typeof ev.intercept === "function" && ev.cancelable) {
                ev.intercept({ handler: function () { return Promise.resolve(); } });
              }
            } catch (ie) {}
            const nav = resolveNav(next.pathname, next.search || "");
            if (nav) {
              navigateCaptured(nav.path, nav.search || "", next.hash || "");
            } else if (typeof showOfflineNotice === "function") {
              showOfflineNotice(
                "This page was not captured. Open WebCopier and continue this project — or upgrade if your page limit is used."
              );
            }
            return;
          }
          if (!ev.cancelable) return;
          if (next.origin !== location.origin) return;
          if (!looksAuthGate(next.pathname)) return;
          const g = guardHistUrl(dest);
          if (g === null) {
            ev.preventDefault();
            return;
          }
          const mapped = new URL(g, location.href);
          if (looksAuthGate(mapped.pathname)) return;
          ev.preventDefault();
          if (_pathNorm(mapped.pathname) !== _pathNorm(location.pathname)
              || (mapped.search || "") !== (location.search || "")) {
            try { history.replaceState(history.state, "", mapped.pathname + mapped.search + (mapped.hash || "")); } catch (e2) {}
          }
        } catch (e) {}
      });
    }
  } catch (e) {}
  const UNAVAILABLE = "/";
  function showOfflineNotice(message, opts) { return; }
    opts = opts || {};
    try {
      if (!__wcNoticeEl) {
        __wcNoticeEl = document.createElement("div");
        __wcNoticeEl.setAttribute("data-webcopier-notice", "1");
        __wcNoticeEl.style.cssText =
          "position:fixed;z-index:2147483646;left:16px;right:16px;bottom:16px;max-width:420px;margin:0 auto;" +
          "background:#111;color:#f5f5f5;border:1px solid #333;border-radius:10px;padding:12px 14px;" +
          "font:13px/1.4 system-ui,sans-serif;box-shadow:0 8px 28px rgba(0,0,0,.35);display:flex;gap:10px;align-items:flex-start;";
        document.documentElement.appendChild(__wcNoticeEl);
      }
      __wcNoticeEl.innerHTML = "";
      const text = document.createElement("div");
      text.style.flex = "1";
      text.textContent = message;
      __wcNoticeEl.appendChild(text);
      if (opts.href) {
        const a = document.createElement("a");
        a.href = opts.href;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = opts.buttonLabel || "Open live";
        a.style.cssText = "color:#9cf;white-space:nowrap;margin-top:2px;";
        __wcNoticeEl.appendChild(a);
      }
      const close = document.createElement("button");
      close.type = "button";
      close.textContent = "×";
      close.style.cssText =
        "background:transparent;border:0;color:#aaa;font-size:18px;line-height:1;cursor:pointer;padding:0 2px;";
      close.onclick = function () {
        if (__wcNoticeEl && __wcNoticeEl.parentNode) __wcNoticeEl.parentNode.removeChild(__wcNoticeEl);
        __wcNoticeEl = null;
      };
      __wcNoticeEl.appendChild(close);
      clearTimeout(showOfflineNotice._t);
      showOfflineNotice._t = setTimeout(function () {
        if (__wcNoticeEl && __wcNoticeEl.parentNode) __wcNoticeEl.parentNode.removeChild(__wcNoticeEl);
        __wcNoticeEl = null;
      }, opts.ttl || 8000);
    } catch (e) {}
  }

  function logStub(url, reason) {
    try {
      window.__eniStubLog.push({ url: String(url).slice(0, 500), reason: reason, ts: Date.now() });
      if (window.__eniStubLog.length > 200) window.__eniStubLog.shift();
    } catch (e) {}
  }

  // Soft stubs so app JS does not crash when trackers are absent offline
  try {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function() { window.dataLayer.push(arguments); };
    window.ga = window.ga || function() {};
    window.fbq = window.fbq || function() {};
    window.twq = window.twq || function() {};
    window.NREUM = window.NREUM || { noticeError: function() {}, setCustomAttribute: function() {} };
    window.newrelic = window.newrelic || window.NREUM;
    window.google_tag_manager = window.google_tag_manager || {};
    if (!window.google_tag_manager.rm) {
      window.google_tag_manager.rm = new Proxy({}, {
        get: function() { return function() { return ""; }; },
      });
    }
    window.OneTrust = window.OneTrust || {
      LoadBanner: function() {},
      ToggleInfoDisplay: function() {},
      OnConsentChanged: function() {},
      IsAlertBoxClosed: function() { return true; },
      GetDomainData: function() { return { Groups: [] }; },
    };
    window.Optanon = window.Optanon || window.OneTrust;
    window.OptanonWrapper = window.OptanonWrapper || function() {};
  } catch (e) {}

  try {
    const origGetContext = HTMLCanvasElement.prototype.getContext;
    // Remember which context the page itself claimed. A canvas accepts exactly
    // one context kind for its lifetime, so any probe of ours must reuse that
    // kind or it silently steals the canvas from the renderer.
    window.__wcCanvasCtx = new WeakMap();
    function recordCtx(canvas, type, ctx) {
      try {
        if (ctx && !window.__wcCanvasCtx.has(canvas)) {
          window.__wcCanvasCtx.set(canvas, String(type || ""));
        }
      } catch (e) {}
      return ctx;
    }
    window.__wcExistingContext = function (canvas, kinds) {
      try {
        const type = window.__wcCanvasCtx.get(canvas);
        if (!type || kinds.indexOf(type) === -1) return null;
        return origGetContext.call(canvas, type);
      } catch (e) {
        return null;
      }
    };
    HTMLCanvasElement.prototype.getContext = function (type, attrs) {
      if (attrs && typeof attrs === "object" && attrs.failIfMajorPerformanceCaveat) {
        try {
          const copy = Object.assign({}, attrs);
          copy.failIfMajorPerformanceCaveat = false;
          return recordCtx(this, type, origGetContext.call(this, type, copy));
        } catch (e) {}
      }
      return recordCtx(this, type, origGetContext.call(this, type, attrs));
    };
  } catch (e) {}

  try {
    const COMPLETION_STATUS_KHR = 0x91B1;
    function patchGLProto(proto) {
      if (!proto || !proto.getExtension) return;
      const origExt = proto.getExtension;
      proto.getExtension = function (name) {
        if (name === "KHR_parallel_shader_compile") return null;
        return origExt.call(this, name);
      };
      if (proto.getProgramParameter) {
        const origParam = proto.getProgramParameter;
        proto.getProgramParameter = function (program, pname) {
          if (pname === COMPLETION_STATUS_KHR) return true;
          return origParam.call(this, program, pname);
        };
      }
    }
    if (typeof WebGLRenderingContext !== "undefined") patchGLProto(WebGLRenderingContext.prototype);
    if (typeof WebGL2RenderingContext !== "undefined") patchGLProto(WebGL2RenderingContext.prototype);
  } catch (e) {}

  try {
    const OrigWorker = window.Worker;
    if (OrigWorker) {
      window.Worker = function (scriptURL, options) {
        if (options && options.type === "module") {
          return new OrigWorker(scriptURL, options);
        }
        try {
          const origin = JSON.stringify(location.origin);
          const boot =
            "(function(){var O=" + origin + ";" +
            // TrustedScriptURL / URL objects stringify to the real path. Left
            // as objects they reach importScripts unresolved, and a blob worker
            // has no base to resolve a root-relative path against.
            "function A(u){try{if(u==null)return u;" +
            "if(typeof u!=='string'){if(!u.toString)return u;u=String(u);}if(!u)return u;" +
            "if(u.indexOf('data:')===0)return u;" +
            "if(u.indexOf('blob:')===0){if(u.indexOf('blob:'+O)===0)return u;return '';}" +
            "if(u.indexOf('//')===0)u='https:'+u;" +
            "if(u.charAt(0)==='/')return O+u;" +
            "if(u.indexOf('http://')===0||u.indexOf('https://')===0){" +
            "var x=new URL(u);return O+x.pathname+x.search;}" +
            "return new URL(u,O+'/').href;}catch(e){return u;}}" +
            "var origIS=self.importScripts.bind(self);" +
            "self.importScripts=function(){var a=[];for(var i=0;i<arguments.length;i++)a.push(A(arguments[i]));return origIS.apply(self,a);};" +
            "var f=self.fetch.bind(self);self.fetch=function(i,n){try{if(typeof i==='string')i=A(i);else if(i&&typeof i.url==='string')i=new Request(A(i.url),i);}catch(e){}return f(i,n);};" +
            "if(self.XMLHttpRequest){var x=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(m,u){try{arguments[1]=A(u);}catch(e){}return x.apply(this,arguments);};}" +
            "origIS(A(" + JSON.stringify(String(scriptURL)) + "));" +
            "})();";
          return new OrigWorker(URL.createObjectURL(new Blob([boot], { type: "text/javascript" })), options);
        } catch (e) {
          return new OrigWorker(scriptURL, options);
        }
      };
      window.Worker.prototype = OrigWorker.prototype;
    }
  } catch (e) {}

  function abs(u) {
    try { return new URL(u, location.href).href; } catch (e) { return String(u || ""); }
  }

  function looksApi(pathname) {
    const p = (pathname || "").toLowerCase();
    if (/(^|\/)(_)?payload\.json$/i.test(p)) return false;
    if (p.indexOf("/_nuxt/") !== -1 && /\.json$/i.test(p)) return false;
    return (
      p === "/healthcheck" ||
      p === "/health" ||
      p.indexOf("/api/") !== -1 ||
      p.indexOf("/graphql") !== -1 ||
      p.indexOf("/v1/") !== -1 ||
      p.indexOf("/v2/") !== -1 ||
      p.indexOf("/rpc/") !== -1 ||
      p.indexOf("/data/") !== -1 ||
      p.indexOf("/query") !== -1 ||
      /\.(json)(\?|$)/i.test(p)
    );
  }

  function isAssetPath(pathname) {
    return /\.(js|mjs|css|map|json|wasm|png|jpe?g|gif|webp|avif|svg|ico|bmp|woff2?|ttf|otf|eot|mp3|ogg|wav|mp4|webm|glb|gltf|hdr|ktx2|bin|htc)(\?|$)/i.test(
      pathname || ""
    );
  }

  function filePathToSpa(pathname) {
    let p = pathname || "/";
    if (p === "/index.html" || p === "/index.htm") return HOME_PATH || "/";
    const m = p.match(/^\/pages(\/.+)\.html?$/i);
    if (m) return m[1];
    return p;
  }

  function prefixHome(pathname) {
    const segs = (pathname || "/").split("/").filter(Boolean);
    if (segs.length !== 1) return null;
    const prefix = "/" + segs[0];
    let best = null;
    PAGES.forEach(function (cand) {
      if (typeof cand !== "string") return;
      if (cand.indexOf("/pages/") === 0) return;
      if (cand.indexOf("?") !== -1) return;
      if (cand === prefix || cand.indexOf(prefix + "/") === 0) {
        if (!best || cand.length < best.length) best = cand;
      }
    });
    return best;
  }

  function pageCaptured(pathname, search) {
    const raw = pathname || "/";
    const p = filePathToSpa(raw);
    const q = search || "";
    if (q && (PAGES.has(p + q) || PAGES.has(p + q.replace(/^\?/, "?")))) return true;
    if (PAGES.has(p) || PAGES.has(p.replace(/\/$/, "") || "/")) return true;
    if ((p === "/" || p === "") && ROOT_CAPTURED) return true;
    if (prefixHome(p)) return true;
    return false;
  }

  function resolveNav(pathname, search) {
    let p = filePathToSpa(pathname || "/");
    const q = search || "";
    if (p === "/" || p === "") p = HOME_PATH || "/";
    if (q && (PAGES.has(p + q) || PAGES.has(p + q.replace(/^\?/, "?")))) {
      return { path: p, search: q };
    }
    if (PAGES.has(p) || PAGES.has(p.replace(/\/$/, "") || "/")) {
      return { path: p, search: q };
    }
    if (p === "/" || p === "") return { path: HOME_PATH || "/", search: "" };
    const pref = prefixHome(p);
    if (pref) return { path: pref, search: "" };
    if (looksAuthGate(p)) return { path: HOME_PATH || "/", search: "" };
    return null;
  }

  (function syncReplayEntry() {
    try {
      const home = HOME_PATH || "/";
      if (!home || _pathNorm(home) === "/") return;
      if (ROOT_CAPTURED) return;
      const here = filePathToSpa(location.pathname || "/");
      if (_pathNorm(here) !== "/" && here !== "/index.html" && here !== "/index.htm") return;
      const next = home + (location.search || "") + (location.hash || "");
      history.replaceState(history.state, "", next);
    } catch (e) {}
  })();

  function apiLookup(absUrl) {
    if (CAPTURED_APIS[absUrl]) return CAPTURED_APIS[absUrl];
    try {
      const u = new URL(absUrl);
      const base = u.origin + u.pathname;
      if (CAPTURED_APIS[base]) return CAPTURED_APIS[base];
      if (CAPTURED_APIS[u.pathname]) return CAPTURED_APIS[u.pathname];
    } catch (e) {}
    return null;
  }

  function bundleLookup(absUrl) {
    try {
      const u = new URL(absUrl);
      const base = u.origin + (u.pathname || "/").replace(/\/$/, "") || u.origin + "/";
      const keys = [base, u.origin + u.pathname.replace(/\/$/, "")];
      for (let i = 0; i < keys.length; i++) {
        if (BUNDLES[keys[i]]) return BUNDLES[keys[i]];
      }
      const path = (u.pathname || "").toLowerCase();
      if (path.indexOf("/rest/v") !== -1 || path.indexOf("/graphql") !== -1) {
        for (const k in BUNDLES) {
          if (k.indexOf(u.pathname.replace(/\/$/, "")) !== -1) return BUNDLES[k];
        }
      }
    } catch (e) {}
    return null;
  }

  function stripRscQuery(q) {
    const raw = String(q || "").replace(/^\?/, "");
    if (!raw) return "";
    const kept = raw.split("&").filter(function(part) {
      return part && part.split("=")[0].toLowerCase() !== "_rsc";
    });
    return kept.length ? ("?" + kept.join("&")) : "";
  }
  function rscLookup(path, q) {
    const p = path || "/";
    const query = q || "";
    if (query && RSC_BY_QUERY[p + query]) return RSC_BY_QUERY[p + query];
    const trimmed = p.replace(/\/$/, "") || "/";
    if (query && RSC_BY_QUERY[trimmed + query]) return RSC_BY_QUERY[trimmed + query];
    const stripped = stripRscQuery(query);
    const hits = [];
    for (const key in RSC_BY_QUERY) {
      const qi = key.indexOf("?");
      const kp = qi >= 0 ? key.slice(0, qi) : key;
      const kq = qi >= 0 ? key.slice(qi) : "";
      if ((kp === p || kp === trimmed) && stripRscQuery(kq) === stripped) {
        hits.push(RSC_BY_QUERY[key]);
      }
    }
    const uniq = [];
    for (let i = 0; i < hits.length; i++) {
      if (uniq.indexOf(hits[i]) === -1) uniq.push(hits[i]);
    }
    if (uniq.length === 1) return uniq[0];
    if (RSC_BY_PATH[p]) return RSC_BY_PATH[p];
    if (RSC_BY_PATH[trimmed]) return RSC_BY_PATH[trimmed];
    if (RSC_BY_PATH[p + "/"]) return RSC_BY_PATH[p + "/"];
    return "";
  }
  function mapLookup(path, q) {
    const exact = ORIGIN + path + (q || "");
    if (MAP[exact]) return MAP[exact];
    if (q) {
      if (String(q).indexOf("_rsc=") !== -1) {
        const flight = rscLookup(path, q);
        if (flight) return flight;
      }
      // Keep query identity (RSC, image optimizer, deployment cache busters).
      const bare = MAP[ORIGIN + path] || MAP[ORIGIN + (path.replace(/\/$/, "") || "/")];
      if (bare && /\.(json|txt)(\?|$)/i.test(path)) return path;
      if (bare && /\.(m?js|css|map|wasm)(\?|$)/i.test(path)) return path + q;
      return null;
    }
    if (MAP[ORIGIN + path]) return MAP[ORIGIN + path];
    const trimmed = ORIGIN + (path.replace(/\/$/, "") || "/");
    if (MAP[trimmed]) return MAP[trimmed];
    return null;
  }

  function looksFragmentRoute(pathname) {
    const p = (pathname || "/").toLowerCase();
    if (!p || p === "/") return false;
    if (isAssetPath(p)) return false;
    if (pageCaptured(p)) return false;
    const seg = p.split("/").filter(Boolean);
    return seg.length <= 2;
  }

  function localPathFromOrigin(a) {
    try {
      const u = new URL(a);
      const path = u.pathname || "/";
      const q = u.search || "";
      const hit = mapLookup(path, q);
      if (hit) return hit;
      if (MAP[a]) return MAP[a];
      if (MAP[u.origin + path]) return MAP[u.origin + path];
      const bundled = bundleLookup(a);
      if (bundled) return bundled;
      const apiHit = apiLookup(a);
      if (apiHit) return apiHit;
      if (isAssetPath(path) && path.indexOf("/api/") === -1 && path.indexOf("/graphql") === -1) {
        return path + q;
      }
      if (looksApi(path) && !hit) {
        logStub(a, 'no_captured_api_response');
        return "__eni_empty_json__";
      }
      if (!isAssetPath(path) && !pageCaptured(path)) {
        if (looksFragmentRoute(path)) return path + q;
        return UNAVAILABLE;
      }
      return path + q;
    } catch (e) {
      return "/";
    }
  }

  function remapBlob(u) {
    if (!u || typeof u !== "string" || u.indexOf("blob:") !== 0) return u;
    try {
      const reg = window.__eniBlobRegistry;
      if (reg && typeof reg.lookup === "function") {
        const hit = reg.lookup(u);
        if (hit) return hit;
      }
      if (window.__eniBlobMap && window.__eniBlobMap[u]) return window.__eniBlobMap[u];
    } catch (e) {}
    if (u.indexOf("blob:https:") === 0 || u.indexOf("blob:http:") === 0) {
      try {
        const host = location.host;
        if (u.indexOf("blob:http://" + host) !== 0 && u.indexOf("blob:https://" + host) !== 0) {
          return "__eni_block__";
        }
      } catch (e) {
        return "__eni_block__";
      }
    }
    return u;
  }
  function remap(u) {
    if (!u || typeof u !== "string") return u;
    if (u.startsWith("data:") || u.startsWith("javascript:")) return u;
    if (u.startsWith("blob:")) return remapBlob(u);
    const a = abs(u);
    if (BLOCK.test(a)) return "__eni_block__";
    try {
      const probe = new URL(a, location.href);
      const pn = probe.pathname || "";
      if (pn === "/_next/image" || pn.indexOf("/_next/image") !== -1) {
        const orig = probe.searchParams.get("url") || probe.searchParams.get("src");
        if (orig) {
          const decoded = decodeURIComponent(orig);
          if (decoded.charAt(0) === "/" && decoded.charAt(1) !== "/") {
            return remap(decoded.split("?")[0]);
          }
        }
      }
      if (PATH_ALIAS[pn]) return PATH_ALIAS[pn];
      if ((pn.indexOf("/gh/") === 0 || pn.indexOf("/npm/") === 0) && pn.indexOf("/cdn/") !== 0) {
        return "/cdn/cdn.jsdelivr.net" + pn + (probe.search || "");
      }
    } catch (e) {}
    if (MAP[a]) return MAP[a];
    const noq = a.split("?")[0];
    if (MAP[noq]) return MAP[noq];
    const bundledEarly = bundleLookup(a);
    if (bundledEarly) return bundledEarly;
    const apiEarly = apiLookup(a);
    if (apiEarly) return apiEarly;

    try {
      const parsed = new URL(a);
      if (parsed.searchParams.has("_rsc")) {
        const hit = mapLookup(parsed.pathname, parsed.search || "");
        if (hit) return hit;
        const byPath = rscLookup(parsed.pathname, parsed.search || "");
        if (byPath) return byPath;
        logStub(a, 'rsc_pass_server');
        return parsed.pathname + (parsed.search || "");
      }
      if (parsed.host === location.host) {
        const hit = mapLookup(parsed.pathname, parsed.search || "");
        if (hit) return hit;
        if (PATH_ALIAS[parsed.pathname]) return PATH_ALIAS[parsed.pathname];
        if (looksFragmentRoute(parsed.pathname)) {
          return parsed.pathname + (parsed.search || "");
        }
        return localPathFromOrigin(ORIGIN + parsed.pathname + (parsed.search || ""));
      }
      if (ORIGIN && (a === ORIGIN || a.indexOf(ORIGIN + "/") === 0)) {
        return localPathFromOrigin(a);
      }
      if (parsed.hostname && parsed.pathname && parsed.pathname !== "/") {
        if (parsed.hostname === "cdn.sanity.io" || (parsed.hostname && parsed.hostname.indexOf(".cdn.sanity.io") !== -1)) {
          return "/sanity-cdn" + parsed.pathname + (parsed.search || "");
        }
        const cdnGuess = "/cdn/" + parsed.hostname + parsed.pathname;
        if (MAP[a] || MAP[noq]) return MAP[a] || MAP[noq];
        if (
          parsed.hostname.indexOf("jsdelivr") !== -1 ||
          parsed.hostname.indexOf("gstatic") !== -1 ||
          parsed.hostname.indexOf("googleapis") !== -1 ||
          parsed.hostname.indexOf("unpkg") !== -1 ||
          parsed.hostname.indexOf("githack") !== -1 ||
          parsed.hostname.indexOf("cloudflare") !== -1 ||
          parsed.hostname.indexOf("sanity") !== -1 ||
          parsed.hostname.indexOf("nc-img") !== -1 ||
          parsed.hostname.indexOf("cdn.") !== -1 ||
          parsed.hostname.indexOf("static.") !== -1 ||
          parsed.hostname.indexOf("assets.") !== -1 ||
          parsed.hostname.indexOf("akamai") !== -1 ||
          parsed.hostname.indexOf("cloudfront") !== -1 ||
          parsed.hostname.indexOf("supabase.co") !== -1 ||
          parsed.hostname.indexOf("supabase.in") !== -1
        ) {
          const bundled = bundleLookup(a);
          if (bundled) return bundled;
          return cdnGuess + (parsed.search || "");
        }
        if (looksApi(parsed.pathname)) {
          const bundled = bundleLookup(a);
          if (bundled) return bundled;
          const apiHit = apiLookup(a);
          if (apiHit) return apiHit;
          return "/cdn/" + parsed.hostname + parsed.pathname + (parsed.search || "");
        }
        logStub(a, 'cross_origin_live_blocked');
        return "__eni_block__";
      }
    } catch (e) {}
    try {
      const parsed = new URL(a);
      if (parsed.host !== location.host) {
        logStub(a, 'cross_origin_live_blocked');
        if (looksApi(parsed.pathname)) return "__eni_empty_json__";
        return "__eni_block__";
      }
    } catch (e) {}
    return u;
  }

  function resolveFetchInput(input) {
    if (typeof input === "string") {
      const r = remap(input);
      if (r === "__eni_block__") return { kind: "empty" };
      if (r === "__eni_keep_document__") return { kind: "keep" };
      if (r === "__eni_empty_json__") return { kind: "json" };
      if (r === "__eni_rsc_stub__") return { kind: "rsc_stub" };
      return { kind: "url", url: r };
    }
    if (input && typeof input.url === "string") {
      const r = remap(input.url);
      if (r === "__eni_block__") return { kind: "empty" };
      if (r === "__eni_keep_document__") return { kind: "keep" };
      if (r === "__eni_empty_json__") return { kind: "json" };
      if (r === "__eni_rsc_stub__") return { kind: "rsc_stub" };
      if (r !== input.url) return { kind: "request", request: new Request(r, input) };
    }
    return { kind: "passthrough", input: input };
  }

  const origFetch = window.fetch;
  window.fetch = function(input, init) {
    try {
      const r = resolveFetchInput(input);
      if (r.kind === "empty") return Promise.resolve(new Response("", { status: 204 }));
      if (r.kind === "keep") {
        logStub(typeof input === 'string' ? input : (input && input.url) || '', 'rsc_keep_document');
        return Promise.resolve(new Response("", {
          status: 204,
          headers: { "X-WebCopier-Keep-Document": "1" },
        }));
      }
      if (r.kind === "rsc_stub") {
        logStub(typeof input === 'string' ? input : (input && input.url) || '', 'rsc_stub');
        return Promise.resolve(new Response('0:["$","div",null,{"children":""}]\n', {
          status: 200,
          headers: { "Content-Type": "text/x-component" },
        }));
      }
      if (r.kind === "json") {
        logStub(typeof input === 'string' ? input : (input && input.url) || '', 'stub_empty_json');
        try {
          showOfflineNotice("Live data unavailable offline");
        } catch (e) {}
        return Promise.resolve(
          new Response(JSON.stringify({ ok: false, offline: true, message: "Live data unavailable offline" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          })
        );
      }
      const method = ((init && init.method) || (input && input.method) || "GET").toUpperCase();
      if (method !== "GET" && method !== "HEAD") {
        try {
          showOfflineNotice("This action requires the live site");
        } catch (e) {}
        return Promise.resolve(
          new Response(JSON.stringify({ ok: false, offline: true, writeBlocked: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          })
        );
      }
      function readAccept() {
        try {
          if (init && init.headers) {
            const h = init.headers;
            if (typeof h.get === "function") return String(h.get("Accept") || h.get("accept") || "");
            return String(h.Accept || h.accept || "");
          }
          if (input && input.headers && typeof input.headers.get === "function") {
            return String(input.headers.get("Accept") || "");
          }
        } catch (e) {}
        return "";
      }
      const accept = readAccept().toLowerCase();
      const dest = String((r.url || (r.request && r.request.url) || "")).split("?")[0];
      const wantsJson = (accept.indexOf("application/json") !== -1 && accept.indexOf("text/html") === -1)
        || /\.(json)(\?|$)/i.test(dest);
      if (wantsJson && (dest.endsWith(".html") || dest.endsWith("/webcopier-unavailable.html") || dest.indexOf("/pages/") !== -1)) {
        return Promise.resolve(
          new Response(JSON.stringify({ ok: false, offline: true, message: "HTML is not JSON" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          })
        );
      }
      if (r.kind === "url") input = r.url;
      if (r.kind === "request") input = r.request;
    } catch (e) {}
    return origFetch.call(this, input, init).then(function(resp) {
      try {
        const dest = String((resp && resp.url) || "").split("?")[0];
        const ct = String((resp && resp.headers && resp.headers.get("content-type")) || "").toLowerCase();
        if (ct.indexOf("text/html") !== -1 && (/\.json(\?|$)/i.test(dest) || dest.endsWith("/webcopier-unavailable.html"))) {
          return new Response(JSON.stringify({ ok: false, offline: true, message: "HTML is not JSON" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        }
      } catch (e) {}
      return resp;
    });
  };

  try {
    const origRespJson = Response.prototype.json;
    Response.prototype.json = function() {
      const self = this;
      return self.clone().text().then(function(text) {
        const trimmed = String(text || "").replace(/^\uFEFF/, "").trim();
        if (trimmed.charAt(0) === "<") {
          return { ok: false, offline: true, message: "HTML is not JSON" };
        }
        try { return JSON.parse(text); } catch (e) {
          return origRespJson.call(self);
        }
      });
    };
  } catch (e) {}

  try {
    const origParse = JSON.parse;
    JSON.parse = function(text, reviver) {
      const trimmed = String(text == null ? "" : text).replace(/^\uFEFF/, "").trim();
      if (trimmed.charAt(0) === "<") {
        return {};
      }
      return origParse.call(this, text, reviver);
    };
  } catch (e) {}

  const oopen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function(method, url) {
    const r = remap(url);
    const raw = String(url || "").split("?")[0];
    const dest = String(r || "").split("?")[0];
    const wantsData = /\.(json|zip|wasm|bin)(\?|$)/i.test(raw);
    if (r === "__eni_block__") {
      arguments[1] = EMPTY_TEXT;
    } else if (r === "__eni_keep_document__") {
      arguments[1] = EMPTY_TEXT;
    } else if (r === "__eni_empty_json__") {
      arguments[1] = EMPTY_JSON;
    } else if (wantsData && (dest.endsWith(".html") || dest.endsWith("/webcopier-unavailable.html"))) {
      arguments[1] = EMPTY_JSON;
    } else {
      arguments[1] = r;
    }
    return oopen.apply(this, arguments);
  };

  try {
    const proto = HTMLImageElement.prototype;
    const desc = Object.getOwnPropertyDescriptor(proto, "src");
    if (desc && desc.set) {
      Object.defineProperty(proto, "src", {
        configurable: true,
        enumerable: desc.enumerable,
        get: desc.get,
        set: function(v) {
          const r = remap(v);
          desc.set.call(this, r === "__eni_block__" || r === "__eni_empty_json__" ? EMPTY_TEXT : r);
        },
      });
    }
  } catch (e) {}

  try {
    const sproto = HTMLScriptElement.prototype;
    const sdesc = Object.getOwnPropertyDescriptor(sproto, "src");
    if (sdesc && sdesc.set) {
      Object.defineProperty(sproto, "src", {
        configurable: true,
        enumerable: sdesc.enumerable,
        get: sdesc.get,
        set: function(v) {
          try {
            const u = new URL(v, location.href);
            if (/\.(m?js|css)(\?|$)/i.test(u.pathname)) {
              if (u.origin === location.origin) {
                sdesc.set.call(this, v);
                return;
              }
              if (ORIGIN) {
                const live = new URL(ORIGIN);
                if (u.origin === live.origin) {
                  sdesc.set.call(this, u.pathname + u.search + u.hash);
                  return;
                }
              }
            }
          } catch (e) {}
          const r = remap(v);
          sdesc.set.call(this, r === "__eni_block__" || r === "__eni_empty_json__" ? EMPTY_TEXT : r);
        },
      });
    }
  } catch (e) {}

  if (navigator.sendBeacon) {
    navigator.sendBeacon = function() { return true; };
  }


  // ── WebCopier Clipboard Compatibility Layer ──
  var __wcCompatClip = '';

  function wcRemember(text) {
    __wcCompatClip = String(text || '');
    return __wcCompatClip;
  }

  function wcDispatchCopy(text) {
    try {
      const dt = new DataTransfer();
      dt.setData("text/plain", String(text || ""));
      const ev = new ClipboardEvent("copy", { bubbles: true, cancelable: true, clipboardData: dt });
      const target = document.activeElement || document.body;
      target.dispatchEvent(ev);
      return true;
    } catch (e) {}
    return false;
  }

  async function wcWriteText(text) {
    const s = wcRemember(text);
    wcDispatchCopy(s);
    // Defer OS clipboard attempts — never block the click/evaluate stack with execCommand.
    try {
      if (typeof window.__wcOrigClipboardWriteText === 'function') {
        Promise.resolve(window.__wcOrigClipboardWriteText(s)).catch(function () {});
      }
    } catch (e) {}
    return s;
  }

  try {
    const clip = navigator.clipboard || {};
    const origWrite = clip.writeText && clip.writeText.bind(clip);
    const origWriteItem = clip.write && clip.write.bind(clip);
    const origRead = clip.readText && clip.readText.bind(clip);
    if (origWrite && !window.__wcOrigClipboardWriteText) {
      window.__wcOrigClipboardWriteText = origWrite;
    }

    navigator.clipboard = {
      writeText: function (text) {
        wcRemember(text);
        if (origWrite) {
          return origWrite(text).catch(function () {
            return wcWriteText(text);
          });
        }
        return Promise.resolve().then(function () { return wcWriteText(text); });
      },
      readText: function () {
        if (__wcCompatClip) return Promise.resolve(__wcCompatClip);
        if (origRead) {
          return origRead().catch(function () { return Promise.resolve(__wcCompatClip || ""); });
        }
        return Promise.resolve(__wcCompatClip || "");
      },
      write: origWriteItem
        ? function (items) {
            return origWriteItem(items).catch(function () {
              for (let i = 0; i < (items || []).length; i++) {
                const it = items[i];
                if (it && it.types && it.types.indexOf("text/plain") !== -1) {
                  return it.getType("text/plain").then(function (blob) {
                    return blob.text().then(wcWriteText);
                  });
                }
              }
              return wcWriteText("");
            });
          }
        : function (items) {
            return Promise.resolve();
          },
    };

    if (!window.ClipboardItem) {
      window.ClipboardItem = function (data) { this.types = Object.keys(data || {}); this._data = data; };
      window.ClipboardItem.prototype.getType = function (type) {
        const v = this._data && this._data[type];
        return Promise.resolve(v instanceof Blob ? v : new Blob([String(v || "")], { type: type }));
      };
    }
  } catch (e) {}

  try {
    const origExec = document.execCommand.bind(document);
    document.execCommand = function (cmd) {
      if (String(cmd || "").toLowerCase() === "copy") {
        try {
          const sel = window.getSelection && window.getSelection();
          const text = sel ? String(sel.toString() || "") : "";
          if (text) wcRemember(text);
          // Attempt native copy asynchronously; never block the caller.
          try {
            setTimeout(function () {
              try { origExec("copy"); } catch (e) {}
            }, 0);
          } catch (e) {}
          return true;
        } catch (e) {}
      }
      return origExec.apply(document, arguments);
    };
  } catch (e) {}

  document.addEventListener(
    "click",
    function (ev) {
      const el = ev.target && ev.target.closest
        ? ev.target.closest("[data-copy],[data-clipboard],[data-clipboard-text],[aria-label*='copy' i],[title*='copy' i]")
        : null;
      if (!el) return;
      const text =
        el.getAttribute("data-copy") ||
        el.getAttribute("data-clipboard") ||
        el.getAttribute("data-clipboard-text") ||
        "";
      if (!text) return;
      wcRemember(text);
      Promise.resolve().then(function () { return wcWriteText(text); }).catch(function () {});
    },
    true
  );


  // Keep in-archive navigation offline: never bounce to the live origin.
  // Force full document loads for captured pages — SPA soft-nav often dies offline
  // (Next.js RSC / React hydration), which makes sidebar links and buttons look "dead".
  // Match sidebar/button labels to captured paths using ONLY this archive's PAGES
  // (no site-specific hardcoding). Slugify label text and score against path leaves.
  function pathFromLabel(raw) {
    const t = String(raw || "")
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();
    if (!t || t.length > 64) return null;
    const slug = t.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    if (!slug || slug.length < 2) return null;
    const tokens = slug.split("-").filter(Boolean);
    const WEAK = {
      all: 1, deleted: 1, new: 1, edit: 1, view: 1, list: 1, create: 1, add: 1,
      details: 1, general: 1, index: 1, filter: 1, reset: 1, sort: 1, search: 1,
      actions: 1, status: 1, pending: 1, paid: 1
    };
    const scored = [];
    PAGES.forEach(function (p) {
      if (typeof p !== "string") return;
      if (p.indexOf("/pages/") === 0) return;
      if (isAssetPath(p)) return;
      const segs = p.split("/").filter(Boolean).map(function (s) {
        return s.toLowerCase().replace(/_/g, "-");
      });
      if (!segs.length) return;
      const leaf = segs[segs.length - 1];
      let score = 0;
      if (leaf === slug) score = 100;
      else if (leaf.indexOf(slug) === 0 || slug.indexOf(leaf) === 0) score = 80;
      else if (leaf.indexOf(slug) !== -1 || slug.indexOf(leaf) !== -1) score = 55;
      else {
        let hit = 0;
        for (let i = 0; i < tokens.length; i++) {
          const tok = tokens[i];
          if (tok.length < 3) continue;
          for (let j = 0; j < segs.length; j++) {
            if (segs[j] === tok || segs[j].indexOf(tok) !== -1) hit++;
          }
        }
        if (hit) score = 30 + hit * 10;
      }
      if (score >= 80) scored.push({ p: p, score: score, len: p.length });
    });
    scored.sort(function (a, b) {
      if (b.score !== a.score) return b.score - a.score;
      return a.len - b.len;
    });
    if (!scored.length) return null;
    const top = scored[0];
    const ties = scored.filter(function (s) { return s.score === top.score; });
    if (ties.length > 1) return null;
    if (WEAK[slug]) return null;
    return top.p;
  }

  function firstLineLabel(el) {
    if (!el) return "";
    const aria = ((el.getAttribute && (el.getAttribute("aria-label") || el.getAttribute("title"))) || "").trim();
    if (aria) return aria;
    return String(el.innerText || el.textContent || "").trim().split(/\n/)[0].trim();
  }

  function capturedTabHref(label) {
    const want = String(label || "").toLowerCase().replace(/[^a-z0-9]+/g, "");
    if (!want || want.length < 2) return null;
    const path = (location.pathname || "/").replace(/\/$/, "") || "/";
    let exact = null;
    let exactLen = 0;
    let nested = null;
    let nestedLen = 0;
    PAGES.forEach(function (p) {
      if (typeof p !== "string" || p.indexOf("?tab=") === -1) return;
      const base = (p.split("?")[0] || "/").replace(/\/$/, "") || "/";
      if (base !== path) return;
      const m = p.match(/[?&]tab=([^&]+)/);
      if (!m) return;
      let tab = m[1];
      try { tab = decodeURIComponent(tab); } catch (e) {}
      const n = String(tab).toLowerCase().replace(/[^a-z0-9]+/g, "");
      if (!n) return;
      if (n === want) {
        exact = p;
        exactLen = n.length;
      } else if (n.length >= 4 && want.indexOf(n) !== -1 && n.length > nestedLen) {
        nested = p;
        nestedLen = n.length;
      }
    });
    if (nested && (!exact || nestedLen < exactLen)) return nested;
    return exact || nested;
  }

  function defaultCapturedPath() {
    const path = (location.pathname || "/").replace(/\/$/, "") || "/";
    let hasTabs = false;
    let hasBare = false;
    PAGES.forEach(function (p) {
      if (typeof p !== "string") return;
      const base = (p.split("?")[0] || "/").replace(/\/$/, "") || "/";
      if (base !== path) return;
      if (p.indexOf("?tab=") !== -1) hasTabs = true;
      else hasBare = true;
    });
    return hasTabs && hasBare ? path : null;
  }

  function inPageQueryTabDest(el) {
    if (!el || (el.closest && el.closest("aside, form, [role='combobox'], [role='listbox']"))) return null;
    const dest = capturedTabHref(firstLineLabel(el));
    if (dest) return dest;
    const group = el.parentElement;
    if (!group || !group.querySelectorAll) return null;
    const nodes = group.querySelectorAll("button, [role='tab'], a");
    let siblingHit = false;
    for (let i = 0; i < nodes.length; i++) {
      if (capturedTabHref(firstLineLabel(nodes[i]))) {
        siblingHit = true;
        break;
      }
    }
    if (!siblingHit) return null;
    return defaultCapturedPath();
  }

  function isHomeish(pathname) {
    const p = filePathToSpa(pathname || "/");
    const home = HOME_PATH || "/";
    return p === "/" || p === home || p === (home.replace(/\/$/, "") || "/");
  }

  function navigateCaptured(pathname, search, hash) {
    let next = (pathname || "/") + (search || "") + (hash || "");
    next = applyTabAlias(next);
    const cur = location.pathname + location.search + location.hash;
    try {
      const u = new URL(next, location.href);
      if (looksAuthGate(u.pathname) && !looksAuthGate(location.pathname) && (HOME_PATH || "/")) {
        return;
      }
    } catch (e) {}
    if (cur === next) {
      try { notifyReplayShell(); } catch (e) {}
      return;
    }
    try {
      const u = new URL(next, location.href);
      if (looksAuthGate(u.pathname) && !pathInPages(u.pathname, u.search || "")) {
        history.replaceState(history.state, "", next);
        return;
      }
    } catch (e) {}
    location.href = next;
  }

  function liveOriginLocalPath(u) {
    try {
      const next = new URL(String(u || ""), location.href);
      if (!ORIGIN || originHost(next.href) !== originHost(ORIGIN)) return null;
      if (next.origin === location.origin) return null;
      const nav = resolveNav(next.pathname, next.search || "");
      if (nav) return nav.path + (nav.search || "") + (next.hash || "");
      return UNAVAILABLE;
    } catch (e) {
      return null;
    }
  }
  try {
    const proto = Location.prototype;
    ["assign", "replace"].forEach(function (method) {
      try {
        const orig = proto[method];
        if (typeof orig !== "function") return;
        proto[method] = function (u) {
          const mapped = liveOriginLocalPath(u);
          return orig.call(this, mapped == null ? u : mapped);
        };
      } catch (e2) {}
    });
    const desc = Object.getOwnPropertyDescriptor(proto, "href");
    if (desc && desc.set && desc.get) {
      Object.defineProperty(proto, "href", {
        configurable: true,
        enumerable: true,
        get: function () { return desc.get.call(this); },
        set: function (v) {
          const mapped = liveOriginLocalPath(v);
          desc.set.call(this, mapped == null ? v : mapped);
        },
      });
    }
  } catch (e) {}
  try {
    const _open = window.open;
    if (typeof _open === "function") {
      window.open = function (u, n, f) {
        const mapped = u ? liveOriginLocalPath(u) : null;
        if (mapped) {
          try {
            const mu = new URL(mapped, location.href);
            navigateCaptured(mu.pathname, mu.search || "", mu.hash || "");
          } catch (e3) {
            location.href = mapped;
          }
          return null;
        }
        return _open.apply(this, arguments);
      };
    }
  } catch (e) {}

  document.addEventListener(
    "click",
    function (ev) {
      const a = ev.target && ev.target.closest ? ev.target.closest("a[href]") : null;
      if (a) {
        const href = a.getAttribute("href");
        if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
        let url;
        try { url = new URL(href, location.href); } catch (e) { return; }
        if (url.origin === location.origin || sameSiteHost(url.href)) {
          if (a.closest && a.closest("[role='combobox'], [role='listbox'], [aria-haspopup='listbox']")) return;
          const nav = resolveNav(url.pathname, url.search || "");
          if (nav && !isAssetPath(url.pathname)) {
            ev.preventDefault();
            if (typeof ev.stopImmediatePropagation === "function") ev.stopImmediatePropagation();
            else if (typeof ev.stopPropagation === "function") ev.stopPropagation();
            navigateCaptured(nav.path, nav.search || "", url.hash || "");
            return;
          }
          // Allow normal navigation without blocking
          return;
        }
        return;
      }

      // Form submits / POST actions — never silent success.
      const form = ev.target && ev.target.closest ? ev.target.closest("form") : null;
      if (form) {
        const method = (form.getAttribute("method") || "GET").toUpperCase();
        if (method !== "GET") {
          ev.preventDefault();
          showOfflineNotice("This action requires the live site");
          return;
        }
      }

      const tabEl = ev.target && ev.target.closest
        ? ev.target.closest("[role='tab'], main button, [role='main'] button, #main-content button")
        : null;
      if (tabEl) {
        const keepHint = /eni-offline|eni-section|storage_restore|blob-offline|ws-offline|clipboard/;
        const hasAppJs = Array.prototype.some.call(document.scripts || [], function (s) {
          const src = s.src || "";
          return src && !keepHint.test(src);
        });
        if (hasAppJs) return;
        const dest = inPageQueryTabDest(tabEl);
        if (dest) {
          ev.preventDefault();
          if (typeof ev.stopPropagation === "function") ev.stopPropagation();
          const qi = dest.indexOf("?");
          navigateCaptured(dest.split("?")[0], qi >= 0 ? dest.slice(qi) : "", "");
          return;
        }
        if (tabEl.getAttribute && tabEl.getAttribute("role") === "tab") return;
      }
    },
    true
  );

  document.addEventListener(
    "submit",
    function (ev) {
      const form = ev.target;
      if (!form || !form.getAttribute) return;
      const method = (form.getAttribute("method") || "GET").toUpperCase();
      if (method === "GET") return;
      ev.preventDefault();
      showOfflineNotice("This action requires the live site");
    },
    true
  );

  // Offline theme assist — only explicit theme controls, never Tailwind `dark:` classes
  // or unrelated header icons (bell / overflow menus).
  document.addEventListener(
    "click",
    function (ev) {
      const btn = ev.target && ev.target.closest ? ev.target.closest("button, [role='button']") : null;
      if (!btn) return;
      if (btn.closest && btn.closest("input, textarea, select, [role='slider'], [role='tab']")) return;
      const label = (
        (btn.getAttribute("aria-label") || "") +
        " " +
        (btn.getAttribute("title") || "") +
        " " +
        (btn.innerText || "")
      ).toLowerCase().replace(/\s+/g, " ").trim();
      const html = (btn.innerHTML || "").toLowerCase();
      const inHeader = !!(btn.closest && btn.closest("header"));
      const looksTheme =
        /\b(theme|dark\s*mode|light\s*mode|color\s*mode|toggle\s*theme)\b/.test(label) ||
        (inHeader && !label && (html.indexOf("moon") >= 0 || html.indexOf("sun") >= 0));
      if (!looksTheme) return;
      const root = document.documentElement;
      const before =
        root.classList.contains("dark") ||
        root.getAttribute("data-theme") === "dark" ||
        (localStorage.getItem("theme") || "") === "dark";
      setTimeout(function () {
        const after =
          root.classList.contains("dark") ||
          root.getAttribute("data-theme") === "dark" ||
          (localStorage.getItem("theme") || "") === "dark";
        if (before === after) {
          const nextDark = !before;
          const val = nextDark ? "dark" : "light";
          root.classList.toggle("dark", nextDark);
          root.setAttribute("data-theme", val);
          try {
            localStorage.setItem("theme", val);
            localStorage.setItem("wc_user_theme", val);
            const raw = localStorage.getItem("persist:root");
            if (raw && raw.indexOf("theme") !== -1) {
              localStorage.setItem(
                "persist:root",
                raw
                  .replace(/"theme"\s*:\s*"(light|dark|system)"/g, '"theme":"' + val + '"')
                  .replace(/\\"theme\\":\\"(light|dark|system)\\"/g, '\\"theme\\":\\"' + val + '\\"')
                  .replace(/\\"mode\\":\\"(light|dark|system)\\"/g, '\\"mode\\":\\"' + val + '\\"')
              );
            }
          } catch (e) {}
        }
      }, 30);
    },
    true
  );

  document.addEventListener("click", function (ev) {
    const btn = ev.target && ev.target.closest
      ? ev.target.closest("button, [role='button'], a")
      : null;
    if (!btn) return;
    const chrome = btn.closest && btn.closest("aside, [data-sidebar], [class*='sidebar' i]");
    if (!chrome) return;
    const label = (
      (btn.getAttribute("aria-label") || "") + " " + (btn.textContent || "")
    ).toLowerCase();
    const looksToggle =
      btn.getAttribute("aria-expanded") != null ||
      /collapse|expand|toggle.?nav|toggle.?sidebar|open.?menu|close.?menu/.test(label);
    if (!looksToggle) return;
    setTimeout(function () {
      try {
        const aside = document.querySelector("aside, [data-sidebar], [class*='sidebar' i]");
        if (!aside) return;
        const w = aside.getBoundingClientRect().width;
        const collapsed = w > 0 && w < 96;
        const raw = localStorage.getItem("persist:root");
        if (!raw) return;
        let next = raw;
        if (/"sidebarCollapsed"\s*:/.test(next)) {
          next = next.replace(/"sidebarCollapsed"\s*:\s*(true|false)/g, '"sidebarCollapsed":' + collapsed);
        }
        if (/"isNavOpen"\s*:/.test(next)) {
          next = next.replace(/"isNavOpen"\s*:\s*(true|false)/g, '"isNavOpen":' + (!collapsed));
        }
        if (next !== raw) localStorage.setItem("persist:root", next);
      } catch (e) {}
    }, 40);
  }, true);

  function markOverlayScrubWindow() {
    __wcOverlayScrubUntil = Date.now() + 2200;
  }
  function dismissStaleCaptureOverlays() {
    if (Date.now() > __wcOverlayScrubUntil) return;
    try {
      const weekday = /\b(su|mo|tu|we|th|fr|sa)\b/g;
      function isCal(el) {
        const t = ((el.innerText || "") + " " + (el.getAttribute("aria-label") || "")).toLowerCase();
        const hits = t.match(weekday);
        if (hits && new Set(hits).size >= 5) return true;
        return /select date|date range|quick select/.test(t);
      }
      document.querySelectorAll("[data-radix-popper-content-wrapper]").forEach(function (el) {
        if (isCal(el)) el.remove();
      });
      document.querySelectorAll("[data-radix-dialog-overlay]").forEach(function (el) {
        if (isCal(el)) el.remove();
      });
      document.querySelectorAll("[role='dialog']").forEach(function (el) {
        const st = (el.getAttribute("data-state") || "open").toLowerCase();
        if (st !== "closed" && isCal(el)) el.remove();
      });
      if (document.body) {
        document.body.style.removeProperty("pointer-events");
        document.body.removeAttribute("data-scroll-locked");
      }
    } catch (e) {}
  }

  function kickLoopVideos() {
    document.querySelectorAll("video").forEach(function (v) {
      const decorative = v.hasAttribute("autoplay") || v.hasAttribute("loop") || v.hasAttribute("muted");
      if (!decorative) return;
      v.muted = true;
      v.defaultMuted = true;
      v.setAttribute("muted", "");
      v.setAttribute("playsinline", "");
      v.playsInline = true;
      v.setAttribute("autoplay", "");
      v.setAttribute("loop", "");
      const play = v.play();
      if (play && typeof play.catch === "function") play.catch(function () {});
    });
  }

  function collapseDuplicateAppShells() {
    if (!document.body) return;
    const shells = [];
    const kids = document.body.children;
    for (let i = 0; i < kids.length; i++) {
      const el = kids[i];
      if (!el || el.tagName !== "DIV") continue;
      if (!el.querySelector || !el.querySelector("header")) continue;
      if ((el.offsetHeight || 0) < 120) continue;
      shells.push(el);
    }
    if (shells.length < 2) return;
    function score(el) {
      const skel = el.querySelectorAll('[class*="skeleton" i], [class*="animate-pulse"]').length;
      const rows = el.querySelectorAll("table tbody tr, [role='row']").length;
      const text = (el.innerText || "").replace(/\s+/g, " ").length;
      const media = el.querySelectorAll("video, number-flow, number-flow-react, canvas").length;
      return text + rows * 200 - skel * 800 + media * 500;
    }
    let keep = shells[0];
    let keepScore = score(keep);
    for (let i = 1; i < shells.length; i++) {
      const n = score(shells[i]);
      if (n > keepScore + 80) {
        keep = shells[i];
        keepScore = n;
      }
    }
    for (let i = 0; i < shells.length; i++) {
      if (shells[i] !== keep && shells[i].parentNode) {
        shells[i].parentNode.removeChild(shells[i]);
      }
    }
  }

  let __wcDidOverlayPass = false;
    const GL_KINDS = ["webgl", "webgl2", "experimental-webgl"];
    function canvasHasPaint(c) {
      if (!c || c.width <= 2 || c.height <= 2) return false;
      // Never ask for a context the page has not taken: the first getContext
      // fixes the canvas kind, so probing would lock out the real renderer.
      const gl = window.__wcExistingContext ? window.__wcExistingContext(c, GL_KINDS) : null;
      if (!gl) return false;
      try {
        const px = new Uint8Array(4);
        gl.readPixels((c.width / 2) | 0, (c.height / 2) | 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px);
        return px[3] >= 8 || (px[0] + px[1] + px[2]) >= 24;
      } catch (e) {
        return false;
      }
    }
    function applyCanvasFallbacks() {
        const stamped = document.querySelectorAll("canvas[data-wc-fallback]");
        const extras = document.querySelectorAll("img[data-wc-gl-fallback]");
        let painted = false;
        for (let i = 0; i < stamped.length; i++) {
          if (canvasHasPaint(stamped[i])) painted = true;
        }
        if (!stamped.length) {
          const live = document.querySelectorAll("canvas");
          for (let i = 0; i < live.length && !painted; i++) {
            if (canvasHasPaint(live[i])) painted = true;
          }
        }
        for (let i = 0; i < extras.length; i++) {
          extras[i].style.display = painted ? "none" : "block";
        }
        for (let i = 0; i < stamped.length; i++) {
          const c = stamped[i];
          const url = c.getAttribute("data-wc-fallback");
          if (painted || !url) continue;
          const engine = String(c.getAttribute("data-engine") || "");
          if (/three|webgl|r3f|babylon|playcanvas/i.test(engine)) continue;
          const img = document.createElement("img");
          img.src = url;
          img.alt = c.getAttribute("aria-label") || "Captured graphic";
          img.setAttribute("data-wc-canvas-fallback", "1");
          if (c.parentNode) c.parentNode.replaceChild(img, c);
        }
    }
    function bindCustomScrollDriver() {
      try {
        function hasProgrammaticScroll() {
          const html = document.documentElement;
          const body = document.body;
          const cls = String((html && html.className) || "") + " " + String((body && body.className) || "");
          if (/\b(lenis|is-smooth|locomotive-scroll|has-scroll-smooth)\b/i.test(cls)) return true;
          if (window.lenis || window.Lenis || window.locoScroll) return true;
          if (document.querySelector("[data-scroll-container],[data-scroll-wrapper],[data-lenis-prevent]")) return true;
          return false;
        }
        function overflowDriver() {
          const nodes = [...document.querySelectorAll("*")].filter(function (el) {
            try {
              const s = getComputedStyle(el);
              const oy = s.overflowY;
              return (oy === "auto" || oy === "scroll") && el.scrollHeight > el.clientHeight + 80;
            } catch (e) { return false; }
          });
          nodes.sort(function (a, b) { return b.scrollHeight - a.scrollHeight; });
          return nodes[0] || null;
        }
        window.addEventListener("wheel", function (e) {
          if (hasProgrammaticScroll()) return;
          const el = overflowDriver();
          if (!el) return;
          el.scrollTop += e.deltaY;
        }, { passive: true, capture: true });
      } catch (e) {}
    }
    function afterPaint() {
    restoreCapturedHash();
    replayCapturedView();
    kickLoopVideos();
    collapseDuplicateAppShells();
    applyCanvasFallbacks();
    bindCustomScrollDriver();
    if (__wcDidOverlayPass) return;
    __wcDidOverlayPass = true;
    dismissStaleCaptureOverlays();
  }
  markOverlayScrubWindow();
  window.addEventListener("popstate", function () {
    try { kickLoopVideos(); replayCapturedView(); } catch (e) {}
  });
  window.addEventListener("hashchange", function () {
    try { replayCapturedView(); } catch (e) {}
  });
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", afterPaint);
  } else {
    afterPaint();
  }
  window.addEventListener("load", afterPaint);
  window.addEventListener("pageshow", kickLoopVideos);
  [80, 250, 800, 2000].forEach(function (ms) {
    setTimeout(afterPaint, ms);
  });
})();
