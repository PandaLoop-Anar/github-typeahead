(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports={container:"Home_container__1Jesm",content:"Home_content__2YvNO",image:"Home_image__3DsR_"}},function(e,t,a){e.exports={container:"Favourites_container__1ENno",favouritesH2:"Favourites_favouritesH2__dTP8V",messageField:"Favourites_messageField__lcKRt"}},function(e,t,a){e.exports={header:"MainNavigation_header__2pEPZ",image:"MainNavigation_image__Rj5yS",nav:"MainNavigation_nav__2Zm2b",active:"MainNavigation_active__1fiFd"}},,function(e,t,a){e.exports={card:"Card_card__3i0E2",btns:"Card_btns__3gkss"}},function(e,t,a){e.exports={pagination:"Pagination_pagination__MV0bV",page_item:"Pagination_page_item__2CxbB"}},function(e,t,a){e.exports={cardBoxContainer:"CardBox_cardBoxContainer__U7dBQ",btn_container:"CardBox_btn_container__3Zh4d"}},function(e,t,a){e.exports={container:"Layout_container__2KTlh",main:"Layout_main__fwm0r"}},,function(e,t,a){e.exports={container:"Footer_container__1v6FP"}},function(e,t,a){e.exports={spiner:"Cards_spiner__Ke5KX",spin:"Cards_spin__3eGsR"}},function(e,t,a){e.exports={form:"SearchingBar_form__kHYPn"}},function(e,t,a){e.exports={container:"Searching_container__2vG9y"}},,,,,,function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(18),r=a.n(c),i=a(6),s=(a(28),a(2)),o=a(10),j=a.n(o),u=a.p+"static/media/girl.cead2de7.jpg",l=a(0);var d=function(){var e=Object(s.f)();return Object(l.jsx)("div",{className:j.a.container,children:Object(l.jsxs)("div",{className:j.a.content,children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"GitHub Typeahead "}),Object(l.jsx)("h3",{children:"Find any GitHub user"}),Object(l.jsx)("button",{onClick:function(){e("/searching-page")},children:"Start Searching"})]}),Object(l.jsx)("img",{src:u,alt:"girl_image",className:j.a.image})]})})},b=a(23),v=a(4),h=a(19),O=a.n(h),f=a(7),x=a(8);var _=function(){return Object(l.jsxs)("div",{className:O.a.container,children:[Object(l.jsx)("p",{children:"Procject was created as part of train effective technical test to show creator's skills in React (JS), HTML and CSS."}),Object(l.jsxs)("span",{children:["Created by: ",Object(l.jsx)("br",{})," Anar Mamedovi"]}),Object(l.jsxs)("span",{children:[Object(l.jsx)(x.a,{icon:f.a}),""," Anar ",""," 2022"]})]})},m=a(14),g=a.n(m),p=Object(n.createContext)({favourites:[],totalFavourites:0,addFavourite:function(e){},removeFavourite:function(e){},itemIsFavourite:function(e){}});function F(e){var t=Object(n.useState)(!0),a=Object(v.a)(t,2),c=(a[0],a[1]),r=Object(n.useState)([]),i=Object(v.a)(r,2),s=i[0],o=i[1];Object(n.useEffect)((function(){c(!0),function(){var e=localStorage.getItem("favourites");e&&o(JSON.parse(e))}()}),[]);var j=function(e){localStorage.setItem("favourites",JSON.stringify(e)),c(!1)};var u={favourites:s,totalFavourites:s.length,addFavourite:function(e){o((function(t){return t.concat(e)})),j(s.concat(e))},removeFavourite:function(e){o((function(t){return t.filter((function(t){return t.id!==e}))})),j(s.filter((function(t){return t.id!==e})))},itemIsFavourite:function(e){return s.some((function(t){return t.id===e}))}};return Object(l.jsx)(p.Provider,{value:u,children:e.children})}var N=p;var S=function(e){var t=Object(n.useContext)(N),a=t.itemIsFavourite(e.id);return Object(l.jsxs)("div",{className:g.a.card,children:[Object(l.jsx)("img",{src:e.avatar_url,alt:"profile_photo"}),Object(l.jsx)("h3",{children:e.login}),Object(l.jsxs)("div",{className:g.a.btns,children:[Object(l.jsx)("button",{onClick:function(){window.open(e.html_url,"_blank").focus()},children:"Go to Profile"}),Object(l.jsx)("button",{onClick:function(){a?t.removeFavourite(e.id):t.addFavourite({id:e.id,login:e.login,avatar_url:e.avatar_url,html_url:e.html_url})},children:a?"Remove from Favourites":"Add to Favourites"})]})]})},C=a(20),P=a.n(C);var y=function(e){var t=e.userCards;return e.isLoading?Object(l.jsx)("h3",{children:Object(l.jsx)(x.a,{icon:f.c,className:P.a.spiner})}):(window.scrollTo(0,0),t.map((function(e){return Object(l.jsx)(S,{id:e.id,login:e.login,avatar_url:e.avatar_url,html_url:e.html_url},e.id)})))},H=a(15),k=a.n(H);var w=function(e){for(var t=e.cardsPerPage,a=e.totalCards,n=e.paginate,c=[],r=1;r<=Math.ceil(a/t);r++)c.push(r);return Object(l.jsx)("nav",{children:Object(l.jsx)("ul",{className:k.a.pagination,children:c.map((function(e){return Object(l.jsx)("li",{className:k.a.page_item,onClick:function(){return n(e)},children:e},e)}))})})},B=a(16),M=a.n(B);var E=function(e){var t=Object(n.useState)([]),a=Object(v.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(!1),s=Object(v.a)(i,2),o=s[0],j=s[1],u=Object(n.useState)(1),d=Object(v.a)(u,2),b=d[0],h=d[1],O=Object(n.useState)(12),f=Object(v.a)(O,1)[0];Object(n.useEffect)((function(){j(!0),r(e.cards),j(!1)}),[e.cards]);var x=b*f,_=x-f,m=c.slice(_,x);return Object(l.jsxs)("div",{className:M.a.cardBoxContainer,children:[Object(l.jsx)(y,{userCards:m,isLoading:o}),Object(l.jsx)("div",{className:M.a.btn_container,children:Object(l.jsx)(w,{cardsPerPage:f,totalCards:c.length,paginate:function(e){return h(e)}})})]})},R=a(21),G=a.n(R);var I=function(e){var t=Object(n.useRef)();return Object(l.jsx)("form",{className:G.a.form,onSubmit:function(a){a.preventDefault();var n=t.current.value;console.log(n),e.onSearch(n)},children:Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"searchF",children:Object(l.jsx)(x.a,{icon:f.b})}),Object(l.jsx)("input",{type:"text",id:"searchF",ref:t,required:!0}),Object(l.jsx)("button",{children:"Search"})]})})},J=a(22),T=a.n(J);var L=function(){var e,t,a=Object(n.useState)(!0),c=Object(v.a)(a,2),r=c[0],i=c[1],s=Object(n.useState)([]),o=Object(v.a)(s,2),j=o[0],u=o[1];return Object(n.useEffect)((function(){i(!0)}),[]),e=r?Object(l.jsx)(E,{cards:[]}):Object(l.jsx)(E,{cards:j}),Object(l.jsxs)("div",{className:T.a.container,children:[Object(l.jsx)(I,{onSearch:function(e){t=e.split(" ").join(""),fetch("https://api.github.com/search/users?q=".concat(t,"&user/repos?page=1&per_page=100")).then((function(e){return e.json()})).then((function(e){console.log(e);var t=[];for(var a in e.items){var n=Object(b.a)({id:a},e.items[a]);t.push(n)}setTimeout((function(){console.log(t),i(!1),u(t)}),1e3)})).catch((function(e){return console.error(e)}))}}),e,Object(l.jsx)(_,{})]})},K=a(11),A=a.n(K);var V=function(){var e,t=Object(n.useContext)(N);return e=0===t.totalFavourites?Object(l.jsx)("p",{className:A.a.messageField,children:"You got no favorites yet. So start adding some \ud83d\ude09"}):Object(l.jsx)(E,{cards:t.favourites}),Object(l.jsxs)("div",{className:A.a.container,children:[Object(l.jsx)("h2",{className:A.a.favouritesH2,children:"My Favourite GitHub Profiles"}),e,Object(l.jsx)(_,{})]})},Y=a.p+"static/media/logo.cc88cb47.jpg",Z=a(12),q=a.n(Z);var D=function(){return Object(l.jsxs)("header",{className:q.a.header,children:[Object(l.jsx)("div",{children:Object(l.jsx)(i.b,{to:"/",children:Object(l.jsx)("img",{src:Y,alt:"logo",className:q.a.image})})}),Object(l.jsx)("nav",{className:q.a.nav,children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/",children:" Home "})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/searching-page",children:" Searching Page "})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/favourites-page",children:" Favourites "})})]})})]})},Q=a(17),U=a.n(Q);var X=function(e){return Object(l.jsxs)("div",{className:U.a.container,children:[Object(l.jsx)(D,{}),Object(l.jsx)("main",{className:U.a.main,children:e.children})]})};var z=function(){return Object(l.jsx)(X,{children:Object(l.jsxs)(s.c,{children:[Object(l.jsx)(s.a,{path:"/",exact:!0,element:Object(l.jsx)(d,{})}),Object(l.jsx)(s.a,{path:"/searching-page",exact:!0,element:Object(l.jsx)(L,{})}),Object(l.jsx)(s.a,{path:"/favourites-page",exact:!0,element:Object(l.jsx)(V,{})})]})})};r.a.render(Object(l.jsx)(F,{children:Object(l.jsx)(i.a,{children:Object(l.jsx)(z,{})})}),document.getElementById("root"))}],[[32,1,2]]]);
//# sourceMappingURL=main.2813b22d.chunk.js.map