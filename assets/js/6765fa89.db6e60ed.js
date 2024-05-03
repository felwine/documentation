"use strict";(self.webpackChunk_felwine_documentation=self.webpackChunk_felwine_documentation||[]).push([[2503],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>f});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80076:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(96540),a=n(49489),o=n(7227),l=n(23833),i=n(68316);const c=e=>{const t=e.npm?e.npm:(0,i.A)(e.yarn,"npm"),n=e.yarn?e.yarn:(0,i.A)(e.npm,"yarn");return r.createElement(a.default,null,r.createElement(o.default,{value:"npm",label:"npm",default:!0},r.createElement(l.default,{language:"bash"},t)),r.createElement(o.default,{value:"bash",label:"yarn"},r.createElement(l.default,{language:"bash"},n)))}},10796:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(96540),a=n(80076),o=n(23833);const l=e=>{let{}=e;return r.createElement("div",{class:"                     \n        "},r.createElement("p",{className:"text-lg font-bold"},"1. Install felwine and a component library"),r.createElement(a.A,{npm:"npm install -g felwine"}),r.createElement("p",{className:"text-lg font-bold"},"2. Create a project"),r.createElement(o.default,{language:"bash"},"felwine new"),r.createElement("p",{className:"text-lg font-bold"},"3. Add a platform (optional)"),r.createElement(o.default,{language:"bash"},"felwine platform add"),r.createElement("p",{className:"text-lg font-bold mb-2"},"4. Create an article"),"The post is written in markdown, you can add images and tables.",r.createElement(o.default,{language:"bash"},"felwine post new"),r.createElement("p",{className:"text-lg font-bold"},"5. Sync the project"),r.createElement(o.default,{language:"bash"},"felwine sync"))}},79941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(58168),a=(n(96540),n(15680)),o=(n(80076),n(10796));const l={sidebar_position:1},i="Quick start \ud83d\ude80",c={unversionedId:"quickstart",id:"version-1.0/quickstart",title:"Quick start \ud83d\ude80",description:"For people in a hurry",source:"@site/versioned_docs/version-1.0/quickstart.mdx",sourceDirName:".",slug:"/quickstart",permalink:"/documentation/docs/quickstart",draft:!1,editUrl:"https://github.com/felwine/generator-felwine/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0/quickstart.mdx",tags:[],version:"1.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/documentation/docs/overview"},next:{title:"Getting started",permalink:"/documentation/docs/category/getting-started"}},s={},u=[],p={toc:u},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"quick-start-"},"Quick start \ud83d\ude80"),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"For people in a hurry")),(0,a.yg)(o.A,{hideTitle:!0,mdxType:"QuickStart"}))}d.isMDXComponent=!0}}]);