"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[37985],{18774:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>m,frontMatter:()=>l,metadata:()=>g,toc:()=>u});var n=r(86070),o=r(25710),s=r(70136),i=r(67438),c=r(22672),a=r(70107),d=r(30758),x=r(94516);const l={title:"\ud83d\udce6 Extract Config from Storage"},h="\ud83d\udce6 Extract  Config from  Storage",g={id:"extras/extract-config-from-storage/index",title:"\ud83d\udce6 Extract Config from Storage",description:"<Title",source:"@site/versioned_docs/version-13.5.0/extras/extract-config-from-storage/index.mdx",sourceDirName:"extras/extract-config-from-storage",slug:"/extras/extract-config-from-storage/",permalink:"/docs/extras/extract-config-from-storage/",draft:!1,unlisted:!1,editUrl:"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-13.5.0/extras/extract-config-from-storage/index.mdx",tags:[],version:"13.5.0",frontMatter:{title:"\ud83d\udce6 Extract Config from Storage"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd0c Export to PDF",permalink:"/docs/extras/export-to-pdf/"},next:{title:"\ud83d\udcc1 File Detection",permalink:"/docs/extras/file-detection/"}},p={},u=[{value:"\ud83d\udd0d Context",id:"-context",level:2},{value:"\ud83d\ude80 Execution",id:"-execution",level:2},{value:"\ud83d\udcdd Example",id:"-example",level:3}];function f(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.h1,{id:"-extract--config-from--storage",children:["\ud83d\udce6 Extract ",(0,n.jsx)(c.Vw,{})," Config from ",(0,n.jsx)(c.NB,{})," Storage"]}),"\n",(0,n.jsx)(a.h,{pre:["\u2728 Extras"],title:"\ud83d\udce6 Extract Config from Storage",version:x.x}),"\n",(0,n.jsx)(d.Fragment,{children:(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["Ensure you open the \ud83e\uddee Processing module with the\nprovided ",(0,n.jsxs)("code",{children:["sse-processing-",x.x]})," script to enable\nthe ",(0,n.jsx)(c.un,{})," Python virtual environment."]})})}),"\n",(0,n.jsx)(t.h2,{id:"-context",children:"\ud83d\udd0d Context"}),"\n",(0,n.jsx)(d.Fragment,{children:(0,n.jsxs)(t.p,{children:["This command allows the extraction of the ",(0,n.jsx)(c.Vw,{})," configuration file\nfrom an existing ",(0,n.jsx)(c.NB,{})," storage file."]})}),"\n",(0,n.jsx)(d.Fragment,{children:(0,n.jsxs)(t.p,{children:["The resulting ",(0,n.jsx)(t.code,{children:"storage.config-{VERSION}.xlsx"})," file represents the"," ","\n",(0,n.jsx)(c.Vw,{})," configuration used in creating the ",(0,n.jsx)(c.NB,{})," storage file."]})}),"\n",(0,n.jsx)(t.h2,{id:"-execution",children:"\ud83d\ude80 Execution"}),"\n",(0,n.jsxs)("ol",{children:[(0,n.jsxs)("li",{children:["Type ",(0,n.jsx)(i.M,{}),", then add ",(0,n.jsx)("code",{children:"<space>"})]}),(0,n.jsxs)("li",{children:["Drag and drop your ",(0,n.jsx)(c.NB,{})," storage file into the terminal (or type path)"]}),(0,n.jsxs)("li",{children:["Press ",(0,n.jsx)("code",{children:"Enter"})]})]}),"\n",(0,n.jsx)(t.h3,{id:"-example",children:"\ud83d\udcdd Example"}),"\n",(0,n.jsx)(s.Q,{})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},41251:(e,t,r)=>{r.d(t,{$d:()=>o,C3:()=>n,UP:()=>c,gX:()=>s,z9:()=>i});const n="SSE",o="SoundScapeExplorer",s="sound-scape-explorer-VERSION",i="https://discord.gg/eRsQPDBeXg",c="https://github.com/sound-scape-explorer/sound-scape-explorer/discussions"},71703:(e,t,r)=>{r.d(t,{l:()=>o});var n=r(86070);const o=e=>{let{children:t}=e;return(0,n.jsx)("code",{children:t})}},70136:(e,t,r)=>{r.d(t,{Q:()=>a});var n=r(41251),o=r(67982),s=r(30758),i=r(86070);const c=e=>`# Windows\n${e}_extract C:\\to\\storage.h5\n\n# Ubuntu / macOS\n${e}_extract path/to/storage.h5`,a=e=>{let{isCse:t=!1}=e;const r=(0,s.useMemo)((()=>t?"cse":n.C3.toLowerCase()),[t]);return(0,i.jsx)(o.A,{language:"bash",children:c(r)})}},67438:(e,t,r)=>{r.d(t,{M:()=>c});var n=r(41251),o=r(30758),s=r(71703),i=r(86070);const c=e=>{let{isCse:t=!1}=e;const r=(0,o.useMemo)((()=>t?"cse":n.C3.toLowerCase()),[t]);return(0,i.jsxs)(s.l,{children:[r,"_extract"]})}},70107:(e,t,r)=>{r.d(t,{h:()=>a});var n=r(29339),o=r(41251),s=r(30758),i=r(86070);const c=e=>`${e} | `,a=e=>{let{title:t,pre:r,version:a}=e;const d=(0,s.useMemo)((()=>{let e="";if(e+=t,r)for(const t of r)e=c(e),e+=t;return a?(e=c(e),e+=`${o.C3} ${a}`):(e=c(e),e+=o.$d),e}),[]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n.A,{children:(0,i.jsx)("title",{children:d})})})}},94516:(e,t,r)=>{r.d(t,{F:()=>o,x:()=>n});const n="13.5.0",o={windows:"246 MB",debian:"151 MB",macos:"183 MB"}}}]);