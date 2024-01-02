"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[7397],{79244:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>m,contentTitle:()=>h,default:()=>b,frontMatter:()=>u,metadata:()=>x,toc:()=>j});var t=s(11527),o=s(63883),i=s(29903),l=s(9323),r=s(19571),a=s(7870),d=s(37534),p=s(50959),c=s(62670);const u={sidebar_position:2,title:"Ubuntu"},h=" Ubuntu",x={id:"installation/requirements/ubuntu",title:"Ubuntu",description:"The steps provided below have been tested on  Ubuntu 20.04 and{' '}",source:"@site/versioned_docs/version-12.3.0/installation/requirements/ubuntu.mdx",sourceDirName:"installation/requirements",slug:"/installation/requirements/ubuntu",permalink:"/docs/installation/requirements/ubuntu",draft:!1,unlisted:!1,editUrl:"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-12.3.0/installation/requirements/ubuntu.mdx",tags:[],version:"12.3.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Ubuntu"},sidebar:"tutorialSidebar",previous:{title:"Windows",permalink:"/docs/installation/requirements/windows"},next:{title:"macOS",permalink:"/docs/installation/requirements/macos"}},m={},j=[{value:"<BashIcon></BashIcon> Oneliner <SizeInfo></SizeInfo>",id:"-oneliner-",level:2},{value:"\ud83d\udc63 Step-by-Step Installation",id:"-step-by-step-installation",level:2},{value:"<UbuntuIcon></UbuntuIcon> System Update &amp; Essential Dependencies",id:"-system-update--essential-dependencies",level:3},{value:"<PythonIcon></PythonIcon> Python",id:"-python",level:3},{value:"<NodeIcon></NodeIcon> Node.js",id:"-nodejs",level:3},{value:"<PnpmIcon></PnpmIcon> pnpm",id:"-pnpm",level:3},{value:"\ud83d\uddd1\ufe0f Uninstallation",id:"\ufe0f-uninstallation",level:2},{value:"\u23ed\ufe0f Next Step",id:"\ufe0f-next-step",level:2}];function g(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"-ubuntu",children:[(0,t.jsx)(r.cc,{})," Ubuntu"]}),"\n",(0,t.jsx)(p.Fragment,{children:(0,t.jsxs)(n.p,{children:["The steps provided below have been tested on ",(0,t.jsx)(r.cc,{})," Ubuntu 20.04 and"," ","\n",(0,t.jsx)(r.cc,{})," Ubuntu 22.04."]})}),"\n",(0,t.jsx)(p.Fragment,{children:(0,t.jsxs)(n.h2,{id:"-oneliner-",children:[(0,t.jsx)(r.ht,{})," Oneliner ",(0,t.jsx)(a.D,{size:"~500 MB"})]})}),"\n",(0,t.jsx)(n.p,{children:"Execute this single command to automatically install all necessary system\ndependencies, consuming roughly 500 MB of storage:"}),"\n",(0,t.jsx)(d.X,{version:c.q}),"\n",(0,t.jsx)(n.h2,{id:"-step-by-step-installation",children:"\ud83d\udc63 Step-by-Step Installation"}),"\n",(0,t.jsx)(p.Fragment,{children:(0,t.jsxs)(n.h3,{id:"-system-update--essential-dependencies",children:[(0,t.jsx)(r.cc,{})," System Update & Essential Dependencies"]})}),"\n",(0,t.jsx)(n.p,{children:"This section ensures your system is updated and equipped with useful\ndependencies:"}),"\n",(0,t.jsx)(l.d,{noPython:!0,noNode:!0,noPnpm:!0,hdfTools:!0,noCCompiler:!0}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt update && \\\nsudo apt upgrade -y && \\\nsudo apt install -y gcc curl ffmpeg hdf5-tools\n"})}),"\n",(0,t.jsx)(p.Fragment,{children:(0,t.jsxs)(n.h3,{id:"-python",children:[(0,t.jsx)(r.gx,{})," Python"]})}),"\n",(0,t.jsxs)(n.p,{children:["Install ",(0,t.jsx)(r.gx,{})," Python and related components:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt update && \\\nsudo apt install -y software-properties-common && \\\nsudo add-apt-repository -y ppa:deadsnakes/ppa && \\\nsudo apt install -y python3.10 python3.10-distutils python3.10-dev python3-pip python3.10-venv && \\\ncurl -sS https://bootstrap.pypa.io/get-pip.py | python3.10\n"})}),"\n",(0,t.jsx)(p.Fragment,{children:(0,t.jsxs)(n.h3,{id:"-nodejs",children:[(0,t.jsx)(r.qh,{})," Node.js"]})}),"\n",(0,t.jsx)(p.Fragment,{children:(0,t.jsxs)(n.p,{children:["Install ",(0,t.jsx)(r.qh,{})," Node.js with the following command:"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'sudo apt update && \\\nsudo apt install -y ca-certificates curl gnupg && \\\nsudo mkdir -p /etc/apt/keyrings && \\\ncurl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg && \\\necho "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list && \\\nsudo apt update && \\\nsudo apt install -y nodejs\n'})}),"\n",(0,t.jsx)(p.Fragment,{children:(0,t.jsxs)(n.h3,{id:"-pnpm",children:[(0,t.jsx)(r.mR,{})," pnpm"]})}),"\n",(0,t.jsx)(p.Fragment,{children:(0,t.jsxs)(n.p,{children:["Install ",(0,t.jsx)(r.mR,{})," pnpm with the following command:"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo npm -g i pnpm\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\ufe0f-uninstallation",children:"\ud83d\uddd1\ufe0f Uninstallation"}),"\n",(0,t.jsx)(p.Fragment,{children:(0,t.jsxs)(n.p,{children:["To remove the installed requirements, open a ",(0,t.jsx)(r.Fx,{})," terminal window\nand execute the following command:"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo npm -g uninstall pnpm && \\\nsudo apt remove -y curl ffmpeg hdf5-tools nodejs python3.10-distutils python3.10-dev python3-pip python3.10-venv && \\\nsudo rm /etc/apt/sources.list.d/nodesource.list && \\\nsudo rm /etc/apt/keyrings/nodesource.gpg && \\\nsudo apt update && \\\nsudo apt autoremove -y\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\ufe0f-next-step",children:"\u23ed\ufe0f Next Step"}),"\n",(0,t.jsx)(p.Fragment,{children:(0,t.jsxs)(n.p,{children:["Upon completion, close your ",(0,t.jsx)(r.Fx,{})," terminal and proceed with the\n",(0,t.jsxs)(n.a,{href:"../application",children:["installation of ",i.iC]}),"."]})})]})}function b(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},29903:(e,n,s)=>{s.d(n,{$p:()=>i,PB:()=>o,ZT:()=>r,i6:()=>l,iC:()=>t});const t="SSE",o="SoundScapeExplorer",i="sound-scape-explorer-VERSION",l="https://discord.gg/eRsQPDBeXg",r="https://github.com/sound-scape-explorer/sound-scape-explorer/discussions"},9323:(e,n,s)=>{s.d(n,{d:()=>i});var t=s(19571),o=s(11527);const i=e=>{let{noPython:n=!1,noNode:s=!1,noPnpm:i=!1,noCCompiler:l=!1,noCurl:r=!1,noFfmpeg:a=!1,hdfTools:d=!1}=e;return(0,o.jsxs)("ul",{children:[!n&&(0,o.jsxs)("li",{children:[(0,o.jsx)(t.gx,{}),"  ",(0,o.jsx)("a",{href:"https://www.python.org/",target:"_blank",children:"Python"})," 3.10"]}),!s&&(0,o.jsxs)("li",{children:[(0,o.jsx)(t.qh,{}),"  ",(0,o.jsx)("a",{href:"https://nodejs.org/",target:"_blank",children:"Node.js"})]}),!i&&(0,o.jsxs)("li",{children:[(0,o.jsx)(t.mR,{}),"  ",(0,o.jsx)("a",{href:"https://pnpm.io/",target:"_blank",children:"pnpm"})]}),!l&&(0,o.jsxs)("li",{children:[(0,o.jsx)(t.m2,{}),"  ",(0,o.jsx)("a",{href:"https://gcc.gnu.org/",target:"_blank",children:"C compiler"})]}),!r&&(0,o.jsxs)("li",{children:[(0,o.jsx)(t.Vj,{}),"  ",(0,o.jsx)("a",{href:"https://curl.se/",target:"_blank",children:"curl"})]}),!a&&(0,o.jsxs)("li",{children:[(0,o.jsx)(t.NX,{}),"  ",(0,o.jsx)("a",{href:"https://www.ffmpeg.org/",target:"_blank",children:"ffmpeg"})]}),d&&(0,o.jsxs)("li",{children:[(0,o.jsx)(t.id,{}),"  ",(0,o.jsx)("a",{href:"https://support.hdfgroup.org/tools/",target:"_blank",children:"HDF5 Tools"})]})]})}},7870:(e,n,s)=>{s.d(n,{D:()=>i});const t="size_Ijwc";var o=s(11527);const i=e=>{let{size:n}=e;return(0,o.jsx)("span",{className:t,children:n})}},37534:(e,n,s)=>{s.d(n,{X:()=>l});var t=s(16100),o=s(11527);const i=e=>`/bin/bash <(wget -qO- https://raw.githubusercontent.com/sound-scape-explorer/sound-scape-explorer/v${e}/bin/requirements-ubuntu.sh)`,l=e=>{let{version:n}=e;return(0,o.jsx)(t.Z,{language:"bash",children:i(n)})}},62670:(e,n,s)=>{s.d(n,{N:()=>o,q:()=>t});const t="12.3.0",o="~125 MB"}}]);