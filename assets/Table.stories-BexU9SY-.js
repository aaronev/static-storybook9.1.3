import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{e as r}from"./iframe-C6v-px0l.js";import{C as b}from"./Checkbox-D40waOUr.js";import{A as f}from"./Anchor-dbJ-b8ff.js";import"./preload-helper-D9Z9MdNV.js";const y=({caption:x,columns:S,data:k,selectable:u,downloadable:D,...g})=>{const i=r.useRef(null),c=r.useRef(null),h=r.useRef(null),[w,p]=r.useState("None Selected"),n=e=>{h.current.innerText=e,setTimeout(()=>{h.current.innerText=""},500)},v=()=>[...i.current.querySelectorAll("[type=checkbox]:checked")];return s.jsxs("div",{children:[s.jsxs("div",{class:"toolbar",children:[s.jsx("span",{ref:h,class:"visually-hidden","aria-live":"polite"}),u&&s.jsx(b,{class:"select-all-comp",ref:c,nameLabel:"all available items",hintId:"select-all-hint",hint:w,label:"Select All Available Items",onClick:e=>{const l=[...i.current.querySelectorAll("[type=checkbox]:not(:disabled)")];l.forEach(a=>a.checked=e.target.checked);const t=e.target.checked?`Selected ${l.length}`:"None Selected";p(t),n(e.target.checked?`all available items selected, ${t}`:`all available items deselected, ${t}`)}}),D&&s.jsx(f,{class:"download-comp",label:"Download Selected Items",href:"/",download:!0,onClick:()=>{const e=v().map(a=>a.closest("TR")),l=e.map(a=>`{device: ${a.querySelector(".device").innerText}, path: ${a.querySelector(".path").innerText}}`),t=e.length<1?"No items selected!":JSON.stringify(l);alert(t)}})]}),s.jsxs("table",{ref:i,...g,children:[s.jsx("caption",{children:x}),s.jsx("thead",{children:s.jsxs("tr",{children:[u&&s.jsx("th",{class:"visually-hidden",children:"Select"}),S.map(e=>s.jsx("th",{children:e}))]})}),s.jsx("tbody",{children:k.map(e=>{const l=[];for(const t in e)l.push(t);return s.jsxs("tr",{children:[u&&s.jsx("td",{children:s.jsx(b,{nameLabel:e.name,ariaLabel:`Select ${e.name} to download`,disabled:e.status!=="available",onClick:t=>{const a=[...i.current.querySelectorAll("[type=checkbox]:not(:disabled)")],d=v();switch(console.log(a,a.length,d,d.length),c.current.indeterminate=!1,p("Selected "+d.length),n(`${e.name} ${t.target.checked?"selected":"unselected"}, selected ${d.length}`),d.length){case 0:c.current.checked=!1,p("None Selected"),n(`${e.name} deseleted, none selected`);break;case a.length:c.current.checked=!0,n(`${e.name} ${t.target.checked?"selected":"unselected"}, selected ${d.length}, all available items selected`);break;default:c.current.indeterminate=!0;break}}})}),l.map(t=>s.jsx("td",{className:t,children:e[t]}))]})})})]})]})};y.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Table",props:{caption:{required:!0,tsType:{name:"string"},description:"table's caption content"},columns:{required:!0,tsType:{name:"tuple",raw:"[]",elements:[]},description:"table's column content"},data:{required:!0,tsType:{name:"tuple",raw:"[]",elements:[]},description:"table's data content"},selectable:{required:!0,tsType:{name:"boolean"},description:"table's configuration for selectable rows"},downloadable:{required:!0,tsType:{name:"boolean"},description:"table's configuration for downloadable rows"}}};const{fn:$}=__STORYBOOK_MODULE_TEST__,I={title:"Example/Table",component:y,parameters:{layout:"centered"},tags:["autodocs"]},o={args:{caption:"Downloadable Items",columns:["Name","Device","Path","Status"],data:[{name:"smss.exe",device:"Mario",path:"\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",status:"scheduled"},{name:"netsh.exe",device:"Luigi",path:"\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe",status:"available"},{name:"uxtheme.dll",device:"Peach",path:"\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll",status:"available"},{name:"aries.sys",device:"Daisy",path:"\\Device\\HarddiskVolume1\\Windows\\System32\\aries.sys",status:"scheduled"},{name:"cryptbase.dll",device:"Yoshi",path:"\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll",status:"scheduled"},{name:"7za.exe",device:"Toad",path:"\\Device\\HarddiskVolume1\\temp\\7za.exe",status:"scheduled"}]}},m={args:{caption:"Downloadable Items",selectable:!0,downloadable:!0,columns:["Name","Device","Path","Status"],data:[{name:"smss.exe",device:"Mario",path:"\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",status:"scheduled"},{name:"netsh.exe",device:"Luigi",path:"\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe",status:"available"},{name:"uxtheme.dll",device:"Peach",path:"\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll",status:"available"},{name:"aries.sys",device:"Daisy",path:"\\Device\\HarddiskVolume1\\Windows\\System32\\aries.sys",status:"scheduled"},{name:"cryptbase.dll",device:"Yoshi",path:"\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll",status:"scheduled"},{name:"7za.exe",device:"Toad",path:"\\Device\\HarddiskVolume1\\temp\\7za.exe",status:"scheduled"}]}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Downloadable Items',
    columns: ["Name", "Device", "Path", "Status"],
    data: [{
      name: 'smss.exe',
      device: 'Mario',
      path: '\\\\Device\\\\HarddiskVolume2\\\\Windows\\\\System32\\\\smss.exe',
      status: 'scheduled'
    }, {
      name: 'netsh.exe',
      device: 'Luigi',
      path: '\\\\Device\\\\HarddiskVolume2\\\\Windows\\\\System32\\\\netsh.exe',
      status: 'available'
    }, {
      name: 'uxtheme.dll',
      device: 'Peach',
      path: '\\\\Device\\\\HarddiskVolume1\\\\Windows\\\\System32\\\\uxtheme.dll',
      status: 'available'
    }, {
      name: 'aries.sys',
      device: 'Daisy',
      path: '\\\\Device\\\\HarddiskVolume1\\\\Windows\\\\System32\\\\aries.sys',
      status: 'scheduled'
    }, {
      name: 'cryptbase.dll',
      device: 'Yoshi',
      path: '\\\\Device\\\\HarddiskVolume1\\\\Windows\\\\System32\\\\cryptbase.dll',
      status: 'scheduled'
    }, {
      name: '7za.exe',
      device: 'Toad',
      path: '\\\\Device\\\\HarddiskVolume1\\\\temp\\\\7za.exe',
      status: 'scheduled'
    }]
  }
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    caption: 'Downloadable Items',
    selectable: true,
    downloadable: true,
    columns: ["Name", "Device", "Path", "Status"],
    data: [{
      name: 'smss.exe',
      device: 'Mario',
      path: '\\\\Device\\\\HarddiskVolume2\\\\Windows\\\\System32\\\\smss.exe',
      status: 'scheduled'
    }, {
      name: 'netsh.exe',
      device: 'Luigi',
      path: '\\\\Device\\\\HarddiskVolume2\\\\Windows\\\\System32\\\\netsh.exe',
      status: 'available'
    }, {
      name: 'uxtheme.dll',
      device: 'Peach',
      path: '\\\\Device\\\\HarddiskVolume1\\\\Windows\\\\System32\\\\uxtheme.dll',
      status: 'available'
    }, {
      name: 'aries.sys',
      device: 'Daisy',
      path: '\\\\Device\\\\HarddiskVolume1\\\\Windows\\\\System32\\\\aries.sys',
      status: 'scheduled'
    }, {
      name: 'cryptbase.dll',
      device: 'Yoshi',
      path: '\\\\Device\\\\HarddiskVolume1\\\\Windows\\\\System32\\\\cryptbase.dll',
      status: 'scheduled'
    }, {
      name: '7za.exe',
      device: 'Toad',
      path: '\\\\Device\\\\HarddiskVolume1\\\\temp\\\\7za.exe',
      status: 'scheduled'
    }]
  }
}`,...m.parameters?.docs?.source}}};const A=["Primary","SelectDownloadableItems"];export{o as Primary,m as SelectDownloadableItems,A as __namedExportsOrder,I as default};
