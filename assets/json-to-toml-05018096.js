import{_ as s}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-b85745d1.js";import{s as m}from"./toml-esm-9c5f6a1e.js";import{l as r}from"./index-231c3e11.js";import{w as i}from"./defaults-4d6daddf.js";import{d as p,o as l,c}from"./index-3ab894b1.js";import"./TextareaCopyable-a58bb9f3.js";import"./Copy-7a3d9e1b.js";import"./Scrollbar-fe74b47d.js";const b=p({__name:"json-to-toml",setup(u){const t=o=>[m(r.parse(o))].flat().join(`
`).trim(),a=o=>o.trim()===""?"":i(()=>t(o),""),e=[{validator:o=>o===""||r.parse(o),message:"Provided JSON is not valid."}];return(o,f)=>{const n=s;return l(),c(n,{"input-label":"Your JSON","input-placeholder":"Paste your JSON here...","output-label":"TOML from your JSON","output-language":"toml","input-validation-rules":e,transformer:a})}}});export{b as default};
