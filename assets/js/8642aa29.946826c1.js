"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[98534],{87666:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>d,metadata:()=>x,toc:()=>h});var n=o(13274),r=o(99128),s=o(27196),i=o(63179),a=o(92418),c=o(79474),p=o(20420);const d={title:"\ud83d\udd0c Export to PDF"},l="\ud83d\udd0c Export to  PDF",x={id:"extras/export-to-pdf/index",title:"\ud83d\udd0c Export to PDF",description:"# \ud83d\udd0c Export to  PDF",source:"@site/versioned_docs/version-13.2.1/extras/export-to-pdf/index.mdx",sourceDirName:"extras/export-to-pdf",slug:"/extras/export-to-pdf/",permalink:"/docs/13.2.1/extras/export-to-pdf/",draft:!1,unlisted:!1,editUrl:"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-13.2.1/extras/export-to-pdf/index.mdx",tags:[],version:"13.2.1",frontMatter:{title:"\ud83d\udd0c Export to PDF"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd0a Audio Formats",permalink:"/docs/13.2.1/extras/audio-formats/"},next:{title:"\ud83d\udce6 Extract Config from Storage",permalink:"/docs/13.2.1/extras/extract-config-from-storage/"}},u={},h=[{value:"\ud83d\udce4 Export Documentation",id:"-export-documentation",level:2},{value:"\ud83d\udce4 Export Blog",id:"-export-blog",level:2}];function g(e){const t={admonition:"admonition",h1:"h1",h2:"h2",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.Fragment,{children:(0,n.jsxs)(t.h1,{id:"-export-to--pdf",children:["\ud83d\udd0c Export to ",(0,n.jsx)(a.sT,{})," PDF"]})}),"\n",(0,n.jsx)(t.h2,{id:"-export-documentation",children:"\ud83d\udce4 Export Documentation"}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"An active internet connection is necessary to retrieve data for exporting."})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"Certain hypertext links may not be converted."})}),"\n",(0,n.jsx)(t.p,{children:"Use the commands below to export the entire documentation to PDF."}),"\n",(0,n.jsxs)(t.p,{children:["To download the current ",p.x," version of the documentation, execute:"]}),"\n",(0,n.jsx)(i.x,{version:p.x}),"\n",(0,n.jsx)(t.p,{children:"For the upcoming unreleased version, execute:"}),"\n",(0,n.jsx)(i.x,{next:!0}),"\n",(0,n.jsx)(t.h2,{id:"-export-blog",children:"\ud83d\udce4 Export Blog"}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"An active internet connection is necessary to retrieve data for exporting."})}),"\n",(0,n.jsx)(t.p,{children:"Execute the command below to export the blog content to PDF:"}),"\n",(0,n.jsx)(s.K,{})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},38037:(e,t,o)=>{o.d(t,{$d:()=>r,C3:()=>n,UP:()=>a,gX:()=>s,z9:()=>i});const n="SSE",r="SoundScapeExplorer",s="sound-scape-explorer-VERSION",i="https://discord.gg/eRsQPDBeXg",a="https://github.com/sound-scape-explorer/sound-scape-explorer/discussions"},27196:(e,t,o)=>{o.d(t,{K:()=>i});var n=o(96547),r=o(79474),s=o(13274);const i=()=>{const e=(0,r.useMemo)((()=>{const e=new Date,t=`${e.getFullYear()}-${e.getMonth()}-${e.getDate()}`;return`npx docs-to-pdf \\\n--initialDocURLs="https://sound-scape-explorer.github.io/blog/index" \\\n--contentSelector="article" \\\n--paginationSelector="a.pagination-nav__link.pagination-nav__link--next" \\\n--excludeSelectors=".margin-vert--xl a,[class^='tocCollapsible'],.breadcrumbs,.theme-edit-this-page" \\\n--coverImage="https://sound-scape-explorer.github.io/img/logo.png" \\\n--cssStyle=":root{background: transparent}" \\\n--coverTitle="SoundScapeExplorer Blog ${t}" \\\n--outputPDFFilename="SoundScapeExplorer-blog-${t}.pdf"`}),[]);return(0,s.jsx)(n.A,{language:"bash",children:e})}},63179:(e,t,o)=>{o.d(t,{x:()=>c});var n=o(38037),r=o(6715),s=o(96547),i=o(79474),a=o(13274);const c=e=>{let{next:t,version:o,isCse:c=!1}=e;const p=(0,i.useMemo)((()=>{let e=`https://sound-scape-explorer.github.io/docs/${o}`,s="",i="",a=n.$d;c&&(e="https://sound-scape-explorer.github.io/docs/CSE",a="CoralSoundExplorer");const p=r[0];return o===p&&(e="https://sound-scape-explorer.github.io/docs"),t?(s=" Next",i="-next",e="https://sound-scape-explorer.github.io/docs/next"):(s=o?` ${o}`:"",i=o?`-${o}`:""),`npx docs-to-pdf \\\n--initialDocURLs="${e}" \\\n--contentSelector="article" \\\n--paginationSelector="a.pagination-nav__link.pagination-nav__link--next" \\\n--excludeSelectors=".margin-vert--xl a,[class^='tocCollapsible'],.breadcrumbs,.theme-edit-this-page" \\\n--coverImage="https://sound-scape-explorer.github.io/img/logo.png" \\\n--cssStyle=":root{background: transparent}" \\\n--coverTitle="${a} Docs${s}" \\\n--outputPDFFilename="${a}-docs${i}.pdf"`}),[c]);return(0,a.jsx)(s.A,{language:"bash",children:p})}},20420:(e,t,o)=>{o.d(t,{x:()=>n});const n="13.2.1"},6715:e=>{e.exports=["13.2.2"]}}]);