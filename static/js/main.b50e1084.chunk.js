(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{15:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(5),o=n.n(a),r=(n(15),n(3)),i=n(7),s=(n(16),n(9)),u=n(10),l=n.n(u),j="22773171-6fe03cddc33c3049d7faab277",b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12;return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat(j,"&image_type=photo&orientation=horizontal&per_page=").concat(n)).then((function(e){return e.json()})).then((function(e){return e.hits}))},m=n(1),d=function(e){var t=e.closeModal,n=e.largeImageURL,a=function(e){return"Escape"===e.code&&t()};Object(c.useEffect)((function(){return window.addEventListener("keydown",a),document.querySelector("body").style.overflow="hidden",function(){window.removeEventListener("keydown",a),document.querySelector("body").style.overflow="auto"}}),[]);return Object(m.jsx)("div",{onClick:function(e){e.target===e.currentTarget&&t()},className:"Overlay",children:Object(m.jsx)("div",{className:"Modal",children:Object(m.jsx)("img",{src:n,alt:""})})})},h=function(e){var t=e.query,n=Object(c.useState)(1),a=Object(r.a)(n,2),o=a[0],i=a[1],u=Object(c.useState)([]),j=Object(r.a)(u,2),h=j[0],f=j[1],O=Object(c.useState)(!1),g=Object(r.a)(O,2),p=g[0],v=g[1],x=Object(c.useState)(""),y=Object(r.a)(x,2),S=y[0],w=y[1],N=Object(c.useState)(!1),k=Object(r.a)(N,2),F=k[0],I=k[1],C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;v(!0),b(e,t).then((function(e){return f((function(t){return[].concat(Object(s.a)(t),Object(s.a)(e))}))})).finally((function(){v(!1),t>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))};Object(c.useEffect)((function(){t&&(C(t),i(1),f([]))}),[t]),Object(c.useEffect)((function(){1!==o&&C(t,o)}),[o,t]);var E=function(){I((function(e){return!e}))};return Object(m.jsxs)(m.Fragment,{children:[h.length>0&&Object(m.jsx)("ul",{className:"ImageGallery",children:h.map((function(e){return Object(m.jsx)("li",{onClick:E,className:"ImageGalleryItem",children:Object(m.jsx)("img",{src:e.webformatURL,alt:e.tags,onClick:function(){return function(e){w(e)}(e.largeImageURL)},className:"ImageGalleryItem-image"})},e.id)}))}),Object(m.jsx)("div",{className:"loader",children:p&&Object(m.jsx)(l.a,{type:"BallTriangle",color:"#00BFFF",height:80,width:80,timeout:3e3})}),F&&Object(m.jsx)(d,{largeImageURL:S,closeModal:E}),h.length>1&&Object(m.jsx)("button",{className:"Button",type:"button",onClick:function(){i((function(e){return e+1}))},children:"Load more"})]})},f=function(e){var t=e.onSubmit,n=Object(c.useState)(""),a=Object(r.a)(n,2),o=a[0],s=a[1];return Object(m.jsx)("header",{className:"Searchbar",children:Object(m.jsxs)("form",{className:"SearchForm",onSubmit:function(e){if(""===o.trim())return e.preventDefault(),void i.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430");e.preventDefault(),t(o)},children:[Object(m.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(m.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(m.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:o,onChange:function(e){s(e.currentTarget.value.toLowerCase())}})]})})},O=(n(38),function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(f,{onSubmit:function(e){a(e)}}),Object(m.jsx)(h,{query:n}),Object(m.jsx)(i.a,{autoClose:3e3})]})});o.a.render(Object(m.jsx)(O,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.b50e1084.chunk.js.map