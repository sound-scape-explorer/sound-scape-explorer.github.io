"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[6426],{25111:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>x,default:()=>b,frontMatter:()=>d,metadata:()=>h,toc:()=>g});var o=t(11527),s=t(63883),i=t(29903),r=t(82401),a=t(59648),c=t(19571),l=t(50959),p=t(62670);const d={},x="\ud83d\udd0c Offline Access",h={id:"extras/offline-access",title:"\ud83d\udd0c Offline Access",description:"Progressive Web App",source:"@site/versioned_docs/version-12.3.0/extras/offline-access.mdx",sourceDirName:"extras",slug:"/extras/offline-access",permalink:"/docs/extras/offline-access",draft:!1,unlisted:!1,editUrl:"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-12.3.0/extras/offline-access.mdx",tags:[],version:"12.3.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udce9 Get in Touch",permalink:"/docs/extras/get-in-touch"},next:{title:"\ud83d\udd04 Repack storage",permalink:"/docs/extras/repack-storage"}},u={},g=[{value:"<PwaIcon></PwaIcon> Progressive Web App",id:"-progressive-web-app",level:2},{value:"\ud83d\udce4 Export Documentation",id:"-export-documentation",level:2},{value:"\ud83d\udce4 Export Blog",id:"-export-blog",level:2}];function m(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",p:"p",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"-offline-access",children:"\ud83d\udd0c Offline Access"}),"\n",(0,o.jsxs)(n.h2,{id:"-progressive-web-app",children:[(0,o.jsx)(c.Mt,{})," Progressive Web App"]}),"\n",(0,o.jsx)(l.Fragment,{children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(c.Mt,{})," Progressive Web Applications can be installed using ",(0,o.jsx)(c.eL,{})," ","\nChrome browser."]})}),"\n",(0,o.jsx)(l.Fragment,{children:(0,o.jsxs)(n.p,{children:["Click on the ",(0,o.jsx)(c.j0,{})," icon in the address bar to install the\napplication as standalone with offline caching."]})}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(l.Fragment,{children:(0,o.jsxs)(n.p,{children:["You can install ",(0,o.jsx)(c.yO,{})," ",i.iC," Docs and \ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f ",(0,o.jsx)(n.a,{href:"./visualisation-online",children:"Visualisation\nOnline"})," as ",(0,o.jsx)(c.Mt,{})," PWAs."]})}),(0,o.jsx)(l.Fragment,{children:(0,o.jsxs)(n.p,{children:["Because both applications are hosted under the same domain, you will need to\ninstall ",(0,o.jsx)("b",{children:"first"})," the \ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f ",(0,o.jsx)(n.a,{href:"./visualisation-online",children:"Visualisation Online"}),"\nmodule then ",(0,o.jsx)(c.yO,{})," ",i.iC," Docs."]})})]}),"\n",(0,o.jsx)(n.h2,{id:"-export-documentation",children:"\ud83d\udce4 Export Documentation"}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"An active internet connection is necessary to retrieve data for exporting."})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Certain hypertext links may not be converted."})}),"\n",(0,o.jsx)(n.p,{children:"Use the commands below to export the entire documentation to PDF."}),"\n",(0,o.jsxs)(n.p,{children:["To download the current ",p.q," version of the documentation, execute:"]}),"\n",(0,o.jsx)(a.E,{version:p.q}),"\n",(0,o.jsx)(n.p,{children:"For the upcoming unreleased version, execute:"}),"\n",(0,o.jsx)(a.E,{next:!0}),"\n",(0,o.jsx)(n.h2,{id:"-export-blog",children:"\ud83d\udce4 Export Blog"}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"An active internet connection is necessary to retrieve data for exporting."})}),"\n",(0,o.jsx)(n.p,{children:"Execute the command below to export the blog content to PDF:"}),"\n",(0,o.jsx)(r.c,{})]})}function b(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},29903:(e,n,t)=>{t.d(n,{$p:()=>i,PB:()=>s,ZT:()=>a,i6:()=>r,iC:()=>o});const o="SSE",s="SoundScapeExplorer",i="sound-scape-explorer-VERSION",r="https://discord.gg/eRsQPDBeXg",a="https://github.com/sound-scape-explorer/sound-scape-explorer/discussions"},82401:(e,n,t)=>{t.d(n,{c:()=>r});var o=t(16100),s=t(50959),i=t(11527);const r=()=>{const e=(0,s.useMemo)((()=>{const e=new Date,n=`${e.getFullYear()}-${e.getMonth()}-${e.getDate()}`;return`npx docs-to-pdf \\\n--initialDocURLs="https://sound-scape-explorer.github.io/blog/index" \\\n--contentSelector="article" \\\n--paginationSelector="a.pagination-nav__link.pagination-nav__link--next" \\\n--excludeSelectors=".margin-vert--xl a,[class^='tocCollapsible'],.breadcrumbs,.theme-edit-this-page" \\\n--coverImage="https://sound-scape-explorer.github.io/img/logo.png" \\\n--cssStyle=":root{background: transparent}" \\\n--coverTitle="SoundScapeExplorer Blog ${n}" \\\n--outputPDFFilename="SoundScapeExplorer-blog-${n}.pdf"`}),[]);return(0,i.jsx)(o.Z,{language:"bash",children:e})}},59648:(e,n,t)=>{t.d(n,{E:()=>r});var o=t(16100),s=t(50959),i=t(11527);const r=e=>{let{next:n,version:t}=e;const r=(0,s.useMemo)((()=>{let e="https://sound-scape-explorer.github.io/docs",o="",s="";return n?(o=" Next",s="-next",e+="/next"):(o=t?` ${t}`:"",s=t?`-${t}`:""),`npx docs-to-pdf \\\n--initialDocURLs="${e}" \\\n--contentSelector="article" \\\n--paginationSelector="a.pagination-nav__link.pagination-nav__link--next" \\\n--excludeSelectors=".margin-vert--xl a,[class^='tocCollapsible'],.breadcrumbs,.theme-edit-this-page" \\\n--coverImage="https://sound-scape-explorer.github.io/img/logo.png" \\\n--cssStyle=":root{background: transparent}" \\\n--coverTitle="SoundScapeExplorer Docs${o}" \\\n--outputPDFFilename="SoundScapeExplorer-docs${s}.pdf"`}),[]);return(0,i.jsx)(o.Z,{language:"bash",children:r})}},62670:(e,n,t)=>{t.d(n,{N:()=>s,q:()=>o});const o="12.3.0",s="~125 MB"}}]);