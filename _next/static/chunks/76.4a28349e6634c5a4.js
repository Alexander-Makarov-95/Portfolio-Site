(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[76],{6076:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return p}});var t=n(1527),a=n(6026),o=n(7422),i=n(7757),s=n(68);let l=e=>{let{apps:r,removeApp:n}=(0,i.F)(),t=(0,s.useRouter)(),{exec:a,webContainer:l,cd:c}=(0,o.f)();return{echo:{description:"Echo a passed string.",usage:"echo <string>",fn:function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return r.join(" ")}},python:{description:"Run a python code.",usage:"python <code>",fn:function(){for(var r=arguments.length,n=Array(r),t=0;t<r;t++)n[t]=arguments[t];return new Promise(r=>{if(0===n.length)return"Please enter a code to run. Example: python print('Hello World')";e(n.join(" "),e=>{r(e)})})}},ls:{description:"List all files and folders in the current directory.",usage:"ls",fn:function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return new Promise(e=>{a(["ls",...r],r=>{if(!r)return e("No files or folders found");e(r)})})}},pwd:{description:"Show the current directory.",usage:"pwd",fn:()=>new Promise(e=>{a(["pwd"],r=>{e(r)})})},rm:{description:"Remove a file or folder.",usage:"rm <file or folder name>",fn:function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];if(0===r.length)return"Please enter a file or folder name. Example: rm newFolder";let t="-rf"===r[0];return(t&&r.shift(),1===r.length&&"/"===r[0])?"Cannot remove root directory":new Promise(e=>{l.fs.rm(r.join(" "),{recursive:t}).then(()=>{e("File or folder removed")}).catch(()=>{e("File or folder not found")})})}},exec:{description:"Execute a command.",usage:"exec <command>",fn:function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return 0===r.length?"Please enter a command. Example: exec ls":new Promise(e=>{a(r,r=>{e(r)})})}},cat:{description:"Show the content of a file.",usage:"cat <file name>",fn:function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return 0===r.length?"Please enter a file name. Example: cat newFile":">"===r[0]?l.fs.writeFile(r[1],r.slice(2).join(" ")).then(()=>"File created").catch(()=>"File already exists"):new Promise(e=>{l.fs.readFile(r.join(" "),"utf-8").then(r=>{e(r)}).catch(()=>{e("File not found")})})}},cd:{description:"Change directory.",usage:"cd <directory name>",fn:function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return 0===r.length?"Please enter a directory name. Example: cd newFolder":new Promise(async e=>{try{await c(r.join(" ")),e("")}catch(r){e(r.message)}})}},mkdir:{description:"Create a new directory.",usage:"mkdir <directory name>",fn:function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return 0===r.length?"Please enter a directory name. Example: mkdir newFolder":new Promise(e=>{l.fs.mkdir(r.join(" ")).then(()=>{e("Directory created")}).catch(()=>{e("Directory already exists")})})}},ps:{description:"List all processes.",usage:"ps",fn:()=>"------------------\nTITLE - ID - TIME\n------------------\n"+r.map(e=>"".concat(e.title," - ").concat(e.id," - ").concat(((Date.now()-e.start)/1e3).toFixed(2)," sec(s)")).join("\n")},reboot:{description:"Reboot the computer.",usage:"reboot",fn:()=>(t.reload(),"")},kill:{description:"Kill a process.",usage:"kill <process id>",fn:function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];let o=t.join(""),i=r.find(e=>e.id===o);return i?(n(o),"Process killed"):"Process not found"}}}};var c=n(589),d=n.n(c),u=n(2524),f=n(959),m=n(231);function p(){let{setInitialSize:e,setIsResizable:r}=(0,m.z)(),{runCode:n,deleteCallback:o}=(0,u.s)(),i="terminal-"+(0,f.useId)(),s=l(function(e,r){n(e,i,r)});return(0,f.useEffect)(()=>(e({width:300,height:200}),r(!0),()=>{o(i)}),[]),(0,t.jsx)("div",{className:"h-full w-full antialiased",children:(0,t.jsx)(a.Z,{className:d().terminal,commands:s,promptLabel:"user@singularityos:~$",inputClassName:d().input,contentClassName:d().content,messageClassName:d().message,promptLabelClassName:d().promptLabel,inputAreaClassName:d().inputArea})})}},589:function(e){e.exports={terminal:"terminal_terminal__YasJr",text:"terminal_text__I1q3a",content:"terminal_content__traMk",promptLabel:"terminal_promptLabel__kXVaz",input:"terminal_input__qU_tm",inputArea:"terminal_inputArea__9Q7_s",message:"terminal_message__uAkMw"}}}]);