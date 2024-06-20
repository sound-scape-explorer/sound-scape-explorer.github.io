"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[2397],{37013:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>h,contentTitle:()=>x,default:()=>b,frontMatter:()=>l,metadata:()=>u,toc:()=>g});var n=o(86070),r=o(25710),s=o(85270),i=o(72237),a=o(22672),c=o(70107),p=o(30758),d=o(31873);const l={title:"\ud83d\udd0c Export to PDF"},x="\ud83d\udd0c Export to  PDF",u={id:"extras/export-to-pdf/index",title:"\ud83d\udd0c Export to PDF",description:"# \ud83d\udd0c Export to  PDF",source:"@site/versioned_docs/version-13.3.1/extras/export-to-pdf/index.mdx",sourceDirName:"extras/export-to-pdf",slug:"/extras/export-to-pdf/",permalink:"/docs/13.3.1/extras/export-to-pdf/",draft:!1,unlisted:!1,editUrl:"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-13.3.1/extras/export-to-pdf/index.mdx",tags:[],version:"13.3.1",frontMatter:{title:"\ud83d\udd0c Export to PDF"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd0a Audio Formats",permalink:"/docs/13.3.1/extras/audio-formats/"},next:{title:"\ud83d\udce6 Extract Config from Storage",permalink:"/docs/13.3.1/extras/extract-config-from-storage/"}},h={},g=[{value:"\ud83d\udce4 Export Documentation",id:"-export-documentation",level:2},{value:"\ud83d\udce4 Export Blog",id:"-export-blog",level:2}];function m(e){const t={admonition:"admonition",h1:"h1",h2:"h2",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p.Fragment,{children:(0,n.jsxs)(t.h1,{id:"-export-to--pdf",children:["\ud83d\udd0c Export to ",(0,n.jsx)(a.sT,{})," PDF"]})}),"\n",(0,n.jsx)(c.h,{pre:["\u2728 Extras"],title:"\ud83d\udd0c Export to PDF",version:d.x}),"\n",(0,n.jsx)(t.h2,{id:"-export-documentation",children:"\ud83d\udce4 Export Documentation"}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"An active internet connection is necessary to retrieve data for exporting."})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"Certain hypertext links may not be converted."})}),"\n",(0,n.jsx)(t.p,{children:"Use the commands below to export the entire documentation to PDF."}),"\n",(0,n.jsxs)(t.p,{children:["To download the current ",d.x," version of the documentation, execute:"]}),"\n",(0,n.jsx)(i.x,{version:d.x}),"\n",(0,n.jsx)(t.p,{children:"For the upcoming unreleased version, execute:"}),"\n",(0,n.jsx)(i.x,{next:!0}),"\n",(0,n.jsx)(t.h2,{id:"-export-blog",children:"\ud83d\udce4 Export Blog"}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"An active internet connection is necessary to retrieve data for exporting."})}),"\n",(0,n.jsx)(t.p,{children:"Execute the command below to export the blog content to PDF:"}),"\n",(0,n.jsx)(s.K,{})]})}function b(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},41251:(e,t,o)=>{o.d(t,{$d:()=>r,C3:()=>n,UP:()=>a,gX:()=>s,z9:()=>i});const n="SSE",r="SoundScapeExplorer",s="sound-scape-explorer-VERSION",i="https://discord.gg/eRsQPDBeXg",a="https://github.com/sound-scape-explorer/sound-scape-explorer/discussions"},85270:(e,t,o)=>{o.d(t,{K:()=>i});var n=o(67982),r=o(30758),s=o(86070);const i=()=>{const e=(0,r.useMemo)((()=>{const e=new Date,t=`${e.getFullYear()}-${e.getMonth()}-${e.getDate()}`;return`npx docs-to-pdf \\\n--initialDocURLs="https://sound-scape-explorer.github.io/blog/index" \\\n--contentSelector="article" \\\n--paginationSelector="a.pagination-nav__link.pagination-nav__link--next" \\\n--excludeSelectors=".margin-vert--xl a,[class^='tocCollapsible'],.breadcrumbs,.theme-edit-this-page" \\\n--coverImage="https://sound-scape-explorer.github.io/img/logo.png" \\\n--cssStyle=":root{background: transparent}" \\\n--coverTitle="SoundScapeExplorer Blog ${t}" \\\n--outputPDFFilename="SoundScapeExplorer-blog-${t}.pdf"`}),[]);return(0,s.jsx)(n.A,{language:"bash",children:e})}},72237:(e,t,o)=>{o.d(t,{x:()=>c});var n=o(41251),r=o(6715),s=o(67982),i=o(30758),a=o(86070);const c=e=>{let{next:t,version:o,isCse:c=!1}=e;const p=(0,i.useMemo)((()=>{let e=`https://sound-scape-explorer.github.io/docs/${o}`,s="",i="",a=n.$d;c&&(e="https://sound-scape-explorer.github.io/docs/CSE",a="CoralSoundExplorer");const p=r[0];return o===p&&(e="https://sound-scape-explorer.github.io/docs"),t?(s=" Next",i="-next",e="https://sound-scape-explorer.github.io/docs/next"):(s=o?` ${o}`:"",i=o?`-${o}`:""),`npx docs-to-pdf \\\n--initialDocURLs="${e}" \\\n--contentSelector="article" \\\n--paginationSelector="a.pagination-nav__link.pagination-nav__link--next" \\\n--excludeSelectors=".margin-vert--xl a,[class^='tocCollapsible'],.breadcrumbs,.theme-edit-this-page" \\\n--coverImage="https://sound-scape-explorer.github.io/img/logo.png" \\\n--cssStyle=":root{background: transparent}" \\\n--coverTitle="${a} Docs${s}" \\\n--outputPDFFilename="${a}-docs${i}.pdf"`}),[c]);return(0,a.jsx)(s.A,{language:"bash",children:p})}},70107:(e,t,o)=>{o.d(t,{h:()=>c});var n=o(29339),r=o(41251),s=o(30758),i=o(86070);const a=e=>`${e} | `,c=e=>{let{title:t,pre:o,version:c}=e;const p=(0,s.useMemo)((()=>{let e="";if(e+=t,o)for(const t of o)e=a(e),e+=t;return c?(e=a(e),e+=`${r.C3} ${c}`):(e=a(e),e+=r.$d),e}),[]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n.A,{children:(0,i.jsx)("title",{children:p})})})}},31873:(e,t,o)=>{o.d(t,{F:()=>r,x:()=>n});const n="13.3.1",r={windows:"246 MB",debian:"151 MB",macos:"183 MB"}},6715:e=>{e.exports=["13.4.0"]}}]);