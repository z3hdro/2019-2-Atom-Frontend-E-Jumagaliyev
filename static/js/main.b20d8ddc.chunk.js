(this["webpackJsonp2019-2-Atom-Frontend-E-Jumagaliyev"]=this["webpackJsonp2019-2-Atom-Frontend-E-Jumagaliyev"]||[]).push([[0],{1:function(e,t,a){e.exports={chat_header:"message_chat_header__3JhTC",backimg:"message_backimg__249i4",header_chat:"message_header_chat__3Lf1E",result:"message_result__13TL8",imgclick:"message_imgclick__1KbNf",chat_box_me:"message_chat_box_me__ho5MR",chat_box_audio:"message_chat_box_audio__1eQ0u",audio_record:"message_audio_record__19-4k",chat_box:"message_chat_box__2Jl0S",msg:"message_msg__3Cr5-",chat_text:"message_chat_text__1tIDy",chat_picture:"message_chat_picture__26vwn",input_container:"message_input_container__1utyU",attachment_block:"message_attachment_block__NQhit",attachment_audio_block:"message_attachment_audio_block__oot55",input_block:"message_input_block__zTPz8",selected_pictures:"message_selected_pictures__WgCFh",message_menu:"message_message_menu__267jT",menulist:"message_menulist__vL0rG",slide:"message_slide__EzBMo",closeMenuBtn:"message_closeMenuBtn__1Biza",option:"message_option__1oUxk",photoAttach:"message_photoAttach__1qzuV",picAttach:"message_picAttach__1kzzp",add_button:"message_add_button__20MOb",audio_button:"message_audio_button__2o7v4"}},11:function(e,t,a){e.exports={loginPageContainer:"loginpage_loginPageContainer__NRabA",container:"loginpage_container__27j3J",Login:"loginpage_Login__DDu57",signUp:"loginpage_signUp__3Ylo2",links:"loginpage_links__2Uth7"}},33:function(e,t,a){e.exports=a(45)},4:function(e,t,a){e.exports={messages:"chatlist_messages__2Mcng",userlist:"chatlist_userlist__1374F",contacts:"chatlist_contacts__4fD6A",create_chat:"chatlist_create_chat__2vzBk",user_box:"chatlist_user_box__2yvil",avatar:"chatlist_avatar__1g421",chatContainer:"chatlist_chatContainer__1yRwz",indicatorCont:"chatlist_indicatorCont__5Zn46",chat_header:"chatlist_chat_header__2N1Hp",msg:"chatlist_msg__3KvwQ",time:"chatlist_time__318Bv",indicator:"chatlist_indicator__Fu8nL",chatlist_header:"chatlist_chatlist_header__zkjvW",menu_btn:"chatlist_menu_btn___6Gkd",menulist:"chatlist_menulist__2asOR",slide:"chatlist_slide__2I5Ra",linksCont:"chatlist_linksCont__1A0wE",links:"chatlist_links__2pHYN",closeMenuBtn:"chatlist_closeMenuBtn__1uy5A",header_messenger:"chatlist_header_messenger__lbEBv",finder_btn:"chatlist_finder_btn__u-p_Y",Login:"chatlist_Login__3edc5",closePic:"chatlist_closePic__B36_v",text_holder:"chatlist_text_holder__1jsJU",btn_chat:"chatlist_btn_chat__3Apkd",pulse:"chatlist_pulse__3ONX5"}},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a(28),s=a(12),l=a(17),i=a(16),u=a(6),m=a(8),p=a(15),h=a(2),f="http://localhost:8000",d=function(e){return{type:"AUTH_SUCCESS",token:e}},g=function(e){return{type:"AUTH_FAIL",error:e}},_=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),{type:"AUTH_LOGOUT"}},b=function(e){return function(t){setTimeout((function(){t(_())}),1e3*e)}},v=a(11),E=a.n(v);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var y=Object(s.b)(null,(function(e){return{onAuth:function(t,a){return e(function(e,t){return function(a){a({type:"AUTH_START"});var n={username:e,password:t};fetch("".concat(f,"/rest-auth/login/"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){if(!e.ok)throw e;return e.json()})).catch((function(e){a(g(e))})).then((function(e){var t=e.key,n=new Date((new Date).getTime()+36e5);localStorage.setItem("token",t),localStorage.setItem("expirationDate",n),a(d(t)),a(b(3600))})).catch((function(e){a(g(e))}))}}(t,a))}}}))((function(e){var t=e.onAuth,a=Object(n.useState)({username:"",password:""}),c=Object(h.a)(a,2),o=c[0],s=c[1];return r.a.createElement("div",{className:E.a.loginPageContainer},r.a.createElement("form",{method:"post"},r.a.createElement("div",{className:E.a.container},r.a.createElement("label",{htmlFor:"uname"},r.a.createElement("b",null,"Username")),r.a.createElement("input",{type:"text",placeholder:"Enter Username",value:o.username,onChange:function(e){return s(j({},o,{username:e.target.value}))},name:"uname",required:!0}),r.a.createElement("label",{htmlFor:"psw"},r.a.createElement("b",null,"Password")),r.a.createElement("input",{type:"password",placeholder:"Enter Password",value:o.password,onChange:function(e){return s(j({},o,{password:e.target.value}))},name:"psw",required:!0}),r.a.createElement("span",{className:E.a.Login,role:"button",onClick:function(e){return function(e){e.preventDefault(),t(o.username,o.password),s({username:"",password:""})}(e)},onKeyPress:function(){},tabIndex:"0"},"Login"),"Or",r.a.createElement("span",{className:E.a.signUp},r.a.createElement(u.b,{className:E.a.links,to:"/signup/"},"SignUp")))))}));function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var S=Object(s.b)(null,(function(e){return{onAuth:function(t,a,n,r){return e(function(e,t,a,n){return function(r){r({type:"AUTH_START"});var c={username:e,email:t,password1:a,password2:n};fetch("".concat(f,"/rest-auth/registration/"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(e){if(!e.ok)throw e;return e.json()})).then((function(e){var t=e.key,a=new Date((new Date).getTime()+36e5);localStorage.setItem("token",t),localStorage.setItem("expirationDate",a),r(d(t)),r(b(3600))})).catch((function(e){r(g(e))}))}}(t,a,n,r))}}}))((function(e){var t=e.onAuth,a=Object(n.useState)({username:"",email:"",password1:"",password2:""}),c=Object(h.a)(a,2),o=c[0],s=c[1];return r.a.createElement("div",{className:E.a.loginPageContainer},r.a.createElement("form",{method:"post"},r.a.createElement("div",{className:E.a.container},r.a.createElement("label",{htmlFor:"uname"},r.a.createElement("b",null,"Username")),r.a.createElement("input",{type:"text",placeholder:"Enter Username",value:o.username,onChange:function(e){return s(w({},o,{username:e.target.value}))},name:"uname",required:!0}),r.a.createElement("label",{htmlFor:"uemail"},r.a.createElement("b",null,"Email")),r.a.createElement("input",{type:"email",placeholder:"Enter email",value:o.email,onChange:function(e){return s(w({},o,{email:e.target.value}))},name:"uemail",required:!0}),r.a.createElement("label",{htmlFor:"psw1"},r.a.createElement("b",null,"Password")),r.a.createElement("input",{type:"password",placeholder:"Enter Password",value:o.password1,onChange:function(e){return s(w({},o,{password1:e.target.value}))},name:"psw1",required:!0}),r.a.createElement("label",{htmlFor:"psw2"},r.a.createElement("b",null,"Re-Password")),r.a.createElement("input",{type:"password",placeholder:"Repeat Password",value:o.password2,onChange:function(e){return s(w({},o,{password2:e.target.value}))},name:"psw2",required:!0}),r.a.createElement("span",{className:E.a.Login,role:"button",onClick:function(e){return function(e){e.preventDefault(),console.log(o),t(o.username,o.email,o.password1,o.password2),s({username:"",email:"",password1:"",password2:""})}(e)},onKeyPress:function(){},tabIndex:"0"},"SignUp"),"Or",r.a.createElement("span",{className:E.a.signUp},r.a.createElement(u.b,{className:E.a.links,to:"/login/"},"Login")))))})),N=a(1),C=a.n(N),P=a(25),x=a.n(P),I=a(31);function T(e){var t=e.id,a=e.chunks,c=e.setChunks,o=Object(n.useState)(null),s=Object(h.a)(o,2),l=s[0],i=s[1],u=Object(n.useState)(null),m=Object(h.a)(u,2),p=m[0],d=m[1];function g(){return(g=Object(I.a)(x.a.mark((function e(){var t,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia({audio:!0});case 3:return t=e.sent,a=new MediaRecorder(t),e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",-1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var _=function(e){var t=[],a=e;a.start(10),console.log("recorder started"),a.ondataavailable=function(e){t.push(e.data)},c(t),d(a),i(!0)},b=function(e){e.preventDefault(),null===l?function(){return g.apply(this,arguments)}().then((function(e){return _(e)})):l?function(){p.stop(),console.log("recorder stopped");var e=new Blob(a,{type:p.mimeType}),n=new FormData;n.append("chat_id",t),n.append("content",""),n.append("attachment_type","audio_message"),n.append("media",e),fetch("".concat(f,"/message/createmessage/"),{method:"POST",headers:{Authorization:"Token ".concat(localStorage.getItem("token"))},body:n}).then((function(e){return console.log(e.status),e.json()})).catch((function(e){console.log(e.message)})),i(!1),c([])}():_(p)};return r.a.createElement("div",null,r.a.createElement("div",{className:C.a.audio_button,role:"button",onClick:function(e){return b(e)},style:l?{backgroundColor:"rgb(250, 12, 60)"}:{backgroundColor:"rgb(228, 228, 228)"},onKeyPress:function(){},tabIndex:"0"},r.a.createElement("img",{src:"http://s1.iconbird.com/ico/2013/3/636/w80h80139396728712.png",alt:"audioRecord"})))}function D(e){var t=e.id,a=Object(n.useState)(""),c=Object(h.a)(a,2),o=c[0],s=c[1],l=Object(n.useRef)(null),i=Object(n.useState)([]),m=Object(h.a)(i,2),p=m[0],d=m[1],g=Object(n.useState)(!1),_=Object(h.a)(g,2),b=_[0],v=_[1],E=Object(n.useState)([]),O=Object(h.a)(E,2),j=O[0],y=O[1],k=Object(n.useState)(""),w=Object(h.a)(k,2),S=w[0],N=w[1],P=Object(n.useState)([]),x=Object(h.a)(P,2),I=x[0],D=x[1],A=Object(n.useState)(!1),U=Object(h.a)(A,2),L=U[0],R=U[1],K=Object(n.useState)([]),B=Object(h.a)(K,2),z=B[0],F=B[1],G=Object(n.useState)(),M=Object(h.a)(G,2),H=M[0],J=M[1],q=Object(n.useState)([]),V=Object(h.a)(q,2),X=V[0],W=V[1],Q=Object(n.useState)(""),Y=Object(h.a)(Q,2),Z=Y[0],$=Y[1],ee=Object(n.useState)({you:[null,null],other:[null,null]}),te=Object(h.a)(ee,2),ae=te[0],ne=te[1],re=function(){fetch("".concat(f,"/message/showmessages/?chat_id=").concat(t),{headers:{"Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(e){console.log(e.result),console.log(typeof e.result),"chat is empty"!==e.result&&(d(e.result),ne({you:e.you,other:e.other}))}))};Object(n.useEffect)((function(){var e=setInterval((function(){return re()}),3e3);return function(){return clearInterval(e)}})),Object(n.useEffect)((function(){fetch("".concat(f,"/chats/showchat/?chat_id=").concat(t),{headers:{"Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(e){s(e.result)}))}));var ce=function(e){if("images"===e.attachment_type){var t=[];return e.attachment_url.map((function(e){return t.push(r.a.createElement("div",{key:e},r.a.createElement("img",{className:C.a.selected_pictures,src:e,alt:"img"})))})),t}return"geolocation"===e.attachment_type?r.a.createElement("a",{href:e.attachment_url[0]}," Click on this message, it is my location "):"audio_message"===e.attachment_type?r.a.createElement("div",{className:C.a.audio_record},r.a.createElement("audio",{controls:!0,src:e.attachment_url[0]})):r.a.createElement("p",{className:C.a.chat_text},e.content)};return Object(n.useEffect)((function(){l.current.scrollIntoView({behavior:"smooth",block:"end"})}),[p]),r.a.createElement("div",null,r.a.createElement("div",{className:C.a.chat_header},r.a.createElement("div",{className:C.a.backimg},r.a.createElement(u.b,{to:"/chatlist/"},r.a.createElement("img",{className:C.a.imgclick,src:"http://s1.iconbird.com/ico/2014/1/598/w128h1281390846445leftround128.png",alt:"back"}))),r.a.createElement("p",{className:C.a.header_chat},o)),r.a.createElement((function(){if(""!==p.toString()){var e=p.map((function(e){return r.a.createElement("div",{className:"audio_message"===e.attachment_type?C.a.chat_box_audio:C.a.chat_box_me,style:e.user_id===ae.you[1]?{backgroundColor:"rgb(173, 216, 230)",alignSelf:"flex-end"}:{backgroundColor:"rgb(200, 200, 200)",alignSelf:"flex-start"},key:e.id},r.a.createElement("span",{className:C.a.msg},new Date(e.added_at).toTimeString().slice(0,5)),ce(e),r.a.createElement("span",{className:C.a.msg},ae.you[1]===e.user_id?ae.you[0]:ae.other[0]))}));return r.a.createElement("div",{className:C.a.result,ref:l},e)}return r.a.createElement("div",{className:C.a.result,ref:l},p)}),{messages:p}),r.a.createElement((function(){var e=r.a.createRef(),a=Object(n.useRef)(null);Object(n.useEffect)((function(){a.current.focus()}),[a]);var c=function(e){if(e.length>10)alert("LIMIT of 10 images");else{R(!0),y("images");var t=[],a=[];J(e);for(var n=0;n<e.length;n+=1){var c=window.URL.createObjectURL(e[n]);a.push(c),t.push(r.a.createElement("div",{key:n},r.a.createElement("img",{className:C.a.selected_pictures,src:c,alt:"img"})))}D(t),F(a)}},o=function(e){if("Enter"===e.key){if(""!==S.trim()||""!==I.toString()){!function(){console.log(H);var e=new FormData;switch(e.append("chat_id",t),e.append("content",S),j){case"images":e.append("attachment_type",j);for(var a=0;a<H.length;a+=1)e.append("media",H[a]);break;case"geolocation":e.append("attachment_type",j),e.append("geolocation_url",Z);break;default:e.append("attachment_type",null)}fetch("".concat(f,"/message/createmessage/"),{method:"POST",headers:{Authorization:"Token ".concat(localStorage.getItem("token"))},body:e}).then((function(e){return console.log(e),e.json()})).then((function(e){console.log(e)})),y(null)}(),N("");for(var a=0;a<z.length;a+=1)window.URL.revokeObjectURL(z[a]);D([])}R(!L),re()}},s=r.a.createElement("div",{className:C.a.attachment_block},I);return r.a.createElement("div",{className:C.a.input_container,onDragEnter:function(e){return e.preventDefault()},onDragOver:function(e){return e.preventDefault()},onDrop:function(e){e.preventDefault(),c(e.dataTransfer.files)}},L?s:null,r.a.createElement("div",{className:C.a.input_block},r.a.createElement("div",{className:C.a.message_menu,role:"button",onClick:function(){return v(!b)},onKeyPress:function(){},tabIndex:"0"},r.a.createElement("img",{src:"http://s1.iconbird.com/ico/0612/GooglePlusInterfaceIcons/w128h1281338911640clip.png",alt:"menu"}),b?r.a.createElement((function(){return r.a.createElement("div",{className:C.a.menulist},r.a.createElement("div",{className:C.a.option,role:"button",onClick:function(e){return function(e){e.preventDefault(),navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){y("geolocation");var t=e.coords.latitude,a=e.coords.longitude;$("https://www.openstreetmap.org/#map=18/".concat(t,"/").concat(a)),N("https://www.openstreetmap.org/#map=18/".concat(t,"/").concat(a))}),(function(){alert("Unable to retrieve your location")})):alert("Geolocation is not supported by your browser")}(e)},onKeyPress:function(){},tabIndex:"0"},r.a.createElement("p",null,"\u041c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435")),r.a.createElement("div",{className:C.a.closeMenuBtn,role:"button",onClick:function(){v(!1)},onKeyPress:function(){},tabIndex:"0"},r.a.createElement("img",{alt:"Close",src:"http://s1.iconbird.com/ico/2013/3/636/w80h80139396727833.png"})))}),null):null),r.a.createElement("input",{type:"text",value:S,onChange:function(e){return N(e.target.value)},onKeyPress:function(e){return o(e)},ref:a}),r.a.createElement("div",{className:C.a.add_button},r.a.createElement("input",{className:C.a.photoAttach,type:"file",multiple:!0,accept:"image/*",onChange:function(e){return c(e.target.files)},ref:e}),r.a.createElement("div",{className:C.a.picAttach,role:"button",onClick:function(){e.current.click()},onKeyPress:function(){},tabIndex:"0"},r.a.createElement("img",{alt:"upload attachmets",src:"http://s1.iconbird.com/ico/0612/GooglePlusInterfaceIcons/w128h1281338911594add.png"}))),r.a.createElement(T,{id:t,chunks:X,setChunks:W})))}),null))}function A(e){var t=e.id,a=Object(n.useState)(""),c=Object(h.a)(a,2),o=c[0],s=c[1],l=Object(n.useRef)(null),i=Object(n.useState)([]),m=Object(h.a)(i,2),p=m[0],d=m[1],g=Object(n.useState)(!1),_=Object(h.a)(g,2),b=_[0],v=_[1],E=Object(n.useState)([]),O=Object(h.a)(E,2),j=O[0],y=O[1],k=Object(n.useState)(""),w=Object(h.a)(k,2),S=w[0],N=w[1],P=Object(n.useState)([]),x=Object(h.a)(P,2),I=x[0],D=x[1],A=Object(n.useState)(!1),U=Object(h.a)(A,2),L=U[0],R=U[1],K=Object(n.useState)([]),B=Object(h.a)(K,2),z=B[0],F=B[1],G=Object(n.useState)(),M=Object(h.a)(G,2),H=M[0],J=M[1],q=Object(n.useState)([]),V=Object(h.a)(q,2),X=V[0],W=V[1],Q=Object(n.useState)(),Y=Object(h.a)(Q,2),Z=Y[0],$=Y[1],ee=Object(n.useState)(""),te=Object(h.a)(ee,2),ae=te[0],ne=te[1],re=function(){fetch("".concat(f,"/message/showgroupmessages/?chat_id=").concat(t),{headers:{"Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(e){console.log(e.result),console.log(typeof e.result),"chat is empty"!==e.result&&d(e.result)}))};Object(n.useEffect)((function(){var e=setInterval((function(){return re()}),3e3);return function(){return clearInterval(e)}})),Object(n.useEffect)((function(){fetch("".concat(f,"/users/findme/"),{headers:{"Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(e){console.log(e.result),$(e.result)})),fetch("".concat(f,"/chats/showchat/?chat_id=").concat(t),{headers:{"Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(e){s(e.result)}))}));var ce=function(e){return"images"===e.attachment_type?e.attachment_url.map((function(e,t){return r.a.createElement("div",{key:e},r.a.createElement("img",{className:C.a.selected_pictures,src:e,alt:"img"}))})):"geolocation"===e.attachment_type?r.a.createElement("a",{href:e.attachment_url[0]}," Click on this message, it is my location "):"audio_message"===e.attachment_type?r.a.createElement("div",{className:C.a.audio_record},r.a.createElement("audio",{controls:!0,src:e.attachment_url[0]})):r.a.createElement("p",{className:C.a.chat_text},e.content)};return Object(n.useEffect)((function(){l.current.scrollIntoView({behavior:"smooth",block:"end"})}),[p]),r.a.createElement("div",null,r.a.createElement("div",{className:C.a.chat_header},r.a.createElement("div",{className:C.a.backimg},r.a.createElement(u.b,{to:"/chatlist/"},r.a.createElement("img",{className:C.a.imgclick,src:"http://s1.iconbird.com/ico/2014/1/598/w128h1281390846445leftround128.png",alt:"back"}))),r.a.createElement("p",{className:C.a.header_chat},o)),r.a.createElement((function(){if(""!==p.toString()){var e=p.map((function(e){return r.a.createElement("div",{className:"audio_message"===e.attachment_type?C.a.chat_box_audio:C.a.chat_box_me,style:e.user_id===Z?{backgroundColor:"rgb(173, 216, 230)",alignSelf:"flex-end"}:{backgroundColor:"rgb(200, 200, 200)",alignSelf:"flex-start"},key:e.id},r.a.createElement("span",{className:C.a.msg},new Date(e.added_at).toTimeString().slice(0,5)),ce(e),r.a.createElement("span",{className:C.a.msg},e.username))}));return r.a.createElement("div",{className:C.a.result,ref:l},e)}return r.a.createElement("div",{className:C.a.result,ref:l},p)}),{messages:p}),r.a.createElement((function(){var e=r.a.createRef(),a=Object(n.useRef)(null);Object(n.useEffect)((function(){a.current.focus()}),[a]);var c=function(e){if(e.length>10)alert("LIMIT of 10 images");else{R(!0),y("images");var t=[],a=[];J(e),e.forEach((function(e){var n=window.URL.createObjectURL(e);a.push(n),t.push(r.a.createElement("div",{key:e},r.a.createElement("img",{className:C.a.selected_pictures,src:n,alt:"img"})))})),D(t),F(a)}},o=function(e){if("Enter"===e.key){if(""!==S.trim()||""!==I.toString()){!function(){console.log(H);var e=new FormData;switch(e.append("chat_id",t),e.append("content",S),j){case"images":e.append("attachment_type",j);for(var a=0;a<H.length;a+=1)e.append("media",H[a]);break;case"geolocation":e.append("attachment_type",j),e.append("geolocation_url",ae);break;default:e.append("attachment_type",null)}fetch("".concat(f,"/message/createmessage/"),{method:"POST",headers:{Authorization:"Token ".concat(localStorage.getItem("token"))},body:e}).then((function(e){return console.log(e),e.json()})).then((function(e){console.log(e)})),y(null)}(),N("");for(var a=0;a<z.length;a+=1)window.URL.revokeObjectURL(z[a]);D([])}R(!L),re()}},s=r.a.createElement("div",{className:C.a.attachment_block},I);return r.a.createElement("div",{className:C.a.input_container,onDragEnter:function(e){return e.preventDefault()},onDragOver:function(e){return e.preventDefault()},onDrop:function(e){e.preventDefault(),c(e.dataTransfer.files)}},L?s:null,r.a.createElement("div",{className:C.a.input_block},r.a.createElement("div",{className:C.a.message_menu,role:"button",onClick:function(){return v(!b)},onKeyPress:function(){},tabIndex:"0"},r.a.createElement("img",{src:"http://s1.iconbird.com/ico/0612/GooglePlusInterfaceIcons/w128h1281338911640clip.png",alt:"menu"}),b?r.a.createElement((function(){return r.a.createElement("div",{className:C.a.menulist},r.a.createElement("div",{className:C.a.option,role:"button",onClick:function(e){return function(e){e.preventDefault(),navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){y("geolocation");var t=e.coords.latitude,a=e.coords.longitude;ne("https://www.openstreetmap.org/#map=18/".concat(t,"/").concat(a)),N("https://www.openstreetmap.org/#map=18/".concat(t,"/").concat(a))}),(function(){alert("Unable to retrieve your location")})):alert("Geolocation is not supported by your browser")}(e)},onKeyPress:function(){},tabIndex:"0"},r.a.createElement("p",null,"\u041c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435")),r.a.createElement("div",{className:C.a.closeMenuBtn,role:"button",onClick:function(){v(!1)},onKeyPress:function(){},tabIndex:"0"},r.a.createElement("img",{alt:"Close",src:"http://s1.iconbird.com/ico/2013/3/636/w80h80139396727833.png"})))}),null):null),r.a.createElement("input",{type:"text",value:S,onChange:function(e){return N(e.target.value)},onKeyPress:function(e){return o(e)},ref:a}),r.a.createElement("div",{className:C.a.add_button},r.a.createElement("input",{className:C.a.photoAttach,type:"file",multiple:!0,accept:"image/*",onChange:function(e){return c(e.target.files)},ref:e}),r.a.createElement("div",{className:C.a.picAttach,role:"button",onClick:function(){e.current.click()},onKeyPress:function(){},tabIndex:"0"},r.a.createElement("img",{alt:"upload attachmets",src:"http://s1.iconbird.com/ico/0612/GooglePlusInterfaceIcons/w128h1281338911594add.png"}))),r.a.createElement(T,{id:t,chunks:X,setChunks:W})))}),null))}var U=a(32),L=a(4),R=a.n(L);var K=Object(s.b)(null,(function(e){return{logout:function(){return e(_())}}}))((function(e){var t=e.logout,a=Object(n.useRef)(null),c=Object(n.useState)([]),o=Object(h.a)(c,2),s=o[0],l=o[1],i=Object(n.useState)(!1),m=Object(h.a)(i,2),p=m[0],d=m[1],g=Object(n.useState)(null),_=Object(h.a)(g,2),b=_[0],v=_[1],E=function(){fetch("".concat(f,"/chats/showchats/"),{headers:{"Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(e){console.log(e.names),"NO CHATS"!==e.names&&l(e)}))};Object(n.useEffect)((function(){var e=setInterval((function(){return E()}),15e3);return function(){return clearInterval(e)}})),Object(n.useEffect)((function(){E(),fetch("".concat(f,"/users/showusers"),{headers:{"Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(e){v(e.result)}))}),[]);var O=function(e){var t=e.visible;return r.a.createElement("div",{className:R.a.menulist},r.a.createElement("div",{className:R.a.closeMenuBtn,role:"button",onClick:function(){t(!1)},onKeyPress:function(){},tabIndex:"0"},r.a.createElement("img",{alt:"Close",src:"http://s1.iconbird.com/ico/2013/3/636/w80h80139396727833.png"})),r.a.createElement("div",{className:R.a.linksCont},r.a.createElement(u.b,{className:R.a.links,to:"/profile/"},"Profile")),r.a.createElement("div",{className:R.a.linksCont},r.a.createElement(u.b,{className:R.a.links,to:"/support/"},"Support")))},j=function(e,t,a,n,r,c){"Enter"===e.key&&""!==t&&(!function(e,t,a,n){var r=new Set(a),c=new FormData;if(c.append("is_group_chat",n),c.append("topic",e),!1===n&&c.append("username",t),!0===n){var o=!0,s=!1,l=void 0;try{for(var i,u=r[Symbol.iterator]();!(o=(i=u.next()).done);o=!0){var m=i.value;c.append("username",m)}}catch(p){s=!0,l=p}finally{try{o||null==u.return||u.return()}finally{if(s)throw l}}}fetch("".concat(f,"/chats/createchat/"),{method:"POST",headers:{Authorization:"Token ".concat(localStorage.getItem("token"))},body:c}).then((function(e){return e.json()})).then((function(e){console.log(e)}))}(t,n,r,c),a(""))},y=function(e){var t=e.groupChatUsers,a=e.setGroupChatUsers,n=e.person,c=e.setPerson,o=e.isGroupChat,s=e.setIsGroupChat,l=b.map((function(e){return r.a.createElement("div",{className:R.a.contacts,style:e.username===n?{backgroundColor:"rgb(255, 102, 102)"}:null,key:e.id,role:"button",onClick:function(){c(e.username),a([].concat(Object(U.a)(t),[e.username]))},onKeyPress:function(){},tabIndex:"0"},e.username)}));return r.a.createElement("div",null,r.a.createElement("div",{className:R.a.contacts,style:o?{backgroundColor:"rgb(190, 190, 190)"}:{backgroundColor:"rgb(214, 214, 214)"},role:"button",onClick:function(){s(!o)},onKeyPress:function(){},tabIndex:"0"},"Create A Group Chat"),l)},k=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(),s=Object(h.a)(o,2),l=s[0],i=s[1],u=Object(n.useState)([]),m=Object(h.a)(u,2),p=m[0],f=m[1],d=Object(n.useState)(!1),g=Object(h.a)(d,2),_=g[0],v=g[1];return r.a.createElement("div",{className:R.a.userlist},null===b?null:r.a.createElement(y,{groupChatUsers:p,setGroupChatUsers:f,person:l,setPerson:i,isGroupChat:_,setIsGroupChat:v}),r.a.createElement("input",{className:R.a.create_chat,type:"text",value:a,onChange:function(e){return c(e.target.value)},onKeyPress:function(e){j(e,a.trim(),c,l,p,_)}}))};return Object(n.useEffect)((function(){a.current.scrollIntoView({behavior:"smooth",block:"start"})}),[s]),r.a.createElement("div",null,r.a.createElement((function(){var e=Object(n.useState)(!1),a=Object(h.a)(e,2),c=a[0],o=a[1];return r.a.createElement("div",{className:R.a.chatlist_header},r.a.createElement("div",{className:R.a.menu_btn,role:"button",onClick:function(){return o(!c)},onKeyPress:function(){},tabIndex:"0"},r.a.createElement("img",{src:"http://s1.iconbird.com/ico/2013/3/636/w80h80139396727847.png",alt:"menu"}),c?r.a.createElement(O,{visible:o}):null),r.a.createElement("div",{className:R.a.header_messenger},r.a.createElement("p",null,"Messenger")),r.a.createElement("div",{className:R.a.finder_btn},r.a.createElement("span",{className:R.a.Login,role:"button",onClick:t,onKeyPress:function(){},tabIndex:"0"},"LogOut")))}),null),r.a.createElement((function(){if(""!==s.toString()){var e=s.names.map((function(e){return r.a.createElement(u.b,{className:R.a.links,to:e.is_group_chat?"/groupmessage/:".concat(e.id,"/"):"/message/:".concat(e.id,"/"),key:"chat_".concat(e.id)},r.a.createElement("div",{className:R.a.user_box},r.a.createElement("div",{className:R.a.avatar},r.a.createElement("img",{alt:"User",src:e.avatar,style:{borderRadius:"50%",height:"6vh"}})),r.a.createElement("div",{className:R.a.chatContainer},r.a.createElement("p",{className:R.a.chat_header},e.topic),r.a.createElement("p",{className:R.a.msg},e.last_message)),r.a.createElement("div",{className:R.a.indicatorCont},r.a.createElement("span",{className:R.a.time},""===e.last_message?"":new Date(e.last_message_time).toTimeString().slice(0,5)),""===e.last_message?null:r.a.createElement("img",{className:R.a.indicator,alt:"",src:"http://s1.iconbird.com/ico/0912/fugue/w24h241349011565tick.png"}))))}));return r.a.createElement("div",{className:R.a.messages,ref:a}," ",e," ")}return r.a.createElement("div",{className:R.a.messages,ref:a})}),null),r.a.createElement((function(){return r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:R.a.btn_chat,onClick:function(){d(!p)}},r.a.createElement("img",{alt:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0447\u0430\u0442",src:"http://s1.iconbird.com/ico/0512/GlyphIcons/file1337170571.png"})),p?r.a.createElement(k,null):null)}),null))})),B=a(5),z=a.n(B);function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function G(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function M(){var e=Object(n.useState)({}),t=Object(h.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(),s=Object(h.a)(o,2),l=s[0],i=s[1],m=Object(n.useState)(),p=Object(h.a)(m,2),d=p[0],g=p[1],_=Object(n.useState)(!1),b=Object(h.a)(_,2),v=b[0],E=b[1];Object(n.useEffect)((function(){return fetch("".concat(f,"/users/finduser/"),{headers:{"Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(e){console.log(e.result),c(e.result)})),function(){}}),[]);function O(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if("Enter"===t[1].key){var r=t[0],o=t[2];""!==o&&(1===r&&c(G({},a,{fullname:o})),2===r&&c(G({},a,{username:o})),3===r&&c(G({},a,{biography:o})))}}return r.a.createElement("div",{className:z.a.container},r.a.createElement((function(){return r.a.createElement("div",{className:z.a.chat_header},r.a.createElement("div",{className:z.a.backimg,role:"button",onClick:function(){},onKeyPress:function(){},tabIndex:"0"},r.a.createElement(u.b,{to:"/chatlist/"},r.a.createElement("img",{src:"http://s1.iconbird.com/ico/2014/1/598/w128h1281390846445leftround128.png",alt:"back"}))),r.a.createElement("p",{className:z.a.header_chat},"Edit Profile"),r.a.createElement("div",{className:z.a.saveBtn,role:"button",onClick:function(){!function(){var e=new FormData;e.append("first_name",a.first_name),e.append("last_name",a.last_name),e.append("bio",a.bio),e.append("avatar",d),fetch("".concat(f,"/users/updateuser/"),{method:"POST",headers:{Authorization:"Token ".concat(localStorage.getItem("token"))},body:e}).then((function(e){return e.json()})).then((function(e){console.log(e.success)}))}()},onKeyPress:function(){},tabIndex:"0"},r.a.createElement("img",{src:"http://s1.iconbird.com/ico/2013/3/637/w128h128139396832132.png",alt:"Save"})))}),null),r.a.createElement((function(){var e=Object(n.useState)(a.first_name),t=Object(h.a)(e,2),o=t[0],s=t[1],u=Object(n.useState)(a.last_name),m=Object(h.a)(u,2),p=m[0],f=m[1],d=Object(n.useState)(a.bio),_=Object(h.a)(d,2),b=_[0],j=_[1],y=r.a.createRef();return r.a.createElement("div",{className:z.a.userpage},r.a.createElement("div",{className:z.a.avatar},r.a.createElement("input",{className:z.a.photoAttach,type:"file",accept:"image/jpeg,image/png",onChange:function(e){return function(e){var t=e[0];g(t);var a=window.URL.createObjectURL(t);i(a),E(!0)}(e.target.files)},ref:y}),r.a.createElement("div",{className:z.a.avatarPic,role:"button",onClick:function(){y.current.click()},onKeyPress:function(){},tabIndex:"0"},r.a.createElement("img",{alt:"User",src:v?l:a.avatar,style:{width:"10vh",height:"10vh",borderRadius:"50%"}}))),r.a.createElement("div",{className:z.a.fullname},r.a.createElement("p",{className:z.a.textholdernames},"First name"),r.a.createElement("textarea",{className:z.a.textholder,rows:"1",maxLength:"25",value:o,onChange:function(e){return s(e.target.value)},onKeyPress:function(e){return O(1,e,o.trim())},onBlur:function(){c(G({},a,{first_name:o.trim()}))}})),r.a.createElement("div",{className:z.a.username},r.a.createElement("p",{className:z.a.textholdernames},"Last Name"),r.a.createElement("textarea",{className:z.a.textholder,rows:"1",minLength:"5",maxLength:"20",value:p,onChange:function(e){return f(e.target.value)},onKeyPress:function(e){return O(2,e,p.trim())},onBlur:function(){c(G({},a,{last_name:p.trim()}))}})),r.a.createElement("div",{className:z.a.biography},r.a.createElement("p",{className:z.a.textholdernames},"Biography"),r.a.createElement("textarea",{className:z.a.textholder,rows:"4",maxLength:"150",value:b,onChange:function(e){return j(e.target.value)},onKeyPress:function(e){return O(3,e,b.trim())},onBlur:function(){c(G({},a,{bio:b.trim()}))}})))}),null))}var H=Object(m.a)();function J(){return r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement("a",{href:"https://docs.google.com/document/d/1dcKpg02_kF_0wPfab8PfZArli03CLiQDusRqFfj5wks/edit"},"\u0416\u0430\u043b\u043e\u0431\u044b \u0438 \u0431\u0430\u0433\u0438")),r.a.createElement("p",null," \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u0442\u044c \u043f\u043e \u0434\u0430\u043d\u043d\u043e\u0439 \u0441\u0441\u044b\u043b\u043a\u0435 \u0438 \u043e\u0442\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u0436\u0430\u043b\u043e\u0431\u044b)"))}function q(){var e=Object(i.g)().id;return r.a.createElement(A,{id:e.slice(1)})}function V(){var e=Object(i.g)().id;return r.a.createElement(D,{id:e.slice(1)})}var X=Object(s.b)((function(e){return{isAuthenticated:null!==e.token}}),(function(e){return{onTryAutoSignUp:function(){return e((function(e){var t=localStorage.getItem("token");if(void 0===t)e(_());else{var a=new Date(localStorage.getItem("expirationDate"));a<=new Date?e(_()):(e(d(t)),e(b((a.getTime()-(new Date).getTime())/1e3)))}}))}}}))((function(e){var t=e.isAuthenticated,a=e.onTryAutoSignUp;return Object(n.useEffect)((function(){return a()}),[a]),localStorage.getItem("token"),r.a.createElement(u.a,{history:H},r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/"},r.a.createElement(i.a,{exact:!0,from:"/",to:"/chatlist/"})),r.a.createElement(i.b,{exact:!0,path:"/login/"},r.a.createElement(y,{isAuthenticated:t})),r.a.createElement(i.b,{exact:!0,path:"/signup/"},r.a.createElement(S,{isAuthenticated:t})),r.a.createElement(i.b,{exact:!0,path:"/profile/"},r.a.createElement(M,null)),r.a.createElement(i.b,{exact:!0,path:"/message/:id/"},r.a.createElement(V,null)),r.a.createElement(i.b,{exact:!0,path:"/groupmessage/:id/"},r.a.createElement(q,null)),r.a.createElement(i.b,{exact:!0,path:"/support/"},r.a.createElement(J,null)),r.a.createElement(i.b,{exact:!0,path:"/chatlist/"},r.a.createElement(K,null))))}));a(44),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var Q=function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?W(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{},t)},Y={token:null,error:null,loading:!1},Z=function(e,t){return Q(e,{error:null,loading:!0})},$=function(e,t){return Q(e,{token:t.token,error:null,loading:!1})},ee=function(e,t){return Q(e,{error:t.error,loading:!1})},te=function(e,t){return Q(e,{token:null})},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return Z(e);case"AUTH_SUCCESS":return $(e,t);case"AUTH_FAIL":return ee(e,t);case"AUTH_LOGOUT":return te(e);default:return e}},ne=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c,re=Object(l.d)(ae,ne(Object(l.a)(o.a)));Object(c.render)(r.a.createElement(s.a,{store:re},r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},5:function(e,t,a){e.exports={container:"userprofile_container__3dHie",photoAttach:"userprofile_photoAttach__2JPqS",chat_header:"userprofile_chat_header__F8KY1",backimg:"userprofile_backimg__3bnSE",header_chat:"userprofile_header_chat__1XI87",saveBtn:"userprofile_saveBtn__2XG2p",userpage:"userprofile_userpage__2kp1c",avatar:"userprofile_avatar__2qiio",avatarPic:"userprofile_avatarPic__3O3ta",fullname:"userprofile_fullname__RgX7x",username:"userprofile_username__dkWCv",biography:"userprofile_biography__cu7Gg",textholdernames:"userprofile_textholdernames__3IUdP",textholder:"userprofile_textholder__BE0_V"}}},[[33,1,2]]]);
//# sourceMappingURL=main.b20d8ddc.chunk.js.map