"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[45217],{58385:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>d,metadata:()=>o,toc:()=>h});const o=JSON.parse('{"id":"developers/visualisation-setup/index","title":"\ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f Visualisation setup","description":"<Title","source":"@site/versioned_docs/version-13.9.0/developers/visualisation-setup/index.mdx","sourceDirName":"developers/visualisation-setup","slug":"/developers/visualisation-setup/","permalink":"/docs/13.9.0/developers/visualisation-setup/","draft":false,"unlisted":false,"editUrl":"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-13.9.0/developers/visualisation-setup/index.mdx","tags":[],"version":"13.9.0","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"\ud83e\uddee Processing setup","permalink":"/docs/13.9.0/developers/processing-setup/"}}');var t=s(86070),i=s(15658),r=s(65988),a=s(28076),l=s(30758),p=s(16359);const d={sidebar_position:4},c="\ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f Visualisation setup",u={},h=[{value:"Setup",id:"setup",level:2},{value:"Front file structure",id:"front-file-structure",level:2}];function f(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\ufe0f\ufe0f-visualisation-setup",children:"\ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f Visualisation setup"})}),"\n",(0,t.jsx)(a.h,{pre:["\ud83d\udc69\u200d\ud83d\udcbb Developers"],title:"\ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f Visualisation setup",version:p.x}),"\n",(0,t.jsx)(l.Fragment,{children:(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["This parts does not explain module bundling with ",(0,t.jsx)(r.S3,{})," Electron.\nIt provides a basic setup to work with Front and Audio services."]})})}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Navigate to source root directory\ncd sound-scape-explorer\n\n# Install audio service\npnpm install:audio\n\n# Install front service\npnpm install:front\n\n# ---\n# In 2 distinct terminals\n# ---\n\n# one for the front service localhost:5530\npnpm front\n\n# the other for audio service localhost:5531\n# examples for different systems below\n\n# unix\npnpm audio $(which ffmpeg) $(which ffprobe) /path/to/audio/folder\n\n# windows\npnpm audio C:\\path\\to\\ffmpeg.exe C:\\path\\to\\ffprobe.exe C:\\path\\to\\audio\\folder\n\n# windows example for ffmpeg installed through choco\npnpm audio C:\\ProgramData\\chocolatey\\lib\\ffmpeg\\tools\\ffmpeg\\bin\\ffmpeg.exe C:\\ProgramData\\chocolatey\\lib\\ffmpeg\\tools\\ffmpeg\\bin\\ffprobe.exe C:\\path\\to\\audio\n\n# front service is available at localhost:5530\n# audio service is available at localhost:5531\n"})}),"\n",(0,t.jsx)(n.h2,{id:"front-file-structure",children:"Front file structure"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"sound-scape-explorer/front/\n\u251c\u2500\u2500 public/ --\x3e Static files\n\u251c\u2500\u2500 src/\n\u2502   \u251c\u2500\u2500 common/\n\u2502   \u251c\u2500\u2500 components/\n\u2502   \u251c\u2500\u2500 hooks/\n\u2502   \u251c\u2500\u2500 pages/\n\u2502   \u251c\u2500\u2500 storage/\n\u2502   \u251c\u2500\u2500 utils/\n\u2502   \u251c\u2500\u2500 workers/\n\u2502   \u251c\u2500\u2500 App.vue --\x3e Entry component\n\u2502   \u2514\u2500\u2500 main.ts --\x3e Entry point\n\u2514\u2500\u2500 package.json\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},28076:(e,n,s)=>{s.d(n,{h:()=>l});var o=s(68709),t=s(35592),i=s(30758),r=s(86070);const a=e=>`${e} | `,l=e=>{let{title:n,pre:s,version:l}=e;const p=(0,i.useMemo)((()=>{let e="";if(e+=n,s)for(const n of s)e=a(e),e+=n;return l?(e=a(e),e+=`${t.C3} ${l}`):(e=a(e),e+=t.$d),e}),[]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o.A,{children:(0,r.jsx)("title",{children:p})})})}},16359:(e,n,s)=>{s.d(n,{F:()=>t,x:()=>o});const o="13.9.0",t={windows:"246 MB",debian:"151 MB",macos:"183 MB"}}}]);