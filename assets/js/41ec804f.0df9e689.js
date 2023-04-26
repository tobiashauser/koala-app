"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2416],{3905:(t,l,n)=>{n.d(l,{Zo:()=>d,kt:()=>b});var e=n(7294);function r(t,l,n){return l in t?Object.defineProperty(t,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[l]=n,t}function u(t,l){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);l&&(e=e.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),n.push.apply(n,e)}return n}function k(t){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?u(Object(n),!0).forEach((function(l){r(t,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(n,l))}))}return t}function a(t,l){if(null==t)return{};var n,e,r=function(t,l){if(null==t)return{};var n,e,r={},u=Object.keys(t);for(e=0;e<u.length;e++)n=u[e],l.indexOf(n)>=0||(r[n]=t[n]);return r}(t,l);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(e=0;e<u.length;e++)n=u[e],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=e.createContext({}),o=function(t){var l=e.useContext(s),n=l;return t&&(n="function"==typeof t?t(l):k(k({},l),t)),n},d=function(t){var l=o(t.components);return e.createElement(s.Provider,{value:l},t.children)},i="mdxType",c={inlineCode:"code",wrapper:function(t){var l=t.children;return e.createElement(e.Fragment,{},l)}},p=e.forwardRef((function(t,l){var n=t.components,r=t.mdxType,u=t.originalType,s=t.parentName,d=a(t,["components","mdxType","originalType","parentName"]),i=o(n),p=r,b=i["".concat(s,".").concat(p)]||i[p]||c[p]||u;return n?e.createElement(b,k(k({ref:l},d),{},{components:n})):e.createElement(b,k({ref:l},d))}));function b(t,l){var n=arguments,r=l&&l.mdxType;if("string"==typeof t||r){var u=n.length,k=new Array(u);k[0]=p;var a={};for(var s in l)hasOwnProperty.call(l,s)&&(a[s]=l[s]);a.originalType=t,a[i]="string"==typeof t?t:r,k[1]=a;for(var o=2;o<u;o++)k[o]=n[o];return e.createElement.apply(null,k)}return e.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9746:(t,l,n)=>{n.r(l),n.d(l,{assets:()=>s,contentTitle:()=>k,default:()=>c,frontMatter:()=>u,metadata:()=>a,toc:()=>o});var e=n(7462),r=(n(7294),n(3905));const u={id:"objects",title:"Objects",slug:"objects",sidebar_position:4},k=void 0,a={unversionedId:"development/api/objects",id:"development/api/objects",title:"Objects",description:"Annotation",source:"@site/docs/development/api/objects.md",sourceDirName:"development/api",slug:"/development/api/objects",permalink:"/koala-app/docs/development/api/objects",draft:!1,editUrl:"https://github.com/KoALa-MHF/koala-app/tree/main/website/docs/development/api/objects.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"objects",title:"Objects",slug:"objects",sidebar_position:4},sidebar:"developmentSidebar",previous:{title:"Mutations",permalink:"/koala-app/docs/development/api/mutations"},next:{title:"Enums",permalink:"/koala-app/docs/development/api/enums"}},s={},o=[{value:"Annotation",id:"annotation",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Marker",id:"marker",level:2},{value:"Media",id:"media",level:2},{value:"Session",id:"session",level:2},{value:"Toolbar",id:"toolbar",level:2},{value:"User",id:"user",level:2},{value:"UserSession",id:"usersession",level:2}],d={toc:o},i="wrapper";function c(t){let{components:l,...n}=t;return(0,r.kt)(i,(0,e.Z)({},d,n,{components:l,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"annotation"},"Annotation"),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Fields")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"createdAt",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#datetime"},(0,r.kt)("code",null,"DateTime!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Creation Date"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"updatedAt",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#datetime"},(0,r.kt)("code",null,"DateTime!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Date of Last Update"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"id",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#int"},(0,r.kt)("code",null,"Int!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"ID for Annotation"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"start",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#int"},(0,r.kt)("code",null,"Int!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Annotation Start Seconds"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"end",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#int"},(0,r.kt)("code",null,"Int"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Annotation End Seconds"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"marker",(0,r.kt)("br",null),(0,r.kt)("a",{href:"objects#marker"},(0,r.kt)("code",null,"Marker!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Associated Marker"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"userSession",(0,r.kt)("br",null),(0,r.kt)("a",{href:"objects#usersession"},(0,r.kt)("code",null,"UserSession!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Associated UserSession"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"note",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#string"},(0,r.kt)("code",null,"String"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Annotation Note"))))),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Fields")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"accessToken",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#string"},(0,r.kt)("code",null,"String!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"JWT Bearer Token"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"user",(0,r.kt)("br",null),(0,r.kt)("a",{href:"objects#user"},(0,r.kt)("code",null,"User!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Authenticated user"))))),(0,r.kt)("h2",{id:"marker"},"Marker"),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Fields")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"createdAt",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#datetime"},(0,r.kt)("code",null,"DateTime!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Creation Date"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"updatedAt",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#datetime"},(0,r.kt)("code",null,"DateTime!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Date of Last Update"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"id",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#int"},(0,r.kt)("code",null,"Int!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"ID for Marker"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"type",(0,r.kt)("br",null),(0,r.kt)("a",{href:"enums#markertype"},(0,r.kt)("code",null,"MarkerType!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Marker Type"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"name",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#string"},(0,r.kt)("code",null,"String!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Marker Name"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"abbreviation",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#string"},(0,r.kt)("code",null,"String"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Marker Name Abbreviation (e.g. for small screen sizes"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"description",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#string"},(0,r.kt)("code",null,"String"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Marker Description"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"color",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#string"},(0,r.kt)("code",null,"String!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Marker Color"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"icon",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#string"},(0,r.kt)("code",null,"String"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Marker Icon"))))),(0,r.kt)("h2",{id:"media"},"Media"),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Fields")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"createdAt",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#datetime"},(0,r.kt)("code",null,"DateTime!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Creation Date"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"updatedAt",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#datetime"},(0,r.kt)("code",null,"DateTime!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Date of Last Update"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"id",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#id"},(0,r.kt)("code",null,"ID!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"ID for Media"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"name",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#string"},(0,r.kt)("code",null,"String!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Media Name"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"mimeType",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#string"},(0,r.kt)("code",null,"String!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Media Mime Type"))))),(0,r.kt)("h2",{id:"session"},"Session"),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Fields")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"createdAt",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#datetime"},(0,r.kt)("code",null,"DateTime!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Creation Date"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"updatedAt",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#datetime"},(0,r.kt)("code",null,"DateTime!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Date of Last Update"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"id",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#id"},(0,r.kt)("code",null,"ID!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"ID for Session"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"name",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#string"},(0,r.kt)("code",null,"String!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Session Name"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"description",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#string"},(0,r.kt)("code",null,"String"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Description"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"status",(0,r.kt)("br",null),(0,r.kt)("a",{href:"enums#sessionstatus"},(0,r.kt)("code",null,"SessionStatus"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Session Status"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"start",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#datetime"},(0,r.kt)("code",null,"DateTime"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Start of Session"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"end",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#datetime"},(0,r.kt)("code",null,"DateTime"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"End of Session"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"editable",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#boolean"},(0,r.kt)("code",null,"Boolean"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Default for Session - Editable for Participants"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"enablePlayer",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#boolean"},(0,r.kt)("code",null,"Boolean"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Default for Session - Player Enabled for Participants"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"displaySampleSolution",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#boolean"},(0,r.kt)("code",null,"Boolean"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Default for Session - Sample Solution Displayed"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"enableLiveAnalysis",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#boolean"},(0,r.kt)("code",null,"Boolean"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Default for Session - Annotations are Directly Displayed in Analysis"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"media",(0,r.kt)("br",null),(0,r.kt)("a",{href:"objects#media"},(0,r.kt)("code",null,"Media"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Associated Media File"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"code",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#string"},(0,r.kt)("code",null,"String!"))),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"toolbars",(0,r.kt)("br",null),(0,r.kt)("a",{href:"objects#toolbar"},(0,r.kt)("code",null,"[Toolbar!]!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Associated Session"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"userSessions",(0,r.kt)("br",null),(0,r.kt)("a",{href:"objects#usersession"},(0,r.kt)("code",null,"[UserSession!]!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Associated User Sessions"))))),(0,r.kt)("h2",{id:"toolbar"},"Toolbar"),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Fields")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"createdAt",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#datetime"},(0,r.kt)("code",null,"DateTime!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Creation Date"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"updatedAt",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#datetime"},(0,r.kt)("code",null,"DateTime!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Date of Last Update"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"id",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#id"},(0,r.kt)("code",null,"ID!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"ID for Media"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"session",(0,r.kt)("br",null),(0,r.kt)("a",{href:"objects#session"},(0,r.kt)("code",null,"Session!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Associated Session"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"markers",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#string"},(0,r.kt)("code",null,"[String!]!"))),(0,r.kt)("td",null)))),(0,r.kt)("h2",{id:"user"},"User"),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Fields")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"createdAt",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#datetime"},(0,r.kt)("code",null,"DateTime!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Creation Date"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"updatedAt",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#datetime"},(0,r.kt)("code",null,"DateTime!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Date of Last Update"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"id",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#id"},(0,r.kt)("code",null,"ID!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"ID for User"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"displayName",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#string"},(0,r.kt)("code",null,"String"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"User Display Name"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"email",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#string"},(0,r.kt)("code",null,"String"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"User Email"))))),(0,r.kt)("h2",{id:"usersession"},"UserSession"),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Fields")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"createdAt",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#datetime"},(0,r.kt)("code",null,"DateTime!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Creation Date"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"updatedAt",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#datetime"},(0,r.kt)("code",null,"DateTime!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Date of Last Update"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"id",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#int"},(0,r.kt)("code",null,"Int!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"ID for User Session"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"status",(0,r.kt)("br",null),(0,r.kt)("a",{href:"enums#usersessionstatus"},(0,r.kt)("code",null,"UserSessionStatus!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"User Session Status"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"note",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#string"},(0,r.kt)("code",null,"String"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"User Session Note"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"session",(0,r.kt)("br",null),(0,r.kt)("a",{href:"objects#session"},(0,r.kt)("code",null,"Session!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Associated Session"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"owner",(0,r.kt)("br",null),(0,r.kt)("a",{href:"objects#user"},(0,r.kt)("code",null,"User!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Associated User"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"invitedAt",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#datetime"},(0,r.kt)("code",null,"DateTime!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Invitation Date"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"annotations",(0,r.kt)("br",null),(0,r.kt)("a",{href:"objects#annotation"},(0,r.kt)("code",null,"[Annotation!]!"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Associated Annotations"))))))}c.isMDXComponent=!0}}]);