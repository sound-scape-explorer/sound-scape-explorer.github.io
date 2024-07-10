"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[23098],{87107:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>g,contentTitle:()=>j,default:()=>y,frontMatter:()=>u,metadata:()=>m,toc:()=>f});var i=s(86070),o=s(25710),t=s(84200),l=s(22672),r=s(70107),c=s(91304),d=s(55397),a=s(30758),h=s(13649),p=s.n(h),x=s(68286);const u={sidebar_position:1,title:"Windows"},j=" Windows",m={id:"processing/installation/windows/index",title:"Windows",description:"<Title",source:"@site/versioned_docs/version-13.4.3/processing/installation/windows/index.mdx",sourceDirName:"processing/installation/windows",slug:"/processing/installation/windows/",permalink:"/docs/13.4.3/processing/installation/windows/",draft:!1,unlisted:!1,editUrl:"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-13.4.3/processing/installation/windows/index.mdx",tags:[],version:"13.4.3",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Windows"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd27 Installation",permalink:"/docs/13.4.3/processing/installation/"},next:{title:"Ubuntu",permalink:"/docs/13.4.3/processing/installation/ubuntu/"}},g={},f=[{value:"\ud83d\udccb System requirements",id:"-system-requirements",level:2},{value:"<CIcon></CIcon> C Compiler",id:"-c-compiler",level:3},{value:"<ChocolateyIcon></ChocolateyIcon> Chocolatey",id:"-chocolatey",level:3},{value:"<PythonIcon></PythonIcon> Python",id:"-python",level:3},{value:"\ud83d\udce6 Other Dependencies",id:"-other-dependencies",level:3},{value:"\ud83e\uddee Processing module",id:"-processing-module",level:2},{value:"\ud83d\uddd1\ufe0f Uninstallation",id:"\ufe0f-uninstallation",level:2},{value:"\ud83d\udccb System requirements",id:"-system-requirements-1",level:3},{value:"\ud83e\uddee Processing module",id:"-processing-module-1",level:3},{value:"\u23ed\ufe0f Next step",id:"\ufe0f-next-step",level:2}];function w(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"-windows",children:[(0,i.jsx)(l.BN,{})," Windows"]}),"\n",(0,i.jsx)(r.h,{pre:["\ud83d\udd27 Installation","\ud83e\uddee Processing"],title:"Windows",version:x.x}),"\n",(0,i.jsx)(a.Fragment,{children:(0,i.jsxs)(n.p,{children:["The steps provided below have been tested on ",(0,i.jsx)(l.BN,{})," Windows 10 and"," ","\n",(0,i.jsx)(l.BN,{})," Windows 11."]})}),"\n",(0,i.jsx)(n.h2,{id:"-system-requirements",children:"\ud83d\udccb System requirements"}),"\n",(0,i.jsx)(a.Fragment,{children:(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["If you have already installed the requirements for the\nlatest major version ",x.x.split(".")[0],", you\ncan directly skip to \ud83e\uddee ",(0,i.jsx)(n.a,{href:"#-processing-module",children:"Processing module"})," installation."]})})}),"\n",(0,i.jsx)(a.Fragment,{children:(0,i.jsxs)(n.h3,{id:"-c-compiler",children:[(0,i.jsx)(l.lB,{})," C Compiler"]})}),"\n",(0,i.jsxs)(n.p,{children:["In order to install the\n",(0,i.jsx)(n.a,{href:"https://github.com/scikit-learn-contrib/hdbscan",children:"hdbscan"})," python package later\non, a C compiler will be required."]}),"\n",(0,i.jsx)(a.Fragment,{children:(0,i.jsxs)(n.p,{children:["You can install it on ",(0,i.jsx)(l.BN,{})," Windows through the ",(0,i.jsx)(n.a,{href:"https://visualstudio.microsoft.com/visual-cpp-build-tools/",children:"Visual Studio Build\nTools"}),"."]})}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(n.p,{children:"\ud83d\udee0\ufe0f Installation procedure"})}),(0,i.jsxs)("ol",{children:[(0,i.jsxs)("li",{children:["Navigate to ",(0,i.jsx)(l.u1,{}),"  ",(0,i.jsx)("a",{href:"https://visualstudio.microsoft.com/visual-cpp-build-tools/",target:"_blank",children:"Microsoft C++ Build Tools"})]}),(0,i.jsx)("li",{children:(0,i.jsxs)("span",{children:["Click on ",(0,i.jsx)(n.code,{children:"Download Build Tools"})," to download the executable"]})}),(0,i.jsx)("li",{children:(0,i.jsxs)("span",{children:["Run the executable (proceed until you get the menu ",(0,i.jsx)("i",{children:"Installing - Visual Studio Build Tools..."}),")"]})}),(0,i.jsx)("li",{children:(0,i.jsxs)("span",{children:["Check the first box for ",(0,i.jsx)(n.code,{children:"Desktop development with C++"})]})}),(0,i.jsx)("li",{children:(0,i.jsxs)("span",{children:["Click on ",(0,i.jsx)(n.code,{children:"Install"})," (requires 6 Gb of disk space)"]})}),(0,i.jsx)("li",{children:(0,i.jsx)("span",{children:(0,i.jsx)(n.p,{children:"Wait for the installation to complete. Once done, you can close the Visual\nStudio Build Tools window"})})})]})]}),"\n",(0,i.jsx)(a.Fragment,{children:(0,i.jsxs)(n.h3,{id:"-chocolatey",children:[(0,i.jsx)(l.rB,{})," Chocolatey"]})}),"\n",(0,i.jsx)(a.Fragment,{children:(0,i.jsxs)(n.p,{children:["We recommend using ",(0,i.jsx)(l.rB,{})," ",(0,i.jsx)(n.a,{href:"https://chocolatey.org/",children:"Chocolatey"})," as\na package manager to install the necessary requirements for the application on"," ","\n",(0,i.jsx)(l.BN,{})," Windows."]})}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(n.p,{children:"\ud83d\udee0\ufe0f Installation procedure"})}),(0,i.jsxs)("ol",{children:[(0,i.jsxs)("li",{children:["Click on the start menu (or press ",(0,i.jsx)(d.Y,{})," on your keyboard)"]}),(0,i.jsxs)("li",{children:["Type ",(0,i.jsxs)("i",{children:[(0,i.jsx)(l.B,{})," PowerShell"]})]}),(0,i.jsxs)("li",{children:["Right-click on the ",(0,i.jsxs)("i",{children:[(0,i.jsx)(l.B,{})," PowerShell"]})," icon"]}),(0,i.jsxs)("li",{children:["Select ",(0,i.jsx)("i",{children:"Run as Administrator"})," (this will open a new elevated terminal)"]}),(0,i.jsxs)("li",{children:["Navigate to ",(0,i.jsx)(l.rB,{}),"  ",(0,i.jsx)("a",{href:"https://chocolatey.org/install",target:"_blank",children:"Chocolatey installation page"})]}),(0,i.jsx)("li",{children:"Scroll to find the installation command"}),(0,i.jsx)("li",{children:"Copy the command"}),(0,i.jsx)("li",{children:"Paste it in your elevated terminal"}),(0,i.jsxs)("li",{children:["Press ",(0,i.jsx)("code",{children:"Enter"})," to execute the command. Wait for the installation to finish."]}),(0,i.jsx)("li",{children:"Keep the terminal open for subsequent steps"})]})]}),"\n",(0,i.jsx)(a.Fragment,{children:(0,i.jsxs)(n.h3,{id:"-python",children:[(0,i.jsx)(l.un,{})," Python"]})}),"\n",(0,i.jsx)(a.Fragment,{children:(0,i.jsxs)(n.p,{children:["For ",(0,i.jsx)(l.un,{})," Python installation, use the following command:"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"choco install python3 --version=3.10.11 -y\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-other-dependencies",children:"\ud83d\udce6 Other Dependencies"}),"\n",(0,i.jsx)(n.p,{children:"Install the additional dependencies required by the application:"}),"\n",(0,i.jsx)(t.i,{noPython:!0,noCCompiler:!0,noNode:!0,noPnpm:!0}),"\n",(0,i.jsx)(n.p,{children:"Use the command below to install these dependencies:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"choco install curl ffmpeg -y\n"})}),"\n",(0,i.jsx)(n.h2,{id:"-processing-module",children:"\ud83e\uddee Processing module"}),"\n",(0,i.jsxs)("ol",{children:[(0,i.jsx)("li",{children:"Create a new folder on your local disk where you want the module to be installed"}),(0,i.jsxs)("li",{children:["Download the installation script (right click, save as): ",(0,i.jsx)(c.m,{version:x.x})]}),(0,i.jsx)("li",{children:"Place that script in your created folder"}),(0,i.jsx)("li",{children:"Double-click on the script to start the installation process"})]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"You will need to double-click on this script everytime you want to use the \ud83e\uddee Processing module."})}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(l.BN,{})," Windows screencast"]})}),(0,i.jsx)(p(),{controls:!0,loop:!0,url:"/sse-13/install-processing-windows.mp4"})]}),"\n",(0,i.jsx)(n.h2,{id:"\ufe0f-uninstallation",children:"\ud83d\uddd1\ufe0f Uninstallation"}),"\n",(0,i.jsx)(n.h3,{id:"-system-requirements-1",children:"\ud83d\udccb System requirements"}),"\n",(0,i.jsx)(a.Fragment,{children:(0,i.jsxs)(n.p,{children:["To remove the installed requirements, open an elevated ",(0,i.jsx)(l.B,{}),"\nPowerShell window (as described in the ",(0,i.jsx)(l.rB,{}),"\n",(0,i.jsx)(n.a,{href:"#-chocolatey",children:"Chocolatey"})," section) and run the following command:"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"choco uninstall python3 curl ffmpeg -y\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-processing-module-1",children:"\ud83e\uddee Processing module"}),"\n",(0,i.jsxs)(n.p,{children:["Delete the folder you created when ",(0,i.jsx)(n.a,{href:"#-processing-module",children:"installing"})," the module."]}),"\n",(0,i.jsx)(n.h2,{id:"\ufe0f-next-step",children:"\u23ed\ufe0f Next step"}),"\n",(0,i.jsxs)(n.p,{children:["Proceed to the \ud83c\udfc3 ",(0,i.jsx)(n.a,{href:"../../getting-started/",children:"Getting started"})," documentation."]})]})}function y(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(w,{...e})}):w(e)}},41251:(e,n,s)=>{s.d(n,{$d:()=>o,C3:()=>i,UP:()=>r,gX:()=>t,z9:()=>l});const i="SSE",o="SoundScapeExplorer",t="sound-scape-explorer-VERSION",l="https://discord.gg/eRsQPDBeXg",r="https://github.com/sound-scape-explorer/sound-scape-explorer/discussions"},84200:(e,n,s)=>{s.d(n,{i:()=>t});var i=s(22672),o=s(86070);const t=e=>{let{noPython:n=!1,noNode:s=!1,noPnpm:t=!1,noCCompiler:l=!1,noCurl:r=!1,noFfmpeg:c=!1,hdfTools:d=!1}=e;return(0,o.jsxs)("ul",{children:[!n&&(0,o.jsxs)("li",{children:[(0,o.jsx)(i.un,{}),"  ",(0,o.jsx)("a",{href:"https://www.python.org/",target:"_blank",children:"Python"})," 3.10"]}),!s&&(0,o.jsxs)("li",{children:[(0,o.jsx)(i.GS,{}),"  ",(0,o.jsx)("a",{href:"https://nodejs.org/",target:"_blank",children:"Node.js"})]}),!t&&(0,o.jsxs)("li",{children:[(0,o.jsx)(i.t_,{}),"  ",(0,o.jsx)("a",{href:"https://pnpm.io/",target:"_blank",children:"pnpm"})]}),!l&&(0,o.jsxs)("li",{children:[(0,o.jsx)(i.lB,{}),"  ",(0,o.jsx)("a",{href:"https://gcc.gnu.org/",target:"_blank",children:"C compiler"})]}),!r&&(0,o.jsxs)("li",{children:[(0,o.jsx)(i.SJ,{}),"  ",(0,o.jsx)("a",{href:"https://curl.se/",target:"_blank",children:"curl"})]}),!c&&(0,o.jsxs)("li",{children:[(0,o.jsx)(i.Ju,{}),"  ",(0,o.jsx)("a",{href:"https://www.ffmpeg.org/",target:"_blank",children:"ffmpeg"})]}),d&&(0,o.jsxs)("li",{children:[(0,o.jsx)(i.NB,{}),"  ",(0,o.jsx)("a",{href:"https://support.hdfgroup.org/tools/",target:"_blank",children:"HDF5 Tools"})]})]})}},70107:(e,n,s)=>{s.d(n,{h:()=>c});var i=s(29339),o=s(41251),t=s(30758),l=s(86070);const r=e=>`${e} | `,c=e=>{let{title:n,pre:s,version:c}=e;const d=(0,t.useMemo)((()=>{let e="";if(e+=n,s)for(const n of s)e=r(e),e+=n;return c?(e=r(e),e+=`${o.C3} ${c}`):(e=r(e),e+=o.$d),e}),[]);return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(i.A,{children:(0,l.jsx)("title",{children:d})})})}},91304:(e,n,s)=>{s.d(n,{m:()=>o});var i=s(86070);function o(e){let{version:n}=e;return(0,i.jsx)("a",{href:`https://raw.githubusercontent.com/sound-scape-explorer/sound-scape-explorer/v${n}/bin/sse-processing-${n}.bat`,children:`sse-processing-${n}.bat`})}},55397:(e,n,s)=>{s.d(n,{Y:()=>p});var i=s(30758),o=s(2736),t=s.n(o);function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var s=arguments[n];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e},l.apply(this,arguments)}function r(e,n){if(null==e)return{};var s,i,o=function(e,n){if(null==e)return{};var s,i,o={},t=Object.keys(e);for(i=0;i<t.length;i++)s=t[i],n.indexOf(s)>=0||(o[s]=e[s]);return o}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(i=0;i<t.length;i++)s=t[i],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(o[s]=e[s])}return o}var c=(0,i.forwardRef)((function(e,n){var s=e.color,o=void 0===s?"currentColor":s,t=e.size,c=void 0===t?24:t,d=r(e,["color","size"]);return i.createElement("svg",l({ref:n,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.createElement("path",{d:"M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}))}));c.propTypes={color:t().string,size:t().oneOfType([t().string,t().number])},c.displayName="Command";const d=c,a="liSkySBPyM2sxbS_nYH0";var h=s(86070);const p=()=>(0,h.jsxs)("code",{children:[(0,h.jsx)(d,{className:a,size:12})," ","Win"]})},68286:(e,n,s)=>{s.d(n,{F:()=>o,x:()=>i});const i="13.4.3",o={windows:"246 MB",debian:"151 MB",macos:"183 MB"}}}]);