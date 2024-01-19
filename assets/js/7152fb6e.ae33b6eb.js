"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[1882],{1885:(e,n,s)=>{s.d(n,{ZP:()=>a});var i=s(11527),o=s(88672),r=s(42386),d=s(77255);function t(e){const n={a:"a",admonition:"admonition",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsxs)(n.p,{children:["You must have a shell pointing to folder ",(0,i.jsx)(d.u,{version:r.q})," and active python\nvirtual environment."]}),(0,i.jsxs)(n.p,{children:["Find related documentation in ",(0,i.jsx)(n.a,{href:"/docs/11.9.0/user-guides/running-campaigns",children:"running\ncampaigns"})]})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},66155:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var i=s(11527),o=s(88672),r=s(1885),d=s(11766),t=s(26120),a=s(17613);const c={sidebar_position:4},l="Visualisation user guide",u={id:"user-guides/visualisation-user-guide",title:"Visualisation user guide",description:"Compatibility",source:"@site/versioned_docs/version-11.9.0/user-guides/visualisation-user-guide.mdx",sourceDirName:"user-guides",slug:"/user-guides/visualisation-user-guide",permalink:"/docs/11.9.0/user-guides/visualisation-user-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-11.9.0/user-guides/visualisation-user-guide.mdx",tags:[],version:"11.9.0",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Processing user guide",permalink:"/docs/11.9.0/user-guides/processing-user-guide"},next:{title:"Additional Resources",permalink:"/docs/11.9.0/category/additional-resources"}},h={},p=[{value:"Compatibility",id:"compatibility",level:2},{value:"<VisCommandInline></VisCommandInline> command",id:"-command",level:2},{value:"<code>audio:front</code> command",id:"audiofront-command",level:2},{value:"<code>audio</code> command",id:"audio-command",level:2},{value:"<code>front</code> command",id:"front-command",level:2}];function m(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"visualisation-user-guide",children:"Visualisation user guide"}),"\n",(0,i.jsx)(r.ZP,{}),"\n",(0,i.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,i.jsx)(n.p,{children:"While the web app is compatible with most browsers, we experienced random\nissues with Firefox on Windows 11 and Safari on macOS 14. Thus, we\nrecommend using Chrome."}),"\n",(0,i.jsxs)(n.h2,{id:"-command",children:[(0,i.jsx)(t.J,{})," command"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(t.J,{})," is only available if you have installed the ",(0,i.jsx)(n.code,{children:"Processing"}),"\nmodule."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This is the quickest command to start both ",(0,i.jsx)(n.code,{children:"Audio"})," and ",(0,i.jsx)(n.code,{children:"Front"})," modules."]}),"\n",(0,i.jsxs)(n.p,{children:["On an active ",(0,i.jsx)(n.code,{children:"venv"})," shell window, type the following to start both services\n(replace the path to your configuration file by drag and dropping the file\nExcel icon into your shell):"]}),"\n",(0,i.jsx)(d.c,{}),"\n",(0,i.jsxs)(n.p,{children:["After pressing ",(0,i.jsx)(n.code,{children:"<Enter>"}),", both modules will start and your default browser will\nopen."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Note"})}),"\n",(0,i.jsxs)(n.p,{children:["You can also use ",(0,i.jsx)(a.I,{})," or ",(0,i.jsx)(n.code,{children:"viz"})," as aliases to the ",(0,i.jsx)(t.J,{})," command."]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"audiofront-command",children:[(0,i.jsx)(n.code,{children:"audio:front"})," command"]}),"\n",(0,i.jsxs)(n.p,{children:["You can serve both ",(0,i.jsx)(n.code,{children:"Front"})," and ",(0,i.jsx)(n.code,{children:"Audio"})," modules at the same time"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Windows\npnpm audio:front:windows Z:\\audio_folder_example\n\n# Ubuntu / macOS\npnpm audio:front relative/or/absolute/path/to/audio/folder\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"audio-command",children:[(0,i.jsx)(n.code,{children:"audio"})," command"]}),"\n",(0,i.jsxs)(n.p,{children:["Serve ",(0,i.jsx)(n.code,{children:"Audio"})," module on port ",(0,i.jsx)(n.a,{href:"http://localhost:5531",children:"5531"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm audio -- relative/or/absolute/path/to/audio/folder\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"front-command",children:[(0,i.jsx)(n.code,{children:"front"})," command"]}),"\n",(0,i.jsxs)(n.p,{children:["Serve ",(0,i.jsx)(n.code,{children:"Front"})," module on port ",(0,i.jsx)(n.a,{href:"http://localhost:5530",children:"5530"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm front\n"})})]})}function x(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},40278:(e,n,s)=>{s.d(n,{$p:()=>r,PB:()=>o,ZT:()=>t,i6:()=>d,iC:()=>i});const i="SSE",o="SoundScapeExplorer",r="sound-scape-explorer-VERSION",d="https://discord.gg/eRsQPDBeXg",t="https://github.com/sound-scape-explorer/sound-scape-explorer/discussions"},9506:(e,n,s)=>{s.d(n,{_:()=>r});var i=s(40278),o=s(50959);function r(e){let{version:n,isCse:s=!1}=e;return{directory:(0,o.useMemo)((()=>{let e=i.$p;return n&&s?e="coral-sound-explorer-VERSION".replace("VERSION",n):n&&(e=i.$p.replace("VERSION",n)),e}),[n])}}},77255:(e,n,s)=>{s.d(n,{u:()=>d});var i=s(9506),o=s(53817),r=s(11527);const d=e=>{let{version:n,isCse:s=!1}=e;const{directory:d}=(0,i._)({version:n,isCse:s});return(0,r.jsx)(o.w,{children:d})}},53817:(e,n,s)=>{s.d(n,{w:()=>o});var i=s(11527);const o=e=>{let{children:n}=e;return(0,i.jsx)("code",{children:n})}},11766:(e,n,s)=>{s.d(n,{c:()=>a});var i=s(40278),o=s(8954),r=s(50959),d=s(11527);const t=e=>`# Windows\n${e}_vis C:\\path\\to\\config.xlsx\n\n# Ubuntu / macOS\n(venv)$> ${e}_vis /path/to/config.xlsx`,a=e=>{let{isCse:n=!1}=e;const s=(0,r.useMemo)((()=>n?"cse":i.iC.toLowerCase()),[n]);return(0,d.jsx)(o.Z,{language:"bash",children:t(s)})}},26120:(e,n,s)=>{s.d(n,{J:()=>d});var i=s(40278),o=s(53817),r=s(11527);const d=e=>{let{isCse:n=!1}=e;return n?(0,r.jsx)(o.w,{children:"cse_vis"}):(0,r.jsxs)(o.w,{children:[i.iC.toLowerCase(),"_vis"]})}},17613:(e,n,s)=>{s.d(n,{I:()=>d});var i=s(40278),o=s(53817),r=s(11527);const d=e=>{let{isCse:n=!1}=e;return n?(0,r.jsx)(o.w,{children:"cse_viz"}):(0,r.jsxs)(o.w,{children:[i.iC.toLowerCase(),"_viz"]})}},42386:(e,n,s)=>{s.d(n,{q:()=>i});const i="11.9.0"}}]);