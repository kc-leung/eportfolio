(this.webpackJsonpeportfolio=this.webpackJsonpeportfolio||[]).push([[0],[,,,,,,,,,,,function(e,t,a){},,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/demo.912e5b02.svg"},function(e,t,a){e.exports=a.p+"static/media/github.9fe185fb.svg"},function(e,t,a){e.exports=a(62)},,,,,function(e,t,a){},,,,,function(e,t,a){},,,,,,,,function(e,t,a){e.exports=a.p+"static/media/PinIt.f5b97f46.png"},function(e,t,a){e.exports=a.p+"static/media/ReactApp.2819679c.png"},function(e,t,a){e.exports=a.p+"static/media/AngularStudents.0e3317f7.png"},function(e,t,a){e.exports=a.p+"static/media/FrontEndChallenge.b6970a05.png"},function(e,t,a){e.exports=a.p+"static/media/PracticeApp.ec921996.png"},function(e,t,a){e.exports=a.p+"static/media/Angularstore.92d5ccef.png"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),o=a.n(i),c=(a(34),a(6)),l=a(8),s={isModalWindowStatus:!1},u=Object(l.b)({modalWindowReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_MODAL_WINDOW":return{isModalWindowStatus:t.isModalWindowStatus};default:return e}}});var m=a(1),f=a(2),d=a(4),p=a(3),h=a(5),g=(a(39),a(11),a(9)),v=[a(47),a(48),a(49),a(50),a(51),a(52)],b=[{title:"reactNative - app - PinIT",color:"#6fc3df",description:"Multiple users within a group to view and share their favorite spot for different activities giving suggestion for those who are new in the area and want to explore what is the best in where they will be heading to.",backgroundImage:v[0],urlDemo:"https://drive.google.com/file/d/1S05r2VV82cuSQP7EynVRWrq7allT1Etf/view?usp=sharing",urlGithub:"https://github.com/mapshare/mobile-app-frontend"},{title:"react - redux - firebase",color:"#ec8d81",description:"Project posting application with account creation system and role based authorization for access control.",backgroundImage:v[1],urlDemo:"https://react-redux-firebase-67bb5.firebaseapp.com/",urlGithub:"https://github.com/kc-leung/react-redux-firebase"},{title:"angular - app - employes",color:"rgb(244, 163, 83)",description:"Full stack application which display the retrieved employee\u2019s data from a backend API with the feature of updating and validating the inputted information.",backgroundImage:v[4],urlDemo:"https://angular-application-employees.herokuapp.com/",urlGithub:"https://github.com/kc-leung/angular-app-employes"},{title:"angular - app - comment",color:"#8ea9e8",description:"Comment/Posting system which the user can select a specific item and remove their own Comment/Post.",backgroundImage:v[5],urlDemo:"https://angular-app-comment.herokuapp.com/",urlGithub:"https://github.com/kc-leung/angular-app-comments"},{title:"angular - app - student",color:"#87c5a4",description:"Display the retrieved student\u2019s data from a backend API with a filter and searching feature for each student.",backgroundImage:v[2],urlDemo:"https://angular-app-student.herokuapp.com/",urlGithub:"https://github.com/kc-leung/angular-app-student"},{title:"angular - github - starring",color:"#e7b788",description:"A web application which access Github developer API allowing the user to add and delete a specific repository from starring.",backgroundImage:v[3],urlDemo:"https://my-gitlist.herokuapp.com/",urlGithub:"https://github.com/kc-leung/angular-github-starring"}],E=[{title:"HOME",link:"home"},{title:"PROJECTS",link:"projects"},{title:"ABOUT",link:"about"},{title:"CONTACTS",link:"contacts"}],O=(a(53),function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbarContainer"},E.map((function(e,t){return r.a.createElement("div",{key:t,className:"navbarItem"},r.a.createElement(g.Link,{activeClass:"active",to:e.link,spy:!0,smooth:!0,offset:-62,duration:500},e.title))})))}}]),t}(n.Component)),w=function(e){return console.log("click"),{type:"IS_MODAL_WINDOW",isModalWindowStatus:e}},y=(a(54),function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"menuContainer",onClick:function(){return e.props.isModalWindow(!0)}},r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"line"}))}}]),t}(n.Component)),j=Object(c.b)(null,(function(e){return{isModalWindow:function(t){return e(w(t))}}}))(y),N=(a(55),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).handleScroll=function(){window.pageYOffset>a.props.landingBottomRect-62?a.setState({sticky:!0}):a.setState({sticky:!1})},a.handleResize=function(){window.innerWidth<650||window.innerHeight<450?a.setState({isMobile:!0}):a.setState({isMobile:!1})},a.state={sticky:!1,isMobile:!1},a.headerRef=r.a.createRef(),a}return Object(h.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize),this.handleResize()}},{key:"render",value:function(){return r.a.createElement("div",{className:this.state.sticky?"stickyHeaderContainer":"headerContainer fade-in",ref:this.headerRef},r.a.createElement("a",{className:"logoContainer",href:"#home",onClick:function(){g.animateScroll.scrollToTop()}},r.a.createElement("div",{className:"name"},"KC LEUNG"),this.state.isMobile||r.a.createElement("div",{className:"profession"},"WEB DEVELOPER")),this.state.isMobile?r.a.createElement(j,null):r.a.createElement(O,null))}}]),t}(n.Component)),k=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={bottomRect:0},a.landingRef=r.a.createRef(),a}return Object(h.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.setState({bottomRect:this.landingRef.current.getBoundingClientRect().bottom})}},{key:"render",value:function(){return r.a.createElement("div",{id:"home",className:"landingContainer",ref:this.landingRef},r.a.createElement("div",{className:"landingContainer-cover"}),r.a.createElement(N,{landingBottomRect:this.state.bottomRect}),r.a.createElement("div",{className:"contentContainer fade-in"},r.a.createElement("div",{className:"title"},"Welcome to KC's ePortfolio."),r.a.createElement("div",{className:"separator"}),r.a.createElement("div",{className:"content"},"Coding alone is hard and progress is slow. ",r.a.createElement("br",null)," Working with a team is a two way relationship ",r.a.createElement("br",null)," where I can provide value to you while you invest in me.")))}}]),t}(n.Component),C=(a(56),function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"about",className:"aboutContainer"},r.a.createElement("div",{className:"title"},"About Me!"),r.a.createElement("div",{className:"content"},r.a.createElement("p",null,"Hello! you are here to learn more about me"," ",r.a.createElement("span",{role:"img","aria-label":"impressed"},"\ud83d\ude32"),"."),r.a.createElement("p",null,"I am Kc Leung a Web Developer who loves learning new things. Coding was the perfect place to be since it is always changing and moving forward. New technologies and framework emerges which as a developer we can't stop learning otherwise we will fall behind"," ",r.a.createElement("span",{role:"img","aria-label":"study"},"\ud83e\udd13"),"."),r.a.createElement("p",null,"First, there was jQuery, then Angular, then React and now Vue. All these new ways of coding are emerging so fast, some people might find this overwhelming but for me this is what makes programming exciting"," ",r.a.createElement("span",{role:"img","aria-label":"study"},"\ud83d\ude01\ud83d\udc68\u200d\ud83d\udcbb"),".")))}}]),t}(n.Component)),R=(a(57),a(27)),S=a.n(R),I=a(28),M=a.n(I),x=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).onHoverItem=function(e){a.setState({active:e})},a.state={active:null,animationStatus:!1},a}return Object(h.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"projects",className:"projectsContainer"},r.a.createElement("div",{className:"titleContainer"},r.a.createElement("div",{className:"title"},"P R O J E C T S")),r.a.createElement("div",{className:"contentContainer"},b.map((function(t,a){return r.a.createElement("div",{key:a,className:"itemContainer",style:{backgroundImage:"url(".concat(t.backgroundImage,")")},onMouseEnter:function(){return e.onHoverItem(a)},onMouseLeave:function(){return e.onHoverItem(null)},onTouchStart:function(){return e.onHoverItem(a)},onTouchCancel:function(){return e.onHoverItem(null)}},r.a.createElement("div",{className:"itemDetailContainer"},e.state.active===a?r.a.createElement("div",{className:"iconContainer fade-in",style:e.state.animationStatus?null:{pointerEvents:"none"},onAnimationEnd:function(){return e.setState({animationStatus:!0})},onAnimationStart:function(){return e.setState({animationStatus:!1})}},r.a.createElement("a",{href:"".concat(t.urlDemo),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"icon demo",style:{backgroundColor:"".concat(t.color)}},r.a.createElement("span",null,"Demo"),r.a.createElement("img",{src:S.a,className:"demoIcon",alt:"demoIcon"}))),r.a.createElement("a",{href:"".concat(t.urlGithub),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"icon github",style:{backgroundColor:"".concat(t.color)}},r.a.createElement("span",null,"GitHub"),r.a.createElement("img",{src:M.a,className:"githubIcon",alt:"githubIcon"})))):r.a.createElement("div",{className:"descriptionContainer"},r.a.createElement("div",{className:"descriptionHeader"},r.a.createElement("div",{className:"projectTitle"},t.title),r.a.createElement("div",{className:"separator"})),r.a.createElement("div",{className:"projectDescription"},t.description))),r.a.createElement("div",{className:"bannerColor",style:{backgroundColor:"".concat(t.color),opacity:"".concat(e.state.active===a?0:.9)}}))}))))}}]),t}(n.Component);a(58);function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var A=r.a.createElement("path",{fill:"currentColor",d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"}),D=function(e){var t=e.svgRef,a=e.title,n=W(e,["svgRef","title"]);return r.a.createElement("svg",P({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"envelope",className:"svg-inline--fa fa-envelope fa-w-16",role:"img",viewBox:"0 0 512 512",ref:t},n),a?r.a.createElement("title",null,a):null,A)},H=r.a.forwardRef((function(e,t){return r.a.createElement(D,P({svgRef:t},e))}));a.p;function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var T=r.a.createElement("path",{fill:"#242943c7",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}),B=function(e){var t=e.svgRef,a=e.title,n=L(e,["svgRef","title"]);return r.a.createElement("svg",z({"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github",className:"svg-inline--fa fa-github fa-w-16",role:"img",viewBox:"0 0 496 512",ref:t},n),a?r.a.createElement("title",null,a):null,T)},G=r.a.forwardRef((function(e,t){return r.a.createElement(B,z({svgRef:t},e))}));a.p;function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function V(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var J=r.a.createElement("path",{fill:"currentColor",d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"}),K=function(e){var t=e.svgRef,a=e.title,n=V(e,["svgRef","title"]);return r.a.createElement("svg",_({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"phone",className:"svg-inline--fa fa-phone fa-w-16",role:"img",viewBox:"0 0 512 512",ref:t},n),a?r.a.createElement("title",null,a):null,J)},F=r.a.forwardRef((function(e,t){return r.a.createElement(K,_({svgRef:t},e))})),Q=(a.p,function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"contacts",className:"footerContainer"},r.a.createElement("div",{className:"contactContainer"},r.a.createElement("div",{className:"emailContainer"},r.a.createElement("a",{href:"mailto:chiu-leung@Hotmail.com"},r.a.createElement("div",{className:"iconContainer"},r.a.createElement(H,{className:"icon"}))),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"title"},"Email"),r.a.createElement("a",{className:"info",href:"mailto:chiu-leung@Hotmail.com"},"chiu-leung@Hotmail.com"))),r.a.createElement("div",{className:"githubContainer"},r.a.createElement("a",{href:"https://github.com/kc-leung",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"iconContainer"},r.a.createElement(G,{className:"icon"}))),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"title"},"GitHub"),r.a.createElement("a",{className:"info",href:"https://github.com/kc-leung",target:"_blank",rel:"noopener noreferrer"},"https://github.com/kc-leung"))),r.a.createElement("div",{className:"phoneContainer"},r.a.createElement("div",{className:"iconContainer"},r.a.createElement(F,{className:"icon"})),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"title"},"Phone"),r.a.createElement("div",{className:"info"},"(001) 647-390-3654")))),r.a.createElement("div",{className:"footerContent"},"\xa9 2020 KC Leung. All rights reserved."))}}]),t}(n.Component));function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function q(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Y,$=r.a.createElement("path",{fill:"#fff",d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}),X=function(e){var t=e.svgRef,a=e.title,n=q(e,["svgRef","title"]);return r.a.createElement("svg",U({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"times",className:"svg-inline--fa fa-times fa-w-11",role:"img",viewBox:"0 0 352 512",ref:t},n),a?r.a.createElement("title",null,a):null,$)},Z=r.a.forwardRef((function(e,t){return r.a.createElement(X,U({svgRef:t},e))})),ee=(a.p,a(59),function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"modalWindowContainer fade-in"},r.a.createElement("div",{className:"close",onClick:function(){return e.props.isModalWindow(!1)}},r.a.createElement(Z,{className:"closeIcon"})),r.a.createElement("div",{className:"menuItemContainer"},E.map((function(t,a){return r.a.createElement("div",{key:a,className:"menuItem"},r.a.createElement(g.Link,{activeClass:"active",to:t.link,spy:!0,smooth:!0,offset:-62,duration:500,onClick:function(){return e.props.isModalWindow(!1)}},t.title))}))))}}]),t}(n.Component)),te=Object(c.b)(null,(function(e){return{isModalWindow:function(t){return e(w(t))}}}))(ee),ae=(a(60),function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"mainContainer"},!0===this.props.getModalWindowStatus&&r.a.createElement(te,null),r.a.createElement(k,null),r.a.createElement(x,null),r.a.createElement(C,null),r.a.createElement(Q,null))}}]),t}(n.Component)),ne=Object(c.b)((function(e){return{getModalWindowStatus:e.modalWindowReducer.isModalWindowStatus}}),null)(ae),re=(a(61),Object(l.c)(u,Y));var ie=function(){return r.a.createElement(c.a,{store:re},r.a.createElement("div",{className:"App"},r.a.createElement(ne,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(oe,"px")),o.a.render(r.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.b6778d2e.chunk.js.map