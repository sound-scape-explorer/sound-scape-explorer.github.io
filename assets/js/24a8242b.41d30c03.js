"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[94944],{14341:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>y,contentTitle:()=>j,default:()=>f,frontMatter:()=>m,metadata:()=>g,toc:()=>b});var t=s(86070),i=s(25710),o=s(84200),r=s(22672),l=s(59927),d=s(70107),a=s(99716),c=s(4845),h=s(30758),u=s(13649),p=s.n(u),x=s(48530);const m={sidebar_position:2,title:"Ubuntu"},j=" Ubuntu",g={id:"processing/installation/ubuntu/index",title:"Ubuntu",description:"<Title",source:"@site/versioned_docs/version-13.5.2/processing/installation/ubuntu/index.mdx",sourceDirName:"processing/installation/ubuntu",slug:"/processing/installation/ubuntu/",permalink:"/docs/13.5.2/processing/installation/ubuntu/",draft:!1,unlisted:!1,editUrl:"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-13.5.2/processing/installation/ubuntu/index.mdx",tags:[],version:"13.5.2",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Ubuntu"},sidebar:"tutorialSidebar",previous:{title:"Windows",permalink:"/docs/13.5.2/processing/installation/windows/"},next:{title:"macOS",permalink:"/docs/13.5.2/processing/installation/macos/"}},y={},b=[{value:"\ud83d\udccb System requirements",id:"-system-requirements",level:2},{value:"<BashIcon></BashIcon> Oneliner <SizeInfo></SizeInfo>",id:"-oneliner-",level:3},{value:"<UbuntuIcon></UbuntuIcon> System Update &amp; Essential Dependencies",id:"-system-update--essential-dependencies",level:4},{value:"<PythonIcon></PythonIcon> Python",id:"-python",level:4},{value:"\ud83e\uddee Processing module",id:"-processing-module",level:2},{value:"\ud83d\uddd1\ufe0f Uninstallation",id:"\ufe0f-uninstallation",level:2},{value:"\ud83d\udccb System requirements",id:"-system-requirements-1",level:3},{value:"\ud83e\uddee Processing module",id:"-processing-module-1",level:3},{value:"\u23ed\ufe0f Next Step",id:"\ufe0f-next-step",level:2}];function v(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsxs)(n.h1,{id:"-ubuntu",children:[(0,t.jsx)(r.nO,{})," Ubuntu"]})}),"\n",(0,t.jsx)(d.h,{pre:["\ud83d\udd27 Installation","\ud83e\uddee Processing"],title:"Ubuntu",version:x.x}),"\n",(0,t.jsx)(h.Fragment,{children:(0,t.jsxs)(n.p,{children:["The steps provided below have been tested on ",(0,t.jsx)(r.nO,{})," Ubuntu 20.04 and"," ","\n",(0,t.jsx)(r.nO,{})," Ubuntu 22.04."]})}),"\n",(0,t.jsx)(n.h2,{id:"-system-requirements",children:"\ud83d\udccb System requirements"}),"\n",(0,t.jsx)(h.Fragment,{children:(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["If you have already installed the requirements for the\nlatest major version ",x.x.split(".")[0],", you\ncan directly skip to \ud83e\uddee ",(0,t.jsx)(n.a,{href:"#-processing-module",children:"Processing module"})," installation."]})})}),"\n",(0,t.jsx)(h.Fragment,{children:(0,t.jsxs)(n.h3,{id:"-oneliner-",children:[(0,t.jsx)(r.u5,{})," Oneliner ",(0,t.jsx)(l.W,{size:"~500 MB"})]})}),"\n",(0,t.jsx)(n.p,{children:"Execute this single command to automatically install all necessary system\ndependencies, consuming roughly 500 MB of storage:"}),"\n",(0,t.jsx)(a.U,{version:x.x}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)(n.p,{children:"\ud83d\udc63 Step-by-Step Installation"})}),(0,t.jsxs)(h.Fragment,{children:[(0,t.jsxs)(n.h4,{id:"-system-update--essential-dependencies",children:[(0,t.jsx)(r.nO,{})," System Update & Essential Dependencies"]}),(0,t.jsx)(n.p,{children:"This section ensures your system is updated and equipped with useful\ndependencies:"}),(0,t.jsx)(o.i,{noPython:!0,noNode:!0,noPnpm:!0,hdfTools:!0}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt update && \\\nsudo apt upgrade -y && \\\nsudo apt install -y gcc curl ffmpeg hdf5-tools\n"})}),(0,t.jsxs)(n.h4,{id:"-python",children:[(0,t.jsx)(r.un,{})," Python"]}),(0,t.jsxs)(n.p,{children:["Install ",(0,t.jsx)(r.un,{})," Python and related components:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt update && \\\nsudo apt install -y software-properties-common && \\\nsudo add-apt-repository -y ppa:deadsnakes/ppa && \\\nsudo apt install -y python3.10 python3.10-distutils python3.10-dev python3-pip python3.10-venv && \\\ncurl -sS https://bootstrap.pypa.io/get-pip.py | python3.10\n"})})]})]}),"\n",(0,t.jsx)(n.h2,{id:"-processing-module",children:"\ud83e\uddee Processing module"}),"\n",(0,t.jsxs)("ol",{children:[(0,t.jsx)("li",{children:"Create a new folder on your local disk where you want the module to be installed"}),(0,t.jsxs)("li",{children:["Open a ",(0,t.jsx)(r.k3,{})," terminal window"]}),(0,t.jsxs)("li",{children:["Navigate to that folder with ",(0,t.jsx)(n.code,{children:"cd"})]}),(0,t.jsxs)("li",{children:["Copy, paste then execute the following command to download the installation script",(0,t.jsx)(c.$,{version:x.x})]}),(0,t.jsxs)("li",{children:["Navigate to the folder with ",(0,t.jsx)(n.code,{children:"Files"})," application"]}),(0,t.jsxs)("li",{children:["Right-click on the file",(0,t.jsxs)(n.code,{children:["sse-processing-",x.x,".sh"]})]}),(0,t.jsxs)("li",{children:["Select ",(0,t.jsx)(n.code,{children:"Run as a program"})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"You will need to double-click on this script everytime you want to use the \ud83e\uddee Processing module."})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(r.nO,{})," Ubuntu screencast"]})}),(0,t.jsx)(p(),{controls:!0,loop:!0,url:"/sse-13/install-processing-ubuntu.mp4"})]}),"\n",(0,t.jsx)(n.h2,{id:"\ufe0f-uninstallation",children:"\ud83d\uddd1\ufe0f Uninstallation"}),"\n",(0,t.jsx)(n.h3,{id:"-system-requirements-1",children:"\ud83d\udccb System requirements"}),"\n",(0,t.jsx)(h.Fragment,{children:(0,t.jsxs)(n.p,{children:["To remove the installed requirements, open a ",(0,t.jsx)(r.k3,{})," terminal window\nand execute the following command:"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt remove -y curl ffmpeg hdf5-tools python3.10 python3.10-distutils python3.10-dev python3-pip python3.10-venv && \\\nsudo apt update && \\\nsudo apt autoremove -y\n"})}),"\n",(0,t.jsx)(n.h3,{id:"-processing-module-1",children:"\ud83e\uddee Processing module"}),"\n",(0,t.jsxs)(n.p,{children:["Delete the folder you created when ",(0,t.jsx)(n.a,{href:"#-processing-module",children:"installing"})," the module."]}),"\n",(0,t.jsx)(n.h2,{id:"\ufe0f-next-step",children:"\u23ed\ufe0f Next Step"}),"\n",(0,t.jsxs)(n.p,{children:["Proceed to the \ud83c\udfc3 ",(0,t.jsx)(n.a,{href:"../../getting-started/",children:"Getting started"})," documentation."]})]})}function f(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(v,{...e})}):v(e)}},84200:(e,n,s)=>{s.d(n,{i:()=>o});var t=s(22672),i=s(86070);const o=e=>{let{noPython:n=!1,noNode:s=!1,noPnpm:o=!1,noCCompiler:r=!1,noCurl:l=!1,noFfmpeg:d=!1,hdfTools:a=!1}=e;return(0,i.jsxs)("ul",{children:[!n&&(0,i.jsxs)("li",{children:[(0,i.jsx)(t.un,{}),"  ",(0,i.jsx)("a",{href:"https://www.python.org/",target:"_blank",children:"Python"})," 3.10"]}),!s&&(0,i.jsxs)("li",{children:[(0,i.jsx)(t.GS,{}),"  ",(0,i.jsx)("a",{href:"https://nodejs.org/",target:"_blank",children:"Node.js"})]}),!o&&(0,i.jsxs)("li",{children:[(0,i.jsx)(t.t_,{}),"  ",(0,i.jsx)("a",{href:"https://pnpm.io/",target:"_blank",children:"pnpm"})]}),!r&&(0,i.jsxs)("li",{children:[(0,i.jsx)(t.lB,{}),"  ",(0,i.jsx)("a",{href:"https://gcc.gnu.org/",target:"_blank",children:"C compiler"})]}),!l&&(0,i.jsxs)("li",{children:[(0,i.jsx)(t.SJ,{}),"  ",(0,i.jsx)("a",{href:"https://curl.se/",target:"_blank",children:"curl"})]}),!d&&(0,i.jsxs)("li",{children:[(0,i.jsx)(t.Ju,{}),"  ",(0,i.jsx)("a",{href:"https://www.ffmpeg.org/",target:"_blank",children:"ffmpeg"})]}),a&&(0,i.jsxs)("li",{children:[(0,i.jsx)(t.NB,{}),"  ",(0,i.jsx)("a",{href:"https://support.hdfgroup.org/tools/",target:"_blank",children:"HDF5 Tools"})]})]})}},59927:(e,n,s)=>{s.d(n,{W:()=>o});const t="size_Ijwc";var i=s(86070);const o=e=>{let{size:n}=e;return(0,i.jsx)("span",{className:t,children:n})}},70107:(e,n,s)=>{s.d(n,{h:()=>d});var t=s(71653),i=s(41251),o=s(30758),r=s(86070);const l=e=>`${e} | `,d=e=>{let{title:n,pre:s,version:d}=e;const a=(0,o.useMemo)((()=>{let e="";if(e+=n,s)for(const n of s)e=l(e),e+=n;return d?(e=l(e),e+=`${i.C3} ${d}`):(e=l(e),e+=i.$d),e}),[]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.A,{children:(0,r.jsx)("title",{children:a})})})}},99716:(e,n,s)=>{s.d(n,{U:()=>r});var t=s(84895),i=s(86070);const o=e=>`bash <(wget -qO- https://raw.githubusercontent.com/sound-scape-explorer/sound-scape-explorer/v${e}/bin/install-requirements.sh)`,r=e=>{let{version:n}=e;return(0,i.jsx)(t.A,{language:"bash",children:o(n)})}},4845:(e,n,s)=>{s.d(n,{$:()=>r});var t=s(84895),i=s(86070);const o=e=>`wget -q https://raw.githubusercontent.com/sound-scape-explorer/sound-scape-explorer/v${e}/bin/sse-processing-${e}.sh && chmod +x sse-processing-${e}.sh`,r=e=>{let{version:n}=e;return(0,i.jsx)(t.A,{language:"bash",children:o(n)})}},48530:(e,n,s)=>{s.d(n,{F:()=>i,x:()=>t});const t="13.5.2",i={windows:"246 MB",debian:"151 MB",macos:"183 MB"}}}]);