"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[9766],{76923:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>p,metadata:()=>c,toc:()=>h});var o=n(86070),t=n(25710),i=n(22672),r=n(70107),a=n(30758),l=n(31873);const p={sidebar_position:4},d="\ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f Visualisation setup",c={id:"developers/visualisation-setup/index",title:"\ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f Visualisation setup",description:"<Title",source:"@site/versioned_docs/version-13.3.1/developers/visualisation-setup/index.mdx",sourceDirName:"developers/visualisation-setup",slug:"/developers/visualisation-setup/",permalink:"/docs/13.3.1/developers/visualisation-setup/",draft:!1,unlisted:!1,editUrl:"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-13.3.1/developers/visualisation-setup/index.mdx",tags:[],version:"13.3.1",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\ud83e\uddee Processing setup",permalink:"/docs/13.3.1/developers/processing-setup/"}},u={},h=[{value:"Setup",id:"setup",level:2},{value:"Front file structure",id:"front-file-structure",level:2}];function f(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"\ufe0f\ufe0f-visualisation-setup",children:"\ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f Visualisation setup"}),"\n",(0,o.jsx)(r.h,{pre:["\ud83d\udc69\u200d\ud83d\udcbb Developers"],title:"\ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f Visualisation setup",version:l.x}),"\n",(0,o.jsx)(a.Fragment,{children:(0,o.jsx)(s.admonition,{type:"warning",children:(0,o.jsxs)(s.p,{children:["This parts does not explain module bundling with ",(0,o.jsx)(i.S3,{})," Electron.\nIt provides a basic setup to work with Front and Audio services."]})})}),"\n",(0,o.jsx)(s.h2,{id:"setup",children:"Setup"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"# Navigate to source root directory\ncd sound-scape-explorer\n\n# Install audio service\npnpm install:audio\n\n# Install front service\npnpm install:front\n\n# ---\n# In 2 distinct terminals\n# ---\n\n# one for the front service localhost:5530\npnpm front\n\n# the other for audio service localhost:5531\n# examples for different systems below\n\n# unix\npnpm audio $(which ffmpeg) $(which ffprobe) /path/to/audio/folder\n\n# windows\npnpm audio C:\\path\\to\\ffmpeg.exe C:\\path\\to\\ffprobe.exe C:\\path\\to\\audio\\folder\n\n# windows example for ffmpeg installed through choco\npnpm audio C:\\ProgramData\\chocolatey\\lib\\ffmpeg\\tools\\ffmpeg\\bin\\ffmpeg.exe C:\\ProgramData\\chocolatey\\lib\\ffmpeg\\tools\\ffmpeg\\bin\\ffprobe.exe C:\\path\\to\\audio\n\n# front service is available at localhost:5530\n# audio service is available at localhost:5531\n"})}),"\n",(0,o.jsx)(s.h2,{id:"front-file-structure",children:"Front file structure"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-text",children:"sound-scape-explorer/front/\n\u251c\u2500\u2500 public/ --\x3e Static files\n\u251c\u2500\u2500 src/\n\u2502   \u251c\u2500\u2500 common/\n\u2502   \u251c\u2500\u2500 components/\n\u2502   \u251c\u2500\u2500 hooks/\n\u2502   \u251c\u2500\u2500 pages/\n\u2502   \u251c\u2500\u2500 storage/\n\u2502   \u251c\u2500\u2500 utils/\n\u2502   \u251c\u2500\u2500 workers/\n\u2502   \u251c\u2500\u2500 App.vue --\x3e Entry component\n\u2502   \u2514\u2500\u2500 main.ts --\x3e Entry point\n\u2514\u2500\u2500 package.json\n"})})]})}function m(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}},41251:(e,s,n)=>{n.d(s,{$d:()=>t,C3:()=>o,UP:()=>a,gX:()=>i,z9:()=>r});const o="SSE",t="SoundScapeExplorer",i="sound-scape-explorer-VERSION",r="https://discord.gg/eRsQPDBeXg",a="https://github.com/sound-scape-explorer/sound-scape-explorer/discussions"},70107:(e,s,n)=>{n.d(s,{h:()=>l});var o=n(29339),t=n(41251),i=n(30758),r=n(86070);const a=e=>`${e} | `,l=e=>{let{title:s,pre:n,version:l}=e;const p=(0,i.useMemo)((()=>{let e="";if(e+=s,n)for(const s of n)e=a(e),e+=s;return l?(e=a(e),e+=`${t.C3} ${l}`):(e=a(e),e+=t.$d),e}),[]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o.A,{children:(0,r.jsx)("title",{children:p})})})}},31873:(e,s,n)=>{n.d(s,{F:()=>t,x:()=>o});const o="13.3.1",t={windows:"246 MB",debian:"151 MB",macos:"183 MB"}}}]);