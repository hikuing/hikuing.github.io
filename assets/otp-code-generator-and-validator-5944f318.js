import{ab as R,a8 as h,ac as k,d as z,a as C,av as B,an as t,aS as Y,be as F,bb as J,bc as K,bd as Z,ae as oe,af as Q,ct as ie,ai as j,al as ne,o as G,e as L,f as _,b as ae,s as M,C as se,i as x,w as S,cu as H,l as D,t as W,g as d,m as ee,aI as te,cv as le,bx as ce,O as de,n as pe,v as ue,F as ge,x as fe,bC as he,bD as me,A as ve}from"./index-3ab894b1.js";import{u as xe,_ as ye}from"./useQRCode-2ad489f6.js";import{c as N}from"./index-79470d8a.js";import{c as be}from"./token-generator.service-c65cdf63.js";import{_ as T}from"./InputCopyable.vue_vue_type_script_setup_true_lang-c1eba06e.js";import{c as _e}from"./computedRefreshable-64fff8b8.js";import"./is-browser-fc34c9a6.js";import"./use-locale-739ea672.js";import"./browser-e933942f.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./___vite-browser-external_commonjs-proxy-357c6c8d.js";const Ce=R([h("progress",{display:"inline-block"},[h("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),k("line",`
 width: 100%;
 display: block;
 `,[h("progress-content",`
 display: flex;
 align-items: center;
 `,[h("progress-graph",{flex:1})]),h("progress-custom-content",{marginLeft:"14px"}),h("progress-icon",`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[k("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),k("circle, dashboard",{width:"120px"},[h("progress-custom-content",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),h("progress-text",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),h("progress-icon",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),k("multiple-circle",`
 width: 200px;
 color: inherit;
 `,[h("progress-text",`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),h("progress-content",{position:"relative"}),h("progress-graph",{position:"relative"},[h("progress-graph-circle",[R("svg",{verticalAlign:"bottom"}),h("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[k("empty",{opacity:0})]),h("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),h("progress-graph-line",[k("indicator-inside",[h("progress-graph-line-rail",`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[h("progress-graph-line-fill",`
 height: inherit;
 border-radius: 10px;
 `),h("progress-graph-line-indicator",`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),k("indicator-inside-label",`
 height: 16px;
 display: flex;
 align-items: center;
 `,[h("progress-graph-line-rail",`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),h("progress-graph-line-indicator",`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),h("progress-graph-line-rail",`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[h("progress-graph-line-fill",`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[k("processing",[R("&::after",`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),R("@keyframes progress-processing-animation",`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),Se={success:t(F,null),error:t(J,null),warning:t(K,null),info:t(Z,null)},$e=z({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:String,status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:r}){const l=C(()=>B(e.height)),a=C(()=>e.railBorderRadius!==void 0?B(e.railBorderRadius):e.height!==void 0?B(e.height,{c:.5}):""),o=C(()=>e.fillBorderRadius!==void 0?B(e.fillBorderRadius):e.railBorderRadius!==void 0?B(e.railBorderRadius):e.height!==void 0?B(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:i,railColor:m,railStyle:p,percentage:s,unit:u,indicatorTextColor:g,status:c,showIndicator:v,fillColor:n,processing:y,clsPrefix:f}=e;return t("div",{class:`${f}-progress-content`,role:"none"},t("div",{class:`${f}-progress-graph`,"aria-hidden":!0},t("div",{class:[`${f}-progress-graph-line`,{[`${f}-progress-graph-line--indicator-${i}`]:!0}]},t("div",{class:`${f}-progress-graph-line-rail`,style:[{backgroundColor:m,height:l.value,borderRadius:a.value},p]},t("div",{class:[`${f}-progress-graph-line-fill`,y&&`${f}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,backgroundColor:n,height:l.value,lineHeight:l.value,borderRadius:o.value}},i==="inside"?t("div",{class:`${f}-progress-graph-line-indicator`,style:{color:g}},r.default?r.default():`${s}${u}`):null)))),v&&i==="outside"?t("div",null,r.default?t("div",{class:`${f}-progress-custom-content`,style:{color:g},role:"none"},r.default()):c==="default"?t("div",{role:"none",class:`${f}-progress-icon ${f}-progress-icon--as-text`,style:{color:g}},s,u):t("div",{class:`${f}-progress-icon`,"aria-hidden":!0},t(Y,{clsPrefix:f},{default:()=>Se[c]}))):null)}}}),we={success:t(F,null),error:t(J,null),warning:t(K,null),info:t(Z,null)},ke=z({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:String,railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:r}){function l(a,o,i){const{gapDegree:m,viewBoxWidth:p,strokeWidth:s}=e,u=50,g=0,c=u,v=0,n=2*u,y=50+s/2,f=`M ${y},${y} m ${g},${c}
      a ${u},${u} 0 1 1 ${v},${-n}
      a ${u},${u} 0 1 1 ${-v},${n}`,$=Math.PI*2*u,w={stroke:i,strokeDasharray:`${a/100*($-m)}px ${p*8}px`,strokeDashoffset:`-${m/2}px`,transformOrigin:o?"center":void 0,transform:o?`rotate(${o}deg)`:void 0};return{pathString:f,pathStyle:w}}return()=>{const{fillColor:a,railColor:o,strokeWidth:i,offsetDegree:m,status:p,percentage:s,showIndicator:u,indicatorTextColor:g,unit:c,gapOffsetDegree:v,clsPrefix:n}=e,{pathString:y,pathStyle:f}=l(100,0,o),{pathString:$,pathStyle:w}=l(s,m,a),b=100+i;return t("div",{class:`${n}-progress-content`,role:"none"},t("div",{class:`${n}-progress-graph`,"aria-hidden":!0},t("div",{class:`${n}-progress-graph-circle`,style:{transform:v?`rotate(${v}deg)`:void 0}},t("svg",{viewBox:`0 0 ${b} ${b}`},t("g",null,t("path",{class:`${n}-progress-graph-circle-rail`,d:y,"stroke-width":i,"stroke-linecap":"round",fill:"none",style:f})),t("g",null,t("path",{class:[`${n}-progress-graph-circle-fill`,s===0&&`${n}-progress-graph-circle-fill--empty`],d:$,"stroke-width":i,"stroke-linecap":"round",fill:"none",style:w}))))),u?t("div",null,r.default?t("div",{class:`${n}-progress-custom-content`,role:"none"},r.default()):p!=="default"?t("div",{class:`${n}-progress-icon`,"aria-hidden":!0},t(Y,{clsPrefix:n},{default:()=>we[p]})):t("div",{class:`${n}-progress-text`,style:{color:g},role:"none"},t("span",{class:`${n}-progress-text__percentage`},s),t("span",{class:`${n}-progress-text__unit`},c))):null)}}});function X(e,r,l=100){return`m ${l/2} ${l/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const Pe=z({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:r}){const l=C(()=>e.percentage.map((o,i)=>`${Math.PI*o/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*i)-e.circleGap*i)*2}, ${e.viewBoxWidth*8}`));return()=>{const{viewBoxWidth:a,strokeWidth:o,circleGap:i,showIndicator:m,fillColor:p,railColor:s,railStyle:u,percentage:g,clsPrefix:c}=e;return t("div",{class:`${c}-progress-content`,role:"none"},t("div",{class:`${c}-progress-graph`,"aria-hidden":!0},t("div",{class:`${c}-progress-graph-circle`},t("svg",{viewBox:`0 0 ${a} ${a}`},g.map((v,n)=>t("g",{key:n},t("path",{class:`${c}-progress-graph-circle-rail`,d:X(a/2-o/2*(1+2*n)-i*n,o,a),"stroke-width":o,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:s[n]},u[n]]}),t("path",{class:[`${c}-progress-graph-circle-fill`,v===0&&`${c}-progress-graph-circle-fill--empty`],d:X(a/2-o/2*(1+2*n)-i*n,o,a),"stroke-width":o,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:l.value[n],strokeDashoffset:0,stroke:p[n]}})))))),m&&r.default?t("div",null,t("div",{class:`${c}-progress-text`},r.default())):null)}}}),Be=Object.assign(Object.assign({},Q.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),ze=z({name:"Progress",props:Be,setup(e){const r=C(()=>e.indicatorPlacement||e.indicatorPosition),l=C(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:a,inlineThemeDisabled:o}=oe(e),i=Q("Progress","-progress",Ce,ie,e,a),m=C(()=>{const{status:s}=e,{common:{cubicBezierEaseInOut:u},self:{fontSize:g,fontSizeCircle:c,railColor:v,railHeight:n,iconSizeCircle:y,iconSizeLine:f,textColorCircle:$,textColorLineInner:w,textColorLineOuter:b,lineBgProcessing:P,fontWeightCircle:O,[j("iconColor",s)]:A,[j("fillColor",s)]:I}}=i.value;return{"--n-bezier":u,"--n-fill-color":I,"--n-font-size":g,"--n-font-size-circle":c,"--n-font-weight-circle":O,"--n-icon-color":A,"--n-icon-size-circle":y,"--n-icon-size-line":f,"--n-line-bg-processing":P,"--n-rail-color":v,"--n-rail-height":n,"--n-text-color-circle":$,"--n-text-color-line-inner":w,"--n-text-color-line-outer":b}}),p=o?ne("progress",C(()=>e.status[0]),m,e):void 0;return{mergedClsPrefix:a,mergedIndicatorPlacement:r,gapDeg:l,cssVars:o?void 0:m,themeClass:p?.themeClass,onRender:p?.onRender}},render(){const{type:e,cssVars:r,indicatorTextColor:l,showIndicator:a,status:o,railColor:i,railStyle:m,color:p,percentage:s,viewBoxWidth:u,strokeWidth:g,mergedIndicatorPlacement:c,unit:v,borderRadius:n,fillBorderRadius:y,height:f,processing:$,circleGap:w,mergedClsPrefix:b,gapDeg:P,gapOffsetDegree:O,themeClass:A,$slots:I,onRender:q}=this;return q?.(),t("div",{class:[A,`${b}-progress`,`${b}-progress--${e}`,`${b}-progress--${o}`],style:r,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":s,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?t(ke,{clsPrefix:b,status:o,showIndicator:a,indicatorTextColor:l,railColor:i,fillColor:p,railStyle:m,offsetDegree:this.offsetDegree,percentage:s,viewBoxWidth:u,strokeWidth:g,gapDegree:P===void 0?e==="dashboard"?75:0:P,gapOffsetDegree:O,unit:v},I):e==="line"?t($e,{clsPrefix:b,status:o,showIndicator:a,indicatorTextColor:l,railColor:i,fillColor:p,railStyle:m,percentage:s,processing:$,indicatorPlacement:c,unit:v,fillBorderRadius:y,railBorderRadius:n,height:f},I):e==="multiple-circle"?t(Pe,{clsPrefix:b,strokeWidth:g,railColor:i,fillColor:p,railStyle:m,viewBoxWidth:u,percentage:s,showIndicator:a,circleGap:w},I):null)}}),Ie={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Re=_("path",{fill:"currentColor",d:"M17.65 6.35A7.958 7.958 0 0 0 12 4a8 8 0 0 0-8 8a8 8 0 0 0 8 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18a6 6 0 0 1-6-6a6 6 0 0 1 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"},null,-1),Ne=[Re];function Te(e,r){return G(),L("svg",Ie,[...Ne])}const De={name:"mdi-refresh",render:Te};function We(e){return(e.match(/.{1,2}/g)??[]).map(r=>Number.parseInt(r,16))}function Oe(e,r){return N.HmacSHA1(N.enc.Hex.parse(e),N.enc.Hex.parse(re(r))).toString(N.enc.Hex)}function re(e){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";return(e.toUpperCase().replace(/=+$/,"").split("").map(o=>r.indexOf(o).toString(2).padStart(5,"0")).join("").match(/.{1,8}/g)??[]).map(o=>Number.parseInt(o,2).toString(16).padStart(2,"0")).join("")}function Ae({key:e,counter:r=0}){const l=Oe(r.toString(16).padStart(16,"0"),e),a=We(l),o=a[19]&15,i=(a[o]&127)<<24|(a[o+1]&255)<<16|(a[o+2]&255)<<8|a[o+3]&255;return String(i%1e6).padStart(6,"0")}function U({now:e,timeStep:r}){return Math.floor(e/1e3/r)}function V({key:e,now:r=Date.now(),timeStep:l=30}){const a=U({now:r,timeStep:l});return Ae({key:e,counter:a})}function qe({secret:e,app:r="IT-Tools",account:l="demo-user",algorithm:a="SHA1",digits:o=6,period:i=30}){const p=ae({issuer:r,secret:e,algorithm:a,digits:o,period:i}).map((s,u)=>`${encodeURIComponent(u)}=${encodeURIComponent(s)}`).join("&");return`otpauth://totp/${encodeURIComponent(r)}:${encodeURIComponent(l)}?${p}`}function E(){return be({length:16,alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"})}const Me=_("div",{"mb-5px":"","w-full":"",flex:"","items-center":""},[_("div",{"flex-1":"","text-left":""}," Previous "),_("div",{"flex-1":"","text-center":""}," Current OTP "),_("div",{"flex-1":"","text-right":""}," Next ")],-1),He={flex:"","items-center":""},Ve=z({__name:"token-display",props:{tokens:{}},setup(e){const r=e,{copy:l,isJustCopied:a}=M({createToast:!1}),{copy:o,isJustCopied:i}=M({createToast:!1}),{copy:m,isJustCopied:p}=M({createToast:!1}),{tokens:s}=se(r);return(u,g)=>{const c=ee,v=te;return G(),L("div",null,[Me,_("div",He,[x(v,{tooltip:d(a)?"Copied !":"Copy previous OTP",position:"bottom","flex-1":""},{default:S(()=>[x(c,{"data-test-id":"previous-otp","w-full":"","important:h-12":"","important:rounded-r-none":"","important:font-mono":"",onClick:g[0]||(g[0]=H(n=>d(l)(d(s).previous),["prevent"]))},{default:S(()=>[D(W(d(s).previous),1)]),_:1})]),_:1},8,["tooltip"]),x(v,{tooltip:d(i)?"Copied !":"Copy current OTP",position:"bottom","flex-1":"","flex-basis-5xl":""},{default:S(()=>[x(c,{"data-test-id":"current-otp","w-full":"","important:border-x":"1px solid gray op-40","important:h-12":"","important:rounded-0":"","important:text-22px":"",onClick:g[1]||(g[1]=H(n=>d(o)(d(s).current),["prevent"]))},{default:S(()=>[D(W(d(s).current),1)]),_:1})]),_:1},8,["tooltip"]),x(v,{tooltip:d(p)?"Copied !":"Copy next OTP",position:"bottom","flex-1":""},{default:S(()=>[x(c,{"data-test-id":"next-otp","w-full":"","important:h-12":"","important:rounded-l-none":"",onClick:g[2]||(g[2]=H(n=>d(m)(d(s).next),["prevent"]))},{default:S(()=>[D(W(d(s).next),1)]),_:1})]),_:1},8,["tooltip"])])])}}}),Ue=e=>(he("data-v-627c6c39"),e=e(),me(),e),Ge={style:{"max-width":"350px"}},Le={style:{"text-align":"center"}},je={"mt-4":"",flex:"","flex-col":"","items-center":"","justify-center":"","gap-3":""},Xe={style:{"max-width":"350px"}},Ee=Ue(()=>_("p",null,"Iteration",-1)),Ye=z({__name:"otp-code-generator-and-validator",setup(e){const r=le(),l=C(()=>r.value/1e3%30),a=ce(),o=de(),i=pe(E());function m(){i.value=E()}const[p]=_e(()=>({previous:V({key:i.value,now:r.value-3e4}),current:V({key:i.value,now:r.value}),next:V({key:i.value,now:r.value+3e4})}),{throttle:500}),s=C(()=>qe({secret:i.value})),{qrcode:u}=xe({text:s,color:{background:C(()=>o.isDarkTheme?"#ffffff":"#00000000"),foreground:"#000000"},options:{width:210}}),g=[{message:"Secret should be a base32 string",validator:c=>c.toUpperCase().match(/^[A-Z234567]+$/)},{message:"Please set a secret",validator:c=>c!==""}];return(c,v)=>{const n=De,y=ee,f=te,$=fe,w=ze,b=ye;return G(),L(ge,null,[_("div",Ge,[x($,{value:d(i),"onUpdate:value":v[0]||(v[0]=P=>ue(i)?i.value=P:null),label:"Secret",placeholder:"Paste your TOTP secret...","mb-5":"","validation-rules":g},{suffix:S(()=>[x(f,{tooltip:"Generate a new random secret"},{default:S(()=>[x(y,{circle:"",variant:"text",size:"small",onClick:m},{default:S(()=>[x(n)]),_:1})]),_:1})]),_:1},8,["value"]),_("div",null,[x(Ve,{tokens:d(p)},null,8,["tokens"]),x(w,{percentage:100*d(l)/30,color:d(a).primaryColor,"show-indicator":!1},null,8,["percentage","color"]),_("div",Le," Next in "+W(String(Math.floor(30-d(l))).padStart(2,"0"))+"s ",1)]),_("div",je,[x(b,{src:d(u)},null,8,["src"]),x(y,{href:d(s),target:"_blank"},{default:S(()=>[D(" Open Key URI in new tab ")]),_:1},8,["href"])])]),_("div",Xe,[x(T,{label:"Secret in hexadecimal",value:d(re)(d(i)),readonly:"",placeholder:"Secret in hex will be displayed here","mb-5":""},null,8,["value"]),x(T,{label:"Epoch",value:Math.floor(d(r)/1e3).toString(),readonly:"","mb-5":"",placeholder:"Epoch in sec will be displayed here"},null,8,["value"]),Ee,x(T,{value:String(d(U)({now:d(r),timeStep:30})),readonly:"",label:"Count:","label-position":"left","label-width":"90px","label-align":"right",placeholder:"Iteration count will be displayed here"},null,8,["value"]),x(T,{value:d(U)({now:d(r),timeStep:30}).toString(16).padStart(16,"0"),readonly:"",placeholder:"Iteration count in hex will be displayed here","label-position":"left","label-width":"90px","label-align":"right",label:"Padded hex:"},null,8,["value"])])],64)}}});const at=ve(Ye,[["__scopeId","data-v-627c6c39"]]);export{at as default};
