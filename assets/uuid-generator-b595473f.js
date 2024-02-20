import{d as X,B as T,n as J,s as K,o as V,e as E,i as w,g as U,v as L,f as I,H as Q,w as q,l as B,J as Y,x as F,m as P,bC as Z,bD as z,A as e0}from"./index-3ab894b1.js";import{c as n0}from"./computedRefreshable-64fff8b8.js";import{w as t0}from"./defaults-4d6daddf.js";import{_ as o0}from"./InputNumber-5360f6f6.js";import"./use-locale-739ea672.js";import"./use-form-item-f7149e4e.js";import"./Button-a9945df3.js";import"./is-browser-fc34c9a6.js";import"./color-to-class-8578b472.js";import"./Remove-674c47b2.js";let D;const r0=new Uint8Array(16);function $(){if(!D&&(D=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!D))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return D(r0)}const a0=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function f0(n){return typeof n=="string"&&a0.test(n)}const m=[];for(let n=0;n<256;++n)m.push((n+256).toString(16).slice(1));function S(n,f=0){return m[n[f+0]]+m[n[f+1]]+m[n[f+2]]+m[n[f+3]]+"-"+m[n[f+4]]+m[n[f+5]]+"-"+m[n[f+6]]+m[n[f+7]]+"-"+m[n[f+8]]+m[n[f+9]]+"-"+m[n[f+10]]+m[n[f+11]]+m[n[f+12]]+m[n[f+13]]+m[n[f+14]]+m[n[f+15]]}let j,R,C=0,k=0;function c0(n,f,e){let o=f&&e||0;const t=f||new Array(16);n=n||{};let r=n.node||j,a=n.clockseq!==void 0?n.clockseq:R;if(r==null||a==null){const d=n.random||(n.rng||$)();r==null&&(r=j=[d[0]|1,d[1],d[2],d[3],d[4],d[5]]),a==null&&(a=R=(d[6]<<8|d[7])&16383)}let c=n.msecs!==void 0?n.msecs:Date.now(),l=n.nsecs!==void 0?n.nsecs:k+1;const i=c-C+(l-k)/1e4;if(i<0&&n.clockseq===void 0&&(a=a+1&16383),(i<0||c>C)&&n.nsecs===void 0&&(l=0),l>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");C=c,k=l,R=a,c+=122192928e5;const u=((c&268435455)*1e4+l)%4294967296;t[o++]=u>>>24&255,t[o++]=u>>>16&255,t[o++]=u>>>8&255,t[o++]=u&255;const s=c/4294967296*1e4&268435455;t[o++]=s>>>8&255,t[o++]=s&255,t[o++]=s>>>24&15|16,t[o++]=s>>>16&255,t[o++]=a>>>8|128,t[o++]=a&255;for(let d=0;d<6;++d)t[o+d]=r[d];return f||S(t)}function l0(n){if(!f0(n))throw TypeError("Invalid UUID");let f;const e=new Uint8Array(16);return e[0]=(f=parseInt(n.slice(0,8),16))>>>24,e[1]=f>>>16&255,e[2]=f>>>8&255,e[3]=f&255,e[4]=(f=parseInt(n.slice(9,13),16))>>>8,e[5]=f&255,e[6]=(f=parseInt(n.slice(14,18),16))>>>8,e[7]=f&255,e[8]=(f=parseInt(n.slice(19,23),16))>>>8,e[9]=f&255,e[10]=(f=parseInt(n.slice(24,36),16))/1099511627776&255,e[11]=f/4294967296&255,e[12]=f>>>24&255,e[13]=f>>>16&255,e[14]=f>>>8&255,e[15]=f&255,e}function s0(n){n=unescape(encodeURIComponent(n));const f=[];for(let e=0;e<n.length;++e)f.push(n.charCodeAt(e));return f}const u0="6ba7b810-9dad-11d1-80b4-00c04fd430c8",i0="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function G(n,f,e){function o(t,r,a,c){var l;if(typeof t=="string"&&(t=s0(t)),typeof r=="string"&&(r=l0(r)),((l=r)===null||l===void 0?void 0:l.length)!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let i=new Uint8Array(16+t.length);if(i.set(r),i.set(t,r.length),i=e(i),i[6]=i[6]&15|f,i[8]=i[8]&63|128,a){c=c||0;for(let u=0;u<16;++u)a[c+u]=i[u];return a}return S(i)}try{o.name=n}catch{}return o.DNS=u0,o.URL=i0,o}function d0(n){if(typeof n=="string"){const f=unescape(encodeURIComponent(n));n=new Uint8Array(f.length);for(let e=0;e<f.length;++e)n[e]=f.charCodeAt(e)}return p0(m0(v0(n),n.length*8))}function p0(n){const f=[],e=n.length*32,o="0123456789abcdef";for(let t=0;t<e;t+=8){const r=n[t>>5]>>>t%32&255,a=parseInt(o.charAt(r>>>4&15)+o.charAt(r&15),16);f.push(a)}return f}function W(n){return(n+64>>>9<<4)+14+1}function m0(n,f){n[f>>5]|=128<<f%32,n[W(f)-1]=f;let e=1732584193,o=-271733879,t=-1732584194,r=271733878;for(let a=0;a<n.length;a+=16){const c=e,l=o,i=t,u=r;e=v(e,o,t,r,n[a],7,-680876936),r=v(r,e,o,t,n[a+1],12,-389564586),t=v(t,r,e,o,n[a+2],17,606105819),o=v(o,t,r,e,n[a+3],22,-1044525330),e=v(e,o,t,r,n[a+4],7,-176418897),r=v(r,e,o,t,n[a+5],12,1200080426),t=v(t,r,e,o,n[a+6],17,-1473231341),o=v(o,t,r,e,n[a+7],22,-45705983),e=v(e,o,t,r,n[a+8],7,1770035416),r=v(r,e,o,t,n[a+9],12,-1958414417),t=v(t,r,e,o,n[a+10],17,-42063),o=v(o,t,r,e,n[a+11],22,-1990404162),e=v(e,o,t,r,n[a+12],7,1804603682),r=v(r,e,o,t,n[a+13],12,-40341101),t=v(t,r,e,o,n[a+14],17,-1502002290),o=v(o,t,r,e,n[a+15],22,1236535329),e=h(e,o,t,r,n[a+1],5,-165796510),r=h(r,e,o,t,n[a+6],9,-1069501632),t=h(t,r,e,o,n[a+11],14,643717713),o=h(o,t,r,e,n[a],20,-373897302),e=h(e,o,t,r,n[a+5],5,-701558691),r=h(r,e,o,t,n[a+10],9,38016083),t=h(t,r,e,o,n[a+15],14,-660478335),o=h(o,t,r,e,n[a+4],20,-405537848),e=h(e,o,t,r,n[a+9],5,568446438),r=h(r,e,o,t,n[a+14],9,-1019803690),t=h(t,r,e,o,n[a+3],14,-187363961),o=h(o,t,r,e,n[a+8],20,1163531501),e=h(e,o,t,r,n[a+13],5,-1444681467),r=h(r,e,o,t,n[a+2],9,-51403784),t=h(t,r,e,o,n[a+7],14,1735328473),o=h(o,t,r,e,n[a+12],20,-1926607734),e=g(e,o,t,r,n[a+5],4,-378558),r=g(r,e,o,t,n[a+8],11,-2022574463),t=g(t,r,e,o,n[a+11],16,1839030562),o=g(o,t,r,e,n[a+14],23,-35309556),e=g(e,o,t,r,n[a+1],4,-1530992060),r=g(r,e,o,t,n[a+4],11,1272893353),t=g(t,r,e,o,n[a+7],16,-155497632),o=g(o,t,r,e,n[a+10],23,-1094730640),e=g(e,o,t,r,n[a+13],4,681279174),r=g(r,e,o,t,n[a],11,-358537222),t=g(t,r,e,o,n[a+3],16,-722521979),o=g(o,t,r,e,n[a+6],23,76029189),e=g(e,o,t,r,n[a+9],4,-640364487),r=g(r,e,o,t,n[a+12],11,-421815835),t=g(t,r,e,o,n[a+15],16,530742520),o=g(o,t,r,e,n[a+2],23,-995338651),e=_(e,o,t,r,n[a],6,-198630844),r=_(r,e,o,t,n[a+7],10,1126891415),t=_(t,r,e,o,n[a+14],15,-1416354905),o=_(o,t,r,e,n[a+5],21,-57434055),e=_(e,o,t,r,n[a+12],6,1700485571),r=_(r,e,o,t,n[a+3],10,-1894986606),t=_(t,r,e,o,n[a+10],15,-1051523),o=_(o,t,r,e,n[a+1],21,-2054922799),e=_(e,o,t,r,n[a+8],6,1873313359),r=_(r,e,o,t,n[a+15],10,-30611744),t=_(t,r,e,o,n[a+6],15,-1560198380),o=_(o,t,r,e,n[a+13],21,1309151649),e=_(e,o,t,r,n[a+4],6,-145523070),r=_(r,e,o,t,n[a+11],10,-1120210379),t=_(t,r,e,o,n[a+2],15,718787259),o=_(o,t,r,e,n[a+9],21,-343485551),e=x(e,c),o=x(o,l),t=x(t,i),r=x(r,u)}return[e,o,t,r]}function v0(n){if(n.length===0)return[];const f=n.length*8,e=new Uint32Array(W(f));for(let o=0;o<f;o+=8)e[o>>5]|=(n[o/8]&255)<<o%32;return e}function x(n,f){const e=(n&65535)+(f&65535);return(n>>16)+(f>>16)+(e>>16)<<16|e&65535}function h0(n,f){return n<<f|n>>>32-f}function N(n,f,e,o,t,r){return x(h0(x(x(f,n),x(o,r)),t),e)}function v(n,f,e,o,t,r,a){return N(f&e|~f&o,n,f,t,r,a)}function h(n,f,e,o,t,r,a){return N(f&o|e&~o,n,f,t,r,a)}function g(n,f,e,o,t,r,a){return N(f^e^o,n,f,t,r,a)}function _(n,f,e,o,t,r,a){return N(e^(f|~o),n,f,t,r,a)}const g0=G("v3",48,d0),_0=g0,U0=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),H={randomUUID:U0};function b0(n,f,e){if(H.randomUUID&&!f&&!n)return H.randomUUID();n=n||{};const o=n.random||(n.rng||$)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,f){e=e||0;for(let t=0;t<16;++t)f[e+t]=o[t];return f}return S(o)}function w0(n,f,e,o){switch(n){case 0:return f&e^~f&o;case 1:return f^e^o;case 2:return f&e^f&o^e&o;case 3:return f^e^o}}function M(n,f){return n<<f|n>>>32-f}function x0(n){const f=[1518500249,1859775393,2400959708,3395469782],e=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof n=="string"){const a=unescape(encodeURIComponent(n));n=[];for(let c=0;c<a.length;++c)n.push(a.charCodeAt(c))}else Array.isArray(n)||(n=Array.prototype.slice.call(n));n.push(128);const o=n.length/4+2,t=Math.ceil(o/16),r=new Array(t);for(let a=0;a<t;++a){const c=new Uint32Array(16);for(let l=0;l<16;++l)c[l]=n[a*64+l*4]<<24|n[a*64+l*4+1]<<16|n[a*64+l*4+2]<<8|n[a*64+l*4+3];r[a]=c}r[t-1][14]=(n.length-1)*8/Math.pow(2,32),r[t-1][14]=Math.floor(r[t-1][14]),r[t-1][15]=(n.length-1)*8&4294967295;for(let a=0;a<t;++a){const c=new Uint32Array(80);for(let p=0;p<16;++p)c[p]=r[a][p];for(let p=16;p<80;++p)c[p]=M(c[p-3]^c[p-8]^c[p-14]^c[p-16],1);let l=e[0],i=e[1],u=e[2],s=e[3],d=e[4];for(let p=0;p<80;++p){const y=Math.floor(p/20),A=M(l,5)+w0(y,i,u,s)+d+f[y]+c[p]>>>0;d=s,s=u,u=M(i,30)>>>0,i=l,l=A}e[0]=e[0]+l>>>0,e[1]=e[1]+i>>>0,e[2]=e[2]+u>>>0,e[3]=e[3]+s>>>0,e[4]=e[4]+d>>>0}return[e[0]>>24&255,e[0]>>16&255,e[0]>>8&255,e[0]&255,e[1]>>24&255,e[1]>>16&255,e[1]>>8&255,e[1]&255,e[2]>>24&255,e[2]>>16&255,e[2]>>8&255,e[2]&255,e[3]>>24&255,e[3]>>16&255,e[3]>>8&255,e[3]&255,e[4]>>24&255,e[4]>>16&255,e[4]>>8&255,e[4]&255]}const y0=G("v5",80,x0),I0=y0,O="00000000-0000-0000-0000-000000000000",A0=n=>(Z("data-v-78a1ccfa"),n=n(),z(),n),D0={"mb-2":"",flex:"","items-center":""},N0=A0(()=>I("span",{"w-100px":""},"Quantity ",-1)),R0={key:0},C0={"flex-1":""},k0={flex:"","justify-center":"","gap-3":""},M0=X({__name:"uuid-generator",setup(n){const f=["NIL","v1","v3","v4","v5"],e=T("uuid-generator:version","v4"),o=T("uuid-generator:quantity",1),t=J({namespace:"6ba7b811-9dad-11d1-80b4-00c04fd430c8",name:""}),r=[{message:"Invalid UUID",validator:u=>u===O?!0:!!u.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/)}],a={NIL:()=>O,v1:u=>c0({clockseq:u,msecs:Date.now(),nsecs:Math.floor(Math.random()*1e4),node:Array.from({length:6},()=>Math.floor(Math.random()*256))}),v3:()=>_0(t.value.name,t.value.namespace),v4:()=>b0(),v5:()=>I0(t.value.name,t.value.namespace)},[c,l]=n0(()=>t0(()=>Array.from({length:o.value},(u,s)=>(a[e.value]??a.NIL)(s)).join(`
`),"")),{copy:i}=K({source:c,text:"UUIDs copied to the clipboard"});return(u,s)=>{const d=Y,p=o0,y=F,A=P;return V(),E("div",null,[w(d,{value:U(e),"onUpdate:value":s[0]||(s[0]=b=>L(e)?e.value=b:null),options:f,label:"UUID version","label-width":"100px","mb-2":""},null,8,["value"]),I("div",D0,[N0,w(p,{value:U(o),"onUpdate:value":s[1]||(s[1]=b=>L(o)?o.value=b:null),"flex-1":"",min:1,max:50,placeholder:"UUID quantity"},null,8,["value"])]),U(e)==="v3"||U(e)==="v5"?(V(),E("div",R0,[I("div",null,[w(d,{value:U(t).namespace,"onUpdate:value":s[2]||(s[2]=b=>U(t).namespace=b),options:{DNS:"6ba7b810-9dad-11d1-80b4-00c04fd430c8",URL:"6ba7b811-9dad-11d1-80b4-00c04fd430c8",OID:"6ba7b812-9dad-11d1-80b4-00c04fd430c8",X500:"6ba7b814-9dad-11d1-80b4-00c04fd430c8"},label:"Namespace","label-width":"100px","mb-2":""},null,8,["value"])]),I("div",C0,[w(y,{value:U(t).namespace,"onUpdate:value":s[3]||(s[3]=b=>U(t).namespace=b),placeholder:"Namespace","label-width":"100px","label-position":"left",label:" ","validation-rules":r,"mb-2":""},null,8,["value"])]),w(y,{value:U(t).name,"onUpdate:value":s[4]||(s[4]=b=>U(t).name=b),placeholder:"Name",label:"Name","label-width":"100px","label-position":"left","mb-2":""},null,8,["value"])])):Q("",!0),w(y,{style:{"text-align":"center","font-family":"monospace"},value:U(c),multiline:"",placeholder:"Your uuids",autosize:"",rows:"1",readonly:"","raw-text":"",monospace:"","my-3":"",class:"uuid-display"},null,8,["value"]),I("div",k0,[w(A,{autofocus:"",onClick:s[5]||(s[5]=b=>U(i)())},{default:q(()=>[B(" Copy ")]),_:1}),w(A,{onClick:U(l)},{default:q(()=>[B(" Refresh ")]),_:1},8,["onClick"])])])}}});const $0=e0(M0,[["__scopeId","data-v-78a1ccfa"]]);export{$0 as default};
