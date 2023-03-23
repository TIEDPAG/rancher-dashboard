"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[4268],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=d(r),c=a,g=m["".concat(p,".").concat(c)]||m[c]||s[c]||l;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9245:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const l={},o="Terminology",i={unversionedId:"terminology",id:"terminology",title:"Terminology",description:"This is part of the developer getting started guide.",source:"@site/docs/terminology.md",sourceDirName:".",slug:"/terminology",permalink:"/dashboard/terminology",draft:!1,tags:[],version:"current",lastUpdatedAt:1679603927,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Stress Testing",permalink:"/dashboard/testing/stress-test"}},p={},d=[],u={toc:d};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"terminology"},"Terminology"),(0,a.kt)("p",null,"This is part of the developer ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/dashboard/blob/master/README.md"},"getting started guide"),"."),(0,a.kt)("p",null,"The official Kubernetes ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/glossary/?fundamental=true"},"glossary")," also explains Kubernetes-specific terminology."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Term"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Dashboard / Cluster Explorer / Vue UI"),(0,a.kt)("td",{parentName:"tr",align:null},"The application in this repository. It will slowly replace the older Ember UI")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Manager / Cluster Manager / Ember UI"),(0,a.kt)("td",{parentName:"tr",align:null},"The old ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/rancher/ui"},"Ember based UI"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Norman"),(0,a.kt)("td",{parentName:"tr",align:null},"Old Rancher API which has mostly been superseded by Steve")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Steve"),(0,a.kt)("td",{parentName:"tr",align:null},"New Rancher API")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rancher (Product)"),(0,a.kt)("td",{parentName:"tr",align:null},"A ",(0,a.kt)("a",{parentName:"td",href:"https://rancher.com/products/rancher/"},"Kubernetes Management Platform"),". This product includes the Rancher API and UIs")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RKE"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://rancher.com/products/rke/"},"Rancher Kubernetes Engine")," - A certified Kubernetes distribution")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SSR"),(0,a.kt)("td",{parentName:"tr",align:null},"Server Side Rendering. Disabled by default when developing the Dashboard (enabled pre 2.6.6)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SPA"),(0,a.kt)("td",{parentName:"tr",align:null},"Single Page Application. Enabled by default in production")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Vue"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://vuejs.org/"},"A frontend client framework used by the Dashboard"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Vuex"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://vuex.vuejs.org/"},"Frontend state management"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Nuxt"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://nuxtjs.org/"},"Vue framework helper"))))))}s.isMDXComponent=!0}}]);