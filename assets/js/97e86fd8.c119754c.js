"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[1547],{12954:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>p,contentTitle:()=>m,default:()=>g,frontMatter:()=>u,metadata:()=>x,toc:()=>j});var i=s(11527),o=s(63883),t=s(36689),d=s(19571),r=s(60763),a=s(37521),c=s(73110),l=s(50959),h=s(90486);const u={sidebar_position:1},m="\ud83c\udfc3 Getting started",x={id:"modules/visualisation/getting-started/index",title:"\ud83c\udfc3 Getting started",description:"Ensure you have an active  Python venv in a terminal window.",source:"@site/docs/modules/visualisation/getting-started/index.mdx",sourceDirName:"modules/visualisation/getting-started",slug:"/modules/visualisation/getting-started/",permalink:"/docs/next/modules/visualisation/getting-started/",draft:!1,unlisted:!1,editUrl:"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/docs/modules/visualisation/getting-started/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f Visualisation",permalink:"/docs/next/modules/visualisation/"},next:{title:"\ud83d\udcd6 User Guide",permalink:"/docs/next/modules/visualisation/user-guide/"}},p={},j=[{value:"\ud83d\udd17 Compatibility",id:"-compatibility",level:2},{value:"\ud83d\udd27 <code>sse_vis</code> Command",id:"-sse_vis-command",level:2},{value:"\ud83d\udd27 <code>sse_audio</code> Command",id:"-sse_audio-command",level:2},{value:"\ud83d\udd27 Advanced Commands",id:"-advanced-commands",level:2},{value:"<code>audio:front</code> Command",id:"audiofront-command",level:3},{value:"<code>audio</code> Command",id:"audio-command",level:3},{value:"<code>front</code> Command",id:"front-command",level:3}];function v(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"-getting-started",children:"\ud83c\udfc3 Getting started"}),"\n",(0,i.jsx)(l.Fragment,{children:(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Ensure you have an active ",(0,i.jsx)(d.gx,{})," Python ",(0,i.jsx)(n.code,{children:"venv"})," in a terminal window."]})})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"../../../installation/application#-virtual-environment",children:"Learn how to activate \ud83d\udd2e virtual\nenvironments"})})}),"\n",(0,i.jsx)(n.p,{children:"The \ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f Visualisation module uses two services to run properly:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Front"})," service"]}),"\n",(0,i.jsx)(n.li,{children:"Power the user interfaces"}),"\n",(0,i.jsxs)(n.li,{children:["The default port is ",(0,i.jsx)(n.code,{children:"5530"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Audio"})," service"]}),"\n",(0,i.jsx)(n.li,{children:"Serve audio files from your file system"}),"\n",(0,i.jsxs)(n.li,{children:["The default port is ",(0,i.jsx)(n.code,{children:"5531"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"-compatibility",children:"\ud83d\udd17 Compatibility"}),"\n",(0,i.jsx)(l.Fragment,{children:(0,i.jsxs)(n.p,{children:["While the web app is compatible with most browsers, we've encountered\nintermittent issues with ",(0,i.jsx)(d.xw,{})," Firefox on ",(0,i.jsx)(d.WI,{})," Windows 11\nand ",(0,i.jsx)(d.wS,{})," Safari on ",(0,i.jsx)(d.Fn,{})," macOS 14. For optimal performance,\nwe recommend using ",(0,i.jsx)(d.eL,{})," Chrome."]})}),"\n",(0,i.jsxs)(n.h2,{id:"-sse_vis-command",children:["\ud83d\udd27 ",(0,i.jsx)(n.code,{children:"sse_vis"})," Command"]}),"\n",(0,i.jsxs)(n.p,{children:["This command initiates both the ",(0,i.jsx)(n.code,{children:"Audio"})," and ",(0,i.jsx)(n.code,{children:"Front"})," services."]}),"\n",(0,i.jsx)(l.Fragment,{children:(0,i.jsxs)(n.p,{children:["In an active ",(0,i.jsx)(n.code,{children:"venv"})," terminal, enter the following command to start both\nservices (replace the path to your configuration file by dragging and dropping\nthe ",(0,i.jsx)(d.uo,{})," configuration file icon into your terminal):"]})}),"\n",(0,i.jsx)(r.c,{}),"\n",(0,i.jsxs)(n.p,{children:["After pressing ",(0,i.jsx)(n.code,{children:"<Enter>"}),", both services will launch, and your default browser\nwill open."]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(d.WI,{})," Windows screencast"]})}),(0,i.jsx)(h.Z,{controls:!0,loop:!0,url:"/screencasts/visualisation_windows.mp4"})]}),"\n",(0,i.jsx)(l.Fragment,{children:(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["You can alternatively use ",(0,i.jsx)(c.I,{})," as an alias\nfor the ",(0,i.jsx)(a.J,{})," command."]})})}),"\n",(0,i.jsxs)(n.h2,{id:"-sse_audio-command",children:["\ud83d\udd27 ",(0,i.jsx)(n.code,{children:"sse_audio"})," Command"]}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.code,{children:"sse_audio"})," command to start only the ",(0,i.jsx)(n.code,{children:"Audio"})," service."]}),"\n",(0,i.jsxs)(n.p,{children:["This can be useful in case you are using the \ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f ",(0,i.jsx)(n.a,{href:"../../../extras/visualisation-online/",children:"Visualisation online"}),"."]}),"\n",(0,i.jsx)(t.i,{}),"\n",(0,i.jsx)(n.h2,{id:"-advanced-commands",children:"\ud83d\udd27 Advanced Commands"}),"\n",(0,i.jsxs)(n.h3,{id:"audiofront-command",children:[(0,i.jsx)(n.code,{children:"audio:front"})," Command"]}),"\n",(0,i.jsxs)(n.p,{children:["Simultaneously start both the ",(0,i.jsx)(n.code,{children:"Front"})," and ",(0,i.jsx)(n.code,{children:"Audio"})," services."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm audio:front relative/or/absolute/path/to/audio/folder\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"audio-command",children:[(0,i.jsx)(n.code,{children:"audio"})," Command"]}),"\n",(0,i.jsxs)(n.p,{children:["Start the ",(0,i.jsx)(n.code,{children:"Audio"})," service on port ",(0,i.jsx)(n.a,{href:"http://localhost:5531",children:"5531"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm audio -- relative/or/absolute/path/to/audio/folder\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"front-command",children:[(0,i.jsx)(n.code,{children:"front"})," Command"]}),"\n",(0,i.jsxs)(n.p,{children:["Start the ",(0,i.jsx)(n.code,{children:"Front"})," service on port ",(0,i.jsx)(n.a,{href:"http://localhost:5530",children:"5530"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm front\n"})})]})}function g(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(v,{...e})}):v(e)}},29903:(e,n,s)=>{s.d(n,{$p:()=>t,PB:()=>o,ZT:()=>r,i6:()=>d,iC:()=>i});const i="SSE",o="SoundScapeExplorer",t="sound-scape-explorer-VERSION",d="https://discord.gg/eRsQPDBeXg",r="https://github.com/sound-scape-explorer/sound-scape-explorer/discussions"},36689:(e,n,s)=>{s.d(n,{i:()=>a});var i=s(29903),o=s(16100),t=s(50959),d=s(11527);const r=e=>`# Windows\n${e}_audio C:\\path\\to\\config.xlsx\n\n# Ubuntu / macOS\n(venv)$> ${e}_audio /path/to/config.xlsx`,a=e=>{let{isCse:n=!1}=e;const s=(0,t.useMemo)((()=>n?"cse":i.iC.toLowerCase()),[n]);return(0,d.jsx)(o.Z,{language:"bash",children:r(s)})}},39968:(e,n,s)=>{s.d(n,{w:()=>o});var i=s(11527);const o=e=>{let{children:n}=e;return(0,i.jsx)("code",{children:n})}},60763:(e,n,s)=>{s.d(n,{c:()=>a});var i=s(29903),o=s(16100),t=s(50959),d=s(11527);const r=e=>`# Windows\n${e}_vis C:\\path\\to\\config.xlsx\n\n# Ubuntu / macOS\n(venv)$> ${e}_vis /path/to/config.xlsx`,a=e=>{let{isCse:n=!1}=e;const s=(0,t.useMemo)((()=>n?"cse":i.iC.toLowerCase()),[n]);return(0,d.jsx)(o.Z,{language:"bash",children:r(s)})}},37521:(e,n,s)=>{s.d(n,{J:()=>d});var i=s(29903),o=s(39968),t=s(11527);const d=e=>{let{isCse:n=!1}=e;return n?(0,t.jsx)(o.w,{children:"cse_vis"}):(0,t.jsxs)(o.w,{children:[i.iC.toLowerCase(),"_vis"]})}},73110:(e,n,s)=>{s.d(n,{I:()=>d});var i=s(29903),o=s(39968),t=s(11527);const d=e=>{let{isCse:n=!1}=e;return n?(0,t.jsx)(o.w,{children:"cse_viz"}):(0,t.jsxs)(o.w,{children:[i.iC.toLowerCase(),"_viz"]})}}}]);