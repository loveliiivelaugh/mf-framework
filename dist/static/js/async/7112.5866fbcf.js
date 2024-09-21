/*! For license information please see 7112.5866fbcf.js.LICENSE.txt */
"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([["7112"],{9730:function(e,t,r){r.d(t,{Z:()=>m});var o=r("57322"),n=r("67026"),i=r("94780"),l=r("90948"),a=r("75984"),s=r("59773"),u=r("1588"),c=r("34867");function p(e){return(0,c.ZP)("MuiList",e)}(0,u.Z)("MuiList",["root","padding","dense","subheader"]);var f=r("85893");let d=e=>{let{classes:t,disablePadding:r,dense:o,subheader:n}=e;return(0,i.Z)({root:["root",!r&&"padding",o&&"dense",n&&"subheader"]},p,t)},h=(0,l.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,!r.disablePadding&&t.padding,r.dense&&t.dense,r.subheader&&t.subheader]}})({listStyle:"none",margin:0,padding:0,position:"relative",variants:[{props:({ownerState:e})=>!e.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:e})=>e.subheader,style:{paddingTop:0}}]}),m=o.forwardRef(function(e,t){let r=(0,a.i)({props:e,name:"MuiList"}),{children:i,className:l,component:u="ul",dense:c=!1,disablePadding:p=!1,subheader:m,...v}=r,y=o.useMemo(()=>({dense:c}),[c]),g={...r,component:u,dense:c,disablePadding:p},b=d(g);return(0,f.jsx)(s.Z.Provider,{value:y,children:(0,f.jsxs)(h,{as:u,className:(0,n.Z)(b.root,l),ref:t,ownerState:g,...v,children:[m,i]})})})},18606:function(e,t,r){r.d(t,{Z:()=>F});var o=r("57322");r("59864");var n=r("67026"),i=r("94780"),l=r("86475"),a=r("82963"),s=r("97354"),u=r("59254"),c=r("90948"),p=r("75984"),f=r("57144"),d=r("8038"),h=r("5340"),m=r("51705"),v=r("96514"),y=r("56099"),g=r("46500"),b=r("1588"),Z=r("34867");function P(e){return(0,Z.ZP)("MuiPopover",e)}(0,b.Z)("MuiPopover",["root","paper"]);var w=r("80560"),M=r("85893");function S(e,t){let r=0;return"number"==typeof t?r=t:"center"===t?r=e.height/2:"bottom"===t&&(r=e.height),r}function x(e,t){let r=0;return"number"==typeof t?r=t:"center"===t?r=e.width/2:"right"===t&&(r=e.width),r}function k(e){return[e.horizontal,e.vertical].map(e=>"number"==typeof e?`${e}px`:e).join(" ")}function E(e){return"function"==typeof e?e():e}let C=e=>{let{classes:t}=e;return(0,i.Z)({root:["root"],paper:["paper"]},P,t)},R=(0,c.ZP)(y.Z,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),T=(0,c.ZP)(g.Z,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),z=o.forwardRef(function(e,t){let r=(0,p.i)({props:e,name:"MuiPopover"}),{action:i,anchorEl:l,anchorOrigin:a={vertical:"top",horizontal:"left"},anchorPosition:s,anchorReference:c="anchorEl",children:y,className:g,container:b,elevation:Z=8,marginThreshold:P=16,open:z,PaperProps:L={},slots:j={},slotProps:D={},transformOrigin:H={vertical:"top",horizontal:"left"},TransitionComponent:K=v.Z,transitionDuration:N="auto",TransitionProps:{onEntering:$,...O}={},disableScrollLock:F=!1,...I}=r,W=D?.paper??L,A=o.useRef(),_={...r,anchorOrigin:a,anchorReference:c,elevation:Z,marginThreshold:P,externalPaperSlotProps:W,transformOrigin:H,TransitionComponent:K,transitionDuration:N,TransitionProps:O},V=C(_),B=o.useCallback(()=>{if("anchorPosition"===c)return s;let e=E(l),t=(e&&1===e.nodeType?e:(0,d.Z)(A.current).body).getBoundingClientRect();return{top:t.top+S(t,a.vertical),left:t.left+x(t,a.horizontal)}},[l,a.horizontal,a.vertical,s,c]),U=o.useCallback(e=>({vertical:S(e,H.vertical),horizontal:x(e,H.horizontal)}),[H.horizontal,H.vertical]),X=o.useCallback(e=>{let t={width:e.offsetWidth,height:e.offsetHeight},r=U(t);if("none"===c)return{top:null,left:null,transformOrigin:k(r)};let o=B(),n=o.top-r.vertical,i=o.left-r.horizontal,a=n+t.height,s=i+t.width,u=(0,h.Z)(E(l)),p=u.innerHeight-P,f=u.innerWidth-P;if(null!==P&&n<P){let e=n-P;n-=e,r.vertical+=e}else if(null!==P&&a>p){let e=a-p;n-=e,r.vertical+=e}if(null!==P&&i<P){let e=i-P;i-=e,r.horizontal+=e}else if(s>f){let e=s-f;i-=e,r.horizontal+=e}return{top:`${Math.round(n)}px`,left:`${Math.round(i)}px`,transformOrigin:k(r)}},[l,c,B,U,P]),[Y,q]=o.useState(z),G=o.useCallback(()=>{let e=A.current;if(!e)return;let t=X(e);null!==t.top&&(e.style.top=t.top),null!==t.left&&(e.style.left=t.left),e.style.transformOrigin=t.transformOrigin,q(!0)},[X]);o.useEffect(()=>(F&&window.addEventListener("scroll",G),()=>window.removeEventListener("scroll",G)),[l,F,G]);o.useEffect(()=>{z&&G()}),o.useImperativeHandle(i,()=>z?{updatePosition:()=>{G()}}:null,[z,G]),o.useEffect(()=>{if(!z)return;let e=(0,f.Z)(()=>{G()}),t=(0,h.Z)(l);return t.addEventListener("resize",e),()=>{e.clear(),t.removeEventListener("resize",e)}},[l,z,G]);let J=N;"auto"===N&&!K.muiSupportAuto&&(J=void 0);let Q=b||(l?(0,d.Z)(E(l)).body:void 0),ee={slots:j,slotProps:{...D,paper:W}},[et,er]=(0,w.Z)("paper",{elementType:T,externalForwardedProps:ee,additionalProps:{elevation:Z,className:(0,n.Z)(V.paper,W?.className),style:Y?W.style:{...W.style,opacity:0}},ownerState:_}),[eo,{slotProps:en,...ei}]=(0,w.Z)("root",{elementType:R,externalForwardedProps:ee,additionalProps:{slotProps:{backdrop:{invisible:!0}},container:Q,open:z},ownerState:_,className:(0,n.Z)(V.root,g)}),el=(0,m.Z)(A,er.ref);return(0,M.jsx)(eo,{...ei,...!(0,u.Z)(eo)&&{slotProps:en,disableScrollLock:F},...I,ref:t,children:(0,M.jsx)(K,{appear:!0,in:z,onEntering:(e,t)=>{$&&$(e,t),G()},onExited:()=>{q(!1)},timeout:J,...O,children:(0,M.jsx)(et,{...er,ref:el,children:y})})})});var L=r("14136");function j(e){return(0,Z.ZP)("MuiMenu",e)}(0,b.Z)("MuiMenu",["root","paper","list"]);let D={vertical:"top",horizontal:"right"},H={vertical:"top",horizontal:"left"},K=e=>{let{classes:t}=e;return(0,i.Z)({root:["root"],paper:["paper"],list:["list"]},j,t)},N=(0,c.ZP)(z,{shouldForwardProp:e=>(0,L.Z)(e)||"classes"===e,name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),$=(0,c.ZP)(T,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),O=(0,c.ZP)(s.Z,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),F=o.forwardRef(function(e,t){let r=(0,p.i)({props:e,name:"MuiMenu"}),{autoFocus:i=!0,children:s,className:u,disableAutoFocusItem:c=!1,MenuListProps:f={},onClose:d,open:h,PaperProps:m={},PopoverClasses:v,transitionDuration:y="auto",TransitionProps:{onEntering:g,...b}={},variant:Z="selectedMenu",slots:P={},slotProps:w={},...S}=r,x=(0,l.V)(),k={...r,autoFocus:i,disableAutoFocusItem:c,MenuListProps:f,onEntering:g,PaperProps:m,transitionDuration:y,TransitionProps:b,variant:Z},E=K(k),C=i&&!c&&h,R=o.useRef(null),T=-1;o.Children.map(s,(e,t)=>{if(!!o.isValidElement(e))!e.props.disabled&&("selectedMenu"===Z&&e.props.selected?T=t:-1===T&&(T=t))});let z=P.paper??$,L=w.paper??m,j=(0,a.Z)({elementType:P.root,externalSlotProps:w.root,ownerState:k,className:[E.root,u]}),F=(0,a.Z)({elementType:z,externalSlotProps:L,ownerState:k,className:E.paper});return(0,M.jsx)(N,{onClose:d,anchorOrigin:{vertical:"bottom",horizontal:x?"right":"left"},transformOrigin:x?D:H,slots:{paper:z,root:P.root},slotProps:{root:j,paper:F},open:h,ref:t,transitionDuration:y,TransitionProps:{onEntering:(e,t)=>{R.current&&R.current.adjustStyleForScrollbar(e,{direction:x?"rtl":"ltr"}),g&&g(e,t)},...b},ownerState:k,...S,classes:v,children:(0,M.jsx)(O,{onKeyDown:e=>{"Tab"===e.key&&(e.preventDefault(),d&&d(e,"tabKeyDown"))},actions:R,autoFocus:i&&(-1===T||c),autoFocusItem:C,variant:Z,...f,className:(0,n.Z)(E.list,f.className),children:s})})})},97354:function(e,t,r){r.d(t,{Z:()=>h});var o=r("57322");r("59864");var n=r("8038"),i=r("9730");let l=r("40549").Z;var a=r("51705"),s=r("58974"),u=r("85893");function c(e,t,r){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:r?null:e.firstChild}function p(e,t,r){return e===t?r?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:r?null:e.lastChild}function f(e,t){if(void 0===t)return!0;let r=e.innerText;return void 0===r&&(r=e.textContent),0!==(r=r.trim().toLowerCase()).length&&(t.repeating?r[0]===t.keys[0]:r.startsWith(t.keys.join("")))}function d(e,t,r,o,n,i){let l=!1,a=n(e,t,!!t&&r);for(;a;){if(a===e.firstChild){if(l)return!1;l=!0}let t=!o&&(a.disabled||"true"===a.getAttribute("aria-disabled"));if(a.hasAttribute("tabindex")&&f(a,i)&&!t)return a.focus(),!0;a=n(e,a,r)}return!1}let h=o.forwardRef(function(e,t){let{actions:r,autoFocus:h=!1,autoFocusItem:m=!1,children:v,className:y,disabledItemsFocusable:g=!1,disableListWrap:b=!1,onKeyDown:Z,variant:P="selectedMenu",...w}=e,M=o.useRef(null),S=o.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});(0,s.Z)(()=>{h&&M.current.focus()},[h]),o.useImperativeHandle(r,()=>({adjustStyleForScrollbar:(e,{direction:t})=>{let r=!M.current.style.width;if(e.clientHeight<M.current.clientHeight&&r){let r=`${l((0,n.Z)(e))}px`;M.current.style["rtl"===t?"paddingLeft":"paddingRight"]=r,M.current.style.width=`calc(100% + ${r})`}return M.current}}),[]);let x=(0,a.Z)(M,t),k=-1;o.Children.forEach(v,(e,t)=>{if(!o.isValidElement(e)){k===t&&(k+=1)>=v.length&&(k=-1);return}!e.props.disabled&&("selectedMenu"===P&&e.props.selected?k=t:-1===k&&(k=t)),k===t&&(e.props.disabled||e.props.muiSkipListHighlight||e.type.muiSkipListHighlight)&&(k+=1)>=v.length&&(k=-1)});let E=o.Children.map(v,(e,t)=>{if(t===k){let t={};return m&&(t.autoFocus=!0),void 0===e.props.tabIndex&&"selectedMenu"===P&&(t.tabIndex=0),o.cloneElement(e,t)}return e});return(0,u.jsx)(i.Z,{role:"menu",ref:x,className:y,onKeyDown:e=>{let t=M.current,r=e.key;if(e.ctrlKey||e.metaKey||e.altKey){Z&&Z(e);return}let o=(0,n.Z)(t).activeElement;if("ArrowDown"===r)e.preventDefault(),d(t,o,b,g,c);else if("ArrowUp"===r)e.preventDefault(),d(t,o,b,g,p);else if("Home"===r)e.preventDefault(),d(t,null,b,g,c);else if("End"===r)e.preventDefault(),d(t,null,b,g,p);else if(1===r.length){let n=S.current,i=r.toLowerCase(),l=performance.now();n.keys.length>0&&(l-n.lastTime>500?(n.keys=[],n.repeating=!0,n.previousKeyMatched=!0):n.repeating&&i!==n.keys[0]&&(n.repeating=!1)),n.lastTime=l,n.keys.push(i);let a=o&&!n.repeating&&f(o,n);n.previousKeyMatched&&(a||d(t,o,!1,g,c,n))?e.preventDefault():n.previousKeyMatched=!1}Z&&Z(e)},tabIndex:h?0:-1,...w,children:E})})},57144:function(e,t,r){r.d(t,{Z:function(){return o}});let o=r(39336).Z},59254:function(e,t,r){r.d(t,{Z:function(){return o}});let o=function(e){return"string"==typeof e}},8038:function(e,t,r){r.d(t,{Z:function(){return o}});let o=r(82690).Z},5340:function(e,t,r){r.d(t,{Z:function(){return o}});let o=r(74161).Z},58974:function(e,t,r){r.d(t,{Z:function(){return o}});let o=r(73546).Z},39336:function(e,t,r){r.d(t,{Z:function(){return o}});function o(e,t=166){let r;function n(...o){clearTimeout(r),r=setTimeout(()=>{e.apply(this,o)},t)}return n.clear=()=>{clearTimeout(r)},n}},69921:function(e,t){var r,o,n=Symbol.for("react.element"),i=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),p=Symbol.for("react.server_context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.for("react.offscreen");function g(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case l:case s:case a:case d:case h:return e;default:switch(e=e&&e.$$typeof){case p:case c:case f:case v:case m:case u:return e;default:return t}}case i:return t}}}o=Symbol.for("react.module.reference")},59864:function(e,t,r){r(69921)}}]);