(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{6582:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,a=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var e=N();if(e&&e.has(t))return e.get(t);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var r=o?Object.getOwnPropertyDescriptor(t,a):null;r&&(r.get||r.set)?Object.defineProperty(n,a,r):n[a]=t[a]}n.default=t,e&&e.set(t,n);return n}(n(0)),r=S(n(7)),i=S(n(402)),s=S(n(19)),u=n(54),l=S(n(9736)),d=S(n(12)),c=S(n(5641)),f=S(n(43)),p=S(n(13)),h=S(n(14)),v=n(1),m=S(n(2)),y=S(n(9639)),g=S(n(9635)),b=S(n(9740)),_=S(n(9741));function S(t){return t&&t.__esModule?t:{default:t}}function N(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return N=function(){return t},t}function P(t,e,n,a){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=t&&t.defaultProps,i=arguments.length-3;if(e||0===i||(e={children:void 0}),1===i)e.children=a;else if(i>1){for(var s=new Array(i),u=0;u<i;u++)s[u]=arguments[u+3];e.children=s}if(e&&r)for(var l in r)void 0===e[l]&&(e[l]=r[l]);else e||(e=r||{});return{$$typeof:o,type:t,key:void 0===n?null:""+n,ref:null,props:e,_owner:null}}var T=function(t){var e=t.step,n=t.children;return P(a.Fragment,{},void 0,P(f.default,{className:y.default.sectionSubheader},void 0,m.default.Messages.STEP_NUMBER.format({number:e})),P(p.default,{className:y.default.sectionSubtitle,size:p.default.Sizes.SIZE_24},void 0,n))};T.displayName="InstructionStep";var O=function(t){var e=t.pin,n=t.timeRemaining;return P(a.Fragment,{},void 0,P(p.default,{className:y.default.pinNumber},void 0,e),P(p.default,{className:y.default.pinExpiresText,tag:"strong"},void 0,n))};O.displayName="PinDetails";var w=function(t){var e,n;function o(){for(var e,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))||this).state={pin:"",currentTime:(0,r.default)(),endTime:null,loading:!0,errorMessage:null},e.tick=function(){var t=e.state.endTime;e.setState({currentTime:(0,r.default)()}),null!=t&&(0,r.default)().isAfter(t)&&e.interval.stop()},e.getMinutesLeftText=function(){var t=e.state.endTime;return e.state.loading?m.default.Messages.LOADING_YOUR_PIN:null!=t&&(0,r.default)().isAfter(t)?m.default.Messages.YOUR_PIN_IS_EXPIRED:null!=t?m.default.Messages.YOUR_PIN_EXPIRES.format({time:t.fromNow()}):void 0},e}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var a=o.prototype;return a.componentDidMount=function(){var t=this,e=i.default.parse(this.props.location.search),n=e.code,o=e.state;h.default.track(v.AnalyticEvents.ACCOUNT_LINK_STEP,{previous_step:"microsoft auth",current_step:"PIN code display",session_id:o,platform_type:v.PlatformTypes.XBOX}),r.default.locale(window.navigator.userLanguage||window.navigator.language),s.default.post({url:v.Endpoints.CONNECTIONS_CALLBACK_CONTINUATION("xbox"),body:{code:n,state:o}}).then((function(e){t.setState({pin:e.body.short_code,currentTime:(0,r.default)(),endTime:(0,r.default)(e.body.expires_at),loading:!1}),t.interval=new u.Interval,t.interval.start(1e3,t.tick)})).catch((function(e){var n;try{n=e.body.message}catch(t){n=String(e)}h.default.track(v.AnalyticEvents.ACCOUNT_LINK_FAILED,{error_message:n,status_code:e.status,link_method:"pin",current_step:"PIN code display",platform_type:v.PlatformTypes.XBOX}),t.setState({errorMessage:n})}))},a.componentWillUnmount=function(){null!=this.interval&&this.interval.stop()},a.handleDone=function(){window.location=v.Routes.CONNECTIONS(v.PlatformTypes.XBOX)},a.goBack=function(){window.history.back()},a.renderXboxButtons=function(){return P("div",{className:g.default.xboxButtonContainer},void 0,P(l.default.Button,{type:l.default.Button.A,text:m.default.Messages.CLOSE,style:g.default.gamepadButton,onClick:this.handleDone}),this.renderErrorMessage())},a.renderErrorMessage=function(){var t=this.state.errorMessage;return null==t?null:P("div",{className:g.default.errorMessageContainer},void 0,P(c.default,{className:g.default.errorMessageIcon}),P("div",{className:g.default.errorMessage},void 0,t))},a.renderContent=function(){var t=this.state.pin,e=null==t?null:P(O,{pin:t,timeRemaining:this.getMinutesLeftText()});return P("div",{className:g.default.pageWrapper},void 0,P("img",{alt:"Discord",className:g.default.logo,src:b.default}),P(d.default,{className:g.default.container,justify:d.default.Justify.CENTER,align:d.default.Align.CENTER},void 0,P(d.default.Child,{className:y.default.leftPanel},void 0,e,P(f.default,{className:y.default.sectionTitle},void 0,m.default.Messages.LINK_YOUR_DISCORD_ACCOUNT),P(T,{step:1},void 0,m.default.Messages.XBOX_PIN_STEP1),P(T,{step:2},void 0,m.default.Messages.XBOX_PIN_STEP2),P(T,{step:3},void 0,m.default.Messages.XBOX_PIN_STEP3),this.renderXboxButtons()),P(d.default.Child,{className:g.default.rightPanel},void 0,P("img",{alt:"",className:g.default.image,src:_.default}))))},a.render=function(){return P(l.default,{onAPressed:this.handleDone,onBPressed:this.goBack},void 0,this.renderContent())},o}(a.PureComponent);w.displayName="XboxPin";var k=w;e.default=k},9713:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.XBOX=void 0;var o,a=n(9739),r=(o=a)&&o.__esModule?o:{default:o};e.XBOX=r.default,e.default={XBOX:r.default}},9736:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,a=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var e=f();if(e&&e.has(t))return e.get(t);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var r=o?Object.getOwnPropertyDescriptor(t,a):null;r&&(r.get||r.set)?Object.defineProperty(n,a,r):n[a]=t[a]}n.default=t,e&&e.set(t,n);return n}(n(0)),r=c(n(9737)),i=c(n(23)),s=c(n(5642)),u=c(n(5643)),l=n(1),d=c(n(9634));function c(t){return t&&t.__esModule?t:{default:t}}function f(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return f=function(){return t},t}function p(t,e,n,a){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=t&&t.defaultProps,i=arguments.length-3;if(e||0===i||(e={children:void 0}),1===i)e.children=a;else if(i>1){for(var s=new Array(i),u=0;u<i;u++)s[u]=arguments[u+3];e.children=s}if(e&&r)for(var l in r)void 0===e[l]&&(e[l]=r[l]);else e||(e=r||{});return{$$typeof:o,type:t,key:void 0===n?null:""+n,ref:null,props:e,_owner:null}}function h(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var v={A:{Icon:s.default,color:l.Colors.STATUS_GREEN_400},B:{Icon:u.default,color:l.Colors.STATUS_RED_400}},m=function(t){function e(){return t.apply(this,arguments)||this}return h(e,t),e.prototype.render=function(){var t=this.props,e=t.type,n=t.text,o=t.style,a=t.onClick,r=null!=a?{cursor:"pointer"}:void 0,s=e.Icon;return p(i.default,{className:d.default.gamepadButtonContainer,style:r,onClick:a},void 0,p(s,{className:o,color:e.color,backgroundColor:l.Colors.PRIMARY_DARK_600}),p("div",{className:d.default.gamepadButtonText},void 0,n))},e}(a.Component);m.displayName="GamepadButton",m.A=v.A,m.B=v.B;var y=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))||this).state={gamepadConnected:!1},e.setGamepadConnected=function(){e.setState({gamepadConnected:!0})},e.setGamepadDisconnected=function(){e.setState({gamepadConnected:!1})},e}return h(e,t),e.prototype.render=function(){var t=this.props,e=t.onAPressed,n=t.onBPressed,o=t.children;if(null==o)return null;var i=a.cloneElement(a.Children.only(o),{hasGamepad:this.state.gamepadConnected});return p(r.default,{onA:e,onB:n,onConnect:this.setGamepadConnected,onDisconnect:this.setGamepadDisconnected},void 0,i)},e}(a.PureComponent);y.displayName="Gamepad",y.Button=m;var g=y;e.default=g},9737:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.layouts=e.Gamepad=void 0;var o=r(n(9738)),a=r(n(9713));function r(t){return t&&t.__esModule?t:{default:t}}o.default.layouts=a.default,e.Gamepad=o.default,e.layouts=a.default,e.default=o.default},9738:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,a=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=n(0),i=(o=r)&&o.__esModule?o:{default:o},s=n(9713);var u=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return o.padState={connected:!1,buttons:{A:!1,B:!1,X:!1,Y:!1,LB:!1,LT:!1,LS:!1,RB:!1,RT:!1,RS:!1,Start:!1,Back:!1,DPadUp:!1,DPadRight:!1,DPadDown:!1,DPadLeft:!1},axis:{LeftStickX:0,LeftStickY:0,RightStickX:0,RightStickY:0,RightTrigger:0,LeftTrigger:0}},o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),a(e,[{key:"componentDidMount",value:function(){this.mounted=!0,window&&window.requestAnimationFrame&&window.requestAnimationFrame(this.updateGamepad.bind(this))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"updateGamepad",value:function(){if(this.mounted){var t=this.props.gamepadIndex,e=navigator.getGamepads();if(e.length&&e.length>t&&e[t]){var n=e[t];this.padState.connected||(this.padState.connected=!0,this.props.onConnect(t)),this.updateAllButtons(n),this.updateAllAxis(n)}else this.padState.connected&&(this.padState.connected=!1,this.props.onDisconnect(t));window&&window.requestAnimationFrame&&window.requestAnimationFrame(this.updateGamepad.bind(this))}}},{key:"updateAllButtons",value:function(t){for(var e=0;e<t.buttons.length;++e){var n=t.buttons[e].pressed,o=t.buttons[e].value,a=this.buttonIndexToButtonName(e);this.updateButton(a,n);var r=this.buttonIndexToAxisName(e);this.updateAxis(r,o)}}},{key:"updateButton",value:function(t,e){void 0===this.padState.buttons[t]?console.error("Unknown button "+t):this.padState.buttons[t]!==e&&(this.padState.buttons[t]=e,this.props.onButtonChange(t,e),this.props["onButton"+(e?"Down":"Up")](t),e&&this.props["on"+t.replace("DPad","")]())}},{key:"updateAllAxis",value:function(t){for(var e=0;e<t.axes.length;++e){var n=this.axisIndexToAxisName(e);t.axes[e];this.updateAxis(n,t.axes[e])}}},{key:"updateAxis",value:function(t,e){if(t&&null!=e&&NaN!==e){var n="-"===t[0],o=e*(n?-1:1);if(Math.abs(o)<this.props.deadZone&&(o=0),n&&(t=t.substr(1)),this.padState.axis[t]!==o){var a=this.padState.axis[t];this.padState.axis[t]=o,this.props.onAxisChange(t,o,a),"LeftStickX"===t&&(a<=this.props.stickThreshold&&o>this.props.stickThreshold&&this.props.onRight(),a>=-this.props.stickThreshold&&o<-this.props.stickThreshold&&this.props.onLeft()),"LeftStickY"===t&&(a<=this.props.stickThreshold&&o>this.props.stickThreshold&&this.props.onUp(),a>=-this.props.stickThreshold&&o<-this.props.stickThreshold&&this.props.onDown())}}}},{key:"buttonIndexToButtonName",value:function(t){var e=this.props.layout;return e.buttons&&e.buttons.length>=t+1?e.buttons[t]:null}},{key:"buttonIndexToAxisName",value:function(t){var e=this.props.layout;return e.buttonAxis&&e.buttonAxis.length>=t+1?e.buttonAxis[t]:null}},{key:"axisIndexToAxisName",value:function(t){var e=this.props.layout;return e.axis&&e.axis.length>=t+1?e.axis[t]:null}},{key:"render",value:function(){return i.default.Children.only(this.props.children)}}]),e}(i.default.Component);u.defaultProps={layout:s.XBOX,stickThreshold:.5,deadZone:.08,gamepadIndex:0,onConnect:function(){},onDisconnect:function(){},onButtonDown:function(){},onButtonUp:function(){},onButtonChange:function(){},onAxisChange:function(){},onA:function(){},onB:function(){},onX:function(){},onY:function(){},onStart:function(){},onBack:function(){},onLT:function(){},onRT:function(){},onLB:function(){},onRB:function(){},onLS:function(){},onRS:function(){},onUp:function(){},onDown:function(){},onLeft:function(){},onRight:function(){}},e.default=u},9739:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={buttons:["A","B","X","Y","LB","RB","LT","RT","Back","Start","LS","RS","DPadUp","DPadDown","DPadLeft","DPadRight"],axis:["LeftStickX","-LeftStickY","RightStickX","-RightStickY"],buttonAxis:[null,null,null,null,null,null,"LeftTrigger","RightTrigger"]}},9740:function(t,e,n){t.exports=n.p+"02a8c6a7d718b8e215bf28e86c932176.svg"},9741:function(t,e,n){t.exports=n.p+"73f58e6829ada2677574e5e3f7a96e94.png"}}]);
//# sourceMappingURL=cce661afc9d80a3932c0.js.map