import{s,a as t,r as e,b as o,g as n,c as i,d as l,e as a,o as c,f as r,w as f,i as h,h as u,j as d,t as y,k,l as _,m,F as p,n as g}from"./index-D4O629x7.js";import{_ as C,r as I,a as b}from"./uni-app.es.BekvOBo4.js";import{c as S}from"./config.BCicZlhl.js";const w=C({data:()=>({value:["0"],urlList:S.urlList,sentencesInfo:{},history:[]}),onLoad(){this.getHistory(),this.getSentences()},methods:{copy(e){s({data:e,success:()=>{t({title:"复制成功",icon:"success"})}})},getSentences(){e({url:"https://v1.hitokoto.cn",success:s=>{200==s.statusCode&&(this.sentencesInfo=s.data)}})},handleClick(s){s.info?o({title:"提示",content:s.info,confirmText:"知道了",success:({confirm:t})=>{t&&(console.log("item"),this.setHistory(s),window.open(s.url,"_blank"))}}):(this.setHistory(s),window.open(s.url,"_blank"))},getHistory(){let s=n("history");s&&(s=JSON.parse(s)||[],s.length>0&&(this.history=s))},clearHistory(){o({title:"提示",content:"确定要清空历史记录吗？",confirmText:"清空",success:s=>{s.confirm&&(i("history"),this.history=[])}})},setHistory(s){let t=n("history");if(t){t=JSON.parse(t),t.length>=4&&t.pop();const e=t.findIndex((t=>t.url===s.url));-1===e?(t.unshift(s),l("history",JSON.stringify(t)),this.history=t):(t.splice(e,1),t.unshift(s),l("history",JSON.stringify(t)),this.history=t)}else l("history",JSON.stringify([s])),this.history=[s]}}},[["render",function(s,t,e,o,n,i){const l=I(a("uni-icons"),b),C=h,S=g;return c(),r(C,{class:"container"},{default:f((()=>[u(C,{class:"title-box"},{default:f((()=>[u(C,{class:"fresh-btn",onClick:i.getSentences},{default:f((()=>[u(l,{type:"refresh",size:"26",color:"#3490de"})])),_:1},8,["onClick"]),u(C,{class:"content",onClick:t[0]||(t[0]=s=>i.copy(n.sentencesInfo.hitokoto))},{default:f((()=>[d(y(n.sentencesInfo.hitokoto),1)])),_:1}),u(C,{class:"from"},{default:f((()=>[d(" —— "),n.sentencesInfo.from_who?(c(),r(S,{key:0},{default:f((()=>[d(y(n.sentencesInfo.from_who+"·"),1)])),_:1})):k("",!0),u(S,null,{default:f((()=>[d(y(n.sentencesInfo.from),1)])),_:1})])),_:1})])),_:1}),n.history.length>0?(c(),r(C,{key:0,class:"cate-title"},{default:f((()=>[u(C,null,{default:f((()=>[d("上次打开")])),_:1}),u(C,{class:"clear-btn",onClick:t[1]||(t[1]=s=>i.clearHistory())},{default:f((()=>[u(l,{type:"refreshempty",size:"14",color:"#fff"}),d(" 清空 ")])),_:1})])),_:1})):k("",!0),n.history.length>0?(c(),r(C,{key:1,class:"url-container"},{default:f((()=>[(c(!0),_(p,null,m(n.history,((s,t)=>(c(),r(C,{class:"url-item",key:t,onClick:t=>i.handleClick(s)},{default:f((()=>[d(y(s.title),1)])),_:2},1032,["onClick"])))),128))])),_:1})):k("",!0),u(C,{class:"cate-title"},{default:f((()=>[d("在线观影")])),_:1}),u(C,{class:"url-container"},{default:f((()=>[(c(!0),_(p,null,m(n.urlList[0].children[0].urls,((s,t)=>(c(),r(C,{class:"url-item",key:t,onClick:t=>i.handleClick(s)},{default:f((()=>[d(y(s.title),1)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})}],["__scopeId","data-v-b1eeeb63"]]);export{w as default};
