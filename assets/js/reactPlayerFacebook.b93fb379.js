(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[2121],{46262:(e,t,s)=>{var r,a=Object.create,l=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,n=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,u=(e,t,s,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of i(t))p.call(e,a)||a===s||l(e,a,{get:()=>t[a],enumerable:!(r=o(t,a))||r.enumerable});return e},c=(e,t,s)=>(((e,t,s)=>{t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s})(e,"symbol"!=typeof t?t+"":t,s),s),h={};((e,t)=>{for(var s in t)l(e,s,{get:t[s],enumerable:!0})})(h,{default:()=>g}),e.exports=(r=h,u(l({},"__esModule",{value:!0}),r));var y=((e,t,s)=>(s=null!=e?a(n(e)):{},u(!t&&e&&e.__esModule?s:l(s,"default",{value:e,enumerable:!0}),e)))(s(50959)),d=s(89121),b=s(13899);const f="https://connect.facebook.net/en_US/sdk.js",m="fbAsyncInit";class g extends y.Component{constructor(){super(...arguments),c(this,"callPlayer",d.callPlayer),c(this,"playerID",this.props.config.playerId||`facebook-player-${(0,d.randomString)()}`),c(this,"mute",(()=>{this.callPlayer("mute")})),c(this,"unmute",(()=>{this.callPlayer("unmute")}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,t){t?(0,d.getSDK)(f,"FB",m).then((e=>e.XFBML.parse())):(0,d.getSDK)(f,"FB",m).then((e=>{e.init({appId:this.props.config.appId,xfbml:!0,version:this.props.config.version}),e.Event.subscribe("xfbml.render",(e=>{this.props.onLoaded()})),e.Event.subscribe("xfbml.ready",(e=>{"video"===e.type&&e.id===this.playerID&&(this.player=e.instance,this.player.subscribe("startedPlaying",this.props.onPlay),this.player.subscribe("paused",this.props.onPause),this.player.subscribe("finishedPlaying",this.props.onEnded),this.player.subscribe("startedBuffering",this.props.onBuffer),this.player.subscribe("finishedBuffering",this.props.onBufferEnd),this.player.subscribe("error",this.props.onError),this.props.muted?this.callPlayer("mute"):this.callPlayer("unmute"),this.props.onReady(),document.getElementById(this.playerID).querySelector("iframe").style.visibility="visible")}))}))}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentPosition")}getSecondsLoaded(){return null}render(){const{attributes:e}=this.props.config;return y.default.createElement("div",{style:{width:"100%",height:"100%"},id:this.playerID,className:"fb-video","data-href":this.props.url,"data-autoplay":this.props.playing?"true":"false","data-allowfullscreen":"true","data-controls":this.props.controls?"true":"false",...e})}}c(g,"displayName","Facebook"),c(g,"canPlay",b.canPlay.facebook),c(g,"loopOnEnded",!0)}}]);