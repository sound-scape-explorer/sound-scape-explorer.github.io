"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[66246],{53134:(e,n,s)=>{s.d(n,{Ay:()=>l,RM:()=>c});var r=s(86070),o=s(25710),t=s(65243),i=s(40817);const c=[];function d(e){const n={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsxs)(n.p,{children:["You must have a shell pointing to folder ",(0,r.jsx)(i.P,{version:t.x})," and active python\nvirtual environment."]}),(0,r.jsxs)(n.p,{children:["Find related documentation in ",(0,r.jsx)(n.a,{href:"/docs/11.10.0/user-guides/running-campaigns",children:"running\ncampaigns"})]})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},23192:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>g,frontMatter:()=>l,metadata:()=>x,toc:()=>u});var r=s(86070),o=s(25710),t=s(24707),i=s(7235),c=s(30758),d=s(53134);const l={},a="Extracting .xlsx from .h5",x={id:"additional-resources/extracting-xlsx-from-h5",title:"Extracting .xlsx from .h5",description:"Context",source:"@site/versioned_docs/version-11.10.0/additional-resources/extracting-xlsx-from-h5.mdx",sourceDirName:"additional-resources",slug:"/additional-resources/extracting-xlsx-from-h5",permalink:"/docs/11.10.0/additional-resources/extracting-xlsx-from-h5",draft:!1,unlisted:!1,editUrl:"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-11.10.0/additional-resources/extracting-xlsx-from-h5.mdx",tags:[],version:"11.10.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Audio formats",permalink:"/docs/11.10.0/additional-resources/audio-formats"},next:{title:"User flow",permalink:"/docs/11.10.0/additional-resources/flow"}},h={},u=[...d.RM,{value:"Context",id:"context",level:2},{value:"Run",id:"run",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"extracting-xlsx-from-h5",children:["Extracting ",(0,r.jsx)(n.code,{children:".xlsx"})," from ",(0,r.jsx)(n.code,{children:".h5"})]}),"\n",(0,r.jsx)(d.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"context",children:"Context"}),"\n",(0,r.jsxs)(n.p,{children:["Use this command to extract the ",(0,r.jsx)(n.code,{children:".xlsx"})," configuration file from an existing\n",(0,r.jsx)(n.code,{children:".h5"})," storage file."]}),"\n",(0,r.jsxs)(n.p,{children:["The extracted ",(0,r.jsx)(n.code,{children:"storage.h5-config-VERSION.xlsx"})," is the actual configuration used\nto create the storage file."]}),"\n",(0,r.jsx)(n.h2,{id:"run",children:"Run"}),"\n",(0,r.jsx)(c.Fragment,{children:(0,r.jsxs)("ol",{children:[(0,r.jsxs)("li",{children:["Open a shell window. (Double-click ",(0,r.jsx)("code",{children:"start.bat"})," on Windows or use ",(0,r.jsx)("code",{children:"cd"})," on Ubuntu / macOS)"]}),(0,r.jsxs)("li",{children:["Type ",(0,r.jsx)(i.d,{})," followed by a ",(0,r.jsx)("code",{children:"<space>"})]}),(0,r.jsxs)("li",{children:["Drag and drop your ",(0,r.jsx)("code",{children:".h5"})," storage file to the shell window"]}),(0,r.jsxs)("li",{children:["Press ",(0,r.jsx)("code",{children:"Enter"})]})]})}),"\n",(0,r.jsxs)(c.Fragment,{children:[(0,r.jsx)(n.p,{children:"Example:"}),(0,r.jsx)(t.f,{})]})]})}function g(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},41251:(e,n,s)=>{s.d(n,{$d:()=>o,C3:()=>r,UP:()=>c,gX:()=>t,z9:()=>i});const r="SSE",o="SoundScapeExplorer",t="sound-scape-explorer-VERSION",i="https://discord.gg/eRsQPDBeXg",c="https://github.com/sound-scape-explorer/sound-scape-explorer/discussions"},2702:(e,n,s)=>{s.d(n,{W:()=>t});var r=s(41251),o=s(30758);function t(e){let{version:n,isCse:s=!1}=e;return{directory:(0,o.useMemo)((()=>{let e=r.gX;return n&&s?e="coral-sound-explorer-VERSION".replace("VERSION",n):n&&(e=r.gX.replace("VERSION",n)),e}),[n])}}},40817:(e,n,s)=>{s.d(n,{P:()=>i});var r=s(2702),o=s(71703),t=s(86070);const i=e=>{let{version:n,isCse:s=!1}=e;const{directory:i}=(0,r.W)({version:n,isCse:s});return(0,t.jsx)(o.l,{children:i})}},71703:(e,n,s)=>{s.d(n,{l:()=>o});var r=s(86070);const o=e=>{let{children:n}=e;return(0,r.jsx)("code",{children:n})}},24707:(e,n,s)=>{s.d(n,{f:()=>d});var r=s(41251),o=s(72410),t=s(30758),i=s(86070);const c=e=>`# Windows\n${e}_config C:\\to\\storage.h5\n\n# Ubuntu / macOS\n${e}_config path/to/storage.h5`,d=e=>{let{isCse:n=!1}=e;const s=(0,t.useMemo)((()=>n?"cse":r.C3.toLowerCase()),[n]);return(0,i.jsx)(o.A,{language:"bash",children:c(s)})}},7235:(e,n,s)=>{s.d(n,{d:()=>c});var r=s(41251),o=s(30758),t=s(71703),i=s(86070);const c=e=>{let{isCse:n=!1}=e;const s=(0,o.useMemo)((()=>n?"cse":r.C3.toLowerCase()),[n]);return(0,i.jsxs)(t.l,{children:[s,"_config"]})}},65243:(e,n,s)=>{s.d(n,{x:()=>r});const r="11.10.0"}}]);