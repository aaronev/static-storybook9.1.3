import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{e as r}from"./iframe-DZE1cArt.js";import{C as b}from"./Checkbox-Bjm_Sa27.js";import{A as f}from"./Anchor-CimZMMD7.js";import"./preload-helper-D9Z9MdNV.js";const y=({caption:x,columns:S,data:k,selectable:u,downloadable:D,...g})=>{const c=r.useRef(null),d=r.useRef(null),h=r.useRef(null),[w,p]=r.useState("None Selected"),i=e=>{h.current.innerText=e,setTimeout(()=>{h.current.innerText=""},500)},v=()=>[...c.current.querySelectorAll("[type=checkbox]:checked")];return t.jsxs("div",{children:[t.jsxs("div",{class:"toolbar",children:[t.jsx("span",{ref:h,class:"visually-hidden","aria-live":"polite"}),u&&t.jsx(b,{class:"select-all-comp",ref:d,nameLabel:"all available items",hintId:"select-all-hint",hint:w,label:"Select All Available Items",onClick:e=>{const l=[...c.current.querySelectorAll("[type=checkbox]:not(:disabled)")];l.forEach(a=>a.checked=e.target.checked),l.forEach(a=>{e.target.checked?a.closest("tr").classList.add("selected"):a.closest("tr").classList.remove("selected")});const s=e.target.checked?`Selected ${l.length}`:"None Selected";p(s),i(e.target.checked?`all available items selected, ${s}`:`all available items deselected, ${s}`)}}),D&&t.jsx(f,{class:"download-comp",label:"Download Selected Items",href:"/",download:!0,onClick:()=>{const e=v().map(a=>a.closest("TR")),l=e.map(a=>`{device: ${a.querySelector(".device").innerText}, path: ${a.querySelector(".path").innerText}}`),s=e.length<1?"No items selected!":JSON.stringify(l);alert(s)}})]}),t.jsxs("table",{ref:c,...g,children:[t.jsx("caption",{children:x}),t.jsx("thead",{children:t.jsxs("tr",{children:[u&&t.jsx("th",{class:"visually-hidden",children:"Select"}),S.map(e=>t.jsx("th",{children:e}))]})}),t.jsx("tbody",{children:k.map(e=>{const l=[];for(const s in e)l.push(s);return t.jsxs("tr",{children:[u&&t.jsx("td",{children:t.jsx(b,{nameLabel:e.name,ariaLabel:`Select ${e.name} to download`,disabled:e.status!=="available",onClick:s=>{const a=[...c.current.querySelectorAll("[type=checkbox]:not(:disabled)")],n=v();switch(s.target.checked?s.target.closest("tr").classList.add("selected"):s.target.closest("tr").classList.remove("selected"),d.current.indeterminate=!1,p("Selected "+n.length),i(`${e.name} ${s.target.checked?"selected":"unselected"}, selected ${n.length}`),n.length){case 0:d.current.checked=!1,p("None Selected"),i(`${e.name} deseleted, none selected`);break;case a.length:d.current.checked=!0,i(`${e.name} ${s.target.checked?"selected":"unselected"}, selected ${n.length}, all available items selected`);break;default:d.current.indeterminate=!0;break}}})}),l.map(s=>t.jsx("td",{className:s,children:e[s]}))]})})})]})]})};y.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Table",props:{caption:{required:!0,tsType:{name:"string"},description:"table's caption content"},columns:{required:!0,tsType:{name:"tuple",raw:"[]",elements:[]},description:"table's column content"},data:{required:!0,tsType:{name:"tuple",raw:"[]",elements:[]},description:"table's data content"},selectable:{required:!0,tsType:{name:"boolean"},description:"table's configuration for selectable rows"},downloadable:{required:!0,tsType:{name:"boolean"},description:"table's configuration for downloadable rows"}}};const{fn:$}=__STORYBOOK_MODULE_TEST__,I={title:"Example/Table",component:y,parameters:{layout:"centered"},tags:["autodocs"]},o={args:{caption:"Downloadable Items",columns:["Name","Device","Path","Status"],data:[{name:"smss.exe",device:"Mario",path:"\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",status:"scheduled"},{name:"netsh.exe",device:"Luigi",path:"\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe",status:"available"},{name:"uxtheme.dll",device:"Peach",path:"\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll",status:"available"},{name:"aries.sys",device:"Daisy",path:"\\Device\\HarddiskVolume1\\Windows\\System32\\aries.sys",status:"scheduled"},{name:"cryptbase.dll",device:"Yoshi",path:"\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll",status:"scheduled"},{name:"7za.exe",device:"Toad",path:"\\Device\\HarddiskVolume1\\temp\\7za.exe",status:"scheduled"}]}},m={args:{caption:"Downloadable Items",selectable:!0,downloadable:!0,columns:["Name","Device","Path","Status"],data:[{name:"smss.exe",device:"Mario",path:"\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",status:"scheduled"},{name:"netsh.exe",device:"Luigi",path:"\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe",status:"available"},{name:"uxtheme.dll",device:"Peach",path:"\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll",status:"available"},{name:"aries.sys",device:"Daisy",path:"\\Device\\HarddiskVolume1\\Windows\\System32\\aries.sys",status:"scheduled"},{name:"cryptbase.dll",device:"Yoshi",path:"\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll",status:"scheduled"},{name:"7za.exe",device:"Toad",path:"\\Device\\HarddiskVolume1\\temp\\7za.exe",status:"scheduled"}]}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const L=["Primary","SelectDownloadableItems"];export{o as Primary,m as SelectDownloadableItems,L as __namedExportsOrder,I as default};
