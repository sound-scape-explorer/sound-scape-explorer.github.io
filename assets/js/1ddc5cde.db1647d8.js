"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[1391],{9629:(e,n,o)=>{o.d(n,{ZP:()=>d});var s=o(1527),i=o(3883),r=o(8258);function t(e){const n={a:"a",blockquote:"blockquote",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Warning"})}),"\n",(0,s.jsxs)(n.p,{children:["You must have a shell pointing to folder ",(0,s.jsx)(r.u,{})," and active python\nvirtual environment."]}),"\n",(0,s.jsxs)(n.p,{children:["Find related documentation in ",(0,s.jsx)(n.a,{href:"/docs/user-guides/running-campaigns",children:"running\ncampaigns"})]}),"\n"]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},4894:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>g,contentTitle:()=>m,default:()=>f,frontMatter:()=>p,metadata:()=>x,toc:()=>j});var s=o(1527),i=o(3883),r=o(9629),t=o(9903),d=o(1423);const a=`# Windows\n${t.iC.toLowerCase()}_vis C:\\path\\to\\config.xlsx\n\n# Ubuntu / macOS\n(venv)$> ${t.iC.toLowerCase()}_vis /path/to/config.xlsx`,c=()=>(0,s.jsx)(d.d,{language:"bash",code:a});var l=o(9968);const u=()=>(0,s.jsxs)(l.w,{children:[t.iC.toLowerCase(),"_vis"]}),h=()=>(0,s.jsxs)(l.w,{children:[t.iC.toLowerCase(),"_viz"]}),p={sidebar_position:4,TODO:["Add small video to illustrate the drag and drop and the active `venv`"]},m="Visualisation user guide",x={id:"user-guides/visualisation-user-guide",title:"Visualisation user guide",description:"Compatibility",source:"@site/docs/user-guides/visualisation-user-guide.mdx",sourceDirName:"user-guides",slug:"/user-guides/visualisation-user-guide",permalink:"/docs/user-guides/visualisation-user-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/docs/user-guides/visualisation-user-guide.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,TODO:["Add small video to illustrate the drag and drop and the active `venv`"]},sidebar:"tutorialSidebar",previous:{title:"Processing user guide",permalink:"/docs/user-guides/processing-user-guide"},next:{title:"Additional Resources",permalink:"/docs/category/additional-resources"}},g={},j=[{value:"Compatibility",id:"compatibility",level:2},{value:"<VisCommandInline></VisCommandInline> command",id:"-command",level:2},{value:"<code>audio:front</code> command",id:"audiofront-command",level:2},{value:"<code>audio</code> command",id:"audio-command",level:2},{value:"<code>front</code> command",id:"front-command",level:2}];function v(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"visualisation-user-guide",children:"Visualisation user guide"}),"\n",(0,s.jsx)(r.ZP,{}),"\n",(0,s.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsx)(n.p,{children:"While the web app is compatible with most browsers, we experienced random\nissues with Firefox on Windows 11 and Safari on macOS Monterey. Thus, we\nrecommend using Chrome."}),"\n",(0,s.jsxs)(n.h2,{id:"-command",children:[(0,s.jsx)(u,{})," command"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(u,{})," is only available if you have installed the ",(0,s.jsx)(n.code,{children:"Processing"}),"\nmodule."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This is the quickest command to start both ",(0,s.jsx)(n.code,{children:"Audio"})," and ",(0,s.jsx)(n.code,{children:"Front"})," modules."]}),"\n",(0,s.jsxs)(n.p,{children:["On an active ",(0,s.jsx)(n.code,{children:"venv"})," shell window, type the following to start both services\n(replace the path to your configuration file by drag and dropping the file\nExcel icon into your shell):"]}),"\n",(0,s.jsx)(c,{}),"\n",(0,s.jsxs)(n.p,{children:["After pressing ",(0,s.jsx)(n.code,{children:"<Enter>"}),", both modules will start and your default browser will\nopen."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Note"})}),"\n",(0,s.jsxs)(n.p,{children:["You can also use ",(0,s.jsx)(h,{})," or ",(0,s.jsx)(n.code,{children:"viz"})," as aliases to the ",(0,s.jsx)(u,{})," command."]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"audiofront-command",children:[(0,s.jsx)(n.code,{children:"audio:front"})," command"]}),"\n",(0,s.jsxs)(n.p,{children:["You can serve both ",(0,s.jsx)(n.code,{children:"Front"})," and ",(0,s.jsx)(n.code,{children:"Audio"})," modules at the same time"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Windows\npnpm audio:front:windows Z:\\audio_folder_example\n\n# Ubuntu / macOS\npnpm audio:front relative/or/absolute/path/to/audio/folder\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"audio-command",children:[(0,s.jsx)(n.code,{children:"audio"})," command"]}),"\n",(0,s.jsxs)(n.p,{children:["Serve ",(0,s.jsx)(n.code,{children:"Audio"})," module on port ",(0,s.jsx)(n.a,{href:"http://localhost:5531",children:"5531"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm audio -- relative/or/absolute/path/to/audio/folder\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"front-command",children:[(0,s.jsx)(n.code,{children:"front"})," command"]}),"\n",(0,s.jsxs)(n.p,{children:["Serve ",(0,s.jsx)(n.code,{children:"Front"})," module on port ",(0,s.jsx)(n.a,{href:"http://localhost:5530",children:"5530"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm front\n"})})]})}function f(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(v,{...e})}):v(e)}},9903:(e,n,o)=>{o.d(n,{$p:()=>t,PB:()=>i,i6:()=>r,iC:()=>s});const s="SSE",i="SoundScapeExplorer",r="https://discord.gg/eRsQPDBeXg",t="sound-scape-explorer-VERSION"},8258:(e,n,o)=>{o.d(n,{u:()=>t});var s=o(9903),i=o(9968),r=o(1527);const t=()=>(0,r.jsx)(i.w,{children:s.$p})},1423:(e,n,o)=>{o.d(n,{d:()=>r});var s=o(7333),i=o(1527);function r(e){let{code:n,language:o}=e;return(0,i.jsx)(s.y$,{theme:s.np.github,code:n,language:o,children:e=>{let{style:n,tokens:o,getTokenProps:s}=e;return(0,i.jsx)("pre",{style:n,children:o.map(((e,n)=>(0,i.jsx)("div",{children:e.map(((e,n)=>(0,i.jsx)("span",{...s({token:e})},n)))},n)))})}})}},9968:(e,n,o)=>{o.d(n,{w:()=>i});var s=o(1527);const i=e=>{let{children:n}=e;return(0,s.jsx)("code",{children:n})}},3883:(e,n,o)=>{o.d(n,{Z:()=>d,a:()=>t});var s=o(959);const i={},r=s.createContext(i);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);