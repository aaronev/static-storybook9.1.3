import{A as a}from"./Anchor-Cb8nufvb.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-D6DL8evm.js";import"./preload-helper-D9Z9MdNV.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,s={title:"Example/Anchor",component:a,parameters:{layout:"centered"},tags:["autodocs"]},o={args:{href:"https://www.google.com",label:"google",target:"_blank",ariaLabel:"google link",hintId:"test-id",hint:"this link will redirect users to google.com"}},e={args:{href:"/",onClick:()=>{alert("downloading...")},label:"Download",download:!0,ariaLabel:"download xyz",hintId:"test-download-id",hint:"this will trigger alert and open dialog"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    href: "https://www.google.com",
    label: 'google',
    target: "_blank",
    ariaLabel: "google link",
    hintId: "test-id",
    hint: "this link will redirect users to google.com"
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    href: "/",
    onClick: () => {
      alert('downloading...');
    },
    label: 'Download',
    download: true,
    ariaLabel: "download xyz",
    hintId: "test-download-id",
    hint: "this will trigger alert and open dialog"
  }
}`,...e.parameters?.docs?.source}}};const d=["Primary","Downloadable"];export{e as Downloadable,o as Primary,d as __namedExportsOrder,s as default};
