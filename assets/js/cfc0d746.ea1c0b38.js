"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[8452],{77332:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>h,default:()=>m,frontMatter:()=>d,metadata:()=>p,toc:()=>x});var i=s(2488),l=s(34728),o=s(67424),t=s(48292),r=s(86848),c=s(24564),a=s(96651);const d={sidebar_position:1,title:"Windows"},h=" Windows",p={id:"installation/requirements/windows",title:"Windows",description:"The steps provided below have been tested on  Windows 10 and{' '}",source:"@site/versioned_docs/version-12.3.0/installation/requirements/windows.mdx",sourceDirName:"installation/requirements",slug:"/installation/requirements/windows",permalink:"/docs/installation/requirements/windows",draft:!1,unlisted:!1,editUrl:"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-12.3.0/installation/requirements/windows.mdx",tags:[],version:"12.3.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Windows"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udccb Requirements",permalink:"/docs/installation/requirements/"},next:{title:"Ubuntu",permalink:"/docs/installation/requirements/ubuntu"}},u={},x=[{value:"<CIcon></CIcon> C Compiler",id:"-c-compiler",level:2},{value:"\ud83d\udee0\ufe0f Procedure",id:"\ufe0f-procedure",level:3},{value:"<ChocolateyIcon></ChocolateyIcon> Chocolatey",id:"-chocolatey",level:2},{value:"\ud83d\udee0\ufe0f Procedure",id:"\ufe0f-procedure-1",level:3},{value:"<PythonIcon></PythonIcon> Python",id:"-python",level:2},{value:"\ud83d\udce6 Other Dependencies",id:"-other-dependencies",level:2},{value:"\ud83d\uddd1\ufe0f Uninstallation",id:"\ufe0f-uninstallation",level:2},{value:"\u23ed\ufe0f Next step",id:"\ufe0f-next-step",level:2}];function j(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"-windows",children:[(0,i.jsx)(r.IL,{})," Windows"]}),"\n",(0,i.jsx)(a.Fragment,{children:(0,i.jsxs)(n.p,{children:["The steps provided below have been tested on ",(0,i.jsx)(r.IL,{})," Windows 10 and"," ","\n",(0,i.jsx)(r.IL,{})," Windows 11."]})}),"\n",(0,i.jsx)(a.Fragment,{children:(0,i.jsxs)(n.h2,{id:"-c-compiler",children:[(0,i.jsx)(r.GK,{})," C Compiler"]})}),"\n",(0,i.jsxs)(n.p,{children:["In order to install the\n",(0,i.jsx)(n.a,{href:"https://github.com/scikit-learn-contrib/hdbscan",children:"hdbscan"})," python package later\non, a C compiler will be required."]}),"\n",(0,i.jsx)(a.Fragment,{children:(0,i.jsxs)(n.p,{children:["You can install it on ",(0,i.jsx)(r.IL,{})," Windows through the ",(0,i.jsx)(n.a,{href:"https://visualstudio.microsoft.com/visual-cpp-build-tools/",children:"Visual Studio Build\nTools"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"\ufe0f-procedure",children:"\ud83d\udee0\ufe0f Procedure"}),"\n",(0,i.jsxs)("ol",{children:[(0,i.jsxs)("li",{children:["Navigate to ",(0,i.jsx)(r.Q5,{}),"  ",(0,i.jsx)("a",{href:"https://visualstudio.microsoft.com/visual-cpp-build-tools/",target:"_blank",children:"Microsoft C++ Build Tools"})]}),(0,i.jsx)("li",{children:(0,i.jsxs)("span",{children:["Click on ",(0,i.jsx)(n.code,{children:"Download Build Tools"})," to download the executable"]})}),(0,i.jsx)("li",{children:(0,i.jsxs)("span",{children:["Run the executable (proceed until you get the menu ",(0,i.jsx)("i",{children:"Installing - Visual Studio Build Tools..."}),")"]})}),(0,i.jsx)("li",{children:(0,i.jsxs)("span",{children:["Check the first box for ",(0,i.jsx)(n.code,{children:"Desktop development with C++"})]})}),(0,i.jsx)("li",{children:(0,i.jsxs)("span",{children:["Click on ",(0,i.jsx)(n.code,{children:"Install"})," (requires 6 Gb of disk space)"]})}),(0,i.jsx)("li",{children:(0,i.jsx)("span",{children:(0,i.jsx)(n.p,{children:"Wait for the installation to complete. Once done, you can close the Visual\nStudio Build Tools window"})})})]}),"\n",(0,i.jsx)(a.Fragment,{children:(0,i.jsxs)(n.h2,{id:"-chocolatey",children:[(0,i.jsx)(r.uk,{})," Chocolatey"]})}),"\n",(0,i.jsx)(a.Fragment,{children:(0,i.jsxs)(n.p,{children:["We recommend using ",(0,i.jsx)(r.uk,{})," ",(0,i.jsx)(n.a,{href:"https://chocolatey.org/",children:"Chocolatey"})," as\na package manager to install the necessary requirements for the application on"," ","\n",(0,i.jsx)(r.IL,{})," Windows."]})}),"\n",(0,i.jsx)(n.h3,{id:"\ufe0f-procedure-1",children:"\ud83d\udee0\ufe0f Procedure"}),"\n",(0,i.jsxs)("ol",{children:[(0,i.jsxs)("li",{children:["Click on the start menu (or press ",(0,i.jsx)(c.m,{})," on your keyboard)"]}),(0,i.jsxs)("li",{children:["Type ",(0,i.jsxs)("i",{children:[(0,i.jsx)(r.WO,{})," PowerShell"]})]}),(0,i.jsxs)("li",{children:["Right-click on the ",(0,i.jsxs)("i",{children:[(0,i.jsx)(r.WO,{})," PowerShell"]})," icon"]}),(0,i.jsxs)("li",{children:["Select ",(0,i.jsx)("i",{children:"Run as Administrator"})," (this will open a new elevated terminal)"]}),(0,i.jsxs)("li",{children:["Navigate to ",(0,i.jsx)(r.uk,{}),"  ",(0,i.jsx)("a",{href:"https://chocolatey.org/install",target:"_blank",children:"Chocolatey installation page"})]}),(0,i.jsx)("li",{children:"Scroll to find the installation command"}),(0,i.jsx)("li",{children:"Copy the command"}),(0,i.jsx)("li",{children:"Paste it in your elevated terminal"}),(0,i.jsxs)("li",{children:["Press ",(0,i.jsx)("code",{children:"Enter"})," to execute the command. Wait for the installation to finish."]}),(0,i.jsx)("li",{children:"Keep the terminal open for subsequent steps"})]}),"\n",(0,i.jsx)(a.Fragment,{children:(0,i.jsxs)(n.h2,{id:"-python",children:[(0,i.jsx)(r._o,{})," Python"]})}),"\n",(0,i.jsx)(a.Fragment,{children:(0,i.jsxs)(n.p,{children:["For ",(0,i.jsx)(r._o,{})," Python installation, use the following command:"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"choco install python3 --version=3.10.11 -y\n"})}),"\n",(0,i.jsx)(n.h2,{id:"-other-dependencies",children:"\ud83d\udce6 Other Dependencies"}),"\n",(0,i.jsx)(n.p,{children:"Install the additional dependencies required by the application:"}),"\n",(0,i.jsx)(t.g,{noPython:!0,noCCompiler:!0}),"\n",(0,i.jsx)(n.p,{children:"Use the command below to install these dependencies:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"choco install nodejs-lts pnpm curl ffmpeg -y\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\ufe0f-uninstallation",children:"\ud83d\uddd1\ufe0f Uninstallation"}),"\n",(0,i.jsx)(a.Fragment,{children:(0,i.jsxs)(n.p,{children:["To remove the installed requirements, open an elevated ",(0,i.jsx)(r.WO,{}),"\nPowerShell window (as described in the ",(0,i.jsx)(r.uk,{}),"\n",(0,i.jsx)(n.a,{href:"#-chocolatey",children:"Chocolatey"})," section) and run the following command:"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"choco uninstall python3 nodejs-lts pnpm curl ffmpeg -y\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\ufe0f-next-step",children:"\u23ed\ufe0f Next step"}),"\n",(0,i.jsx)(a.Fragment,{children:(0,i.jsxs)(n.p,{children:["Once completed, close your ",(0,i.jsx)(r.G0,{})," terminal and proceed to the\n",(0,i.jsxs)(n.a,{href:"../application",children:["installation of ",o.Q5]}),"."]})})]})}function m(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}},67424:(e,n,s)=>{s.d(n,{Ep:()=>t,M1:()=>o,O0:()=>r,Q5:()=>i,QT:()=>l});const i="SSE",l="SoundScapeExplorer",o="sound-scape-explorer-VERSION",t="https://discord.gg/eRsQPDBeXg",r="https://github.com/sound-scape-explorer/sound-scape-explorer/discussions"},48292:(e,n,s)=>{s.d(n,{g:()=>o});var i=s(86848),l=s(2488);const o=e=>{let{noPython:n=!1,noNode:s=!1,noPnpm:o=!1,noCCompiler:t=!1,noCurl:r=!1,noFfmpeg:c=!1,hdfTools:a=!1}=e;return(0,l.jsxs)("ul",{children:[!n&&(0,l.jsxs)("li",{children:[(0,l.jsx)(i._o,{}),"  ",(0,l.jsx)("a",{href:"https://www.python.org/",target:"_blank",children:"Python"})," 3.10"]}),!s&&(0,l.jsxs)("li",{children:[(0,l.jsx)(i.OC,{}),"  ",(0,l.jsx)("a",{href:"https://nodejs.org/",target:"_blank",children:"Node.js"})]}),!o&&(0,l.jsxs)("li",{children:[(0,l.jsx)(i.qK,{}),"  ",(0,l.jsx)("a",{href:"https://pnpm.io/",target:"_blank",children:"pnpm"})]}),!t&&(0,l.jsxs)("li",{children:[(0,l.jsx)(i.GK,{}),"  ",(0,l.jsx)("a",{href:"https://gcc.gnu.org/",target:"_blank",children:"C compiler"})]}),!r&&(0,l.jsxs)("li",{children:[(0,l.jsx)(i.Yr,{}),"  ",(0,l.jsx)("a",{href:"https://curl.se/",target:"_blank",children:"curl"})]}),!c&&(0,l.jsxs)("li",{children:[(0,l.jsx)(i.Cw,{}),"  ",(0,l.jsx)("a",{href:"https://www.ffmpeg.org/",target:"_blank",children:"ffmpeg"})]}),a&&(0,l.jsxs)("li",{children:[(0,l.jsx)(i.Qn,{}),"  ",(0,l.jsx)("a",{href:"https://support.hdfgroup.org/tools/",target:"_blank",children:"HDF5 Tools"})]})]})}},24564:(e,n,s)=>{s.d(n,{m:()=>p});var i=s(96651),l=s(15216),o=s.n(l);function t(){return t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var s=arguments[n];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e},t.apply(this,arguments)}function r(e,n){if(null==e)return{};var s,i,l=function(e,n){if(null==e)return{};var s,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)s=o[i],n.indexOf(s)>=0||(l[s]=e[s]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)s=o[i],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(l[s]=e[s])}return l}var c=(0,i.forwardRef)((function(e,n){var s=e.color,l=void 0===s?"currentColor":s,o=e.size,c=void 0===o?24:o,a=r(e,["color","size"]);return i.createElement("svg",t({ref:n,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),i.createElement("path",{d:"M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}))}));c.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},c.displayName="Command";const a=c,d="liSkySBPyM2sxbS_nYH0";var h=s(2488);const p=()=>(0,h.jsxs)("code",{children:[(0,h.jsx)(a,{className:d,size:12})," ","Win"]})}}]);