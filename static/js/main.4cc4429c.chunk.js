(this.webpackJsonpmovieapp=this.webpackJsonpmovieapp||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(3),o=n.n(r),l=(n(10),n(1)),s=n(4);n(11),n(12);var u=function(e){var t=e.handleInput,n=e.search;return c.a.createElement("div",null,c.a.createElement("section",{className:"search-box-wrapper"},c.a.createElement("input",{type:"text",placeholder:"Search for a movie...",className:"search-box",onChange:t,onKeyPress:n})))};var i=function(e){var t=e.result,n=e.openPopup;return c.a.createElement("div",{className:"result",onClick:function(){return n(t.imdbID)}},c.a.createElement("img",{src:t.Poster,alt:"poster"}),c.a.createElement("h3",null,t.Title))};var m=function(e){var t=e.results,n=e.openPopup;return c.a.createElement("section",{className:"results"},t.map((function(e){return c.a.createElement(i,{key:e.imdbID,result:e,openPopup:n})})))};var p=function(e){var t=e.selected,n=e.closePopup;return c.a.createElement("div",null,c.a.createElement("section",{className:"pop-up"},c.a.createElement("div",{className:"content"},c.a.createElement("h2",null,t.Title," ",c.a.createElement("span",null,"(",t.Year,")")),c.a.createElement("p",{className:"rating"},"Rating: ",t.imdbRating),c.a.createElement("div",{className:"plot"},c.a.createElement("img",{src:t.Poster,alt:"poster"}),c.a.createElement("p",null,t.Plot)),c.a.createElement("button",{className:"close",onClick:n},"Close"))))};var h=function(){var e=Object(a.useState)({searchQuery:"",results:[],selected:{}}),t=Object(s.a)(e,2),n=t[0],r=t[1],o="http://omdbapi.com/?apikey=b5e98375";return c.a.createElement("div",{className:"App"},c.a.createElement("header",null,c.a.createElement("h1",null,"Movie Database")),c.a.createElement("main",null,c.a.createElement(u,{handleInput:function(e){var t=e.target.value;r((function(e){return Object(l.a)({},e,{searchQuery:t})}))},search:function(e){"Enter"===e.key&&fetch("".concat(o,"&s=").concat(n.searchQuery)).then((function(e){return e.json()})).then((function(e){r((function(t){return Object(l.a)({},t,{results:e.Search})}))}))}}),c.a.createElement(m,{results:n.results,openPopup:function(e){fetch("".concat(o,"&i=").concat(e)).then((function(e){return e.json()})).then((function(e){var t=e;r((function(e){return Object(l.a)({},e,{selected:t})}))})).catch((function(e){return console.log(e)}))}}),"undefined"!=typeof n.selected.Title&&c.a.createElement(p,{selected:n.selected,closePopup:function(){r((function(e){return Object(l.a)({},e,{selected:{}})}))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.4cc4429c.chunk.js.map