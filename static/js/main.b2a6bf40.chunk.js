(this.webpackJsonpbbs_react=this.webpackJsonpbbs_react||[]).push([[0],{107:function(t,e,a){t.exports=a(232)},232:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(51),c=a.n(o),s=a(17),l=a(21),i=a(27),m=a(28),p=a(32),u=a(31),h=a(12),d=a(33),g=a.n(d),E="https://reduxblog.herokuapp.com/api",b="?key=zxcvasdfqwerzxcvasdfqwer";var f=function(t){Object(p.a)(a,t);var e=Object(u.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchPosts()}},{key:"renderPost",value:function(){return this.props.posts.map((function(t){return r.a.createElement("li",{className:"list-group-item",key:t.id},r.a.createElement(s.b,{to:"posts/".concat(t.id)},r.a.createElement("span",{className:"pull-xs-right"},t.categories),r.a.createElement("strong",null,t.title)))}))}},{key:"render",value:function(){return r.a.createElement("div",{style:{width:"80%",margin:"0 auto"}},r.a.createElement("div",{className:"text-xs-right"},r.a.createElement(s.b,{to:"/posts/new",className:"btn btn-primary"},"Add a Post")),r.a.createElement("h3",null,"Posts"),r.a.createElement("ul",{className:"list-group"},this.renderPost()))}}]),a}(n.PureComponent);var y=Object(h.b)((function(t){return{posts:t.posts.all}}),{fetchPosts:function(){return{type:"FETCH_POSTS",payload:g.a.get("".concat(E,"/posts").concat(b))}}})(f),v=a(29),O=a(234),C=a(233),N=function(t){Object(p.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).onSubmit=function(t){n.props.createPost(t).then((function(){n.props.history.push("/")}))},n.handleChange=function(t){n.setState(Object(v.a)({},t.target.name,t.target.value))},n.renderInputField=function(t){var e=t.input,a=t.type,n=t.label,o=t.placeholder,c=t.tagName,s=t.stateName,l=t.change,i=t.className,m=t.meta,p=m.touched,u=m.error,h=m.invalid;return r.a.createElement("div",{className:"form-group ".concat(p&&h?"has-danger":"")},r.a.createElement("label",null,n),function(t){return"input"===t?r.a.createElement("input",Object.assign({},e,{className:i,type:a,value:s,placeholder:o,onChange:l})):"textarea"===t?r.a.createElement("textarea",Object.assign({},e,{className:i,value:s,onChange:l})):void 0}(c),p&&u&&r.a.createElement("span",null,u))},n.state={title:"",categories:"",content:""},n}return Object(m.a)(a,[{key:"render",value:function(){var t=this.props.handleSubmit;return r.a.createElement("form",{onSubmit:t(this.onSubmit),style:{width:"80%",margin:"0 auto"}},r.a.createElement("h3",null,"Create A New Post"),r.a.createElement(O.a,{name:"title",label:"title",component:this.renderInputField,placeholder:"title",tagName:"input",type:"text",stateName:this.state.title,className:"form-control",change:this.handleChange}),r.a.createElement(O.a,{name:"categories",label:"categories",component:this.renderInputField,placeholder:"categories",tagName:"input",type:"text",stateName:this.state.categories,className:"form-control",change:this.handleChange}),r.a.createElement(O.a,{name:"content",label:"content",component:this.renderInputField,placeholder:"content",tagName:"textarea",type:"text",stateName:this.state.content,className:"form-control",change:this.handleChange}),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"),r.a.createElement(s.b,{to:"/",className:"btn btn-danger",style:{marginLeft:"5px"}},"Cancel"))}}]),a}(n.PureComponent);var x=Object(C.a)({form:"PostsNewForm",validate:function(t){var e={};return t.title||(e.title="Enter a username"),t.categories||(e.categories="Enter categories"),t.content||(e.content="Enter some content"),e}})(Object(l.f)(Object(h.b)(null,{createPost:function(t){return{type:"CREATE_POST",payload:g.a.post("".concat(E,"/posts").concat(b),t)}}})(N))),P=function(t){Object(p.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).onEditClick=function(t){t.preventDefault(),n.props.editPost(n.props.match.params.id,n.state),n.setState({isEdit:!n.state.isEdit})},n.onDeleteClick=function(){n.props.deletePost(n.props.match.params.id).then((function(){n.props.history.push("/")}))},n.handleChange=function(t){n.setState(Object(v.a)({},t.target.name,t.target.value))},n.onToggleChange=function(){n.setState({isEdit:!n.state.isEdit}),!0===n.state.isEdit&&n.setState({title:n.props.post.title,categories:n.props.post.categories,content:n.props.post.content})},n.state={title:"",categories:"",content:"",isEdit:!1},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchPost(this.props.match.params.id)}},{key:"render",value:function(){var t=this.props.post;if(!t)return r.a.createElement("div",null,"Loading...");var e=r.a.createElement("form",{className:"form-group",onSubmit:this.onEditClick},r.a.createElement("div",{style:{marginBottom:"10px"}},r.a.createElement("input",{className:"form-control",name:"title",value:this.state.title,onChange:this.handleChange})),r.a.createElement("div",{style:{marginBottom:"10px"}},r.a.createElement("input",{className:"form-control",style:{marginBottom:"10px"},name:"categories",value:this.state.categories,onChange:this.handleChange})),r.a.createElement("div",{style:{marginBottom:"10px"}},r.a.createElement("textarea",{className:"form-control",style:{marginBottom:"10px"},name:"content",value:this.state.content,onChange:this.handleChange})),r.a.createElement("button",{className:"btn btn-primary"},"Edit Post")),a=r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{style:{marginBottom:"30px"}},t.title),r.a.createElement("h6",{style:{marginBottom:"30px"}},t.categories),r.a.createElement("p",{style:{marginBottom:"30px"}},t.content)),n=this.state.isEdit?e:a;return r.a.createElement("div",{style:{width:"80%",margin:"0 auto"}},r.a.createElement(s.b,{to:"/",className:"btn btn-primary"},"Back to Index"),r.a.createElement("button",{onClick:this.onDeleteClick,className:"btn btn-danger pull-xs-right"},"Delete Post"),r.a.createElement("button",{onClick:this.onToggleChange,className:"btn btn-primary pull-xs-right",style:{marginRight:"5px"}},this.state.isEdit?"Cancel":"Edit Post"),r.a.createElement("div",{style:{marginTop:"50px"}},n))}}]),a}(n.PureComponent);var j=Object(l.f)(Object(h.b)((function(t){return{post:t.posts.post}}),{fetchPost:function(t){return{type:"FETCH_POST",payload:g.a.get("".concat(E,"/posts/").concat(t).concat(b))}},deletePost:function(t){return{type:"DELETE_POST",payload:g.a.delete("".concat(E,"/posts/").concat(t).concat(b))}},editPost:function(t,e){return{type:"EDIT_POST",payload:g.a.patch("".concat(E,"/posts/").concat(t).concat(b),e)}}})(P));var S=function(){return r.a.createElement(s.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",exact:!0,component:y}),r.a.createElement(l.a,{path:"/posts/new",component:x}),r.a.createElement(l.a,{path:"/posts/:id",component:j})),r.a.createElement("p",{style:{color:"red",textAlign:"center",marginTop:"50px"}},"Edit\uc5d0 \uad00\ub828\ub41c \ucf54\ub4dc\ub294 \ub9cc\ub4e4\uc5b4 \ub193\uc558\uc73c\ub098",r.a.createElement("br",null),"\uc0ac\uc6a9\ud55c \uc11c\ubc84\uc5d0\uc11c patch \ub4f1\uc758 \uc218\uc815\uc5d0 \ud544\uc694\ud55c \uc694\uccad\uc774 \uad6c\ud604\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",r.a.createElement("br",null),"\uc0ac\uc6a9 \uc2dc Status Code 404\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."))},k=a(6),T=a(105),w=a.n(T),B=a(40),F={all:[],post:null},_=a(235),D=Object(k.c)({posts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_POSTS":return Object(B.a)(Object(B.a)({},t),{},{all:e.payload.data});case"FETCH_POST":return Object(B.a)(Object(B.a)({},t),{},{post:e.payload.data});default:return t}},form:_.a}),I=Object(k.a)(w.a)(k.d);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h.a,{store:I(D)},r.a.createElement(S,null))),document.getElementById("root"))}},[[107,1,2]]]);
//# sourceMappingURL=main.b2a6bf40.chunk.js.map