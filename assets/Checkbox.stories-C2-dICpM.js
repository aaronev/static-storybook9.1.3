import{C as t}from"./Checkbox-BoQS7S3c.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-BzRdI-PB.js";import"./preload-helper-D9Z9MdNV.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,d={title:"Example/Checkbox",component:t,parameters:{layout:"centered"},tags:["autodocs"],args:{onClick:i()}},e={args:{hintId:"select-test-id",hint:"clicking will select or deselect checkbox",label:"Select",invisibleLabel:!1}},l={args:{hintId:"select-invisible-test-id",hint:"clicking will select or deselect checkbox",label:"visually hidden select label",invisibleLabel:!0}},s={args:{hintId:"select-disabled-test-id",hint:"clicking will select or deselect checkbox",label:"Select",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    hintId: "select-test-id",
    hint: "clicking will select or deselect checkbox",
    label: 'Select',
    invisibleLabel: false
  }
}`,...e.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    hintId: "select-invisible-test-id",
    hint: "clicking will select or deselect checkbox",
    label: 'visually hidden select label',
    invisibleLabel: true
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    hintId: "select-disabled-test-id",
    hint: "clicking will select or deselect checkbox",
    label: 'Select',
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};const n=["Primary","InvisibleLabel","Disabled"];export{s as Disabled,l as InvisibleLabel,e as Primary,n as __namedExportsOrder,d as default};
