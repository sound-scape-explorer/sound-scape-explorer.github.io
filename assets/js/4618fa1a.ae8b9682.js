"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[24047],{9465:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>g,contentTitle:()=>m,default:()=>f,frontMatter:()=>x,metadata:()=>j,toc:()=>y});var t=s(13274),i=s(99128),o=s(7282),l=s(92418),r=s(87805),d=s(67278),a=s(81479),c=s(79474),u=s(71813),h=s.n(u),p=s(27841);const x={sidebar_position:2,title:"Ubuntu"},m=" Ubuntu",j={id:"modules/processing/installation/ubuntu/index",title:"Ubuntu",description:"The steps provided below have been tested on  Ubuntu 20.04 and{' '}",source:"@site/docs/modules/processing/installation/ubuntu/index.mdx",sourceDirName:"modules/processing/installation/ubuntu",slug:"/modules/processing/installation/ubuntu/",permalink:"/docs/next/modules/processing/installation/ubuntu/",draft:!1,unlisted:!1,editUrl:"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/docs/modules/processing/installation/ubuntu/index.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Ubuntu"},sidebar:"tutorialSidebar",previous:{title:"Windows",permalink:"/docs/next/modules/processing/installation/windows/"},next:{title:"macOS",permalink:"/docs/next/modules/processing/installation/macos/"}},g={},y=[{value:"\ud83d\udccb System requirements",id:"-system-requirements",level:2},{value:"<BashIcon></BashIcon> Oneliner <SizeInfo></SizeInfo>",id:"-oneliner-",level:3},{value:"<UbuntuIcon></UbuntuIcon> System Update &amp; Essential Dependencies",id:"-system-update--essential-dependencies",level:4},{value:"<PythonIcon></PythonIcon> Python",id:"-python",level:4},{value:"\ud83e\uddee Processing module",id:"-processing-module",level:2},{value:"\ud83d\uddd1\ufe0f Uninstallation",id:"\ufe0f-uninstallation",level:2},{value:"\ud83d\udccb System requirements",id:"-system-requirements-1",level:3},{value:"\ud83e\uddee Processing module",id:"-processing-module-1",level:3},{value:"\u23ed\ufe0f Next Step",id:"\ufe0f-next-step",level:2}];function b(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"-ubuntu",children:[(0,t.jsx)(l.nO,{})," Ubuntu"]}),"\n",(0,t.jsx)(c.Fragment,{children:(0,t.jsxs)(n.p,{children:["The steps provided below have been tested on ",(0,t.jsx)(l.nO,{})," Ubuntu 20.04 and"," ","\n",(0,t.jsx)(l.nO,{})," Ubuntu 22.04."]})}),"\n",(0,t.jsx)(n.h2,{id:"-system-requirements",children:"\ud83d\udccb System requirements"}),"\n",(0,t.jsx)(c.Fragment,{children:(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["If you have already installed the requirements for the\nlatest major version ",p.x.split(".")[0],", you\ncan directly skip to \ud83e\uddee ",(0,t.jsx)(n.a,{href:"#-processing-module",children:"Processing module"})," installation."]})})}),"\n",(0,t.jsx)(c.Fragment,{children:(0,t.jsxs)(n.h3,{id:"-oneliner-",children:[(0,t.jsx)(l.u5,{})," Oneliner ",(0,t.jsx)(r.W,{size:"~500 MB"})]})}),"\n",(0,t.jsx)(n.p,{children:"Execute this single command to automatically install all necessary system\ndependencies, consuming roughly 500 MB of storage:"}),"\n",(0,t.jsx)(d.U,{version:p.x}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)(n.p,{children:"\ud83d\udc63 Step-by-Step Installation"})}),(0,t.jsxs)(c.Fragment,{children:[(0,t.jsxs)(n.h4,{id:"-system-update--essential-dependencies",children:[(0,t.jsx)(l.nO,{})," System Update & Essential Dependencies"]}),(0,t.jsx)(n.p,{children:"This section ensures your system is updated and equipped with useful\ndependencies:"}),(0,t.jsx)(o.i,{noPython:!0,noNode:!0,noPnpm:!0,hdfTools:!0}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt update && \\\nsudo apt upgrade -y && \\\nsudo apt install -y gcc curl ffmpeg hdf5-tools\n"})}),(0,t.jsxs)(n.h4,{id:"-python",children:[(0,t.jsx)(l.un,{})," Python"]}),(0,t.jsxs)(n.p,{children:["Install ",(0,t.jsx)(l.un,{})," Python and related components:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt update && \\\nsudo apt install -y software-properties-common && \\\nsudo add-apt-repository -y ppa:deadsnakes/ppa && \\\nsudo apt install -y python3.10 python3.10-distutils python3.10-dev python3-pip python3.10-venv && \\\ncurl -sS https://bootstrap.pypa.io/get-pip.py | python3.10\n"})})]})]}),"\n",(0,t.jsx)(n.h2,{id:"-processing-module",children:"\ud83e\uddee Processing module"}),"\n",(0,t.jsxs)("ol",{children:[(0,t.jsx)("li",{children:"Create a new folder on your local disk where you want the module to be installed"}),(0,t.jsxs)("li",{children:["Open a ",(0,t.jsx)(l.k3,{})," terminal window"]}),(0,t.jsxs)("li",{children:["Navigate to that folder with ",(0,t.jsx)(n.code,{children:"cd"})]}),(0,t.jsxs)("li",{children:["Copy, paste then execute the following command to download the installation script",(0,t.jsx)(a.$,{version:p.x})]}),(0,t.jsxs)("li",{children:["Navigate to the folder with ",(0,t.jsx)(n.code,{children:"Files"})," application"]}),(0,t.jsxs)("li",{children:["Right-click on the file",(0,t.jsxs)(n.code,{children:["sse-processing-",p.x,".sh"]})]}),(0,t.jsxs)("li",{children:["Select ",(0,t.jsx)(n.code,{children:"Run as a program"})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"You will need to double-click on this script everytime you want to use the \ud83e\uddee Processing module."})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(l.nO,{})," Ubuntu screencast"]})}),(0,t.jsx)(h(),{controls:!0,loop:!0,url:"/sse-13/install-processing-ubuntu.mp4"})]}),"\n",(0,t.jsx)(n.h2,{id:"\ufe0f-uninstallation",children:"\ud83d\uddd1\ufe0f Uninstallation"}),"\n",(0,t.jsx)(n.h3,{id:"-system-requirements-1",children:"\ud83d\udccb System requirements"}),"\n",(0,t.jsx)(c.Fragment,{children:(0,t.jsxs)(n.p,{children:["To remove the installed requirements, open a ",(0,t.jsx)(l.k3,{})," terminal window\nand execute the following command:"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt remove -y curl ffmpeg hdf5-tools python3.10 python3.10-distutils python3.10-dev python3-pip python3.10-venv && \\\nsudo apt update && \\\nsudo apt autoremove -y\n"})}),"\n",(0,t.jsx)(n.h3,{id:"-processing-module-1",children:"\ud83e\uddee Processing module"}),"\n",(0,t.jsxs)(n.p,{children:["Delete the folder you created when ",(0,t.jsx)(n.a,{href:"#-processing-module",children:"installing"})," the module."]}),"\n",(0,t.jsx)(n.h2,{id:"\ufe0f-next-step",children:"\u23ed\ufe0f Next Step"}),"\n",(0,t.jsxs)(n.p,{children:["Proceed to the \ud83c\udfc3 ",(0,t.jsx)(n.a,{href:"../../getting-started/",children:"Getting started"})," documentation."]})]})}function f(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},27841:(e,n,s)=>{s.d(n,{F:()=>i,x:()=>t});const t="13.2.2",i={windows:"246 MB",debian:"151 MB",macos:"183 MB"}},7282:(e,n,s)=>{s.d(n,{i:()=>o});var t=s(92418),i=s(13274);const o=e=>{let{noPython:n=!1,noNode:s=!1,noPnpm:o=!1,noCCompiler:l=!1,noCurl:r=!1,noFfmpeg:d=!1,hdfTools:a=!1}=e;return(0,i.jsxs)("ul",{children:[!n&&(0,i.jsxs)("li",{children:[(0,i.jsx)(t.un,{}),"  ",(0,i.jsx)("a",{href:"https://www.python.org/",target:"_blank",children:"Python"})," 3.10"]}),!s&&(0,i.jsxs)("li",{children:[(0,i.jsx)(t.GS,{}),"  ",(0,i.jsx)("a",{href:"https://nodejs.org/",target:"_blank",children:"Node.js"})]}),!o&&(0,i.jsxs)("li",{children:[(0,i.jsx)(t.t_,{}),"  ",(0,i.jsx)("a",{href:"https://pnpm.io/",target:"_blank",children:"pnpm"})]}),!l&&(0,i.jsxs)("li",{children:[(0,i.jsx)(t.lB,{}),"  ",(0,i.jsx)("a",{href:"https://gcc.gnu.org/",target:"_blank",children:"C compiler"})]}),!r&&(0,i.jsxs)("li",{children:[(0,i.jsx)(t.SJ,{}),"  ",(0,i.jsx)("a",{href:"https://curl.se/",target:"_blank",children:"curl"})]}),!d&&(0,i.jsxs)("li",{children:[(0,i.jsx)(t.Ju,{}),"  ",(0,i.jsx)("a",{href:"https://www.ffmpeg.org/",target:"_blank",children:"ffmpeg"})]}),a&&(0,i.jsxs)("li",{children:[(0,i.jsx)(t.NB,{}),"  ",(0,i.jsx)("a",{href:"https://support.hdfgroup.org/tools/",target:"_blank",children:"HDF5 Tools"})]})]})}},87805:(e,n,s)=>{s.d(n,{W:()=>o});const t="size_Ijwc";var i=s(13274);const o=e=>{let{size:n}=e;return(0,i.jsx)("span",{className:t,children:n})}},67278:(e,n,s)=>{s.d(n,{U:()=>l});var t=s(74105),i=s(13274);const o=e=>`bash <(wget -qO- https://raw.githubusercontent.com/sound-scape-explorer/sound-scape-explorer/v${e}/bin/install-requirements.sh)`,l=e=>{let{version:n}=e;return(0,i.jsx)(t.A,{language:"bash",children:o(n)})}},81479:(e,n,s)=>{s.d(n,{$:()=>l});var t=s(74105),i=s(13274);const o=e=>`wget -q https://raw.githubusercontent.com/sound-scape-explorer/sound-scape-explorer/v${e}/bin/sse-processing-${e}.sh && chmod +x sse-processing-${e}.sh`,l=e=>{let{version:n}=e;return(0,i.jsx)(t.A,{language:"bash",children:o(n)})}}}]);