(this["webpackJsonpagency-website"]=this["webpackJsonpagency-website"]||[]).push([[8],{24:function(n,e,t){"use strict";t.r(e),e.default=t.p+"static/media/logo.a3461640.svg"},71:function(n,e,t){"use strict";function r(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function i(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var t=[],r=!0,i=!1,o=void 0;try{for(var a,c=n[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!e||t.length!==e);r=!0);}catch(l){i=!0,o=l}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return t}}(n,e)||function(n,e){if(n){if("string"===typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.r(e);var o,a,c,l,s,d,u=t(6),m=t(27),h=t(26),f=t(0),b=t(7),p=t(24),g=t(1),j=b.b.header(o||(o=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 5rem;\n  background-color: var(--nav);\n  color: var(--white);\n  position: relative;\n  z-index: 500;\n  @media only Screen and (max-width: 64em) {\n    padding: 0.5rem 3rem;\n  }\n  @media only Screen and (max-width: 40em) {\n    padding: 0.5rem 1.5rem;\n  }\n"]))),x=b.b.a(a||(a=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  width: 7rem;\n  height: auto;\n  cursor: pointer;\n  img {\n    margin-right: 0.5rem;\n  }\n"]))),v=b.b.nav(c||(c=Object(u.a)(['\n  width: 25rem;\n  max-width: 40rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  transition: all 0.3s;\n  @media only Screen and (max-width: 48em) {\n    display: none;\n  }\n  a {\n    font-weight: 600;\n    line-height: 1.5;\n    color: var(--white);\n    &::after {\n      content: "";\n      display: block;\n      height: 3px;\n      width: 0;\n      background: transparent;\n      transition: width 0.5s;\n    }\n    &:not(:last-child):hover::after {\n      width: 100%;\n      background: var(--purple);\n    }\n    /* &:not(:last-child) {\n      margin-right: 2rem;\n    } */\n    /* @media only Screen and (max-width: 48em) {\n      &:not(:last-child) {\n        margin-right: 1rem;\n      }\n    } */\n  }\n']))),y=b.b.button(l||(l=Object(u.a)(["\n  background-color: var(--purple);\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  color: var(--white);\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  &:hover {\n    transform: scale(1.1);\n  }\n  &:focus {\n    transform: scale(0.9);\n  }\n  @media only Screen and (max-width: 40em) {\n    font-size: 1.2rem;\n    &:hover {\n      transform: none;\n    }\n    &:focus {\n      transform: none;\n    }\n  }\n"]))),w=b.b.button(s||(s=Object(u.a)(['\n  display: none;\n  @media only Screen and (max-width: 48em) {\n    display: inline-block;\n  }\n  position: relative;\n  background-color: transparent;\n  width: 2rem;\n  height: 2px;\n  margin-top: 0rem;\n  transition: all 0.3s;\n  cursor: pointer;\n  &::before,\n  &::after {\n    content: "";\n    background-color: var(--white);\n    width: 2rem;\n    height: 2px;\n    display: inline-block;\n    position: absolute;\n    left: 0;\n    cursor: pointer;\n\n    transition: all 0.3s;\n  }\n  &::before {\n    top: ',";\n    transform: ",";\n  }\n  &::after {\n    top: ",";\n    transform: ",";\n  }\n"])),(function(n){return n.clicked?"0":"-0.5rem"}),(function(n){return n.clicked?"rotate(135deg)":"rotate(0)"}),(function(n){return n.clicked?"0":"0.5rem"}),(function(n){return n.clicked?"rotate(-135deg)":"rotate(0)"})),k=b.b.nav(d||(d=Object(u.a)(["\n  display: none;\n  @media only Screen and (max-width: 48em) {\n    display: flex;\n  }\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 0;\n  overflow-x: hidden;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  opacity: ",";\n  visibility: ",";\n  transition: all 0.5s;\n  z-index: -10;\n  background-color: rgb(53 53 63 / 95%);\n  border-radius: 20px;\n  margin: 0.5rem;\n  a {\n    color: var(--white);\n    font-weight: 600;\n    font-size: 1.5rem;\n    margin: 1.5rem;\n    cursor: pointer;\n  }\n"])),(function(n){return n.clicked?"1":0}),(function(n){return n.clicked?"visible":"hidden"}));e.default=function(){var n=i(Object(f.useState)(!1),2),e=n[0],t=n[1],r=Object(f.useRef)(null);m.b.registerPlugin(h.a);var o=function(n,e){e.preventDefault(),document.getElementById(n).scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},a=function(n,r){t(!e),o(n,r)};return Object(f.useEffect)((function(){var n=r.current;window.matchMedia("(max-width: 40em)").matches?m.b.to(n,{position:"fixed",top:"0",left:"0",right:"0",padding:"1rem 2.5rem",borderRadius:"0 0 50px 50px",border:"2px solid var(--white)",duration:1,ease:"power1.out",scrollTrigger:{trigger:n,start:"bottom+=200 top",end:"+=100",scrub:!0}}):m.b.to(n,{position:"fixed",top:"1rem",left:"3rem",right:"3rem",padding:"1.5rem 2rem",borderRadius:"50px",border:"3px solid var(--white)",duration:1,ease:"power1.out",scrollTrigger:{trigger:n,start:"bottom+=300 top",end:"+=250",scrub:!0}})}),[]),Object(g.jsxs)(j,{ref:r,children:[Object(g.jsx)(x,{children:Object(g.jsx)("img",{src:p.default,alt:"kavanozlogo"})}),Object(g.jsxs)(v,{children:[Object(g.jsx)("a",{href:"#home",onClick:function(n){return o("home",n)},children:"Home"}),Object(g.jsx)("a",{href:"#about",onClick:function(n){return o("about",n)},children:"About"}),Object(g.jsx)("a",{href:"#services",onClick:function(n){return o("services",n)},children:"Services"}),Object(g.jsx)("a",{href:"#contact",onClick:function(n){return o("contact",n)},children:Object(g.jsx)(y,{children:"Contact"})})]}),Object(g.jsx)(w,{clicked:e,onClick:function(){return t(!e)},children:Object(g.jsx)("span",{})}),Object(g.jsxs)(k,{clicked:e,children:[Object(g.jsx)("a",{href:"#home",onClick:function(n){return a("home",n)},children:"Home"}),Object(g.jsx)("a",{href:"#about",onClick:function(n){return a("about",n)},children:"About"}),Object(g.jsx)("a",{href:"#services",onClick:function(n){return a("services",n)},children:"Services"}),Object(g.jsx)("a",{href:"#contact",onClick:function(n){return a("contact",n)},children:Object(g.jsx)(y,{children:"Contact"})})]})]})}}}]);
//# sourceMappingURL=8.2411b3ea.chunk.js.map