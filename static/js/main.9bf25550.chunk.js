(this.webpackJsonpeportfolio=this.webpackJsonpeportfolio||[]).push([[0],Array(19).concat([function(e,t,a){e.exports=a.p+"static/media/demo.912e5b02.svg"},function(e,t,a){e.exports=a.p+"static/media/github.9fe185fb.svg"},function(e,t,a){e.exports=a(52)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/PinIt.f5b97f46.png"},function(e,t,a){e.exports=a.p+"static/media/ReactApp.2819679c.png"},function(e,t,a){e.exports=a.p+"static/media/AngularStudents.0e3317f7.png"},function(e,t,a){e.exports=a.p+"static/media/FrontEndChallenge.b6970a05.png"},function(e,t,a){e.exports=a.p+"static/media/PracticeApp.ec921996.png"},function(e,t,a){e.exports=a.p+"static/media/Angularstore.92d5ccef.png"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),i=(a(26),a(27),a(1)),l=a(2),s=a(4),u=a(3),m=a(5),p=(a(28),a(6)),d=[a(39),a(40),a(41),a(42),a(43),a(44)],f=[{title:"reactNative - app - PinIT",color:"#6fc3df",description:"Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",backgroundImage:d[0],urlDemo:"https://drive.google.com/file/d/1S05r2VV82cuSQP7EynVRWrq7allT1Etf/view?usp=sharing",urlGithub:"https://github.com/mapshare/mobile-app-frontend"},{title:"react - redux - firebase",color:"#ec8d81",description:"Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",backgroundImage:d[1],urlDemo:"https://react-redux-firebase-67bb5.firebaseapp.com/",urlGithub:"https://github.com/kc-leung/react-redux-firebase"},{title:"angular - app - employes",color:"rgb(244, 163, 83)",description:"Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",backgroundImage:d[4],urlDemo:"https://angular-application-employees.herokuapp.com/",urlGithub:"https://github.com/kc-leung/angular-app-employes"},{title:"angular - app - comments",color:"#8ea9e8",description:"Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",backgroundImage:d[5],urlDemo:"https://github.com/kc-leung/angular-app-comments",urlGithub:"https://angular-app-comment.herokuapp.com/"},{title:"angular - app - student",color:"#87c5a4",description:"Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",backgroundImage:d[2],urlDemo:"https://angular-app-student.herokuapp.com/",urlGithub:"https://github.com/kc-leung/angular-app-student"},{title:"angular - github - starring",color:"#e7b788",description:"Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",backgroundImage:d[3],urlDemo:"https://my-gitlist.herokuapp.com/",urlGithub:"https://github.com/kc-leung/angular-github-starring"}],h=[{title:"HOME",link:"home"},{title:"PROJECTS",link:"projects"},{title:"ABOUT",link:"about"},{title:"CONTACTS",link:"contacts"}],b=(a(45),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbarContainer"},h.map((function(e,t){return r.a.createElement("div",{key:t,className:"navbarItem"},r.a.createElement(p.Link,{activeClass:"active",to:e.link,spy:!0,smooth:!0,offset:-62,duration:500},e.title))})))}}]),t}(n.Component)),g=(a(46),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"menuContainer"},"menu")}}]),t}(n.Component)),v=(a(47),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleScroll=function(){window.pageYOffset>a.props.landingBottomRect-62?a.setState({sticky:!0}):a.setState({sticky:!1})},a.handleResize=function(){window.innerWidth<650||window.innerHeight<450?a.setState({isMobile:!0}):a.setState({isMobile:!1})},a.state={sticky:!1,isMobile:!1},a.headerRef=r.a.createRef(),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize),this.handleResize()}},{key:"render",value:function(){return console.log(window.innerWidth),r.a.createElement("div",{className:this.state.sticky?"stickyHeaderContainer":"headerContainer",ref:this.headerRef},r.a.createElement("a",{className:"logoContainer",href:"#home",onClick:function(){p.animateScroll.scrollToTop()}},r.a.createElement("div",{className:"name"},"KC LEUNG"),this.state.isMobile||r.a.createElement("div",{className:"profession"},"WEB DEVELOPER")),this.state.isMobile?r.a.createElement(g,null):r.a.createElement(b,null))}}]),t}(n.Component)),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={bottomRect:0},a.landingRef=r.a.createRef(),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({bottomRect:this.landingRef.current.getBoundingClientRect().bottom})}},{key:"render",value:function(){return r.a.createElement("div",{id:"home",className:"landingContainer",ref:this.landingRef},r.a.createElement("div",{className:"landingContainer-cover"}),r.a.createElement(v,{landingBottomRect:this.state.bottomRect}),r.a.createElement("div",{className:"contentContainer"},r.a.createElement("div",{className:"title"},"Welcome to KC's ePortfolio."),r.a.createElement("div",{className:"separator"}),r.a.createElement("div",{className:"content"},"Coding alone is hard and progress is slow. ",r.a.createElement("br",null)," Working with a team is a two way relationship ",r.a.createElement("br",null)," where I can provide value to you while you invest in me.")))}}]),t}(n.Component),y=(a(48),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"about",className:"aboutContainer"},r.a.createElement("div",{className:"title"},"About Me!"),r.a.createElement("div",{className:"content"},r.a.createElement("p",null,"Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna."),r.a.createElement("p",null,"Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.")))}}]),t}(n.Component)),k=(a(49),a(19)),O=a.n(k),N=a(20),j=a.n(N),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).onHoverItem=function(e){a.state.active===e?a.setState({active:null}):a.setState({active:e})},a.state={active:null},a.testing="./Angularstore.png",a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"projects",className:"projectsContainer"},r.a.createElement("div",{className:"titleContainer"},r.a.createElement("div",{className:"title"},"P R O J E C T S")),r.a.createElement("div",{className:"contentContainer"},f.map((function(t,a){return r.a.createElement("div",{key:a,className:"itemContainer",style:{backgroundImage:"url(".concat(t.backgroundImage,")")},onMouseEnter:function(){return e.onHoverItem(a)},onMouseLeave:function(){return e.onHoverItem(null)},onTouchStart:function(){return e.onHoverItem(a)},onTouchCancel:function(){return e.onHoverItem(null)}},r.a.createElement("div",{className:"itemDetailContainer"},e.state.active===a?r.a.createElement("div",{className:"iconContainer"},r.a.createElement("a",{href:"".concat(t.urlDemo),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"icon demo",style:{backgroundColor:"".concat(t.color)}},r.a.createElement("span",null,"Demo"),r.a.createElement("img",{src:O.a,className:"demoIcon",alt:"demoIcon"}))),r.a.createElement("a",{href:"".concat(t.urlGithub),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"icon github",style:{backgroundColor:"".concat(t.color)}},r.a.createElement("span",null,"GitHub"),r.a.createElement("img",{src:j.a,className:"githubIcon",alt:"githubIcon"})))):r.a.createElement("div",{className:"descriptionContainer"},r.a.createElement("div",{className:"descriptionHeader"},r.a.createElement("div",{className:"projectTitle"},t.title),r.a.createElement("div",{className:"separator"})),r.a.createElement("div",{className:"projectDescription"},t.description))),r.a.createElement("div",{className:"bannerColor",style:{backgroundColor:"".concat(t.color),opacity:"".concat(e.state.active===a?0:.9)}}))}))))}}]),t}(n.Component);a(50);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var R=r.a.createElement("path",{fill:"currentColor",d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"}),x=function(e){var t=e.svgRef,a=e.title,n=I(e,["svgRef","title"]);return r.a.createElement("svg",w({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"envelope",className:"svg-inline--fa fa-envelope fa-w-16",role:"img",viewBox:"0 0 512 512",ref:t},n),a?r.a.createElement("title",null,a):null,R)},S=r.a.forwardRef((function(e,t){return r.a.createElement(x,w({svgRef:t},e))}));a.p;function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var H=r.a.createElement("path",{fill:"#242943c7",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}),z=function(e){var t=e.svgRef,a=e.title,n=P(e,["svgRef","title"]);return r.a.createElement("svg",M({"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github",className:"svg-inline--fa fa-github fa-w-16",role:"img",viewBox:"0 0 496 512",ref:t},n),a?r.a.createElement("title",null,a):null,H)},D=r.a.forwardRef((function(e,t){return r.a.createElement(z,M({svgRef:t},e))}));a.p;function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var A=r.a.createElement("path",{fill:"currentColor",d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"}),q=function(e){var t=e.svgRef,a=e.title,n=T(e,["svgRef","title"]);return r.a.createElement("svg",L({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"phone",className:"svg-inline--fa fa-phone fa-w-16",role:"img",viewBox:"0 0 512 512",ref:t},n),a?r.a.createElement("title",null,a):null,A)},B=r.a.forwardRef((function(e,t){return r.a.createElement(q,L({svgRef:t},e))})),G=(a.p,function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"contacts",className:"footerContainer"},r.a.createElement("div",{className:"contactContainer"},r.a.createElement("div",{className:"emailContainer"},r.a.createElement("a",{href:"mailto:chiu-leung@Hotmail.com"},r.a.createElement("div",{className:"iconContainer"},r.a.createElement(S,{className:"icon"}))),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"title"},"Email"),r.a.createElement("a",{className:"info",href:"mailto:chiu-leung@Hotmail.com"},"chiu-leung@Hotmail.com"))),r.a.createElement("div",{className:"githubContainer"},r.a.createElement("a",{href:"https://github.com/kc-leung",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"iconContainer"},r.a.createElement(D,{className:"icon"}))),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"title"},"GitHub"),r.a.createElement("a",{className:"info",href:"https://github.com/kc-leung",target:"_blank",rel:"noopener noreferrer"},"https://github.com/kc-leung"))),r.a.createElement("div",{className:"phoneContainer"},r.a.createElement("div",{className:"iconContainer"},r.a.createElement(B,{className:"icon"})),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"title"},"Phone"),r.a.createElement("div",{className:"info"},"(001) 647-390-3654")))),r.a.createElement("div",{className:"footerContent"},"\xa9 2020 KC Leung. All rights reserved."))}}]),t}(n.Component)),W=(a(51),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"mainContainer"},r.a.createElement(E,null),r.a.createElement(C,null),r.a.createElement(y,null),r.a.createElement(G,null))}}]),t}(n.Component));var V=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(W,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[21,1,2]]]);
//# sourceMappingURL=main.9bf25550.chunk.js.map