import{d as B,an as n,a8 as k,ad as oe,ab as _,ac as R,a9 as L,ae as ge,aW as Se,aA as be,aF as ve,aL as Ve,a5 as Ce,aN as Ie,aM as Re,cp as $e,au as Ae,as as le,n as te,ag as W,ah as Be,af as ke,a as U,al as Me,aR as se,aS as N,aX as ue,cq as Z,cr as q,ay as De,ar as H,P as xe,b as ce,o as C,e as F,f as X,F as Y,r as de,g as I,i as J,w as Q,t as pe,c as G,l as Oe,H as Ue,x as je,Z as Ne,A as Ee}from"./index-3ab894b1.js";import{T as Le}from"./TextareaCopyable-a58bb9f3.js";import{f as We}from"./use-form-item-f7149e4e.js";import{b as Fe,N as ae,a as E}from"./Button-a9945df3.js";import{u as Ge}from"./use-locale-739ea672.js";import{A as me,R as ze}from"./Remove-674c47b2.js";import{_ as Ke}from"./FormItem-209cdc1b.js";import{_ as Ze}from"./InputGroupLabel-4f31ee7d.js";import{_ as qe}from"./InputGroup-f2f5928d.js";import"./Copy-7a3d9e1b.js";import"./Scrollbar-fe74b47d.js";import"./is-browser-fc34c9a6.js";import"./color-to-class-8578b472.js";const He=B({name:"ArrowDown",render(){return n("svg",{viewBox:"0 0 28 28",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},n("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},n("g",{"fill-rule":"nonzero"},n("path",{d:"M23.7916,15.2664 C24.0788,14.9679 24.0696,14.4931 23.7711,14.206 C23.4726,13.9188 22.9978,13.928 22.7106,14.2265 L14.7511,22.5007 L14.7511,3.74792 C14.7511,3.33371 14.4153,2.99792 14.0011,2.99792 C13.5869,2.99792 13.2511,3.33371 13.2511,3.74793 L13.2511,22.4998 L5.29259,14.2265 C5.00543,13.928 4.53064,13.9188 4.23213,14.206 C3.93361,14.4931 3.9244,14.9679 4.21157,15.2664 L13.2809,24.6944 C13.6743,25.1034 14.3289,25.1034 14.7223,24.6944 L23.7916,15.2664 Z"}))))}}),Xe=B({name:"ArrowUp",render(){return n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},n("g",{fill:"none"},n("path",{d:"M3.13 9.163a.5.5 0 1 0 .74.674L9.5 3.67V17.5a.5.5 0 0 0 1 0V3.672l5.63 6.165a.5.5 0 0 0 .738-.674l-6.315-6.916a.746.746 0 0 0-.632-.24a.746.746 0 0 0-.476.24L3.131 9.163z",fill:"currentColor"})))}}),m="0!important",we="-1px!important";function x(e){return R(e+"-type",[_("& +",[k("button",{},[R(e+"-type",[L("border",{borderLeftWidth:m}),L("state-border",{left:we})])])])])}function O(e){return R(e+"-type",[_("& +",[k("button",[R(e+"-type",[L("border",{borderTopWidth:m}),L("state-border",{top:we})])])])])}const Ye=k("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[oe("vertical",{flexDirection:"row"},[oe("rtl",[k("button",[_("&:first-child:not(:last-child)",`
 margin-right: ${m};
 border-top-right-radius: ${m};
 border-bottom-right-radius: ${m};
 `),_("&:last-child:not(:first-child)",`
 margin-left: ${m};
 border-top-left-radius: ${m};
 border-bottom-left-radius: ${m};
 `),_("&:not(:first-child):not(:last-child)",`
 margin-left: ${m};
 margin-right: ${m};
 border-radius: ${m};
 `),x("default"),R("ghost",[x("primary"),x("info"),x("success"),x("warning"),x("error")])])])]),R("vertical",{flexDirection:"column"},[k("button",[_("&:first-child:not(:last-child)",`
 margin-bottom: ${m};
 margin-left: ${m};
 margin-right: ${m};
 border-bottom-left-radius: ${m};
 border-bottom-right-radius: ${m};
 `),_("&:last-child:not(:first-child)",`
 margin-top: ${m};
 margin-left: ${m};
 margin-right: ${m};
 border-top-left-radius: ${m};
 border-top-right-radius: ${m};
 `),_("&:not(:first-child):not(:last-child)",`
 margin: ${m};
 border-radius: ${m};
 `),O("default"),R("ghost",[O("primary"),O("info"),O("success"),O("warning"),O("error")])])])]),Je={size:{type:String,default:void 0},vertical:Boolean},Qe=B({name:"ButtonGroup",props:Je,setup(e){const{mergedClsPrefixRef:a,mergedRtlRef:o}=ge(e);return Se("-button-group",Ye,a),be(Fe,e),{rtlEnabled:ve("ButtonGroup",o,a),mergedClsPrefix:a}},render(){const{mergedClsPrefix:e}=this;return n("div",{class:[`${e}-button-group`,this.rtlEnabled&&`${e}-button-group--rtl`,this.vertical&&`${e}-button-group--vertical`],role:"group"},this.$slots)}}),et=()=>$e,tt=Ve({name:"DynamicInput",common:Ce,peers:{Input:Ie,Button:Re},self:et}),at=tt,ie=Ae("n-dynamic-input"),lt=B({name:"DynamicInputInputPreset",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:""},disabled:Boolean,parentPath:String,path:String,onUpdateValue:{type:Function,required:!0}},setup(){const{mergedThemeRef:e,placeholderRef:a}=le(ie);return{mergedTheme:e,placeholder:a}},render(){const{mergedTheme:e,placeholder:a,value:o,clsPrefix:i,onUpdateValue:r,disabled:s}=this;return n("div",{class:`${i}-dynamic-input-preset-input`},n(ae,{theme:e.peers.Input,"theme-overrides":e.peerOverrides.Input,value:o,placeholder:a,onUpdateValue:r,disabled:s}))}}),it=B({name:"DynamicInputPairPreset",props:{clsPrefix:{type:String,required:!0},value:{type:Object,default:()=>({key:"",value:""})},disabled:Boolean,parentPath:String,path:String,onUpdateValue:{type:Function,required:!0}},setup(e){const{mergedThemeRef:a,keyPlaceholderRef:o,valuePlaceholderRef:i}=le(ie);return{mergedTheme:a,keyPlaceholder:o,valuePlaceholder:i,handleKeyInput(r){e.onUpdateValue({key:r,value:e.value.value})},handleValueInput(r){e.onUpdateValue({key:e.value.key,value:r})}}},render(){const{mergedTheme:e,keyPlaceholder:a,valuePlaceholder:o,value:i,clsPrefix:r,disabled:s}=this;return n("div",{class:`${r}-dynamic-input-preset-pair`},n(ae,{theme:e.peers.Input,"theme-overrides":e.peerOverrides.Input,value:i.key,class:`${r}-dynamic-input-pair-input`,placeholder:a,onUpdateValue:this.handleKeyInput,disabled:s}),n(ae,{theme:e.peers.Input,"theme-overrides":e.peerOverrides.Input,value:i.value,class:`${r}-dynamic-input-pair-input`,placeholder:o,onUpdateValue:this.handleValueInput,disabled:s}))}}),nt=k("dynamic-input",{width:"100%"},[k("dynamic-input-item",`
 margin-bottom: 10px;
 display: flex;
 flex-wrap: nowrap;
 `,[k("dynamic-input-preset-input",{flex:1,alignItems:"center"}),k("dynamic-input-preset-pair",`
 flex: 1;
 display: flex;
 align-items: center;
 `,[k("dynamic-input-pair-input",[_("&:first-child",{"margin-right":"12px"})])]),L("action",`
 align-self: flex-start;
 display: flex;
 justify-content: flex-end;
 flex-shrink: 0;
 flex-grow: 0;
 margin: var(--action-margin);
 `,[R("icon",{cursor:"pointer"})]),_("&:last-child",{marginBottom:0})]),k("form-item",`
 padding-top: 0 !important;
 margin-right: 0 !important;
 `,[k("form-item-blank",{paddingTop:"0 !important"})])]),z=new WeakMap,rt=Object.assign(Object.assign({},ke.props),{max:Number,min:{type:Number,default:0},value:Array,defaultValue:{type:Array,default:()=>[]},preset:{type:String,default:"input"},keyField:String,itemClass:String,itemStyle:[String,Object],keyPlaceholder:{type:String,default:""},valuePlaceholder:{type:String,default:""},placeholder:{type:String,default:""},disabled:Boolean,showSortButton:Boolean,createButtonProps:Object,onCreate:Function,onRemove:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClear:Function,onInput:[Function,Array]}),ot=B({name:"DynamicInput",props:rt,setup(e,{slots:a}){const{mergedComponentPropsRef:o,mergedClsPrefixRef:i,mergedRtlRef:r,inlineThemeDisabled:s}=ge(),c=le(We,null),d=te(e.defaultValue),P=W(e,"value"),f=Be(P,d),w=ke("DynamicInput","-dynamic-input",nt,at,e,i),g=U(()=>{const{value:t}=f;if(Array.isArray(t)){const{max:l}=e;return l!==void 0&&t.length>=l}return!1}),$=U(()=>{const{value:t}=f;return Array.isArray(t)?t.length<=e.min:!0}),M=U(()=>{var t,l;return(l=(t=o?.value)===null||t===void 0?void 0:t.DynamicInput)===null||l===void 0?void 0:l.buttonSize});function y(t){const{onInput:l,"onUpdate:value":p,onUpdateValue:u}=e;l&&H(l,t),p&&H(p,t),u&&H(u,t),d.value=t}function S(t,l){if(t==null||typeof t!="object")return l;const p=Z(t)?q(t):t;let u=z.get(p);return u===void 0&&z.set(p,u=De()),u}function A(t,l){const{value:p}=f,u=Array.from(p??[]),V=u[t];if(u[t]=l,V&&l&&typeof V=="object"&&typeof l=="object"){const Te=Z(V)?q(V):V,Pe=Z(l)?q(l):l,re=z.get(Te);re!==void 0&&z.set(Pe,re)}y(u)}function T(){b(-1)}function b(t){const{value:l}=f,{onCreate:p}=e,u=Array.from(l??[]);if(p)u.splice(t+1,0,p(t+1)),y(u);else if(a.default)u.splice(t+1,0,null),y(u);else switch(e.preset){case"input":u.splice(t+1,0,""),y(u);break;case"pair":u.splice(t+1,0,{key:"",value:""}),y(u);break}}function v(t){const{value:l}=f;if(!Array.isArray(l))return;const{min:p}=e;if(l.length<=p)return;const{onRemove:u}=e;u&&u(t);const V=Array.from(l);V.splice(t,1),y(V)}function h(t,l,p){if(l<0||p<0||l>=t.length||p>=t.length||l===p)return;const u=t[l];t[l]=t[p],t[p]=u}function j(t,l){const{value:p}=f;if(!Array.isArray(p))return;const u=Array.from(p);t==="up"&&h(u,l,l-1),t==="down"&&h(u,l,l+1),y(u)}be(ie,{mergedThemeRef:w,keyPlaceholderRef:W(e,"keyPlaceholder"),valuePlaceholderRef:W(e,"valuePlaceholder"),placeholderRef:W(e,"placeholder")});const _e=ve("DynamicInput",r,i),ne=U(()=>{const{self:{actionMargin:t,actionMarginRtl:l}}=w.value;return{"--action-margin":t,"--action-margin-rtl":l}}),D=s?Me("dynamic-input",void 0,ne,e):void 0;return{locale:Ge("DynamicInput").localeRef,rtlEnabled:_e,buttonSize:M,mergedClsPrefix:i,NFormItem:c,uncontrolledValue:d,mergedValue:f,insertionDisabled:g,removeDisabled:$,handleCreateClick:T,ensureKey:S,handleValueChange:A,remove:v,move:j,createItem:b,mergedTheme:w,cssVars:s?void 0:ne,themeClass:D?.themeClass,onRender:D?.onRender}},render(){const{$slots:e,itemClass:a,buttonSize:o,mergedClsPrefix:i,mergedValue:r,locale:s,mergedTheme:c,keyField:d,itemStyle:P,preset:f,showSortButton:w,NFormItem:g,ensureKey:$,handleValueChange:M,remove:y,createItem:S,move:A,onRender:T,disabled:b}=this;return T?.(),n("div",{class:[`${i}-dynamic-input`,this.rtlEnabled&&`${i}-dynamic-input--rtl`,this.themeClass],style:this.cssVars},!Array.isArray(r)||r.length===0?n(E,Object.assign({block:!0,ghost:!0,dashed:!0,size:o},this.createButtonProps,{disabled:this.insertionDisabled||b,theme:c.peers.Button,themeOverrides:c.peerOverrides.Button,onClick:this.handleCreateClick}),{default:()=>se(e["create-button-default"],()=>[s.create]),icon:()=>se(e["create-button-icon"],()=>[n(N,{clsPrefix:i},{default:()=>n(me,null)})])}):r.map((v,h)=>n("div",{key:d?v[d]:$(v,h),"data-key":d?v[d]:$(v,h),class:[`${i}-dynamic-input-item`,a],style:P},ue(e.default,{value:r[h],index:h},()=>[f==="input"?n(lt,{disabled:b,clsPrefix:i,value:r[h],parentPath:g?g.path.value:void 0,path:g?.path.value?`${g.path.value}[${h}]`:void 0,onUpdateValue:j=>{M(h,j)}}):f==="pair"?n(it,{disabled:b,clsPrefix:i,value:r[h],parentPath:g?g.path.value:void 0,path:g?.path.value?`${g.path.value}[${h}]`:void 0,onUpdateValue:j=>{M(h,j)}}):null]),ue(e.action,{value:r[h],index:h,create:S,remove:y,move:A},()=>[n("div",{class:`${i}-dynamic-input-item__action`},n(Qe,{size:o},{default:()=>[n(E,{disabled:this.removeDisabled||b,theme:c.peers.Button,themeOverrides:c.peerOverrides.Button,circle:!0,onClick:()=>{y(h)}},{icon:()=>n(N,{clsPrefix:i},{default:()=>n(ze,null)})}),n(E,{disabled:this.insertionDisabled||b,circle:!0,theme:c.peers.Button,themeOverrides:c.peerOverrides.Button,onClick:()=>{S(h)}},{icon:()=>n(N,{clsPrefix:i},{default:()=>n(me,null)})}),w?n(E,{disabled:h===0||b,circle:!0,theme:c.peers.Button,themeOverrides:c.peerOverrides.Button,onClick:()=>{A("up",h)}},{icon:()=>n(N,{clsPrefix:i},{default:()=>n(Xe,null)})}):null,w?n(E,{disabled:h===r.length-1||b,circle:!0,theme:c.peers.Button,themeOverrides:c.peerOverrides.Button,onClick:()=>{A("down",h)}},{icon:()=>n(N,{clsPrefix:i},{default:()=>n(He,null)})}):null]}))]))))}}),ee={"og:description":"twitter:description","og:title":"twitter:title","og:image":"twitter:image","og:image:url":"twitter:image","og:image:alt":"twitter:image:alt"};function st({existingMeta:e,twitterMeta:a}){return e.filter(({key:o})=>o in ee&&a.find(i=>i.key===ee[o])===void 0).map(({key:o,value:i})=>({key:ee[o]??o,value:i}))}const ut=e=>typeof e=="object"&&!Array.isArray(e)&&e!==null&&!(e instanceof Date),ct=e=>e.split(":").map(dt).join(":"),dt=e=>e.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)?.map(a=>a.toLowerCase()).join("_")??"";function he({title:e,flatMetadata:a,type:o}){return a.length===0?[]:[`<!-- ${e} -->`,...ft({flatMetadata:a,type:o})]}function pt({twitter:e,...a},{indentation:o=0,indentWith:i="  ",generateTwitterCompatibleMeta:r=!1}={}){const s=fe(a,{basePrefix:"og"}),c=fe(e,{basePrefix:"twitter"});return[he({title:"og meta",flatMetadata:s,type:"property"}),he({title:"twitter meta",flatMetadata:[...c,...r?st({existingMeta:s,twitterMeta:c}):[]],type:"name"})].filter(f=>f&&f.length>0).map(f=>f.map(w=>i.repeat(o)+w).join(`
`)).join(`

`)}function mt(e){return e instanceof Date?e.toISOString():String(e)}function fe(e,{separator:a=":",basePrefix:o=""}={}){const i=[],r=(s,c="")=>{if(!(s===void 0||s===""))if(ut(s))for(const[d,P]of Object.entries(s)){const f=[c,ct(d)].filter(Boolean).join(a);r(P,f)}else if(Array.isArray(s))for(const d of s)r(d,c);else i.push({key:c,value:mt(s)})};return r(e,o),i}function ht({flatMetadata:{key:e,value:a},type:o}){return`<meta ${o.trim()}="${e.trim()}" value="${a.trim()}" />`}function ft({flatMetadata:e,type:a}){return e.map(o=>ht({flatMetadata:o,type:a}))}const yt={name:"Article",elements:[{type:"input",label:"Publishing date",key:"article:published_time",placeholder:"When the article was first published..."},{type:"input",label:"Modification date",key:"article:modified_time",placeholder:"When the article was last changed..."},{type:"input",label:"Expiration date",key:"article:expiration_time",placeholder:"When the article is out of date after..."},{type:"input",label:"Author",key:"article:author",placeholder:"Writers of the article..."},{type:"input",label:"Section",key:"article:section",placeholder:"A high-level section name. E.g. Technology.."},{type:"input",label:"Tag",key:"article:tag",placeholder:"Tag words associated with this article..."}]},gt={name:"Book",elements:[{type:"input",label:"Author",key:"book:author",placeholder:"Who wrote this book..."},{type:"input",label:"ISBN",key:"book:isbn",placeholder:"The International Standard Book Number..."},{type:"input",label:"Release date",key:"book:release_date",placeholder:"The date the book was released..."},{type:"input",label:"Tag",key:"book:tag",placeholder:"Tag words associated with this book..."}]},bt={name:"Album details",elements:[{type:"input",label:"Song",key:"music:song",placeholder:"The song on this album..."},{type:"input",label:"Disc",key:"music:song:disc",placeholder:"The same as music:album:disc but in reverse..."},{type:"input",label:"Track",key:"music:song:track",placeholder:"The same as music:album:track but in reverse..."},{type:"input",label:"Musician",key:"music:musician",placeholder:"The musician that made this song..."},{type:"input",label:"Release date",key:"music:release_date",placeholder:"The date the album was released..."}]},vt={name:"Playlist details",elements:[{type:"input",label:"Song",key:"music:song",placeholder:"The song on this album..."},{type:"input",label:"Disc",key:"music:song:disc",placeholder:"The same as music:album:disc but in reverse..."},{type:"input",label:"Track",key:"music:song:track",placeholder:"The same as music:album:track but in reverse..."},{type:"input",label:"Creator",key:"music:creator",placeholder:"The creator of this playlist..."}]},kt={name:"Radio station details",elements:[{type:"input",label:"Creator",key:"music:creator",placeholder:"The creator of this radio station..."}]},wt={name:"Song details",elements:[{type:"input",label:"Duration",placeholder:"The duration of the song...",key:"music:duration"},{type:"input",label:"Album",placeholder:"The album this song is from...",key:"music:album"},{type:"input",label:"Disc",placeholder:"Which disc of the album this song is on...",key:"music:album:disk"},{type:"input",label:"Track",placeholder:" Which track this song is...",key:"music:album:track"},{type:"input-multiple",label:"Musician",placeholder:"The musician that made this song...",key:"music:musician"}]},_t={name:"Profile",elements:[{type:"input",label:"First name",placeholder:"Enter the first name of the person...",key:"profile:first_name"},{type:"input",label:"Last name",placeholder:"Enter the last name of the person...",key:"profile:last_name"},{type:"input",label:"Username",placeholder:"Enter the username of the person...",key:"profile:username"},{type:"input",label:"Gender",placeholder:"Enter the gender of the person...",key:"profile:gender"}]},K={name:"Movie details",elements:[{type:"input-multiple",label:"Actor",key:"video:actor",placeholder:"Name of the actress/actor..."},{type:"input-multiple",label:"Director",key:"video:director",placeholder:"Name of the director..."},{type:"input-multiple",label:"Writer",key:"video:writer",placeholder:"Writers of the movie..."},{type:"input",label:"Duration",key:"video:duration",placeholder:"The movie's length in seconds..."},{type:"input",label:"Release date",key:"video:release_date",placeholder:"The date the movie was released..."},{type:"input",label:"Tag",key:"video:tag",placeholder:"Tag words associated with this movie..."}]},Tt={name:"Video episode details",elements:[...K.elements,{type:"input",label:"Series",key:"video:series",placeholder:"Which series this episode belongs to..."}]},Pt={name:"Other video details",elements:[...K.elements]},St={name:"TV show details",elements:[...K.elements]},Vt={name:"Image",elements:[{type:"input",label:"Image url",placeholder:"The url of your website social image...",key:"image"},{type:"input",label:"Image alt",placeholder:"The alternative text of your website social image...",key:"image:alt"},{type:"input",label:"Width",placeholder:"Width in px of your website social image...",key:"image:width"},{type:"input",label:"Height",placeholder:"Height in px of your website social image...",key:"image:height"}]},Ct={name:"Twitter",elements:[{type:"select",options:[{label:"Summary",value:"summary"},{label:"Summary with large image",value:"summary_large_image"},{label:"Application",value:"app"},{label:"Player",value:"player"}],label:"Card type",placeholder:"The Twitter card type...",key:"twitter:card"},{type:"input",label:"Site account",placeholder:"The name of the Twitter account of the site (ex: @ittoolsdottech)...",key:"twitter:site"},{type:"input",label:"Creator acc.",placeholder:"The name of the Twitter account of the creator (ex: @cthmsst)...",key:"twitter:creator"}]},It=[{label:"Website",value:"website"},{label:"Article",value:"article"},{label:"Book",value:"book"},{label:"Profile",value:"profile"},{type:"group",label:"Music",key:"Music",children:[{label:"Song",value:"music.song"},{label:"Music album",value:"music.album"},{label:"Playlist",value:"music.playlist"},{label:"Radio station",value:"music.radio_station"}]},{type:"group",label:"Video",key:"Video",children:[{label:"Movie",value:"video.movie"},{label:"Episode",value:"video.episode"},{label:"TV show",value:"video.tv_show"},{label:"Other video",value:"video.other"}]}],Rt={name:"General information",elements:[{type:"select",label:"Page type",placeholder:"Select the type of your website...",key:"type",options:It},{type:"input",label:"Title",placeholder:"Enter the title of your website...",key:"title"},{type:"input",label:"Description",placeholder:"Enter the description of your website...",key:"description"},{type:"input",label:"Page URL",placeholder:"Enter the url of your website...",key:"url"}]},ye={"music.song":wt,"music.album":bt,"music.playlist":vt,"music.radio_station":kt,"video.movie":K,"video.episode":Tt,"video.tv_show":St,"video.other":Pt,profile:_t,article:yt,book:gt},$t={"mb-5px":""},At=B({__name:"meta-tag-generator",setup(e){const a=te({type:"website","twitter:card":"summary_large_image"});xe(()=>te(a.value.type),(r,s)=>{const c=ye[s.value];c&&c.elements.forEach(({key:d})=>{a.value[d]=""})});const o=U(()=>{const r=[Rt,Vt,Ct],s=ye[a.value.type];return s&&r.push(s),r}),i=U(()=>{const r=ce.chain(a.value).pickBy((c,d)=>d.startsWith("twitter:")).mapKeys((c,d)=>d.replace(/^twitter:/,"")).value(),s=ce.pickBy(a.value,(c,d)=>!d.startsWith("twitter:"));return pt({...s,twitter:r},{generateTwitterCompatibleMeta:!0})});return(r,s)=>{const c=Ze,d=je,P=ot,f=Ne,w=qe,g=Ke;return C(),F(Y,null,[X("div",null,[(C(!0),F(Y,null,de(I(o),({name:$,elements:M})=>(C(),F("div",{key:$,style:{"margin-bottom":"15px"}},[X("div",$t,pe($),1),(C(!0),F(Y,null,de(M,({key:y,type:S,label:A,placeholder:T,...b})=>(C(),G(w,{key:y},{default:Q(()=>[J(c,{style:{flex:"0 0 110px"}},{default:Q(()=>[Oe(pe(A),1)]),_:2},1024),S==="input"?(C(),G(d,{key:0,value:I(a)[y],"onUpdate:value":v=>I(a)[y]=v,placeholder:T,clearable:""},null,8,["value","onUpdate:value","placeholder"])):S==="input-multiple"?(C(),G(P,{key:1,value:I(a)[y],"onUpdate:value":v=>I(a)[y]=v,min:1,placeholder:T,"default-value":[""],"show-sort-button":!0},null,8,["value","onUpdate:value","placeholder"])):S==="select"?(C(),G(f,{key:2,value:I(a)[y],"onUpdate:value":v=>I(a)[y]=v,"w-full":"",placeholder:T,options:b.options},null,8,["value","onUpdate:value","placeholder","options"])):Ue("",!0)]),_:2},1024))),128))]))),128))]),X("div",null,[J(g,{label:"Your meta tags"},{default:Q(()=>[J(Le,{value:I(i),language:"html"},null,8,["value"])]),_:1})])],64)}}});const zt=Ee(At,[["__scopeId","data-v-4c466f3d"]]);export{zt as default};