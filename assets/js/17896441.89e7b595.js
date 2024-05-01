"use strict";(self.webpackChunk_felwine_documentation=self.webpackChunk_felwine_documentation||[]).push([[8401],{44168:(e,t,a)=>{a.d(t,{A:()=>g});var n=a(58168),l=a(96540),r=a(20053),o=a(18630),s=a(5215),c=a(80260),i=a(35358),d=a(23230),m=a(98180);function u(e){return l.createElement("svg",(0,n.A)({viewBox:"0 0 24 24"},e),l.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const v={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function b(){const e=(0,m.A)("/");return l.createElement("li",{className:"breadcrumbs__item"},l.createElement(i.A,{"aria-label":(0,d.translate)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},l.createElement(u,{className:v.breadcrumbHomeIcon})))}const p={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function f(e){let{children:t,href:a,isLast:n}=e;const r="breadcrumbs__link";return n?l.createElement("span",{className:r,itemProp:"name"},t):a?l.createElement(i.A,{className:r,href:a,itemProp:"item"},l.createElement("span",{itemProp:"name"},t)):l.createElement("span",{className:r},t)}function h(e){let{children:t,active:a,index:o,addMicrodata:s}=e;return l.createElement("li",(0,n.A)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.A)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,l.createElement("meta",{itemProp:"position",content:String(o+1)}))}function g(){const e=(0,s.OF)(),t=(0,c.Dt)();return e?l.createElement("nav",{className:(0,r.A)(o.G.docs.docBreadcrumbs,p.breadcrumbsContainer),"aria-label":(0,d.translate)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},l.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&l.createElement(b,null),e.map(((t,a)=>{const n=a===e.length-1;return l.createElement(h,{key:a,active:n,index:a,addMicrodata:!!t.href},l.createElement(f,{href:t.href,isLast:n},t.label))})))):null}},72223:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var n=a(96540),l=a(69817),r=a(4799);const o=n.createContext(null);function s(e){let{children:t,content:a}=e;const l=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return n.createElement(o.Provider,{value:l},t)}function c(){const e=(0,n.useContext)(o);if(null===e)throw new r.dV("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:a}=c();return n.createElement(l.be,{title:e.title,description:e.description,keywords:t.keywords,image:a.image??t.image})}var d=a(20053),m=a(82216),u=a(63682);function v(){const{metadata:e}=c();return n.createElement(u.A,{previous:e.previous,next:e.next})}var b=a(84799),p=a(79436),f=a(18630),h=a(23230);function g(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(h.default,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function E(e){let{lastUpdatedBy:t}=e;return n.createElement(h.default,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function A(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:f.G.common.lastUpdated},n.createElement(h.default,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(g,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(E,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var L=a(55911),N=a(81113);const _={lastUpdated:"lastUpdated_vwxv"};function C(e){return n.createElement("div",{className:(0,d.A)(f.G.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(N.A,e)))}function k(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:l,formattedLastUpdatedAt:r}=e;return n.createElement("div",{className:(0,d.A)(f.G.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(L.A,{editUrl:t})),n.createElement("div",{className:(0,d.A)("col",_.lastUpdated)},(a||l)&&n.createElement(A,{lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function x(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:a,formattedLastUpdatedAt:l,lastUpdatedBy:r,tags:o}=e,s=o.length>0,i=!!(t||a||r);return s||i?n.createElement("footer",{className:(0,d.A)(f.G.docs.docFooter,"docusaurus-mt-lg")},s&&n.createElement(C,{tags:o}),i&&n.createElement(k,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var T=a(94549),H=a(61507),U=a(58168);const w={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function y(e){let{collapsed:t,...a}=e;return n.createElement("button",(0,U.A)({type:"button"},a,{className:(0,d.A)("clean-btn",w.tocCollapsibleButton,!t&&w.tocCollapsibleButtonExpanded,a.className)}),n.createElement(h.default,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const M={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function B(e){let{toc:t,className:a,minHeadingLevel:l,maxHeadingLevel:r}=e;const{collapsed:o,toggleCollapsed:s}=(0,T.u)({initialState:!0});return n.createElement("div",{className:(0,d.A)(M.tocCollapsible,!o&&M.tocCollapsibleExpanded,a)},n.createElement(y,{collapsed:o,onClick:s}),n.createElement(T.N,{lazy:!0,className:M.tocCollapsibleContent,collapsed:o},n.createElement(H.A,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const I={tocMobile:"tocMobile_ITEo"};function O(){const{toc:e,frontMatter:t}=c();return n.createElement(B,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.A)(f.G.docs.docTocMobile,I.tocMobile)})}var V=a(98793);function S(){const{toc:e,frontMatter:t}=c();return n.createElement(V.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:f.G.docs.docTocDesktop})}var G=a(85225),P=a(25207);function R(e){let{children:t}=e;const a=function(){const{metadata:e,frontMatter:t,contentTitle:a}=c();return t.hide_title||void 0!==a?null:e.title}();return n.createElement("div",{className:(0,d.A)(f.G.docs.docMarkdown,"markdown")},a&&n.createElement("header",null,n.createElement(G.A,{as:"h1"},a)),n.createElement(P.A,null,t))}var D=a(44168);const F={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function z(e){let{children:t}=e;const a=function(){const{frontMatter:e,toc:t}=c(),a=(0,m.l)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?n.createElement(O,null):void 0,desktop:!r||"desktop"!==a&&"ssr"!==a?void 0:n.createElement(S,null)}}();return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,d.A)("col",!a.hidden&&F.docItemCol)},n.createElement(b.A,null),n.createElement("div",{className:F.docItemContainer},n.createElement("article",null,n.createElement(D.A,null),n.createElement(p.A,null),a.mobile,n.createElement(R,null,t),n.createElement(x,null)),n.createElement(v,null))),a.desktop&&n.createElement("div",{className:"col col--3"},a.desktop))}function j(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,a=e.content;return n.createElement(s,{content:e.content},n.createElement(l.e3,{className:t},n.createElement(i,null),n.createElement(z,null,n.createElement(a,null))))}},63682:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(58168),l=a(96540),r=a(23230),o=a(13555);function s(e){const{previous:t,next:a}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.translate)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&l.createElement(o.A,(0,n.A)({},t,{subLabel:l.createElement(r.default,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&l.createElement(o.A,(0,n.A)({},a,{subLabel:l.createElement(r.default,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},79436:(e,t,a)=>{a.d(t,{A:()=>c});var n=a(96540),l=a(20053),r=a(23230),o=a(18630),s=a(33403);function c(e){let{className:t}=e;const a=(0,s.r)();return a.badge?n.createElement("span",{className:(0,l.A)(t,o.G.docs.docVersionBadge,"badge badge--secondary")},n.createElement(r.default,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},84799:(e,t,a)=>{a.d(t,{A:()=>f});var n=a(96540),l=a(20053),r=a(97639),o=a(35358),s=a(23230),c=a(19802),i=a(18630),d=a(2780),m=a(33403);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.default,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.default,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function b(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(s.default,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(o.A,{to:a,onClick:l},n.createElement(s.default,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:o}}=(0,r.A)(),{pluginId:s}=(0,c.vT)({failfast:!0}),{savePreferredVersionName:m}=(0,d.g1)(s),{latestDocSuggestion:u,latestVersionSuggestion:p}=(0,c.HW)(s),f=u??(h=p).docs.find((e=>e.id===h.mainDocId));var h;return n.createElement("div",{className:(0,l.A)(t,i.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:o,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(b,{versionLabel:p.label,to:f.path,onClick:()=>m(p.name)})))}function f(e){let{className:t}=e;const a=(0,m.r)();return a.banner?n.createElement(p,{className:t,versionMetadata:a}):null}},55911:(e,t,a)=>{a.d(t,{A:()=>d});var n=a(96540),l=a(23230),r=a(18630),o=a(58168),s=a(20053);const c={iconEdit:"iconEdit_Z9Sw"};function i(e){let{className:t,...a}=e;return n.createElement("svg",(0,o.A)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.A)(c.iconEdit,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function d(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.G.common.editThisPage},n.createElement(i,null),n.createElement(l.default,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},13555:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(96540),l=a(20053),r=a(35358);function o(e){const{permalink:t,title:a,subLabel:o,isNext:s}=e;return n.createElement(r.A,{className:(0,l.A)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&n.createElement("div",{className:"pagination-nav__sublabel"},o),n.createElement("div",{className:"pagination-nav__label"},a))}},98793:(e,t,a)=>{a.d(t,{A:()=>d});var n=a(58168),l=a(96540),r=a(20053),o=a(61507);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},c="table-of-contents__link toc-highlight",i="table-of-contents__link--active";function d(e){let{className:t,...a}=e;return l.createElement("div",{className:(0,r.A)(s.tableOfContents,"thin-scrollbar",t)},l.createElement(o.A,(0,n.A)({},a,{linkClassName:c,linkActiveClassName:i})))}},61507:(e,t,a)=>{a.d(t,{A:()=>b});var n=a(58168),l=a(96540),r=a(86957);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),a=Array(7).fill(-1);t.forEach(((e,t)=>{const n=a.slice(2,e.level);e.parentIndex=Math.max(...n),a[e.level]=t}));const n=[];return t.forEach((e=>{const{parentIndex:a,...l}=e;a>=0?t[a].children.push(l):n.push(l)})),n}function s(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function i(e,t){let{anchorTopOffset:a}=t;const n=e.find((e=>c(e).top>=a));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(n))?n:e[e.indexOf(n)-1]??null}return e[e.length-1]??null}function d(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.p)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,l.useRef)(void 0),a=d();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:n,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:a}=e;const n=[];for(let l=t;l<=a;l+=1)n.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),c=i(s,{anchorTopOffset:a.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,a])}function u(e){let{toc:t,className:a,linkClassName:n,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}const v=l.memo(u);function b(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:d,maxHeadingLevel:u,...b}=e;const p=(0,r.p)(),f=d??p.tableOfContents.minHeadingLevel,h=u??p.tableOfContents.maxHeadingLevel,g=function(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return(0,l.useMemo)((()=>s({toc:o(t),minHeadingLevel:a,maxHeadingLevel:n})),[t,a,n])}({toc:t,minHeadingLevel:f,maxHeadingLevel:h});return m((0,l.useMemo)((()=>{if(c&&i)return{linkClassName:c,linkActiveClassName:i,minHeadingLevel:f,maxHeadingLevel:h}}),[c,i,f,h])),l.createElement(v,(0,n.A)({toc:g,className:a,linkClassName:c},b))}},41883:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(96540),l=a(20053),r=a(35358);const o={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function s(e){let{permalink:t,label:a,count:s}=e;return n.createElement(r.A,{href:t,className:(0,l.A)(o.tag,s?o.tagWithCount:o.tagRegular)},a,s&&n.createElement("span",null,s))}},81113:(e,t,a)=>{a.d(t,{A:()=>c});var n=a(96540),l=a(20053),r=a(23230),o=a(41883);const s={tags:"tags_jXut",tag:"tag_QGVx"};function c(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.default,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.A)(s.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:s.tag},n.createElement(o.A,{label:t,permalink:a}))}))))}}}]);