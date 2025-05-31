var p;(n=>(n.isTouch="ontouchstart"in window||navigator.maxTouchPoints>0,n.isChrome=navigator.userAgent.toLowerCase().includes("chrome/"),n.isWebKit=navigator.userAgent.toLowerCase().includes("applewebkit/"),n.isSafari=n.isWebKit&&!n.isChrome,n.isSafariDesktop=n.isSafari&&!n.isTouch,n.isWindows=/Win/u.test(navigator.platform),n.isMacOS=/Mac/u.test(navigator.platform),n.isAndroidWebView=n.isChrome&&navigator.userAgent.toLowerCase().includes("; wv)"),n.isIosWebView=n.isWebKit&&!navigator.userAgent.toLowerCase().includes("safari/"),n.isWebView=n.isAndroidWebView||n.isIosWebView))(p||={});var m="__framer_hide_editorbar_until",y="2147483647";function W(){let s=localStorage.getItem(m);if(!s)return!1;let d=Date.now(),c=Number(s);return d>=c||Number.isNaN(c)?(localStorage.removeItem(m),!1):!0}function M(){return window.self!==window.top}var U=`
#__framer-editorbar {
    --padding-right: 10px;
    color-scheme: light;
    overflow: hidden;
    position: fixed;
    right: var(--padding-right);
    border: none;
    z-index: ${y};
    top: 0;
    width: calc(100vw - var(--padding-right));
    height: 100vh;
}

#__framer-editorbar.status_hidden {
    display: none;
}

#__framer-editorbar.status_measuring {
    clip-path: unset;
}

#__framer-editorbar.fullscreen {
    --padding-right: 0px;
    left: 0;
    right: initial;
}

body:has(#__framer-editorbar.fullscreen) {
    overflow: hidden;
}
`,b=document.createElement("style");b.type="text/css";b.innerHTML=U;document.head.appendChild(b);var I=new URL(import.meta.url).origin;function z({dependencies:s}){if(s.__version!==1)throw new Error("Unsupported dependencies version");if(W()||M()||p.isWebView)return function(){return null};let{createElement:d,memo:c,useCallback:g,useEffect:u,useRef:x,useState:l}=s.react,{createPortal:h}=s["react-dom"],{useCurrentRoute:E,useLocaleInfo:S,useRouter:n}=s.framer;function v(){let[r,o]=l(!1),t=g(()=>{"requestIdleCallback"in window?requestIdleCallback(()=>{o(!0)}):setTimeout(()=>{o(!0)},300)},[]);return u(()=>{let e;return document.readyState==="complete"?t():(e=()=>{document.readyState==="complete"&&t()},document.addEventListener("readystatechange",e,{once:!0})),()=>{e&&document.removeEventListener("readystatechange",e)}},[t]),r}function N(){let[r,o]=l({className:"status_hidden"});return u(()=>{let t=e=>{e.origin===I&&typeof e.data=="object"&&e.data?.apiVersion===1&&(e.data.type==="beginSizeMeasuring"&&o({className:"status_measuring"}),e.data.type==="updateStyle"&&o({style:{clipPath:e.data.clipPath}}),e.data.type==="editorBarHidden"&&(o({className:"status_hidden"}),window.removeEventListener("message",t)),e.data.type==="enterFullscreen"&&(o({className:"fullscreen"}),window.removeEventListener("message",t)))};return window.addEventListener("message",t),()=>{window.removeEventListener("message",t)}},[]),r}function D(){let[r,o]=l(!1);return u(()=>{if(r)return;let t=e=>{if(e.origin===I&&typeof e.data=="object"&&e.data?.apiVersion===1&&e.data.type==="editorBarHidden"&&!r){let a=Date.now()+6048e5;localStorage.setItem(m,a.toString()),o(!0),window.removeEventListener("message",t)}};return window.addEventListener("message",t),()=>{window.removeEventListener("message",t)}},[]),r}function R({iframeRef:r}){let[o,t]=l(void 0),e=L();return u(()=>{t(i=>i??e),e&&r.current&&r.current.contentWindow.postMessage({apiVersion:1,type:"updateNodeId",nodeId:e},I)},[r,e]),o}function L(){let r=E(),o=S()?.activeLocale??void 0,{collectionUtils:t}=n(),[e,i]=l(void 0),a=r?.id,f=r?.collectionId,w=r?.pathVariables;return u(()=>{let _=!1;return A({activeLocale:o,collectionId:f,collectionUtils:t,pathVariables:w}).then(P=>{_||i(P??a)}).catch(()=>{_||i(a)}),()=>{_=!0}},[o,f,t,w,a]),e}async function A({activeLocale:r,collectionId:o,collectionUtils:t,pathVariables:e}){if(o){let i=Object.values(e);if(i.length!==1)return;let a=t?.[o];return await(await a?.())?.getRecordIdBySlug(i[0],r)}}function C({framerSiteId:r,features:o,iframeRef:t,measuringProps:e,initialNodeId:i}){let a=new URL(import.meta.url),f=a.pathname.lastIndexOf("/");if(f<0)throw new Error("Invalid pathname");return a.pathname=a.pathname.slice(0,f),a.searchParams.set("framerSiteId",r),a.searchParams.set("nodeId",i),a.searchParams.set("source",window.location.hostname),a.searchParams.set("features",JSON.stringify(o||{})),d("iframe",{...e,id:"__framer-editorbar",ref:t,src:a.href,className:e.className})}function T({framerSiteId:r,features:o}){let t=x(null),e=v(),i=N(),a=R({iframeRef:t});return D(),!e||!a?null:h(d(C,{framerSiteId:r,features:o,iframeRef:t,measuringProps:i,initialNodeId:a}),document.body)}return c(T)}export{z as createEditorBar};
