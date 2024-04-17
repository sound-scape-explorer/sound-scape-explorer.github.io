"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[53714],{60966:(e,n,s)=>{s.d(n,{Ay:()=>c,RM:()=>t});var i=s(13274),o=s(99128),r=s(47117),d=s(21763);const t=[];function a(e){const n={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsxs)(n.p,{children:["You must have a shell pointing to folder ",(0,i.jsx)(d.P,{version:r.x})," and active python\nvirtual environment."]}),(0,i.jsxs)(n.p,{children:["Find related documentation in ",(0,i.jsx)(n.a,{href:"/docs/11.10.0/user-guides/running-campaigns",children:"running\ncampaigns"})]})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},97328:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var i=s(13274),o=s(99128),r=s(60966),d=s(75103),t=s(93175),a=s(70636);const c={sidebar_position:4},l="Visualisation user guide",u={id:"user-guides/visualisation-user-guide",title:"Visualisation user guide",description:"Compatibility",source:"@site/versioned_docs/version-11.10.0/user-guides/visualisation-user-guide.mdx",sourceDirName:"user-guides",slug:"/user-guides/visualisation-user-guide",permalink:"/docs/11.10.0/user-guides/visualisation-user-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-11.10.0/user-guides/visualisation-user-guide.mdx",tags:[],version:"11.10.0",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Quit",permalink:"/docs/11.10.0/user-guides/processing-user-guide/quit"},next:{title:"Additional Resources",permalink:"/docs/11.10.0/category/additional-resources"}},h={},p=[...r.RM,{value:"Compatibility",id:"compatibility",level:2},{value:"<VisCommandInline></VisCommandInline> command",id:"-command",level:2},{value:"<code>audio:front</code> command",id:"audiofront-command",level:2},{value:"<code>audio</code> command",id:"audio-command",level:2},{value:"<code>front</code> command",id:"front-command",level:2}];function m(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"visualisation-user-guide",children:"Visualisation user guide"}),"\n",(0,i.jsx)(r.Ay,{}),"\n",(0,i.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,i.jsx)(n.p,{children:"While the web app is compatible with most browsers, we experienced random\nissues with Firefox on Windows 11 and Safari on macOS 14. Thus, we\nrecommend using Chrome."}),"\n",(0,i.jsxs)(n.h2,{id:"-command",children:[(0,i.jsx)(t.l,{})," command"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(t.l,{})," is only available if you have installed the ",(0,i.jsx)(n.code,{children:"Processing"}),"\nmodule."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This is the quickest command to start both ",(0,i.jsx)(n.code,{children:"Audio"})," and ",(0,i.jsx)(n.code,{children:"Front"})," modules."]}),"\n",(0,i.jsxs)(n.p,{children:["On an active ",(0,i.jsx)(n.code,{children:"venv"})," shell window, type the following to start both services\n(replace the path to your configuration file by drag and dropping the file\nExcel icon into your shell):"]}),"\n",(0,i.jsx)(d.b,{}),"\n",(0,i.jsxs)(n.p,{children:["After pressing ",(0,i.jsx)(n.code,{children:"<Enter>"}),", both modules will start and your default browser will\nopen."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Note"})}),"\n",(0,i.jsxs)(n.p,{children:["You can also use ",(0,i.jsx)(a.i,{})," or ",(0,i.jsx)(n.code,{children:"viz"})," as aliases to the ",(0,i.jsx)(t.l,{})," command."]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"audiofront-command",children:[(0,i.jsx)(n.code,{children:"audio:front"})," command"]}),"\n",(0,i.jsxs)(n.p,{children:["You can serve both ",(0,i.jsx)(n.code,{children:"Front"})," and ",(0,i.jsx)(n.code,{children:"Audio"})," modules at the same time"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Windows\npnpm audio:front:windows Z:\\audio_folder_example\n\n# Ubuntu / macOS\npnpm audio:front relative/or/absolute/path/to/audio/folder\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"audio-command",children:[(0,i.jsx)(n.code,{children:"audio"})," command"]}),"\n",(0,i.jsxs)(n.p,{children:["Serve ",(0,i.jsx)(n.code,{children:"Audio"})," module on port ",(0,i.jsx)(n.a,{href:"http://localhost:5531",children:"5531"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm audio -- relative/or/absolute/path/to/audio/folder\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"front-command",children:[(0,i.jsx)(n.code,{children:"front"})," command"]}),"\n",(0,i.jsxs)(n.p,{children:["Serve ",(0,i.jsx)(n.code,{children:"Front"})," module on port ",(0,i.jsx)(n.a,{href:"http://localhost:5530",children:"5530"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm front\n"})})]})}function x(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},38037:(e,n,s)=>{s.d(n,{$d:()=>o,C3:()=>i,UP:()=>t,gX:()=>r,z9:()=>d});const i="SSE",o="SoundScapeExplorer",r="sound-scape-explorer-VERSION",d="https://discord.gg/eRsQPDBeXg",t="https://github.com/sound-scape-explorer/sound-scape-explorer/discussions"},3220:(e,n,s)=>{s.d(n,{W:()=>r});var i=s(38037),o=s(79474);function r(e){let{version:n,isCse:s=!1}=e;return{directory:(0,o.useMemo)((()=>{let e=i.gX;return n&&s?e="coral-sound-explorer-VERSION".replace("VERSION",n):n&&(e=i.gX.replace("VERSION",n)),e}),[n])}}},21763:(e,n,s)=>{s.d(n,{P:()=>d});var i=s(3220),o=s(24865),r=s(13274);const d=e=>{let{version:n,isCse:s=!1}=e;const{directory:d}=(0,i.W)({version:n,isCse:s});return(0,r.jsx)(o.l,{children:d})}},24865:(e,n,s)=>{s.d(n,{l:()=>o});var i=s(13274);const o=e=>{let{children:n}=e;return(0,i.jsx)("code",{children:n})}},75103:(e,n,s)=>{s.d(n,{b:()=>a});var i=s(38037),o=s(96547),r=s(79474),d=s(13274);const t=e=>`# Windows\n${e}_vis C:\\path\\to\\config.xlsx\n\n# Ubuntu / macOS\n(venv)$> ${e}_vis /path/to/config.xlsx`,a=e=>{let{isCse:n=!1}=e;const s=(0,r.useMemo)((()=>n?"cse":i.C3.toLowerCase()),[n]);return(0,d.jsx)(o.A,{language:"bash",children:t(s)})}},93175:(e,n,s)=>{s.d(n,{l:()=>d});var i=s(38037),o=s(24865),r=s(13274);const d=e=>{let{isCse:n=!1}=e;return n?(0,r.jsx)(o.l,{children:"cse_vis"}):(0,r.jsxs)(o.l,{children:[i.C3.toLowerCase(),"_vis"]})}},70636:(e,n,s)=>{s.d(n,{i:()=>d});var i=s(38037),o=s(24865),r=s(13274);const d=e=>{let{isCse:n=!1}=e;return n?(0,r.jsx)(o.l,{children:"cse_viz"}):(0,r.jsxs)(o.l,{children:[i.C3.toLowerCase(),"_viz"]})}},47117:(e,n,s)=>{s.d(n,{x:()=>i});const i="11.10.0"}}]);