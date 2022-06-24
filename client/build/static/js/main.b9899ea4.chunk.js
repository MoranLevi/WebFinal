(this.webpackJsonpnewproject=this.webpackJsonpnewproject||[]).push([[0],{42:function(e,t,a){e.exports=a.p+"static/media/LogoLight.b6332f4e.png"},46:function(e,t,a){e.exports=a.p+"static/media/background.046ddbaf.jpg"},47:function(e,t,a){e.exports=a(66)},52:function(e,t,a){},53:function(e,t,a){},61:function(e,t,a){},62:function(e,t){e.exports={USERS_TABLE:{name:"users",columns:{id:"UserName",password:"Password",fullName:"FullName",birthDay:"Birthday"}},WORKOUTS_TABLE:{name:"workouts",columns:{workout_name:"WorkName",username:"UserName",type:"WorkType",time:"WorkDate"}}}},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),o=a.n(l),s=(a(52),a(8)),c=a(9),u=a(11),i=a(10),m=a(14),d=a(7),p=a(38),h=a(39),b=a(42),E=a.n(b);a(53);var g=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={reload:!1},n.refreshPage=function(e){window.confirm("Are you sure you want to logout?")?(localStorage.clear(),n.setState({reload:!0},(function(){return n.setState({reload:!1})}))):e.preventDefault()},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(p.a,{bg:"dark",className:"m-auto",variant:"dark"},r.a.createElement(p.a.Brand,{href:"#home",className:"m-auto"},r.a.createElement("img",{src:E.a,width:"300",className:"d-inline-block align-top",alt:"WorkOut"})),null!==JSON.parse(localStorage.getItem("User"))?r.a.createElement(h.a,{className:"mr-auto"},r.a.createElement(m.b,{className:"nav-bar-link",to:"/home"},"Home"),r.a.createElement(m.b,{className:"nav-bar-link",to:"/MyWorkouts"},"My Workouts"),r.a.createElement(m.b,{className:"nav-bar-link",to:"/About"},"About"),r.a.createElement(m.b,{className:"nav-bar-link",to:"/",onClick:this.refreshPage},"Logout")):r.a.createElement(h.a,{className:"mr-auto"},r.a.createElement(m.b,{className:"nav-bar-link",to:"/signin"},"Login"),r.a.createElement(m.b,{className:"nav-bar-link",to:"/register"},"Register")))}}]),a}(r.a.Component),f=Object(d.f)(g),v=a(5),y=a(12),k=a.n(y),w=a(17),O=a(23),j=a(6),N=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).registration=function(){var e=Object(w.a)(k.a.mark((function e(t){var a,r,l,o,s,c,u,i,m,d,p;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=function(e){return 0<=e&&e<10?"0"+e.toString():-10<e&&e<0?"-0"+(-1*e).toString():e.toString()},t.preventDefault(),a=n.state.username,r=n.state.FullName,l=n.state.password,o=new Date(n.state.birthday),""!==r&&""!==l){e.next=9;break}return alert("You must enter FullName and password"),e.abrupt("return");case 9:if((s=/^[A-Za-z0-9_ ]+$/).test(r)){e.next=13;break}return alert("FullName must be in english letters."),e.abrupt("return");case 13:if(s.test(a)){e.next=16;break}return alert("Username must be in english letters."),e.abrupt("return");case 16:if(!(l.length<=1)){e.next=19;break}return alert("Password must be greater then 1"),e.abrupt("return");case 19:if(c=Date.now()-o.getTime(),u=new Date(c),!(Math.abs(u.getUTCFullYear()-1970)<18)){e.next=24;break}return alert("The age must be greater than 18!"),e.abrupt("return");case 24:return Date.prototype.toMysqlFormat=function(){return this.getUTCFullYear()+"-"+i(1+this.getUTCMonth())+"-"+i(this.getUTCDate())+" "+i(this.getUTCHours())+":"+i(this.getUTCMinutes())+":"+i(this.getUTCSeconds())},m={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:"Register",username:n.state.username,fullname:n.state.FullName,password:n.state.password,bd:o.toMysqlFormat()})},console.log("requesting"),e.next=29,fetch("/register",m);case 29:if(d=e.sent,console.log(d),d.ok){e.next=34;break}return alert("Invalid Registration Details"),e.abrupt("return");case 34:return e.next=36,d.json();case 36:p=e.sent,console.log(p),alert("Registered! Please login.");case 39:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={FullName:"",password:"",username:"",birthday:""},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(v.a,{style:{background:"rgba(233, 235, 236, 0.6)",borderRadius:20}},r.a.createElement(v.a.Body,null,r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("h1",{style:{fontFamily:"Merriweather Sans, sans-serif"}},"Register")),r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement(j.a,{onSubmit:this.registration},r.a.createElement(j.a.Group,{controlId:"fusername"},r.a.createElement(j.a.Label,null,r.a.createElement("b",null,"Username")),r.a.createElement(j.a.Control,{placeholder:"Your Username",value:this.state.username,onChange:function(t){return e.setState({username:t.target.value})},required:!0})),r.a.createElement(j.a.Group,{controlId:"fFullName"},r.a.createElement(j.a.Label,null,r.a.createElement("b",null,"FullName")),r.a.createElement(j.a.Control,{placeholder:"Your Full Name",value:this.state.FullName,onChange:function(t){return e.setState({FullName:t.target.value})},required:!0})),r.a.createElement(j.a.Group,{controlId:"fPassword"},r.a.createElement(j.a.Label,null,r.a.createElement("b",null,"Password")),r.a.createElement(j.a.Control,{type:"password",placeholder:"Password",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})},required:!0})),r.a.createElement(j.a.Group,{controlId:"fBirthday"},r.a.createElement(j.a.Label,null,r.a.createElement("b",null,"Birthday")),r.a.createElement(j.a.Control,{type:"date",placeholder:"Your Birthday",value:this.state.birthday,onChange:function(t){return e.setState({birthday:t.target.value})},required:!0})),r.a.createElement(O.a,{type:"submit",id:"registerBtn"}," Register ")))))))}}]),a}(r.a.Component),S=Object(d.f)(N),D=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(w.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),n.loginUser=Object(w.a)(k.a.mark((function e(){var t,a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:"Login",ID:n.state.ID,Password:n.state.password})},console.log("requesting"),e.next=4,fetch("/login",t);case 4:if((a=e.sent).ok){e.next=8;break}return alert("Invalid Login Details"),e.abrupt("return");case 8:return e.next=10,a.json();case 10:return r=e.sent,r=JSON.parse(r.body),console.log(r),localStorage.setItem("User",JSON.stringify({username:n.state.ID,fullName:r.fullName})),e.abrupt("return",n.props.history.push("/home"));case 15:case"end":return e.stop()}}),e)}))),n.state={ID:"",FullName:"",password:""},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(v.a,{style:{flex:1,background:"rgba(233, 235, 236, 0.6)",borderRadius:20}},r.a.createElement(v.a.Body,null,r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("h1",{style:{fontFamily:"Merriweather Sans, sans-serif"}},"Login")),r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement(j.a,null,r.a.createElement(j.a.Group,{controlId:"fID"},r.a.createElement(j.a.Label,null,r.a.createElement("b",null,"Username")),r.a.createElement(j.a.Control,{placeholder:"Your Username",value:this.state.ID,onChange:function(t){return e.setState({ID:t.target.value})},required:!0})),r.a.createElement(j.a.Group,{controlId:"fPassword"},r.a.createElement(j.a.Label,null,r.a.createElement("b",null,"Password")),r.a.createElement(j.a.Control,{type:"password",placeholder:"Password",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})},required:!0})),r.a.createElement(O.a,{onClick:this.loginUser},"Login")))))))}}]),a}(r.a.Component),C=Object(d.f)(D),T=a(37);a(61);function W(){return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement(v.a,{style:{width:"90%",marginTop:"3rem",background:"rgba(192, 192, 192, 1)"}},r.a.createElement(v.a.Body,null,r.a.createElement("h4",null,r.a.createElement("b",null,"Ort Braude - Web Course 2022")),r.a.createElement("h3",null,"Website to manage your workouts"),"Submited by: Avri Zaguri, Ziv Tziyonit and Moran Levi")),r.a.createElement(v.a,{style:{width:"90%",marginTop:"3rem",background:"rgba(192, 192, 192, 1)"}},r.a.createElement(v.a.Body,null,r.a.createElement("h4",null,r.a.createElement("b",null,"Why we chose to create this website?")),"We created this website in order to help a lot of people to manage their daily workouts and see their results change"))))}var x=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),n=t.call(this,e),localStorage.clear(),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){localStorage.clear()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T.a,null,r.a.createElement(T.a,{style:{marginTop:"1rem",textAlign:"left"}},r.a.createElement(F,null))))}}]),a}(r.a.Component);Object(d.f)(x);function F(){return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement(v.a,{style:{width:"90%",marginTop:"1rem",background:"rgba(233, 235, 236, 0.9)"}},r.a.createElement(v.a.Body,null,r.a.createElement("h1",null,r.a.createElement("b",null,"Welcome ",JSON.parse(localStorage.getItem("User"))?JSON.parse(localStorage.getItem("User")).fullName:"guest","!")))),r.a.createElement("br",null),r.a.createElement(v.a,{style:{width:"80%",background:"rgba(229, 200, 195, 0.9)"}},r.a.createElement(v.a.Body,null,r.a.createElement(v.a.Title,null,r.a.createElement("h2",null,"Excercise with us!")),r.a.createElement("div",null,"This website is your workout calender! ",r.a.createElement("br",null)," Here you can save every workout you did and compare it with previous ones.",r.a.createElement("br",null),"And the best part- it's FREE!!!"))),r.a.createElement("br",null),r.a.createElement(v.a,{style:{width:"80%",background:"rgba(255, 200, 150, 0.9)"}},r.a.createElement(v.a.Body,null,r.a.createElement(v.a.Title,null,r.a.createElement("h2",null,"Contact us!")),r.a.createElement("div",null,"If you have any technical issues with your account, please send us an email to: workoutCal@gmail.com")))))}var U=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).postWorkout=Object(w.a)(k.a.mark((function e(){var t,a,n=arguments;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},e.next=3,fetch("/addWorkout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return a=e.sent,e.next=6,a.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)}))),n.onSaveButtonClicked=Object(w.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.state.name){e.next=2;break}return e.abrupt("return",alert("Error: Please insert Workout name"));case 2:if(n.state.type){e.next=4;break}return e.abrupt("return",alert("Error: Please insert Workout type"));case 4:if(n.state.time){e.next=6;break}return e.abrupt("return",alert("Error: Please insert Workout time"));case 6:return t=JSON.parse(localStorage.getItem("User")),n.postWorkout({username:t.username,name:n.state.name,work_type:n.state.type,time:n.state.time}),e.abrupt("return",n.props.history.push("/MyWorkouts"));case 9:case"end":return e.stop()}}),e)}))),n.state={name:"",type:"cardio",time:""},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"base-container",ref:this.props.containerRef},r.a.createElement("center",null,r.a.createElement(v.a,{style:{width:"50rem",marginTop:"8rem",background:"rgba(233, 235, 236, 0.9)"}},r.a.createElement("h1",{id:"loginTitle"},r.a.createElement("b",null,"Add new Workout")),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Workout Name:\xa0\xa0\xa0\xa0"),r.a.createElement("input",{id:"name",type:"text",name:"name",placeholder:"Workout Name",value:this.state.name,onChange:function(t){e.setState({name:t.target.value})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"type"},"Workout Type:\xa0\xa0"),r.a.createElement("select",{name:"type",placeholder:"Workout type",value:this.state.type,onChange:function(t){e.setState({type:t.target.value})}},r.a.createElement("option",null,"cardio"),r.a.createElement("option",null,"whights"),r.a.createElement("option",null,"basketball"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"time"},"Time:\xa0\xa0\xa0\xa0"),r.a.createElement("input",{type:"datetime-local",name:"time",placeholder:"Workout Time",value:this.state.time,onChange:function(t){e.setState({time:t.target.value})}})))),r.a.createElement("div",{className:"footer"},r.a.createElement(O.a,{type:"button",className:"btn",onClick:this.onSaveButtonClicked},"Save")))))}}]),a}(r.a.Component),I=Object(d.f)(U),B=a(26),L=a(44),M=(a(62),function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={tableData:e.tableData},n}return Object(c.a)(a,[{key:"renderWorkouts",value:function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.WorkName),r.a.createElement("td",null,e.WorkType),r.a.createElement("td",null,e.WorkDate.replace("T"," ")),r.a.createElement("td",null,r.a.createElement("button",{onClick:Object(w.a)(k.a.mark((function t(){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/deleteUserWorkout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e.UserName,workname:e.WorkName,workdate:e.WorkDate})});case 2:t.sent,window.location.reload(!1);case 4:case"end":return t.stop()}}),t)})))},"DELETE")))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(L.a,{striped:!0,bordered:!0,hover:!0,responsive:"md"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("b",null,"Workout Name")),r.a.createElement("td",null,r.a.createElement("b",null,"Workout Type")),r.a.createElement("td",null,r.a.createElement("b",null,"Workout Time")),r.a.createElement("td",null,r.a.createElement("b",null,"DELETE")))),r.a.createElement("tbody",null,this.state.tableData.map(this.renderWorkouts))))}}]),a}(r.a.Component)),P=a(45),A=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;if(Object(s.a)(this,a),n=t.call(this,e),null!==e.tableData&&void 0!==e.tableData&&0!==e.tableData.length){n.state={tableData:e.tableData};for(var r=n.state.tableData,l={basketball:0,whights:0,cardio:0},o=0,c=[],u=0;u<r.length;u++){var i=Object.values(r[u]);console.log(i),l[i[2]]+=1,o++}c.push({label:"basketball",y:100*l.basketball/o}),c.push({label:"whights",y:100*l.whights/o}),c.push({label:"cardio",y:100*l.cardio/o}),n.state={workoutsToGraphDisplay:c}}return n}return Object(c.a)(a,[{key:"render",value:function(){if(null!==this.props.tableData&&void 0!==this.props.tableData&&0!==this.props.tableData.length){var e={exportEnabled:!0,animationEnabled:!0,title:{text:"Workout Distribution"},data:[{type:"pie",startAngle:75,toolTipContent:"<b>{label} (#percent%)",showInLegend:"true",legendText:"{label}",indexLabelFontSize:16,percentFormatString:"#0.##",indexLabel:"{label} - #percent%",dataPoints:this.state.workoutsToGraphDisplay}]};return r.a.createElement("div",null,r.a.createElement(P.a,{options:e}))}return r.a.createElement("div",null)}}]),a}(r.a.Component),J=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(w.a)(k.a.mark((function e(){var t,a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.setState.bind(Object(B.a)(n)),console.log(localStorage.getItem("User")),a=JSON.parse(localStorage.getItem("User")),r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ID:a.username,Password:a.Password})},e.next=6,fetch("/getUserWorkouts",r).then((function(e){return e.json()})).then((function(e){t({responseData:e})}));case 6:case"end":return e.stop()}}),e)}))),n.state={responseData:null},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"MyWorkouts",style:{backgroundColor:"#FFFFFF"}},r.a.createElement("center",null,r.a.createElement(v.a,{style:{width:"50rem"}},r.a.createElement(v.a.Body,null,r.a.createElement(v.a.Title,null,r.a.createElement("h2",null,"My Workouts ",r.a.createElement("a",{style:{color:"black"},href:"#AddWorkout"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",class:"bi bi-plus-circle",viewBox:"0 0 16 16"},r.a.createElement("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),r.a.createElement("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"}))))),null===this.state.responseData?r.a.createElement("div",null,"Loading"):0===Object.keys(this.state.responseData).length?r.a.createElement("div",null,"No Available Workouts"):r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(M,{tableData:this.state.responseData})),r.a.createElement("div",null,r.a.createElement(A,{tableData:this.state.responseData})))))))}}]),a}(r.a.Component),R=Object(d.f)(J),q=a(46),G=a.n(q),z=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),n=t.call(this,e),sessionStorage.clear(),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Merriweather+Sans:ital,wght@1,500&display=swap",rel:"stylesheet"}),r.a.createElement(m.a,null,r.a.createElement(f,null),r.a.createElement("img",{src:G.a,style:{position:"absolute",width:"100vw",height:"100vh",repeat:"no-repeat",left:0,top:0,bottom:0,right:0,zIndex:-1}}),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:F}),r.a.createElement(d.a,{path:"/home"},r.a.createElement("div",null,r.a.createElement(F,null))),r.a.createElement(d.a,{path:"/AddWorkout",component:I}),r.a.createElement(d.a,{path:"/MyWorkouts",component:R}),r.a.createElement(d.a,{path:"/About",component:W}),r.a.createElement(d.a,{path:"/register",component:S}),r.a.createElement(d.a,{path:"/signin",component:C}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(65);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.b9899ea4.chunk.js.map