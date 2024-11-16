"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[94105],{64679:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>x,contentTitle:()=>p,default:()=>m,frontMatter:()=>h,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"processing/installation/index","title":"\ud83d\udd27 Installation","description":"<Title","source":"@site/versioned_docs/version-13.3.0/processing/installation/index.mdx","sourceDirName":"processing/installation","slug":"/processing/installation/","permalink":"/docs/13.3.0/processing/installation/","draft":false,"unlisted":false,"editUrl":"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-13.3.0/processing/installation/index.mdx","tags":[],"version":"13.3.0","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"\ud83e\uddee Processing","permalink":"/docs/13.3.0/processing/"},"next":{"title":"Windows","permalink":"/docs/13.3.0/processing/installation/windows/"}}');var r=n(86070),t=n(15658),o=n(94981),l=n(65988),a=n(28076),d=n(30758),c=n(88325);const h={sidebar_position:1},p="\ud83d\udd27 Installation",x={},u=[{value:"\ud83d\udcda System recommendations",id:"-system-recommendations",level:2},{value:"\ud83c\udf10 Operating Systems",id:"-operating-systems",level:2}];function j(e){const s={h1:"h1",h2:"h2",header:"header",p:"p",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"-installation",children:"\ud83d\udd27 Installation"})}),"\n",(0,r.jsx)(a.h,{pre:["\ud83e\uddee Processing"],title:"\ud83d\udd27 Installation",version:c.x}),"\n",(0,r.jsx)(s.p,{children:"The following prerequisites will be installed on your system:"}),"\n",(0,r.jsx)(o.i,{noNode:!0,noPnpm:!0}),"\n",(0,r.jsx)(s.h2,{id:"-system-recommendations",children:"\ud83d\udcda System recommendations"}),"\n",(0,r.jsx)(s.p,{children:"Prior to installation, ensure that your computer meets the following requirements:"}),"\n",(0,r.jsx)(d.Fragment,{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"A minimum of 4 GB of RAM for optimal performance."}),(0,r.jsx)("li",{children:"A multi-core processor (2 cores or more) for efficient audio processing."}),(0,r.jsx)("li",{children:"About 15 GB of free disk space for installation of dependencies."}),(0,r.jsx)("li",{children:"Sufficient storage space for audio files and processed data."}),(0,r.jsxs)("li",{children:["For optional accelerated audio processing, we advise using an ",(0,r.jsx)(l.zK,{})," Nvidia GPU."]})]})}),"\n",(0,r.jsx)(s.h2,{id:"-operating-systems",children:"\ud83c\udf10 Operating Systems"}),"\n",(0,r.jsx)(s.p,{children:"Refer to the following links for detailed instructions on installing\nrequirements based on your operating system:"}),"\n",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)(l.BN,{}),"  ",(0,r.jsx)("a",{href:"./windows/",children:"Windows"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(l.nO,{}),"  ",(0,r.jsx)("a",{href:"./ubuntu/",children:"Ubuntu"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(l.fS,{}),"  ",(0,r.jsx)("a",{href:"./macos/",children:"macOS"})]})]})]})}function m(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},94981:(e,s,n)=>{n.d(s,{i:()=>t});var i=n(65988),r=n(86070);const t=e=>{let{noPython:s=!1,noNode:n=!1,noPnpm:t=!1,noCCompiler:o=!1,noCurl:l=!1,noFfmpeg:a=!1,hdfTools:d=!1}=e;return(0,r.jsxs)("ul",{children:[!s&&(0,r.jsxs)("li",{children:[(0,r.jsx)(i.un,{}),"  ",(0,r.jsx)("a",{href:"https://www.python.org/",target:"_blank",children:"Python"})," 3.10"]}),!n&&(0,r.jsxs)("li",{children:[(0,r.jsx)(i.GS,{}),"  ",(0,r.jsx)("a",{href:"https://nodejs.org/",target:"_blank",children:"Node.js"})]}),!t&&(0,r.jsxs)("li",{children:[(0,r.jsx)(i.t_,{}),"  ",(0,r.jsx)("a",{href:"https://pnpm.io/",target:"_blank",children:"pnpm"})]}),!o&&(0,r.jsxs)("li",{children:[(0,r.jsx)(i.lB,{}),"  ",(0,r.jsx)("a",{href:"https://gcc.gnu.org/",target:"_blank",children:"C compiler"})]}),!l&&(0,r.jsxs)("li",{children:[(0,r.jsx)(i.SJ,{}),"  ",(0,r.jsx)("a",{href:"https://curl.se/",target:"_blank",children:"curl"})]}),!a&&(0,r.jsxs)("li",{children:[(0,r.jsx)(i.Ju,{}),"  ",(0,r.jsx)("a",{href:"https://www.ffmpeg.org/",target:"_blank",children:"ffmpeg"})]}),d&&(0,r.jsxs)("li",{children:[(0,r.jsx)(i.NB,{}),"  ",(0,r.jsx)("a",{href:"https://support.hdfgroup.org/tools/",target:"_blank",children:"HDF5 Tools"})]})]})}},28076:(e,s,n)=>{n.d(s,{h:()=>a});var i=n(68709),r=n(35592),t=n(30758),o=n(86070);const l=e=>`${e} | `,a=e=>{let{title:s,pre:n,version:a}=e;const d=(0,t.useMemo)((()=>{let e="";if(e+=s,n)for(const s of n)e=l(e),e+=s;return a?(e=l(e),e+=`${r.C3} ${a}`):(e=l(e),e+=r.$d),e}),[]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i.A,{children:(0,o.jsx)("title",{children:d})})})}},88325:(e,s,n)=>{n.d(s,{F:()=>r,x:()=>i});const i="13.3.0",r={windows:"246 MB",debian:"151 MB",macos:"183 MB"}}}]);