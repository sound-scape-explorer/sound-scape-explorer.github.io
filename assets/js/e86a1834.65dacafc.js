"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[88381],{61625:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"requirements/windows","title":"Installing on Windows","description":"Compatible with Windows 10, and Windows 11.","source":"@site/versioned_docs/version-11.10.0/requirements/windows.mdx","sourceDirName":"requirements","slug":"/requirements/windows","permalink":"/docs/11.10.0/requirements/windows","draft":false,"unlisted":false,"editUrl":"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-11.10.0/requirements/windows.mdx","tags":[],"version":"11.10.0","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Requirements","permalink":"/docs/11.10.0/category/requirements"},"next":{"title":"Installing on Ubuntu","permalink":"/docs/11.10.0/requirements/ubuntu"}}');var o=i(86070),l=i(15658),r=i(60667),t=i(65698);const c={sidebar_position:1},d="Installing on Windows",a={},h=[{value:"Installation procedure",id:"installation-procedure",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"installing-on-windows",children:"Installing on Windows"})}),"\n",(0,o.jsx)(n.p,{children:"Compatible with Windows 10, and Windows 11."}),"\n",(0,o.jsx)(n.h2,{id:"installation-procedure",children:"Installation procedure"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Click on the start menu (or press ",(0,o.jsx)(t.Y,{})," button on your keyboard)"]}),"\n",(0,o.jsxs)(n.li,{children:["Type ",(0,o.jsx)(n.code,{children:"PowerShell"})]}),"\n",(0,o.jsxs)(n.li,{children:["Right-click on the ",(0,o.jsx)(n.code,{children:"PowerShell"})," icon"]}),"\n",(0,o.jsxs)(n.li,{children:["Select ",(0,o.jsx)(n.code,{children:"Run as Administrator"})," (this will open a new shell window)"]}),"\n",(0,o.jsxs)(n.li,{children:["Navigate to ",(0,o.jsx)(n.a,{href:"https://chocolatey.org/install",children:"chocolatey installation page"})]}),"\n",(0,o.jsx)(n.li,{children:"Scroll to the installation command"}),"\n",(0,o.jsx)(n.li,{children:"Copy the command"}),"\n",(0,o.jsx)(n.li,{children:"Paste it in your shell window"}),"\n",(0,o.jsxs)(n.li,{children:["Press ",(0,o.jsx)(n.code,{children:"Enter"})," (Wait and type ",(0,o.jsx)(n.code,{children:"choco --version"})," to verify installation)"]}),"\n",(0,o.jsxs)(n.li,{children:["Install ",(0,o.jsx)(n.code,{children:"Python"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"choco install python3 --version=3.10.11 -y\n"})}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.p,{children:"If you have a prior version of Python and want to uninstall it. Run the\nfollowing command"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"choco uninstall python3\n"})})]}),"\n",(0,o.jsxs)(n.ol,{start:"11",children:["\n",(0,o.jsxs)(n.li,{children:["Install ",(0,o.jsx)(n.code,{children:"Node.js"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"choco install nodejs --version=16.20.0 -y\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"12",children:["\n",(0,o.jsxs)(n.li,{children:["Install ",(0,o.jsx)(n.code,{children:"ffmpeg"}),", ",(0,o.jsx)(n.code,{children:"curl"})," and ",(0,o.jsx)(n.code,{children:"pnpm"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"choco install ffmpeg curl pnpm -y\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"13",children:["\n",(0,o.jsx)(n.li,{children:"Close the shell window."}),"\n",(0,o.jsxs)(n.li,{children:["Navigate to ",(0,o.jsx)(n.a,{href:"https://visualstudio.microsoft.com/visual-cpp-build-tools/",children:"Microsft C++ Build\nTools"})]}),"\n",(0,o.jsxs)(n.li,{children:["Click on ",(0,o.jsx)(n.code,{children:"Download Build Tools"})," to download the executable"]}),"\n",(0,o.jsxs)(n.li,{children:["Run the executable (continue until you get the menu ",(0,o.jsx)(n.em,{children:"Installing - Visual\nStudio Build Tools..."}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Tick ",(0,o.jsx)(n.code,{children:"Desktop development with C++"})]}),"\n",(0,o.jsxs)(n.li,{children:["Press ",(0,o.jsx)(n.code,{children:"Install"})," (6 Gb of disk space will be used)"]}),"\n",(0,o.jsx)(n.li,{children:"Wait for completion, you can close the Visual Studio Build Tools window"}),"\n",(0,o.jsxs)(n.li,{children:["You can now ",(0,o.jsxs)(n.a,{href:"../install",children:["install ",r.C3]})]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},65698:(e,n,i)=>{i.d(n,{Y:()=>u});var s=i(30758),o=i(2736),l=i.n(o);function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},r.apply(this,arguments)}function t(e,n){if(null==e)return{};var i,s,o=function(e,n){if(null==e)return{};var i,s,o={},l=Object.keys(e);for(s=0;s<l.length;s++)i=l[s],n.indexOf(i)>=0||(o[i]=e[i]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)i=l[s],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var c=(0,s.forwardRef)((function(e,n){var i=e.color,o=void 0===i?"currentColor":i,l=e.size,c=void 0===l?24:l,d=t(e,["color","size"]);return s.createElement("svg",r({ref:n,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),s.createElement("path",{d:"M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}))}));c.propTypes={color:l().string,size:l().oneOfType([l().string,l().number])},c.displayName="Command";const d=c,a="liSkySBPyM2sxbS_nYH0";var h=i(86070);const u=()=>(0,h.jsxs)("code",{children:[(0,h.jsx)(d,{className:a,size:12})," ","Win"]})}}]);