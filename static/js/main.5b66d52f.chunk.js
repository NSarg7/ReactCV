(this["webpackJsonpreact-experiment"]=this["webpackJsonpreact-experiment"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/omnifood.e5d3fa39.png"},function(e,t,a){e.exports=a.p+"static/media/natours.a797f42a.png"},function(e,t,a){e.exports=a.p+"static/media/forkify.3ac8e946.png"},function(e,t,a){e.exports=a.p+"static/media/pig game.dcf84480.png"},function(e,t,a){e.exports=a.p+"static/media/budgety.8e806411.png"},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),i=a.n(r),c=(a(15),a(7)),s=a(4),l=a(5),m=a(8),u=a(6),d=a(9),p=function(e){return o.a.createElement("div",{className:"title"},o.a.createElement("h1",{className:"greeting"},"Welcome"),o.a.createElement("div",{className:"title_bottom"},o.a.createElement("h2",null,"Below you can find my projects. ",o.a.createElement("br",null),o.a.createElement("span",{className:"title_bottom--span"},"Hint: By clicking on images in your browser will be opened the original project."))))},h=function(e){return o.a.createElement("div",{className:"Shelf",onClick:function(){return e.showContent(e.id)}},o.a.createElement("li",{className:"Shelf-title"},e.name))},f=function(e){return o.a.createElement("div",{className:"Content"},o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://NSarg7.github.io/".concat(e.linkName),className:"pic"},o.a.createElement("img",{src:e.img,alt:"Project ".concat(e.name)})),o.a.createElement("div",{className:"text"},o.a.createElement("p",{className:"inline-text"},e.text)))},g=function(e){var t=["omnifood","natours","forkify","pig-game","budgety"];return o.a.createElement("ul",{className:"ShelfList"},e.projects.map((function(a,n){return o.a.createElement("div",{key:a.id},o.a.createElement(h,{className:"Shelf",name:a.name,showContent:e.showContent,id:a.id}),a.doesShow?o.a.createElement(f,{linkName:t[n],img:a.img,name:a.name,text:a.text}):null)})))},w=a(1),y=a.n(w),S=function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={projects:[{id:y()(),name:"Omnifood",text:"This is my very first HTML/CSS project. Initially for animations were used jQuery, but recently I have changed it with Vanilla JS(pure JS). So it became super fast.",doesShow:!1,img:a(17)},{id:y()(),name:"Natours",text:"My next HTML/CSS project to master CSS3, Sass, Flexbox and grid.(ongoing)",doesShow:!1,img:a(18)},{id:y()(),name:"Forkify",text:"Forkify is a real world project created within th course. Via ajax calls and 3rd party api you can get over 1000.000 food recipes. Logic was created via Vanilla JS(pure JS) using webpack and babel.(ongoing)",doesShow:!1,img:a(19)},{id:y()(),name:"Pig Game",text:"Small and cool game created with Vanilla JS(pure JS). Rules are very simple to roll button how many time you want, but be careful from 1, in that case, you will be lost everything you have collected. If you want to save the current score, push button hold. And the turn is the next player's.",doesShow:!1,img:a(20)},{id:y()(),name:"Budgety",text:"This will help you calculate your monthly income and expenses. To create this app was used JavaScript IIFE module pattern(to keep code private) and prototype inheritance.",doesShow:!1,img:a(21)}]},n.showContent=function(e){var t=n.state.projects.findIndex((function(t){return t.id===e})),a=Object(c.a)(n.state.projects),o=!n.state.projects[t].doesShow;a[t].doesShow?a[t].doesShow=o:(a.forEach((function(e){e.doesShow=!1})),a[t].doesShow=o),n.setState({projects:a})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.state.projects.map((function(e){var t=new Image;return t.src=e.img,t.src}))}},{key:"render",value:function(){return o.a.createElement("header",{className:"App"},o.a.createElement(p,null),o.a.createElement(g,{projects:this.state.projects,showContent:this.showContent}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.5b66d52f.chunk.js.map