(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(46)},,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(5),c=n.n(r),l=(n(14),n(2)),u=n(1);function i(){var e=function(e,t){var n=a.a.useState(!1),o=Object(u.a)(n,2),r=o[0],c=o[1],l=a.a.useState(!0),i=Object(u.a)(l,2),d=i[0],s=i[1],m=a.a.useState(t),f=Object(u.a)(m,2),p=f[0],h=f[1];return a.a.useEffect(function(){setTimeout(function(){try{var n,o=localStorage.getItem(e);o?n=JSON.parse(o):(localStorage.setItem(e,JSON.stringify(t)),n=[]),h(n),s(!1)}catch(r){c(r)}},1e3)},[]),{item:p,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),h(t)}catch(r){c(r)}},error:r,loading:d}}("TODOS_V1",[]),t=e.item,n=e.saveItem,o=e.loading,r=e.error,c=a.a.useState(""),i=Object(u.a)(c,2),d=i[0],s=i[1],m=a.a.useState(!1),f=Object(u.a)(m,2),p=f[0],h=f[1],E=t.filter(function(e){return e.completed}).length,v=t.length,g=[];g=!d.length>=1?t:t.filter(function(e){var t=e.text.toLowerCase(),n=d.toLowerCase();return t.includes(n)});return{error:r,loading:o,totalTodos:v,completedTodos:E,searchValue:d,setSearchValue:s,searchedTodos:g,toggleCompleteTodo:function(e){var o=t.findIndex(function(t){return t.text===e}),a=Object(l.a)(t);t[o].completed=!a[o].completed,n(a)},addTodo:function(e){var o=Object(l.a)(t);o.push({completed:!1,text:e}),n(o)},deleteTodo:function(e){var o=t.findIndex(function(t){return t.text===e}),a=Object(l.a)(t);a.splice(o,1),n(a)},hideCompletedTodosFn:function(){t.filter(function(e){return e.completed}).forEach(function(e){e.hide=!0});var e=Object(l.a)(t);n(e)},showCompletedTodosFn:function(){t.filter(function(e){return e.completed}).forEach(function(e){e.hide=!1});var e=Object(l.a)(t);n(e)},openModal:p,setOpenModal:h}}function d(e){var t=e.children;return a.a.createElement("header",null,t)}n(16);function s(e){var t=e.totalTodos,n=e.completedTodos;return a.a.createElement("h2",{className:"TodoCounter"}," You have completed ",n," of ",t," Tasks")}n(18);function m(e){var t=e.searchValue,n=e.setSearchValue;return a.a.createElement("input",{className:"TodoSearch",placeholder:"Search ur tasks here!",value:t,onChange:function(e){console.log(e.target.value),n(e.target.value)}})}n(20);function f(e){return a.a.createElement("section",null,a.a.createElement("ul",null,e.children))}var p;n(22);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var E,v=function(e){return a.a.createElement("svg",h({width:24,height:24,fillRule:"evenodd",clipRule:"evenodd"},e),p||(p=a.a.createElement("path",{d:"M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"})))};n.p;function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var T=function(e){return a.a.createElement("svg",g({fill:"#000000",viewBox:"0 0 24 24",width:"24px",height:"24px"},e),E||(E=a.a.createElement("path",{d:"M 10 2 L 9 3 L 3 3 L 3 5 L 4.109375 5 L 5.8925781 20.255859 L 5.8925781 20.263672 C 6.023602 21.250335 6.8803207 22 7.875 22 L 16.123047 22 C 17.117726 22 17.974445 21.250322 18.105469 20.263672 L 18.107422 20.255859 L 19.890625 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 6.125 5 L 17.875 5 L 16.123047 20 L 7.875 20 L 6.125 5 z"})))},C=(n.p,{check:function(e){return a.a.createElement(v,{className:"Icon-svg Icon-svg--check",fill:e})},delete:function(e){return a.a.createElement(T,{className:"Icon-svg--delete",fill:e})}});function b(e){var t=e.type,n=e.color,o=void 0===n?"gray":n,r=e.onClick;return a.a.createElement("span",{className:"Icon-container Icon-container--".concat(t),onClick:r},C[t](o))}function O(e){var t=e.completed,n=e.onComplete,o=e.onHide;return a.a.createElement(b,{type:"check",color:t?"#4caf50":"gray",onClick:n,onHide:o})}function y(e){var t=e.onDelete;return a.a.createElement(b,{type:"delete",onClick:t})}n(24);function L(e){return a.a.createElement("li",{className:"TodoItem ".concat(e.hide&&"TodoItem-p--hide")},a.a.createElement(O,{completed:e.completed,onComplete:e.onComplete}),a.a.createElement("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete")},e.text),a.a.createElement(y,{onDelete:e.onDelete}))}n(26);function S(e){var t=e.addTodo,n=e.setOpenModal,o=a.a.useState(""),r=Object(u.a)(o,2),c=r[0],l=r[1],i=function(e){e.preventDefault(),t(c),n(!1)};return a.a.createElement("form",{onSubmit:i},a.a.createElement("label",null,"Write your new task"),a.a.createElement("textarea",{value:c,onChange:function(e){l(e.target.value)},placeholder:"Feed your dog"}),a.a.createElement("div",{className:"TodoForm-buttonContainer"},a.a.createElement("button",{type:"button",className:"TodoForm-button TodoForm-button-cancel",onClick:function(){n(!1)}},"Cancel"),a.a.createElement("button",{type:"submit",className:"TodoForm-button TodoForm-button-add",onClick:i},"Add")))}n(28);function k(e){return a.a.createElement("button",{className:"CreateTodoButton",onClick:function(){e.setOpenModal(function(e){return!e})}},"+")}n(30);function N(e){return a.a.createElement("button",{className:"HideCompletedTodos",onClick:e.onHide},"Hide completed")}n(32);function w(e){return a.a.createElement("button",{className:"ShowCompletedTodos",onClick:e.onShow},"Show completed")}n(34);function I(){return a.a.createElement("p",{className:"TodoCongrats"},a.a.createElement("span",null,"\xa1Congratulations! ")," You finished all the tasks")}var x=n(3),j=n.n(x);n(36);function M(e){var t=e.children;return j.a.createPortal(a.a.createElement("div",{className:"ModalBackground"},t),document.getElementById("modal"))}n(38);function F(e){e.error;return a.a.createElement("p",null,"We have an error")}n(40);function V(){return a.a.createElement("div",{className:"LoadingTodo-container"},a.a.createElement("span",{className:"LoadingTodo-completeIcon"}),a.a.createElement("p",{className:"LoadingTodo-text"},"Loading Tasks... Wait!"),a.a.createElement("span",{className:"LoadingTodo-deleteIcon"}))}n(42);function D(){return a.a.createElement("p",{className:"empty-todos--p"},"Place your first ",a.a.createElement("span",null,"Task :)"))}n(44);var H=function(){var e=i(),t=e.error,n=e.loading,o=e.searchedTodos,r=e.toggleCompleteTodo,c=e.deleteTodo,l=e.hideCompletedTodosFn,u=e.showCompletedTodosFn,p=e.openModal,h=e.setOpenModal,E=e.totalTodos,v=e.completedTodos,g=e.searchValue,T=e.setSearchValue,C=e.addTodo;return a.a.createElement(a.a.Fragment,null,a.a.createElement(d,null,a.a.createElement(s,{totalTodos:E,completedTodos:v}),a.a.createElement(m,{searchValue:g,setSearchValue:T})),a.a.createElement(f,null,t&&a.a.createElement(F,{error:t}),n&&new Array(3).fill(1).map(function(e,t){return a.a.createElement(V,{key:t})}),!n&&!o.length&&a.a.createElement(D,null),!n&&v===E&&E>0&&a.a.createElement(I,null),o.map(function(e){return a.a.createElement(L,{key:e.text,text:e.text,completed:e.completed,onComplete:function(){return r(e.text)},onDelete:function(){return c(e.text)},hide:e.hide})})),!!p&&a.a.createElement(M,null,a.a.createElement(S,{addTodo:C,setOpenModal:h})),a.a.createElement(k,{setOpenModal:h}),a.a.createElement(N,{onHide:function(){return l()}}),a.a.createElement(w,{onShow:function(){return u()}}))},B=document.getElementById("root");c.a.createRoot(B).render(a.a.createElement(H,null))}],[[6,2,1]]]);
//# sourceMappingURL=main.1409ac7d.chunk.js.map