import{_ as je}from"./CtsIlryN.js";import{d as de,e as fe,w as xe,O as le,P as we,v as k,i as Te,f as ne,g as $e,h as Se,c as s,a as o,j as U,u as e,n as c,y as u,p as y,t as r,F as f,r as x,k as S,m as I,G as Me,b as d,o as l,_ as Pe,M as De}from"./CKMxbet5.js";import{L as R}from"./DP3DGAtK.js";import{P as se}from"./BTPY3-s8.js";import{i as Le,g as He}from"./CZayi1Tr.js";import{u as Ce}from"./C4qg9H9z.js";import{u as re}from"./Cw1VFGBS.js";import"./C2BJ01Zg.js";import"./Dfi4zzZB.js";import"./RdEkidMM.js";import"./vkF2JcH9.js";const Fe={class:"project-detail-page","data-node-id":"1:1187"},Ie={class:"project-detail-desktop-header"},Re={class:"project-detail-desktop-canvas"},Ve={class:"project-detail-hero-desktop","data-node-id":"1:1188"},ze={class:"detail-hero-bg","aria-hidden":"true"},Be=["src"],We=["src"],Ee={key:0,class:"detail-hero-brand-stack detail-hero-brand-stack-desktop"},Oe={class:"detail-hero-scroll"},Ae={class:"project-detail-facts-desktop","data-node-id":"1:1236"},Ge={class:"project-detail-facts-grid-desktop","data-node-id":"1:1237"},Ne={class:"project-detail-fact-label"},Ue={class:"project-detail-fact-value"},Ye={class:"project-detail-gallery-desktop","data-node-id":"1:1259"},Ke={class:"connected-image-reveal-surface"},qe=["src","alt"],Je=["src"],Qe=["aria-label"],Xe={class:"project-detail-navigation-label"},Ze=["data-title"],et={key:1,class:"project-detail-navigation-info project-detail-navigation-info-left"},tt={class:"project-detail-navigation-label"},at=["data-title"],ot=["src"],it=["src"],lt={class:"project-detail-navigation-label"},nt=["data-title"],st={key:3,class:"project-detail-navigation-info project-detail-navigation-info-right"},rt={class:"project-detail-navigation-label"},dt=["data-title"],ct={class:"project-detail-mobile","data-node-id":"1:3278"},pt={class:"project-detail-hero-mobile","data-node-id":"1:3327"},gt={class:"detail-hero-bg","aria-hidden":"true"},vt=["src"],ut=["src"],ht={key:0,class:"detail-hero-brand-stack detail-hero-brand-stack-mobile"},mt={class:"detail-hero-scroll detail-hero-scroll-mobile"},bt={class:"project-detail-facts-mobile","data-node-id":"1:3281"},kt={class:"project-detail-fact-label"},yt={class:"project-detail-fact-value"},_t={class:"project-detail-gallery-mobile","data-node-id":"1:3302"},jt={class:"connected-image-reveal-surface"},ft=["src","alt"],xt=["src"],wt=["aria-label"],Tt={class:"project-detail-navigation-mobile","data-node-id":"1:3320"},$t={class:"project-detail-navigation-label-mobile"},St=["data-title"],Mt={key:1,class:"project-detail-navigation-info-mobile project-detail-navigation-info-mobile-left"},Pt={class:"project-detail-navigation-label-mobile"},Dt=["data-title"],Lt={class:"project-detail-navigation-label-mobile"},Ht=["data-title"],Ct={key:3,class:"project-detail-navigation-info-mobile project-detail-navigation-info-mobile-right"},Ft={class:"project-detail-navigation-label-mobile"},It=["data-title"],M=1728,Y=900,Rt=de({__name:"ProjectDetailPage",props:{slug:{}},async setup(K){let _,P;const m=K,q=fe(),J=k(M),Q=k(Y),X=k(!1),V=()=>{J.value=Math.max(window.innerWidth||M,1),Q.value=Math.max(window.innerHeight||Y,1),X.value=!0},ce=d(()=>`projects-detail-${m.slug}`),{data:Z,error:z}=([_,P]=xe(()=>Ce(ce,()=>q.fetchProjectDetail(m.slug),{watch:[()=>m.slug]})),_=await _,P(),_);if(z.value)throw le({statusCode:z.value.statusCode||500,statusMessage:z.value.statusMessage||"Project detail load failed"});const t=d(()=>{if(!Z.value)throw le({statusCode:404,statusMessage:"Project detail not found"});return Z.value}),B=d(()=>t.value.seo.title.trim()||t.value.hero.brand.trim()||"Project"),W=d(()=>t.value.seo.description.trim());we(()=>({title:B.value,ogTitle:B.value,twitterTitle:B.value,description:W.value||void 0,ogDescription:W.value||void 0,twitterDescription:W.value||void 0}));const b=a=>a.trim().length>0,h=a=>a.trim().length>0,j=a=>!!a?.trim(),D=a=>{const n=a?.trim();return n?`/projects/${encodeURIComponent(n)}`:"/projects"},w=k(null),pe=a=>{const n=t.value.navigation.desktop;return a==="prev"?j(n.prevSlug)&&b(n.prevImage||""):j(n.nextSlug)&&b(n.nextImage||n.centerImage)},E=d(()=>w.value&&pe(w.value)?w.value:null),p=d(()=>{const a=t.value.navigation.desktop;return E.value==="prev"?{slug:a.prevSlug||"",title:a.prevTitle,label:a.prevLabel,image:a.prevImage||a.centerImage,crop:a.prevImageCrop||a.centerImageCrop}:E.value==="next"?{slug:a.nextSlug||"",title:a.nextTitle,label:a.nextLabel,image:a.nextImage||a.centerImage,crop:a.nextImageCrop||a.centerImageCrop}:null}),T=d(()=>!!(p.value&&b(p.value.image))),L=k(T.value),ge=d(()=>T.value||L.value),g=a=>{w.value=a},ve=()=>{L.value=!0},ue=()=>{T.value||(L.value=!1)},ee=a=>{if(a)return{width:a.width??"100%",height:a.height??"100%",left:a.left??"0%",top:a.top??"0%"}},$=(a,n)=>a==="video"||Le(n),H=a=>({transform:`translate(${a?.x??0}%, ${a?.y??0}%) scale(${a?.zoom??1})`,transformOrigin:"center"}),C=a=>He({frameWidth:a.width||1632,frameHeight:a.height||794,asset:{zoom:a.transform?.zoom??1,x:a.transform?.x??0,y:a.transform?.y??0,naturalWidth:a.naturalWidth??0,naturalHeight:a.naturalHeight??0}}),he=a=>{const s=[[0,0,1632,794],[0,1034,816,1088],[904,1397.5,640,361],[88,2479.5,640,853],[816,2362,816,1088],[0,3690,1632,794],[0,4724,816,1088],[1242,4724,390,520]],n=Math.max(0,Math.min(7,(parseInt(String(a?.id||"").replace(/\D/g,""))||2)-2)),f=s[n]||s[0],x=a?.x??f[0],y=a?.y??f[1],w=a?.width??f[2],h=a?.height??f[3];return{left:`${x}px`,top:`${y}px`,width:`${w}px`,height:`${h}px`}},me=a=>{const w=a?.width||392,h=a?.height||191;return{width:`${(w/392*100).toFixed(2)}%`,aspectRatio:`${w} / ${h}`}},O=d(()=>Math.max(t.value?.desktopGallery?.height||5812,5812)),A=d(()=>O.value+1017),be=d(()=>572+O.value),G=d(()=>J.value/M),te=d(()=>Q.value/G.value),ae=d(()=>te.value+A.value),ke=d(()=>ae.value*G.value),ye=d(()=>{const a={"--project-detail-content-height":`${A.value}px`,"--project-detail-gallery-height":`${O.value}px`,"--project-detail-navigation-top":`${be.value}px`};return X.value&&(a.height=`${ke.value}px`,a["--project-detail-scale"]=G.value.toFixed(6),a["--project-detail-hero-height"]=`${te.value}px`,a["--project-detail-desktop-canvas-height"]=`${ae.value}px`),a}),_e=d(()=>{const a=A.value;return`!function(){var r=document.documentElement,w=Math.max(window.innerWidth||${M},1),h=Math.max(window.innerHeight||${Y},1),s=w/${M},c=${a};r.style.setProperty('--project-detail-pre-scale',s.toFixed(6));r.style.setProperty('--project-detail-pre-hero-height',(h/s).toFixed(3)+'px');r.style.setProperty('--project-detail-pre-canvas-height',((h/s)+c).toFixed(3)+'px');r.style.setProperty('--project-detail-pre-shell-height',(h+(c*s)).toFixed(3)+'px')}();`});Te(()=>({script:[{key:"project-detail-viewport-metrics",tagPosition:"head",innerHTML:_e.value}]}));const oe=k(null),ie=k(null);return re({containerRef:oe,itemSelector:".connected-image-reveal-item",minWidth:769,resetWatchSources:[()=>m.slug]}),re({containerRef:ie,itemSelector:".connected-image-reveal-item",resetWatchSources:[()=>m.slug]}),ne(()=>m.slug,()=>{w.value=null}),ne(T,a=>{a&&(L.value=!0)},{immediate:!0}),$e(()=>{V(),window.addEventListener("resize",V,{passive:!0})}),Se(()=>{window.removeEventListener("resize",V)}),(a,n)=>{const F=je;return l(),s("section",Fe,[o("div",{class:"project-detail-desktop-shell",style:c(e(ye))},[o("div",Ie,[U(se,{theme:e(t).header.theme,"logo-alt":"House of Meda","menu-aria-label":"Menu"},null,8,["theme"])]),o("div",Re,[o("section",Ve,[o("div",ze,[$(e(t).hero.backgroundMediaType,e(t).hero.backgroundDesktop)?(l(),s("video",{key:0,src:e(t).hero.backgroundDesktop,class:"detail-hero-bg-image detail-hero-bg-image-desktop",style:c(H(e(t).hero.backgroundTransform)),autoplay:"",muted:"",loop:"",playsinline:"",preload:"metadata"},null,12,Be)):(l(),s("img",{key:1,src:e(t).hero.backgroundDesktop,alt:"",class:"detail-hero-bg-image detail-hero-bg-image-desktop",style:c(H(e(t).hero.backgroundTransform))},null,12,We))]),o("div",{class:"detail-hero-overlay",style:c({opacity:e(t).hero.overlayOpacity})},null,4),h(e(t).hero.brand)||h(e(t).hero.location)?(l(),s("div",Ee,[h(e(t).hero.brand)?(l(),u(R,{key:0,as:"p",class:"detail-hero-brand detail-hero-brand-desktop",text:e(t).hero.brand},null,8,["text"])):y("",!0),h(e(t).hero.location)?(l(),u(R,{key:1,as:"p",class:"detail-hero-location detail-hero-location-desktop",text:e(t).hero.location},null,8,["text"])):y("",!0)])):y("",!0),o("div",Oe,[o("p",null,r(e(t).hero.scrollLabel),1),n[9]||(n[9]=o("div",{class:"detail-hero-scroll-icon","aria-hidden":"true"},[o("span",{class:"detail-hero-scroll-line"},[o("span",{class:"detail-hero-scroll-highlight"})])],-1))])]),o("section",{ref_key:"desktopRevealRef",ref:oe,class:"project-detail-content-desktop connected-image-reveal-root","data-node-id":"1:1233"},[o("div",Ae,[o("div",Ge,[(l(!0),s(f,null,x(e(t).factsDesktop,(i,N)=>(l(),s("div",{key:`desktop-fact-column-${N}`,class:"project-detail-fact-column"},[(l(!0),s(f,null,x(i,v=>(l(),s("div",{key:`${v.label}-${v.value}`,class:"project-detail-fact-item"},[o("p",Ne,r(v.label),1),o("p",Ue,r(v.value),1)]))),128))]))),128))])]),o("div",Ye,[(l(!0),s(f,null,x(e(t).desktopGallery.items,i=>(l(),s("div",{key:i.id,class:"project-detail-gallery-item-desktop connected-image-reveal-item",style:c(he(i))},[o("div",{class:I(["project-detail-gallery-media connected-image-reveal-anchor",[i.radius==="main"?"project-detail-gallery-media-main":"project-detail-gallery-media-soft",i.hasBaseFill?"project-detail-gallery-media-base":""]])},[o("div",Ke,[b(i.image)&&!$(i.mediaType,i.image)?(l(),s("img",{key:0,src:i.image,alt:i.id,class:"project-detail-gallery-image-cover",style:c(C(i)),loading:"lazy",decoding:"async"},null,12,qe)):b(i.image)?(l(),s("video",{key:1,src:i.image,class:"project-detail-gallery-image-cover",style:c(C(i)),autoplay:"",muted:"",loop:"",playsinline:"",preload:"metadata"},null,12,Je)):(l(),s("div",{key:2,class:"project-detail-gallery-fallback","aria-label":i.id,role:"img"},null,8,Qe))])],2)],4))),128))]),o("div",{class:"project-detail-navigation-desktop","data-node-id":"1:1275",onMouseleave:n[8]||(n[8]=i=>g(null))},[j(e(t).navigation.desktop.prevSlug)?(l(),u(F,{key:0,to:D(e(t).navigation.desktop.prevSlug),class:"project-detail-navigation-info project-detail-navigation-info-left project-detail-navigation-link",onMouseenter:n[0]||(n[0]=i=>g("prev")),onMouseleave:n[1]||(n[1]=i=>g(null)),onFocusin:n[2]||(n[2]=i=>g("prev")),onFocusout:n[3]||(n[3]=i=>g(null))},{default:S(()=>[o("p",Xe,r(e(t).navigation.desktop.prevLabel),1),o("p",{class:"project-detail-navigation-title project-detail-navigation-title-muted","data-title":e(t).navigation.desktop.prevTitle},r(e(t).navigation.desktop.prevTitle),9,Ze)]),_:1},8,["to"])):(l(),s("div",et,[o("p",tt,r(e(t).navigation.desktop.prevLabel),1),o("p",{class:"project-detail-navigation-title project-detail-navigation-title-muted","data-title":e(t).navigation.desktop.prevTitle},r(e(t).navigation.desktop.prevTitle),9,at)])),o("div",{class:I(["project-detail-navigation-image",{"project-detail-navigation-image--empty":!e(ge)}]),"aria-hidden":"true"},[U(Me,{name:"project-detail-navigation-preview",mode:"out-in",onBeforeEnter:ve,onAfterLeave:ue},{default:S(()=>[e(T)&&e(p)?(l(),s("div",{key:`${e(E)}-${e(p).image}`,class:"project-detail-navigation-image-surface connected-image-reveal-surface"},[$(void 0,e(p).image)?(l(),s("video",{key:0,src:e(p).image,class:"project-detail-navigation-image-media",style:c(ee(e(p).crop)),autoplay:"",muted:"",loop:"",playsinline:"",preload:"metadata"},null,12,ot)):(l(),s("img",{key:1,src:e(p).image,alt:"",class:"project-detail-navigation-image-media",style:c(ee(e(p).crop)),loading:"lazy",decoding:"async"},null,12,it))])):y("",!0)]),_:1})],2),j(e(t).navigation.desktop.nextSlug)?(l(),u(F,{key:2,to:D(e(t).navigation.desktop.nextSlug),class:"project-detail-navigation-info project-detail-navigation-info-right project-detail-navigation-link",onMouseenter:n[4]||(n[4]=i=>g("next")),onMouseleave:n[5]||(n[5]=i=>g(null)),onFocusin:n[6]||(n[6]=i=>g("next")),onFocusout:n[7]||(n[7]=i=>g(null))},{default:S(()=>[o("p",lt,r(e(t).navigation.desktop.nextLabel),1),o("p",{class:"project-detail-navigation-title project-detail-navigation-title-muted","data-title":e(t).navigation.desktop.nextTitle},r(e(t).navigation.desktop.nextTitle),9,nt)]),_:1},8,["to"])):(l(),s("div",st,[o("p",rt,r(e(t).navigation.desktop.nextLabel),1),o("p",{class:"project-detail-navigation-title project-detail-navigation-title-muted","data-title":e(t).navigation.desktop.nextTitle},r(e(t).navigation.desktop.nextTitle),9,dt)]))],32)],512)])],4),o("div",ct,[o("section",pt,[o("div",gt,[$(e(t).hero.backgroundMediaType,e(t).hero.backgroundMobile)?(l(),s("video",{key:0,src:e(t).hero.backgroundMobile,class:"detail-hero-bg-image detail-hero-bg-image-mobile",style:c(H(e(t).hero.backgroundTransform)),autoplay:"",muted:"",loop:"",playsinline:"",preload:"metadata"},null,12,vt)):(l(),s("img",{key:1,src:e(t).hero.backgroundMobile,alt:"",class:"detail-hero-bg-image detail-hero-bg-image-mobile",style:c(H(e(t).hero.backgroundTransform))},null,12,ut))]),o("div",{class:"detail-hero-overlay",style:c({opacity:e(t).hero.overlayOpacity})},null,4),U(se,{theme:e(t).header.theme,"logo-alt":"House of Meda","menu-aria-label":"Menu"},null,8,["theme"]),h(e(t).hero.brand)||h(e(t).hero.location)?(l(),s("div",ht,[h(e(t).hero.brand)?(l(),u(R,{key:0,as:"p",class:"detail-hero-brand detail-hero-brand-mobile",text:e(t).hero.brand},null,8,["text"])):y("",!0),h(e(t).hero.location)?(l(),u(R,{key:1,as:"p",class:"detail-hero-location detail-hero-location-mobile",text:e(t).hero.location},null,8,["text"])):y("",!0)])):y("",!0),o("div",mt,[o("p",null,r(e(t).hero.scrollLabel),1),n[10]||(n[10]=o("div",{class:"detail-hero-scroll-icon","aria-hidden":"true"},[o("span",{class:"detail-hero-scroll-line"},[o("span",{class:"detail-hero-scroll-highlight"})])],-1))])]),o("section",{ref_key:"mobileRevealRef",ref:ie,class:"project-detail-content-mobile connected-image-reveal-root","data-node-id":"1:3280"},[o("div",bt,[(l(!0),s(f,null,x(e(t).factsMobile,(i,N)=>(l(),s("div",{key:`mobile-fact-column-${N}`,class:"project-detail-fact-column project-detail-fact-column-mobile"},[(l(!0),s(f,null,x(i,v=>(l(),s("div",{key:`mobile-${v.label}-${v.value}`,class:"project-detail-fact-item"},[o("p",kt,r(v.label),1),o("p",yt,r(v.value),1)]))),128))]))),128))]),o("div",_t,[(l(!0),s(f,null,x(e(t).mobileGallery.items,i=>(l(),s("article",{key:i.id,class:I(["project-detail-gallery-item-mobile connected-image-reveal-item",`align-${i.align}`]),style:c(me(i))},[o("div",{class:I(["project-detail-gallery-media connected-image-reveal-anchor",["project-detail-gallery-media-soft",i.hasBaseFill?"project-detail-gallery-media-base":""]])},[o("div",jt,[b(i.image)&&!$(i.mediaType,i.image)?(l(),s("img",{key:0,src:i.image,alt:i.id,class:"project-detail-gallery-image-cover",style:c(C(i)),loading:"lazy",decoding:"async"},null,12,ft)):b(i.image)?(l(),s("video",{key:1,src:i.image,class:"project-detail-gallery-image-cover",style:c(C(i)),autoplay:"",muted:"",loop:"",playsinline:"",preload:"metadata"},null,12,xt)):(l(),s("div",{key:2,class:"project-detail-gallery-fallback","aria-label":i.id,role:"img"},null,8,wt))])],2)],6))),128))]),o("div",Tt,[j(e(t).navigation.mobile.prevSlug)?(l(),u(F,{key:0,to:D(e(t).navigation.mobile.prevSlug),class:"project-detail-navigation-info-mobile project-detail-navigation-info-mobile-left project-detail-navigation-link"},{default:S(()=>[o("p",$t,r(e(t).navigation.mobile.prevLabel),1),o("p",{class:"project-detail-navigation-title-mobile project-detail-navigation-title-mobile-muted","data-title":e(t).navigation.mobile.prevTitle},r(e(t).navigation.mobile.prevTitle),9,St)]),_:1},8,["to"])):(l(),s("div",Mt,[o("p",Pt,r(e(t).navigation.mobile.prevLabel),1),o("p",{class:"project-detail-navigation-title-mobile project-detail-navigation-title-mobile-muted","data-title":e(t).navigation.mobile.prevTitle},r(e(t).navigation.mobile.prevTitle),9,Dt)])),j(e(t).navigation.mobile.nextSlug)?(l(),u(F,{key:2,to:D(e(t).navigation.mobile.nextSlug),class:"project-detail-navigation-info-mobile project-detail-navigation-info-mobile-right project-detail-navigation-link"},{default:S(()=>[o("p",Lt,r(e(t).navigation.mobile.nextLabel),1),o("p",{class:"project-detail-navigation-title-mobile project-detail-navigation-title-mobile-muted","data-title":e(t).navigation.mobile.nextTitle},r(e(t).navigation.mobile.nextTitle),9,Ht)]),_:1},8,["to"])):(l(),s("div",Ct,[o("p",Ft,r(e(t).navigation.mobile.nextLabel),1),o("p",{class:"project-detail-navigation-title-mobile project-detail-navigation-title-mobile-muted","data-title":e(t).navigation.mobile.nextTitle},r(e(t).navigation.mobile.nextTitle),9,It)]))])],512)])])}}}),Vt=Pe(Rt,[["__scopeId","data-v-8daf3cae"]]),qt=de({__name:"[slug]",setup(K){const _=De(),P=d(()=>String(_.params.slug??""));return(m,q)=>(l(),u(Vt,{slug:e(P)},null,8,["slug"]))}});export{qt as default};


