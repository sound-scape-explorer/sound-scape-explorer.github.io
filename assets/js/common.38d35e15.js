"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[8592],{9571:(t,e,n)=>{n.d(e,{yO:()=>re,ht:()=>Kt,m2:()=>Xt,uf:()=>te,eL:()=>se,Vj:()=>Jt,D7:()=>ue,uo:()=>Bt,NX:()=>Vt,xw:()=>ce,ET:()=>de,cF:()=>Wt,j0:()=>fe,Fn:()=>Qt,Dg:()=>Yt,qh:()=>Zt,FS:()=>ie,ic:()=>ge,mR:()=>Gt,oQ:()=>ee,Mt:()=>le,gx:()=>Ut,wS:()=>ae,id:()=>$t,Fx:()=>oe,w:()=>pe,cc:()=>Ht,p6:()=>he,WI:()=>qt,SU:()=>ne});var o=n(959);const i=/^[a-z0-9]+(-[a-z0-9]+)*$/,r=(t,e,n,o="")=>{const i=t.split(":");if("@"===t.slice(0,1)){if(i.length<2||i.length>3)return null;o=i.shift().slice(1)}if(i.length>3||!i.length)return null;if(i.length>1){const t=i.pop(),n=i.pop(),r={provider:i.length>0?i[0]:o,prefix:n,name:t};return e&&!c(r)?null:r}const r=i[0],s=r.split("-");if(s.length>1){const t={provider:o,prefix:s.shift(),name:s.join("-")};return e&&!c(t)?null:t}if(n&&""===o){const t={provider:o,prefix:"",name:r};return e&&!c(t,n)?null:t}return null},c=(t,e)=>!!t&&!(""!==t.provider&&!t.provider.match(i)||!(e&&""===t.prefix||t.prefix.match(i))||!t.name.match(i)),s=Object.freeze({left:0,top:0,width:16,height:16}),a=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),l=Object.freeze({...s,...a}),f=Object.freeze({...l,body:"",hidden:!1});function u(t,e){const n=function(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const o=((t.rotate||0)+(e.rotate||0))%4;return o&&(n.rotate=o),n}(t,e);for(const o in f)o in a?o in t&&!(o in n)&&(n[o]=a[o]):o in e?n[o]=e[o]:o in t&&(n[o]=t[o]);return n}function d(t,e,n){const o=t.icons,i=t.aliases||Object.create(null);let r={};function c(t){r=u(o[t]||i[t],r)}return c(e),n.forEach(c),u(t,r)}function p(t,e){const n=[];if("object"!=typeof t||"object"!=typeof t.icons)return n;t.not_found instanceof Array&&t.not_found.forEach((t=>{e(t,null),n.push(t)}));const o=function(t,e){const n=t.icons,o=t.aliases||Object.create(null),i=Object.create(null);return(e||Object.keys(n).concat(Object.keys(o))).forEach((function t(e){if(n[e])return i[e]=[];if(!(e in i)){i[e]=null;const n=o[e]&&o[e].parent,r=n&&t(n);r&&(i[e]=[n].concat(r))}return i[e]})),i}(t);for(const i in o){const r=o[i];r&&(e(i,d(t,i,r)),n.push(i))}return n}const h={provider:"",aliases:{},not_found:{},...s};function g(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function m(t){if("object"!=typeof t||null===t)return null;const e=t;if("string"!=typeof e.prefix||!t.icons||"object"!=typeof t.icons)return null;if(!g(t,h))return null;const n=e.icons;for(const r in n){const t=n[r];if(!r.match(i)||"string"!=typeof t.body||!g(t,f))return null}const o=e.aliases||Object.create(null);for(const r in o){const t=o[r],e=t.parent;if(!r.match(i)||"string"!=typeof e||!n[e]&&!o[e]||!g(t,f))return null}return e}const b=Object.create(null);function y(t,e){const n=b[t]||(b[t]=Object.create(null));return n[e]||(n[e]=function(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}(t,e))}function x(t,e){return m(e)?p(e,((e,n)=>{n?t.icons[e]=n:t.missing.add(e)})):[]}let v=!1;function j(t){return"boolean"==typeof t&&(v=t),v}function w(t){const e="string"==typeof t?r(t,!0,v):t;if(e){const t=y(e.provider,e.prefix),n=e.name;return t.icons[n]||(t.missing.has(n)?null:void 0)}}function k(t,e){if("object"!=typeof t)return!1;if("string"!=typeof e&&(e=t.provider||""),v&&!e&&!t.prefix){let e=!1;return m(t)&&(t.prefix="",p(t,((t,n)=>{n&&function(t,e){const n=r(t,!0,v);return!!n&&function(t,e,n){try{if("string"==typeof n.body)return t.icons[e]={...n},!0}catch(o){}return!1}(y(n.provider,n.prefix),n.name,e)}(t,n)&&(e=!0)}))),e}const n=t.prefix;if(!c({provider:e,prefix:n,name:"a"}))return!1;return!!x(y(e,n),t)}const _=Object.freeze({width:null,height:null}),E=Object.freeze({..._,...a}),S=/(-?[0-9.]*[0-9]+[0-9.]*)/g,F=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function C(t,e,n){if(1===e)return t;if(n=n||100,"number"==typeof t)return Math.ceil(t*e*n)/n;if("string"!=typeof t)return t;const o=t.split(S);if(null===o||!o.length)return t;const i=[];let r=o.shift(),c=F.test(r);for(;;){if(c){const t=parseFloat(r);isNaN(t)?i.push(r):i.push(Math.ceil(t*e*n)/n)}else i.push(r);if(r=o.shift(),void 0===r)return i.join("");c=!c}}const O=/\sid="(\S+)"/g,M="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16);let I=0;function L(t,e=M){const n=[];let o;for(;o=O.exec(t);)n.push(o[1]);if(!n.length)return t;const i="suffix"+(16777216*Math.random()|Date.now()).toString(16);return n.forEach((n=>{const o="function"==typeof e?e(n):e+(I++).toString(),r=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+r+')([")]|\\.[a-z])',"g"),"$1"+o+i+"$3")})),t=t.replace(new RegExp(i,"g"),"")}const T=Object.create(null);function D(t,e){T[t]=e}function N(t){return T[t]||T[""]}function A(t){let e;if("string"==typeof t.resources)e=[t.resources];else if(e=t.resources,!(e instanceof Array&&e.length))return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:!0===t.random,index:t.index||0,dataAfterTimeout:!1!==t.dataAfterTimeout}}const z=Object.create(null),R=["https://api.simplesvg.com","https://api.unisvg.com"],P=[];for(;R.length>0;)1===R.length||Math.random()>.5?P.push(R.shift()):P.push(R.pop());function B(t,e){const n=A(e);return null!==n&&(z[t]=n,!0)}function U(t){return z[t]}z[""]=A({resources:["https://api.iconify.design"].concat(P)});let $=(()=>{let t;try{if(t=fetch,"function"==typeof t)return t}catch(e){}})();const q={prepare:(t,e,n)=>{const o=[],i=function(t,e){const n=U(t);if(!n)return 0;let o;if(n.maxURL){let t=0;n.resources.forEach((e=>{const n=e;t=Math.max(t,n.length)}));const i=e+".json?icons=";o=n.maxURL-t-n.path.length-i.length}else o=0;return o}(t,e),r="icons";let c={type:r,provider:t,prefix:e,icons:[]},s=0;return n.forEach(((n,a)=>{s+=n.length+1,s>=i&&a>0&&(o.push(c),c={type:r,provider:t,prefix:e,icons:[]},s=n.length),c.icons.push(n)})),o.push(c),o},send:(t,e,n)=>{if(!$)return void n("abort",424);let o=function(t){if("string"==typeof t){const e=U(t);if(e)return e.path}return"/"}(e.provider);switch(e.type){case"icons":{const t=e.prefix,n=e.icons.join(",");o+=t+".json?"+new URLSearchParams({icons:n}).toString();break}case"custom":{const t=e.uri;o+="/"===t.slice(0,1)?t.slice(1):t;break}default:return void n("abort",400)}let i=503;$(t+o).then((t=>{const e=t.status;if(200===e)return i=501,t.json();setTimeout((()=>{n(function(t){return 404===t}(e)?"abort":"next",e)}))})).then((t=>{"object"==typeof t&&null!==t?setTimeout((()=>{n("success",t)})):setTimeout((()=>{404===t?n("abort",t):n("next",i)}))})).catch((()=>{n("next",i)}))}};function H(t,e){t.forEach((t=>{const n=t.loaderCallbacks;n&&(t.loaderCallbacks=n.filter((t=>t.id!==e)))}))}let Q=0;var W={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function X(t,e,n,o){const i=t.resources.length,r=t.random?Math.floor(Math.random()*i):t.index;let c;if(t.random){let e=t.resources.slice(0);for(c=[];e.length>1;){const t=Math.floor(Math.random()*e.length);c.push(e[t]),e=e.slice(0,t).concat(e.slice(t+1))}c=c.concat(e)}else c=t.resources.slice(r).concat(t.resources.slice(0,r));const s=Date.now();let a,l="pending",f=0,u=null,d=[],p=[];function h(){u&&(clearTimeout(u),u=null)}function g(){"pending"===l&&(l="aborted"),h(),d.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),d=[]}function m(t,e){e&&(p=[]),"function"==typeof t&&p.push(t)}function b(){l="failed",p.forEach((t=>{t(void 0,a)}))}function y(){d.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),d=[]}function x(){if("pending"!==l)return;h();const o=c.shift();if(void 0===o)return d.length?void(u=setTimeout((()=>{h(),"pending"===l&&(y(),b())}),t.timeout)):void b();const i={status:"pending",resource:o,callback:(e,n)=>{!function(e,n,o){const i="success"!==n;switch(d=d.filter((t=>t!==e)),l){case"pending":break;case"failed":if(i||!t.dataAfterTimeout)return;break;default:return}if("abort"===n)return a=o,void b();if(i)return a=o,void(d.length||(c.length?x():b()));if(h(),y(),!t.random){const n=t.resources.indexOf(e.resource);-1!==n&&n!==t.index&&(t.index=n)}l="completed",p.forEach((t=>{t(o)}))}(i,e,n)}};d.push(i),f++,u=setTimeout(x,t.rotate),n(o,e,i.callback)}return"function"==typeof o&&p.push(o),setTimeout(x),function(){return{startTime:s,payload:e,status:l,queriesSent:f,queriesPending:d.length,subscribe:m,abort:g}}}function J(t){const e={...W,...t};let n=[];function o(){n=n.filter((t=>"pending"===t().status))}return{query:function(t,i,r){const c=X(e,t,i,((t,e)=>{o(),r&&r(t,e)}));return n.push(c),c},find:function(t){return n.find((e=>t(e)))||null},setIndex:t=>{e.index=t},getIndex:()=>e.index,cleanup:o}}function V(){}const Z=Object.create(null);function G(t,e,n){let o,i;if("string"==typeof t){const e=N(t);if(!e)return n(void 0,424),V;i=e.send;const r=function(t){if(!Z[t]){const e=U(t);if(!e)return;const n={config:e,redundancy:J(e)};Z[t]=n}return Z[t]}(t);r&&(o=r.redundancy)}else{const e=A(t);if(e){o=J(e);const n=N(t.resources?t.resources[0]:"");n&&(i=n.send)}}return o&&i?o.query(e,i,n)().abort:(n(void 0,424),V)}const K="iconify2",Y="iconify",tt=Y+"-count",et=Y+"-version",nt=36e5,ot=168;function it(t,e){try{return t.getItem(e)}catch(n){}}function rt(t,e,n){try{return t.setItem(e,n),!0}catch(o){}}function ct(t,e){try{t.removeItem(e)}catch(n){}}function st(t,e){return rt(t,tt,e.toString())}function at(t){return parseInt(it(t,tt))||0}const lt={local:!0,session:!0},ft={local:new Set,session:new Set};let ut=!1;let dt="undefined"==typeof window?{}:window;function pt(t){const e=t+"Storage";try{if(dt&&dt[e]&&"number"==typeof dt[e].length)return dt[e]}catch(n){}lt[t]=!1}function ht(t,e){const n=pt(t);if(!n)return;const o=it(n,et);if(o!==K){if(o){const t=at(n);for(let e=0;e<t;e++)ct(n,Y+e.toString())}return rt(n,et,K),void st(n,0)}const i=Math.floor(Date.now()/nt)-ot,r=t=>{const o=Y+t.toString(),r=it(n,o);if("string"==typeof r){try{const n=JSON.parse(r);if("object"==typeof n&&"number"==typeof n.cached&&n.cached>i&&"string"==typeof n.provider&&"object"==typeof n.data&&"string"==typeof n.data.prefix&&e(n,t))return!0}catch(c){}ct(n,o)}};let c=at(n);for(let s=c-1;s>=0;s--)r(s)||(s===c-1?(c--,st(n,c)):ft[t].add(s))}function gt(){if(!ut){ut=!0;for(const t in lt)ht(t,(t=>{const e=t.data,n=y(t.provider,e.prefix);if(!x(n,e).length)return!1;const o=e.lastModified||-1;return n.lastModifiedCached=n.lastModifiedCached?Math.min(n.lastModifiedCached,o):o,!0}))}}function mt(t,e){function n(n){let o;if(!lt[n]||!(o=pt(n)))return;const i=ft[n];let r;if(i.size)i.delete(r=Array.from(i).shift());else if(r=at(o),!st(o,r+1))return;const c={cached:Math.floor(Date.now()/nt),provider:t.provider,data:e};return rt(o,Y+r.toString(),JSON.stringify(c))}ut||gt(),e.lastModified&&!function(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const o in lt)ht(o,(n=>{const o=n.data;return n.provider!==t.provider||o.prefix!==t.prefix||o.lastModified===e}));return!0}(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&delete(e=Object.assign({},e)).not_found,n("local")||n("session"))}function bt(){}function yt(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout((()=>{t.iconsLoaderFlag=!1,function(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout((()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const o=t.provider,i=t.prefix;e.forEach((e=>{const r=e.icons,c=r.pending.length;r.pending=r.pending.filter((e=>{if(e.prefix!==i)return!0;const c=e.name;if(t.icons[c])r.loaded.push({provider:o,prefix:i,name:c});else{if(!t.missing.has(c))return n=!0,!0;r.missing.push({provider:o,prefix:i,name:c})}return!1})),r.pending.length!==c&&(n||H([t],e.id),e.callback(r.loaded.slice(0),r.missing.slice(0),r.pending.slice(0),e.abort))}))})))}(t)})))}const xt=(t,e)=>{const n=function(t,e=!0,n=!1){const o=[];return t.forEach((t=>{const i="string"==typeof t?r(t,e,n):t;i&&o.push(i)})),o}(t,!0,j()),o=function(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort(((t,e)=>t.provider!==e.provider?t.provider.localeCompare(e.provider):t.prefix!==e.prefix?t.prefix.localeCompare(e.prefix):t.name.localeCompare(e.name)));let o={provider:"",prefix:"",name:""};return t.forEach((t=>{if(o.name===t.name&&o.prefix===t.prefix&&o.provider===t.provider)return;o=t;const i=t.provider,r=t.prefix,c=t.name,s=n[i]||(n[i]=Object.create(null)),a=s[r]||(s[r]=y(i,r));let l;l=c in a.icons?e.loaded:""===r||a.missing.has(c)?e.missing:e.pending;const f={provider:i,prefix:r,name:c};l.push(f)})),e}(n);if(!o.pending.length){let t=!0;return e&&setTimeout((()=>{t&&e(o.loaded,o.missing,o.pending,bt)})),()=>{t=!1}}const i=Object.create(null),c=[];let s,a;return o.pending.forEach((t=>{const{provider:e,prefix:n}=t;if(n===a&&e===s)return;s=e,a=n,c.push(y(e,n));const o=i[e]||(i[e]=Object.create(null));o[n]||(o[n]=[])})),o.pending.forEach((t=>{const{provider:e,prefix:n,name:o}=t,r=y(e,n),c=r.pendingIcons||(r.pendingIcons=new Set);c.has(o)||(c.add(o),i[e][n].push(o))})),c.forEach((t=>{const{provider:e,prefix:n}=t;i[e][n].length&&function(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout((()=>{t.iconsQueueFlag=!1;const{provider:e,prefix:n}=t,o=t.iconsToLoad;let i;delete t.iconsToLoad,o&&(i=N(e))&&i.prepare(e,n,o).forEach((n=>{G(e,n,(e=>{if("object"!=typeof e)n.icons.forEach((e=>{t.missing.add(e)}));else try{const n=x(t,e);if(!n.length)return;const o=t.pendingIcons;o&&n.forEach((t=>{o.delete(t)})),mt(t,e)}catch(o){console.error(o)}yt(t)}))}))})))}(t,i[e][n])})),e?function(t,e,n){const o=Q++,i=H.bind(null,n,o);if(!e.pending.length)return i;const r={id:o,icons:e,callback:t,abort:i};return n.forEach((t=>{(t.loaderCallbacks||(t.loaderCallbacks=[])).push(r)})),i}(e,o,c):bt};const vt=/[\s,]+/;function jt(t,e){e.split(vt).forEach((e=>{switch(e.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0}}))}function wt(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function o(t){for(;t<0;)t+=4;return t%4}if(""===n){const e=parseInt(t);return isNaN(e)?0:o(e)}if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i/=e,i%1==0?o(i):0)}}return e}let kt;function _t(t){return void 0===kt&&function(){try{kt=window.trustedTypes.createPolicy("iconify",{createHTML:t=>t})}catch(t){kt=null}}(),kt?kt.createHTML(t):t}const Et={...E,inline:!1},St={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Ft={display:"inline-block"},Ct={backgroundColor:"currentColor"},Ot={backgroundColor:"transparent"},Mt={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},It={WebkitMask:Ct,mask:Ct,background:Ot};for(const be in It){const t=It[be];for(const e in Mt)t[be+e]=Mt[e]}const Lt={...Et,inline:!0};function Tt(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const Dt=(t,e,n,i)=>{const r=n?Lt:Et,c=function(t,e){const n={...t};for(const o in e){const t=e[o],i=typeof t;o in _?(null===t||t&&("string"===i||"number"===i))&&(n[o]=t):i===typeof n[o]&&(n[o]="rotate"===o?t%4:t)}return n}(r,e),s=e.mode||"svg",a={},f=e.style||{},u={..."svg"===s?St:{},ref:i};for(let o in e){const t=e[o];if(void 0!==t)switch(o){case"icon":case"style":case"children":case"onLoad":case"mode":case"_ref":case"_inline":break;case"inline":case"hFlip":case"vFlip":c[o]=!0===t||"true"===t||1===t;break;case"flip":"string"==typeof t&&jt(c,t);break;case"color":a.color=t;break;case"rotate":"string"==typeof t?c[o]=wt(t):"number"==typeof t&&(c[o]=t);break;case"ariaHidden":case"aria-hidden":!0!==t&&"true"!==t&&delete u["aria-hidden"];break;default:void 0===r[o]&&(u[o]=t)}}const d=function(t,e){const n={...l,...t},o={...E,...e},i={left:n.left,top:n.top,width:n.width,height:n.height};let r=n.body;[n,o].forEach((t=>{const e=[],n=t.hFlip,o=t.vFlip;let c,s=t.rotate;switch(n?o?s+=2:(e.push("translate("+(i.width+i.left).toString()+" "+(0-i.top).toString()+")"),e.push("scale(-1 1)"),i.top=i.left=0):o&&(e.push("translate("+(0-i.left).toString()+" "+(i.height+i.top).toString()+")"),e.push("scale(1 -1)"),i.top=i.left=0),s<0&&(s-=4*Math.floor(s/4)),s%=4,s){case 1:c=i.height/2+i.top,e.unshift("rotate(90 "+c.toString()+" "+c.toString()+")");break;case 2:e.unshift("rotate(180 "+(i.width/2+i.left).toString()+" "+(i.height/2+i.top).toString()+")");break;case 3:c=i.width/2+i.left,e.unshift("rotate(-90 "+c.toString()+" "+c.toString()+")")}s%2==1&&(i.left!==i.top&&(c=i.left,i.left=i.top,i.top=c),i.width!==i.height&&(c=i.width,i.width=i.height,i.height=c)),e.length&&(r='<g transform="'+e.join(" ")+'">'+r+"</g>")}));const c=o.width,s=o.height,a=i.width,f=i.height;let u,d;null===c?(d=null===s?"1em":"auto"===s?f:s,u=C(d,a/f)):(u="auto"===c?a:c,d=null===s?C(u,f/a):"auto"===s?f:s);const p={},h=(t,e)=>{(t=>"unset"===t||"undefined"===t||"none"===t)(e)||(p[t]=e.toString())};return h("width",u),h("height",d),p.viewBox=i.left.toString()+" "+i.top.toString()+" "+a.toString()+" "+f.toString(),{attributes:p,body:r}}(t,c),p=d.attributes;if(c.inline&&(a.verticalAlign="-0.125em"),"svg"===s){u.style={...a,...f},Object.assign(u,p);let t=0,n=e.id;return"string"==typeof n&&(n=n.replace(/-/g,"_")),u.dangerouslySetInnerHTML={__html:_t(L(d.body,n?()=>n+"ID"+t++:"iconifyReact"))},o.createElement("svg",u)}const{body:h,width:g,height:m}=t,b="mask"===s||"bg"!==s&&-1!==h.indexOf("currentColor"),y=function(t,e){let n=-1===t.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const o in e)n+=" "+o+'="'+e[o]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}(h,{...p,width:g+"",height:m+""});var x;return u.style={...a,"--svg":(x=y,'url("'+function(t){return"data:image/svg+xml,"+function(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}(t)}(x)+'")'),width:Tt(p.width),height:Tt(p.height),...Ft,...b?Ct:Ot,...f},o.createElement("span",u)};if(j(!0),D("",q),"undefined"!=typeof document&&"undefined"!=typeof window){gt();const t=window;if(void 0!==t.IconifyPreload){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";"object"==typeof e&&null!==e&&(e instanceof Array?e:[e]).forEach((t=>{try{("object"!=typeof t||null===t||t instanceof Array||"object"!=typeof t.icons||"string"!=typeof t.prefix||!k(t))&&console.error(n)}catch(e){console.error(n)}}))}if(void 0!==t.IconifyProviders){const e=t.IconifyProviders;if("object"==typeof e&&null!==e)for(let t in e){const n="IconifyProviders["+t+"] is invalid.";try{const o=e[t];if("object"!=typeof o||!o||void 0===o.resources)continue;B(t,o)||console.error(n)}catch(me){console.error(n)}}}}class Nt extends o.Component{constructor(t){super(t),this.state={icon:null}}_abortLoading(){this._loading&&(this._loading.abort(),this._loading=null)}_setData(t){this.state.icon!==t&&this.setState({icon:t})}_checkIcon(t){const e=this.state,n=this.props.icon;if("object"==typeof n&&null!==n&&"string"==typeof n.body)return this._icon="",this._abortLoading(),void((t||null===e.icon)&&this._setData({data:n}));let o;if("string"!=typeof n||null===(o=r(n,!1,!0)))return this._abortLoading(),void this._setData(null);const i=w(o);if(i){if(this._icon!==n||null===e.icon){this._abortLoading(),this._icon=n;const t=["iconify"];""!==o.prefix&&t.push("iconify--"+o.prefix),""!==o.provider&&t.push("iconify--"+o.provider),this._setData({data:i,classes:t}),this.props.onLoad&&this.props.onLoad(n)}}else this._loading&&this._loading.name===n||(this._abortLoading(),this._icon="",this._setData(null),null!==i&&(this._loading={name:n,abort:xt([o],this._checkIcon.bind(this,!1))}))}componentDidMount(){this._checkIcon(!1)}componentDidUpdate(t){t.icon!==this.props.icon&&this._checkIcon(!0)}componentWillUnmount(){this._abortLoading()}render(){const t=this.props,e=this.state.icon;if(null===e)return t.children?t.children:o.createElement("span",{});let n=t;return e.classes&&(n={...t,className:("string"==typeof t.className?t.className+" ":"")+e.classes.join(" ")}),Dt({...l,...e.data},n,t._inline,t._ref)}}const At=o.forwardRef((function(t,e){const n={...t,_ref:e,_inline:!1};return o.createElement(Nt,n)})),zt=(o.forwardRef((function(t,e){const n={...t,_ref:e,_inline:!0};return o.createElement(Nt,n)})),"icon_wDXz");var Rt=n(1527);const Pt=t=>{let{icon:e,color:n}=t;return(0,Rt.jsx)(At,{className:zt,icon:`simple-icons:${e}`,style:{color:n}})},Bt=()=>(0,Rt.jsx)(Pt,{icon:"microsoftexcel",color:"#217346"}),Ut=()=>(0,Rt.jsx)(Pt,{icon:"python",color:"#3776AB"}),$t=()=>(0,Rt.jsx)(At,{className:zt,icon:"bi:type-h5",style:{color:"#28378C"}}),qt=()=>(0,Rt.jsx)(Pt,{icon:"windows10",color:"#0078D6"}),Ht=()=>(0,Rt.jsx)(Pt,{icon:"ubuntu",color:"#E95420"}),Qt=()=>(0,Rt.jsx)(Pt,{icon:"apple",color:"#000000"}),Wt=()=>(0,Rt.jsx)(Pt,{icon:"homebrew",color:"#FBB040"}),Xt=()=>(0,Rt.jsx)(Pt,{icon:"c",color:"#A8B9CC"}),Jt=()=>(0,Rt.jsx)(Pt,{icon:"curl",color:"#073551"}),Vt=()=>(0,Rt.jsx)(Pt,{icon:"ffmpeg",color:"#007808"}),Zt=()=>(0,Rt.jsx)(Pt,{icon:"nodedotjs",color:"#339933"}),Gt=()=>(0,Rt.jsx)(Pt,{icon:"pnpm",color:"#F69220"}),Kt=()=>(0,Rt.jsx)(Pt,{icon:"gnubash",color:"#4EAA25"}),Yt=()=>(0,Rt.jsx)(Pt,{icon:"microsoft",color:"#5E5E5E"}),te=()=>(0,Rt.jsx)(Pt,{icon:"chocolatey",color:"#80B5E3"}),ee=()=>(0,Rt.jsx)(Pt,{icon:"powershell",color:"#5391FE"}),ne=()=>(0,Rt.jsx)(Pt,{icon:"xcode",color:"#147EFB"}),oe=()=>(0,Rt.jsx)(Pt,{icon:"iterm2",color:"#000000"}),ie=()=>(0,Rt.jsx)(Pt,{icon:"numpy",color:"#013243"}),re=()=>(0,Rt.jsx)("img",{className:zt,src:"/img/logo.png",role:"img",alt:"App Icon"}),ce=()=>(0,Rt.jsx)(Pt,{icon:"firefoxbrowser",color:"#FF7139"}),se=()=>(0,Rt.jsx)(Pt,{icon:"googlechrome",color:"#4285F4"}),ae=()=>(0,Rt.jsx)(Pt,{icon:"safari",color:"#000000"}),le=()=>(0,Rt.jsx)(Pt,{icon:"pwa"}),fe=()=>(0,Rt.jsx)(At,{className:zt,icon:"ic:baseline-install-desktop"}),ue=()=>(0,Rt.jsx)(Pt,{icon:"discord",color:"#5865F2"}),de=()=>(0,Rt.jsx)(Pt,{icon:"github",color:"#181717"}),pe=()=>(0,Rt.jsx)(Pt,{icon:"typescript",color:"#3178C6"}),he=()=>(0,Rt.jsx)(Pt,{icon:"vuedotjs",color:"#4FC08D"}),ge=()=>(0,Rt.jsx)(Pt,{icon:"nvidia",color:"#76B900"})},3883:(t,e,n)=>{n.d(e,{Z:()=>s,a:()=>c});var o=n(959);const i={},r=o.createContext(i);function c(t){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:c(t.components),o.createElement(r.Provider,{value:e},t.children)}}}]);