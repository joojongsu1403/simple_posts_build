(this.webpackJsonpbbs_react=this.webpackJsonpbbs_react||[]).push([[0],{107:function(t,e,a){t.exports=a(232)},232:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(51),s=a.n(r),c=a(17),l=a(21),i=a(27),m=a(28),p=a(32),u=a(31),h=a(12),d=a(33),g=a.n(d),b="https://reduxblog.herokuapp.com/api",E="?key=zxcvasdfqwerzxcvasdfqwer";var f=function(t){Object(p.a)(a,t);var e=Object(u.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchPosts()}},{key:"renderPost",value:function(){return this.props.posts.map((function(t){return o.a.createElement("li",{className:"list-group-item",key:t.id},o.a.createElement(c.b,{to:"posts/".concat(t.id)},o.a.createElement("span",{className:"pull-xs-right"},t.categories),o.a.createElement("strong",null,t.title)))}))}},{key:"render",value:function(){return o.a.createElement("div",{style:{width:"80%",margin:"0 auto"}},o.a.createElement("div",{className:"text-xs-right"},o.a.createElement(c.b,{to:"/posts/new",className:"btn btn-primary"},"Add a Post")),o.a.createElement("h3",null,"Posts"),o.a.createElement("ul",{className:"list-group"},this.renderPost()))}}]),a}(n.PureComponent);var y=Object(h.b)((function(t){return{posts:t.posts.all}}),{fetchPosts:function(){return{type:"FETCH_POSTS",payload:g.a.get("".concat(b,"/posts").concat(E))}}})(f),v=a(29),O=a(234),C=a(233),N=function(t){Object(p.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).onSubmit=function(t){n.props.createPost(t).then((function(){n.props.history.push("/")}))},n.handleChange=function(t){n.setState(Object(v.a)({},t.target.name,t.target.value))},n.renderInputField=function(t){var e=t.input,a=t.type,n=t.label,r=t.placeholder,s=t.tagName,c=t.stateName,l=t.change,i=t.className,m=t.meta,p=m.touched,u=m.error,h=m.invalid;return o.a.createElement("div",{className:"form-group ".concat(p&&h?"has-danger":"")},o.a.createElement("label",null,n),function(t){return"input"===t?o.a.createElement("input",Object.assign({},e,{className:i,type:a,value:c,placeholder:r,onChange:l})):"textarea"===t?o.a.createElement("textarea",Object.assign({},e,{className:i,value:c,onChange:l})):void 0}(s),p&&u&&o.a.createElement("span",null,u))},n.state={title:"",categories:"",content:""},n}return Object(m.a)(a,[{key:"render",value:function(){var t=this.props.handleSubmit;return o.a.createElement("form",{onSubmit:t(this.onSubmit),style:{width:"80%",margin:"0 auto"}},o.a.createElement("h3",null,"Create A New Post"),o.a.createElement(O.a,{name:"title",label:"title",component:this.renderInputField,placeholder:"title",tagName:"input",type:"text",stateName:this.state.title,className:"form-control",change:this.handleChange}),o.a.createElement(O.a,{name:"categories",label:"categories",component:this.renderInputField,placeholder:"categories",tagName:"input",type:"text",stateName:this.state.categories,className:"form-control",change:this.handleChange}),o.a.createElement(O.a,{name:"content",label:"content",component:this.renderInputField,placeholder:"content",tagName:"textarea",type:"text",stateName:this.state.content,className:"form-control",change:this.handleChange}),o.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"),o.a.createElement(c.b,{to:"/",className:"btn btn-danger",style:{marginLeft:"5px"}},"Cancel"))}}]),a}(n.PureComponent);var x=Object(C.a)({form:"PostsNewForm",validate:function(t){var e={};return t.title||(e.title="Enter a username"),t.categories||(e.categories="Enter categories"),t.content||(e.content="Enter some content"),e}})(Object(l.f)(Object(h.b)(null,{createPost:function(t){return{type:"CREATE_POST",payload:g.a.post("".concat(b,"/posts").concat(E),t)}}})(N))),P=function(t){Object(p.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).onEditClick=function(t){t.preventDefault(),n.props.editPost(n.props.match.params.id,n.state),n.setState({isEdit:!n.state.isEdit})},n.onDeleteClick=function(){n.props.deletePost(n.props.match.params.id).then((function(){n.props.history.push("/")}))},n.handleChange=function(t){n.setState(Object(v.a)({},t.target.name,t.target.value))},n.onToggleChange=function(){n.setState({isEdit:!n.state.isEdit})},n.state={title:"",categories:"",content:"",isEdit:!1},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchPost(this.props.match.params.id)}},{key:"componentDidUpdate",value:function(){String(this.props.match.params.id)===String(this.props.post.id)&&this.setState({title:this.props.post.title,categories:this.props.post.categories,content:this.props.post.content})}},{key:"render",value:function(){var t=this.props.post;if(!t)return o.a.createElement("div",null,"Loading...");var e=o.a.createElement("form",{className:"form-group",onSubmit:this.onEditClick},o.a.createElement("div",{style:{marginBottom:"10px"}},o.a.createElement("input",{className:"form-control",name:"title",value:this.state.title,onChange:this.handleChange})),o.a.createElement("div",{style:{marginBottom:"10px"}},o.a.createElement("input",{className:"form-control",style:{marginBottom:"10px"},name:"categories",value:this.state.categories,onChange:this.handleChange})),o.a.createElement("div",{style:{marginBottom:"10px"}},o.a.createElement("textarea",{className:"form-control",style:{marginBottom:"10px"},name:"content",value:this.state.content,onChange:this.handleChange})),o.a.createElement("button",{className:"btn btn-primary"},"Edit Post")),a=o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",{style:{marginBottom:"30px"}},t.title),o.a.createElement("h6",{style:{marginBottom:"30px"}},t.categories),o.a.createElement("p",{style:{marginBottom:"30px"}},t.content)),n=this.state.isEdit?e:a;return o.a.createElement("div",{style:{width:"80%",margin:"0 auto"}},o.a.createElement(c.b,{to:"/",className:"btn btn-primary"},"Back to Index"),o.a.createElement("button",{onClick:this.onDeleteClick,className:"btn btn-danger pull-xs-right"},"Delete Post"),o.a.createElement("button",{onClick:this.onToggleChange,className:"btn btn-primary pull-xs-right",style:{marginRight:"5px"}},this.state.isEdit?"Cancel":"Edit Post"),o.a.createElement("div",{style:{marginTop:"50px"}},n))}}]),a}(n.PureComponent);var j=Object(l.f)(Object(h.b)((function(t){return{post:t.posts.post}}),{fetchPost:function(t){return{type:"FETCH_POST",payload:g.a.get("".concat(b,"/posts/").concat(t).concat(E))}},deletePost:function(t){return{type:"DELETE_POST",payload:g.a.delete("".concat(b,"/posts/").concat(t).concat(E))}},editPost:function(t,e){return{type:"EDIT_POST",payload:g.a.patch("".concat(b,"/posts/").concat(t).concat(E),e)}}})(P));var S=function(){return o.a.createElement(c.a,null,o.a.createElement(l.c,null,o.a.createElement(l.a,{path:"/",exact:!0,component:y}),o.a.createElement(l.a,{path:"/posts/new",component:x}),o.a.createElement(l.a,{path:"/posts/:id",component:j})))},k=a(6),T=a(105),w=a.n(T),B=a(40),F={all:[],post:null},D=a(235),_=Object(k.c)({posts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_POSTS":return Object(B.a)(Object(B.a)({},t),{},{all:e.payload.data});case"FETCH_POST":return Object(B.a)(Object(B.a)({},t),{},{post:e.payload.data});default:return t}},form:D.a}),I=Object(k.a)(w.a)(k.d);s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h.a,{store:I(_)},o.a.createElement(S,null))),document.getElementById("root"))}},[[107,1,2]]]);
//# sourceMappingURL=main.69ef9dc2.chunk.js.map