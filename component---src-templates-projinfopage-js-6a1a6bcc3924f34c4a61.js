(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1w3K":function(e,t,n){"use strict";var r=s(n("Si88")),a=s(n("PAGr")),i=s(n("UnXY")),o=s(n("S3Uj"));function s(e){return e&&e.__esModule?e:{default:e}}e.exports={Transition:o.default,TransitionGroup:i.default,ReplaceTransition:a.default,CSSTransition:r.default}},"8PcY":function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("2Spj"),n("bWfx"),n("8+KV"),n("hHhE"),t.__esModule=!0,t.getChildMapping=a,t.mergeChildMappings=i,t.getInitialChildMapping=function(e,t){return a(e.children,(function(n){return(0,r.cloneElement)(n,{onExited:t.bind(null,n),in:!0,appear:o(n,"appear",e),enter:o(n,"enter",e),exit:o(n,"exit",e)})}))},t.getNextChildMapping=function(e,t,n){var s=a(e.children),l=i(t,s);return Object.keys(l).forEach((function(a){var i=l[a];if((0,r.isValidElement)(i)){var c=a in t,u=a in s,d=t[a],p=(0,r.isValidElement)(d)&&!d.props.in;!u||c&&!p?u||!c||p?u&&c&&(0,r.isValidElement)(d)&&(l[a]=(0,r.cloneElement)(i,{onExited:n.bind(null,i),in:d.props.in,exit:o(i,"exit",e),enter:o(i,"enter",e)})):l[a]=(0,r.cloneElement)(i,{in:!1}):l[a]=(0,r.cloneElement)(i,{onExited:n.bind(null,i),in:!0,exit:o(i,"exit",e),enter:o(i,"enter",e)})}})),l};var r=n("q1tI");function a(e,t){var n=Object.create(null);return e&&r.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,r.isValidElement)(e)?t(e):e}(e)})),n}function i(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,a=Object.create(null),i=[];for(var o in e)o in t?i.length&&(a[o]=i,i=[]):i.push(o);var s={};for(var l in t){if(a[l])for(r=0;r<a[l].length;r++){var c=a[l][r];s[a[l][r]]=n(c)}s[l]=n(l)}for(r=0;r<i.length;r++)s[i[r]]=n(i[r]);return s}function o(e,t,n){return null!=n[t]?n[t]:e.props[t]}},HO6O:function(e,t,n){"use strict";n.r(t);n("tUrg"),n("f3/d");var r=n("q1tI"),a=n.n(r),i=n("Bl7J"),o=n("ok1R"),s=n("rhny"),l=n("vrFN"),c=n("+i52"),u=n.n(c);n("2Spj");function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))}return e}var h=n("wx14"),f=n("zLVn"),v=n("JX7q"),m=n("dI71"),E=n("17x9"),g=n.n(E),x=n("TSYQ"),y=n.n(x),b=n("1w3K"),O=n("33Jr"),N=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={startAnimation:!1},n.onEnter=n.onEnter.bind(Object(v.a)(n)),n.onEntering=n.onEntering.bind(Object(v.a)(n)),n.onExit=n.onExit.bind(Object(v.a)(n)),n.onExiting=n.onExiting.bind(Object(v.a)(n)),n.onExited=n.onExited.bind(Object(v.a)(n)),n}Object(m.a)(t,e);var n=t.prototype;return n.onEnter=function(e,t){this.setState({startAnimation:!1}),this.props.onEnter(e,t)},n.onEntering=function(e,t){var n=e.offsetHeight;return this.setState({startAnimation:!0}),this.props.onEntering(e,t),n},n.onExit=function(e){this.setState({startAnimation:!1}),this.props.onExit(e)},n.onExiting=function(e){this.setState({startAnimation:!0}),e.dispatchEvent(new CustomEvent("slide.bs.carousel")),this.props.onExiting(e)},n.onExited=function(e){e.dispatchEvent(new CustomEvent("slid.bs.carousel")),this.props.onExited(e)},n.render=function(){var e=this,t=this.props,n=t.in,r=t.children,i=t.cssModule,o=t.slide,s=t.tag,l=t.className,c=Object(f.a)(t,["in","children","cssModule","slide","tag","className"]);return a.a.createElement(b.Transition,Object(h.a)({},c,{enter:o,exit:o,in:n,onEnter:this.onEnter,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(t){var n=e.context.direction,o=t===O.a.ENTERED||t===O.a.EXITING,c=(t===O.a.ENTERING||t===O.a.EXITING)&&e.state.startAnimation&&("right"===n?"carousel-item-left":"carousel-item-right"),u=t===O.a.ENTERING&&("right"===n?"carousel-item-next":"carousel-item-prev"),d=Object(O.d)(y()(l,"carousel-item",o&&"active",c,u),i);return a.a.createElement(s,{className:d},r)}))},t}(a.a.Component);N.propTypes=p({},b.Transition.propTypes,{tag:O.e,in:g.a.bool,cssModule:g.a.object,children:g.a.node,slide:g.a.bool,className:g.a.string}),N.defaultProps=p({},b.Transition.defaultProps,{tag:"div",timeout:O.b.Carousel,slide:!0}),N.contextTypes={direction:g.a.string};var C=N,T=(n("LK8F"),n("0l/t"),n("bWfx"),n("a1Th"),n("h7Nl"),n("Btvt"),function(e){function t(t){var n;return(n=e.call(this,t)||this).handleKeyPress=n.handleKeyPress.bind(Object(v.a)(n)),n.renderItems=n.renderItems.bind(Object(v.a)(n)),n.hoverStart=n.hoverStart.bind(Object(v.a)(n)),n.hoverEnd=n.hoverEnd.bind(Object(v.a)(n)),n.handleTouchStart=n.handleTouchStart.bind(Object(v.a)(n)),n.handleTouchEnd=n.handleTouchEnd.bind(Object(v.a)(n)),n.touchStartX=0,n.touchStartY=0,n.state={activeIndex:n.props.activeIndex,direction:"right",indicatorClicked:!1},n}Object(m.a)(t,e);var n=t.prototype;return n.getChildContext=function(){return{direction:this.state.direction}},n.componentDidMount=function(){"carousel"===this.props.ride&&this.setInterval(),document.addEventListener("keyup",this.handleKeyPress)},t.getDerivedStateFromProps=function(e,t){var n=null,r=t.activeIndex,a=t.direction,i=t.indicatorClicked;return e.activeIndex!==r&&(e.activeIndex===r+1?a="right":e.activeIndex===r-1?a="left":e.activeIndex<r?a=i?"left":"right":e.activeIndex!==r&&(a=i?"right":"left"),n={activeIndex:e.activeIndex,direction:a,indicatorClicked:!1}),n},n.componentDidUpdate=function(e,t){t.activeIndex!==this.state.activeIndex&&this.setInterval(this.props)},n.componentWillUnmount=function(){this.clearInterval(),document.removeEventListener("keyup",this.handleKeyPress)},n.setInterval=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){void 0===e&&(e=this.props),this.clearInterval(),e.interval&&(this.cycleInterval=setInterval((function(){e.next()}),parseInt(e.interval,10)))})),n.clearInterval=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){clearInterval(this.cycleInterval)})),n.hoverStart=function(){var e;("hover"===this.props.pause&&this.clearInterval(),this.props.mouseEnter)&&(e=this.props).mouseEnter.apply(e,arguments)},n.hoverEnd=function(){var e;("hover"===this.props.pause&&this.setInterval(),this.props.mouseLeave)&&(e=this.props).mouseLeave.apply(e,arguments)},n.handleKeyPress=function(e){this.props.keyboard&&(37===e.keyCode?this.props.previous():39===e.keyCode&&this.props.next())},n.handleTouchStart=function(e){this.props.enableTouch&&(this.touchStartX=e.changedTouches[0].screenX,this.touchStartY=e.changedTouches[0].screenY)},n.handleTouchEnd=function(e){if(this.props.enableTouch){var t=e.changedTouches[0].screenX,n=e.changedTouches[0].screenY,r=Math.abs(this.touchStartX-t);r<Math.abs(this.touchStartY-n)||r<40||(t<this.touchStartX?this.props.next():this.props.previous())}},n.renderItems=function(e,t){var n=this,r=this.props.slide;return a.a.createElement("div",{className:t},e.map((function(e,t){var i=t===n.state.activeIndex;return a.a.cloneElement(e,{in:i,slide:r})})))},n.render=function(){var e=this,t=this.props,n=t.cssModule,r=t.slide,i=t.className,o=Object(O.d)(y()(i,"carousel",r&&"slide"),n),s=Object(O.d)(y()("carousel-inner"),n),l=this.props.children.filter((function(e){return null!=e&&"boolean"!=typeof e}));if(l.every((function(e){return e.type===C})))return a.a.createElement("div",{className:o,onMouseEnter:this.hoverStart,onMouseLeave:this.hoverEnd},this.renderItems(l,s));if(l[0]instanceof Array){var c=l[0],u=l[1],d=l[2];return a.a.createElement("div",{className:o,onMouseEnter:this.hoverStart,onMouseLeave:this.hoverEnd},this.renderItems(c,s),u,d)}var p=l[0],h=a.a.cloneElement(p,{onClickHandler:function(t){"function"==typeof p.props.onClickHandler&&e.setState({indicatorClicked:!0},(function(){return p.props.onClickHandler(t)}))}}),f=l[1],v=l[2],m=l[3];return a.a.createElement("div",{className:o,onMouseEnter:this.hoverStart,onMouseLeave:this.hoverEnd,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd},h,this.renderItems(f,s),v,m)},t}(a.a.Component));T.propTypes={activeIndex:g.a.number,next:g.a.func.isRequired,previous:g.a.func.isRequired,keyboard:g.a.bool,pause:g.a.oneOf(["hover",!1]),ride:g.a.oneOf(["carousel"]),interval:g.a.oneOfType([g.a.number,g.a.string,g.a.bool]),children:g.a.array,mouseEnter:g.a.func,mouseLeave:g.a.func,slide:g.a.bool,cssModule:g.a.object,className:g.a.string,enableTouch:g.a.bool},T.defaultProps={interval:5e3,pause:"hover",keyboard:!0,slide:!0,enableTouch:!0},T.childContextTypes={direction:g.a.string};var j=T,S=(n("rGqo"),n("yt8O"),n("hhXQ"),function(e){var t=e.items,n=e.activeIndex,r=e.cssModule,i=e.onClickHandler,o=e.className,s=Object(O.d)(y()(o,"carousel-indicators"),r),l=t.map((function(e,t){var o=Object(O.d)(y()({active:n===t}),r);return a.a.createElement("li",{key:""+(e.key||Object.values(e).join("")),onClick:function(e){e.preventDefault(),i(t)},className:o})}));return a.a.createElement("ol",{className:s},l)});S.propTypes={items:g.a.array.isRequired,activeIndex:g.a.number.isRequired,cssModule:g.a.object,onClickHandler:g.a.func.isRequired,className:g.a.string};var I=S,k=function(e){var t=e.direction,n=e.onClickHandler,r=e.cssModule,i=e.directionText,o=e.className,s=Object(O.d)(y()(o,"carousel-control-"+t),r),l=Object(O.d)(y()("carousel-control-"+t+"-icon"),r),c=Object(O.d)(y()("sr-only"),r);return a.a.createElement("a",{className:s,style:{cursor:"pointer"},role:"button",tabIndex:"0",onClick:function(e){e.preventDefault(),n()}},a.a.createElement("span",{className:l,"aria-hidden":"true"}),a.a.createElement("span",{className:c},i||t))};k.propTypes={direction:g.a.oneOf(["prev","next"]).isRequired,onClickHandler:g.a.func.isRequired,cssModule:g.a.object,directionText:g.a.string,className:g.a.string};var w=k,M=(n("BW9U"),function(e){var t=Object(r.useState)(0),n=t[0],i=t[1],o=Object(r.useState)(!1),s=o[0],l=o[1],c=[{src:e.images[0],altText:"slide1"},{src:e.images[1],altText:"slide2"},{src:e.images[2],altText:"slide3"}],u=function(){if(!s){var e=n===c.length-1?0:n+1;i(e)}},d=function(){if(!s){var e=0===n?c.length-1:n-1;i(e)}},p=c.map((function(e){return a.a.createElement(C,{onExiting:function(){return l(!0)},onExited:function(){return l(!1)},key:e.src},a.a.createElement("img",{src:e.src,alt:e.altText,style:{margin:"auto"}}))}));return a.a.createElement(j,{activeIndex:n,next:u,previous:d,style:{maxHeight:"500vh",justifyContent:"center",alignItems:"center",textAlign:"center"}},a.a.createElement(I,{items:c,activeIndex:n,onClickHandler:function(e){s||i(e)}}),p,a.a.createElement(w,{direction:"prev",directionText:"Previous",onClickHandler:d}),a.a.createElement(w,{direction:"next",directionText:"Next",onClickHandler:u}))});t.default=function(e){var t=e.pageContext,n=t.year+" · "+t.devtime;return a.a.createElement(i.a,null,a.a.createElement(l.a,{title:t.name}),a.a.createElement(o.a,{className:"mobilescale",style:{padding:"15vh",paddingBottom:"10vh",paddingTop:"10vh",paddingRight:"28vh"}},a.a.createElement(u.a,{height:"45vh",style:{position:"absolute",maxWidth:"85%",float:"left"},params:{particles:{number:{value:5},size:{value:2}}}}),a.a.createElement(s.a,{lg:"6",className:"blog"},a.a.createElement("h1",{style:{fontWeight:"700",fontSize:"5rem",marginLeft:"1.55vh"}},t.name),a.a.createElement("h4",{style:{marginLeft:"3vh",fontSize:"2rem",fontWeight:"500",color:"white"}},t.hackathon),a.a.createElement("h5",{style:{marginLeft:"3vh",fontWeight:"400",color:"#A3D7E8"}},n),a.a.createElement("div",null,a.a.createElement("a",{href:t.link,style:{display:"inline"}},a.a.createElement("div",{style:{backgroundColor:"#8BDDBD",marginLeft:"3vh",padding:"0.5vh",width:"15vh",borderRadius:50,textAlign:"center",marginTop:"1.5vh",display:"inline-block"}},a.a.createElement("h5",{style:{fontWeight:"500 ",display:"inline",color:"#2C2F33"}},"Link"))),a.a.createElement("a",{href:t.git,style:{color:"black",textDecoration:"none"}},a.a.createElement("img",{src:"/images/GitHub-Mark-Light-64px.png",height:"28vh",style:{marginTop:"2vh",marginLeft:"2vh"},alt:"githubicon"})))),a.a.createElement(s.a,{lg:"6"},a.a.createElement("h5",{style:{color:"white",fontWeight:"300"}},a.a.createElement("br",null),a.a.createElement("br",null),t.description))),a.a.createElement(o.a,{className:"mobilescale",style:{margin:"auto",padding:"10vh",paddingTop:"13vh",backgroundColor:"#FFF",paddingRight:"28vh"}},a.a.createElement(s.a,{lg:"6",style:{margin:"auto",paddingBottom:"4.5vh"}},a.a.createElement(M,{images:t.image})),a.a.createElement(s.a,{lg:"6"},a.a.createElement("iframe",{width:"100%",height:"450vh !important",frameBorder:"0",src:t.demo}))),a.a.createElement(o.a,{className:"mobilescale",style:{backgroundColor:"#FFF",padding:"15vh",paddingTop:0,paddingRight:"28vh"}},a.a.createElement(s.a,{lg:"6"},a.a.createElement("h2",{style:{fontWeight:"600"}},"Contributions"),a.a.createElement("h4",{style:{fontWeight:300}},t.role,a.a.createElement("br",null),t.tech,a.a.createElement("br",null))),a.a.createElement(s.a,{lg:"6"},a.a.createElement("h5",{style:{color:"gray",fontWeight:"300"}},t.duties))),a.a.createElement("section",{style:{height:"2vh"}},a.a.createElement("div",{className:"waveG wave1"}),a.a.createElement("div",{className:"waveG wave2"}),a.a.createElement("div",{className:"waveG wave3"})))}},JX7q:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},OGtf:function(e,t,n){var r=n("XKFU"),a=n("eeVq"),i=n("vhPU"),o=/"/g,s=function(e,t,n,r){var a=String(i(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),r(r.P+r.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},PAGr:function(e,t,n){"use strict";n("hHhE"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),t.__esModule=!0,t.default=void 0;o(n("17x9"));var r=o(n("q1tI")),a=n("i8i4"),i=o(n("UnXY"));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var t,n;function o(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).handleEnter=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onEnter",0,n)},t.handleEntering=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onEntering",0,n)},t.handleEntered=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onEntered",0,n)},t.handleExit=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onExit",1,n)},t.handleExiting=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onExiting",1,n)},t.handleExited=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onExited",1,n)},t}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=o.prototype;return s.handleLifecycle=function(e,t,n){var i,o=this.props.children,s=r.default.Children.toArray(o)[t];s.props[e]&&(i=s.props)[e].apply(i,n),this.props[e]&&this.props[e]((0,a.findDOMNode)(this))},s.render=function(){var e=this.props,t=e.children,n=e.in,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["children","in"]),o=r.default.Children.toArray(t),s=o[0],l=o[1];return delete a.onEnter,delete a.onEntering,delete a.onEntered,delete a.onExit,delete a.onExiting,delete a.onExited,r.default.createElement(i.default,a,n?r.default.cloneElement(s,{key:"first",onEnter:this.handleEnter,onEntering:this.handleEntering,onEntered:this.handleEntered}):r.default.cloneElement(l,{key:"second",onEnter:this.handleExit,onEntering:this.handleExiting,onEntered:this.handleExited}))},o}(r.default.Component);s.propTypes={};var l=s;t.default=l,e.exports=t.default},S3Uj:function(e,t,n){"use strict";n("hHhE"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("HAE/"),t.__esModule=!0,t.default=t.EXITING=t.ENTERED=t.ENTERING=t.EXITED=t.UNMOUNTED=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n("17x9")),a=s(n("q1tI")),i=s(n("i8i4")),o=n("94VI");n("xfxO");function s(e){return e&&e.__esModule?e:{default:e}}t.UNMOUNTED="unmounted";t.EXITED="exited";t.ENTERING="entering";t.ENTERED="entered";t.EXITING="exiting";var l=function(e){var t,n;function r(t,n){var r;r=e.call(this,t,n)||this;var a,i=n.transitionGroup,o=i&&!i.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(a="exited",r.appearStatus="entering"):a="entered":a=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",r.state={status:a},r.nextCallback=null,r}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.getChildContext=function(){return{transitionGroup:null}},r.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null},o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},o.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=i.default.findDOMNode(this);"entering"===t?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},o.performEnter=function(e,t){var n=this,r=this.props.enter,a=this.context.transitionGroup?this.context.transitionGroup.isMounting:t,i=this.getTimeouts(),o=a?i.appear:i.enter;t||r?(this.props.onEnter(e,a),this.safeSetState({status:"entering"},(function(){n.props.onEntering(e,a),n.onTransitionEnd(e,o,(function(){n.safeSetState({status:"entered"},(function(){n.props.onEntered(e,a)}))}))}))):this.safeSetState({status:"entered"},(function(){n.props.onEntered(e)}))},o.performExit=function(e){var t=this,n=this.props.exit,r=this.getTimeouts();n?(this.props.onExit(e),this.safeSetState({status:"exiting"},(function(){t.props.onExiting(e),t.onTransitionEnd(e,r.exit,(function(){t.safeSetState({status:"exited"},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:"exited"},(function(){t.props.onExited(e)}))},o.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},o.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},o.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var r=null==t&&!this.props.addEndListener;e&&!r?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},o.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,r=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,["children"]);if(delete r.in,delete r.mountOnEnter,delete r.unmountOnExit,delete r.appear,delete r.enter,delete r.exit,delete r.timeout,delete r.addEndListener,delete r.onEnter,delete r.onEntering,delete r.onEntered,delete r.onExit,delete r.onExiting,delete r.onExited,"function"==typeof n)return n(e,r);var i=a.default.Children.only(n);return a.default.cloneElement(i,r)},r}(a.default.Component);function c(){}l.contextTypes={transitionGroup:r.object},l.childContextTypes={transitionGroup:function(){}},l.propTypes={},l.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:c,onEntering:c,onEntered:c,onExit:c,onExiting:c,onExited:c},l.UNMOUNTED=0,l.EXITED=1,l.ENTERING=2,l.ENTERED=3,l.EXITING=4;var u=(0,o.polyfill)(l);t.default=u},Si88:function(e,t,n){"use strict";n("KKXr"),n("8+KV"),n("hHhE"),n("91GP"),n("HAE/"),t.__esModule=!0,t.default=void 0;!function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}t.default=e}(n("17x9"));var r=s(n("ycFn")),a=s(n("VOcB")),i=s(n("q1tI")),o=s(n("S3Uj"));n("xfxO");function s(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,r.default)(e,t)}))},u=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,a.default)(e,t)}))},d=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).onEnter=function(e,n){var r=t.getClassNames(n?"appear":"enter").className;t.removeClasses(e,"exit"),c(e,r),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var r=t.getClassNames(n?"appear":"enter").activeClassName;t.reflowAndAddClass(e,r),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var r=t.getClassNames("appear").doneClassName,a=t.getClassNames("enter").doneClassName,i=n?r+" "+a:a;t.removeClasses(e,n?"appear":"enter"),c(e,i),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.getClassNames("exit").className;t.removeClasses(e,"appear"),t.removeClasses(e,"enter"),c(e,n),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.getClassNames("exit").activeClassName;t.reflowAndAddClass(e,n),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.getClassNames("exit").doneClassName;t.removeClasses(e,"exit"),c(e,n),t.props.onExited&&t.props.onExited(e)},t.getClassNames=function(e){var n=t.props.classNames,r="string"==typeof n,a=r?(r&&n?n+"-":"")+e:n[e];return{className:a,activeClassName:r?a+"-active":n[e+"Active"],doneClassName:r?a+"-done":n[e+"Done"]}},t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=r.prototype;return a.removeClasses=function(e,t){var n=this.getClassNames(t),r=n.className,a=n.activeClassName,i=n.doneClassName;r&&u(e,r),a&&u(e,a),i&&u(e,i)},a.reflowAndAddClass=function(e,t){t&&(e&&e.scrollTop,c(e,t))},a.render=function(){var e=l({},this.props);return delete e.classNames,i.default.createElement(o.default,l({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},r}(i.default.Component);d.defaultProps={classNames:""},d.propTypes={};var p=d;t.default=p,e.exports=t.default},UExd:function(e,t,n){var r=n("nh4g"),a=n("DVgA"),i=n("aCFj"),o=n("UqcF").f;e.exports=function(e){return function(t){for(var n,s=i(t),l=a(s),c=l.length,u=0,d=[];c>u;)n=l[u++],r&&!o.call(s,n)||d.push(e?[n,s[n]]:s[n]);return d}}},UnXY:function(e,t,n){"use strict";n("2Spj"),n("bWfx"),n("hhXQ"),n("hHhE"),n("91GP"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),t.__esModule=!0,t.default=void 0;var r=s(n("17x9")),a=s(n("q1tI")),i=n("94VI"),o=n("8PcY");function s(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},d=function(e){var t,n;function r(t,n){var r,a=(r=e.call(this,t,n)||this).handleExited.bind(c(c(r)));return r.state={handleExited:a,firstRender:!0},r}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.getChildContext=function(){return{transitionGroup:{isMounting:!this.appeared}}},i.componentDidMount=function(){this.appeared=!0,this.mounted=!0},i.componentWillUnmount=function(){this.mounted=!1},r.getDerivedStateFromProps=function(e,t){var n=t.children,r=t.handleExited;return{children:t.firstRender?(0,o.getInitialChildMapping)(e,r):(0,o.getNextChildMapping)(e,n,r),firstRender:!1}},i.handleExited=function(e,t){var n=(0,o.getChildMapping)(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=l({},t.children);return delete n[e.key],{children:n}})))},i.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["component","childFactory"]),i=u(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?i:a.default.createElement(t,r,i)},r}(a.default.Component);d.childContextTypes={transitionGroup:r.default.object.isRequired},d.propTypes={},d.defaultProps={component:"div",childFactory:function(e){return e}};var p=(0,i.polyfill)(d);t.default=p,e.exports=t.default},VOcB:function(e,t,n){"use strict";function r(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}n("Oyvg"),n("pIFo"),e.exports=function(e,t){e.classList?e.classList.remove(t):"string"==typeof e.className?e.className=r(e.className,t):e.setAttribute("class",r(e.className&&e.className.baseVal||"",t))}},dI71:function(e,t,n){"use strict";function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",(function(){return r}))},hhXQ:function(e,t,n){var r=n("XKFU"),a=n("UExd")(!1);r(r.S,"Object",{values:function(e){return a(e)}})},rhny:function(e,t,n){"use strict";n("8+KV");var r=n("wx14"),a=n("zLVn"),i=n("q1tI"),o=n.n(i),s=n("17x9"),l=n.n(s),c=n("TSYQ"),u=n.n(c),d=n("33Jr"),p=l.a.oneOfType([l.a.number,l.a.string]),h=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:p,offset:p})]),f={tag:d.e,xs:h,sm:h,md:h,lg:h,xl:h,className:l.a.string,cssModule:l.a.object,widths:l.a.array},v={tag:"div",widths:["xs","sm","md","lg","xl"]},m=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},E=function(e){var t=e.className,n=e.cssModule,i=e.widths,s=e.tag,l=Object(a.a)(e,["className","cssModule","widths","tag"]),c=[];i.forEach((function(t,r){var a=e[t];if(delete l[t],a||""===a){var i=!r;if(Object(d.c)(a)){var o,s=i?"-":"-"+t+"-",p=m(i,t,a.size);c.push(Object(d.d)(u()(((o={})[p]=a.size||""===a.size,o["order"+s+a.order]=a.order||0===a.order,o["offset"+s+a.offset]=a.offset||0===a.offset,o)),n))}else{var h=m(i,t,a);c.push(h)}}})),c.length||c.push("col");var p=Object(d.d)(u()(t,c),n);return o.a.createElement(s,Object(r.a)({},l,{className:p}))};E.propTypes=f,E.defaultProps=v,t.a=E},tUrg:function(e,t,n){"use strict";n("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},xfxO:function(e,t,n){"use strict";t.__esModule=!0,t.classNamesShape=t.timeoutsShape=void 0;var r;(r=n("17x9"))&&r.__esModule;t.timeoutsShape=null;t.classNamesShape=null},yD6e:function(e,t,n){"use strict";n("V+eJ"),t.__esModule=!0,t.default=function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")},e.exports=t.default},ycFn:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=function(e,t){e.classList?e.classList.add(t):(0,a.default)(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))};var a=r(n("yD6e"));e.exports=t.default}}]);
//# sourceMappingURL=component---src-templates-projinfopage-js-6a1a6bcc3924f34c4a61.js.map