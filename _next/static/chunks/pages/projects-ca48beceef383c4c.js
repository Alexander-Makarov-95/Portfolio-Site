(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{2687:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n(6248)}])},7502:function(e,t,n){"use strict";var i=n(1527),a=n(1986),o=n(894);t.Z=e=>{let{children:t,delay:n}=e;return(0,i.jsx)(o.xu,{as:a.E.div,initial:{opacity:0,scale:1.05},animate:{opacity:1,scale:1},exit:{opacity:0,scale:1.02},transition:{type:"spring",delay:n,duration:.4},children:t})}},4544:function(e,t,n){"use strict";var i=n(1527),a=n(894);t.Z=e=>{let{color:t,width:n,height:o,css:s}=e;return(0,i.jsxs)(a.xu,{as:"svg",viewBox:"0 0 24 24",css:{fill:"$".concat(t),width:n,height:o,...s},children:[(0,i.jsx)(a.xu,{as:"path",d:"M12 1.96L1.29 21h21.42zm0 4.08L19.29 19H4.71z",css:{fill:"$".concat(t)}}),(0,i.jsx)(a.xu,{as:"path",d:"M11 10h2v5h-2zm0 6h2v2h-2z",css:{fill:"$".concat(t)}})]})}},8741:function(e,t,n){"use strict";n.d(t,{W:function(){return WindowProvider},z:function(){return useWindow}});var i=n(1527),a=n(959);let o=(0,a.createContext)({}),useWindow=()=>(0,a.useContext)(o);function WindowProvider(e){let{children:t,setIsResizable:n,isFullscreen:a,appId:s,initialSize:l,setInitialSize:c}=e;return(0,i.jsx)(o.Provider,{value:{setIsResizable:n,isFullscreen:a,appId:s,initialSize:l,setInitialSize:c},children:t})}},3779:function(e,t,n){"use strict";var i=n(1527),a=n(9731);let CornerLinesBox=e=>{let{children:t,topHorizontalLine:n,bottomHorizontalLine:a,topLeft:u,topRight:p,bottomLeft:g,bottomRight:m,bottom:f,top:y,lineLength:v,css:j}=e;return f&&(g=!0,m=!0),y&&(u=!0,p=!0),(0,i.jsxs)(o,{css:{...j},children:[(0,i.jsxs)(s,{verticalAlign:"top",children:[n&&(0,i.jsx)(x,{children:(0,i.jsx)(h,{})}),(0,i.jsxs)(l,{children:[(0,i.jsx)(c,{align:"topLeft",children:u&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d,{variant:"vertical",css:{$$lineLength:v}}),(0,i.jsx)(d,{variant:"horizontal",css:{$$lineLength:v}})]})}),(0,i.jsx)(c,{align:"topRight",children:p&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d,{variant:"horizontal",css:{$$lineLength:v}}),(0,i.jsx)(d,{variant:"vertical",css:{$$lineLength:v}})]})})]})]}),(0,i.jsxs)(s,{verticalAlign:"bottom",children:[a&&(0,i.jsx)(x,{children:(0,i.jsx)(h,{})}),(0,i.jsxs)(l,{children:[(0,i.jsx)(c,{align:"bottomLeft",children:g&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d,{variant:"vertical",css:{$$lineLength:v}}),(0,i.jsx)(d,{variant:"horizontal",css:{$$lineLength:v}})]})}),(0,i.jsx)(c,{align:"bottomRight",children:m&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d,{variant:"horizontal",css:{$$lineLength:v}}),(0,i.jsx)(d,{variant:"vertical",css:{$$lineLength:v}})]})})]})]}),t]})};CornerLinesBox.defaultProps={withHorizontalLine:!1,lineLength:"7px"};let o=(0,a.zo)("div",{position:"relative"}),s=(0,a.zo)("div",{position:"absolute",right:0,left:0,variants:{verticalAlign:{top:{top:0,bottom:"unset"},bottom:{top:"unset",bottom:0}}}}),l=(0,a.zo)("div",{display:"flex",flexDirection:"row",justifyContent:"space-between"}),c=(0,a.zo)("div",{display:"flex",justifyContent:"space-between",variants:{align:{topLeft:{flexDirection:"row"},topRight:{},bottomLeft:{alignItems:"end"},bottomRight:{alignItems:"end"}}}}),d=(0,a.zo)("div",{backgroundColor:"$cyan1",variants:{variant:{vertical:{height:"$$lineLength",width:"1px"},horizontal:{height:"1px",width:"$$lineLength"}}}}),x=(0,a.zo)("div",{position:"relative"}),h=(0,a.zo)("div",{height:"1px",position:"absolute",top:0,right:50,left:50,bottom:0,borderRadius:"4px",backgroundColor:"$cyan1"});t.Z=CornerLinesBox},7113:function(e,t,n){"use strict";var i=n(1527),a=n(9731),o=n(894);let WidgetHeader=e=>{let{children:t}=e;return(0,i.jsx)(l,{color:"cyan14",size:"max",height:20,children:(0,i.jsx)(s,{children:t})})},s=(0,a.zo)("div",{position:"relative"}),l=(0,a.zo)(o.xT,{transition:"background 150ms ease-out",$$iconOpacity:0,"&:hover":{$$iconOpacity:1},"&:active":{$$iconOpacity:1,background:"$cyan10"}});WidgetHeader.Right=e=>{let{children:t}=e;return(0,i.jsx)(o.xu,{css:{position:"absolute",right:0},children:t})},WidgetHeader.Left=e=>{let{children:t}=e;return(0,i.jsxs)(o.xu,{css:{position:"absolute",left:0,display:"flex",gap:"6px"},children:[(0,i.jsx)(o.xu,{children:t}),(0,i.jsx)(o.xu,{css:{display:"flex",alignItems:"center",opacity:"$$iconOpacity",transition:"opacity 100ms ease-out"}})]})},t.Z=WidgetHeader},2620:function(e,t,n){"use strict";var i=n(1527),a=n(894),o=n(9731);n(2052);var s=n(6093),l=n(959);let c=(0,o.zo)("div",{maxWidth:"calc($sizes$tileSize * 9)",opacity:.9}),d=(0,o.zo)("div",{display:"flex",flexDirection:"row",justifyContent:"center",border:"1px solid transparent",width:58,"@bp570":{width:48},alignItems:"center",flexWrap:"wrap",height:17,["& ".concat(a.T)]:{fontFamily:"$fonts$petch",fontSize:9},transition:"border 200ms",variants:{variant:{primary:{background:"unset"},secondary:{background:"$cyan10"},cyanPrimary:{background:"$cyan8",["& ".concat(a.T)]:{color:"$cyan1"}},cyanSecondary:{["& ".concat(a.T)]:{color:"$cyan1"}},orangePrimary:{["& ".concat(a.T)]:{color:"$orange1"}},yellowSecondary:{["& ".concat(a.T)]:{color:"$yellow1"}}},hightlight:{true:{border:"1px solid $gray10"}}}}),x=(0,o.zo)("div",{display:"flex",gap:4,justifyContent:"space-between","@media (max-width: 510px)":{gap:4}}),h=(0,o.zo)("div",{display:"flex",flexDirection:"column","@media (max-width: 510px)":{display:"none"}});t.ZP=e=>{let{data:t}=e,[n,o]=(0,l.useState)();return(0,i.jsx)(c,{children:(0,i.jsx)(h,{children:null==t?void 0:t.map((e,t)=>(0,i.jsx)(x,{children:e.map((e,t)=>(0,i.jsx)(d,{hightlight:n===e,variant:s.V[e].variant,onMouseEnter:()=>o(e),onMouseLeave:()=>o(void 0),children:(0,i.jsxs)(a.T,{size:"4",weight:3,children:[e," - AM1"]})},"".concat(e,"-MC").concat(t)))},"".concat(e.toString(),"-").concat(t)))})})}},6093:function(e,t,n){"use strict";var i,a;n.d(t,{V:function(){return o},a:function(){return i}}),(a=i||(i={})).EVC="EVC",a.AXH="AXH",a.ERR="ERR",a.OBX="OBX",a.DCX="DCX",a.CTA="CTA";let o={EVC:{variant:"primary"},AXH:{variant:"cyanSecondary"},ERR:{variant:"orangePrimary"},OBX:{variant:"yellowSecondary"},DCX:{variant:"secondary"},CTA:{variant:"cyanPrimary"}}},2686:function(e,t,n){"use strict";n.d(t,{Jt:function(){return s},Mo:function(){return o},jl:function(){return a}});var i=n(6093);let a={id:"MAKAROV CORP",dueDate:"[IMPERATIVE]",label:"PROJECT_ARCHIVE_TERMINAL",description:"Makarov Corps presents an operating system with a sleek, lightweight terminal, optimized for navigating an array of projects with ease. You are free to move around the icons and pop-ups on the desktop. ",unitCodeData:[[i.a.EVC,i.a.CTA,i.a.ERR,i.a.EVC],[i.a.AXH,i.a.OBX,i.a.EVC,i.a.DCX],[i.a.ERR,i.a.EVC,i.a.ERR,i.a.AXH],[i.a.EVC,i.a.CTA,i.a.OBX,i.a.OBX]]},o={id:"alexander.makarov62",dueDate:"[IMPERATIVE CONVERGENCE]",label:"WARP_MAIL_PROTOCOL",description:"Groundbreaking technology in the field of digital communication, employing quantum entanglement and advanced encryption methods to deliver messages instantaneously across vast distances.",unitCodeData:[[i.a.CTA,i.a.OBX,i.a.EVC,i.a.EVC],[i.a.EVC,i.a.AXH,i.a.AXH,i.a.ERR],[i.a.OBX,i.a.DCX,i.a.ERR,i.a.ERR],[i.a.EVC,i.a.AXH,i.a.CTA,i.a.OBX]]},s={id:"alexander-makarov-52b5a215a",dueDate:"[PROXIMAL MANDATE]",label:"LINKEDIN_QUANTUM_LINK",description:"Access the hyperlink to send me a message through LinkedIn in the cybernetic dimension.",unitCodeData:[[i.a.OBX,i.a.EVC,i.a.ERR,i.a.OBX],[i.a.AXH,i.a.ERR,i.a.EVC,i.a.CTA],[i.a.DCX,i.a.DCX,i.a.EVC,i.a.EVC],[i.a.EVC,i.a.AXH,i.a.CTA,i.a.OBX]]}},6248:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Home}});var i,a,o=n(1527),s=n(7502),l=n(894),c=n(852),d=n.n(c),x=n(9731),h=n(1450);(i=a||(a={})).orange="orange",i.cyan="cyan";let u={cyan:{primary:"cyan1",secondary:"orange1",disabled:"cyan9"},orange:{primary:"orange1",secondary:"cyan1",disabled:"cyan9"}},p=(0,x.zo)("div",{flex:1}),g=(0,x.zo)("div",{height:4,flex:1,background:"$cyan1"}),m=(0,x.zo)("div",{display:"flex",flexDirection:"row",gap:"8px"});var step_progress_bar=e=>{let{data:t}=e;return(0,o.jsx)(p,{children:(0,o.jsx)(m,{children:t.map((e,t)=>(0,o.jsx)(g,{css:{background:"$".concat(u[e.color][e.state])}},"".concat(e.color,"-").concat(e.state,"-").concat(t)))})})},f=n(3779),y=n(4544),v=n(2620),j=n(638),b=n.n(j),w=n(959);let C={steam_sync:(0,w.lazy)(()=>n.e(211).then(n.bind(n,9211))),blissful_echoes:(0,w.lazy)(()=>n.e(732).then(n.bind(n,6732))),personal_website:(0,w.lazy)(()=>n.e(931).then(n.bind(n,5931)))},z=(0,w.createContext)({});var contexts_ApplicationContext=e=>{let{children:t}=e,[n,i]=(0,w.useState)([]),[a,s]=(0,w.useState)("");return(0,w.useEffect)(()=>{if(!a||n.length<=1)return;let e=n.findIndex(e=>{let{id:t}=e;return t===a});if(-1!==e){let t=[...n],[a]=t.splice(e,1);t.push(a),i(t)}},[a]),(0,o.jsx)(z.Provider,{value:{apps:n,addApp:e=>{let{name:t,x:a,y:o}=e,l=C[t],c={id:Math.floor(1e7+89999999*Math.random()).toString(),Node:l,title:t,start:Date.now(),x:a,y:o};s(c.id),i([...n,c])},removeApp:e=>{i(t=>t.filter(t=>t.id!==e))},clearApps:()=>{i([])},appOnFocus:a,setAppOnFocus:s},children:t})},_=n(458);function useApps(){let e=(0,w.useContext)(z);if(!e)throw Error("useApps must be used within an ApplicationProvider");return e}var E=n(5317);let DragControls=class DragControls{constructor(){this.componentControls=new Set}subscribe(e){return this.componentControls.add(e),()=>this.componentControls.delete(e)}start(e,t){this.componentControls.forEach(n=>{n.start(e.nativeEvent||e,t)})}};let createDragControls=()=>new DragControls;var k=["mousedown","touchstart"],esm_useClickAway=function(e,t,n){void 0===n&&(n=k);var i=(0,w.useRef)(t);(0,w.useEffect)(function(){i.current=t},[t]),(0,w.useEffect)(function(){for(var handler=function(t){var n=e.current;n&&!n.contains(t.target)&&i.current(t)},t=0,a=n;t<a.length;t++){var o=a[t];!function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)}(document,o,handler)}return function(){for(var e=0,t=n;e<t.length;e++){var i=t[e];!function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}(document,i,handler)}}},[n,e])},A=n(1986),dist_clsx=function(){for(var e,t,n=0,i="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e){if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n)}else for(n in e)e[n]&&(i&&(i+=" "),i+=n)}return i}(e))&&(i&&(i+=" "),i+=t);return i};function AppIcon(e){let{onDoubleClick:t,defaultPosition:n,isDraggable:i,title:a,width:s=45,height:l=40,icon:c}=e,[d,x]=(0,w.useState)(!1),[h,u]=(0,w.useState)(0),p=(0,w.useRef)(null),g=(0,E.h)(createDragControls);return esm_useClickAway(p,()=>{u(0),x(!1)}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{children:"\n          @media only screen and (max-width: 428px) {\n            .app-icon-title {\n              font-size: ".concat(.2*s,"px !important; /* Adjust the font size for iPhone 12 Pro Max */\n            }\n            .app-icon {\n              width: ").concat(.9*s,"px !important;\n              height: ").concat(.8*s,"px !important;\n              \n            }\n          }\n        ")}),(0,o.jsxs)(A.E.div,{className:dist_clsx("flex h-fit w-fit flex-col items-center justify-center p-2"),drag:i,initial:n,dragControls:g,dragMomentum:!1,ref:p,onClickCapture:()=>{1===h&&(null==t||t());let e=setTimeout(()=>{u(0)},300);return u(e=>1===e?(x(!1),0):(x(!0),1)),()=>clearTimeout(e)},style:{backgroundColor:d?"rgba(255, 255, 255, 0.1)":"transparent"},children:[(0,o.jsx)("div",{className:dist_clsx("bg-contain bg-center bg-no-repeat app-icon"),style:{width:.8*s,height:.8*s,backgroundImage:"url(".concat(c,")")}}),(0,o.jsx)("strong",{className:"break-words text-center app-icon-title",style:{width:1.2*s,fontSize:"".concat(.27*s,"px"),color:d?"rgba(255, 255, 255, 0.7)":"rgba(0, 0, 0, 0.7)"},children:a})]})]})}var D=(0,w.memo)(e=>{let{Node:t,appID:n}=e;return(0,o.jsx)(w.Suspense,{children:(0,o.jsx)(t,{appId:n})})}),R=n(8741);function Draggable(e){let{children:t,x:n,y:i,drag:a,setDrag:s,mouse:l,initialHeight:c,initialWidth:d,isFullscreen:x}=e,h=(0,E.h)(createDragControls),u=(0,w.useMemo)(()=>void 0!==n&&void 0!==i?{x:n,y:i}:{x:(300-d)/2,y:(200-c)/2},[n,i,300,200]);return(0,o.jsx)("div",{style:{position:"absolute",zIndex:25,width:x?"100%":"fit-content",height:x?"100%":"fit-content"},children:(0,o.jsx)(A.E.div,{initial:{opacity:0,scale:.1,x:u.x,y:u.y},animate:{opacity:1,scale:1,x:x?0:u.x,y:x?0:u.y},transition:{duration:.5,ease:[.43,.13,.23,.96]},drag:a,onDragEnd:()=>{s(!1)},dragControls:h,dragMomentum:!1,children:t})})}var terminal_Application=function(e){let{Node:t,width:n,height:i,...a}=e,[s,l]=(0,w.useState)(!1),[c,d]=(0,w.useState)(),[x,h]=(0,w.useState)(!1),[u,p]=(0,w.useState)(!0),[g,m]=(0,w.useState)(window.innerWidth),[f,y]=(0,w.useState)(window.innerHeight);(0,w.useEffect)(()=>{function handleResize(){m(window.innerWidth),y(window.innerHeight)}return window.addEventListener("resize",handleResize),()=>window.removeEventListener("resize",handleResize)},[]);let{removeApp:v,setAppOnFocus:j}=useApps(),{setIsResizable:b,initialSize:C,setInitialSize:z}=function(){let[e,t]=(0,w.useState)(!1),[n,i]=(0,w.useState)({width:100,height:200});return{isResizable:e,setIsResizable:t,initialSize:n,setInitialSize:i}}();return(0,w.useEffect)(()=>{setTimeout(()=>{p(!1)},500)},[]),console.log(f,g),(0,o.jsx)(Draggable,{drag:s,mouse:c,setDrag:l,x:a.x,y:a.y,initialHeight:C.height,initialWidth:C.width,children:(0,o.jsxs)("div",{style:{width:g<=500?"150px":C.width,height:g<=500?"100px":C.height,display:"flex",flexDirection:"column",alignItems:"center",fontSize:g<=500?"12px":"18",border:"3px solid rgba(0, 0, 0, 0.4)"},onMouseDown:()=>{j(a.id)},children:[(0,o.jsxs)("div",{style:{zIndex:30,marginTop:0,height:"30px",width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"hsla(19, 77%, 58%, 0.7)",color:"rgba(0, 0, 0, 0.7)",userSelect:"none"},onPointerDown:e=>{d(e),l(!0)},children:[(0,o.jsx)("strong",{style:{marginLeft:"auto",display:"block",opacity:u?0:1},children:a.title}),(0,o.jsx)("div",{style:{marginLeft:"auto",display:"flex",gap:"8px"},children:(0,o.jsx)("button",{style:{display:"flex",height:g<=500?"16px":"24px",width:g<=500?"16px":"24px",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(255, 255, 255, 0.8)",color:"rgba(0, 0, 0, 0.8)",fontSize:g<=500?"10px":"24px"},onClick:()=>{setTimeout(()=>{v(a.id)},300)},children:"x"})})]}),(0,o.jsx)("div",{style:{height:"100%",width:"100%",backgroundColor:"rgba(255, 255, 255, 0.8)",backgroundImage:"url(".concat("/thank_you.svg",")"),backgroundSize:"cover",backgroundPosition:"center"},children:(0,o.jsx)(R.W,{appId:a.id,setIsResizable:b,isFullscreen:x,initialSize:C,setInitialSize:z,children:(0,o.jsx)("div",{style:{height:"100%",width:"100%",opacity:u?0:1},children:(0,o.jsx)(D,{Node:t,appID:a.id})})})})]})})};let S=[{title:"Steam Sync",id:"steam_sync",icon:"icons//applications/steam_sync.svg",defaultPosition:{x:75,y:10},mobileDefaultPosition:{x:30,y:30}},{title:"Portfolio",id:"personal_website",icon:"/icons/applications/planet.svg",defaultPosition:{x:100,y:20},mobileDefaultPosition:{x:100,y:-10}},{title:"Blissful Echoes",id:"blissful_echoes",icon:"/icons/applications/blissful_echoes.svg",defaultPosition:{x:30,y:0},mobileDefaultPosition:{x:150,y:-150}}];var terminal_WelcomeCard=function(e){let{onEnterMainframe:t}=e,[n,i]=(0,w.useState)(!0);return(0,o.jsx)("div",{className:dist_clsx("absolute p-1","w-full sm:w-96 md:w-[600px]","h-[288px] md:h-[400px]","bg-no-repeat bg-center bg-contain"),style:{backgroundImage:"url(".concat("/welcome.svg",")")},children:n&&(0,o.jsxs)("div",{className:"flex h-full w-full flex-col items-center justify-center text-center px-2",children:[(0,o.jsx)("h1",{className:"text-[4vw] md:text-xl lg:text-2xl leading-tight md:leading-normal",children:"//SingularityOS//"}),(0,o.jsx)("p",{className:"text-[3vw] my-1 md:text-base lg:text-lg md:my-2 leading-tight md:leading-normal",children:"Welcome to the Pathfinder's onboard operating system."}),(0,o.jsx)("p",{className:"text-[3vw] my-1 md:text-base lg:text-lg md:my-2 leading-tight md:leading-normal",children:"Click through the icons to view my projects."}),(0,o.jsx)("button",{className:dist_clsx(b().button,"text-sm sm:text-base md:text-lg"),onClick:()=>{let e=new Audio("/enter_sound.mp3");e.play(),i(!1),t()},children:"Enter mainframe"})]})})};let $=["|","/","—","\\"];function Loading(){let[e,t]=(0,w.useState)(0),{clearApps:n}=useApps();return(0,w.useEffect)(()=>{n();let e=setInterval(()=>{t(e=>3===e?0:e+1)},300);return()=>{clearInterval(e)}},[]),(0,o.jsxs)("div",{children:[(0,o.jsx)("style",{children:"\n          @media (max-width: 428px) {\n            .text-2xl {\n              font-size: 1.2rem; /* Adjust font size for smaller devices */\n              line-height: 1.2; /* Adjust line height to make text closer */\n              \n            }\n            .text-1xl {\n              font-size: 0.8rem; /* Adjust font size for smaller devices */\n              line-height: 1.2; /* Adjust line height to make text closer */\n              \n            }\n            .loading-char {\n              padding: 10px; /* Adjust the padding as needed */\n            }\n          }\n        "}),(0,o.jsxs)("p",{className:"text-2xl",children:["SingularityOS ",(0,o.jsx)("br",{}),"Beta Release"]}),(0,o.jsx)("span",{className:"loading-char",children:$[e]}),(0,o.jsx)("div",{children:(0,o.jsxs)("p",{className:"text-1xl",children:["Copyright (c) Makarov Corporation, 1995.",(0,o.jsx)("br",{}),"All Rights Reserved. SingularityOS is a registered trademark of Makarov Corp."]})})]})}let L=(0,_.zo)("div",{position:"relative",height:"400px",width:"600px",display:"flex",justifyContent:"center",alignItems:"center","@media (max-width: 428px)":{width:"100%",height:"200px"}}),T=(0,_.zo)("main",{position:"absolute",height:"292px",width:"502px",backgroundColor:"$cyan9",backgroundImage:"url(/brand/singularity.png)",backgroundSize:"150px 150px",backgroundPosition:"center",backgroundRepeat:"no-repeat",margin:"auto",top:0,bottom:8,left:0,right:6,overflow:"hidden","@media (max-width: 428px)":{width:"85%",height:"84%",left:3,bottom:6,backgroundImage:"none"}}),I=(0,_.zo)("div",{height:"100%",width:"100%",background:"url(/pattern/dotted/lightAlt.svg)",backgroundSize:"10px",backgroundRepeat:"repeat"}),P=(0,_.zo)("div",{position:"relative",height:"36px",width:"100%",backgroundSize:"425px 40px",backgroundPosition:"center",backgroundRepeat:"no-repeat","@media (max-width: 428px)":{backgroundSize:"285px"}}),O=(0,_.zo)("div",{display:"flex",height:"292px",width:"502px",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly",backgroundColor:"rgba(9, 9, 11, 0.6)",color:"white",textAlign:"center",margin:"auto",left:"7.7%",top:49,overflow:"hidden",position:"absolute","@media (max-width: 428px)":{width:"84%",height:"84%",top:15}});var Desktop_Desktop=()=>{let{apps:e,addApp:t}=useApps(),[n,i]=(0,w.useState)(!1),[a,s]=(0,w.useState)(!1),[l,c]=(0,w.useState)(null);return(0,w.useEffect)(()=>{c(window.innerWidth<768);let handleResize=()=>{c(window.innerWidth<768)};return window.addEventListener("resize",handleResize),()=>window.removeEventListener("resize",handleResize)},[]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(L,{children:[(0,o.jsx)(terminal_WelcomeCard,{onEnterMainframe:()=>{s(!0),setTimeout(()=>{s(!1),i(!0)},2100)}}),a&&(0,o.jsx)(O,{children:(0,o.jsx)(Loading,{})}),n&&(0,o.jsx)(T,{children:(0,o.jsxs)(I,{children:[(0,o.jsx)(P,{style:{backgroundImage:"url(".concat("/top_bar.svg",")")}}),e.map(e=>(0,o.jsx)(terminal_Application,{...e},e.id)),S.map(e=>(0,o.jsx)(AppIcon,{isDraggable:!0,onDoubleClick:()=>t({name:e.id}),defaultPosition:null!==l&&l?e.mobileDefaultPosition:e.defaultPosition,icon:e.icon,title:e.title},e.id))]})})]})})},terminal_OperatingSystem=()=>(0,o.jsx)("div",{className:b().customDiv,children:(0,o.jsx)(contexts_ApplicationContext,{children:(0,o.jsx)(Desktop_Desktop,{})})});let H=(0,x.zo)("div",{background:"$cyan14",transition:"background 200ms ease-out","&:hover":{background:"$cyan12"}}),X=(0,x.zo)("div",{display:"flex",flexDirection:"column",padding:"12px",gap:"20px",justifyContent:"space-between"}),M=(0,x.zo)("div",{display:"flex",flex:1}),N=(0,x.zo)("div",{flex:1,maxHeight:"100px",overflow:"hidden"}),W=(0,x.zo)("div",{display:"flex",flexDirection:"row",padding:"4px 0px 0px 0px"}),V=(0,x.zo)("div",{display:"flex",flexDirection:"column"}),B=(0,x.zo)("div",{display:"flex",flexDirection:"column",flex:1}),Z=(0,x.zo)("div",{display:"flex",justifyContent:"center",alignItems:"center",width:"48px",height:"30px"}),F=(0,x.zo)("div",{display:"flex",justifyContent:"center",alignItems:"center"});var project_view=e=>{let{alarm:t}=e;return(0,o.jsx)(H,{children:(0,o.jsxs)(X,{children:[(0,o.jsxs)(M,{children:[(0,o.jsxs)(B,{children:[(0,o.jsx)(f.Z,{topLeft:!0,lineLength:"10px"}),(0,o.jsxs)(W,{children:[(0,o.jsx)(Z,{children:(0,o.jsx)(y.Z,{color:"green1",width:22,height:22})}),(0,o.jsxs)(V,{children:[(0,o.jsx)(l.T2,{color:"gray12",size:{"@initial":"6","@bp570":"4"},weight:"4",children:t.label}),(0,o.jsx)(l.xu,{css:{h:10}}),(0,o.jsxs)(l.T2,{color:"yellow1",size:"4",weight:"4",children:["ID: ",t.id]})]})]}),(0,o.jsx)(l.xu,{css:{h:12}}),(0,o.jsxs)(l.xu,{children:[(0,o.jsxs)(l.T,{size:"5",color:"gray9",children:["VIEW DATE DUE:"," ",(0,o.jsx)(l.T,{size:"5",color:"gray11",children:t.dueDate})]}),(0,o.jsx)(l.xu,{css:{h:10}})]})]}),(0,o.jsx)(F,{children:(0,o.jsx)(v.ZP,{data:t.unitCodeData})})]}),(0,o.jsx)(terminal_OperatingSystem,{}),(0,o.jsx)(l.xu,{children:(0,o.jsxs)(N,{title:t.description,children:[(0,o.jsxs)(l.T,{size:"5",color:"gray9",children:["PROTOCOL DESC: "," "]}),(0,o.jsx)(l.T,{size:"5",color:"gray10",children:t.description})]})})]})})},Y=n(2686),G=n(7113);let K=(0,x.zo)("div",{display:"flex",flexDirection:"row",flex:1,gap:"40px",justifyContent:"space-between"});var alarm_stats_container=()=>{let e=[{color:a.cyan,state:"primary"},{color:a.cyan,state:"primary"},{color:a.cyan,state:"disabled"},{color:a.cyan,state:"disabled"}],t=[{color:a.cyan,state:"primary"},{color:a.cyan,state:"primary"},{color:a.cyan,state:"secondary"},{color:a.cyan,state:"disabled"}],n=[{color:a.cyan,state:"primary"},{color:a.cyan,state:"disabled"},{color:a.cyan,state:"disabled"},{color:a.cyan,state:"disabled"}];return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(l.wv,{children:[(0,o.jsx)(G.Z,{children:(0,o.jsxs)(G.Z.Left,{children:[(0,o.jsx)(l.T,{color:"cyan1",weight:2,children:"PERSONAL "}),(0,o.jsx)(l.T,{color:"cyan1",weight:1,children:"PROJECTS"})]})}),(0,o.jsx)(l.xu,{css:{h:10}}),(0,o.jsx)(h.Z,{children:(0,o.jsxs)(K,{children:[(0,o.jsx)(step_progress_bar,{data:e}),(0,o.jsx)(step_progress_bar,{data:t}),(0,o.jsx)(step_progress_bar,{data:n})]})}),(0,o.jsx)(l.xu,{css:{h:15}}),(0,o.jsx)(h.Z,{}),(0,o.jsx)(project_view,{alarm:Y.jl}),(0,o.jsx)(h.Z,{})]})})};let J=(0,x.zo)("div",{"@media (max-width: 510px)":{height:"calc(100vh - 375px)",overflowY:"scroll",paddingRight:"20px"},marginRight:"-20px"}),U=(0,x.zo)("div",{background:"$cyan14",padding:"12px",display:"flex",flexDirection:"column"});var projects=()=>(0,o.jsxs)(J,{children:[(0,o.jsx)(l.xT,{color:"cyan14",size:"max",children:(0,o.jsx)(l.xu,{css:{display:"flex",justifyContent:"space-between"}})}),(0,o.jsx)(l.xu,{css:{h:15}}),(0,o.jsx)(h.Z,{}),(0,o.jsxs)(U,{children:[(0,o.jsx)(l.xu,{css:{h:10}}),(0,o.jsxs)(l.T,{color:"gray12",size:"6",children:["As a developer and designer, I'm passionate about using technology to craft creative solutions. My portfolio highlights projects that blend modern digital tools with innovative concepts.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"Below you will find the Pathfinder's onboard terminal, powered by Makarov Corps' SingularityOS. This interface grants you access to a curated selection of my completed and pending projects. By clicking on any of the icons, you'll be redirected to the corresponding GitHub page for more details."]})]}),(0,o.jsx)(h.Z,{}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)(alarm_stats_container,{})]});function Home(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(d(),{children:[(0,o.jsx)("title",{children:"Alexander Makarov | projects"}),(0,o.jsx)("meta",{name:"description",content:"My projects."}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,o.jsxs)(q,{children:[(0,o.jsx)(s.Z,{children:(0,o.jsx)(l.xT,{color:"cyan1",children:(0,o.jsx)(l.T,{color:"gray1",weight:"2",children:"WORK EXPERIENCE"})})}),(0,o.jsx)(l.xu,{css:{h:20}}),(0,o.jsx)(Q,{children:(0,o.jsx)(l.xu,{css:{flex:1,minWidth:300,maxWidth:600},children:(0,o.jsx)(s.Z,{children:(0,o.jsx)(projects,{})})})})]})]})}let q=(0,x.zo)("div",{display:"flex",flexDirection:"column"}),Q=(0,x.zo)("div",{display:"flex",flexDirection:"row",gap:"30px",flexWrap:"wrap"})},638:function(e){e.exports={customP:"tailwind_customP__9VADm",customH1:"tailwind_customH1__YGoxC",customH2:"tailwind_customH2__EWwnb",customH3:"tailwind_customH3__W16bH",customH4:"tailwind_customH4__MSYYt",customH5:"tailwind_customH5__agMFd",customH6:"tailwind_customH6__g7b9L",customDiv:"tailwind_customDiv__w8l53",button:"tailwind_button__99XRn"}}},function(e){e.O(0,[365,774,888,179],function(){return e(e.s=2687)}),_N_E=e.O()}]);