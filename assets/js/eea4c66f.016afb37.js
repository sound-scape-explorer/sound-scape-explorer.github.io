"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[54077],{21517:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>u,default:()=>v,frontMatter:()=>p,metadata:()=>i,toc:()=>x});const i=JSON.parse('{"id":"developers/get-codebase/index","title":"\ud83d\udcc1 Get codebase","description":"<Title","source":"@site/versioned_docs/version-13.6.1/developers/get-codebase/index.mdx","sourceDirName":"developers/get-codebase","slug":"/developers/get-codebase/","permalink":"/docs/13.6.1/developers/get-codebase/","draft":false,"unlisted":false,"editUrl":"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-13.6.1/developers/get-codebase/index.mdx","tags":[],"version":"13.6.1","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udccb Requirements","permalink":"/docs/13.6.1/developers/requirements/"},"next":{"title":"\ud83e\uddee Processing setup","permalink":"/docs/13.6.1/developers/processing-setup/"}}');var r=n(86070),o=n(15658),t=n(65988),l=n(65809),d=n(28076),c=n(30758),a=n(71965);const p={sidebar_position:2},u="\ud83d\udcc1 Get codebase",h={},x=[{value:"\ud83d\udce5 Download zip",id:"-download-zip",level:2},{value:"<GithubIcon></GithubIcon> Git clone",id:"-git-clone",level:2},{value:"File structure",id:"file-structure",level:2},{value:"Setup",id:"setup",level:2}];function g(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"-get-codebase",children:"\ud83d\udcc1 Get codebase"})}),"\n",(0,r.jsx)(d.h,{pre:["\ud83d\udc69\u200d\ud83d\udcbb Developers"],title:"\ud83d\udcc1 Get codebase",version:a.x}),"\n",(0,r.jsx)(s.h2,{id:"-download-zip",children:"\ud83d\udce5 Download zip"}),"\n",(0,r.jsx)(c.Fragment,{children:(0,r.jsx)(l.A,{version:a.x,size:"125 MB"})}),"\n",(0,r.jsx)(c.Fragment,{children:(0,r.jsxs)(s.h2,{id:"-git-clone",children:[(0,r.jsx)(t.Nb,{})," Git clone"]})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"# with HTTPS\ngit clone https://github.com/sound-scape-explorer/sound-scape-explorer.git\n\n# with SSH\ngit clone git@github.com:sound-scape-explorer/sound-scape-explorer.git\n"})}),"\n",(0,r.jsx)(s.h2,{id:"file-structure",children:"File structure"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-txt",children:"sound-scape-explorer/\n\u251c\u2500\u2500 assets/ --\x3e Icons\n\u251c\u2500\u2500 audio/ --\x3e Audio service\n\u251c\u2500\u2500 bin/ --\x3e Shell scripts\n\u251c\u2500\u2500 examples/ --\x3e Campaigns\n\u251c\u2500\u2500 front/ --\x3e Front service\n\u251c\u2500\u2500 processing/ --\x3e Processing module\n\u251c\u2500\u2500 visualisation/ --\x3e Visualisation module (Front + Audio)\n\u251c\u2500\u2500 CHANGELOG.md --\x3e Commit history\n\u2514\u2500\u2500 package.json\n"})}),"\n",(0,r.jsx)(s.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsx)(s.p,{children:"Please refer to the following sections for setting up specific modules:"}),"\n",(0,r.jsxs)(s.admonition,{type:"tip",children:[(0,r.jsx)(s.p,{children:"Modules are independent."}),(0,r.jsx)(s.p,{children:"For instance, if you are not interested in \ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f Visualisation,\nyou should only set up \ud83e\uddee Processing."})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\ud83e\uddee ",(0,r.jsx)(s.a,{href:"../processing-setup/",children:"Processing setup"})]}),"\n",(0,r.jsxs)(s.li,{children:["\ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f ",(0,r.jsx)(s.a,{href:"../visualisation-setup/",children:"Visualisation setup"})]}),"\n"]})]})}function v(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},74063:(e,s,n)=>{n.d(s,{W:()=>o});var i=n(35592),r=n(30758);function o(e){let{version:s,isCse:n=!1}=e;return{directory:(0,r.useMemo)((()=>{let e=i.gX;return s&&n?e="coral-sound-explorer-VERSION".replace("VERSION",s):s&&(e=i.gX.replace("VERSION",s)),e}),[s])}}},64484:(e,s,n)=>{n.d(s,{W:()=>o});const i="size_Ijwc";var r=n(86070);const o=e=>{let{size:s}=e;return(0,r.jsx)("span",{className:i,children:s})}},65809:(e,s,n)=>{n.d(s,{A:()=>t});var i=n(74063),r=n(64484),o=n(86070);const t=e=>{let{version:s,size:n,isCse:t=!1}=e;const{directory:l}=(0,i.W)({version:s,isCse:t});return t?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("a",{href:`https://github.com/sound-scape-explorer/coral-sound-explorer/archive/refs/tags/v${s}.zip`,target:"_blank",children:[l,".zip"]})," ",n&&(0,o.jsx)(r.W,{size:n})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("a",{href:`https://github.com/sound-scape-explorer/sound-scape-explorer/archive/refs/tags/v${s}.zip`,target:"_blank",children:[l,".zip"]})," ",n&&(0,o.jsx)(r.W,{size:n})]})}},28076:(e,s,n)=>{n.d(s,{h:()=>d});var i=n(68709),r=n(35592),o=n(30758),t=n(86070);const l=e=>`${e} | `,d=e=>{let{title:s,pre:n,version:d}=e;const c=(0,o.useMemo)((()=>{let e="";if(e+=s,n)for(const s of n)e=l(e),e+=s;return d?(e=l(e),e+=`${r.C3} ${d}`):(e=l(e),e+=r.$d),e}),[]);return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(i.A,{children:(0,t.jsx)("title",{children:c})})})}},71965:(e,s,n)=>{n.d(s,{F:()=>r,x:()=>i});const i="13.6.1",r={windows:"246 MB",debian:"151 MB",macos:"183 MB"}}}]);