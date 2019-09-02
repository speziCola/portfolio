(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{151:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=(a(152),a(154)),c=a(162),l=a(166),s=a(160),o=a(157),m=a(167),u=a.n(m);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,{title:"Home",keywords:["gatsby","application","react"]}),r.a.createElement(s.a,null),r.a.createElement("div",{className:"ck_start_container"},r.a.createElement("div",{className:"ck_start_container__wrapper"},r.a.createElement("img",{className:"ck_start_container__avatar",src:u.a,alt:"Chris Kuhrt, porfile picture."}),r.a.createElement("h1",{className:"ck_start_container__headline"},"Hi, my name is Chris"," ","Kuhrt.",r.a.createElement("br",null),"I’m"," ","a"," ","Product"," ","Designer based in Germany.”",r.a.createElement("span",{className:"ck_start_container__headline__line"},"_")),r.a.createElement("p",{className:"ck_start_container__subtext"},"Starting to explore the internet in the early 2000s I discovered digital media design.",r.a.createElement("br",null)," Since then, I’ve worked for serveral clients. I always strive to create new or better customer experience with empathy."),r.a.createElement(l.a,{size:"big"}))),r.a.createElement(o.a,null))}},152:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(33),s=a.n(l);a.d(t,"a",function(){return s.a});a(153);var o=r.a.createContext({}),m=function(e){return r.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},153:function(e,t,a){var n;e.exports=(n=a(156))&&n.default||n},154:function(e,t,a){"use strict";var n=a(155),r=a(4),i=a.n(r),c=a(152),l=a(0),s=a.n(l),o=(a(158),a(55)),m=function(e){var t=e.children;return s.a.createElement(c.b,{query:"2994927498",render:function(e){return s.a.createElement(o.a.Consumer,null,function(e){return s.a.createElement("div",{id:"theme",className:e.theme},s.a.createElement("div",{className:"content"},s.a.createElement("main",null,t)))})},data:n})};m.propTypes={children:i.a.node.isRequired},t.a=m},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Chris Kuhrt - Product Designer"}}}}},156:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(56),s=a(2),o=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=o},157:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(33),c=a.n(i),l=a(5),s=a.n(l),o=a(55),m=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return r.a.createElement(o.a.Consumer,null,function(e){return r.a.createElement("button",{onClick:e.toggleTheme,"aria-label":"Theme toggle",className:"ck_footer__theme"},r.a.createElement("i",{className:"ck_footer__theme__icon"}))})},t}(r.a.Component);t.a=function(){return r.a.createElement("div",{className:"ck_footer"},r.a.createElement("div",{className:"ck_footer__wrapper"},r.a.createElement("p",{className:"ck_footer__credit"},"© 2008 - 2019 ",r.a.createElement(c.a,{to:"/imprint/"},"Imprint")),r.a.createElement(m,null)))}},160:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(33),c=a.n(i);t.a=function(){return r.a.createElement("nav",null,r.a.createElement(c.a,{to:"/",className:"logo","aria-label":"Homelink"}),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.a,{to:"/about/"},"About")),r.a.createElement("li",null,r.a.createElement(c.a,{to:"/timeline/"},"Timeline"))))}},162:function(e,t,a){"use strict";var n=a(163),r=a(0),i=a.n(r),c=a(4),l=a.n(c),s=a(159),o=a.n(s),m=a(152);function u(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,l=e.title;return i.a.createElement(m.b,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u;var d="1025518380"},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Chris Kuhrt - Product Designer",description:"Just a portfolio.",author:"Chris Kuhrt"}}}}},166:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=function(e){var t=e.size;return r.a.createElement("div",{className:"ck_social ck_social--"+t},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/christopher-kuhrt/","aria-label":"Linkedin"},r.a.createElement("i",{className:"ck-icon-linkedin"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.xing.com/profile/Christopher_Kuhrt2","aria-label":"Xing"},r.a.createElement("i",{className:"ck-icon-xing"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com//spezicola","aria-label":"Github"},r.a.createElement("i",{className:"ck-icon-github"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.instagram.com/chriskuhrt/","aria-label":"Instagram"},r.a.createElement("i",{className:"ck-icon-instagram"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://500px.com/chriskuhrt","aria-label":"500px"},r.a.createElement("i",{className:"ck-icon-500pixel"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://vimeo.com/cqrt","aria-label":"Vimeo"},r.a.createElement("i",{className:"ck-icon-vimeo"})))))};l.defaultProps={size:""},l.propTypes={size:c.a.string},t.a=l},167:function(e,t,a){e.exports=a.p+"static/qrt-ck-931a84bf01d62fb988290675c7ad424b.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-a617d62ceb619d1a6e86.js.map