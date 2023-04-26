"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1208],{3905:(t,e,n)=>{n.d(e,{Zo:()=>i,kt:()=>c});var l=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=l.createContext({}),k=function(t){var e=l.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},i=function(t){var e=k(t.components);return l.createElement(o.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},m=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,o=t.parentName,i=s(t,["components","mdxType","originalType","parentName"]),p=k(n),m=r,c=p["".concat(o,".").concat(m)]||p[m]||d[m]||a;return n?l.createElement(c,u(u({ref:e},i),{},{components:n})):l.createElement(c,u({ref:e},i))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,u=new Array(a);u[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[p]="string"==typeof t?t:r,u[1]=s;for(var k=2;k<a;k++)u[k]=n[k];return l.createElement.apply(null,u)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},791:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>u,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>k});var l=n(7462),r=(n(7294),n(3905));const a={id:"mutations",title:"Mutations",slug:"mutations",sidebar_position:2},u=void 0,s={unversionedId:"development/api/mutations",id:"development/api/mutations",title:"Mutations",description:"authenticateSession",source:"@site/docs/development/api/mutations.md",sourceDirName:"development/api",slug:"/development/api/mutations",permalink:"/koala-app/fr/docs/development/api/mutations",draft:!1,editUrl:"https://github.com/KoALa-MHF/koala-app/tree/main/website/docs/development/api/mutations.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"mutations",title:"Mutations",slug:"mutations",sidebar_position:2},sidebar:"developmentSidebar",previous:{title:"Queries",permalink:"/koala-app/fr/docs/development/api/queries"},next:{title:"Objects",permalink:"/koala-app/fr/docs/development/api/objects"}},o={},k=[{value:"authenticateSession",id:"authenticatesession",level:2},{value:"authenticateUserSession",id:"authenticateusersession",level:2},{value:"createAnnotation",id:"createannotation",level:2},{value:"createMarker",id:"createmarker",level:2},{value:"createMedia",id:"createmedia",level:2},{value:"createSession",id:"createsession",level:2},{value:"createUserSession",id:"createusersession",level:2},{value:"inviteUserSession",id:"inviteusersession",level:2},{value:"removeAnnotation",id:"removeannotation",level:2},{value:"removeMarker",id:"removemarker",level:2},{value:"removeSession",id:"removesession",level:2},{value:"removeUserSession",id:"removeusersession",level:2},{value:"updateAnnotation",id:"updateannotation",level:2},{value:"updateMarker",id:"updatemarker",level:2},{value:"updateSession",id:"updatesession",level:2},{value:"updateToolbar",id:"updatetoolbar",level:2},{value:"updateUser",id:"updateuser",level:2},{value:"updateUserSession",id:"updateusersession",level:2}],i={toc:k},p="wrapper";function d(t){let{components:e,...n}=t;return(0,r.kt)(p,(0,l.Z)({},i,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"authenticatesession"},"authenticateSession"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("a",{parentName:"p",href:"objects#authentication"},"Authentication!")),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"authenticateSessionInput",(0,r.kt)("br",null),(0,r.kt)("a",{href:"inputObjects#authenticatesessioninput"},(0,r.kt)("code",null,"AuthenticateSessionInput!"))),(0,r.kt)("td",null)))),(0,r.kt)("h2",{id:"authenticateusersession"},"authenticateUserSession"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("a",{parentName:"p",href:"objects#authentication"},"Authentication!")),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"authenticateUserSessionInput",(0,r.kt)("br",null),(0,r.kt)("a",{href:"inputObjects#authenticateusersessioninput"},(0,r.kt)("code",null,"AuthenticateUserSessionInput!"))),(0,r.kt)("td",null)))),(0,r.kt)("h2",{id:"createannotation"},"createAnnotation"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("a",{parentName:"p",href:"objects#annotation"},"Annotation!")),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"createAnnotationInput",(0,r.kt)("br",null),(0,r.kt)("a",{href:"inputObjects#createannotationinput"},(0,r.kt)("code",null,"CreateAnnotationInput!"))),(0,r.kt)("td",null)))),(0,r.kt)("h2",{id:"createmarker"},"createMarker"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("a",{parentName:"p",href:"objects#marker"},"Marker!")),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"createMarkerInput",(0,r.kt)("br",null),(0,r.kt)("a",{href:"inputObjects#createmarkerinput"},(0,r.kt)("code",null,"CreateMarkerInput!"))),(0,r.kt)("td",null)))),(0,r.kt)("h2",{id:"createmedia"},"createMedia"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("a",{parentName:"p",href:"objects#media"},"Media!")),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"createMediaInput",(0,r.kt)("br",null),(0,r.kt)("a",{href:"inputObjects#createmediainput"},(0,r.kt)("code",null,"CreateMediaInput!"))),(0,r.kt)("td",null)))),(0,r.kt)("h2",{id:"createsession"},"createSession"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("a",{parentName:"p",href:"objects#session"},"Session!")),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"createSessionInput",(0,r.kt)("br",null),(0,r.kt)("a",{href:"inputObjects#createsessioninput"},(0,r.kt)("code",null,"CreateSessionInput!"))),(0,r.kt)("td",null)))),(0,r.kt)("h2",{id:"createusersession"},"createUserSession"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("a",{parentName:"p",href:"objects#usersession"},"UserSession!")),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"createUserSessionInput",(0,r.kt)("br",null),(0,r.kt)("a",{href:"inputObjects#createusersessioninput"},(0,r.kt)("code",null,"CreateUserSessionInput!"))),(0,r.kt)("td",null)))),(0,r.kt)("h2",{id:"inviteusersession"},"inviteUserSession"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("a",{parentName:"p",href:"objects#usersession"},"[UserSession!]!")),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"inviteUserSessionInput",(0,r.kt)("br",null),(0,r.kt)("a",{href:"inputObjects#inviteusersessioninput"},(0,r.kt)("code",null,"InviteUserSessionInput!"))),(0,r.kt)("td",null)))),(0,r.kt)("h2",{id:"removeannotation"},"removeAnnotation"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("a",{parentName:"p",href:"objects#annotation"},"Annotation!")),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"id",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#int"},(0,r.kt)("code",null,"Int!"))),(0,r.kt)("td",null)))),(0,r.kt)("h2",{id:"removemarker"},"removeMarker"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("a",{parentName:"p",href:"objects#marker"},"Marker!")),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"id",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#int"},(0,r.kt)("code",null,"Int!"))),(0,r.kt)("td",null)))),(0,r.kt)("h2",{id:"removesession"},"removeSession"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("a",{parentName:"p",href:"objects#session"},"Session!")),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"id",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#int"},(0,r.kt)("code",null,"Int!"))),(0,r.kt)("td",null)))),(0,r.kt)("h2",{id:"removeusersession"},"removeUserSession"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("a",{parentName:"p",href:"objects#usersession"},"UserSession!")),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"id",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#int"},(0,r.kt)("code",null,"Int!"))),(0,r.kt)("td",null)))),(0,r.kt)("h2",{id:"updateannotation"},"updateAnnotation"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("a",{parentName:"p",href:"objects#annotation"},"Annotation!")),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"id",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#int"},(0,r.kt)("code",null,"Int!"))),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"updateAnnotationInput",(0,r.kt)("br",null),(0,r.kt)("a",{href:"inputObjects#updateannotationinput"},(0,r.kt)("code",null,"UpdateAnnotationInput!"))),(0,r.kt)("td",null)))),(0,r.kt)("h2",{id:"updatemarker"},"updateMarker"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("a",{parentName:"p",href:"objects#marker"},"Marker!")),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"id",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#int"},(0,r.kt)("code",null,"Int!"))),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"updateMarkerInput",(0,r.kt)("br",null),(0,r.kt)("a",{href:"inputObjects#updatemarkerinput"},(0,r.kt)("code",null,"UpdateMarkerInput!"))),(0,r.kt)("td",null)))),(0,r.kt)("h2",{id:"updatesession"},"updateSession"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("a",{parentName:"p",href:"objects#session"},"Session!")),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"id",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#int"},(0,r.kt)("code",null,"Int!"))),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"updateSessionInput",(0,r.kt)("br",null),(0,r.kt)("a",{href:"inputObjects#updatesessioninput"},(0,r.kt)("code",null,"UpdateSessionInput!"))),(0,r.kt)("td",null)))),(0,r.kt)("h2",{id:"updatetoolbar"},"updateToolbar"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("a",{parentName:"p",href:"objects#toolbar"},"Toolbar!")),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"id",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#int"},(0,r.kt)("code",null,"Int!"))),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"updateToolbarInput",(0,r.kt)("br",null),(0,r.kt)("a",{href:"inputObjects#updatetoolbarinput"},(0,r.kt)("code",null,"UpdateToolbarInput!"))),(0,r.kt)("td",null)))),(0,r.kt)("h2",{id:"updateuser"},"updateUser"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("a",{parentName:"p",href:"objects#user"},"User!")),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"updateUserInput",(0,r.kt)("br",null),(0,r.kt)("a",{href:"inputObjects#updateuserinput"},(0,r.kt)("code",null,"UpdateUserInput!"))),(0,r.kt)("td",null)))),(0,r.kt)("h2",{id:"updateusersession"},"updateUserSession"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("a",{parentName:"p",href:"objects#usersession"},"UserSession!")),(0,r.kt)("p",{style:{marginBottom:"0.4em"}},(0,r.kt)("strong",null,"Arguments")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Name"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"id",(0,r.kt)("br",null),(0,r.kt)("a",{href:"scalars#int"},(0,r.kt)("code",null,"Int!"))),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"updateUserSessionInput",(0,r.kt)("br",null),(0,r.kt)("a",{href:"inputObjects#updateusersessioninput"},(0,r.kt)("code",null,"UpdateUserSessionInput!"))),(0,r.kt)("td",null)))))}d.isMDXComponent=!0}}]);