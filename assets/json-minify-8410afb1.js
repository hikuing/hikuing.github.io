import{_ as a}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-b85745d1.js";import{l as r}from"./index-231c3e11.js";import{w as i}from"./defaults-4d6daddf.js";import{d as s,o as l,c as p}from"./index-3ab894b1.js";import"./TextareaCopyable-a58bb9f3.js";import"./Copy-7a3d9e1b.js";import"./Scrollbar-fe74b47d.js";const u=`{
	"hello": [
		"world"
	]
}`,N=s({__name:"json-minify",setup(m){const t=o=>i(()=>JSON.stringify(r.parse(o),null,0),""),e=[{validator:o=>o===""||r.parse(o),message:"Provided JSON is not valid."}];return(o,f)=>{const n=a;return l(),p(n,{"input-label":"Your raw JSON","input-default":u,"input-placeholder":"Paste your raw JSON here...","output-label":"Minified version of your JSON","output-language":"json","input-validation-rules":e,transformer:t})}}});export{N as default};
