import{A as r}from"./Anchor-0FI4_TYu.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-DAlNg_Ja.js";import"./preload-helper-D9Z9MdNV.js";const{fn:a}=__STORYBOOK_MODULE_TEST__,n={title:"Example/Anchor",component:r,parameters:{layout:"centered"},tags:["autodocs"],args:{onClick:a()}},o={args:{href:"https://www.google.com",label:"google",target:"_blank",ariaLabel:"google link",hintId:"test-id",hint:"this link will redirect users to google.com"}},e={args:{href:"/",onClick:()=>{alert("downloading...")},label:"Download",download:!0,ariaLabel:"download xyz",hintId:"test-id",hint:"this link will redirect users to google.com"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    hintId: "test-id",
    hint: "this link will redirect users to google.com"
  }
}`,...e.parameters?.docs?.source}}};const d=["Primary","Downloadable"];export{e as Downloadable,o as Primary,d as __namedExportsOrder,n as default};
