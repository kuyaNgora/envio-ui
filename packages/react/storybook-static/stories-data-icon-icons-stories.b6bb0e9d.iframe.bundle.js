"use strict";(self.webpackChunk_envio_ui_react=self.webpackChunk_envio_ui_react||[]).push([[725],{"./src/stories/data/icon/icons.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Alert:()=>Alert,Arrow:()=>Arrow,Bussiness:()=>Bussiness,Coding:()=>Coding,Document:()=>Document,Editing:()=>Editing,MediaCommunication:()=>MediaCommunication,Medical:()=>Medical,Menu:()=>Menu,Person:()=>Person,Security:()=>Security,Shapes:()=>Shapes,Social:()=>Social,__namedExportsOrder:()=>__namedExportsOrder,default:()=>icons_stories});__webpack_require__("../../node_modules/react/index.js");var storybook=__webpack_require__("./src/utils/storybook/index.tsx");var components=__webpack_require__("./src/components/index.ts"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const IconGrid=({children})=>(0,jsx_runtime.jsx)(components.xu,{mt:"lg",mb:"xl",display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(calc(1116px / 12 - 24px), 1fr))",gridGap:"10px",p:"xl",backgroundColor:"greylight02",children});IconGrid.displayName="IconGrid";const IconDetail=({name,children})=>{const{addToast}=(0,components.pm)(),copyText=text=>{const success=function toClipboard(text){const ta=document.createElement("textarea");ta.value=text,ta.cols=1,ta.rows=1,ta.style.color="transparent",ta.style.border="none",document.body.appendChild(ta),ta.select();let success=!1;try{success=document.execCommand("copy")}catch(err){success=!1}return document.body.removeChild(ta),success}(text);success&&addToast({status:"success",message:`Successfully copied \`${text}\` to clipboard.`,dismissible:!0,dismissAfter:5e3})};return(0,jsx_runtime.jsx)(components.kG,{onClick:()=>copyText(name),children:(0,jsx_runtime.jsx)(components.Zb,{elevation:1,width:"100%",children:(0,jsx_runtime.jsx)(components.xu,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",height:71,p:"sm",border:"1px solid #ddd",borderRadius:"8px",children:(0,jsx_runtime.jsx)(components.xu,{width:24,height:24,children})})})})};var _Alert$parameters,_Alert$parameters2,_Alert$parameters2$do,_Arrow$parameters,_Arrow$parameters2,_Arrow$parameters2$do,_Bussiness$parameters,_Bussiness$parameters2,_Bussiness$parameters3,_Coding$parameters,_Coding$parameters2,_Coding$parameters2$d,_MediaCommunication$p,_MediaCommunication$p2,_MediaCommunication$p3,_Editing$parameters,_Editing$parameters2,_Editing$parameters2$,_Document$parameters,_Document$parameters2,_Document$parameters3,_Medical$parameters,_Medical$parameters2,_Medical$parameters2$,_Menu$parameters,_Menu$parameters2,_Menu$parameters2$doc,_Person$parameters,_Person$parameters2,_Person$parameters2$d,_Security$parameters,_Security$parameters2,_Security$parameters3,_Shapes$parameters,_Shapes$parameters2,_Shapes$parameters2$d,_Social$parameters,_Social$parameters2,_Social$parameters2$d;IconDetail.displayName="IconDetail";const icons_stories={title:"Components/Data & Display/Icons",parameters:{controls:{disabled:!0}}},Alert=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(IconGrid,{name:"",children:storybook.ss.alert.outline.map((({name,children})=>(0,jsx_runtime.jsx)(IconDetail,{name,children},name)))}),(0,jsx_runtime.jsx)(IconGrid,{name:"",children:storybook.ss.alert.fill.map((({name,children})=>(0,jsx_runtime.jsx)(IconDetail,{name,children},name)))})]}),Arrow=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(IconGrid,{name:"",children:storybook.ss.arrow.outline.map((({name,children})=>(0,jsx_runtime.jsx)(IconDetail,{name,children},name)))}),(0,jsx_runtime.jsx)(IconGrid,{name:"",children:storybook.ss.arrow.fill.map((({name,children})=>(0,jsx_runtime.jsx)(IconDetail,{name,children},name)))})]}),Bussiness=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(IconGrid,{name:"",children:storybook.ss.bussiness.outline.map((({name,children})=>(0,jsx_runtime.jsx)(IconDetail,{name,children},name)))}),(0,jsx_runtime.jsx)(IconGrid,{name:"",children:storybook.ss.bussiness.fill.map((({name,children})=>(0,jsx_runtime.jsx)(IconDetail,{name,children},name)))})]}),Coding=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(IconGrid,{name:"",children:storybook.ss.coding.outline.map((({name,children})=>(0,jsx_runtime.jsx)(IconDetail,{name,children},name)))}),(0,jsx_runtime.jsx)(IconGrid,{name:"",children:storybook.ss.coding.fill.map((({name,children})=>(0,jsx_runtime.jsx)(IconDetail,{name,children},name)))})]}),MediaCommunication=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(IconGrid,{name:"",children:storybook.ss.communication.outline.map((({name,children})=>(0,jsx_runtime.jsx)(IconDetail,{name,children},name)))}),(0,jsx_runtime.jsx)(IconGrid,{name:"",children:storybook.ss.communication.fill.map((({name,children})=>(0,jsx_runtime.jsx)(IconDetail,{name,children},name)))})]}),Editing=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(IconGrid,{name:"",children:storybook.ss.editing.outline.map((({name,children})=>(0,jsx_runtime.jsx)(IconDetail,{name,children},name)))}),(0,jsx_runtime.jsx)(IconGrid,{name:"",children:storybook.ss.editing.fill.map((({name,children})=>(0,jsx_runtime.jsx)(IconDetail,{name,children},name)))})]}),Document=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(IconGrid,{name:"",children:storybook.ss.document.outline.map((({name,children})=>(0,jsx_runtime.jsx)(IconDetail,{name,children},name)))}),(0,jsx_runtime.jsx)(IconGrid,{name:"",children:storybook.ss.document.fill.map((({name,children})=>(0,jsx_runtime.jsx)(IconDetail,{name,children},name)))})]}),Medical=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(IconGrid,{name:"",children:storybook.ss.medical.outline.map((({name,children})=>(0,jsx_runtime.jsx)(IconDetail,{name,children},name)))}),(0,jsx_runtime.jsx)(IconGrid,{name:"",children:storybook.ss.medical.fill.map((({name,children})=>(0,jsx_runtime.jsx)(IconDetail,{name,children},name)))})]}),Menu=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(IconGrid,{name:"",children:storybook.ss.menu.outline.map((({name,children})=>(0,jsx_runtime.jsx)(IconDetail,{name,children},name)))}),(0,jsx_runtime.jsx)(IconGrid,{name:"",children:storybook.ss.menu.fill.map((({name,children})=>(0,jsx_runtime.jsx)(IconDetail,{name,children},name)))})]}),Person=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(IconGrid,{name:"",children:storybook.ss.person.outline.map((({name,children})=>(0,jsx_runtime.jsx)(IconDetail,{name,children},name)))}),(0,jsx_runtime.jsx)(IconGrid,{name:"",children:storybook.ss.person.fill.map((({name,children})=>(0,jsx_runtime.jsx)(IconDetail,{name,children},name)))})]}),Security=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(IconGrid,{name:"",children:storybook.ss.security.outline.map((({name,children})=>(0,jsx_runtime.jsx)(IconDetail,{name,children},name)))}),(0,jsx_runtime.jsx)(IconGrid,{name:"",children:storybook.ss.security.fill.map((({name,children})=>(0,jsx_runtime.jsx)(IconDetail,{name,children},name)))})]}),Shapes=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(IconGrid,{name:"",children:storybook.ss.shapes.outline.map((({name,children})=>(0,jsx_runtime.jsx)(IconDetail,{name,children},name)))}),(0,jsx_runtime.jsx)(IconGrid,{name:"",children:storybook.ss.shapes.fill.map((({name,children})=>(0,jsx_runtime.jsx)(IconDetail,{name,children},name)))})]}),Social=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(IconGrid,{name:"",children:storybook.ss.social.outline.map((({name,children})=>(0,jsx_runtime.jsx)(IconDetail,{name,children},name)))}),(0,jsx_runtime.jsx)(IconGrid,{name:"",children:storybook.ss.social.fill.map((({name,children})=>(0,jsx_runtime.jsx)(IconDetail,{name,children},name)))})]});Alert.parameters={...Alert.parameters,docs:{...null===(_Alert$parameters=Alert.parameters)||void 0===_Alert$parameters?void 0:_Alert$parameters.docs,source:{originalSource:'() => <>\r\n    <IconGrid name="">\r\n      {IconMap.alert.outline.map(({\n      name,\n      children\n    }) => <IconDetail key={name} name={name}>\r\n          {children}\r\n        </IconDetail>)}\r\n    </IconGrid>\r\n\r\n    <IconGrid name="">\r\n      {IconMap.alert.fill.map(({\n      name,\n      children\n    }) => <IconDetail key={name} name={name}>\r\n          {children}\r\n        </IconDetail>)}\r\n    </IconGrid>\r\n  </>',...null===(_Alert$parameters2=Alert.parameters)||void 0===_Alert$parameters2||null===(_Alert$parameters2$do=_Alert$parameters2.docs)||void 0===_Alert$parameters2$do?void 0:_Alert$parameters2$do.source}}},Arrow.parameters={...Arrow.parameters,docs:{...null===(_Arrow$parameters=Arrow.parameters)||void 0===_Arrow$parameters?void 0:_Arrow$parameters.docs,source:{originalSource:'() => <>\r\n    <IconGrid name="">\r\n      {IconMap.arrow.outline.map(({\n      name,\n      children\n    }) => <IconDetail key={name} name={name}>\r\n          {children}\r\n        </IconDetail>)}\r\n    </IconGrid>\r\n\r\n    <IconGrid name="">\r\n      {IconMap.arrow.fill.map(({\n      name,\n      children\n    }) => <IconDetail key={name} name={name}>\r\n          {children}\r\n        </IconDetail>)}\r\n    </IconGrid>\r\n  </>',...null===(_Arrow$parameters2=Arrow.parameters)||void 0===_Arrow$parameters2||null===(_Arrow$parameters2$do=_Arrow$parameters2.docs)||void 0===_Arrow$parameters2$do?void 0:_Arrow$parameters2$do.source}}},Bussiness.parameters={...Bussiness.parameters,docs:{...null===(_Bussiness$parameters=Bussiness.parameters)||void 0===_Bussiness$parameters?void 0:_Bussiness$parameters.docs,source:{originalSource:'() => <>\r\n    <IconGrid name="">\r\n      {IconMap.bussiness.outline.map(({\n      name,\n      children\n    }) => <IconDetail key={name} name={name}>\r\n          {children}\r\n        </IconDetail>)}\r\n    </IconGrid>\r\n\r\n    <IconGrid name="">\r\n      {IconMap.bussiness.fill.map(({\n      name,\n      children\n    }) => <IconDetail key={name} name={name}>\r\n          {children}\r\n        </IconDetail>)}\r\n    </IconGrid>\r\n  </>',...null===(_Bussiness$parameters2=Bussiness.parameters)||void 0===_Bussiness$parameters2||null===(_Bussiness$parameters3=_Bussiness$parameters2.docs)||void 0===_Bussiness$parameters3?void 0:_Bussiness$parameters3.source}}},Coding.parameters={...Coding.parameters,docs:{...null===(_Coding$parameters=Coding.parameters)||void 0===_Coding$parameters?void 0:_Coding$parameters.docs,source:{originalSource:'() => <>\r\n    <IconGrid name="">\r\n      {IconMap.coding.outline.map(({\n      name,\n      children\n    }) => <IconDetail key={name} name={name}>\r\n          {children}\r\n        </IconDetail>)}\r\n    </IconGrid>\r\n\r\n    <IconGrid name="">\r\n      {IconMap.coding.fill.map(({\n      name,\n      children\n    }) => <IconDetail key={name} name={name}>\r\n          {children}\r\n        </IconDetail>)}\r\n    </IconGrid>\r\n  </>',...null===(_Coding$parameters2=Coding.parameters)||void 0===_Coding$parameters2||null===(_Coding$parameters2$d=_Coding$parameters2.docs)||void 0===_Coding$parameters2$d?void 0:_Coding$parameters2$d.source}}},MediaCommunication.parameters={...MediaCommunication.parameters,docs:{...null===(_MediaCommunication$p=MediaCommunication.parameters)||void 0===_MediaCommunication$p?void 0:_MediaCommunication$p.docs,source:{originalSource:'() => <>\r\n    <IconGrid name="">\r\n      {IconMap.communication.outline.map(({\n      name,\n      children\n    }) => <IconDetail key={name} name={name}>\r\n          {children}\r\n        </IconDetail>)}\r\n    </IconGrid>\r\n    <IconGrid name="">\r\n      {IconMap.communication.fill.map(({\n      name,\n      children\n    }) => <IconDetail key={name} name={name}>\r\n          {children}\r\n        </IconDetail>)}\r\n    </IconGrid>\r\n  </>',...null===(_MediaCommunication$p2=MediaCommunication.parameters)||void 0===_MediaCommunication$p2||null===(_MediaCommunication$p3=_MediaCommunication$p2.docs)||void 0===_MediaCommunication$p3?void 0:_MediaCommunication$p3.source}}},Editing.parameters={...Editing.parameters,docs:{...null===(_Editing$parameters=Editing.parameters)||void 0===_Editing$parameters?void 0:_Editing$parameters.docs,source:{originalSource:'() => <>\r\n    <IconGrid name="">\r\n      {IconMap.editing.outline.map(({\n      name,\n      children\n    }) => <IconDetail key={name} name={name}>\r\n          {children}\r\n        </IconDetail>)}\r\n    </IconGrid>\r\n\r\n    <IconGrid name="">\r\n      {IconMap.editing.fill.map(({\n      name,\n      children\n    }) => <IconDetail key={name} name={name}>\r\n          {children}\r\n        </IconDetail>)}\r\n    </IconGrid>\r\n  </>',...null===(_Editing$parameters2=Editing.parameters)||void 0===_Editing$parameters2||null===(_Editing$parameters2$=_Editing$parameters2.docs)||void 0===_Editing$parameters2$?void 0:_Editing$parameters2$.source}}},Document.parameters={...Document.parameters,docs:{...null===(_Document$parameters=Document.parameters)||void 0===_Document$parameters?void 0:_Document$parameters.docs,source:{originalSource:'() => <>\r\n    <IconGrid name="">\r\n      {IconMap.document.outline.map(({\n      name,\n      children\n    }) => <IconDetail key={name} name={name}>\r\n          {children}\r\n        </IconDetail>)}\r\n    </IconGrid>\r\n\r\n    <IconGrid name="">\r\n      {IconMap.document.fill.map(({\n      name,\n      children\n    }) => <IconDetail key={name} name={name}>\r\n          {children}\r\n        </IconDetail>)}\r\n    </IconGrid>\r\n  </>',...null===(_Document$parameters2=Document.parameters)||void 0===_Document$parameters2||null===(_Document$parameters3=_Document$parameters2.docs)||void 0===_Document$parameters3?void 0:_Document$parameters3.source}}},Medical.parameters={...Medical.parameters,docs:{...null===(_Medical$parameters=Medical.parameters)||void 0===_Medical$parameters?void 0:_Medical$parameters.docs,source:{originalSource:'() => <>\r\n    <IconGrid name="">\r\n      {IconMap.medical.outline.map(({\n      name,\n      children\n    }) => <IconDetail key={name} name={name}>\r\n          {children}\r\n        </IconDetail>)}\r\n    </IconGrid>\r\n\r\n    <IconGrid name="">\r\n      {IconMap.medical.fill.map(({\n      name,\n      children\n    }) => <IconDetail key={name} name={name}>\r\n          {children}\r\n        </IconDetail>)}\r\n    </IconGrid>\r\n  </>',...null===(_Medical$parameters2=Medical.parameters)||void 0===_Medical$parameters2||null===(_Medical$parameters2$=_Medical$parameters2.docs)||void 0===_Medical$parameters2$?void 0:_Medical$parameters2$.source}}},Menu.parameters={...Menu.parameters,docs:{...null===(_Menu$parameters=Menu.parameters)||void 0===_Menu$parameters?void 0:_Menu$parameters.docs,source:{originalSource:'() => <>\r\n    <IconGrid name="">\r\n      {IconMap.menu.outline.map(({\n      name,\n      children\n    }) => <IconDetail key={name} name={name}>\r\n          {children}\r\n        </IconDetail>)}\r\n    </IconGrid>\r\n\r\n    <IconGrid name="">\r\n      {IconMap.menu.fill.map(({\n      name,\n      children\n    }) => <IconDetail key={name} name={name}>\r\n          {children}\r\n        </IconDetail>)}\r\n    </IconGrid>\r\n  </>',...null===(_Menu$parameters2=Menu.parameters)||void 0===_Menu$parameters2||null===(_Menu$parameters2$doc=_Menu$parameters2.docs)||void 0===_Menu$parameters2$doc?void 0:_Menu$parameters2$doc.source}}},Person.parameters={...Person.parameters,docs:{...null===(_Person$parameters=Person.parameters)||void 0===_Person$parameters?void 0:_Person$parameters.docs,source:{originalSource:'() => <>\r\n    <IconGrid name="">\r\n      {IconMap.person.outline.map(({\n      name,\n      children\n    }) => <IconDetail key={name} name={name}>\r\n          {children}\r\n        </IconDetail>)}\r\n    </IconGrid>\r\n\r\n    <IconGrid name="">\r\n      {IconMap.person.fill.map(({\n      name,\n      children\n    }) => <IconDetail key={name} name={name}>\r\n          {children}\r\n        </IconDetail>)}\r\n    </IconGrid>\r\n  </>',...null===(_Person$parameters2=Person.parameters)||void 0===_Person$parameters2||null===(_Person$parameters2$d=_Person$parameters2.docs)||void 0===_Person$parameters2$d?void 0:_Person$parameters2$d.source}}},Security.parameters={...Security.parameters,docs:{...null===(_Security$parameters=Security.parameters)||void 0===_Security$parameters?void 0:_Security$parameters.docs,source:{originalSource:'() => <>\r\n    <IconGrid name="">\r\n      {IconMap.security.outline.map(({\n      name,\n      children\n    }) => <IconDetail key={name} name={name}>\r\n          {children}\r\n        </IconDetail>)}\r\n    </IconGrid>\r\n\r\n    <IconGrid name="">\r\n      {IconMap.security.fill.map(({\n      name,\n      children\n    }) => <IconDetail key={name} name={name}>\r\n          {children}\r\n        </IconDetail>)}\r\n    </IconGrid>\r\n  </>',...null===(_Security$parameters2=Security.parameters)||void 0===_Security$parameters2||null===(_Security$parameters3=_Security$parameters2.docs)||void 0===_Security$parameters3?void 0:_Security$parameters3.source}}},Shapes.parameters={...Shapes.parameters,docs:{...null===(_Shapes$parameters=Shapes.parameters)||void 0===_Shapes$parameters?void 0:_Shapes$parameters.docs,source:{originalSource:'() => <>\r\n    <IconGrid name="">\r\n      {IconMap.shapes.outline.map(({\n      name,\n      children\n    }) => <IconDetail key={name} name={name}>\r\n          {children}\r\n        </IconDetail>)}\r\n    </IconGrid>\r\n\r\n    <IconGrid name="">\r\n      {IconMap.shapes.fill.map(({\n      name,\n      children\n    }) => <IconDetail key={name} name={name}>\r\n          {children}\r\n        </IconDetail>)}\r\n    </IconGrid>\r\n  </>',...null===(_Shapes$parameters2=Shapes.parameters)||void 0===_Shapes$parameters2||null===(_Shapes$parameters2$d=_Shapes$parameters2.docs)||void 0===_Shapes$parameters2$d?void 0:_Shapes$parameters2$d.source}}},Social.parameters={...Social.parameters,docs:{...null===(_Social$parameters=Social.parameters)||void 0===_Social$parameters?void 0:_Social$parameters.docs,source:{originalSource:'() => <>\r\n    <IconGrid name="">\r\n      {IconMap.social.outline.map(({\n      name,\n      children\n    }) => <IconDetail key={name} name={name}>\r\n          {children}\r\n        </IconDetail>)}\r\n    </IconGrid>\r\n\r\n    <IconGrid name="">\r\n      {IconMap.social.fill.map(({\n      name,\n      children\n    }) => <IconDetail key={name} name={name}>\r\n          {children}\r\n        </IconDetail>)}\r\n    </IconGrid>\r\n  </>',...null===(_Social$parameters2=Social.parameters)||void 0===_Social$parameters2||null===(_Social$parameters2$d=_Social$parameters2.docs)||void 0===_Social$parameters2$d?void 0:_Social$parameters2$d.source}}};const __namedExportsOrder=["Alert","Arrow","Bussiness","Coding","MediaCommunication","Editing","Document","Medical","Menu","Person","Security","Shapes","Social"]}}]);