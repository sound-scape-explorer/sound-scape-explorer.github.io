"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[67427],{44170:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"developers/visualisation-setup/index","title":"\ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f Visualisation setup","description":"This parts does not explain module bundling with  Electron.","source":"@site/versioned_docs/version-13.2.4/developers/visualisation-setup/index.mdx","sourceDirName":"developers/visualisation-setup","slug":"/developers/visualisation-setup/","permalink":"/docs/13.2.4/developers/visualisation-setup/","draft":false,"unlisted":false,"editUrl":"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-13.2.4/developers/visualisation-setup/index.mdx","tags":[],"version":"13.2.4","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"\ud83e\uddee Processing setup","permalink":"/docs/13.2.4/developers/processing-setup/"},"next":{"title":"\ud83e\udd14 FAQ","permalink":"/docs/13.2.4/FAQ/"}}');var t=s(86070),o=s(15658),r=s(38540),a=s(30758);const l={sidebar_position:4},d="\ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f Visualisation setup",p={},u=[{value:"Setup",id:"setup",level:2},{value:"Front file structure",id:"front-file-structure",level:2}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\ufe0f\ufe0f-visualisation-setup",children:"\ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f Visualisation setup"})}),"\n",(0,t.jsx)(a.Fragment,{children:(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["This parts does not explain module bundling with ",(0,t.jsx)(r.S3,{})," Electron.\nIt provides a basic setup to work with Front and Audio services."]})})}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Navigate to source root directory\ncd sound-scape-explorer\n\n# Install audio service\npnpm install:audio\n\n# Install front service\npnpm install:front\n\n# ---\n# In 2 distinct terminals\n# ---\n\n# run\npnpm audio $(which ffmpeg) $(which ffprobe) /path/to/audio/folder\n\n# and\npnpm front\n\n# audio service is available at localhost:5531\n# front service is available at localhost:5530\n"})}),"\n",(0,t.jsx)(n.h2,{id:"front-file-structure",children:"Front file structure"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"sound-scape-explorer/front/\n\u251c\u2500\u2500 public/ --\x3e Static files\n\u251c\u2500\u2500 src/\n\u2502   \u251c\u2500\u2500 common/\n\u2502   \u251c\u2500\u2500 components/\n\u2502   \u251c\u2500\u2500 hooks/\n\u2502   \u251c\u2500\u2500 pages/\n\u2502   \u251c\u2500\u2500 storage/\n\u2502   \u251c\u2500\u2500 utils/\n\u2502   \u251c\u2500\u2500 workers/\n\u2502   \u251c\u2500\u2500 App.vue --\x3e Entry component\n\u2502   \u2514\u2500\u2500 main.ts --\x3e Entry point\n\u2514\u2500\u2500 package.json\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}}}]);