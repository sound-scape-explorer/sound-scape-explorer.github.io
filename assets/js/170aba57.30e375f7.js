"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[82425],{98665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>g,frontMatter:()=>h,metadata:()=>p,toc:()=>j});var i=n(86070),s=n(25710),o=n(42692),r=n(86204),c=n(79466),l=n(22672),d=n(70107),a=n(30758),x=n(9070);const h={},u="\ud83d\udcc1 File Detection",p={id:"extras/file-detection/index",title:"\ud83d\udcc1 File Detection",description:"<Title",source:"@site/versioned_docs/version-13.3.0/extras/file-detection/index.mdx",sourceDirName:"extras/file-detection",slug:"/extras/file-detection/",permalink:"/docs/extras/file-detection/",draft:!1,unlisted:!1,editUrl:"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-13.3.0/extras/file-detection/index.mdx",tags:[],version:"13.3.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udce6 Extract Config from Storage",permalink:"/docs/extras/extract-config-from-storage/"},next:{title:"\ud83d\udce9 Get in Touch",permalink:"/docs/extras/get-in-touch/"}},f={},j=[{value:"\ud83d\udd0d Context",id:"-context",level:2},{value:"\ud83d\ude80 Execution",id:"-execution",level:2},{value:"\ud83d\udcdd Example",id:"-example",level:3}];function m(e){const t={admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"-file-detection",children:"\ud83d\udcc1 File Detection"}),"\n",(0,i.jsx)(d.h,{pre:["\u2728 Extras"],title:"\ud83d\udcc1 File Detection",version:x.x}),"\n",(0,i.jsx)(a.Fragment,{children:(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["Ensure you open the \ud83e\uddee Processing module with the\nprovided ",(0,i.jsxs)("code",{children:["sse-processing-",x.x]})," script to enable\nthe ",(0,i.jsx)(l.un,{})," Python virtual environment."]})})}),"\n",(0,i.jsx)(t.h2,{id:"-context",children:"\ud83d\udd0d Context"}),"\n",(0,i.jsx)(a.Fragment,{children:(0,i.jsxs)(t.p,{children:["This command allows the detection of audio files to add to the ",(0,i.jsx)(l.Vw,{}),"\nconfiguration file."]})}),"\n",(0,i.jsx)(t.h2,{id:"-execution",children:"\ud83d\ude80 Execution"}),"\n",(0,i.jsxs)("ol",{children:[(0,i.jsxs)("li",{children:["Create a ",(0,i.jsx)(l.Vw,{})," configuration file and fill the ",(0,i.jsx)(o.h,{background:"#ffffa6",children:"Settings"})," tab (especially ",(0,i.jsx)("code",{children:"audio_path"}),")"]}),(0,i.jsxs)("li",{children:["Type ",(0,i.jsx)(c.a,{}),", then add ",(0,i.jsx)("code",{children:"<space>"})]}),(0,i.jsxs)("li",{children:["Drag and drop your ",(0,i.jsx)(l.Vw,{})," configuration file into the terminal (or type path)"]}),(0,i.jsxs)("li",{children:["Press ",(0,i.jsx)("code",{children:"Enter"})]})]}),"\n",(0,i.jsx)(t.h3,{id:"-example",children:"\ud83d\udcdd Example"}),"\n",(0,i.jsx)(r.I,{})]})}function g(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},41251:(e,t,n)=>{n.d(t,{$d:()=>s,C3:()=>i,UP:()=>c,gX:()=>o,z9:()=>r});const i="SSE",s="SoundScapeExplorer",o="sound-scape-explorer-VERSION",r="https://discord.gg/eRsQPDBeXg",c="https://github.com/sound-scape-explorer/sound-scape-explorer/discussions"},71703:(e,t,n)=>{n.d(t,{l:()=>s});var i=n(86070);const s=e=>{let{children:t}=e;return(0,i.jsx)("code",{children:t})}},42692:(e,t,n)=>{n.d(t,{h:()=>o});const i="tab_IwhG";var s=n(86070);const o=e=>{let{children:t,background:n}=e;return(0,s.jsx)("code",{className:i,style:{background:n},children:t})}},86204:(e,t,n)=>{n.d(t,{I:()=>l});var i=n(41251),s=n(72410),o=n(30758),r=n(86070);const c=e=>`# Windows\n${e}_fill C:\\to\\config.xlsx\n\n# Ubuntu / macOS\n${e}_fill path/to/config.xlsx`,l=e=>{let{isCse:t=!1}=e;const n=(0,o.useMemo)((()=>t?"cse":i.C3.toLowerCase()),[t]);return(0,r.jsx)(s.A,{language:"bash",children:c(n)})}},79466:(e,t,n)=>{n.d(t,{a:()=>c});var i=n(41251),s=n(30758),o=n(71703),r=n(86070);const c=e=>{let{isCse:t=!1}=e;const n=(0,s.useMemo)((()=>t?"cse":i.C3.toLowerCase()),[t]);return(0,r.jsxs)(o.l,{children:[n,"_fill"]})}},70107:(e,t,n)=>{n.d(t,{h:()=>l});var i=n(28830),s=n(41251),o=n(30758),r=n(86070);const c=e=>`${e} | `,l=e=>{let{title:t,pre:n,version:l}=e;const d=(0,o.useMemo)((()=>{let e="";if(e+=t,n)for(const t of n)e=c(e),e+=t;return l?(e=c(e),e+=`${s.C3} ${l}`):(e=c(e),e+=s.$d),e}),[]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i.A,{children:(0,r.jsx)("title",{children:d})})})}},9070:(e,t,n)=>{n.d(t,{F:()=>s,x:()=>i});const i="13.2.5",s={windows:"246 MB",debian:"151 MB",macos:"183 MB"}}}]);