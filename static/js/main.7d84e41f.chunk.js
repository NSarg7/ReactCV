(this["webpackJsonpreact-experiment"]=this["webpackJsonpreact-experiment"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/omnifood.5fc64ef4.jpg"},function(e,t,a){e.exports=a.p+"static/media/natours.9716c596.jpg"},function(e,t,a){e.exports=a.p+"static/media/forkify.953abb96.jpg"},function(e,t,a){e.exports=a.p+"static/media/pig game.1a7b63df.jpg"},function(e,t,a){e.exports=a.p+"static/media/budgety.e24cea67.jpg"},function(e,t,a){e.exports=a.p+"static/media/React-icon.05a3e30f.svg"},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),i=a.n(r),c=(a(15),a(7)),s=a(4),l=a(5),m=a(8),u=a(6),p=a(9),d=function(e){return o.a.createElement("div",{className:"title"},o.a.createElement("h1",{className:"greeting"},"Welcome"),o.a.createElement("div",{className:"title_bottom"},o.a.createElement("h2",null,"Below you can find my projects. ",o.a.createElement("br",null),o.a.createElement("span",{className:"title_bottom--span"},"Hint: By clicking on images in your browser will be opened the original project."))))},h=function(e){return o.a.createElement("div",{className:"Shelf",onClick:function(){return e.showContent(e.id)}},o.a.createElement("li",{className:"Shelf-title"},e.name))},g=function(e){var t=e.link,a=e.img,n=e.name,r=e.text;return o.a.createElement("div",{className:"Content"},o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:t,className:"pic"},o.a.createElement("img",{src:a,alt:"Project ".concat(n)})),o.a.createElement("div",{className:"text"},o.a.createElement("p",{className:"inline-text"},r)))},f=function(e){return o.a.createElement("ul",{className:"ShelfList"},e.projects.map((function(t,a){return o.a.createElement("div",{key:t.id},o.a.createElement(h,{name:t.name,showContent:e.showContent,id:t.id}),t.doesShow?o.a.createElement(g,{link:t.link,img:t.img,name:t.name,text:t.text}):null)})))},y=function(){return o.a.createElement("div",{className:"info"},o.a.createElement("p",null,o.a.createElement("span",{className:"inline-text"}," Created by: "),o.a.createElement("br",null),"Narek Sargsyan",o.a.createElement("br",null),o.a.createElement("span",{className:"inline-text"},"Contact email:")," ",o.a.createElement("br",null),"NSarg7@gmail.com"))},b=a(1),w=a.n(b),E=function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={projects:[{id:w()(),name:"Omnifood",text:"This is my very first HTML/CSS project. Initially for animations were used jQuery, but recently I have changed it with Vanilla JS(pure JS). So it became super fast.",doesShow:!1,img:a(17),link:"https://nsarg7.github.io/Omnifood/"},{id:w()(),name:"Natours",text:"My next HTML/CSS project to master CSS3, Sass, Flexbox and grid.(ongoing)",doesShow:!1,img:a(18),link:"https://nsarg7.github.io/Natours/"},{id:w()(),name:"Forkify",text:"Forkify is a real world project created within th course. Via ajax calls and 3rd party api you can get over 1000.000 food recipes. Logic was created via Vanilla JS(pure JS) using webpack and babel.",doesShow:!1,img:a(19),link:"http://nsarg7.github.io/Forkify"},{id:w()(),name:"Pig Game",text:"Small and cool game powered by Vanilla JS(pure JS). Rules are very simple to roll button how many time you want, but be careful from 1, in that case, you will be lost everything you have collected. If you want to save the current score, push button hold. And the turn is the next player's.",doesShow:!1,img:a(20),link:"https://nsarg7.github.io/Pig-Game"},{id:w()(),name:"Budgety",text:"This will help you calculate your monthly income and expenses. To create this app was used JavaScript IIFE module pattern(to keep code private) and prototype inheritance.",doesShow:!1,img:a(21),link:"https://nsarg7.github.io/Budgety/"}]},n.showContent=function(e){var t=n.state.projects.findIndex((function(t){return t.id===e})),a=Object(c.a)(n.state.projects),o=!n.state.projects[t].doesShow;a[t].doesShow?a[t].doesShow=o:(a.forEach((function(e){e.doesShow=!1})),a[t].doesShow=o),n.setState({projects:a})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.state.projects.map((function(e){var t=new Image;return t.src=e.img,t.src}))}},{key:"render",value:function(){return o.a.createElement("header",{className:"App"},o.a.createElement(d,null),o.a.createElement(f,{projects:this.state.projects,showContent:this.showContent}),o.a.createElement(y,null),o.a.createElement("div",{className:"poweredby"},o.a.createElement("span",{className:"inline-text"},"Powered by React"),o.a.createElement("img",{className:" react-logo",src:a(22),alt:""})))}}]),t}(n.Component);i.a.render(o.a.createElement(E,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.7d84e41f.chunk.js.map