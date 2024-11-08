"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[14631],{75768:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>m,contentTitle:()=>j,default:()=>w,frontMatter:()=>x,metadata:()=>i,toc:()=>g});const i=JSON.parse('{"id":"modules/processing/installation/windows/index","title":"Windows","description":"The steps provided below have been tested on  Windows 10 and{\' \'}","source":"@site/versioned_docs/version-13.1.8/modules/processing/installation/windows/index.mdx","sourceDirName":"modules/processing/installation/windows","slug":"/modules/processing/installation/windows/","permalink":"/docs/13.1.8/modules/processing/installation/windows/","draft":false,"unlisted":false,"editUrl":"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-13.1.8/modules/processing/installation/windows/index.mdx","tags":[],"version":"13.1.8","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Windows"},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udd27 Installation","permalink":"/docs/13.1.8/modules/processing/installation/"},"next":{"title":"Ubuntu","permalink":"/docs/13.1.8/modules/processing/installation/ubuntu/"}}');var l=s(86070),o=s(15658),t=s(94981),r=s(38540),d=s(6251),c=s(92220),a=s(30758),h=s(13649),p=s.n(h),u=s(86119);const x={sidebar_position:1,title:"Windows"},j=" Windows",m={},g=[{value:"\ud83d\udccb System requirements",id:"-system-requirements",level:2},{value:"<CIcon></CIcon> C Compiler",id:"-c-compiler",level:3},{value:"<ChocolateyIcon></ChocolateyIcon> Chocolatey",id:"-chocolatey",level:3},{value:"<PythonIcon></PythonIcon> Python",id:"-python",level:3},{value:"\ud83d\udce6 Other Dependencies",id:"-other-dependencies",level:3},{value:"\ud83e\uddee Processing module",id:"-processing-module",level:2},{value:"\ud83d\uddd1\ufe0f Uninstallation",id:"\ufe0f-uninstallation",level:2},{value:"\ud83d\udccb System requirements",id:"-system-requirements-1",level:3},{value:"\ud83e\uddee Processing module",id:"-processing-module-1",level:3},{value:"\u23ed\ufe0f Next step",id:"\ufe0f-next-step",level:2}];function f(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsxs)(n.h1,{id:"-windows",children:[(0,l.jsx)(r.BN,{})," Windows"]})}),"\n",(0,l.jsx)(a.Fragment,{children:(0,l.jsxs)(n.p,{children:["The steps provided below have been tested on ",(0,l.jsx)(r.BN,{})," Windows 10 and"," ","\n",(0,l.jsx)(r.BN,{})," Windows 11."]})}),"\n",(0,l.jsx)(n.h2,{id:"-system-requirements",children:"\ud83d\udccb System requirements"}),"\n",(0,l.jsx)(a.Fragment,{children:(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsxs)(n.p,{children:["If you have already installed the requirements for the\nlatest major version ",u.x.split(".")[0],", you\ncan directly skip to \ud83e\uddee ",(0,l.jsx)(n.a,{href:"#-processing-module",children:"Processing module"})," installation."]})})}),"\n",(0,l.jsx)(a.Fragment,{children:(0,l.jsxs)(n.h3,{id:"-c-compiler",children:[(0,l.jsx)(r.lB,{})," C Compiler"]})}),"\n",(0,l.jsxs)(n.p,{children:["In order to install the\n",(0,l.jsx)(n.a,{href:"https://github.com/scikit-learn-contrib/hdbscan",children:"hdbscan"})," python package later\non, a C compiler will be required."]}),"\n",(0,l.jsx)(a.Fragment,{children:(0,l.jsxs)(n.p,{children:["You can install it on ",(0,l.jsx)(r.BN,{})," Windows through the ",(0,l.jsx)(n.a,{href:"https://visualstudio.microsoft.com/visual-cpp-build-tools/",children:"Visual Studio Build\nTools"}),"."]})}),"\n",(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:(0,l.jsx)(n.p,{children:"\ud83d\udee0\ufe0f Installation procedure"})}),(0,l.jsxs)("ol",{children:[(0,l.jsxs)("li",{children:["Navigate to ",(0,l.jsx)(r.u1,{}),"  ",(0,l.jsx)("a",{href:"https://visualstudio.microsoft.com/visual-cpp-build-tools/",target:"_blank",children:"Microsoft C++ Build Tools"})]}),(0,l.jsx)("li",{children:(0,l.jsxs)("span",{children:["Click on ",(0,l.jsx)(n.code,{children:"Download Build Tools"})," to download the executable"]})}),(0,l.jsx)("li",{children:(0,l.jsxs)("span",{children:["Run the executable (proceed until you get the menu ",(0,l.jsx)("i",{children:"Installing - Visual Studio Build Tools..."}),")"]})}),(0,l.jsx)("li",{children:(0,l.jsxs)("span",{children:["Check the first box for ",(0,l.jsx)(n.code,{children:"Desktop development with C++"})]})}),(0,l.jsx)("li",{children:(0,l.jsxs)("span",{children:["Click on ",(0,l.jsx)(n.code,{children:"Install"})," (requires 6 Gb of disk space)"]})}),(0,l.jsx)("li",{children:(0,l.jsx)("span",{children:(0,l.jsx)(n.p,{children:"Wait for the installation to complete. Once done, you can close the Visual\nStudio Build Tools window"})})})]})]}),"\n",(0,l.jsx)(a.Fragment,{children:(0,l.jsxs)(n.h3,{id:"-chocolatey",children:[(0,l.jsx)(r.rB,{})," Chocolatey"]})}),"\n",(0,l.jsx)(a.Fragment,{children:(0,l.jsxs)(n.p,{children:["We recommend using ",(0,l.jsx)(r.rB,{})," ",(0,l.jsx)(n.a,{href:"https://chocolatey.org/",children:"Chocolatey"})," as\na package manager to install the necessary requirements for the application on"," ","\n",(0,l.jsx)(r.BN,{})," Windows."]})}),"\n",(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:(0,l.jsx)(n.p,{children:"\ud83d\udee0\ufe0f Installation procedure"})}),(0,l.jsxs)("ol",{children:[(0,l.jsxs)("li",{children:["Click on the start menu (or press ",(0,l.jsx)(c.Y,{})," on your keyboard)"]}),(0,l.jsxs)("li",{children:["Type ",(0,l.jsxs)("i",{children:[(0,l.jsx)(r.B,{})," PowerShell"]})]}),(0,l.jsxs)("li",{children:["Right-click on the ",(0,l.jsxs)("i",{children:[(0,l.jsx)(r.B,{})," PowerShell"]})," icon"]}),(0,l.jsxs)("li",{children:["Select ",(0,l.jsx)("i",{children:"Run as Administrator"})," (this will open a new elevated terminal)"]}),(0,l.jsxs)("li",{children:["Navigate to ",(0,l.jsx)(r.rB,{}),"  ",(0,l.jsx)("a",{href:"https://chocolatey.org/install",target:"_blank",children:"Chocolatey installation page"})]}),(0,l.jsx)("li",{children:"Scroll to find the installation command"}),(0,l.jsx)("li",{children:"Copy the command"}),(0,l.jsx)("li",{children:"Paste it in your elevated terminal"}),(0,l.jsxs)("li",{children:["Press ",(0,l.jsx)("code",{children:"Enter"})," to execute the command. Wait for the installation to finish."]}),(0,l.jsx)("li",{children:"Keep the terminal open for subsequent steps"})]})]}),"\n",(0,l.jsx)(a.Fragment,{children:(0,l.jsxs)(n.h3,{id:"-python",children:[(0,l.jsx)(r.un,{})," Python"]})}),"\n",(0,l.jsx)(a.Fragment,{children:(0,l.jsxs)(n.p,{children:["For ",(0,l.jsx)(r.un,{})," Python installation, use the following command:"]})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-powershell",children:"choco install python3 --version=3.10.11 -y\n"})}),"\n",(0,l.jsx)(n.h3,{id:"-other-dependencies",children:"\ud83d\udce6 Other Dependencies"}),"\n",(0,l.jsx)(n.p,{children:"Install the additional dependencies required by the application:"}),"\n",(0,l.jsx)(t.i,{noPython:!0,noCCompiler:!0,noNode:!0,noPnpm:!0}),"\n",(0,l.jsx)(n.p,{children:"Use the command below to install these dependencies:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-powershell",children:"choco install curl ffmpeg -y\n"})}),"\n",(0,l.jsx)(n.h2,{id:"-processing-module",children:"\ud83e\uddee Processing module"}),"\n",(0,l.jsxs)("ol",{children:[(0,l.jsx)("li",{children:"Create a new folder on your local disk where you want the module to be installed"}),(0,l.jsxs)("li",{children:["Download the installation script (right click, save as): ",(0,l.jsx)(d.m,{version:u.x})]}),(0,l.jsx)("li",{children:"Place that script in your created folder"}),(0,l.jsx)("li",{children:"Double-click on the script to start the installation process"})]}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"You will need to double-click on this script everytime you want to use the \ud83e\uddee Processing module."})}),"\n",(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)(r.BN,{})," Windows screencast"]})}),(0,l.jsx)(p(),{controls:!0,loop:!0,url:"/sse-13/install-processing-windows.mp4"})]}),"\n",(0,l.jsx)(n.h2,{id:"\ufe0f-uninstallation",children:"\ud83d\uddd1\ufe0f Uninstallation"}),"\n",(0,l.jsx)(n.h3,{id:"-system-requirements-1",children:"\ud83d\udccb System requirements"}),"\n",(0,l.jsx)(a.Fragment,{children:(0,l.jsxs)(n.p,{children:["To remove the installed requirements, open an elevated ",(0,l.jsx)(r.B,{}),"\nPowerShell window (as described in the ",(0,l.jsx)(r.rB,{}),"\n",(0,l.jsx)(n.a,{href:"#-chocolatey",children:"Chocolatey"})," section) and run the following command:"]})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-powershell",children:"choco uninstall python3 curl ffmpeg -y\n"})}),"\n",(0,l.jsx)(n.h3,{id:"-processing-module-1",children:"\ud83e\uddee Processing module"}),"\n",(0,l.jsxs)(n.p,{children:["Delete the folder you created when ",(0,l.jsx)(n.a,{href:"#-processing-module",children:"installing"})," the module."]}),"\n",(0,l.jsx)(n.h2,{id:"\ufe0f-next-step",children:"\u23ed\ufe0f Next step"}),"\n",(0,l.jsxs)(n.p,{children:["Proceed to the \ud83c\udfc3 ",(0,l.jsx)(n.a,{href:"../../getting-started/",children:"Getting started"})," documentation."]})]})}function w(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(f,{...e})}):f(e)}},94981:(e,n,s)=>{s.d(n,{i:()=>o});var i=s(38540),l=s(86070);const o=e=>{let{noPython:n=!1,noNode:s=!1,noPnpm:o=!1,noCCompiler:t=!1,noCurl:r=!1,noFfmpeg:d=!1,hdfTools:c=!1}=e;return(0,l.jsxs)("ul",{children:[!n&&(0,l.jsxs)("li",{children:[(0,l.jsx)(i.un,{}),"  ",(0,l.jsx)("a",{href:"https://www.python.org/",target:"_blank",children:"Python"})," 3.10"]}),!s&&(0,l.jsxs)("li",{children:[(0,l.jsx)(i.GS,{}),"  ",(0,l.jsx)("a",{href:"https://nodejs.org/",target:"_blank",children:"Node.js"})]}),!o&&(0,l.jsxs)("li",{children:[(0,l.jsx)(i.t_,{}),"  ",(0,l.jsx)("a",{href:"https://pnpm.io/",target:"_blank",children:"pnpm"})]}),!t&&(0,l.jsxs)("li",{children:[(0,l.jsx)(i.lB,{}),"  ",(0,l.jsx)("a",{href:"https://gcc.gnu.org/",target:"_blank",children:"C compiler"})]}),!r&&(0,l.jsxs)("li",{children:[(0,l.jsx)(i.SJ,{}),"  ",(0,l.jsx)("a",{href:"https://curl.se/",target:"_blank",children:"curl"})]}),!d&&(0,l.jsxs)("li",{children:[(0,l.jsx)(i.Ju,{}),"  ",(0,l.jsx)("a",{href:"https://www.ffmpeg.org/",target:"_blank",children:"ffmpeg"})]}),c&&(0,l.jsxs)("li",{children:[(0,l.jsx)(i.NB,{}),"  ",(0,l.jsx)("a",{href:"https://support.hdfgroup.org/tools/",target:"_blank",children:"HDF5 Tools"})]})]})}},6251:(e,n,s)=>{s.d(n,{m:()=>l});var i=s(86070);function l(e){let{version:n}=e;return(0,i.jsx)("a",{href:`https://raw.githubusercontent.com/sound-scape-explorer/sound-scape-explorer/v${n}/bin/sse-processing-${n}.bat`,children:`sse-processing-${n}.bat`})}},92220:(e,n,s)=>{s.d(n,{Y:()=>p});var i=s(30758),l=s(2736),o=s.n(l);function t(){return t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var s=arguments[n];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e},t.apply(this,arguments)}function r(e,n){if(null==e)return{};var s,i,l=function(e,n){if(null==e)return{};var s,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)s=o[i],n.indexOf(s)>=0||(l[s]=e[s]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)s=o[i],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(l[s]=e[s])}return l}var d=(0,i.forwardRef)((function(e,n){var s=e.color,l=void 0===s?"currentColor":s,o=e.size,d=void 0===o?24:o,c=r(e,["color","size"]);return i.createElement("svg",t({ref:n,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),i.createElement("path",{d:"M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}))}));d.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},d.displayName="Command";const c=d,a="liSkySBPyM2sxbS_nYH0";var h=s(86070);const p=()=>(0,h.jsxs)("code",{children:[(0,h.jsx)(c,{className:a,size:12})," ","Win"]})},86119:(e,n,s)=>{s.d(n,{F:()=>l,x:()=>i});const i="13.1.8",l={windows:"246 MB",debian:"151 MB",macos:"183 MB"}}}]);