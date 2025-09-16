import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{e as o}from"./iframe-DPIhYa92.js";import{C as x}from"./Checkbox-SAsi61FP.js";import{A as w}from"./Anchor-iMHpfcpA.js";import"./preload-helper-D9Z9MdNV.js";const y=({caption:v,columns:k,data:S,selectable:c,downloadable:D,...g})=>{const i=o.useRef(null),d=o.useRef(null),h=o.useRef(null),[f,p]=o.useState("No items selected"),n=e=>{h.current.innerText=e,setTimeout(()=>{h.current.innerText=""},500)},b=()=>[...i.current.querySelectorAll("[type=checkbox]:checked")];return s.jsxs("div",{children:[s.jsx("h1",{class:"visual-caption","aria-hidden":"true",children:v}),s.jsxs("div",{class:`${c?"selectable-table":""} table-container`,children:[s.jsxs("div",{class:"toolbar",children:[s.jsx("span",{ref:h,class:"visually-hidden","aria-live":"polite"}),c&&s.jsx(x,{class:"select-all-comp",ref:d,hintId:"select-all-hint",hint:f,label:"Select All Available Items",onClick:e=>{const l=[...i.current.querySelectorAll("[type=checkbox]:not(:disabled)")];l.forEach(a=>a.checked=e.target.checked),l.forEach(a=>{e.target.checked?a.closest("tr").classList.add("selected"):a.closest("tr").classList.remove("selected")});const t=e.target.checked?`${l.length} items selected`:"No items selected";p(t),n(e.target.checked?`all available items selected, ${t}`:`all available items not selected, ${t}`)}}),D&&s.jsx(w,{tabindex:"0",class:"download-comp",label:"Download Selected Items",href:"#/",download:!0,onClick:()=>{const e=b().map(a=>a.closest("TR")),l=e.map(a=>`{device: ${a.querySelector(".device").innerText}, path: ${a.querySelector(".path").innerText}}`),t=e.length<1?"No items selected!":JSON.stringify(l);alert(t)}})]}),s.jsxs("table",{ref:i,...g,children:[s.jsx("caption",{children:s.jsx("span",{class:"visually-hidden",children:v})}),s.jsx("thead",{children:s.jsxs("tr",{children:[c&&s.jsx("th",{children:s.jsx("div",{class:"visually-hidden",children:"Select Row"})}),k.map(e=>s.jsx("th",{children:e}))]})}),s.jsx("tbody",{children:S.map(e=>{const l=[];for(const t in e)l.push(t);return s.jsxs("tr",{class:e.status!=="available"?"disabled":"",onClick:t=>{t.target.type!=="checkbox"&&t.target.closest("tr").querySelector("[type=checkbox]").click()},children:[c&&s.jsx("td",{children:s.jsx(x,{title:e.status!=="available"?"Disabled Selection":`Select ${e.name} to download`,ariaLabel:`Select ${e.name} to download`,disabled:e.status!=="available",onClick:t=>{const a=[...i.current.querySelectorAll("[type=checkbox]:not(:disabled)")],r=b();switch(t.target.checked?t.target.closest("tr").classList.add("selected"):t.target.closest("tr").classList.remove("selected"),d.current.indeterminate=!1,p(`${r.length} items selected`),n(`${e.name} ${t.target.checked?"selected":"unselected"}, ${r.length} items selected`),r.length){case 0:d.current.checked=!1,p("No items selected"),n(`${e.name} not selected, No items selected`);break;case a.length:d.current.checked=!0,n(`${e.name} ${t.target.checked?"selected":"unselected"}, ${r.length} items selected, all available items selected`);break;default:d.current.indeterminate=!0;break}}})}),l.map(t=>s.jsx("td",{className:t,children:s.jsxs("div",{class:e[t]==="available"?"available":"",children:[e[t]==="available"&&s.jsx("span",{class:"available-dot","aria-hidden":"true",children:"•"}),s.jsx("span",{children:e[t]})]})}))]})})})]})]})]})};y.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Table",props:{caption:{required:!0,tsType:{name:"string"},description:"table's caption content"},columns:{required:!0,tsType:{name:"tuple",raw:"[]",elements:[]},description:"table's column content"},data:{required:!0,tsType:{name:"tuple",raw:"[]",elements:[]},description:"table's data content"},selectable:{required:!0,tsType:{name:"boolean"},description:"table's configuration for selectable rows"},downloadable:{required:!0,tsType:{name:"boolean"},description:"table's configuration for downloadable rows"}}};const $={title:"Example/Table",component:y,parameters:{layout:"centered"},tags:["autodocs"]},m={args:{caption:"Downloadable Items",columns:["Name","Device","Path","Status"],data:[{name:"smss.exe",device:"Mario",path:"\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",status:"scheduled"},{name:"netsh.exe",device:"Luigi",path:"\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe",status:"available"},{name:"uxtheme.dll",device:"Peach",path:"\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll",status:"available"},{name:"aries.sys",device:"Daisy",path:"\\Device\\HarddiskVolume1\\Windows\\System32\\aries.sys",status:"scheduled"},{name:"cryptbase.dll",device:"Yoshi",path:"\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll",status:"scheduled"},{name:"7za.exe",device:"Toad",path:"\\Device\\HarddiskVolume1\\temp\\7za.exe",status:"scheduled"}]}},u={args:{caption:"Downloadable Items",selectable:!0,downloadable:!0,columns:["Name","Device","Path","Status"],data:[{name:"smss.exe",device:"Mario",path:"\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",status:"scheduled"},{name:"netsh.exe",device:"Luigi",path:"\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe",status:"available"},{name:"uxtheme.dll",device:"Peach",path:"\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll",status:"available"},{name:"aries.sys",device:"Daisy",path:"\\Device\\HarddiskVolume1\\Windows\\System32\\aries.sys",status:"scheduled"},{name:"cryptbase.dll",device:"Yoshi",path:"\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll",status:"scheduled"},{name:"7za.exe",device:"Toad",path:"\\Device\\HarddiskVolume1\\temp\\7za.exe",status:"scheduled"}]}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const I=["Primary","SelectDownloadableItems"];export{m as Primary,u as SelectDownloadableItems,I as __namedExportsOrder,$ as default};
