(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{6766:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t(2965)}])},7693:function(e,i,t){"use strict";var n=t(1527),s=t(1673),a=t(1617);let r=e=>{let{children:i,delay:t}=e;return(0,n.jsx)(a.xu,{as:s.E.div,initial:{opacity:0,scale:1.05},animate:{opacity:1,scale:1},exit:{opacity:0,scale:1.02},transition:{type:"spring",delay:t,duration:.4},children:i})};i.Z=r},3868:function(e,i,t){"use strict";var n=t(1527),s=t(4728),a=t(1617);let r=e=>{let{children:i}=e;return(0,n.jsx)(l,{color:"cyan14",size:"max",height:20,children:(0,n.jsx)(o,{children:i})})},o=(0,s.zo)("div",{position:"relative"}),l=(0,s.zo)(a.xT,{transition:"background 150ms ease-out",$$iconOpacity:0,"&:hover":{$$iconOpacity:1},"&:active":{$$iconOpacity:1,background:"$cyan10"}});r.Right=e=>{let{children:i}=e;return(0,n.jsx)(a.xu,{css:{position:"absolute",right:0},children:i})},r.Left=e=>{let{children:i}=e;return(0,n.jsxs)(a.xu,{css:{position:"absolute",left:0,display:"flex",gap:"6px"},children:[(0,n.jsx)(a.xu,{children:i}),(0,n.jsx)(a.xu,{css:{display:"flex",alignItems:"center",opacity:"$$iconOpacity",transition:"opacity 100ms ease-out"}})]})},i.Z=r},2565:function(e,i,t){"use strict";var n=t(2699),s=t(959);let a=(e,i)=>Number(e.toFixed(null!=i?i:2)),r=(e,i)=>{let t=.5>Math.random();if(void 0===i)return a((0,n.random)(e.minValue,e.maxValue,!0),e.digits);let s=e.multiplyAdd?Math.random()*e.multiplyAdd:Math.random();return i+s>=e.maxValue?a(i-s,e.digits):i-s<=e.minValue?a(i+s,e.digits):(i+s>e.maxValue&&(t=!1),i-s<e.minValue&&(t=!0),t)?a(i+s,e.digits):a(i-s,e.digits)},o=e=>{let[i,t]=(0,s.useState)();return(0,s.useEffect)(()=>{let i=r(e);(0,s.startTransition)(()=>{t(i)});let n=setInterval(()=>{(0,s.startTransition)(()=>{t(i=>r(e,i))})},e.updateInterval);return()=>{clearInterval(n)}},[]),i};i.Z=o},2965:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return S}});var n=t(1527),s=t(7693),a=t(1617),r=t(7095),o=t(4728),l=t(959),c=t(7047),d=t.n(c),x=t(1496),h=t(1673),u=t(4637),p=t.n(u),g=t(7763);let y=()=>{let[e,i]=(0,l.useState)(!1);return(0,l.useEffect)(()=>(i(!0),()=>{i(!1)}),[]),e};var j=t(2565);let m=e=>{let{src:i,width:t,quality:n}=e;return"https://sws.imgix.net".concat(i,"?w=").concat(t,"&q=").concat(null!=n?n:75),"".concat(i)},f=()=>{let{resolvedTheme:e}=(0,g.F)(),[i,t]=(0,l.useState)(),[s,r]=(0,l.useState)(!1),o=(0,j.Z)({minValue:28,maxValue:37,updateInterval:1e3,digits:8}),c=y();(0,l.useEffect)(()=>{t(p()())},[]);let[u,f]=(0,l.useState)(!1);return(0,n.jsxs)(v,{children:[(0,n.jsxs)(a.cX,{children:[(0,n.jsxs)(a.F9,{children:[(0,n.jsxs)(a.XN,{children:[(0,n.jsx)(a.T,{size:5,color:"gray8",padding:"tiny",children:"ALIAS: MAKAROV"}),(0,n.jsx)(a.T,{size:5,color:"gray8",padding:"tiny",children:"DOB: 04/12/1995 "}),(0,n.jsx)(a.T,{size:5,color:"gray8",padding:"tiny",children:"STATUS: JOB-HUNTING "}),(0,n.jsx)(a.T,{size:5,color:"gray8",padding:"tiny",children:"LOCATION: SYDNEY, AUSTRALIA "}),(0,n.jsx)(a.T,{size:5,color:"gray8",padding:"tiny",children:"UNIT GROUP: BLACKBOOK.AI "})]}),(0,n.jsxs)(a.XN,{align:"right",children:[(0,n.jsx)(a.T,{size:5,color:"gray8",padding:"tiny",children:null==i?void 0:i.toISOString()}),(0,n.jsx)(a.T,{size:5,color:"gray8",padding:"tiny",children:"[UP TO DATE]"})]})]}),(0,n.jsxs)(a.F9,{align:"bottom",children:[(0,n.jsx)(a.XN,{children:(0,n.jsxs)(a.T,{background:"cyan1",size:5,color:"gray1",padding:"tiny",children:["FPS: ",o]})}),(0,n.jsxs)(a.XN,{align:"right",children:[(0,n.jsx)(a.T,{size:5,color:"gray8",padding:"tiny",children:"FRAMER-MOTION"}),(0,n.jsx)(a.T,{size:5,color:"gray8",padding:"tiny",children:"8.5.3-ALPHA.1 "})]})]})]}),(0,n.jsxs)(b,{onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[(0,n.jsx)(x.M,{children:(0,n.jsx)(T,{as:h.E.div,initial:{opacity:0},animate:u?{scale:s?[1,1,1]:[1.02,1.05,1.02],opacity:1}:{opacity:1},onAnimationComplete:()=>f(!0),transition:u?{repeat:1/0,duration:4}:{type:"spring",stiffness:100,damping:10,delay:1.8},color:s?"cyan1":void 0})}),(0,n.jsx)(a.xu,{as:h.E.div,animate:{rotate:[0,0,0]},transition:{repeat:1/0,duration:8},children:(0,n.jsx)(x.M,{children:c&&(0,n.jsx)(h.E.div,{initial:{scale:0},animate:{scale:1},transition:{duration:3,ease:"easeOut"},exit:{scale:0},children:(0,n.jsx)(d(),{loader:m,src:"/quark.gif",alt:"Sample analysis",width:250,height:250,draggable:!1,style:{userSelect:"none"}})},"quark_gif")})})]})]})},v=(0,o.zo)("div",{display:"flex",justifyContent:"center",alignItems:"center",position:"relative",background:"$cyan14",border:"0.1px solid rgba(0, 255, 255, 0.025)"}),b=(0,o.zo)("div",{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"360px",height:"300px"}),T=(0,o.zo)(h.E.div,{position:"absolute",width:"260px",height:"260px",borderRadius:"50%",border:"3px dotted $cyan2",transition:"200ms",variants:{color:{cyan1:{border:"3px dotted $cyan1"},cyan9:{border:"3px dotted $cyan9"}}}});var w=t(3868);let A=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.wv,{children:[(0,n.jsxs)(w.Z,{children:[(0,n.jsx)(w.Z.Right,{children:(0,n.jsx)(a.T,{color:"cyan1",weight:2,children:"ID: [REDACTED]"})}),(0,n.jsxs)(w.Z.Left,{children:[(0,n.jsx)(a.T,{color:"cyan1",weight:2,children:"OPERATIVE "}),(0,n.jsx)(a.T,{color:"cyan1",weight:1,children:"BLUEPRINT "})]})]}),(0,n.jsx)(a.xu,{css:{h:10}}),(0,n.jsx)(r.Z,{}),(0,n.jsx)(f,{})]}),(0,n.jsx)(r.Z,{})]}),z=()=>(0,n.jsxs)(I,{children:[(0,n.jsx)(a.xT,{color:"cyan14",size:"max",children:(0,n.jsx)(a.xu,{css:{display:"flex",justifyContent:"space-between"}})}),(0,n.jsx)(a.xu,{css:{h:15}}),(0,n.jsx)(r.Z,{}),(0,n.jsxs)(E,{children:[(0,n.jsx)(a.xu,{css:{h:10}}),(0,n.jsxs)(a.T,{color:"gray12",size:"6",children:["I am Alexander, based in Sydney, Australia. As a software developer, I actively explore various areas of technology, mainly focusing on ",(0,n.jsx)("b",{children:"React"}),", ",(0,n.jsx)("b",{children:"Javascript"}),", and ",(0,n.jsx)("b",{children:" Three.js"}),". My professional background includes approximately three years in the ",(0,n.jsx)("b",{children:" Robotics Process Automation "})," (RPA) sector, serving as an automation engineer consultant.  ",(0,n.jsx)("b",{children:" "}),"During this time, I have contributed to organizations like Woolworths, Super Retail Group, and Vocus, developing and sustaining efficient business automation solutions.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"What you are looking at right now is my personal website - a homage to my love of the mysterious wonders of the cosmos. It features a futuristic dashboard, birthed from the fictitious ",(0,n.jsx)("b",{children:"Event Horizon Pathfinder."})," It stands as a vigilant sentinel, overseeing an enigmatic black hole, nestled in the profound depths of the celestial abyss.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"In the futuristic control room of the Pathfinder's custom ",(0,n.jsx)("b",{children:" 'ГОРИЗОНТ СОБЫТИЙ ВЗОР' "})," kernel, as you remotely observe the singularity, you have the unique opportunity to engage the onboard ambient sound system. This advanced feature offers an immersive listening experience - ",(0,n.jsx)("b",{children:" Tchaikovsky's 'Waltz of the Flowers' "}),", a classical masterpiece, masterfully reinterpreted through our state-of-the-art audio technology for a deeply moving cosmic experience.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"I'm available for opportunities in all realms of software development. Please get in touch with me through the contact page."]})]}),(0,n.jsx)(r.Z,{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(A,{})]}),I=(0,o.zo)("div",{"@media (max-width: 510px)":{textShadow:"0 0 4px BLACK",height:"calc(100vh - 375px)",overflowY:"scroll",paddingRight:"20px"},marginRight:"-20px"}),E=(0,o.zo)("div",{background:"$cyan14",padding:"12px",display:"flex",flexDirection:"column",border:"0.1px solid rgba(0, 255, 255, 0.025)"});var O=t(5742),k=t.n(O);function S(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(k(),{children:[(0,n.jsx)("title",{children:"Alexander Makarov | about"}),(0,n.jsx)("meta",{name:"description",content:"About me."}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)(N,{children:[(0,n.jsx)(s.Z,{children:(0,n.jsx)(a.xT,{color:"cyan1",children:(0,n.jsx)(a.T,{color:"gray1",weight:"2",children:"ABOUT"})})}),(0,n.jsx)(a.xu,{css:{h:20}}),(0,n.jsx)(R,{children:(0,n.jsx)(a.xu,{css:{flex:1,minWidth:300,maxWidth:600},children:(0,n.jsx)(s.Z,{children:(0,n.jsx)(z,{})})})})]})]})}let N=(0,o.zo)("div",{display:"flex",flexDirection:"column"}),R=(0,o.zo)("div",{display:"flex",flexDirection:"row",gap:"30px",flexWrap:"wrap"})}},function(e){e.O(0,[201,120,774,888,179],function(){return e(e.s=6766)}),_N_E=e.O()}]);