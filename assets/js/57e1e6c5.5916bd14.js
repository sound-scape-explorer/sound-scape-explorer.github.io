"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[9075],{64788:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=s(11527),o=s(63883),i=s(29903);const r={sidebar_position:2},l="Installing on Ubuntu",a={id:"requirements/ubuntu",title:"Installing on Ubuntu",description:"Compatible with Ubuntu 20.04 LTS, and 22.04 LTS.",source:"@site/versioned_docs/version-11.10.0/requirements/ubuntu.mdx",sourceDirName:"requirements",slug:"/requirements/ubuntu",permalink:"/docs/11.10.0/requirements/ubuntu",draft:!1,unlisted:!1,editUrl:"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-11.10.0/requirements/ubuntu.mdx",tags:[],version:"11.10.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installing on Windows",permalink:"/docs/11.10.0/requirements/windows"},next:{title:"Installing on macOS",permalink:"/docs/11.10.0/requirements/macos"}},d={},c=[{value:"Installation procedure",id:"installation-procedure",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"installing-on-ubuntu",children:"Installing on Ubuntu"}),"\n",(0,t.jsx)(n.p,{children:"Compatible with Ubuntu 20.04 LTS, and 22.04 LTS."}),"\n",(0,t.jsx)(n.h2,{id:"installation-procedure",children:"Installation procedure"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Open a terminal"}),"\n",(0,t.jsx)(n.li,{children:"Install external libraries:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt install curl ffmpeg hdf5-tools -y\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Install ",(0,t.jsx)(n.code,{children:"Python"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Press ",(0,t.jsx)(n.code,{children:"Enter"})," when you are prompted to add the apt repository"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt install software-properties-common -y && \\\nsudo add-apt-repository ppa:deadsnakes/ppa && \\\nsudo apt install python3.10 python3.10-distutils python3.10-dev python3-pip python3.10-venv -y && \\\ncurl -sS https://bootstrap.pypa.io/get-pip.py | python3.10\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["Update ",(0,t.jsx)(n.code,{children:".bashrc"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'sudo update-alternatives --install /usr/bin/python python /usr/bin/python3.10 0 && \\\necho "alias python=python3.10" >> ~/.bashrc && \\\necho "alias pip=pip3" >> ~/.bashrc && \\\nsource ~/.bashrc\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsxs)(n.li,{children:["Install ",(0,t.jsx)(n.code,{children:"Node.js"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'sudo apt update && \\\nsudo apt install -y ca-certificates curl gnupg && \\\nsudo mkdir -p /etc/apt/keyrings && \\\ncurl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg && \\\necho "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_16.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list && \\\nsudo apt update && \\\nsudo apt install nodejs -y\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsxs)(n.li,{children:["Install ",(0,t.jsx)(n.code,{children:"pnpm"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo npm -g i pnpm\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"7",children:["\n",(0,t.jsx)(n.li,{children:"Close the terminal"}),"\n",(0,t.jsxs)(n.li,{children:["You can now ",(0,t.jsxs)(n.a,{href:"../install",children:["install ",i.iC]})]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},29903:(e,n,s)=>{s.d(n,{$p:()=>i,PB:()=>o,ZT:()=>l,i6:()=>r,iC:()=>t});const t="SSE",o="SoundScapeExplorer",i="sound-scape-explorer-VERSION",r="https://discord.gg/eRsQPDBeXg",l="https://github.com/sound-scape-explorer/sound-scape-explorer/discussions"}}]);