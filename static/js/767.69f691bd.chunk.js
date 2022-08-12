"use strict";(self.webpackChunkjadnasser_portfolio=self.webpackChunkjadnasser_portfolio||[]).push([[767],{109:function(e,t,a){a(2791);var s=a(184);t.Z=function(){return(0,s.jsxs)("footer",{className:"footer",id:"contact",children:[(0,s.jsxs)("ul",{className:"social-list",children:[(0,s.jsx)("li",{className:"social-list__item",children:(0,s.jsx)("a",{className:"social-list__link",href:"https://linkedin.com/in/jad-nasser-349436247","aria-label":"LinkedIn",children:(0,s.jsx)("i",{className:"fab fa-linkedin"})})}),(0,s.jsx)("li",{className:"social-list__item",children:(0,s.jsx)("a",{className:"social-list__link",href:"https://github.com/jad-nasser","aria-label":"GitHub",children:(0,s.jsx)("i",{className:"fab fa-github"})})})]}),(0,s.jsx)("a",{className:"footer__link",href:"mailto:jadnasser.official@gmail.com",children:"jadnasser.official@gmail.com"}),(0,s.jsxs)("div",{className:"address-and-phone",children:[(0,s.jsx)("div",{className:"phone",children:"+961 81 747098"}),(0,s.jsx)("div",{className:"address",children:"Hamra Street, Beirut, Lebanon"})]})]})}},7420:function(e,t,a){var s=a(8152),i=a(2791),r=a(184);t.Z=function(e){var t=(0,i.useState)(e.placeholder),a=(0,s.Z)(t,2),n=a[0],l=a[1],c=(0,i.useRef)(null);return(0,i.useEffect)((function(){new IntersectionObserver((function(t,a){t.forEach((function(t){t.isIntersecting&&(a.unobserve(t.target),l(e.src))}))}),{rootMargin:"10%",threshold:0}).observe(c.current)}),[e.src]),(0,r.jsx)("img",{width:e.width,height:e.height,src:n,alt:e.alt,className:e.className,ref:c})}},1707:function(e,t,a){a(2791);var s=a(3495),i=a(184);t.Z=function(){return(0,i.jsx)("header",{children:(0,i.jsx)("nav",{className:"nav",children:(0,i.jsxs)("ul",{className:"nav__list",children:[(0,i.jsx)("li",{className:"nav__item",children:(0,i.jsx)(s.fO,{to:"/#home",className:"nav__link",children:"Home"})}),(0,i.jsx)("li",{className:"nav__item",children:(0,i.jsx)(s.fO,{to:"/#services",className:"nav__link",children:"My Services"})}),(0,i.jsx)("li",{className:"nav__item",children:(0,i.jsx)(s.fO,{to:"/#about",className:"nav__link",children:"About Me"})}),(0,i.jsx)("li",{className:"nav__item",children:(0,i.jsx)(s.fO,{to:"/#work",className:"nav__link",children:"My Work"})}),(0,i.jsx)("li",{className:"nav__item",children:(0,i.jsx)(s.fO,{to:"#contact",className:"nav__link",children:"Contact"})})]})})})}},4441:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});a(2398);var s=a(2791),i=a(161),r=a.p+"static/media/app-start.43d7ff83880a9732ec2f.png",n=a.p+"static/media/result-file.e486dbc787df699974d2.png",l={databaseDiagram:{src:i,width:1350,height:693,blur:a(2663)},gui:{src:r,width:1366,height:728,blur:a.p+"static/media/app-start.c325743d9549f7c01445.webp"},resultFile:{src:n,width:1105,height:576,blur:a.p+"static/media/result-file.5fe62bc9a17e13ddfb44.webp"}},c=a(1707),o=a(109),d=a(7420),u=a(184),h=function(){var e=(0,s.useRef)(null);(0,s.useEffect)((function(){e.current.scrollIntoView()}),[]);var t=(0,u.jsxs)("section",{className:"start",children:[(0,u.jsx)("h1",{className:"section__title section__title--start",children:"From Excel to Relational Database Converter"}),(0,u.jsx)("p",{className:"start__paragraph",children:"This is my university graduation project, but I've updated its dependencies and modified its files structure and code structure for better code readability."}),(0,u.jsxs)("p",{className:"start__paragraph",children:["This project is Written in Java language that provides converting a Microsoft Excel table to a 2NF (Second Normal Form) relational database by reading the table and discovering the relationships between the data, then returning a file that contains SQL Server queries ready to be executed in a Microsoft SQL Server database to generates the 2NF relational database of the input Excel file with less data repetition. You can check out the"," ",(0,u.jsx)("a",{href:"https://github.com/jad-nasser/from-excel-to-relational-database-converter.git",children:"repository"})," ","of that project for more details."]}),(0,u.jsx)("img",{className:"start__img",width:l.databaseDiagram.width,height:l.databaseDiagram.height,src:l.databaseDiagram.src,alt:"Database diagram"})]}),a=(0,u.jsxs)("section",{className:"technologies-used blue-gradient-background",children:[(0,u.jsx)("h2",{className:"section__title section__title--technologies-used",children:"Technologies used"}),(0,u.jsxs)("ul",{style:{textAlign:"start"},children:[(0,u.jsx)("li",{children:(0,u.jsx)("strong",{children:"Java"})}),(0,u.jsxs)("li",{children:[(0,u.jsx)("strong",{children:"Apache POI 5.2.2"})," : Used for reading Microsoft Excel files"]})]})]}),i=(0,u.jsxs)("section",{className:"features",children:[(0,u.jsx)("h2",{className:"section__title section__title--features",children:"Features"}),(0,u.jsxs)("div",{className:"features-container",children:[(0,u.jsxs)("div",{className:"feature",children:[(0,u.jsx)("h3",{className:"feature__text",children:"Simple GUI"}),(0,u.jsx)(d.Z,{placeholder:l.gui.blur,className:"feature__img",width:l.gui.width,height:l.gui.height,src:l.gui.src,alt:"App GUI"})]}),(0,u.jsxs)("div",{className:"feature",children:[(0,u.jsx)("h3",{className:"feature__text",children:"Smart system that discovers the relations between the data of an Excel file and returns the 2NF relational database as executable SQL Server queries file ready to be executed in an SQL Server database"}),(0,u.jsx)(d.Z,{placeholder:l.resultFile.blur,className:"feature__img",width:l.resultFile.width,height:l.resultFile.height,src:l.resultFile.src,alt:"SQL queries file"})]})]})]});return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{ref:e}),(0,u.jsx)(c.Z,{}),t,a,i,(0,u.jsx)(o.Z,{})]})}},3495:function(e,t,a){a.d(t,{fO:function(){return m}});var s=a(2791),i=a(3504),r=function(){return r=Object.assign||function(e){for(var t,a=1,s=arguments.length;a<s;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)};var n="",l=null,c=null,o=null;function d(){n="",null!==l&&l.disconnect(),null!==c&&(window.clearTimeout(c),c=null)}function u(e){return["BUTTON","INPUT","SELECT","TEXTAREA"].includes(e.tagName)&&!e.hasAttribute("disabled")||["A","AREA"].includes(e.tagName)&&e.hasAttribute("href")}function h(){var e=null;if("#"===n)e=document.body;else{var t=n.replace("#","");null===(e=document.getElementById(t))&&"#top"===n&&(e=document.body)}if(null!==e){o(e);var a=e.getAttribute("tabindex");return null!==a||u(e)||e.setAttribute("tabindex",-1),e.focus({preventScroll:!0}),null!==a||u(e)||(e.blur(),e.removeAttribute("tabindex")),d(),!0}return!1}function f(e){return s.forwardRef((function(t,a){var u="";"string"===typeof t.to&&t.to.includes("#")?u="#"+t.to.split("#").slice(1).join("#"):"object"===typeof t.to&&"string"===typeof t.to.hash&&(u=t.to.hash);var f={};e===i.OL&&(f.isActive=function(e,t){return e&&e.isExact&&t.hash===u});var m=function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(s=Object.getOwnPropertySymbols(e);i<s.length;i++)t.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(e,s[i])&&(a[s[i]]=e[s[i]])}return a}(t,["scroll","smooth","timeout","elementId"]);return s.createElement(e,r({},f,m,{onClick:function(e){var a;d(),n=t.elementId?"#"+t.elementId:u,t.onClick&&t.onClick(e),""===n||e.defaultPrevented||0!==e.button||t.target&&"_self"!==t.target||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(o=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},a=t.timeout,window.setTimeout((function(){!1===h()&&(null===l&&(l=new MutationObserver(h)),l.observe(document,{attributes:!0,childList:!0,subtree:!0}),c=window.setTimeout((function(){d()}),a||1e4))}),0))},ref:a}),t.children)}))}var m=f(i.rU);f(i.OL)},2398:function(){},2663:function(e,t,a){e.exports=a.p+"static/media/database-diagram.367f063d6cc0a711c31d.webp"},161:function(e,t,a){e.exports=a.p+"static/media/database-diagram.dac27f94dbadf29a3e35.png"}}]);
//# sourceMappingURL=767.69f691bd.chunk.js.map