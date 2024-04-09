"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[6322],{72070:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>x,default:()=>b,frontMatter:()=>p,metadata:()=>h,toc:()=>g});var o=t(13274),s=t(36906),i=t(85891),r=t(49238),a=t(51981),c=t(54026),l=t(79474),d=t(11029);const p={},x="\ud83d\udd0c Offline Access",h={id:"extras/offline-access/index",title:"\ud83d\udd0c Offline Access",description:"Progressive Web App",source:"@site/versioned_docs/version-13.1.7/extras/offline-access/index.mdx",sourceDirName:"extras/offline-access",slug:"/extras/offline-access/",permalink:"/docs/13.1.7/extras/offline-access/",draft:!1,unlisted:!1,editUrl:"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-13.1.7/extras/offline-access/index.mdx",tags:[],version:"13.1.7",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udce9 Get in Touch",permalink:"/docs/13.1.7/extras/get-in-touch/"},next:{title:"\ud83d\udd04 Repack storage",permalink:"/docs/13.1.7/extras/repack-storage/"}},u={},g=[{value:"<PwaIcon></PwaIcon> Progressive Web App",id:"-progressive-web-app",level:2},{value:"\ud83d\udce4 Export Documentation",id:"-export-documentation",level:2},{value:"\ud83d\udce4 Export Blog",id:"-export-blog",level:2}];function m(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"-offline-access",children:"\ud83d\udd0c Offline Access"}),"\n",(0,o.jsxs)(n.h2,{id:"-progressive-web-app",children:[(0,o.jsx)(c.ib,{})," Progressive Web App"]}),"\n",(0,o.jsx)(l.Fragment,{children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(c.ib,{})," Progressive Web Applications can be installed using ",(0,o.jsx)(c.Wr,{})," ","\nChrome browser."]})}),"\n",(0,o.jsx)(l.Fragment,{children:(0,o.jsxs)(n.p,{children:["Click on the ",(0,o.jsx)(c.dG,{})," icon in the address bar to install the\napplication as standalone with offline caching."]})}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(l.Fragment,{children:(0,o.jsxs)(n.p,{children:["You can install ",(0,o.jsx)(c.z9,{})," ",i.C3," Docs and \ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f ",(0,o.jsx)(n.a,{href:"../visualisation-online/",children:"Visualisation\nOnline"})," as ",(0,o.jsx)(c.ib,{})," PWAs."]})}),(0,o.jsx)(l.Fragment,{children:(0,o.jsxs)(n.p,{children:["Because both applications are hosted under the same domain, you will need to\ninstall ",(0,o.jsx)("b",{children:"first"})," the \ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f ",(0,o.jsx)(n.a,{href:"../visualisation-online/",children:"Visualisation Online"}),"\nmodule then ",(0,o.jsx)(c.z9,{})," ",i.C3," Docs."]})})]}),"\n",(0,o.jsx)(n.h2,{id:"-export-documentation",children:"\ud83d\udce4 Export Documentation"}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"An active internet connection is necessary to retrieve data for exporting."})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Certain hypertext links may not be converted."})}),"\n",(0,o.jsx)(n.p,{children:"Use the commands below to export the entire documentation to PDF."}),"\n",(0,o.jsxs)(n.p,{children:["To download the current ",d.x," version of the documentation, execute:"]}),"\n",(0,o.jsx)(a.x,{version:d.x}),"\n",(0,o.jsx)(n.p,{children:"For the upcoming unreleased version, execute:"}),"\n",(0,o.jsx)(a.x,{next:!0}),"\n",(0,o.jsx)(n.h2,{id:"-export-blog",children:"\ud83d\udce4 Export Blog"}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"An active internet connection is necessary to retrieve data for exporting."})}),"\n",(0,o.jsx)(n.p,{children:"Execute the command below to export the blog content to PDF:"}),"\n",(0,o.jsx)(r.K,{})]})}function b(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},85891:(e,n,t)=>{t.d(n,{$d:()=>s,C3:()=>o,UP:()=>a,gX:()=>i,z9:()=>r});const o="SSE",s="SoundScapeExplorer",i="sound-scape-explorer-VERSION",r="https://discord.gg/eRsQPDBeXg",a="https://github.com/sound-scape-explorer/sound-scape-explorer/discussions"},49238:(e,n,t)=>{t.d(n,{K:()=>r});var o=t(48081),s=t(79474),i=t(13274);const r=()=>{const e=(0,s.useMemo)((()=>{const e=new Date,n=`${e.getFullYear()}-${e.getMonth()}-${e.getDate()}`;return`npx docs-to-pdf \\\n--initialDocURLs="https://sound-scape-explorer.github.io/blog/index" \\\n--contentSelector="article" \\\n--paginationSelector="a.pagination-nav__link.pagination-nav__link--next" \\\n--excludeSelectors=".margin-vert--xl a,[class^='tocCollapsible'],.breadcrumbs,.theme-edit-this-page" \\\n--coverImage="https://sound-scape-explorer.github.io/img/logo.png" \\\n--cssStyle=":root{background: transparent}" \\\n--coverTitle="SoundScapeExplorer Blog ${n}" \\\n--outputPDFFilename="SoundScapeExplorer-blog-${n}.pdf"`}),[]);return(0,i.jsx)(o.A,{language:"bash",children:e})}},51981:(e,n,t)=>{t.d(n,{x:()=>a});var o=t(85891),s=t(48081),i=t(79474),r=t(13274);const a=e=>{let{next:n,version:t,isCse:a=!1}=e;const c=(0,i.useMemo)((()=>{let e=`https://sound-scape-explorer.github.io/docs/${t}`,s="",i="",r=o.$d;return a&&(e="https://sound-scape-explorer.github.io/docs/CSE",r="CoralSoundExplorer"),n?(s=" Next",i="-next",e="https://sound-scape-explorer.github.io/docs/next"):(s=t?` ${t}`:"",i=t?`-${t}`:""),`npx docs-to-pdf \\\n--initialDocURLs="${e}" \\\n--contentSelector="article" \\\n--paginationSelector="a.pagination-nav__link.pagination-nav__link--next" \\\n--excludeSelectors=".margin-vert--xl a,[class^='tocCollapsible'],.breadcrumbs,.theme-edit-this-page" \\\n--coverImage="https://sound-scape-explorer.github.io/img/logo.png" \\\n--cssStyle=":root{background: transparent}" \\\n--coverTitle="${r} Docs${s}" \\\n--outputPDFFilename="${r}-docs${i}.pdf"`}),[a]);return(0,r.jsx)(s.A,{language:"bash",children:c})}},11029:(e,n,t)=>{t.d(n,{x:()=>o});const o="13.1.7"}}]);