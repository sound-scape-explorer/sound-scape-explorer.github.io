"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[72076],{41251:(e,t,n)=>{n.d(t,{$d:()=>r,C3:()=>o,UP:()=>s,gX:()=>i,z9:()=>c});const o="SSE",r="SoundScapeExplorer",i="sound-scape-explorer-VERSION",c="https://discord.gg/eRsQPDBeXg",s="https://github.com/sound-scape-explorer/sound-scape-explorer/discussions"},22672:(e,t,n)=>{n.d(t,{z9:()=>st,u5:()=>et,lB:()=>Ve,rB:()=>nt,Wr:()=>lt,zU:()=>bt,SJ:()=>We,EI:()=>pt,S3:()=>yt,Vw:()=>Ue,Ju:()=>Ke,RN:()=>at,Nb:()=>ht,jG:()=>Ge,dG:()=>dt,fS:()=>Qe,u1:()=>tt,GS:()=>Ze,ti:()=>ct,zK:()=>xt,sT:()=>jt,t_:()=>Ye,B:()=>ot,ib:()=>ut,_U:()=>vt,un:()=>Je,IJ:()=>ft,NB:()=>Xe,k3:()=>it,Zx:()=>gt,nO:()=>He,oS:()=>mt,BN:()=>qe,XC:()=>rt});var o=n(30758);const r=Object.freeze({left:0,top:0,width:16,height:16}),i=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),c=Object.freeze({...r,...i}),s=Object.freeze({...c,body:"",hidden:!1});function a(e,t){const n=function(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const o=((e.rotate||0)+(t.rotate||0))%4;return o&&(n.rotate=o),n}(e,t);for(const o in s)o in i?o in e&&!(o in n)&&(n[o]=i[o]):o in t?n[o]=t[o]:o in e&&(n[o]=e[o]);return n}function l(e,t,n){const o=e.icons,r=e.aliases||Object.create(null);let i={};function c(e){i=a(o[e]||r[e],i)}return c(t),n.forEach(c),a(e,i)}function f(e,t){const n=[];if("object"!=typeof e||"object"!=typeof e.icons)return n;e.not_found instanceof Array&&e.not_found.forEach((e=>{t(e,null),n.push(e)}));const o=function(e,t){const n=e.icons,o=e.aliases||Object.create(null),r=Object.create(null);return(t||Object.keys(n).concat(Object.keys(o))).forEach((function e(t){if(n[t])return r[t]=[];if(!(t in r)){r[t]=null;const n=o[t]&&o[t].parent,i=n&&e(n);i&&(r[t]=[n].concat(i))}return r[t]})),r}(e);for(const r in o){const i=o[r];i&&(t(r,l(e,r,i)),n.push(r))}return n}const u=/^[a-z0-9]+(-[a-z0-9]+)*$/,d=(e,t,n,o="")=>{const r=e.split(":");if("@"===e.slice(0,1)){if(r.length<2||r.length>3)return null;o=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const e=r.pop(),n=r.pop(),i={provider:r.length>0?r[0]:o,prefix:n,name:e};return t&&!p(i)?null:i}const i=r[0],c=i.split("-");if(c.length>1){const e={provider:o,prefix:c.shift(),name:c.join("-")};return t&&!p(e)?null:e}if(n&&""===o){const e={provider:o,prefix:"",name:i};return t&&!p(e,n)?null:e}return null},p=(e,t)=>!!e&&!(""!==e.provider&&!e.provider.match(u)||!(t&&""===e.prefix||e.prefix.match(u))||!e.name.match(u)),h={provider:"",aliases:{},not_found:{},...r};function g(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function m(e){if("object"!=typeof e||null===e)return null;const t=e;if("string"!=typeof t.prefix||!e.icons||"object"!=typeof e.icons)return null;if(!g(e,h))return null;const n=t.icons;for(const r in n){const e=n[r];if(!r.match(u)||"string"!=typeof e.body||!g(e,s))return null}const o=t.aliases||Object.create(null);for(const r in o){const e=o[r],t=e.parent;if(!r.match(u)||"string"!=typeof t||!n[t]&&!o[t]||!g(e,s))return null}return t}const x=Object.create(null);function b(e,t){const n=x[e]||(x[e]=Object.create(null));return n[t]||(n[t]=function(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}(e,t))}function y(e,t){return m(t)?f(t,((t,n)=>{n?e.icons[t]=n:e.missing.add(t)})):[]}let v=!1;function j(e){return"boolean"==typeof e&&(v=e),v}function w(e){const t="string"==typeof e?d(e,!0,v):e;if(t){const e=b(t.provider,t.prefix),n=t.name;return e.icons[n]||(e.missing.has(n)?null:void 0)}}function k(e,t){if("object"!=typeof e)return!1;if("string"!=typeof t&&(t=e.provider||""),v&&!t&&!e.prefix){let t=!1;return m(e)&&(e.prefix="",f(e,((e,n)=>{n&&function(e,t){const n=d(e,!0,v);return!!n&&function(e,t,n){try{if("string"==typeof n.body)return e.icons[t]={...n},!0}catch(o){}return!1}(b(n.provider,n.prefix),n.name,t)}(e,n)&&(t=!0)}))),t}const n=e.prefix;if(!p({provider:t,prefix:n,name:"a"}))return!1;return!!y(b(t,n),e)}const E=Object.freeze({width:null,height:null}),S=Object.freeze({...E,...i}),O=/(-?[0-9.]*[0-9]+[0-9.]*)/g,C=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function F(e,t,n){if(1===t)return e;if(n=n||100,"number"==typeof e)return Math.ceil(e*t*n)/n;if("string"!=typeof e)return e;const o=e.split(O);if(null===o||!o.length)return e;const r=[];let i=o.shift(),c=C.test(i);for(;;){if(c){const e=parseFloat(i);isNaN(e)?r.push(i):r.push(Math.ceil(e*t*n)/n)}else r.push(i);if(i=o.shift(),void 0===i)return r.join("");c=!c}}const I=/\sid="(\S+)"/g,M="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16);let T=0;function _(e,t=M){const n=[];let o;for(;o=I.exec(e);)n.push(o[1]);if(!n.length)return e;const r="suffix"+(16777216*Math.random()|Date.now()).toString(16);return n.forEach((n=>{const o="function"==typeof t?t(n):t+(T++).toString(),i=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+i+')([")]|\\.[a-z])',"g"),"$1"+o+r+"$3")})),e=e.replace(new RegExp(r,"g"),"")}const N=Object.create(null);function L(e,t){N[e]=t}function z(e){return N[e]||N[""]}function A(e){let t;if("string"==typeof e.resources)t=[e.resources];else if(t=e.resources,!(t instanceof Array&&t.length))return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:!0===e.random,index:e.index||0,dataAfterTimeout:!1!==e.dataAfterTimeout}}const B=Object.create(null),R=["https://api.simplesvg.com","https://api.unisvg.com"],P=[];for(;R.length>0;)1===R.length||Math.random()>.5?P.push(R.shift()):P.push(R.pop());function D(e,t){const n=A(t);return null!==n&&(B[e]=n,!0)}function $(e){return B[e]}B[""]=A({resources:["https://api.iconify.design"].concat(P)});let U=(()=>{let e;try{if(e=fetch,"function"==typeof e)return e}catch(t){}})();const J={prepare:(e,t,n)=>{const o=[],r=function(e,t){const n=$(e);if(!n)return 0;let o;if(n.maxURL){let e=0;n.resources.forEach((t=>{const n=t;e=Math.max(e,n.length)}));const r=t+".json?icons=";o=n.maxURL-e-n.path.length-r.length}else o=0;return o}(e,t),i="icons";let c={type:i,provider:e,prefix:t,icons:[]},s=0;return n.forEach(((n,a)=>{s+=n.length+1,s>=r&&a>0&&(o.push(c),c={type:i,provider:e,prefix:t,icons:[]},s=n.length),c.icons.push(n)})),o.push(c),o},send:(e,t,n)=>{if(!U)return void n("abort",424);let o=function(e){if("string"==typeof e){const t=$(e);if(t)return t.path}return"/"}(t.provider);switch(t.type){case"icons":{const e=t.prefix,n=t.icons.join(",");o+=e+".json?"+new URLSearchParams({icons:n}).toString();break}case"custom":{const e=t.uri;o+="/"===e.slice(0,1)?e.slice(1):e;break}default:return void n("abort",400)}let r=503;U(e+o).then((e=>{const t=e.status;if(200===t)return r=501,e.json();setTimeout((()=>{n(function(e){return 404===e}(t)?"abort":"next",t)}))})).then((e=>{"object"==typeof e&&null!==e?setTimeout((()=>{n("success",e)})):setTimeout((()=>{404===e?n("abort",e):n("next",r)}))})).catch((()=>{n("next",r)}))}};function X(e,t){e.forEach((e=>{const n=e.loaderCallbacks;n&&(e.loaderCallbacks=n.filter((e=>e.id!==t)))}))}let q=0;var H={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Q(e,t,n,o){const r=e.resources.length,i=e.random?Math.floor(Math.random()*r):e.index;let c;if(e.random){let t=e.resources.slice(0);for(c=[];t.length>1;){const e=Math.floor(Math.random()*t.length);c.push(t[e]),t=t.slice(0,e).concat(t.slice(e+1))}c=c.concat(t)}else c=e.resources.slice(i).concat(e.resources.slice(0,i));const s=Date.now();let a,l="pending",f=0,u=null,d=[],p=[];function h(){u&&(clearTimeout(u),u=null)}function g(){"pending"===l&&(l="aborted"),h(),d.forEach((e=>{"pending"===e.status&&(e.status="aborted")})),d=[]}function m(e,t){t&&(p=[]),"function"==typeof e&&p.push(e)}function x(){l="failed",p.forEach((e=>{e(void 0,a)}))}function b(){d.forEach((e=>{"pending"===e.status&&(e.status="aborted")})),d=[]}function y(){if("pending"!==l)return;h();const o=c.shift();if(void 0===o)return d.length?void(u=setTimeout((()=>{h(),"pending"===l&&(b(),x())}),e.timeout)):void x();const r={status:"pending",resource:o,callback:(t,n)=>{!function(t,n,o){const r="success"!==n;switch(d=d.filter((e=>e!==t)),l){case"pending":break;case"failed":if(r||!e.dataAfterTimeout)return;break;default:return}if("abort"===n)return a=o,void x();if(r)return a=o,void(d.length||(c.length?y():x()));if(h(),b(),!e.random){const n=e.resources.indexOf(t.resource);-1!==n&&n!==e.index&&(e.index=n)}l="completed",p.forEach((e=>{e(o)}))}(r,t,n)}};d.push(r),f++,u=setTimeout(y,e.rotate),n(o,t,r.callback)}return"function"==typeof o&&p.push(o),setTimeout(y),function(){return{startTime:s,payload:t,status:l,queriesSent:f,queriesPending:d.length,subscribe:m,abort:g}}}function G(e){const t={...H,...e};let n=[];function o(){n=n.filter((e=>"pending"===e().status))}return{query:function(e,r,i){const c=Q(t,e,r,((e,t)=>{o(),i&&i(e,t)}));return n.push(c),c},find:function(e){return n.find((t=>e(t)))||null},setIndex:e=>{t.index=e},getIndex:()=>t.index,cleanup:o}}function V(){}const W=Object.create(null);function K(e,t,n){let o,r;if("string"==typeof e){const t=z(e);if(!t)return n(void 0,424),V;r=t.send;const i=function(e){if(!W[e]){const t=$(e);if(!t)return;const n={config:t,redundancy:G(t)};W[e]=n}return W[e]}(e);i&&(o=i.redundancy)}else{const t=A(e);if(t){o=G(t);const n=z(e.resources?e.resources[0]:"");n&&(r=n.send)}}return o&&r?o.query(t,r,n)().abort:(n(void 0,424),V)}const Z="iconify2",Y="iconify",ee=Y+"-count",te=Y+"-version",ne=36e5,oe=168,re=50;function ie(e,t){try{return e.getItem(t)}catch(n){}}function ce(e,t,n){try{return e.setItem(t,n),!0}catch(o){}}function se(e,t){try{e.removeItem(t)}catch(n){}}function ae(e,t){return ce(e,ee,t.toString())}function le(e){return parseInt(ie(e,ee))||0}const fe={local:!0,session:!0},ue={local:new Set,session:new Set};let de=!1;let pe="undefined"==typeof window?{}:window;function he(e){const t=e+"Storage";try{if(pe&&pe[t]&&"number"==typeof pe[t].length)return pe[t]}catch(n){}fe[e]=!1}function ge(e,t){const n=he(e);if(!n)return;const o=ie(n,te);if(o!==Z){if(o){const e=le(n);for(let t=0;t<e;t++)se(n,Y+t.toString())}return ce(n,te,Z),void ae(n,0)}const r=Math.floor(Date.now()/ne)-oe,i=e=>{const o=Y+e.toString(),i=ie(n,o);if("string"==typeof i){try{const n=JSON.parse(i);if("object"==typeof n&&"number"==typeof n.cached&&n.cached>r&&"string"==typeof n.provider&&"object"==typeof n.data&&"string"==typeof n.data.prefix&&t(n,e))return!0}catch(c){}se(n,o)}};let c=le(n);for(let s=c-1;s>=0;s--)i(s)||(s===c-1?(c--,ae(n,c)):ue[e].add(s))}function me(){if(!de){de=!0;for(const e in fe)ge(e,(e=>{const t=e.data,n=b(e.provider,t.prefix);if(!y(n,t).length)return!1;const o=t.lastModified||-1;return n.lastModifiedCached=n.lastModifiedCached?Math.min(n.lastModifiedCached,o):o,!0}))}}function xe(e,t){function n(n){let o;if(!fe[n]||!(o=he(n)))return;const r=ue[n];let i;if(r.size)r.delete(i=Array.from(r).shift());else if(i=le(o),i>=re||!ae(o,i+1))return;const c={cached:Math.floor(Date.now()/ne),provider:e.provider,data:t};return ce(o,Y+i.toString(),JSON.stringify(c))}de||me(),t.lastModified&&!function(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const o in fe)ge(o,(n=>{const o=n.data;return n.provider!==e.provider||o.prefix!==e.prefix||o.lastModified===t}));return!0}(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&delete(t=Object.assign({},t)).not_found,n("local")||n("session"))}function be(){}function ye(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout((()=>{e.iconsLoaderFlag=!1,function(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout((()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const o=e.provider,r=e.prefix;t.forEach((t=>{const i=t.icons,c=i.pending.length;i.pending=i.pending.filter((t=>{if(t.prefix!==r)return!0;const c=t.name;if(e.icons[c])i.loaded.push({provider:o,prefix:r,name:c});else{if(!e.missing.has(c))return n=!0,!0;i.missing.push({provider:o,prefix:r,name:c})}return!1})),i.pending.length!==c&&(n||X([e],t.id),t.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),t.abort))}))})))}(e)})))}const ve=(e,t)=>{const n=function(e,t=!0,n=!1){const o=[];return e.forEach((e=>{const r="string"==typeof e?d(e,t,n):e;r&&o.push(r)})),o}(e,!0,j()),o=function(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort(((e,t)=>e.provider!==t.provider?e.provider.localeCompare(t.provider):e.prefix!==t.prefix?e.prefix.localeCompare(t.prefix):e.name.localeCompare(t.name)));let o={provider:"",prefix:"",name:""};return e.forEach((e=>{if(o.name===e.name&&o.prefix===e.prefix&&o.provider===e.provider)return;o=e;const r=e.provider,i=e.prefix,c=e.name,s=n[r]||(n[r]=Object.create(null)),a=s[i]||(s[i]=b(r,i));let l;l=c in a.icons?t.loaded:""===i||a.missing.has(c)?t.missing:t.pending;const f={provider:r,prefix:i,name:c};l.push(f)})),t}(n);if(!o.pending.length){let e=!0;return t&&setTimeout((()=>{e&&t(o.loaded,o.missing,o.pending,be)})),()=>{e=!1}}const r=Object.create(null),i=[];let c,s;return o.pending.forEach((e=>{const{provider:t,prefix:n}=e;if(n===s&&t===c)return;c=t,s=n,i.push(b(t,n));const o=r[t]||(r[t]=Object.create(null));o[n]||(o[n]=[])})),o.pending.forEach((e=>{const{provider:t,prefix:n,name:o}=e,i=b(t,n),c=i.pendingIcons||(i.pendingIcons=new Set);c.has(o)||(c.add(o),r[t][n].push(o))})),i.forEach((e=>{const{provider:t,prefix:n}=e;r[t][n].length&&function(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout((()=>{e.iconsQueueFlag=!1;const{provider:t,prefix:n}=e,o=e.iconsToLoad;let r;delete e.iconsToLoad,o&&(r=z(t))&&r.prepare(t,n,o).forEach((n=>{K(t,n,(t=>{if("object"!=typeof t)n.icons.forEach((t=>{e.missing.add(t)}));else try{const n=y(e,t);if(!n.length)return;const o=e.pendingIcons;o&&n.forEach((e=>{o.delete(e)})),xe(e,t)}catch(o){console.error(o)}ye(e)}))}))})))}(e,r[t][n])})),t?function(e,t,n){const o=q++,r=X.bind(null,n,o);if(!t.pending.length)return r;const i={id:o,icons:t,callback:e,abort:r};return n.forEach((e=>{(e.loaderCallbacks||(e.loaderCallbacks=[])).push(i)})),r}(t,o,i):be};const je=/[\s,]+/;function we(e,t){t.split(je).forEach((t=>{switch(t.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0}}))}function ke(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function o(e){for(;e<0;)e+=4;return e%4}if(""===n){const t=parseInt(e);return isNaN(t)?0:o(t)}if(n!==e){let t=0;switch(n){case"%":t=25;break;case"deg":t=90}if(t){let r=parseFloat(e.slice(0,e.length-n.length));return isNaN(r)?0:(r/=t,r%1==0?o(r):0)}}return t}let Ee;function Se(e){return void 0===Ee&&function(){try{Ee=window.trustedTypes.createPolicy("iconify",{createHTML:e=>e})}catch(e){Ee=null}}(),Ee?Ee.createHTML(e):e}const Oe={...S,inline:!1},Ce={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Fe={display:"inline-block"},Ie={backgroundColor:"currentColor"},Me={backgroundColor:"transparent"},Te={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},_e={WebkitMask:Ie,mask:Ie,background:Me};for(const kt in _e){const e=_e[kt];for(const t in Te)e[kt+t]=Te[t]}const Ne={...Oe,inline:!0};function Le(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const ze=(e,t,n)=>{const r=t.inline?Ne:Oe,i=function(e,t){const n={...e};for(const o in t){const e=t[o],r=typeof e;o in E?(null===e||e&&("string"===r||"number"===r))&&(n[o]=e):r===typeof n[o]&&(n[o]="rotate"===o?e%4:e)}return n}(r,t),s=t.mode||"svg",a={},l=t.style||{},f={..."svg"===s?Ce:{}};if(n){const e=d(n,!1,!0);if(e){const t=["iconify"],n=["provider","prefix"];for(const o of n)e[o]&&t.push("iconify--"+e[o]);f.className=t.join(" ")}}for(let o in t){const e=t[o];if(void 0!==e)switch(o){case"icon":case"style":case"children":case"onLoad":case"mode":case"ssr":break;case"_ref":f.ref=e;break;case"className":f[o]=(f[o]?f[o]+" ":"")+e;break;case"inline":case"hFlip":case"vFlip":i[o]=!0===e||"true"===e||1===e;break;case"flip":"string"==typeof e&&we(i,e);break;case"color":a.color=e;break;case"rotate":"string"==typeof e?i[o]=ke(e):"number"==typeof e&&(i[o]=e);break;case"ariaHidden":case"aria-hidden":!0!==e&&"true"!==e&&delete f["aria-hidden"];break;default:void 0===r[o]&&(f[o]=e)}}const u=function(e,t){const n={...c,...e},o={...S,...t},r={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,o].forEach((e=>{const t=[],n=e.hFlip,o=e.vFlip;let c,s=e.rotate;switch(n?o?s+=2:(t.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),t.push("scale(-1 1)"),r.top=r.left=0):o&&(t.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),t.push("scale(1 -1)"),r.top=r.left=0),s<0&&(s-=4*Math.floor(s/4)),s%=4,s){case 1:c=r.height/2+r.top,t.unshift("rotate(90 "+c.toString()+" "+c.toString()+")");break;case 2:t.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:c=r.width/2+r.left,t.unshift("rotate(-90 "+c.toString()+" "+c.toString()+")")}s%2==1&&(r.left!==r.top&&(c=r.left,r.left=r.top,r.top=c),r.width!==r.height&&(c=r.width,r.width=r.height,r.height=c)),t.length&&(i=function(e,t,n){const o=function(e,t="defs"){let n="";const o=e.indexOf("<"+t);for(;o>=0;){const r=e.indexOf(">",o),i=e.indexOf("</"+t);if(-1===r||-1===i)break;const c=e.indexOf(">",i);if(-1===c)break;n+=e.slice(r+1,i).trim(),e=e.slice(0,o).trim()+e.slice(c+1)}return{defs:n,content:e}}(e);return r=o.defs,i=t+o.content+n,r?"<defs>"+r+"</defs>"+i:i;var r,i}(i,'<g transform="'+t.join(" ")+'">',"</g>"))}));const s=o.width,a=o.height,l=r.width,f=r.height;let u,d;null===s?(d=null===a?"1em":"auto"===a?f:a,u=F(d,l/f)):(u="auto"===s?l:s,d=null===a?F(u,f/l):"auto"===a?f:a);const p={},h=(e,t)=>{(e=>"unset"===e||"undefined"===e||"none"===e)(t)||(p[e]=t.toString())};h("width",u),h("height",d);const g=[r.left,r.top,l,f];return p.viewBox=g.join(" "),{attributes:p,viewBox:g,body:i}}(e,i),p=u.attributes;if(i.inline&&(a.verticalAlign="-0.125em"),"svg"===s){f.style={...a,...l},Object.assign(f,p);let e=0,n=t.id;return"string"==typeof n&&(n=n.replace(/-/g,"_")),f.dangerouslySetInnerHTML={__html:Se(_(u.body,n?()=>n+"ID"+e++:"iconifyReact"))},(0,o.createElement)("svg",f)}const{body:h,width:g,height:m}=e,x="mask"===s||"bg"!==s&&-1!==h.indexOf("currentColor"),b=function(e,t){let n=-1===e.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const o in t)n+=" "+o+'="'+t[o]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}(h,{...p,width:g+"",height:m+""});var y;return f.style={...a,"--svg":(y=b,'url("'+function(e){return"data:image/svg+xml,"+function(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}(e)}(y)+'")'),width:Le(p.width),height:Le(p.height),...Fe,...x?Ie:Me,...l},(0,o.createElement)("span",f)};if(j(!0),L("",J),"undefined"!=typeof document&&"undefined"!=typeof window){me();const e=window;if(void 0!==e.IconifyPreload){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";"object"==typeof t&&null!==t&&(t instanceof Array?t:[t]).forEach((e=>{try{("object"!=typeof e||null===e||e instanceof Array||"object"!=typeof e.icons||"string"!=typeof e.prefix||!k(e))&&console.error(n)}catch(t){console.error(n)}}))}if(void 0!==e.IconifyProviders){const t=e.IconifyProviders;if("object"==typeof t&&null!==t)for(let e in t){const n="IconifyProviders["+e+"] is invalid.";try{const o=t[e];if("object"!=typeof o||!o||void 0===o.resources)continue;D(e,o)||console.error(n)}catch(wt){console.error(n)}}}}function Ae(e){const[t,n]=(0,o.useState)(!!e.ssr),[r,i]=(0,o.useState)({});const[s,a]=(0,o.useState)(function(t){if(t){const t=e.icon;if("object"==typeof t)return{name:"",data:t};const n=w(t);if(n)return{name:t,data:n}}return{name:""}}(!!e.ssr));function l(){const e=r.callback;e&&(e(),i({}))}function f(e){if(JSON.stringify(s)!==JSON.stringify(e))return l(),a(e),!0}function u(){var t;const n=e.icon;if("object"==typeof n)return void f({name:"",data:n});const o=w(n);if(f({name:n,data:o}))if(void 0===o){const e=ve([n],u);i({callback:e})}else o&&(null===(t=e.onLoad)||void 0===t||t.call(e,n))}(0,o.useEffect)((()=>(n(!0),l)),[]),(0,o.useEffect)((()=>{t&&u()}),[e.icon,t]);const{name:d,data:p}=s;return p?ze({...c,...p},e,d):e.children?e.children:(0,o.createElement)("span",{})}const Be=(0,o.forwardRef)(((e,t)=>Ae({...e,_ref:t}))),Re=((0,o.forwardRef)(((e,t)=>Ae({inline:!0,...e,_ref:t}))),"icon_wDXz"),Pe="cseIcon_AfLE";var De=n(86070);const $e=e=>{let{icon:t,color:n}=e;return(0,De.jsx)(Be,{className:Re,icon:`simple-icons:${t}`,style:{color:n}})},Ue=()=>(0,De.jsx)($e,{icon:"microsoftexcel",color:"#217346"}),Je=()=>(0,De.jsx)($e,{icon:"python",color:"#3776AB"}),Xe=()=>(0,De.jsx)(Be,{className:Re,icon:"bi:type-h5",style:{color:"#28378C"}}),qe=()=>(0,De.jsx)($e,{icon:"windows10",color:"#0078D6"}),He=()=>(0,De.jsx)($e,{icon:"ubuntu",color:"#E95420"}),Qe=()=>(0,De.jsx)($e,{icon:"apple",color:"#000000"}),Ge=()=>(0,De.jsx)($e,{icon:"homebrew",color:"#FBB040"}),Ve=()=>(0,De.jsx)($e,{icon:"c",color:"#A8B9CC"}),We=()=>(0,De.jsx)($e,{icon:"curl",color:"#073551"}),Ke=()=>(0,De.jsx)($e,{icon:"ffmpeg",color:"#007808"}),Ze=()=>(0,De.jsx)($e,{icon:"nodedotjs",color:"#339933"}),Ye=()=>(0,De.jsx)($e,{icon:"pnpm",color:"#F69220"}),et=()=>(0,De.jsx)($e,{icon:"gnubash",color:"#4EAA25"}),tt=()=>(0,De.jsx)($e,{icon:"microsoft",color:"#5E5E5E"}),nt=()=>(0,De.jsx)($e,{icon:"chocolatey",color:"#80B5E3"}),ot=()=>(0,De.jsx)($e,{icon:"powershell",color:"#5391FE"}),rt=()=>(0,De.jsx)($e,{icon:"xcode",color:"#147EFB"}),it=()=>(0,De.jsx)($e,{icon:"iterm2",color:"#000000"}),ct=()=>(0,De.jsx)($e,{icon:"numpy",color:"#013243"}),st=()=>(0,De.jsx)("img",{className:Re,src:"/img/logo.png",alt:"App Icon"}),at=()=>(0,De.jsx)($e,{icon:"firefoxbrowser",color:"#FF7139"}),lt=()=>(0,De.jsx)($e,{icon:"googlechrome",color:"#4285F4"}),ft=()=>(0,De.jsx)($e,{icon:"safari",color:"#000000"}),ut=()=>(0,De.jsx)($e,{icon:"pwa"}),dt=()=>(0,De.jsx)(Be,{className:Re,icon:"ic:baseline-install-desktop"}),pt=()=>(0,De.jsx)($e,{icon:"discord",color:"#5865F2"}),ht=()=>(0,De.jsx)($e,{icon:"github",color:"#181717"}),gt=()=>(0,De.jsx)($e,{icon:"typescript",color:"#3178C6"}),mt=()=>(0,De.jsx)($e,{icon:"vuedotjs",color:"#4FC08D"}),xt=()=>(0,De.jsx)($e,{icon:"nvidia",color:"#76B900"}),bt=()=>(0,De.jsx)("img",{className:Pe,src:"/img/cse/logo.svg",alt:"CSE Icon"}),yt=()=>(0,De.jsx)($e,{icon:"electron",color:"#47848F"}),vt=()=>(0,De.jsx)($e,{icon:"pypi",color:"#3775A9"}),jt=()=>(0,De.jsx)($e,{icon:"adobeacrobatreader",color:"#EC1C24"})},25710:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>s});var o=n(30758);const r={},i=o.createContext(r);function c(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);