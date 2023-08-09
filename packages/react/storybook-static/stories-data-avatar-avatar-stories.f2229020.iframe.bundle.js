"use strict";(self.webpackChunk_envio_ui_react=self.webpackChunk_envio_ui_react||[]).push([[8949],{"./src/stories/data/avatar/avatar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithIcons:()=>WithIcons,WithImage:()=>WithImage,WithInitialName:()=>WithInitialName,WithNotificationBadge:()=>WithNotificationBadge,WithPresence:()=>WithPresence,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var _WithInitialName$para,_WithInitialName$para2,_WithInitialName$para3,_WithImage$parameters,_WithImage$parameters2,_WithImage$parameters3,_WithIcons$parameters,_WithIcons$parameters2,_WithIcons$parameters3,_WithPresence$paramet,_WithPresence$paramet2,_WithPresence$paramet3,_WithNotificationBadg,_WithNotificationBadg2,_WithNotificationBadg3,_envio_ui_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../icons/src/person/fill/IconPerson.tsx"),_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Data & Display/Avatar",argTypes:{size:{control:"number",type:{name:"number",required:!0},description:"Size of the avatar",table:{type:{summary:"number",min:32},defaultValue:{summary:"50"}}},variant:{options:["primary","secondary","success","warning"],control:"select",type:{name:"select",required:!1},description:"Variant of the avatar ",table:{type:{summary:"primary | secondary | success | warning"},defaultValue:{summary:"primary"}}},name:{table:{type:{summary:"string"},defaultValue:{summary:"-"}}},src:{table:{type:{summary:"string"},defaultValue:{summary:"-"}}},notificationBadge:{table:{type:{summary:"number"},defaultValue:{summary:"-"}}}}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.qE,{...args});Template.displayName="Template";const WithInitialName=Template.bind({});WithInitialName.args={size:50,variant:"primary",name:"Lorem Ipsum"};const WithImage=Template.bind({});WithImage.args={size:50,name:"Lorem Ipsum",src:"https://s3-ap-southeast-1.amazonaws.com/envio.co.id/production-files/1092hbc0c059h6c.png?v=103024224441203141333411220"};const WithIcons=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.qE,{icon:_envio_ui_icons__WEBPACK_IMPORTED_MODULE_3__.Z,...args});WithIcons.displayName="WithIcons",WithIcons.args={size:50,name:"Lorem Ipsum",color:"#fff"};const WithPresence=({name,...args})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.qE,{name,presence:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.xu,{width:"100%",height:"100%",backgroundColor:"red07"}),...args});WithPresence.displayName="WithPresence",WithPresence.args={size:50,name:"Lorem Ipsum",src:"https://s3-ap-southeast-1.amazonaws.com/envio.co.id/production-files/1092hbc0c059h6c.png?v=103024224441203141333411220"};const WithNotificationBadge=({name,notificationBadge,...args})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.qE,{name,notificationBadge,...args});WithNotificationBadge.displayName="WithNotificationBadge",WithNotificationBadge.args={size:50,name:"Lorem Ipsum",src:"https://s3-ap-southeast-1.amazonaws.com/envio.co.id/production-files/1092hbc0c059h6c.png?v=103024224441203141333411220",notificationBadge:99},WithInitialName.parameters={...WithInitialName.parameters,docs:{...null===(_WithInitialName$para=WithInitialName.parameters)||void 0===_WithInitialName$para?void 0:_WithInitialName$para.docs,source:{originalSource:"args => <Avatar {...args} />",...null===(_WithInitialName$para2=WithInitialName.parameters)||void 0===_WithInitialName$para2||null===(_WithInitialName$para3=_WithInitialName$para2.docs)||void 0===_WithInitialName$para3?void 0:_WithInitialName$para3.source}}},WithImage.parameters={...WithImage.parameters,docs:{...null===(_WithImage$parameters=WithImage.parameters)||void 0===_WithImage$parameters?void 0:_WithImage$parameters.docs,source:{originalSource:"args => <Avatar {...args} />",...null===(_WithImage$parameters2=WithImage.parameters)||void 0===_WithImage$parameters2||null===(_WithImage$parameters3=_WithImage$parameters2.docs)||void 0===_WithImage$parameters3?void 0:_WithImage$parameters3.source}}},WithIcons.parameters={...WithIcons.parameters,docs:{...null===(_WithIcons$parameters=WithIcons.parameters)||void 0===_WithIcons$parameters?void 0:_WithIcons$parameters.docs,source:{originalSource:"args => <Avatar icon={IconPerson} {...args} />",...null===(_WithIcons$parameters2=WithIcons.parameters)||void 0===_WithIcons$parameters2||null===(_WithIcons$parameters3=_WithIcons$parameters2.docs)||void 0===_WithIcons$parameters3?void 0:_WithIcons$parameters3.source}}},WithPresence.parameters={...WithPresence.parameters,docs:{...null===(_WithPresence$paramet=WithPresence.parameters)||void 0===_WithPresence$paramet?void 0:_WithPresence$paramet.docs,source:{originalSource:'({\n  name,\n  ...args\n}) => {\n  return <Avatar name={name} presence={<Box width="100%" height="100%" backgroundColor={"red07"} />} {...args} />;\n}',...null===(_WithPresence$paramet2=WithPresence.parameters)||void 0===_WithPresence$paramet2||null===(_WithPresence$paramet3=_WithPresence$paramet2.docs)||void 0===_WithPresence$paramet3?void 0:_WithPresence$paramet3.source}}},WithNotificationBadge.parameters={...WithNotificationBadge.parameters,docs:{...null===(_WithNotificationBadg=WithNotificationBadge.parameters)||void 0===_WithNotificationBadg?void 0:_WithNotificationBadg.docs,source:{originalSource:"({\n  name,\n  notificationBadge,\n  ...args\n}) => {\n  return <Avatar name={name} notificationBadge={notificationBadge} {...args} />;\n}",...null===(_WithNotificationBadg2=WithNotificationBadge.parameters)||void 0===_WithNotificationBadg2||null===(_WithNotificationBadg3=_WithNotificationBadg2.docs)||void 0===_WithNotificationBadg3?void 0:_WithNotificationBadg3.source}}};const __namedExportsOrder=["WithInitialName","WithImage","WithIcons","WithPresence","WithNotificationBadge"]},"../icons/src/person/fill/IconPerson.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var _utils_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../icons/src/utils/types.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const IconPerson=({size,fill,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{width:size,height:size,viewBox:"0 0 24 24",fill:"none",...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 7C16 9.206 14.206 11 12 11C9.794 11 8 9.206 8 7C8 4.794 9.794 3 12 3C14.206 3 16 4.794 16 7ZM19 20C19 20.552 18.553 21 18 21H6C5.447 21 5 20.552 5 20C5 16.14 8.141 13 12 13C15.859 13 19 16.14 19 20Z",fill})});IconPerson.displayName="IconPerson",IconPerson.defaultProps={..._utils_types__WEBPACK_IMPORTED_MODULE_2__.f};const __WEBPACK_DEFAULT_EXPORT__=IconPerson;try{IconPerson.displayName="IconPerson",IconPerson.__docgenInfo={description:"",displayName:"IconPerson",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../icons/src/person/fill/IconPerson.tsx#IconPerson"]={docgenInfo:IconPerson.__docgenInfo,name:"IconPerson",path:"../icons/src/person/fill/IconPerson.tsx#IconPerson"})}catch(__react_docgen_typescript_loader_error){}}}]);