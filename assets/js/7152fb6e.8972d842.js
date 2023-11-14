"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[1882],{9629:(e,n,o)=>{o.d(n,{ZP:()=>t});var s=o(1527),i=o(3883),d=o(8258);function r(e){const n={a:"a",admonition:"admonition",p:"p",...(0,i.a)(),...e.components};return(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsxs)(n.p,{children:["You must have a shell pointing to folder ",(0,s.jsx)(d.u,{})," and active python\nvirtual environment."]}),(0,s.jsxs)(n.p,{children:["Find related documentation in ",(0,s.jsx)(n.a,{href:"/docs/user-guides/running-campaigns",children:"running\ncampaigns"})]})]})}function t(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},3151:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var s=o(1527),i=o(3883),d=o(9629),r=o(763),t=o(7521),a=o(3110);const c={sidebar_position:4,TODO:["Add small video to illustrate the drag and drop and the active `venv`"]},l="Visualisation user guide",u={id:"user-guides/visualisation-user-guide",title:"Visualisation user guide",description:"Compatibility",source:"@site/versioned_docs/version-11.9.0/user-guides/visualisation-user-guide.mdx",sourceDirName:"user-guides",slug:"/user-guides/visualisation-user-guide",permalink:"/docs/user-guides/visualisation-user-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-11.9.0/user-guides/visualisation-user-guide.mdx",tags:[],version:"11.9.0",sidebarPosition:4,frontMatter:{sidebar_position:4,TODO:["Add small video to illustrate the drag and drop and the active `venv`"]},sidebar:"tutorialSidebar",previous:{title:"Processing user guide",permalink:"/docs/user-guides/processing-user-guide"},next:{title:"Additional Resources",permalink:"/docs/category/additional-resources"}},h={},p=[{value:"Compatibility",id:"compatibility",level:2},{value:"<VisCommandInline></VisCommandInline> command",id:"-command",level:2},{value:"<code>audio:front</code> command",id:"audiofront-command",level:2},{value:"<code>audio</code> command",id:"audio-command",level:2},{value:"<code>front</code> command",id:"front-command",level:2}];function m(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"visualisation-user-guide",children:"Visualisation user guide"}),"\n",(0,s.jsx)(d.ZP,{}),"\n",(0,s.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsx)(n.p,{children:"While the web app is compatible with most browsers, we experienced random\nissues with Firefox on Windows 11 and Safari on macOS 14. Thus, we\nrecommend using Chrome."}),"\n",(0,s.jsxs)(n.h2,{id:"-command",children:[(0,s.jsx)(t.J,{})," command"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(t.J,{})," is only available if you have installed the ",(0,s.jsx)(n.code,{children:"Processing"}),"\nmodule."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This is the quickest command to start both ",(0,s.jsx)(n.code,{children:"Audio"})," and ",(0,s.jsx)(n.code,{children:"Front"})," modules."]}),"\n",(0,s.jsxs)(n.p,{children:["On an active ",(0,s.jsx)(n.code,{children:"venv"})," shell window, type the following to start both services\n(replace the path to your configuration file by drag and dropping the file\nExcel icon into your shell):"]}),"\n",(0,s.jsx)(r.c,{}),"\n",(0,s.jsxs)(n.p,{children:["After pressing ",(0,s.jsx)(n.code,{children:"<Enter>"}),", both modules will start and your default browser will\nopen."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Note"})}),"\n",(0,s.jsxs)(n.p,{children:["You can also use ",(0,s.jsx)(a.I,{})," or ",(0,s.jsx)(n.code,{children:"viz"})," as aliases to the ",(0,s.jsx)(t.J,{})," command."]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"audiofront-command",children:[(0,s.jsx)(n.code,{children:"audio:front"})," command"]}),"\n",(0,s.jsxs)(n.p,{children:["You can serve both ",(0,s.jsx)(n.code,{children:"Front"})," and ",(0,s.jsx)(n.code,{children:"Audio"})," modules at the same time"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Windows\npnpm audio:front:windows Z:\\audio_folder_example\n\n# Ubuntu / macOS\npnpm audio:front relative/or/absolute/path/to/audio/folder\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"audio-command",children:[(0,s.jsx)(n.code,{children:"audio"})," command"]}),"\n",(0,s.jsxs)(n.p,{children:["Serve ",(0,s.jsx)(n.code,{children:"Audio"})," module on port ",(0,s.jsx)(n.a,{href:"http://localhost:5531",children:"5531"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm audio -- relative/or/absolute/path/to/audio/folder\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"front-command",children:[(0,s.jsx)(n.code,{children:"front"})," command"]}),"\n",(0,s.jsxs)(n.p,{children:["Serve ",(0,s.jsx)(n.code,{children:"Front"})," module on port ",(0,s.jsx)(n.a,{href:"http://localhost:5530",children:"5530"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm front\n"})})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},9903:(e,n,o)=>{o.d(n,{$p:()=>r,PB:()=>i,i6:()=>d,iC:()=>s});const s="SSE",i="SoundScapeExplorer",d="https://discord.gg/eRsQPDBeXg",r="sound-scape-explorer-VERSION"},8258:(e,n,o)=>{o.d(n,{u:()=>r});var s=o(9903),i=o(9968),d=o(1527);const r=()=>(0,d.jsx)(i.w,{children:s.$p})},1423:(e,n,o)=>{o.d(n,{d:()=>d});var s=o(7333),i=o(1527);function d(e){let{code:n,language:o}=e;return(0,i.jsx)(s.y$,{theme:s.np.github,code:n,language:o,children:e=>{let{style:n,tokens:o,getTokenProps:s}=e;return(0,i.jsx)("pre",{style:n,children:o.map(((e,n)=>(0,i.jsx)("div",{children:e.map(((e,n)=>(0,i.jsx)("span",{...s({token:e})},n)))},n)))})}})}},9968:(e,n,o)=>{o.d(n,{w:()=>i});var s=o(1527);const i=e=>{let{children:n}=e;return(0,s.jsx)("code",{children:n})}},763:(e,n,o)=>{o.d(n,{c:()=>t});var s=o(9903),i=o(1423),d=o(1527);const r=`# Windows\n${s.iC.toLowerCase()}_vis C:\\path\\to\\config.xlsx\n\n# Ubuntu / macOS\n(venv)$> ${s.iC.toLowerCase()}_vis /path/to/config.xlsx`,t=()=>(0,d.jsx)(i.d,{language:"bash",code:r})},7521:(e,n,o)=>{o.d(n,{J:()=>r});var s=o(9903),i=o(9968),d=o(1527);const r=()=>(0,d.jsxs)(i.w,{children:[s.iC.toLowerCase(),"_vis"]})},3110:(e,n,o)=>{o.d(n,{I:()=>r});var s=o(9903),i=o(9968),d=o(1527);const r=()=>(0,d.jsxs)(i.w,{children:[s.iC.toLowerCase(),"_viz"]})},3883:(e,n,o)=>{o.d(n,{Z:()=>t,a:()=>r});var s=o(959);const i={},d=s.createContext(i);function r(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);