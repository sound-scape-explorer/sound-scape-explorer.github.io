"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[98827],{27208:(e,n,s)=>{s.d(n,{Ay:()=>l,RM:()=>c});var r=s(86070),o=s(15658),t=s(35430),i=s(45856);const c=[];function d(e){const n={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsxs)(n.p,{children:["You must have a shell pointing to folder ",(0,r.jsx)(i.P,{version:t.x})," and active python\nvirtual environment."]}),(0,r.jsxs)(n.p,{children:["Find related documentation in ",(0,r.jsx)(n.a,{href:"/docs/11.9.0/user-guides/running-campaigns",children:"running\ncampaigns"})]})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},81175:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>x,default:()=>g,frontMatter:()=>a,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"additional-resources/extracting-xlsx-from-h5","title":"Extracting .xlsx from .h5","description":"Context","source":"@site/versioned_docs/version-11.9.0/additional-resources/extracting-xlsx-from-h5.mdx","sourceDirName":"additional-resources","slug":"/additional-resources/extracting-xlsx-from-h5","permalink":"/docs/11.9.0/additional-resources/extracting-xlsx-from-h5","draft":false,"unlisted":false,"editUrl":"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-11.9.0/additional-resources/extracting-xlsx-from-h5.mdx","tags":[],"version":"11.9.0","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Get in touch","permalink":"/docs/11.9.0/additional-resources/discord"},"next":{"title":"User flow","permalink":"/docs/11.9.0/additional-resources/flow"}}');var o=s(86070),t=s(15658),i=s(72802),c=s(25652),d=s(30758),l=s(27208);const a={},x="Extracting .xlsx from .h5",h={},u=[...l.RM,{value:"Context",id:"context",level:2},{value:"Run",id:"run",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsxs)(n.h1,{id:"extracting-xlsx-from-h5",children:["Extracting ",(0,o.jsx)(n.code,{children:".xlsx"})," from ",(0,o.jsx)(n.code,{children:".h5"})]})}),"\n",(0,o.jsx)(l.Ay,{}),"\n",(0,o.jsx)(n.h2,{id:"context",children:"Context"}),"\n",(0,o.jsxs)(n.p,{children:["Use this command to extract the ",(0,o.jsx)(n.code,{children:".xlsx"})," configuration file from an existing\n",(0,o.jsx)(n.code,{children:".h5"})," storage file."]}),"\n",(0,o.jsxs)(n.p,{children:["The extracted ",(0,o.jsx)(n.code,{children:"storage.h5-config-VERSION.xlsx"})," is the actual configuration used\nto create the storage file."]}),"\n",(0,o.jsx)(n.h2,{id:"run",children:"Run"}),"\n",(0,o.jsx)(d.Fragment,{children:(0,o.jsxs)("ol",{children:[(0,o.jsxs)("li",{children:["Open a shell window. (Double-click ",(0,o.jsx)("code",{children:"start.bat"})," on Windows or use ",(0,o.jsx)("code",{children:"cd"})," on Ubuntu / macOS)"]}),(0,o.jsxs)("li",{children:["Type ",(0,o.jsx)(c.d,{})," followed by a ",(0,o.jsx)("code",{children:"<space>"})]}),(0,o.jsxs)("li",{children:["Drag and drop your ",(0,o.jsx)(n.code,{children:".h5"})," storage file to the shell window"]}),(0,o.jsxs)("li",{children:["Press ",(0,o.jsx)(n.code,{children:"Enter"})]})]})}),"\n",(0,o.jsxs)(d.Fragment,{children:[(0,o.jsx)(n.p,{children:"Example:"}),(0,o.jsx)(i.f,{})]})]})}function g(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},74063:(e,n,s)=>{s.d(n,{W:()=>t});var r=s(35592),o=s(30758);function t(e){let{version:n,isCse:s=!1}=e;return{directory:(0,o.useMemo)((()=>{let e=r.gX;return n&&s?e="coral-sound-explorer-VERSION".replace("VERSION",n):n&&(e=r.gX.replace("VERSION",n)),e}),[n])}}},45856:(e,n,s)=>{s.d(n,{P:()=>i});var r=s(74063),o=s(3838),t=s(86070);const i=e=>{let{version:n,isCse:s=!1}=e;const{directory:i}=(0,r.W)({version:n,isCse:s});return(0,t.jsx)(o.l,{children:i})}},3838:(e,n,s)=>{s.d(n,{l:()=>o});var r=s(86070);const o=e=>{let{children:n}=e;return(0,r.jsx)("code",{children:n})}},72802:(e,n,s)=>{s.d(n,{f:()=>d});var r=s(35592),o=s(31824),t=s(30758),i=s(86070);const c=e=>`# Windows\n${e}_config C:\\to\\storage.h5\n\n# Ubuntu / macOS\n${e}_config path/to/storage.h5`,d=e=>{let{isCse:n=!1}=e;const s=(0,t.useMemo)((()=>n?"cse":r.C3.toLowerCase()),[n]);return(0,i.jsx)(o.A,{language:"bash",children:c(s)})}},25652:(e,n,s)=>{s.d(n,{d:()=>c});var r=s(35592),o=s(30758),t=s(3838),i=s(86070);const c=e=>{let{isCse:n=!1}=e;const s=(0,o.useMemo)((()=>n?"cse":r.C3.toLowerCase()),[n]);return(0,i.jsxs)(t.l,{children:[s,"_config"]})}},35430:(e,n,s)=>{s.d(n,{x:()=>r});const r="11.9.0"}}]);