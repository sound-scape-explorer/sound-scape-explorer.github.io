"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[88467],{74845:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>u,contentTitle:()=>a,default:()=>g,frontMatter:()=>d,metadata:()=>p,toc:()=>h});var i=r(13274),n=r(99128),o=r(92418),t=r(32546),c=r(79474),l=r(42047);const d={sidebar_position:2},a="\ud83d\udcc1 Get codebase",p={id:"developers/get-codebase/index",title:"\ud83d\udcc1 Get codebase",description:"\ud83d\udce5 Download zip",source:"@site/versioned_docs/version-13.2.0/developers/get-codebase/index.mdx",sourceDirName:"developers/get-codebase",slug:"/developers/get-codebase/",permalink:"/docs/13.2.0/developers/get-codebase/",draft:!1,unlisted:!1,editUrl:"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-13.2.0/developers/get-codebase/index.mdx",tags:[],version:"13.2.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udccb Requirements",permalink:"/docs/13.2.0/developers/requirements/"},next:{title:"\ud83e\uddee Processing setup",permalink:"/docs/13.2.0/developers/processing-setup/"}},u={},h=[{value:"\ud83d\udce5 Download zip",id:"-download-zip",level:2},{value:"<GithubIcon></GithubIcon> Git clone",id:"-git-clone",level:2},{value:"File structure",id:"file-structure",level:2},{value:"Setup",id:"setup",level:2}];function x(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"-get-codebase",children:"\ud83d\udcc1 Get codebase"}),"\n",(0,i.jsx)(s.h2,{id:"-download-zip",children:"\ud83d\udce5 Download zip"}),"\n",(0,i.jsx)(c.Fragment,{children:(0,i.jsx)(t.A,{version:l.x,size:"125 MB"})}),"\n",(0,i.jsx)(c.Fragment,{children:(0,i.jsxs)(s.h2,{id:"-git-clone",children:[(0,i.jsx)(o.Nb,{})," Git clone"]})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"# with HTTPS\ngit clone https://github.com/sound-scape-explorer/sound-scape-explorer.git\n\n# with SSH\ngit clone git@github.com:sound-scape-explorer/sound-scape-explorer.git\n"})}),"\n",(0,i.jsx)(s.h2,{id:"file-structure",children:"File structure"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-txt",children:"sound-scape-explorer/\n\u251c\u2500\u2500 assets/ --\x3e Icons\n\u251c\u2500\u2500 audio/ --\x3e Audio service\n\u251c\u2500\u2500 bin/ --\x3e Shell scripts\n\u251c\u2500\u2500 examples/ --\x3e Campaigns\n\u251c\u2500\u2500 front/ --\x3e Front service\n\u251c\u2500\u2500 processing/ --\x3e Processing module\n\u251c\u2500\u2500 visualisation/ --\x3e Visualisation module (Front + Audio)\n\u251c\u2500\u2500 CHANGELOG.md --\x3e Commit history\n\u2514\u2500\u2500 package.json\n"})}),"\n",(0,i.jsx)(s.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsx)(s.p,{children:"Please refer to the following sections for setting up specific modules:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\ud83e\uddee ",(0,i.jsx)(s.a,{href:"../processing-setup/",children:"Processing setup"})]}),"\n",(0,i.jsxs)(s.li,{children:["\ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f ",(0,i.jsx)(s.a,{href:"../visualisation-setup/",children:"Visualisation setup"})]}),"\n"]})]})}function g(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},38037:(e,s,r)=>{r.d(s,{$d:()=>n,C3:()=>i,UP:()=>c,gX:()=>o,z9:()=>t});const i="SSE",n="SoundScapeExplorer",o="sound-scape-explorer-VERSION",t="https://discord.gg/eRsQPDBeXg",c="https://github.com/sound-scape-explorer/sound-scape-explorer/discussions"},3220:(e,s,r)=>{r.d(s,{W:()=>o});var i=r(38037),n=r(79474);function o(e){let{version:s,isCse:r=!1}=e;return{directory:(0,n.useMemo)((()=>{let e=i.gX;return s&&r?e="coral-sound-explorer-VERSION".replace("VERSION",s):s&&(e=i.gX.replace("VERSION",s)),e}),[s])}}},87805:(e,s,r)=>{r.d(s,{W:()=>o});const i="size_Ijwc";var n=r(13274);const o=e=>{let{size:s}=e;return(0,n.jsx)("span",{className:i,children:s})}},32546:(e,s,r)=>{r.d(s,{A:()=>t});var i=r(3220),n=r(87805),o=r(13274);const t=e=>{let{version:s,size:r,isCse:t=!1}=e;const{directory:c}=(0,i.W)({version:s,isCse:t});return t?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("a",{href:`https://github.com/sound-scape-explorer/coral-sound-explorer/archive/refs/tags/v${s}.zip`,target:"_blank",children:[c,".zip"]})," ",r&&(0,o.jsx)(n.W,{size:r})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("a",{href:`https://github.com/sound-scape-explorer/sound-scape-explorer/archive/refs/tags/v${s}.zip`,target:"_blank",children:[c,".zip"]})," ",r&&(0,o.jsx)(n.W,{size:r})]})}},42047:(e,s,r)=>{r.d(s,{x:()=>i});const i="13.2.0"}}]);