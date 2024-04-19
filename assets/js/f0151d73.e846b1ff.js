"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[43298],{81863:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>g,contentTitle:()=>m,default:()=>v,frontMatter:()=>x,metadata:()=>j,toc:()=>y});var t=n(13274),i=n(99128),o=n(7282),l=n(92418),r=n(87805),d=n(67278),a=n(81479),c=n(79474),h=n(71813),u=n.n(h),p=n(39499);const x={sidebar_position:2,title:"Ubuntu"},m=" Ubuntu",j={id:"modules/processing/installation/ubuntu/index",title:"Ubuntu",description:"The steps provided below have been tested on  Ubuntu 20.04 and{' '}",source:"@site/versioned_docs/version-13.2.4/modules/processing/installation/ubuntu/index.mdx",sourceDirName:"modules/processing/installation/ubuntu",slug:"/modules/processing/installation/ubuntu/",permalink:"/docs/13.2.4/modules/processing/installation/ubuntu/",draft:!1,unlisted:!1,editUrl:"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-13.2.4/modules/processing/installation/ubuntu/index.mdx",tags:[],version:"13.2.4",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Ubuntu"},sidebar:"tutorialSidebar",previous:{title:"Windows",permalink:"/docs/13.2.4/modules/processing/installation/windows/"},next:{title:"macOS",permalink:"/docs/13.2.4/modules/processing/installation/macos/"}},g={},y=[{value:"\ud83d\udccb System requirements",id:"-system-requirements",level:2},{value:"<BashIcon></BashIcon> Oneliner <SizeInfo></SizeInfo>",id:"-oneliner-",level:3},{value:"<UbuntuIcon></UbuntuIcon> System Update &amp; Essential Dependencies",id:"-system-update--essential-dependencies",level:4},{value:"<PythonIcon></PythonIcon> Python",id:"-python",level:4},{value:"\ud83e\uddee Processing module",id:"-processing-module",level:2},{value:"\ud83d\uddd1\ufe0f Uninstallation",id:"\ufe0f-uninstallation",level:2},{value:"\ud83d\udccb System requirements",id:"-system-requirements-1",level:3},{value:"\ud83e\uddee Processing module",id:"-processing-module-1",level:3},{value:"\u23ed\ufe0f Next Step",id:"\ufe0f-next-step",level:2}];function b(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.h1,{id:"-ubuntu",children:[(0,t.jsx)(l.nO,{})," Ubuntu"]}),"\n",(0,t.jsx)(c.Fragment,{children:(0,t.jsxs)(s.p,{children:["The steps provided below have been tested on ",(0,t.jsx)(l.nO,{})," Ubuntu 20.04 and"," ","\n",(0,t.jsx)(l.nO,{})," Ubuntu 22.04."]})}),"\n",(0,t.jsx)(s.h2,{id:"-system-requirements",children:"\ud83d\udccb System requirements"}),"\n",(0,t.jsx)(c.Fragment,{children:(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsxs)(s.p,{children:["If you have already installed the requirements for the\nlatest major version ",p.x.split(".")[0],", you\ncan directly skip to \ud83e\uddee ",(0,t.jsx)(s.a,{href:"#-processing-module",children:"Processing module"})," installation."]})})}),"\n",(0,t.jsx)(c.Fragment,{children:(0,t.jsxs)(s.h3,{id:"-oneliner-",children:[(0,t.jsx)(l.u5,{})," Oneliner ",(0,t.jsx)(r.W,{size:"~500 MB"})]})}),"\n",(0,t.jsx)(s.p,{children:"Execute this single command to automatically install all necessary system\ndependencies, consuming roughly 500 MB of storage:"}),"\n",(0,t.jsx)(d.U,{version:p.x}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)(s.p,{children:"\ud83d\udc63 Step-by-Step Installation"})}),(0,t.jsxs)(c.Fragment,{children:[(0,t.jsxs)(s.h4,{id:"-system-update--essential-dependencies",children:[(0,t.jsx)(l.nO,{})," System Update & Essential Dependencies"]}),(0,t.jsx)(s.p,{children:"This section ensures your system is updated and equipped with useful\ndependencies:"}),(0,t.jsx)(o.i,{noPython:!0,noNode:!0,noPnpm:!0,hdfTools:!0}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"sudo apt update && \\\nsudo apt upgrade -y && \\\nsudo apt install -y gcc curl ffmpeg hdf5-tools\n"})}),(0,t.jsxs)(s.h4,{id:"-python",children:[(0,t.jsx)(l.un,{})," Python"]}),(0,t.jsxs)(s.p,{children:["Install ",(0,t.jsx)(l.un,{})," Python and related components:"]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"sudo apt update && \\\nsudo apt install -y software-properties-common && \\\nsudo add-apt-repository -y ppa:deadsnakes/ppa && \\\nsudo apt install -y python3.10 python3.10-distutils python3.10-dev python3-pip python3.10-venv && \\\ncurl -sS https://bootstrap.pypa.io/get-pip.py | python3.10\n"})})]})]}),"\n",(0,t.jsx)(s.h2,{id:"-processing-module",children:"\ud83e\uddee Processing module"}),"\n",(0,t.jsxs)("ol",{children:[(0,t.jsx)("li",{children:"Create a new folder on your local disk where you want the module to be installed"}),(0,t.jsxs)("li",{children:["Open a ",(0,t.jsx)(l.k3,{})," terminal window"]}),(0,t.jsxs)("li",{children:["Navigate to that folder with ",(0,t.jsx)(s.code,{children:"cd"})]}),(0,t.jsxs)("li",{children:["Copy, paste then execute the following command to download the installation script",(0,t.jsx)(a.$,{version:p.x})]}),(0,t.jsxs)("li",{children:["Navigate to the folder with ",(0,t.jsx)(s.code,{children:"Files"})," application"]}),(0,t.jsxs)("li",{children:["Right-click on the file",(0,t.jsxs)(s.code,{children:["sse-processing-",p.x,".sh"]})]}),(0,t.jsxs)("li",{children:["Select ",(0,t.jsx)(s.code,{children:"Run as a program"})]})]}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsx)(s.p,{children:"You will need to double-click on this script everytime you want to use the \ud83e\uddee Processing module."})}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)(l.nO,{})," Ubuntu screencast"]})}),(0,t.jsx)(u(),{controls:!0,loop:!0,url:"/sse-13/install-processing-ubuntu.mp4"})]}),"\n",(0,t.jsx)(s.h2,{id:"\ufe0f-uninstallation",children:"\ud83d\uddd1\ufe0f Uninstallation"}),"\n",(0,t.jsx)(s.h3,{id:"-system-requirements-1",children:"\ud83d\udccb System requirements"}),"\n",(0,t.jsx)(c.Fragment,{children:(0,t.jsxs)(s.p,{children:["To remove the installed requirements, open a ",(0,t.jsx)(l.k3,{})," terminal window\nand execute the following command:"]})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"sudo apt remove -y curl ffmpeg hdf5-tools python3.10 python3.10-distutils python3.10-dev python3-pip python3.10-venv && \\\nsudo apt update && \\\nsudo apt autoremove -y\n"})}),"\n",(0,t.jsx)(s.h3,{id:"-processing-module-1",children:"\ud83e\uddee Processing module"}),"\n",(0,t.jsxs)(s.p,{children:["Delete the folder you created when ",(0,t.jsx)(s.a,{href:"#-processing-module",children:"installing"})," the module."]}),"\n",(0,t.jsx)(s.h2,{id:"\ufe0f-next-step",children:"\u23ed\ufe0f Next Step"}),"\n",(0,t.jsxs)(s.p,{children:["Proceed to the \ud83c\udfc3 ",(0,t.jsx)(s.a,{href:"../../getting-started/",children:"Getting started"})," documentation."]})]})}function v(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},7282:(e,s,n)=>{n.d(s,{i:()=>o});var t=n(92418),i=n(13274);const o=e=>{let{noPython:s=!1,noNode:n=!1,noPnpm:o=!1,noCCompiler:l=!1,noCurl:r=!1,noFfmpeg:d=!1,hdfTools:a=!1}=e;return(0,i.jsxs)("ul",{children:[!s&&(0,i.jsxs)("li",{children:[(0,i.jsx)(t.un,{}),"  ",(0,i.jsx)("a",{href:"https://www.python.org/",target:"_blank",children:"Python"})," 3.10"]}),!n&&(0,i.jsxs)("li",{children:[(0,i.jsx)(t.GS,{}),"  ",(0,i.jsx)("a",{href:"https://nodejs.org/",target:"_blank",children:"Node.js"})]}),!o&&(0,i.jsxs)("li",{children:[(0,i.jsx)(t.t_,{}),"  ",(0,i.jsx)("a",{href:"https://pnpm.io/",target:"_blank",children:"pnpm"})]}),!l&&(0,i.jsxs)("li",{children:[(0,i.jsx)(t.lB,{}),"  ",(0,i.jsx)("a",{href:"https://gcc.gnu.org/",target:"_blank",children:"C compiler"})]}),!r&&(0,i.jsxs)("li",{children:[(0,i.jsx)(t.SJ,{}),"  ",(0,i.jsx)("a",{href:"https://curl.se/",target:"_blank",children:"curl"})]}),!d&&(0,i.jsxs)("li",{children:[(0,i.jsx)(t.Ju,{}),"  ",(0,i.jsx)("a",{href:"https://www.ffmpeg.org/",target:"_blank",children:"ffmpeg"})]}),a&&(0,i.jsxs)("li",{children:[(0,i.jsx)(t.NB,{}),"  ",(0,i.jsx)("a",{href:"https://support.hdfgroup.org/tools/",target:"_blank",children:"HDF5 Tools"})]})]})}},87805:(e,s,n)=>{n.d(s,{W:()=>o});const t="size_Ijwc";var i=n(13274);const o=e=>{let{size:s}=e;return(0,i.jsx)("span",{className:t,children:s})}},67278:(e,s,n)=>{n.d(s,{U:()=>l});var t=n(74105),i=n(13274);const o=e=>`bash <(wget -qO- https://raw.githubusercontent.com/sound-scape-explorer/sound-scape-explorer/v${e}/bin/install-requirements.sh)`,l=e=>{let{version:s}=e;return(0,i.jsx)(t.A,{language:"bash",children:o(s)})}},81479:(e,s,n)=>{n.d(s,{$:()=>l});var t=n(74105),i=n(13274);const o=e=>`wget -q https://raw.githubusercontent.com/sound-scape-explorer/sound-scape-explorer/v${e}/bin/sse-processing-${e}.sh && chmod +x sse-processing-${e}.sh`,l=e=>{let{version:s}=e;return(0,i.jsx)(t.A,{language:"bash",children:o(s)})}},39499:(e,s,n)=>{n.d(s,{x:()=>t});const t="13.2.4"}}]);