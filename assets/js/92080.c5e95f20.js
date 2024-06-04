/*! For license information please see 92080.c5e95f20.js.LICENSE.txt */
"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[92080],{92080:(t,e,o)=>{o.r(e),o.d(e,{iosTransitionAnimation:()=>f,shadow:()=>l});var n=o(72758),r=o(41232);const a=t=>document.querySelector(`${t}.ion-cloned-element`),l=t=>t.shadowRoot||t,s=t=>{const e="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs"),o="ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(null!=e){const t=e.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return null!=t?t.querySelector(o):null}return t.querySelector(o)},i=(t,e)=>{const o="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs");let n=[];if(null!=o){const t=o.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");null!=t&&(n=t.querySelectorAll("ion-buttons"))}else n=t.querySelectorAll("ion-buttons");for(const r of n){const t=r.closest("ion-header"),o=t&&!t.classList.contains("header-collapse-condense-inactive"),n=r.querySelector("ion-back-button"),a=r.classList.contains("buttons-collapse"),l="start"===r.slot||""===r.slot;if(null!==n&&l&&(a&&o&&e||!a))return n}return null},c=(t,e,o,r,s,i,c,d,f)=>{var y,u;const p=e?`calc(100% - ${s.right+4}px)`:s.left-4+"px",b=e?"right":"left",g=e?"left":"right",h=e?"right":"left";let S=1,$=1,x=`scale(${$})`;const q="scale(1)";if(i&&c){const t=(null===(y=i.textContent)||void 0===y?void 0:y.trim())===(null===(u=d.textContent)||void 0===u?void 0:u.trim());S=f.width/c.width,$=(f.height-m)/c.height,x=t?`scale(${S}, ${$})`:`scale(${$})`}const T=l(r).querySelector("ion-icon").getBoundingClientRect(),X=e?T.width/2-(T.right-s.right)+"px":s.left-T.width/2+"px",E=e?`-${window.innerWidth-s.right}px`:`${s.left}px`,A=`${f.top}px`,v=`${s.top}px`,C=o?[{offset:0,transform:`translate3d(${E}, ${v}, 0)`},{offset:1,transform:`translate3d(${X}, ${A}, 0)`}]:[{offset:0,transform:`translate3d(${X}, ${A}, 0)`},{offset:1,transform:`translate3d(${E}, ${v}, 0)`}],w=o?[{offset:0,opacity:1,transform:q},{offset:1,opacity:0,transform:x}]:[{offset:0,opacity:0,transform:x},{offset:1,opacity:1,transform:q}],k=o?[{offset:0,opacity:1,transform:"scale(1)"},{offset:.2,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:0,transform:"scale(0.6)"}]:[{offset:0,opacity:0,transform:"scale(0.6)"},{offset:.6,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:1,transform:"scale(1)"}],B=(0,n.c)(),P=(0,n.c)(),R=(0,n.c)(),W=a("ion-back-button"),_=l(W).querySelector(".button-text"),L=l(W).querySelector("ion-icon");W.text=r.text,W.mode=r.mode,W.icon=r.icon,W.color=r.color,W.disabled=r.disabled,W.style.setProperty("display","block"),W.style.setProperty("position","fixed"),P.addElement(L),B.addElement(_),R.addElement(W),R.beforeStyles({position:"absolute",top:"0px",[h]:"0px"}).beforeAddWrite((()=>{r.style.setProperty("display","none"),W.style.setProperty(b,p)})).afterAddWrite((()=>{r.style.setProperty("display",""),W.style.setProperty("display","none"),W.style.removeProperty(b)})).keyframes(C),B.beforeStyles({"transform-origin":`${b} top`}).keyframes(w),P.beforeStyles({"transform-origin":`${g} center`}).keyframes(k),t.addAnimation([B,P,R])},d=(t,e,o,r,l,s,i,c,d)=>{var f,y;const u=e?"right":"left",p=e?`calc(100% - ${l.right}px)`:`${l.left}px`,b=`${l.top}px`;let g=e?`-${window.innerWidth-i.right-8}px`:`${i.x+8}px`,h=.5;const S="scale(1)";let $=`scale(${h})`;if(c&&d){g=e?`-${window.innerWidth-d.right-8}px`:d.x-8+"px";const t=(null===(f=c.textContent)||void 0===f?void 0:f.trim())===(null===(y=r.textContent)||void 0===y?void 0:y.trim()),o=d.width/s.width;h=d.height/(s.height-m),$=t?`scale(${o}, ${h})`:`scale(${h})`}const x=i.top+i.height/2-l.height*h/2+"px",q=o?[{offset:0,opacity:0,transform:`translate3d(${g}, ${x}, 0) ${$}`},{offset:.1,opacity:0},{offset:1,opacity:1,transform:`translate3d(0px, ${b}, 0) ${S}`}]:[{offset:0,opacity:.99,transform:`translate3d(0px, ${b}, 0) ${S}`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${g}, ${x}, 0) ${$}`}],T=a("ion-title"),X=(0,n.c)();T.innerText=r.innerText,T.size=r.size,T.color=r.color,X.addElement(T),X.beforeStyles({"transform-origin":`${u} top`,height:`${l.height}px`,display:"",position:"relative",[u]:p}).beforeAddWrite((()=>{r.style.setProperty("opacity","0")})).afterAddWrite((()=>{r.style.setProperty("opacity",""),T.style.setProperty("display","none")})).keyframes(q),t.addAnimation(X)},f=(t,e)=>{var o;try{const a="cubic-bezier(0.32,0.72,0,1)",f="opacity",m="transform",y="0%",u=.8,p="rtl"===t.ownerDocument.dir,b=p?"-99.5%":"99.5%",g=p?"33%":"-33%",h=e.enteringEl,S=e.leavingEl,$="back"===e.direction,x=h.querySelector(":scope > ion-content"),q=h.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),T=h.querySelectorAll(":scope > ion-header > ion-toolbar"),X=(0,n.c)(),E=(0,n.c)();if(X.addElement(h).duration((null!==(o=e.duration)&&void 0!==o?o:0)||540).easing(e.easing||a).fill("both").beforeRemoveClass("ion-page-invisible"),S&&null!=t){const e=(0,n.c)();e.addElement(t),X.addAnimation(e)}if(x||0!==T.length||0!==q.length?(E.addElement(x),E.addElement(q)):E.addElement(h.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),X.addAnimation(E),$?E.beforeClearStyles([f]).fromTo("transform",`translateX(${g})`,`translateX(${y})`).fromTo(f,u,1):E.beforeClearStyles([f]).fromTo("transform",`translateX(${b})`,`translateX(${y})`),x){const t=l(x).querySelector(".transition-effect");if(t){const e=t.querySelector(".transition-cover"),o=t.querySelector(".transition-shadow"),r=(0,n.c)(),a=(0,n.c)(),l=(0,n.c)();r.addElement(t).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),a.addElement(e).beforeClearStyles([f]).fromTo(f,0,.1),l.addElement(o).beforeClearStyles([f]).fromTo(f,.03,.7),r.addAnimation([a,l]),E.addAnimation([r])}}const A=h.querySelector("ion-header.header-collapse-condense"),{forward:v,backward:C}=((t,e,o,n,r)=>{const a=i(n,o),f=s(r),m=s(n),y=i(r,o),u=null!==a&&null!==f&&!o,p=null!==m&&null!==y&&o;if(u){const n=f.getBoundingClientRect(),r=a.getBoundingClientRect(),s=l(a).querySelector(".button-text"),i=null==s?void 0:s.getBoundingClientRect(),m=l(f).querySelector(".toolbar-title").getBoundingClientRect();d(t,e,o,f,n,m,r,s,i),c(t,e,o,a,r,s,i,f,m)}else if(p){const n=m.getBoundingClientRect(),r=y.getBoundingClientRect(),a=l(y).querySelector(".button-text"),s=null==a?void 0:a.getBoundingClientRect(),i=l(m).querySelector(".toolbar-title").getBoundingClientRect();d(t,e,o,m,n,i,r,a,s),c(t,e,o,y,r,a,s,m,i)}return{forward:u,backward:p}})(X,p,$,h,S);if(T.forEach((t=>{const e=(0,n.c)();e.addElement(t),X.addAnimation(e);const o=(0,n.c)();o.addElement(t.querySelector("ion-title"));const r=(0,n.c)(),a=Array.from(t.querySelectorAll("ion-buttons,[menuToggle]")),s=t.closest("ion-header"),i=null==s?void 0:s.classList.contains("header-collapse-condense-inactive");let c;c=$?a.filter((t=>{const e=t.classList.contains("buttons-collapse");return e&&!i||!e})):a.filter((t=>!t.classList.contains("buttons-collapse"))),r.addElement(c);const d=(0,n.c)();d.addElement(t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));const m=(0,n.c)();m.addElement(l(t).querySelector(".toolbar-background"));const u=(0,n.c)(),h=t.querySelector("ion-back-button");if(h&&u.addElement(h),e.addAnimation([o,r,d,m,u]),r.fromTo(f,.01,1),d.fromTo(f,.01,1),$)i||o.fromTo("transform",`translateX(${g})`,`translateX(${y})`).fromTo(f,.01,1),d.fromTo("transform",`translateX(${g})`,`translateX(${y})`),u.fromTo(f,.01,1);else{A||o.fromTo("transform",`translateX(${b})`,`translateX(${y})`).fromTo(f,.01,1),d.fromTo("transform",`translateX(${b})`,`translateX(${y})`),m.beforeClearStyles([f,"transform"]);if((null==s?void 0:s.translucent)?m.fromTo("transform",p?"translateX(-100%)":"translateX(100%)","translateX(0px)"):m.fromTo(f,.01,"var(--opacity)"),v||u.fromTo(f,.01,1),h&&!v){const t=(0,n.c)();t.addElement(l(h).querySelector(".button-text")).fromTo("transform",p?"translateX(-100px)":"translateX(100px)","translateX(0px)"),e.addAnimation(t)}}})),S){const t=(0,n.c)(),e=S.querySelector(":scope > ion-content"),o=S.querySelectorAll(":scope > ion-header > ion-toolbar"),a=S.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(e||0!==o.length||0!==a.length?(t.addElement(e),t.addElement(a)):t.addElement(S.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),X.addAnimation(t),$){t.beforeClearStyles([f]).fromTo("transform",`translateX(${y})`,p?"translateX(-100%)":"translateX(100%)");const e=(0,r.g)(S);X.afterAddWrite((()=>{"normal"===X.getDirection()&&e.style.setProperty("display","none")}))}else t.fromTo("transform",`translateX(${y})`,`translateX(${g})`).fromTo(f,1,u);if(e){const o=l(e).querySelector(".transition-effect");if(o){const e=o.querySelector(".transition-cover"),r=o.querySelector(".transition-shadow"),a=(0,n.c)(),l=(0,n.c)(),s=(0,n.c)();a.addElement(o).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),l.addElement(e).beforeClearStyles([f]).fromTo(f,.1,0),s.addElement(r).beforeClearStyles([f]).fromTo(f,.7,.03),a.addAnimation([l,s]),t.addAnimation([a])}}o.forEach((t=>{const e=(0,n.c)();e.addElement(t);const o=(0,n.c)();o.addElement(t.querySelector("ion-title"));const r=(0,n.c)(),a=t.querySelectorAll("ion-buttons,[menuToggle]"),s=t.closest("ion-header"),i=null==s?void 0:s.classList.contains("header-collapse-condense-inactive"),c=Array.from(a).filter((t=>{const e=t.classList.contains("buttons-collapse");return e&&!i||!e}));r.addElement(c);const d=(0,n.c)(),u=t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");u.length>0&&d.addElement(u);const b=(0,n.c)();b.addElement(l(t).querySelector(".toolbar-background"));const h=(0,n.c)(),S=t.querySelector("ion-back-button");if(S&&h.addElement(S),e.addAnimation([o,r,d,h,b]),X.addAnimation(e),h.fromTo(f,.99,0),r.fromTo(f,.99,0),d.fromTo(f,.99,0),$){i||o.fromTo("transform",`translateX(${y})`,p?"translateX(-100%)":"translateX(100%)").fromTo(f,.99,0),d.fromTo("transform",`translateX(${y})`,p?"translateX(-100%)":"translateX(100%)"),b.beforeClearStyles([f,"transform"]);if((null==s?void 0:s.translucent)?b.fromTo("transform","translateX(0px)",p?"translateX(-100%)":"translateX(100%)"):b.fromTo(f,"var(--opacity)",0),S&&!C){const t=(0,n.c)();t.addElement(l(S).querySelector(".button-text")).fromTo("transform",`translateX(${y})`,`translateX(${(p?-124:124)+"px"})`),e.addAnimation(t)}}else i||o.fromTo("transform",`translateX(${y})`,`translateX(${g})`).fromTo(f,.99,0).afterClearStyles([m,f]),d.fromTo("transform",`translateX(${y})`,`translateX(${g})`).afterClearStyles([m,f]),h.afterClearStyles([f]),o.afterClearStyles([f]),r.afterClearStyles([f])}))}return X}catch(a){throw a}},m=10}}]);