(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(38)},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t){!function(e){var t,a,n={x:0,y:0,px:0,py:0,down:!0},r=10*Math.round(window.innerWidth/10),l=10*Math.round(window.innerHeight/10),o=r/10,i=l/10,c=Math.floor(window.innerWidth*window.innerHeight/100/4/2/2);console.log("speck_count: ".concat(c," particles"));var s=[],m=[],u=function e(){for(var o=n.x-n.px,i=n.y-n.py,c=0;c<s.length;c++)for(var u=s[c],v=0;v<u.length;v++){var f=u[v];n.down&&p(f,o,i,40),h(f)}a.clearRect(0,0,t.width,t.height),a.strokeStyle="#00ffff",function(){for(var e=0;e<m.length;e++){var t=m[e];if(t.x>=0&&t.x<r&&t.y>=0&&t.y<l){var n=parseInt(t.x/10,10),o=parseInt(t.y/10,10),i=s[n][o],c=t.x%10/10,u=t.y%10/10;t.xv+=(1-c)*i.xv*.05,t.yv+=(1-u)*i.yv*.05,t.xv+=c*i.right.xv*.05,t.yv+=c*i.right.yv*.05,t.xv+=u*i.down.xv*.05,t.yv+=u*i.down.yv*.05,t.x+=t.xv,t.y+=t.yv;var p=t.px-t.x,h=t.py-t.y,d=Math.sqrt(p*p+h*h),v=.5*Math.random();d>v?(a.lineWidth=1,a.beginPath(),a.moveTo(t.x,t.y),a.lineTo(t.px,t.py),a.stroke()):(a.beginPath(),a.moveTo(t.x,t.y),a.lineTo(t.x+v,t.y+v),a.stroke()),t.px=t.x,t.py=t.y}else t.x=t.px=Math.random()*r,t.y=t.py=Math.random()*l,t.xv=0,t.yv=0;t.xv*=.5,t.yv*=.5}}();for(var g=0;g<s.length;g++)for(var y=s[g],b=0;b<y.length;b++){var E=y[b];d(E)}n.px=n.x,n.py=n.y,requestAnimationFrame(e)},p=function(e,t,a,r){var l=e.x-n.x,o=e.y-n.y,i=Math.sqrt(o*o+l*l);if(i<r){i<4&&(i=r);var c=r/i;e.xv+=t*c,e.yv+=a*c}},h=function(e){var t=.5*e.up_left.xv+e.left.xv+.5*e.down_left.xv-.5*e.up_right.xv-e.right.xv-.5*e.down_right.xv,a=.5*e.up_left.yv+e.up.yv+.5*e.up_right.yv-.5*e.down_left.yv-e.down.yv-.5*e.down_right.yv;e.pressure=.25*(t+a)},d=function(e){e.xv+=.25*(.5*e.up_left.pressure+e.left.pressure+.5*e.down_left.pressure-.5*e.up_right.pressure-e.right.pressure-.5*e.down_right.pressure),e.yv+=.25*(.5*e.up_left.pressure+e.up.pressure+.5*e.up_right.pressure-.5*e.down_left.pressure-e.down.pressure-.5*e.down_right.pressure),e.xv*=.99,e.yv*=.99};function v(e,t,a){this.x=e,this.y=t,this.r=a,this.col=0,this.row=0,this.xv=0,this.yv=0,this.pressure=0}function f(e,t){this.x=this.px=e,this.y=this.py=t,this.xv=this.yv=0}var g=function(e){e.preventDefault(),n.down=!0},y=function(e){e.touches||(n.down=!1)},b=function(e){n.px=n.x,n.py=n.y,n.x=e.offsetX||e.layerX,n.y=e.offsetY||e.layerY},E=function(e){n.px=n.x,n.py=n.y;var a=t.getBoundingClientRect();n.x=e.touches[0].pageX-a.left,n.y=e.touches[0].pageY-a.top};e.Fluid={initialize:function(){s=[],m=[],t=document.getElementById("c"),a=t.getContext("2d"),t.width=r,t.height=l;for(var n=0;n<c;n++)m.push(new f(Math.random()*r,Math.random()*l));for(var p=0;p<o;p++){s[p]=[];for(var h=0;h<i;h++){var d=new v(10*p,10*h,10);s[p][h]=d,s[p][h].col=p,s[p][h].row=h}}for(var w=0;w<o;w++)for(var N=0;N<i;N++){var x=s[w][N],k=N-1>=0?N-1:i-1,j=w-1>=0?w-1:o-1,A=w+1<o?w+1:0,C=s[w][k],M=s[j][N],O=s[j][k],_=s[A][k];x.up=C,x.left=M,x.up_left=O,x.up_right=_,C.down=s[w][N],M.right=s[w][N],O.down_right=s[w][N],_.down_left=s[w][N]}e.addEventListener("touchstart",g),e.addEventListener("touchend",y),t.addEventListener("mousemove",b),t.addEventListener("touchmove",E),u()}}}(window)},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),o=a.n(l),i=(a(21),a(2)),c=a(3),s=a(6),m=a(4),u=a(1),p=a(5),h=(a(22),a(23),function(e){console.log(e.target);var t=e.target.attributes.props.value;document.getElementById(t).scrollIntoView({behavior:"smooth"})}),d=function(e){var t=e.text,a=e.scrollTo;return r.a.createElement("button",{props:a,onClick:function(e){return h(e)},className:"StyledButton"},t||"Contact")},v=function(){return r.a.createElement("div",{className:"Head",id:"Home"},r.a.createElement("header",{className:"banner"},r.a.createElement(f,{text:["Hi, my name is <b>Raphael</b>.","I'm a <b>full</b> <b>stack</b> <b>developer</b> based in <b>Innsbruck,</b> <b>Austria</b>.","Currently I work as a freelancer building applications and online presences for clients from all around the globe."]}),r.a.createElement("span",{className:"toAppear appearOnLoad"},r.a.createElement(d,{scrollTo:"Contact"}))))},f=function(e){var t=e.text;return r.a.createElement("div",{className:"banner"},t.map(function(e,t){return r.a.createElement("p",{className:"toAppear appear",key:t},2===t&&r.a.createElement("div",{style:{margin:"6px"}}),e.split(" ").map(function(e,t){return r.a.createElement("span",{className:"appearOnLoad",dangerouslySetInnerHTML:{__html:" ".concat(e)},key:t})}))}))},g=(a(24),function(){return r.a.createElement("div",{id:"about",className:"about"},r.a.createElement("span",{className:"toAppear"},r.a.createElement("p",{className:"text"},r.a.createElement("i",{className:"fas fa-quote-left"}),r.a.createElement("br",null),"Being a naturally curious guy I ",r.a.createElement("b",null,"enjoy diving into new things")," and ",r.a.createElement("b",null,"figuring out problems")," as I stumble upon them.")),r.a.createElement("span",{className:"toAppear"},r.a.createElement("p",{className:"text"},"I like to ",r.a.createElement("b",null,"prototype quickly")," for proof of concept, but am very ",r.a.createElement("b",null,"critical about code")," I intend to push to production.",r.a.createElement("br",null),r.a.createElement("i",{className:"fas fa-quote-right"}))))}),y=(a(25),a(26),[{title:"For Reddit, to Go",tagline:"Listen to Reddit while getting stuff done - through the power of Text to Speech. Only works in Chrome and Firefox.",features:["basic reddit functionality","log in with reddit","text-to-speech","basic audio player features like skip, back, pause"],thumbnail:"rtg_bg.png",images:["rtg_bg.png"],link:"https://raphaelmayer.github.io/ForRedditToGo",repo:"https://github.com/raphaelmayer/ForRedditToGo",tech:["react.js","javascript","Web Speech API"],type:"front end"},{title:"Jonny Hill",tagline:"Designed and developed a new homepage with a store front and CMS capabilities.",features:["e-commerce","persistent shopping cart","integrated payment options","automated emails","admin interface"],thumbnail:"jh.jpg",images:["jh-front.jpg"],link:"https://jonny-hill.info",repo:"",tech:["react.js","node.js","mysql","strapi","braintree"],type:"full stack"},{title:"Crawl-Unsplash-CLI",tagline:"Small command line utility for crawling and downloading royalty-free images from unsplash.com.",features:["query images by category","download images","ensures unique directories recursively"],thumbnail:"crawl-unsplash-cl_bg.jpg",images:["crawl-unsplash-cl_bg.jpg","crawl.jpg"],link:"",repo:"https://github.com/raphaelmayer/crawl-unsplash-cl",tech:["node.js"],type:"misc"},{title:"Get Me a Goddamn Movie!",tagline:"My girlfriend and I spent way too much time scrolling through Netflix to find something to watch. You just can't judge a movie by its cover! Consult ratings and movie trailers with ease to make an educated desicion.",features:["search by actor or movie name","pagination","trailer"],thumbnail:"gmagm_bg2.png",images:["GMAGM3.jpg","GMAGM.jpg","GMAGM1.jpg"],link:"https://raphaelmayer.github.io/Get-Me-a-Goddamn-Movie",repo:"https://github.com/raphaelmayer/Get-Me-a-Goddamn-Movie",tech:["react.js"],type:"front end"},{title:"Weather App",tagline:"Lightweight, mobile-first web app to check your local weather or any location by name or ZIP-code in real time.",features:["weather info by query or GPS","5 day forecast","celsius and fahrenheit"],thumbnail:"weatherApp_bg.png",images:["weatherApp.png","weatherApp_mobile.png"],link:"https://raphaelmayer.github.io/weather-app",repo:"https://github.com/raphaelmayer/weather-app",tech:["javascript"],type:"front end"},{title:"Simon Game",tagline:"Simon Says is a classic game where the player has to reproduce a given sequence of button presses. With animation and sound.",features:["FUN!","hard mode"],thumbnail:"simon_bg.png",images:["simon-game.jpg"],link:"https://raphaelmayer.github.io/simon-game",repo:"https://github.com/raphaelmayer/simon-game",tech:["javascript"],type:"front end"},{title:"Choropleth Visualization",tagline:"A map showing percentages of adults of age 25 and older with a bachelor's degree or higher (2010-2014)",features:["interactive: hover for more info"],thumbnail:"choro_bg.png",images:["choro_bg.png"],link:"https://raphaelmayer.github.io/choropleth_map",repo:"https://github.com/raphaelmayer/choropleth_map",tech:["d3.js","javascript"],type:"misc"},{title:"YouVote - create and share polls",tagline:"YouVote is a web application where users can create and save custom polls and share them with people online.",features:["Authentication","basic CRUD operations"],thumbnail:"youvote-preview.jpg",images:["youvote-explore.png","youvote-main.png","youvote-new.png","youvote-poll.png","youvote-my.png"],link:"https://raphaelmayer.github.io/youvote",repo:"https://github.com/raphaelmayer/Voting-App",tech:["react.js","node.js","mongoDB"],type:"full stack"},{title:"tbd",tagline:"A platform to share and sell gigs.",features:["authentication","messaging","rating system"],thumbnail:"placeholder.jpg",images:["placeholder.jpg"],link:"",repo:"https://github.com/raphaelmayer/food-share",tech:["react.js","node.js","redux","mongoDB"],type:"full stack"}]),b=(a(27),function(e){var t=e.p,a=e.i,n=e.onClick;return r.a.createElement("div",{className:"workbox",onClick:function(e){return n(t)}},r.a.createElement("img",{className:"workbox-img",alt:"",src:"".concat("/go","/images/").concat(t.thumbnail)}),r.a.createElement("p",{className:"workbox-title",style:{background:"linear-gradient(to right, ".concat(E(a),", ").concat(E(a+2),")")}},t.title))}),E=function(e){return["#112222","#113333","#114444","#115555","#116666","#117777","#115555","#114444","#113333","#112222"][e=e<10?e:e.toString().split("")[1]]||"#115555"},w=(a(28),function(e){var t=e.keyword,a=e.isActive,n=e.onClick;return a===t?r.a.createElement("button",{className:"filter-btn-active",onClick:n},t):r.a.createElement("button",{className:"filter-btn",onClick:n},t)}),N=function(e){var t=e.isActive,a=e.onClick,n=e.count;return r.a.createElement("div",{className:"filter-container"},r.a.createElement("div",{className:"filter"},r.a.createElement(w,{isActive:t,onClick:a,keyword:"front end"}),r.a.createElement(w,{isActive:t,onClick:a,keyword:"full stack"}),r.a.createElement(w,{isActive:t,onClick:a,keyword:"misc"}),r.a.createElement(w,{isActive:t,onClick:a,keyword:"react.js"}),r.a.createElement(w,{isActive:t,onClick:a,keyword:"node.js"})),t?r.a.createElement("p",null,"Active Filter: ",r.a.createElement("strong",null,t)):r.a.createElement("p",null,"Active Filter: none"),r.a.createElement("div",null,n," projects found"))},x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={projects:y,filter:!1},a.handleFilter=a.handleFilter.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"handleFilter",value:function(e){var t=e.target.innerHTML;if(this.state.filter)if(this.state.filter!==t){var a=y.filter(function(e){return e.tech.indexOf(t)>=0});this.setState({filter:t,projects:a})}else this.setState({filter:!1,projects:y});else{var n=y.filter(function(e){return e.tech.indexOf(t)>=0});this.setState({filter:t,projects:n})}}},{key:"render",value:function(){var e=this.state.projects,t=this.props.handleOverlay;return e?r.a.createElement("div",{className:"work",id:"Work"},r.a.createElement("span",{className:"toAppear"},r.a.createElement("h1",null,"Featured Work")),r.a.createElement("span",{className:"toAppear"},r.a.createElement(N,{isActive:this.state.filter,onClick:this.handleFilter,count:e.length})),this.state.filter&&!this.state.projects[0]&&r.a.createElement(k,null),r.a.createElement("div",{className:"work-box-container"},this.state.projects.map(function(e,a){return r.a.createElement("span",{className:"toAppear appear"},r.a.createElement(b,{p:e,i:a,onClick:t,key:a}))}))):r.a.createElement("div",null," no projects ")}}]),t}(n.Component),k=function(){return r.a.createElement("div",{className:"no-projects"},r.a.createElement("h2",null,"No projects found."),r.a.createElement("p",null,"I update these regularly so you could perhaps consider checking back in a bit.."))},j=(a(29),a(30),function(){return r.a.createElement("div",{className:"hexagon"},r.a.createElement("div",{className:"hex-top"}),r.a.createElement("div",{className:"hex-body"}),r.a.createElement("div",{className:"hex-bot"}))}),A=function(){return r.a.createElement("div",{className:"hex-grid"},r.a.createElement("div",{className:"hex-row-even"},r.a.createElement(j,null),r.a.createElement(j,null),r.a.createElement(j,null),r.a.createElement(j,null)),r.a.createElement("div",{className:"hex-row"},r.a.createElement(j,null),r.a.createElement(j,null),r.a.createElement(j,null)),r.a.createElement("div",{className:"hex-row-even"},r.a.createElement(j,null),r.a.createElement(j,null),r.a.createElement(j,null)),r.a.createElement("div",{className:"hex-row"},r.a.createElement(j,null),r.a.createElement(j,null),r.a.createElement(j,null),r.a.createElement(j,null)),r.a.createElement("div",{className:"hex-row-even"},r.a.createElement(j,null),r.a.createElement(j,null),r.a.createElement(j,null),r.a.createElement(j,null)))},C=function(){return r.a.createElement("div",{className:"contact",id:"Contact"},window.innerWidth<=1e3?null:r.a.createElement(A,null),r.a.createElement("span",{className:"toAppear"},r.a.createElement("h1",null,"get in touch")),r.a.createElement("span",{className:"toAppear"},r.a.createElement("p",null,r.a.createElement("em",null,r.a.createElement("b",null,"I am open for inquiries.")))),r.a.createElement("span",{className:"toAppear"},r.a.createElement("p",null,"Whether you have a project you'd like to discuss or you just want to say ",r.a.createElement("b",null,"hello"),", shoot me an email and I will get back to you soon.")),r.a.createElement("form",{action:"https://formcarry.com/s/WlOMZiyHGVI",method:"POST",acceptCharset:"UTF-8"},r.a.createElement("span",{className:"toAppear"},r.a.createElement("div",{className:"form-group "},r.a.createElement("label",{htmlFor:"name"}),r.a.createElement("input",{type:"text",name:"name",className:"form-control","aria-describedby":"nameHelp",placeholder:"Your name..",required:!0}))),r.a.createElement("span",{className:"toAppear"},r.a.createElement("div",{className:"form-group "},r.a.createElement("label",{htmlFor:"email"}),r.a.createElement("input",{type:"email",name:"email",className:"form-control","aria-describedby":"emailHelp",placeholder:"Your email..",required:!0}))),r.a.createElement("span",{className:"toAppear"},r.a.createElement("div",{className:"form-group "},r.a.createElement("label",{htmlFor:"contactTextarea"}),r.a.createElement("textarea",{type:"text",name:"message",className:"form-control",placeholder:"How can I help?",rows:"3"}))),r.a.createElement("div",{className:"toAppear"},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit!"))))},M=function(e){var t=e.handleOverlay,a=e.isHidden;return r.a.createElement("div",{className:"FrontPage ".concat(a&&"FrontPage-hidden")},r.a.createElement("div",null,r.a.createElement(v,null)),r.a.createElement(x,{handleOverlay:t}),r.a.createElement(g,null),r.a.createElement(C,null),r.a.createElement("footer",{className:"footer"},(new Date).getFullYear()," - designed and built by Raphael Mayer"))},O=(a(31),a(32),function(){return r.a.createElement("div",{className:"social-media-icons"},r.a.createElement("a",{href:"https://github.com/raphaelmayer",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/raphael-mayer",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-linkedin"})))}),_=["Home","Work","Contact"],S=function(e){var t=e.className,a=e.bg,n=e.handleMobileNav,l={backgroundColor:"rgb(28, 28, 28)",padding:window.innerWidth<=800?"6vh 5vw":"1vh 5vw",boxShadow:"0px 0px 6px 1px #111"};return r.a.createElement("nav",{className:t,style:a?l:{}},r.a.createElement("div",{className:"nav-btns-container"},_.map(function(e,t){return r.a.createElement(F,{text:e,nbr:t,key:t,onClick:function(e){h(e),n()}})})),r.a.createElement(O,null))},F=function(e){var t=e.text,a=e.onClick,n=e.nbr;return r.a.createElement("div",{props:t,className:"nav-btn btn".concat(n),onClick:a},r.a.createElement("div",{props:t,className:"nav-btn-text"}," ",t," "),r.a.createElement("div",{props:t,className:"nav-btn-border"}))},q=(a(33),function(e){var t=e.onClick,a=e.transform;return r.a.createElement("svg",{height:"24",width:"26",className:a?"nav-icon nav-icon-active":"nav-icon",onClick:t},r.a.createElement("line",{className:"line-1",x1:"0",y1:"3",x2:"26",y2:"3"}),r.a.createElement("line",{className:"line-2",x1:"0",y1:"12",x2:"26",y2:"12"}),r.a.createElement("line",{className:"line-3",x1:"0",y1:"21",x2:"26",y2:"21"}))}),I=(a(34),function(){return r.a.createElement("div",{className:"loading-screen"},r.a.createElement("div",{className:"center-piece"},r.a.createElement("div",{className:"loading-bar"})))}),L=(a(35),function(e){var t=e.p,a=e.visible,n=e.handleOverlay;return t?r.a.createElement("div",{className:a?"overlay overlay-active":"overlay"},r.a.createElement(q,{onClick:n,transform:!0}),r.a.createElement("div",{className:"overlay-container"},r.a.createElement("div",{className:"overlay-head",style:{backgroundImage:"url(".concat("/go","/images/").concat(t.thumbnail,")")}},r.a.createElement("div",{className:"darken-bg"}),r.a.createElement("h1",null,t.title.toLowerCase()),r.a.createElement("p",null,r.a.createElement("em",null,t.tagline)),r.a.createElement("br",null),t.link&&r.a.createElement(T,{src:t.link,text:"demo"}),t.repo?r.a.createElement(T,{src:t.repo,text:"source"}):r.a.createElement(T,{src:t.repo,text:"source unavailable"})),r.a.createElement("div",{className:"overlay-section"},r.a.createElement("h3",null,"in a nutshell"),r.a.createElement("ul",null,t.features&&t.features.map(function(e,t){return r.a.createElement("li",null,"> "+e)}))),r.a.createElement("div",{className:"overlay-section"},r.a.createElement("h3",null,"tech"),r.a.createElement("ul",{className:"tech"},t.tech.map(function(e,t){return r.a.createElement("li",null,e," ")}))),r.a.createElement("div",{className:"overlay-image-container"},t.images&&t.images.map(function(e,t){return r.a.createElement("img",{className:"overlay-img",alt:"p-img",src:"".concat("/go","/images/").concat(e)})})))):r.a.createElement("div",{className:"overlay"},"error")}),T=function(e){var t=e.src,a=e.text;return r.a.createElement("a",{href:""===t?null:t,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",{className:"source unavailable"===a?"overlay-btn grey":"overlay-btn"},a))},W=(a(36),a(37),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){setTimeout(G,60)}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){return r.a.createElement("div",{className:"parallax"},r.a.createElement("canvas",{id:"c"}))}}]),t}(n.Component)),G=function(){window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,window.Fluid.initialize()},H=function(e,t){var a=!1;return function(){a||(e.call(),a=!0,setTimeout(function(){a=!1},t))}};function R(e){var t=e.getBoundingClientRect(),a=Math.max(document.documentElement.clientHeight,window.innerHeight);return!(t.bottom<100||t.top-a>=-100)}var B=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={showMobileNav:!1,navColor:!1,overlay:{p:null,visible:!1}},e.handleMobileNav=e.handleMobileNav.bind(Object(u.a)(e)),e.handleScroll=e.handleScroll.bind(Object(u.a)(e)),e.handleOverlay=e.handleOverlay.bind(Object(u.a)(e)),e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){return document.querySelector(".loading-bar").className+=" loading-bar60"},50),window.addEventListener("load",this.handleLoad),window.addEventListener("scroll",H(this.handleScroll,50))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("load",this.handleLoad),window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(e){var t=document.querySelectorAll(".toAppear");window.scrollY>=100?this.setState({navColor:!0}):this.setState({navColor:!1});for(var a=0;a<t.length;a++)R(t[a])?t[a].className="toAppear appear":t[a].className="toAppear"}},{key:"handleLoad",value:function(){document.querySelector(".loading-bar").className+=" loading-bar100",setTimeout(function(){return document.querySelector(".loading-screen").className+=" ls-done"},200);var e=document.querySelectorAll(".appearOnLoad");console.log(e),e.forEach(function(e,t){e&&setTimeout(function(){return e.className+=" appear"},30*t)})}},{key:"handleMobileNav",value:function(){this.state.showMobileNav?this.setState({showMobileNav:!1}):this.setState({showMobileNav:!0})}},{key:"handleOverlay",value:function(e){this.state.overlay.visible?(this.setState({overlay:{p:this.state.overlay.p,visible:!1}}),document.querySelector("body").className=""):(this.setState({overlay:{p:e,visible:!0}}),document.querySelector("body").className="noscroll")}},{key:"render",value:function(){var e=this.state,t=e.showMobileNav,a=e.navColor,n=e.overlay;return r.a.createElement("div",{className:"App"},r.a.createElement(I,null),r.a.createElement(L,{p:n.p,visible:n.visible,handleOverlay:this.handleOverlay}),r.a.createElement(W,null),window.innerWidth<=800?r.a.createElement(q,{onClick:this.handleMobileNav,transform:t}):null,t&&window.innerWidth<=800?r.a.createElement(S,{className:"nav nav-active",handleMobileNav:this.handleMobileNav}):r.a.createElement(S,{className:"nav",bg:a,handleMobileNav:this.handleMobileNav}),r.a.createElement(M,{handleOverlay:this.handleOverlay,isHidden:n.visible}))}}]),t}(n.Component),Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(B,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/go",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/go","/service-worker.js");Y?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):D(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):D(e)})}}()}],[[12,1,2]]]);
//# sourceMappingURL=main.0a187f4d.chunk.js.map