/* House of Meda - Project Details Lightbox Controller */

(() => {
    if (window.__homLightboxInitialized) return;
    window.__homLightboxInitialized = true;
    
    // Collect all media items from the page
    function getMediaItems() {
        const desktopItems = Array.from(document.querySelectorAll('.project-detail-gallery-desktop .project-detail-gallery-item-desktop'));
        return desktopItems.map((el, i) => {
            const img = el.querySelector('img');
            const vid = el.querySelector('video');
            return {
                index: i,
                el: el,
                type: vid ? 'video' : 'image',
                src: vid ? (vid.querySelector('source')?.src || vid.src) : img?.src,
                alt: img?.alt || `Image ${i+1}`
            };
        }).filter(item => Boolean(item.src));
    }
    
    // Create Lightbox DOM
    let backdrop = document.getElementById('hom-project-lightbox');
    if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.id = 'hom-project-lightbox';
        backdrop.className = 'hom-lightbox-backdrop';
        backdrop.innerHTML = `
            <div class="hom-lightbox-topbar">
                <div class="hom-lightbox-title">
                    <span id="hom-lightbox-project-title">PROJECT GALLERY</span>
                    <span class="hom-lightbox-counter" id="hom-lightbox-counter">1 / 1</span>
                </div>
                <div class="hom-lightbox-tools">
                    <button class="hom-lightbox-btn" id="hom-btn-zoom-out" title="Zoom Out" aria-label="Zoom Out">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                    </button>
                    <button class="hom-lightbox-btn" id="hom-btn-zoom-reset" title="Reset (100%)" aria-label="Reset Zoom">
                        <span style="font-size: 11px; font-weight: 700;">1:1</span>
                    </button>
                    <button class="hom-lightbox-btn" id="hom-btn-zoom-in" title="Zoom In" aria-label="Zoom In">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                    </button>
                    <button class="hom-lightbox-btn hom-lightbox-close-btn" id="hom-btn-close" title="Close (Esc)" aria-label="Close">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>
            </div>
            <div class="hom-lightbox-stage" id="hom-lightbox-stage">
                <button class="hom-lightbox-nav hom-lightbox-prev" id="hom-btn-prev" aria-label="Previous image">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <div class="hom-lightbox-media-wrap" id="hom-lightbox-media-wrap">
                    <!-- media dynamically injected -->
                </div>
                <button class="hom-lightbox-nav hom-lightbox-next" id="hom-btn-next" aria-label="Next image">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
            </div>
            <div class="hom-lightbox-thumbs" id="hom-lightbox-thumbs">
                <!-- thumbs dynamically injected -->
            </div>
        `;
        document.body.appendChild(backdrop);
    }
    
    let currentIndex = 0;
    let currentZoom = 1.0;
    let panX = 0, panY = 0;
    let isDragging = false, startX = 0, startY = 0;
    
    const mediaWrap = document.getElementById('hom-lightbox-media-wrap');
    const stage = document.getElementById('hom-lightbox-stage');
    const counterEl = document.getElementById('hom-lightbox-counter');
    const titleEl = document.getElementById('hom-lightbox-project-title');
    const thumbsContainer = document.getElementById('hom-lightbox-thumbs');
    
    function applyTransform() {
        mediaWrap.style.transform = `translate(${panX}px, ${panY}px) scale(${currentZoom})`;
    }
    
    function setZoom(val) {
        currentZoom = Math.min(Math.max(val, 1.0), 3.5);
        if (currentZoom === 1.0) {
            panX = 0;
            panY = 0;
        }
        applyTransform();
    }
    
    function renderCurrent(items) {
        if (!items || items.length === 0) return;
        const item = items[currentIndex];
        
        // Update Title
        const heroBrand = document.querySelector('.detail-hero-brand')?.innerText || 'HOUSE OF MEDA';
        titleEl.innerText = heroBrand;
        counterEl.innerText = `${currentIndex + 1} / ${items.length}`;
        
        // Reset Zoom & Pan
        currentZoom = 1.0;
        panX = 0;
        panY = 0;
        mediaWrap.style.transform = 'scale(1)';
        
        if (item.type === 'video') {
            mediaWrap.innerHTML = `<video class="hom-lightbox-video" src="${item.src}" controls autoplay loop playsinline></video>`;
        } else {
            mediaWrap.innerHTML = `<img class="hom-lightbox-img" src="${item.src}" alt="${item.alt}" draggable="false"/>`;
        }
        
        // Update Thumbs
        document.querySelectorAll('.hom-lightbox-thumb').forEach((th, idx) => {
            if (idx === currentIndex) {
                th.classList.add('is-active');
                th.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            } else {
                th.classList.remove('is-active');
            }
        });
    }
    
    function openLightbox(index) {
        const items = getMediaItems();
        if (items.length === 0) return;
        currentIndex = index;
        
        // Render Thumbs
        thumbsContainer.innerHTML = items.map((it, i) => `
            <div class="hom-lightbox-thumb ${i === index ? 'is-active' : ''}" data-idx="${i}">
                ${it.type === 'video' ? `<video src="${it.src}" muted></video>` : `<img src="${it.src}" alt=""/>`}
            </div>
        `).join('');
        
        thumbsContainer.querySelectorAll('.hom-lightbox-thumb').forEach(th => {
            th.addEventListener('click', (e) => {
                e.stopPropagation();
                const idx = parseInt(th.getAttribute('data-idx'));
                currentIndex = idx;
                renderCurrent(items);
            });
        });
        
        renderCurrent(items);
        backdrop.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        backdrop.classList.remove('is-open');
        document.body.style.overflow = '';
        const vid = mediaWrap.querySelector('video');
        if (vid) vid.pause();
    }
    
    function nextItem() {
        const items = getMediaItems();
        currentIndex = (currentIndex + 1) % items.length;
        renderCurrent(items);
    }
    
    function prevItem() {
        const items = getMediaItems();
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        renderCurrent(items);
    }
    
    // Zoom controls
    document.getElementById('hom-btn-zoom-in')?.addEventListener('click', (e) => {
        e.stopPropagation();
        setZoom(currentZoom + 0.5);
    });
    document.getElementById('hom-btn-zoom-out')?.addEventListener('click', (e) => {
        e.stopPropagation();
        setZoom(currentZoom - 0.5);
    });
    document.getElementById('hom-btn-zoom-reset')?.addEventListener('click', (e) => {
        e.stopPropagation();
        setZoom(1.0);
    });
    
    // Close & Nav
    document.getElementById('hom-btn-close')?.addEventListener('click', closeLightbox);
    document.getElementById('hom-btn-next')?.addEventListener('click', (e) => { e.stopPropagation(); nextItem(); });
    document.getElementById('hom-btn-prev')?.addEventListener('click', (e) => { e.stopPropagation(); prevItem(); });
    
    // Stage click to zoom or close
    stage.addEventListener('click', (e) => {
        if (e.target === stage || e.target === mediaWrap) {
            if (currentZoom > 1.0) {
                setZoom(1.0);
            } else {
                closeLightbox();
            }
        }
    });
    
    // Double click to toggle zoom
    mediaWrap.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        if (currentZoom > 1.0) setZoom(1.0);
        else setZoom(2.0);
    });
    
    // Pan when zoomed
    stage.addEventListener('mousedown', (e) => {
        if (currentZoom <= 1.0) return;
        isDragging = true;
        startX = e.clientX - panX;
        startY = e.clientY - panY;
        stage.classList.add('is-dragging');
    });
    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        panX = e.clientX - startX;
        panY = e.clientY - startY;
        applyTransform();
    });
    window.addEventListener('mouseup', () => {
        isDragging = false;
        stage.classList.remove('is-dragging');
    });
    
    // Wheel to zoom
    stage.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = e.deltaY < 0 ? 0.2 : -0.2;
        setZoom(currentZoom + delta);
    }, { passive: false });
    
    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
        if (!backdrop.classList.contains('is-open')) return;
        if (e.key === 'Escape') closeLightbox();
        else if (e.key === 'ArrowRight') nextItem();
        else if (e.key === 'ArrowLeft') prevItem();
        else if (e.key === '+' || e.key === '=') setZoom(currentZoom + 0.3);
        else if (e.key === '-') setZoom(currentZoom - 0.3);
    });
    
    // Touch swipe support
    let touchStartX = 0, touchStartY = 0;
    stage.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        }
    }, { passive: true });
    stage.addEventListener('touchend', (e) => {
        if (e.changedTouches.length === 1 && currentZoom === 1.0) {
            const diffX = e.changedTouches[0].clientX - touchStartX;
            const diffY = e.changedTouches[0].clientY - touchStartY;
            if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
                if (diffX < 0) nextItem();
                else prevItem();
            } else if (diffY > 80 && Math.abs(diffY) > Math.abs(diffX)) {
                closeLightbox();
            }
        }
    }, { passive: true });
    
    // Attach click listeners to all gallery items
    function attachItemListeners() {
        const items = document.querySelectorAll('.project-detail-gallery-desktop .project-detail-gallery-item-desktop');
        items.forEach((item, idx) => {
            if (item.dataset.lightboxBound) return;
            item.dataset.lightboxBound = 'true';
            
            // Add zoom hint overlay if not present
            if (!item.querySelector('.hom-pinterest-hint')) {
                const hint = document.createElement('div');
                hint.className = 'hom-pinterest-hint';
                hint.innerHTML = `
                    <div class="hom-pinterest-zoom-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                    </div>
                `;
                item.appendChild(hint);
            }
            
            item.addEventListener('click', (e) => {
                e.preventDefault();
                openLightbox(idx);
            });
        });
    }
    
    attachItemListeners();
    const obs = new MutationObserver(attachItemListeners);
    obs.observe(document.body, { childList: true, subtree: true });
})();
