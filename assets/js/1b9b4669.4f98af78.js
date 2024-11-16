"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[97998],{42396:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>u,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>x});const i=JSON.parse('{"id":"developers/get-codebase/index","title":"\ud83d\udcc1 Get codebase","description":"<Title","source":"@site/docs/developers/get-codebase/index.mdx","sourceDirName":"developers/get-codebase","slug":"/developers/get-codebase/","permalink":"/docs/next/developers/get-codebase/","draft":false,"unlisted":false,"editUrl":"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/docs/developers/get-codebase/index.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udccb Requirements","permalink":"/docs/next/developers/requirements/"},"next":{"title":"\ud83e\uddee Processing setup","permalink":"/docs/next/developers/processing-setup/"}}');var r=n(86070),t=n(15658),o=n(65988),l=n(65809),c=n(28076),d=n(30758),a=n(36586);const p={sidebar_position:2},u="\ud83d\udcc1 Get codebase",h={},x=[{value:"\ud83d\udce5 Download zip",id:"-download-zip",level:2},{value:"<GithubIcon></GithubIcon> Git clone",id:"-git-clone",level:2},{value:"File structure",id:"file-structure",level:2},{value:"Setup",id:"setup",level:2}];function g(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"-get-codebase",children:"\ud83d\udcc1 Get codebase"})}),"\n",(0,r.jsx)(c.h,{pre:["\ud83d\udc69\u200d\ud83d\udcbb Developers"],title:"\ud83d\udcc1 Get codebase",version:a.x}),"\n",(0,r.jsx)(s.h2,{id:"-download-zip",children:"\ud83d\udce5 Download zip"}),"\n",(0,r.jsx)(d.Fragment,{children:(0,r.jsx)(l.A,{version:a.x,size:"125 MB"})}),"\n",(0,r.jsx)(d.Fragment,{children:(0,r.jsxs)(s.h2,{id:"-git-clone",children:[(0,r.jsx)(o.Nb,{})," Git clone"]})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"# with HTTPS\ngit clone https://github.com/sound-scape-explorer/sound-scape-explorer.git\n\n# with SSH\ngit clone git@github.com:sound-scape-explorer/sound-scape-explorer.git\n"})}),"\n",(0,r.jsx)(s.h2,{id:"file-structure",children:"File structure"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-txt",children:"sound-scape-explorer/\n\u251c\u2500\u2500 assets/ --\x3e Icons\n\u251c\u2500\u2500 audio/ --\x3e Audio service\n\u251c\u2500\u2500 bin/ --\x3e Shell scripts\n\u251c\u2500\u2500 examples/ --\x3e Campaigns\n\u251c\u2500\u2500 front/ --\x3e Front service\n\u251c\u2500\u2500 processing/ --\x3e Processing module\n\u251c\u2500\u2500 visualisation/ --\x3e Visualisation module (Front + Audio)\n\u251c\u2500\u2500 CHANGELOG.md --\x3e Commit history\n\u2514\u2500\u2500 package.json\n"})}),"\n",(0,r.jsx)(s.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsx)(s.p,{children:"Please refer to the following sections for setting up specific modules:"}),"\n",(0,r.jsxs)(s.admonition,{type:"tip",children:[(0,r.jsx)(s.p,{children:"Modules are independent."}),(0,r.jsx)(s.p,{children:"For instance, if you are not interested in \ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f Visualisation,\nyou should only set up \ud83e\uddee Processing."})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\ud83e\uddee ",(0,r.jsx)(s.a,{href:"../processing-setup/",children:"Processing setup"})]}),"\n",(0,r.jsxs)(s.li,{children:["\ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f ",(0,r.jsx)(s.a,{href:"../visualisation-setup/",children:"Visualisation setup"})]}),"\n"]})]})}function m(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},36586:(e,s,n)=>{n.d(s,{F:()=>r,x:()=>i});const i="13.9.0",r={windows:"246 MB",debian:"151 MB",macos:"183 MB"}},74063:(e,s,n)=>{n.d(s,{W:()=>t});var i=n(35592),r=n(30758);function t(e){let{version:s,isCse:n=!1}=e;return{directory:(0,r.useMemo)((()=>{let e=i.gX;return s&&n?e="coral-sound-explorer-VERSION".replace("VERSION",s):s&&(e=i.gX.replace("VERSION",s)),e}),[s])}}},64484:(e,s,n)=>{n.d(s,{W:()=>t});const i="size_Ijwc";var r=n(86070);const t=e=>{let{size:s}=e;return(0,r.jsx)("span",{className:i,children:s})}},65809:(e,s,n)=>{n.d(s,{A:()=>o});var i=n(74063),r=n(64484),t=n(86070);const o=e=>{let{version:s,size:n,isCse:o=!1}=e;const{directory:l}=(0,i.W)({version:s,isCse:o});return o?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("a",{href:`https://github.com/sound-scape-explorer/coral-sound-explorer/archive/refs/tags/v${s}.zip`,target:"_blank",children:[l,".zip"]})," ",n&&(0,t.jsx)(r.W,{size:n})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("a",{href:`https://github.com/sound-scape-explorer/sound-scape-explorer/archive/refs/tags/v${s}.zip`,target:"_blank",children:[l,".zip"]})," ",n&&(0,t.jsx)(r.W,{size:n})]})}},28076:(e,s,n)=>{n.d(s,{h:()=>c});var i=n(68709),r=n(35592),t=n(30758),o=n(86070);const l=e=>`${e} | `,c=e=>{let{title:s,pre:n,version:c}=e;const d=(0,t.useMemo)((()=>{let e="";if(e+=s,n)for(const s of n)e=l(e),e+=s;return c?(e=l(e),e+=`${r.C3} ${c}`):(e=l(e),e+=r.$d),e}),[]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i.A,{children:(0,o.jsx)("title",{children:d})})})}}}]);