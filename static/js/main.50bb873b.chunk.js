(this["webpackJsonpreact-experiment"]=this["webpackJsonpreact-experiment"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/React-icon.05a3e30f.svg"},,function(e,t,a){e.exports=a.p+"static/media/15puzzle.7eaf04c4.jpg"},function(e,t,a){e.exports=a.p+"static/media/PM.3fc8f3fc.jpg"},function(e,t,a){e.exports=a.p+"static/media/omnifood.5fc64ef4.jpg"},function(e,t,a){e.exports=a.p+"static/media/natours.9716c596.jpg"},function(e,t,a){e.exports=a.p+"static/media/pig game.1a7b63df.jpg"},function(e,t,a){e.exports=a.p+"static/media/budgety.e24cea67.jpg"},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(3),r=a.n(i),c=(a(11),a(4)),s=a(5),l=function(e){return o.a.createElement("div",{className:"title"},o.a.createElement("h1",{className:"greeting"},"Welcome"),o.a.createElement("div",{className:"title_bottom"},o.a.createElement("h2",null,"Below you can find my projects. ",o.a.createElement("br",null),o.a.createElement("span",{className:"title_bottom--span"},"Hint: By clicking on images in your browser will be opened the original project."))))},m=function(e){return o.a.createElement("div",{className:"Shelf",onClick:function(){return e.showContent(e.id)}},o.a.createElement("li",{className:"Shelf-title"},e.name))},d=o.a.memo((function(e){var t=e.link,a=e.img,n=e.name,i=e.text,r=e.styles;return o.a.createElement("div",{className:r?"Content_container ".concat(r):"Content_container"},o.a.createElement("div",{className:"Content"},o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:t,className:"pic"},o.a.createElement("img",{src:a,alt:"Project ".concat(n)})),o.a.createElement("div",{className:"text"},o.a.createElement("p",{className:"inline-text"},i))))})),p=function(e){var t=e.projects,a=e.showContent;return o.a.createElement("ul",{className:"ShelfList"},t.map((function(e){return o.a.createElement("div",{key:e.id},o.a.createElement(m,{name:e.name,showContent:a,id:e.id}),e.doesShow?o.a.createElement(d,{link:e.link,img:e.img,name:e.name,text:e.text}):o.a.createElement(d,{link:e.link,img:e.img,name:e.name,text:e.text,styles:"Content_container--hide"}))})))},u=function(){return o.a.createElement("div",{className:"poweredby"},o.a.createElement("span",{className:"inline-text"},"Powered by React"),o.a.createElement("img",{className:" react-logo",src:a(12),alt:""}))},h=a(1),g=a.n(h),f={projects:[{id:g()(),name:"15Puzzle",text:"15Puzzle - quite popular logic game, created with ReactJS, CSS grid and CSS animations.",doesShow:!1,img:a(14),link:"https://nsarg7.github.io/15Puzzle/"},{id:g()(),name:"PM - Persons Manager",text:"This project created using React.JS library for front-end part and firebase for backend. The main purpose of the application to help small enterprises and medical facilities manage thier clients' information more easily. This version of app adopted for medical sphere. For detailed introduction please click on project's picture.",doesShow:!1,img:a(15),link:"https://nsarg7.github.io/PersonsManager/"},{id:g()(),name:"Omnifood",text:"My first HTML/CSS project. For creation used old-school technics - CSS grid layout, floats and so on. For animations used Vanilla JS.",doesShow:!1,img:a(16),link:"https://nsarg7.github.io/Omnifood/"},{id:g()(),name:"Natours",text:"HTML/CSS project created with traditional CSS grid layout, but instead used very advanced animations and tricks with pure CSS.",doesShow:!1,img:a(17),link:"https://nsarg7.github.io/Natours/"},{id:g()(),name:"Pig Game",text:"Small and cool game powered by Vanilla JS(pure JS). Rules are very simple to roll button how many time you want, but be careful from 1, in that case, you will be lost everything you have collected. If you want to save the current score, push button hold. And the turn is the next player's.",doesShow:!1,img:a(18),link:"https://nsarg7.github.io/Pig-Game"},{id:g()(),name:"Budgety",text:"Budgety will help you calculate your monthly income and expenses. To create this app was used JavaScript module pattern and prototype inheritance.",doesShow:!1,img:a(19),link:"https://nsarg7.github.io/Budgety/"}]},S=function(){var e=Object(n.useState)(f),t=Object(s.a)(e,2),a=t[0],i=t[1];return o.a.createElement("div",{className:"App"},o.a.createElement(l,null),o.a.createElement(p,{projects:a.projects,showContent:function(e){var t=a.projects.findIndex((function(t){return t.id===e})),n=Object(c.a)(a.projects),o=!a.projects[t].doesShow;n[t].doesShow?n[t].doesShow=o:(n.forEach((function(e){e.doesShow=!1})),n[t].doesShow=o),i({projects:n})}}),o.a.createElement(u,null))};r.a.render(o.a.createElement(S,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.50bb873b.chunk.js.map