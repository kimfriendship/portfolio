(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{69:function(n,e,t){},70:function(n,e,t){"use strict";t.r(e);var r=t(0),i=t(1),c=t.n(i),o=t(17),a=t.n(o),s=t(11),u=t(2),l=t(6),m=t(12),d=t(21),j=t(3),f=t(15);function b(){var n=Object(j.a)(["\n  display: flex;\n  justify-content: space-between;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: ",";\n\n  /* .active {\n    border-bottom: ",';\n\n    &::after {\n      display: none;\n    }\n  } */\n\n  & * {\n    margin-left: 2rem;\n    outline: none;\n    cursor: pointer;\n\n    &::after {\n      display: block;\n      content: " ";\n      padding: 0.2rem 0;\n      transform: scaleX(0);\n      transition: transform 0.2s ease-in-out;\n      border-bottom: ',";\n    }\n\n    &:hover:after,\n    &:focus:after {\n      transform: scaleX(1);\n    }\n  }\n\n  @media "," {\n    display: none;\n  }\n"]);return b=function(){return n},n}var h=function(n){var e=n.isHome;return Object(r.jsxs)(p,{isHome:e,children:[Object(r.jsx)(f.HashLink,{smooth:!0,to:"/#home",tabIndex:"3",children:"HOME"}),Object(r.jsx)(f.HashLink,{smooth:!0,to:"/#about",tabIndex:"4",children:"ABOUT"}),Object(r.jsx)(f.HashLink,{smooth:!0,to:"/#project",tabIndex:"5",children:"PROJECT"})]})},p=u.c.nav(b(),(function(n){return n.isHome?"white":"black"}),(function(n){var e=n.isHome;return"2px solid ".concat(e?"white":"black")}),(function(n){var e=n.isHome;return"2px solid ".concat(e?"white":"black")}),(function(n){return n.theme.size.mobile})),O=t(40),g=t(37);function x(){var n=Object(j.a)(["\n  background-color: transparent;\n  color: white;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 0;\n  width: 3.5rem;\n  height: 3.5rem;\n  border-radius: 50%;\n  position: absolute;\n  top: 2rem;\n  right: 2rem;\n\n  &:hover,\n  &:focus {\n    border: 2px solid white;\n  }\n"]);return x=function(){return n},n}function v(){var n=Object(j.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  outline: none;\n  color: white;\n  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,\n    Helvetica Neue, sans-serif;\n\n  & * {\n    cursor: pointer;\n    outline: none;\n    font-size: 5rem;\n    font-weight: 600;\n    margin: 2rem 0;\n    transition: 0.2s ease-in;\n\n    &:hover,\n    &:focus {\n      transform: scale(1.1);\n      transition: 0.2s ease-in;\n    }\n  }\n"]);return v=function(){return n},n}function w(){var n=Object(j.a)(["\n          animation: "," 0.2s forwards;\n        "]);return w=function(){return n},n}function y(){var n=Object(j.a)(["\n          animation: "," 0.2s forwards;\n        "]);return y=function(){return n},n}function k(){var n=Object(j.a)(["\n  background-color: lightseagreen;\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 200;\n  ","\n"]);return k=function(){return n},n}function z(){var n=Object(j.a)(["\n0% {\n  transform: translate3d(0, 0, 0);\n}\n100% {\n  transform: translate3d(100vw, 0, 0);\n}\n"]);return z=function(){return n},n}function S(){var n=Object(j.a)(["\n0% {\n  transform: translate3d(100vw, 0, 0);\n}\n100% {\n  transform: translate3d(0, 0, 0);\n}\n"]);return S=function(){return n},n}var H=function(n){var e=n.menuState,t=n.closeMenu;return null===e?null:a.a.createPortal(Object(r.jsxs)(T,{menuState:e,children:[Object(r.jsxs)(B,{children:[Object(r.jsx)(f.HashLink,{onClick:t,smooth:!0,to:"/#home",tabIndex:"3",children:"HOME"}),Object(r.jsx)(f.HashLink,{onClick:t,smooth:!0,to:"/#about",tabIndex:"4",children:"ABOUT"}),Object(r.jsx)(f.HashLink,{onClick:t,smooth:!0,to:"/#project",tabIndex:"5",children:"PROJECT"})]}),Object(r.jsx)(C,{onClick:t,type:"button","aria-label":"\uba54\ub274 \ub2eb\uae30",tabIndex:"6",children:Object(r.jsx)(g.a,{size:"30"})})]}),document.getElementById("menu"))},I=Object(u.d)(S()),M=Object(u.d)(z()),T=u.c.div(k(),(function(n){return n.menuState?Object(u.b)(y(),I):Object(u.b)(w(),M)})),B=u.c.nav(v()),C=u.c.button(x()),F=function(n){var e=n.menu,t=e.menuState,i=e.closeMenu;return e?Object(r.jsx)(H,{menuState:t,closeMenu:i}):null};function L(){var n=Object(j.a)(["\n  display: none;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 0;\n  margin-top: -0.7rem;\n  width: 3.5rem;\n  height: 3.5rem;\n  transition: 0.2s ease-in;\n  background-color: transparent;\n  color: ",";\n\n  &:hover,\n  &:focus {\n    transition: 0.2s ease-in;\n    color: ",";\n  }\n\n  @media "," {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"]);return L=function(){return n},n}var D=function(n){var e=n.isHome,t=n.menu,i=t.menuState,c=t.openMenu,o=t.closeMenu;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(R,{type:"button","aria-label":"\uba54\ub274 \uc5f4\uae30",tabIndex:"2",isHome:e,onClick:c,children:Object(r.jsx)(O.a,{size:"30"})}),Object(r.jsx)(F,{menu:{menuState:i,closeMenu:o}})]})},R=u.c.button(L(),(function(n){return n.isHome?"white":"black"}),(function(n){return n.theme.color.point}),(function(n){return n.theme.size.mobile})),E=function(n){var e=n.isHome,t=Object(i.useState)(null),c=Object(m.a)(t,2),o=c[0],a=c[1];return Object(r.jsx)(D,{isHome:e,menu:{menuState:o,openMenu:function(){return a(!0)},closeMenu:function(){a(!1),setTimeout((function(){return a(null)}),300)}}})};function _(){var n=Object(j.a)(['\n  outline: none;\n  transition: 0.2s ease-in;\n\n  &::after {\n    display: block;\n    content: " ";\n    padding: 0.2rem 0;\n    transform: scaleX(0);\n    transition: transform 0.2s ease-in-out;\n    border-bottom: ',";\n  }\n\n  &:hover:after,\n  &:focus:after {\n    transform: scaleX(1);\n  }\n"]);return _=function(){return n},n}function N(){var n=Object(j.a)(["\n  font-size: 2rem;\n  font-weight: 600;\n  color: ",";\n"]);return N=function(){return n},n}function A(){var n=Object(j.a)(["\n  max-width: 1200px;\n  height: 7rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0 auto -0.5rem;\n"]);return A=function(){return n},n}function J(){var n=Object(j.a)(["\n  background-color: ",";\n  box-shadow: ",";\n  position: fixed;\n  width: 100%;\n  padding: 0 2rem;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,\n    Helvetica Neue, sans-serif;\n"]);return J=function(){return n},n}var P=function(n){var e=n.isHome,t=n.isAbout,i=n.isProject,c=n.isDetail;return Object(r.jsx)(U,{isHome:e,children:Object(r.jsxs)(W,{children:[Object(r.jsx)(X,{isHome:e,children:Object(r.jsx)(K,{isHome:e,href:"https://kimfriendship.com/",tabIndex:"1",children:"kimFriendship"})}),Object(r.jsx)(h,{isHome:e,isAbout:t,isProject:i,isDetail:c}),Object(r.jsx)(E,{isHome:e})]})})},G=c.a.memo(P),U=u.c.header(J(),(function(n){return n.isHome?"transparent":"white"}),(function(n){return!n.isHome&&"0 0 10px 0 gray"})),W=u.c.div(A()),X=u.c.h1(N(),(function(n){return n.isHome?"white":"black"})),K=u.c.a(_(),(function(n){var e=n.isHome;return"2px solid ".concat(e?"white":"black")})),q=function(){var n="/project"===Object(l.l)().pathname,e=function(){return window.scrollY<window.innerHeight},t=Object(i.useState)(e()),c=Object(m.a)(t,2),o=c[0],a=c[1],s=Object(d.throttle)((function(){return a(e())}),200);return Object(i.useEffect)((function(){return window.addEventListener("scroll",s),function(){return window.removeEventListener("scroll",s)}}),[]),Object(r.jsx)(G,{isHome:o&&!n})};function Y(){var n=Object(j.a)(["\n  width: 100%;\n  font-size: 1.3rem;\n  text-align: center;\n  height: 3rem;\n  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,\n    Helvetica Neue, sans-serif;\n"]);return Y=function(){return n},n}var Q=function(){return Object(r.jsx)(V,{children:"\u24d2 Woojung Kim 2020, all rights reserved."})},V=u.c.footer(Y());function Z(){var n=Object(j.a)(["\n  display: block;\n  position: absolute;\n  bottom: 0;\n  left: -10%;\n  width: 120%;\n  height: 1.5rem;\n  background-color: ",";\n  opacity: 0.5;\n  z-index: -10;\n"]);return Z=function(){return n},n}function $(){var n=Object(j.a)(["\n  width: fit-content;\n  margin: 0 auto;\n  font-size: 3.5rem;\n  font-weight: 600;\n  position: relative;\n"]);return $=function(){return n},n}var nn=function(n){var e=n.children;return Object(r.jsxs)(en,{children:[e,Object(r.jsx)(tn,{"aria-hidden":!0})]})},en=u.c.h2($()),tn=u.c.span(Z(),(function(n){return n.theme.color.point}));function rn(){var n=Object(j.a)(["\n  max-width: 1200px;\n  width: 100%;\n  height: ",";\n  padding: ",";\n  margin: 0 auto;\n"]);return rn=function(){return n},n}var cn=function(n){var e=n.id,t=n.children,i=n.height,c=Object(l.l)().pathname.includes("/project");return Object(r.jsx)(on,{id:e,height:i,isDetail:c,children:t})},on=u.c.section(rn(),(function(n){return n.height||"fit-content"}),(function(n){return n.isDetail?"11rem 0":"15rem 0 10rem"})),an=t.p+"static/media/back.057466f5.png";function sn(){var n=Object(j.a)(["\n  ",";\n  z-index: -10;\n  background-color: black;\n  opacity: 0.8;\n"]);return sn=function(){return n},n}function un(){var n=Object(j.a)(["\n  ",";\n  z-index: -20;\n"]);return un=function(){return n},n}function ln(){var n=Object(j.a)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  position: absolute;\n  top: 0;\n  left: 0;\n"]);return ln=function(){return n},n}var mn=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(fn,{}),Object(r.jsx)(jn,{src:an,alt:"\ubc30\uacbd"})]})},dn=Object(u.b)(ln()),jn=u.c.img(un(),dn),fn=u.c.div(sn(),dn);function bn(){var n=Object(j.a)(["\n  z-index: 50;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return bn=function(){return n},n}function hn(){var n=Object(j.a)(["\n  color: white;\n  font-size: ",";\n  font-weight: 700;\n  display: block;\n  width: 100%;\n  margin: 0 auto;\n  margin-bottom: 1rem;\n  text-align: center;\n\n  @media "," {\n    font-size: 4rem;\n  }\n"]);return hn=function(){return n},n}var pn=function(){return Object(r.jsxs)(gn,{children:[Object(r.jsx)(On,{size:"15.2rem",children:"Hi there."}),Object(r.jsx)(On,{size:"7.2rem",children:"I'm Woojung Kim."})]})},On=u.c.span(hn(),(function(n){n.size;return"8rem"}),(function(n){return n.theme.size.mobile})),gn=u.c.div(bn()),xn=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(cn,{id:"home",height:"100vh",children:[Object(r.jsx)(mn,{}),Object(r.jsx)(pn,{})]})})},vn=t(42),wn=t(22),yn=t(43),kn=t(41);function zn(){var n=Object(j.a)(["\n  ","\n  &:hover,\n  &:focus {\n    outline: none;\n    color: white;\n    background-color: ",";\n  }\n"]);return zn=function(){return n},n}function Sn(){var n=Object(j.a)(["\n  ","\n"]);return Sn=function(){return n},n}function Hn(){var n=Object(j.a)(["\n  font-size: 1.6rem;\n  line-height: 2rem;\n  padding: 0 0.5rem;\n  margin-left: 0.5rem;\n  word-break: break-all;\n"]);return Hn=function(){return n},n}function In(){var n=Object(j.a)(["\n  display: flex;\n  align-items: center;\n  margin: 0.5rem 0;\n  color: ",";\n"]);return In=function(){return n},n}function Mn(){var n=Object(j.a)(["\n  margin-bottom: 3rem;\n  width: 100%;\n"]);return Mn=function(){return n},n}var Tn=function(){return Object(r.jsxs)(Bn,{children:[Object(r.jsxs)(Cn,{children:[Object(r.jsx)(kn.a,{size:"20"}),Object(r.jsx)(Ln,{children:"010 8024 2242"})]}),Object(r.jsxs)(Cn,{children:[Object(r.jsx)(vn.a,{size:"20"}),Object(r.jsx)(Dn,{href:"mailto:kfriendship94@gmail.com",children:"kfriendship94@gmail.com"})]}),Object(r.jsxs)(Cn,{children:[Object(r.jsx)(wn.a,{size:"20"}),Object(r.jsx)(Dn,{href:"https://github.com/kimfriendship",children:"https://github.com/kimfriendship"})]}),Object(r.jsxs)(Cn,{children:[Object(r.jsx)(yn.a,{size:"20"}),Object(r.jsx)(Dn,{href:"https://velog.io/@kimfriendship",children:"https://velog.io/@kimfriendship"})]})]})},Bn=u.c.ul(Mn()),Cn=u.c.li(In(),(function(n){return n.theme.color.point})),Fn=Object(u.b)(Hn()),Ln=u.c.a(Sn(),Fn),Dn=u.c.a(zn(),Fn,(function(n){return n.theme.color.point}));function Rn(){var n=Object(j.a)(["\n  font-size: 3rem;\n"]);return Rn=function(){return n},n}function En(){var n=Object(j.a)(["\n  font-size: 2rem;\n  margin-right: 1rem;\n"]);return En=function(){return n},n}function _n(){var n=Object(j.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: baseline;\n  font-weight: 600;\n  margin-bottom: 3rem;\n"]);return _n=function(){return n},n}var Nn=function(){return Object(r.jsxs)(An,{children:[Object(r.jsx)(Jn,{children:"Front-End Developer"}),Object(r.jsx)(Pn,{children:"\uae40\uc6b0\uc815"})]})},An=u.c.h3(_n()),Jn=u.c.span(En()),Pn=u.c.span(Rn());function Gn(){var n=Object(j.a)(["\n  font-size: 1.6rem;\n  line-height: 2.5rem;\n  margin-bottom: 1rem;\n"]);return Gn=function(){return n},n}function Un(){var n=Object(j.a)([""]);return Un=function(){return n},n}var Wn=function(){return Object(r.jsxs)(Xn,{children:[Object(r.jsx)(Kn,{children:"\uc548\ub155\ud558\uc138\uc694. \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790 \uae40\uc6b0\uc815\uc785\ub2c8\ub2e4."}),Object(r.jsxs)(Kn,{children:["'\ub9cc\ub4dc\ub294 \uac83'\uacfc \ub9cc\ub4e0 \uac83\uc744 '\ub2e4\ub978 \uc0ac\ub78c\ub4e4\uacfc \ub098\ub204\ub294 \uac83'\uc5d0\uc11c \uac00\uc7a5 \ud070 \uc990\uac70\uc6c0\uc744 \ub290\ub07c\uace0 \uc131\ucde8\uac10\uc744 \ub290\ub08d\ub2c8\ub2e4.",Object(r.jsx)("br",{}),"\ud504\ub85c\uadf8\ub798\ubc0d\uc744 \ud1b5\ud574, \ub9cc\ub4e4 \uc218 \uc788\ub294 \uac83\uc758 \ud55c\uacc4\ub97c \uc870\uae08\uc529 \ud5c8\ubb3c\uace0\uc790 \ud569\ub2c8\ub2e4."]}),Object(r.jsxs)(Kn,{children:["\ud56d\uc0c1 \uae30\ubcf8\uae30\ub97c \ud0c4\ud0c4\ud788 \ub2e4\uc9c0\ub824\uace0 \ub178\ub825\ud558\uba70, \uadf8\uc5d0 \ub530\ub77c \uc0c8\ub85c\uc6b4 \uae30\uc220\uc744 \ube60\ub974\uac8c \uc2b5\ub4dd\ud558\ub294 \ud3b8\uc785\ub2c8\ub2e4.",Object(r.jsx)("br",{}),"\uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc5d0 \uad00\uc2ec\uc774 \ub9ce\uace0 \ub192\uc740 \uc6f9 \uc811\uadfc\uc131\uc744 \uac00\uc9c4 \uc81c\ud488\uc744 \uac1c\ubc1c\ud558\ub294\ub370 \uae30\uc5ec\ud558\uace0 \uc2f6\uc2b5\ub2c8\ub2e4."]})]})},Xn=u.c.span(Un()),Kn=u.c.p(Gn()),qn=t.p+"static/media/profile.c10a5319.jpeg";function Yn(){var n=Object(j.a)(["\n  width: 40%;\n  height: 40%;\n  border-radius: 20px;\n  margin: 0 2rem 3rem 0;\n\n  @media "," {\n    width: 100%;\n  }\n"]);return Yn=function(){return n},n}var Qn=function(){return Object(r.jsx)(Vn,{src:qn,alt:"\uae40\uc6b0\uc815 \ud504\ub85c\ud544 \uc0ac\uc9c4"})},Vn=u.c.img(Yn(),(function(n){return n.theme.size.mobile})),Zn=t(14),$n=t.n(Zn);function ne(){var n=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return ne=function(){return n},n}function ee(){var n=Object(j.a)(["\n  margin-top: 10rem;\n  display: flex;\n  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,\n    Helvetica Neue, sans-serif;\n\n  @media "," {\n    flex-direction: column;\n  }\n"]);return ee=function(){return n},n}var te=function(){return Object(r.jsxs)(cn,{id:"about",children:[Object(r.jsx)(nn,{children:"ABOUT"}),Object(r.jsx)($n.a,{animateIn:"slideInUp",animateOnce:!0,children:Object(r.jsxs)(re,{children:[Object(r.jsx)(Qn,{}),Object(r.jsxs)(ie,{children:[Object(r.jsx)(Nn,{}),Object(r.jsx)(Tn,{}),Object(r.jsx)(Wn,{})]})]})})]})},re=u.c.div(ee(),(function(n){return n.theme.size.mobile})),ie=u.c.div(ne()),ce=t(28);function oe(){var n=Object(j.a)(["\n  border-top: ",";\n  width: 100%;\n  margin: 0.8rem 0;\n\n  @media "," {\n    margin: 1% 0;\n  }\n"]);return oe=function(){return n},n}function ae(){var n=Object(j.a)(["\n  color: ",";\n  font-size: 1.4rem;\n"]);return ae=function(){return n},n}function se(){var n=Object(j.a)(["\n  font-size: 2.5rem;\n  font-weight: 500;\n  color: ",";\n"]);return se=function(){return n},n}function ue(){var n=Object(j.a)(["\n  width: 100%;\n"]);return ue=function(){return n},n}var le=function(n){var e=n.isHovered,t=n.name,i=n.date,c=n.position,o=window.innerWidth<=700,a=Object(ce.a)(Object(ce.a)({},c),{},{position:"absolute",width:"100%",zIndex:-100});return Object(r.jsx)($n.a,{animateIn:"flipInX",animateOnce:!0,delay:o?300:500,style:o?{position:"static"}:a,children:Object(r.jsxs)(me,{children:[Object(r.jsx)(de,{isHovered:e,children:e?"Click to Explore":t}),Object(r.jsx)(fe,{isHovered:e}),Object(r.jsx)(je,{isHovered:e,children:e?t:i})]})})},me=u.c.div(ue()),de=u.c.span(se(),(function(n){var e=n.isHovered,t=n.theme;return e?t.color.point:"black"})),je=u.c.span(ae(),(function(n){var e=n.isHovered,t=n.theme;return e?t.color.point:"black"})),fe=u.c.hr(oe(),(function(n){var e=n.isHovered,t=n.theme;return"0.1px solid \n    ".concat(e?t.color.point:"")}),(function(n){return n.theme.size.mobile}));function be(){var n=Object(j.a)(["\n  cursor: pointer;\n  outline: none;\n  transition: 0.2s ease-in;\n  display: block;\n  box-shadow: 0 3px 10px 0 lightgray;\n  width: ",";\n  ",";\n\n  &:hover,\n  &:focus {\n    transition: 0.2s ease-in;\n    transform: scale(1.03);\n    box-shadow: 0 3px 10px 0 gray;\n  }\n\n  @media "," {\n    width: 100%;\n    margin: 0 0 2rem 0;\n  }\n"]);return be=function(){return n},n}function he(){var n=Object(j.a)(["\n  width: 100%;\n\n  @media "," {\n    margin: 0;\n  }\n"]);return he=function(){return n},n}var pe=function(n){var e=n.src,t=n.alt,i=n.width,c=n.extraStyle,o=n.animation,a=n.events,u=n.name,l=a.onMouseOver,m=a.onMouseLeave;return Object(r.jsx)($n.a,{animateIn:o,animateOnce:!0,children:Object(r.jsx)(xe,{width:i,extraStyle:c,children:Object(r.jsx)(s.Link,{to:"/project?name=".concat(u),onFocus:l,onBlur:m,onMouseOver:l,onMouseLeave:m,children:Object(r.jsx)(ge,{src:e,alt:t})})})})},Oe=c.a.memo(pe),ge=u.c.img(he(),(function(n){return n.theme.size.mobile})),xe=u.c.span(be(),(function(n){var e=n.width;return e||"70%"}),(function(n){return n.extraStyle}),(function(n){return n.theme.size.mobile}));function ve(){var n=Object(j.a)(["\n  ",";\n  width: ",";\n  box-shadow: 0 3px 10px 0 lightgray;\n  cursor: pointer;\n  position: absolute;\n  outline: none;\n  transition: 0.2s ease-in;\n\n  &:hover,\n  &:focus {\n    transition: 0.2s ease-in;\n    transform: scale(1.03);\n    box-shadow: 0 3px 10px 0 gray;\n  }\n\n  @media "," {\n    display: none;\n  }\n"]);return ve=function(){return n},n}function we(){var n=Object(j.a)(["\n  width: 100%;\n"]);return we=function(){return n},n}var ye=function(n){var e=n.name,t=n.src,i=n.alt,c=n.position,o=n.width,a=n.animation,u=n.events,l=u.onMouseOver,m=u.onMouseLeave;return Object(r.jsx)($n.a,{animateIn:a,animateOnce:!0,children:Object(r.jsx)(Se,{width:o,position:c,children:Object(r.jsx)(s.Link,{to:"/project?name=".concat(e),onFocus:l,onBlur:m,onMouseOver:l,onMouseLeave:m,children:Object(r.jsx)(ze,{src:t,alt:i})})})})},ke=c.a.memo(ye),ze=u.c.img(we()),Se=u.c.span(ve(),(function(n){return n.position}),(function(n){return n.width||"45%"}),(function(n){return n.theme.size.mobile}));function He(){var n=Object(j.a)(["\n  width: 100%;\n  position: relative;\n  max-height: 700px;\n  margin-bottom: ",";\n\n  @media "," {\n    margin-bottom: 20%;\n  }\n"]);return He=function(){return n},n}var Ie=function(n){var e=n.itemData,t=n.isHovered,i=n.events,c=e.bigImg,o=e.smallImg,a=e.tagStyle,s=e.name,u=e.date,l=e.mainStyle;return Object(r.jsxs)(Me,{bottom:l.bottom,children:[Object(r.jsx)(Oe,{name:s,events:i,animation:c.animation,src:c.src,alt:c.slt,width:c.width,extraStyle:c.extraStyle}),Object(r.jsx)(ke,{name:s,events:i,animation:o.animation,src:o.src,alt:o.alt,width:o.width,position:o.position}),Object(r.jsx)(le,{isHovered:t,name:s,date:u,position:a})]})},Me=u.c.li(He(),(function(n){return n.bottom}),(function(n){return n.theme.size.mobile})),Te=function(n){var e=n.itemData,t=Object(i.useState)(!1),c=Object(m.a)(t,2),o=c[0],a=c[1];return Object(r.jsx)(Ie,{itemData:e,isHovered:o,events:{onMouseOver:function(){return a(!0)},onMouseLeave:function(){return a(!1)}}})},Be=t.p+"static/media/GL_Game.147d9828.png",Ce=t.p+"static/media/GL_Home.1de9153c.png",Fe=t.p+"static/media/GL_Result.033a1c70.png",Le=t.p+"static/media/TTT_Home.e8f27d0b.png",De=t.p+"static/media/TTT_Timeline.77fa6ca5.png",Re=t.p+"static/media/TTT_Info.434572de.png",Ee=t.p+"static/media/TTT_Modal.d71af210.png",_e=t.p+"static/media/DND_Bookmark.c3c672de.png",Ne=t.p+"static/media/DND_Cards.06bc85ee.png",Ae=t.p+"static/media/DND_Filter.fb34badf.png",Je=t.p+"static/media/DND_Map.d4e7a0c3.png",Pe=t.p+"static/media/DND_Modal.3ff0b1d2.png",Ge=t.p+"static/media/DND_Big.15fcdd82.png",Ue=t.p+"static/media/DND_Small.7cf2dc71.png",We=t.p+"static/media/GL_Small.1f11a27c.png",Xe=t.p+"static/media/TTT_Big.24f1a950.png",Ke=t.p+"static/media/TTT_Small.4ec59646.png";function qe(){var n=Object(j.a)(["\n        bottom: -10rem;\n        right: 0;\n      "]);return qe=function(){return n},n}function Ye(){var n=Object(j.a)(["\n        bottom: 4rem;\n        left: 0;\n      "]);return Ye=function(){return n},n}function Qe(){var n=Object(j.a)(["\n        margin-left: 30%;\n      "]);return Qe=function(){return n},n}function Ve(){var n=Object(j.a)(["\n        bottom: -10rem;\n        right: 0;\n      "]);return Ve=function(){return n},n}var Ze=[{id:1,name:"airdnd",detail:"\uc9c1\uc811 \uc8fc\ub3c4\ud558\uc5ec \ud504\ub860\ud2b8\uc640 \ubc31 \uac1c\ubc1c\uc790\ub4e4\uc774 \ud568\uaed8 \uc791\uc5c5\ud55c airbnb \ud074\ub860 \ud504\ub85c\uc81d\ud2b8\uc785\ub2c8\ub2e4.",date:"2020.08.03 - 2020.09.11",member:"Frontend 4\uba85, Backend 4\uba85",techStack:["JavaScript","React","Redux","Redux-Thunk","Styled-Component"],github:"https://github.com/kimfriendship/airdnd-frontend",page:"",images:[{src:Je,alt:"\uc219\uc18c \ub9ac\uc2a4\ud2b8\uc640 \uc9c0\ub3c4 \ud654\uba74"},{src:Ae,alt:"\uc219\uc18c \ud544\ud130 \ud31d\uc5c5 \ud654\uba74"},{src:Ne,alt:"\uc9c0\ub3c4\ub97c \uc5c6\uc564 \uce74\ub4dc\ud615 \uc219\uc18c \ub9ac\uc2a4\ud2b8 \ud654\uba74"},{src:Pe,alt:"\ud544\ud130 \ubaa8\ub2ec\ucc3d \ud654\uba74"},{src:_e,alt:"\uc219\uc18c \ubd81\ub9c8\ud06c \ubaa8\ub2ec \ud654\uba74"}],features:["Redux\ub97c \ud1b5\ud574 \ud544\ud130 \uc870\uac74, \ud398\uc774\uc9c0, \uc9c0\ub3c4 \ubc94\uc704 \ub4f1 \uac80\uc0c9 \ud398\uc774\uc9c0\uc640 \uad00\ub828\ub41c \ubaa8\ub4e0 state \uad00\ub9ac","\uc219\uc18c \ub9ac\uc2a4\ud2b8\uc5d0 \uc788\ub294 \uc219\uc18c\ub4e4\uc744 \uc9c0\ub3c4 \uc0c1\uc5d0 \uac01\uac01\uc758 \uc704\ub3c4 \uacbd\ub3c4\uc5d0 \ub9de\uac8c \uc219\uc18c \uac00\uaca9 \ub9c8\ucee4 \ub80c\ub354","\uc0c8\ub85c\uc6b4 \ubd81\ub9c8\ud06c \ub9ac\uc2a4\ud2b8 \ucd94\uac00 \ubc0f \ubd81\ub9c8\ud06c \uc124\uc815/\ud574\uc81c \uae30\ub2a5 \uad6c\ud604","\uc219\uc18c \uc774\ubbf8\uc9c0\ub97c \ubcf4\uc5ec\uc8fc\ub294 infinity carousel\uc744 \ubc18\uc751\ud615\uc73c\ub85c \uad6c\ud604","\uac80\uc0c9 \uacb0\uacfc\ub97c \ub9ac\uc2a4\ud2b8\ud615/\uce74\ub4dc\ud615\uc73c\ub85c \uc120\ud0dd\uc801\uc73c\ub85c \ubcfc \uc218 \uc788\ub294 \uae30\ub2a5 \uad6c\ud604","\uc219\uc18c \uc720\ud615\uacfc \uc219\uc18c \uac00\uaca9 \ubc94\uc704 \ub4f1\uc758 \uc870\uac74\uc744 \uc124\uc815 \ud560 \uc218 \uc788\ub294 \ud544\ud130 \ud31d\uc5c5 \uad6c\ud604 ","\uac80\uc0c9 \uc870\uac74\uc744 query\ub85c \uad00\ub9ac\ud558\uc5ec refresh \ub418\ub354\ub77c\ub3c4 \uc0c1\ud0dc \uc720\uc9c0","3\uac00\uc9c0 \ubdf0\ud3ec\ud2b8\ub97c \uae30\uc900\uc73c\ub85c \ud55c \ubc18\uc751\ud615 \uad6c\ud604"],carouselSize:{paddingBottom:50},bigImg:{animation:"fadeInLeft",src:Ge,alt:"airdnd \ud504\ub85c\uc81d\ud2b8 \ub9ac\uc2a4\ud2b8\ud615 \uac80\uc0c9 \ud398\uc774\uc9c0 \uc378\ub124\uc77c",width:"80%"},smallImg:{animation:"fadeInRight",src:Ue,alt:"airdnd \ud504\ub85c\uc81d\ud2b8 \uce74\ub4dc\ud615 \uac80\uc0c9 \ud398\uc774\uc9c0 \uc378\ub124\uc77c",width:"30%",position:Object(u.b)(Ve())},tagStyle:{bottom:"-8rem",left:0},mainStyle:{bottom:"30rem"}},{id:2,name:"ghost-leg",detail:"\uce94\ubc84\uc2a4\uc640 \ub9ac\uc561\ud2b8\ub97c \ud65c\uc6a9\ud558\uc5ec \ub9cc\ub4e0 \uc0ac\ub2e4\ub9ac \ud0c0\uae30 \uac8c\uc784\uc785\ub2c8\ub2e4. ",date:"2020.06.20 - 2020.06.29",member:"\uac1c\uc778 \ud504\ub85c\uc81d\ud2b8",techStack:["Canvas","JavaScript","React","Styled-Component"],github:"https://github.com/kimfriendship/ghost-leg",page:"https://kimfriendship.github.io/ghost-leg/",images:[{src:Ce,alt:"\ud50c\ub808\uc774\uc5b4 \uc218 \uc124\uc815 \ud654\uba74"},{src:Be,alt:"\uc0ac\ub2e4\ub9ac \uacbd\ub85c \ud654\uba74"},{src:Fe,alt:"\uac8c\uc784 \uacb0\uacfc \ud654\uba74 "}],features:["\uc6f9 \uc811\uadfc\uc131 \uc9c0\uce68\uc5d0 \ubd80\ud569\ud558\ub3c4\ub85d \ub9c8\ud06c\uc5c5 (ver2.1.0)","\ucd5c\uc801\ud654\ub97c \ud1b5\ud574 \ub9ac\ub80c\ub354\ub9c1 \ucd5c\uc18c\ud654 \ubc0f \uc131\ub2a5 \ud5a5\uc0c1 (ver2.1.0)","PC\uc640 Mobile \ubc84\uc804\uc73c\ub85c \ubc18\uc751\ud615 \uad6c\ud604 (ver2.1.0)","\ud50c\ub808\uc774\uc5b4 \uc218\uc5d0 \ub530\ub978 \ub79c\ub364 \ud504\ub85c\ud544\uacfc \ub79c\ub364 \uc0ac\ub2e4\ub9ac \uc124\uc815","\uc0ac\ub2e4\ub9ac \uac8c\uc784 \ub85c\uc9c1\uc744 \ub9ac\uc561\ud2b8\uc758 \uc0c1\ud0dc \uad00\ub9ac\uc640 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub85c \uad6c\ud604","\uce94\ubc84\uc2a4\ub97c \ud65c\uc6a9\ud558\uc5ec \uc0ac\ub2e4\ub9ac \uacbd\ub85c\ub97c \uadf8\ub9ac\uae30 \uae30\ub2a5 \uad6c\ud604"],carouselSize:{paddingBottom:60},bigImg:{animation:"fadeInRight",src:Be,alt:"ghost-leg \ud504\ub85c\uc81d\ud2b8 \uac8c\uc784 \ud398\uc774\uc9c0 \uc378\ub124\uc77c",extraStyle:Object(u.b)(Qe())},smallImg:{animation:"fadeInLeft",src:We,alt:"ghost-leg \ud504\ub85c\uc81d\ud2b8 \uacb0\uacfc \ud398\uc774\uc9c0 \uc378\ub124\uc77c",position:Object(u.b)(Ye())},tagStyle:{top:"15%",left:0},mainStyle:{bottom:"20rem"}},{id:3,name:"time-to-travel",detail:"\ubc14\ub2d0\ub77c \uc2a4\ud06c\ub9bd\ud2b8\ub85c \uc791\uc131\ud55c \uc5ec\ud589 \uc2a4\ucf00\uc904 \uad00\ub9ac \ud504\ub85c\uc81d\ud2b8\uc785\ub2c8\ub2e4.",date:"2020.04.20 - 2020.04.24",member:"Frontend 3\uba85",techStack:["JSON Server","HTML","CSS","JavaScript"],github:"https://github.com/kimfriendship/time-to-travel",page:"",images:[{src:Le,alt:"\ud648 \ud654\uba74"},{src:Ee,alt:"\uc5ec\ud589 \uc77c\uc815 \ucd94\uac00 \ubaa8\ub2ec\ucc3d"},{src:De,alt:"\uc5ec\ud589 \ud0c0\uc784\ub77c\uc778 \ud654\uba74"},{src:Re,alt:"\uc5ec\ud589 \ud56d\uacf5\uad8c \ubc0f \uc219\uc18c \uc815\ubcf4 \ud654\uba74"}],features:["JSON server\ub97c \uc774\uc6a9\ud558\uc5ec \uc11c\ubc84 \ud1b5\uc2e0","\uc5ec\ud589 \uc2a4\ucf00\uc904 \ud0c0\uc784\ub77c\uc778\uc744 \uad6c\ud604","\uc5ec\ud589\uc9c0 \uc815\ubcf4 \uc81c\uacf5 \ubc0f \uc608\uc57d \uc815\ubcf4\ub97c \uc800\uc7a5\ud560 \uc218 \uc788\ub294 \uae30\ub2a5 \uad6c\ud604","\uc5ec\ud589\uc9c0\ubcc4 \ubaa9\ub85d\uc744 \ub098\uc5f4\ud560 \uc218 \uc788\ub294 \uae30\ub2a5 \uad6c\ud604"],carouselSize:{paddingBottom:60},bigImg:{animation:"fadeInLeft",src:Xe,alt:"time-to-travel \ud504\ub85c\uc81d\ud2b8 \ud648 \ud654\uba74 \uc378\ub124\uc77c"},smallImg:{animation:"fadeInRight",src:Ke,alt:"time-to-travel \ud504\ub85c\uc81d\ud2b8 \ud0c0\uc784\ub77c\uc778 \ud654\uba74 \uc378\ub124",position:Object(u.b)(qe())},tagStyle:{top:"18%",right:0,textAlign:"right"},mainStyle:{bottom:"10rem"}}];function $e(){var n=Object(j.a)(["\n  margin-top: 10rem;\n"]);return $e=function(){return n},n}var nt=function(){return Object(r.jsx)(et,{children:Ze.map((function(n){var e=n.id,t=n.bigImg,i=n.smallImg,c=n.tagStyle,o=n.name,a=n.date,s=n.mainStyle;return Object(r.jsx)(Te,{itemData:{bigImg:t,smallImg:i,tagStyle:c,name:o,date:a,mainStyle:s}},e)}))})},et=u.c.ul($e()),tt=function(){var n=Object(i.useState)(window.innerWidth),e=Object(m.a)(n,2),t=(e[0],e[1]),c=Object(d.debounce)((function(){return t(window.innerWidth)}),200);return window.addEventListener("resize",c),Object(i.useEffect)((function(){return function(){return window.removeEventListener("resize",c)}}),[]),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(nt,{})})},rt=function(){return Object(r.jsxs)(cn,{id:"project",children:[Object(r.jsx)(nn,{children:"PROJECT"}),Object(r.jsx)(tt,{})]})};function it(){var n=Object(j.a)(['\n  line-height: 2.5rem;\n  font-size: 1.6rem;\n  list-style: "-";\n  padding: 0 1rem;\n']);return it=function(){return n},n}function ct(){var n=Object(j.a)(["\n  padding: 0 1rem;\n  margin-top: 2rem;\n"]);return ct=function(){return n},n}function ot(){var n=Object(j.a)(["\n  font-size: 2rem;\n  font-weight: 600;\n  margin-top: 4rem;\n"]);return ot=function(){return n},n}var at=function(n){var e=n.features;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(st,{children:"Features"}),Object(r.jsx)(ut,{children:e.map((function(n,e){return Object(r.jsx)(lt,{children:n},e)}))})]})},st=u.c.h3(ot()),ut=u.c.ul(ct()),lt=u.c.li(it()),mt=t(44),dt=t(46),jt=t(45);function ft(){var n=Object(j.a)(["\n  text-decoration: underline;\n\n  &:hover,\n  &:focus {\n    outline: none;\n    color: ",";\n  }\n"]);return ft=function(){return n},n}function bt(){var n=Object(j.a)(["\n  font-size: 1.6rem;\n  line-height: 2.5rem;\n  margin-top: ",";\n"]);return bt=function(){return n},n}function ht(){var n=Object(j.a)(["\n  & > span,\n  & > a {\n    margin-left: 1rem;\n    line-height: 2.5rem;\n  }\n"]);return ht=function(){return n},n}function pt(){var n=Object(j.a)(["\n  font-size: 1.6rem;\n  margin-top: 2rem;\n"]);return pt=function(){return n},n}var Ot=function(n){var e=n.project,t=e.detail,i=e.date,c=e.member,o=e.github,a=e.page;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(vt,{gap:"3rem",children:t}),Object(r.jsxs)(gt,{children:[Object(r.jsxs)(xt,{children:[Object(r.jsx)(mt.a,{size:"20"}),Object(r.jsx)(vt,{children:i})]}),Object(r.jsxs)(xt,{children:[Object(r.jsx)(jt.a,{size:"20"}),Object(r.jsxs)(vt,{children:[c," \ud504\ub85c\uc81d\ud2b8"]})]}),Object(r.jsxs)(xt,{children:[Object(r.jsx)(wn.a,{size:"20"}),Object(r.jsx)(wt,{href:o,children:"Repository \ubc14\ub85c\uac00\uae30"})]}),Object(r.jsxs)(xt,{children:[Object(r.jsx)(dt.a,{size:"20"}),Object(r.jsx)(wt,{href:a,children:"\ud398\uc774\uc9c0 \ubc14\ub85c\uac00\uae30"})]})]})]})},gt=u.c.ul(pt()),xt=u.c.li(ht()),vt=u.c.span(bt(),(function(n){return n.gap})),wt=u.c.a(ft(),(function(n){return n.theme.color.point})),yt=t(47),kt=(t(68),t(48)),zt=t(49);function St(){var n=Object(j.a)(["\n          left: 0;\n        "]);return St=function(){return n},n}function Ht(){var n=Object(j.a)(["\n          right: 0;\n        "]);return Ht=function(){return n},n}function It(){var n=Object(j.a)(["\n  width: 3.5rem;\n  height: 3.5rem;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n  margin: 0 2rem;\n  box-shadow: 1px 1px 5px 0 gray;\n  transition: 0.2s ease-in;\n  border-radius: 50%;\n  border: none;\n  z-index: 10;\n  cursor: pointer;\n  top: ",";\n  ","\n\n  &:hover,\n  &:focus {\n    outline: none;\n    color: white;\n    background-color: gray;\n    transition: 0.2s ease-in;\n  }\n\n  @media "," {\n    width: 2.5rem;\n    height: 2.5rem;\n    margin: 0 1rem;\n  }\n"]);return It=function(){return n},n}function Mt(){var n=Object(j.a)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]);return Mt=function(){return n},n}function Tt(){var n=Object(j.a)(["\n  width: 100%;\n  height: 0;\n  margin: 0 auto;\n  overflow: hidden;\n  padding-bottom: ",";\n  border-radius: 15px;\n\n  & .carousel .carousel-status {\n    font-size: 1.3rem;\n    top: 0.5rem;\n    right: 0.5rem;\n    padding: 1rem;\n  }\n"]);return Tt=function(){return n},n}var Bt=function(n){var e=n.images,t=n.size;return Object(r.jsx)(Ct,{size:t,children:Object(r.jsx)(yt.Carousel,{infiniteLoop:!0,showArrows:!0,showThumbs:!1,showStatus:!0,showIndicators:!1,dynamicHeight:!1,renderArrowPrev:function(n,e){return e&&Object(r.jsx)(Lt,{top:t.paddingBottom,type:"button",onClick:n,"aria-label":"\uc774\uc804 \uc0ac\uc9c4\uc73c\ub85c \uc774\ub3d9",direction:0,children:Object(r.jsx)(kt.a,{size:"30"})})},renderArrowNext:function(n,e){return e&&Object(r.jsx)(Lt,{top:t.paddingBottom,type:"button",onClick:n,"aria-label":"\ub2e4\uc74c \uc0ac\uc9c4\uc73c\ub85c \uc774\ub3d9",direction:1,children:Object(r.jsx)(zt.a,{size:"30"})})},children:e.map((function(n,e){return Object(r.jsx)(Ft,{src:n.src,alt:n.alt},e)}))})})},Ct=u.c.div(Tt(),(function(n){var e=n.size;return"".concat(e.paddingBottom,"%")})),Ft=u.c.img(Mt()),Lt=u.c.button(It(),(function(n){return 60===n.top?"40%":"45%"}),(function(n){return n.direction?Object(u.b)(Ht()):Object(u.b)(St())}),(function(n){return n.theme.size.mobile}));function Dt(){var n=Object(j.a)(["\n  margin-right: 1rem;\n  height: 2rem;\n"]);return Dt=function(){return n},n}function Rt(){var n=Object(j.a)(["\n  margin-top: 1.5rem;\n  font-size: 1.6rem;\n  display: flex;\n  flex-wrap: wrap;\n"]);return Rt=function(){return n},n}function Et(){var n=Object(j.a)(["\n  font-size: 2rem;\n  font-weight: 600;\n  margin-top: 4rem;\n"]);return Et=function(){return n},n}var _t=function(n){var e=n.techStack;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Nt,{children:"Tech Stack"}),Object(r.jsx)(At,{children:e.map((function(n,t){return Object(r.jsxs)(Jt,{children:[n,t===e.length-1?"":","]},t)}))})]})},Nt=u.c.h3(Et()),At=u.c.ul(Rt()),Jt=u.c.li(Dt());function Pt(){var n=Object(j.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  margin-top: 5rem;\n  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,\n    Helvetica Neue, sans-serif;\n"]);return Pt=function(){return n},n}var Gt=function(n){var e=n.project,t=e.features,i=e.techStack,c=e.images,o=e.carouselSize;return Object(r.jsxs)(Ut,{children:[Object(r.jsx)(Bt,{images:c,size:o}),Object(r.jsx)(Ot,{project:e}),Object(r.jsx)(at,{features:t}),Object(r.jsx)(_t,{techStack:i})]})},Ut=u.c.div(Pt()),Wt=function(){var n=Object(l.l)().search.split("=")[1],e=Ze.filter((function(e){return e.name===n})),t=Object(m.a)(e,1)[0],i=n.split("-").join("  ").toUpperCase();return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(cn,{children:[Object(r.jsx)(nn,{children:i}),Object(r.jsx)(Gt,{project:t})]})})},Xt=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(xn,{}),Object(r.jsx)(te,{}),Object(r.jsx)(rt,{})]})},Kt=function(){return Object(r.jsxs)(l.g,{children:[Object(r.jsx)(l.d,{path:"/",exact:!0,component:Xt}),Object(r.jsx)(l.d,{path:"/project",component:Wt})]})};var qt=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(q,{}),Object(r.jsx)(Kt,{}),Object(r.jsx)(Q,{})]})},Yt=(t(69),{color:{point:"lightseagreen",html:"#E24F27",css:"#1472B6",js:"#EFC332",react:"#44B8D8",redux:"#764ABC",styledComponents:"#DB7091",webpack:"#1A74B9",figma:"#11CF82",git:"#EF5132"},size:{mobile:"screen and (max-width: 700px)"}});a.a.render(Object(r.jsx)(s.BrowserRouter,{children:Object(r.jsx)(u.a,{theme:Yt,children:Object(r.jsx)(qt,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.9e05714b.chunk.js.map