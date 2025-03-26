"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[76884],{40900:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>v,frontMatter:()=>x,metadata:()=>n,toc:()=>g});const n=JSON.parse('{"id":"extras/export-to-pdf/index","title":"\ud83d\udd0c Export to PDF","description":"# \ud83d\udd0c Export to  PDF","source":"@site/versioned_docs/version-13.4.0/extras/export-to-pdf/index.mdx","sourceDirName":"extras/export-to-pdf","slug":"/extras/export-to-pdf/","permalink":"/docs/13.4.0/extras/export-to-pdf/","draft":false,"unlisted":false,"editUrl":"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-13.4.0/extras/export-to-pdf/index.mdx","tags":[],"version":"13.4.0","frontMatter":{"title":"\ud83d\udd0c Export to PDF"},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udd0a Audio Formats","permalink":"/docs/13.4.0/extras/audio-formats/"},"next":{"title":"\ud83d\udce6 Extract Config from Storage","permalink":"/docs/13.4.0/extras/extract-config-from-storage/"}}');var r=o(86070),s=o(15658),i=o(99198),a=o(83109),c=o(78419),d=o(64963),p=o(30758),l=o(87843);const x={title:"\ud83d\udd0c Export to PDF"},u="\ud83d\udd0c Export to  PDF",h={},g=[{value:"\ud83d\udce4 Export Documentation",id:"-export-documentation",level:2},{value:"\ud83d\udce4 Export Blog",id:"-export-blog",level:2}];function m(e){const t={admonition:"admonition",h1:"h1",h2:"h2",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.Fragment,{children:(0,r.jsx)(t.header,{children:(0,r.jsxs)(t.h1,{id:"-export-to--pdf",children:["\ud83d\udd0c Export to ",(0,r.jsx)(c.sT,{})," PDF"]})})}),"\n",(0,r.jsx)(d.h,{pre:["\u2728 Extras"],title:"\ud83d\udd0c Export to PDF",version:l.x}),"\n",(0,r.jsx)(t.h2,{id:"-export-documentation",children:"\ud83d\udce4 Export Documentation"}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"An active internet connection is necessary to retrieve data for exporting."})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"Certain hypertext links may not be converted."})}),"\n",(0,r.jsx)(t.p,{children:"Use the commands below to export the entire documentation to PDF."}),"\n",(0,r.jsxs)(t.p,{children:["To download the current ",l.x," version of the documentation, execute:"]}),"\n",(0,r.jsx)(a.x,{version:l.x}),"\n",(0,r.jsx)(t.p,{children:"For the upcoming unreleased version, execute:"}),"\n",(0,r.jsx)(a.x,{next:!0}),"\n",(0,r.jsx)(t.h2,{id:"-export-blog",children:"\ud83d\udce4 Export Blog"}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"An active internet connection is necessary to retrieve data for exporting."})}),"\n",(0,r.jsx)(t.p,{children:"Execute the command below to export the blog content to PDF:"}),"\n",(0,r.jsx)(i.K,{})]})}function v(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},99198:(e,t,o)=>{o.d(t,{K:()=>i});var n=o(82106),r=o(30758),s=o(86070);const i=()=>{const e=(0,r.useMemo)((()=>{const e=new Date,t=`${e.getFullYear()}-${e.getMonth()}-${e.getDate()}`;return`npx docs-to-pdf \\\n--initialDocURLs="https://sound-scape-explorer.github.io/blog/index" \\\n--contentSelector="article" \\\n--paginationSelector="a.pagination-nav__link.pagination-nav__link--next" \\\n--excludeSelectors=".margin-vert--xl a,[class^='tocCollapsible'],.breadcrumbs,.theme-edit-this-page" \\\n--coverImage="https://sound-scape-explorer.github.io/img/logo.png" \\\n--cssStyle=":root{background: transparent}" \\\n--coverTitle="SoundScapeExplorer Blog ${t}" \\\n--outputPDFFilename="SoundScapeExplorer-blog-${t}.pdf"`}),[]);return(0,s.jsx)(n.A,{language:"bash",children:e})}},83109:(e,t,o)=>{o.d(t,{x:()=>c});var n=o(60667),r=o(6715),s=o(82106),i=o(30758),a=o(86070);const c=e=>{let{next:t,version:o,isCse:c=!1}=e;const d=(0,i.useMemo)((()=>{let e=`https://sound-scape-explorer.github.io/docs/${o}`,s="",i="",a=n.$d;c&&(e="https://sound-scape-explorer.github.io/docs/CSE",a="CoralSoundExplorer");const d=r[0];return o===d&&(e="https://sound-scape-explorer.github.io/docs"),t?(s=" Next",i="-next",e="https://sound-scape-explorer.github.io/docs/next"):(s=o?` ${o}`:"",i=o?`-${o}`:""),`npx docs-to-pdf \\\n--initialDocURLs="${e}" \\\n--contentSelector="article" \\\n--paginationSelector="a.pagination-nav__link.pagination-nav__link--next" \\\n--excludeSelectors=".margin-vert--xl a,[class^='tocCollapsible'],.breadcrumbs,.theme-edit-this-page" \\\n--coverImage="https://sound-scape-explorer.github.io/img/logo.png" \\\n--cssStyle=":root{background: transparent}" \\\n--coverTitle="${a} Docs${s}" \\\n--outputPDFFilename="${a}-docs${i}.pdf"`}),[c]);return(0,a.jsx)(s.A,{language:"bash",children:d})}},64963:(e,t,o)=>{o.d(t,{h:()=>c});var n=o(87812),r=o(60667),s=o(30758),i=o(86070);const a=e=>`${e} | `,c=e=>{let{title:t,pre:o,version:c}=e;const d=(0,s.useMemo)((()=>{let e="";if(e+=t,o)for(const t of o)e=a(e),e+=t;return c?(e=a(e),e+=`${r.C3} ${c}`):(e=a(e),e+=r.$d),e}),[]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n.A,{children:(0,i.jsx)("title",{children:d})})})}},87843:(e,t,o)=>{o.d(t,{F:()=>r,x:()=>n});const n="13.4.0",r={windows:"246 MB",debian:"151 MB",macos:"183 MB"}},6715:e=>{e.exports=["13.10.3"]}}]);