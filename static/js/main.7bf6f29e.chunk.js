(this["webpackJsonpregistration-app"]=this["webpackJsonpregistration-app"]||[]).push([[0],{28:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},36:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(13),i=c.n(r),s=(c(28),c(10)),j=c(15),l=c(3),u=(c(33),c(16)),b=Object(u.b)({name:"user",initialState:{user:null},reducers:{registration:function(e,t){e.user=t.payload},profile:function(e){e.user=null}}}),o=b.actions,d=o.registration,O=(o.progile,function(e){return e.user.user}),m=b.reducer,h=(c(34),c(1)),p=function(){var e=Object(s.c)(O);return Object(h.jsxs)("div",{className:"profile",children:[Object(h.jsxs)("h1",{children:["\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c ",e.familyName," ",e.name," ",e.patronimicName]}),Object(h.jsxs)("div",{className:"profile__data",children:[Object(h.jsx)("h3",{children:"\u0412\u0430\u0448 \u043f\u0440\u043e\u0444\u0430\u0439\u043b"}),Object(h.jsxs)("div",{children:["\u0424\u0418\u041e: ",e.familyName," ",e.name," ",e.patronimicName]}),Object(h.jsxs)("div",{children:["\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f: ",e.birthDate]}),Object(h.jsxs)("div",{children:["Email: ",e.email]})]})]})},x=(c(36),function(){return Object(h.jsxs)("div",{className:"reg",children:[Object(h.jsx)("h1",{children:"\u0424\u043e\u0440\u043c\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),Object(h.jsxs)("nav",{className:"ret__tab",children:[Object(h.jsx)("span",{className:"tab",children:"\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"}),Object(h.jsx)("span",{className:"tab",children:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430 \u0438 \u043f\u0430\u0440\u043e\u043b\u044c"})]})]})}),f=c(7),v=function(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),i=Object(f.a)(r,2),l=i[0],u=i[1],b=Object(n.useState)(""),o=Object(f.a)(b,2),O=o[0],m=o[1],p=Object(n.useState)(""),x=Object(f.a)(p,2),v=x[0],g=x[1],N=Object(n.useState)(""),_=Object(f.a)(N,2),S=_[0],y=_[1],C=Object(n.useState)(""),q=Object(f.a)(C,2),w=q[0],D=q[1],E=Object(n.useState)(""),F=Object(f.a)(E,2),k=F[0],B=F[1],I=Object(s.b)();return Object(h.jsxs)("form",{className:"reg__form",onSubmit:function(e){return function(e){e.preventDefault(),I(d({familyName:c,name:l,patronimicName:O,birthDate:v,registration:!0}))}(e)},children:[Object(h.jsx)("h2",{children:"\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"}),Object(h.jsxs)("div",{className:"form__item",children:[Object(h.jsx)("div",{children:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"}),Object(h.jsx)("input",{type:"familyName",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f \u043d\u0430 \u043b\u0430\u0442\u0438\u043d\u0438\u0446\u0435",value:c,onChange:function(e){return function(e){var t=e.target.value;a(t),t.length<"3"?B("\u0424\u0430\u043c\u0438\u043b\u0438\u044f \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0434\u043b\u0438\u043d\u043d\u0435\u0435 \u0434\u0432\u0443\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):B("")}(e)},required:!0}),Object(h.jsx)("div",{className:"error",children:k})]}),Object(h.jsxs)("div",{className:"form__item",children:[Object(h.jsx)("div",{children:"\u0418\u043c\u044f"}),Object(h.jsx)("input",{type:"name",placeholder:"\u0418\u043c\u044f \u043d\u0430 \u043b\u0430\u0442\u0438\u043d\u0438\u0446\u0435",value:l,onChange:function(e){return function(e){var t=e.target.value;u(t),t.length<"3"?D("\u0418\u043c\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0434\u043b\u0438\u043d\u043d\u0435\u0435 \u0434\u0432\u0443\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):D("")}(e)},required:!0}),Object(h.jsx)("div",{className:"error",children:w})]}),Object(h.jsxs)("div",{className:"form__item",children:[Object(h.jsx)("div",{children:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(h.jsx)("input",{type:"patronimicName",placeholder:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u043d\u0430 \u043b\u0430\u0442\u0438\u043d\u0438\u0446\u0435",value:O,onChange:function(e){return function(e){var t=e.target.value;m(t),t.length<"3"?y("\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0434\u043b\u0438\u043d\u043d\u0435\u0435 \u0434\u0432\u0443\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):y("")}(e)},required:!0}),Object(h.jsx)("div",{className:"error",children:S})]}),Object(h.jsxs)("div",{className:"form__item",children:[Object(h.jsx)("div",{children:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"}),Object(h.jsx)("input",{type:"date",value:v,onChange:function(e){return g(e.target.value)},required:!0})]}),Object(h.jsx)(j.b,{to:"emailpassform",children:Object(h.jsx)("button",{type:"button",className:"submit__btn",disabled:!(c.length>2&&l.length>2&&O.length>2),children:"\u0414\u0430\u043b\u0435\u0435"})})]})},g=function(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),i=Object(f.a)(r,2),j=i[0],l=i[1],u=Object(n.useState)(""),b=Object(f.a)(u,2),o=b[0],O=b[1],m=Object(n.useState)(""),p=Object(f.a)(m,2),x=p[0],v=p[1],g=Object(s.b)();return Object(h.jsxs)("form",{className:"reg__form",onSubmit:function(e){return function(e){e.preventDefault(),g(d({email:c,password:j,registration:!0}))}(e)},children:[Object(h.jsx)("h2",{children:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430 \u0438 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(h.jsxs)("div",{className:"form__item",children:[Object(h.jsx)("div",{children:"Email"}),Object(h.jsx)("input",{type:"email",placeholder:"Email",value:c,onChange:function(e){return a(e.target.value)},required:!0})]}),Object(h.jsxs)("div",{className:"form__item",children:[Object(h.jsx)("div",{children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(h.jsx)("input",{type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:j,onChange:function(e){return l(e.target.value)},required:!0})]}),Object(h.jsxs)("div",{className:"form__item",children:[Object(h.jsx)("div",{children:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(h.jsx)("input",{type:"password",placeholder:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",value:o,onChange:function(e){return function(e){var t=e.target.value;O(t),v(j!==t?"\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442":"")}(e)},required:!0}),Object(h.jsx)("div",{className:"error",children:x})]}),Object(h.jsx)("button",{type:"submit",className:"submit__btn",disabled:!(j.length>5&&j===o),children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})},N=function(){var e=Object(s.c)(O);return Object(h.jsx)("div",{children:e?Object(h.jsx)(p,{}):Object(h.jsxs)(j.a,{children:[Object(h.jsx)(x,{}),Object(h.jsx)(l.a,{exact:!0,path:"/registration-app",component:v}),Object(h.jsx)(l.a,{exact:!0,path:"/emailpassform",component:g})]})})},_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,39)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))},S=Object(u.a)({reducer:{user:m}});i.a.render(Object(h.jsx)(s.a,{store:S,children:Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(N,{})})}),document.getElementById("root")),_()}},[[38,1,2]]]);
//# sourceMappingURL=main.7bf6f29e.chunk.js.map