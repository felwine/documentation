"use strict";(self.webpackChunk_felwine_documentation=self.webpackChunk_felwine_documentation||[]).push([[3616],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>b});var t=r(96540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?t.createElement(b,i(i({ref:n},c),{},{components:r})):t.createElement(b,i({ref:n},c))}));function b(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},80076:(e,n,r)=>{r.d(n,{A:()=>s});var t=r(96540),a=r(49489),o=r(7227),i=r(23833),l=r(68316);const s=e=>{const n=e.npm?e.npm:(0,l.A)(e.yarn,"npm"),r=e.yarn?e.yarn:(0,l.A)(e.npm,"yarn");return t.createElement(a.default,null,t.createElement(o.default,{value:"npm",label:"npm",default:!0},t.createElement(i.default,{language:"bash"},n)),t.createElement(o.default,{value:"bash",label:"yarn"},t.createElement(i.default,{language:"bash"},r)))}},32478:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=r(58168),a=(r(96540),r(15680));r(80076);const o={sidebar_position:2},i="Use @loadable in input libraries",l={unversionedId:"guides/libraries/loadable",id:"version-1.0/guides/libraries/loadable",title:"Use @loadable in input libraries",description:"",source:"@site/versioned_docs/version-1.0/guides/libraries/loadable.mdx",sourceDirName:"guides/libraries",slug:"/guides/libraries/loadable",permalink:"/documentation/docs/guides/libraries/loadable",draft:!1,editUrl:"https://github.com/felwine/generator-felwine/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0/guides/libraries/loadable.mdx",tags:[],version:"1.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create a components library",permalink:"/documentation/docs/guides/libraries/usage"},next:{title:"Samples",permalink:"/documentation/docs/guides/samples"}},s={},p=[],c={toc:p},u="wrapper";function d(e){let{components:n,...r}=e;return(0,a.yg)(u,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"use-loadable-in-input-libraries"},"Use @loadable in input libraries"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},"import Felwine from '@felwine/react'\nimport OvideLocal from 'components/shared/felwine-library'\nimport * as Yup from 'yup'\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"import loadable from '@loadable/component'\nconst keys = [        \n    'submit',    \n    'input',            \n    'textArea',\n]\n\nexport default (props) => {\n    const { type } = props\n    if (!keys.includes(type)) {\n        return null\n    }\n    try {\n        const Component = loadable(props => import(`./${type}`), {\n            cacheKey: props => type,\n        })\n        return Component\n    } catch (e) {\n        return null\n    }\n}\n\n\n\n")))}d.isMDXComponent=!0}}]);