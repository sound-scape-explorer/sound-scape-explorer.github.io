(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[3743],{47314:e=>{"use strict";var t=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===r}(e)}(e)};var r="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function a(e,t){return!1!==t.clone&&t.isMergeableObject(e)?s((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function n(e,t,r){return e.concat(t).map((function(e){return a(e,r)}))}function o(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return Object.propertyIsEnumerable.call(e,t)})):[]}(e))}function i(e,t){try{return t in e}catch(r){return!1}}function l(e,t,r){var n={};return r.isMergeableObject(e)&&o(e).forEach((function(t){n[t]=a(e[t],r)})),o(t).forEach((function(o){(function(e,t){return i(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,o)||(i(e,o)&&r.isMergeableObject(t[o])?n[o]=function(e,t){if(!t.customMerge)return s;var r=t.customMerge(e);return"function"==typeof r?r:s}(o,r)(e[o],t[o],r):n[o]=a(t[o],r))})),n}function s(e,r,o){(o=o||{}).arrayMerge=o.arrayMerge||n,o.isMergeableObject=o.isMergeableObject||t,o.cloneUnlessOtherwiseSpecified=a;var i=Array.isArray(r);return i===Array.isArray(e)?i?o.arrayMerge(e,r,o):l(e,r,o):a(r,o)}s.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,r){return s(e,r,t)}),{})};var u=s;e.exports=u},37892:e=>{function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,a,n){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"==typeof a&&(n=a,a={}),a=a||{},n=n||function(){},i.type=a.type||"text/javascript",i.charset=a.charset||"utf8",i.async=!("async"in a)||!!a.async,i.src=e,a.attrs&&function(e,t){for(var r in t)e.setAttribute(r,t[r])}(i,a.attrs),a.text&&(i.text=""+a.text),("onload"in i?t:r)(i,n),i.onload||t(i,n),o.appendChild(i)}},22542:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var a=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function n(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(n=e[r],o=t[r],!(n===o||a(n)&&a(o)))return!1;var n,o;return!0}const o=function(e,t){var r;void 0===t&&(t=n);var a,o=[],i=!1;return function(){for(var n=[],l=0;l<arguments.length;l++)n[l]=arguments[l];return i&&r===this&&t(n,o)||(a=e.apply(this,n),i=!0,r=this,o=n),a}}},97666:(e,t,r)=>{var a,n=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,s=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of l(t))u.call(e,n)||n===r||o(e,n,{get:()=>t[n],enumerable:!(a=i(t,n))||a.enumerable});return e},d=(e,t,r)=>(r=null!=e?n(s(e)):{},c(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)),p=(e,t,r)=>(((e,t,r)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),y={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(y,{default:()=>P}),e.exports=(a=y,c(o({},"__esModule",{value:!0}),a));var h=d(r(79474)),f=d(r(34072)),m=r(69005),b=r(98410);class P extends h.Component{constructor(){super(...arguments),p(this,"mounted",!1),p(this,"isReady",!1),p(this,"isPlaying",!1),p(this,"isLoading",!0),p(this,"loadOnReady",null),p(this,"startOnPlay",!0),p(this,"seekOnPlay",null),p(this,"onDurationCalled",!1),p(this,"handlePlayerMount",(e=>{this.player||(this.player=e,this.player.load(this.props.url)),this.progress()})),p(this,"getInternalPlayer",(e=>this.player?this.player[e]:null)),p(this,"progress",(()=>{if(this.props.url&&this.player&&this.isReady){const e=this.getCurrentTime()||0,t=this.getSecondsLoaded(),r=this.getDuration();if(r){const a={playedSeconds:e,played:e/r};null!==t&&(a.loadedSeconds=t,a.loaded=t/r),a.playedSeconds===this.prevPlayed&&a.loadedSeconds===this.prevLoaded||this.props.onProgress(a),this.prevPlayed=a.playedSeconds,this.prevLoaded=a.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)})),p(this,"handleReady",(()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:e,playing:t,volume:r,muted:a}=this.props;e(),a||null===r||this.player.setVolume(r),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):t&&this.player.play(),this.handleDurationCheck()})),p(this,"handlePlay",(()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:e,onPlay:t,playbackRate:r}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&1!==r&&this.player.setPlaybackRate(r),e(),this.startOnPlay=!1),t(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()})),p(this,"handlePause",(e=>{this.isPlaying=!1,this.isLoading||this.props.onPause(e)})),p(this,"handleEnded",(()=>{const{activePlayer:e,loop:t,onEnded:r}=this.props;e.loopOnEnded&&t&&this.seekTo(0),t||(this.isPlaying=!1,r())})),p(this,"handleError",((...e)=>{this.isLoading=!1,this.props.onError(...e)})),p(this,"handleDurationCheck",(()=>{clearTimeout(this.durationCheckTimeout);const e=this.getDuration();e?this.onDurationCalled||(this.props.onDuration(e),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)})),p(this,"handleLoaded",(()=>{this.isLoading=!1}))}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(e){if(!this.player)return;const{url:t,playing:r,volume:a,muted:n,playbackRate:o,pip:i,loop:l,activePlayer:s,disableDeferredLoading:u}=this.props;if(!(0,f.default)(e.url,t)){if(this.isLoading&&!s.forceLoad&&!u&&!(0,b.isMediaStream)(t))return console.warn(`ReactPlayer: the attempt to load ${t} is being deferred until the player has loaded`),void(this.loadOnReady=t);this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(t,this.isReady)}e.playing||!r||this.isPlaying||this.player.play(),e.playing&&!r&&this.isPlaying&&this.player.pause(),!e.pip&&i&&this.player.enablePIP&&this.player.enablePIP(),e.pip&&!i&&this.player.disablePIP&&this.player.disablePIP(),e.volume!==a&&null!==a&&this.player.setVolume(a),e.muted!==n&&(n?this.player.mute():(this.player.unmute(),null!==a&&setTimeout((()=>this.player.setVolume(a))))),e.playbackRate!==o&&this.player.setPlaybackRate&&this.player.setPlaybackRate(o),e.loop!==l&&this.player.setLoop&&this.player.setLoop(l)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(e,t,r){if(!this.isReady)return void(0!==e&&(this.seekOnPlay=e,setTimeout((()=>{this.seekOnPlay=null}),5e3)));if(t?"fraction"===t:e>0&&e<1){const t=this.player.getDuration();return t?void this.player.seekTo(t*e,r):void console.warn("ReactPlayer: could not seek using fraction \u2013\xa0duration not yet available")}this.player.seekTo(e,r)}render(){const e=this.props.activePlayer;return e?h.default.createElement(e,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}p(P,"displayName","Player"),p(P,"propTypes",m.propTypes),p(P,"defaultProps",m.defaultProps)},52005:(e,t,r)=>{var a,n=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,s=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of l(t))u.call(e,n)||n===r||o(e,n,{get:()=>t[n],enumerable:!(a=i(t,n))||a.enumerable});return e},d=(e,t,r)=>(r=null!=e?n(s(e)):{},c(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)),p=(e,t,r)=>(((e,t,r)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),y={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(y,{createReactPlayer:()=>S}),e.exports=(a=y,c(o({},"__esModule",{value:!0}),a));var h=d(r(79474)),f=d(r(47314)),m=d(r(22542)),b=d(r(34072)),P=r(69005),g=r(98410),w=d(r(97666));const v=(0,g.lazy)((()=>r.e(6353).then(r.t.bind(r,9751,23)))),O="undefined"!=typeof window&&window.document&&"undefined"!=typeof document,k=void 0!==r.g&&r.g.window&&r.g.window.document,_=Object.keys(P.propTypes),T=O||k?h.Suspense:()=>null,j=[],S=(e,t)=>{var r;return r=class extends h.Component{constructor(){super(...arguments),p(this,"state",{showPreview:!!this.props.light}),p(this,"references",{wrapper:e=>{this.wrapper=e},player:e=>{this.player=e}}),p(this,"handleClickPreview",(e=>{this.setState({showPreview:!1}),this.props.onClickPreview(e)})),p(this,"showPreview",(()=>{this.setState({showPreview:!0})})),p(this,"getDuration",(()=>this.player?this.player.getDuration():null)),p(this,"getCurrentTime",(()=>this.player?this.player.getCurrentTime():null)),p(this,"getSecondsLoaded",(()=>this.player?this.player.getSecondsLoaded():null)),p(this,"getInternalPlayer",((e="player")=>this.player?this.player.getInternalPlayer(e):null)),p(this,"seekTo",((e,t,r)=>{if(!this.player)return null;this.player.seekTo(e,t,r)})),p(this,"handleReady",(()=>{this.props.onReady(this)})),p(this,"getActivePlayer",(0,m.default)((r=>{for(const t of[...j,...e])if(t.canPlay(r))return t;return t||null}))),p(this,"getConfig",(0,m.default)(((e,t)=>{const{config:r}=this.props;return f.default.all([P.defaultProps.config,P.defaultProps.config[t]||{},r,r[t]||{}])}))),p(this,"getAttributes",(0,m.default)((e=>(0,g.omit)(this.props,_)))),p(this,"renderActivePlayer",(e=>{if(!e)return null;const t=this.getActivePlayer(e);if(!t)return null;const r=this.getConfig(e,t.key);return h.default.createElement(w.default,{...this.props,key:t.key,ref:this.references.player,config:r,activePlayer:t.lazyPlayer||t,onReady:this.handleReady})}))}shouldComponentUpdate(e,t){return!(0,b.default)(this.props,e)||!(0,b.default)(this.state,t)}componentDidUpdate(e){const{light:t}=this.props;!e.light&&t&&this.setState({showPreview:!0}),e.light&&!t&&this.setState({showPreview:!1})}renderPreview(e){if(!e)return null;const{light:t,playIcon:r,previewTabIndex:a,oEmbedUrl:n,previewAriaLabel:o}=this.props;return h.default.createElement(v,{url:e,light:t,playIcon:r,previewTabIndex:a,previewAriaLabel:o,oEmbedUrl:n,onClick:this.handleClickPreview})}render(){const{url:e,style:t,width:r,height:a,fallback:n,wrapper:o}=this.props,{showPreview:i}=this.state,l=this.getAttributes(e),s="string"==typeof o?this.references.wrapper:void 0;return h.default.createElement(o,{ref:s,style:{...t,width:r,height:a},...l},h.default.createElement(T,{fallback:n},i?this.renderPreview(e):this.renderActivePlayer(e)))}},p(r,"displayName","ReactPlayer"),p(r,"propTypes",P.propTypes),p(r,"defaultProps",P.defaultProps),p(r,"addCustomPlayer",(e=>{j.push(e)})),p(r,"removeCustomPlayers",(()=>{j.length=0})),p(r,"canPlay",(t=>{for(const r of[...j,...e])if(r.canPlay(t))return!0;return!1})),p(r,"canEnablePIP",(t=>{for(const r of[...j,...e])if(r.canEnablePIP&&r.canEnablePIP(t))return!0;return!1})),r}},53743:(e,t,r)=>{var a,n=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,s=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of l(t))u.call(e,n)||n===r||o(e,n,{get:()=>t[n],enumerable:!(a=i(t,n))||a.enumerable});return e},d={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(d,{default:()=>f}),e.exports=(a=d,c(o({},"__esModule",{value:!0}),a));var p=((e,t,r)=>(r=null!=e?n(s(e)):{},c(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)))(r(61658)),y=r(52005);const h=p.default[p.default.length-1];var f=(0,y.createReactPlayer)(p.default,h)},44:(e,t,r)=>{var a,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,l=Object.prototype.hasOwnProperty,s={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(s,{AUDIO_EXTENSIONS:()=>_,DASH_EXTENSIONS:()=>S,FLV_EXTENSIONS:()=>E,HLS_EXTENSIONS:()=>j,MATCH_URL_DAILYMOTION:()=>w,MATCH_URL_FACEBOOK:()=>h,MATCH_URL_FACEBOOK_WATCH:()=>f,MATCH_URL_KALTURA:()=>k,MATCH_URL_MIXCLOUD:()=>v,MATCH_URL_MUX:()=>y,MATCH_URL_SOUNDCLOUD:()=>d,MATCH_URL_STREAMABLE:()=>m,MATCH_URL_TWITCH_CHANNEL:()=>g,MATCH_URL_TWITCH_VIDEO:()=>P,MATCH_URL_VIDYARD:()=>O,MATCH_URL_VIMEO:()=>p,MATCH_URL_WISTIA:()=>b,MATCH_URL_YOUTUBE:()=>c,VIDEO_EXTENSIONS:()=>T,canPlay:()=>I}),e.exports=(a=s,((e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of i(t))l.call(e,s)||s===r||n(e,s,{get:()=>t[s],enumerable:!(a=o(t,s))||a.enumerable});return e})(n({},"__esModule",{value:!0}),a));var u=r(98410);const c=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,d=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,p=/vimeo\.com\/(?!progressive_redirect).+/,y=/stream\.mux\.com\/(\w+)/,h=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,f=/^https?:\/\/fb\.watch\/.+$/,m=/streamable\.com\/([a-z0-9]+)$/,b=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,P=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,g=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,w=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,v=/mixcloud\.com\/([^/]+\/[^/]+)/,O=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,k=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,_=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,T=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,j=/\.(m3u8)($|\?)/i,S=/\.(mpd)($|\?)/i,E=/\.(flv)($|\?)/i,C=e=>{if(e instanceof Array){for(const t of e){if("string"==typeof t&&C(t))return!0;if(C(t.src))return!0}return!1}return!(!(0,u.isMediaStream)(e)&&!(0,u.isBlobUrl)(e))||(_.test(e)||T.test(e)||j.test(e)||S.test(e)||E.test(e))},I={youtube:e=>e instanceof Array?e.every((e=>c.test(e))):c.test(e),soundcloud:e=>d.test(e)&&!_.test(e),vimeo:e=>p.test(e)&&!T.test(e)&&!j.test(e),mux:e=>y.test(e),facebook:e=>h.test(e)||f.test(e),streamable:e=>m.test(e),wistia:e=>b.test(e),twitch:e=>P.test(e)||g.test(e),dailymotion:e=>w.test(e),mixcloud:e=>v.test(e),vidyard:e=>O.test(e),kaltura:e=>k.test(e),file:C}},61658:(e,t,r)=>{Object.create;var a,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,l=(Object.getPrototypeOf,Object.prototype.hasOwnProperty),s=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of i(t))l.call(e,s)||s===r||n(e,s,{get:()=>t[s],enumerable:!(a=o(t,s))||a.enumerable});return e},u={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(u,{default:()=>p}),e.exports=(a=u,s(n({},"__esModule",{value:!0}),a));var c=r(98410),d=r(44),p=[{key:"youtube",name:"YouTube",canPlay:d.canPlay.youtube,lazyPlayer:(0,c.lazy)((()=>r.e(8446).then(r.t.bind(r,7719,23))))},{key:"soundcloud",name:"SoundCloud",canPlay:d.canPlay.soundcloud,lazyPlayer:(0,c.lazy)((()=>r.e(9979).then(r.t.bind(r,84444,23))))},{key:"vimeo",name:"Vimeo",canPlay:d.canPlay.vimeo,lazyPlayer:(0,c.lazy)((()=>r.e(8554).then(r.t.bind(r,21014,23))))},{key:"mux",name:"Mux",canPlay:d.canPlay.mux,lazyPlayer:(0,c.lazy)((()=>r.e(2723).then(r.t.bind(r,49068,23))))},{key:"facebook",name:"Facebook",canPlay:d.canPlay.facebook,lazyPlayer:(0,c.lazy)((()=>r.e(6887).then(r.t.bind(r,68500,23))))},{key:"streamable",name:"Streamable",canPlay:d.canPlay.streamable,lazyPlayer:(0,c.lazy)((()=>r.e(7627).then(r.t.bind(r,47252,23))))},{key:"wistia",name:"Wistia",canPlay:d.canPlay.wistia,lazyPlayer:(0,c.lazy)((()=>r.e(9340).then(r.t.bind(r,67089,23))))},{key:"twitch",name:"Twitch",canPlay:d.canPlay.twitch,lazyPlayer:(0,c.lazy)((()=>r.e(2042).then(r.t.bind(r,41343,23))))},{key:"dailymotion",name:"DailyMotion",canPlay:d.canPlay.dailymotion,lazyPlayer:(0,c.lazy)((()=>r.e(6328).then(r.t.bind(r,95757,23))))},{key:"mixcloud",name:"Mixcloud",canPlay:d.canPlay.mixcloud,lazyPlayer:(0,c.lazy)((()=>r.e(7570).then(r.t.bind(r,25015,23))))},{key:"vidyard",name:"Vidyard",canPlay:d.canPlay.vidyard,lazyPlayer:(0,c.lazy)((()=>r.e(3392).then(r.t.bind(r,79417,23))))},{key:"kaltura",name:"Kaltura",canPlay:d.canPlay.kaltura,lazyPlayer:(0,c.lazy)((()=>r.e(6463).then(r.t.bind(r,32160,23))))},{key:"file",name:"FilePlayer",canPlay:d.canPlay.file,canEnablePIP:e=>d.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,c.supportsWebKitPresentationMode)())&&!d.AUDIO_EXTENSIONS.test(e),lazyPlayer:(0,c.lazy)((()=>r.e(7458).then(r.t.bind(r,663,23))))}]},69005:(e,t,r)=>{var a,n=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,s=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of l(t))u.call(e,n)||n===r||o(e,n,{get:()=>t[n],enumerable:!(a=i(t,n))||a.enumerable});return e},d={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(d,{defaultProps:()=>_,propTypes:()=>O}),e.exports=(a=d,c(o({},"__esModule",{value:!0}),a));var p=((e,t,r)=>(r=null!=e?n(s(e)):{},c(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)))(r(2736));const{string:y,bool:h,number:f,array:m,oneOfType:b,shape:P,object:g,func:w,node:v}=p.default,O={url:b([y,m,g]),playing:h,loop:h,controls:h,volume:f,muted:h,playbackRate:f,width:b([y,f]),height:b([y,f]),style:g,progressInterval:f,playsinline:h,pip:h,stopOnUnmount:h,light:b([h,y,g]),playIcon:v,previewTabIndex:f,previewAriaLabel:y,fallback:v,oEmbedUrl:y,wrapper:b([y,w,P({render:w.isRequired})]),config:P({soundcloud:P({options:g}),youtube:P({playerVars:g,embedOptions:g,onUnstarted:w}),facebook:P({appId:y,version:y,playerId:y,attributes:g}),dailymotion:P({params:g}),vimeo:P({playerOptions:g,title:y}),mux:P({attributes:g,version:y}),file:P({attributes:g,tracks:m,forceVideo:h,forceAudio:h,forceHLS:h,forceSafariHLS:h,forceDisableHls:h,forceDASH:h,forceFLV:h,hlsOptions:g,hlsVersion:y,dashVersion:y,flvVersion:y}),wistia:P({options:g,playerId:y,customControls:m}),mixcloud:P({options:g}),twitch:P({options:g,playerId:y}),vidyard:P({options:g})}),onReady:w,onStart:w,onPlay:w,onPause:w,onBuffer:w,onBufferEnd:w,onEnded:w,onError:w,onDuration:w,onSeek:w,onPlaybackRateChange:w,onPlaybackQualityChange:w,onProgress:w,onClickPreview:w,onEnablePIP:w,onDisablePIP:w},k=()=>{},_={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:k},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:k,onStart:k,onPlay:k,onPause:k,onBuffer:k,onBufferEnd:k,onEnded:k,onError:k,onDuration:k,onSeek:k,onPlaybackRateChange:k,onPlaybackQualityChange:k,onProgress:k,onClickPreview:k,onEnablePIP:k,onDisablePIP:k}},98410:(e,t,r)=>{var a,n=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,s=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of l(t))u.call(e,n)||n===r||o(e,n,{get:()=>t[n],enumerable:!(a=i(t,n))||a.enumerable});return e},d=(e,t,r)=>(r=null!=e?n(s(e)):{},c(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)),p={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(p,{callPlayer:()=>A,getConfig:()=>C,getSDK:()=>E,isBlobUrl:()=>M,isMediaStream:()=>R,lazy:()=>m,omit:()=>I,parseEndTime:()=>k,parseStartTime:()=>O,queryString:()=>T,randomString:()=>_,supportsWebKitPresentationMode:()=>L}),e.exports=(a=p,c(o({},"__esModule",{value:!0}),a));var y=d(r(79474)),h=d(r(37892)),f=d(r(47314));const m=e=>y.default.lazy((async()=>{const t=await e();return"function"==typeof t.default?t:t.default})),b=/[?&#](?:start|t)=([0-9hms]+)/,P=/[?&#]end=([0-9hms]+)/,g=/(\d+)(h|m|s)/g,w=/^\d+$/;function v(e,t){if(e instanceof Array)return;const r=e.match(t);if(r){const e=r[1];if(e.match(g))return function(e){let t=0,r=g.exec(e);for(;null!==r;){const[,a,n]=r;"h"===n&&(t+=60*parseInt(a,10)*60),"m"===n&&(t+=60*parseInt(a,10)),"s"===n&&(t+=parseInt(a,10)),r=g.exec(e)}return t}(e);if(w.test(e))return parseInt(e)}}function O(e){return v(e,b)}function k(e){return v(e,P)}function _(){return Math.random().toString(36).substr(2,5)}function T(e){return Object.keys(e).map((t=>`${t}=${e[t]}`)).join("&")}function j(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const S={},E=function(e){0;return e}((function(e,t,r=null,a=(()=>!0),n=h.default){const o=j(t);return o&&a(o)?Promise.resolve(o):new Promise(((a,o)=>{if(S[e])return void S[e].push({resolve:a,reject:o});S[e]=[{resolve:a,reject:o}];const i=t=>{S[e].forEach((e=>e.resolve(t)))};if(r){const e=window[r];window[r]=function(){e&&e(),i(j(t))}}n(e,(a=>{a?(S[e].forEach((e=>e.reject(a))),S[e]=null):r||i(j(t))}))}))}));function C(e,t){return(0,f.default)(t.config,e.config)}function I(e,...t){const r=[].concat(...t),a={},n=Object.keys(e);for(const o of n)-1===r.indexOf(o)&&(a[o]=e[o]);return a}function A(e,...t){if(!this.player||!this.player[e]){let t=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c \u2013 `;return this.player?this.player[e]||(t+="The method was not available"):t+="The player was not available",console.warn(t,"font-weight: bold",""),null}return this.player[e](...t)}function R(e){return"undefined"!=typeof window&&void 0!==window.MediaStream&&e instanceof window.MediaStream}function M(e){return/^blob:/.test(e)}function L(e=document.createElement("video")){const t=!1===/iPhone|iPod/.test(navigator.userAgent);return e.webkitSupportsPresentationMode&&"function"==typeof e.webkitSetPresentationMode&&t}}}]);