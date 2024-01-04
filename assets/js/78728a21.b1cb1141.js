"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[2179],{31770:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var i=s(11527),t=s(63883),o=s(9323),l=s(19571),r=s(50959);const a={sidebar_position:3,title:"macOS"},c=" macOS",d={id:"installation/requirements/macos",title:"macOS",description:"The steps outlined below have been successfully tested on  macOS",source:"@site/versioned_docs/version-CSE/installation/requirements/macos.mdx",sourceDirName:"installation/requirements",slug:"/installation/requirements/macos",permalink:"/docs/CSE/installation/requirements/macos",draft:!1,unlisted:!1,editUrl:"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-CSE/installation/requirements/macos.mdx",tags:[],version:"CSE",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"macOS"},sidebar:"tutorialSidebar",previous:{title:"Ubuntu",permalink:"/docs/CSE/installation/requirements/ubuntu"},next:{title:"\ud83d\udcbb Application",permalink:"/docs/CSE/installation/application/"}},h={},p=[{value:"<HomebrewIcon></HomebrewIcon> Homebrew",id:"-homebrew",level:2},{value:"\ud83d\udee0\ufe0f Procedure",id:"\ufe0f-procedure",level:3},{value:"\ud83d\udce6 Dependencies",id:"-dependencies",level:2},{value:"<XcodeIcon></XcodeIcon> Xcode Command Line Tools",id:"-xcode-command-line-tools",level:3},{value:"\ud83d\uddd1\ufe0f Uninstallation",id:"\ufe0f-uninstallation",level:2},{value:"\u23ed\ufe0f Next Step",id:"\ufe0f-next-step",level:2}];function x(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"-macos",children:[(0,i.jsx)(l.Fn,{})," macOS"]}),"\n",(0,i.jsx)(r.Fragment,{children:(0,i.jsxs)(n.p,{children:["The steps outlined below have been successfully tested on ",(0,i.jsx)(l.Fn,{})," macOS\n13 and ",(0,i.jsx)(l.Fn,{})," macOS 14."]})}),"\n",(0,i.jsx)(r.Fragment,{children:(0,i.jsxs)(n.h2,{id:"-homebrew",children:[(0,i.jsx)(l.cF,{})," Homebrew"]})}),"\n",(0,i.jsx)(r.Fragment,{children:(0,i.jsxs)(n.p,{children:["Using the package manager ",(0,i.jsx)(l.cF,{})," ",(0,i.jsx)(n.a,{href:"https://brew.sh/",children:"Homebrew"})," is\nrecommended to install the application requirements."]})}),"\n",(0,i.jsx)(n.h3,{id:"\ufe0f-procedure",children:"\ud83d\udee0\ufe0f Procedure"}),"\n",(0,i.jsxs)("ol",{children:[(0,i.jsx)("li",{children:(0,i.jsxs)(r.Fragment,{children:["Navigate to ",(0,i.jsx)(n.a,{href:"https://brew.sh/",children:"brew.sh"})]})}),(0,i.jsxs)("li",{children:["Follow the installation instructions provided for ",(0,i.jsx)(l.cF,{})," Homebrew"]}),(0,i.jsxs)("li",{children:["Open a ",(0,i.jsx)(l.Fx,{})," terminal to proceed with the next steps"]})]}),"\n",(0,i.jsx)(n.h2,{id:"-dependencies",children:"\ud83d\udce6 Dependencies"}),"\n",(0,i.jsx)(n.p,{children:"Execute the following command to install dependencies and update your path:"}),"\n",(0,i.jsx)(o.d,{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"brew install gcc curl ffmpeg python@3.10 node@20 pnpm && \\\necho 'export PATH=\"/usr/local/opt/node@20/bin:$PATH\" >> ~/.profile'\n"})}),"\n",(0,i.jsx)(r.Fragment,{children:(0,i.jsxs)(n.h3,{id:"-xcode-command-line-tools",children:[(0,i.jsx)(l.SU,{})," Xcode Command Line Tools"]})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"This step is optional. Additional context is needed."})}),"\n",(0,i.jsx)(n.h2,{id:"\ufe0f-uninstallation",children:"\ud83d\uddd1\ufe0f Uninstallation"}),"\n",(0,i.jsx)(r.Fragment,{children:(0,i.jsxs)(n.p,{children:["To remove the installed requirements, open a ",(0,i.jsx)(l.Fx,{})," terminal window\nand execute the following command:"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"brew uninstall gcc curl ffmpeg python@3.10 node@20 pnpm\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\ufe0f-next-step",children:"\u23ed\ufe0f Next Step"}),"\n",(0,i.jsx)(r.Fragment,{children:(0,i.jsxs)(n.p,{children:["Upon completion, close your ",(0,i.jsx)(l.Fx,{})," terminal and proceed to the\n",(0,i.jsx)(n.a,{href:"../application",children:"installation of CSE"}),"."]})})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},9323:(e,n,s)=>{s.d(n,{d:()=>o});var i=s(19571),t=s(11527);const o=e=>{let{noPython:n=!1,noNode:s=!1,noPnpm:o=!1,noCCompiler:l=!1,noCurl:r=!1,noFfmpeg:a=!1,hdfTools:c=!1}=e;return(0,t.jsxs)("ul",{children:[!n&&(0,t.jsxs)("li",{children:[(0,t.jsx)(i.gx,{}),"  ",(0,t.jsx)("a",{href:"https://www.python.org/",target:"_blank",children:"Python"})," 3.10"]}),!s&&(0,t.jsxs)("li",{children:[(0,t.jsx)(i.qh,{}),"  ",(0,t.jsx)("a",{href:"https://nodejs.org/",target:"_blank",children:"Node.js"})]}),!o&&(0,t.jsxs)("li",{children:[(0,t.jsx)(i.mR,{}),"  ",(0,t.jsx)("a",{href:"https://pnpm.io/",target:"_blank",children:"pnpm"})]}),!l&&(0,t.jsxs)("li",{children:[(0,t.jsx)(i.m2,{}),"  ",(0,t.jsx)("a",{href:"https://gcc.gnu.org/",target:"_blank",children:"C compiler"})]}),!r&&(0,t.jsxs)("li",{children:[(0,t.jsx)(i.Vj,{}),"  ",(0,t.jsx)("a",{href:"https://curl.se/",target:"_blank",children:"curl"})]}),!a&&(0,t.jsxs)("li",{children:[(0,t.jsx)(i.NX,{}),"  ",(0,t.jsx)("a",{href:"https://www.ffmpeg.org/",target:"_blank",children:"ffmpeg"})]}),c&&(0,t.jsxs)("li",{children:[(0,t.jsx)(i.id,{}),"  ",(0,t.jsx)("a",{href:"https://support.hdfgroup.org/tools/",target:"_blank",children:"HDF5 Tools"})]})]})}}}]);