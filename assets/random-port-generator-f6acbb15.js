import{cm as i,d as l,s as u,o as m,c as f,w as e,f as r,t as g,g as t,i as a,l as _,m as x,y,A as v}from"./index-3ab894b1.js";import{c as C}from"./computedRefreshable-64fff8b8.js";const h=()=>i(1024,65535),b={class:"port"},k={flex:"","justify-center":"","gap-3":""},P=l({__name:"random-port-generator",setup(B){const[o,c]=C(()=>String(h())),{copy:p}=u({source:o,text:"Port copied to the clipboard"});return(I,n)=>{const s=x,d=y;return m(),f(d,null,{default:e(()=>[r("div",b,g(t(o)),1),r("div",k,[a(s,{onClick:n[0]||(n[0]=N=>t(p)())},{default:e(()=>[_(" Copy ")]),_:1}),a(s,{onClick:t(c)},{default:e(()=>[_(" Refresh ")]),_:1},8,["onClick"])])]),_:1})}}});const G=v(P,[["__scopeId","data-v-97db8e1e"]]);export{G as default};