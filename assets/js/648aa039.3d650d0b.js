"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[32283],{45180:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>y,contentTitle:()=>g,default:()=>v,frontMatter:()=>j,metadata:()=>t,toc:()=>b});const t=JSON.parse('{"id":"processing/installation/ubuntu/index","title":"Ubuntu","description":"<Title","source":"@site/versioned_docs/version-13.4.3/processing/installation/ubuntu/index.mdx","sourceDirName":"processing/installation/ubuntu","slug":"/processing/installation/ubuntu/","permalink":"/docs/13.4.3/processing/installation/ubuntu/","draft":false,"unlisted":false,"editUrl":"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-13.4.3/processing/installation/ubuntu/index.mdx","tags":[],"version":"13.4.3","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Ubuntu"},"sidebar":"tutorialSidebar","previous":{"title":"Windows","permalink":"/docs/13.4.3/processing/installation/windows/"},"next":{"title":"macOS","permalink":"/docs/13.4.3/processing/installation/macos/"}}');var i=s(86070),o=s(15658),r=s(98640),l=s(78419),d=s(70293),a=s(64963),c=s(28108),h=s(64021),u=s(30758),p=s(13649),x=s.n(p),m=s(37574);const j={sidebar_position:2,title:"Ubuntu"},g=" Ubuntu",y={},b=[{value:"\ud83d\udccb System requirements",id:"-system-requirements",level:2},{value:"<BashIcon></BashIcon> Oneliner <SizeInfo></SizeInfo>",id:"-oneliner-",level:3},{value:"<UbuntuIcon></UbuntuIcon> System Update &amp; Essential Dependencies",id:"-system-update--essential-dependencies",level:4},{value:"<PythonIcon></PythonIcon> Python",id:"-python",level:4},{value:"\ud83e\uddee Processing module",id:"-processing-module",level:2},{value:"\ud83d\uddd1\ufe0f Uninstallation",id:"\ufe0f-uninstallation",level:2},{value:"\ud83d\udccb System requirements",id:"-system-requirements-1",level:3},{value:"\ud83e\uddee Processing module",id:"-processing-module-1",level:3},{value:"\u23ed\ufe0f Next Step",id:"\ufe0f-next-step",level:2}];function f(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsxs)(n.h1,{id:"-ubuntu",children:[(0,i.jsx)(l.nO,{})," Ubuntu"]})}),"\n",(0,i.jsx)(a.h,{pre:["\ud83d\udd27 Installation","\ud83e\uddee Processing"],title:"Ubuntu",version:m.x}),"\n",(0,i.jsx)(u.Fragment,{children:(0,i.jsxs)(n.p,{children:["The steps provided below have been tested on ",(0,i.jsx)(l.nO,{})," Ubuntu 20.04 and"," ","\n",(0,i.jsx)(l.nO,{})," Ubuntu 22.04."]})}),"\n",(0,i.jsx)(n.h2,{id:"-system-requirements",children:"\ud83d\udccb System requirements"}),"\n",(0,i.jsx)(u.Fragment,{children:(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["If you have already installed the requirements for the\nlatest major version ",m.x.split(".")[0],", you\ncan directly skip to \ud83e\uddee ",(0,i.jsx)(n.a,{href:"#-processing-module",children:"Processing module"})," installation."]})})}),"\n",(0,i.jsx)(u.Fragment,{children:(0,i.jsxs)(n.h3,{id:"-oneliner-",children:[(0,i.jsx)(l.u5,{})," Oneliner ",(0,i.jsx)(d.W,{size:"~500 MB"})]})}),"\n",(0,i.jsx)(n.p,{children:"Execute this single command to automatically install all necessary system\ndependencies, consuming roughly 500 MB of storage:"}),"\n",(0,i.jsx)(c.U,{version:m.x}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(n.p,{children:"\ud83d\udc63 Step-by-Step Installation"})}),(0,i.jsxs)(u.Fragment,{children:[(0,i.jsxs)(n.h4,{id:"-system-update--essential-dependencies",children:[(0,i.jsx)(l.nO,{})," System Update & Essential Dependencies"]}),(0,i.jsx)(n.p,{children:"This section ensures your system is updated and equipped with useful\ndependencies:"}),(0,i.jsx)(r.i,{noPython:!0,noNode:!0,noPnpm:!0,hdfTools:!0}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt update && \\\nsudo apt upgrade -y && \\\nsudo apt install -y gcc curl ffmpeg hdf5-tools\n"})}),(0,i.jsxs)(n.h4,{id:"-python",children:[(0,i.jsx)(l.un,{})," Python"]}),(0,i.jsxs)(n.p,{children:["Install ",(0,i.jsx)(l.un,{})," Python and related components:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt update && \\\nsudo apt install -y software-properties-common && \\\nsudo add-apt-repository -y ppa:deadsnakes/ppa && \\\nsudo apt install -y python3.10 python3.10-distutils python3.10-dev python3-pip python3.10-venv && \\\ncurl -sS https://bootstrap.pypa.io/get-pip.py | python3.10\n"})})]})]}),"\n",(0,i.jsx)(n.h2,{id:"-processing-module",children:"\ud83e\uddee Processing module"}),"\n",(0,i.jsxs)("ol",{children:[(0,i.jsx)("li",{children:"Create a new folder on your local disk where you want the module to be installed"}),(0,i.jsxs)("li",{children:["Open a ",(0,i.jsx)(l.k3,{})," terminal window"]}),(0,i.jsxs)("li",{children:["Navigate to that folder with ",(0,i.jsx)(n.code,{children:"cd"})]}),(0,i.jsxs)("li",{children:["Copy, paste then execute the following command to download the installation script",(0,i.jsx)(h.$,{version:m.x})]}),(0,i.jsxs)("li",{children:["Navigate to the folder with ",(0,i.jsx)(n.code,{children:"Files"})," application"]}),(0,i.jsxs)("li",{children:["Right-click on the file",(0,i.jsxs)("code",{children:["sse-processing-",m.x,".sh"]})]}),(0,i.jsxs)("li",{children:["Select ",(0,i.jsx)(n.code,{children:"Run as a program"})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"You will need to double-click on this script everytime you want to use the \ud83e\uddee Processing module."})}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(l.nO,{})," Ubuntu screencast"]})}),(0,i.jsx)(x(),{controls:!0,loop:!0,url:"/sse-13/install-processing-ubuntu.mp4"})]}),"\n",(0,i.jsx)(n.h2,{id:"\ufe0f-uninstallation",children:"\ud83d\uddd1\ufe0f Uninstallation"}),"\n",(0,i.jsx)(n.h3,{id:"-system-requirements-1",children:"\ud83d\udccb System requirements"}),"\n",(0,i.jsx)(u.Fragment,{children:(0,i.jsxs)(n.p,{children:["To remove the installed requirements, open a ",(0,i.jsx)(l.k3,{})," terminal window\nand execute the following command:"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt remove -y curl ffmpeg hdf5-tools python3.10 python3.10-distutils python3.10-dev python3-pip python3.10-venv && \\\nsudo apt update && \\\nsudo apt autoremove -y\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-processing-module-1",children:"\ud83e\uddee Processing module"}),"\n",(0,i.jsxs)(n.p,{children:["Delete the folder you created when ",(0,i.jsx)(n.a,{href:"#-processing-module",children:"installing"})," the module."]}),"\n",(0,i.jsx)(n.h2,{id:"\ufe0f-next-step",children:"\u23ed\ufe0f Next Step"}),"\n",(0,i.jsxs)(n.p,{children:["Proceed to the \ud83c\udfc3 ",(0,i.jsx)(n.a,{href:"../../getting-started/",children:"Getting started"})," documentation."]})]})}function v(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}},98640:(e,n,s)=>{s.d(n,{i:()=>o});var t=s(78419),i=s(86070);const o=e=>{let{noPython:n=!1,noNode:s=!1,noPnpm:o=!1,noCCompiler:r=!1,noCurl:l=!1,noFfmpeg:d=!1,hdfTools:a=!1}=e;return(0,i.jsxs)("ul",{children:[!n&&(0,i.jsxs)("li",{children:[(0,i.jsx)(t.un,{}),"  ",(0,i.jsx)("a",{href:"https://www.python.org/",target:"_blank",children:"Python"})," 3.10"]}),!s&&(0,i.jsxs)("li",{children:[(0,i.jsx)(t.GS,{}),"  ",(0,i.jsx)("a",{href:"https://nodejs.org/",target:"_blank",children:"Node.js"})]}),!o&&(0,i.jsxs)("li",{children:[(0,i.jsx)(t.t_,{}),"  ",(0,i.jsx)("a",{href:"https://pnpm.io/",target:"_blank",children:"pnpm"})]}),!r&&(0,i.jsxs)("li",{children:[(0,i.jsx)(t.lB,{}),"  ",(0,i.jsx)("a",{href:"https://gcc.gnu.org/",target:"_blank",children:"C compiler"})]}),!l&&(0,i.jsxs)("li",{children:[(0,i.jsx)(t.SJ,{}),"  ",(0,i.jsx)("a",{href:"https://curl.se/",target:"_blank",children:"curl"})]}),!d&&(0,i.jsxs)("li",{children:[(0,i.jsx)(t.Ju,{}),"  ",(0,i.jsx)("a",{href:"https://www.ffmpeg.org/",target:"_blank",children:"ffmpeg"})]}),a&&(0,i.jsxs)("li",{children:[(0,i.jsx)(t.NB,{}),"  ",(0,i.jsx)("a",{href:"https://support.hdfgroup.org/tools/",target:"_blank",children:"HDF5 Tools"})]})]})}},70293:(e,n,s)=>{s.d(n,{W:()=>o});const t="size_Ijwc";var i=s(86070);const o=e=>{let{size:n}=e;return(0,i.jsx)("span",{className:t,children:n})}},64963:(e,n,s)=>{s.d(n,{h:()=>d});var t=s(87812),i=s(60667),o=s(30758),r=s(86070);const l=e=>`${e} | `,d=e=>{let{title:n,pre:s,version:d}=e;const a=(0,o.useMemo)((()=>{let e="";if(e+=n,s)for(const n of s)e=l(e),e+=n;return d?(e=l(e),e+=`${i.C3} ${d}`):(e=l(e),e+=i.$d),e}),[]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.A,{children:(0,r.jsx)("title",{children:a})})})}},28108:(e,n,s)=>{s.d(n,{U:()=>r});var t=s(82106),i=s(86070);const o=e=>`bash <(wget -qO- https://raw.githubusercontent.com/sound-scape-explorer/sound-scape-explorer/v${e}/bin/install-requirements.sh)`,r=e=>{let{version:n}=e;return(0,i.jsx)(t.A,{language:"bash",children:o(n)})}},64021:(e,n,s)=>{s.d(n,{$:()=>r});var t=s(82106),i=s(86070);const o=e=>`wget -q https://raw.githubusercontent.com/sound-scape-explorer/sound-scape-explorer/v${e}/bin/sse-processing-${e}.sh && chmod +x sse-processing-${e}.sh`,r=e=>{let{version:n}=e;return(0,i.jsx)(t.A,{language:"bash",children:o(n)})}},37574:(e,n,s)=>{s.d(n,{F:()=>i,x:()=>t});const t="13.4.3",i={windows:"246 MB",debian:"151 MB",macos:"183 MB"}}}]);