(this["webpackJsonppurple4pur-s-blog"]=this["webpackJsonppurple4pur-s-blog"]||[]).push([[0],{152:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(26),c=a(6),l=a(9),s=a(1),i=a(2),u=a(4),p=a(3),d=a(5),h=a(19),m=(a(69),a(70),a(55)),g=a.n(m),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).toggleMenu=function(){""===a.state.navClass?a.setState({navClass:" openMenu"}):a.setState({navClass:""})},a.handleOver1=function(){a.setState({hoverClass1:" hover"})},a.handleOver2=function(){a.setState({hoverClass2:" hover"})},a.handleOver3=function(){a.setState({hoverClass3:" hover"})},a.handleOver4=function(){a.setState({hoverClass4:" hover"})},a.handleOver5=function(){a.setState({hoverClass5:" hover"})},a.handleOver6=function(){a.setState({hoverClass6:" hover"})},a.handleOut=function(){a.setState({hoverClass1:"",hoverClass2:"",hoverClass3:"",hoverClass4:"",hoverClass5:"",hoverClass6:""})},a.state={navClass:"",hoverClass1:"",hoverClass2:"",hoverClass3:"",hoverClass4:"",hoverClass5:"",hoverClass6:""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"header-ui"},r.a.createElement("span",{onClick:this.toggleMenu},r.a.createElement("i",{className:"fas fa-bars"})),r.a.createElement(c.c,{to:"/"},r.a.createElement("img",{src:g.a,alt:"Purple4pur's Blog"}))),r.a.createElement("nav",{className:"header-nav"+this.state.navClass},r.a.createElement("div",{className:"header-nav-bg-touch",onClick:this.toggleMenu}),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.c,{to:"/",className:"header-nav-mobile"},"\u9996\u9875 | HOME"),r.a.createElement(c.c,{to:"/",className:"header-nav-desktop"+this.state.hoverClass1,onMouseOver:this.handleOver1,onMouseOut:this.handleOut},"\u9996\u9875",r.a.createElement("div",null,r.a.createElement("span",null,"HOME")))),r.a.createElement("li",null,r.a.createElement(c.c,{to:"/coding",className:"header-nav-mobile"},"\u4ee3\u7801 | CODING"),r.a.createElement(c.c,{to:"/coding",className:"header-nav-desktop"+this.state.hoverClass2,onMouseOver:this.handleOver2,onMouseOut:this.handleOut},"\u4ee3\u7801",r.a.createElement("div",null,r.a.createElement("span",null,"CODING")))),r.a.createElement("li",null,r.a.createElement(c.c,{to:"/creating",className:"header-nav-mobile"},"\u521b\u4f5c | CREATING"),r.a.createElement(c.c,{to:"/creating",className:"header-nav-desktop"+this.state.hoverClass3,onMouseOver:this.handleOver3,onMouseOut:this.handleOut},"\u521b\u4f5c",r.a.createElement("div",null,r.a.createElement("span",null,"CREATING")))),r.a.createElement("li",null,r.a.createElement(c.c,{to:"/thoughts",className:"header-nav-mobile"},"\u6742\u8c08 | THOUGHTS"),r.a.createElement(c.c,{to:"/thoughts",className:"header-nav-desktop"+this.state.hoverClass4,onMouseOver:this.handleOver4,onMouseOut:this.handleOut},"\u6742\u8c08",r.a.createElement("div",null,r.a.createElement("span",null,"THOUGHTS")))),r.a.createElement("li",null,r.a.createElement(c.c,{to:"/tags",className:"header-nav-mobile"},"\u6807\u7b7e | TAGS"),r.a.createElement(c.c,{to:"/tags",className:"header-nav-desktop"+this.state.hoverClass5,onMouseOver:this.handleOver5,onMouseOut:this.handleOut},"\u6807\u7b7e",r.a.createElement("div",null,r.a.createElement("span",null,"TAGS")))),r.a.createElement("li",null,r.a.createElement(c.c,{to:"/about",className:"header-nav-mobile"},"\u5173\u4e8e | ABOUT"),r.a.createElement(c.c,{to:"/about",className:"header-nav-desktop"+this.state.hoverClass6,onMouseOver:this.handleOver6,onMouseOut:this.handleOut},"\u5173\u4e8e",r.a.createElement("div",null,r.a.createElement("span",null,"ABOUT")))))))}}]),t}(n.PureComponent),E=(a(72),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("span",null,r.a.createElement("i",{className:"far fa-copyright"})," ",r.a.createElement(c.b,{to:"/about"},"Purple4pur")," | 2020 | ",r.a.createElement(c.b,{to:"/admin"},"CMS")),r.a.createElement("span",null,r.a.createElement("a",{href:"http://www.beian.miit.gov.cn/",target:"_blank",rel:"noopener noreferrer"},"\u7ca4ICP\u590719158409\u53f7-1")))}}]),t}(n.PureComponent)),b=a(57),v=a.n(b),O=(a(152),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"markdown-body"},r.a.createElement(v.a,{source:this.props.content}))}}]),t}(n.PureComponent)),j="START_FETCH_LIST",y="FETCH_LIST_SUCCESS",C="FETCH_LIST_FAILED",S="START_FETCH_POST",T="FETCH_POST_SUCCESS",L="FETCH_POST_FAILED",k="START_FETCH_TAGS",I="FETCH_TAGS_SUCCESS",D="FETCH_TAGS_FAILED",M="START_VERIFY_TOKEN",_="VERIFY_TOKEN_SUCCESS",P="VERIFY_TOKEN_FAILED",N="START_VERIFY_LOGIN",F="VERIFY_LOGIN_SUCCESS",w="VERIFY_LOGIN_FAILED",R="START_REMOVE_TOKEN",A="REMOVE_TOKEN_SUCCESS",U="SET_ERROR_MSG",x="RESET_ERROR_MSG",B="START_ADD",G="ADD_POST_SUCCESS",H="ADD_POST_FAILED",V="ADD_DRAFT_SUCCESS",J="ADD_DRAFT_FAILED",W="RESET_ADD_MSG",Y=a(58),K=a.n(Y).a.create({baseURL:"https://purple4pur.com/apis"});K.defaults.headers.post["Content-type"]="application/json; charset=utf-8";var q=function(e,t,a){return K.post("/login.php",{username:e,password:t,decoratedToken:a})},z=function(e,t,a,n,r){return K.post("/update_post.php",{decoratedToken:e,type:t,title:a,content:n,categoryID:r})},Q=function(){return{type:L}},X=function(e){return{type:y,payload:{data:e}}},Z=function(){return{type:C}},$=function(){return{type:D}},ee=function(){return{type:P}},te=function(){return function(e){e({type:M}),localStorage.getItem("purple4pur/blog:JWT")?q(void 0,void 0,localStorage.getItem("purple4pur/blog:JWT")).then((function(t){var a,n;t.data.activeUser?e((a=t.data.activeUser,n=t.data.activeUserID,{type:_,payload:{user:a,id:n}})):(e(ee()),e(ne()))})).catch((function(t){console.log(t),e(ee()),e(re(7))})):e(ee())}},ae=function(){return{type:w}},ne=function(){return function(e){e({type:R}),localStorage.removeItem("purple4pur/blog:JWT"),e({type:A}),e(te())}},re=function(e){return{type:U,payload:{code:e}}},oe=function(){return{type:B}},ce=function(){return{type:H}},le=function(){return{type:W}},se=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("li",null,r.a.createElement("h3",null,r.a.createElement(c.b,{to:"/post/"+this.props.id},this.props.title)))}}]),t}(n.PureComponent),ie=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.categoryID?this.props.fetchList(this.props.categoryID,void 0,void 0,void 0):this.props.tagID?this.props.fetchList(void 0,this.props.tagID,void 0,void 0):this.props.authorID?this.props.fetchList(void 0,void 0,this.props.authorID,void 0):this.props.fetchList(void 0,void 0,void 0,this.props.type)}},{key:"render",value:function(){return this.props.isLoading?r.a.createElement("div",null,"loading..."):this.props.fetchError?null:r.a.createElement("ul",null,this.props.list.map((function(e){return r.a.createElement(se,Object.assign({key:e.id},e))})))}}]),t}(n.PureComponent),ue=Object(l.b)((function(e){return{isLoading:e.postList.isLoading,fetchError:e.postList.fetchError,list:e.postList.list}}),{fetchList:function(e,t,a,n){return function(r){var o,c,l;r({type:j}),e?(l=e,K.get("/categories.php",{params:{categoryID:l}})).then((function(e){e.data.errCode?(console.log(e.data.errMsg),r(Z()),r(re(e.data.errCode))):e.data[0].id?r(X(e.data)):(console.log("Error: "+e.data),r(Z()),r(re(99)))})).catch((function(e){console.log(e),r(Z()),r(re(7))})):t?function(e){return K.get("/tags.php",{params:{tagID:e}})}(t).then((function(e){e.data.errCode?(console.log(e.data.errMsg),r(Z()),r(re(e.data.errCode))):e.data[0].id?r(X(e.data)):(console.log("Error: "+e.data),r(Z()),r(re(99)))})).catch((function(e){console.log(e),r(Z()),r(re(7))})):a?function(e){return K.get("/authors.php",{params:{authorID:e}})}(a).then((function(e){e.data.errCode?(console.log(e.data.errMsg),r(Z()),r(re(e.data.errCode))):e.data[0].id?r(X(e.data)):(console.log("Error: "+e.data),r(Z()),r(re(99)))})).catch((function(e){console.log(e),r(Z()),r(re(7))})):localStorage.getItem("purple4pur/blog:JWT")?(o=localStorage.getItem("purple4pur/blog:JWT"),c=n,K.post("/pvt_dft.php",{decoratedToken:o,type:c})).then((function(e){e.data.errCode?(console.log(e.data.errMsg),r(Z()),r(re(e.data.errCode))):e.data[0].id?r(X(e.data)):(console.log("Error: "+e.data),r(Z()),r(re(99)))})).catch((function(e){console.log(e),r(Z()),r(re(7))})):(r(Z()),r(te()))}}})(ie),pe=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("li",null,r.a.createElement(c.b,{to:"/tags/"+this.props.id},r.a.createElement("span",null,this.props.name)))}}]),t}(n.PureComponent),de=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchTags()}},{key:"render",value:function(){return this.props.isLoading?r.a.createElement("div",null,"loading..."):this.props.fetchError?r.a.createElement("div",null,"\u83b7\u53d6\u6570\u636e\u5931\u8d25"):r.a.createElement("ul",null,this.props.tags.map((function(e){return r.a.createElement(pe,Object.assign({key:e.id},e))})))}}]),t}(n.PureComponent),he=Object(l.b)((function(e){return{isLoading:e.tagList.isLoading,fetchError:e.tagList.fetchError,tags:e.tagList.tags}}),{fetchTags:function(){return function(e){e({type:k}),K.get("/tags.php").then((function(t){var a;t.data[0].id?e((a=t.data,{type:I,payload:{data:a}})):(console.log("Error: "+t.data),e($()),e(re(99)))})).catch((function(t){console.log(t),e($()),e(re(7))}))}}})(de),me=(a(169),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){a.props.resetErrorMsg()},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"error-msgbox"},r.a.createElement("h3",{className:"error-title"},r.a.createElement("span",null,"\u53d1\u751f\u9519\u8bef"),r.a.createElement("button",{onClick:this.handleClick},r.a.createElement("i",{className:"fas fa-times"}))),r.a.createElement("p",null,this.props.errMsg),r.a.createElement("p",null,"Error ",this.props.errCode," ",r.a.createElement("a",{href:"https://github.com/purple4pur/blog-with-cms/blob/master/error-code-table.md",target:"_blank",rel:"noopener noreferrer"},"\u4e86\u89e3\u66f4\u591a")))}}]),t}(n.PureComponent)),ge=Object(l.b)((function(e){return{errMsg:e.errorMsg.errMsg,errCode:e.errorMsg.errCode}}),{resetErrorMsg:function(){return{type:x}}})(me),fe=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"\u9996\u9875"))}}]),t}(n.PureComponent),Ee=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.title="\u4ee3\u7801 | Purple4pur's Blog"}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,{categoryID:1}))}}]),t}(n.PureComponent),be=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.title="\u521b\u4f5c | Purple4pur's Blog"}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,{categoryID:2}))}}]),t}(n.PureComponent),ve=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.title="\u6742\u8c08 | Purple4pur's Blog"}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,{categoryID:3}))}}]),t}(n.PureComponent),Oe=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.title="\u5173\u4e8e | Purple4pur's Blog"}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"\u5173\u4e8e"))}}]),t}(n.PureComponent),je=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.title="\u6807\u7b7e | Purple4pur's Blog"}},{key:"render",value:function(){return this.props.match.params.tagID?r.a.createElement(ue,{tagID:this.props.match.params.tagID}):r.a.createElement(he,null)}}]),t}(n.PureComponent),ye=(a(170),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.title="404 | Purple4pur's Blog"}},{key:"render",value:function(){return r.a.createElement("div",{className:"notfound-box"},r.a.createElement("div",{className:"notfound-txt"},r.a.createElement("h1",null,"404"),r.a.createElement("p",null,"\u83ab\u6b3a\u6211\u6ca1\u6709\u5199\u8fd9\u4e00\u9875"),r.a.createElement("p",null,"\u8fd8\u4e0d\u901f\u901f",r.a.createElement(c.b,{to:"/"},"\u8fd4\u56de\u9996\u9875"))))}}]),t}(n.PureComponent)),Ce=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",null,r.a.createElement("li",null,"manage"===this.props.view?"*":"",r.a.createElement(c.b,{to:"/admin/manage"},"\u6587\u7ae0\u7ba1\u7406")),r.a.createElement("li",null,"newpost"===this.props.view?"*":"",r.a.createElement(c.b,{to:"/admin/newpost"},"\u6587\u7ae0\u53d1\u5e03")),r.a.createElement("li",null,"draft"===this.props.view?"*":"",r.a.createElement(c.b,{to:"/admin/draft"},"\u8349\u7a3f\u7bb1")),r.a.createElement("li",null,"stats"===this.props.view?"*":"",r.a.createElement(c.b,{to:"/admin/stats"},"\u6280\u672f\u7edf\u8ba1")))}}]),t}(n.PureComponent),Se=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,{authorID:this.props.activeUserID}))}}]),t}(n.PureComponent),Te=Object(l.b)((function(e){return{activeUserID:e.adminStatus.activeUserID}}))(Se),Le=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).updateTitle=function(e){a.setState({title:e.target.value})},a.updateCategory=function(e){a.setState({category:parseInt(e.target.value,10)})},a.updateContent=function(e){a.setState({content:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.addPost(a.state.title,a.state.content,a.state.category)},a.state={title:"",content:"",category:1,tags:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",null,r.a.createElement("div",null,r.a.createElement("span",null,"\u6807\u9898\uff1a"),r.a.createElement("input",{type:"text",name:"title",value:this.state.title,onChange:this.updateTitle})),r.a.createElement("div",null,r.a.createElement("span",null,"\u680f\u76ee\uff1a"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("input",{type:"radio",name:"category",id:"coding",value:"1",defaultChecked:!0,onChange:this.updateCategory}),r.a.createElement("label",{htmlFor:"coding"},"\u4ee3\u7801")),r.a.createElement("li",null,r.a.createElement("input",{type:"radio",name:"category",id:"creating",value:"2",onChange:this.updateCategory}),r.a.createElement("label",{htmlFor:"creating"},"\u521b\u4f5c")),r.a.createElement("li",null,r.a.createElement("input",{type:"radio",name:"category",id:"thoughts",value:"3",onChange:this.updateCategory}),r.a.createElement("label",{htmlFor:"thoughts"},"\u6742\u8c08")))),r.a.createElement("div",null,r.a.createElement("span",null,"\u6b63\u6587\uff1a"),r.a.createElement("textarea",{name:"content",cols:"50",rows:"10",value:this.state.content,onChange:this.updateContent})),r.a.createElement("div",null,r.a.createElement("span",null,"\u6b63\u6587\u9884\u89c8\uff1a"),r.a.createElement(O,{content:this.state.content})),r.a.createElement("div",null,r.a.createElement("span",null,this.props.msg),r.a.createElement("input",{type:"submit",value:"\u53d1\u5e03",onClick:this.handleSubmit}))),this.props.isLoading?r.a.createElement("div",null,"\u53d1\u5e03\u4e2d..."):null)}}]),t}(n.PureComponent),ke=Object(l.b)((function(e){return{isLoading:e.addPost.isLoading,msg:e.addPost.msg}}),{addPost:function(e,t,a){return function(n){n(oe()),z(localStorage.getItem("purple4pur/blog:JWT"),"post",e,t,a).then((function(e){e.data.status?n({type:G}):e.data.errCode?(console.log(e.data.errMsg),n(ce()),n(re(e.data.errCode))):(console.log("Error: "+e.data),n(ce()),n(re(99)))})).catch((function(e){console.log(e),n(ce()),n(re(7))})).finally((function(){setTimeout((function(){n(le())}),5e3)}))}}})(Le),Ie=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,{type:"draft"}))}}]),t}(n.PureComponent),De=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Stats")}}]),t}(n.PureComponent),Me={login:"\u767b\u9646",manage:"\u6587\u7ae0\u7ba1\u7406",newpost:"\u6587\u7ae0\u53d1\u5e03",draft:"\u8349\u7a3f\u7bb1",stats:"\u6280\u672f\u7edf\u8ba1"},_e=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleRmToken=function(){a.props.removeToken()},a.state={activeView:a.props.match.params.viewSelector,isReadyToRedirect:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.title=Me[this.state.activeView]+" - CMS | Purple4pur's Blog",this.props.verifyToken(),this.setState({isReadyToRedirect:!0})}},{key:"render",value:function(){return"login"===this.state.activeView?r.a.createElement(h.b,{component:Fe,path:"/admin/login"}):this.props.isLoading||!this.state.isReadyToRedirect?r.a.createElement("div",null,"loading..."):this.props.isLoggedIn?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"\u5df2\u7ecf\u767b\u9646\u4e3a\uff1a",this.props.activeUser),r.a.createElement("input",{type:"button",value:"\u9000\u51fa",onClick:this.handleRmToken}),r.a.createElement(Ce,{view:this.state.activeView}),r.a.createElement(h.d,null,r.a.createElement(h.a,{from:"/admin",to:"/admin/manage",exact:!0}),r.a.createElement(h.b,{component:Te,path:"/admin/manage",exact:!0}),r.a.createElement(h.b,{component:ke,path:"/admin/newpost",exact:!0}),r.a.createElement(h.b,{component:Ie,path:"/admin/draft",exact:!0}),r.a.createElement(h.b,{component:De,path:"/admin/stats",exact:!0}),r.a.createElement(h.a,{to:"/404"}))):r.a.createElement(h.a,{to:"/admin/login"})}}]),t}(n.PureComponent),Pe=Object(l.b)((function(e){return{isLoading:e.adminStatus.isLoading,isLoggedIn:e.adminStatus.isLoggedIn,activeUser:e.adminStatus.activeUser,activeUserID:e.adminStatus.activeUserID}}),{verifyToken:te,removeToken:ne})(_e),Ne=(a(171),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleFocus1=function(){a.setState({focus1:!0})},a.handleBlur1=function(){""===a.state.user&&a.setState({focus1:!1})},a.handleFocus2=function(){a.setState({focus2:!0})},a.handleBlur2=function(){""===a.state.pwd&&a.setState({focus2:!1})},a.handleChgUser=function(e){a.setState({user:e.target.value})},a.handleChgPwd=function(e){a.setState({pwd:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.verifyLogin(a.state.user,a.state.pwd)},a.handleReset=function(e){e.preventDefault(),a.setState({user:"",pwd:"",focus1:!1,focus2:!1})},a.state={user:"",pwd:"",focus1:!1,focus2:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.isLoading?r.a.createElement("div",null,"loading..."):this.props.isLoggedIn?r.a.createElement(h.a,{to:"/admin"}):r.a.createElement("div",{className:"login-box"},r.a.createElement("form",{className:"login-form"},r.a.createElement("div",{className:"login-txtb"},r.a.createElement("input",{type:"text",name:"username",placeholder:"USERNAME",value:this.state.user,autoComplete:"off",onChange:this.handleChgUser,onFocus:this.handleFocus1,onBlur:this.handleBlur1}),r.a.createElement("div",{className:"login-txtb-not-focus"+(this.state.focus1?" login-txtb-focus":"")})),r.a.createElement("div",{className:"login-txtb"},r.a.createElement("input",{type:"password",name:"password",placeholder:"********",value:this.state.pwd,autoComplete:"off",onChange:this.handleChgPwd,onFocus:this.handleFocus2,onBlur:this.handleBlur2}),r.a.createElement("div",{className:"login-txtb-not-focus"+(this.state.focus2?" login-txtb-focus":"")})),r.a.createElement("div",{className:"login-btns"},r.a.createElement("input",{type:"submit",value:"\u767b\u9646",onClick:this.handleSubmit}),r.a.createElement("input",{type:"reset",value:"\u91cd\u7f6e",onClick:this.handleReset}))))}}]),t}(n.PureComponent)),Fe=Object(l.b)((function(e){return{isLoading:e.adminStatus.isLoading,isLoggedIn:e.adminStatus.isLoggedIn}}),{verifyLogin:function(e,t){return function(a){a({type:N}),q(e,t,void 0).then((function(e){""===e.data?(localStorage.setItem("purple4pur/blog:JWT",e.headers.authorization),a({type:F}),a(te())):e.data.errCode?(console.log(e.data.errMsg),a(ae()),a(re(e.data.errCode))):(console.log("Error: "+e.data),a(ae()),a(re(99)))})).catch((function(e){console.log(e),a(ae()),a(re(7))}))}},verifyToken:te})(Ne),we=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchPost(this.props.match.params.id)}},{key:"render",value:function(){return document.title=(this.props.data.title?this.props.data.title+" - ":"")+"Purple4pur's Blog",this.props.isLoading?r.a.createElement("div",null,"loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,this.props.data.title),r.a.createElement(O,{content:this.props.data.content}))}}]),t}(n.PureComponent),Re=Object(l.b)((function(e){return{isLoading:e.post.isLoading,data:e.post.data}}),{fetchPost:function(e){return function(t){var a;t({type:S}),(a=e,K.get("/post.php",{params:{postID:a}})).then((function(e){var a;e.data.errCode?(console.log(e.data.errMsg),t(Q()),t(re(e.data.errCode))):e.data.id?t((a=e.data,{type:T,payload:{data:a}})):(console.log("Error: "+e.data),t(Q()),t(re(99)))})).catch((function(e){console.log(e),t(Z()),t(re(7))}))}}})(we),Ae=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement("main",{className:"main"},r.a.createElement(h.d,null,r.a.createElement(h.b,{component:fe,path:"/",exact:!0}),r.a.createElement(h.b,{component:Ee,path:"/coding",exact:!0}),r.a.createElement(h.b,{component:be,path:"/creating",exact:!0}),r.a.createElement(h.b,{component:ve,path:"/thoughts",exact:!0}),r.a.createElement(h.b,{component:je,path:"/tags/:tagID?",exact:!0}),r.a.createElement(h.b,{component:Re,path:"/post/:id",exact:!0}),r.a.createElement(h.b,{component:Oe,path:"/about",exact:!0}),r.a.createElement(h.b,{component:Pe,path:"/admin/:viewSelector?",exact:!0}),r.a.createElement(h.b,{component:ye,path:"/404",exact:!0}),r.a.createElement(h.a,{to:"/404"}))),r.a.createElement(E,null),this.props.isError?r.a.createElement(ge,null):null)}}]),t}(n.PureComponent),Ue=Object(l.b)((function(e){return{isError:e.errorMsg.isError}}))(Ae),xe=a(20),Be=a(59),Ge=a(8),He={isLoading:!1,data:{}},Ve={isLoading:!1,fetchError:!1,list:[]},Je={isLoading:!1,fetchError:!1,tags:[]},We={isLoading:!1,isLoggedIn:!1,activeUser:"",activeUserID:void 0},Ye={isError:!1,errCode:0,errMsg:""},Ke={0:"",1:"\u6570\u636e\u5e93\u8fde\u63a5\u5931\u8d25",2:"\u7528\u6237\u540d\u4e3a\u7a7a",3:"\u5bc6\u7801\u4e3a\u7a7a",4:"\u7528\u6237\u540d\u4e0d\u5b58\u5728",5:"\u5bc6\u7801\u9519\u8bef",6:"\u65e0\u6548 JWT",7:"\u7f51\u7edc\u9519\u8bef",8:"\u67e5\u8be2\u7ed3\u679c\u4e3a\u7a7a",9:"\u6807\u9898\u4e3a\u7a7a",10:"\u6b63\u6587\u4e3a\u7a7a",11:"\u53c2\u6570\u9519\u8bef",12:"\u65e0\u6548\u680f\u76ee",99:"\u672a\u77e5\u9519\u8bef"},qe={isLoading:!1,msg:""},ze=Object(xe.c)({post:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(Ge.a)({},e,{isLoading:!0});case T:return Object(Ge.a)({},e,{isLoading:!1,data:t.payload.data});case L:return He;default:return e}},postList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(Ge.a)({},e,{isLoading:!0});case y:return Object(Ge.a)({},e,{isLoading:!1,fetchError:!1,list:t.payload.data});case C:return Object(Ge.a)({},e,{isLoading:!1,fetchError:!0});default:return e}},tagList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(Ge.a)({},e,{isLoading:!0});case I:return Object(Ge.a)({},e,{isLoading:!1,fetchError:!1,tags:t.payload.data});case D:return Object(Ge.a)({},e,{isLoading:!1,fetchError:!0});default:return e}},adminStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(Ge.a)({},e,{isLoading:!0});case _:return Object(Ge.a)({},e,{isLoading:!1,isLoggedIn:!0,activeUser:t.payload.user,activeUserID:t.payload.id});case P:return We;case N:return Object(Ge.a)({},e,{isLoading:!0});case F:case w:return Object(Ge.a)({},e,{isLoading:!1});case R:return Object(Ge.a)({},e,{isLoading:!0});case A:return We;default:return e}},errorMsg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return Object(Ge.a)({},e,{isError:!0,errCode:t.payload.code,errMsg:Ke[t.payload.code]});case x:return Ye;default:return e}},addPost:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(Ge.a)({},e,{isLoading:!0});case G:return Object(Ge.a)({},e,{isLoading:!1,msg:"\u53d1\u5e03\u6210\u529f"});case H:return Object(Ge.a)({},e,{isLoading:!1,msg:"\u53d1\u5e03\u5931\u8d25"});case V:return Object(Ge.a)({},e,{isLoading:!1,msg:"\u4fdd\u5b58\u6210\u529f"});case J:return Object(Ge.a)({},e,{isLoading:!1,msg:"\u4fdd\u5b58\u5931\u8d25"});case W:return qe;default:return e}}}),Qe=Object(xe.d)(ze,Object(xe.a)(Be.a));Object(o.render)(r.a.createElement(l.a,{store:Qe},r.a.createElement(c.a,{forceRefresh:!0},r.a.createElement(Ue,null))),document.querySelector("#root"))},55:function(e,t,a){e.exports=a.p+"static/media/logo.df728e58.ico"},60:function(e,t,a){e.exports=a(172)},69:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){}},[[60,1,2]]]);
//# sourceMappingURL=main.d8799d76.chunk.js.map