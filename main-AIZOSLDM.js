import{b as S}from"./chunk-742SYTTY.js";import{a as h,b as x,d,e as C}from"./chunk-CJZAKTSO.js";import{$a as r,Jb as y,Ka as v,Qa as n,Ra as i,Sa as p,Z as l,ba as u,bb as g,cb as m,wa as s,xa as f,zb as b}from"./chunk-4NAFFOBT.js";var k=[{path:"todos",loadComponent:()=>import("./chunk-TWZBT5QD.js").then(t=>t.TodosListComponent)},{path:"todos/create",loadComponent:()=>import("./chunk-COVZF6RQ.js").then(t=>t.TodoCreateComponent)}];var M={providers:[C(k),u(b,S)]};var E=(()=>{let e=class e{constructor(a){this.todosService=a}};e.\u0275fac=function(o){return new(o||e)(f(y))},e.\u0275cmp=l({type:e,selectors:[["app-header"]],standalone:!0,features:[m],decls:19,vars:1,consts:[[1,"container"],[1,"navbar","navbar-expand-lg","navbar-light","bg-light"],["href","#",1,"navbar-brand"],["src","../../../../assets/logo.jpg","alt","App logo",1,"w-25"],["type","button","data-toggle","collapse","data-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav"],[1,"nav-item","active"],["routerLink","/",1,"nav-link"],[1,"nav-item","position-relative"],["routerLink","/todos",1,"nav-link"],[1,"position-absolute","text-white","bg-danger","todo-count"],[1,"nav-item"],["routerLink","/todos/create",1,"nav-link"]],template:function(o,c){o&1&&(n(0,"div",0)(1,"nav",1)(2,"a",2),p(3,"img",3),i(),n(4,"button",4),p(5,"span",5),i(),n(6,"div",6)(7,"ul",7)(8,"li",8)(9,"a",9),r(10,"Home"),i()(),n(11,"li",10)(12,"a",11),r(13,"Todos"),i(),n(14,"div",12),r(15),i()(),n(16,"li",13)(17,"a",14),r(18,"Create Todo"),i()()()()()()),o&2&&(s(15),g(" ",c.todosService.getTodoCount(),""))},dependencies:[d],styles:[".todo-count[_ngcontent-%COMP%]{top:0;right:-5px;border-radius:50%;line-height:1;padding:2px 5px}"]});let t=e;return t})();var F=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=l({type:e,selectors:[["app-footer"]],standalone:!0,features:[m],decls:8,vars:1,consts:[[1,"container","fixed-bottom"],[3,"routerLink"]],template:function(o,c){o&1&&(n(0,"div",0)(1,"ul")(2,"li")(3,"a",1),r(4," Home "),i()(),n(5,"li")(6,"p"),r(7,"Copyright \xA9 2024"),i()()()()),o&2&&(s(3),v("routerLink","/"))},dependencies:[d],styles:["ul[_ngcontent-%COMP%]{list-style:none;display:flex;justify-content:space-between}"]});let t=e;return t})();var L=(()=>{let e=class e{constructor(){this.title="todo-app"}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=l({type:e,selectors:[["app-root"]],standalone:!0,features:[m],decls:4,vars:0,consts:[[1,"container"]],template:function(o,c){o&1&&(p(0,"app-header"),n(1,"div",0),p(2,"router-outlet"),i(),p(3,"app-footer"))},dependencies:[x,E,F]});let t=e;return t})();h(L,M).catch(t=>console.error(t));
