(this.webpackJsonpcv=this.webpackJsonpcv||[]).push([[0],{103:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return R}));var n=a(22),r=a(19),o=a(31),c=a(0),i=a.n(c),l=a(12),m=a(202),s=a(203),p=a(205),u=a(75),d=a(76),g=a(196),f=a(197),b=a(17),h=a(206),E=a(108),v=a.n(E),x=a(199),y=a(198),w=a(77),j=a(78),N=a(195),S=a(117),k=a(86),O=a(200),C=a(201),T=a(207),F=a(56),I=a(55),P=a(41);function B(e){var t=e.children,a=Object(N.a)({disableHysteresis:!0,threshold:0});return i.a.cloneElement(t,{elevation:a?4:0})}var M=Object(g.a)((function(e){var t;return{toolbarMargin:Object(o.a)(Object(o.a)({},e.mixins.toolbar),{},(t={marginBottom:"0.5em"},Object(r.a)(t,e.breakpoints.down("md"),{marginBottom:"0.1em"}),Object(r.a)(t,e.breakpoints.down("xs"),{marginBottom:"0.1em"}),t)),tabContainer:{marginLeft:"auto"},tab:Object(o.a)(Object(o.a)({},e.typography.tab),{},{textTransform:"uppercase",minWidth:10,marginLeft:"10px",paddingLeft:"20px",paddingRight:"20px","&:hover":{opacity:.9}}),button:{marginRight:"20px",marginLeft:"50px"},logoContainer:{padding:0,marginLeft:"10px",color:"white",fontFamily:"Roboto",textTransform:"uppercase",fontWeight:"400",letterSpacing:"0.09em",fontSize:"1.2rem",cursor:"pointer","&:hover":{color:"#FFBA60"}},iconButton:{marginLeft:"auto","&:hover":{backgroundColor:"transparent"}},drawer:{backgroundColor:"#1a237e"},drawerItem:Object(o.a)(Object(o.a)({},e.typography.tab),{},{color:"white",marginTop:"10px",opacity:.7}),drawerItemSelected:{opacity:1},drawerButton:{marginTop:"20px",marginLeft:"10px",marginRight:"10px"},appBar:{zIndex:e.zIndex.modal+1}}}));function R(t,a){var r=Object(b.a)(),o=Object(f.a)(r.breakpoints.down("md")),g=e.browser&&/iPad|iPhone|iPod/.test(navigator.userAgent),E=Object(c.useState)(!1),N=Object(n.a)(E,2),R=N[0],L=N[1],A=M(),z=Object(c.useState)(0),H=Object(n.a)(z,2),K=H[0],W=H[1],J=Object(c.useState)(!1),U=Object(n.a)(J,2),V=U[0],_=U[1],G=V?"dark":"light",D=V?F.a[500]:I.a[500],q=V?I.a[500]:F.a[500],$=Object(k.a)({palette:{type:G,primary:{main:D},secondary:{main:q}}});Object(c.useEffect)((function(){"/"===window.location.pathname&&0!==K?W(0):"/resume"===window.location.pathname&&1!==K?W(1):"/projects "===window.location.pathname&&2!==K?W(2):"/contact "===window.location.pathname&&3!==K&&W(3)}),[K]);var Q=i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{className:A.tabContainer,value:K,onChange:function(e,t){W(t)}},i.a.createElement(u.a,{className:A.tab,label:"About",component:l.b,to:"/"}),i.a.createElement(u.a,{className:A.tab,label:"Resume",component:l.b,to:"/resume"}),i.a.createElement(u.a,{className:A.tab,label:"Projects",component:l.b,to:"/projects"}),i.a.createElement(u.a,{className:A.tab,label:"Contact",component:l.b,to:"/contact"})),i.a.createElement(S.a,{title:"Source code of the website"},i.a.createElement(d.a,{variant:"contained",color:"secondary",className:A.button,href:"https://github.com/SergiiKov/cv"},"Sourse"))),Y=i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{disableBackdropTransition:!g,disableDiscovery:g,open:R,onClose:function(){return L(!1)},onOpen:function(){return L(!0)},classes:{paper:A.drawer}},i.a.createElement("div",{className:A.toolbarMargin}),i.a.createElement(y.a,{disablePadding:!0},i.a.createElement(w.a,{divider:!0,button:!0,selected:0===K,onClick:function(){L(!1),W(0)},component:l.b,to:"/"},i.a.createElement(j.a,{className:0===K?[A.drawerItem,A.drawerItemSelected]:A.drawerItem},"About")),i.a.createElement(w.a,{divider:!0,button:!0,selected:1===K,onClick:function(){L(!1),W(1)},component:l.b,to:"/resume"},i.a.createElement(j.a,{className:1===K?[A.drawerItem,A.drawerItemSelected]:A.drawerItem},"Resume")),i.a.createElement(w.a,{divider:!0,button:!0,selected:2===K,onClick:function(){L(!1),W(2)},component:l.b,to:"/projects"},i.a.createElement(j.a,{className:2===K?[A.drawerItem,A.drawerItemSelected]:A.drawerItem},"Projects")),i.a.createElement(w.a,{divider:!0,button:!0,selected:3===K,onClick:function(){L(!1),W(3)},component:l.b,to:"/contact"},i.a.createElement(j.a,{className:3===K?[A.drawerItem,A.drawerItemSelected]:A.drawerItem},"Contact"))),i.a.createElement(d.a,{variant:"contained",color:"secondary",className:A.drawerButton,href:"https://github.com/SergiiKov/cv"},"Sourse")),i.a.createElement(x.a,{onClick:function(){return L(!R)},className:A.iconButton},i.a.createElement(v.a,null)));return i.a.createElement(O.a,{theme:$},i.a.createElement(i.a.Fragment,null,i.a.createElement(C.a,null),i.a.createElement(B,null,i.a.createElement("div",{className:A.root},i.a.createElement(m.a,{position:"fixed",className:A.appBar},i.a.createElement(s.a,null,i.a.createElement(d.a,{disableRipple:!0,className:A.logoContainer,component:l.b,to:"/",onClick:function(){return W(0)}},"KOVTUN SERGII"),o?Y:Q,i.a.createElement(S.a,{title:"Toggle light/dark theme"},i.a.createElement(T.a,{checked:V,onChange:function(){_(!V)}})),i.a.createElement(P.a,null))),i.a.createElement("div",{className:A.toolbarMargin})))))}}).call(this,a(82))},114:function(e,t,a){e.exports=a.p+"static/media/MyPhoto.53ef23b9.jpg"},131:function(e,t,a){e.exports=a(192)},141:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){e.exports=a.p+"static/media/smp.255fdb23.png"},160:function(e,t,a){e.exports=a.p+"static/media/main-page.9fb816e8.png"},161:function(e,t,a){e.exports=a.p+"static/media/vncreate-1.fe72aefe.png"},162:function(e,t,a){e.exports=a.p+"static/media/vncreate-2.75291cfd.png"},163:function(e,t,a){e.exports=a.p+"static/media/robot-friends.435b981f.png"},164:function(e,t,a){e.exports=a.p+"static/media/todolist.9e4be437.png"},165:function(e,t,a){},166:function(e,t,a){var n={"./1.svg":167,"./10.svg":168,"./11.svg":169,"./12.svg":170,"./13.svg":171,"./14.svg":172,"./15.svg":173,"./16.svg":174,"./17.svg":175,"./18.svg":176,"./2.svg":177,"./3.svg":178,"./4.svg":179,"./5.svg":180,"./6.svg":181,"./7.svg":182,"./8.svg":183,"./9.svg":184,"./email.svg":185,"./phone.svg":186};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=166},167:function(e,t,a){e.exports=a.p+"static/media/1.525f317f.svg"},168:function(e,t,a){e.exports=a.p+"static/media/10.1501d041.svg"},169:function(e,t,a){e.exports=a.p+"static/media/11.5159ea36.svg"},170:function(e,t,a){e.exports=a.p+"static/media/12.1acf1264.svg"},171:function(e,t,a){e.exports=a.p+"static/media/13.76d344f0.svg"},172:function(e,t,a){e.exports=a.p+"static/media/14.cdf5b5e1.svg"},173:function(e,t,a){e.exports=a.p+"static/media/15.f80a91ba.svg"},174:function(e,t,a){e.exports=a.p+"static/media/16.1ced4613.svg"},175:function(e,t,a){e.exports=a.p+"static/media/17.f5066db7.svg"},176:function(e,t,a){e.exports=a.p+"static/media/18.8ca8f89d.svg"},177:function(e,t,a){e.exports=a.p+"static/media/2.7415a70a.svg"},178:function(e,t,a){e.exports=a.p+"static/media/3.e0f651ac.svg"},179:function(e,t,a){e.exports=a.p+"static/media/4.dd60b11e.svg"},180:function(e,t,a){e.exports=a.p+"static/media/5.05a3e30f.svg"},181:function(e,t,a){e.exports=a.p+"static/media/6.aa0a3376.svg"},182:function(e,t,a){e.exports=a.p+"static/media/7.3ff965b6.svg"},183:function(e,t,a){e.exports=a.p+"static/media/8.cb2f65a2.svg"},184:function(e,t,a){e.exports=a.p+"static/media/9.6f7aeee8.svg"},185:function(e,t,a){e.exports=a.p+"static/media/email.b90c2773.svg"},186:function(e,t,a){e.exports=a.p+"static/media/phone.171f2b32.svg"},187:function(e,t,a){},188:function(e,t,a){},191:function(e,t,a){},192:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),i=a(12),l=a(15),m=a(103),s=a(47),p=a(48),u=a(51),d=a(50),g=(a(141),r.a.Component,a(19)),f=a(196),b=a(262),h=a(41),E=a(256),v=a(257),x=Object(f.a)((function(e){var t;return{cardMargin:(t={marginTop:"20px",marginLeft:"20px",marginRight:"20px"},Object(g.a)(t,e.breakpoints.down("md"),{marginTop:"20px",marginLeft:"20px"}),Object(g.a)(t,e.breakpoints.down("xs"),{margin:"0px"}),t),tab:{marginTop:"20px"},boxH2:{fontFamily:"Roboto",fontSize:"1.6em",textTransform:"uppercase",fontWeight:"500",marginleft:"20px",paddingTop:"20px",letterSpacing:".25em",lineHeight:"1.65"},boxH3:{fontFamily:"Roboto",fontSize:"1.2em",fontWeight:"400",marginleft:"20px",marginTop:"20px",marginBottom:"10px",letterSpacing:".15em",lineHeight:"1.5"},boxP:{fontFamily:"Roboto",fontSize:"1em",fontWeight:"400",marginleft:"20px",lineHeight:"1.8"}}})),y=function(){var e=x();return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{className:e.cardMargin,square:!0},r.a.createElement(v.a,null,r.a.createElement(h.a,null,"ABOUT ME"),r.a.createElement(b.a,{elevation:0,className:e.boxP},"Hi, I'm Kovtun Sergii a software engineer with over four years IT industry experience, that wants to evolve in the field of web development. I want to try something new and ready to work hard to learn it."),r.a.createElement(b.a,{className:e.boxH3},"Some stats about me"),r.a.createElement(b.a,{className:e.boxP},"Current age: 29"),r.a.createElement(b.a,{className:e.boxP},"Current city: Vinnitsa"),r.a.createElement(b.a,{className:e.boxP},"Marital status: \u043e\u0434\u0438\u043d"))),r.a.createElement(E.a,{className:e.cardMargin,square:!0},r.a.createElement(v.a,null,r.a.createElement(h.a,null,"ABOUT THIS SITE"),r.a.createElement(b.a,{className:e.boxH3},"A beautiful, responsive, React app written with modern JavaScript."),r.a.createElement(b.a,{className:e.boxP},"Welcome to my website. Please feel free to read more ",r.a.createElement(i.b,{color:"primary",to:"/about"},"about me"),", or you can check out ",r.a.createElement(i.b,{to:"/resume"}," my resume"),", ",r.a.createElement(i.b,{to:"/projects"},"my projects"),", or ",r.a.createElement(i.b,{to:"/contact"},"contact me"),"."),r.a.createElement(b.a,{className:e.boxP},"This is react website created to introduce me and my skills in web development (and my skills in english)."))))},w=a(22),j=a(109),N=a.n(j),S=a(17),k=a(63),O=a(258),C=a(76),T=a(261),F=a(259),I=a(264),P=a(112),B=a.n(P),M=a(111),R=a.n(M),L=a(110),A=a.n(L),z=Object(f.a)((function(e){return{contactPage:{marginTop:"20px"},textField:{border:"2px solid ".concat(e.palette.common.blue),marginTop:"2em",borderRadius:5},sendButton:{marginTop:"2em",minWidth:"150px"},widthForm:{width:"240px"}}}));function H(){var e=z(),t=Object(S.a)(),a=Object(n.useState)(""),o=Object(w.a)(a,2),c=o[0],i=o[1],l=Object(n.useState)(""),m=Object(w.a)(l,2),s=m[0],p=m[1],u=Object(n.useState)(""),d=Object(w.a)(u,2),g=d[0],f=d[1],b=Object(n.useState)(""),E=Object(w.a)(b,2),v=E[0],x=E[1],y=Object(n.useState)(""),j=Object(w.a)(y,2),P=j[0],M=j[1],L=Object(n.useState)(""),H=Object(w.a)(L,2),K=H[0],W=H[1],J=r.a.useState(!1),U=Object(w.a)(J,2),V=U[0],_=U[1],G=r.a.useState({message:"",backgroundColor:""}),D=Object(w.a)(G,2),q=D[0],$=D[1],Q=Object(n.useState)(""),Y=Object(w.a)(Q,2),X=Y[0],Z=Y[1],ee=function(e){var t;switch(e.target.id){case"email":p(e.target.value),t=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value),f(t?"":"Invalid email");break;case"phone":x(e.target.value),t=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(e.target.value),M(t?"":"Invalid phone")}},te=r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{fontSize:"small",style:{marginRight:"0.5em"}}),"Send Message");return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{container:!0,direction:"row",className:e.contactPage},r.a.createElement(O.a,{item:!0,container:!0,direction:"column",justify:"center",alignItems:"center",className:e.contactPart},r.a.createElement(O.a,{item:!0},r.a.createElement(O.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(O.a,{item:!0},r.a.createElement(h.a,null,"Send me a message")),r.a.createElement(O.a,{item:!0,container:!0,style:{marginTop:"1em"}},r.a.createElement(O.a,{item:!0},r.a.createElement(R.a,{style:{marginRight:"0.5em"},color:"primary"})),r.a.createElement(O.a,{item:!0},r.a.createElement(k.a,{color:"primary"},r.a.createElement("a",{style:{color:t.palette.common.blue,fontSize:"1rem"},href:"tel:0680030695"},"+380680030695")))),r.a.createElement(O.a,{item:!0,container:!0,style:{marginTop:"0.4em",marginBottom:"1em"}},r.a.createElement(O.a,{item:!0},r.a.createElement(B.a,{style:{marginRight:"0.5em"},color:"primary"})),r.a.createElement(O.a,{item:!0},r.a.createElement(k.a,{variant:"body1"},r.a.createElement("a",{style:{color:t.palette.common.blue,fontSize:"1rem"},href:"mailto:sergiikovtun.vn@gmail.com"},"sergiikovtun.vn@gmail.com")))),r.a.createElement(O.a,{item:!0,container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(O.a,{item:!0},r.a.createElement(T.a,{className:e.widthForm,label:"Name",id:"name",value:c,onChange:function(e){return i(e.target.value)}})),r.a.createElement(O.a,{item:!0},r.a.createElement(T.a,{className:e.widthForm,label:"Email",id:"email",error:0!==g.length,helperText:g,value:s,onChange:ee})),r.a.createElement(O.a,{item:!0},r.a.createElement(T.a,{className:e.widthForm,label:"Phone",id:"phone",error:0!==P.length,helperText:P,value:v,onChange:ee}))),r.a.createElement(O.a,{item:!0},r.a.createElement(T.a,{className:[e.textField,e.widthForm],InputProps:{disableUnderline:!0},multiline:!0,rows:8,id:"message",value:K,onChange:function(e){return W(e.target.value)}}),r.a.createElement(O.a,{item:!0,container:!0},r.a.createElement(C.a,{className:e.sendButton,variant:"contained",color:"secondary",disabled:0===c.length||0===K.length||0!==P.length||0!==g.length,onClick:function(){_(!0),N.a.get("https://us-central1-material-ui-5daa2.cloudfunctions.net/sendMail",{params:{name:c,email:s,phone:v,message:K}}).then((function(e){_(!1),i(""),p(""),x(""),W(""),$({open:!0,color:"#4BB543"}),Z("Message sent successfully!")})).catch((function(e){_(!1),$({message:"sonting wrong",backgroundColor:"#FF3232"}),Z("Something went wrong! Please try again."),console.error(e)}))}},V?r.a.createElement(F.a,{size:30}):te)))))),r.a.createElement(I.a,{open:q.open,ContentProps:{style:{backgroundColor:q.color}},anchorOrigin:{vertical:"top",horizontal:"center"},message:X,autoHideDuration:4e3,onClose:function(){return $(!1)}})))}a(158);var K=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.call(this)}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"projects-page"},r.a.createElement("h2",null,"MY PROJECTS"),r.a.createElement("div",{className:"project"},r.a.createElement("h3",null,"Smp.vin.ua"),r.a.createElement("div",{className:"project-card-container"},r.a.createElement("a",{href:"http://smp.vin.ua/joomla/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:a(159),alt:"smp.vin.ua",className:"img-projects"})),r.a.createElement("div",{className:"projects-text-container"},r.a.createElement("p",null,"\u041e\u0444\u0456\u0446\u0456\u0439\u043d\u0438\u0439 \u0441\u0430\u0439\u0442. \u0421\u043e\u0446\u0456\u0430\u043b\u044c\u043d\u0430 \u0442\u0430 \u043c\u043e\u043b\u043e\u0434\u0456\u0436\u043d\u0430 \u043f\u043e\u043b\u0456\u0442\u0438\u043a\u0430 \u043d\u0430 \u0412\u0456\u043d\u043d\u0438\u0447\u0447\u0438\u043d\u0456")))),r.a.createElement("div",{className:"project"},r.a.createElement("h3",null,"Main-page iac"),r.a.createElement("a",{href:"http://smp.vin.ua/joomla/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"project-card-container"},r.a.createElement("img",{src:a(160),alt:"main-page iac",className:"img-projects"}),r.a.createElement("div",{className:"projects-text-container"},r.a.createElement("p",null,"\u0413\u043e\u043b\u043e\u0432\u043d\u0430 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0430 \u0434\u043b\u044f \u0441\u0443\u043a\u0443\u043f\u043d\u043e\u0441\u0442\u0456 \u0441\u0430\u0439\u0442\u0456\u0432 \u0441\u043e\u0446\u0456\u0430\u043b\u044c\u043d\u043e\u0457 \u043f\u043e\u043b\u0456\u0442\u0438\u043a\u0438 \u0412\u0456\u043d\u043d\u0438\u0447\u0447\u0438\u043d\u0438. \u041e\u041a\u041e \u0406\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u0439\u043d\u043e-\u0430\u043d\u0430\u043b\u0456\u0442\u0438\u0447\u043d\u0438\u0439 \u0446\u0435\u043d\u0442\u0440 \u0437 \u043e\u0431\u0441\u043b\u0443\u0433\u043e\u0432\u0443\u0432\u0430\u043d\u043d\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432 \u0441\u043e\u0446\u0456\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u043d\u0430\u0441\u0435\u043b\u0435\u043d\u043d\u044f"))))),r.a.createElement("div",{className:"project"},r.a.createElement("h3",null,"VN Create"),r.a.createElement("a",{href:"https://github.com/SergiiKov/vncreate",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"project-card-container"},r.a.createElement("img",{src:a(161),alt:"VN Create",className:"img-projects"}),r.a.createElement("img",{src:a(162),alt:"VN Create",className:"img-projects"}),r.a.createElement("div",{className:"projects-text-container"},r.a.createElement("p",null,"\u0421\u0430\u0439\u0442 \u0432\u0456\u0437\u0438\u0442\u043a\u0430. \u0420\u043e\u0437\u0440\u043e\u0431\u043a\u0430 \u0441\u0430\u0439\u0442\u0443 \u0437\u0430 \u0431\u0430\u0436\u0430\u043d\u043d\u044f\u043c \u043a\u043b\u0456\u0454\u043d\u0442\u0430 \u0437 \u0443\u043d\u0456\u043a\u0430\u043b\u044c\u043d\u0438\u043c \u0434\u0438\u0437\u0430\u0439\u043d\u043e\u043c \u0442\u0430 \u043c\u043e\u0436\u043b\u0438\u0432\u043e\u0441\u0442\u044f\u043c\u0438. \u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0441\u0430\u0439\u0442\u0443 \u043d\u0430 CMS WordPress, Joomla. \u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f \u0434\u043e\u043c\u0435\u043d\u0443 \u0442\u0430 \u043f\u0435\u0440\u0435\u043d\u0435\u0441\u0435\u043d\u043d\u044f \u043d\u0430 \u0445\u043e\u0441\u0442\u0438\u043d\u0433. \u0414\u043e\u043e\u043f\u0440\u0430\u0446\u044e\u0432\u0430\u043d\u043d\u044f \u0432\u0436\u0435 \u0456\u0441\u043d\u0443\u044e\u0447\u043e\u0433\u043e \u0441\u0430\u0439\u0442\u0443."))))),r.a.createElement("div",{className:"project"},r.a.createElement("h3",null,"Robot-page"),r.a.createElement("a",{href:"https://github.com/SergiiKov/cards-friends",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"project-card-container"},r.a.createElement("img",{src:a(163),alt:"robot-friends",className:"img-projects"}),r.a.createElement("div",{className:"projects-text-container"},r.a.createElement("p",null,"React app that searches through an API of random robots"))))),r.a.createElement("div",{className:"project"},r.a.createElement("h3",null,"Todo List"),r.a.createElement("a",{href:"https://github.com/SergiiKov/My-ToDo-List",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"project-card-container"},r.a.createElement("img",{src:a(164),alt:"todolist",className:"img-projects"}),r.a.createElement("div",{className:"projects-text-container"},r.a.createElement("p",null,"A simple to-do list application built with React"))))))}}]),n}(r.a.Component),W=a(74),J=(a(165),function(e){var t=e.name,n=e.percent,o=e.id,c=e.href;return r.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{src:a(166)("./".concat(o,".svg")),alt:"skill card",className:"img-skill"}),r.a.createElement("div",{className:"card-text-container"},r.a.createElement("h3",null,t),r.a.createElement("p",null,n))))}),U=(a(187),function(e){var t=e.state,a=t.skills,n=t.displayCategory;return r.a.createElement("div",{className:"skills-list"},a.filter((function(e){var t=e.category;return n===t||"All"===n})).map((function(e){var t=e.category,a=e.name,n=e.href,o=e.id,c=e.percent;return r.a.createElement(J,{href:n,key:a,id:o,category:t,name:a,percent:c})})))}),V=(a(188),[{category:"Front-end",id:1,name:"HTML",percent:"10/10",href:"https://www.w3.org/"},{category:"Front-end",id:2,name:"CSS",percent:"10/10",href:"https://www.w3.org/"},{category:"Front-end",id:3,name:"Sass",percent:"10/10",href:"https://sass-lang.com/"},{category:"Front-end",id:4,name:"JavaScript",percent:"10/10",href:"http://www.ecma-international.org/publications/standards/Ecma-262.htm"},{category:"Front-end",id:5,name:"React",percent:"10/10",href:"https://reactjs.org/"},{category:"Front-end",id:6,name:"Redux",percent:"10/10",href:"https://redux.js.org/"},{category:"Front-end",id:7,name:"Bootstrap",percent:"10/10",href:"https://getbootstrap.com/"},{category:"Front-end",id:8,name:"MATERIAL-UI",percent:"10/10",href:"https://material-ui.com/"},{category:"Tools",id:9,name:"NPM",percent:"10/10",href:"https://www.npmjs.com/"},{category:"Tools",id:10,name:"Webpack",percent:"10/10",href:"https://webpack.js.org/"},{category:"Tools",id:11,name:"Gulp",percent:"10/10",href:"https://gulpjs.com/"},{category:"Tools",id:12,name:"Git",percent:"10/10",href:"https://git-scm.com/"},{category:"Tools",id:13,name:"GitHub",percent:"10/10",href:"https://github.com/"},{category:"Back-end",id:14,name:"PHP",percent:"10/10",href:"https://www.php.net/"},{category:"Back-end",id:15,name:"MySQL",percent:"10/10",href:"https://www.mysql.com/"},{category:"CMS",id:16,name:"WordPress",percent:"10/10",href:"https://uk.wordpress.org/"},{category:"CMS",id:17,name:"Joomla!",percent:"10/10",href:"https://www.joomla.org/"},{category:"Tools",id:18,name:"Adobe Photoshop",percent:"10/10",href:"https://www.adobe.com/ua/products/photoshop.html"}]),_=function(e){var t=e.setCategory,a=e.category;return r.a.createElement("button",{className:"button-filter",onClick:function(){return t(a)}},a)},G=function(e){var t=e.state,a=e.state.productCategories,n=e.setCategory;e.allProducts;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h3",null,"SKILLS"),function(e,t){return e.map((function(e,a){return r.a.createElement(_,{key:e,setCategory:t,category:e})}))}(a,n)),r.a.createElement("div",null,r.a.createElement(U,{state:t})))},D=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={displayCategory:"All",skills:V,productCategories:q},n.setCategory=n.setCategory.bind(Object(W.a)(n)),n}return Object(p.a)(a,[{key:"setCategory",value:function(e){this.setState({displayCategory:e})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"resume-page"},r.a.createElement("h2",null,"My resume"),r.a.createElement("h3",null,"Education"),r.a.createElement("p",null,"  2008-2013. Vinnytsia National Technical University.",r.a.createElement("br",null),"Faculty of Information Technologies and Computer Engineering.",r.a.createElement("br",null),"Specialty - computer systems and networks."),r.a.createElement("h3",null,"   Work Experience"),r.a.createElement("p",null," Mar.2016 - Feb.2020 Regional organization Vinnytsia Information-analytical center as software engineer. Maintenance of  computer systems and networks. Analyzed, and tested applications and system software for user compatibility. Installed, configured, and routinel upgraded software and hardware forend-users. Performed network support tasks for WAN, LAN. Repair and maintenance computer and peripheral equipment."),r.a.createElement("h3",null," Professional Skills "),r.a.createElement("p",null,"Knowledge of: HTML, CSS, JS, ReactJS, Bootstrap, Material-UI Basic Knowledge of: PHP, MySql Understanding: NPM, Webpack, Gulp, Git, GitHub Knowledge of CMS Wordpress, Joomla Knowledge of Adobe Photoshop Knowledge of English on the Pre-Intermediate level (Read/Write)"),r.a.createElement(G,{setCategory:this.setCategory,state:this.state})))}}]),a}(r.a.Component),q=V.map((function(e){return e.category})).filter((function(e,t,a){return a.indexOf(e)===t}));q.push("All"),q.sort();var $=D,Q=a(31),Y=a(62),X=a(49),Z=a(113),ee=(a(191),function(){return r.a.createElement("div",{className:"links-container"},r.a.createElement("div",{className:"icons-container"},r.a.createElement("a",{href:"https://www.linkedin.com/in/sergii-kovtun-1b97881a2/"},r.a.createElement(Y.a,{icon:X.c})),r.a.createElement("a",{href:"https://github.com/SergiiKov"},r.a.createElement(Y.a,{icon:X.b})),r.a.createElement("a",{href:"https://www.facebook.com/profile.php?id=100017264941501"},r.a.createElement(Y.a,{icon:X.a})),r.a.createElement("a",{href:"mailto:sergiikovtun.vn@gmail.com"},r.a.createElement(Y.a,{icon:Z.a}))))}),te=a(260),ae=a(117),ne=a(114),re=a.n(ne),oe=Object(f.a)((function(e){var t,a,n;return{mainBox:(t={backgroundColor:"#e53935",padding:"20px",marginLeft:"20px",marginTop:"20px"},Object(g.a)(t,e.breakpoints.down("md"),{marginLeft:"0px",marginTop:"0px"}),Object(g.a)(t,e.breakpoints.down("xs"),{marginLeft:"0px",marginTop:"0px"}),t),box:{marginTop:"10px"},photoContainer:(a={height:"30vmin",borderRadius:"50%",marginTop:"10px",marginLeft:"20px",marginBottom:"10px",cursor:"pointer"},Object(g.a)(a,e.breakpoints.down("md"),{height:"40vmin"}),Object(g.a)(a,e.breakpoints.down("xs"),{height:"50vmin"}),Object(g.a)(a,"transition","1s ease-in-out"),Object(g.a)(a,"&:hover",{transform:"translate(3em,0)"}),a),buttonLeftArea:{marginLeft:"0px",marginTop:"20px",marginBottom:"20px"},boxBody:Object(Q.a)({},e.typography.body1),boxTitle:Object(Q.a)(Object(Q.a)({},e.typography.boxTitle),{},{paddingTop:"10px"}),boxEmail:(n={marginTop:"10px",paddingTop:"10px",fontFamily:"Roboto",fontWeight:"400",letterSpacing:"0.09em",fontSize:"1rem",cursor:"pointer","&:hover":{color:"#FFBA60",transition:"all 0.2s ease-out"}},Object(g.a)(n,e.breakpoints.down("md"),{fontSize:"0.8rem"}),Object(g.a)(n,e.breakpoints.down("xs"),{fontSize:"0.8rem"}),n)}}));function ce(){var e=oe();return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{className:e.mainBox},r.a.createElement(b.a,null,r.a.createElement("img",{src:re.a,alt:"Sergii Kovtun",className:e.photoContainer})),r.a.createElement(b.a,{className:[e.box,e.boxTitle]},"Kovtun Sergii"),r.a.createElement(b.a,{className:e.boxEmail},"Email: sergiikovtun.vn@gmail.com"),r.a.createElement(b.a,{className:[e.box,e.boxTitle]},"About"),r.a.createElement(b.a,{className:[e.box,e.boxBody]},"Hi, I'm Kovtun Sergii a software engineer with over four years IT industry experience, that wants to evolve in the field of web development. I want to try something new and ready to work hard to learn it."),r.a.createElement(te.a,{variant:"contained",color:"secondary",className:e.buttonLeftArea,"aria-label":"contained secondary button group"},r.a.createElement(ae.a,{title:"Download pdf file of my resume in english"},r.a.createElement(C.a,{href:"https://github.com/SergiiKov/cv/blob/master/public/CV.pdf"},"resume")),r.a.createElement(ae.a,{title:"\u0417\u0430\u0433\u0440\u0443\u0437\u0456\u0442\u044c pdf \u0444\u0430\u0439\u043b \u043c\u043e\u0433\u043e \u0440\u0435\u0437\u044e\u043c\u0435 \u043d\u0430 \u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0456\u0439"},r.a.createElement(C.a,null,"\u0440\u0435\u0437\u044e\u043c\u0435"))),r.a.createElement(b.a,{className:e.box},r.a.createElement(ee,null))))}var ie=a(200),le=a(86),me=Object(le.a)({palette:{common:{blue:"".concat("#3f51b5"),orange:"".concat("#FFBA60"),red:"".concat("#e53935")},primary:{main:"".concat("#3f51b5"),type:"dark"},secondary:{main:"".concat("#FFBA60")}},typography:{tab:{fontFamily:"Raleway",textTransform:"none",fontWeight:"700",fontSize:"1rem"},boxTitle:{fontFamily:"Roboto",textTransform:"none",fontWeight:"500",fontSize:"1.2rem"}},overrides:{MuiInputLabel:{root:{color:"#3f51b5",fontSize:"1rem"}},MuiInput:{underline:{"&:before":{borderBottom:"2px solid ".concat("#3f51b5")},"&:hover:not($disabled):not(focused):not(error):before":{borderBottom:"2px solid ".concat("#3f51b5")}}}}});var se=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(m.a,null),r.a.createElement(ie.a,{theme:me},r.a.createElement(O.a,{container:!0},r.a.createElement(O.a,{item:!0,xs:12,sm:4},r.a.createElement(ce,null)),r.a.createElement(O.a,{item:!0,xs:12,sm:8},r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:y}),r.a.createElement(l.a,{path:"/resume",component:$}),r.a.createElement(l.a,{path:"/projects",component:K}),r.a.createElement(l.a,{path:"/contact",component:H})))))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,null,r.a.createElement(se,null))),document.getElementById("root"))},41:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n),o=a(63);function c(e){return r.a.createElement(o.a,{component:"h2",variant:"h4",color:"primary",gutterBottom:!0},e.children)}}},[[131,1,2]]]);
//# sourceMappingURL=main.61515c2a.chunk.js.map