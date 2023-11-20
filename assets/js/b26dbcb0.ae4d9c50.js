"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[1777],{8514:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var s=o(1527),i=o(3883),l=o(2098),r=o(9903),t=o(9189);const c={sidebar_position:1,title:"Windows"},a=" Windows",d={id:"installation/requirements/windows",title:"Windows",description:"The steps provided below have been tested on  Windows 10",source:"@site/docs/installation/requirements/windows.mdx",sourceDirName:"installation/requirements",slug:"/installation/requirements/windows",permalink:"/docs/next/installation/requirements/windows",draft:!1,unlisted:!1,editUrl:"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/docs/installation/requirements/windows.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Windows"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udccb Requirements",permalink:"/docs/next/installation/requirements/"},next:{title:"Ubuntu",permalink:"/docs/next/installation/requirements/ubuntu"}},h={},p=[{value:"<CIcon></CIcon> C Compiler",id:"-c-compiler",level:2},{value:"\ud83d\udee0\ufe0f Procedure",id:"\ufe0f-procedure",level:3},{value:"<ChocolateyIcon></ChocolateyIcon> Chocolatey",id:"-chocolatey",level:2},{value:"\ud83d\udee0\ufe0f Procedure",id:"\ufe0f-procedure-1",level:3},{value:"<PythonIcon></PythonIcon> Python",id:"-python",level:2},{value:"\ud83d\udce6 Other Dependencies",id:"-other-dependencies",level:2},{value:"\ud83d\uddd1\ufe0f Uninstallation",id:"\ufe0f-uninstallation",level:2},{value:"\u23ed\ufe0f Next step",id:"\ufe0f-next-step",level:2}];function x(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"-windows",children:[(0,s.jsx)(l.WI,{})," Windows"]}),"\n",(0,s.jsxs)(n.p,{children:["The steps provided below have been tested on ",(0,s.jsx)(l.WI,{})," Windows 10\nand ",(0,s.jsx)(l.WI,{})," Windows 11."]}),"\n",(0,s.jsxs)(n.h2,{id:"-c-compiler",children:[(0,s.jsx)(l.m2,{})," C Compiler"]}),"\n",(0,s.jsxs)(n.p,{children:["In order to install the\n",(0,s.jsx)(n.a,{href:"https://github.com/scikit-learn-contrib/hdbscan",children:"hdbscan"})," python package later\non, a C compiler will be required."]}),"\n",(0,s.jsxs)(n.p,{children:["You can install it on ",(0,s.jsx)(l.WI,{})," Windows through the ",(0,s.jsx)(n.a,{href:"https://visualstudio.microsoft.com/visual-cpp-build-tools/",children:"Visual Studio Build\nTools"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"\ufe0f-procedure",children:"\ud83d\udee0\ufe0f Procedure"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Navigate to ",(0,s.jsx)(l.Dg,{})," ",(0,s.jsx)(n.a,{href:"https://visualstudio.microsoft.com/visual-cpp-build-tools/",children:"Microsft C++ Build\nTools"})]}),"\n",(0,s.jsxs)(n.li,{children:["Click on ",(0,s.jsx)(n.code,{children:"Download Build Tools"})," to download the executable"]}),"\n",(0,s.jsxs)(n.li,{children:["Run the executable (proceed until you get the menu ",(0,s.jsx)(n.em,{children:"Installing - Visual\nStudio Build Tools..."}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["Check the first box for ",(0,s.jsx)(n.code,{children:"Desktop development with C++"})]}),"\n",(0,s.jsxs)(n.li,{children:["Click on ",(0,s.jsx)(n.code,{children:"Install"})," (requires 6 Gb of disk space)"]}),"\n",(0,s.jsx)(n.li,{children:"Wait for the installation to complete. Once done, you can close the Visual\nStudio Build Tools window"}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"-chocolatey",children:[(0,s.jsx)(l.uf,{})," Chocolatey"]}),"\n",(0,s.jsxs)(n.p,{children:["We recommend using ",(0,s.jsx)(l.uf,{})," ",(0,s.jsx)(n.a,{href:"https://chocolatey.org/",children:"Chocolatey"})," as\na package manager to install the necessary requirements for the application\non ",(0,s.jsx)(l.WI,{})," Windows."]}),"\n",(0,s.jsx)(n.h3,{id:"\ufe0f-procedure-1",children:"\ud83d\udee0\ufe0f Procedure"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Click on the start menu (or press ",(0,s.jsx)(t.i,{})," on your keyboard)"]}),"\n",(0,s.jsxs)(n.li,{children:["Type ",(0,s.jsxs)(n.em,{children:[(0,s.jsx)(l.oQ,{})," PowerShell"]})]}),"\n",(0,s.jsxs)(n.li,{children:["Right-click on the ",(0,s.jsxs)(n.em,{children:[(0,s.jsx)(l.oQ,{})," PowerShell"]})," icon"]}),"\n",(0,s.jsxs)(n.li,{children:["Select ",(0,s.jsx)(n.em,{children:"Run as Administrator"})," (this will open a new elevated terminal)"]}),"\n",(0,s.jsxs)(n.li,{children:["Navigate to ",(0,s.jsx)(l.uf,{})," ",(0,s.jsx)(n.a,{href:"https://chocolatey.org/install",children:"Chocolatey installation\npage"})]}),"\n",(0,s.jsx)(n.li,{children:"Scroll to find the installation command"}),"\n",(0,s.jsx)(n.li,{children:"Copy the command"}),"\n",(0,s.jsx)(n.li,{children:"Paste it in your elevated terminal"}),"\n",(0,s.jsxs)(n.li,{children:["Press ",(0,s.jsx)(n.code,{children:"Enter"})," to execute the command. Wait for the installation to finish."]}),"\n",(0,s.jsx)(n.li,{children:"Keep the terminal open for subsequent steps"}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"-python",children:[(0,s.jsx)(l.gx,{})," Python"]}),"\n",(0,s.jsxs)(n.p,{children:["For ",(0,s.jsx)(l.gx,{})," Python installation, use the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"choco install python3 --version=3.10.11 -y\n"})}),"\n",(0,s.jsx)(n.h2,{id:"-other-dependencies",children:"\ud83d\udce6 Other Dependencies"}),"\n",(0,s.jsx)(n.p,{children:"Install the additional dependencies required by the application:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(l.qh,{})," ",(0,s.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(l.mR,{})," ",(0,s.jsx)(n.a,{href:"https://pnpm.io/",children:"pnpm"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(l.Vj,{})," ",(0,s.jsx)(n.a,{href:"https://curl.se/",children:"curl"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(l.NX,{})," ",(0,s.jsx)(n.a,{href:"https://www.ffmpeg.org/",children:"ffmpeg"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Use the command below to install these dependencies:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"choco install nodejs-lts pnpm curl ffmpeg -y\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\ufe0f-uninstallation",children:"\ud83d\uddd1\ufe0f Uninstallation"}),"\n",(0,s.jsxs)(n.p,{children:["To remove the installed requirements, open an elevated ",(0,s.jsx)(l.oQ,{}),"\nPowerShell window (as described in the ",(0,s.jsx)(l.uf,{}),"\n",(0,s.jsx)(n.a,{href:"#-chocolatey",children:"Chocolatey"})," section) and run the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"choco uninstall python3 nodejs-lts pnpm curl ffmpeg -y\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\ufe0f-next-step",children:"\u23ed\ufe0f Next step"}),"\n",(0,s.jsxs)(n.p,{children:["Once completed, close your ",(0,s.jsx)(l.Fx,{})," terminal and proceed to the\n",(0,s.jsxs)(n.a,{href:"../application",children:["installation of ",r.iC]}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},9903:(e,n,o)=>{o.d(n,{$p:()=>l,PB:()=>i,ZT:()=>t,i6:()=>r,iC:()=>s});const s="SSE",i="SoundScapeExplorer",l="sound-scape-explorer-VERSION",r="https://discord.gg/eRsQPDBeXg",t="https://github.com/sound-scape-explorer/sound-scape-explorer/discussions"},2098:(e,n,o)=>{o.d(n,{yO:()=>P,ht:()=>g,m2:()=>u,uf:()=>v,eL:()=>F,Vj:()=>j,uo:()=>t,NX:()=>m,xw:()=>W,cF:()=>x,Fn:()=>p,Dg:()=>y,qh:()=>f,FS:()=>S,mR:()=>w,oQ:()=>b,gx:()=>c,wS:()=>O,id:()=>a,Fx:()=>k,cc:()=>h,WI:()=>d,SU:()=>C});var s=o(8900);const i="icon_wDXz";var l=o(1527);const r=e=>{let{icon:n,color:o}=e;return(0,l.jsx)(s.JO,{className:i,icon:`simple-icons:${n}`,style:{color:o}})},t=()=>(0,l.jsx)(r,{icon:"microsoftexcel",color:"#217346"}),c=()=>(0,l.jsx)(r,{icon:"python",color:"#FFD43B"}),a=()=>(0,l.jsx)(s.JO,{className:i,icon:"bi:type-h5",style:{color:"#28378C"}}),d=()=>(0,l.jsx)(r,{icon:"windows10",color:"#00ADEF"}),h=()=>(0,l.jsx)(r,{icon:"ubuntu",color:"#E95420"}),p=()=>(0,l.jsx)(r,{icon:"apple",color:"#BFBFBF"}),x=()=>(0,l.jsx)(r,{icon:"homebrew",color:"#FBB040"}),u=()=>(0,l.jsx)(r,{icon:"c",color:"#003366"}),j=()=>(0,l.jsx)(r,{icon:"curl",color:"#00A7E1"}),m=()=>(0,l.jsx)(r,{icon:"ffmpeg",color:"#00ADEF"}),f=()=>(0,l.jsx)(r,{icon:"nodedotjs",color:"#68A063"}),w=()=>(0,l.jsx)(r,{icon:"pnpm",color:"#F06292"}),g=()=>(0,l.jsx)(r,{icon:"gnubash",color:"#4F5256"}),y=()=>(0,l.jsx)(r,{icon:"microsoft",color:"#00A1F1"}),v=()=>(0,l.jsx)(r,{icon:"chocolatey",color:"#724A7C"}),b=()=>(0,l.jsx)(r,{icon:"powershell",color:"#012456"}),C=()=>(0,l.jsx)(r,{icon:"xcode",color:"#007ACC"}),k=()=>(0,l.jsx)(r,{icon:"iterm2",color:"#202B2D"}),S=()=>(0,l.jsx)(r,{icon:"numpy",color:"#4D77CF"}),P=()=>(0,l.jsx)("img",{className:i,src:"/img/logo.png",role:"img"}),W=()=>(0,l.jsx)(r,{icon:"firefoxbrowser",color:"#D86E1C"}),F=()=>(0,l.jsx)(r,{icon:"googlechrome",color:"#1A73E9"}),O=()=>(0,l.jsx)(r,{icon:"safari",color:"#0FB0E6"})},9189:(e,n,o)=>{o.d(n,{i:()=>p});var s=o(959),i=o(507),l=o.n(i);function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s])}return e},r.apply(this,arguments)}function t(e,n){if(null==e)return{};var o,s,i=function(e,n){if(null==e)return{};var o,s,i={},l=Object.keys(e);for(s=0;s<l.length;s++)o=l[s],n.indexOf(o)>=0||(i[o]=e[o]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)o=l[s],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var c=(0,s.forwardRef)((function(e,n){var o=e.color,i=void 0===o?"currentColor":o,l=e.size,c=void 0===l?24:l,a=t(e,["color","size"]);return s.createElement("svg",r({ref:n,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),s.createElement("path",{d:"M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}))}));c.propTypes={color:l().string,size:l().oneOfType([l().string,l().number])},c.displayName="Command";const a=c,d="liSkySBPyM2sxbS_nYH0";var h=o(1527);const p=()=>(0,h.jsxs)("code",{children:[(0,h.jsx)(a,{className:d,size:12})," ","Win"]})}}]);