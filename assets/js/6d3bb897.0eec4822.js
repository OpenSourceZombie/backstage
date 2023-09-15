/*! For license information please see 6d3bb897.0eec4822.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[811510],{501209:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(824246),o=n(511151);const i={id:"01-setup",title:"1. Tutorial setup",description:"How to get started with the permission framework as a plugin author"},s=void 0,a={unversionedId:"permissions/plugin-authors/01-setup",id:"permissions/plugin-authors/01-setup",title:"1. Tutorial setup",description:"How to get started with the permission framework as a plugin author",source:"@site/../docs/permissions/plugin-authors/01-setup.md",sourceDirName:"permissions/plugin-authors",slug:"/permissions/plugin-authors/01-setup",permalink:"/docs/permissions/plugin-authors/01-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/permissions/plugin-authors/01-setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"01-setup",title:"1. Tutorial setup",description:"How to get started with the permission framework as a plugin author"},sidebar:"docs",previous:{title:"Defining custom permission rules",permalink:"/docs/permissions/custom-rules"},next:{title:"2. Adding a basic permission check",permalink:"/docs/permissions/plugin-authors/02-adding-a-basic-permission-check"}},c={},l=[{value:"Setup for the Tutorial",id:"setup-for-the-tutorial",level:2},{value:"Integrate the new plugin",id:"integrate-the-new-plugin",level:2}];function u(e){const t=Object.assign({p:"p",code:"code",a:"a",h2:"h2",ul:"ul",li:"li",ol:"ol",pre:"pre",strong:"strong",img:"img",hr:"hr"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The following tutorial is designed to help plugin authors add support for permissions to their plugins. We'll add support for permissions to example ",(0,r.jsx)(t.code,{children:"todo-list"})," and ",(0,r.jsx)(t.code,{children:"todo-list-backend"})," plugins, but the process should be similar for other plugins!"]}),"\n",(0,r.jsxs)(t.p,{children:["The rest of this page is focused on adding the ",(0,r.jsx)(t.code,{children:"todo-list"})," and ",(0,r.jsx)(t.code,{children:"todo-list-backend"})," plugins to your Backstage instance. If you want to add support for permissions to your own plugin instead, feel free to skip to the ",(0,r.jsx)(t.a,{href:"/docs/permissions/plugin-authors/02-adding-a-basic-permission-check",children:"next section"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"setup-for-the-tutorial",children:"Setup for the Tutorial"}),"\n",(0,r.jsxs)(t.p,{children:['We will use a "Todo list" feature, composed of the ',(0,r.jsx)(t.code,{children:"todo-list"})," and ",(0,r.jsx)(t.code,{children:"todo-list-backend"})," plugins, as well as their dependency, ",(0,r.jsx)(t.code,{children:"todo-list-common"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"The source code is available here:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/example-todo-list",children:"todo-list"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/example-todo-list-backend",children:"todo-list-backend"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/example-todo-list-common",children:"todo-list-common"})}),"\n"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Copy-paste the three folders into the plugins folder of your backstage application repository (removing the ",(0,r.jsx)(t.code,{children:"example-"})," prefix from each folder) or run the following script from the root of your backstage application:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"$ cd $(mktemp -d)\n  git clone --depth 1 --quiet --no-checkout --filter=blob:none https://github.com/backstage/backstage.git .\n  git checkout master -- plugins/example-todo-list/\n  git checkout master -- plugins/example-todo-list-backend/\n  git checkout master -- plugins/example-todo-list-common/\n  sed -i '' 's/workspace:\\^/\\*/g' plugins/example-todo-list/package.json\n  sed -i '' 's/workspace:\\^/\\*/g' plugins/example-todo-list-backend/package.json\n  sed -i '' 's/workspace:\\^/\\*/g' plugins/example-todo-list-common/package.json\n  for file in plugins/*; do mv \"$file\" \"$OLDPWD/${file/example-todo/todo}\"; done\n  cd -\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"plugins"})," directory of your project should now include ",(0,r.jsx)(t.code,{children:"todo-list"}),", ",(0,r.jsx)(t.code,{children:"todo-list-backend"}),", and ",(0,r.jsx)(t.code,{children:"todo-list-common"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Important"}),": if you are on ",(0,r.jsx)(t.strong,{children:"Windows"}),", make sure you have WSL and git installed on your machine before executing the script above."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Add these packages as dependencies for your Backstage app:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"# From your Backstage root directory\nyarn add --cwd packages/backend @internal/plugin-todo-list-backend @internal/plugin-todo-list-common\nyarn add --cwd packages/app @internal/plugin-todo-list\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Include the backend and frontend plugin in your application:"}),"\n",(0,r.jsxs)(t.p,{children:["Create a new ",(0,r.jsx)(t.code,{children:"packages/backend/src/plugins/todolist.ts"})," with the following content:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:'title="packages/backend/src/plugins/todolist.ts"',children:"import { DefaultIdentityClient } from '@backstage/plugin-auth-node';\nimport { createRouter } from '@internal/plugin-todo-list-backend';\nimport { Router } from 'express';\nimport { PluginEnvironment } from '../types';\n\nexport default async function createPlugin({\n  logger,\n  discovery,\n}: PluginEnvironment): Promise<Router> {\n  return await createRouter({\n    logger,\n    identity: DefaultIdentityClient.create({\n      discovery,\n      issuer: await discovery.getExternalBaseUrl('auth'),\n    }),\n  });\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Apply the following changes to ",(0,r.jsx)(t.code,{children:"packages/backend/src/index.ts"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"import techdocs from './plugins/techdocs';\n/* highlight-add-next-line */\nimport todoList from './plugins/todolist';\nimport search from './plugins/search';\n\nasync function main() {\n  const searchEnv = useHotMemoize(module, () => createEnv('search'));\n  const appEnv = useHotMemoize(module, () => createEnv('app'));\n  /* highlight-add-next-line */\n  const todoListEnv = useHotMemoize(module, () => createEnv('todolist'));\n  // ..\n\n  apiRouter.use('/proxy', await proxy(proxyEnv));\n  apiRouter.use('/search', await search(searchEnv));\n  apiRouter.use('/permission', await permission(permissionEnv));\n  /* highlight-add-next-line */\n  apiRouter.use('/todolist', await todoList(todoListEnv));\n  // Add backends ABOVE this line; this 404 handler is the catch-all fallback\n  apiRouter.use(notFoundHandler());\n  // ..\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Apply the following changes to ",(0,r.jsx)(t.code,{children:"packages/app/src/App.tsx"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',children:'/* highlight-add-next-line */\nimport { TodoListPage } from \'@internal/plugin-todo-list\';\n\nconst routes = (\n  <FlatRoutes>\n    <Route path="/search" element={<SearchPage />}>\n      {searchPage}\n    </Route>\n    <Route path="/settings" element={<UserSettingsPage />} />\n    {/* highlight-add-next-line */}\n    <Route path="/todo-list" element={<TodoListPage />} />\n    {/* ... */}\n  </FlatRoutes>\n);\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Now if you start your application you should be able to reach the ",(0,r.jsx)(t.code,{children:"/todo-list"})," page:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Todo List plugin page",src:n(226358).Z+"",width:"1323",height:"611"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"integrate-the-new-plugin",children:"Integrate the new plugin"}),"\n",(0,r.jsx)(t.p,{children:"If you play with the UI, you will notice that it is possible to perform a few actions:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["create a new todo item (",(0,r.jsx)(t.code,{children:"POST /todos"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["view todo items (",(0,r.jsx)(t.code,{children:"GET /todos"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["edit an existing todo item (",(0,r.jsx)(t.code,{children:"PUT /todos"}),")"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Let's try to bring authorization on top of each one of them."})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)}},226358:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/permission-todo-list-page-6cbdeae87098cd84d982e8ece2442ce9.png"},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,s,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in i=Object(arguments[c]))n.call(i,l)&&(a[l]=i[l]);if(t){s=t(i);for(var u=0;u<s.length;u++)r.call(i,s[u])&&(a[s[u]]=i[s[u]])}}return a}},371426:(e,t,n)=>{n(862525);var r=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,i={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:u,props:i,_owner:s.current}}t.jsx=l,t.jsxs=l},541535:(e,t,n)=>{var r=n(862525),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var s=60109,a=60110,c=60112;t.Suspense=60113;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),i=p("react.portal"),t.Fragment=p("react.fragment"),t.StrictMode=p("react.strict_mode"),t.Profiler=p("react.profiler"),s=p("react.provider"),a=p("react.context"),c=p("react.forward_ref"),t.Suspense=p("react.suspense"),l=p("react.memo"),u=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function m(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function y(){}function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=m.prototype;var b=x.prototype=new y;b.constructor=x,r(b,m.prototype),b.isPureReactComponent=!0;var j={current:null},k=Object.prototype.hasOwnProperty,v={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var r,i={},s=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)k.call(t,r)&&!v.hasOwnProperty(r)&&(i[r]=t[r]);var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===i[r]&&(i[r]=c[r]);return{$$typeof:o,type:e,key:s,ref:a,props:i,_owner:j.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var E=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,n,r,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return s=s(c=e),e=""===r?"."+O(c,0):r,Array.isArray(s)?(n="",null!=e&&(n=e.replace(E,"$&/")+"/"),R(s,t,n,"",(function(e){return e}))):null!=s&&(_(s)&&(s=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(E,"$&/")+"/")+e)),t.push(s)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=r+O(a=e[l],l);c+=R(a,t,n,u,s)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(a=e.next()).done;)c+=R(a=a.value,t,n,u=r+O(a,l++),s);else if("object"===a)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function S(e,t,n){if(null==e)return e;var r=[],o=0;return R(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function $(){var e=C.current;if(null===e)throw Error(h(321));return e}var T={ReactCurrentDispatcher:C,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:S,forEach:function(e,t,n){S(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return S(e,(function(){t++})),t},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(h(143));return e}},t.Component=m,t.PureComponent=x,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,n){if(null==e)throw Error(h(267,e));var i=r({},e.props),s=e.key,a=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,c=j.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)k.call(t,u)&&!v.hasOwnProperty(u)&&(i[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)i.children=n;else if(1<u){l=Array(u);for(var p=0;p<u;p++)l[p]=arguments[p+2];i.children=l}return{$$typeof:o,type:e.type,key:s,ref:a,props:i,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:a,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return $().useCallback(e,t)},t.useContext=function(e,t){return $().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return $().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return $().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return $().useLayoutEffect(e,t)},t.useMemo=function(e,t){return $().useMemo(e,t)},t.useReducer=function(e,t,n){return $().useReducer(e,t,n)},t.useRef=function(e){return $().useRef(e)},t.useState=function(e){return $().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>i});var r=n(667294);const o=r.createContext({});function i(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||s:i(e),r.createElement(o.Provider,{value:a},t)}}}]);