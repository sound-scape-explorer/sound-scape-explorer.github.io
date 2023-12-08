"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[8905],{7201:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>x,metadata:()=>u,toc:()=>g});var s=n(1527),t=n(3883),i=n(9903),c=n(2401),r=n(9648),l=n(2098),a=n(959),p=n(9827);const x={},d="\ud83d\udd0c Offline Access",u={id:"extras/offline-access",title:"\ud83d\udd0c Offline Access",description:"Progressive Web App",source:"@site/versioned_docs/version-12.0.0/extras/offline-access.mdx",sourceDirName:"extras",slug:"/extras/offline-access",permalink:"/docs/extras/offline-access",draft:!1,unlisted:!1,editUrl:"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-12.0.0/extras/offline-access.mdx",tags:[],version:"12.0.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udce9 Get in Touch",permalink:"/docs/extras/get-in-touch"},next:{title:"\ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f Visualisation Online",permalink:"/docs/extras/visualisation-online"}},h={},g=[{value:"<PwaIcon></PwaIcon> Progressive Web App",id:"-progressive-web-app",level:2},{value:"\ud83d\udce4 Export Documentation",id:"-export-documentation",level:2},{value:"\ud83d\udce4 Export Blog",id:"-export-blog",level:2}];function j(e){const o={admonition:"admonition",h1:"h1",h2:"h2",p:"p",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h1,{id:"-offline-access",children:"\ud83d\udd0c Offline Access"}),"\n",(0,s.jsxs)(o.h2,{id:"-progressive-web-app",children:[(0,s.jsx)(l.Mt,{})," Progressive Web App"]}),"\n",(0,s.jsx)(a.Fragment,{children:(0,s.jsxs)(o.p,{children:[(0,s.jsx)(l.yO,{})," ",i.iC," Docs can be installed as a ",(0,s.jsx)(l.Mt,{})," Progressive Web\nApp using ",(0,s.jsx)(l.eL,{})," Chrome browser."]})}),"\n",(0,s.jsx)(a.Fragment,{children:(0,s.jsxs)(o.p,{children:["Click on the ",(0,s.jsx)(l.j0,{})," icon in the address bar to install this portal in\nstandalone mode with offline caching."]})}),"\n",(0,s.jsx)(o.h2,{id:"-export-documentation",children:"\ud83d\udce4 Export Documentation"}),"\n",(0,s.jsx)(o.admonition,{type:"warning",children:(0,s.jsx)(o.p,{children:"An active internet connection is necessary to retrieve data for exporting."})}),"\n",(0,s.jsx)(o.admonition,{type:"note",children:(0,s.jsx)(o.p,{children:"Certain hypertext links may not be converted."})}),"\n",(0,s.jsx)(o.p,{children:"Use the commands below to export the entire documentation to PDF."}),"\n",(0,s.jsxs)(o.p,{children:["To download the current ",p.q," version of the documentation, execute:"]}),"\n",(0,s.jsx)(r.E,{version:p.q}),"\n",(0,s.jsx)(o.p,{children:"For the upcoming unreleased version, execute:"}),"\n",(0,s.jsx)(r.E,{next:!0}),"\n",(0,s.jsx)(o.h2,{id:"-export-blog",children:"\ud83d\udce4 Export Blog"}),"\n",(0,s.jsx)(o.admonition,{type:"warning",children:(0,s.jsx)(o.p,{children:"An active internet connection is necessary to retrieve data for exporting."})}),"\n",(0,s.jsx)(o.p,{children:"Execute the command below to export the blog content to PDF:"}),"\n",(0,s.jsx)(c.c,{})]})}function m(e={}){const{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},9903:(e,o,n)=>{n.d(o,{$p:()=>i,PB:()=>t,ZT:()=>r,i6:()=>c,iC:()=>s});const s="SSE",t="SoundScapeExplorer",i="sound-scape-explorer-VERSION",c="https://discord.gg/eRsQPDBeXg",r="https://github.com/sound-scape-explorer/sound-scape-explorer/discussions"},2401:(e,o,n)=>{n.d(o,{c:()=>c});var s=n(6100),t=n(959),i=n(1527);const c=()=>{const e=(0,t.useMemo)((()=>{const e=new Date,o=`${e.getFullYear()}-${e.getMonth()}-${e.getDate()}`;return`npx docs-to-pdf \\\n--initialDocURLs="https://sound-scape-explorer.github.io/blog/index" \\\n--contentSelector="article" \\\n--paginationSelector="a.pagination-nav__link.pagination-nav__link--next" \\\n--excludeSelectors=".margin-vert--xl a,[class^='tocCollapsible'],.breadcrumbs,.theme-edit-this-page" \\\n--coverImage="https://sound-scape-explorer.github.io/img/logo.png" \\\n--cssStyle=":root{background: transparent}" \\\n--coverTitle="SoundScapeExplorer Blog ${o}" \\\n--outputPDFFilename="SoundScapeExplorer-blog-${o}.pdf"`}),[]);return(0,i.jsx)(s.Z,{language:"bash",children:e})}},9648:(e,o,n)=>{n.d(o,{E:()=>c});var s=n(6100),t=n(959),i=n(1527);const c=e=>{let{next:o,version:n}=e;const c=(0,t.useMemo)((()=>{let e="https://sound-scape-explorer.github.io/docs",s="",t="";return o?(s=" Next",t="-next",e+="/next"):(s=n?` ${n}`:"",t=n?`-${n}`:""),`npx docs-to-pdf \\\n--initialDocURLs="${e}" \\\n--contentSelector="article" \\\n--paginationSelector="a.pagination-nav__link.pagination-nav__link--next" \\\n--excludeSelectors=".margin-vert--xl a,[class^='tocCollapsible'],.breadcrumbs,.theme-edit-this-page" \\\n--coverImage="https://sound-scape-explorer.github.io/img/logo.png" \\\n--cssStyle=":root{background: transparent}" \\\n--coverTitle="SoundScapeExplorer Docs${s}" \\\n--outputPDFFilename="SoundScapeExplorer-docs${t}.pdf"`}),[]);return(0,i.jsx)(s.Z,{language:"bash",children:c})}},2098:(e,o,n)=>{n.d(o,{yO:()=>_,ht:()=>v,m2:()=>h,uf:()=>w,eL:()=>k,Vj:()=>g,D7:()=>P,uo:()=>r,NX:()=>j,xw:()=>y,ET:()=>$,cF:()=>u,j0:()=>B,Fn:()=>d,Dg:()=>f,qh:()=>m,FS:()=>D,mR:()=>b,oQ:()=>S,Mt:()=>C,gx:()=>l,wS:()=>A,id:()=>a,Fx:()=>F,w:()=>O,cc:()=>x,p6:()=>M,WI:()=>p,SU:()=>E});var s=n(8900);const t="icon_wDXz";var i=n(1527);const c=e=>{let{icon:o,color:n}=e;return(0,i.jsx)(s.JO,{className:t,icon:`simple-icons:${o}`,style:{color:n}})},r=()=>(0,i.jsx)(c,{icon:"microsoftexcel",color:"#217346"}),l=()=>(0,i.jsx)(c,{icon:"python",color:"#3776AB"}),a=()=>(0,i.jsx)(s.JO,{className:t,icon:"bi:type-h5",style:{color:"#28378C"}}),p=()=>(0,i.jsx)(c,{icon:"windows10",color:"#0078D6"}),x=()=>(0,i.jsx)(c,{icon:"ubuntu",color:"#E95420"}),d=()=>(0,i.jsx)(c,{icon:"apple",color:"#000000"}),u=()=>(0,i.jsx)(c,{icon:"homebrew",color:"#FBB040"}),h=()=>(0,i.jsx)(c,{icon:"c",color:"#A8B9CC"}),g=()=>(0,i.jsx)(c,{icon:"curl",color:"#073551"}),j=()=>(0,i.jsx)(c,{icon:"ffmpeg",color:"#007808"}),m=()=>(0,i.jsx)(c,{icon:"nodedotjs",color:"#339933"}),b=()=>(0,i.jsx)(c,{icon:"pnpm",color:"#F69220"}),v=()=>(0,i.jsx)(c,{icon:"gnubash",color:"#4EAA25"}),f=()=>(0,i.jsx)(c,{icon:"microsoft",color:"#5E5E5E"}),w=()=>(0,i.jsx)(c,{icon:"chocolatey",color:"#80B5E3"}),S=()=>(0,i.jsx)(c,{icon:"powershell",color:"#5391FE"}),E=()=>(0,i.jsx)(c,{icon:"xcode",color:"#147EFB"}),F=()=>(0,i.jsx)(c,{icon:"iterm2",color:"#000000"}),D=()=>(0,i.jsx)(c,{icon:"numpy",color:"#013243"}),_=()=>(0,i.jsx)("img",{className:t,src:"/img/logo.png",role:"img",alt:"App Icon"}),y=()=>(0,i.jsx)(c,{icon:"firefoxbrowser",color:"#FF7139"}),k=()=>(0,i.jsx)(c,{icon:"googlechrome",color:"#4285F4"}),A=()=>(0,i.jsx)(c,{icon:"safari",color:"#000000"}),C=()=>(0,i.jsx)(c,{icon:"pwa"}),B=()=>(0,i.jsx)(s.JO,{className:t,icon:"ic:baseline-install-desktop"}),P=()=>(0,i.jsx)(c,{icon:"discord",color:"#5865F2"}),$=()=>(0,i.jsx)(c,{icon:"github",color:"#181717"}),O=()=>(0,i.jsx)(c,{icon:"typescript",color:"#3178C6"}),M=()=>(0,i.jsx)(c,{icon:"vuedotjs",color:"#4FC08D"})},9827:(e,o,n)=>{n.d(o,{N:()=>t,q:()=>s});const s="12.0.0",t="~125 MB"}}]);