"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[1882],{5724:(e,n,o)=>{o.d(n,{ZP:()=>a});var s=o(1527),i=o(3883),r=o(8293),d=o(8258);function t(e){const n={a:"a",admonition:"admonition",p:"p",...(0,i.a)(),...e.components};return(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsxs)(n.p,{children:["You must have a shell pointing to folder ",(0,s.jsx)(d.u,{version:r.q})," and active python\nvirtual environment."]}),(0,s.jsxs)(n.p,{children:["Find related documentation in ",(0,s.jsx)(n.a,{href:"/docs/11.9.0/user-guides/running-campaigns",children:"running\ncampaigns"})]})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},897:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var s=o(1527),i=o(3883),r=o(5724),d=o(763),t=o(7521),a=o(3110);const c={sidebar_position:4},l="Visualisation user guide",u={id:"user-guides/visualisation-user-guide",title:"Visualisation user guide",description:"Compatibility",source:"@site/versioned_docs/version-11.9.0/user-guides/visualisation-user-guide.mdx",sourceDirName:"user-guides",slug:"/user-guides/visualisation-user-guide",permalink:"/docs/11.9.0/user-guides/visualisation-user-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-11.9.0/user-guides/visualisation-user-guide.mdx",tags:[],version:"11.9.0",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Processing user guide",permalink:"/docs/11.9.0/user-guides/processing-user-guide"},next:{title:"Additional Resources",permalink:"/docs/11.9.0/category/additional-resources"}},h={},p=[{value:"Compatibility",id:"compatibility",level:2},{value:"<VisCommandInline></VisCommandInline> command",id:"-command",level:2},{value:"<code>audio:front</code> command",id:"audiofront-command",level:2},{value:"<code>audio</code> command",id:"audio-command",level:2},{value:"<code>front</code> command",id:"front-command",level:2}];function m(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"visualisation-user-guide",children:"Visualisation user guide"}),"\n",(0,s.jsx)(r.ZP,{}),"\n",(0,s.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsx)(n.p,{children:"While the web app is compatible with most browsers, we experienced random\nissues with Firefox on Windows 11 and Safari on macOS 14. Thus, we\nrecommend using Chrome."}),"\n",(0,s.jsxs)(n.h2,{id:"-command",children:[(0,s.jsx)(t.J,{})," command"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(t.J,{})," is only available if you have installed the ",(0,s.jsx)(n.code,{children:"Processing"}),"\nmodule."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This is the quickest command to start both ",(0,s.jsx)(n.code,{children:"Audio"})," and ",(0,s.jsx)(n.code,{children:"Front"})," modules."]}),"\n",(0,s.jsxs)(n.p,{children:["On an active ",(0,s.jsx)(n.code,{children:"venv"})," shell window, type the following to start both services\n(replace the path to your configuration file by drag and dropping the file\nExcel icon into your shell):"]}),"\n",(0,s.jsx)(d.c,{}),"\n",(0,s.jsxs)(n.p,{children:["After pressing ",(0,s.jsx)(n.code,{children:"<Enter>"}),", both modules will start and your default browser will\nopen."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Note"})}),"\n",(0,s.jsxs)(n.p,{children:["You can also use ",(0,s.jsx)(a.I,{})," or ",(0,s.jsx)(n.code,{children:"viz"})," as aliases to the ",(0,s.jsx)(t.J,{})," command."]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"audiofront-command",children:[(0,s.jsx)(n.code,{children:"audio:front"})," command"]}),"\n",(0,s.jsxs)(n.p,{children:["You can serve both ",(0,s.jsx)(n.code,{children:"Front"})," and ",(0,s.jsx)(n.code,{children:"Audio"})," modules at the same time"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Windows\npnpm audio:front:windows Z:\\audio_folder_example\n\n# Ubuntu / macOS\npnpm audio:front relative/or/absolute/path/to/audio/folder\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"audio-command",children:[(0,s.jsx)(n.code,{children:"audio"})," command"]}),"\n",(0,s.jsxs)(n.p,{children:["Serve ",(0,s.jsx)(n.code,{children:"Audio"})," module on port ",(0,s.jsx)(n.a,{href:"http://localhost:5531",children:"5531"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm audio -- relative/or/absolute/path/to/audio/folder\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"front-command",children:[(0,s.jsx)(n.code,{children:"front"})," command"]}),"\n",(0,s.jsxs)(n.p,{children:["Serve ",(0,s.jsx)(n.code,{children:"Front"})," module on port ",(0,s.jsx)(n.a,{href:"http://localhost:5530",children:"5530"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm front\n"})})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},9903:(e,n,o)=>{o.d(n,{$p:()=>r,PB:()=>i,ZT:()=>t,i6:()=>d,iC:()=>s});const s="SSE",i="SoundScapeExplorer",r="sound-scape-explorer-VERSION",d="https://discord.gg/eRsQPDBeXg",t="https://github.com/sound-scape-explorer/sound-scape-explorer/discussions"},2019:(e,n,o)=>{o.d(n,{_:()=>r});var s=o(9903),i=o(959);function r(e){return{directory:(0,i.useMemo)((()=>{let n=s.$p;return e&&(n=s.$p.replace("VERSION",e)),n}),[e])}}},8258:(e,n,o)=>{o.d(n,{u:()=>d});var s=o(2019),i=o(9968),r=o(1527);const d=e=>{let{version:n}=e;const{directory:o}=(0,s._)(n);return(0,r.jsx)(i.w,{children:o})}},9968:(e,n,o)=>{o.d(n,{w:()=>i});var s=o(1527);const i=e=>{let{children:n}=e;return(0,s.jsx)("code",{children:n})}},763:(e,n,o)=>{o.d(n,{c:()=>t});var s=o(9903),i=o(6100),r=o(1527);const d=`# Windows\n${s.iC.toLowerCase()}_vis C:\\path\\to\\config.xlsx\n\n# Ubuntu / macOS\n(venv)$> ${s.iC.toLowerCase()}_vis /path/to/config.xlsx`,t=()=>(0,r.jsx)(i.Z,{language:"bash",children:d})},7521:(e,n,o)=>{o.d(n,{J:()=>d});var s=o(9903),i=o(9968),r=o(1527);const d=()=>(0,r.jsxs)(i.w,{children:[s.iC.toLowerCase(),"_vis"]})},3110:(e,n,o)=>{o.d(n,{I:()=>d});var s=o(9903),i=o(9968),r=o(1527);const d=()=>(0,r.jsxs)(i.w,{children:[s.iC.toLowerCase(),"_viz"]})},8293:(e,n,o)=>{o.d(n,{q:()=>s});const s="11.9.0"},3883:(e,n,o)=>{o.d(n,{Z:()=>t,a:()=>d});var s=o(959);const i={},r=s.createContext(i);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);