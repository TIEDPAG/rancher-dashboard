"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[6392],{5788:(e,n,t)=>{t.d(n,{Iu:()=>l,yg:()=>g});var r=t(1504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(g,s(s({ref:n},l),{},{components:t})):r.createElement(g,s({ref:n},l))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[p]="string"==typeof e?e:o,s[1]=c;for(var u=2;u<a;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8268:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=t(5072),o=(t(1504),t(5788));const a={},s="Extension as a cluster-level product",c={unversionedId:"extensions/usecases/cluster-level-product",id:"extensions/usecases/cluster-level-product",title:"Extension as a cluster-level product",description:"As a full example of an Extension as cluster-level product, let's start with the definition of product.ts config:",source:"@site/docs/extensions/usecases/cluster-level-product.md",sourceDirName:"extensions/usecases",slug:"/extensions/usecases/cluster-level-product",permalink:"/dashboard/extensions/usecases/cluster-level-product",draft:!1,tags:[],version:"current",lastUpdatedAt:1707727668,formattedLastUpdatedAt:"Feb 12, 2024",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Extension as a top-level product",permalink:"/dashboard/extensions/usecases/top-level-product"},next:{title:"Custom Node Driver UI",permalink:"/dashboard/extensions/usecases/node-driver/overview"}},i={},u=[],l={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.c)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"extension-as-a-cluster-level-product"},"Extension as a cluster-level product"),(0,o.yg)("p",null,"As a full example of an Extension as cluster-level product, let's start with the definition of ",(0,o.yg)("inlineCode",{parentName:"p"},"product.ts")," config:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"// ./index.ts\nimport { importTypes } from '@rancher/auto-import';\nimport { IPlugin } from '@shell/core/types';\nimport extensionRouting from './routing/extension-routing';\n\n// Init the package\nexport default function(plugin: IPlugin) {\n  // Auto-import model, detail, edit from the folders\n  importTypes(plugin);\n\n  // Provide extension metadata from package.json\n  // it will grab information such as `name` and `description`\n  plugin.metadata = require('./package.json');\n\n  // Load a product\n  plugin.addProduct(require('./product'));\n\n  // Add Vue Routes\n  plugin.addRoutes(extensionRouting);\n}\n")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"product.ts"),' config will then define the product and which "pages/views" we want to add, such as:'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"// ./product.ts\nimport { IPlugin } from '@shell/core/types';\n\nexport function init($plugin: IPlugin, store: any) {\n  const YOUR_PRODUCT_NAME = 'clusterLevelProduct';\n  const YOUR_K8S_RESOURCE_NAME = 'provisioning.cattle.io.cluster';\n  const CUSTOM_PAGE_NAME = 'page1';\n\n  const {\n    product,\n    configureType,\n    virtualType,\n    basicType\n  } = $plugin.DSL(store, YOUR_PRODUCT_NAME);\n\n  // registering a cluster-level product\n  product({\n    icon:    'gear',\n    inStore: 'cluster', // this is what defines the extension as a cluster-level product\n    weight:  100,\n    to:      {\n      name:   `c-cluster-${ YOUR_PRODUCT_NAME }-${ CUSTOM_PAGE_NAME }`,\n      params: { product: YOUR_PRODUCT_NAME }\n    }\n  });\n\n  // defining a k8s resource as page\n  configureType(YOUR_K8S_RESOURCE_NAME, {\n    displayName: 'some-custom-name-you-wish-to-assign-to-this-resource',\n    isCreatable: true,\n    isEditable:  true,\n    isRemovable: true,\n    showAge:     true,\n    showState:   true,\n    canYaml:     true,\n    customRoute: {\n      name:   `c-cluster-${ YOUR_PRODUCT_NAME }-resource`,\n      params: {\n        product:  YOUR_PRODUCT_NAME,\n        resource: YOUR_K8S_RESOURCE_NAME\n      }\n    }\n  });\n\n  // creating a custom page\n  virtualType({\n    labelKey: 'some.translation.key',\n    name:     CUSTOM_PAGE_NAME,\n    route:    {\n      name:   `c-cluster-${ YOUR_PRODUCT_NAME }-${ CUSTOM_PAGE_NAME }`,\n      params: { product: YOUR_PRODUCT_NAME }\n    }\n  });\n\n  // registering the defined pages as side-menu entries\n  basicType([YOUR_K8S_RESOURCE_NAME, CUSTOM_PAGE_NAME]);\n}\n\n")),(0,o.yg)("p",null,"In the example above, we are registering 2 pages: a resource page called ",(0,o.yg)("inlineCode",{parentName:"p"},"YOUR_K8S_RESOURCE_NAME")," and a custom page called ",(0,o.yg)("inlineCode",{parentName:"p"},"CUSTOM_PAGE_NAME"),". These need to be reflected in the routes definition that is provided to the ",(0,o.yg)("inlineCode",{parentName:"p"},"addRoutes")," method."),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Note: For more information on routing for a Top-level-product, check ",(0,o.yg)("a",{parentName:"p",href:"/dashboard/extensions/api/nav/routing#routes-definition-for-an-extension-as-a-top-level-product"},"here"))),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"/routing/extension-routing.ts")," would then be defined like:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"// ./routing/extension-routing.ts\nimport ListResource from '@shell/pages/c/_cluster/_product/_resource/index.vue';\nimport CreateResource from '@shell/pages/c/_cluster/_product/_resource/create.vue';\nimport ViewResource from '@shell/pages/c/_cluster/_product/_resource/_id.vue';\nimport ViewNamespacedResource from '@shell/pages/c/_cluster/_product/_resource/_namespace/_id.vue';\nimport MyCustomPage from '../pages/myCustomPage.vue';\n\n// to achieve naming consistency throughout the extension\n// we recommend this to be defined on a config file and exported\n// so that the developer can import it wherever it needs to be used\nconst YOUR_PRODUCT_NAME = 'clusterLevelProduct';\nconst CUSTOM_PAGE_NAME = 'page1';\n\nconst routes = [\n  // this covers the \"custom page\"\n  {\n    name:      `c-cluster-${ YOUR_PRODUCT_NAME }-${ CUSTOM_PAGE_NAME }`,\n    path:      `/c/:cluster/${ YOUR_PRODUCT_NAME }/${ CUSTOM_PAGE_NAME }`,\n    component: MyCustomPage,\n    meta:      { product: YOUR_PRODUCT_NAME },\n  },\n  // the following routes cover the \"resource page\"\n  // registering routes for list/edit/create views\n  {\n    name:      `c-cluster-${ YOUR_PRODUCT_NAME }-resource`,\n    path:      `/c/:cluster/${ YOUR_PRODUCT_NAME }/:resource`,\n    component: ListResource,\n    meta:      { product: YOUR_PRODUCT_NAME },\n  },\n  {\n    name:      `c-cluster-${ YOUR_PRODUCT_NAME }-resource-create`,\n    path:      `/c/:cluster/${ YOUR_PRODUCT_NAME }/:resource/create`,\n    component: CreateResource,\n    meta:      { product: YOUR_PRODUCT_NAME },\n  },\n  {\n    name:      `c-cluster-${ YOUR_PRODUCT_NAME }-resource-id`,\n    path:      `/c/:cluster/${ YOUR_PRODUCT_NAME }/:resource/:id`,\n    component: ViewResource,\n    meta:      { product: YOUR_PRODUCT_NAME },\n  },\n  {\n    name:      `c-cluster-${ YOUR_PRODUCT_NAME }-resource-namespace-id`,\n    path:      `/:cluster/${ YOUR_PRODUCT_NAME }/:resource/:namespace/:id`,\n    component: ViewNamespacedResource,\n    meta:      { product: YOUR_PRODUCT_NAME },\n  }\n];\n\nexport default routes;\n")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Note: Comparing with a ",(0,o.yg)("a",{parentName:"p",href:"./top-level-product"},"Top-level product"),", we can see that the routes definition in ",(0,o.yg)("inlineCode",{parentName:"p"},"product.ts")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"/routing/extension-routing.ts")," don't have the notion of a ",(0,o.yg)("inlineCode",{parentName:"p"},"BLANK CLUSTER"),'. This is on purpose, because a Cluster-level product needs the context of cluster where it\'s running when compared with a Top-level product, which is "above" all clusters.')),(0,o.yg)("p",null,"A full working example of this code, which can be deployed as an Extension on you Rancher Dashboard, can be found on the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/rancher/ui-plugin-examples"},"Rancher examples repo"),". Just follow the instructions described on the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/rancher/ui-plugin-examples#readme"},"README")," on how to add the repo to Rancher Dasboard."))}d.isMDXComponent=!0}}]);