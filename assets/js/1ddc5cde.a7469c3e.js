"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[1391],{9629:(e,n,o)=>{o.d(n,{ZP:()=>r});var i=o(1527),s=o(3883),t=o(8258);function d(e){const n={a:"a",admonition:"admonition",p:"p",...(0,s.a)(),...e.components};return(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsxs)(n.p,{children:["You must have a shell pointing to folder ",(0,i.jsx)(t.u,{})," and active python\nvirtual environment."]}),(0,i.jsxs)(n.p,{children:["Find related documentation in ",(0,i.jsx)(n.a,{href:"/docs/user-guides/running-campaigns",children:"running\ncampaigns"})]})]})}function r(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8070:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var i=o(1527),s=o(3883),t=o(9629),d=o(763),r=o(7521),a=o(3110);const c={sidebar_position:4,TODO:["Add small video to illustrate the drag and drop and the active `venv`"]},l="Visualisation user guide",u={id:"user-guides/visualisation-user-guide",title:"Visualisation user guide",description:"Compatibility",source:"@site/docs/user-guides/visualisation-user-guide.mdx",sourceDirName:"user-guides",slug:"/user-guides/visualisation-user-guide",permalink:"/docs/next/user-guides/visualisation-user-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/docs/user-guides/visualisation-user-guide.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,TODO:["Add small video to illustrate the drag and drop and the active `venv`"]},sidebar:"tutorialSidebar",previous:{title:"Quit",permalink:"/docs/next/user-guides/processing-user-guide/quit"},next:{title:"Additional Resources",permalink:"/docs/next/category/additional-resources"}},h={},p=[{value:"Compatibility",id:"compatibility",level:2},{value:"<VisCommandInline></VisCommandInline> command",id:"-command",level:2},{value:"<code>audio:front</code> command",id:"audiofront-command",level:2},{value:"<code>audio</code> command",id:"audio-command",level:2},{value:"<code>front</code> command",id:"front-command",level:2}];function m(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"visualisation-user-guide",children:"Visualisation user guide"}),"\n",(0,i.jsx)(t.ZP,{}),"\n",(0,i.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,i.jsx)(n.p,{children:"While the web app is compatible with most browsers, we experienced random\nissues with Firefox on Windows 11 and Safari on macOS 14. Thus, we\nrecommend using Chrome."}),"\n",(0,i.jsxs)(n.h2,{id:"-command",children:[(0,i.jsx)(r.J,{})," command"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r.J,{})," is only available if you have installed the ",(0,i.jsx)(n.code,{children:"Processing"}),"\nmodule."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This is the quickest command to start both ",(0,i.jsx)(n.code,{children:"Audio"})," and ",(0,i.jsx)(n.code,{children:"Front"})," modules."]}),"\n",(0,i.jsxs)(n.p,{children:["On an active ",(0,i.jsx)(n.code,{children:"venv"})," shell window, type the following to start both services\n(replace the path to your configuration file by drag and dropping the file\nExcel icon into your shell):"]}),"\n",(0,i.jsx)(d.c,{}),"\n",(0,i.jsxs)(n.p,{children:["After pressing ",(0,i.jsx)(n.code,{children:"<Enter>"}),", both modules will start and your default browser will\nopen."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Note"})}),"\n",(0,i.jsxs)(n.p,{children:["You can also use ",(0,i.jsx)(a.I,{})," or ",(0,i.jsx)(n.code,{children:"viz"})," as aliases to the ",(0,i.jsx)(r.J,{})," command."]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"audiofront-command",children:[(0,i.jsx)(n.code,{children:"audio:front"})," command"]}),"\n",(0,i.jsxs)(n.p,{children:["You can serve both ",(0,i.jsx)(n.code,{children:"Front"})," and ",(0,i.jsx)(n.code,{children:"Audio"})," modules at the same time"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Windows\npnpm audio:front:windows Z:\\audio_folder_example\n\n# Ubuntu / macOS\npnpm audio:front relative/or/absolute/path/to/audio/folder\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"audio-command",children:[(0,i.jsx)(n.code,{children:"audio"})," command"]}),"\n",(0,i.jsxs)(n.p,{children:["Serve ",(0,i.jsx)(n.code,{children:"Audio"})," module on port ",(0,i.jsx)(n.a,{href:"http://localhost:5531",children:"5531"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm audio -- relative/or/absolute/path/to/audio/folder\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"front-command",children:[(0,i.jsx)(n.code,{children:"front"})," command"]}),"\n",(0,i.jsxs)(n.p,{children:["Serve ",(0,i.jsx)(n.code,{children:"Front"})," module on port ",(0,i.jsx)(n.a,{href:"http://localhost:5530",children:"5530"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm front\n"})})]})}function x(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},9903:(e,n,o)=>{o.d(n,{$p:()=>t,PB:()=>s,i6:()=>d,iC:()=>i});const i="SSE",s="SoundScapeExplorer",t="sound-scape-explorer-VERSION",d="https://discord.gg/eRsQPDBeXg"},8258:(e,n,o)=>{o.d(n,{u:()=>d});var i=o(9903),s=o(9968),t=o(1527);const d=()=>(0,t.jsx)(s.w,{children:i.$p})},1423:(e,n,o)=>{o.d(n,{d:()=>t});var i=o(7333),s=o(1527);function t(e){let{code:n,language:o}=e;return(0,s.jsx)(i.y$,{theme:i.np.github,code:n,language:o,children:e=>{let{style:n,tokens:o,getTokenProps:i}=e;return(0,s.jsx)("pre",{style:n,children:o.map(((e,n)=>(0,s.jsx)("div",{children:e.map(((e,n)=>(0,s.jsx)("span",{...i({token:e})},n)))},n)))})}})}},9968:(e,n,o)=>{o.d(n,{w:()=>s});var i=o(1527);const s=e=>{let{children:n}=e;return(0,i.jsx)("code",{children:n})}},763:(e,n,o)=>{o.d(n,{c:()=>r});var i=o(9903),s=o(1423),t=o(1527);const d=`# Windows\n${i.iC.toLowerCase()}_vis C:\\path\\to\\config.xlsx\n\n# Ubuntu / macOS\n(venv)$> ${i.iC.toLowerCase()}_vis /path/to/config.xlsx`,r=()=>(0,t.jsx)(s.d,{language:"bash",code:d})},7521:(e,n,o)=>{o.d(n,{J:()=>d});var i=o(9903),s=o(9968),t=o(1527);const d=()=>(0,t.jsxs)(s.w,{children:[i.iC.toLowerCase(),"_vis"]})},3110:(e,n,o)=>{o.d(n,{I:()=>d});var i=o(9903),s=o(9968),t=o(1527);const d=()=>(0,t.jsxs)(s.w,{children:[i.iC.toLowerCase(),"_viz"]})},3883:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>d});var i=o(959);const s={},t=i.createContext(s);function d(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);