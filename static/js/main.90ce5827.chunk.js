(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{10:function(e,t,c){},5:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c(1),o=c(4),i=c.n(o),a=(c(10),c(0));function j(){var e=Object(r.useState)("ENTRADA"),t=Object(n.a)(e,2),c=t[0],o=t[1],i=Object(r.useState)(150),j=Object(n.a)(i,2),s=j[0],b=j[1],u=Object(r.useState)(1),O=Object(n.a)(u,2),l=O[0],d=O[1],h=Object(r.useState)(0),p=Object(n.a)(h,2),x=p[0],f=p[1],m=Object(r.useState)(300),v=Object(n.a)(m,2),A=v[0],k=v[1],C=function(){o("RODANDO"),f(0),k(300),d(1),b(150)};if("ENTRADA"===c)return Object(a.jsx)("button",{onClick:C,children:"Come\xe7ar a jogar!"});return"FIM"===c?Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{children:["Acertei o n\xfamero ",s," com ",l," palpite(s)!"]}),Object(a.jsx)("button",{onClick:C,children:"Iniciar novamente"})]}):Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("p",{children:["O seu n\xfamero \xe9 ",s,"?"]}),Object(a.jsx)("button",{onClick:function(){d(l+1),k(s);var e=parseInt((s-x)/2)+x;b(e)},children:"Menor!"}),Object(a.jsx)("button",{onClick:function(){o("FIM")},children:"Acertou!"}),Object(a.jsx)("button",{onClick:function(){d(l+1),f(s);var e=Math.round((A-s)/2)+s;b(e)},children:"Maior!"})]})}var s=document.getElementById("root");i.a.render(Object(a.jsx)(j,{}),s)}},[[5,1,2]]]);
//# sourceMappingURL=main.90ce5827.chunk.js.map