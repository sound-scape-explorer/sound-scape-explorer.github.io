"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[6752],{784:(e,t,n)=>{n.d(t,{c:()=>b});n(96651);var s=n(66548),a=n(11656),i=n(52344),l=n(17924),o=n(39788),c=n(15272),r=n(80416),d=n(2488);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_yGPz"};function h(){const e=(0,r.c)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(o.c,{"aria-label":(0,c.G)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const v={breadcrumbsContainer:"breadcrumbsContainer_QOog"};function x(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,d.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,d.jsx)(o.c,{className:a,href:n,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:a,children:t})}function p(e){let{children:t,active:n,index:a,addMicrodata:i}=e;return(0,d.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.c)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function b(){const e=(0,i.js)(),t=(0,l.Y5)();return e?(0,d.jsx)("nav",{className:(0,s.c)(a.W.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,c.G)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(p,{active:s,index:n,addMicrodata:!!a,children:(0,d.jsx)(x,{href:a,isLast:s,children:t.label})},n)}))]})}):null}},32248:(e,t,n)=>{n.r(t),n.d(t,{default:()=>q});var s=n(96651),a=n(35604),i=n(87288),l=n(2488);const o=s.createContext(null);function c(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,l.jsx)(o.Provider,{value:a,children:t})}function r(){const e=(0,s.useContext)(o);if(null===e)throw new i.AH("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=r();return(0,l.jsx)(a.U7,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(66548),m=n(89237),h=n(90516);function v(){const{metadata:e}=r();return(0,l.jsx)(h.c,{previous:e.previous,next:e.next})}var x=n(37560),p=n(46204),b=n(11656),g=n(15272);function f(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return(0,l.jsx)(g.c,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:n})})},children:" on {date}"})}function j(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(g.c,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function L(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:s}=e;return(0,l.jsxs)("span",{className:b.W.common.lastUpdated,children:[(0,l.jsx)(g.c,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?(0,l.jsx)(f,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:s?(0,l.jsx)(j,{lastUpdatedBy:s}):""},children:"Last updated{atDate}{byUser}"}),!1]})}var _=n(59196),N=n(94328);const C={lastUpdated:"lastUpdated__uY9"};function k(e){return(0,l.jsx)("div",{className:(0,u.c)(b.W.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(N.c,{...e})})})}function T(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,formattedLastUpdatedAt:a}=e;return(0,l.jsxs)("div",{className:(0,u.c)(b.W.docs.docFooterEditMetaRow,"row"),children:[(0,l.jsx)("div",{className:"col",children:t&&(0,l.jsx)(_.c,{editUrl:t})}),(0,l.jsx)("div",{className:(0,u.c)("col",C.lastUpdated),children:(n||s)&&(0,l.jsx)(L,{lastUpdatedAt:n,formattedLastUpdatedAt:a,lastUpdatedBy:s})})]})}function U(){const{metadata:e}=r(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:s,lastUpdatedBy:a,tags:i}=e,o=i.length>0,c=!!(t||n||a);return o||c?(0,l.jsxs)("footer",{className:(0,u.c)(b.W.docs.docFooter,"docusaurus-mt-lg"),children:[o&&(0,l.jsx)(k,{tags:i}),c&&(0,l.jsx)(T,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a,formattedLastUpdatedAt:s})]}):null}var H=n(62800),y=n(78088);const A={tocCollapsibleButton:"tocCollapsibleButton_AaP0",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_iOBh"};function w(e){let{collapsed:t,...n}=e;return(0,l.jsx)("button",{type:"button",...n,className:(0,u.c)("clean-btn",A.tocCollapsibleButton,!t&&A.tocCollapsibleButtonExpanded,n.className),children:(0,l.jsx)(g.c,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const M={tocCollapsible:"tocCollapsible_CRvs",tocCollapsibleContent:"tocCollapsibleContent_go67",tocCollapsibleExpanded:"tocCollapsibleExpanded_tnnx"};function B(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:o}=(0,H.a)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.c)(M.tocCollapsible,!i&&M.tocCollapsibleExpanded,n),children:[(0,l.jsx)(w,{collapsed:i,onClick:o}),(0,l.jsx)(H.U,{lazy:!0,className:M.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(y.c,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const E={tocMobile:"tocMobile_vIas"};function I(){const{toc:e,frontMatter:t}=r();return(0,l.jsx)(B,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.c)(b.W.docs.docTocMobile,E.tocMobile)})}var O=n(13036);function W(){const{toc:e,frontMatter:t}=r();return(0,l.jsx)(O.c,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:b.W.docs.docTocDesktop})}var P=n(74836),R=n(42860);function S(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=r();return t.hide_title||void 0!==n?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.c)(b.W.docs.docMarkdown,"markdown"),children:[n&&(0,l.jsx)("header",{children:(0,l.jsx)(P.c,{as:"h1",children:n})}),(0,l.jsx)(R.c,{children:t})]})}var V=n(784),z=n(78188);const D={docItemContainer:"docItemContainer_QOyV",docItemCol:"docItemCol_Pzn_"};function F(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=r(),n=(0,m.U)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,l.jsx)(I,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,l.jsx)(W,{})}}(),{metadata:{unlisted:s}}=r();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.c)("col",!n.hidden&&D.docItemCol),children:[s&&(0,l.jsx)(z.c,{}),(0,l.jsx)(x.c,{}),(0,l.jsxs)("div",{className:D.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(V.c,{}),(0,l.jsx)(p.c,{}),n.mobile,(0,l.jsx)(S,{children:t}),(0,l.jsx)(U,{})]}),(0,l.jsx)(v,{})]})]}),n.desktop&&(0,l.jsx)("div",{className:"col col--3",children:n.desktop})]})}function q(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,l.jsx)(c,{content:e.content,children:(0,l.jsxs)(a.cr,{className:t,children:[(0,l.jsx)(d,{}),(0,l.jsx)(F,{children:(0,l.jsx)(n,{})})]})})}},90516:(e,t,n)=>{n.d(t,{c:()=>l});n(96651);var s=n(15272),a=n(57597),i=n(2488);function l(e){const{previous:t,next:n}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.G)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(a.c,{...t,subLabel:(0,i.jsx)(s.c,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,i.jsx)(a.c,{...n,subLabel:(0,i.jsx)(s.c,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},46204:(e,t,n)=>{n.d(t,{c:()=>c});n(96651);var s=n(66548),a=n(15272),i=n(11656),l=n(39136),o=n(2488);function c(e){let{className:t}=e;const n=(0,l.E)();return n.badge?(0,o.jsx)("span",{className:(0,s.c)(t,i.W.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(a.c,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},37560:(e,t,n)=>{n.d(t,{c:()=>p});n(96651);var s=n(66548),a=n(61060),i=n(39788),l=n(15272),o=n(18120),c=n(11656),r=n(98688),d=n(39136),u=n(2488);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(l.c,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(l.c,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function v(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,u.jsx)(l.c,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(i.c,{to:n,onClick:s,children:(0,u.jsx)(l.c,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function x(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:i}}=(0,a.c)(),{pluginId:l}=(0,o.UF)({failfast:!0}),{savePreferredVersionName:d}=(0,r.iy)(l),{latestDocSuggestion:m,latestVersionSuggestion:x}=(0,o.i8)(l),p=m??(b=x).docs.find((e=>e.id===b.mainDocId));var b;return(0,u.jsxs)("div",{className:(0,s.c)(t,c.W.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:i,versionMetadata:n})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(v,{versionLabel:x.label,to:p.path,onClick:()=>d(x.name)})})]})}function p(e){let{className:t}=e;const n=(0,d.E)();return n.banner?(0,u.jsx)(x,{className:t,versionMetadata:n}):null}},59196:(e,t,n)=>{n.d(t,{c:()=>d});n(96651);var s=n(15272),a=n(11656),i=n(39788),l=n(66548);const o={iconEdit:"iconEdit_d8Z_"};var c=n(2488);function r(e){let{className:t,...n}=e;return(0,c.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.c)(o.iconEdit,t),"aria-hidden":"true",...n,children:(0,c.jsx)("g",{children:(0,c.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(e){let{editUrl:t}=e;return(0,c.jsxs)(i.c,{to:t,className:a.W.common.editThisPage,children:[(0,c.jsx)(r,{}),(0,c.jsx)(s.c,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},57597:(e,t,n)=>{n.d(t,{c:()=>l});n(96651);var s=n(66548),a=n(39788),i=n(2488);function l(e){const{permalink:t,title:n,subLabel:l,isNext:o}=e;return(0,i.jsxs)(a.c,{className:(0,s.c)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}},13036:(e,t,n)=>{n.d(t,{c:()=>r});n(96651);var s=n(66548),a=n(78088);const i={tableOfContents:"tableOfContents_o0Rw",docItemContainer:"docItemContainer_F2sH"};var l=n(2488);const o="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function r(e){let{className:t,...n}=e;return(0,l.jsx)("div",{className:(0,s.c)(i.tableOfContents,"thin-scrollbar",t),children:(0,l.jsx)(a.c,{...n,linkClassName:o,linkActiveClassName:c})})}},78088:(e,t,n)=>{n.d(t,{c:()=>x});var s=n(96651),a=n(14880);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>o(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function r(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.y)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,s.useRef)(void 0),n=r();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),r=c(o,{anchorTopOffset:n.current}),d=e.find((e=>r&&r.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}var u=n(39788),m=n(2488);function h(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,m.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.c,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const v=s.memo(h);function x(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:r,maxHeadingLevel:u,...h}=e;const x=(0,a.y)(),p=r??x.tableOfContents.minHeadingLevel,b=u??x.tableOfContents.maxHeadingLevel,g=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>l({toc:i(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:p,maxHeadingLevel:b});return d((0,s.useMemo)((()=>{if(o&&c)return{linkClassName:o,linkActiveClassName:c,minHeadingLevel:p,maxHeadingLevel:b}}),[o,c,p,b])),(0,m.jsx)(v,{toc:g,className:n,linkClassName:o,...h})}},94328:(e,t,n)=>{n.d(t,{c:()=>d});n(96651);var s=n(66548),a=n(15272),i=n(39788);const l={tag:"tag_S9HW",tagRegular:"tagRegular_bvz2",tagWithCount:"tagWithCount_L9zX"};var o=n(2488);function c(e){let{permalink:t,label:n,count:a}=e;return(0,o.jsxs)(i.c,{href:t,className:(0,s.c)(l.tag,a?l.tagWithCount:l.tagRegular),children:[n,a&&(0,o.jsx)("span",{children:a})]})}const r={tags:"tags_PERs",tag:"tag_DpWO"};function d(e){let{tags:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(a.c,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,s.c)(r.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,o.jsx)("li",{className:r.tag,children:(0,o.jsx)(c,{label:t,permalink:n})},n)}))})]})}},78188:(e,t,n)=>{n.d(t,{c:()=>h});n(96651);var s=n(66548),a=n(15272),i=n(67584),l=n(2488);function o(){return(0,l.jsx)(a.c,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function c(){return(0,l.jsx)(a.c,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function r(){return(0,l.jsx)(i.c,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(11656),u=n(29384);function m(e){let{className:t}=e;return(0,l.jsx)(u.c,{type:"caution",title:(0,l.jsx)(o,{}),className:(0,s.c)(t,d.W.common.unlistedBanner),children:(0,l.jsx)(c,{})})}function h(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{}),(0,l.jsx)(m,{...e})]})}}}]);