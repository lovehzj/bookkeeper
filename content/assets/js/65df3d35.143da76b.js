"use strict";(self.webpackChunksite_3=self.webpackChunksite_3||[]).push([[4643],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8814:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={id:"overview",title:"BookKeeper API"},s=void 0,c={unversionedId:"api/overview",id:"api/overview",title:"BookKeeper API",description:"BookKeeper offers a few APIs that applications can use to interact with it:",source:"@site/docs/api/overview.md",sourceDirName:"api",slug:"/api/overview",permalink:"/docs/next/api/overview",tags:[],version:"current",frontMatter:{id:"overview",title:"BookKeeper API"},sidebar:"docsSidebar",previous:{title:"Decommission Bookies",permalink:"/docs/next/admin/decomission"},next:{title:"The Ledger API",permalink:"/docs/next/api/ledger-api"}},p={},u=[{value:"Trade-offs",id:"trade-offs",level:2}],d={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"BookKeeper offers a few APIs that applications can use to interact with it:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"ledger-api"},"ledger API")," is a lower-level API that enables you to interact with ledgers directly"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"ledger-adv-api"},"Ledger Advanced API")," is an advanced extension to ",(0,i.kt)("a",{parentName:"li",href:"ledger-api"},"Ledger API")," to provide more flexibilities to applications."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"distributedlog-api"},"DistributedLog API")," is a higher-level API that provides convenient abstractions.")),(0,i.kt)("h2",{id:"trade-offs"},"Trade-offs"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Ledger API")," provides direct access to ledgers and thus enables you to use BookKeeper however you'd like."),(0,i.kt)("p",null,"However, in most of use cases, if you want a ",(0,i.kt)("inlineCode",{parentName:"p"},"log stream"),"-like abstraction, it requires you to manage things like tracking list of ledgers,\nmanaging rolling ledgers and data retention on your own. In such cases, you are recommended to use ",(0,i.kt)("a",{parentName:"p",href:"distributedlog-api"},"DistributedLog API"),",\nwith semantics resembling continous log streams from the standpoint of applications."))}f.isMDXComponent=!0}}]);