/*! For license information please see 2656.7b2784fd.js.LICENSE.txt */
"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[2656],{2656:(e,t,s)=>{s.r(t),s.d(t,{scopeCss:()=>v});const r="-shadowcsshost",c="-shadowcssslotted",o="-shadowcsscontext",n=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",l=new RegExp("("+r+n,"gim"),p=new RegExp("("+o+n,"gim"),a=new RegExp("("+c+n,"gim"),i=r+"-no-combinator",h=/-shadowcsshost-no-combinator([^\s]*)/,u=[/::shadow/g,/::content/g],g=/-shadowcsshost/gim,d=e=>new RegExp(`((?<!(^@supports(.*)))|(?<={.*))(${e}\\b)`,"gim"),m=d("::slotted"),$=d(":host"),_=d(":host-context"),x=/\/\*\s*[\s\S]*?\*\//g,f=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,w=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,S=/([{}])/g,b=/(^.*?[^\\])??((:+)(.*)|$)/,E="%BLOCK%",W=(e,t)=>{const s=k(e);let r=0;return s.escapedString.replace(w,((...e)=>{const c=e[2];let o="",n=e[4],l="";n&&n.startsWith("{"+E)&&(o=s.blocks[r++],n=n.substring(8),l="{");const p=t({selector:c,content:o});return`${e[1]}${p.selector}${e[3]}${l}${p.content}${n}`}))},k=e=>{const t=e.split(S),s=[],r=[];let c=0,o=[];for(let n=0;n<t.length;n++){const e=t[n];"}"===e&&c--,c>0?o.push(e):(o.length>0&&(r.push(o.join("")),s.push(E),o=[]),s.push(e)),"{"===e&&c++}o.length>0&&(r.push(o.join("")),s.push(E));return{escapedString:s.join(""),blocks:r}},O=(e,t,s)=>e.replace(t,((...e)=>{if(e[2]){const t=e[2].split(","),r=[];for(let c=0;c<t.length;c++){const o=t[c].trim();if(!o)break;r.push(s(i,o,e[3]))}return r.join(",")}return i+e[3]})),R=(e,t,s)=>e+t.replace(r,"")+s,j=(e,t,s)=>t.indexOf(r)>-1?R(e,t,s):e+t+s+", "+t+" "+e+s,C=(e,t)=>{const s=(e=>(e=e.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+e+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(t);return!s.test(e)},T=(e,t)=>e.replace(b,((e,s="",r,c="",o="")=>s+t+c+o)),L=(e,t,s)=>{const r="."+(t=t.replace(/\[is=([^\]]*)\]/g,((e,...t)=>t[0]))),c=e=>{let c=e.trim();if(!c)return"";if(e.indexOf(i)>-1)c=((e,t,s)=>{if(g.lastIndex=0,g.test(e)){const t=`.${s}`;return e.replace(h,((e,s)=>T(s,t))).replace(g,t+" ")}return t+" "+e})(e,t,s);else{const t=e.replace(g,"");t.length>0&&(c=T(t,r))}return c},o=(e=>{const t=[];let s=0;return{content:(e=e.replace(/(\[[^\]]*\])/g,((e,r)=>{const c=`__ph-${s}__`;return t.push(r),s++,c}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,((e,r,c)=>{const o=`__ph-${s}__`;return t.push(c),s++,r+o})),placeholders:t}})(e);let n,l="",p=0;const a=/( |>|\+|~(?!=))\s*/g;let u=!((e=o.content).indexOf(i)>-1);for(;null!==(n=a.exec(e));){const t=n[1],s=e.slice(p,n.index).trim();u=u||s.indexOf(i)>-1;l+=`${u?c(s):s} ${t} `,p=a.lastIndex}const d=e.substring(p);return u=u||d.indexOf(i)>-1,l+=u?c(d):d,m=o.placeholders,l.replace(/__ph-(\d+)__/g,((e,t)=>m[+t]));var m},B=(e,t,s,r,c)=>W(e,(e=>{let c=e.selector,o=e.content;"@"!==e.selector[0]?c=((e,t,s,r)=>e.split(",").map((e=>r&&e.indexOf("."+r)>-1?e.trim():C(e,t)?L(e,t,s).trim():e.trim())).join(", "))(e.selector,t,s,r):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(o=B(e.content,t,s,r));return{selector:c.replace(/\s{2,}/g," ").trim(),content:o}})),I=(e,t,s,n,h)=>{const g=((e,t)=>{const s="."+t+" > ",r=[];return e=e.replace(a,((...e)=>{if(e[2]){const t=e[2].trim(),c=e[3],o=s+t+c;let n="";for(let s=e[4]-1;s>=0;s--){const t=e[5][s];if("}"===t||","===t)break;n=t+n}const l=(n+o).trim(),p=`${n.trimEnd()}${o.trim()}`.trim();if(l!==p){const e=`${p}, ${l}`;r.push({orgSelector:l,updatedSelector:e})}return o}return i+e[3]})),{selectors:r,cssText:e}})(e=(e=>O(e,p,j))(e=(e=>O(e,l,R))(e=(e=>e.replace(_,`$1${o}`).replace($,`$1${r}`).replace(m,`$1${c}`))(e))),n);return e=(e=>u.reduce(((e,t)=>e.replace(t," ")),e))(e=g.cssText),t&&(e=B(e,t,s,n)),{cssText:(e=(e=K(e,s)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:g.selectors.map((e=>({orgSelector:K(e.orgSelector,s),updatedSelector:K(e.updatedSelector,s)})))}},K=(e,t)=>e.replace(/-shadowcsshost-no-combinator/g,`.${t}`),v=(e,t,s)=>{const r=t+"-h",c=t+"-s",o=e.match(f)||[];e=(e=>e.replace(x,""))(e);const n=[];if(s){const t=e=>{const t=`/*!@___${n.length}___*/`,s=`/*!@${e.selector}*/`;return n.push({placeholder:t,comment:s}),e.selector=t+e.selector,e};e=W(e,(e=>"@"!==e.selector[0]?t(e):e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document")?(e.content=W(e.content,t),e):e))}const l=I(e,t,r,c);return e=[l.cssText,...o].join("\n"),s&&n.forEach((({placeholder:t,comment:s})=>{e=e.replace(t,s)})),l.slottedSelectors.forEach((t=>{const s=new RegExp(t.orgSelector.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g");e=e.replace(s,t.updatedSelector)})),e}}}]);