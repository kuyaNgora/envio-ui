"use strict";(self.webpackChunk_envio_ui_react=self.webpackChunk_envio_ui_react||[]).push([[9533],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME.aD});var chunk_AY7I2SME=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs")},"./src/stories/utils/toast/toast.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Example$parameters,_Example$parameters2,_Example$parameters2$,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Utils/Toast"},Example=()=>{const ref=react__WEBPACK_IMPORTED_MODULE_1__.useRef(null),{addToast}=(0,_components__WEBPACK_IMPORTED_MODULE_2__.pm)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_2__.xu,{sx:{"> :not([hidden]) ~ :not([hidden])":{marginLeft:"md"}},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.zx,{ref,onClick:()=>{addToast({title:"Default",message:"Single line",status:"warning"})},children:"Single line"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:()=>addToast({message:"Single line with action",actionText:"Action",onAction:()=>(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("click")}),children:"Single line with action"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:()=>addToast({message:"Single line",dismissible:!0}),children:"Single line dismissable"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:()=>addToast({message:"Multiple line. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras morbi enim, nisl in."}),children:"Multiple line"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:()=>addToast({message:"Multiple line. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras morbi enim, nisl in.",actionText:"Action",onAction:()=>(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("click")}),children:"Multiple line with action"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:()=>addToast({message:"Error",status:"error",dismissAfter:5e3}),children:"Error with action"})]})};Example.displayName="Example",Example.parameters={...Example.parameters,docs:{...null===(_Example$parameters=Example.parameters)||void 0===_Example$parameters?void 0:_Example$parameters.docs,source:{originalSource:'() => {\n  const ref = React.useRef<HTMLButtonElement>(null);\n  const {\n    addToast\n  } = useToast();\n  return <Box sx={{\n    "> :not([hidden]) ~ :not([hidden])": {\n      marginLeft: "md"\n    }\n  }}>\r\n      <Button ref={ref} onClick={() => {\n      addToast({\n        title: "Default",\n        message: "Single line",\n        status: "warning"\n      });\n    }}>\r\n        Single line\r\n      </Button>\r\n\r\n      <Button onClick={() => addToast({\n      message: "Single line with action",\n      actionText: "Action",\n      onAction: () => action("click")\n    })}>\r\n        Single line with action\r\n      </Button>\r\n\r\n      <Button onClick={() => addToast({\n      message: "Single line",\n      dismissible: true\n    })}>\r\n        Single line dismissable\r\n      </Button>\r\n\r\n      <Button onClick={() => addToast({\n      message: "Multiple line. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras morbi enim, nisl in."\n    })}>\r\n        Multiple line\r\n      </Button>\r\n\r\n      <Button onClick={() => addToast({\n      message: "Multiple line. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras morbi enim, nisl in.",\n      actionText: "Action",\n      onAction: () => action("click")\n    })}>\r\n        Multiple line with action\r\n      </Button>\r\n\r\n      <Button onClick={() => addToast({\n      message: "Error",\n      status: "error",\n      dismissAfter: 5000\n    })}>\r\n        Error with action\r\n      </Button>\r\n    </Box>;\n}',...null===(_Example$parameters2=Example.parameters)||void 0===_Example$parameters2||null===(_Example$parameters2$=_Example$parameters2.docs)||void 0===_Example$parameters2$?void 0:_Example$parameters2$.source}}};const __namedExportsOrder=["Example"]}}]);