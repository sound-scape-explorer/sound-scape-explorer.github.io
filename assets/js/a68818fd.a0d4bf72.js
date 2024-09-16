"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[23383],{77752:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>u,contentTitle:()=>a,default:()=>g,frontMatter:()=>d,metadata:()=>p,toc:()=>h});var r=i(86070),n=i(25710),o=i(22672),t=i(45352),l=i(30758),c=i(54762);const d={sidebar_position:2},a="\ud83d\udcc1 Get codebase",p={id:"developers/get-codebase/index",title:"\ud83d\udcc1 Get codebase",description:"\ud83d\udce5 Download zip",source:"@site/versioned_docs/version-13.2.1/developers/get-codebase/index.mdx",sourceDirName:"developers/get-codebase",slug:"/developers/get-codebase/",permalink:"/docs/13.2.1/developers/get-codebase/",draft:!1,unlisted:!1,editUrl:"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-13.2.1/developers/get-codebase/index.mdx",tags:[],version:"13.2.1",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udccb Requirements",permalink:"/docs/13.2.1/developers/requirements/"},next:{title:"\ud83e\uddee Processing setup",permalink:"/docs/13.2.1/developers/processing-setup/"}},u={},h=[{value:"\ud83d\udce5 Download zip",id:"-download-zip",level:2},{value:"<GithubIcon></GithubIcon> Git clone",id:"-git-clone",level:2},{value:"File structure",id:"file-structure",level:2},{value:"Setup",id:"setup",level:2}];function x(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"-get-codebase",children:"\ud83d\udcc1 Get codebase"})}),"\n",(0,r.jsx)(s.h2,{id:"-download-zip",children:"\ud83d\udce5 Download zip"}),"\n",(0,r.jsx)(l.Fragment,{children:(0,r.jsx)(t.A,{version:c.x,size:"125 MB"})}),"\n",(0,r.jsx)(l.Fragment,{children:(0,r.jsxs)(s.h2,{id:"-git-clone",children:[(0,r.jsx)(o.Nb,{})," Git clone"]})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"# with HTTPS\ngit clone https://github.com/sound-scape-explorer/sound-scape-explorer.git\n\n# with SSH\ngit clone git@github.com:sound-scape-explorer/sound-scape-explorer.git\n"})}),"\n",(0,r.jsx)(s.h2,{id:"file-structure",children:"File structure"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-txt",children:"sound-scape-explorer/\n\u251c\u2500\u2500 assets/ --\x3e Icons\n\u251c\u2500\u2500 audio/ --\x3e Audio service\n\u251c\u2500\u2500 bin/ --\x3e Shell scripts\n\u251c\u2500\u2500 examples/ --\x3e Campaigns\n\u251c\u2500\u2500 front/ --\x3e Front service\n\u251c\u2500\u2500 processing/ --\x3e Processing module\n\u251c\u2500\u2500 visualisation/ --\x3e Visualisation module (Front + Audio)\n\u251c\u2500\u2500 CHANGELOG.md --\x3e Commit history\n\u2514\u2500\u2500 package.json\n"})}),"\n",(0,r.jsx)(s.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsx)(s.p,{children:"Please refer to the following sections for setting up specific modules:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\ud83e\uddee ",(0,r.jsx)(s.a,{href:"../processing-setup/",children:"Processing setup"})]}),"\n",(0,r.jsxs)(s.li,{children:["\ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f ",(0,r.jsx)(s.a,{href:"../visualisation-setup/",children:"Visualisation setup"})]}),"\n"]})]})}function g(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},2702:(e,s,i)=>{i.d(s,{W:()=>o});var r=i(41251),n=i(30758);function o(e){let{version:s,isCse:i=!1}=e;return{directory:(0,n.useMemo)((()=>{let e=r.gX;return s&&i?e="coral-sound-explorer-VERSION".replace("VERSION",s):s&&(e=r.gX.replace("VERSION",s)),e}),[s])}}},59927:(e,s,i)=>{i.d(s,{W:()=>o});const r="size_Ijwc";var n=i(86070);const o=e=>{let{size:s}=e;return(0,n.jsx)("span",{className:r,children:s})}},45352:(e,s,i)=>{i.d(s,{A:()=>t});var r=i(2702),n=i(59927),o=i(86070);const t=e=>{let{version:s,size:i,isCse:t=!1}=e;const{directory:l}=(0,r.W)({version:s,isCse:t});return t?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("a",{href:`https://github.com/sound-scape-explorer/coral-sound-explorer/archive/refs/tags/v${s}.zip`,target:"_blank",children:[l,".zip"]})," ",i&&(0,o.jsx)(n.W,{size:i})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("a",{href:`https://github.com/sound-scape-explorer/sound-scape-explorer/archive/refs/tags/v${s}.zip`,target:"_blank",children:[l,".zip"]})," ",i&&(0,o.jsx)(n.W,{size:i})]})}},54762:(e,s,i)=>{i.d(s,{F:()=>n,x:()=>r});const r="13.2.1",n={windows:"246 MB",debian:"151 MB",macos:"183 MB"}}}]);