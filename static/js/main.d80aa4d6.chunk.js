(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[0],{32:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},45:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(34),a=n.n(i),s=(n(41),n(42),n(2));var o=function(){return Object(s.jsx)("div",{})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))},u=n(24),b=n(4),h=n(14),l=n(15),O=n(17),d=n(16),p=function(e){Object(O.a)(n,e);var t=Object(d.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsx)("div",{children:Object(s.jsx)("h1",{children:"About"})})})}}]),n}(c.Component),f=function(e){Object(O.a)(n,e);var t=Object(d.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsx)("div",{children:Object(s.jsx)("h1",{children:"Error"})})})}}]),n}(c.Component),x=n(28),v=n.n(x),m=n(35),y=(n(32),n(53)),g=function(e){Object(O.a)(n,e);var t=Object(d.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsx)(y.a.div,{whileHover:{scale:1.1},children:Object(s.jsx)("a",{href:this.props.url,target:"_blank",rel:"noreferrer",children:Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("img",{src:this.props.src}),Object(s.jsx)("h2",{children:this.props.title})]})})})}}]),n}(c.Component),k=n(54),C=function(e){Object(O.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(h.a)(this,n),(c=t.call(this,e)).state={projects:[]},c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(m.a)(v.a.mark((function e(){var t=this;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/ColeHoffs/repos").then((function(e){return e.json()})).then((function(e){return e.filter((function(e){return"include"===e.description}))})).then((function(e){for(var n=[],c=0,r=0;r<e.length;r++){var i=e[r].name,a="https://raw.githubusercontent.com/ColeHoffs/"+e[r].name+"/main/thumbnail.PNG",o=e[r].html_url;c+=.09,n.push(Object(s.jsx)(k.a,{children:Object(s.jsx)(y.a.div,{initial:{opacity:0},transition:{ease:"easeIn",delay:c},animate:{opacity:1},children:Object(s.jsx)(g,{src:a,title:i,url:o},r)})}))}t.setState({projects:n})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(s.jsx)("div",{className:"container",children:this.state.projects})}}]),n}(c.Component),w=(n(45),function(e){Object(O.a)(n,e);var t=Object(d.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsxs)("nav",{className:"navcontainer",children:[Object(s.jsx)(u.b,{to:"/",children:Object(s.jsxs)("h1",{children:["|\xa0",Object(s.jsx)(y.a.span,{whileHover:{scale:1.1,color:"rgb(128,128,128)"},children:"home"}),"\xa0"]})}),Object(s.jsx)(u.b,{to:"/projects",children:Object(s.jsxs)("h1",{children:["|\xa0",Object(s.jsx)(y.a.span,{whileHover:{scale:1.1,color:"rgb(128,128,128)"},children:"projects"}),"\xa0|"]})}),Object(s.jsx)(u.b,{to:"/about",children:Object(s.jsxs)("h1",{children:["\xa0",Object(s.jsx)(y.a.span,{whileHover:{scale:1.1,color:"rgb(128,128,128)"},children:"about"}),"\xa0|"]})})]})})}}]),n}(c.Component));a.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(u.a,{children:Object(s.jsxs)("div",{children:[Object(s.jsx)(w,{}),Object(s.jsxs)(b.c,{children:[Object(s.jsx)(b.a,{exact:!0,path:"/projects",component:Object(b.f)(C)}),Object(s.jsx)(b.a,{exact:!0,path:"/about",component:Object(b.f)(p)}),Object(s.jsx)(b.a,{exact:!0,path:"/",component:Object(b.f)(o)}),Object(s.jsx)(b.a,{component:f})]})]})})}),document.getElementById("root")),j()}},[[51,1,2]]]);
//# sourceMappingURL=main.d80aa4d6.chunk.js.map