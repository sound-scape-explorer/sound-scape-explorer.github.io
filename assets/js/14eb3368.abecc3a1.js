"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[6969],{48479:(e,t,s)=>{s.d(t,{A:()=>v});s(79474);var n=s(28923),i=s(75416),a=s(83909),r=s(378),c=s(78003),o=s(60791),l=s(75616),d=s(13274);function m(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const u={breadcrumbHomeIcon:"breadcrumbHomeIcon_LDEc"};function h(){const e=(0,l.A)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(c.A,{"aria-label":(0,o.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(m,{className:u.breadcrumbHomeIcon})})})}const b={breadcrumbsContainer:"breadcrumbsContainer_nrpQ"};function x(e){let{children:t,href:s,isLast:n}=e;const i="breadcrumbs__link";return n?(0,d.jsx)("span",{className:i,itemProp:"name",children:t}):s?(0,d.jsx)(c.A,{className:i,href:s,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:i,children:t})}function p(e){let{children:t,active:s,index:i,addMicrodata:a}=e;return(0,d.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,n.A)("breadcrumbs__item",{"breadcrumbs__item--active":s}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(i+1)})]})}function v(){const e=(0,a.OF)(),t=(0,r.Dt)();return e?(0,d.jsx)("nav",{className:(0,n.A)(i.G.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,o.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,s)=>{const n=s===e.length-1,i="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(p,{active:n,index:s,addMicrodata:!!i,children:(0,d.jsx)(x,{href:i,isLast:n,children:t.label})},s)}))]})}):null}},85835:(e,t,s)=>{s.r(t),s.d(t,{default:()=>y});s(79474);var n=s(83849),i=s(83909),a=s(75616),r=s(28923),c=s(78003),o=s(4353),l=s(60791),d=s(69731);const m={cardContainer:"cardContainer_UQWW",cardTitle:"cardTitle_kvsI",cardDescription:"cardDescription_U1Xi"};var u=s(13274);function h(e){let{href:t,children:s}=e;return(0,u.jsx)(c.A,{href:t,className:(0,r.A)("card padding--lg",m.cardContainer),children:s})}function b(e){let{href:t,icon:s,title:n,description:i}=e;return(0,u.jsxs)(h,{href:t,children:[(0,u.jsxs)(d.A,{as:"h2",className:(0,r.A)("text--truncate",m.cardTitle),title:n,children:[s," ",n]}),i&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",m.cardDescription),title:i,children:i})]})}function x(e){let{item:t}=e;const s=(0,i.Nr)(t);return s?(0,u.jsx)(b,{href:s,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const s=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,i.cC)(t.docId??void 0);return(0,u.jsx)(b,{href:t.href,icon:s,title:t.label,description:t.description??n?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(p,{item:t});case"category":return(0,u.jsx)(x,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const s=(0,i.$S)();return(0,u.jsx)(j,{items:s.items,className:t})}function j(e){const{items:t,className:s}=e;if(!t)return(0,u.jsx)(g,{...e});const n=(0,i.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",s),children:n.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(v,{item:e})},t)))})}var f=s(72490),A=s(9255),N=s(16388),_=s(48479);const L={generatedIndexPage:"generatedIndexPage_ieKJ",list:"list_elWR",title:"title_RDOG"};function T(e){let{categoryGeneratedIndex:t}=e;return(0,u.jsx)(n.be,{title:t.title,description:t.description,keywords:t.keywords,image:(0,a.A)(t.image)})}function k(e){let{categoryGeneratedIndex:t}=e;const s=(0,i.$S)();return(0,u.jsxs)("div",{className:L.generatedIndexPage,children:[(0,u.jsx)(A.A,{}),(0,u.jsx)(_.A,{}),(0,u.jsx)(N.A,{}),(0,u.jsxs)("header",{children:[(0,u.jsx)(d.A,{as:"h1",className:L.title,children:t.title}),t.description&&(0,u.jsx)("p",{children:t.description})]}),(0,u.jsx)("article",{className:"margin-top--lg",children:(0,u.jsx)(j,{items:s.items,className:L.list})}),(0,u.jsx)("footer",{className:"margin-top--lg",children:(0,u.jsx)(f.A,{previous:t.navigation.previous,next:t.navigation.next})})]})}function y(e){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(T,{...e}),(0,u.jsx)(k,{...e})]})}},72490:(e,t,s)=>{s.d(t,{A:()=>r});s(79474);var n=s(60791),i=s(21723),a=s(13274);function r(e){const{previous:t,next:s}=e;return(0,a.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,n.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,a.jsx)(i.A,{...t,subLabel:(0,a.jsx)(n.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),s&&(0,a.jsx)(i.A,{...s,subLabel:(0,a.jsx)(n.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},16388:(e,t,s)=>{s.d(t,{A:()=>o});s(79474);var n=s(28923),i=s(60791),a=s(75416),r=s(46145),c=s(13274);function o(e){let{className:t}=e;const s=(0,r.r)();return s.badge?(0,c.jsx)("span",{className:(0,n.A)(t,a.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,c.jsx)(i.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:s.label},children:"Version: {versionLabel}"})}):null}},9255:(e,t,s)=>{s.d(t,{A:()=>p});s(79474);var n=s(28923),i=s(47451),a=s(78003),r=s(60791),c=s(35772),o=s(75416),l=s(96558),d=s(46145),m=s(13274);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,m.jsx)(r.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,m.jsx)("b",{children:s.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,m.jsx)(r.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,m.jsx)("b",{children:s.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=u[e.versionMetadata.banner];return(0,m.jsx)(t,{...e})}function b(e){let{versionLabel:t,to:s,onClick:n}=e;return(0,m.jsx)(r.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,m.jsx)("b",{children:(0,m.jsx)(a.A,{to:s,onClick:n,children:(0,m.jsx)(r.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function x(e){let{className:t,versionMetadata:s}=e;const{siteConfig:{title:a}}=(0,i.A)(),{pluginId:r}=(0,c.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,l.g1)(r),{latestDocSuggestion:u,latestVersionSuggestion:x}=(0,c.HW)(r),p=u??(v=x).docs.find((e=>e.id===v.mainDocId));var v;return(0,m.jsxs)("div",{className:(0,n.A)(t,o.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,m.jsx)("div",{children:(0,m.jsx)(h,{siteTitle:a,versionMetadata:s})}),(0,m.jsx)("div",{className:"margin-top--md",children:(0,m.jsx)(b,{versionLabel:x.label,to:p.path,onClick:()=>d(x.name)})})]})}function p(e){let{className:t}=e;const s=(0,d.r)();return s.banner?(0,m.jsx)(x,{className:t,versionMetadata:s}):null}},21723:(e,t,s)=>{s.d(t,{A:()=>r});s(79474);var n=s(28923),i=s(78003),a=s(13274);function r(e){const{permalink:t,title:s,subLabel:r,isNext:c}=e;return(0,a.jsxs)(i.A,{className:(0,n.A)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[r&&(0,a.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,a.jsx)("div",{className:"pagination-nav__label",children:s})]})}}}]);