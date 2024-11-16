"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[67940],{81814:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>h,default:()=>b,frontMatter:()=>x,metadata:()=>o,toc:()=>g});const o=JSON.parse('{"id":"extras/offline-access","title":"\ud83d\udd0c Offline Access","description":"Progressive Web App","source":"@site/versioned_docs/version-12.2.0/extras/offline-access.mdx","sourceDirName":"extras","slug":"/extras/offline-access","permalink":"/docs/12.2.0/extras/offline-access","draft":false,"unlisted":false,"editUrl":"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-12.2.0/extras/offline-access.mdx","tags":[],"version":"12.2.0","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udce9 Get in Touch","permalink":"/docs/12.2.0/extras/get-in-touch"},"next":{"title":"\ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f Visualisation Online","permalink":"/docs/12.2.0/extras/visualisation-online"}}');var s=t(86070),i=t(15658),r=t(35592),a=t(96051),c=t(86912),l=t(65988),d=t(30758),p=t(51609);const x={},h="\ud83d\udd0c Offline Access",u={},g=[{value:"<PwaIcon></PwaIcon> Progressive Web App",id:"-progressive-web-app",level:2},{value:"\ud83d\udce4 Export Documentation",id:"-export-documentation",level:2},{value:"\ud83d\udce4 Export Blog",id:"-export-blog",level:2}];function m(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"-offline-access",children:"\ud83d\udd0c Offline Access"})}),"\n",(0,s.jsxs)(n.h2,{id:"-progressive-web-app",children:[(0,s.jsx)(l.ib,{})," Progressive Web App"]}),"\n",(0,s.jsx)(d.Fragment,{children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(l.ib,{})," Progressive Web Applications can be installed using ",(0,s.jsx)(l.Wr,{})," ","\nChrome browser."]})}),"\n",(0,s.jsx)(d.Fragment,{children:(0,s.jsxs)(n.p,{children:["Click on the ",(0,s.jsx)(l.dG,{})," icon in the address bar to install the\napplication as standalone with offline caching."]})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(d.Fragment,{children:(0,s.jsxs)(n.p,{children:["You can install ",(0,s.jsx)(l.z9,{})," ",r.C3," Docs and \ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f ",(0,s.jsx)(n.a,{href:"./visualisation-online",children:"Visualisation\nOnline"})," as ",(0,s.jsx)(l.ib,{})," PWAs."]})}),(0,s.jsx)(d.Fragment,{children:(0,s.jsxs)(n.p,{children:["Because both applications are hosted under the same domain, you will need to\ninstall ",(0,s.jsx)("b",{children:"first"})," the \ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f ",(0,s.jsx)(n.a,{href:"./visualisation-online",children:"Visualisation Online"}),"\nmodule then ",(0,s.jsx)(l.z9,{})," ",r.C3," Docs."]})})]}),"\n",(0,s.jsx)(n.h2,{id:"-export-documentation",children:"\ud83d\udce4 Export Documentation"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"An active internet connection is necessary to retrieve data for exporting."})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Certain hypertext links may not be converted."})}),"\n",(0,s.jsx)(n.p,{children:"Use the commands below to export the entire documentation to PDF."}),"\n",(0,s.jsxs)(n.p,{children:["To download the current ",p.x," version of the documentation, execute:"]}),"\n",(0,s.jsx)(c.x,{version:p.x}),"\n",(0,s.jsx)(n.p,{children:"For the upcoming unreleased version, execute:"}),"\n",(0,s.jsx)(c.x,{next:!0}),"\n",(0,s.jsx)(n.h2,{id:"-export-blog",children:"\ud83d\udce4 Export Blog"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"An active internet connection is necessary to retrieve data for exporting."})}),"\n",(0,s.jsx)(n.p,{children:"Execute the command below to export the blog content to PDF:"}),"\n",(0,s.jsx)(a.K,{})]})}function b(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},96051:(e,n,t)=>{t.d(n,{K:()=>r});var o=t(41113),s=t(30758),i=t(86070);const r=()=>{const e=(0,s.useMemo)((()=>{const e=new Date,n=`${e.getFullYear()}-${e.getMonth()}-${e.getDate()}`;return`npx docs-to-pdf \\\n--initialDocURLs="https://sound-scape-explorer.github.io/blog/index" \\\n--contentSelector="article" \\\n--paginationSelector="a.pagination-nav__link.pagination-nav__link--next" \\\n--excludeSelectors=".margin-vert--xl a,[class^='tocCollapsible'],.breadcrumbs,.theme-edit-this-page" \\\n--coverImage="https://sound-scape-explorer.github.io/img/logo.png" \\\n--cssStyle=":root{background: transparent}" \\\n--coverTitle="SoundScapeExplorer Blog ${n}" \\\n--outputPDFFilename="SoundScapeExplorer-blog-${n}.pdf"`}),[]);return(0,i.jsx)(o.A,{language:"bash",children:e})}},86912:(e,n,t)=>{t.d(n,{x:()=>c});var o=t(35592),s=t(6715),i=t(41113),r=t(30758),a=t(86070);const c=e=>{let{next:n,version:t,isCse:c=!1}=e;const l=(0,r.useMemo)((()=>{let e=`https://sound-scape-explorer.github.io/docs/${t}`,i="",r="",a=o.$d;c&&(e="https://sound-scape-explorer.github.io/docs/CSE",a="CoralSoundExplorer");const l=s[0];return t===l&&(e="https://sound-scape-explorer.github.io/docs"),n?(i=" Next",r="-next",e="https://sound-scape-explorer.github.io/docs/next"):(i=t?` ${t}`:"",r=t?`-${t}`:""),`npx docs-to-pdf \\\n--initialDocURLs="${e}" \\\n--contentSelector="article" \\\n--paginationSelector="a.pagination-nav__link.pagination-nav__link--next" \\\n--excludeSelectors=".margin-vert--xl a,[class^='tocCollapsible'],.breadcrumbs,.theme-edit-this-page" \\\n--coverImage="https://sound-scape-explorer.github.io/img/logo.png" \\\n--cssStyle=":root{background: transparent}" \\\n--coverTitle="${a} Docs${i}" \\\n--outputPDFFilename="${a}-docs${r}.pdf"`}),[c]);return(0,a.jsx)(i.A,{language:"bash",children:l})}},51609:(e,n,t)=>{t.d(n,{S:()=>s,x:()=>o});const o="12.2.0",s="~125 MB"},6715:e=>{e.exports=["13.9.0"]}}]);