"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[9075],{2537:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=s(1527),o=s(3883),r=s(9903);const i={sidebar_position:2},a="Installing on Ubuntu",l={id:"requirements/ubuntu",title:"Installing on Ubuntu",description:"Compatible with Ubuntu 20.04 LTS, and 22.04 LTS.",source:"@site/versioned_docs/version-11.10.0/requirements/ubuntu.mdx",sourceDirName:"requirements",slug:"/requirements/ubuntu",permalink:"/docs/requirements/ubuntu",draft:!1,unlisted:!1,editUrl:"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-11.10.0/requirements/ubuntu.mdx",tags:[],version:"11.10.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installing on Windows",permalink:"/docs/requirements/windows"},next:{title:"Installing on macOS",permalink:"/docs/requirements/macos"}},d={},c=[{value:"Installation procedure",id:"installation-procedure",level:2}];function p(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"installing-on-ubuntu",children:"Installing on Ubuntu"}),"\n",(0,t.jsx)(e.p,{children:"Compatible with Ubuntu 20.04 LTS, and 22.04 LTS."}),"\n",(0,t.jsx)(e.h2,{id:"installation-procedure",children:"Installation procedure"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Open a terminal"}),"\n",(0,t.jsx)(e.li,{children:"Install external libraries:"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"sudo apt install curl ffmpeg hdf5-tools -y\n"})}),"\n",(0,t.jsxs)(e.ol,{start:"3",children:["\n",(0,t.jsxs)(e.li,{children:["Install ",(0,t.jsx)(e.code,{children:"Python"}),":"]}),"\n"]}),"\n",(0,t.jsx)(e.admonition,{type:"note",children:(0,t.jsxs)(e.p,{children:["Press ",(0,t.jsx)(e.code,{children:"Enter"})," when you are prompted to add the apt repository"]})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"sudo apt install software-properties-common -y && \\\nsudo add-apt-repository ppa:deadsnakes/ppa && \\\nsudo apt install python3.10 python3.10-distutils python3.10-dev python3-pip python3.10-venv -y && \\\ncurl -sS https://bootstrap.pypa.io/get-pip.py | python3.10\n"})}),"\n",(0,t.jsxs)(e.ol,{start:"4",children:["\n",(0,t.jsxs)(e.li,{children:["Update ",(0,t.jsx)(e.code,{children:".bashrc"}),":"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'sudo update-alternatives --install /usr/bin/python python /usr/bin/python3.10 0 && \\\necho "alias python=python3.10" >> ~/.bashrc && \\\necho "alias pip=pip3" >> ~/.bashrc && \\\nsource ~/.bashrc\n'})}),"\n",(0,t.jsxs)(e.ol,{start:"5",children:["\n",(0,t.jsxs)(e.li,{children:["Install ",(0,t.jsx)(e.code,{children:"Node.js"}),":"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'sudo apt update && \\\nsudo apt install -y ca-certificates curl gnupg && \\\nsudo mkdir -p /etc/apt/keyrings && \\\ncurl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg && \\\necho "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_16.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list && \\\nsudo apt update && \\\nsudo apt install nodejs -y\n'})}),"\n",(0,t.jsxs)(e.ol,{start:"6",children:["\n",(0,t.jsxs)(e.li,{children:["Install ",(0,t.jsx)(e.code,{children:"pnpm"}),":"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"sudo npm -g i pnpm\n"})}),"\n",(0,t.jsxs)(e.ol,{start:"7",children:["\n",(0,t.jsx)(e.li,{children:"Close the terminal"}),"\n",(0,t.jsxs)(e.li,{children:["You can now ",(0,t.jsxs)(e.a,{href:"../install",children:["install ",r.iC]})]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(p,{...n})}):p(n)}},9903:(n,e,s)=>{s.d(e,{$p:()=>r,PB:()=>o,i6:()=>i,iC:()=>t});const t="SSE",o="SoundScapeExplorer",r="sound-scape-explorer-VERSION",i="https://discord.gg/eRsQPDBeXg"},3883:(n,e,s)=>{s.d(e,{Z:()=>a,a:()=>i});var t=s(959);const o={},r=t.createContext(o);function i(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);