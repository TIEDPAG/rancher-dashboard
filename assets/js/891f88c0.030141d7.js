"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[166],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||a;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const a={},o="Advanced",s={unversionedId:"extensions/advanced",id:"extensions/advanced",title:"Advanced",description:"Publishing the Extension Manually",source:"@site/docs/extensions/advanced.md",sourceDirName:"extensions",slug:"/extensions/advanced",permalink:"/dashboard/extensions/advanced",draft:!1,tags:[],version:"current",lastUpdatedAt:1680730324,formattedLastUpdatedAt:"Apr 5, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Miscellaneous",permalink:"/dashboard/extensions/miscellaneous"},next:{title:"Storybook",permalink:"/dashboard/storybook"}},l={},p=[{value:"Publishing the Extension Manually",id:"publishing-the-extension-manually",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Running the Publish Script",id:"running-the-publish-script",level:2},{value:"Additional Information",id:"additional-information",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"advanced"},"Advanced"),(0,r.kt)("h2",{id:"publishing-the-extension-manually"},"Publishing the Extension Manually"),(0,r.kt)("p",null,"Publishing a release into a registry of your choice can be accomplished with the ",(0,r.kt)("inlineCode",{parentName:"p"},"publish-pkgs")," script declared in your extension's ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),". This script will build a Docker image for each extension package, as well as a Helm chart that can be used to deploy the images. Given the option, the script can automatically push the built images and chart into a specified registry."),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"You will need ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker")," installed on the machine you wish to publish from, and a registry that will house your images."),(0,r.kt)("h2",{id:"running-the-publish-script"},"Running the Publish Script"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Usage"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"Usage: ./node_modules/@rancher/shell/scripts/extension/publish [<options>] [plugins]\n options:\n  -p           Push container images on build\n  -f           Force building the chart even if it already exists\n  -r <name>    Specify destination container registry for built images\n  -o <name>    Specify destination container registry organization for built images\n  -i <prefix>  Specify prefix for the built container image (default: 'ui-extension-')\n  -c           Build as a container image rather than publishing to Github\n  -s <repo>    Specify destination GitHub repository (org/name) - defaults to the git origin\n  -b <branch>  Specify destination GitHub branch\n")),(0,r.kt)("p",null,"You can simply run the ",(0,r.kt)("inlineCode",{parentName:"p"},"publish-pkgs")," script with the option ",(0,r.kt)("inlineCode",{parentName:"p"},"-c")," to have images built without specifying the registry or image names. The image names will be generated by the repository organization and the package name (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"my-org/test-pkg:0.1.0"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn publish-pkgs -c\n")),(0,r.kt)("p",null,"To publish to a specific registry you will need to pass the Registry and Organization arguments:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn publish-pkgs -r <REGISTRY> -o <ORGANIZATION> -c\n")),(0,r.kt)("p",null,"Running any of the commands above will only build your images - in order to publish the images to your registry you will need to either push them manually or you can run the script with the ",(0,r.kt)("inlineCode",{parentName:"p"},"-p")," option. This will automatically push your images to the specified registry."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn publish-pkgs -r <REGISTRY> -o <ORGANIZATION> -p -c\n")),(0,r.kt)("h2",{id:"additional-information"},"Additional Information"),(0,r.kt)("p",null,"You can find more info in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/ui-plugin-server#ui-plugin-server"},"this repository")," on how the image build is accomplished."))}c.isMDXComponent=!0}}]);