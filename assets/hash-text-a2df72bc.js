import{d as A,n as h,o as r,e as _,i as o,w as i,g as u,v as c,F as y,r as B,x as D,Z as E,y as k,l as w,t as M}from"./index-3ab894b1.js";import{c as e}from"./index-79470d8a.js";import{_ as T}from"./InputCopyable.vue_vue_type_script_setup_true_lang-c1eba06e.js";import{c as N}from"./hash-text.service-9de4e2c4.js";import{u as P}from"./queryParams-bb62f69b.js";import{_ as R}from"./Divider-c69188b1.js";import{_ as V}from"./InputGroupLabel-4f31ee7d.js";import{_ as $}from"./InputGroup-f2f5928d.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./___vite-browser-external_commonjs-proxy-357c6c8d.js";const W=A({__name:"hash-text",setup(C){const p={MD5:e.MD5,SHA1:e.SHA1,SHA256:e.SHA256,SHA224:e.SHA224,SHA512:e.SHA512,SHA384:e.SHA384,SHA3:e.SHA3,RIPEMD160:e.RIPEMD160},m=Object.keys(p),l=P({defaultValue:"Hex",name:"encoding"}),s=h("");function f(a,n){return n==="Bin"?N(a.toString(e.enc.Hex)):a.toString(e.enc[n])}const d=(a,n)=>f(p[a](n),l.value);return(a,n)=>{const v=D,x=R,g=E,H=V,S=$,b=k;return r(),_("div",null,[o(b,null,{default:i(()=>[o(v,{value:u(s),"onUpdate:value":n[0]||(n[0]=t=>c(s)?s.value=t:null),multiline:"","raw-text":"",placeholder:"Your string to hash...",rows:"3",autosize:"",autofocus:"",label:"Your text to hash:"},null,8,["value"]),o(x),o(g,{value:u(l),"onUpdate:value":n[1]||(n[1]=t=>c(l)?l.value=t:null),"mb-4":"",label:"Digest encoding",options:[{label:"Binary (base 2)",value:"Bin"},{label:"Hexadecimal (base 16)",value:"Hex"},{label:"Base64 (base 64)",value:"Base64"},{label:"Base64url (base 64 with url safe chars)",value:"Base64url"}]},null,8,["value","options"]),(r(!0),_(y,null,B(u(m),t=>(r(),_("div",{key:t,style:{margin:"5px 0"}},[o(S,null,{default:i(()=>[o(H,{style:{flex:"0 0 120px"}},{default:i(()=>[w(M(t),1)]),_:2},1024),o(T,{value:d(t,u(s)),readonly:""},null,8,["value"])]),_:2},1024)]))),128))]),_:1})])}}});export{W as default};
