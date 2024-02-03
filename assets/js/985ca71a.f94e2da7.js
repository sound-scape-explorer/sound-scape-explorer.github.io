"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[8468],{4372:(e,n,s)=>{s.d(n,{cp:()=>d});var r=s(2488),o=s(34728),t=s(79584),i=s(73588);function c(e){const n={a:"a",admonition:"admonition",p:"p",...(0,o.M)(),...e.components};return(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsxs)(n.p,{children:["You must have a shell pointing to folder ",(0,r.jsx)(i.a,{version:t.j})," and active python\nvirtual environment."]}),(0,r.jsxs)(n.p,{children:["Find related documentation in ",(0,r.jsx)(n.a,{href:"/docs/11.10.0/user-guides/running-campaigns",children:"running\ncampaigns"})]})]})}function d(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},46840:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>x,contentTitle:()=>a,default:()=>p,frontMatter:()=>d,metadata:()=>l,toc:()=>u});var r=s(2488),o=s(34728),t=s(4372),i=s(78084),c=s(36568);const d={},a="Extracting .xlsx from .h5",l={id:"additional-resources/extracting-xlsx-from-h5",title:"Extracting .xlsx from .h5",description:"Context",source:"@site/versioned_docs/version-11.10.0/additional-resources/extracting-xlsx-from-h5.mdx",sourceDirName:"additional-resources",slug:"/additional-resources/extracting-xlsx-from-h5",permalink:"/docs/11.10.0/additional-resources/extracting-xlsx-from-h5",draft:!1,unlisted:!1,editUrl:"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-11.10.0/additional-resources/extracting-xlsx-from-h5.mdx",tags:[],version:"11.10.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Audio formats",permalink:"/docs/11.10.0/additional-resources/audio-formats"},next:{title:"User flow",permalink:"/docs/11.10.0/additional-resources/flow"}},x={},u=[{value:"Context",id:"context",level:2},{value:"Run",id:"run",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",...(0,o.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"extracting-xlsx-from-h5",children:["Extracting ",(0,r.jsx)(n.code,{children:".xlsx"})," from ",(0,r.jsx)(n.code,{children:".h5"})]}),"\n",(0,r.jsx)(t.cp,{}),"\n",(0,r.jsx)(n.h2,{id:"context",children:"Context"}),"\n",(0,r.jsxs)(n.p,{children:["Use this command to extract the ",(0,r.jsx)(n.code,{children:".xlsx"})," configuration file from an existing\n",(0,r.jsx)(n.code,{children:".h5"})," storage file."]}),"\n",(0,r.jsxs)(n.p,{children:["The extracted ",(0,r.jsx)(n.code,{children:"storage.h5-config-VERSION.xlsx"})," is the actual configuration used\nto create the storage file."]}),"\n",(0,r.jsx)(n.h2,{id:"run",children:"Run"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Open a shell window. (Double click ",(0,r.jsx)(n.code,{children:"start.bat"})," on Windows or use ",(0,r.jsx)(n.code,{children:"cd"})," on\nUbuntu / macOS)"]}),"\n",(0,r.jsxs)(n.li,{children:["Type ",(0,r.jsx)(c.c,{})," followed by a ",(0,r.jsx)(n.code,{children:"<space>"})]}),"\n",(0,r.jsxs)(n.li,{children:["Drag and drop your ",(0,r.jsx)(n.code,{children:".h5"})," storage file to the shell window"]}),"\n",(0,r.jsxs)(n.li,{children:["Press ",(0,r.jsx)(n.code,{children:"Enter"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(i.Q,{})]})}function p(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},67424:(e,n,s)=>{s.d(n,{Ep:()=>i,M1:()=>t,O0:()=>c,Q5:()=>r,QT:()=>o});const r="SSE",o="SoundScapeExplorer",t="sound-scape-explorer-VERSION",i="https://discord.gg/eRsQPDBeXg",c="https://github.com/sound-scape-explorer/sound-scape-explorer/discussions"},11148:(e,n,s)=>{s.d(n,{Y:()=>t});var r=s(67424),o=s(96651);function t(e){let{version:n,isCse:s=!1}=e;return{directory:(0,o.useMemo)((()=>{let e=r.M1;return n&&s?e="coral-sound-explorer-VERSION".replace("VERSION",n):n&&(e=r.M1.replace("VERSION",n)),e}),[n])}}},73588:(e,n,s)=>{s.d(n,{a:()=>i});var r=s(11148),o=s(37500),t=s(2488);const i=e=>{let{version:n,isCse:s=!1}=e;const{directory:i}=(0,r.Y)({version:n,isCse:s});return(0,t.jsx)(o.G,{children:i})}},37500:(e,n,s)=>{s.d(n,{G:()=>o});var r=s(2488);const o=e=>{let{children:n}=e;return(0,r.jsx)("code",{children:n})}},78084:(e,n,s)=>{s.d(n,{Q:()=>d});var r=s(67424),o=s(34995),t=s(96651),i=s(2488);const c=e=>`# Windows\n${e}_config C:\\to\\storage.h5\n\n# Ubuntu / macOS\n${e}_config path/to/storage.h5`,d=e=>{let{isCse:n=!1}=e;const s=(0,t.useMemo)((()=>n?"cse":r.Q5.toLowerCase()),[n]);return(0,i.jsx)(o.c,{language:"bash",children:c(s)})}},36568:(e,n,s)=>{s.d(n,{c:()=>c});var r=s(67424),o=s(96651),t=s(37500),i=s(2488);const c=e=>{let{isCse:n=!1}=e;const s=(0,o.useMemo)((()=>n?"cse":r.Q5.toLowerCase()),[n]);return(0,i.jsxs)(t.G,{children:[s,"_config"]})}},79584:(e,n,s)=>{s.d(n,{j:()=>r});const r="11.10.0"}}]);