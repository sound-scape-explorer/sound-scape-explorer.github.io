"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[41861],{25278:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>p,contentTitle:()=>h,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>u});const l=JSON.parse('{"id":"developers/requirements/index","title":"\ud83d\udccb Requirements","description":"The following dependencies are needed to run the application in developer mode:","source":"@site/versioned_docs/version-13.2.5/developers/requirements/index.mdx","sourceDirName":"developers/requirements","slug":"/developers/requirements/","permalink":"/docs/13.2.5/developers/requirements/","draft":false,"unlisted":false,"editUrl":"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-13.2.5/developers/requirements/index.mdx","tags":[],"version":"13.2.5","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udc69\u200d\ud83d\udcbb Developers","permalink":"/docs/13.2.5/developers/"},"next":{"title":"\ud83d\udcc1 Get codebase","permalink":"/docs/13.2.5/developers/get-codebase/"}}');var i=s(86070),o=s(15658),t=s(98640),r=s(78419),a=s(30758),d=s(53118);const c={sidebar_position:1},h="\ud83d\udccb Requirements",p={},u=[{value:"<WindowsIcon></WindowsIcon> Windows",id:"-windows",level:2},{value:"\ud83d\udd27 Installation",id:"-installation",level:3},{value:"\ud83d\uddd1\ufe0f Uninstallation",id:"\ufe0f-uninstallation",level:3},{value:"<UbuntuIcon></UbuntuIcon> Ubuntu",id:"-ubuntu",level:2},{value:"\ud83d\udd27 Installation",id:"-installation-1",level:3},{value:"\ud83d\uddd1\ufe0f Uninstallation",id:"\ufe0f-uninstallation-1",level:3},{value:"<MacOsIcon></MacOsIcon> macOS",id:"-macos",level:2},{value:"\ud83d\udd27 Installation",id:"-installation-2",level:3},{value:"\ud83d\uddd1\ufe0f Uninstallation",id:"\ufe0f-uninstallation-2",level:3}];function x(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"-requirements",children:"\ud83d\udccb Requirements"})}),"\n",(0,i.jsx)(n.p,{children:"The following dependencies are needed to run the application in developer mode:"}),"\n",(0,i.jsx)(t.i,{version:d.x,noPython:!0,noCCompiler:!0,noCurl:!0,noFfmpeg:!0}),"\n",(0,i.jsx)(n.p,{children:"Choose the procedure depending on your operating system:"}),"\n",(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)(r.BN,{}),"  ",(0,i.jsx)("a",{href:"#-windows",children:"Windows"})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(r.nO,{}),"  ",(0,i.jsx)("a",{href:"#-ubuntu",children:"Ubuntu"})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(r.fS,{}),"  ",(0,i.jsx)("a",{href:"#-macos",children:"macOS"})]})]}),"\n",(0,i.jsx)(a.Fragment,{children:(0,i.jsxs)(n.h2,{id:"-windows",children:[(0,i.jsx)(r.BN,{})," Windows"]})}),"\n",(0,i.jsx)(n.h3,{id:"-installation",children:"\ud83d\udd27 Installation"}),"\n",(0,i.jsx)(a.Fragment,{children:(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(r.rB,{})," Chocolatey command below in an elevated (admin)"," ","\n",(0,i.jsx)(r.B,{})," Powershell terminal:"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"choco install nodejs-lts pnpm -y\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\ufe0f-uninstallation",children:"\ud83d\uddd1\ufe0f Uninstallation"}),"\n",(0,i.jsx)(a.Fragment,{children:(0,i.jsxs)(n.p,{children:["Run the following command in an elevated (admin) ",(0,i.jsx)(r.B,{})," Powershell\nterminal:"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"choco uninstall nodejs-lts pnpm -y\n"})}),"\n",(0,i.jsx)(a.Fragment,{children:(0,i.jsxs)(n.h2,{id:"-ubuntu",children:[(0,i.jsx)(r.nO,{})," Ubuntu"]})}),"\n",(0,i.jsx)(n.h3,{id:"-installation-1",children:"\ud83d\udd27 Installation"}),"\n",(0,i.jsx)(a.Fragment,{children:(0,i.jsxs)(n.p,{children:["Open a ",(0,i.jsx)(r.k3,{})," terminal window and run the commands below."]})}),"\n",(0,i.jsx)(a.Fragment,{children:(0,i.jsxs)(n.p,{children:["Install ",(0,i.jsx)(r.GS,{})," Node.js with the following command:"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'sudo apt update && \\\nsudo apt install -y ca-certificates curl gnupg && \\\nsudo mkdir -p /etc/apt/keyrings && \\\ncurl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg && \\\necho "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list && \\\nsudo apt update && \\\nsudo apt install -y nodejs\n'})}),"\n",(0,i.jsx)(a.Fragment,{children:(0,i.jsxs)(n.p,{children:["Install ",(0,i.jsx)(r.t_,{})," pnpm with the following command:"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo npm -g i pnpm\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\ufe0f-uninstallation-1",children:"\ud83d\uddd1\ufe0f Uninstallation"}),"\n",(0,i.jsx)(a.Fragment,{children:(0,i.jsxs)(n.p,{children:["Open a ",(0,i.jsx)(r.k3,{})," terminal window and execute the following command:"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo npm -g uninstall pnpm && \\\nsudo apt remove -y nodejs && \\\nsudo rm /etc/apt/sources.list.d/nodesource.list && \\\nsudo rm /etc/apt/keyrings/nodesource.gpg && \\\nsudo apt update && \\\nsudo apt autoremove -y\n"})}),"\n",(0,i.jsx)(a.Fragment,{children:(0,i.jsxs)(n.h2,{id:"-macos",children:[(0,i.jsx)(r.fS,{})," macOS"]})}),"\n",(0,i.jsx)(n.h3,{id:"-installation-2",children:"\ud83d\udd27 Installation"}),"\n",(0,i.jsx)(a.Fragment,{children:(0,i.jsxs)(n.p,{children:["Execute the following command in a ",(0,i.jsx)(r.k3,{})," terminal window to install\nand update your path:"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"brew install node@20 pnpm && \\\necho 'export PATH=\"/usr/local/opt/node@20/bin:$PATH\" >> ~/.profile'\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\ufe0f-uninstallation-2",children:"\ud83d\uddd1\ufe0f Uninstallation"}),"\n",(0,i.jsxs)(n.p,{children:["Open a ",(0,i.jsx)(r.k3,{})," terminal window\nand execute the following command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"brew uninstall node@20 pnpm\n"})})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},98640:(e,n,s)=>{s.d(n,{i:()=>o});var l=s(78419),i=s(86070);const o=e=>{let{noPython:n=!1,noNode:s=!1,noPnpm:o=!1,noCCompiler:t=!1,noCurl:r=!1,noFfmpeg:a=!1,hdfTools:d=!1}=e;return(0,i.jsxs)("ul",{children:[!n&&(0,i.jsxs)("li",{children:[(0,i.jsx)(l.un,{}),"  ",(0,i.jsx)("a",{href:"https://www.python.org/",target:"_blank",children:"Python"})," 3.10"]}),!s&&(0,i.jsxs)("li",{children:[(0,i.jsx)(l.GS,{}),"  ",(0,i.jsx)("a",{href:"https://nodejs.org/",target:"_blank",children:"Node.js"})]}),!o&&(0,i.jsxs)("li",{children:[(0,i.jsx)(l.t_,{}),"  ",(0,i.jsx)("a",{href:"https://pnpm.io/",target:"_blank",children:"pnpm"})]}),!t&&(0,i.jsxs)("li",{children:[(0,i.jsx)(l.lB,{}),"  ",(0,i.jsx)("a",{href:"https://gcc.gnu.org/",target:"_blank",children:"C compiler"})]}),!r&&(0,i.jsxs)("li",{children:[(0,i.jsx)(l.SJ,{}),"  ",(0,i.jsx)("a",{href:"https://curl.se/",target:"_blank",children:"curl"})]}),!a&&(0,i.jsxs)("li",{children:[(0,i.jsx)(l.Ju,{}),"  ",(0,i.jsx)("a",{href:"https://www.ffmpeg.org/",target:"_blank",children:"ffmpeg"})]}),d&&(0,i.jsxs)("li",{children:[(0,i.jsx)(l.NB,{}),"  ",(0,i.jsx)("a",{href:"https://support.hdfgroup.org/tools/",target:"_blank",children:"HDF5 Tools"})]})]})}},53118:(e,n,s)=>{s.d(n,{F:()=>i,x:()=>l});const l="13.2.5",i={windows:"246 MB",debian:"151 MB",macos:"183 MB"}}}]);