(this.webpackJsonphobogame=this.webpackJsonphobogame||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/user.5ea17709.png"},25:function(e,t,a){e.exports=a(42)},30:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},37:function(e,t,a){e.exports=a.p+"static/media/train-cartoon.aa7e7327.png"},38:function(e,t,a){e.exports=a.p+"static/media/tilted-tracks.e3ce708f.png"},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),c=a.n(i),s=(a(30),a(31),a(32),a(16)),o=a.n(s),l=a(6),m=a(7),u=a(8),h=a(5),k=a(10),p=a(9),d=a(14),v=a(17),T=(a(34),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={trackNum:e.maxTracks,algoStatus:e.algoStatus,incomingTrain:e.incomingTrain},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState((function(t){return{algoStatus:e.algoStatus,incomingTrain:e.incomingTrain}}))}},{key:"renderMultTracks",value:function(e,t){for(var n=this,i=(150+200/e).toString(10),c=[],s=function(e){var s=[];t.forEach((function(t){t[0]==e&&s.push(r.a.createElement(v.a,{className:"user mr-5"},r.a.createElement(v.a.Image,{src:a(22),className:"bobbing",alt:"this is alt",width:i}),r.a.createElement(v.a.Caption,{className:"text-white text-center"},t[1])))})),c.push(r.a.createElement("div",{className:"my-3"},r.a.createElement("div",{className:"d-flex flex-row"},s,console.log("Train on track",n.state.incomingTrain),n.state.incomingTrain===e?r.a.createElement(d.a,{src:a(37),className:"train",id:"train",alt:"train"}):r.a.createElement("div",{className:"train"})),r.a.createElement("div",null,r.a.createElement(d.a,{src:a(38),className:"track",fluid:!0}))))},o=0;o<e;o++)s(o);return c}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderMultTracks(this.state.trackNum,this.state.algoStatus))}}]),t}(n.Component)),f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={time:new Date,nextTrain:a.props.nextTrain,timeLimit:a.props.timeLimit,timer:0,gameover:!1},a.tick=a.tick.bind(Object(k.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({nextTrain:e.nextTrain})}},{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.state.time.toLocaleTimeString()==this.state.nextTrain.toLocaleTimeString()&&this.props.sendTrain(),this.setState({time:new Date,timer:this.state.timer+1}),this.state.timer===this.state.timeLimit&&(console.log("Time over"),this.componentWillUnmount(),this.props.endGame())}},{key:"render",value:function(){var e;return e=this.state.gameover?"GAME OVER":this.state.time.toLocaleTimeString(),r.a.createElement("div",null,e)}}]),t}(n.Component),g=a(18),b=function(){function e(t,a,n){Object(l.a)(this,e),this.track=t,this.maxTrack=a,this.planeInfoLog=[],this.curTrack=this.track,this.scoreFromTime=0,this.trainsHit=0,this.trainPassed=0,this.lastMove=Date.now(),this.eventFunc=n,this.name="algo"}return Object(m.a)(e,[{key:"receiveHit",value:function(e){this.trainsHit++}},{key:"getCurTrack",value:function(){return this.curTrack}},{key:"receiveMove",value:function(e){}},{key:"movedTracks",value:function(){this.eventFunc(),this.scoreFromTime+=Date.now()-this.lastMove,this.lastMove=Date.now()}},{key:"getScore",value:function(){return 100*this.trainPassed-300*this.trainsHit}},{key:"upTrack",value:function(){this.curTrack!==this.maxTrack-1?this.curTrack++:this.downTrack()}},{key:"downTrack",value:function(){0!==this.curTrack?this.curTrack--:this.upTrack()}},{key:"jump",value:function(){var e=this.planeInfoLog.shift();null!==e&&(e[0]===this.curTrack&&(this.curTrack>=0&&this.curTrack<this.maxTrack?this.upTrack():this.downTrack()),this.movedTracks())}}]),e}(),x=function(e){function t(e,a,n){var r;return Object(l.a)(this,t),(r=Object(u.a)(this,Object(h.a)(t).call(this,e,a,n))).name="BasicAglo",r}return Object(p.a)(t,e),Object(m.a)(t,[{key:"receivePlane",value:function(e){this.trainPassed++,this.planeInfoLog.push(e)}},{key:"receiveHit",value:function(e){Object(g.a)(Object(h.a)(t.prototype),"receiveHit",this).call(this,e),this.jump()}}]),t}(b),E=function(e){function t(e,a,n){var r;return Object(l.a)(this,t),(r=Object(u.a)(this,Object(h.a)(t).call(this,e,a,n))).name="SmartAlgo",r}return Object(p.a)(t,e),Object(m.a)(t,[{key:"receivePlane",value:function(e){this.trainPassed++,this.planeInfoLog.push(e),this.jump()}},{key:"receiveHit",value:function(e){Object(g.a)(Object(h.a)(t.prototype),"receiveHit",this).call(this,e),this.movedTracks()}}]),t}(b),y=function(e){function t(e,a,n){var r;return Object(l.a)(this,t),(r=Object(u.a)(this,Object(h.a)(t).call(this,e,a,n))).track=e,r.maxTrack=a,r.lastPlane=[],r.curTrack=r.track,r.name="BigJumpAlgo",r}return Object(p.a)(t,e),Object(m.a)(t,[{key:"receiveHit",value:function(e){Object(g.a)(Object(h.a)(t.prototype),"receiveHit",this).call(this,e)}},{key:"receivePlane",value:function(e){this.trainPassed++,this.lastPlane=e;var t=Math.floor(Math.random()*this.maxTrack);this.lastPlane[0]==t&&(t=Math.floor(Math.random()*this.maxTrack)),this.curTrack=t,this.movedTracks()}},{key:"receiveMove",value:function(e){}}]),t}(b),j=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={algorithms:[],nextTimeJump:null,tracks:a.props.numTracks,nextTrain:a.props.nextTrain,nextTrainTime:a.props.trainTime,collision:a.props.collision,curTrack:a.props.curTrack,mainCallback:a.props.callback},a.sendPlaneInfoToAlgo=a.sendPlaneInfoToAlgo.bind(Object(k.a)(a)),a.componentWillReceiveProps=a.componentWillReceiveProps.bind(Object(k.a)(a)),a.algoMakesAMove=a.algoMakesAMove.bind(Object(k.a)(a));var n=a.state.algorithms,r=new x(a.props.curTrack,a.props.numTracks,a.algoMakesAMove);n.push(r);var i=new E(a.props.curTrack,a.props.numTracks,a.algoMakesAMove);n.push(i);var c=new y(a.props.curTrack,a.props.numTracks,a.algoMakesAMove);return n.push(c),a.setState({algorithms:n}),a.algoMakesAMove(),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=this;e.trainTime!=this.state.nextTrainTime&&(this.sendPlaneInfoToAlgo([e.nextTrain,e.trainTime]),this.state.algorithms.forEach((function(e){var a=e.getCurTrack();a==t.state.nextTrain&&e.receiveHit(a)})),this.setState({nextTrain:e.nextTrain,nextTrainTime:e.trainTime}))}},{key:"sendPlaneInfoToAlgo",value:function(e){var t=this;this.state.algorithms.forEach((function(a){t.randomNum(10)<9?a.receivePlane(e):a.receivePlane(t.generateBadInfo(e))}))}},{key:"randomNum",value:function(e){return Math.floor(Math.random()*e)}},{key:"generateBadInfo",value:function(e){var t=new Date;return[this.randomNum(e[0])+1,new Date(this.randomNum(2e4)+t.getTime())]}},{key:"algoMakesAMove",value:function(){var e=[];this.state.algorithms.forEach((function(t){e.push([t.curTrack,t.name])})),this.state.mainCallback(e)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:"list-group-flush rounded-lg p-2 bg-white text-dark"},r.a.createElement("h3",null,"Scoreboard"),this.state.algorithms.map((function(e,t){return r.a.createElement("li",{className:"list-group-item font-weight-bold"},e.name," score: ",e.getScore())}))))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={user:a.props.name,tracks:a.props.tracks,score:0,curTrack:Math.round(a.props.tracks/2),health:100,trainsToCome:a.props.trainsToCome,nextTrain:a.props.nextTrain,nextTrainTrack:a.props.nextTrainTrack,trainsPassed:[],collision:!1,gameLength:60*a.props.gameLength,algoStatus:[]},a.sendTrain=a.sendTrain.bind(Object(k.a)(a)),a.algoCallbackFun=a.algoCallbackFun.bind(Object(k.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"sendTrain",value:function(){var e=this.state.trainsToCome,t=e.shift(),a=t.track,n=t.time;e.push({track:Math.floor(Math.random()*(this.state.tracks-1)+1),time:new Date((new Date).getTime()+25e3)});var r=e[0],i=(a=r.track,n=r.time,this.state.trainsPassed);i.push(t),this.setState((function(t){return{trainsToCome:e,nextTrainTrack:a,nextTrain:n,trainsPassed:i}}))}},{key:"endGame",value:function(){var e=document.getElementById("game-area");e.innerHTML="",c.a.render(r.a.createElement("div",{className:"d-flex vh-100 justify-content-center align-items-center"},r.a.createElement("h1",{className:"display-1"},"Game Over")),e)}},{key:"algoCallbackFun",value:function(e){this.setState((function(t){return{algoStatus:e}}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Main bg-dark text-light vh-100 p-0 m-0 container-fluid d-flex flex-column flex-nowrap justify-content-between",id:"game-area"},r.a.createElement("div",{className:"p-3 m-0 d-flex flex-row justify-content-around"},r.a.createElement("div",{className:"text-center"},r.a.createElement("h3",{className:"font-weight-light"},"Current Time:"),r.a.createElement("h3",{className:"text-monospace"},r.a.createElement(f,{nextTrain:this.state.nextTrain,sendTrain:this.sendTrain,timeLimit:this.state.gameLength,endGame:this.endGame}))),r.a.createElement("div",{className:"text-center"},r.a.createElement("h3",{className:"font-weight-light"},"Next train at:"),r.a.createElement("h3",{className:"text-monospace"},this.state.nextTrain.toLocaleTimeString())),r.a.createElement("div",null,r.a.createElement(j,{collision:this.state.collision,curTrack:this.state.curTrack,tracks:this.state.tracks,nextTrain:this.state.nextTrainTrack,trainTime:this.state.nextTrain.toLocaleTimeString(),numTracks:this.props.tracks,callback:this.algoCallbackFun}))),r.a.createElement("div",{className:"p-0 m-0"},r.a.createElement(T,{maxTracks:this.state.tracks,algoStatus:this.state.algoStatus,incomingTrain:this.state.nextTrainTrack})))}}]),t}(n.Component),M=a(11);function N(){return r.a.createElement(o.a,null,r.a.createElement(M.a,{className:"text-left bg-light p-3 m-3 rounded-lg",onSubmit:function(){return function(){for(var e=document.getElementById("numTracks").value,t=document.getElementById("name").value,a=document.getElementById("length").value,n=[],i=1;i<6;i++){var s=Math.floor(4*Math.random()),o=5e3*i;n.push({track:s,time:new Date((new Date).getTime()+o)})}var l=n[0],m=l.track,u=l.time;c.a.render(r.a.createElement(O,{tracks:e,name:t,trainsToCome:n,nextTrain:u,nextTrainTrack:m,gameLength:a}),document.getElementById("root"))}()}},r.a.createElement(M.a.Group,{controlId:"numTracks"},r.a.createElement(M.a.Label,null,r.a.createElement("h5",null,"Number of Tracks on Railway")),r.a.createElement(M.a.Control,{type:"number",defaultValue:"5",min:"2",max:"5",required:!0})),r.a.createElement(M.a.Group,{controlId:"name"},r.a.createElement(M.a.Label,null,r.a.createElement("h5",null,"Name")),r.a.createElement(M.a.Control,{type:"text",defaultValue:"Guest",pattern:"[A-Za-z]+",required:!0})),r.a.createElement(M.a.Group,{controlId:"length"},r.a.createElement(M.a.Label,null,r.a.createElement("h5",null,"Game Length (Min.)")),r.a.createElement(M.a.Control,{type:"number",defaultValue:"2",min:"2",max:"5",required:!0})),r.a.createElement("button",{className:"btn btn-lg rounded-lg btn-warning btn-block"},"Begin!")))}a(41);function w(){return r.a.createElement("div",{className:"StartMenu bg-dark d-flex flex-column align-items-center justify-content-center text-center"},r.a.createElement(o.a,{delay:"0"},r.a.createElement("div",{className:"position-relative p-0 mx-0 my-5"},r.a.createElement(d.a,{src:a(22),className:"bobbing"})),r.a.createElement("h1",{className:"text-light font-italic font-weight-light"},"Hogwarts Line Hopping Game"),r.a.createElement("div",{className:"container-sm my-3 px-5 py-2"},r.a.createElement(o.a,{delay:"400"},r.a.createElement("button",{className:"btn btn-lg btn-light btn-block text-dark font-weight-bold px-5 py-4 my-3",onClick:function(){"start"==="start"&&c.a.render(r.a.createElement(N,null),document.getElementById("choice-box"))}},"Start"))),r.a.createElement("footer",null,r.a.createElement("p",{className:"font-italic text-light font-weight-light"},"Created by: Alex Khrulev, Anthony Greco, Calvin Mozola, Daniel Mezhibovski, and McKenzie Day"))),r.a.createElement("div",{id:"choice-box",className:"container-sm"}))}c.a.render(r.a.createElement((function(){return r.a.createElement("div",{className:"App bg-dark"},r.a.createElement(w,null))}),null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.29f86348.chunk.js.map