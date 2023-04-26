"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7976],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=i(n),m=a,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},921:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},l="Installation",s={unversionedId:"development/getting-started/installation",id:"development/getting-started/installation",title:"Installation",description:"Blubb",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/development/getting-started/installation.md",sourceDirName:"development/getting-started",slug:"/development/getting-started/installation",permalink:"/koala-app/fr/docs/development/getting-started/installation",draft:!1,editUrl:"https://github.com/KoALa-MHF/koala-app/tree/main/website/docs/development/getting-started/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"developmentSidebar",previous:{title:"Setup",permalink:"/koala-app/fr/docs/category/setup"},next:{title:"Contribute",permalink:"/koala-app/fr/docs/category/contribute"}},p={},i=[{value:"Blubb",id:"getting-started-prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Start Frontend",id:"start-frontend",level:2},{value:"Start Backend",id:"start-backend",level:2},{value:"Run Frontend and Backend Together",id:"run-frontend-and-backend-together",level:2},{value:"Generate GraphQL Angular Types/Requests",id:"generate-graphql-angular-typesrequests",level:3},{value:"Execute E2E Tests",id:"execute-e2e-tests",level:2}],u={toc:i},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("h2",{id:"getting-started-prerequisites"},"Blubb"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org"},"Node.js")," 18 LTS version"),(0,a.kt)("li",{parentName:"ul"},"Clone this repository")),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"To install the KoALa app on your local machine, open a terminal window and run the following command in the root folder of the KoALa app:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Bash"},"npm install\n")),(0,a.kt)("h2",{id:"start-frontend"},"Start Frontend"),(0,a.kt)("p",null,"To run the frontend in development mode, run the following command in the root folder of the KoALa app:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Bash"},"nx serve koala-frontend\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Bash"},"npm run start\n")),(0,a.kt)("p",null,"Open the url http://localhost:4200 in a browser."),(0,a.kt)("h2",{id:"start-backend"},"Start Backend"),(0,a.kt)("p",null,"To start the server in development / local mode, run the following command in the root folder of the KoALa app:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Bash"},"nx serve api\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Bash"},"npm run start:api\n")),(0,a.kt)("p",null,"You can check the GraphQL API through the GraphQL playground by opening the url http://localhost:3333/graphql in a browser."),(0,a.kt)("h2",{id:"run-frontend-and-backend-together"},"Run Frontend and Backend Together"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Bash"},"npm run start:all\n")),(0,a.kt)("h3",{id:"generate-graphql-angular-typesrequests"},"Generate GraphQL Angular Types/Requests"),(0,a.kt)("p",null,"To regenerate the client access objects to the GraphQL server based on the changes in the server, run the following commands in separate sessions in the root folder of the KoALa app (wait for the first command to start the server completely, because a running server is needed for the code generation to work):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Bash"},"nx serve api\nnpm run codegen\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Bash"},"npm run start:api\nnpm run codegen\n")),(0,a.kt)("h2",{id:"execute-e2e-tests"},"Execute E2E Tests"),(0,a.kt)("p",null,"First you need to start the KoALa server locally, because the end2end tests rely on a running server instance. You can do that by running the following command in your terminal (see also ",(0,a.kt)("a",{parentName:"p",href:"#start-backend"},"Start Backend"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Bash"},"nx serve api\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Bash"},"npm run start:api\n")))}d.isMDXComponent=!0}}]);