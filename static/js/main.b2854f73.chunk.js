(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(4),r=a.n(s),l=(a(9),a(2)),o=(a(10),a(0));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"#",children:e.about})})]}),Object(o.jsxs)("div",{className:"form-check form-switch mx-4 text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,id:"flexSwitchCheckDefault"}),Object(o.jsxs)("label",{className:"form-check-label ",htmlFor:"flexSwitchCheckDefault",children:["light"===e.mode?"Dark":"Light","  mode"]})]}),Object(o.jsxs)("form",{className:"d-flex",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search",style:{backgroundColor:"light"===e.mode?"white":"#181818"}}),Object(o.jsx)("button",{className:"btn btn-".concat(e.mode),type:"submit",children:e.searchButton})]})]})]})})}function b(e){var t=Object(c.useState)("Enter text here"),a=Object(l.a)(t,2),n=a[0],s=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container mb-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h2",{className:"my3",style:{color:"light"===e.mode?"black":"white"},children:e.heading}),Object(o.jsx)("textarea",{className:"form-control",value:n,onChange:function(e){s(e.target.value)},style:{backgroundColor:"light"===e.mode?"white":"#181818",color:"light"===e.mode?"black":"white"},rows:"8",id:"exampleFormControlTextarea1"}),Object(o.jsxs)("div",{className:"container my-3",style:{color:"light"===e.mode?"black":"white"},children:[Object(o.jsx)("button",{className:"btn btn-primary mx-2 my-1",onClick:function(){var t=n.toUpperCase();s(t),e.showAlert("Upper Case Conversion Done","success")},children:"Convert to UPPERCASE"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2 my-1",onClick:function(){var t=n.toLowerCase();s(t),e.showAlert("Lower Case Conversion Done","success")},children:"Convert to lowercase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2 my-1",onClick:function(){var e=document.getElementById("exampleFormControlTextarea1");e.select(),navigator.clipboard.writeText(e.value)},children:"Copy Text"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2 my-1",onClick:function(){var t=n.split(/[ ]+/);s(t.join(" ")),e.showAlert("Extra spaces in the text are removed","success")},children:"Remove Extra Space"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2 my-1",onClick:function(){s(""),e.showAlert("Text in the textarea is cleared","success")},children:"Clear Text"})]})]}),Object(o.jsxs)("div",{className:"container mb-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h2",{className:" my-3",children:"Text Summary"}),Object(o.jsxs)("p",{children:["Number of words : ",function(e){var t=e.split(" "),a=0;return t.forEach((function(e){e.length>0&&a++})),a}(n),"."]}),Object(o.jsxs)("p",{children:["Number of characters : ",n.length,"."]}),Object(o.jsxs)("p",{children:["Minutes to read : ",0===n.length?0:.008*n.split(" ").length," "]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:0===n.length?"Enter some text above to preview":n})]})]})}function d(e){var t;return e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsxs)("strong",{children:[(t=e.alert.type,t.charAt(0).toUpperCase()+t.slice(1).toLowerCase())," : "]}),e.alert.msg,Object(o.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})}i.defaultProps={title:"Set title here",about:"About",searchButton:"Enter your search keyword"};var m=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(null),r=Object(l.a)(s,2),m=r[0],h=r[1],j=function(e,t){h({msg:e,type:t}),setTimeout((function(){h(null)}),1800)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"TextUtils",mode:a,searchButton:"Find",toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#181818",j("Dark mode has been enabled","primary")):(n("light"),document.body.style.backgroundColor="white",j("Light mode has been enabled","success"))}}),Object(o.jsx)(d,{alert:m}),Object(o.jsx)(b,{heading:"Enter the text below",mode:a,showAlert:j})]})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),h()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.b2854f73.chunk.js.map