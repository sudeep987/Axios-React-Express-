(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t(43)},23:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(14),m=t.n(l),c=t(2),s=t(3),o=t(5),i=t(4),d=t(6),u=(t(23),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(i.a)(a).call(this,e))).onChangeHandler=function(e){t.setState({title:e.target.value})},t.state={title:""},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("header",null,n.a.createElement("div",{className:"logo"}," Logo "),n.a.createElement("input",{type:"text",onChange:this.onChangeHandler}),n.a.createElement("div",null,this.state.title))}}]),a}(n.a.Component)),h=t(15),E=t(16),f=t.n(E),g=function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(o.a)(this,Object(i.a)(a).call(this))).OnchangeHandler=function(a){e.setState(Object(h.a)({},a.target.name,a.target.value))},e.OnSubmitHandler=function(a){var t=e.state;f.a.get("/",t).then(function(e){console.log(e)}).catch(function(e){console.log(e)})},e.state={fname:"",lname:"",email:"",subject:"",message:""},e}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"container-fluid"},n.a.createElement("form",{id:"contact-form",method:"POST",action:"/",onSubmit:this.OnSubmitHandler},n.a.createElement("div",{className:"messages"}),n.a.createElement("div",{className:"controls"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"form_name"},"Firstname *"),n.a.createElement("input",{id:"form_name",type:"text",name:"fname",className:"form-control",placeholder:"Please enter your firstname *",required:"required",onChange:this.OnchangeHandler,"data-error":"Firstname is required."}),n.a.createElement("div",{className:"help-block with-errors"}))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"form_lastname"},"Lastname *"),n.a.createElement("input",{id:"form_lastname",type:"text",name:"lname",className:"form-control",placeholder:"Please enter your lastname *",required:"required",onChange:this.OnchangeHandler,"data-error":"Lastname is required."}),n.a.createElement("div",{className:"help-block with-errors"})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"form_email"},"Email *"),n.a.createElement("input",{id:"form_email",type:"email",name:"email",className:"form-control",placeholder:"Please enter your email *",required:"required",onChange:this.OnchangeHandler,"data-error":"Valid email is required."}),n.a.createElement("div",{className:"help-block with-errors"}))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"form_subject"},"Please specify your subject *"),n.a.createElement("input",{id:"form_subject",type:"text",name:"subject",className:"form-control",placeholder:"Please enter your subject *",required:"required",onChange:this.OnchangeHandler,"data-error":"Valid email is required."}),n.a.createElement("div",{className:"help-block with-errors"})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"form_message"},"Message *"),n.a.createElement("textarea",{id:"form_message",name:"message",className:"form-control",placeholder:"Message for me *",rows:"4",required:"required","data-error":"Please, leave us a message.",onChange:this.OnchangeHandler}),n.a.createElement("div",{className:"help-block with-errors"}))),n.a.createElement("div",{className:"col-md-12"},n.a.createElement("input",{type:"submit",className:"btn btn-success btn-send",value:"Send message"}))))))}}]),a}(n.a.Component);m.a.render(n.a.createElement(function(){return n.a.createElement("div",null,n.a.createElement(u,null),n.a.createElement(g,null))},null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.32b2b9b6.chunk.js.map