"use strict";(self.webpackChunk_envio_ui_react=self.webpackChunk_envio_ui_react||[]).push([[9612,9434],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/stories/navigation/drawer/drawer.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_drawer_stories_tsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/navigation/drawer/drawer.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h3:"h3"},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{title:"Components/Navigation/Drawer"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"drawer",children:"Drawer"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{of:_drawer_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.Example})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hw,{code:'\nimport React from "react";\nimport { Box, Button, Drawer, Text } from "@envio-ui/design";\n\nexport const Example: React.FC = () => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  const toggle = () => {\n    setIsOpen(prev => !prev);\n  };\n\n  return (\n    <Box p="md">\n      <Text as="p">Click the button below to open the drawer.</Text>\n      <Button variant="primary" size="lg" onClick={() => setIsOpen(!isOpen)}>\n        Toggle Drawer\n      </Button>\n\n      <Drawer open={isOpen} onClose={toggle} direction="left" size={300} overlay >\n        <div\n          style={{\n            padding: 20,\n            display: "flex",\n            flex: 1,\n            alignContent: "space-between",\n            width: "100%",\n          }}\n        >\n          <div style={{ fontWeight: "bold" }}>Hello World! 🚀🥳</div>\n        </div>\n      </Drawer>\n    </Box>\n  );\n};\n',of:_drawer_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.Example,dark:!0,language:"tsx"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Ed,{of:_drawer_stories_tsx__WEBPACK_IMPORTED_MODULE_2__})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/stories/navigation/drawer/drawer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Example$parameters,_Example$parameters2,_Example$parameters2$,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Navigation/Drawer",component:_components__WEBPACK_IMPORTED_MODULE_1__.dy,argTypes:{children:{table:{type:{summary:"React.ReactNode",detail:null},defaultValue:{summary:null}}},className:{table:{type:{summary:"string",detail:null},defaultValue:{summary:""}}},style:{table:{type:{summary:"CSSProperties",detail:null},defaultValue:{summary:"-"}}},open:{table:{type:{summary:"boolean",detail:null},defaultValue:{summary:!1}}},onClose:{table:{type:{summary:"VoidFunction",detail:null},defaultValue:{summary:"-"}}},direction:{table:{type:{summary:"left | right | top | bottom",detail:null},defaultValue:{summary:"top"}}},overlay:{table:{type:{summary:"boolean",detail:null},defaultValue:{summary:!0}}},overlayColor:{table:{type:{summary:"string",detail:null},defaultValue:{summary:"#000000"}}},overlayOpacity:{table:{type:{summary:"number",detail:null},defaultValue:{summary:.1}}},zIndex:{table:{type:{summary:"number",detail:null},defaultValue:{summary:100}}},size:{table:{type:{summary:"number | string",detail:null},defaultValue:{summary:250}}},lockBackgroundScroll:{table:{type:{summary:"boolean",detail:null},defaultValue:{summary:!1}}},customIdSuffix:{table:{type:{summary:"string",detail:null},defaultValue:{summary:""}}}}},Template=args=>{const[isOpen,setIsOpen]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_1__.xu,{p:"md",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.xv,{as:"p",children:"Click the button below to open the drawer."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.zx,{variant:"primary",size:"lg",onClick:()=>setIsOpen(!isOpen),children:"Toggle Drawer"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.dy,{...args,open:isOpen,onClose:()=>{setIsOpen((prev=>!prev))},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{padding:20,display:"flex",flex:1,alignContent:"space-between",width:"100%"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{fontWeight:"bold"},children:"Hello World! 🚀🥳"})})})]})};Template.displayName="Template";const Example=Template.bind({});Example.args={direction:"left",size:300,overlay:!0},Example.parameters={...Example.parameters,docs:{...null===(_Example$parameters=Example.parameters)||void 0===_Example$parameters?void 0:_Example$parameters.docs,source:{originalSource:'args => {\n  const [isOpen, setIsOpen] = React.useState(false);\n  const toggle = () => {\n    setIsOpen(prev => !prev);\n  };\n  return <Box p="md">\r\n      <Text as="p">Click the button below to open the drawer.</Text>\r\n      <Button variant="primary" size="lg" onClick={() => setIsOpen(!isOpen)}>\r\n        Toggle Drawer\r\n      </Button>\r\n\r\n      <Drawer {...args} open={isOpen} onClose={toggle}>\r\n        <div style={{\n        padding: 20,\n        display: "flex",\n        flex: 1,\n        alignContent: "space-between",\n        width: "100%"\n      }}>\r\n          <div style={{\n          fontWeight: "bold"\n        }}>Hello World! 🚀🥳</div>\r\n        </div>\r\n      </Drawer>\r\n    </Box>;\n}',...null===(_Example$parameters2=Example.parameters)||void 0===_Example$parameters2||null===(_Example$parameters2$=_Example$parameters2.docs)||void 0===_Example$parameters2$?void 0:_Example$parameters2$.source}}};const __namedExportsOrder=["Example"]}}]);