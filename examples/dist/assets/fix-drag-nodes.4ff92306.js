import{_ as n,d as t,a as s,D as p,g as c,i as f,j as u}from"./index.9a57ca92.js";const d=t({setup(){const o=s({nodes:[],links:[]});return fetch(p).then(e=>e.json()).then(e=>o.value=e),{graphData:o}}});function l(o,e,D,_,g,h){const r=f("VueForceGraph3D");return u(),c(r,{graphData:o.graphData,backgroundColor:"#090723",nodeLabel:"id",nodeAutoColorBy:"group",onNodeDragEnd:a=>{a.fx=a.x,a.fy=a.y,a.fz=a.z}},null,8,["graphData","onNodeDragEnd"])}var m=n(d,[["render",l]]);export{m as default};
