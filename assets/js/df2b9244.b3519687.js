"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[38712],{18772:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var i=s(86070),t=s(25710),o=s(22672),r=s(30758);const a={sidebar_position:4},l="\ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f Visualisation setup",p={id:"developers/visualisation-setup/index",title:"\ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f Visualisation setup",description:"This parts does not explain module bundling with  Electron.",source:"@site/versioned_docs/version-13.2.5/developers/visualisation-setup/index.mdx",sourceDirName:"developers/visualisation-setup",slug:"/developers/visualisation-setup/",permalink:"/docs/13.2.5/developers/visualisation-setup/",draft:!1,unlisted:!1,editUrl:"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-13.2.5/developers/visualisation-setup/index.mdx",tags:[],version:"13.2.5",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\ud83e\uddee Processing setup",permalink:"/docs/13.2.5/developers/processing-setup/"},next:{title:"\ud83e\udd14 FAQ",permalink:"/docs/13.2.5/FAQ/"}},d={},u=[{value:"Setup",id:"setup",level:2},{value:"Front file structure",id:"front-file-structure",level:2}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\ufe0f\ufe0f-visualisation-setup",children:"\ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f Visualisation setup"}),"\n",(0,i.jsx)(r.Fragment,{children:(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["This parts does not explain module bundling with ",(0,i.jsx)(o.S3,{})," Electron.\nIt provides a basic setup to work with Front and Audio services."]})})}),"\n",(0,i.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Navigate to source root directory\ncd sound-scape-explorer\n\n# Install audio service\npnpm install:audio\n\n# Install front service\npnpm install:front\n\n# ---\n# In 2 distinct terminals\n# ---\n\n# run\npnpm audio $(which ffmpeg) $(which ffprobe) /path/to/audio/folder\n\n# and\npnpm front\n\n# audio service is available at localhost:5531\n# front service is available at localhost:5530\n"})}),"\n",(0,i.jsx)(n.h2,{id:"front-file-structure",children:"Front file structure"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"sound-scape-explorer/front/\n\u251c\u2500\u2500 public/ --\x3e Static files\n\u251c\u2500\u2500 src/\n\u2502   \u251c\u2500\u2500 common/\n\u2502   \u251c\u2500\u2500 components/\n\u2502   \u251c\u2500\u2500 hooks/\n\u2502   \u251c\u2500\u2500 pages/\n\u2502   \u251c\u2500\u2500 storage/\n\u2502   \u251c\u2500\u2500 utils/\n\u2502   \u251c\u2500\u2500 workers/\n\u2502   \u251c\u2500\u2500 App.vue --\x3e Entry component\n\u2502   \u2514\u2500\u2500 main.ts --\x3e Entry point\n\u2514\u2500\u2500 package.json\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);