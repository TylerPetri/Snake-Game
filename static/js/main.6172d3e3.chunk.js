(this["webpackJsonpsnake-game"]=this["webpackJsonpsnake-game"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(7),o=c.n(r),l=(c(12),c(2)),s=c(3),i=c(0),u={start:!0,game:!1,end:!1,activity:!1,countdown:!1,score:0},j=function(e,t){switch(t.type){case"START_SCREEN":return Object(s.a)(Object(s.a)({},e),{},{start:!0,game:!1,activity:!1,end:!1,countdown:!1});case"GAME_BOARD":return Object(s.a)(Object(s.a)({},e),{},{start:!1,game:!0,activity:!1,end:!1,countdown:!0,score:0});case"GAME_START":return Object(s.a)(Object(s.a)({},e),{},{start:!1,game:!0,activity:!0,end:!1,countdown:!1});case"GAMEOVER":return Object(s.a)(Object(s.a)({},e),{},{start:!1,game:!1,activity:!1,end:!0,countdown:!1});case"SCORE":return Object(s.a)(Object(s.a)({},e),t.data);default:return console.log("Invalide action type: ".concat(t.type)),e}},d=Object(n.createContext)(),b=function(){return Object(n.useContext)(d)},O=function(e){var t=Object(n.useReducer)(j,u),c=Object(l.a)(t,2),a=c[0],r=c[1];return Object(i.jsx)(d.Provider,Object(s.a)({value:[a,r]},e))},v=c(6);c.p,c(14);var f=function e(t){Object(v.a)(this,e),this.value=t,this.next=null},h=function e(t){Object(v.a)(this,e);var c=new f(t);this.head=c,this.tail=c},m="UP",w="RIGHT",x="DOWN",p="LEFT",y=function(e){var t=e.length,c=e[0].length,n=Math.round(t/3),a=Math.round(c/3);return{row:n,col:a,cell:e[n][a]}},S=function(e){for(var t=1,c=[],n=0;n<e;n++){for(var a=[],r=0;r<e;r++)a.push(t++);c.push(a)}return c},g=function(e,t){return t===m?{row:e.row-1,col:e.col}:t===w?{row:e.row,col:e.col+1}:t===x?{row:e.row+1,col:e.col}:t===p?{row:e.row,col:e.col-1}:void 0},N=function(e,t){var c=e.row,n=e.col;return c<0||n<0||(c>=t.length||n>=t[0].length)},E=function(e){return"ArrowUp"===e?m:"ArrowRight"===e?w:"ArrowDown"===e?x:"ArrowLeft"===e?p:""},A=function(e,t){if(null===e.next)return t;var c=e.value,n=c.row,a=c.col,r=e.next.value,o=r.row,l=r.col;return o===n&&l===a+1?w:o===n&&l===a-1?p:l===a&&o===n+1?x:l===a&&o===n-1?m:""},k=function(e,t){var c=A(e,t),n=G(c),a={row:e.value.row,col:e.value.col};return g(a,n)},G=function(e){return e===m?x:e===w?p:e===x?m:e===p?w:void 0},R=function(e,t,c,n){var a="cell";return e===t&&(a=c?"cell cell-purple":"cell cell-red"),n.has(e)&&(a="cell cell-green"),a},T=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),c=(t[0],t[1],Object(n.useState)(S(15))),a=Object(l.a)(c,2),r=a[0],o=(a[1],Object(n.useState)(new h(y(r)))),s=Object(l.a)(o,2),u=s[0],j=s[1],d=Object(n.useState)(new Set([u.head.value.cell])),O=Object(l.a)(d,2),v=O[0],m=O[1],x=Object(n.useState)(u.head.value.cell+5),p=Object(l.a)(x,2),T=p[0],M=p[1],C=Object(n.useState)(w),I=Object(l.a)(C,2),B=I[0],_=I[1],D=Object(n.useState)(!1),H=Object(l.a)(D,2),F=H[0],L=H[1],P=b(),J=Object(l.a)(P,2),U=J[0],V=U.activity,z=U.score,K=J[1];Object(n.useEffect)((function(){window.addEventListener("keydown",(function(e){W(e)}))}),[]),function(e,t){var c=Object(n.useRef)();Object(n.useEffect)((function(){c.current=e}),[e]),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){c.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){V&&q()}),150);var W=function(e){var t=E(e.key);""!==t&&(G(t)===B&&v.size>1||_(t))},q=function(){var e={row:u.head.value.row,col:u.head.value.col},t=g(e,B);if(N(t,r))Z();else{var c=r[t.row][t.col];if(v.has(c))Z();else{var n=new f({row:t.row,col:t.col,cell:c}),a=u.head;u.head=n,a.next=n;var o=new Set(v);o.delete(u.tail.value.cell),o.add(c),u.tail=u.tail.next,null===u.tail&&(u.tail=u.head),c===T&&(Q(o),F&&X(),Y(o)),m(o)}}},Q=function(e){var t=k(u.tail,B);if(!N(t,r)){var c=r[t.row][t.col],n=new f({row:t.row,col:t.col,cell:c}),a=u.tail;u.tail=n,u.tail.next=a,e.add(c)}},X=function(){var e=A(u.tail,B),t=G(e);_(t),function(e){for(var t=null,c=e;null!==c;){var n=c.next;c.next=t,t=c,c=n}}(u.tail);var c=u.head;u.head=u.tail,u.tail=c},Y=function(e){for(var t,c,n;c=1,n=225,t=Math.floor(Math.random()*(n-c+1)+c),e.has(t)||T===t;);var a=Math.random()<.3;M(t),L(a),K({type:"SCORE",data:{score:z+1}})},Z=function(){z>localStorage.getItem("SnakeGameHighScore")&&(localStorage.SnakeGameHighScore=z);var e=y(r);j(new h(e)),M(e.cell+5),m(new Set([e.cell])),K({type:"GAMEOVER"})};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{children:[Object(i.jsxs)("h4",{children:["Score: ",z]}),Object(i.jsx)("div",{className:"board",children:r.map((function(e,t){return Object(i.jsx)("div",{className:"row",children:e.map((function(e,t){var c=R(e,T,F,v);return Object(i.jsx)("div",{className:c},t)}))},t)}))})]})})},M=c(4);c(15);var C=function(){var e=b(),t=Object(l.a)(e,2),c=t[0],a=c.end,r=c.countdown,o=c.score,s=t[1],u=Object(n.useState)(35),j=Object(l.a)(u,2),d=j[0],O=j[1];Object(n.useEffect)((function(){O(35),r&&d>0&&setTimeout((function(){return O(d-1)}),100),d<1&&(s({type:"GAME_START"}),O(35))}),[r,d]);var v=localStorage.getItem("SnakeGameHighScore");return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"gameoverContainer",style:{display:a?"block":"none"},children:Object(i.jsxs)("div",{className:"dropGameover",children:[Object(i.jsxs)("div",{className:"highscore",children:[Object(i.jsx)(M.a,{})," : ",v]}),Object(i.jsxs)("div",{className:"lastscorebox",children:[Object(i.jsx)("div",{className:"lastscore"}),": ",o]}),Object(i.jsx)("button",{className:"startBtn",onClick:function(){s({type:"GAME_BOARD"})},children:"Start"})]})})})},I=(c(16),c.p+"static/media/move.a1f37b90.PNG");var B=function(){var e=b(),t=Object(l.a)(e,2),c=t[0],a=c.start,r=c.countdown,o=t[1],s=Object(n.useState)(35),u=Object(l.a)(s,2),j=u[0],d=u[1];Object(n.useEffect)((function(){r&&j>0&&setTimeout((function(){return d(j-1)}),100),j<1&&(o({type:"GAME_START"}),d(35))}),[r,j]);var O=localStorage.getItem("SnakeGameHighScore");return Object(i.jsxs)("div",{className:"bigContainer",children:[Object(i.jsxs)("div",{className:"countdownBox",style:{display:r?"block":"none"},children:[Object(i.jsx)("div",{className:"countdownTimer",style:{display:j>25?"block":"none",opacity:35===j?"1":".5"},children:"3"}),Object(i.jsx)("div",{className:"countdownTimer",style:{display:j<=25&&j>15?"block":"none",opacity:25===j?"1":".5"},children:"2"}),Object(i.jsx)("div",{className:"countdownTimer",style:{display:j<=15&&j>5?"block":"none",opacity:15===j?"1":".5"},children:"1"}),Object(i.jsx)("div",{className:"countdownTimer",style:{display:j<=5?"block":"none"},children:"Go!"})]}),Object(i.jsx)("div",{className:"startContainer",style:{display:a?"block":"none"},children:Object(i.jsxs)("div",{className:"dropStart",children:[Object(i.jsxs)("div",{className:"highscore",children:[Object(i.jsx)(M.a,{})," : ",O]}),Object(i.jsx)("button",{className:"startBtn",onClick:function(){o({type:"GAME_BOARD"})},children:"Start"}),Object(i.jsx)("img",{src:I,alt:"Arrow keys to move",className:"moveKeys"})]})}),Object(i.jsx)(C,{}),Object(i.jsx)(T,{})]})};c(17);var _=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(B,{})})})};o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(O,{children:Object(i.jsx)(_,{})})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.6172d3e3.chunk.js.map