"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[1944],{5788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>c});var a=n(1504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),s=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(g.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,g=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),y=r,c=d["".concat(g,".").concat(y)]||d[y]||u[y]||i;return n?a.createElement(c,o(o({ref:t},p),{},{components:n})):a.createElement(c,o({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var g in t)hasOwnProperty.call(t,g)&&(l[g]=t[g]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},7908:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(5072),r=(n(1504),n(5788));const i={},o="Github Workflow Configuration",l={unversionedId:"extensions/advanced/workflow-configuration",id:"extensions/advanced/workflow-configuration",title:"Github Workflow Configuration",description:"Extension Charts Workflow",source:"@site/docs/extensions/advanced/workflow-configuration.md",sourceDirName:"extensions/advanced",slug:"/extensions/advanced/workflow-configuration",permalink:"/dashboard/extensions/advanced/workflow-configuration",draft:!1,tags:[],version:"current",lastUpdatedAt:1707727668,formattedLastUpdatedAt:"Feb 12, 2024",frontMatter:{}},g={},s=[{value:"Extension Charts Workflow",id:"extension-charts-workflow",level:2},{value:"Workflow Permissions",id:"workflow-permissions",level:2},{value:"Extension Chart Inputs",id:"extension-chart-inputs",level:3},{value:"Example usage",id:"example-usage",level:3},{value:"Extension Catalog Image Workflow",id:"extension-catalog-image-workflow",level:2},{value:"Extension Catalog Image Inputs",id:"extension-catalog-image-inputs",level:3},{value:"Example Usage",id:"example-usage-1",level:3},{value:"Versioning",id:"versioning",level:2},{value:"Dispatching Configuration",id:"dispatching-configuration",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.c)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"github-workflow-configuration"},"Github Workflow Configuration"),(0,r.yg)("h2",{id:"extension-charts-workflow"},"Extension Charts Workflow"),(0,r.yg)("p",null,"To build the charts needed to provide a Helm repository, use the reusable workflow job found ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/rancher/dashboard/blob/master/.github/workflows/build-extension-charts.yml"},"here"),". When published you will be able to target the Github repository as a Helm repository, which will serve the charts for installation within the Rancher Dashboard."),(0,r.yg)("h2",{id:"workflow-permissions"},"Workflow Permissions"),(0,r.yg)("p",null,"Each workflow requires permissions to be set correctly to complete the release processes, both builds have specific needs with some overlap:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Property"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Extension Type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Permission"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"actions")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Charts/Catalog"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"write")),(0,r.yg)("td",{parentName:"tr",align:null},"Requires ",(0,r.yg)("inlineCode",{parentName:"td"},"write")," to ",(0,r.yg)("a",{parentName:"td",href:"https://docs.github.com/en/rest/actions/workflow-runs?apiVersion=2022-11-28#cancel-a-workflow-run"},"cancel a workflow"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"contents")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Charts*/Catalog"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"write"),"*/",(0,r.yg)("inlineCode",{parentName:"td"},"read")),(0,r.yg)("td",{parentName:"tr",align:null},"Requires ",(0,r.yg)("inlineCode",{parentName:"td"},"read")," for ",(0,r.yg)("inlineCode",{parentName:"td"},"actions/checkout"),", and requires ",(0,r.yg)("inlineCode",{parentName:"td"},"write")," (*only necessary in the Chart Build workflow) to ",(0,r.yg)("inlineCode",{parentName:"td"},"put")," the contents of the built extension charts ",(0,r.yg)("a",{parentName:"td",href:"https://docs.github.com/en/rest/repos/contents?apiVersion=2022-11-28#create-or-update-file-contents"},"into a branch"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"deployments")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Charts"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"write")),(0,r.yg)("td",{parentName:"tr",align:null},"Requires ",(0,r.yg)("inlineCode",{parentName:"td"},"write")," when ",(0,r.yg)("a",{parentName:"td",href:"https://docs.github.com/en/rest/deployments/deployments?apiVersion=2022-11-28#create-a-deployment"},"deploying ",(0,r.yg)("inlineCode",{parentName:"a"},"gh-pages")),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"packages")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Catalog"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"write")),(0,r.yg)("td",{parentName:"tr",align:null},"Requires ",(0,r.yg)("inlineCode",{parentName:"td"},"write")," when a catalog image is created to ",(0,r.yg)("a",{parentName:"td",href:"https://docs.github.com/en/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#publishing-a-package-using-an-action"},"create the package"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pages")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Charts"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"write")),(0,r.yg)("td",{parentName:"tr",align:null},"Requires write to ",(0,r.yg)("a",{parentName:"td",href:"https://docs.github.com/en/rest/pages/pages?apiVersion=2022-11-28#request-a-github-pages-build"},"request and create page builds")," for the deployment.")))),(0,r.yg)("h3",{id:"extension-chart-inputs"},"Extension Chart Inputs"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Property"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"permissions")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"true")),(0,r.yg)("td",{parentName:"tr",align:null},"This gives the workflow permissions to checkout, build, and push to the repository.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"target_branch")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"true")),(0,r.yg)("td",{parentName:"tr",align:null},"The Github branch target for the extension build assets")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"tagged_release")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"false")),(0,r.yg)("td",{parentName:"tr",align:null},"Specifies the tag name when triggering workflows by publishing tagged releases. (Requires alternate dispatch rules)")))),(0,r.yg)("h3",{id:"example-usage"},"Example usage"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yml"},"...\njobs:\n  build-extension-charts:\n    name: Build and release Extension charts\n    uses: rancher/dashboard/.github/workflows/build-extension-charts.yml@master\n    permissions:\n      actions: write\n      contents: write\n      deployments: write\n      pages: write\n    with:\n      target_branch: gh-pages\n")),(0,r.yg)("h2",{id:"extension-catalog-image-workflow"},"Extension Catalog Image Workflow"),(0,r.yg)("p",null,"To build an Extension Catalog Image (ECI) for air-gapped/private repositories, use the workflow found ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/rancher/dashboard/blob/master/.github/workflows/build-extension-catalog.yml"},"here"),". This will build and push the container image push into the specified registry."),(0,r.yg)("h3",{id:"extension-catalog-image-inputs"},"Extension Catalog Image Inputs"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Property"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"permissions")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"true")),(0,r.yg)("td",{parentName:"tr",align:null},"This gives the workflow permissions to checkout, build, and push to the registry.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"registry_target")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"true")),(0,r.yg)("td",{parentName:"tr",align:null},"The container registry to publish the catalog image")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"registry_user")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"true")),(0,r.yg)("td",{parentName:"tr",align:null},"The username connected to the container registry")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"tagged_release")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"false")),(0,r.yg)("td",{parentName:"tr",align:null},"Specifies the tag name when triggering workflows by publishing tagged releases. (Requires alternate dispatch rules)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"registry_token")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"true")),(0,r.yg)("td",{parentName:"tr",align:null},"The password or token used to authenticate with the registry")))),(0,r.yg)("h3",{id:"example-usage-1"},"Example Usage"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yml"},"...\njobs:\n  build-extension-catalog:\n    name: Build and release Extension Catalog Image\n    uses: rancher/dashboard/.github/workflows/build-extension-catalog.yml@master\n    permissions:\n      actions: write\n      contents: read\n      packages: write\n    with:\n      registry_target: ghcr.io\n      registry_user: ${{ github.actor }}\n    secrets: \n      registry_token: ${{ secrets.GITHUB_TOKEN }}\n\n")),(0,r.yg)("h2",{id:"versioning"},"Versioning"),(0,r.yg)("p",null,"Each workflow is targeting the ",(0,r.yg)("inlineCode",{parentName:"p"},"master")," branch of ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/rancher/dashboard"},(0,r.yg)("inlineCode",{parentName:"a"},"rancher/dashboard"))," by default. Depending on your ",(0,r.yg)("inlineCode",{parentName:"p"},"@rancher/shell")," and Rancher instance versions, you will need to target the branch per release. For example, if running a Rancher instance version ",(0,r.yg)("inlineCode",{parentName:"p"},"v2.7.7"),", you will need to target the ",(0,r.yg)("inlineCode",{parentName:"p"},"release-2.7.7")," branch:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yml"},"...\njobs:\n  build-extension-charts:\n    name: Build and release Extension charts\n    uses: rancher/dashboard/.github/workflows/build-extension-charts.yml@release-2.7.7\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"Warning:")," The reusable workflow was created after Rancher ",(0,r.yg)("inlineCode",{parentName:"p"},"v2.7.5")," - this means you will ",(0,r.yg)("strong",{parentName:"p"},"NOT")," be able to use these workflow files with this release or any previous releases.")),(0,r.yg)("h2",{id:"dispatching-configuration"},"Dispatching Configuration"),(0,r.yg)("p",null,"As mentioned in the ",(0,r.yg)("inlineCode",{parentName:"p"},"tagged_release")," property description, in order to have the workflow triggered by published releases the dispatch will need to be updated.\nThis topic is covered in the ",(0,r.yg)("a",{parentName:"p",href:"../publishing#triggering-a-github-workflow-on-tagged-release"},"Publishing section"),". To be concise, update the dispatch within the workflow file to execute the workflow on the ",(0,r.yg)("inlineCode",{parentName:"p"},"released")," event of a ",(0,r.yg)("inlineCode",{parentName:"p"},"release"),' action:"'),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yml"},"on:\n  release:\n    types: [released]\n")),(0,r.yg)("p",null,"This will ensure that the workflow is only triggered when the tagged release is published and is ",(0,r.yg)("em",{parentName:"p"},"not")," a draft release. "),(0,r.yg)("p",null,"Extensive information on how to trigger workflows can be found in the ",(0,r.yg)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows"},"Github documentation"),"."))}u.isMDXComponent=!0}}]);