(this["webpackJsonpreact-paint-canvas"]=this["webpackJsonpreact-paint-canvas"]||[]).push([[0],{16:function(e,t,n){e.exports=n(42)},21:function(e,t,n){},22:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),o=n.n(c),i=(n(21),n(22),n(3)),s=n.n(i),l=n(14),u=n(2),f=function(e){var t=e.tools,n=Object(a.useState)([]),c=Object(u.a)(n,2),o=c[0],i=c[1];Object(a.useEffect)((function(){o.length>0&&o.forEach((function(e){var t=e.current;t.addEventListener("dragstart",(function(){console.log("start")})),t.addEventListener("dragstop",(function(){console.log("stop")}))}))}),[o]),Object(a.useEffect)((function(){var e=t.length>0&&t.map((function(e,t){return r.a.createRef()}));i(e)}),[t]);var s=function(e){var t=e.target.id;e.dataTransfer.setData("source",t)};return r.a.createElement("div",{className:"container column center"},t.length>0&&t.map((function(e,t){return r.a.createElement("div",{className:"item",key:t},r.a.createElement("img",{id:e.name,src:"./images/".concat(e.image),alt:e.name,height:48,ref:o[t],draggable:"true",onDragStart:s,className:"toolbarIcon"}))})))},m=n(15),d=n.n(m),v=(n(41),function(e){var t=e.width,n=void 0===t?200:t,c=e.height,o=void 0===c?200:c,i=e.type,s=Object(a.useRef)(null),l=function(e){e.clip(),e.beginPath(),e.setTransform(1,0,0,1,0,0),e.fillStyle="#355BB7",e.fillRect(80,0,24,180)},u=function(e){e.beginPath(),e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,n,o)},f=function(e,t){e.fillStyle="green",e.rect(16,16,160,160),e.fill()},m=function(e,t){e.fillStyle="yellow",e.beginPath(),e.arc(n/2,o/2,80,0,2*Math.PI),e.fill()},d=function(e,t){e.fillStyle="orange",e.beginPath(),e.moveTo(90,24),e.lineTo(24,160),e.lineTo(170,160),e.closePath(),e.fill()},v=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Glue";switch(e){case"rect":f(t),"Scissor"===n&&l(t),"Eraser"===n&&u(t);break;case"circle":m(t),"Scissor"===n&&l(t),"Eraser"===n&&u(t);break;case"triangle":d(t),"Scissor"===n&&l(t),"Eraser"===n&&u(t)}};Object(a.useLayoutEffect)((function(){var e=s.current.getContext("2d");e.save(),v(i,e)}));var h={width:n,height:o};return r.a.createElement("canvas",{ref:s,width:n,height:o,style:h,onDrop:function(e){var t=e.dataTransfer.getData("source"),n=s.current.getContext("2d");v(i,n,t)}})}),h=function(){Object(a.useRef)(null);var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)({width:500,height:500}),i=Object(u.a)(o,2),m=(i[0],i[1]);return Object(a.useEffect)((function(){document.addEventListener("dragover",(function(e){e.preventDefault()})),document.addEventListener("drop",(function(){})),function(){var e=Object(l.a)(s.a.mark((function e(){var t,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("./db.json").then((function(e){return e.data}));case 2:t=e.sent,n=t&&t.toolbar,a=t&&t.dimensions,c(n),m(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),r.a.createElement("div",{className:"mainRoot"},r.a.createElement("div",{className:"container row"},r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"container board"},r.a.createElement(v,{type:"rect"}),r.a.createElement(v,{type:"circle"}),r.a.createElement(v,{type:"triangle"}))),r.a.createElement("div",{className:"item toolbar"},r.a.createElement(f,{tools:n}))))};var g=function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.f4394509.chunk.js.map