import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{e as o}from"./iframe-dPAlE3vh.js";import{C as b}from"./Checkbox-EBDV_YDL.js";import{A as f}from"./Anchor-6D8NbgBw.js";import"./preload-helper-D9Z9MdNV.js";const y=({caption:x,columns:k,data:S,selectable:d,downloadable:D,...g})=>{const i=o.useRef(null),c=o.useRef(null),h=o.useRef(null),[w,p]=o.useState("No items selected"),r=e=>{h.current.innerText=e,setTimeout(()=>{h.current.innerText=""},500)},v=()=>[...i.current.querySelectorAll("[type=checkbox]:checked")];return t.jsxs("div",{class:d?"selectable-table":"",children:[t.jsxs("div",{class:"toolbar",children:[t.jsx("span",{ref:h,class:"visually-hidden","aria-live":"polite"}),d&&t.jsx(b,{class:"select-all-comp",ref:c,hintId:"select-all-hint",hint:w,label:"Select All Available Items",onClick:e=>{const l=[...i.current.querySelectorAll("[type=checkbox]:not(:disabled)")];l.forEach(a=>a.checked=e.target.checked),l.forEach(a=>{e.target.checked?a.closest("tr").classList.add("selected"):a.closest("tr").classList.remove("selected")});const s=e.target.checked?`${l.length} items selected`:"No items selected";p(s),r(e.target.checked?`all available items selected, ${s}`:`all available items not selected, ${s}`)}}),D&&t.jsx(f,{tabindex:"0",class:"download-comp",label:"Download Selected Items",href:"/",download:!0,onClick:()=>{const e=v().map(a=>a.closest("TR")),l=e.map(a=>`{device: ${a.querySelector(".device").innerText}, path: ${a.querySelector(".path").innerText}}`),s=e.length<1?"No items selected!":JSON.stringify(l);alert(s)}})]}),t.jsxs("table",{ref:i,...g,children:[t.jsx("caption",{children:x}),t.jsx("thead",{children:t.jsxs("tr",{children:[d&&t.jsx("th",{class:"visually-hidden",children:"Select"}),k.map(e=>t.jsx("th",{children:e}))]})}),t.jsx("tbody",{children:S.map(e=>{const l=[];for(const s in e)l.push(s);return t.jsxs("tr",{class:e.status!=="available"?"disabled":"",onClick:s=>{s.target.type!=="checkbox"&&s.target.closest("tr").querySelector("[type=checkbox]").click()},children:[d&&t.jsx("td",{children:t.jsx(b,{title:e.status!=="available"?"Disabled Selection":`Select ${e.name} to download`,ariaLabel:`Select ${e.name} to download`,disabled:e.status!=="available",onClick:s=>{const a=[...i.current.querySelectorAll("[type=checkbox]:not(:disabled)")],n=v();switch(s.target.checked?s.target.closest("tr").classList.add("selected"):s.target.closest("tr").classList.remove("selected"),c.current.indeterminate=!1,p("Selected "+n.length),r(`${e.name} ${s.target.checked?"selected":"unselected"}, ${n.length} items selected`),n.length){case 0:c.current.checked=!1,p("No items selected"),r(`${e.name} not selected, No items selected`);break;case a.length:c.current.checked=!0,r(`${e.name} ${s.target.checked?"selected":"unselected"}, ${n.length} items selected, all available items selected`);break;default:c.current.indeterminate=!0;break}}})}),l.map(s=>t.jsx("td",{className:s,children:e[s]}))]})})})]})]})};y.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Table",props:{caption:{required:!0,tsType:{name:"string"},description:"table's caption content"},columns:{required:!0,tsType:{name:"tuple",raw:"[]",elements:[]},description:"table's column content"},data:{required:!0,tsType:{name:"tuple",raw:"[]",elements:[]},description:"table's data content"},selectable:{required:!0,tsType:{name:"boolean"},description:"table's configuration for selectable rows"},downloadable:{required:!0,tsType:{name:"boolean"},description:"table's configuration for downloadable rows"}}};const $={title:"Example/Table",component:y,parameters:{layout:"centered"},tags:["autodocs"]},m={args:{caption:"Downloadable Items",columns:["Name","Device","Path","Status"],data:[{name:"smss.exe",device:"Mario",path:"\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",status:"scheduled"},{name:"netsh.exe",device:"Luigi",path:"\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe",status:"available"},{name:"uxtheme.dll",device:"Peach",path:"\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll",status:"available"},{name:"aries.sys",device:"Daisy",path:"\\Device\\HarddiskVolume1\\Windows\\System32\\aries.sys",status:"scheduled"},{name:"cryptbase.dll",device:"Yoshi",path:"\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll",status:"scheduled"},{name:"7za.exe",device:"Toad",path:"\\Device\\HarddiskVolume1\\temp\\7za.exe",status:"scheduled"}]}},u={args:{caption:"Downloadable Items",selectable:!0,downloadable:!0,columns:["Name","Device","Path","Status"],data:[{name:"smss.exe",device:"Mario",path:"\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",status:"scheduled"},{name:"netsh.exe",device:"Luigi",path:"\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe",status:"available"},{name:"uxtheme.dll",device:"Peach",path:"\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll",status:"available"},{name:"aries.sys",device:"Daisy",path:"\\Device\\HarddiskVolume1\\Windows\\System32\\aries.sys",status:"scheduled"},{name:"cryptbase.dll",device:"Yoshi",path:"\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll",status:"scheduled"},{name:"7za.exe",device:"Toad",path:"\\Device\\HarddiskVolume1\\temp\\7za.exe",status:"scheduled"}]}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
