"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[42733],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},80284:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"2.3.0",sidebar_position:8,keywords:["release-notes"],description:"release-notes"},l="2.3.0",i={unversionedId:"2.3.0-release",id:"2.3.0-release",isDocsHomePage:!1,title:"2.3.0",description:"release-notes",source:"@site/event/2.3.0-release.md",sourceDirName:".",slug:"/2.3.0-release",permalink:"/event/2.3.0-release",editUrl:"https://github.com/apache/shenyu-website/edit/main/event/2.3.0-release.md",version:"current",lastUpdatedBy:"\u6768\u6587\u6770",lastUpdatedAt:1680435550,formattedLastUpdatedAt:"4/2/2023",sidebarPosition:8,frontMatter:{title:"2.3.0",sidebar_position:8,keywords:["release-notes"],description:"release-notes"}},u=[{value:"soul-admin",id:"soul-admin",children:[]},{value:"soul-bootstrap",id:"soul-bootstrap",children:[]}],s={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"230"},"2.3.0"),(0,a.kt)("h2",{id:"soul-admin"},"soul-admin"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"open")," field to allow app path authentication or not in sign plugin."),(0,a.kt)("li",{parentName:"ul"},"Optimize divide plugin to use common plugin template in soul-dashboard."),(0,a.kt)("li",{parentName:"ul"},"Add default values and rule checks in plugin handler."),(0,a.kt)("li",{parentName:"ul"},"Add resource management to allow user to add plugin, adjust menu and button resource and so on in soul-dashboard and soul-admin."),(0,a.kt)("li",{parentName:"ul"},"Add menu and data permission in soul-admin."),(0,a.kt)("li",{parentName:"ul"},"Add H2 store for soul-admin.")),(0,a.kt)("h2",{id:"soul-bootstrap"},"soul-bootstrap"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add tars plugin"),(0,a.kt)("li",{parentName:"ul"},"Add sentinel plugin"),(0,a.kt)("li",{parentName:"ul"},"Add sofa plugin"),(0,a.kt)("li",{parentName:"ul"},"Add Resilience4j plugin for soul-plugin."),(0,a.kt)("li",{parentName:"ul"},"Add Context path mapping plugin for soul-plugin."),(0,a.kt)("li",{parentName:"ul"},"Add Grpc plugin supports grpc protocol."),(0,a.kt)("li",{parentName:"ul"},"Support form submission for dubbo plugin."),(0,a.kt)("li",{parentName:"ul"},"feat(plugin handle):"),(0,a.kt)("li",{parentName:"ul"},"Add dist package module"),(0,a.kt)("li",{parentName:"ul"},"Add test cases for soul-admin"),(0,a.kt)("li",{parentName:"ul"},"Add register center for consul"),(0,a.kt)("li",{parentName:"ul"},"Add register center for etcd"),(0,a.kt)("li",{parentName:"ul"},"Add register center for nacos"),(0,a.kt)("li",{parentName:"ul"},"Add register center for zookeeper")))}d.isMDXComponent=!0}}]);