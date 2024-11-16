"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[54933],{97159:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>m,contentTitle:()=>x,default:()=>b,frontMatter:()=>h,metadata:()=>t,toc:()=>j});const t=JSON.parse('{"id":"installation/requirements/ubuntu","title":"Ubuntu","description":"The steps provided below have been tested on  Ubuntu 20.04 and{\' \'}","source":"@site/versioned_docs/version-12.3.0/installation/requirements/ubuntu.mdx","sourceDirName":"installation/requirements","slug":"/installation/requirements/ubuntu","permalink":"/docs/12.3.0/installation/requirements/ubuntu","draft":false,"unlisted":false,"editUrl":"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-12.3.0/installation/requirements/ubuntu.mdx","tags":[],"version":"12.3.0","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Ubuntu"},"sidebar":"tutorialSidebar","previous":{"title":"Windows","permalink":"/docs/12.3.0/installation/requirements/windows"},"next":{"title":"macOS","permalink":"/docs/12.3.0/installation/requirements/macos"}}');var o=s(86070),i=s(15658),r=s(35592),l=s(94981),a=s(65988),d=s(64484),p=s(94445),c=s(30758),u=s(67034);const h={sidebar_position:2,title:"Ubuntu"},x=" Ubuntu",m={},j=[{value:"<BashIcon></BashIcon> Oneliner <SizeInfo></SizeInfo>",id:"-oneliner-",level:2},{value:"\ud83d\udc63 Step-by-Step Installation",id:"-step-by-step-installation",level:2},{value:"<UbuntuIcon></UbuntuIcon> System Update &amp; Essential Dependencies",id:"-system-update--essential-dependencies",level:3},{value:"<PythonIcon></PythonIcon> Python",id:"-python",level:3},{value:"<NodeIcon></NodeIcon> Node.js",id:"-nodejs",level:3},{value:"<PnpmIcon></PnpmIcon> pnpm",id:"-pnpm",level:3},{value:"\ud83d\uddd1\ufe0f Uninstallation",id:"\ufe0f-uninstallation",level:2},{value:"\u23ed\ufe0f Next Step",id:"\ufe0f-next-step",level:2}];function g(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsxs)(n.h1,{id:"-ubuntu",children:[(0,o.jsx)(a.nO,{})," Ubuntu"]})}),"\n",(0,o.jsx)(c.Fragment,{children:(0,o.jsxs)(n.p,{children:["The steps provided below have been tested on ",(0,o.jsx)(a.nO,{})," Ubuntu 20.04 and"," ","\n",(0,o.jsx)(a.nO,{})," Ubuntu 22.04."]})}),"\n",(0,o.jsx)(c.Fragment,{children:(0,o.jsxs)(n.h2,{id:"-oneliner-",children:[(0,o.jsx)(a.u5,{})," Oneliner ",(0,o.jsx)(d.W,{size:"~500 MB"})]})}),"\n",(0,o.jsx)(n.p,{children:"Execute this single command to automatically install all necessary system\ndependencies, consuming roughly 500 MB of storage:"}),"\n",(0,o.jsx)(p.s,{version:u.x}),"\n",(0,o.jsx)(n.h2,{id:"-step-by-step-installation",children:"\ud83d\udc63 Step-by-Step Installation"}),"\n",(0,o.jsx)(c.Fragment,{children:(0,o.jsxs)(n.h3,{id:"-system-update--essential-dependencies",children:[(0,o.jsx)(a.nO,{})," System Update & Essential Dependencies"]})}),"\n",(0,o.jsx)(n.p,{children:"This section ensures your system is updated and equipped with useful\ndependencies:"}),"\n",(0,o.jsx)(l.i,{noPython:!0,noNode:!0,noPnpm:!0,hdfTools:!0,noCCompiler:!0}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo apt update && \\\nsudo apt upgrade -y && \\\nsudo apt install -y gcc curl ffmpeg hdf5-tools\n"})}),"\n",(0,o.jsx)(c.Fragment,{children:(0,o.jsxs)(n.h3,{id:"-python",children:[(0,o.jsx)(a.un,{})," Python"]})}),"\n",(0,o.jsxs)(n.p,{children:["Install ",(0,o.jsx)(a.un,{})," Python and related components:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo apt update && \\\nsudo apt install -y software-properties-common && \\\nsudo add-apt-repository -y ppa:deadsnakes/ppa && \\\nsudo apt install -y python3.10 python3.10-distutils python3.10-dev python3-pip python3.10-venv && \\\ncurl -sS https://bootstrap.pypa.io/get-pip.py | python3.10\n"})}),"\n",(0,o.jsx)(c.Fragment,{children:(0,o.jsxs)(n.h3,{id:"-nodejs",children:[(0,o.jsx)(a.GS,{})," Node.js"]})}),"\n",(0,o.jsx)(c.Fragment,{children:(0,o.jsxs)(n.p,{children:["Install ",(0,o.jsx)(a.GS,{})," Node.js with the following command:"]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'sudo apt update && \\\nsudo apt install -y ca-certificates curl gnupg && \\\nsudo mkdir -p /etc/apt/keyrings && \\\ncurl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg && \\\necho "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list && \\\nsudo apt update && \\\nsudo apt install -y nodejs\n'})}),"\n",(0,o.jsx)(c.Fragment,{children:(0,o.jsxs)(n.h3,{id:"-pnpm",children:[(0,o.jsx)(a.t_,{})," pnpm"]})}),"\n",(0,o.jsx)(c.Fragment,{children:(0,o.jsxs)(n.p,{children:["Install ",(0,o.jsx)(a.t_,{})," pnpm with the following command:"]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo npm -g i pnpm\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\ufe0f-uninstallation",children:"\ud83d\uddd1\ufe0f Uninstallation"}),"\n",(0,o.jsx)(c.Fragment,{children:(0,o.jsxs)(n.p,{children:["To remove the installed requirements, open a ",(0,o.jsx)(a.k3,{})," terminal window\nand execute the following command:"]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo npm -g uninstall pnpm && \\\nsudo apt remove -y curl ffmpeg hdf5-tools nodejs python3.10-distutils python3.10-dev python3-pip python3.10-venv && \\\nsudo rm /etc/apt/sources.list.d/nodesource.list && \\\nsudo rm /etc/apt/keyrings/nodesource.gpg && \\\nsudo apt update && \\\nsudo apt autoremove -y\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\ufe0f-next-step",children:"\u23ed\ufe0f Next Step"}),"\n",(0,o.jsx)(c.Fragment,{children:(0,o.jsxs)(n.p,{children:["Upon completion, close your ",(0,o.jsx)(a.k3,{})," terminal and proceed with the\n",(0,o.jsxs)(n.a,{href:"../application",children:["installation of ",r.C3]}),"."]})})]})}function b(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},94981:(e,n,s)=>{s.d(n,{i:()=>i});var t=s(65988),o=s(86070);const i=e=>{let{noPython:n=!1,noNode:s=!1,noPnpm:i=!1,noCCompiler:r=!1,noCurl:l=!1,noFfmpeg:a=!1,hdfTools:d=!1}=e;return(0,o.jsxs)("ul",{children:[!n&&(0,o.jsxs)("li",{children:[(0,o.jsx)(t.un,{}),"  ",(0,o.jsx)("a",{href:"https://www.python.org/",target:"_blank",children:"Python"})," 3.10"]}),!s&&(0,o.jsxs)("li",{children:[(0,o.jsx)(t.GS,{}),"  ",(0,o.jsx)("a",{href:"https://nodejs.org/",target:"_blank",children:"Node.js"})]}),!i&&(0,o.jsxs)("li",{children:[(0,o.jsx)(t.t_,{}),"  ",(0,o.jsx)("a",{href:"https://pnpm.io/",target:"_blank",children:"pnpm"})]}),!r&&(0,o.jsxs)("li",{children:[(0,o.jsx)(t.lB,{}),"  ",(0,o.jsx)("a",{href:"https://gcc.gnu.org/",target:"_blank",children:"C compiler"})]}),!l&&(0,o.jsxs)("li",{children:[(0,o.jsx)(t.SJ,{}),"  ",(0,o.jsx)("a",{href:"https://curl.se/",target:"_blank",children:"curl"})]}),!a&&(0,o.jsxs)("li",{children:[(0,o.jsx)(t.Ju,{}),"  ",(0,o.jsx)("a",{href:"https://www.ffmpeg.org/",target:"_blank",children:"ffmpeg"})]}),d&&(0,o.jsxs)("li",{children:[(0,o.jsx)(t.NB,{}),"  ",(0,o.jsx)("a",{href:"https://support.hdfgroup.org/tools/",target:"_blank",children:"HDF5 Tools"})]})]})}},64484:(e,n,s)=>{s.d(n,{W:()=>i});const t="size_Ijwc";var o=s(86070);const i=e=>{let{size:n}=e;return(0,o.jsx)("span",{className:t,children:n})}},94445:(e,n,s)=>{s.d(n,{s:()=>l});var t=s(41113),o=s(86070);const i=e=>`/bin/bash <(wget -qO- https://raw.githubusercontent.com/sound-scape-explorer/sound-scape-explorer/v${e}/bin/requirements-ubuntu.sh)`,r=e=>`/bin/bash <(wget -qO- https://raw.githubusercontent.com/sound-scape-explorer/coral-sound-explorer/v${e}/bin/requirements-ubuntu.sh)`,l=e=>{let{version:n,isCse:s=!1}=e;return s?(0,o.jsx)(t.A,{language:"bash",children:r(n)}):(0,o.jsx)(t.A,{language:"bash",children:i(n)})}},67034:(e,n,s)=>{s.d(n,{S:()=>o,x:()=>t});const t="12.3.0",o="~125 MB"}}]);