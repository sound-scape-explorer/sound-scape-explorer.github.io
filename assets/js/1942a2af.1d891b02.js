"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[66499],{53431:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>h,contentTitle:()=>u,default:()=>v,frontMatter:()=>p,metadata:()=>i,toc:()=>x});const i=JSON.parse('{"id":"developers/get-codebase/index","title":"\ud83d\udcc1 Get codebase","description":"<Title","source":"@site/versioned_docs/version-13.3.0/developers/get-codebase/index.mdx","sourceDirName":"developers/get-codebase","slug":"/developers/get-codebase/","permalink":"/docs/13.3.0/developers/get-codebase/","draft":false,"unlisted":false,"editUrl":"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-13.3.0/developers/get-codebase/index.mdx","tags":[],"version":"13.3.0","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udccb Requirements","permalink":"/docs/13.3.0/developers/requirements/"},"next":{"title":"\ud83e\uddee Processing setup","permalink":"/docs/13.3.0/developers/processing-setup/"}}');var n=r(86070),t=r(15658),o=r(65988),l=r(65809),c=r(28076),d=r(30758),a=r(88325);const p={sidebar_position:2},u="\ud83d\udcc1 Get codebase",h={},x=[{value:"\ud83d\udce5 Download zip",id:"-download-zip",level:2},{value:"<GithubIcon></GithubIcon> Git clone",id:"-git-clone",level:2},{value:"File structure",id:"file-structure",level:2},{value:"Setup",id:"setup",level:2}];function g(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"-get-codebase",children:"\ud83d\udcc1 Get codebase"})}),"\n",(0,n.jsx)(c.h,{pre:["\ud83d\udc69\u200d\ud83d\udcbb Developers"],title:"\ud83d\udcc1 Get codebase",version:a.x}),"\n",(0,n.jsx)(s.h2,{id:"-download-zip",children:"\ud83d\udce5 Download zip"}),"\n",(0,n.jsx)(d.Fragment,{children:(0,n.jsx)(l.A,{version:a.x,size:"125 MB"})}),"\n",(0,n.jsx)(d.Fragment,{children:(0,n.jsxs)(s.h2,{id:"-git-clone",children:[(0,n.jsx)(o.Nb,{})," Git clone"]})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"# with HTTPS\ngit clone https://github.com/sound-scape-explorer/sound-scape-explorer.git\n\n# with SSH\ngit clone git@github.com:sound-scape-explorer/sound-scape-explorer.git\n"})}),"\n",(0,n.jsx)(s.h2,{id:"file-structure",children:"File structure"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-txt",children:"sound-scape-explorer/\n\u251c\u2500\u2500 assets/ --\x3e Icons\n\u251c\u2500\u2500 audio/ --\x3e Audio service\n\u251c\u2500\u2500 bin/ --\x3e Shell scripts\n\u251c\u2500\u2500 examples/ --\x3e Campaigns\n\u251c\u2500\u2500 front/ --\x3e Front service\n\u251c\u2500\u2500 processing/ --\x3e Processing module\n\u251c\u2500\u2500 visualisation/ --\x3e Visualisation module (Front + Audio)\n\u251c\u2500\u2500 CHANGELOG.md --\x3e Commit history\n\u2514\u2500\u2500 package.json\n"})}),"\n",(0,n.jsx)(s.h2,{id:"setup",children:"Setup"}),"\n",(0,n.jsx)(s.p,{children:"Please refer to the following sections for setting up specific modules:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\ud83e\uddee ",(0,n.jsx)(s.a,{href:"../processing-setup/",children:"Processing setup"})]}),"\n",(0,n.jsxs)(s.li,{children:["\ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f ",(0,n.jsx)(s.a,{href:"../visualisation-setup/",children:"Visualisation setup"})]}),"\n"]})]})}function v(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},74063:(e,s,r)=>{r.d(s,{W:()=>t});var i=r(35592),n=r(30758);function t(e){let{version:s,isCse:r=!1}=e;return{directory:(0,n.useMemo)((()=>{let e=i.gX;return s&&r?e="coral-sound-explorer-VERSION".replace("VERSION",s):s&&(e=i.gX.replace("VERSION",s)),e}),[s])}}},64484:(e,s,r)=>{r.d(s,{W:()=>t});const i="size_Ijwc";var n=r(86070);const t=e=>{let{size:s}=e;return(0,n.jsx)("span",{className:i,children:s})}},65809:(e,s,r)=>{r.d(s,{A:()=>o});var i=r(74063),n=r(64484),t=r(86070);const o=e=>{let{version:s,size:r,isCse:o=!1}=e;const{directory:l}=(0,i.W)({version:s,isCse:o});return o?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("a",{href:`https://github.com/sound-scape-explorer/coral-sound-explorer/archive/refs/tags/v${s}.zip`,target:"_blank",children:[l,".zip"]})," ",r&&(0,t.jsx)(n.W,{size:r})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("a",{href:`https://github.com/sound-scape-explorer/sound-scape-explorer/archive/refs/tags/v${s}.zip`,target:"_blank",children:[l,".zip"]})," ",r&&(0,t.jsx)(n.W,{size:r})]})}},28076:(e,s,r)=>{r.d(s,{h:()=>c});var i=r(68709),n=r(35592),t=r(30758),o=r(86070);const l=e=>`${e} | `,c=e=>{let{title:s,pre:r,version:c}=e;const d=(0,t.useMemo)((()=>{let e="";if(e+=s,r)for(const s of r)e=l(e),e+=s;return c?(e=l(e),e+=`${n.C3} ${c}`):(e=l(e),e+=n.$d),e}),[]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i.A,{children:(0,o.jsx)("title",{children:d})})})}},88325:(e,s,r)=>{r.d(s,{F:()=>n,x:()=>i});const i="13.3.0",n={windows:"246 MB",debian:"151 MB",macos:"183 MB"}}}]);