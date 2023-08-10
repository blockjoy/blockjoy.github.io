"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7902],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return a?r.createElement(g,l(l({ref:t},p),{},{components:a})):r.createElement(g,l({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},31531:(e,t,a)=>{a.d(t,{p:()=>o});var r=a(67294);const n="base_L3V1",o=e=>{let{method:t,name:a}=e;return r.createElement("h2",{className:n},t&&r.createElement("span",null,t)," ",a&&r.createElement("span",null,a))}},40684:(e,t,a)=>{a.d(t,{Z:()=>g});var r,n,o=a(67294);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}const i=e=>{let{title:t,titleId:a,...i}=e;return o.createElement("svg",l({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},i),t?o.createElement("title",{id:a},t):null,r||(r=o.createElement("path",{d:"M2 12h20",stroke:"#BFF589",strokeWidth:2,strokeMiterlimit:10})),n||(n=o.createElement("path",{d:"m15 5 7 7-7 7",stroke:"#BFF589",strokeWidth:2,strokeMiterlimit:10,strokeLinecap:"square"})))},s="blog-card-list_msIh",c="blog-card_qTpp",p="blog-card-name-wrapper_GDZj",m="blog-card-name_RXJB",u="blog-card-description_c6zp",d=e=>{let{blog:t}=e;return o.createElement("a",{className:c,href:`/blog/${t.path}`},o.createElement("div",{className:p},o.createElement("h3",{className:m},t.name),o.createElement(i,null)),o.createElement("p",{className:u},t.description))},g=e=>{let{blogs:t}=e;return o.createElement("div",{className:s},o.createElement("ul",null,t.map(((e,t)=>o.createElement("li",{key:t},o.createElement(d,{blog:e}))))))}},34695:(e,t,a)=>{a.d(t,{I:()=>o});var r=a(67294);const n="base_PRYo",o=e=>{let{children:t}=e;return r.createElement("p",{className:n},r.createElement("span",null,t))}},29674:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>N,frontMatter:()=>d,metadata:()=>k,toc:()=>f});var r=a(87462),n=a(67294),o=a(3905);const l="introduction_IVD9",i=e=>{let{children:t}=e;return n.createElement("div",{className:l},n.createElement("p",null,t))},s="custom-image-wrapper_gNkk",c=e=>{let{imgSrc:t,alt:a,description:r}=e;return n.createElement("div",{className:s},n.createElement("img",{src:t,alt:a}),r&&n.createElement("p",null,r))};var p=a(40684),m=a(34695),u=a(31531);const d={sidebar_position:1},g="Create a Page",k={unversionedId:"tutorial-basics/create-a-page",id:"tutorial-basics/create-a-page",title:"Create a Page",description:"Version: 2.4.0",source:"@site/docs/tutorial-basics/create-a-page.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-a-page",permalink:"/docs/tutorial-basics/create-a-page",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/create-a-page.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"apiSidebar",previous:{title:"Tutorial - Basics",permalink:"/docs/category/tutorial---basics"},next:{title:"Create a Document",permalink:"/docs/tutorial-basics/create-a-document"}},y={},f=[{value:"Create your first React Page",id:"create-your-first-react-page",level:2},{value:"Create your first Markdown Page",id:"create-your-first-markdown-page",level:2}],b={toc:f},h="wrapper";function N(e){let{components:t,...a}=e;return(0,o.kt)(h,(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-page"},"Create a Page"),(0,o.kt)(m.I,{mdxType:"VersionType"},"Version: 2.4.0"),(0,o.kt)(u.p,{method:"retuns",name:"BlockchainServiceGetResponse",mdxType:"ApiMethod"}),(0,o.kt)(i,{mdxType:"Introduction"},"We believe that people should be able to easily run their own web3 infrastructure (blockchain nodes) anywhere they want. BlockJoy allows you to deploy to your own data centers, cloud accounts, or wherever that makes the most sense for you."),(0,o.kt)("p",null,"Add ",(0,o.kt)("strong",{parentName:"p"},"Markdown or React")," files to ",(0,o.kt)("inlineCode",{parentName:"p"},"src/pages")," to create a ",(0,o.kt)("strong",{parentName:"p"},"standalone page"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Whether running a consumer staking-as-a-service company"),(0,o.kt)("li",{parentName:"ul"},"Let BlockJoy manage your nodes so that your engineers can focus on developing your core value."),(0,o.kt)("li",{parentName:"ul"},"test 3"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"src/pages/index.js")," \u2192 ",(0,o.kt)("inlineCode",{parentName:"li"},"localhost:3000/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"src/pages/foo.md")," \u2192 ",(0,o.kt)("inlineCode",{parentName:"li"},"localhost:3000/foo")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"src/pages/foo/bar.js")," \u2192 ",(0,o.kt)("inlineCode",{parentName:"li"},"localhost:3000/foo/bar"))),(0,o.kt)("h2",{id:"create-your-first-react-page"},"Create your first React Page"),(0,o.kt)("p",null,"Create a file at ",(0,o.kt)("inlineCode",{parentName:"p"},"src/pages/my-react-page.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/pages/my-react-page.js"',title:'"src/pages/my-react-page.js"'},"import React from 'react'; import\nLayout from '@theme/Layout';\n\nexport default function MyReactPage() {\n    return (\n        <Layout>\n            <h1>My React page</h1>\n            <p>This is a React page</p>\n        </Layout>\n    );\n\n    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum\n\n}\n\n")),(0,o.kt)(c,{imgSrc:"/img/docusaurus-social-card.jpg",alt:"Docusaurus",description:"Furthermore, cryptocurrency transactions generally involve lower fees compared to traditional banking systems, and settlements occur faster, eliminating the need for intermediaries and reducing transactional delays.",mdxType:"ImageWithDescription"}),(0,o.kt)("h2",{id:"create-your-first-markdown-page"},"Create your first Markdown Page"),(0,o.kt)("p",null,"Create a file at ",(0,o.kt)("inlineCode",{parentName:"p"},"src/pages/my-markdown-page.md"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mdx",metastring:'title="src/pages/my-markdown-page.md"',title:'"src/pages/my-markdown-page.md"'},"# My Markdown page\n\nThis is a Markdown page\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A famous quote: Furthermore, cryptocurrency transactions generally involve lower fees compared to traditional banking systems, and settlements occur faster, eliminating the need for intermediaries and reducing transactional delays.")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Command"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Example"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Api"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Header"),(0,o.kt)("td",{parentName:"tr",align:null},"Title"),(0,o.kt)("td",{parentName:"tr",align:null},"700"),(0,o.kt)("td",{parentName:"tr",align:null},"Define protocol + host + port (formats)"),(0,o.kt)("td",{parentName:"tr",align:null},"get")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Paragraph"),(0,o.kt)("td",{parentName:"tr",align:null},"/.local/verdaccio/config.yaml"),(0,o.kt)("td",{parentName:"tr",align:null},"config"),(0,o.kt)("td",{parentName:"tr",align:null},"Define protocol + host + port (formats)"),(0,o.kt)("td",{parentName:"tr",align:null},"post")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Paragraph"),(0,o.kt)("td",{parentName:"tr",align:null},"/.local/verdaccio/config.yaml"),(0,o.kt)("td",{parentName:"tr",align:null},"config"),(0,o.kt)("td",{parentName:"tr",align:null},"Set location of the config file"),(0,o.kt)("td",{parentName:"tr",align:null},"delete")))),(0,o.kt)(p.Z,{blogs:[{name:"Add Integrations",description:"Connect services like Google Groups, AWS IAM, Okta and more",path:"mdx-blog-post"},{name:"Add Integrations",description:"Learn more about reviewing access from the web or directly inside of Slack. Connect services like Google Groups.",path:"mdx-blog-post"},{name:"Add Integrations",description:"Connect services like Google Groups, AWS IAM, Okta and more",path:"mdx-blog-post"},{name:"Add Integrations",description:"Learn more about reviewing access from the web or directly inside of Slack. Connect services like Google Groups, AWS IAM, Okta and more.",path:"mdx-blog-post"}],mdxType:"BlogList"}))}N.isMDXComponent=!0}}]);