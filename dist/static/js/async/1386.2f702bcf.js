(self.webpackChunkapp=self.webpackChunkapp||[]).push([["1386"],{56943:function(e,t,a){"use strict";a.d(t,{Z:()=>I});var o=a("57322"),r=a("67026"),l=a("94780"),i=a("49011"),n=a("87386"),c=a("85893");let s=(0,n.Z)((0,c.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");var p=a("51705"),d=a("98216"),u=a("5538"),m=a("90948"),v=a("88157"),g=a("40902"),y=a("75984"),b=a("1588"),f=a("34867");function h(e){return(0,f.ZP)("MuiChip",e)}let $=(0,b.Z)("MuiChip",["root","sizeSmall","sizeMedium","colorDefault","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),C=e=>{let{classes:t,disabled:a,size:o,color:r,iconColor:i,onDelete:n,clickable:c,variant:s}=e,p={root:["root",s,a&&"disabled",`size${(0,d.Z)(o)}`,`color${(0,d.Z)(r)}`,c&&"clickable",c&&`clickableColor${(0,d.Z)(r)}`,n&&"deletable",n&&`deletableColor${(0,d.Z)(r)}`,`${s}${(0,d.Z)(r)}`],label:["label",`label${(0,d.Z)(o)}`],avatar:["avatar",`avatar${(0,d.Z)(o)}`,`avatarColor${(0,d.Z)(r)}`],icon:["icon",`icon${(0,d.Z)(o)}`,`iconColor${(0,d.Z)(i)}`],deleteIcon:["deleteIcon",`deleteIcon${(0,d.Z)(o)}`,`deleteIconColor${(0,d.Z)(r)}`,`deleteIcon${(0,d.Z)(s)}Color${(0,d.Z)(r)}`]};return(0,l.Z)(p,h,t)},Z=(0,m.ZP)("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e,{color:o,iconColor:r,clickable:l,onDelete:i,size:n,variant:c}=a;return[{[`& .${$.avatar}`]:t.avatar},{[`& .${$.avatar}`]:t[`avatar${(0,d.Z)(n)}`]},{[`& .${$.avatar}`]:t[`avatarColor${(0,d.Z)(o)}`]},{[`& .${$.icon}`]:t.icon},{[`& .${$.icon}`]:t[`icon${(0,d.Z)(n)}`]},{[`& .${$.icon}`]:t[`iconColor${(0,d.Z)(r)}`]},{[`& .${$.deleteIcon}`]:t.deleteIcon},{[`& .${$.deleteIcon}`]:t[`deleteIcon${(0,d.Z)(n)}`]},{[`& .${$.deleteIcon}`]:t[`deleteIconColor${(0,d.Z)(o)}`]},{[`& .${$.deleteIcon}`]:t[`deleteIcon${(0,d.Z)(c)}Color${(0,d.Z)(o)}`]},t.root,t[`size${(0,d.Z)(n)}`],t[`color${(0,d.Z)(o)}`],l&&t.clickable,l&&"default"!==o&&t[`clickableColor${(0,d.Z)(o)})`],i&&t.deletable,i&&"default"!==o&&t[`deletableColor${(0,d.Z)(o)}`],t[c],t[`${c}${(0,d.Z)(o)}`]]}})((0,v.Z)(({theme:e})=>{let t="light"===e.palette.mode?e.palette.grey[700]:e.palette.grey[300];return{maxWidth:"100%",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(e.vars||e).palette.text.primary,backgroundColor:(e.vars||e).palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${$.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${$.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.vars?e.vars.palette.Chip.defaultAvatarColor:t,fontSize:e.typography.pxToRem(12)},[`& .${$.avatarColorPrimary}`]:{color:(e.vars||e).palette.primary.contrastText,backgroundColor:(e.vars||e).palette.primary.dark},[`& .${$.avatarColorSecondary}`]:{color:(e.vars||e).palette.secondary.contrastText,backgroundColor:(e.vars||e).palette.secondary.dark},[`& .${$.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${$.icon}`]:{marginLeft:5,marginRight:-6},[`& .${$.deleteIcon}`]:{WebkitTapHighlightColor:"transparent",color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.26)`:(0,i.Fq)(e.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:(0,i.Fq)(e.palette.text.primary,.4)}},variants:[{props:{size:"small"},style:{height:24,[`& .${$.icon}`]:{fontSize:18,marginLeft:4,marginRight:-4},[`& .${$.deleteIcon}`]:{fontSize:16,marginRight:4,marginLeft:-4}}},...Object.entries(e.palette).filter((0,g.Z)(["contrastText"])).map(([t])=>({props:{color:t},style:{backgroundColor:(e.vars||e).palette[t].main,color:(e.vars||e).palette[t].contrastText,[`& .${$.deleteIcon}`]:{color:e.vars?`rgba(${e.vars.palette[t].contrastTextChannel} / 0.7)`:(0,i.Fq)(e.palette[t].contrastText,.7),"&:hover, &:active":{color:(e.vars||e).palette[t].contrastText}}}})),{props:e=>e.iconColor===e.color,style:{[`& .${$.icon}`]:{color:e.vars?e.vars.palette.Chip.defaultIconColor:t}}},{props:e=>e.iconColor===e.color&&"default"!==e.color,style:{[`& .${$.icon}`]:{color:"inherit"}}},{props:{onDelete:!0},style:{[`&.${$.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,i.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}}},...Object.entries(e.palette).filter((0,g.Z)(["dark"])).map(([t])=>({props:{color:t,onDelete:!0},style:{[`&.${$.focusVisible}`]:{background:(e.vars||e).palette[t].dark}}})),{props:{clickable:!0},style:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,i.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)},[`&.${$.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,i.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&:active":{boxShadow:(e.vars||e).shadows[1]}}},...Object.entries(e.palette).filter((0,g.Z)(["dark"])).map(([t])=>({props:{color:t,clickable:!0},style:{[`&:hover, &.${$.focusVisible}`]:{backgroundColor:(e.vars||e).palette[t].dark}}})),{props:{variant:"outlined"},style:{backgroundColor:"transparent",border:e.vars?`1px solid ${e.vars.palette.Chip.defaultBorder}`:`1px solid ${"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${$.clickable}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${$.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`& .${$.avatar}`]:{marginLeft:4},[`& .${$.avatarSmall}`]:{marginLeft:2},[`& .${$.icon}`]:{marginLeft:4},[`& .${$.iconSmall}`]:{marginLeft:2},[`& .${$.deleteIcon}`]:{marginRight:5},[`& .${$.deleteIconSmall}`]:{marginRight:3}}},...Object.entries(e.palette).filter((0,g.Z)()).map(([t])=>({props:{variant:"outlined",color:t},style:{color:(e.vars||e).palette[t].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[t].mainChannel} / 0.7)`:(0,i.Fq)(e.palette[t].main,.7)}`,[`&.${$.clickable}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,i.Fq)(e.palette[t].main,e.palette.action.hoverOpacity)},[`&.${$.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.focusOpacity})`:(0,i.Fq)(e.palette[t].main,e.palette.action.focusOpacity)},[`& .${$.deleteIcon}`]:{color:e.vars?`rgba(${e.vars.palette[t].mainChannel} / 0.7)`:(0,i.Fq)(e.palette[t].main,.7),"&:hover, &:active":{color:(e.vars||e).palette[t].main}}}}))]}})),k=(0,m.ZP)("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,t)=>{let{ownerState:a}=e,{size:o}=a;return[t.label,t[`label${(0,d.Z)(o)}`]]}})({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap",variants:[{props:{variant:"outlined"},style:{paddingLeft:11,paddingRight:11}},{props:{size:"small"},style:{paddingLeft:8,paddingRight:8}},{props:{size:"small",variant:"outlined"},style:{paddingLeft:7,paddingRight:7}}]});function x(e){return"Backspace"===e.key||"Delete"===e.key}let I=o.forwardRef(function(e,t){let a=(0,y.i)({props:e,name:"MuiChip"}),{avatar:l,className:i,clickable:n,color:d="default",component:m,deleteIcon:v,disabled:g=!1,icon:b,label:f,onClick:h,onDelete:$,onKeyDown:I,onKeyUp:O,size:S="medium",variant:R="filled",tabIndex:T,skipFocusWhenDisabled:P=!1,...w}=a,L=o.useRef(null),M=(0,p.Z)(L,t),V=e=>{e.stopPropagation(),$&&$(e)},F=!1!==n&&!!h||n,z=F||$?u.Z:m||"div",q={...a,component:z,disabled:g,size:S,color:d,iconColor:o.isValidElement(b)&&b.props.color||d,onDelete:!!$,clickable:F,variant:R},j=C(q),D=z===u.Z?{component:m||"div",focusVisibleClassName:j.focusVisible,...$&&{disableRipple:!0}}:{},E=null;$&&(E=v&&o.isValidElement(v)?o.cloneElement(v,{className:(0,r.Z)(v.props.className,j.deleteIcon),onClick:V}):(0,c.jsx)(s,{className:(0,r.Z)(j.deleteIcon),onClick:V}));let N=null;l&&o.isValidElement(l)&&(N=o.cloneElement(l,{className:(0,r.Z)(j.avatar,l.props.className)}));let W=null;return b&&o.isValidElement(b)&&(W=o.cloneElement(b,{className:(0,r.Z)(j.icon,b.props.className)})),(0,c.jsxs)(Z,{as:z,className:(0,r.Z)(j.root,i),disabled:!!F&&!!g||void 0,onClick:h,onKeyDown:e=>{e.currentTarget===e.target&&x(e)&&e.preventDefault(),I&&I(e)},onKeyUp:e=>{e.currentTarget===e.target&&$&&x(e)&&$(e),O&&O(e)},ref:M,tabIndex:P&&g?-1:T,ownerState:q,...D,...w,children:[N||W,(0,c.jsx)(k,{className:(0,r.Z)(j.label),ownerState:q,children:f}),E]})})},35097:function(e,t,a){"use strict";a.d(t,{V:function(){return l},Z:function(){return i}});var o=a(1588),r=a(34867);function l(e){return(0,r.ZP)("MuiDivider",e)}let i=(0,o.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"])},84592:function(e,t,a){"use strict";a.d(t,{Z:function(){return i},f:function(){return l}});var o=a(1588),r=a(34867);function l(e){return(0,r.ZP)("MuiListItemIcon",e)}let i=(0,o.Z)("MuiListItemIcon",["root","alignItemsFlexStart"])},26336:function(e,t,a){"use strict";a.d(t,{L:function(){return l},Z:function(){return i}});var o=a(1588),r=a(34867);function l(e){return(0,r.ZP)("MuiListItemText",e)}let i=(0,o.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"])},56482:function(e,t,a){"use strict";a.d(t,{Z:()=>I});var o=a("57322"),r=a("67026"),l=a("94780"),i=a("49011"),n=a("14136"),c=a("90948"),s=a("88157"),p=a("75984"),d=a("59773"),u=a("5538"),m=a("58974"),v=a("51705"),g=a("35097"),y=a("84592"),b=a("26336"),f=a("1588"),h=a("34867");function $(e){return(0,h.ZP)("MuiMenuItem",e)}let C=(0,f.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);var Z=a("85893");let k=e=>{let{disabled:t,dense:a,divider:o,disableGutters:r,selected:i,classes:n}=e,c=(0,l.Z)({root:["root",a&&"dense",t&&"disabled",!r&&"gutters",o&&"divider",i&&"selected"]},$,n);return{...n,...c}},x=(0,c.ZP)(u.Z,{shouldForwardProp:e=>(0,n.Z)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]}})((0,s.Z)(({theme:e})=>({...e.typography.body1,display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap","&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${C.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,i.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${C.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,i.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${C.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,i.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,i.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${C.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${C.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${g.Z.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${g.Z.inset}`]:{marginLeft:52},[`& .${b.Z.root}`]:{marginTop:0,marginBottom:0},[`& .${b.Z.inset}`]:{paddingLeft:36},[`& .${y.Z.root}`]:{minWidth:36},variants:[{props:({ownerState:e})=>!e.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:e})=>e.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:e})=>!e.dense,style:{[e.breakpoints.up("sm")]:{minHeight:"auto"}}},{props:({ownerState:e})=>e.dense,style:{minHeight:32,paddingTop:4,paddingBottom:4,...e.typography.body2,[`& .${y.Z.root} svg`]:{fontSize:"1.25rem"}}}]}))),I=o.forwardRef(function(e,t){let a;let l=(0,p.i)({props:e,name:"MuiMenuItem"}),{autoFocus:i=!1,component:n="li",dense:c=!1,divider:s=!1,disableGutters:u=!1,focusVisibleClassName:g,role:y="menuitem",tabIndex:b,className:f,...h}=l,$=o.useContext(d.Z),C=o.useMemo(()=>({dense:c||$.dense||!1,disableGutters:u}),[$.dense,c,u]),I=o.useRef(null);(0,m.Z)(()=>{i&&I.current&&I.current.focus()},[i]);let O={...l,dense:C.dense,divider:s,disableGutters:u},S=k(l),R=(0,v.Z)(I,t);return!l.disabled&&(a=void 0!==b?b:-1),(0,Z.jsx)(d.Z.Provider,{value:C,children:(0,Z.jsx)(x,{ref:R,role:y,tabIndex:a,component:n,focusVisibleClassName:(0,r.Z)(S.focusVisible,g),className:(0,r.Z)(S.root,f),...h,ownerState:O,classes:S})})})},59243:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});let o=(0,a(20058).ZP)()},92703:function(e,t,a){"use strict";var o=a(50414);function r(){}function l(){}l.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,l,i){if(i!==o){var n=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:r};return a.PropTypes=a,a}},45697:function(e,t,a){e.exports=a(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);