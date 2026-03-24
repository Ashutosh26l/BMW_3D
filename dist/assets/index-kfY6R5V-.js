(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Av(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var gg={exports:{}},ec={},_g={exports:{}},Ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var la=Symbol.for("react.element"),Rv=Symbol.for("react.portal"),Cv=Symbol.for("react.fragment"),Lv=Symbol.for("react.strict_mode"),Pv=Symbol.for("react.profiler"),Nv=Symbol.for("react.provider"),Dv=Symbol.for("react.context"),Iv=Symbol.for("react.forward_ref"),Uv=Symbol.for("react.suspense"),Fv=Symbol.for("react.memo"),Ov=Symbol.for("react.lazy"),ch=Symbol.iterator;function kv(n){return n===null||typeof n!="object"?null:(n=ch&&n[ch]||n["@@iterator"],typeof n=="function"?n:null)}var vg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xg=Object.assign,yg={};function Qs(n,e,t){this.props=n,this.context=e,this.refs=yg,this.updater=t||vg}Qs.prototype.isReactComponent={};Qs.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Qs.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Sg(){}Sg.prototype=Qs.prototype;function Yd(n,e,t){this.props=n,this.context=e,this.refs=yg,this.updater=t||vg}var qd=Yd.prototype=new Sg;qd.constructor=Yd;xg(qd,Qs.prototype);qd.isPureReactComponent=!0;var uh=Array.isArray,Mg=Object.prototype.hasOwnProperty,Kd={current:null},Eg={key:!0,ref:!0,__self:!0,__source:!0};function wg(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Mg.call(e,i)&&!Eg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:la,type:n,key:s,ref:o,props:r,_owner:Kd.current}}function Bv(n,e){return{$$typeof:la,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function $d(n){return typeof n=="object"&&n!==null&&n.$$typeof===la}function zv(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var dh=/\/+/g;function Ac(n,e){return typeof n=="object"&&n!==null&&n.key!=null?zv(""+n.key):e.toString(36)}function al(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case la:case Rv:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Ac(o,0):i,uh(r)?(t="",n!=null&&(t=n.replace(dh,"$&/")+"/"),al(r,e,t,"",function(c){return c})):r!=null&&($d(r)&&(r=Bv(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(dh,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",uh(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Ac(s,a);o+=al(s,e,t,l,r)}else if(l=kv(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Ac(s,a++),o+=al(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ga(n,e,t){if(n==null)return n;var i=[],r=0;return al(n,i,"","",function(s){return e.call(t,s,r++)}),i}function Hv(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var cn={current:null},ll={transition:null},Gv={ReactCurrentDispatcher:cn,ReactCurrentBatchConfig:ll,ReactCurrentOwner:Kd};function Tg(){throw Error("act(...) is not supported in production builds of React.")}Ke.Children={map:ga,forEach:function(n,e,t){ga(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return ga(n,function(){e++}),e},toArray:function(n){return ga(n,function(e){return e})||[]},only:function(n){if(!$d(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ke.Component=Qs;Ke.Fragment=Cv;Ke.Profiler=Pv;Ke.PureComponent=Yd;Ke.StrictMode=Lv;Ke.Suspense=Uv;Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gv;Ke.act=Tg;Ke.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=xg({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Kd.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Mg.call(e,l)&&!Eg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:la,type:n.type,key:r,ref:s,props:i,_owner:o}};Ke.createContext=function(n){return n={$$typeof:Dv,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Nv,_context:n},n.Consumer=n};Ke.createElement=wg;Ke.createFactory=function(n){var e=wg.bind(null,n);return e.type=n,e};Ke.createRef=function(){return{current:null}};Ke.forwardRef=function(n){return{$$typeof:Iv,render:n}};Ke.isValidElement=$d;Ke.lazy=function(n){return{$$typeof:Ov,_payload:{_status:-1,_result:n},_init:Hv}};Ke.memo=function(n,e){return{$$typeof:Fv,type:n,compare:e===void 0?null:e}};Ke.startTransition=function(n){var e=ll.transition;ll.transition={};try{n()}finally{ll.transition=e}};Ke.unstable_act=Tg;Ke.useCallback=function(n,e){return cn.current.useCallback(n,e)};Ke.useContext=function(n){return cn.current.useContext(n)};Ke.useDebugValue=function(){};Ke.useDeferredValue=function(n){return cn.current.useDeferredValue(n)};Ke.useEffect=function(n,e){return cn.current.useEffect(n,e)};Ke.useId=function(){return cn.current.useId()};Ke.useImperativeHandle=function(n,e,t){return cn.current.useImperativeHandle(n,e,t)};Ke.useInsertionEffect=function(n,e){return cn.current.useInsertionEffect(n,e)};Ke.useLayoutEffect=function(n,e){return cn.current.useLayoutEffect(n,e)};Ke.useMemo=function(n,e){return cn.current.useMemo(n,e)};Ke.useReducer=function(n,e,t){return cn.current.useReducer(n,e,t)};Ke.useRef=function(n){return cn.current.useRef(n)};Ke.useState=function(n){return cn.current.useState(n)};Ke.useSyncExternalStore=function(n,e,t){return cn.current.useSyncExternalStore(n,e,t)};Ke.useTransition=function(){return cn.current.useTransition()};Ke.version="18.3.1";_g.exports=Ke;var He=_g.exports;const Vv=Av(He);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv=He,jv=Symbol.for("react.element"),Xv=Symbol.for("react.fragment"),Yv=Object.prototype.hasOwnProperty,qv=Wv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Kv={key:!0,ref:!0,__self:!0,__source:!0};function bg(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Yv.call(e,i)&&!Kv.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:jv,type:n,key:s,ref:o,props:r,_owner:qv.current}}ec.Fragment=Xv;ec.jsx=bg;ec.jsxs=bg;gg.exports=ec;var T=gg.exports,Ou={},Ag={exports:{}},bn={},Rg={exports:{}},Cg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(I,B){var H=I.length;I.push(B);e:for(;0<H;){var Q=H-1>>>1,te=I[Q];if(0<r(te,B))I[Q]=B,I[H]=te,H=Q;else break e}}function t(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var B=I[0],H=I.pop();if(H!==B){I[0]=H;e:for(var Q=0,te=I.length,Y=te>>>1;Q<Y;){var ee=2*(Q+1)-1,ae=I[ee],he=ee+1,ge=I[he];if(0>r(ae,H))he<te&&0>r(ge,ae)?(I[Q]=ge,I[he]=H,Q=he):(I[Q]=ae,I[ee]=H,Q=ee);else if(he<te&&0>r(ge,H))I[Q]=ge,I[he]=H,Q=he;else break e}}return B}function r(I,B){var H=I.sortIndex-B.sortIndex;return H!==0?H:I.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,u=3,p=!1,g=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(I){for(var B=t(c);B!==null;){if(B.callback===null)i(c);else if(B.startTime<=I)i(c),B.sortIndex=B.expirationTime,e(l,B);else break;B=t(c)}}function y(I){if(x=!1,v(I),!g)if(t(l)!==null)g=!0,V(C);else{var B=t(c);B!==null&&J(y,B.startTime-I)}}function C(I,B){g=!1,x&&(x=!1,h(D),D=-1),p=!0;var H=u;try{for(v(B),f=t(l);f!==null&&(!(f.expirationTime>B)||I&&!O());){var Q=f.callback;if(typeof Q=="function"){f.callback=null,u=f.priorityLevel;var te=Q(f.expirationTime<=B);B=n.unstable_now(),typeof te=="function"?f.callback=te:f===t(l)&&i(l),v(B)}else i(l);f=t(l)}if(f!==null)var Y=!0;else{var ee=t(c);ee!==null&&J(y,ee.startTime-B),Y=!1}return Y}finally{f=null,u=H,p=!1}}var R=!1,A=null,D=-1,M=5,E=-1;function O(){return!(n.unstable_now()-E<M)}function z(){if(A!==null){var I=n.unstable_now();E=I;var B=!0;try{B=A(!0,I)}finally{B?$():(R=!1,A=null)}}else R=!1}var $;if(typeof _=="function")$=function(){_(z)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,G=P.port2;P.port1.onmessage=z,$=function(){G.postMessage(null)}}else $=function(){m(z,0)};function V(I){A=I,R||(R=!0,$())}function J(I,B){D=m(function(){I(n.unstable_now())},B)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(I){I.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,V(C))},n.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<I?Math.floor(1e3/I):5},n.unstable_getCurrentPriorityLevel=function(){return u},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(I){switch(u){case 1:case 2:case 3:var B=3;break;default:B=u}var H=u;u=B;try{return I()}finally{u=H}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(I,B){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var H=u;u=I;try{return B()}finally{u=H}},n.unstable_scheduleCallback=function(I,B,H){var Q=n.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?Q+H:Q):H=Q,I){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=H+te,I={id:d++,callback:B,priorityLevel:I,startTime:H,expirationTime:te,sortIndex:-1},H>Q?(I.sortIndex=H,e(c,I),t(l)===null&&I===t(c)&&(x?(h(D),D=-1):x=!0,J(y,H-Q))):(I.sortIndex=te,e(l,I),g||p||(g=!0,V(C))),I},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(I){var B=u;return function(){var H=u;u=B;try{return I.apply(this,arguments)}finally{u=H}}}})(Cg);Rg.exports=Cg;var $v=Rg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zv=He,Tn=$v;function ie(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lg=new Set,Ho={};function Yr(n,e){Fs(n,e),Fs(n+"Capture",e)}function Fs(n,e){for(Ho[n]=e,n=0;n<e.length;n++)Lg.add(e[n])}var Ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ku=Object.prototype.hasOwnProperty,Qv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fh={},hh={};function Jv(n){return ku.call(hh,n)?!0:ku.call(fh,n)?!1:Qv.test(n)?hh[n]=!0:(fh[n]=!0,!1)}function ex(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function tx(n,e,t,i){if(e===null||typeof e>"u"||ex(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function un(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){jt[n]=new un(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];jt[e]=new un(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){jt[n]=new un(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){jt[n]=new un(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){jt[n]=new un(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){jt[n]=new un(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){jt[n]=new un(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){jt[n]=new un(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){jt[n]=new un(n,5,!1,n.toLowerCase(),null,!1,!1)});var Zd=/[\-:]([a-z])/g;function Qd(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Zd,Qd);jt[e]=new un(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Zd,Qd);jt[e]=new un(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Zd,Qd);jt[e]=new un(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){jt[n]=new un(n,1,!1,n.toLowerCase(),null,!1,!1)});jt.xlinkHref=new un("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){jt[n]=new un(n,1,!1,n.toLowerCase(),null,!0,!0)});function Jd(n,e,t,i){var r=jt.hasOwnProperty(e)?jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(tx(e,t,r,i)&&(t=null),i||r===null?Jv(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Ii=Zv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_a=Symbol.for("react.element"),hs=Symbol.for("react.portal"),ps=Symbol.for("react.fragment"),ef=Symbol.for("react.strict_mode"),Bu=Symbol.for("react.profiler"),Pg=Symbol.for("react.provider"),Ng=Symbol.for("react.context"),tf=Symbol.for("react.forward_ref"),zu=Symbol.for("react.suspense"),Hu=Symbol.for("react.suspense_list"),nf=Symbol.for("react.memo"),Gi=Symbol.for("react.lazy"),Dg=Symbol.for("react.offscreen"),ph=Symbol.iterator;function ao(n){return n===null||typeof n!="object"?null:(n=ph&&n[ph]||n["@@iterator"],typeof n=="function"?n:null)}var yt=Object.assign,Rc;function wo(n){if(Rc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Rc=e&&e[1]||""}return`
`+Rc+n}var Cc=!1;function Lc(n,e){if(!n||Cc)return"";Cc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Cc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?wo(n):""}function nx(n){switch(n.tag){case 5:return wo(n.type);case 16:return wo("Lazy");case 13:return wo("Suspense");case 19:return wo("SuspenseList");case 0:case 2:case 15:return n=Lc(n.type,!1),n;case 11:return n=Lc(n.type.render,!1),n;case 1:return n=Lc(n.type,!0),n;default:return""}}function Gu(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ps:return"Fragment";case hs:return"Portal";case Bu:return"Profiler";case ef:return"StrictMode";case zu:return"Suspense";case Hu:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Ng:return(n.displayName||"Context")+".Consumer";case Pg:return(n._context.displayName||"Context")+".Provider";case tf:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case nf:return e=n.displayName||null,e!==null?e:Gu(n.type)||"Memo";case Gi:e=n._payload,n=n._init;try{return Gu(n(e))}catch{}}return null}function ix(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gu(e);case 8:return e===ef?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function cr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ig(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function rx(n){var e=Ig(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function va(n){n._valueTracker||(n._valueTracker=rx(n))}function Ug(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Ig(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function El(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Vu(n,e){var t=e.checked;return yt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function mh(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=cr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Fg(n,e){e=e.checked,e!=null&&Jd(n,"checked",e,!1)}function Wu(n,e){Fg(n,e);var t=cr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?ju(n,e.type,t):e.hasOwnProperty("defaultValue")&&ju(n,e.type,cr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function gh(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function ju(n,e,t){(e!=="number"||El(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var To=Array.isArray;function As(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+cr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Xu(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return yt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function _h(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ie(92));if(To(t)){if(1<t.length)throw Error(ie(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:cr(t)}}function Og(n,e){var t=cr(e.value),i=cr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function vh(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function kg(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yu(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?kg(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var xa,Bg=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(xa=xa||document.createElement("div"),xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xa.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Go(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sx=["Webkit","ms","Moz","O"];Object.keys(Ro).forEach(function(n){sx.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Ro[e]=Ro[n]})});function zg(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Ro.hasOwnProperty(n)&&Ro[n]?(""+e).trim():e+"px"}function Hg(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=zg(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var ox=yt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qu(n,e){if(e){if(ox[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function Ku(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $u=null;function rf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Zu=null,Rs=null,Cs=null;function xh(n){if(n=da(n)){if(typeof Zu!="function")throw Error(ie(280));var e=n.stateNode;e&&(e=sc(e),Zu(n.stateNode,n.type,e))}}function Gg(n){Rs?Cs?Cs.push(n):Cs=[n]:Rs=n}function Vg(){if(Rs){var n=Rs,e=Cs;if(Cs=Rs=null,xh(n),e)for(n=0;n<e.length;n++)xh(e[n])}}function Wg(n,e){return n(e)}function jg(){}var Pc=!1;function Xg(n,e,t){if(Pc)return n(e,t);Pc=!0;try{return Wg(n,e,t)}finally{Pc=!1,(Rs!==null||Cs!==null)&&(jg(),Vg())}}function Vo(n,e){var t=n.stateNode;if(t===null)return null;var i=sc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ie(231,e,typeof t));return t}var Qu=!1;if(Ci)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){Qu=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{Qu=!1}function ax(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(d){this.onError(d)}}var Co=!1,wl=null,Tl=!1,Ju=null,lx={onError:function(n){Co=!0,wl=n}};function cx(n,e,t,i,r,s,o,a,l){Co=!1,wl=null,ax.apply(lx,arguments)}function ux(n,e,t,i,r,s,o,a,l){if(cx.apply(this,arguments),Co){if(Co){var c=wl;Co=!1,wl=null}else throw Error(ie(198));Tl||(Tl=!0,Ju=c)}}function qr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Yg(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function yh(n){if(qr(n)!==n)throw Error(ie(188))}function dx(n){var e=n.alternate;if(!e){if(e=qr(n),e===null)throw Error(ie(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return yh(r),n;if(s===i)return yh(r),e;s=s.sibling}throw Error(ie(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(t.alternate!==i)throw Error(ie(190))}if(t.tag!==3)throw Error(ie(188));return t.stateNode.current===t?n:e}function qg(n){return n=dx(n),n!==null?Kg(n):null}function Kg(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Kg(n);if(e!==null)return e;n=n.sibling}return null}var $g=Tn.unstable_scheduleCallback,Sh=Tn.unstable_cancelCallback,fx=Tn.unstable_shouldYield,hx=Tn.unstable_requestPaint,Tt=Tn.unstable_now,px=Tn.unstable_getCurrentPriorityLevel,sf=Tn.unstable_ImmediatePriority,Zg=Tn.unstable_UserBlockingPriority,bl=Tn.unstable_NormalPriority,mx=Tn.unstable_LowPriority,Qg=Tn.unstable_IdlePriority,tc=null,li=null;function gx(n){if(li&&typeof li.onCommitFiberRoot=="function")try{li.onCommitFiberRoot(tc,n,void 0,(n.current.flags&128)===128)}catch{}}var Kn=Math.clz32?Math.clz32:xx,_x=Math.log,vx=Math.LN2;function xx(n){return n>>>=0,n===0?32:31-(_x(n)/vx|0)|0}var ya=64,Sa=4194304;function bo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Al(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=bo(a):(s&=o,s!==0&&(i=bo(s)))}else o=t&~r,o!==0?i=bo(o):s!==0&&(i=bo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Kn(e),r=1<<t,i|=n[t],e&=~r;return i}function yx(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sx(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Kn(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=yx(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function ed(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Jg(){var n=ya;return ya<<=1,!(ya&4194240)&&(ya=64),n}function Nc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ca(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Kn(e),n[e]=t}function Mx(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Kn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function of(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Kn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var it=0;function e0(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var t0,af,n0,i0,r0,td=!1,Ma=[],Qi=null,Ji=null,er=null,Wo=new Map,jo=new Map,ji=[],Ex="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mh(n,e){switch(n){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":Wo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(e.pointerId)}}function co(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=da(e),e!==null&&af(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function wx(n,e,t,i,r){switch(e){case"focusin":return Qi=co(Qi,n,e,t,i,r),!0;case"dragenter":return Ji=co(Ji,n,e,t,i,r),!0;case"mouseover":return er=co(er,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Wo.set(s,co(Wo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,jo.set(s,co(jo.get(s)||null,n,e,t,i,r)),!0}return!1}function s0(n){var e=Rr(n.target);if(e!==null){var t=qr(e);if(t!==null){if(e=t.tag,e===13){if(e=Yg(t),e!==null){n.blockedOn=e,r0(n.priority,function(){n0(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function cl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=nd(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);$u=i,t.target.dispatchEvent(i),$u=null}else return e=da(t),e!==null&&af(e),n.blockedOn=t,!1;e.shift()}return!0}function Eh(n,e,t){cl(n)&&t.delete(e)}function Tx(){td=!1,Qi!==null&&cl(Qi)&&(Qi=null),Ji!==null&&cl(Ji)&&(Ji=null),er!==null&&cl(er)&&(er=null),Wo.forEach(Eh),jo.forEach(Eh)}function uo(n,e){n.blockedOn===e&&(n.blockedOn=null,td||(td=!0,Tn.unstable_scheduleCallback(Tn.unstable_NormalPriority,Tx)))}function Xo(n){function e(r){return uo(r,n)}if(0<Ma.length){uo(Ma[0],n);for(var t=1;t<Ma.length;t++){var i=Ma[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Qi!==null&&uo(Qi,n),Ji!==null&&uo(Ji,n),er!==null&&uo(er,n),Wo.forEach(e),jo.forEach(e),t=0;t<ji.length;t++)i=ji[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<ji.length&&(t=ji[0],t.blockedOn===null);)s0(t),t.blockedOn===null&&ji.shift()}var Ls=Ii.ReactCurrentBatchConfig,Rl=!0;function bx(n,e,t,i){var r=it,s=Ls.transition;Ls.transition=null;try{it=1,lf(n,e,t,i)}finally{it=r,Ls.transition=s}}function Ax(n,e,t,i){var r=it,s=Ls.transition;Ls.transition=null;try{it=4,lf(n,e,t,i)}finally{it=r,Ls.transition=s}}function lf(n,e,t,i){if(Rl){var r=nd(n,e,t,i);if(r===null)Gc(n,e,i,Cl,t),Mh(n,i);else if(wx(r,n,e,t,i))i.stopPropagation();else if(Mh(n,i),e&4&&-1<Ex.indexOf(n)){for(;r!==null;){var s=da(r);if(s!==null&&t0(s),s=nd(n,e,t,i),s===null&&Gc(n,e,i,Cl,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Gc(n,e,i,null,t)}}var Cl=null;function nd(n,e,t,i){if(Cl=null,n=rf(i),n=Rr(n),n!==null)if(e=qr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Yg(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Cl=n,null}function o0(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(px()){case sf:return 1;case Zg:return 4;case bl:case mx:return 16;case Qg:return 536870912;default:return 16}default:return 16}}var qi=null,cf=null,ul=null;function a0(){if(ul)return ul;var n,e=cf,t=e.length,i,r="value"in qi?qi.value:qi.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return ul=r.slice(n,1<i?1-i:void 0)}function dl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ea(){return!0}function wh(){return!1}function An(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ea:wh,this.isPropagationStopped=wh,this}return yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ea)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ea)},persist:function(){},isPersistent:Ea}),e}var Js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uf=An(Js),ua=yt({},Js,{view:0,detail:0}),Rx=An(ua),Dc,Ic,fo,nc=yt({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:df,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==fo&&(fo&&n.type==="mousemove"?(Dc=n.screenX-fo.screenX,Ic=n.screenY-fo.screenY):Ic=Dc=0,fo=n),Dc)},movementY:function(n){return"movementY"in n?n.movementY:Ic}}),Th=An(nc),Cx=yt({},nc,{dataTransfer:0}),Lx=An(Cx),Px=yt({},ua,{relatedTarget:0}),Uc=An(Px),Nx=yt({},Js,{animationName:0,elapsedTime:0,pseudoElement:0}),Dx=An(Nx),Ix=yt({},Js,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ux=An(Ix),Fx=yt({},Js,{data:0}),bh=An(Fx),Ox={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zx(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Bx[n])?!!e[n]:!1}function df(){return zx}var Hx=yt({},ua,{key:function(n){if(n.key){var e=Ox[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=dl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?kx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:df,charCode:function(n){return n.type==="keypress"?dl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?dl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Gx=An(Hx),Vx=yt({},nc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ah=An(Vx),Wx=yt({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:df}),jx=An(Wx),Xx=yt({},Js,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yx=An(Xx),qx=yt({},nc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Kx=An(qx),$x=[9,13,27,32],ff=Ci&&"CompositionEvent"in window,Lo=null;Ci&&"documentMode"in document&&(Lo=document.documentMode);var Zx=Ci&&"TextEvent"in window&&!Lo,l0=Ci&&(!ff||Lo&&8<Lo&&11>=Lo),Rh=" ",Ch=!1;function c0(n,e){switch(n){case"keyup":return $x.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function u0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ms=!1;function Qx(n,e){switch(n){case"compositionend":return u0(e);case"keypress":return e.which!==32?null:(Ch=!0,Rh);case"textInput":return n=e.data,n===Rh&&Ch?null:n;default:return null}}function Jx(n,e){if(ms)return n==="compositionend"||!ff&&c0(n,e)?(n=a0(),ul=cf=qi=null,ms=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return l0&&e.locale!=="ko"?null:e.data;default:return null}}var ey={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!ey[n.type]:e==="textarea"}function d0(n,e,t,i){Gg(i),e=Ll(e,"onChange"),0<e.length&&(t=new uf("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Po=null,Yo=null;function ty(n){M0(n,0)}function ic(n){var e=vs(n);if(Ug(e))return n}function ny(n,e){if(n==="change")return e}var f0=!1;if(Ci){var Fc;if(Ci){var Oc="oninput"in document;if(!Oc){var Ph=document.createElement("div");Ph.setAttribute("oninput","return;"),Oc=typeof Ph.oninput=="function"}Fc=Oc}else Fc=!1;f0=Fc&&(!document.documentMode||9<document.documentMode)}function Nh(){Po&&(Po.detachEvent("onpropertychange",h0),Yo=Po=null)}function h0(n){if(n.propertyName==="value"&&ic(Yo)){var e=[];d0(e,Yo,n,rf(n)),Xg(ty,e)}}function iy(n,e,t){n==="focusin"?(Nh(),Po=e,Yo=t,Po.attachEvent("onpropertychange",h0)):n==="focusout"&&Nh()}function ry(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ic(Yo)}function sy(n,e){if(n==="click")return ic(e)}function oy(n,e){if(n==="input"||n==="change")return ic(e)}function ay(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Qn=typeof Object.is=="function"?Object.is:ay;function qo(n,e){if(Qn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!ku.call(e,r)||!Qn(n[r],e[r]))return!1}return!0}function Dh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ih(n,e){var t=Dh(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Dh(t)}}function p0(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?p0(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function m0(){for(var n=window,e=El();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=El(n.document)}return e}function hf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function ly(n){var e=m0(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&p0(t.ownerDocument.documentElement,t)){if(i!==null&&hf(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Ih(t,s);var o=Ih(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var cy=Ci&&"documentMode"in document&&11>=document.documentMode,gs=null,id=null,No=null,rd=!1;function Uh(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;rd||gs==null||gs!==El(i)||(i=gs,"selectionStart"in i&&hf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),No&&qo(No,i)||(No=i,i=Ll(id,"onSelect"),0<i.length&&(e=new uf("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=gs)))}function wa(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var _s={animationend:wa("Animation","AnimationEnd"),animationiteration:wa("Animation","AnimationIteration"),animationstart:wa("Animation","AnimationStart"),transitionend:wa("Transition","TransitionEnd")},kc={},g0={};Ci&&(g0=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function rc(n){if(kc[n])return kc[n];if(!_s[n])return n;var e=_s[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in g0)return kc[n]=e[t];return n}var _0=rc("animationend"),v0=rc("animationiteration"),x0=rc("animationstart"),y0=rc("transitionend"),S0=new Map,Fh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(n,e){S0.set(n,e),Yr(e,[n])}for(var Bc=0;Bc<Fh.length;Bc++){var zc=Fh[Bc],uy=zc.toLowerCase(),dy=zc[0].toUpperCase()+zc.slice(1);dr(uy,"on"+dy)}dr(_0,"onAnimationEnd");dr(v0,"onAnimationIteration");dr(x0,"onAnimationStart");dr("dblclick","onDoubleClick");dr("focusin","onFocus");dr("focusout","onBlur");dr(y0,"onTransitionEnd");Fs("onMouseEnter",["mouseout","mouseover"]);Fs("onMouseLeave",["mouseout","mouseover"]);Fs("onPointerEnter",["pointerout","pointerover"]);Fs("onPointerLeave",["pointerout","pointerover"]);Yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ao));function Oh(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,ux(i,e,void 0,n),n.currentTarget=null}function M0(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Oh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Oh(r,a,c),s=l}}}if(Tl)throw n=Ju,Tl=!1,Ju=null,n}function ut(n,e){var t=e[cd];t===void 0&&(t=e[cd]=new Set);var i=n+"__bubble";t.has(i)||(E0(e,n,2,!1),t.add(i))}function Hc(n,e,t){var i=0;e&&(i|=4),E0(t,n,i,e)}var Ta="_reactListening"+Math.random().toString(36).slice(2);function Ko(n){if(!n[Ta]){n[Ta]=!0,Lg.forEach(function(t){t!=="selectionchange"&&(fy.has(t)||Hc(t,!1,n),Hc(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ta]||(e[Ta]=!0,Hc("selectionchange",!1,e))}}function E0(n,e,t,i){switch(o0(e)){case 1:var r=bx;break;case 4:r=Ax;break;default:r=lf}t=r.bind(null,e,t,n),r=void 0,!Qu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Gc(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Rr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Xg(function(){var c=s,d=rf(t),f=[];e:{var u=S0.get(n);if(u!==void 0){var p=uf,g=n;switch(n){case"keypress":if(dl(t)===0)break e;case"keydown":case"keyup":p=Gx;break;case"focusin":g="focus",p=Uc;break;case"focusout":g="blur",p=Uc;break;case"beforeblur":case"afterblur":p=Uc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Th;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Lx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=jx;break;case _0:case v0:case x0:p=Dx;break;case y0:p=Yx;break;case"scroll":p=Rx;break;case"wheel":p=Kx;break;case"copy":case"cut":case"paste":p=Ux;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Ah}var x=(e&4)!==0,m=!x&&n==="scroll",h=x?u!==null?u+"Capture":null:u;x=[];for(var _=c,v;_!==null;){v=_;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,h!==null&&(y=Vo(_,h),y!=null&&x.push($o(_,y,v)))),m)break;_=_.return}0<x.length&&(u=new p(u,g,null,t,d),f.push({event:u,listeners:x}))}}if(!(e&7)){e:{if(u=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",u&&t!==$u&&(g=t.relatedTarget||t.fromElement)&&(Rr(g)||g[Li]))break e;if((p||u)&&(u=d.window===d?d:(u=d.ownerDocument)?u.defaultView||u.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=c,g=g?Rr(g):null,g!==null&&(m=qr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(x=Th,y="onMouseLeave",h="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(x=Ah,y="onPointerLeave",h="onPointerEnter",_="pointer"),m=p==null?u:vs(p),v=g==null?u:vs(g),u=new x(y,_+"leave",p,t,d),u.target=m,u.relatedTarget=v,y=null,Rr(d)===c&&(x=new x(h,_+"enter",g,t,d),x.target=v,x.relatedTarget=m,y=x),m=y,p&&g)t:{for(x=p,h=g,_=0,v=x;v;v=Kr(v))_++;for(v=0,y=h;y;y=Kr(y))v++;for(;0<_-v;)x=Kr(x),_--;for(;0<v-_;)h=Kr(h),v--;for(;_--;){if(x===h||h!==null&&x===h.alternate)break t;x=Kr(x),h=Kr(h)}x=null}else x=null;p!==null&&kh(f,u,p,x,!1),g!==null&&m!==null&&kh(f,m,g,x,!0)}}e:{if(u=c?vs(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var C=ny;else if(Lh(u))if(f0)C=oy;else{C=ry;var R=iy}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(C=sy);if(C&&(C=C(n,c))){d0(f,C,t,d);break e}R&&R(n,u,c),n==="focusout"&&(R=u._wrapperState)&&R.controlled&&u.type==="number"&&ju(u,"number",u.value)}switch(R=c?vs(c):window,n){case"focusin":(Lh(R)||R.contentEditable==="true")&&(gs=R,id=c,No=null);break;case"focusout":No=id=gs=null;break;case"mousedown":rd=!0;break;case"contextmenu":case"mouseup":case"dragend":rd=!1,Uh(f,t,d);break;case"selectionchange":if(cy)break;case"keydown":case"keyup":Uh(f,t,d)}var A;if(ff)e:{switch(n){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else ms?c0(n,t)&&(D="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(D="onCompositionStart");D&&(l0&&t.locale!=="ko"&&(ms||D!=="onCompositionStart"?D==="onCompositionEnd"&&ms&&(A=a0()):(qi=d,cf="value"in qi?qi.value:qi.textContent,ms=!0)),R=Ll(c,D),0<R.length&&(D=new bh(D,n,null,t,d),f.push({event:D,listeners:R}),A?D.data=A:(A=u0(t),A!==null&&(D.data=A)))),(A=Zx?Qx(n,t):Jx(n,t))&&(c=Ll(c,"onBeforeInput"),0<c.length&&(d=new bh("onBeforeInput","beforeinput",null,t,d),f.push({event:d,listeners:c}),d.data=A))}M0(f,e)})}function $o(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Ll(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Vo(n,t),s!=null&&i.unshift($o(n,s,r)),s=Vo(n,e),s!=null&&i.push($o(n,s,r))),n=n.return}return i}function Kr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function kh(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Vo(t,s),l!=null&&o.unshift($o(t,l,a))):r||(l=Vo(t,s),l!=null&&o.push($o(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var hy=/\r\n?/g,py=/\u0000|\uFFFD/g;function Bh(n){return(typeof n=="string"?n:""+n).replace(hy,`
`).replace(py,"")}function ba(n,e,t){if(e=Bh(e),Bh(n)!==e&&t)throw Error(ie(425))}function Pl(){}var sd=null,od=null;function ad(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ld=typeof setTimeout=="function"?setTimeout:void 0,my=typeof clearTimeout=="function"?clearTimeout:void 0,zh=typeof Promise=="function"?Promise:void 0,gy=typeof queueMicrotask=="function"?queueMicrotask:typeof zh<"u"?function(n){return zh.resolve(null).then(n).catch(_y)}:ld;function _y(n){setTimeout(function(){throw n})}function Vc(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Xo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Xo(e)}function tr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Hh(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var eo=Math.random().toString(36).slice(2),si="__reactFiber$"+eo,Zo="__reactProps$"+eo,Li="__reactContainer$"+eo,cd="__reactEvents$"+eo,vy="__reactListeners$"+eo,xy="__reactHandles$"+eo;function Rr(n){var e=n[si];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Li]||t[si]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Hh(n);n!==null;){if(t=n[si])return t;n=Hh(n)}return e}n=t,t=n.parentNode}return null}function da(n){return n=n[si]||n[Li],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function vs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ie(33))}function sc(n){return n[Zo]||null}var ud=[],xs=-1;function fr(n){return{current:n}}function ft(n){0>xs||(n.current=ud[xs],ud[xs]=null,xs--)}function ct(n,e){xs++,ud[xs]=n.current,n.current=e}var ur={},en=fr(ur),pn=fr(!1),kr=ur;function Os(n,e){var t=n.type.contextTypes;if(!t)return ur;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function mn(n){return n=n.childContextTypes,n!=null}function Nl(){ft(pn),ft(en)}function Gh(n,e,t){if(en.current!==ur)throw Error(ie(168));ct(en,e),ct(pn,t)}function w0(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,ix(n)||"Unknown",r));return yt({},t,i)}function Dl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ur,kr=en.current,ct(en,n),ct(pn,pn.current),!0}function Vh(n,e,t){var i=n.stateNode;if(!i)throw Error(ie(169));t?(n=w0(n,e,kr),i.__reactInternalMemoizedMergedChildContext=n,ft(pn),ft(en),ct(en,n)):ft(pn),ct(pn,t)}var Mi=null,oc=!1,Wc=!1;function T0(n){Mi===null?Mi=[n]:Mi.push(n)}function yy(n){oc=!0,T0(n)}function hr(){if(!Wc&&Mi!==null){Wc=!0;var n=0,e=it;try{var t=Mi;for(it=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Mi=null,oc=!1}catch(r){throw Mi!==null&&(Mi=Mi.slice(n+1)),$g(sf,hr),r}finally{it=e,Wc=!1}}return null}var ys=[],Ss=0,Il=null,Ul=0,Pn=[],Nn=0,Br=null,wi=1,Ti="";function Mr(n,e){ys[Ss++]=Ul,ys[Ss++]=Il,Il=n,Ul=e}function b0(n,e,t){Pn[Nn++]=wi,Pn[Nn++]=Ti,Pn[Nn++]=Br,Br=n;var i=wi;n=Ti;var r=32-Kn(i)-1;i&=~(1<<r),t+=1;var s=32-Kn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,wi=1<<32-Kn(e)+r|t<<r|i,Ti=s+n}else wi=1<<s|t<<r|i,Ti=n}function pf(n){n.return!==null&&(Mr(n,1),b0(n,1,0))}function mf(n){for(;n===Il;)Il=ys[--Ss],ys[Ss]=null,Ul=ys[--Ss],ys[Ss]=null;for(;n===Br;)Br=Pn[--Nn],Pn[Nn]=null,Ti=Pn[--Nn],Pn[Nn]=null,wi=Pn[--Nn],Pn[Nn]=null}var wn=null,En=null,pt=!1,Yn=null;function A0(n,e){var t=On(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Wh(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,wn=n,En=tr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,wn=n,En=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Br!==null?{id:wi,overflow:Ti}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=On(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,wn=n,En=null,!0):!1;default:return!1}}function dd(n){return(n.mode&1)!==0&&(n.flags&128)===0}function fd(n){if(pt){var e=En;if(e){var t=e;if(!Wh(n,e)){if(dd(n))throw Error(ie(418));e=tr(t.nextSibling);var i=wn;e&&Wh(n,e)?A0(i,t):(n.flags=n.flags&-4097|2,pt=!1,wn=n)}}else{if(dd(n))throw Error(ie(418));n.flags=n.flags&-4097|2,pt=!1,wn=n}}}function jh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;wn=n}function Aa(n){if(n!==wn)return!1;if(!pt)return jh(n),pt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!ad(n.type,n.memoizedProps)),e&&(e=En)){if(dd(n))throw R0(),Error(ie(418));for(;e;)A0(n,e),e=tr(e.nextSibling)}if(jh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ie(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){En=tr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}En=null}}else En=wn?tr(n.stateNode.nextSibling):null;return!0}function R0(){for(var n=En;n;)n=tr(n.nextSibling)}function ks(){En=wn=null,pt=!1}function gf(n){Yn===null?Yn=[n]:Yn.push(n)}var Sy=Ii.ReactCurrentBatchConfig;function ho(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ie(309));var i=t.stateNode}if(!i)throw Error(ie(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ie(284));if(!t._owner)throw Error(ie(290,n))}return n}function Ra(n,e){throw n=Object.prototype.toString.call(e),Error(ie(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Xh(n){var e=n._init;return e(n._payload)}function C0(n){function e(h,_){if(n){var v=h.deletions;v===null?(h.deletions=[_],h.flags|=16):v.push(_)}}function t(h,_){if(!n)return null;for(;_!==null;)e(h,_),_=_.sibling;return null}function i(h,_){for(h=new Map;_!==null;)_.key!==null?h.set(_.key,_):h.set(_.index,_),_=_.sibling;return h}function r(h,_){return h=sr(h,_),h.index=0,h.sibling=null,h}function s(h,_,v){return h.index=v,n?(v=h.alternate,v!==null?(v=v.index,v<_?(h.flags|=2,_):v):(h.flags|=2,_)):(h.flags|=1048576,_)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,_,v,y){return _===null||_.tag!==6?(_=Zc(v,h.mode,y),_.return=h,_):(_=r(_,v),_.return=h,_)}function l(h,_,v,y){var C=v.type;return C===ps?d(h,_,v.props.children,y,v.key):_!==null&&(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Gi&&Xh(C)===_.type)?(y=r(_,v.props),y.ref=ho(h,_,v),y.return=h,y):(y=vl(v.type,v.key,v.props,null,h.mode,y),y.ref=ho(h,_,v),y.return=h,y)}function c(h,_,v,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=Qc(v,h.mode,y),_.return=h,_):(_=r(_,v.children||[]),_.return=h,_)}function d(h,_,v,y,C){return _===null||_.tag!==7?(_=Ir(v,h.mode,y,C),_.return=h,_):(_=r(_,v),_.return=h,_)}function f(h,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Zc(""+_,h.mode,v),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case _a:return v=vl(_.type,_.key,_.props,null,h.mode,v),v.ref=ho(h,null,_),v.return=h,v;case hs:return _=Qc(_,h.mode,v),_.return=h,_;case Gi:var y=_._init;return f(h,y(_._payload),v)}if(To(_)||ao(_))return _=Ir(_,h.mode,v,null),_.return=h,_;Ra(h,_)}return null}function u(h,_,v,y){var C=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(h,_,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case _a:return v.key===C?l(h,_,v,y):null;case hs:return v.key===C?c(h,_,v,y):null;case Gi:return C=v._init,u(h,_,C(v._payload),y)}if(To(v)||ao(v))return C!==null?null:d(h,_,v,y,null);Ra(h,v)}return null}function p(h,_,v,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(v)||null,a(_,h,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case _a:return h=h.get(y.key===null?v:y.key)||null,l(_,h,y,C);case hs:return h=h.get(y.key===null?v:y.key)||null,c(_,h,y,C);case Gi:var R=y._init;return p(h,_,v,R(y._payload),C)}if(To(y)||ao(y))return h=h.get(v)||null,d(_,h,y,C,null);Ra(_,y)}return null}function g(h,_,v,y){for(var C=null,R=null,A=_,D=_=0,M=null;A!==null&&D<v.length;D++){A.index>D?(M=A,A=null):M=A.sibling;var E=u(h,A,v[D],y);if(E===null){A===null&&(A=M);break}n&&A&&E.alternate===null&&e(h,A),_=s(E,_,D),R===null?C=E:R.sibling=E,R=E,A=M}if(D===v.length)return t(h,A),pt&&Mr(h,D),C;if(A===null){for(;D<v.length;D++)A=f(h,v[D],y),A!==null&&(_=s(A,_,D),R===null?C=A:R.sibling=A,R=A);return pt&&Mr(h,D),C}for(A=i(h,A);D<v.length;D++)M=p(A,h,D,v[D],y),M!==null&&(n&&M.alternate!==null&&A.delete(M.key===null?D:M.key),_=s(M,_,D),R===null?C=M:R.sibling=M,R=M);return n&&A.forEach(function(O){return e(h,O)}),pt&&Mr(h,D),C}function x(h,_,v,y){var C=ao(v);if(typeof C!="function")throw Error(ie(150));if(v=C.call(v),v==null)throw Error(ie(151));for(var R=C=null,A=_,D=_=0,M=null,E=v.next();A!==null&&!E.done;D++,E=v.next()){A.index>D?(M=A,A=null):M=A.sibling;var O=u(h,A,E.value,y);if(O===null){A===null&&(A=M);break}n&&A&&O.alternate===null&&e(h,A),_=s(O,_,D),R===null?C=O:R.sibling=O,R=O,A=M}if(E.done)return t(h,A),pt&&Mr(h,D),C;if(A===null){for(;!E.done;D++,E=v.next())E=f(h,E.value,y),E!==null&&(_=s(E,_,D),R===null?C=E:R.sibling=E,R=E);return pt&&Mr(h,D),C}for(A=i(h,A);!E.done;D++,E=v.next())E=p(A,h,D,E.value,y),E!==null&&(n&&E.alternate!==null&&A.delete(E.key===null?D:E.key),_=s(E,_,D),R===null?C=E:R.sibling=E,R=E);return n&&A.forEach(function(z){return e(h,z)}),pt&&Mr(h,D),C}function m(h,_,v,y){if(typeof v=="object"&&v!==null&&v.type===ps&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case _a:e:{for(var C=v.key,R=_;R!==null;){if(R.key===C){if(C=v.type,C===ps){if(R.tag===7){t(h,R.sibling),_=r(R,v.props.children),_.return=h,h=_;break e}}else if(R.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Gi&&Xh(C)===R.type){t(h,R.sibling),_=r(R,v.props),_.ref=ho(h,R,v),_.return=h,h=_;break e}t(h,R);break}else e(h,R);R=R.sibling}v.type===ps?(_=Ir(v.props.children,h.mode,y,v.key),_.return=h,h=_):(y=vl(v.type,v.key,v.props,null,h.mode,y),y.ref=ho(h,_,v),y.return=h,h=y)}return o(h);case hs:e:{for(R=v.key;_!==null;){if(_.key===R)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){t(h,_.sibling),_=r(_,v.children||[]),_.return=h,h=_;break e}else{t(h,_);break}else e(h,_);_=_.sibling}_=Qc(v,h.mode,y),_.return=h,h=_}return o(h);case Gi:return R=v._init,m(h,_,R(v._payload),y)}if(To(v))return g(h,_,v,y);if(ao(v))return x(h,_,v,y);Ra(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(t(h,_.sibling),_=r(_,v),_.return=h,h=_):(t(h,_),_=Zc(v,h.mode,y),_.return=h,h=_),o(h)):t(h,_)}return m}var Bs=C0(!0),L0=C0(!1),Fl=fr(null),Ol=null,Ms=null,_f=null;function vf(){_f=Ms=Ol=null}function xf(n){var e=Fl.current;ft(Fl),n._currentValue=e}function hd(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ps(n,e){Ol=n,_f=Ms=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(hn=!0),n.firstContext=null)}function Bn(n){var e=n._currentValue;if(_f!==n)if(n={context:n,memoizedValue:e,next:null},Ms===null){if(Ol===null)throw Error(ie(308));Ms=n,Ol.dependencies={lanes:0,firstContext:n}}else Ms=Ms.next=n;return e}var Cr=null;function yf(n){Cr===null?Cr=[n]:Cr.push(n)}function P0(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,yf(e)):(t.next=r.next,r.next=t),e.interleaved=t,Pi(n,i)}function Pi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Vi=!1;function Sf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function N0(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ri(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function nr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Pi(n,t)}return r=i.interleaved,r===null?(e.next=e,yf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Pi(n,t)}function fl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,of(n,t)}}function Yh(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function kl(n,e,t,i){var r=n.updateQueue;Vi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=n.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var u=a.lane,p=a.eventTime;if((i&u)===u){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,x=a;switch(u=e,p=t,x.tag){case 1:if(g=x.payload,typeof g=="function"){f=g.call(p,f,u);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,u=typeof g=="function"?g.call(p,f,u):g,u==null)break e;f=yt({},f,u);break e;case 2:Vi=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,u=r.effects,u===null?r.effects=[a]:u.push(a))}else p={eventTime:p,lane:u,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=p,l=f):d=d.next=p,o|=u;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;u=a,a=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Hr|=o,n.lanes=o,n.memoizedState=f}}function qh(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var fa={},ci=fr(fa),Qo=fr(fa),Jo=fr(fa);function Lr(n){if(n===fa)throw Error(ie(174));return n}function Mf(n,e){switch(ct(Jo,e),ct(Qo,n),ct(ci,fa),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yu(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Yu(e,n)}ft(ci),ct(ci,e)}function zs(){ft(ci),ft(Qo),ft(Jo)}function D0(n){Lr(Jo.current);var e=Lr(ci.current),t=Yu(e,n.type);e!==t&&(ct(Qo,n),ct(ci,t))}function Ef(n){Qo.current===n&&(ft(ci),ft(Qo))}var gt=fr(0);function Bl(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jc=[];function wf(){for(var n=0;n<jc.length;n++)jc[n]._workInProgressVersionPrimary=null;jc.length=0}var hl=Ii.ReactCurrentDispatcher,Xc=Ii.ReactCurrentBatchConfig,zr=0,vt=null,Lt=null,Ot=null,zl=!1,Do=!1,ea=0,My=0;function Yt(){throw Error(ie(321))}function Tf(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Qn(n[t],e[t]))return!1;return!0}function bf(n,e,t,i,r,s){if(zr=s,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,hl.current=n===null||n.memoizedState===null?by:Ay,n=t(i,r),Do){s=0;do{if(Do=!1,ea=0,25<=s)throw Error(ie(301));s+=1,Ot=Lt=null,e.updateQueue=null,hl.current=Ry,n=t(i,r)}while(Do)}if(hl.current=Hl,e=Lt!==null&&Lt.next!==null,zr=0,Ot=Lt=vt=null,zl=!1,e)throw Error(ie(300));return n}function Af(){var n=ea!==0;return ea=0,n}function ii(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?vt.memoizedState=Ot=n:Ot=Ot.next=n,Ot}function zn(){if(Lt===null){var n=vt.alternate;n=n!==null?n.memoizedState:null}else n=Lt.next;var e=Ot===null?vt.memoizedState:Ot.next;if(e!==null)Ot=e,Lt=n;else{if(n===null)throw Error(ie(310));Lt=n,n={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},Ot===null?vt.memoizedState=Ot=n:Ot=Ot.next=n}return Ot}function ta(n,e){return typeof e=="function"?e(n):e}function Yc(n){var e=zn(),t=e.queue;if(t===null)throw Error(ie(311));t.lastRenderedReducer=n;var i=Lt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((zr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,vt.lanes|=d,Hr|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Qn(i,e.memoizedState)||(hn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,vt.lanes|=s,Hr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function qc(n){var e=zn(),t=e.queue;if(t===null)throw Error(ie(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Qn(s,e.memoizedState)||(hn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function I0(){}function U0(n,e){var t=vt,i=zn(),r=e(),s=!Qn(i.memoizedState,r);if(s&&(i.memoizedState=r,hn=!0),i=i.queue,Rf(k0.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Ot!==null&&Ot.memoizedState.tag&1){if(t.flags|=2048,na(9,O0.bind(null,t,i,r,e),void 0,null),Bt===null)throw Error(ie(349));zr&30||F0(t,e,r)}return r}function F0(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function O0(n,e,t,i){e.value=t,e.getSnapshot=i,B0(e)&&z0(n)}function k0(n,e,t){return t(function(){B0(e)&&z0(n)})}function B0(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Qn(n,t)}catch{return!0}}function z0(n){var e=Pi(n,1);e!==null&&$n(e,n,1,-1)}function Kh(n){var e=ii();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:n},e.queue=n,n=n.dispatch=Ty.bind(null,vt,n),[e.memoizedState,n]}function na(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function H0(){return zn().memoizedState}function pl(n,e,t,i){var r=ii();vt.flags|=n,r.memoizedState=na(1|e,t,void 0,i===void 0?null:i)}function ac(n,e,t,i){var r=zn();i=i===void 0?null:i;var s=void 0;if(Lt!==null){var o=Lt.memoizedState;if(s=o.destroy,i!==null&&Tf(i,o.deps)){r.memoizedState=na(e,t,s,i);return}}vt.flags|=n,r.memoizedState=na(1|e,t,s,i)}function $h(n,e){return pl(8390656,8,n,e)}function Rf(n,e){return ac(2048,8,n,e)}function G0(n,e){return ac(4,2,n,e)}function V0(n,e){return ac(4,4,n,e)}function W0(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function j0(n,e,t){return t=t!=null?t.concat([n]):null,ac(4,4,W0.bind(null,e,n),t)}function Cf(){}function X0(n,e){var t=zn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Tf(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Y0(n,e){var t=zn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Tf(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function q0(n,e,t){return zr&21?(Qn(t,e)||(t=Jg(),vt.lanes|=t,Hr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,hn=!0),n.memoizedState=t)}function Ey(n,e){var t=it;it=t!==0&&4>t?t:4,n(!0);var i=Xc.transition;Xc.transition={};try{n(!1),e()}finally{it=t,Xc.transition=i}}function K0(){return zn().memoizedState}function wy(n,e,t){var i=rr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},$0(n))Z0(e,t);else if(t=P0(n,e,t,i),t!==null){var r=ln();$n(t,n,i,r),Q0(t,e,i)}}function Ty(n,e,t){var i=rr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if($0(n))Z0(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Qn(a,o)){var l=e.interleaved;l===null?(r.next=r,yf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=P0(n,e,r,i),t!==null&&(r=ln(),$n(t,n,i,r),Q0(t,e,i))}}function $0(n){var e=n.alternate;return n===vt||e!==null&&e===vt}function Z0(n,e){Do=zl=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Q0(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,of(n,t)}}var Hl={readContext:Bn,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useInsertionEffect:Yt,useLayoutEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useMutableSource:Yt,useSyncExternalStore:Yt,useId:Yt,unstable_isNewReconciler:!1},by={readContext:Bn,useCallback:function(n,e){return ii().memoizedState=[n,e===void 0?null:e],n},useContext:Bn,useEffect:$h,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,pl(4194308,4,W0.bind(null,e,n),t)},useLayoutEffect:function(n,e){return pl(4194308,4,n,e)},useInsertionEffect:function(n,e){return pl(4,2,n,e)},useMemo:function(n,e){var t=ii();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=ii();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=wy.bind(null,vt,n),[i.memoizedState,n]},useRef:function(n){var e=ii();return n={current:n},e.memoizedState=n},useState:Kh,useDebugValue:Cf,useDeferredValue:function(n){return ii().memoizedState=n},useTransition:function(){var n=Kh(!1),e=n[0];return n=Ey.bind(null,n[1]),ii().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=vt,r=ii();if(pt){if(t===void 0)throw Error(ie(407));t=t()}else{if(t=e(),Bt===null)throw Error(ie(349));zr&30||F0(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,$h(k0.bind(null,i,s,n),[n]),i.flags|=2048,na(9,O0.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=ii(),e=Bt.identifierPrefix;if(pt){var t=Ti,i=wi;t=(i&~(1<<32-Kn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=ea++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=My++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Ay={readContext:Bn,useCallback:X0,useContext:Bn,useEffect:Rf,useImperativeHandle:j0,useInsertionEffect:G0,useLayoutEffect:V0,useMemo:Y0,useReducer:Yc,useRef:H0,useState:function(){return Yc(ta)},useDebugValue:Cf,useDeferredValue:function(n){var e=zn();return q0(e,Lt.memoizedState,n)},useTransition:function(){var n=Yc(ta)[0],e=zn().memoizedState;return[n,e]},useMutableSource:I0,useSyncExternalStore:U0,useId:K0,unstable_isNewReconciler:!1},Ry={readContext:Bn,useCallback:X0,useContext:Bn,useEffect:Rf,useImperativeHandle:j0,useInsertionEffect:G0,useLayoutEffect:V0,useMemo:Y0,useReducer:qc,useRef:H0,useState:function(){return qc(ta)},useDebugValue:Cf,useDeferredValue:function(n){var e=zn();return Lt===null?e.memoizedState=n:q0(e,Lt.memoizedState,n)},useTransition:function(){var n=qc(ta)[0],e=zn().memoizedState;return[n,e]},useMutableSource:I0,useSyncExternalStore:U0,useId:K0,unstable_isNewReconciler:!1};function jn(n,e){if(n&&n.defaultProps){e=yt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function pd(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:yt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var lc={isMounted:function(n){return(n=n._reactInternals)?qr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=ln(),r=rr(n),s=Ri(i,r);s.payload=e,t!=null&&(s.callback=t),e=nr(n,s,r),e!==null&&($n(e,n,r,i),fl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=ln(),r=rr(n),s=Ri(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=nr(n,s,r),e!==null&&($n(e,n,r,i),fl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=ln(),i=rr(n),r=Ri(t,i);r.tag=2,e!=null&&(r.callback=e),e=nr(n,r,i),e!==null&&($n(e,n,i,t),fl(e,n,i))}};function Zh(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!qo(t,i)||!qo(r,s):!0}function J0(n,e,t){var i=!1,r=ur,s=e.contextType;return typeof s=="object"&&s!==null?s=Bn(s):(r=mn(e)?kr:en.current,i=e.contextTypes,s=(i=i!=null)?Os(n,r):ur),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=lc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Qh(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&lc.enqueueReplaceState(e,e.state,null)}function md(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Sf(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Bn(s):(s=mn(e)?kr:en.current,r.context=Os(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(pd(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&lc.enqueueReplaceState(r,r.state,null),kl(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Hs(n,e){try{var t="",i=e;do t+=nx(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Kc(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function gd(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var Cy=typeof WeakMap=="function"?WeakMap:Map;function e_(n,e,t){t=Ri(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Vl||(Vl=!0,bd=i),gd(n,e)},t}function t_(n,e,t){t=Ri(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){gd(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){gd(n,e),typeof i!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Jh(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new Cy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Vy.bind(null,n,e,t),e.then(n,n))}function ep(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function tp(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Ri(-1,1),e.tag=2,nr(t,e,1))),t.lanes|=1),n)}var Ly=Ii.ReactCurrentOwner,hn=!1;function on(n,e,t,i){e.child=n===null?L0(e,null,t,i):Bs(e,n.child,t,i)}function np(n,e,t,i,r){t=t.render;var s=e.ref;return Ps(e,r),i=bf(n,e,t,i,s,r),t=Af(),n!==null&&!hn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ni(n,e,r)):(pt&&t&&pf(e),e.flags|=1,on(n,e,i,r),e.child)}function ip(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Of(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,n_(n,e,s,i,r)):(n=vl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:qo,t(o,i)&&n.ref===e.ref)return Ni(n,e,r)}return e.flags|=1,n=sr(s,i),n.ref=e.ref,n.return=e,e.child=n}function n_(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(qo(s,i)&&n.ref===e.ref)if(hn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(hn=!0);else return e.lanes=n.lanes,Ni(n,e,r)}return _d(n,e,t,i,r)}function i_(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(ws,Mn),Mn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,ct(ws,Mn),Mn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,ct(ws,Mn),Mn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,ct(ws,Mn),Mn|=i;return on(n,e,r,t),e.child}function r_(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function _d(n,e,t,i,r){var s=mn(t)?kr:en.current;return s=Os(e,s),Ps(e,r),t=bf(n,e,t,i,s,r),i=Af(),n!==null&&!hn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ni(n,e,r)):(pt&&i&&pf(e),e.flags|=1,on(n,e,t,r),e.child)}function rp(n,e,t,i,r){if(mn(t)){var s=!0;Dl(e)}else s=!1;if(Ps(e,r),e.stateNode===null)ml(n,e),J0(e,t,i),md(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Bn(c):(c=mn(t)?kr:en.current,c=Os(e,c));var d=t.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Qh(e,o,i,c),Vi=!1;var u=e.memoizedState;o.state=u,kl(e,i,o,r),l=e.memoizedState,a!==i||u!==l||pn.current||Vi?(typeof d=="function"&&(pd(e,t,d,i),l=e.memoizedState),(a=Vi||Zh(e,t,a,i,u,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,N0(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:jn(e.type,a),o.props=c,f=e.pendingProps,u=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Bn(l):(l=mn(t)?kr:en.current,l=Os(e,l));var p=t.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||u!==l)&&Qh(e,o,i,l),Vi=!1,u=e.memoizedState,o.state=u,kl(e,i,o,r);var g=e.memoizedState;a!==f||u!==g||pn.current||Vi?(typeof p=="function"&&(pd(e,t,p,i),g=e.memoizedState),(c=Vi||Zh(e,t,c,i,u,g,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&u===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&u===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&u===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&u===n.memoizedState||(e.flags|=1024),i=!1)}return vd(n,e,t,i,s,r)}function vd(n,e,t,i,r,s){r_(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Vh(e,t,!1),Ni(n,e,s);i=e.stateNode,Ly.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Bs(e,n.child,null,s),e.child=Bs(e,null,a,s)):on(n,e,a,s),e.memoizedState=i.state,r&&Vh(e,t,!0),e.child}function s_(n){var e=n.stateNode;e.pendingContext?Gh(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Gh(n,e.context,!1),Mf(n,e.containerInfo)}function sp(n,e,t,i,r){return ks(),gf(r),e.flags|=256,on(n,e,t,i),e.child}var xd={dehydrated:null,treeContext:null,retryLane:0};function yd(n){return{baseLanes:n,cachePool:null,transitions:null}}function o_(n,e,t){var i=e.pendingProps,r=gt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),ct(gt,r&1),n===null)return fd(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=dc(o,i,0,null),n=Ir(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=yd(t),e.memoizedState=xd,n):Lf(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Py(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=sr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=sr(a,s):(s=Ir(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?yd(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=xd,i}return s=n.child,n=s.sibling,i=sr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Lf(n,e){return e=dc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Ca(n,e,t,i){return i!==null&&gf(i),Bs(e,n.child,null,t),n=Lf(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Py(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Kc(Error(ie(422))),Ca(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=dc({mode:"visible",children:i.children},r,0,null),s=Ir(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Bs(e,n.child,null,o),e.child.memoizedState=yd(o),e.memoizedState=xd,s);if(!(e.mode&1))return Ca(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=Kc(s,i,void 0),Ca(n,e,o,i)}if(a=(o&n.childLanes)!==0,hn||a){if(i=Bt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Pi(n,r),$n(i,n,r,-1))}return Ff(),i=Kc(Error(ie(421))),Ca(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=Wy.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,En=tr(r.nextSibling),wn=e,pt=!0,Yn=null,n!==null&&(Pn[Nn++]=wi,Pn[Nn++]=Ti,Pn[Nn++]=Br,wi=n.id,Ti=n.overflow,Br=e),e=Lf(e,i.children),e.flags|=4096,e)}function op(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),hd(n.return,e,t)}function $c(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function a_(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(on(n,e,i.children,t),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&op(n,t,e);else if(n.tag===19)op(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(ct(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Bl(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),$c(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Bl(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}$c(e,!0,t,null,s);break;case"together":$c(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ml(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Ni(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Hr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ie(153));if(e.child!==null){for(n=e.child,t=sr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=sr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Ny(n,e,t){switch(e.tag){case 3:s_(e),ks();break;case 5:D0(e);break;case 1:mn(e.type)&&Dl(e);break;case 4:Mf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ct(Fl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ct(gt,gt.current&1),e.flags|=128,null):t&e.child.childLanes?o_(n,e,t):(ct(gt,gt.current&1),n=Ni(n,e,t),n!==null?n.sibling:null);ct(gt,gt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return a_(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ct(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,i_(n,e,t)}return Ni(n,e,t)}var l_,Sd,c_,u_;l_=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Sd=function(){};c_=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Lr(ci.current);var s=null;switch(t){case"input":r=Vu(n,r),i=Vu(n,i),s=[];break;case"select":r=yt({},r,{value:void 0}),i=yt({},i,{value:void 0}),s=[];break;case"textarea":r=Xu(n,r),i=Xu(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Pl)}qu(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ho.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ho.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ut("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};u_=function(n,e,t,i){t!==i&&(e.flags|=4)};function po(n,e){if(!pt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function qt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function Dy(n,e,t){var i=e.pendingProps;switch(mf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return mn(e.type)&&Nl(),qt(e),null;case 3:return i=e.stateNode,zs(),ft(pn),ft(en),wf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Aa(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yn!==null&&(Cd(Yn),Yn=null))),Sd(n,e),qt(e),null;case 5:Ef(e);var r=Lr(Jo.current);if(t=e.type,n!==null&&e.stateNode!=null)c_(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return qt(e),null}if(n=Lr(ci.current),Aa(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[si]=e,i[Zo]=s,n=(e.mode&1)!==0,t){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<Ao.length;r++)ut(Ao[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":mh(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":_h(i,s),ut("invalid",i)}qu(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ba(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ba(i.textContent,a,n),r=["children",""+a]):Ho.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ut("scroll",i)}switch(t){case"input":va(i),gh(i,s,!0);break;case"textarea":va(i),vh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Pl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=kg(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[si]=e,n[Zo]=i,l_(n,e,!1,!1),e.stateNode=n;e:{switch(o=Ku(t,i),t){case"dialog":ut("cancel",n),ut("close",n),r=i;break;case"iframe":case"object":case"embed":ut("load",n),r=i;break;case"video":case"audio":for(r=0;r<Ao.length;r++)ut(Ao[r],n);r=i;break;case"source":ut("error",n),r=i;break;case"img":case"image":case"link":ut("error",n),ut("load",n),r=i;break;case"details":ut("toggle",n),r=i;break;case"input":mh(n,i),r=Vu(n,i),ut("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=yt({},i,{value:void 0}),ut("invalid",n);break;case"textarea":_h(n,i),r=Xu(n,i),ut("invalid",n);break;default:r=i}qu(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Hg(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Bg(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Go(n,l):typeof l=="number"&&Go(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ho.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",n):l!=null&&Jd(n,s,l,o))}switch(t){case"input":va(n),gh(n,i,!1);break;case"textarea":va(n),vh(n);break;case"option":i.value!=null&&n.setAttribute("value",""+cr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?As(n,!!i.multiple,s,!1):i.defaultValue!=null&&As(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Pl)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(n&&e.stateNode!=null)u_(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(t=Lr(Jo.current),Lr(ci.current),Aa(e)){if(i=e.stateNode,t=e.memoizedProps,i[si]=e,(s=i.nodeValue!==t)&&(n=wn,n!==null))switch(n.tag){case 3:ba(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ba(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[si]=e,e.stateNode=i}return qt(e),null;case 13:if(ft(gt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(pt&&En!==null&&e.mode&1&&!(e.flags&128))R0(),ks(),e.flags|=98560,s=!1;else if(s=Aa(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[si]=e}else ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),s=!1}else Yn!==null&&(Cd(Yn),Yn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||gt.current&1?Pt===0&&(Pt=3):Ff())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return zs(),Sd(n,e),n===null&&Ko(e.stateNode.containerInfo),qt(e),null;case 10:return xf(e.type._context),qt(e),null;case 17:return mn(e.type)&&Nl(),qt(e),null;case 19:if(ft(gt),s=e.memoizedState,s===null)return qt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)po(s,!1);else{if(Pt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Bl(n),o!==null){for(e.flags|=128,po(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return ct(gt,gt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Tt()>Gs&&(e.flags|=128,i=!0,po(s,!1),e.lanes=4194304)}else{if(!i)if(n=Bl(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),po(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pt)return qt(e),null}else 2*Tt()-s.renderingStartTime>Gs&&t!==1073741824&&(e.flags|=128,i=!0,po(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Tt(),e.sibling=null,t=gt.current,ct(gt,i?t&1|2:t&1),e):(qt(e),null);case 22:case 23:return Uf(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Mn&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function Iy(n,e){switch(mf(e),e.tag){case 1:return mn(e.type)&&Nl(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return zs(),ft(pn),ft(en),wf(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Ef(e),null;case 13:if(ft(gt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));ks()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return ft(gt),null;case 4:return zs(),null;case 10:return xf(e.type._context),null;case 22:case 23:return Uf(),null;case 24:return null;default:return null}}var La=!1,Zt=!1,Uy=typeof WeakSet=="function"?WeakSet:Set,pe=null;function Es(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Mt(n,e,i)}else t.current=null}function Md(n,e,t){try{t()}catch(i){Mt(n,e,i)}}var ap=!1;function Fy(n,e){if(sd=Rl,n=m0(),hf(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=n,u=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)u=f,f=p;for(;;){if(f===n)break t;if(u===t&&++c===r&&(a=o),u===s&&++d===i&&(l=o),(p=f.nextSibling)!==null)break;f=u,u=f.parentNode}f=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(od={focusedElem:n,selectionRange:t},Rl=!1,pe=e;pe!==null;)if(e=pe,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,pe=n;else for(;pe!==null;){e=pe;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,m=g.memoizedState,h=e.stateNode,_=h.getSnapshotBeforeUpdate(e.elementType===e.type?x:jn(e.type,x),m);h.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(y){Mt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}return g=ap,ap=!1,g}function Io(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Md(e,t,s)}r=r.next}while(r!==i)}}function cc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Ed(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function d_(n){var e=n.alternate;e!==null&&(n.alternate=null,d_(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[si],delete e[Zo],delete e[cd],delete e[vy],delete e[xy])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function f_(n){return n.tag===5||n.tag===3||n.tag===4}function lp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||f_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function wd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Pl));else if(i!==4&&(n=n.child,n!==null))for(wd(n,e,t),n=n.sibling;n!==null;)wd(n,e,t),n=n.sibling}function Td(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Td(n,e,t),n=n.sibling;n!==null;)Td(n,e,t),n=n.sibling}var Gt=null,Xn=!1;function Ui(n,e,t){for(t=t.child;t!==null;)h_(n,e,t),t=t.sibling}function h_(n,e,t){if(li&&typeof li.onCommitFiberUnmount=="function")try{li.onCommitFiberUnmount(tc,t)}catch{}switch(t.tag){case 5:Zt||Es(t,e);case 6:var i=Gt,r=Xn;Gt=null,Ui(n,e,t),Gt=i,Xn=r,Gt!==null&&(Xn?(n=Gt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Gt.removeChild(t.stateNode));break;case 18:Gt!==null&&(Xn?(n=Gt,t=t.stateNode,n.nodeType===8?Vc(n.parentNode,t):n.nodeType===1&&Vc(n,t),Xo(n)):Vc(Gt,t.stateNode));break;case 4:i=Gt,r=Xn,Gt=t.stateNode.containerInfo,Xn=!0,Ui(n,e,t),Gt=i,Xn=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Md(t,e,o),r=r.next}while(r!==i)}Ui(n,e,t);break;case 1:if(!Zt&&(Es(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Mt(t,e,a)}Ui(n,e,t);break;case 21:Ui(n,e,t);break;case 22:t.mode&1?(Zt=(i=Zt)||t.memoizedState!==null,Ui(n,e,t),Zt=i):Ui(n,e,t);break;default:Ui(n,e,t)}}function cp(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Uy),e.forEach(function(i){var r=jy.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Hn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Gt=a.stateNode,Xn=!1;break e;case 3:Gt=a.stateNode.containerInfo,Xn=!0;break e;case 4:Gt=a.stateNode.containerInfo,Xn=!0;break e}a=a.return}if(Gt===null)throw Error(ie(160));h_(s,o,r),Gt=null,Xn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)p_(e,n),e=e.sibling}function p_(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Hn(e,n),ni(n),i&4){try{Io(3,n,n.return),cc(3,n)}catch(x){Mt(n,n.return,x)}try{Io(5,n,n.return)}catch(x){Mt(n,n.return,x)}}break;case 1:Hn(e,n),ni(n),i&512&&t!==null&&Es(t,t.return);break;case 5:if(Hn(e,n),ni(n),i&512&&t!==null&&Es(t,t.return),n.flags&32){var r=n.stateNode;try{Go(r,"")}catch(x){Mt(n,n.return,x)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Fg(r,s),Ku(a,o);var c=Ku(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?Hg(r,f):d==="dangerouslySetInnerHTML"?Bg(r,f):d==="children"?Go(r,f):Jd(r,d,f,c)}switch(a){case"input":Wu(r,s);break;case"textarea":Og(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?As(r,!!s.multiple,p,!1):u!==!!s.multiple&&(s.defaultValue!=null?As(r,!!s.multiple,s.defaultValue,!0):As(r,!!s.multiple,s.multiple?[]:"",!1))}r[Zo]=s}catch(x){Mt(n,n.return,x)}}break;case 6:if(Hn(e,n),ni(n),i&4){if(n.stateNode===null)throw Error(ie(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(x){Mt(n,n.return,x)}}break;case 3:if(Hn(e,n),ni(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Xo(e.containerInfo)}catch(x){Mt(n,n.return,x)}break;case 4:Hn(e,n),ni(n);break;case 13:Hn(e,n),ni(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Df=Tt())),i&4&&cp(n);break;case 22:if(d=t!==null&&t.memoizedState!==null,n.mode&1?(Zt=(c=Zt)||d,Hn(e,n),Zt=c):Hn(e,n),ni(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!d&&n.mode&1)for(pe=n,d=n.child;d!==null;){for(f=pe=d;pe!==null;){switch(u=pe,p=u.child,u.tag){case 0:case 11:case 14:case 15:Io(4,u,u.return);break;case 1:Es(u,u.return);var g=u.stateNode;if(typeof g.componentWillUnmount=="function"){i=u,t=u.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(x){Mt(i,t,x)}}break;case 5:Es(u,u.return);break;case 22:if(u.memoizedState!==null){dp(f);continue}}p!==null?(p.return=u,pe=p):dp(f)}d=d.sibling}e:for(d=null,f=n;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=zg("display",o))}catch(x){Mt(n,n.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){Mt(n,n.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Hn(e,n),ni(n),i&4&&cp(n);break;case 21:break;default:Hn(e,n),ni(n)}}function ni(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(f_(t)){var i=t;break e}t=t.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Go(r,""),i.flags&=-33);var s=lp(n);Td(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=lp(n);wd(n,a,o);break;default:throw Error(ie(161))}}catch(l){Mt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Oy(n,e,t){pe=n,m_(n)}function m_(n,e,t){for(var i=(n.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||La;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Zt;a=La;var c=Zt;if(La=o,(Zt=l)&&!c)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?fp(r):l!==null?(l.return=o,pe=l):fp(r);for(;s!==null;)pe=s,m_(s),s=s.sibling;pe=r,La=a,Zt=c}up(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):up(n)}}function up(n){for(;pe!==null;){var e=pe;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||cc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:jn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&qh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}qh(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Xo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Zt||e.flags&512&&Ed(e)}catch(u){Mt(e,e.return,u)}}if(e===n){pe=null;break}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}}function dp(n){for(;pe!==null;){var e=pe;if(e===n){pe=null;break}var t=e.sibling;if(t!==null){t.return=e.return,pe=t;break}pe=e.return}}function fp(n){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{cc(4,e)}catch(l){Mt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Mt(e,r,l)}}var s=e.return;try{Ed(e)}catch(l){Mt(e,s,l)}break;case 5:var o=e.return;try{Ed(e)}catch(l){Mt(e,o,l)}}}catch(l){Mt(e,e.return,l)}if(e===n){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var ky=Math.ceil,Gl=Ii.ReactCurrentDispatcher,Pf=Ii.ReactCurrentOwner,kn=Ii.ReactCurrentBatchConfig,Qe=0,Bt=null,Rt=null,Vt=0,Mn=0,ws=fr(0),Pt=0,ia=null,Hr=0,uc=0,Nf=0,Uo=null,dn=null,Df=0,Gs=1/0,Si=null,Vl=!1,bd=null,ir=null,Pa=!1,Ki=null,Wl=0,Fo=0,Ad=null,gl=-1,_l=0;function ln(){return Qe&6?Tt():gl!==-1?gl:gl=Tt()}function rr(n){return n.mode&1?Qe&2&&Vt!==0?Vt&-Vt:Sy.transition!==null?(_l===0&&(_l=Jg()),_l):(n=it,n!==0||(n=window.event,n=n===void 0?16:o0(n.type)),n):1}function $n(n,e,t,i){if(50<Fo)throw Fo=0,Ad=null,Error(ie(185));ca(n,t,i),(!(Qe&2)||n!==Bt)&&(n===Bt&&(!(Qe&2)&&(uc|=t),Pt===4&&Xi(n,Vt)),gn(n,i),t===1&&Qe===0&&!(e.mode&1)&&(Gs=Tt()+500,oc&&hr()))}function gn(n,e){var t=n.callbackNode;Sx(n,e);var i=Al(n,n===Bt?Vt:0);if(i===0)t!==null&&Sh(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Sh(t),e===1)n.tag===0?yy(hp.bind(null,n)):T0(hp.bind(null,n)),gy(function(){!(Qe&6)&&hr()}),t=null;else{switch(e0(i)){case 1:t=sf;break;case 4:t=Zg;break;case 16:t=bl;break;case 536870912:t=Qg;break;default:t=bl}t=E_(t,g_.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function g_(n,e){if(gl=-1,_l=0,Qe&6)throw Error(ie(327));var t=n.callbackNode;if(Ns()&&n.callbackNode!==t)return null;var i=Al(n,n===Bt?Vt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=jl(n,i);else{e=i;var r=Qe;Qe|=2;var s=v_();(Bt!==n||Vt!==e)&&(Si=null,Gs=Tt()+500,Dr(n,e));do try{Hy();break}catch(a){__(n,a)}while(!0);vf(),Gl.current=s,Qe=r,Rt!==null?e=0:(Bt=null,Vt=0,e=Pt)}if(e!==0){if(e===2&&(r=ed(n),r!==0&&(i=r,e=Rd(n,r))),e===1)throw t=ia,Dr(n,0),Xi(n,i),gn(n,Tt()),t;if(e===6)Xi(n,i);else{if(r=n.current.alternate,!(i&30)&&!By(r)&&(e=jl(n,i),e===2&&(s=ed(n),s!==0&&(i=s,e=Rd(n,s))),e===1))throw t=ia,Dr(n,0),Xi(n,i),gn(n,Tt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:Er(n,dn,Si);break;case 3:if(Xi(n,i),(i&130023424)===i&&(e=Df+500-Tt(),10<e)){if(Al(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){ln(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=ld(Er.bind(null,n,dn,Si),e);break}Er(n,dn,Si);break;case 4:if(Xi(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Kn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ky(i/1960))-i,10<i){n.timeoutHandle=ld(Er.bind(null,n,dn,Si),i);break}Er(n,dn,Si);break;case 5:Er(n,dn,Si);break;default:throw Error(ie(329))}}}return gn(n,Tt()),n.callbackNode===t?g_.bind(null,n):null}function Rd(n,e){var t=Uo;return n.current.memoizedState.isDehydrated&&(Dr(n,e).flags|=256),n=jl(n,e),n!==2&&(e=dn,dn=t,e!==null&&Cd(e)),n}function Cd(n){dn===null?dn=n:dn.push.apply(dn,n)}function By(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Qn(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xi(n,e){for(e&=~Nf,e&=~uc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Kn(e),i=1<<t;n[t]=-1,e&=~i}}function hp(n){if(Qe&6)throw Error(ie(327));Ns();var e=Al(n,0);if(!(e&1))return gn(n,Tt()),null;var t=jl(n,e);if(n.tag!==0&&t===2){var i=ed(n);i!==0&&(e=i,t=Rd(n,i))}if(t===1)throw t=ia,Dr(n,0),Xi(n,e),gn(n,Tt()),t;if(t===6)throw Error(ie(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Er(n,dn,Si),gn(n,Tt()),null}function If(n,e){var t=Qe;Qe|=1;try{return n(e)}finally{Qe=t,Qe===0&&(Gs=Tt()+500,oc&&hr())}}function Gr(n){Ki!==null&&Ki.tag===0&&!(Qe&6)&&Ns();var e=Qe;Qe|=1;var t=kn.transition,i=it;try{if(kn.transition=null,it=1,n)return n()}finally{it=i,kn.transition=t,Qe=e,!(Qe&6)&&hr()}}function Uf(){Mn=ws.current,ft(ws)}function Dr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,my(t)),Rt!==null)for(t=Rt.return;t!==null;){var i=t;switch(mf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Nl();break;case 3:zs(),ft(pn),ft(en),wf();break;case 5:Ef(i);break;case 4:zs();break;case 13:ft(gt);break;case 19:ft(gt);break;case 10:xf(i.type._context);break;case 22:case 23:Uf()}t=t.return}if(Bt=n,Rt=n=sr(n.current,null),Vt=Mn=e,Pt=0,ia=null,Nf=uc=Hr=0,dn=Uo=null,Cr!==null){for(e=0;e<Cr.length;e++)if(t=Cr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Cr=null}return n}function __(n,e){do{var t=Rt;try{if(vf(),hl.current=Hl,zl){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}zl=!1}if(zr=0,Ot=Lt=vt=null,Do=!1,ea=0,Pf.current=null,t===null||t.return===null){Pt=1,ia=e,Rt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Vt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var u=d.alternate;u?(d.updateQueue=u.updateQueue,d.memoizedState=u.memoizedState,d.lanes=u.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=ep(o);if(p!==null){p.flags&=-257,tp(p,o,a,s,e),p.mode&1&&Jh(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var x=new Set;x.add(l),e.updateQueue=x}else g.add(l);break e}else{if(!(e&1)){Jh(s,c,e),Ff();break e}l=Error(ie(426))}}else if(pt&&a.mode&1){var m=ep(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),tp(m,o,a,s,e),gf(Hs(l,a));break e}}s=l=Hs(l,a),Pt!==4&&(Pt=2),Uo===null?Uo=[s]:Uo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=e_(s,l,e);Yh(s,h);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ir===null||!ir.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=t_(s,a,e);Yh(s,y);break e}}s=s.return}while(s!==null)}y_(t)}catch(C){e=C,Rt===t&&t!==null&&(Rt=t=t.return);continue}break}while(!0)}function v_(){var n=Gl.current;return Gl.current=Hl,n===null?Hl:n}function Ff(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Bt===null||!(Hr&268435455)&&!(uc&268435455)||Xi(Bt,Vt)}function jl(n,e){var t=Qe;Qe|=2;var i=v_();(Bt!==n||Vt!==e)&&(Si=null,Dr(n,e));do try{zy();break}catch(r){__(n,r)}while(!0);if(vf(),Qe=t,Gl.current=i,Rt!==null)throw Error(ie(261));return Bt=null,Vt=0,Pt}function zy(){for(;Rt!==null;)x_(Rt)}function Hy(){for(;Rt!==null&&!fx();)x_(Rt)}function x_(n){var e=M_(n.alternate,n,Mn);n.memoizedProps=n.pendingProps,e===null?y_(n):Rt=e,Pf.current=null}function y_(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=Iy(t,e),t!==null){t.flags&=32767,Rt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Pt=6,Rt=null;return}}else if(t=Dy(t,e,Mn),t!==null){Rt=t;return}if(e=e.sibling,e!==null){Rt=e;return}Rt=e=n}while(e!==null);Pt===0&&(Pt=5)}function Er(n,e,t){var i=it,r=kn.transition;try{kn.transition=null,it=1,Gy(n,e,t,i)}finally{kn.transition=r,it=i}return null}function Gy(n,e,t,i){do Ns();while(Ki!==null);if(Qe&6)throw Error(ie(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ie(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(Mx(n,s),n===Bt&&(Rt=Bt=null,Vt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Pa||(Pa=!0,E_(bl,function(){return Ns(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=kn.transition,kn.transition=null;var o=it;it=1;var a=Qe;Qe|=4,Pf.current=null,Fy(n,t),p_(t,n),ly(od),Rl=!!sd,od=sd=null,n.current=t,Oy(t),hx(),Qe=a,it=o,kn.transition=s}else n.current=t;if(Pa&&(Pa=!1,Ki=n,Wl=r),s=n.pendingLanes,s===0&&(ir=null),gx(t.stateNode),gn(n,Tt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Vl)throw Vl=!1,n=bd,bd=null,n;return Wl&1&&n.tag!==0&&Ns(),s=n.pendingLanes,s&1?n===Ad?Fo++:(Fo=0,Ad=n):Fo=0,hr(),null}function Ns(){if(Ki!==null){var n=e0(Wl),e=kn.transition,t=it;try{if(kn.transition=null,it=16>n?16:n,Ki===null)var i=!1;else{if(n=Ki,Ki=null,Wl=0,Qe&6)throw Error(ie(331));var r=Qe;for(Qe|=4,pe=n.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(pe=c;pe!==null;){var d=pe;switch(d.tag){case 0:case 11:case 15:Io(8,d,s)}var f=d.child;if(f!==null)f.return=d,pe=f;else for(;pe!==null;){d=pe;var u=d.sibling,p=d.return;if(d_(d),d===c){pe=null;break}if(u!==null){u.return=p,pe=u;break}pe=p}}}var g=s.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Io(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,pe=h;break e}pe=s.return}}var _=n.current;for(pe=_;pe!==null;){o=pe;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,pe=v;else e:for(o=_;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:cc(9,a)}}catch(C){Mt(a,a.return,C)}if(a===o){pe=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,pe=y;break e}pe=a.return}}if(Qe=r,hr(),li&&typeof li.onPostCommitFiberRoot=="function")try{li.onPostCommitFiberRoot(tc,n)}catch{}i=!0}return i}finally{it=t,kn.transition=e}}return!1}function pp(n,e,t){e=Hs(t,e),e=e_(n,e,1),n=nr(n,e,1),e=ln(),n!==null&&(ca(n,1,e),gn(n,e))}function Mt(n,e,t){if(n.tag===3)pp(n,n,t);else for(;e!==null;){if(e.tag===3){pp(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ir===null||!ir.has(i))){n=Hs(t,n),n=t_(e,n,1),e=nr(e,n,1),n=ln(),e!==null&&(ca(e,1,n),gn(e,n));break}}e=e.return}}function Vy(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=ln(),n.pingedLanes|=n.suspendedLanes&t,Bt===n&&(Vt&t)===t&&(Pt===4||Pt===3&&(Vt&130023424)===Vt&&500>Tt()-Df?Dr(n,0):Nf|=t),gn(n,e)}function S_(n,e){e===0&&(n.mode&1?(e=Sa,Sa<<=1,!(Sa&130023424)&&(Sa=4194304)):e=1);var t=ln();n=Pi(n,e),n!==null&&(ca(n,e,t),gn(n,t))}function Wy(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),S_(n,t)}function jy(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),S_(n,t)}var M_;M_=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||pn.current)hn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return hn=!1,Ny(n,e,t);hn=!!(n.flags&131072)}else hn=!1,pt&&e.flags&1048576&&b0(e,Ul,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ml(n,e),n=e.pendingProps;var r=Os(e,en.current);Ps(e,t),r=bf(null,e,i,n,r,t);var s=Af();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mn(i)?(s=!0,Dl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Sf(e),r.updater=lc,e.stateNode=r,r._reactInternals=e,md(e,i,n,t),e=vd(null,e,i,!0,s,t)):(e.tag=0,pt&&s&&pf(e),on(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(ml(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Yy(i),n=jn(i,n),r){case 0:e=_d(null,e,i,n,t);break e;case 1:e=rp(null,e,i,n,t);break e;case 11:e=np(null,e,i,n,t);break e;case 14:e=ip(null,e,i,jn(i.type,n),t);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),_d(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),rp(n,e,i,r,t);case 3:e:{if(s_(e),n===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,N0(n,e),kl(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Hs(Error(ie(423)),e),e=sp(n,e,i,t,r);break e}else if(i!==r){r=Hs(Error(ie(424)),e),e=sp(n,e,i,t,r);break e}else for(En=tr(e.stateNode.containerInfo.firstChild),wn=e,pt=!0,Yn=null,t=L0(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ks(),i===r){e=Ni(n,e,t);break e}on(n,e,i,t)}e=e.child}return e;case 5:return D0(e),n===null&&fd(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,ad(i,r)?o=null:s!==null&&ad(i,s)&&(e.flags|=32),r_(n,e),on(n,e,o,t),e.child;case 6:return n===null&&fd(e),null;case 13:return o_(n,e,t);case 4:return Mf(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Bs(e,null,i,t):on(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),np(n,e,i,r,t);case 7:return on(n,e,e.pendingProps,t),e.child;case 8:return on(n,e,e.pendingProps.children,t),e.child;case 12:return on(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ct(Fl,i._currentValue),i._currentValue=o,s!==null)if(Qn(s.value,o)){if(s.children===r.children&&!pn.current){e=Ni(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ri(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),hd(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),hd(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}on(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ps(e,t),r=Bn(r),i=i(r),e.flags|=1,on(n,e,i,t),e.child;case 14:return i=e.type,r=jn(i,e.pendingProps),r=jn(i.type,r),ip(n,e,i,r,t);case 15:return n_(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),ml(n,e),e.tag=1,mn(i)?(n=!0,Dl(e)):n=!1,Ps(e,t),J0(e,i,r),md(e,i,r,t),vd(null,e,i,!0,n,t);case 19:return a_(n,e,t);case 22:return i_(n,e,t)}throw Error(ie(156,e.tag))};function E_(n,e){return $g(n,e)}function Xy(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(n,e,t,i){return new Xy(n,e,t,i)}function Of(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Yy(n){if(typeof n=="function")return Of(n)?1:0;if(n!=null){if(n=n.$$typeof,n===tf)return 11;if(n===nf)return 14}return 2}function sr(n,e){var t=n.alternate;return t===null?(t=On(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function vl(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Of(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ps:return Ir(t.children,r,s,e);case ef:o=8,r|=8;break;case Bu:return n=On(12,t,e,r|2),n.elementType=Bu,n.lanes=s,n;case zu:return n=On(13,t,e,r),n.elementType=zu,n.lanes=s,n;case Hu:return n=On(19,t,e,r),n.elementType=Hu,n.lanes=s,n;case Dg:return dc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Pg:o=10;break e;case Ng:o=9;break e;case tf:o=11;break e;case nf:o=14;break e;case Gi:o=16,i=null;break e}throw Error(ie(130,n==null?n:typeof n,""))}return e=On(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Ir(n,e,t,i){return n=On(7,n,i,e),n.lanes=t,n}function dc(n,e,t,i){return n=On(22,n,i,e),n.elementType=Dg,n.lanes=t,n.stateNode={isHidden:!1},n}function Zc(n,e,t){return n=On(6,n,null,e),n.lanes=t,n}function Qc(n,e,t){return e=On(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function qy(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nc(0),this.expirationTimes=Nc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function kf(n,e,t,i,r,s,o,a,l){return n=new qy(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=On(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sf(s),n}function Ky(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hs,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function w_(n){if(!n)return ur;n=n._reactInternals;e:{if(qr(n)!==n||n.tag!==1)throw Error(ie(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(n.tag===1){var t=n.type;if(mn(t))return w0(n,t,e)}return e}function T_(n,e,t,i,r,s,o,a,l){return n=kf(t,i,!0,n,r,s,o,a,l),n.context=w_(null),t=n.current,i=ln(),r=rr(t),s=Ri(i,r),s.callback=e??null,nr(t,s,r),n.current.lanes=r,ca(n,r,i),gn(n,i),n}function fc(n,e,t,i){var r=e.current,s=ln(),o=rr(r);return t=w_(t),e.context===null?e.context=t:e.pendingContext=t,e=Ri(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=nr(r,e,o),n!==null&&($n(n,r,o,s),fl(n,r,o)),o}function Xl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function mp(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Bf(n,e){mp(n,e),(n=n.alternate)&&mp(n,e)}function $y(){return null}var b_=typeof reportError=="function"?reportError:function(n){console.error(n)};function zf(n){this._internalRoot=n}hc.prototype.render=zf.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ie(409));fc(n,e,null,null)};hc.prototype.unmount=zf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Gr(function(){fc(null,n,null,null)}),e[Li]=null}};function hc(n){this._internalRoot=n}hc.prototype.unstable_scheduleHydration=function(n){if(n){var e=i0();n={blockedOn:null,target:n,priority:e};for(var t=0;t<ji.length&&e!==0&&e<ji[t].priority;t++);ji.splice(t,0,n),t===0&&s0(n)}};function Hf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function pc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function gp(){}function Zy(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Xl(o);s.call(c)}}var o=T_(e,i,n,0,null,!1,!1,"",gp);return n._reactRootContainer=o,n[Li]=o.current,Ko(n.nodeType===8?n.parentNode:n),Gr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Xl(l);a.call(c)}}var l=kf(n,0,!1,null,null,!1,!1,"",gp);return n._reactRootContainer=l,n[Li]=l.current,Ko(n.nodeType===8?n.parentNode:n),Gr(function(){fc(e,l,t,i)}),l}function mc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Xl(o);a.call(l)}}fc(e,o,n,r)}else o=Zy(t,e,n,r,i);return Xl(o)}t0=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=bo(e.pendingLanes);t!==0&&(of(e,t|1),gn(e,Tt()),!(Qe&6)&&(Gs=Tt()+500,hr()))}break;case 13:Gr(function(){var i=Pi(n,1);if(i!==null){var r=ln();$n(i,n,1,r)}}),Bf(n,1)}};af=function(n){if(n.tag===13){var e=Pi(n,134217728);if(e!==null){var t=ln();$n(e,n,134217728,t)}Bf(n,134217728)}};n0=function(n){if(n.tag===13){var e=rr(n),t=Pi(n,e);if(t!==null){var i=ln();$n(t,n,e,i)}Bf(n,e)}};i0=function(){return it};r0=function(n,e){var t=it;try{return it=n,e()}finally{it=t}};Zu=function(n,e,t){switch(e){case"input":if(Wu(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=sc(i);if(!r)throw Error(ie(90));Ug(i),Wu(i,r)}}}break;case"textarea":Og(n,t);break;case"select":e=t.value,e!=null&&As(n,!!t.multiple,e,!1)}};Wg=If;jg=Gr;var Qy={usingClientEntryPoint:!1,Events:[da,vs,sc,Gg,Vg,If]},mo={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jy={bundleType:mo.bundleType,version:mo.version,rendererPackageName:mo.rendererPackageName,rendererConfig:mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ii.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=qg(n),n===null?null:n.stateNode},findFiberByHostInstance:mo.findFiberByHostInstance||$y,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Na=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Na.isDisabled&&Na.supportsFiber)try{tc=Na.inject(Jy),li=Na}catch{}}bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qy;bn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hf(e))throw Error(ie(200));return Ky(n,e,null,t)};bn.createRoot=function(n,e){if(!Hf(n))throw Error(ie(299));var t=!1,i="",r=b_;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=kf(n,1,!1,null,null,t,!1,i,r),n[Li]=e.current,Ko(n.nodeType===8?n.parentNode:n),new zf(e)};bn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ie(188)):(n=Object.keys(n).join(","),Error(ie(268,n)));return n=qg(e),n=n===null?null:n.stateNode,n};bn.flushSync=function(n){return Gr(n)};bn.hydrate=function(n,e,t){if(!pc(e))throw Error(ie(200));return mc(null,n,e,!0,t)};bn.hydrateRoot=function(n,e,t){if(!Hf(n))throw Error(ie(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=b_;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=T_(e,null,n,1,t??null,r,!1,s,o),n[Li]=e.current,Ko(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new hc(e)};bn.render=function(n,e,t){if(!pc(e))throw Error(ie(200));return mc(null,n,e,!1,t)};bn.unmountComponentAtNode=function(n){if(!pc(n))throw Error(ie(40));return n._reactRootContainer?(Gr(function(){mc(null,null,n,!1,function(){n._reactRootContainer=null,n[Li]=null})}),!0):!1};bn.unstable_batchedUpdates=If;bn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!pc(t))throw Error(ie(200));if(n==null||n._reactInternals===void 0)throw Error(ie(38));return mc(n,e,t,!1,i)};bn.version="18.3.1-next-f1338f8080-20240426";function A_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A_)}catch(n){console.error(n)}}A_(),Ag.exports=bn;var eS=Ag.exports,_p=eS;Ou.createRoot=_p.createRoot,Ou.hydrateRoot=_p.hydrateRoot;/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var tS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Ct=(n,e)=>{const t=He.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},d)=>He.createElement("svg",{ref:d,...tS,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${nS(n)}`,a].join(" "),...c},[...e.map(([f,u])=>He.createElement(f,u)),...Array.isArray(l)?l:[l]]));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=Ct("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=Ct("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_=Ct("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=Ct("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=Ct("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=Ct("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=Ct("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=Ct("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=Ct("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=Ct("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",key:"1xcu5"}],["circle",{cx:"17.5",cy:"10.5",r:".5",key:"736e4u"}],["circle",{cx:"8.5",cy:"7.5",r:".5",key:"clrty"}],["circle",{cx:"6.5",cy:"12.5",r:".5",key:"1s4xz9"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=Ct("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=Ct("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_=Ct("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=Ct("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=Ct("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=Ct("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=Ct("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=Ct("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=Ct("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=Ct("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Sp=[{label:"Models",sub:["3 Series","5 Series","7 Series","M Series","X Series","i Series"]},{label:"Configure",sub:null},{label:"Finance",sub:null},{label:"Experience",sub:null},{label:"About BMW",sub:null}];function mS({activeSection:n,onNavigate:e}){const[t,i]=He.useState(!1),[r,s]=He.useState(!1),[o,a]=He.useState(null);return He.useEffect(()=>{const l=()=>i(window.scrollY>20);return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]),T.jsxs("nav",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${t?"bg-bmw-black/90 backdrop-blur-xl border-b border-white/5 py-3":"bg-transparent py-5"}`,children:[T.jsxs("div",{className:"max-w-[1400px] mx-auto px-6 flex items-center justify-between",children:[T.jsxs("button",{onClick:()=>e==null?void 0:e("home"),className:"flex items-center gap-3 group",children:[T.jsx(gS,{}),T.jsxs("div",{className:"hidden sm:block",children:[T.jsx("div",{className:"font-display text-lg font-700 tracking-[0.2em] text-white uppercase",children:"BMW"}),T.jsx("div",{className:"text-[9px] text-bmw-silver/50 tracking-[0.35em] uppercase -mt-0.5",children:"Showroom"})]})]}),T.jsx("div",{className:"hidden lg:flex items-center gap-1",children:Sp.map(l=>T.jsxs("div",{className:"relative",onMouseEnter:()=>a(l.label),onMouseLeave:()=>a(null),children:[T.jsxs("button",{className:"flex items-center gap-1 px-4 py-2 text-sm font-body font-500 text-white/70 hover:text-white transition-colors duration-200 tracking-wide",children:[l.label,l.sub&&T.jsx(R_,{size:12,className:`transition-transform duration-200 ${o===l.label?"rotate-180":""}`})]}),l.sub&&o===l.label&&T.jsx("div",{className:"absolute top-full left-0 mt-2 w-48 bg-bmw-dark/95 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden shadow-2xl animate-fade-in",children:l.sub.map(c=>T.jsx("button",{className:"w-full text-left px-4 py-2.5 text-sm text-white/60 hover:text-white hover:bg-bmw-blue/20 transition-all duration-150 font-body tracking-wide",children:c},c))})]},l.label))}),T.jsxs("div",{className:"flex items-center gap-2",children:[T.jsx("button",{className:"hidden md:flex items-center gap-2 px-4 py-2 text-sm text-white/60 hover:text-white transition-colors",children:T.jsx(dS,{size:16})}),T.jsxs("button",{className:"hidden md:flex items-center gap-2 px-4 py-2 text-sm text-white/60 hover:text-white transition-colors",children:[T.jsx(uS,{size:16}),T.jsx("span",{className:"font-body tracking-wide",children:"Contact"})]}),T.jsx("button",{className:"px-5 py-2.5 bg-bmw-blue hover:bg-bmw-blue-dark text-white text-sm font-body font-500 rounded-sm tracking-wider transition-all duration-200 hover:shadow-[0_0_20px_rgba(28,105,212,0.4)] hidden md:block",children:"Book Test Drive"}),T.jsx("button",{className:"lg:hidden p-2 text-white/70",onClick:()=>s(!r),children:r?T.jsx(hS,{size:22}):T.jsx(aS,{size:22})})]})]}),r&&T.jsxs("div",{className:"lg:hidden bg-bmw-dark/98 backdrop-blur-xl border-t border-white/5 animate-slide-up",children:[Sp.map(l=>T.jsx("button",{className:"w-full text-left px-6 py-4 text-base text-white/70 hover:text-white hover:bg-white/5 transition-colors border-b border-white/5 font-body tracking-wide",children:l.label},l.label)),T.jsx("div",{className:"p-6",children:T.jsx("button",{className:"w-full py-3 bg-bmw-blue text-white font-body font-500 tracking-wider rounded-sm",children:"Book Test Drive"})})]})]})}function gS({size:n=44}){return T.jsxs("svg",{width:n,height:n,viewBox:"0 0 100 100",fill:"none",children:[T.jsx("circle",{cx:"50",cy:"50",r:"48",fill:"#0A0A0A",stroke:"#C0C0C0",strokeWidth:"3"}),T.jsx("circle",{cx:"50",cy:"50",r:"38",fill:"none",stroke:"#C0C0C0",strokeWidth:"2"}),T.jsx("path",{d:"M50 12 A38 38 0 0 1 88 50 L50 50 Z",fill:"#1C69D4"}),T.jsx("path",{d:"M50 88 A38 38 0 0 1 12 50 L50 50 Z",fill:"#1C69D4"}),T.jsx("path",{d:"M12 50 A38 38 0 0 1 50 12 L50 50 Z",fill:"white"}),T.jsx("path",{d:"M88 50 A38 38 0 0 1 50 88 L50 50 Z",fill:"white"}),T.jsx("circle",{cx:"50",cy:"50",r:"12",fill:"#0A0A0A"}),T.jsx("line",{x1:"50",y1:"12",x2:"50",y2:"88",stroke:"#C0C0C0",strokeWidth:"2"}),T.jsx("line",{x1:"12",y1:"50",x2:"88",y2:"50",stroke:"#C0C0C0",strokeWidth:"2"})]})}function _S({onExplore:n}){return T.jsxs("div",{className:"relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-bmw-black",children:[T.jsx("div",{className:"absolute inset-0 opacity-10",style:{backgroundImage:`
            linear-gradient(rgba(28,105,212,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(28,105,212,0.3) 1px, transparent 1px)
          `,backgroundSize:"60px 60px"}}),T.jsx("div",{className:"absolute inset-0 bg-gradient-radial from-bmw-blue/8 via-transparent to-transparent"}),T.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[15,35,55,72,85].map((e,t)=>T.jsx("div",{className:"absolute h-px bg-gradient-to-r from-transparent via-bmw-blue/20 to-transparent",style:{top:`${e}%`,left:0,right:0,animationDelay:`${t*.3}s`}},t))}),T.jsxs("div",{className:"relative z-10 text-center px-6 max-w-5xl mx-auto transition-all duration-1000 opacity-100 translate-y-0",children:[T.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-1.5 border border-bmw-blue/30 rounded-full text-bmw-blue-light text-xs font-body tracking-[0.3em] uppercase mb-8",style:{transitionDelay:"200ms"},children:[T.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-bmw-blue animate-pulse"}),"BMW Showroom India — 2024"]}),T.jsxs("h1",{className:"font-display text-white mb-6 leading-none",style:{transitionDelay:"300ms"},children:[T.jsx("span",{className:"block text-[clamp(3.5rem,10vw,8rem)] font-800 tracking-[-0.02em] text-gradient",children:"The Ultimate"}),T.jsx("span",{className:"block text-[clamp(3.5rem,10vw,8rem)] font-800 tracking-[-0.02em] text-gradient-blue",children:"Driving Machine"})]}),T.jsx("p",{className:"text-white/40 text-lg font-body font-300 max-w-xl mx-auto leading-relaxed mb-12",style:{transitionDelay:"400ms"},children:"Experience every BMW model in stunning 3D. Configure your perfect drive, explore specs, and begin your journey."}),T.jsxs("div",{className:"flex items-center justify-center gap-4 flex-wrap",style:{transitionDelay:"500ms"},children:[T.jsxs("button",{onClick:n,className:"group px-8 py-4 bg-bmw-blue hover:bg-bmw-blue-dark text-white font-display font-600 text-sm tracking-[0.2em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(28,105,212,0.5)] flex items-center gap-3",children:["Explore Models",T.jsx(iS,{size:16,className:"group-hover:translate-y-1 transition-transform duration-200"})]}),T.jsxs("button",{className:"group px-8 py-4 border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-display font-500 text-sm tracking-[0.2em] uppercase rounded-sm transition-all duration-300 flex items-center gap-3",children:[T.jsx(C_,{size:14,fill:"currentColor"}),"Watch Film"]})]})]}),T.jsx("div",{className:"absolute bottom-20 left-0 right-0 flex justify-center gap-12 sm:gap-20 transition-all duration-1000 delay-700 opacity-100",children:[{label:"BMW Models",value:"9+"},{label:"Years of Excellence",value:"107"},{label:"Happy Owners",value:"500K+"}].map(({label:e,value:t})=>T.jsxs("div",{className:"text-center",children:[T.jsx("div",{className:"font-display text-2xl font-700 text-white tracking-wide",children:t}),T.jsx("div",{className:"text-[10px] text-white/30 font-body tracking-[0.25em] uppercase mt-1",children:e})]},e))}),T.jsxs("div",{className:"absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30",children:[T.jsx("span",{className:"text-[10px] text-white font-body tracking-[0.3em] uppercase",children:"Scroll"}),T.jsx("div",{className:"w-px h-10 bg-gradient-to-b from-white to-transparent"})]})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gf="160",vS=0,Mp=1,xS=2,P_=1,N_=2,yi=3,Di=0,_n=1,Dn=2,or=0,Ds=1,Ep=2,wp=3,Tp=4,yS=5,br=100,SS=101,MS=102,bp=103,Ap=104,ES=200,wS=201,TS=202,bS=203,Pd=204,Nd=205,AS=206,RS=207,CS=208,LS=209,PS=210,NS=211,DS=212,IS=213,US=214,FS=0,OS=1,kS=2,Yl=3,BS=4,zS=5,HS=6,GS=7,D_=0,VS=1,WS=2,ar=0,jS=1,XS=2,YS=3,I_=4,qS=5,KS=6,Rp="attached",$S="detached",U_=300,Vs=301,Ws=302,Dd=303,Id=304,gc=306,js=1e3,In=1001,ql=1002,kt=1003,Ud=1004,yl=1005,fn=1006,F_=1007,Vr=1008,lr=1009,ZS=1010,QS=1011,Vf=1012,O_=1013,$i=1014,bi=1015,ra=1016,k_=1017,B_=1018,Ur=1020,JS=1021,Un=1023,eM=1024,tM=1025,Fr=1026,Xs=1027,nM=1028,z_=1029,iM=1030,H_=1031,G_=1033,Jc=33776,eu=33777,tu=33778,nu=33779,Cp=35840,Lp=35841,Pp=35842,Np=35843,V_=36196,Dp=37492,Ip=37496,Up=37808,Fp=37809,Op=37810,kp=37811,Bp=37812,zp=37813,Hp=37814,Gp=37815,Vp=37816,Wp=37817,jp=37818,Xp=37819,Yp=37820,qp=37821,iu=36492,Kp=36494,$p=36495,rM=36283,Zp=36284,Qp=36285,Jp=36286,sa=2300,Ys=2301,ru=2302,em=2400,tm=2401,nm=2402,sM=2500,oM=0,W_=1,Fd=2,j_=3e3,Or=3001,aM=3200,lM=3201,X_=0,cM=1,Fn="",_t="srgb",Ht="srgb-linear",Wf="display-p3",_c="display-p3-linear",Kl="linear",dt="srgb",$l="rec709",Zl="p3",$r=7680,im=519,uM=512,dM=513,fM=514,Y_=515,hM=516,pM=517,mM=518,gM=519,Od=35044,rm="300 es",kd=1035,Ai=2e3,Ql=2001;class to{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sm=1234567;const Oo=Math.PI/180,qs=180/Math.PI;function Zn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function Qt(n,e,t){return Math.max(e,Math.min(t,n))}function jf(n,e){return(n%e+e)%e}function _M(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function vM(n,e,t){return n!==e?(t-n)/(e-n):0}function ko(n,e,t){return(1-t)*n+t*e}function xM(n,e,t,i){return ko(n,e,1-Math.exp(-t*i))}function yM(n,e=1){return e-Math.abs(jf(n,e*2)-e)}function SM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function MM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function EM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function wM(n,e){return n+Math.random()*(e-n)}function TM(n){return n*(.5-Math.random())}function bM(n){n!==void 0&&(sm=n);let e=sm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function AM(n){return n*Oo}function RM(n){return n*qs}function Bd(n){return(n&n-1)===0&&n!==0}function CM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Jl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function LM(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),d=o((e+i)/2),f=s((e-i)/2),u=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*d,l*f,l*u,a*c);break;case"YZY":n.set(l*u,a*d,l*f,a*c);break;case"ZXZ":n.set(l*f,l*u,a*d,a*c);break;case"XZX":n.set(a*d,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*d,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function oi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function rt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const PM={DEG2RAD:Oo,RAD2DEG:qs,generateUUID:Zn,clamp:Qt,euclideanModulo:jf,mapLinear:_M,inverseLerp:vM,lerp:ko,damp:xM,pingpong:yM,smoothstep:SM,smootherstep:MM,randInt:EM,randFloat:wM,randFloatSpread:TM,seededRandom:bM,degToRad:AM,radToDeg:RM,isPowerOfTwo:Bd,ceilPowerOfTwo:CM,floorPowerOfTwo:Jl,setQuaternionFromProperEuler:LM,normalize:rt,denormalize:oi};class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,i,r,s,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],u=i[2],p=i[5],g=i[8],x=r[0],m=r[3],h=r[6],_=r[1],v=r[4],y=r[7],C=r[2],R=r[5],A=r[8];return s[0]=o*x+a*_+l*C,s[3]=o*m+a*v+l*R,s[6]=o*h+a*y+l*A,s[1]=c*x+d*_+f*C,s[4]=c*m+d*v+f*R,s[7]=c*h+d*y+f*A,s[2]=u*x+p*_+g*C,s[5]=u*m+p*v+g*R,s[8]=u*h+p*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,u=a*l-d*s,p=c*s-o*l,g=t*f+i*u+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=f*x,e[1]=(r*c-d*i)*x,e[2]=(a*i-r*o)*x,e[3]=u*x,e[4]=(d*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(su.makeScale(e,t)),this}rotate(e){return this.premultiply(su.makeRotation(-e)),this}translate(e,t){return this.premultiply(su.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const su=new je;function q_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function oa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function NM(){const n=oa("canvas");return n.style.display="block",n}const om={};function Bo(n){n in om||(om[n]=!0,console.warn(n))}const am=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),lm=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Da={[Ht]:{transfer:Kl,primaries:$l,toReference:n=>n,fromReference:n=>n},[_t]:{transfer:dt,primaries:$l,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[_c]:{transfer:Kl,primaries:Zl,toReference:n=>n.applyMatrix3(lm),fromReference:n=>n.applyMatrix3(am)},[Wf]:{transfer:dt,primaries:Zl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(lm),fromReference:n=>n.applyMatrix3(am).convertLinearToSRGB()}},DM=new Set([Ht,_c]),tt={enabled:!0,_workingColorSpace:Ht,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!DM.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Da[e].toReference,r=Da[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Da[n].primaries},getTransfer:function(n){return n===Fn?Kl:Da[n].transfer}};function Is(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ou(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Zr;class K_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zr===void 0&&(Zr=oa("canvas")),Zr.width=e.width,Zr.height=e.height;const i=Zr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Zr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=oa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Is(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Is(t[i]/255)*255):t[i]=Is(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let IM=0;class $_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=Zn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(au(r[o].image)):s.push(au(r[o]))}else s=au(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function au(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?K_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let UM=0;class Wt extends to{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,i=In,r=In,s=fn,o=Vr,a=Un,l=lr,c=Wt.DEFAULT_ANISOTROPY,d=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=Zn(),this.name="",this.source=new $_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Bo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Or?_t:Fn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==U_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case js:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case ql:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case js:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case ql:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Bo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===_t?Or:j_}set encoding(e){Bo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Or?_t:Fn}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=U_;Wt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,i=0,r=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],u=l[1],p=l[5],g=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(d-u)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(p+1)/2,C=(h+1)/2,R=(d+u)/4,A=(f+x)/4,D=(g+m)/4;return v>y&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=R/i,s=A/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=R/r,s=D/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=D/s),this.set(i,r,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(u-d)*(u-d));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(f-x)/_,this.z=(u-d)/_,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class FM extends to{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Bo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Or?_t:Fn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Wt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wr extends FM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Z_ extends Wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class OM extends Wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const u=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f;return}if(a===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(f!==x||l!==u||c!==p||d!==g){let m=1-a;const h=l*u+c*p+d*g+f*x,_=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const C=Math.sqrt(v),R=Math.atan2(C,h*_);m=Math.sin(m*R)/C,a=Math.sin(a*R)/C}const y=a*_;if(l=l*m+u*y,c=c*m+p*y,d=d*m+g*y,f=f*m+x*y,m===1-a){const C=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=C,c*=C,d*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[o],u=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+d*f+l*p-c*u,e[t+1]=l*g+d*u+c*f-a*p,e[t+2]=c*g+d*p+a*u-l*f,e[t+3]=d*g-a*f-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(s/2),u=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=u*d*f+c*p*g,this._y=c*p*f-u*d*g,this._z=c*d*g+u*p*f,this._w=c*d*f-u*p*g;break;case"YXZ":this._x=u*d*f+c*p*g,this._y=c*p*f-u*d*g,this._z=c*d*g-u*p*f,this._w=c*d*f+u*p*g;break;case"ZXY":this._x=u*d*f-c*p*g,this._y=c*p*f+u*d*g,this._z=c*d*g+u*p*f,this._w=c*d*f-u*p*g;break;case"ZYX":this._x=u*d*f-c*p*g,this._y=c*p*f+u*d*g,this._z=c*d*g-u*p*f,this._w=c*d*f+u*p*g;break;case"YZX":this._x=u*d*f+c*p*g,this._y=c*p*f+u*d*g,this._z=c*d*g-u*p*f,this._w=c*d*f-u*p*g;break;case"XZY":this._x=u*d*f-c*p*g,this._y=c*p*f-u*d*g,this._z=c*d*g+u*p*f,this._w=c*d*f+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],f=t[10],u=i+a+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-t)*d)/c,u=Math.sin(t*d)/c;return this._w=o*f+this._w*u,this._x=i*f+this._x*u,this._y=r*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*d,this.y=i+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return lu.copy(this).projectOnVector(e),this.sub(lu)}reflect(e){return this.sub(lu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lu=new N,cm=new pr;class Jn{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gn):Gn.fromBufferAttribute(s,o),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ia.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ia.copy(i.boundingBox)),Ia.applyMatrix4(e.matrixWorld),this.union(Ia)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(go),Ua.subVectors(this.max,go),Qr.subVectors(e.a,go),Jr.subVectors(e.b,go),es.subVectors(e.c,go),Fi.subVectors(Jr,Qr),Oi.subVectors(es,Jr),_r.subVectors(Qr,es);let t=[0,-Fi.z,Fi.y,0,-Oi.z,Oi.y,0,-_r.z,_r.y,Fi.z,0,-Fi.x,Oi.z,0,-Oi.x,_r.z,0,-_r.x,-Fi.y,Fi.x,0,-Oi.y,Oi.x,0,-_r.y,_r.x,0];return!cu(t,Qr,Jr,es,Ua)||(t=[1,0,0,0,1,0,0,0,1],!cu(t,Qr,Jr,es,Ua))?!1:(Fa.crossVectors(Fi,Oi),t=[Fa.x,Fa.y,Fa.z],cu(t,Qr,Jr,es,Ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pi=[new N,new N,new N,new N,new N,new N,new N,new N],Gn=new N,Ia=new Jn,Qr=new N,Jr=new N,es=new N,Fi=new N,Oi=new N,_r=new N,go=new N,Ua=new N,Fa=new N,vr=new N;function cu(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){vr.fromArray(n,s);const a=r.x*Math.abs(vr.x)+r.y*Math.abs(vr.y)+r.z*Math.abs(vr.z),l=e.dot(vr),c=t.dot(vr),d=i.dot(vr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const kM=new Jn,_o=new N,uu=new N;class di{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):kM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_o.subVectors(e,this.center);const t=_o.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(_o,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_o.copy(e.center).add(uu)),this.expandByPoint(_o.copy(e.center).sub(uu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new N,du=new N,Oa=new N,ki=new N,fu=new N,ka=new N,hu=new N;class vc{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){du.copy(e).add(t).multiplyScalar(.5),Oa.copy(t).sub(e).normalize(),ki.copy(this.origin).sub(du);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Oa),a=ki.dot(this.direction),l=-ki.dot(Oa),c=ki.lengthSq(),d=Math.abs(1-o*o);let f,u,p,g;if(d>0)if(f=o*l-a,u=o*a-l,g=s*d,f>=0)if(u>=-g)if(u<=g){const x=1/d;f*=x,u*=x,p=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=s,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-o*s+a)),u=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(f=Math.max(0,-(o*s+a)),u=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+u*(u+2*l)+c);else u=o>0?-s:s,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(du).addScaledVector(Oa,u),p}intersectSphere(e,t){mi.subVectors(e.center,this.origin);const i=mi.dot(this.direction),r=mi.dot(mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,i,r,s){fu.subVectors(t,e),ka.subVectors(i,e),hu.crossVectors(fu,ka);let o=this.direction.dot(hu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,e);const l=a*this.direction.dot(ka.crossVectors(ki,ka));if(l<0)return null;const c=a*this.direction.dot(fu.cross(ki));if(c<0||l+c>o)return null;const d=-a*ki.dot(hu);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(e,t,i,r,s,o,a,l,c,d,f,u,p,g,x,m){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,d,f,u,p,g,x,m)}set(e,t,i,r,s,o,a,l,c,d,f,u,p,g,x,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=d,h[10]=f,h[14]=u,h[3]=p,h[7]=g,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ts.setFromMatrixColumn(e,0).length(),s=1/ts.setFromMatrixColumn(e,1).length(),o=1/ts.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=o*d,p=o*f,g=a*d,x=a*f;t[0]=l*d,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=u-x*c,t[9]=-a*l,t[2]=x-u*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*d,p=l*f,g=c*d,x=c*f;t[0]=u+x*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*d,t[9]=-a,t[2]=p*a-g,t[6]=x+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*d,p=l*f,g=c*d,x=c*f;t[0]=u-x*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*d,t[9]=x-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*d,p=o*f,g=a*d,x=a*f;t[0]=l*d,t[4]=g*c-p,t[8]=u*c+x,t[1]=l*f,t[5]=x*c+u,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*d,t[4]=x-u*f,t[8]=g*f+p,t[1]=f,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=p*f+g,t[10]=u-x*f}else if(e.order==="XZY"){const u=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*d,t[4]=-f,t[8]=c*d,t[1]=u*f+x,t[5]=o*d,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*d,t[10]=x*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(BM,e,zM)}lookAt(e,t,i){const r=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Bi.crossVectors(i,yn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Bi.crossVectors(i,yn)),Bi.normalize(),Ba.crossVectors(yn,Bi),r[0]=Bi.x,r[4]=Ba.x,r[8]=yn.x,r[1]=Bi.y,r[5]=Ba.y,r[9]=yn.y,r[2]=Bi.z,r[6]=Ba.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],u=i[9],p=i[13],g=i[2],x=i[6],m=i[10],h=i[14],_=i[3],v=i[7],y=i[11],C=i[15],R=r[0],A=r[4],D=r[8],M=r[12],E=r[1],O=r[5],z=r[9],$=r[13],P=r[2],G=r[6],V=r[10],J=r[14],I=r[3],B=r[7],H=r[11],Q=r[15];return s[0]=o*R+a*E+l*P+c*I,s[4]=o*A+a*O+l*G+c*B,s[8]=o*D+a*z+l*V+c*H,s[12]=o*M+a*$+l*J+c*Q,s[1]=d*R+f*E+u*P+p*I,s[5]=d*A+f*O+u*G+p*B,s[9]=d*D+f*z+u*V+p*H,s[13]=d*M+f*$+u*J+p*Q,s[2]=g*R+x*E+m*P+h*I,s[6]=g*A+x*O+m*G+h*B,s[10]=g*D+x*z+m*V+h*H,s[14]=g*M+x*$+m*J+h*Q,s[3]=_*R+v*E+y*P+C*I,s[7]=_*A+v*O+y*G+C*B,s[11]=_*D+v*z+y*V+C*H,s[15]=_*M+v*$+y*J+C*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],u=e[10],p=e[14],g=e[3],x=e[7],m=e[11],h=e[15];return g*(+s*l*f-r*c*f-s*a*u+i*c*u+r*a*p-i*l*p)+x*(+t*l*p-t*c*u+s*o*u-r*o*p+r*c*d-s*l*d)+m*(+t*c*f-t*a*p-s*o*f+i*o*p+s*a*d-i*c*d)+h*(-r*a*d-t*l*f+t*a*u+r*o*f-i*o*u+i*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],u=e[10],p=e[11],g=e[12],x=e[13],m=e[14],h=e[15],_=f*m*c-x*u*c+x*l*p-a*m*p-f*l*h+a*u*h,v=g*u*c-d*m*c-g*l*p+o*m*p+d*l*h-o*u*h,y=d*x*c-g*f*c+g*a*p-o*x*p-d*a*h+o*f*h,C=g*f*l-d*x*l-g*a*u+o*x*u+d*a*m-o*f*m,R=t*_+i*v+r*y+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=_*A,e[1]=(x*u*s-f*m*s-x*r*p+i*m*p+f*r*h-i*u*h)*A,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*h+i*l*h)*A,e[3]=(f*l*s-a*u*s-f*r*c+i*u*c+a*r*p-i*l*p)*A,e[4]=v*A,e[5]=(d*m*s-g*u*s+g*r*p-t*m*p-d*r*h+t*u*h)*A,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*h-t*l*h)*A,e[7]=(o*u*s-d*l*s+d*r*c-t*u*c-o*r*p+t*l*p)*A,e[8]=y*A,e[9]=(g*f*s-d*x*s-g*i*p+t*x*p+d*i*h-t*f*h)*A,e[10]=(o*x*s-g*a*s+g*i*c-t*x*c-o*i*h+t*a*h)*A,e[11]=(d*a*s-o*f*s-d*i*c+t*f*c+o*i*p-t*a*p)*A,e[12]=C*A,e[13]=(d*x*r-g*f*r+g*i*u-t*x*u-d*i*m+t*f*m)*A,e[14]=(g*a*r-o*x*r-g*i*l+t*x*l+o*i*m-t*a*m)*A,e[15]=(o*f*r-d*a*r+d*i*l-t*f*l-o*i*u+t*a*u)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,d=o+o,f=a+a,u=s*c,p=s*d,g=s*f,x=o*d,m=o*f,h=a*f,_=l*c,v=l*d,y=l*f,C=i.x,R=i.y,A=i.z;return r[0]=(1-(x+h))*C,r[1]=(p+y)*C,r[2]=(g-v)*C,r[3]=0,r[4]=(p-y)*R,r[5]=(1-(u+h))*R,r[6]=(m+_)*R,r[7]=0,r[8]=(g+v)*A,r[9]=(m-_)*A,r[10]=(1-(u+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ts.set(r[0],r[1],r[2]).length();const o=ts.set(r[4],r[5],r[6]).length(),a=ts.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vn.copy(this);const c=1/s,d=1/o,f=1/a;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=d,Vn.elements[5]*=d,Vn.elements[6]*=d,Vn.elements[8]*=f,Vn.elements[9]*=f,Vn.elements[10]*=f,t.setFromRotationMatrix(Vn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Ai){const l=this.elements,c=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),u=(i+r)/(i-r);let p,g;if(a===Ai)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ql)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ai){const l=this.elements,c=1/(t-e),d=1/(i-r),f=1/(o-s),u=(t+e)*c,p=(i+r)*d;let g,x;if(a===Ai)g=(o+s)*f,x=-2*f;else if(a===Ql)g=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ts=new N,Vn=new Xe,BM=new N(0,0,0),zM=new N(1,1,1),Bi=new N,Ba=new N,yn=new N,um=new Xe,dm=new pr;class xc{constructor(e=0,t=0,i=0,r=xc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return um.makeRotationFromQuaternion(e),this.setFromRotationMatrix(um,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dm.setFromEuler(this),this.setFromQuaternion(dm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xc.DEFAULT_ORDER="XYZ";class Q_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let HM=0;const fm=new N,ns=new pr,gi=new Xe,za=new N,vo=new N,GM=new N,VM=new pr,hm=new N(1,0,0),pm=new N(0,1,0),mm=new N(0,0,1),WM={type:"added"},jM={type:"removed"};class xt extends to{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new N,t=new xc,i=new pr,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Xe},normalMatrix:{value:new je}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Q_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(hm,e)}rotateY(e){return this.rotateOnAxis(pm,e)}rotateZ(e){return this.rotateOnAxis(mm,e)}translateOnAxis(e,t){return fm.copy(e).applyQuaternion(this.quaternion),this.position.add(fm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hm,e)}translateY(e){return this.translateOnAxis(pm,e)}translateZ(e){return this.translateOnAxis(mm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?za.copy(e):za.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(vo,za,this.up):gi.lookAt(za,vo,this.up),this.quaternion.setFromRotationMatrix(gi),r&&(gi.extractRotation(r.matrixWorld),ns.setFromRotationMatrix(gi),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(WM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jM)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,e,GM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,VM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),u=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}xt.DEFAULT_UP=new N(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new N,_i=new N,pu=new N,vi=new N,is=new N,rs=new N,gm=new N,mu=new N,gu=new N,_u=new N;let Ha=!1;class qn{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Wn.subVectors(e,t),r.cross(Wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Wn.subVectors(r,t),_i.subVectors(i,t),pu.subVectors(e,t);const o=Wn.dot(Wn),a=Wn.dot(_i),l=Wn.dot(pu),c=_i.dot(_i),d=_i.dot(pu),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const u=1/f,p=(c*l-a*d)*u,g=(o*d-a*l)*u;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getUV(e,t,i,r,s,o,a,l){return Ha===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ha=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l)}static isFrontFacing(e,t,i,r){return Wn.subVectors(i,t),_i.subVectors(e,t),Wn.cross(_i).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Wn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Ha===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ha=!0),qn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return qn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;is.subVectors(r,i),rs.subVectors(s,i),mu.subVectors(e,i);const l=is.dot(mu),c=rs.dot(mu);if(l<=0&&c<=0)return t.copy(i);gu.subVectors(e,r);const d=is.dot(gu),f=rs.dot(gu);if(d>=0&&f<=d)return t.copy(r);const u=l*f-d*c;if(u<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(i).addScaledVector(is,o);_u.subVectors(e,s);const p=is.dot(_u),g=rs.dot(_u);if(g>=0&&p<=g)return t.copy(s);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(rs,a);const m=d*g-p*f;if(m<=0&&f-d>=0&&p-g>=0)return gm.subVectors(s,r),a=(f-d)/(f-d+(p-g)),t.copy(r).addScaledVector(gm,a);const h=1/(m+x+u);return o=x*h,a=u*h,t.copy(i).addScaledVector(is,o).addScaledVector(rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const J_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Ga={h:0,s:0,l:0};function vu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ue{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=tt.workingColorSpace){if(e=jf(e,1),t=Qt(t,0,1),i=Qt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=vu(o,s,e+1/3),this.g=vu(o,s,e),this.b=vu(o,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,t=_t){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){const i=J_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}copyLinearToSRGB(e){return this.r=ou(e.r),this.g=ou(e.g),this.b=ou(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return tt.fromWorkingColorSpace($t.copy(this),e),Math.round(Qt($t.r*255,0,255))*65536+Math.round(Qt($t.g*255,0,255))*256+Math.round(Qt($t.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace($t.copy(this),t);const i=$t.r,r=$t.g,s=$t.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=_t){tt.fromWorkingColorSpace($t.copy(this),e);const t=$t.r,i=$t.g,r=$t.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(Ga);const i=ko(zi.h,Ga.h,t),r=ko(zi.s,Ga.s,t),s=ko(zi.l,Ga.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new Ue;Ue.NAMES=J_;let XM=0;class ui extends to{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=Ds,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pd,this.blendDst=Nd,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Yl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=im,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(i.blending=this.blending),this.side!==Di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pd&&(i.blendSrc=this.blendSrc),this.blendDst!==Nd&&(i.blendDst=this.blendDst),this.blendEquation!==br&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Yl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==im&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$r&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$r&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$r&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Pr extends ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=D_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new N,Va=new qe;class Jt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Od,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Va.fromBufferAttribute(this,t),Va.applyMatrix3(e),this.setXY(t,Va.x,Va.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=oi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=rt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),r=rt(r,this.array),s=rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Od&&(e.usage=this.usage),e}}class ev extends Jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class tv extends Jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class zt extends Jt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let YM=0;const Cn=new Xe,xu=new xt,ss=new N,Sn=new Jn,xo=new Jn,Ft=new N;class vn extends to{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(q_(e)?tv:ev)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,i){return Cn.makeTranslation(e,t,i),this.applyMatrix4(Cn),this}scale(e,t,i){return Cn.makeScale(e,t,i),this.applyMatrix4(Cn),this}lookAt(e){return xu.lookAt(e),xu.updateMatrix(),this.applyMatrix4(xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new zt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];xo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(Sn.min,xo.min),Sn.expandByPoint(Ft),Ft.addVectors(Sn.max,xo.max),Sn.expandByPoint(Ft)):(Sn.expandByPoint(xo.min),Sn.expandByPoint(xo.max))}Sn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Ft.fromBufferAttribute(a,c),l&&(ss.fromBufferAttribute(e,c),Ft.add(ss)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let E=0;E<a;E++)c[E]=new N,d[E]=new N;const f=new N,u=new N,p=new N,g=new qe,x=new qe,m=new qe,h=new N,_=new N;function v(E,O,z){f.fromArray(r,E*3),u.fromArray(r,O*3),p.fromArray(r,z*3),g.fromArray(o,E*2),x.fromArray(o,O*2),m.fromArray(o,z*2),u.sub(f),p.sub(f),x.sub(g),m.sub(g);const $=1/(x.x*m.y-m.x*x.y);isFinite($)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar($),_.copy(p).multiplyScalar(x.x).addScaledVector(u,-m.x).multiplyScalar($),c[E].add(h),c[O].add(h),c[z].add(h),d[E].add(_),d[O].add(_),d[z].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let E=0,O=y.length;E<O;++E){const z=y[E],$=z.start,P=z.count;for(let G=$,V=$+P;G<V;G+=3)v(i[G+0],i[G+1],i[G+2])}const C=new N,R=new N,A=new N,D=new N;function M(E){A.fromArray(s,E*3),D.copy(A);const O=c[E];C.copy(O),C.sub(A.multiplyScalar(A.dot(O))).normalize(),R.crossVectors(D,O);const $=R.dot(d[E])<0?-1:1;l[E*4]=C.x,l[E*4+1]=C.y,l[E*4+2]=C.z,l[E*4+3]=$}for(let E=0,O=y.length;E<O;++E){const z=y[E],$=z.start,P=z.count;for(let G=$,V=$+P;G<V;G+=3)M(i[G+0]),M(i[G+1]),M(i[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,d=new N,f=new N;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,u=new c.constructor(l.length*d);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*d;for(let h=0;h<d;h++)u[g++]=c[p++]}return new Jt(u,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const u=c[d],p=e(u,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,u=c.length;f<u;f++){const p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let u=0,p=f.length;u<p;u++)d.push(f[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _m=new Xe,xr=new vc,Wa=new di,vm=new N,os=new N,as=new N,ls=new N,yu=new N,ja=new N,Xa=new qe,Ya=new qe,qa=new qe,xm=new N,ym=new N,Sm=new N,Ka=new N,$a=new N;class Ee extends xt{constructor(e=new vn,t=new Pr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ja.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(yu.fromBufferAttribute(f,e),o?ja.addScaledVector(yu,d):ja.addScaledVector(yu.sub(t),d))}t.add(ja)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wa.copy(i.boundingSphere),Wa.applyMatrix4(s),xr.copy(e.ray).recast(e.near),!(Wa.containsPoint(xr.origin)===!1&&(xr.intersectSphere(Wa,vm)===null||xr.origin.distanceToSquared(vm)>(e.far-e.near)**2))&&(_m.copy(s).invert(),xr.copy(e.ray).applyMatrix4(_m),!(i.boundingBox!==null&&xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){const m=u[g],h=o[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,C=v;y<C;y+=3){const R=a.getX(y),A=a.getX(y+1),D=a.getX(y+2);r=Za(this,h,e,i,c,d,f,R,A,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,h=x;m<h;m+=3){const _=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);r=Za(this,o,e,i,c,d,f,_,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){const m=u[g],h=o[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,C=v;y<C;y+=3){const R=y,A=y+1,D=y+2;r=Za(this,h,e,i,c,d,f,R,A,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,h=x;m<h;m+=3){const _=m,v=m+1,y=m+2;r=Za(this,o,e,i,c,d,f,_,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function qM(n,e,t,i,r,s,o,a){let l;if(e.side===_n?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Di,a),l===null)return null;$a.copy(a),$a.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo($a);return c<t.near||c>t.far?null:{distance:c,point:$a.clone(),object:n}}function Za(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,os),n.getVertexPosition(l,as),n.getVertexPosition(c,ls);const d=qM(n,e,t,i,os,as,ls,Ka);if(d){r&&(Xa.fromBufferAttribute(r,a),Ya.fromBufferAttribute(r,l),qa.fromBufferAttribute(r,c),d.uv=qn.getInterpolation(Ka,os,as,ls,Xa,Ya,qa,new qe)),s&&(Xa.fromBufferAttribute(s,a),Ya.fromBufferAttribute(s,l),qa.fromBufferAttribute(s,c),d.uv1=qn.getInterpolation(Ka,os,as,ls,Xa,Ya,qa,new qe),d.uv2=d.uv1),o&&(xm.fromBufferAttribute(o,a),ym.fromBufferAttribute(o,l),Sm.fromBufferAttribute(o,c),d.normal=qn.getInterpolation(Ka,os,as,ls,xm,ym,Sm,new N),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new N,materialIndex:0};qn.getNormal(os,as,ls,f.normal),d.face=f}return d}class et extends vn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let u=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(d,3)),this.setAttribute("uv",new zt(f,2));function g(x,m,h,_,v,y,C,R,A,D,M){const E=y/A,O=C/D,z=y/2,$=C/2,P=R/2,G=A+1,V=D+1;let J=0,I=0;const B=new N;for(let H=0;H<V;H++){const Q=H*O-$;for(let te=0;te<G;te++){const Y=te*E-z;B[x]=Y*_,B[m]=Q*v,B[h]=P,c.push(B.x,B.y,B.z),B[x]=0,B[m]=0,B[h]=R>0?1:-1,d.push(B.x,B.y,B.z),f.push(te/A),f.push(1-H/D),J+=1}}for(let H=0;H<D;H++)for(let Q=0;Q<A;Q++){const te=u+Q+G*H,Y=u+Q+G*(H+1),ee=u+(Q+1)+G*(H+1),ae=u+(Q+1)+G*H;l.push(te,Y,ae),l.push(Y,ee,ae),I+=6}a.addGroup(p,I,M),p+=I,u+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new et(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function sn(n){const e={};for(let t=0;t<n.length;t++){const i=Ks(n[t]);for(const r in i)e[r]=i[r]}return e}function KM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function nv(n){return n.getRenderTarget()===null?n.outputColorSpace:tt.workingColorSpace}const $M={clone:Ks,merge:sn};var ZM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jr extends ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ZM,this.fragmentShader=QM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=KM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class iv extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class an extends iv{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Oo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const cs=-90,us=1;class JM extends xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new an(cs,us,e,t);r.layers=this.layers,this.add(r);const s=new an(cs,us,e,t);s.layers=this.layers,this.add(s);const o=new an(cs,us,e,t);o.layers=this.layers,this.add(o);const a=new an(cs,us,e,t);a.layers=this.layers,this.add(a);const l=new an(cs,us,e,t);l.layers=this.layers,this.add(l);const c=new an(cs,us,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ql)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,d),e.setRenderTarget(f,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class rv extends Wt{constructor(e,t,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Vs,super(e,t,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eE extends Wr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Bo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Or?_t:Fn),this.texture=new rv(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new et(5,5,5),s=new jr({name:"CubemapFromEquirect",uniforms:Ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:or});s.uniforms.tEquirect.value=t;const o=new Ee(r,s),a=t.minFilter;return t.minFilter===Vr&&(t.minFilter=fn),new JM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Su=new N,tE=new N,nE=new je;class wr{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Su.subVectors(i,t).cross(tE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Su),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||nE.getNormalMatrix(e),r=this.coplanarPoint(Su).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new di,Qa=new N;class Xf{constructor(e=new wr,t=new wr,i=new wr,r=new wr,s=new wr,o=new wr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ai){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],f=r[6],u=r[7],p=r[8],g=r[9],x=r[10],m=r[11],h=r[12],_=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,u-c,m-p,y-h).normalize(),i[1].setComponents(l+s,u+c,m+p,y+h).normalize(),i[2].setComponents(l+o,u+d,m+g,y+_).normalize(),i[3].setComponents(l-o,u-d,m-g,y-_).normalize(),i[4].setComponents(l-a,u-f,m-x,y-v).normalize(),t===Ai)i[5].setComponents(l+a,u+f,m+x,y+v).normalize();else if(t===Ql)i[5].setComponents(a,f,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){return yr.center.set(0,0,0),yr.radius=.7071067811865476,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Qa.x=r.normal.x>0?e.max.x:e.min.x,Qa.y=r.normal.y>0?e.max.y:e.min.y,Qa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function iE(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,d){const f=c.array,u=c.usage,p=f.byteLength,g=n.createBuffer();n.bindBuffer(d,g),n.bufferData(d,f,u),c.onUploadCallback();let x;if(f instanceof Float32Array)x=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=n.SHORT;else if(f instanceof Uint32Array)x=n.UNSIGNED_INT;else if(f instanceof Int32Array)x=n.INT;else if(f instanceof Int8Array)x=n.BYTE;else if(f instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,d,f){const u=d.array,p=d._updateRange,g=d.updateRanges;if(n.bindBuffer(f,c),p.count===-1&&g.length===0&&n.bufferSubData(f,0,u),g.length!==0){for(let x=0,m=g.length;x<m;x++){const h=g[x];t?n.bufferSubData(f,h.start*u.BYTES_PER_ELEMENT,u,h.start,h.count):n.bufferSubData(f,h.start*u.BYTES_PER_ELEMENT,u.subarray(h.start,h.start+h.count))}d.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(f,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count):n.bufferSubData(f,p.offset*u.BYTES_PER_ELEMENT,u.subarray(p.offset,p.offset+p.count)),p.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(n.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const u=i.get(c);(!u||u.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,d));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,d),f.version=c.version}}return{get:o,remove:a,update:l}}class Nr extends vn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,u=t/l,p=[],g=[],x=[],m=[];for(let h=0;h<d;h++){const _=h*u-o;for(let v=0;v<c;v++){const y=v*f-s;g.push(y,-_,0),x.push(0,0,1),m.push(v/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<a;_++){const v=_+c*h,y=_+c*(h+1),C=_+1+c*(h+1),R=_+1+c*h;p.push(v,y,R),p.push(y,C,R)}this.setIndex(p),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(x,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.width,e.height,e.widthSegments,e.heightSegments)}}var rE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,oE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,aE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,cE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fE=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,pE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_E=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,yE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ME=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,EE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,TE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,bE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,AE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,RE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,CE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,LE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,NE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IE="gl_FragColor = linearToOutputTexel( gl_FragColor );",UE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,FE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,OE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,BE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,HE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,WE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,XE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,YE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$E=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ZE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,QE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ew=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,iw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ow=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,aw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,uw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_w=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,xw=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,yw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Sw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ew=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ww=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Aw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Dw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Iw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ow=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,zw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Vw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ww=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$w=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,dT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_T=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ST=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,MT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ET=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,TT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,RT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,NT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,UT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:rE,alphahash_pars_fragment:sE,alphamap_fragment:oE,alphamap_pars_fragment:aE,alphatest_fragment:lE,alphatest_pars_fragment:cE,aomap_fragment:uE,aomap_pars_fragment:dE,batching_pars_vertex:fE,batching_vertex:hE,begin_vertex:pE,beginnormal_vertex:mE,bsdfs:gE,iridescence_fragment:_E,bumpmap_pars_fragment:vE,clipping_planes_fragment:xE,clipping_planes_pars_fragment:yE,clipping_planes_pars_vertex:SE,clipping_planes_vertex:ME,color_fragment:EE,color_pars_fragment:wE,color_pars_vertex:TE,color_vertex:bE,common:AE,cube_uv_reflection_fragment:RE,defaultnormal_vertex:CE,displacementmap_pars_vertex:LE,displacementmap_vertex:PE,emissivemap_fragment:NE,emissivemap_pars_fragment:DE,colorspace_fragment:IE,colorspace_pars_fragment:UE,envmap_fragment:FE,envmap_common_pars_fragment:OE,envmap_pars_fragment:kE,envmap_pars_vertex:BE,envmap_physical_pars_fragment:ZE,envmap_vertex:zE,fog_vertex:HE,fog_pars_vertex:GE,fog_fragment:VE,fog_pars_fragment:WE,gradientmap_pars_fragment:jE,lightmap_fragment:XE,lightmap_pars_fragment:YE,lights_lambert_fragment:qE,lights_lambert_pars_fragment:KE,lights_pars_begin:$E,lights_toon_fragment:QE,lights_toon_pars_fragment:JE,lights_phong_fragment:ew,lights_phong_pars_fragment:tw,lights_physical_fragment:nw,lights_physical_pars_fragment:iw,lights_fragment_begin:rw,lights_fragment_maps:sw,lights_fragment_end:ow,logdepthbuf_fragment:aw,logdepthbuf_pars_fragment:lw,logdepthbuf_pars_vertex:cw,logdepthbuf_vertex:uw,map_fragment:dw,map_pars_fragment:fw,map_particle_fragment:hw,map_particle_pars_fragment:pw,metalnessmap_fragment:mw,metalnessmap_pars_fragment:gw,morphcolor_vertex:_w,morphnormal_vertex:vw,morphtarget_pars_vertex:xw,morphtarget_vertex:yw,normal_fragment_begin:Sw,normal_fragment_maps:Mw,normal_pars_fragment:Ew,normal_pars_vertex:ww,normal_vertex:Tw,normalmap_pars_fragment:bw,clearcoat_normal_fragment_begin:Aw,clearcoat_normal_fragment_maps:Rw,clearcoat_pars_fragment:Cw,iridescence_pars_fragment:Lw,opaque_fragment:Pw,packing:Nw,premultiplied_alpha_fragment:Dw,project_vertex:Iw,dithering_fragment:Uw,dithering_pars_fragment:Fw,roughnessmap_fragment:Ow,roughnessmap_pars_fragment:kw,shadowmap_pars_fragment:Bw,shadowmap_pars_vertex:zw,shadowmap_vertex:Hw,shadowmask_pars_fragment:Gw,skinbase_vertex:Vw,skinning_pars_vertex:Ww,skinning_vertex:jw,skinnormal_vertex:Xw,specularmap_fragment:Yw,specularmap_pars_fragment:qw,tonemapping_fragment:Kw,tonemapping_pars_fragment:$w,transmission_fragment:Zw,transmission_pars_fragment:Qw,uv_pars_fragment:Jw,uv_pars_vertex:eT,uv_vertex:tT,worldpos_vertex:nT,background_vert:iT,background_frag:rT,backgroundCube_vert:sT,backgroundCube_frag:oT,cube_vert:aT,cube_frag:lT,depth_vert:cT,depth_frag:uT,distanceRGBA_vert:dT,distanceRGBA_frag:fT,equirect_vert:hT,equirect_frag:pT,linedashed_vert:mT,linedashed_frag:gT,meshbasic_vert:_T,meshbasic_frag:vT,meshlambert_vert:xT,meshlambert_frag:yT,meshmatcap_vert:ST,meshmatcap_frag:MT,meshnormal_vert:ET,meshnormal_frag:wT,meshphong_vert:TT,meshphong_frag:bT,meshphysical_vert:AT,meshphysical_frag:RT,meshtoon_vert:CT,meshtoon_frag:LT,points_vert:PT,points_frag:NT,shadow_vert:DT,shadow_frag:IT,sprite_vert:UT,sprite_frag:FT},oe={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},ri={basic:{uniforms:sn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:sn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:sn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:sn([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:sn([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:sn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:sn([oe.points,oe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:sn([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:sn([oe.common,oe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:sn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:sn([oe.sprite,oe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:sn([oe.common,oe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:sn([oe.lights,oe.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ri.physical={uniforms:sn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Ja={r:0,b:0,g:0};function OT(n,e,t,i,r,s,o){const a=new Ue(0);let l=s===!0?0:1,c,d,f=null,u=0,p=null;function g(m,h){let _=!1,v=h.isScene===!0?h.background:null;v&&v.isTexture&&(v=(h.backgroundBlurriness>0?t:e).get(v)),v===null?x(a,l):v&&v.isColor&&(x(v,1),_=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===gc)?(d===void 0&&(d=new Ee(new et(1,1,1),new jr({name:"BackgroundCubeMaterial",uniforms:Ks(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,d.material.toneMapped=tt.getTransfer(v.colorSpace)!==dt,(f!==v||u!==v.version||p!==n.toneMapping)&&(d.material.needsUpdate=!0,f=v,u=v.version,p=n.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ee(new Nr(2,2),new jr({name:"BackgroundMaterial",uniforms:Ks(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=tt.getTransfer(v.colorSpace)!==dt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||u!==v.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=v,u=v.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,h){m.getRGB(Ja,nv(n)),i.buffers.color.setClear(Ja.r,Ja.g,Ja.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),l=h,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:g}}function kT(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,d=!1;function f(P,G,V,J,I){let B=!1;if(o){const H=x(J,V,G);c!==H&&(c=H,p(c.object)),B=h(P,J,V,I),B&&_(P,J,V,I)}else{const H=G.wireframe===!0;(c.geometry!==J.id||c.program!==V.id||c.wireframe!==H)&&(c.geometry=J.id,c.program=V.id,c.wireframe=H,B=!0)}I!==null&&t.update(I,n.ELEMENT_ARRAY_BUFFER),(B||d)&&(d=!1,D(P,G,V,J),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function u(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(P){return i.isWebGL2?n.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return i.isWebGL2?n.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function x(P,G,V){const J=V.wireframe===!0;let I=a[P.id];I===void 0&&(I={},a[P.id]=I);let B=I[G.id];B===void 0&&(B={},I[G.id]=B);let H=B[J];return H===void 0&&(H=m(u()),B[J]=H),H}function m(P){const G=[],V=[],J=[];for(let I=0;I<r;I++)G[I]=0,V[I]=0,J[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:V,attributeDivisors:J,object:P,attributes:{},index:null}}function h(P,G,V,J){const I=c.attributes,B=G.attributes;let H=0;const Q=V.getAttributes();for(const te in Q)if(Q[te].location>=0){const ee=I[te];let ae=B[te];if(ae===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(ae=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(ae=P.instanceColor)),ee===void 0||ee.attribute!==ae||ae&&ee.data!==ae.data)return!0;H++}return c.attributesNum!==H||c.index!==J}function _(P,G,V,J){const I={},B=G.attributes;let H=0;const Q=V.getAttributes();for(const te in Q)if(Q[te].location>=0){let ee=B[te];ee===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor));const ae={};ae.attribute=ee,ee&&ee.data&&(ae.data=ee.data),I[te]=ae,H++}c.attributes=I,c.attributesNum=H,c.index=J}function v(){const P=c.newAttributes;for(let G=0,V=P.length;G<V;G++)P[G]=0}function y(P){C(P,0)}function C(P,G){const V=c.newAttributes,J=c.enabledAttributes,I=c.attributeDivisors;V[P]=1,J[P]===0&&(n.enableVertexAttribArray(P),J[P]=1),I[P]!==G&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,G),I[P]=G)}function R(){const P=c.newAttributes,G=c.enabledAttributes;for(let V=0,J=G.length;V<J;V++)G[V]!==P[V]&&(n.disableVertexAttribArray(V),G[V]=0)}function A(P,G,V,J,I,B,H){H===!0?n.vertexAttribIPointer(P,G,V,I,B):n.vertexAttribPointer(P,G,V,J,I,B)}function D(P,G,V,J){if(i.isWebGL2===!1&&(P.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const I=J.attributes,B=V.getAttributes(),H=G.defaultAttributeValues;for(const Q in B){const te=B[Q];if(te.location>=0){let Y=I[Q];if(Y===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),Y!==void 0){const ee=Y.normalized,ae=Y.itemSize,he=t.get(Y);if(he===void 0)continue;const ge=he.buffer,Ce=he.type,Ne=he.bytesPerElement,xe=i.isWebGL2===!0&&(Ce===n.INT||Ce===n.UNSIGNED_INT||Y.gpuType===O_);if(Y.isInterleavedBufferAttribute){const Ye=Y.data,k=Ye.stride,Et=Y.offset;if(Ye.isInstancedInterleavedBuffer){for(let ve=0;ve<te.locationSize;ve++)C(te.location+ve,Ye.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Ye.meshPerAttribute*Ye.count)}else for(let ve=0;ve<te.locationSize;ve++)y(te.location+ve);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let ve=0;ve<te.locationSize;ve++)A(te.location+ve,ae/te.locationSize,Ce,ee,k*Ne,(Et+ae/te.locationSize*ve)*Ne,xe)}else{if(Y.isInstancedBufferAttribute){for(let Ye=0;Ye<te.locationSize;Ye++)C(te.location+Ye,Y.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Ye=0;Ye<te.locationSize;Ye++)y(te.location+Ye);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let Ye=0;Ye<te.locationSize;Ye++)A(te.location+Ye,ae/te.locationSize,Ce,ee,ae*Ne,ae/te.locationSize*Ye*Ne,xe)}}else if(H!==void 0){const ee=H[Q];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(te.location,ee);break;case 3:n.vertexAttrib3fv(te.location,ee);break;case 4:n.vertexAttrib4fv(te.location,ee);break;default:n.vertexAttrib1fv(te.location,ee)}}}}R()}function M(){z();for(const P in a){const G=a[P];for(const V in G){const J=G[V];for(const I in J)g(J[I].object),delete J[I];delete G[V]}delete a[P]}}function E(P){if(a[P.id]===void 0)return;const G=a[P.id];for(const V in G){const J=G[V];for(const I in J)g(J[I].object),delete J[I];delete G[V]}delete a[P.id]}function O(P){for(const G in a){const V=a[G];if(V[P.id]===void 0)continue;const J=V[P.id];for(const I in J)g(J[I].object),delete J[I];delete V[P.id]}}function z(){$(),d=!0,c!==l&&(c=l,p(c.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:z,resetDefaultState:$,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:O,initAttributes:v,enableAttribute:y,disableUnusedAttributes:R}}function BT(n,e,t,i){const r=i.isWebGL2;let s;function o(d){s=d}function a(d,f){n.drawArrays(s,d,f),t.update(f,s,1)}function l(d,f,u){if(u===0)return;let p,g;if(r)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,d,f,u),t.update(f,s,u)}function c(d,f,u){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u;g++)this.render(d[g],f[g]);else{p.multiDrawArraysWEBGL(s,d,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=f[x];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function zT(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=u>0,y=o||e.has("OES_texture_float"),C=v&&y,R=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:u,maxTextureSize:p,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:C,maxSamples:R}}function HT(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new wr,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||i!==0||r;return r=u,i=f.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=d(f,u,0)},this.setState=function(f,u,p){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?d(null):c();else{const _=s?0:i,v=_*4;let y=h.clippingState||null;l.value=y,y=d(g,u,v,p);for(let C=0;C!==v;++C)y[C]=t[C];h.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,u,p,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const h=p+x*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<h)&&(m=new Float32Array(h));for(let v=0,y=p;v!==x;++v,y+=4)o.copy(f[v]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function GT(n){let e=new WeakMap;function t(o,a){return a===Dd?o.mapping=Vs:a===Id&&(o.mapping=Ws),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Dd||a===Id)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new eE(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Yf extends iv{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ts=4,Mm=[.125,.215,.35,.446,.526,.582],Ar=20,Mu=new Yf,Em=new Ue;let Eu=null,wu=0,Tu=0;const Tr=(1+Math.sqrt(5))/2,ds=1/Tr,wm=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Tr,ds),new N(0,Tr,-ds),new N(ds,0,Tr),new N(-ds,0,Tr),new N(Tr,ds,0),new N(-Tr,ds,0)];class Tm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Eu=this._renderer.getRenderTarget(),wu=this._renderer.getActiveCubeFace(),Tu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Eu,wu,Tu),e.scissorTest=!1,el(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eu=this._renderer.getRenderTarget(),wu=this._renderer.getActiveCubeFace(),Tu=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:ra,format:Un,colorSpace:Ht,depthBuffer:!1},r=bm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bm(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=VT(s)),this._blurMaterial=WT(s,e,t)}return r}_compileMaterial(e){const t=new Ee(this._lodPlanes[0],e);this._renderer.compile(t,Mu)}_sceneToCubeUV(e,t,i,r){const a=new an(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,u=d.toneMapping;d.getClearColor(Em),d.toneMapping=ar,d.autoClear=!1;const p=new Pr({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),g=new Ee(new et,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Em),x=!0);for(let h=0;h<6;h++){const _=h%3;_===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):_===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const v=this._cubeSize;el(r,_*v,h>2?v:0,v,v),d.setRenderTarget(r),x&&d.render(g,a),d.render(e,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=u,d.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Vs||e.mapping===Ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Am());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ee(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;el(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Mu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=wm[(r-1)%wm.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Ee(this._lodPlanes[r],c),u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ar-1),x=s/g,m=isFinite(s)?1+Math.floor(d*x):Ar;m>Ar&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ar}`);const h=[];let _=0;for(let A=0;A<Ar;++A){const D=A/x,M=Math.exp(-D*D/2);h.push(M),A===0?_+=M:A<m&&(_+=2*M)}for(let A=0;A<h.length;A++)h[A]=h[A]/_;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-i;const y=this._sizeLods[r],C=3*y*(r>v-Ts?r-v+Ts:0),R=4*(this._cubeSize-y);el(t,C,R,3*y,2*y),l.setRenderTarget(t),l.render(f,Mu)}}function VT(n){const e=[],t=[],i=[];let r=n;const s=n-Ts+1+Mm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ts?l=Mm[o-n+Ts-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,u=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,g=6,x=3,m=2,h=1,_=new Float32Array(x*g*p),v=new Float32Array(m*g*p),y=new Float32Array(h*g*p);for(let R=0;R<p;R++){const A=R%3*2/3-1,D=R>2?0:-1,M=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];_.set(M,x*g*R),v.set(u,m*g*R);const E=[R,R,R,R,R,R];y.set(E,h*g*R)}const C=new vn;C.setAttribute("position",new Jt(_,x)),C.setAttribute("uv",new Jt(v,m)),C.setAttribute("faceIndex",new Jt(y,h)),e.push(C),r>Ts&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function bm(n,e,t){const i=new Wr(n,e,t);return i.texture.mapping=gc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function el(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function WT(n,e,t){const i=new Float32Array(Ar),r=new N(0,1,0);return new jr({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Am(){return new jr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Rm(){return new jr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function qf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jT(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Dd||l===Id,d=l===Vs||l===Ws;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Tm(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||d&&f&&r(f)){t===null&&(t=new Tm(n));const u=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,u),a.addEventListener("dispose",s),u.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function XT(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function YT(n,e,t,i){const r={},s=new WeakMap;function o(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const x=u.morphAttributes[g];for(let m=0,h=x.length;m<h;m++)e.remove(x[m])}u.removeEventListener("dispose",o),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const g in u)e.update(u[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const x=p[g];for(let m=0,h=x.length;m<h;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(f){const u=[],p=f.index,g=f.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let v=0,y=_.length;v<y;v+=3){const C=_[v+0],R=_[v+1],A=_[v+2];u.push(C,R,R,A,A,C)}}else if(g!==void 0){const _=g.array;x=g.version;for(let v=0,y=_.length/3-1;v<y;v+=3){const C=v+0,R=v+1,A=v+2;u.push(C,R,R,A,A,C)}}else return;const m=new(q_(u)?tv:ev)(u,1);m.version=x;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function d(f){const u=s.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function qT(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function d(p,g){n.drawElements(s,g,a,p*l),t.update(g,s,1)}function f(p,g,x){if(x===0)return;let m,h;if(r)m=n,h="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[h](s,g,a,p*l,x),t.update(g,s,x)}function u(p,g,x){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<x;h++)this.render(p[h]/l,g[h]);else{m.multiDrawElementsWEBGL(s,g,0,a,p,0,x);let h=0;for(let _=0;_<x;_++)h+=g[_];t.update(h,s,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=f,this.renderMultiDraw=u}function KT(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function $T(n,e){return n[0]-e[0]}function ZT(n,e){return Math.abs(e[1])-Math.abs(n[1])}function QT(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new st,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,f){const u=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=g!==void 0?g.length:0;let m=s.get(d);if(m===void 0||m.count!==x){let G=function(){$.dispose(),s.delete(d),d.removeEventListener("dispose",G)};var p=G;m!==void 0&&m.texture.dispose();const v=d.morphAttributes.position!==void 0,y=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,R=d.morphAttributes.position||[],A=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let M=0;v===!0&&(M=1),y===!0&&(M=2),C===!0&&(M=3);let E=d.attributes.position.count*M,O=1;E>e.maxTextureSize&&(O=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const z=new Float32Array(E*O*4*x),$=new Z_(z,E,O,x);$.type=bi,$.needsUpdate=!0;const P=M*4;for(let V=0;V<x;V++){const J=R[V],I=A[V],B=D[V],H=E*O*4*V;for(let Q=0;Q<J.count;Q++){const te=Q*P;v===!0&&(o.fromBufferAttribute(J,Q),z[H+te+0]=o.x,z[H+te+1]=o.y,z[H+te+2]=o.z,z[H+te+3]=0),y===!0&&(o.fromBufferAttribute(I,Q),z[H+te+4]=o.x,z[H+te+5]=o.y,z[H+te+6]=o.z,z[H+te+7]=0),C===!0&&(o.fromBufferAttribute(B,Q),z[H+te+8]=o.x,z[H+te+9]=o.y,z[H+te+10]=o.z,z[H+te+11]=B.itemSize===4?o.w:1)}}m={count:x,texture:$,size:new qe(E,O)},s.set(d,m),d.addEventListener("dispose",G)}let h=0;for(let v=0;v<u.length;v++)h+=u[v];const _=d.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",_),f.getUniforms().setValue(n,"morphTargetInfluences",u),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=u===void 0?0:u.length;let x=i[d.id];if(x===void 0||x.length!==g){x=[];for(let y=0;y<g;y++)x[y]=[y,0];i[d.id]=x}for(let y=0;y<g;y++){const C=x[y];C[0]=y,C[1]=u[y]}x.sort(ZT);for(let y=0;y<8;y++)y<g&&x[y][1]?(a[y][0]=x[y][0],a[y][1]=x[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort($T);const m=d.morphAttributes.position,h=d.morphAttributes.normal;let _=0;for(let y=0;y<8;y++){const C=a[y],R=C[0],A=C[1];R!==Number.MAX_SAFE_INTEGER&&A?(m&&d.getAttribute("morphTarget"+y)!==m[R]&&d.setAttribute("morphTarget"+y,m[R]),h&&d.getAttribute("morphNormal"+y)!==h[R]&&d.setAttribute("morphNormal"+y,h[R]),r[y]=A,_+=A):(m&&d.hasAttribute("morphTarget"+y)===!0&&d.deleteAttribute("morphTarget"+y),h&&d.hasAttribute("morphNormal"+y)===!0&&d.deleteAttribute("morphNormal"+y),r[y]=0)}const v=d.morphTargetsRelative?1:1-_;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function JT(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class ov extends Wt{constructor(e,t,i,r,s,o,a,l,c,d){if(d=d!==void 0?d:Fr,d!==Fr&&d!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Fr&&(i=$i),i===void 0&&d===Xs&&(i=Ur),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:kt,this.minFilter=l!==void 0?l:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const av=new Wt,lv=new ov(1,1);lv.compareFunction=Y_;const cv=new Z_,uv=new OM,dv=new rv,Cm=[],Lm=[],Pm=new Float32Array(16),Nm=new Float32Array(9),Dm=new Float32Array(4);function no(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Cm[r];if(s===void 0&&(s=new Float32Array(r),Cm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Nt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function yc(n,e){let t=Lm[e];t===void 0&&(t=new Int32Array(e),Lm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function e1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function t1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2fv(this.addr,e),Dt(t,e)}}function n1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;n.uniform3fv(this.addr,e),Dt(t,e)}}function i1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4fv(this.addr,e),Dt(t,e)}}function r1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Nt(t,i))return;Dm.set(i),n.uniformMatrix2fv(this.addr,!1,Dm),Dt(t,i)}}function s1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Nt(t,i))return;Nm.set(i),n.uniformMatrix3fv(this.addr,!1,Nm),Dt(t,i)}}function o1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Nt(t,i))return;Pm.set(i),n.uniformMatrix4fv(this.addr,!1,Pm),Dt(t,i)}}function a1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function l1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2iv(this.addr,e),Dt(t,e)}}function c1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3iv(this.addr,e),Dt(t,e)}}function u1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4iv(this.addr,e),Dt(t,e)}}function d1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function f1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2uiv(this.addr,e),Dt(t,e)}}function h1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3uiv(this.addr,e),Dt(t,e)}}function p1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4uiv(this.addr,e),Dt(t,e)}}function m1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?lv:av;t.setTexture2D(e||s,r)}function g1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||uv,r)}function _1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||dv,r)}function v1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||cv,r)}function x1(n){switch(n){case 5126:return e1;case 35664:return t1;case 35665:return n1;case 35666:return i1;case 35674:return r1;case 35675:return s1;case 35676:return o1;case 5124:case 35670:return a1;case 35667:case 35671:return l1;case 35668:case 35672:return c1;case 35669:case 35673:return u1;case 5125:return d1;case 36294:return f1;case 36295:return h1;case 36296:return p1;case 35678:case 36198:case 36298:case 36306:case 35682:return m1;case 35679:case 36299:case 36307:return g1;case 35680:case 36300:case 36308:case 36293:return _1;case 36289:case 36303:case 36311:case 36292:return v1}}function y1(n,e){n.uniform1fv(this.addr,e)}function S1(n,e){const t=no(e,this.size,2);n.uniform2fv(this.addr,t)}function M1(n,e){const t=no(e,this.size,3);n.uniform3fv(this.addr,t)}function E1(n,e){const t=no(e,this.size,4);n.uniform4fv(this.addr,t)}function w1(n,e){const t=no(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function T1(n,e){const t=no(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function b1(n,e){const t=no(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function A1(n,e){n.uniform1iv(this.addr,e)}function R1(n,e){n.uniform2iv(this.addr,e)}function C1(n,e){n.uniform3iv(this.addr,e)}function L1(n,e){n.uniform4iv(this.addr,e)}function P1(n,e){n.uniform1uiv(this.addr,e)}function N1(n,e){n.uniform2uiv(this.addr,e)}function D1(n,e){n.uniform3uiv(this.addr,e)}function I1(n,e){n.uniform4uiv(this.addr,e)}function U1(n,e,t){const i=this.cache,r=e.length,s=yc(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||av,s[o])}function F1(n,e,t){const i=this.cache,r=e.length,s=yc(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||uv,s[o])}function O1(n,e,t){const i=this.cache,r=e.length,s=yc(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||dv,s[o])}function k1(n,e,t){const i=this.cache,r=e.length,s=yc(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||cv,s[o])}function B1(n){switch(n){case 5126:return y1;case 35664:return S1;case 35665:return M1;case 35666:return E1;case 35674:return w1;case 35675:return T1;case 35676:return b1;case 5124:case 35670:return A1;case 35667:case 35671:return R1;case 35668:case 35672:return C1;case 35669:case 35673:return L1;case 5125:return P1;case 36294:return N1;case 36295:return D1;case 36296:return I1;case 35678:case 36198:case 36298:case 36306:case 35682:return U1;case 35679:case 36299:case 36307:return F1;case 35680:case 36300:case 36308:case 36293:return O1;case 36289:case 36303:case 36311:case 36292:return k1}}class z1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=x1(t.type)}}class H1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=B1(t.type)}}class G1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const bu=/(\w+)(\])?(\[|\.)?/g;function Im(n,e){n.seq.push(e),n.map[e.id]=e}function V1(n,e,t){const i=n.name,r=i.length;for(bu.lastIndex=0;;){const s=bu.exec(i),o=bu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Im(t,c===void 0?new z1(a,n,e):new H1(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new G1(a),Im(t,f)),t=f}}}class Sl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);V1(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Um(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const W1=37297;let j1=0;function X1(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Y1(n){const e=tt.getPrimaries(tt.workingColorSpace),t=tt.getPrimaries(n);let i;switch(e===t?i="":e===Zl&&t===$l?i="LinearDisplayP3ToLinearSRGB":e===$l&&t===Zl&&(i="LinearSRGBToLinearDisplayP3"),n){case Ht:case _c:return[i,"LinearTransferOETF"];case _t:case Wf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Fm(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+X1(n.getShaderSource(e),o)}else return r}function q1(n,e){const t=Y1(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function K1(n,e){let t;switch(e){case jS:t="Linear";break;case XS:t="Reinhard";break;case YS:t="OptimizedCineon";break;case I_:t="ACESFilmic";break;case KS:t="AgX";break;case qS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function $1(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(bs).join(`
`)}function Z1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(bs).join(`
`)}function Q1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function J1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function bs(n){return n!==""}function Om(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function km(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eb=/^[ \t]*#include +<([\w\d./]+)>/gm;function zd(n){return n.replace(eb,nb)}const tb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function nb(n,e){let t=ze[e];if(t===void 0){const i=tb.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return zd(t)}const ib=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bm(n){return n.replace(ib,rb)}function rb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function zm(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function sb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===P_?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===N_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function ob(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Vs:case Ws:e="ENVMAP_TYPE_CUBE";break;case gc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ab(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function lb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case D_:e="ENVMAP_BLENDING_MULTIPLY";break;case VS:e="ENVMAP_BLENDING_MIX";break;case WS:e="ENVMAP_BLENDING_ADD";break}return e}function cb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function ub(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=sb(t),c=ob(t),d=ab(t),f=lb(t),u=cb(t),p=t.isWebGL2?"":$1(t),g=Z1(t),x=Q1(s),m=r.createProgram();let h,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(bs).join(`
`),h.length>0&&(h+=`
`),_=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(bs).join(`
`),_.length>0&&(_+=`
`)):(h=[zm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),_=[p,zm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ar?"#define TONE_MAPPING":"",t.toneMapping!==ar?ze.tonemapping_pars_fragment:"",t.toneMapping!==ar?K1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,q1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bs).join(`
`)),o=zd(o),o=Om(o,t),o=km(o,t),a=zd(a),a=Om(a,t),a=km(a,t),o=Bm(o),a=Bm(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,h=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===rm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=v+h+o,C=v+_+a,R=Um(r,r.VERTEX_SHADER,y),A=Um(r,r.FRAGMENT_SHADER,C);r.attachShader(m,R),r.attachShader(m,A),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function D(z){if(n.debug.checkShaderErrors){const $=r.getProgramInfoLog(m).trim(),P=r.getShaderInfoLog(R).trim(),G=r.getShaderInfoLog(A).trim();let V=!0,J=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,R,A);else{const I=Fm(r,R,"vertex"),B=Fm(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+I+`
`+B)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(P===""||G==="")&&(J=!1);J&&(z.diagnostics={runnable:V,programLog:$,vertexShader:{log:P,prefix:h},fragmentShader:{log:G,prefix:_}})}r.deleteShader(R),r.deleteShader(A),M=new Sl(r,m),E=J1(r,m)}let M;this.getUniforms=function(){return M===void 0&&D(this),M};let E;this.getAttributes=function(){return E===void 0&&D(this),E};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(m,W1)),O},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=j1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=A,this}let db=0;class fb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new hb(e),t.set(e,i)),i}}class hb{constructor(e){this.id=db++,this.code=e,this.usedTimes=0}}function pb(n,e,t,i,r,s,o){const a=new Q_,l=new fb,c=[],d=r.isWebGL2,f=r.logarithmicDepthBuffer,u=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,E,O,z,$){const P=z.fog,G=$.geometry,V=M.isMeshStandardMaterial?z.environment:null,J=(M.isMeshStandardMaterial?t:e).get(M.envMap||V),I=J&&J.mapping===gc?J.image.height:null,B=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const H=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Q=H!==void 0?H.length:0;let te=0;G.morphAttributes.position!==void 0&&(te=1),G.morphAttributes.normal!==void 0&&(te=2),G.morphAttributes.color!==void 0&&(te=3);let Y,ee,ae,he;if(B){const tn=ri[B];Y=tn.vertexShader,ee=tn.fragmentShader}else Y=M.vertexShader,ee=M.fragmentShader,l.update(M),ae=l.getVertexShaderID(M),he=l.getFragmentShaderID(M);const ge=n.getRenderTarget(),Ce=$.isInstancedMesh===!0,Ne=$.isBatchedMesh===!0,xe=!!M.map,Ye=!!M.matcap,k=!!J,Et=!!M.aoMap,ve=!!M.lightMap,we=!!M.bumpMap,me=!!M.normalMap,Te=!!M.displacementMap,Ae=!!M.emissiveMap,b=!!M.metalnessMap,S=!!M.roughnessMap,U=M.anisotropy>0,Z=M.clearcoat>0,q=M.iridescence>0,K=M.sheen>0,le=M.transmission>0,re=U&&!!M.anisotropyMap,de=Z&&!!M.clearcoatMap,Se=Z&&!!M.clearcoatNormalMap,Fe=Z&&!!M.clearcoatRoughnessMap,ne=q&&!!M.iridescenceMap,Je=q&&!!M.iridescenceThicknessMap,Ge=K&&!!M.sheenColorMap,Le=K&&!!M.sheenRoughnessMap,Me=!!M.specularMap,_e=!!M.specularColorMap,De=!!M.specularIntensityMap,Ze=le&&!!M.transmissionMap,ht=le&&!!M.thicknessMap,Oe=!!M.gradientMap,se=!!M.alphaMap,L=M.alphaTest>0,ce=!!M.alphaHash,ue=!!M.extensions,Pe=!!G.attributes.uv1,be=!!G.attributes.uv2,ot=!!G.attributes.uv3;let at=ar;return M.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(at=n.toneMapping),{isWebGL2:d,shaderID:B,shaderType:M.type,shaderName:M.name,vertexShader:Y,fragmentShader:ee,defines:M.defines,customVertexShaderID:ae,customFragmentShaderID:he,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ne,instancing:Ce,instancingColor:Ce&&$.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:ge===null?n.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Ht,map:xe,matcap:Ye,envMap:k,envMapMode:k&&J.mapping,envMapCubeUVHeight:I,aoMap:Et,lightMap:ve,bumpMap:we,normalMap:me,displacementMap:u&&Te,emissiveMap:Ae,normalMapObjectSpace:me&&M.normalMapType===cM,normalMapTangentSpace:me&&M.normalMapType===X_,metalnessMap:b,roughnessMap:S,anisotropy:U,anisotropyMap:re,clearcoat:Z,clearcoatMap:de,clearcoatNormalMap:Se,clearcoatRoughnessMap:Fe,iridescence:q,iridescenceMap:ne,iridescenceThicknessMap:Je,sheen:K,sheenColorMap:Ge,sheenRoughnessMap:Le,specularMap:Me,specularColorMap:_e,specularIntensityMap:De,transmission:le,transmissionMap:Ze,thicknessMap:ht,gradientMap:Oe,opaque:M.transparent===!1&&M.blending===Ds,alphaMap:se,alphaTest:L,alphaHash:ce,combine:M.combine,mapUv:xe&&x(M.map.channel),aoMapUv:Et&&x(M.aoMap.channel),lightMapUv:ve&&x(M.lightMap.channel),bumpMapUv:we&&x(M.bumpMap.channel),normalMapUv:me&&x(M.normalMap.channel),displacementMapUv:Te&&x(M.displacementMap.channel),emissiveMapUv:Ae&&x(M.emissiveMap.channel),metalnessMapUv:b&&x(M.metalnessMap.channel),roughnessMapUv:S&&x(M.roughnessMap.channel),anisotropyMapUv:re&&x(M.anisotropyMap.channel),clearcoatMapUv:de&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Se&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Le&&x(M.sheenRoughnessMap.channel),specularMapUv:Me&&x(M.specularMap.channel),specularColorMapUv:_e&&x(M.specularColorMap.channel),specularIntensityMapUv:De&&x(M.specularIntensityMap.channel),transmissionMapUv:Ze&&x(M.transmissionMap.channel),thicknessMapUv:ht&&x(M.thicknessMap.channel),alphaMapUv:se&&x(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(me||U),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:Pe,vertexUv2s:be,vertexUv3s:ot,pointsUvs:$.isPoints===!0&&!!G.attributes.uv&&(xe||se),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:$.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:te,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:at,useLegacyLights:n._useLegacyLights,decodeVideoTexture:xe&&M.map.isVideoTexture===!0&&tt.getTransfer(M.map.colorSpace)===dt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Dn,flipSided:M.side===_n,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ue&&M.extensions.derivatives===!0,extensionFragDepth:ue&&M.extensions.fragDepth===!0,extensionDrawBuffers:ue&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const O in M.defines)E.push(O),E.push(M.defines[O]);return M.isRawShaderMaterial===!1&&(_(E,M),v(E,M),E.push(n.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function _(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function v(M,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function y(M){const E=g[M.type];let O;if(E){const z=ri[E];O=$M.clone(z.uniforms)}else O=M.uniforms;return O}function C(M,E){let O;for(let z=0,$=c.length;z<$;z++){const P=c[z];if(P.cacheKey===E){O=P,++O.usedTimes;break}}return O===void 0&&(O=new ub(n,E,M,s),c.push(O)),O}function R(M){if(--M.usedTimes===0){const E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:C,releaseProgram:R,releaseShaderCache:A,programs:c,dispose:D}}function mb(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function gb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Hm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Gm(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,u,p,g,x,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:u,material:p,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=u,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=x,h.group=m),e++,h}function a(f,u,p,g,x,m){const h=o(f,u,p,g,x,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(f,u,p,g,x,m){const h=o(f,u,p,g,x,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,u){t.length>1&&t.sort(f||gb),i.length>1&&i.sort(u||Hm),r.length>1&&r.sort(u||Hm)}function d(){for(let f=e,u=n.length;f<u;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function _b(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Gm,n.set(i,[o])):r>=s.length?(o=new Gm,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function vb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ue};break;case"SpotLight":t={position:new N,direction:new N,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function xb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let yb=0;function Sb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Mb(n,e){const t=new vb,i=xb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new N);const s=new N,o=new Xe,a=new Xe;function l(d,f){let u=0,p=0,g=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let x=0,m=0,h=0,_=0,v=0,y=0,C=0,R=0,A=0,D=0,M=0;d.sort(Sb);const E=f===!0?Math.PI:1;for(let z=0,$=d.length;z<$;z++){const P=d[z],G=P.color,V=P.intensity,J=P.distance,I=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=G.r*V*E,p+=G.g*V*E,g+=G.b*V*E;else if(P.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(P.sh.coefficients[B],V);M++}else if(P.isDirectionalLight){const B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity*E),P.castShadow){const H=P.shadow,Q=i.get(P);Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,r.directionalShadow[x]=Q,r.directionalShadowMap[x]=I,r.directionalShadowMatrix[x]=P.shadow.matrix,y++}r.directional[x]=B,x++}else if(P.isSpotLight){const B=t.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(G).multiplyScalar(V*E),B.distance=J,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,r.spot[h]=B;const H=P.shadow;if(P.map&&(r.spotLightMap[A]=P.map,A++,H.updateMatrices(P),P.castShadow&&D++),r.spotLightMatrix[h]=H.matrix,P.castShadow){const Q=i.get(P);Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,r.spotShadow[h]=Q,r.spotShadowMap[h]=I,R++}h++}else if(P.isRectAreaLight){const B=t.get(P);B.color.copy(G).multiplyScalar(V),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),r.rectArea[_]=B,_++}else if(P.isPointLight){const B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity*E),B.distance=P.distance,B.decay=P.decay,P.castShadow){const H=P.shadow,Q=i.get(P);Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,Q.shadowCameraNear=H.camera.near,Q.shadowCameraFar=H.camera.far,r.pointShadow[m]=Q,r.pointShadowMap[m]=I,r.pointShadowMatrix[m]=P.shadow.matrix,C++}r.point[m]=B,m++}else if(P.isHemisphereLight){const B=t.get(P);B.skyColor.copy(P.color).multiplyScalar(V*E),B.groundColor.copy(P.groundColor).multiplyScalar(V*E),r.hemi[v]=B,v++}}_>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=u,r.ambient[1]=p,r.ambient[2]=g;const O=r.hash;(O.directionalLength!==x||O.pointLength!==m||O.spotLength!==h||O.rectAreaLength!==_||O.hemiLength!==v||O.numDirectionalShadows!==y||O.numPointShadows!==C||O.numSpotShadows!==R||O.numSpotMaps!==A||O.numLightProbes!==M)&&(r.directional.length=x,r.spot.length=h,r.rectArea.length=_,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=R+A-D,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=M,O.directionalLength=x,O.pointLength=m,O.spotLength=h,O.rectAreaLength=_,O.hemiLength=v,O.numDirectionalShadows=y,O.numPointShadows=C,O.numSpotShadows=R,O.numSpotMaps=A,O.numLightProbes=M,r.version=yb++)}function c(d,f){let u=0,p=0,g=0,x=0,m=0;const h=f.matrixWorldInverse;for(let _=0,v=d.length;_<v;_++){const y=d[_];if(y.isDirectionalLight){const C=r.directional[u];C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(h),u++}else if(y.isSpotLight){const C=r.spot[g];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(h),C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(h),g++}else if(y.isRectAreaLight){const C=r.rectArea[x];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(h),a.identity(),o.copy(y.matrixWorld),o.premultiply(h),a.extractRotation(o),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const C=r.point[p];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(h),p++}else if(y.isHemisphereLight){const C=r.hemi[m];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(h),m++}}}return{setup:l,setupView:c,state:r}}function Vm(n,e){const t=new Mb(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Eb(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Vm(n,e),t.set(s,[l])):o>=a.length?(l=new Vm(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class wb extends ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tb extends ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ab=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Rb(n,e,t){let i=new Xf;const r=new qe,s=new qe,o=new st,a=new wb({depthPacking:lM}),l=new Tb,c={},d=t.maxTextureSize,f={[Di]:_n,[_n]:Di,[Dn]:Dn},u=new jr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:bb,fragmentShader:Ab}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new vn;g.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ee(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=P_;let h=this.type;this.render=function(R,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const M=n.getRenderTarget(),E=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),z=n.state;z.setBlending(or),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const $=h!==yi&&this.type===yi,P=h===yi&&this.type!==yi;for(let G=0,V=R.length;G<V;G++){const J=R[G],I=J.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const B=I.getFrameExtents();if(r.multiply(B),s.copy(I.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/B.x),r.x=s.x*B.x,I.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/B.y),r.y=s.y*B.y,I.mapSize.y=s.y)),I.map===null||$===!0||P===!0){const Q=this.type!==yi?{minFilter:kt,magFilter:kt}:{};I.map!==null&&I.map.dispose(),I.map=new Wr(r.x,r.y,Q),I.map.texture.name=J.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();const H=I.getViewportCount();for(let Q=0;Q<H;Q++){const te=I.getViewport(Q);o.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),z.viewport(o),I.updateMatrices(J,Q),i=I.getFrustum(),y(A,D,I.camera,J,this.type)}I.isPointLightShadow!==!0&&this.type===yi&&_(I,D),I.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(M,E,O)};function _(R,A){const D=e.update(x);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Wr(r.x,r.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(A,null,D,u,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(A,null,D,p,x,null)}function v(R,A,D,M){let E=null;const O=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(O!==void 0)E=O;else if(E=D.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=E.uuid,$=A.uuid;let P=c[z];P===void 0&&(P={},c[z]=P);let G=P[$];G===void 0&&(G=E.clone(),P[$]=G,A.addEventListener("dispose",C)),E=G}if(E.visible=A.visible,E.wireframe=A.wireframe,M===yi?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:f[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const z=n.properties.get(E);z.light=D}return E}function y(R,A,D,M,E){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===yi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const $=e.update(R),P=R.material;if(Array.isArray(P)){const G=$.groups;for(let V=0,J=G.length;V<J;V++){const I=G[V],B=P[I.materialIndex];if(B&&B.visible){const H=v(R,B,M,E);R.onBeforeShadow(n,R,A,D,$,H,I),n.renderBufferDirect(D,null,$,H,R,I),R.onAfterShadow(n,R,A,D,$,H,I)}}}else if(P.visible){const G=v(R,P,M,E);R.onBeforeShadow(n,R,A,D,$,G,null),n.renderBufferDirect(D,null,$,G,R,null),R.onAfterShadow(n,R,A,D,$,G,null)}}const z=R.children;for(let $=0,P=z.length;$<P;$++)y(z[$],A,D,M,E)}function C(R){R.target.removeEventListener("dispose",C);for(const D in c){const M=c[D],E=R.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function Cb(n,e,t){const i=t.isWebGL2;function r(){let L=!1;const ce=new st;let ue=null;const Pe=new st(0,0,0,0);return{setMask:function(be){ue!==be&&!L&&(n.colorMask(be,be,be,be),ue=be)},setLocked:function(be){L=be},setClear:function(be,ot,at,It,tn){tn===!0&&(be*=It,ot*=It,at*=It),ce.set(be,ot,at,It),Pe.equals(ce)===!1&&(n.clearColor(be,ot,at,It),Pe.copy(ce))},reset:function(){L=!1,ue=null,Pe.set(-1,0,0,0)}}}function s(){let L=!1,ce=null,ue=null,Pe=null;return{setTest:function(be){be?Ne(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(be){ce!==be&&!L&&(n.depthMask(be),ce=be)},setFunc:function(be){if(ue!==be){switch(be){case FS:n.depthFunc(n.NEVER);break;case OS:n.depthFunc(n.ALWAYS);break;case kS:n.depthFunc(n.LESS);break;case Yl:n.depthFunc(n.LEQUAL);break;case BS:n.depthFunc(n.EQUAL);break;case zS:n.depthFunc(n.GEQUAL);break;case HS:n.depthFunc(n.GREATER);break;case GS:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=be}},setLocked:function(be){L=be},setClear:function(be){Pe!==be&&(n.clearDepth(be),Pe=be)},reset:function(){L=!1,ce=null,ue=null,Pe=null}}}function o(){let L=!1,ce=null,ue=null,Pe=null,be=null,ot=null,at=null,It=null,tn=null;return{setTest:function(lt){L||(lt?Ne(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(lt){ce!==lt&&!L&&(n.stencilMask(lt),ce=lt)},setFunc:function(lt,nn,ti){(ue!==lt||Pe!==nn||be!==ti)&&(n.stencilFunc(lt,nn,ti),ue=lt,Pe=nn,be=ti)},setOp:function(lt,nn,ti){(ot!==lt||at!==nn||It!==ti)&&(n.stencilOp(lt,nn,ti),ot=lt,at=nn,It=ti)},setLocked:function(lt){L=lt},setClear:function(lt){tn!==lt&&(n.clearStencil(lt),tn=lt)},reset:function(){L=!1,ce=null,ue=null,Pe=null,be=null,ot=null,at=null,It=null,tn=null}}}const a=new r,l=new s,c=new o,d=new WeakMap,f=new WeakMap;let u={},p={},g=new WeakMap,x=[],m=null,h=!1,_=null,v=null,y=null,C=null,R=null,A=null,D=null,M=new Ue(0,0,0),E=0,O=!1,z=null,$=null,P=null,G=null,V=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,B=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(H)[1]),I=B>=1):H.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),I=B>=2);let Q=null,te={};const Y=n.getParameter(n.SCISSOR_BOX),ee=n.getParameter(n.VIEWPORT),ae=new st().fromArray(Y),he=new st().fromArray(ee);function ge(L,ce,ue,Pe){const be=new Uint8Array(4),ot=n.createTexture();n.bindTexture(L,ot),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let at=0;at<ue;at++)i&&(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)?n.texImage3D(ce,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(ce+at,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return ot}const Ce={};Ce[n.TEXTURE_2D]=ge(n.TEXTURE_2D,n.TEXTURE_2D,1),Ce[n.TEXTURE_CUBE_MAP]=ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ce[n.TEXTURE_2D_ARRAY]=ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ce[n.TEXTURE_3D]=ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ne(n.DEPTH_TEST),l.setFunc(Yl),Ae(!1),b(Mp),Ne(n.CULL_FACE),me(or);function Ne(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function xe(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Ye(L,ce){return p[L]!==ce?(n.bindFramebuffer(L,ce),p[L]=ce,i&&(L===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=ce),L===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=ce)),!0):!1}function k(L,ce){let ue=x,Pe=!1;if(L)if(ue=g.get(ce),ue===void 0&&(ue=[],g.set(ce,ue)),L.isWebGLMultipleRenderTargets){const be=L.texture;if(ue.length!==be.length||ue[0]!==n.COLOR_ATTACHMENT0){for(let ot=0,at=be.length;ot<at;ot++)ue[ot]=n.COLOR_ATTACHMENT0+ot;ue.length=be.length,Pe=!0}}else ue[0]!==n.COLOR_ATTACHMENT0&&(ue[0]=n.COLOR_ATTACHMENT0,Pe=!0);else ue[0]!==n.BACK&&(ue[0]=n.BACK,Pe=!0);Pe&&(t.isWebGL2?n.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function Et(L){return m!==L?(n.useProgram(L),m=L,!0):!1}const ve={[br]:n.FUNC_ADD,[SS]:n.FUNC_SUBTRACT,[MS]:n.FUNC_REVERSE_SUBTRACT};if(i)ve[bp]=n.MIN,ve[Ap]=n.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(ve[bp]=L.MIN_EXT,ve[Ap]=L.MAX_EXT)}const we={[ES]:n.ZERO,[wS]:n.ONE,[TS]:n.SRC_COLOR,[Pd]:n.SRC_ALPHA,[PS]:n.SRC_ALPHA_SATURATE,[CS]:n.DST_COLOR,[AS]:n.DST_ALPHA,[bS]:n.ONE_MINUS_SRC_COLOR,[Nd]:n.ONE_MINUS_SRC_ALPHA,[LS]:n.ONE_MINUS_DST_COLOR,[RS]:n.ONE_MINUS_DST_ALPHA,[NS]:n.CONSTANT_COLOR,[DS]:n.ONE_MINUS_CONSTANT_COLOR,[IS]:n.CONSTANT_ALPHA,[US]:n.ONE_MINUS_CONSTANT_ALPHA};function me(L,ce,ue,Pe,be,ot,at,It,tn,lt){if(L===or){h===!0&&(xe(n.BLEND),h=!1);return}if(h===!1&&(Ne(n.BLEND),h=!0),L!==yS){if(L!==_||lt!==O){if((v!==br||R!==br)&&(n.blendEquation(n.FUNC_ADD),v=br,R=br),lt)switch(L){case Ds:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ep:n.blendFunc(n.ONE,n.ONE);break;case wp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Tp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ds:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ep:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case wp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Tp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,C=null,A=null,D=null,M.set(0,0,0),E=0,_=L,O=lt}return}be=be||ce,ot=ot||ue,at=at||Pe,(ce!==v||be!==R)&&(n.blendEquationSeparate(ve[ce],ve[be]),v=ce,R=be),(ue!==y||Pe!==C||ot!==A||at!==D)&&(n.blendFuncSeparate(we[ue],we[Pe],we[ot],we[at]),y=ue,C=Pe,A=ot,D=at),(It.equals(M)===!1||tn!==E)&&(n.blendColor(It.r,It.g,It.b,tn),M.copy(It),E=tn),_=L,O=!1}function Te(L,ce){L.side===Dn?xe(n.CULL_FACE):Ne(n.CULL_FACE);let ue=L.side===_n;ce&&(ue=!ue),Ae(ue),L.blending===Ds&&L.transparent===!1?me(or):me(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Pe=L.stencilWrite;c.setTest(Pe),Pe&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),U(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ne(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(L){z!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),z=L)}function b(L){L!==vS?(Ne(n.CULL_FACE),L!==$&&(L===Mp?n.cullFace(n.BACK):L===xS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),$=L}function S(L){L!==P&&(I&&n.lineWidth(L),P=L)}function U(L,ce,ue){L?(Ne(n.POLYGON_OFFSET_FILL),(G!==ce||V!==ue)&&(n.polygonOffset(ce,ue),G=ce,V=ue)):xe(n.POLYGON_OFFSET_FILL)}function Z(L){L?Ne(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function q(L){L===void 0&&(L=n.TEXTURE0+J-1),Q!==L&&(n.activeTexture(L),Q=L)}function K(L,ce,ue){ue===void 0&&(Q===null?ue=n.TEXTURE0+J-1:ue=Q);let Pe=te[ue];Pe===void 0&&(Pe={type:void 0,texture:void 0},te[ue]=Pe),(Pe.type!==L||Pe.texture!==ce)&&(Q!==ue&&(n.activeTexture(ue),Q=ue),n.bindTexture(L,ce||Ce[L]),Pe.type=L,Pe.texture=ce)}function le(){const L=te[Q];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function re(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Fe(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Je(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ge(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function De(L){ae.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ae.copy(L))}function Ze(L){he.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),he.copy(L))}function ht(L,ce){let ue=f.get(ce);ue===void 0&&(ue=new WeakMap,f.set(ce,ue));let Pe=ue.get(L);Pe===void 0&&(Pe=n.getUniformBlockIndex(ce,L.name),ue.set(L,Pe))}function Oe(L,ce){const Pe=f.get(ce).get(L);d.get(ce)!==Pe&&(n.uniformBlockBinding(ce,Pe,L.__bindingPointIndex),d.set(ce,Pe))}function se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Q=null,te={},p={},g=new WeakMap,x=[],m=null,h=!1,_=null,v=null,y=null,C=null,R=null,A=null,D=null,M=new Ue(0,0,0),E=0,O=!1,z=null,$=null,P=null,G=null,V=null,ae.set(0,0,n.canvas.width,n.canvas.height),he.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ne,disable:xe,bindFramebuffer:Ye,drawBuffers:k,useProgram:Et,setBlending:me,setMaterial:Te,setFlipSided:Ae,setCullFace:b,setLineWidth:S,setPolygonOffset:U,setScissorTest:Z,activeTexture:q,bindTexture:K,unbindTexture:le,compressedTexImage2D:re,compressedTexImage3D:de,texImage2D:Me,texImage3D:_e,updateUBOMapping:ht,uniformBlockBinding:Oe,texStorage2D:Ge,texStorage3D:Le,texSubImage2D:Se,texSubImage3D:Fe,compressedTexSubImage2D:ne,compressedTexSubImage3D:Je,scissor:De,viewport:Ze,reset:se}}function Lb(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let f;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,S){return p?new OffscreenCanvas(b,S):oa("canvas")}function x(b,S,U,Z){let q=1;if((b.width>Z||b.height>Z)&&(q=Z/Math.max(b.width,b.height)),q<1||S===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const K=S?Jl:Math.floor,le=K(q*b.width),re=K(q*b.height);f===void 0&&(f=g(le,re));const de=U?g(le,re):f;return de.width=le,de.height=re,de.getContext("2d").drawImage(b,0,0,le,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+le+"x"+re+")."),de}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return Bd(b.width)&&Bd(b.height)}function h(b){return a?!1:b.wrapS!==In||b.wrapT!==In||b.minFilter!==kt&&b.minFilter!==fn}function _(b,S){return b.generateMipmaps&&S&&b.minFilter!==kt&&b.minFilter!==fn}function v(b){n.generateMipmap(b)}function y(b,S,U,Z,q=!1){if(a===!1)return S;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let K=S;if(S===n.RED&&(U===n.FLOAT&&(K=n.R32F),U===n.HALF_FLOAT&&(K=n.R16F),U===n.UNSIGNED_BYTE&&(K=n.R8)),S===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(K=n.R8UI),U===n.UNSIGNED_SHORT&&(K=n.R16UI),U===n.UNSIGNED_INT&&(K=n.R32UI),U===n.BYTE&&(K=n.R8I),U===n.SHORT&&(K=n.R16I),U===n.INT&&(K=n.R32I)),S===n.RG&&(U===n.FLOAT&&(K=n.RG32F),U===n.HALF_FLOAT&&(K=n.RG16F),U===n.UNSIGNED_BYTE&&(K=n.RG8)),S===n.RGBA){const le=q?Kl:tt.getTransfer(Z);U===n.FLOAT&&(K=n.RGBA32F),U===n.HALF_FLOAT&&(K=n.RGBA16F),U===n.UNSIGNED_BYTE&&(K=le===dt?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function C(b,S,U){return _(b,U)===!0||b.isFramebufferTexture&&b.minFilter!==kt&&b.minFilter!==fn?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function R(b){return b===kt||b===Ud||b===yl?n.NEAREST:n.LINEAR}function A(b){const S=b.target;S.removeEventListener("dispose",A),M(S),S.isVideoTexture&&d.delete(S)}function D(b){const S=b.target;S.removeEventListener("dispose",D),O(S)}function M(b){const S=i.get(b);if(S.__webglInit===void 0)return;const U=b.source,Z=u.get(U);if(Z){const q=Z[S.__cacheKey];q.usedTimes--,q.usedTimes===0&&E(b),Object.keys(Z).length===0&&u.delete(U)}i.remove(b)}function E(b){const S=i.get(b);n.deleteTexture(S.__webglTexture);const U=b.source,Z=u.get(U);delete Z[S.__cacheKey],o.memory.textures--}function O(b){const S=b.texture,U=i.get(b),Z=i.get(S);if(Z.__webglTexture!==void 0&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(U.__webglFramebuffer[q]))for(let K=0;K<U.__webglFramebuffer[q].length;K++)n.deleteFramebuffer(U.__webglFramebuffer[q][K]);else n.deleteFramebuffer(U.__webglFramebuffer[q]);U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer[q])}else{if(Array.isArray(U.__webglFramebuffer))for(let q=0;q<U.__webglFramebuffer.length;q++)n.deleteFramebuffer(U.__webglFramebuffer[q]);else n.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&n.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let q=0;q<U.__webglColorRenderbuffer.length;q++)U.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(U.__webglColorRenderbuffer[q]);U.__webglDepthRenderbuffer&&n.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let q=0,K=S.length;q<K;q++){const le=i.get(S[q]);le.__webglTexture&&(n.deleteTexture(le.__webglTexture),o.memory.textures--),i.remove(S[q])}i.remove(S),i.remove(b)}let z=0;function $(){z=0}function P(){const b=z;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),z+=1,b}function G(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function V(b,S){const U=i.get(b);if(b.isVideoTexture&&Te(b),b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){const Z=b.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(U,b,S);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+S)}function J(b,S){const U=i.get(b);if(b.version>0&&U.__version!==b.version){ae(U,b,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+S)}function I(b,S){const U=i.get(b);if(b.version>0&&U.__version!==b.version){ae(U,b,S);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+S)}function B(b,S){const U=i.get(b);if(b.version>0&&U.__version!==b.version){he(U,b,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+S)}const H={[js]:n.REPEAT,[In]:n.CLAMP_TO_EDGE,[ql]:n.MIRRORED_REPEAT},Q={[kt]:n.NEAREST,[Ud]:n.NEAREST_MIPMAP_NEAREST,[yl]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[F_]:n.LINEAR_MIPMAP_NEAREST,[Vr]:n.LINEAR_MIPMAP_LINEAR},te={[uM]:n.NEVER,[gM]:n.ALWAYS,[dM]:n.LESS,[Y_]:n.LEQUAL,[fM]:n.EQUAL,[mM]:n.GEQUAL,[hM]:n.GREATER,[pM]:n.NOTEQUAL};function Y(b,S,U){if(U?(n.texParameteri(b,n.TEXTURE_WRAP_S,H[S.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,H[S.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,H[S.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,Q[S.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,Q[S.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(S.wrapS!==In||S.wrapT!==In)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,R(S.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,R(S.minFilter)),S.minFilter!==kt&&S.minFilter!==fn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,te[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Z=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===kt||S.minFilter!==yl&&S.minFilter!==Vr||S.type===bi&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===ra&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(b,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function ee(b,S){let U=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",A));const Z=S.source;let q=u.get(Z);q===void 0&&(q={},u.set(Z,q));const K=G(S);if(K!==b.__cacheKey){q[K]===void 0&&(q[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),q[K].usedTimes++;const le=q[b.__cacheKey];le!==void 0&&(q[b.__cacheKey].usedTimes--,le.usedTimes===0&&E(S)),b.__cacheKey=K,b.__webglTexture=q[K].texture}return U}function ae(b,S,U){let Z=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=n.TEXTURE_3D);const q=ee(b,S),K=S.source;t.bindTexture(Z,b.__webglTexture,n.TEXTURE0+U);const le=i.get(K);if(K.version!==le.__version||q===!0){t.activeTexture(n.TEXTURE0+U);const re=tt.getPrimaries(tt.workingColorSpace),de=S.colorSpace===Fn?null:tt.getPrimaries(S.colorSpace),Se=S.colorSpace===Fn||re===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Fe=h(S)&&m(S.image)===!1;let ne=x(S.image,Fe,!1,r.maxTextureSize);ne=Ae(S,ne);const Je=m(ne)||a,Ge=s.convert(S.format,S.colorSpace);let Le=s.convert(S.type),Me=y(S.internalFormat,Ge,Le,S.colorSpace,S.isVideoTexture);Y(Z,S,Je);let _e;const De=S.mipmaps,Ze=a&&S.isVideoTexture!==!0&&Me!==V_,ht=le.__version===void 0||q===!0,Oe=C(S,ne,Je);if(S.isDepthTexture)Me=n.DEPTH_COMPONENT,a?S.type===bi?Me=n.DEPTH_COMPONENT32F:S.type===$i?Me=n.DEPTH_COMPONENT24:S.type===Ur?Me=n.DEPTH24_STENCIL8:Me=n.DEPTH_COMPONENT16:S.type===bi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Fr&&Me===n.DEPTH_COMPONENT&&S.type!==Vf&&S.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=$i,Le=s.convert(S.type)),S.format===Xs&&Me===n.DEPTH_COMPONENT&&(Me=n.DEPTH_STENCIL,S.type!==Ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Ur,Le=s.convert(S.type))),ht&&(Ze?t.texStorage2D(n.TEXTURE_2D,1,Me,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Me,ne.width,ne.height,0,Ge,Le,null));else if(S.isDataTexture)if(De.length>0&&Je){Ze&&ht&&t.texStorage2D(n.TEXTURE_2D,Oe,Me,De[0].width,De[0].height);for(let se=0,L=De.length;se<L;se++)_e=De[se],Ze?t.texSubImage2D(n.TEXTURE_2D,se,0,0,_e.width,_e.height,Ge,Le,_e.data):t.texImage2D(n.TEXTURE_2D,se,Me,_e.width,_e.height,0,Ge,Le,_e.data);S.generateMipmaps=!1}else Ze?(ht&&t.texStorage2D(n.TEXTURE_2D,Oe,Me,ne.width,ne.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,Ge,Le,ne.data)):t.texImage2D(n.TEXTURE_2D,0,Me,ne.width,ne.height,0,Ge,Le,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ze&&ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Oe,Me,De[0].width,De[0].height,ne.depth);for(let se=0,L=De.length;se<L;se++)_e=De[se],S.format!==Un?Ge!==null?Ze?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,_e.width,_e.height,ne.depth,Ge,_e.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,Me,_e.width,_e.height,ne.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,_e.width,_e.height,ne.depth,Ge,Le,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,Me,_e.width,_e.height,ne.depth,0,Ge,Le,_e.data)}else{Ze&&ht&&t.texStorage2D(n.TEXTURE_2D,Oe,Me,De[0].width,De[0].height);for(let se=0,L=De.length;se<L;se++)_e=De[se],S.format!==Un?Ge!==null?Ze?t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,_e.width,_e.height,Ge,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,se,Me,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage2D(n.TEXTURE_2D,se,0,0,_e.width,_e.height,Ge,Le,_e.data):t.texImage2D(n.TEXTURE_2D,se,Me,_e.width,_e.height,0,Ge,Le,_e.data)}else if(S.isDataArrayTexture)Ze?(ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Oe,Me,ne.width,ne.height,ne.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Ge,Le,ne.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,ne.width,ne.height,ne.depth,0,Ge,Le,ne.data);else if(S.isData3DTexture)Ze?(ht&&t.texStorage3D(n.TEXTURE_3D,Oe,Me,ne.width,ne.height,ne.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Ge,Le,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Me,ne.width,ne.height,ne.depth,0,Ge,Le,ne.data);else if(S.isFramebufferTexture){if(ht)if(Ze)t.texStorage2D(n.TEXTURE_2D,Oe,Me,ne.width,ne.height);else{let se=ne.width,L=ne.height;for(let ce=0;ce<Oe;ce++)t.texImage2D(n.TEXTURE_2D,ce,Me,se,L,0,Ge,Le,null),se>>=1,L>>=1}}else if(De.length>0&&Je){Ze&&ht&&t.texStorage2D(n.TEXTURE_2D,Oe,Me,De[0].width,De[0].height);for(let se=0,L=De.length;se<L;se++)_e=De[se],Ze?t.texSubImage2D(n.TEXTURE_2D,se,0,0,Ge,Le,_e):t.texImage2D(n.TEXTURE_2D,se,Me,Ge,Le,_e);S.generateMipmaps=!1}else Ze?(ht&&t.texStorage2D(n.TEXTURE_2D,Oe,Me,ne.width,ne.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ge,Le,ne)):t.texImage2D(n.TEXTURE_2D,0,Me,Ge,Le,ne);_(S,Je)&&v(Z),le.__version=K.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function he(b,S,U){if(S.image.length!==6)return;const Z=ee(b,S),q=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+U);const K=i.get(q);if(q.version!==K.__version||Z===!0){t.activeTexture(n.TEXTURE0+U);const le=tt.getPrimaries(tt.workingColorSpace),re=S.colorSpace===Fn?null:tt.getPrimaries(S.colorSpace),de=S.colorSpace===Fn||le===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Se=S.isCompressedTexture||S.image[0].isCompressedTexture,Fe=S.image[0]&&S.image[0].isDataTexture,ne=[];for(let se=0;se<6;se++)!Se&&!Fe?ne[se]=x(S.image[se],!1,!0,r.maxCubemapSize):ne[se]=Fe?S.image[se].image:S.image[se],ne[se]=Ae(S,ne[se]);const Je=ne[0],Ge=m(Je)||a,Le=s.convert(S.format,S.colorSpace),Me=s.convert(S.type),_e=y(S.internalFormat,Le,Me,S.colorSpace),De=a&&S.isVideoTexture!==!0,Ze=K.__version===void 0||Z===!0;let ht=C(S,Je,Ge);Y(n.TEXTURE_CUBE_MAP,S,Ge);let Oe;if(Se){De&&Ze&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ht,_e,Je.width,Je.height);for(let se=0;se<6;se++){Oe=ne[se].mipmaps;for(let L=0;L<Oe.length;L++){const ce=Oe[L];S.format!==Un?Le!==null?De?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,L,0,0,ce.width,ce.height,Le,ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,L,_e,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,L,0,0,ce.width,ce.height,Le,Me,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,L,_e,ce.width,ce.height,0,Le,Me,ce.data)}}}else{Oe=S.mipmaps,De&&Ze&&(Oe.length>0&&ht++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ht,_e,ne[0].width,ne[0].height));for(let se=0;se<6;se++)if(Fe){De?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ne[se].width,ne[se].height,Le,Me,ne[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,_e,ne[se].width,ne[se].height,0,Le,Me,ne[se].data);for(let L=0;L<Oe.length;L++){const ue=Oe[L].image[se].image;De?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,L+1,0,0,ue.width,ue.height,Le,Me,ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,L+1,_e,ue.width,ue.height,0,Le,Me,ue.data)}}else{De?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Le,Me,ne[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,_e,Le,Me,ne[se]);for(let L=0;L<Oe.length;L++){const ce=Oe[L];De?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,L+1,0,0,Le,Me,ce.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,L+1,_e,Le,Me,ce.image[se])}}}_(S,Ge)&&v(n.TEXTURE_CUBE_MAP),K.__version=q.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function ge(b,S,U,Z,q,K){const le=s.convert(U.format,U.colorSpace),re=s.convert(U.type),de=y(U.internalFormat,le,re,U.colorSpace);if(!i.get(S).__hasExternalTextures){const Fe=Math.max(1,S.width>>K),ne=Math.max(1,S.height>>K);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?t.texImage3D(q,K,de,Fe,ne,S.depth,0,le,re,null):t.texImage2D(q,K,de,Fe,ne,0,le,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),me(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,q,i.get(U).__webglTexture,0,we(S)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,q,i.get(U).__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(b,S,U){if(n.bindRenderbuffer(n.RENDERBUFFER,b),S.depthBuffer&&!S.stencilBuffer){let Z=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(U||me(S)){const q=S.depthTexture;q&&q.isDepthTexture&&(q.type===bi?Z=n.DEPTH_COMPONENT32F:q.type===$i&&(Z=n.DEPTH_COMPONENT24));const K=we(S);me(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,K,Z,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,K,Z,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,Z,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(S.depthBuffer&&S.stencilBuffer){const Z=we(S);U&&me(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,n.DEPTH24_STENCIL8,S.width,S.height):me(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Z,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const Z=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let q=0;q<Z.length;q++){const K=Z[q],le=s.convert(K.format,K.colorSpace),re=s.convert(K.type),de=y(K.internalFormat,le,re,K.colorSpace),Se=we(S);U&&me(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,de,S.width,S.height):me(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se,de,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,de,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ne(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),V(S.depthTexture,0);const Z=i.get(S.depthTexture).__webglTexture,q=we(S);if(S.depthTexture.format===Fr)me(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(S.depthTexture.format===Xs)me(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function xe(b){const S=i.get(b),U=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Ne(S.__webglFramebuffer,b)}else if(U){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]=n.createRenderbuffer(),Ce(S.__webglDepthbuffer[Z],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),Ce(S.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ye(b,S,U){const Z=i.get(b);S!==void 0&&ge(Z.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&xe(b)}function k(b){const S=b.texture,U=i.get(b),Z=i.get(S);b.addEventListener("dispose",D),b.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=S.version,o.memory.textures++);const q=b.isWebGLCubeRenderTarget===!0,K=b.isWebGLMultipleRenderTargets===!0,le=m(b)||a;if(q){U.__webglFramebuffer=[];for(let re=0;re<6;re++)if(a&&S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer[re]=[];for(let de=0;de<S.mipmaps.length;de++)U.__webglFramebuffer[re][de]=n.createFramebuffer()}else U.__webglFramebuffer[re]=n.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer=[];for(let re=0;re<S.mipmaps.length;re++)U.__webglFramebuffer[re]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(K)if(r.drawBuffers){const re=b.texture;for(let de=0,Se=re.length;de<Se;de++){const Fe=i.get(re[de]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&me(b)===!1){const re=K?S:[S];U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let de=0;de<re.length;de++){const Se=re[de];U.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[de]);const Fe=s.convert(Se.format,Se.colorSpace),ne=s.convert(Se.type),Je=y(Se.internalFormat,Fe,ne,Se.colorSpace,b.isXRRenderTarget===!0),Ge=we(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,Je,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,U.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),Ce(U.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Y(n.TEXTURE_CUBE_MAP,S,le);for(let re=0;re<6;re++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)ge(U.__webglFramebuffer[re][de],b,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,de);else ge(U.__webglFramebuffer[re],b,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);_(S,le)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(K){const re=b.texture;for(let de=0,Se=re.length;de<Se;de++){const Fe=re[de],ne=i.get(Fe);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),Y(n.TEXTURE_2D,Fe,le),ge(U.__webglFramebuffer,b,Fe,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),_(Fe,le)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?re=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,Z.__webglTexture),Y(re,S,le),a&&S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)ge(U.__webglFramebuffer[de],b,S,n.COLOR_ATTACHMENT0,re,de);else ge(U.__webglFramebuffer,b,S,n.COLOR_ATTACHMENT0,re,0);_(S,le)&&v(re),t.unbindTexture()}b.depthBuffer&&xe(b)}function Et(b){const S=m(b)||a,U=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Z=0,q=U.length;Z<q;Z++){const K=U[Z];if(_(K,S)){const le=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,re=i.get(K).__webglTexture;t.bindTexture(le,re),v(le),t.unbindTexture()}}}function ve(b){if(a&&b.samples>0&&me(b)===!1){const S=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],U=b.width,Z=b.height;let q=n.COLOR_BUFFER_BIT;const K=[],le=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=i.get(b),de=b.isWebGLMultipleRenderTargets===!0;if(de)for(let Se=0;Se<S.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let Se=0;Se<S.length;Se++){K.push(n.COLOR_ATTACHMENT0+Se),b.depthBuffer&&K.push(le);const Fe=re.__ignoreDepthValues!==void 0?re.__ignoreDepthValues:!1;if(Fe===!1&&(b.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(q|=n.STENCIL_BUFFER_BIT)),de&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,re.__webglColorRenderbuffer[Se]),Fe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[le]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[le])),de){const ne=i.get(S[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,U,Z,0,0,U,Z,q,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,K)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let Se=0;Se<S.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,re.__webglColorRenderbuffer[Se]);const Fe=i.get(S[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,Fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}}function we(b){return Math.min(r.maxSamples,b.samples)}function me(b){const S=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Te(b){const S=o.render.frame;d.get(b)!==S&&(d.set(b,S),b.update())}function Ae(b,S){const U=b.colorSpace,Z=b.format,q=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===kd||U!==Ht&&U!==Fn&&(tt.getTransfer(U)===dt?a===!1?e.has("EXT_sRGB")===!0&&Z===Un?(b.format=kd,b.minFilter=fn,b.generateMipmaps=!1):S=K_.sRGBToLinear(S):(Z!==Un||q!==lr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),S}this.allocateTextureUnit=P,this.resetTextureUnits=$,this.setTexture2D=V,this.setTexture2DArray=J,this.setTexture3D=I,this.setTextureCube=B,this.rebindTextures=Ye,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=me}function Pb(n,e,t){const i=t.isWebGL2;function r(s,o=Fn){let a;const l=tt.getTransfer(o);if(s===lr)return n.UNSIGNED_BYTE;if(s===k_)return n.UNSIGNED_SHORT_4_4_4_4;if(s===B_)return n.UNSIGNED_SHORT_5_5_5_1;if(s===ZS)return n.BYTE;if(s===QS)return n.SHORT;if(s===Vf)return n.UNSIGNED_SHORT;if(s===O_)return n.INT;if(s===$i)return n.UNSIGNED_INT;if(s===bi)return n.FLOAT;if(s===ra)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===JS)return n.ALPHA;if(s===Un)return n.RGBA;if(s===eM)return n.LUMINANCE;if(s===tM)return n.LUMINANCE_ALPHA;if(s===Fr)return n.DEPTH_COMPONENT;if(s===Xs)return n.DEPTH_STENCIL;if(s===kd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===nM)return n.RED;if(s===z_)return n.RED_INTEGER;if(s===iM)return n.RG;if(s===H_)return n.RG_INTEGER;if(s===G_)return n.RGBA_INTEGER;if(s===Jc||s===eu||s===tu||s===nu)if(l===dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Jc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===eu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===tu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===nu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Jc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===eu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===tu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===nu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Cp||s===Lp||s===Pp||s===Np)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Cp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Lp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Pp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Np)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===V_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Dp||s===Ip)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Dp)return l===dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ip)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Up||s===Fp||s===Op||s===kp||s===Bp||s===zp||s===Hp||s===Gp||s===Vp||s===Wp||s===jp||s===Xp||s===Yp||s===qp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Up)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Fp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Op)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===kp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Bp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===zp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Hp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Wp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===jp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Xp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Yp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===qp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===iu||s===Kp||s===$p)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===iu)return l===dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Kp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===$p)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===rM||s===Zp||s===Qp||s===Jp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===iu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Zp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Qp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Jp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ur?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Nb extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ai extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Db={type:"move"};class Au{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),h=this._getHandJoint(c,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=d.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Db)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ai;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Ib extends to{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,u=null,p=null,g=null;const x=t.getContextAttributes();let m=null,h=null;const _=[],v=[],y=new qe;let C=null;const R=new an;R.layers.enable(1),R.viewport=new st;const A=new an;A.layers.enable(2),A.viewport=new st;const D=[R,A],M=new Nb;M.layers.enable(1),M.layers.enable(2);let E=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ee=_[Y];return ee===void 0&&(ee=new Au,_[Y]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Y){let ee=_[Y];return ee===void 0&&(ee=new Au,_[Y]=ee),ee.getGripSpace()},this.getHand=function(Y){let ee=_[Y];return ee===void 0&&(ee=new Au,_[Y]=ee),ee.getHandSpace()};function z(Y){const ee=v.indexOf(Y.inputSource);if(ee===-1)return;const ae=_[ee];ae!==void 0&&(ae.update(Y.inputSource,Y.frame,c||o),ae.dispatchEvent({type:Y.type,data:Y.inputSource}))}function $(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",P);for(let Y=0;Y<_.length;Y++){const ee=v[Y];ee!==null&&(v[Y]=null,_[Y].disconnect(ee))}E=null,O=null,e.setRenderTarget(m),p=null,u=null,f=null,r=null,h=null,te.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",$),r.addEventListener("inputsourceschange",P),x.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),h=new Wr(p.framebufferWidth,p.framebufferHeight,{format:Un,type:lr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ee=null,ae=null,he=null;x.depth&&(he=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=x.stencil?Xs:Fr,ae=x.stencil?Ur:$i);const ge={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};f=new XRWebGLBinding(r,t),u=f.createProjectionLayer(ge),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),h=new Wr(u.textureWidth,u.textureHeight,{format:Un,type:lr,depthTexture:new ov(u.textureWidth,u.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Ce=e.properties.get(h);Ce.__ignoreDepthValues=u.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),te.setContext(r),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(Y){for(let ee=0;ee<Y.removed.length;ee++){const ae=Y.removed[ee],he=v.indexOf(ae);he>=0&&(v[he]=null,_[he].disconnect(ae))}for(let ee=0;ee<Y.added.length;ee++){const ae=Y.added[ee];let he=v.indexOf(ae);if(he===-1){for(let Ce=0;Ce<_.length;Ce++)if(Ce>=v.length){v.push(ae),he=Ce;break}else if(v[Ce]===null){v[Ce]=ae,he=Ce;break}if(he===-1)break}const ge=_[he];ge&&ge.connect(ae)}}const G=new N,V=new N;function J(Y,ee,ae){G.setFromMatrixPosition(ee.matrixWorld),V.setFromMatrixPosition(ae.matrixWorld);const he=G.distanceTo(V),ge=ee.projectionMatrix.elements,Ce=ae.projectionMatrix.elements,Ne=ge[14]/(ge[10]-1),xe=ge[14]/(ge[10]+1),Ye=(ge[9]+1)/ge[5],k=(ge[9]-1)/ge[5],Et=(ge[8]-1)/ge[0],ve=(Ce[8]+1)/Ce[0],we=Ne*Et,me=Ne*ve,Te=he/(-Et+ve),Ae=Te*-Et;ee.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ae),Y.translateZ(Te),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const b=Ne+Te,S=xe+Te,U=we-Ae,Z=me+(he-Ae),q=Ye*xe/S*b,K=k*xe/S*b;Y.projectionMatrix.makePerspective(U,Z,q,K,b,S),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function I(Y,ee){ee===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ee.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;M.near=A.near=R.near=Y.near,M.far=A.far=R.far=Y.far,(E!==M.near||O!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,O=M.far);const ee=Y.parent,ae=M.cameras;I(M,ee);for(let he=0;he<ae.length;he++)I(ae[he],ee);ae.length===2?J(M,R,A):M.projectionMatrix.copy(R.projectionMatrix),B(Y,M,ee)};function B(Y,ee,ae){ae===null?Y.matrix.copy(ee.matrixWorld):(Y.matrix.copy(ae.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ee.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=qs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)};let H=null;function Q(Y,ee){if(d=ee.getViewerPose(c||o),g=ee,d!==null){const ae=d.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let he=!1;ae.length!==M.cameras.length&&(M.cameras.length=0,he=!0);for(let ge=0;ge<ae.length;ge++){const Ce=ae[ge];let Ne=null;if(p!==null)Ne=p.getViewport(Ce);else{const Ye=f.getViewSubImage(u,Ce);Ne=Ye.viewport,ge===0&&(e.setRenderTargetTextures(h,Ye.colorTexture,u.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(h))}let xe=D[ge];xe===void 0&&(xe=new an,xe.layers.enable(ge),xe.viewport=new st,D[ge]=xe),xe.matrix.fromArray(Ce.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(Ce.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),ge===0&&(M.matrix.copy(xe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),he===!0&&M.cameras.push(xe)}}for(let ae=0;ae<_.length;ae++){const he=v[ae],ge=_[ae];he!==null&&ge!==void 0&&ge.update(he,ee,c||o)}H&&H(Y,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}const te=new sv;te.setAnimationLoop(Q),this.setAnimationLoop=function(Y){H=Y},this.dispose=function(){}}}function Ub(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,nv(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,_,v,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),d(m,h)):h.isMeshStandardMaterial?(s(m,h),u(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),x(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,_,v):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===_n&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===_n&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const _=e.get(h).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*v,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,_,v){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*_,m.scale.value=v*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function u(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,_){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===_n&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const _=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Fb(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,v){const y=v.program;i.uniformBlockBinding(_,y)}function c(_,v){let y=r[_.id];y===void 0&&(g(_),y=d(_),r[_.id]=y,_.addEventListener("dispose",m));const C=v.program;i.updateUBOMapping(_,C);const R=e.render.frame;s[_.id]!==R&&(u(_),s[_.id]=R)}function d(_){const v=f();_.__bindingPointIndex=v;const y=n.createBuffer(),C=_.__size,R=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const v=r[_.id],y=_.uniforms,C=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let R=0,A=y.length;R<A;R++){const D=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,E=D.length;M<E;M++){const O=D[M];if(p(O,R,M,C)===!0){const z=O.__offset,$=Array.isArray(O.value)?O.value:[O.value];let P=0;for(let G=0;G<$.length;G++){const V=$[G],J=x(V);typeof V=="number"||typeof V=="boolean"?(O.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,z+P,O.__data)):V.isMatrix3?(O.__data[0]=V.elements[0],O.__data[1]=V.elements[1],O.__data[2]=V.elements[2],O.__data[3]=0,O.__data[4]=V.elements[3],O.__data[5]=V.elements[4],O.__data[6]=V.elements[5],O.__data[7]=0,O.__data[8]=V.elements[6],O.__data[9]=V.elements[7],O.__data[10]=V.elements[8],O.__data[11]=0):(V.toArray(O.__data,P),P+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,O.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,v,y,C){const R=_.value,A=v+"_"+y;if(C[A]===void 0)return typeof R=="number"||typeof R=="boolean"?C[A]=R:C[A]=R.clone(),!0;{const D=C[A];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return C[A]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(_){const v=_.uniforms;let y=0;const C=16;for(let A=0,D=v.length;A<D;A++){const M=Array.isArray(v[A])?v[A]:[v[A]];for(let E=0,O=M.length;E<O;E++){const z=M[E],$=Array.isArray(z.value)?z.value:[z.value];for(let P=0,G=$.length;P<G;P++){const V=$[P],J=x(V),I=y%C;I!==0&&C-I<J.boundary&&(y+=C-I),z.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=J.storage}}}const R=y%C;return R>0&&(y+=C-R),_.__size=y,_.__cache={},this}function x(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){const v=_.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function h(){for(const _ in r)n.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class fv{constructor(e={}){const{canvas:t=NM(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let u;i!==null?u=i.getContextAttributes().alpha:u=o;const p=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const h=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_t,this._useLegacyLights=!1,this.toneMapping=ar,this.toneMappingExposure=1;const v=this;let y=!1,C=0,R=0,A=null,D=-1,M=null;const E=new st,O=new st;let z=null;const $=new Ue(0);let P=0,G=t.width,V=t.height,J=1,I=null,B=null;const H=new st(0,0,G,V),Q=new st(0,0,G,V);let te=!1;const Y=new Xf;let ee=!1,ae=!1,he=null;const ge=new Xe,Ce=new qe,Ne=new N,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ye(){return A===null?J:1}let k=i;function Et(w,F){for(let j=0;j<w.length;j++){const X=w[j],W=t.getContext(X,F);if(W!==null)return W}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gf}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",ce,!1),k===null){const F=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&F.shift(),k=Et(F,w),k===null)throw Et(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ve,we,me,Te,Ae,b,S,U,Z,q,K,le,re,de,Se,Fe,ne,Je,Ge,Le,Me,_e,De,Ze;function ht(){ve=new XT(k),we=new zT(k,ve,e),ve.init(we),_e=new Pb(k,ve,we),me=new Cb(k,ve,we),Te=new KT(k),Ae=new mb,b=new Lb(k,ve,me,Ae,we,_e,Te),S=new GT(v),U=new jT(v),Z=new iE(k,we),De=new kT(k,ve,Z,we),q=new YT(k,Z,Te,De),K=new JT(k,q,Z,Te),Ge=new QT(k,we,b),Fe=new HT(Ae),le=new pb(v,S,U,ve,we,De,Fe),re=new Ub(v,Ae),de=new _b,Se=new Eb(ve,we),Je=new OT(v,S,U,me,K,u,l),ne=new Rb(v,K,we),Ze=new Fb(k,Te,we,me),Le=new BT(k,ve,Te,we),Me=new qT(k,ve,Te,we),Te.programs=le.programs,v.capabilities=we,v.extensions=ve,v.properties=Ae,v.renderLists=de,v.shadowMap=ne,v.state=me,v.info=Te}ht();const Oe=new Ib(v,k);this.xr=Oe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=ve.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ve.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(w){w!==void 0&&(J=w,this.setSize(G,V,!1))},this.getSize=function(w){return w.set(G,V)},this.setSize=function(w,F,j=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,V=F,t.width=Math.floor(w*J),t.height=Math.floor(F*J),j===!0&&(t.style.width=w+"px",t.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(G*J,V*J).floor()},this.setDrawingBufferSize=function(w,F,j){G=w,V=F,J=j,t.width=Math.floor(w*j),t.height=Math.floor(F*j),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(E)},this.getViewport=function(w){return w.copy(H)},this.setViewport=function(w,F,j,X){w.isVector4?H.set(w.x,w.y,w.z,w.w):H.set(w,F,j,X),me.viewport(E.copy(H).multiplyScalar(J).floor())},this.getScissor=function(w){return w.copy(Q)},this.setScissor=function(w,F,j,X){w.isVector4?Q.set(w.x,w.y,w.z,w.w):Q.set(w,F,j,X),me.scissor(O.copy(Q).multiplyScalar(J).floor())},this.getScissorTest=function(){return te},this.setScissorTest=function(w){me.setScissorTest(te=w)},this.setOpaqueSort=function(w){I=w},this.setTransparentSort=function(w){B=w},this.getClearColor=function(w){return w.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(w=!0,F=!0,j=!0){let X=0;if(w){let W=!1;if(A!==null){const fe=A.texture.format;W=fe===G_||fe===H_||fe===z_}if(W){const fe=A.texture.type,ye=fe===lr||fe===$i||fe===Vf||fe===Ur||fe===k_||fe===B_,Re=Je.getClearColor(),Ie=Je.getClearAlpha(),Ve=Re.r,ke=Re.g,Be=Re.b;ye?(p[0]=Ve,p[1]=ke,p[2]=Be,p[3]=Ie,k.clearBufferuiv(k.COLOR,0,p)):(g[0]=Ve,g[1]=ke,g[2]=Be,g[3]=Ie,k.clearBufferiv(k.COLOR,0,g))}else X|=k.COLOR_BUFFER_BIT}F&&(X|=k.DEPTH_BUFFER_BIT),j&&(X|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),de.dispose(),Se.dispose(),Ae.dispose(),S.dispose(),U.dispose(),K.dispose(),De.dispose(),Ze.dispose(),le.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",tn),Oe.removeEventListener("sessionend",lt),he&&(he.dispose(),he=null),nn.stop()};function se(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=Te.autoReset,F=ne.enabled,j=ne.autoUpdate,X=ne.needsUpdate,W=ne.type;ht(),Te.autoReset=w,ne.enabled=F,ne.autoUpdate=j,ne.needsUpdate=X,ne.type=W}function ce(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ue(w){const F=w.target;F.removeEventListener("dispose",ue),Pe(F)}function Pe(w){be(w),Ae.remove(w)}function be(w){const F=Ae.get(w).programs;F!==void 0&&(F.forEach(function(j){le.releaseProgram(j)}),w.isShaderMaterial&&le.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,j,X,W,fe){F===null&&(F=xe);const ye=W.isMesh&&W.matrixWorld.determinant()<0,Re=Ev(w,F,j,X,W);me.setMaterial(X,ye);let Ie=j.index,Ve=1;if(X.wireframe===!0){if(Ie=q.getWireframeAttribute(j),Ie===void 0)return;Ve=2}const ke=j.drawRange,Be=j.attributes.position;let wt=ke.start*Ve,xn=(ke.start+ke.count)*Ve;fe!==null&&(wt=Math.max(wt,fe.start*Ve),xn=Math.min(xn,(fe.start+fe.count)*Ve)),Ie!==null?(wt=Math.max(wt,0),xn=Math.min(xn,Ie.count)):Be!=null&&(wt=Math.max(wt,0),xn=Math.min(xn,Be.count));const Ut=xn-wt;if(Ut<0||Ut===1/0)return;De.setup(W,X,Re,j,Ie);let hi,mt=Le;if(Ie!==null&&(hi=Z.get(Ie),mt=Me,mt.setIndex(hi)),W.isMesh)X.wireframe===!0?(me.setLineWidth(X.wireframeLinewidth*Ye()),mt.setMode(k.LINES)):mt.setMode(k.TRIANGLES);else if(W.isLine){let We=X.linewidth;We===void 0&&(We=1),me.setLineWidth(We*Ye()),W.isLineSegments?mt.setMode(k.LINES):W.isLineLoop?mt.setMode(k.LINE_LOOP):mt.setMode(k.LINE_STRIP)}else W.isPoints?mt.setMode(k.POINTS):W.isSprite&&mt.setMode(k.TRIANGLES);if(W.isBatchedMesh)mt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)mt.renderInstances(wt,Ut,W.count);else if(j.isInstancedBufferGeometry){const We=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ec=Math.min(j.instanceCount,We);mt.renderInstances(wt,Ut,Ec)}else mt.render(wt,Ut)};function ot(w,F,j){w.transparent===!0&&w.side===Dn&&w.forceSinglePass===!1?(w.side=_n,w.needsUpdate=!0,ma(w,F,j),w.side=Di,w.needsUpdate=!0,ma(w,F,j),w.side=Dn):ma(w,F,j)}this.compile=function(w,F,j=null){j===null&&(j=w),m=Se.get(j),m.init(),_.push(m),j.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),w!==j&&w.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights(v._useLegacyLights);const X=new Set;return w.traverse(function(W){const fe=W.material;if(fe)if(Array.isArray(fe))for(let ye=0;ye<fe.length;ye++){const Re=fe[ye];ot(Re,j,W),X.add(Re)}else ot(fe,j,W),X.add(fe)}),_.pop(),m=null,X},this.compileAsync=function(w,F,j=null){const X=this.compile(w,F,j);return new Promise(W=>{function fe(){if(X.forEach(function(ye){Ae.get(ye).currentProgram.isReady()&&X.delete(ye)}),X.size===0){W(w);return}setTimeout(fe,10)}ve.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let at=null;function It(w){at&&at(w)}function tn(){nn.stop()}function lt(){nn.start()}const nn=new sv;nn.setAnimationLoop(It),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(w){at=w,Oe.setAnimationLoop(w),w===null?nn.stop():nn.start()},Oe.addEventListener("sessionstart",tn),Oe.addEventListener("sessionend",lt),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(F),F=Oe.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,F,A),m=Se.get(w,_.length),m.init(),_.push(m),ge.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Y.setFromProjectionMatrix(ge),ae=this.localClippingEnabled,ee=Fe.init(this.clippingPlanes,ae),x=de.get(w,h.length),x.init(),h.push(x),ti(w,F,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(I,B),this.info.render.frame++,ee===!0&&Fe.beginShadows();const j=m.state.shadowsArray;if(ne.render(j,w,F),ee===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Je.render(x,w),m.setupLights(v._useLegacyLights),F.isArrayCamera){const X=F.cameras;for(let W=0,fe=X.length;W<fe;W++){const ye=X[W];ih(x,w,ye,ye.viewport)}}else ih(x,w,F);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(v,w,F),De.resetDefaultState(),D=-1,M=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function ti(w,F,j,X){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Y.intersectsSprite(w)){X&&Ne.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ge);const ye=K.update(w),Re=w.material;Re.visible&&x.push(w,ye,Re,j,Ne.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Y.intersectsObject(w))){const ye=K.update(w),Re=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ne.copy(w.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ne.copy(ye.boundingSphere.center)),Ne.applyMatrix4(w.matrixWorld).applyMatrix4(ge)),Array.isArray(Re)){const Ie=ye.groups;for(let Ve=0,ke=Ie.length;Ve<ke;Ve++){const Be=Ie[Ve],wt=Re[Be.materialIndex];wt&&wt.visible&&x.push(w,ye,wt,j,Ne.z,Be)}}else Re.visible&&x.push(w,ye,Re,j,Ne.z,null)}}const fe=w.children;for(let ye=0,Re=fe.length;ye<Re;ye++)ti(fe[ye],F,j,X)}function ih(w,F,j,X){const W=w.opaque,fe=w.transmissive,ye=w.transparent;m.setupLightsView(j),ee===!0&&Fe.setGlobalState(v.clippingPlanes,j),fe.length>0&&Mv(W,fe,F,j),X&&me.viewport(E.copy(X)),W.length>0&&pa(W,F,j),fe.length>0&&pa(fe,F,j),ye.length>0&&pa(ye,F,j),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Mv(w,F,j,X){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const fe=we.isWebGL2;he===null&&(he=new Wr(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?ra:lr,minFilter:Vr,samples:fe?4:0})),v.getDrawingBufferSize(Ce),fe?he.setSize(Ce.x,Ce.y):he.setSize(Jl(Ce.x),Jl(Ce.y));const ye=v.getRenderTarget();v.setRenderTarget(he),v.getClearColor($),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const Re=v.toneMapping;v.toneMapping=ar,pa(w,j,X),b.updateMultisampleRenderTarget(he),b.updateRenderTargetMipmap(he);let Ie=!1;for(let Ve=0,ke=F.length;Ve<ke;Ve++){const Be=F[Ve],wt=Be.object,xn=Be.geometry,Ut=Be.material,hi=Be.group;if(Ut.side===Dn&&wt.layers.test(X.layers)){const mt=Ut.side;Ut.side=_n,Ut.needsUpdate=!0,rh(wt,j,X,xn,Ut,hi),Ut.side=mt,Ut.needsUpdate=!0,Ie=!0}}Ie===!0&&(b.updateMultisampleRenderTarget(he),b.updateRenderTargetMipmap(he)),v.setRenderTarget(ye),v.setClearColor($,P),v.toneMapping=Re}function pa(w,F,j){const X=F.isScene===!0?F.overrideMaterial:null;for(let W=0,fe=w.length;W<fe;W++){const ye=w[W],Re=ye.object,Ie=ye.geometry,Ve=X===null?ye.material:X,ke=ye.group;Re.layers.test(j.layers)&&rh(Re,F,j,Ie,Ve,ke)}}function rh(w,F,j,X,W,fe){w.onBeforeRender(v,F,j,X,W,fe),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(v,F,j,X,w,fe),W.transparent===!0&&W.side===Dn&&W.forceSinglePass===!1?(W.side=_n,W.needsUpdate=!0,v.renderBufferDirect(j,F,X,W,w,fe),W.side=Di,W.needsUpdate=!0,v.renderBufferDirect(j,F,X,W,w,fe),W.side=Dn):v.renderBufferDirect(j,F,X,W,w,fe),w.onAfterRender(v,F,j,X,W,fe)}function ma(w,F,j){F.isScene!==!0&&(F=xe);const X=Ae.get(w),W=m.state.lights,fe=m.state.shadowsArray,ye=W.state.version,Re=le.getParameters(w,W.state,fe,F,j),Ie=le.getProgramCacheKey(Re);let Ve=X.programs;X.environment=w.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(w.isMeshStandardMaterial?U:S).get(w.envMap||X.environment),Ve===void 0&&(w.addEventListener("dispose",ue),Ve=new Map,X.programs=Ve);let ke=Ve.get(Ie);if(ke!==void 0){if(X.currentProgram===ke&&X.lightsStateVersion===ye)return oh(w,Re),ke}else Re.uniforms=le.getUniforms(w),w.onBuild(j,Re,v),w.onBeforeCompile(Re,v),ke=le.acquireProgram(Re,Ie),Ve.set(Ie,ke),X.uniforms=Re.uniforms;const Be=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Be.clippingPlanes=Fe.uniform),oh(w,Re),X.needsLights=Tv(w),X.lightsStateVersion=ye,X.needsLights&&(Be.ambientLightColor.value=W.state.ambient,Be.lightProbe.value=W.state.probe,Be.directionalLights.value=W.state.directional,Be.directionalLightShadows.value=W.state.directionalShadow,Be.spotLights.value=W.state.spot,Be.spotLightShadows.value=W.state.spotShadow,Be.rectAreaLights.value=W.state.rectArea,Be.ltc_1.value=W.state.rectAreaLTC1,Be.ltc_2.value=W.state.rectAreaLTC2,Be.pointLights.value=W.state.point,Be.pointLightShadows.value=W.state.pointShadow,Be.hemisphereLights.value=W.state.hemi,Be.directionalShadowMap.value=W.state.directionalShadowMap,Be.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Be.spotShadowMap.value=W.state.spotShadowMap,Be.spotLightMatrix.value=W.state.spotLightMatrix,Be.spotLightMap.value=W.state.spotLightMap,Be.pointShadowMap.value=W.state.pointShadowMap,Be.pointShadowMatrix.value=W.state.pointShadowMatrix),X.currentProgram=ke,X.uniformsList=null,ke}function sh(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=Sl.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function oh(w,F){const j=Ae.get(w);j.outputColorSpace=F.outputColorSpace,j.batching=F.batching,j.instancing=F.instancing,j.instancingColor=F.instancingColor,j.skinning=F.skinning,j.morphTargets=F.morphTargets,j.morphNormals=F.morphNormals,j.morphColors=F.morphColors,j.morphTargetsCount=F.morphTargetsCount,j.numClippingPlanes=F.numClippingPlanes,j.numIntersection=F.numClipIntersection,j.vertexAlphas=F.vertexAlphas,j.vertexTangents=F.vertexTangents,j.toneMapping=F.toneMapping}function Ev(w,F,j,X,W){F.isScene!==!0&&(F=xe),b.resetTextureUnits();const fe=F.fog,ye=X.isMeshStandardMaterial?F.environment:null,Re=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ht,Ie=(X.isMeshStandardMaterial?U:S).get(X.envMap||ye),Ve=X.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ke=!!j.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Be=!!j.morphAttributes.position,wt=!!j.morphAttributes.normal,xn=!!j.morphAttributes.color;let Ut=ar;X.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ut=v.toneMapping);const hi=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,mt=hi!==void 0?hi.length:0,We=Ae.get(X),Ec=m.state.lights;if(ee===!0&&(ae===!0||w!==M)){const Rn=w===M&&X.id===D;Fe.setState(X,w,Rn)}let St=!1;X.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Ec.state.version||We.outputColorSpace!==Re||W.isBatchedMesh&&We.batching===!1||!W.isBatchedMesh&&We.batching===!0||W.isInstancedMesh&&We.instancing===!1||!W.isInstancedMesh&&We.instancing===!0||W.isSkinnedMesh&&We.skinning===!1||!W.isSkinnedMesh&&We.skinning===!0||W.isInstancedMesh&&We.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&We.instancingColor===!1&&W.instanceColor!==null||We.envMap!==Ie||X.fog===!0&&We.fog!==fe||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Fe.numPlanes||We.numIntersection!==Fe.numIntersection)||We.vertexAlphas!==Ve||We.vertexTangents!==ke||We.morphTargets!==Be||We.morphNormals!==wt||We.morphColors!==xn||We.toneMapping!==Ut||we.isWebGL2===!0&&We.morphTargetsCount!==mt)&&(St=!0):(St=!0,We.__version=X.version);let mr=We.currentProgram;St===!0&&(mr=ma(X,F,W));let ah=!1,oo=!1,wc=!1;const Xt=mr.getUniforms(),gr=We.uniforms;if(me.useProgram(mr.program)&&(ah=!0,oo=!0,wc=!0),X.id!==D&&(D=X.id,oo=!0),ah||M!==w){Xt.setValue(k,"projectionMatrix",w.projectionMatrix),Xt.setValue(k,"viewMatrix",w.matrixWorldInverse);const Rn=Xt.map.cameraPosition;Rn!==void 0&&Rn.setValue(k,Ne.setFromMatrixPosition(w.matrixWorld)),we.logarithmicDepthBuffer&&Xt.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Xt.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,oo=!0,wc=!0)}if(W.isSkinnedMesh){Xt.setOptional(k,W,"bindMatrix"),Xt.setOptional(k,W,"bindMatrixInverse");const Rn=W.skeleton;Rn&&(we.floatVertexTextures?(Rn.boneTexture===null&&Rn.computeBoneTexture(),Xt.setValue(k,"boneTexture",Rn.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(Xt.setOptional(k,W,"batchingTexture"),Xt.setValue(k,"batchingTexture",W._matricesTexture,b));const Tc=j.morphAttributes;if((Tc.position!==void 0||Tc.normal!==void 0||Tc.color!==void 0&&we.isWebGL2===!0)&&Ge.update(W,j,mr),(oo||We.receiveShadow!==W.receiveShadow)&&(We.receiveShadow=W.receiveShadow,Xt.setValue(k,"receiveShadow",W.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(gr.envMap.value=Ie,gr.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),oo&&(Xt.setValue(k,"toneMappingExposure",v.toneMappingExposure),We.needsLights&&wv(gr,wc),fe&&X.fog===!0&&re.refreshFogUniforms(gr,fe),re.refreshMaterialUniforms(gr,X,J,V,he),Sl.upload(k,sh(We),gr,b)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Sl.upload(k,sh(We),gr,b),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Xt.setValue(k,"center",W.center),Xt.setValue(k,"modelViewMatrix",W.modelViewMatrix),Xt.setValue(k,"normalMatrix",W.normalMatrix),Xt.setValue(k,"modelMatrix",W.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Rn=X.uniformsGroups;for(let bc=0,bv=Rn.length;bc<bv;bc++)if(we.isWebGL2){const lh=Rn[bc];Ze.update(lh,mr),Ze.bind(lh,mr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mr}function wv(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Tv(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,F,j){Ae.get(w.texture).__webglTexture=F,Ae.get(w.depthTexture).__webglTexture=j;const X=Ae.get(w);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=j===void 0,X.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,F){const j=Ae.get(w);j.__webglFramebuffer=F,j.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,j=0){A=w,C=F,R=j;let X=!0,W=null,fe=!1,ye=!1;if(w){const Ie=Ae.get(w);Ie.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(k.FRAMEBUFFER,null),X=!1):Ie.__webglFramebuffer===void 0?b.setupRenderTarget(w):Ie.__hasExternalTextures&&b.rebindTextures(w,Ae.get(w.texture).__webglTexture,Ae.get(w.depthTexture).__webglTexture);const Ve=w.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(ye=!0);const ke=Ae.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ke[F])?W=ke[F][j]:W=ke[F],fe=!0):we.isWebGL2&&w.samples>0&&b.useMultisampledRTT(w)===!1?W=Ae.get(w).__webglMultisampledFramebuffer:Array.isArray(ke)?W=ke[j]:W=ke,E.copy(w.viewport),O.copy(w.scissor),z=w.scissorTest}else E.copy(H).multiplyScalar(J).floor(),O.copy(Q).multiplyScalar(J).floor(),z=te;if(me.bindFramebuffer(k.FRAMEBUFFER,W)&&we.drawBuffers&&X&&me.drawBuffers(w,W),me.viewport(E),me.scissor(O),me.setScissorTest(z),fe){const Ie=Ae.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ie.__webglTexture,j)}else if(ye){const Ie=Ae.get(w.texture),Ve=F||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ie.__webglTexture,j||0,Ve)}D=-1},this.readRenderTargetPixels=function(w,F,j,X,W,fe,ye){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Ae.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Re=Re[ye]),Re){me.bindFramebuffer(k.FRAMEBUFFER,Re);try{const Ie=w.texture,Ve=Ie.format,ke=Ie.type;if(Ve!==Un&&_e.convert(Ve)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=ke===ra&&(ve.has("EXT_color_buffer_half_float")||we.isWebGL2&&ve.has("EXT_color_buffer_float"));if(ke!==lr&&_e.convert(ke)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===bi&&(we.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-X&&j>=0&&j<=w.height-W&&k.readPixels(F,j,X,W,_e.convert(Ve),_e.convert(ke),fe)}finally{const Ie=A!==null?Ae.get(A).__webglFramebuffer:null;me.bindFramebuffer(k.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(w,F,j=0){const X=Math.pow(2,-j),W=Math.floor(F.image.width*X),fe=Math.floor(F.image.height*X);b.setTexture2D(F,0),k.copyTexSubImage2D(k.TEXTURE_2D,j,0,0,w.x,w.y,W,fe),me.unbindTexture()},this.copyTextureToTexture=function(w,F,j,X=0){const W=F.image.width,fe=F.image.height,ye=_e.convert(j.format),Re=_e.convert(j.type);b.setTexture2D(j,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,j.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,j.unpackAlignment),F.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,X,w.x,w.y,W,fe,ye,Re,F.image.data):F.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,X,w.x,w.y,F.mipmaps[0].width,F.mipmaps[0].height,ye,F.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,X,w.x,w.y,ye,Re,F.image),X===0&&j.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),me.unbindTexture()},this.copyTextureToTexture3D=function(w,F,j,X,W=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=w.max.x-w.min.x+1,ye=w.max.y-w.min.y+1,Re=w.max.z-w.min.z+1,Ie=_e.convert(X.format),Ve=_e.convert(X.type);let ke;if(X.isData3DTexture)b.setTexture3D(X,0),ke=k.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)b.setTexture2DArray(X,0),ke=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment);const Be=k.getParameter(k.UNPACK_ROW_LENGTH),wt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),xn=k.getParameter(k.UNPACK_SKIP_PIXELS),Ut=k.getParameter(k.UNPACK_SKIP_ROWS),hi=k.getParameter(k.UNPACK_SKIP_IMAGES),mt=j.isCompressedTexture?j.mipmaps[W]:j.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,mt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,mt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,w.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,w.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,w.min.z),j.isDataTexture||j.isData3DTexture?k.texSubImage3D(ke,W,F.x,F.y,F.z,fe,ye,Re,Ie,Ve,mt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(ke,W,F.x,F.y,F.z,fe,ye,Re,Ie,mt.data)):k.texSubImage3D(ke,W,F.x,F.y,F.z,fe,ye,Re,Ie,Ve,mt),k.pixelStorei(k.UNPACK_ROW_LENGTH,Be),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,wt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,xn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ut),k.pixelStorei(k.UNPACK_SKIP_IMAGES,hi),W===0&&X.generateMipmaps&&k.generateMipmap(ke),me.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?b.setTextureCube(w,0):w.isData3DTexture?b.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?b.setTexture2DArray(w,0):b.setTexture2D(w,0),me.unbindTexture()},this.resetState=function(){C=0,R=0,A=null,me.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Wf?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===_c?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===_t?Or:j_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Or?_t:Ht}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Ob extends fv{}Ob.prototype.isWebGL1Renderer=!0;class Kf{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ue(e),this.density=t}clone(){return new Kf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class kb extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Bb{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Od,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const rn=new N;class $f{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=oi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=oi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=oi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=oi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),r=rt(r,this.array),s=rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new $f(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Wm=new N,jm=new st,Xm=new st,zb=new N,Ym=new Xe,tl=new N,Ru=new di,qm=new Xe,Cu=new vc;class Hb extends Ee{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Rp,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Jn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,tl),this.boundingBox.expandByPoint(tl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new di),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,tl),this.boundingSphere.expandByPoint(tl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ru.copy(this.boundingSphere),Ru.applyMatrix4(r),e.ray.intersectsSphere(Ru)!==!1&&(qm.copy(r).invert(),Cu.copy(e.ray).applyMatrix4(qm),!(this.boundingBox!==null&&Cu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Cu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new st,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Rp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$S?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;jm.fromBufferAttribute(r.attributes.skinIndex,e),Xm.fromBufferAttribute(r.attributes.skinWeight,e),Wm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Xm.getComponent(s);if(o!==0){const a=jm.getComponent(s);Ym.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(zb.copy(Wm).applyMatrix4(Ym),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class hv extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Gb extends Wt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=kt,d=kt,f,u){super(null,o,a,l,c,d,r,s,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Km=new Xe,Vb=new Xe;class Zf{constructor(e=[],t=[]){this.uuid=Zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Xe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Vb;Km.multiplyMatrices(a,t[s]),Km.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Zf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Gb(t,e,e,Un,bi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new hv),this.bones.push(o),this.boneInverses.push(new Xe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class Hd extends Jt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const fs=new Xe,$m=new Xe,nl=[],Zm=new Jn,Wb=new Xe,yo=new Ee,So=new di;class jb extends Ee{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hd(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Wb)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,fs),Zm.copy(e.boundingBox).applyMatrix4(fs),this.boundingBox.union(Zm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new di),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,fs),So.copy(e.boundingSphere).applyMatrix4(fs),this.boundingSphere.union(So)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(yo.geometry=this.geometry,yo.material=this.material,yo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),So.copy(this.boundingSphere),So.applyMatrix4(i),e.ray.intersectsSphere(So)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,fs),$m.multiplyMatrices(i,fs),yo.matrixWorld=$m,yo.raycast(e,nl);for(let o=0,a=nl.length;o<a;o++){const l=nl[o];l.instanceId=s,l.object=this,t.push(l)}nl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Hd(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class pv extends ui{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qm=new N,Jm=new N,eg=new Xe,Lu=new vc,il=new di;class Qf extends xt{constructor(e=new vn,t=new pv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Qm.fromBufferAttribute(t,r-1),Jm.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Qm.distanceTo(Jm);e.setAttribute("lineDistance",new zt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),il.copy(i.boundingSphere),il.applyMatrix4(r),il.radius+=s,e.ray.intersectsSphere(il)===!1)return;eg.copy(r).invert(),Lu.copy(e.ray).applyMatrix4(eg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new N,d=new N,f=new N,u=new N,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const h=Math.max(0,o.start),_=Math.min(g.count,o.start+o.count);for(let v=h,y=_-1;v<y;v+=p){const C=g.getX(v),R=g.getX(v+1);if(c.fromBufferAttribute(m,C),d.fromBufferAttribute(m,R),Lu.distanceSqToSegment(c,d,u,f)>l)continue;u.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(u);D<e.near||D>e.far||t.push({distance:D,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let v=h,y=_-1;v<y;v+=p){if(c.fromBufferAttribute(m,v),d.fromBufferAttribute(m,v+1),Lu.distanceSqToSegment(c,d,u,f)>l)continue;u.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(u);R<e.near||R>e.far||t.push({distance:R,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const tg=new N,ng=new N;class Xb extends Qf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)tg.fromBufferAttribute(t,r),ng.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+tg.distanceTo(ng);e.setAttribute("lineDistance",new zt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Yb extends Qf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Jf extends ui{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ig=new Xe,Gd=new vc,rl=new di,sl=new N;class mv extends xt{constructor(e=new vn,t=new Jf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rl.copy(i.boundingSphere),rl.applyMatrix4(r),rl.radius+=s,e.ray.intersectsSphere(rl)===!1)return;ig.copy(r).invert(),Gd.copy(e.ray).applyMatrix4(ig);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=u,x=p;g<x;g++){const m=c.getX(g);sl.fromBufferAttribute(f,m),rg(sl,m,l,r,e,t,this)}}else{const u=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=u,x=p;g<x;g++)sl.fromBufferAttribute(f,g),rg(sl,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function rg(n,e,t,i,r,s,o){const a=Gd.distanceSqToPoint(n);if(a<t){const l=new N;Gd.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Sc extends vn{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new N,d=new qe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){const p=i+f/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[u]/e+1)/2,d.y=(o[u+1]/e+1)/2,l.push(d.x,d.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new zt(o,3)),this.setAttribute("normal",new zt(a,3)),this.setAttribute("uv",new zt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Yi extends vn{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],u=[],p=[];let g=0;const x=[],m=i/2;let h=0;_(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(d),this.setAttribute("position",new zt(f,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(p,2));function _(){const y=new N,C=new N;let R=0;const A=(t-e)/i;for(let D=0;D<=s;D++){const M=[],E=D/s,O=E*(t-e)+e;for(let z=0;z<=r;z++){const $=z/r,P=$*l+a,G=Math.sin(P),V=Math.cos(P);C.x=O*G,C.y=-E*i+m,C.z=O*V,f.push(C.x,C.y,C.z),y.set(G,A,V).normalize(),u.push(y.x,y.y,y.z),p.push($,1-E),M.push(g++)}x.push(M)}for(let D=0;D<r;D++)for(let M=0;M<s;M++){const E=x[M][D],O=x[M+1][D],z=x[M+1][D+1],$=x[M][D+1];d.push(E,O,$),d.push(O,z,$),R+=6}c.addGroup(h,R,0),h+=R}function v(y){const C=g,R=new qe,A=new N;let D=0;const M=y===!0?e:t,E=y===!0?1:-1;for(let z=1;z<=r;z++)f.push(0,m*E,0),u.push(0,E,0),p.push(.5,.5),g++;const O=g;for(let z=0;z<=r;z++){const P=z/r*l+a,G=Math.cos(P),V=Math.sin(P);A.x=M*V,A.y=m*E,A.z=M*G,f.push(A.x,A.y,A.z),u.push(0,E,0),R.x=G*.5+.5,R.y=V*.5*E+.5,p.push(R.x,R.y),g++}for(let z=0;z<r;z++){const $=C+z,P=O+z;y===!0?d.push(P,P+1,$):d.push(P+1,P,$),D+=3}c.addGroup(h,D,y===!0?1:2),h+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class aa extends vn{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new N,f=new N,u=new N;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const x=g/r*s,m=p/i*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(x),f.y=(e+t*Math.cos(m))*Math.sin(x),f.z=t*Math.sin(m),a.push(f.x,f.y,f.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),u.subVectors(f,d).normalize(),l.push(u.x,u.y,u.z),c.push(g/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const x=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,h=(r+1)*(p-1)+g,_=(r+1)*p+g;o.push(x,m,_),o.push(m,h,_)}this.setIndex(o),this.setAttribute("position",new zt(a,3)),this.setAttribute("normal",new zt(l,3)),this.setAttribute("uv",new zt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class At extends ui{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=X_,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ei extends At{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function ol(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function qb(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Kb(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function sg(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function gv(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class ha{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class $b extends ha{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:em,endingEnd:em}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case tm:s=e,a=2*t-i;break;case nm:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case tm:o=e,l=2*i-t;break;case nm:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*d,this._offsetNext=o*d}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),x=g*g,m=x*g,h=-u*m+2*u*x-u*g,_=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,v=(-1-p)*m+(1.5+p)*x+.5*g,y=p*m-p*x;for(let C=0;C!==a;++C)s[C]=h*o[d+C]+_*o[c+C]+v*o[l+C]+y*o[f+C];return s}}class Zb extends ha{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(i-t)/(r-t),f=1-d;for(let u=0;u!==a;++u)s[u]=o[c+u]*f+o[l+u]*d;return s}}class Qb extends ha{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class fi{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ol(t,this.TimeBufferType),this.values=ol(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ol(e.times,Array),values:ol(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Qb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Zb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $b(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case sa:t=this.InterpolantFactoryMethodDiscrete;break;case Ys:t=this.InterpolantFactoryMethodLinear;break;case ru:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sa;case this.InterpolantFactoryMethodLinear:return Ys;case this.InterpolantFactoryMethodSmooth:return ru}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&qb(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===ru,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(r)l=!0;else{const f=a*i,u=f-i,p=f+i;for(let g=0;g!==i;++g){const x=t[f+g];if(x!==t[u+g]||x!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*i,u=o*i;for(let p=0;p!==i;++p)t[u+p]=t[f+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}fi.prototype.TimeBufferType=Float32Array;fi.prototype.ValueBufferType=Float32Array;fi.prototype.DefaultInterpolation=Ys;class io extends fi{}io.prototype.ValueTypeName="bool";io.prototype.ValueBufferType=Array;io.prototype.DefaultInterpolation=sa;io.prototype.InterpolantFactoryMethodLinear=void 0;io.prototype.InterpolantFactoryMethodSmooth=void 0;class _v extends fi{}_v.prototype.ValueTypeName="color";class $s extends fi{}$s.prototype.ValueTypeName="number";class Jb extends ha{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let d=c+a;c!==d;c+=4)pr.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Xr extends fi{InterpolantFactoryMethodLinear(e){return new Jb(this.times,this.values,this.getValueSize(),e)}}Xr.prototype.ValueTypeName="quaternion";Xr.prototype.DefaultInterpolation=Ys;Xr.prototype.InterpolantFactoryMethodSmooth=void 0;class ro extends fi{}ro.prototype.ValueTypeName="string";ro.prototype.ValueBufferType=Array;ro.prototype.DefaultInterpolation=sa;ro.prototype.InterpolantFactoryMethodLinear=void 0;ro.prototype.InterpolantFactoryMethodSmooth=void 0;class Zs extends fi{}Zs.prototype.ValueTypeName="vector";class eA{constructor(e,t=-1,i,r=sM){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Zn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(nA(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(fi.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const d=Kb(l);l=sg(l,1,d),c=sg(c,1,d),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new $s(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],d=c.name.match(s);if(d&&d.length>1){const f=d[1];let u=r[f];u||(r[f]=u=[]),u.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(f,u,p,g,x){if(p.length!==0){const m=[],h=[];gv(p,m,h,g),m.length!==0&&x.push(new f(u,m,h))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const u=c[f].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const p={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let x=0;x<u[g].morphTargets.length;x++)p[u[g].morphTargets[x]]=-1;for(const x in p){const m=[],h=[];for(let _=0;_!==u[g].morphTargets.length;++_){const v=u[g];m.push(v.time),h.push(v.morphTarget===x?1:0)}r.push(new $s(".morphTargetInfluence["+x+"]",m,h))}l=p.length*o}else{const p=".bones["+t[f].name+"]";i(Zs,p+".position",u,"pos",r),i(Xr,p+".quaternion",u,"rot",r),i(Zs,p+".scale",u,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function tA(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $s;case"vector":case"vector2":case"vector3":case"vector4":return Zs;case"color":return _v;case"quaternion":return Xr;case"bool":case"boolean":return io;case"string":return ro}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function nA(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=tA(n.type);if(n.times===void 0){const t=[],i=[];gv(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Zi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class iA{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return c.push(d,f),this},this.removeHandler=function(d){const f=c.indexOf(d);return f!==-1&&c.splice(f,2),this},this.getHandler=function(d){for(let f=0,u=c.length;f<u;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(d))return g}return null}}}const rA=new iA;class so{constructor(e){this.manager=e!==void 0?e:rA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}so.DEFAULT_MATERIAL_NAME="__DEFAULT";const xi={};class sA extends Error{constructor(e,t){super(e),this.response=t}}class vv extends so{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Zi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(xi[e]!==void 0){xi[e].push({onLoad:t,onProgress:i,onError:r});return}xi[e]=[],xi[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=xi[e],f=c.body.getReader(),u=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=u?parseInt(u):0,g=p!==0;let x=0;const m=new ReadableStream({start(h){_();function _(){f.read().then(({done:v,value:y})=>{if(v)h.close();else{x+=y.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let R=0,A=d.length;R<A;R++){const D=d[R];D.onProgress&&D.onProgress(C)}h.enqueue(y),_()}})}}});return new Response(m)}else throw new sA(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),u=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(u);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Zi.add(e,c);const d=xi[e];delete xi[e];for(let f=0,u=d.length;f<u;f++){const p=d[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const d=xi[e];if(d===void 0)throw this.manager.itemError(e),c;delete xi[e];for(let f=0,u=d.length;f<u;f++){const p=d[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class oA extends so{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Zi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=oa("img");function l(){d(),Zi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){d(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class aA extends so{constructor(e){super(e)}load(e,t,i,r){const s=new Wt,o=new oA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Mc extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Pu=new Xe,og=new N,ag=new N;class eh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xf,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;og.setFromMatrixPosition(e.matrixWorld),t.position.copy(og),ag.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ag),t.updateMatrixWorld(),Pu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Pu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class lA extends eh{constructor(){super(new an(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=qs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Vd extends Mc{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new lA}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const lg=new Xe,Mo=new N,Nu=new N;class cA extends eh{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qe(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Mo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Mo),Nu.copy(i.position),Nu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Nu),i.updateMatrixWorld(),r.makeTranslation(-Mo.x,-Mo.y,-Mo.z),lg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lg)}}class xv extends Mc{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new cA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class uA extends eh{constructor(){super(new Yf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ml extends Mc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new uA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class dA extends Mc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class zo{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class fA extends so{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Zi.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Zi.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),Zi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Zi.add(e,l),s.manager.itemStart(e)}}const th="\\[\\]\\.:\\/",hA=new RegExp("["+th+"]","g"),nh="[^"+th+"]",pA="[^"+th.replace("\\.","")+"]",mA=/((?:WC+[\/:])*)/.source.replace("WC",nh),gA=/(WCOD+)?/.source.replace("WCOD",pA),_A=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nh),vA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nh),xA=new RegExp("^"+mA+gA+_A+vA+"$"),yA=["material","materials","bones","map"];class SA{constructor(e,t,i){const r=i||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class nt{constructor(e,t,i){this.path=t,this.parsedPath=i||nt.parseTrackName(t),this.node=nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new nt.Composite(e,t,i):new nt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hA,"")}static parseTrackName(e){const t=xA.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);yA.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}nt.Composite=SA;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gf);function cg(n,e){if(e===oM)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Fd||e===W_){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===Fd)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class MA extends so{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new AA(t)}),this.register(function(t){return new FA(t)}),this.register(function(t){return new OA(t)}),this.register(function(t){return new kA(t)}),this.register(function(t){return new CA(t)}),this.register(function(t){return new LA(t)}),this.register(function(t){return new PA(t)}),this.register(function(t){return new NA(t)}),this.register(function(t){return new bA(t)}),this.register(function(t){return new DA(t)}),this.register(function(t){return new RA(t)}),this.register(function(t){return new UA(t)}),this.register(function(t){return new IA(t)}),this.register(function(t){return new wA(t)}),this.register(function(t){return new BA(t)}),this.register(function(t){return new zA(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=zo.extractUrlBase(e);o=zo.resolveURL(c,this.path)}else o=zo.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new vv(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(d){t(d),s.manager.itemEnd(e)},a)}catch(d){a(d)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===yv){try{o[$e.KHR_BINARY_GLTF]=new HA(e)}catch(f){r&&r(f);return}s=JSON.parse(o[$e.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new eR(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const f=this.pluginCallbacks[d](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(s.extensionsUsed)for(let d=0;d<s.extensionsUsed.length;++d){const f=s.extensionsUsed[d],u=s.extensionsRequired||[];switch(f){case $e.KHR_MATERIALS_UNLIT:o[f]=new TA;break;case $e.KHR_DRACO_MESH_COMPRESSION:o[f]=new GA(s,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:o[f]=new VA;break;case $e.KHR_MESH_QUANTIZATION:o[f]=new WA;break;default:u.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function EA(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class wA{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const d=new Ue(16777215);l.color!==void 0&&d.setRGB(l.color[0],l.color[1],l.color[2],Ht);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ml(d),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new xv(d),c.distance=f;break;case"spot":c=new Vd(d),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Wi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class TA{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return Pr}extendParams(e,t,i){const r=[];e.color=new Ue(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ht),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,_t))}return Promise.all(r)}}class bA{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class AA{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ei}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new qe(a,a)}return Promise.all(s)}}class RA{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ei}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class CA{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ei}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ue(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ht)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,_t)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class LA{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ei}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class PA{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ei}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ue().setRGB(a[0],a[1],a[2],Ht),Promise.all(s)}}class NA{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ei}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class DA{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ei}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ue().setRGB(a[0],a[1],a[2],Ht),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,_t)),Promise.all(s)}}class IA{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ei}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class UA{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ei}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class FA{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class OA{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class kA{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class BA{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,d=r.count,f=r.byteStride,u=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(d,f,u,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(d*f);return o.decodeGltfBuffer(new Uint8Array(p),d,f,u,r.mode,r.filter),p})})}else return null}}class zA{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==Ln.TRIANGLES&&c.mode!==Ln.TRIANGLE_STRIP&&c.mode!==Ln.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(d=>(l[c]=d,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const d=c.pop(),f=d.isGroup?d.children:[d],u=c[0].count,p=[];for(const g of f){const x=new Xe,m=new N,h=new pr,_=new N(1,1,1),v=new jb(g.geometry,g.material,u);for(let y=0;y<u;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&h.fromBufferAttribute(l.ROTATION,y),l.SCALE&&_.fromBufferAttribute(l.SCALE,y),v.setMatrixAt(y,x.compose(m,h,_));for(const y in l)if(y==="_COLOR_0"){const C=l[y];v.instanceColor=new Hd(C.array,C.itemSize,C.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);xt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),p.push(v)}return d.isGroup?(d.clear(),d.add(...p),d):p[0]}))}}const yv="glTF",Eo=12,ug={JSON:1313821514,BIN:5130562};class HA{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Eo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==yv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Eo,s=new DataView(e,Eo);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===ug.JSON){const c=new Uint8Array(e,Eo+o,a);this.content=i.decode(c)}else if(l===ug.BIN){const c=Eo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class GA{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const d in o){const f=Wd[d]||d.toLowerCase();a[f]=o[d]}for(const d in e.attributes){const f=Wd[d]||d.toLowerCase();if(o[d]!==void 0){const u=i.accessors[e.attributes[d]],p=Us[u.componentType];c[f]=p.name,l[f]=u.normalized===!0}}return t.getDependency("bufferView",s).then(function(d){return new Promise(function(f,u){r.decodeDracoFile(d,function(p){for(const g in p.attributes){const x=p.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}f(p)},a,c,Ht,u)})})}}class VA{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class WA{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class Sv extends ha{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,d=r-t,f=(i-t)/d,u=f*f,p=u*f,g=e*c,x=g-c,m=-2*p+3*u,h=p-u,_=1-m,v=h-u+f;for(let y=0;y!==a;y++){const C=o[x+y+a],R=o[x+y+l]*d,A=o[g+y+a],D=o[g+y]*d;s[y]=_*C+v*R+m*A+h*D}return s}}const jA=new pr;class XA extends Sv{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return jA.fromArray(s).normalize().toArray(s),s}}const Ln={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Us={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},dg={9728:kt,9729:fn,9984:Ud,9985:F_,9986:yl,9987:Vr},fg={33071:In,33648:ql,10497:js},Du={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Wd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Hi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},YA={CUBICSPLINE:void 0,LINEAR:Ys,STEP:sa},Iu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function qA(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new At({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Di})),n.DefaultMaterial}function Sr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Wi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function KA(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,d=e.length;c<d;c++){const f=e[c];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,d=e.length;c<d;c++){const f=e[c];if(i){const u=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):n.attributes.position;o.push(u)}if(r){const u=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):n.attributes.normal;a.push(u)}if(s){const u=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):n.attributes.color;l.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const d=c[0],f=c[1],u=c[2];return i&&(n.morphAttributes.position=d),r&&(n.morphAttributes.normal=f),s&&(n.morphAttributes.color=u),n.morphTargetsRelative=!0,n})}function $A(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ZA(n){let e;const t=n.extensions&&n.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Uu(t.attributes):e=n.indices+":"+Uu(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Uu(n.targets[i]);return e}function Uu(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function jd(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function QA(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const JA=new Xe;class eR{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new EA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||r&&s<98?this.textureLoader=new aA(this.options.manager):this.textureLoader=new fA(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new vv(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Sr(s,a,r),Wi(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,d]of o.children.entries())s(d,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(zo.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Du[r.type],a=Us[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new Jt(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Du[r.type],c=Us[r.componentType],d=c.BYTES_PER_ELEMENT,f=d*l,u=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let x,m;if(p&&p!==f){const h=Math.floor(u/p),_="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+h+":"+r.count;let v=t.cache.get(_);v||(x=new c(a,h*p,r.count*p/d),v=new Bb(x,p/d),t.cache.add(_,v)),m=new $f(v,l,u%p/d,g)}else a===null?x=new c(r.count*l):x=new c(a,u,r.count*l),m=new Jt(x,l,g);if(r.sparse!==void 0){const h=Du.SCALAR,_=Us[r.sparse.indices.componentType],v=r.sparse.indices.byteOffset||0,y=r.sparse.values.byteOffset||0,C=new _(o[1],v,r.sparse.count*h),R=new c(o[2],y,r.sparse.count*l);a!==null&&(m=new Jt(m.array.slice(),m.itemSize,m.normalized));for(let A=0,D=C.length;A<D;A++){const M=C[A];if(m.setX(M,R[A*l]),l>=2&&m.setY(M,R[A*l+1]),l>=3&&m.setZ(M,R[A*l+2]),l>=4&&m.setW(M,R[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(d){d.flipY=!1,d.name=o.name||a.name||"",d.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(d.name=a.uri);const u=(s.samplers||{})[o.sampler]||{};return d.magFilter=dg[u.magFilter]||fn,d.minFilter=dg[u.minFilter]||Vr,d.wrapS=fg[u.wrapS]||js,d.wrapT=fg[u.wrapT]||js,r.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const u=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(u),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(l).then(function(f){return new Promise(function(u,p){let g=u;t.isImageBitmapLoader===!0&&(g=function(x){const m=new Wt(x);m.needsUpdate=!0,u(m)}),t.load(zo.resolveURL(f,s.path),g,void 0,p)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),f.userData.mimeType=o.mimeType||QA(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=d,d}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[$e.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Jf,ui.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new pv,ui.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return At}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[$e.KHR_MATERIALS_UNLIT]){const f=r[$e.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,s,t))}else{const f=s.pbrMetallicRoughness||{};if(a.color=new Ue(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const u=f.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],Ht),a.opacity=u[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,_t)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Dn);const d=s.alphaMode||Iu.OPAQUE;if(d===Iu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,d===Iu.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Pr&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new qe(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;a.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&o!==Pr&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Pr){const f=s.emissiveFactor;a.emissive=new Ue().setRGB(f[0],f[1],f[2],Ht)}return s.emissiveTexture!==void 0&&o!==Pr&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,_t)),Promise.all(c).then(function(){const f=new o(a);return s.name&&(f.name=s.name),Wi(f,s),t.associations.set(f,{materials:e}),s.extensions&&Sr(r,f,s),f})}createUniqueName(e){const t=nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return hg(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],d=ZA(c),f=r[d];if(f)o.push(f.promise);else{let u;c.extensions&&c.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?u=s(c):u=hg(new vn,c,t),r[d]={primitive:c,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const d=o[l].material===void 0?qA(this.cache):this.getDependency("material",o[l].material);a.push(d)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),d=l[l.length-1],f=[];for(let p=0,g=d.length;p<g;p++){const x=d[p],m=o[p];let h;const _=c[p];if(m.mode===Ln.TRIANGLES||m.mode===Ln.TRIANGLE_STRIP||m.mode===Ln.TRIANGLE_FAN||m.mode===void 0)h=s.isSkinnedMesh===!0?new Hb(x,_):new Ee(x,_),h.isSkinnedMesh===!0&&h.normalizeSkinWeights(),m.mode===Ln.TRIANGLE_STRIP?h.geometry=cg(h.geometry,W_):m.mode===Ln.TRIANGLE_FAN&&(h.geometry=cg(h.geometry,Fd));else if(m.mode===Ln.LINES)h=new Xb(x,_);else if(m.mode===Ln.LINE_STRIP)h=new Qf(x,_);else if(m.mode===Ln.LINE_LOOP)h=new Yb(x,_);else if(m.mode===Ln.POINTS)h=new mv(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(h.geometry.morphAttributes).length>0&&$A(h,s),h.name=t.createUniqueName(s.name||"mesh_"+e),Wi(h,s),m.extensions&&Sr(r,h,m),t.assignFinalMaterial(h),f.push(h)}for(let p=0,g=f.length;p<g;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return s.extensions&&Sr(r,f[0],s),f[0];const u=new ai;s.extensions&&Sr(r,u,s),t.associations.set(u,{meshes:e});for(let p=0,g=f.length;p<g;p++)u.add(f[p]);return u})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new an(PM.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Yf(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Wi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,d=o.length;c<d;c++){const f=o[c];if(f){a.push(f);const u=new Xe;s!==null&&u.fromArray(s.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Zf(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],d=[];for(let f=0,u=r.channels.length;f<u;f++){const p=r.channels[f],g=r.samplers[p.sampler],x=p.target,m=x.node,h=r.parameters!==void 0?r.parameters[g.input]:g.input,_=r.parameters!==void 0?r.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",h)),l.push(this.getDependency("accessor",_)),c.push(g),d.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(d)]).then(function(f){const u=f[0],p=f[1],g=f[2],x=f[3],m=f[4],h=[];for(let _=0,v=u.length;_<v;_++){const y=u[_],C=p[_],R=g[_],A=x[_],D=m[_];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const M=i._createAnimationTracks(y,C,R,A,D);if(M)for(let E=0;E<M.length;E++)h.push(M[E])}return new eA(s,void 0,h)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,d=a.length;c<d;c++)o.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const d=c[0],f=c[1],u=c[2];u!==null&&d.traverse(function(p){p.isSkinnedMesh&&p.bind(u,JA)});for(let p=0,g=f.length;p<g;p++)d.add(f[p]);return d})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let d;if(s.isBone===!0?d=new hv:c.length>1?d=new ai:c.length===1?d=c[0]:d=new xt,d!==c[0])for(let f=0,u=c.length;f<u;f++)d.add(c[f]);if(s.name&&(d.userData.name=s.name,d.name=o),Wi(d,s),s.extensions&&Sr(i,d,s),s.matrix!==void 0){const f=new Xe;f.fromArray(s.matrix),d.applyMatrix4(f)}else s.translation!==void 0&&d.position.fromArray(s.translation),s.rotation!==void 0&&d.quaternion.fromArray(s.rotation),s.scale!==void 0&&d.scale.fromArray(s.scale);return r.associations.has(d)||r.associations.set(d,{}),r.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new ai;i.name&&(s.name=r.createUniqueName(i.name)),Wi(s,i),i.extensions&&Sr(t,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let d=0,f=l.length;d<f;d++)s.add(l[d]);const c=d=>{const f=new Map;for(const[u,p]of r.associations)(u instanceof ui||u instanceof Wt)&&f.set(u,p);return d.traverse(u=>{const p=r.associations.get(u);p!=null&&f.set(u,p)}),f};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];Hi[s.path]===Hi.weights?e.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(a);let c;switch(Hi[s.path]){case Hi.weights:c=$s;break;case Hi.rotation:c=Xr;break;case Hi.position:case Hi.scale:c=Zs;break;default:switch(i.itemSize){case 1:c=$s;break;case 2:case 3:default:c=Zs;break}break}const d=r.interpolation!==void 0?YA[r.interpolation]:Ys,f=this._getArrayFromAccessor(i);for(let u=0,p=l.length;u<p;u++){const g=new c(l[u]+"."+Hi[s.path],t.array,f,d);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=jd(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof Xr?XA:Sv;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function tR(n,e,t){const i=e.attributes,r=new Jn;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),a.normalized){const d=jd(Us[a.componentType]);r.min.multiplyScalar(d),r.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new N,l=new N;for(let c=0,d=s.length;c<d;c++){const f=s[c];if(f.POSITION!==void 0){const u=t.json.accessors[f.POSITION],p=u.min,g=u.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),u.normalized){const x=jd(Us[u.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new di;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function hg(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=Wd[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return tt.workingColorSpace!==Ht&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${tt.workingColorSpace}" not supported.`),Wi(n,e),tR(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?KA(n,e.targets,t):n})}function nR(n=1862100,e="sedan"){const t=new ai,i=new ei({color:n,metalness:.65,roughness:.15,clearcoat:1,clearcoatRoughness:.08,reflectivity:1}),r=new ei({color:6715272,metalness:0,roughness:.05,transmission:.85,transparent:!0,opacity:.35,side:Dn}),s=new At({color:13421772,metalness:1,roughness:.05}),o=new At({color:657930,metalness:.2,roughness:.9}),a=new At({color:1118481,metalness:.4,roughness:.6}),l=new At({color:1118481,metalness:0,roughness:1}),c=new At({color:16777215,emissive:16777198,emissiveIntensity:.8,metalness:.3,roughness:.1}),d=new At({color:16724736,emissive:16716032,emissiveIntensity:.5,metalness:.2,roughness:.1}),f=new At({color:1862100,metalness:.6,roughness:.3}),u=iR(e),p=new et(u.bodyLength,u.bodyHeight*.55,u.bodyWidth),g=new Ee(p,i);g.position.y=u.groundClearance+u.bodyHeight*.28,t.add(g);const x=new et(u.bodyLength*.95,u.bodyHeight*.4,u.bodyWidth*.94),m=new Ee(x,i);m.position.y=u.groundClearance+u.bodyHeight*.6,t.add(m);const h=u.bodyLength*(u.cabinLengthRatio||.52),_=u.cabinHeight,v=new et(h,_,u.bodyWidth*.9),y=new Ee(v,i);y.position.set(u.cabinOffset||-.05,u.cabinY,0),t.add(y);const C=new et(h*.9,_*.15,u.bodyWidth*.82),R=new Ee(C,i);R.position.set(u.cabinOffset||-.05,u.cabinY+_*.5+_*.07,0),t.add(R);const A=u.bodyLength*.28,D=new et(A,u.bodyHeight*.12,u.bodyWidth*.88),M=new Ee(D,i);M.position.set(u.bodyLength*.5-A*.5-.05,u.groundClearance+u.bodyHeight*.82,0),M.rotation.z=-.07,t.add(M);const E=new et(.12,u.bodyHeight*.18,u.bodyWidth*.88),O=new Ee(E,i);O.position.set(u.bodyLength*.5-.06,u.groundClearance+u.bodyHeight*.78,0),t.add(O);const z=u.bodyLength*.22,$=new et(z,u.bodyHeight*.1,u.bodyWidth*.88),P=new Ee($,i);P.position.set(-(u.bodyLength*.5-z*.5-.05),u.groundClearance+u.bodyHeight*.8,0),P.rotation.z=e.includes("coupe")?.15:.06,t.add(P);const G=new et(.18,u.bodyHeight*.6,u.bodyWidth*.95),V=new Ee(G,i);V.position.set(u.bodyLength*.5+.09,u.groundClearance+u.bodyHeight*.22,0),t.add(V);const J=new et(.06,.06,u.bodyWidth*.7),I=new Ee(J,a);I.position.set(u.bodyLength*.5+.18,u.groundClearance+.05,0),t.add(I);const B=new et(.18,u.bodyHeight*.55,u.bodyWidth*.95),H=new Ee(B,i);H.position.set(-(u.bodyLength*.5+.09),u.groundClearance+u.bodyHeight*.2,0),t.add(H),[-.22,.22].forEach(U=>{const Z=new et(.06,u.bodyHeight*.38,.32),q=new Ee(Z,o);q.position.set(u.bodyLength*.5+.12,u.groundClearance+u.bodyHeight*.48,U),t.add(q);const K=new et(.07,u.bodyHeight*.42,.36),le=new Ee(K,s);le.position.set(u.bodyLength*.5+.11,u.groundClearance+u.bodyHeight*.48,U),t.add(le);for(let re=0;re<4;re++){const de=new et(.06,.025,.3),Se=new Ee(de,a),Fe=u.groundClearance+u.bodyHeight*.35+re*.065;Se.position.set(u.bodyLength*.5+.13,Fe,U),t.add(Se)}});const te=new et(.07,u.bodyHeight*.42,.08),Y=new Ee(te,s);Y.position.set(u.bodyLength*.5+.11,u.groundClearance+u.bodyHeight*.48,0),t.add(Y);const ee=new et(.1,.1,u.bodyWidth*.6),ae=new Ee(ee,o);ae.position.set(u.bodyLength*.5+.08,u.groundClearance+.18,0),t.add(ae),[-1,1].forEach(U=>{const Z=U*(u.bodyWidth*.45),q=new et(.09,u.bodyHeight*.22,.35),K=new Ee(q,c);K.position.set(u.bodyLength*.5+.08,u.groundClearance+u.bodyHeight*.68,Z),t.add(K);const le=new et(.06,.04,.32),re=new At({color:16777215,emissive:16777215,emissiveIntensity:1.5}),de=new Ee(le,re);de.position.set(u.bodyLength*.5+.1,u.groundClearance+u.bodyHeight*.82,Z),t.add(de)}),[-1,1].forEach(U=>{const Z=U*(u.bodyWidth*.44),q=new et(.09,u.bodyHeight*.2,.4),K=new Ee(q,d);K.position.set(-(u.bodyLength*.5+.08),u.groundClearance+u.bodyHeight*.65,Z),t.add(K);const le=new et(.06,.04,.38),re=new At({color:16720384,emissive:16711680,emissiveIntensity:.8}),de=new Ee(le,re);de.position.set(-(u.bodyLength*.5+.1),u.groundClearance+u.bodyHeight*.78,Z),t.add(de)});const he=new et(.05,.03,u.bodyWidth*.7),ge=new At({color:16720384,emissive:16711680,emissiveIntensity:.5}),Ce=new Ee(he,ge);Ce.position.set(-(u.bodyLength*.5+.1),u.groundClearance+u.bodyHeight*.78,0),t.add(Ce);const Ne=new Nr(u.bodyWidth*.84,_*.72),xe=new Ee(Ne,r);xe.position.set((u.cabinOffset||-.05)+h*.45,u.cabinY+_*.05,0),xe.rotation.y=Math.PI/2,xe.rotation.z=u.windshieldAngle||.32,t.add(xe);const Ye=new Nr(u.bodyWidth*.82,_*.65),k=new Ee(Ye,r);k.position.set((u.cabinOffset||-.05)-h*.44,u.cabinY+_*.05,0),k.rotation.y=-Math.PI/2,k.rotation.z=-(u.rearWindowAngle||.28),t.add(k),[-1,1].forEach(U=>{const Z=new Nr(h*.85,_*.62),q=new Ee(Z,r);q.position.set(u.cabinOffset||-.05,u.cabinY+_*.05,U*u.bodyWidth*.455),q.rotation.y=U===1?0:Math.PI,t.add(q)}),[-1,1].forEach(U=>{const Z=new et(.18,.1,.06),q=new Ee(Z,i);q.position.set((u.cabinOffset||-.05)+h*.38,u.cabinY+_*.52,U*(u.bodyWidth*.5+.03)),t.add(q);const K=new Nr(.15,.08),le=new Ee(K,r);le.position.copy(q.position),le.position.z+=U*.04,le.rotation.y=U===1?-.2:Math.PI+.2,t.add(le)});const Et=[[.5,0],[-.2,0]];[-1,1].forEach(U=>{Et.forEach(([Z])=>{const q=new et(.18,.04,.02),K=new Ee(q,s);K.position.set((u.cabinOffset||-.05)+Z,u.groundClearance+u.bodyHeight*.85,U*(u.bodyWidth*.48)),t.add(K)})}),[-1,1].forEach(U=>{const Z=new et(u.bodyLength*.7,.08,.06),q=new Ee(Z,a);q.position.set(0,u.groundClearance*.5,U*(u.bodyWidth*.49)),t.add(q)});const ve=u.wheelbase,we=u.wheeltrack,me=u.wheelRadius;[[ve/2,me,we/2,!0],[ve/2,me,-we/2,!1],[-ve/2,me,we/2,!0],[-ve/2,me,-we/2,!1]].forEach(([U,Z,q])=>{const K=new ai;K.position.set(U,Z,q);const le=new Yi(u.wheelRadius,u.wheelRadius,u.wheelWidth,32),re=new Ee(le,l);re.rotation.x=Math.PI/2,K.add(re);const de=new Yi(u.rimRadius,u.rimRadius,u.wheelWidth+.01,20),Se=new Ee(de,s);Se.rotation.x=Math.PI/2,K.add(Se);for(let Ze=0;Ze<5;Ze++){const ht=new et(u.rimRadius*1.8,.025,.03),Oe=new Ee(ht,s);Oe.rotation.z=Ze*Math.PI*2/5,Oe.position.z=u.wheelWidth*.4,K.add(Oe);const se=Oe.clone();se.position.z=-u.wheelWidth*.4,K.add(se)}const Fe=new Yi(.06,.06,u.wheelWidth+.03,16),ne=new Ee(Fe,f);ne.rotation.x=Math.PI/2,K.add(ne);const Je=new Yi(u.rimRadius*.7,u.rimRadius*.7,.02,20),Ge=new At({color:8947848,metalness:.8,roughness:.3}),Le=new Ee(Je,Ge);Le.rotation.x=Math.PI/2,K.add(Le);const Me=new et(.16,.1,.08),_e=new At({color:1862100,metalness:.6,roughness:.3}),De=new Ee(Me,_e);De.position.set(0,u.rimRadius*.6,0),De.rotation.x=Math.PI/2,De.rotation.z=.5,K.add(De),t.add(K)}),!e.startsWith("electric")&&!e.includes("i4")&&!e.includes("ix")&&((e.includes("m")||e.includes("sport")?4:2)===4?[-.35,-.18,.18,.35]:[-.2,.2]).forEach(q=>{const K=new Yi(.04,.04,.12,12),le=new At({color:8947848,metalness:.9,roughness:.2}),re=new Ee(K,le);re.rotation.z=Math.PI/2,re.position.set(-(u.bodyLength*.5+.06),u.groundClearance+.1,q),t.add(re)});const Ae=new aa(.1,.02,8,24),b=new Ee(Ae,s);b.position.set(u.bodyLength*.5+.14,u.groundClearance+u.bodyHeight*.88,0),b.rotation.y=Math.PI/2,t.add(b);const S=[1862100,16777215,1862100,16777215];for(let U=0;U<4;U++){const Z=new Sc(.07,6,U*Math.PI/2,Math.PI/2),q=new At({color:S[U]}),K=new Ee(Z,q);K.position.set(u.bodyLength*.5+.15,u.groundClearance+u.bodyHeight*.88,0),K.rotation.y=Math.PI/2,t.add(K)}return t.traverse(U=>{U.isMesh&&(U.castShadow=!0,U.receiveShadow=!0)}),t}function iR(n){const e={bodyLength:4.4,bodyHeight:.7,bodyWidth:1.8,groundClearance:.22,cabinHeight:.62,cabinY:1.01,cabinOffset:-.08,cabinLengthRatio:.5,wheelbase:2.8,wheeltrack:1.55,wheelRadius:.32,rimRadius:.22,wheelWidth:.22,windshieldAngle:.3,rearWindowAngle:.25};switch(n){case"sedan-long":return{...e,bodyLength:5,bodyWidth:1.9,cabinHeight:.68,cabinY:1.04,cabinLengthRatio:.52,wheelbase:3.1,wheelRadius:.36,rimRadius:.25,wheelWidth:.24,groundClearance:.2};case"sedan-sport":case"coupe-sport":return{...e,bodyLength:4.5,bodyHeight:.68,cabinHeight:.58,cabinY:.98,cabinLengthRatio:.48,windshieldAngle:.38,rearWindowAngle:.35,wheelRadius:.34,rimRadius:.24,groundClearance:.18};case"coupe":return{...e,bodyLength:4.6,bodyHeight:.67,cabinHeight:.57,cabinY:.97,cabinLengthRatio:.46,windshieldAngle:.4,rearWindowAngle:.38,wheelRadius:.34,rimRadius:.24,groundClearance:.18};case"suv-compact":return{...e,bodyLength:4.6,bodyHeight:.85,bodyWidth:1.88,groundClearance:.28,cabinHeight:.72,cabinY:1.14,cabinLengthRatio:.62,cabinOffset:0,wheelbase:2.86,wheelRadius:.36,rimRadius:.25,wheelWidth:.26,windshieldAngle:.22,rearWindowAngle:.18};case"suv":return{...e,bodyLength:4.9,bodyHeight:.95,bodyWidth:2,groundClearance:.3,cabinHeight:.78,cabinY:1.24,cabinLengthRatio:.64,cabinOffset:0,wheelbase:2.98,wheelRadius:.38,rimRadius:.27,wheelWidth:.28,windshieldAngle:.2,rearWindowAngle:.16};case"suv-large":return{...e,bodyLength:5.15,bodyHeight:1.02,bodyWidth:2.1,groundClearance:.32,cabinHeight:.84,cabinY:1.32,cabinLengthRatio:.66,cabinOffset:0,wheelbase:3.1,wheelRadius:.4,rimRadius:.28,wheelWidth:.3,windshieldAngle:.18,rearWindowAngle:.15};default:return e}}function rR(){const n=new ai,e=new Yi(3.8,4,.08,64),t=new At({color:1710618,metalness:.7,roughness:.2,envMapIntensity:1}),i=new Ee(e,t);i.position.y=-.04,i.receiveShadow=!0,n.add(i);const r=new aa(3.8,.04,8,64),s=new At({color:1862100,emissive:1862100,emissiveIntensity:1.2}),o=new Ee(r,s);o.rotation.x=Math.PI/2,o.position.y=0,n.add(o);const a=new aa(2.2,.02,8,64),l=new Ee(a,s);l.rotation.x=Math.PI/2,l.position.y=.01,n.add(l);const c=new Sc(3.7,64),d=new At({color:1118481,metalness:.9,roughness:.05,side:Dn}),f=new Ee(c,d);return f.rotation.x=-Math.PI/2,f.position.y=.001,f.receiveShadow=!0,n.add(f),n}function sR(n,e){n.traverse(t=>{if(t.isMesh&&t.material.metalness!==void 0&&t.material.roughness!==void 0&&t.material.color&&t.material!==null){const i=t.material.clearcoat!==void 0&&t.material.clearcoat>0,r=t.material.metalness>.4&&t.material.metalness<.8&&t.material.roughness<.4;(i||r)&&t.material.color.setHex(e)}})}const Xd={"Alpine White":"#F5F5F5","Black Sapphire":"#0A0A0A","BMW Individual Frozen Arctic Grey":"#9EA3A8","Portimao Blue":"#1C4E8C","Tanzanite Blue":"#1C69D4","Skyscraper Grey":"#5A5A5A","Mineral White":"#E8E8E8","Carbon Black":"#1A1A1A","Phytonic Blue":"#3D6098","Isle of Man Green":"#2D5016","Toronto Red":"#8B1C1C","Sunset Orange":"#CC4A00"},Ei=[{id:"bmw-3-series",name:"3 Series",series:"3",tagline:"The Essence of a Sports Sedan",price:4199e3,priceLabel:"₹41.99 Lakh",category:"Sedan",badge:"Bestseller",badgeColor:"blue",year:2024,modelType:"sedan",image:null,specs:{engine:"2.0L TwinPower Turbo 4-Cyl",power:"255 hp",torque:"400 Nm",acceleration:"6.0s (0–100 km/h)",topSpeed:"250 km/h",transmission:"8-Speed Steptronic",fuelType:"Petrol",driveType:"RWD",wheelbase:"2,851 mm",weight:"1,525 kg"},colors:["Alpine White","Black Sapphire","Tanzanite Blue","Skyscraper Grey","Toronto Red"],features:["M Sport Package",'Live Cockpit Pro (12.3" + 14.9" curved display)',"Driving Assistant Professional","Harman Kardon Surround Sound","Ambient Lighting (6 colours)","Wireless Apple CarPlay & Android Auto"],variants:[{name:"320i M Sport",price:4199e3,label:"₹41.99 L"},{name:"320d M Sport",price:4399e3,label:"₹43.99 L"},{name:"330i M Sport",price:4899e3,label:"₹48.99 L"}]},{id:"bmw-5-series",name:"5 Series",series:"5",tagline:"Progressive. Powerful. Presence.",price:7299e3,priceLabel:"₹72.99 Lakh",category:"Sedan",badge:"New 2024",badgeColor:"silver",year:2024,modelType:"sedan",image:null,specs:{engine:"2.0L TwinPower Turbo 4-Cyl",power:"299 hp",torque:"450 Nm",acceleration:"5.7s (0–100 km/h)",topSpeed:"250 km/h",transmission:"8-Speed Steptronic",fuelType:"Petrol",driveType:"RWD",wheelbase:"2,995 mm",weight:"1,670 kg"},colors:["Alpine White","Black Sapphire","Portimao Blue","Skyscraper Grey","Mineral White"],features:['BMW Curved Display (12.3" + 14.9")',"Live Cockpit Professional","Driving Assistant Professional","Parking Assistant Plus","Bowers & Wilkins Diamond Surround Sound","Adaptive Chassis Control"],variants:[{name:"520i M Sport",price:7299e3,label:"₹72.99 L"},{name:"530i M Sport",price:7899e3,label:"₹78.99 L"},{name:"540i xDrive",price:8499e3,label:"₹84.99 L"}]},{id:"bmw-7-series",name:"7 Series",series:"7",tagline:"The Future of Luxury",price:17299e3,priceLabel:"₹1.72 Cr",category:"Luxury Sedan",badge:"Flagship",badgeColor:"gold",year:2024,modelType:"sedan-long",image:null,specs:{engine:"3.0L TwinPower Turbo 6-Cyl",power:"375 hp",torque:"520 Nm",acceleration:"4.9s (0–100 km/h)",topSpeed:"250 km/h",transmission:"8-Speed Steptronic",fuelType:"Petrol",driveType:"xDrive AWD",wheelbase:"3,215 mm",weight:"2,100 kg"},colors:["Alpine White","Black Sapphire","Phytonic Blue","Frozen Arctic Grey","Carbon Black"],features:['BMW Theatre Screen (31.3" 8K rear display)',"Executive Lounge Seating","First Class Suite Rear","Bowers & Wilkins Diamond Surround Sound (36 speakers)","Driving Assistant Professional","Sky Lounge Panoramic Roof","Merino Leather Interior","BMW Digital Key Plus"],variants:[{name:"740i M Sport",price:17299e3,label:"₹1.72 Cr"},{name:"760i xDrive",price:21999e3,label:"₹2.19 Cr"}]},{id:"bmw-m3",name:"M3",series:"M",tagline:"The Ultimate Driving Machine",price:13999e3,priceLabel:"₹1.39 Cr",category:"M Sedan",badge:"M Power",badgeColor:"red",year:2024,modelType:"sedan-sport",image:null,specs:{engine:"3.0L M TwinPower Turbo 6-Cyl",power:"510 hp",torque:"650 Nm",acceleration:"3.5s (0–100 km/h)",topSpeed:"290 km/h",transmission:"8-Speed M Steptronic",fuelType:"Petrol",driveType:"M xDrive AWD",wheelbase:"2,857 mm",weight:"1,760 kg"},colors:["Alpine White","Black Sapphire","Isle of Man Green","Portimao Blue","Toronto Red"],features:["M Carbon Bucket Seats","M Carbon Fibre Roof","M Exhaust System with Flap Control","M Compound Brakes","M-specific Chassis Tuning","M Drive Professional","Competition Pack"],variants:[{name:"M3 Competition",price:13999e3,label:"₹1.39 Cr"},{name:"M3 CS",price:185e5,label:"₹1.85 Cr"}]},{id:"bmw-m4",name:"M4",series:"M",tagline:"Precision. Performance. Passion.",price:14299e3,priceLabel:"₹1.42 Cr",category:"M Coupe",badge:"M Power",badgeColor:"red",year:2024,modelType:"coupe-sport",model3d:"/models/bmw-m4.glb",image:null,specs:{engine:"3.0L M TwinPower Turbo 6-Cyl",power:"510 hp",torque:"650 Nm",acceleration:"3.5s (0–100 km/h)",topSpeed:"290 km/h",transmission:"8-Speed M Steptronic",fuelType:"Petrol",driveType:"M xDrive AWD",wheelbase:"2,857 mm",weight:"1,730 kg"},colors:["Alpine White","Black Sapphire","Isle of Man Green","Portimao Blue","Sunset Orange"],features:["M Carbon Package","M Track Package","Active M Differential","M Compound Brakes","Carbon Fibre Reinforced Plastic Roof","M Sport Exhaust"],variants:[{name:"M4 Competition",price:14299e3,label:"₹1.42 Cr"},{name:"M4 CSL",price:22e6,label:"₹2.20 Cr"}]},{id:"bmw-x3",name:"X3",series:"X",tagline:"Built for Every Road",price:6899e3,priceLabel:"₹68.99 Lakh",category:"Sports Activity Vehicle",badge:null,badgeColor:null,year:2024,modelType:"suv-compact",model3d:"/models/bmw-x3.glb",image:null,specs:{engine:"2.0L TwinPower Turbo 4-Cyl",power:"248 hp",torque:"370 Nm",acceleration:"6.6s (0–100 km/h)",topSpeed:"235 km/h",transmission:"8-Speed Steptronic",fuelType:"Petrol",driveType:"xDrive AWD",wheelbase:"2,864 mm",weight:"1,760 kg"},colors:["Alpine White","Black Sapphire","Phytonic Blue","Mineral White","Skyscraper Grey"],features:["M Sport Package","Panoramic Sunroof","Live Cockpit Pro","Driving Assistant","xDrive Intelligent All-Wheel Drive","Adaptive Suspension"],variants:[{name:"xDrive20i M Sport",price:6899e3,label:"₹68.99 L"},{name:"xDrive30i M Sport",price:7499e3,label:"₹74.99 L"}]},{id:"bmw-x5",name:"X5",series:"X",tagline:"Conquer Every Horizon",price:9399e3,priceLabel:"₹93.99 Lakh",category:"Sports Activity Vehicle",badge:"Popular",badgeColor:"blue",year:2024,modelType:"suv",image:null,specs:{engine:"3.0L TwinPower Turbo 6-Cyl",power:"340 hp",torque:"450 Nm",acceleration:"5.5s (0–100 km/h)",topSpeed:"250 km/h",transmission:"8-Speed Steptronic",fuelType:"Petrol",driveType:"xDrive AWD",wheelbase:"2,975 mm",weight:"2,100 kg"},colors:["Alpine White","Black Sapphire","Phytonic Blue","Frozen Arctic Grey","Mineral White"],features:["Sky Lounge Panoramic Roof","Driving Assistant Professional","Bowers & Wilkins Surround Sound","Air Suspension with Automatic Levelling","Trailer Hitch with Trailer Stability Control","Ambient Lighting Plus"],variants:[{name:"xDrive40i M Sport",price:9399e3,label:"₹93.99 L"},{name:"xDrive50e M Sport",price:10999e3,label:"₹1.09 Cr"}]},{id:"bmw-x7",name:"X7",series:"X",tagline:"Luxury Without Limits",price:12399e3,priceLabel:"₹1.23 Cr",category:"Sports Activity Vehicle",badge:"Flagship SUV",badgeColor:"gold",year:2024,modelType:"suv-large",model3d:"/models/bmw-x7.glb",image:null,specs:{engine:"3.0L TwinPower Turbo 6-Cyl",power:"375 hp",torque:"520 Nm",acceleration:"5.4s (0–100 km/h)",topSpeed:"250 km/h",transmission:"8-Speed Steptronic",fuelType:"Petrol",driveType:"xDrive AWD",wheelbase:"3,105 mm",weight:"2,510 kg"},colors:["Alpine White","Black Sapphire","Mineral White","Frozen Arctic Grey","Phytonic Blue"],features:["6-Seat Executive Lounge Configuration","Panoramic Sky Lounge LED Roof","Driving Assistant Professional","Bowers & Wilkins Diamond Surround","4-Zone Climate Control","Rear Seat Entertainment"],variants:[{name:"xDrive40i M Sport",price:12399e3,label:"₹1.23 Cr"},{name:"xDrive60i M Sport",price:15999e3,label:"₹1.59 Cr"}]},{id:"bmw-i4",name:"i4",series:"i",tagline:"Electric. Sporty. BMW.",price:7299e3,priceLabel:"₹72.99 Lakh",category:"Electric Gran Coupe",badge:"Electric",badgeColor:"green",year:2024,modelType:"coupe",image:null,specs:{engine:"Single Electric Motor (Rear)",power:"340 hp",torque:"430 Nm",acceleration:"5.7s (0–100 km/h)",topSpeed:"225 km/h",transmission:"Single-Speed Automatic",fuelType:"Electric (83.9 kWh)",driveType:"RWD",wheelbase:"2,856 mm",weight:"2,050 kg",range:"590 km (WLTP)",charging:"DC Fast Charging up to 200 kW"},colors:["Alpine White","Black Sapphire","Portimao Blue","Skyscraper Grey","Carbon Black"],features:["BMW Curved Display","One-Pedal Driving (Adaptive Recuperation)","DC Fast Charging 200 kW","BMW i Driving Experience Modes","Sport Boost Mode","Harman Kardon Sound System"],variants:[{name:"i4 eDrive35",price:7299e3,label:"₹72.99 L"},{name:"i4 eDrive40",price:7699e3,label:"₹76.99 L"},{name:"i4 M50",price:11699e3,label:"₹1.16 Cr"}]},{id:"bmw-ix",name:"iX",series:"i",tagline:"The Electric Future of BMW",price:11199e3,priceLabel:"₹1.11 Cr",category:"Electric SUV",badge:"Electric",badgeColor:"green",year:2024,modelType:"suv",image:null,specs:{engine:"Dual Electric Motor (AWD)",power:"523 hp",torque:"765 Nm",acceleration:"4.6s (0–100 km/h)",topSpeed:"200 km/h",transmission:"Single-Speed Automatic",fuelType:"Electric (111.5 kWh)",driveType:"xDrive AWD",wheelbase:"3,000 mm",weight:"2,510 kg",range:"630 km (WLTP)",charging:"DC Fast Charging up to 200 kW"},colors:["Alpine White","Black Sapphire","Phytonic Blue","Mineral White","Frozen Arctic Grey"],features:['BMW Curved Display (12.3" + 14.9")',"Bowers & Wilkins Diamond Surround (30 speakers)","Panoramic Sky Lounge Roof","BMW i Driving Experience","Airstream Technology","Ultra-strong Steel & Carbon Fibre Passenger Cell"],variants:[{name:"iX xDrive50",price:11199e3,label:"₹1.11 Cr"},{name:"iX M60",price:13999e3,label:"₹1.39 Cr"}]}];function oR({model:n,selectedColor:e,isRotating:t,onLoadComplete:i}){const r=He.useRef(null),s=He.useRef(null),o=He.useRef(null),a=He.useRef(null),l=He.useRef(null),c=He.useRef(null),d=He.useRef(t),f=He.useRef({isDown:!1,lastX:0,lastY:0}),u=He.useRef({y:.3,target:.3}),p=He.useRef(0),g=He.useRef(null),[x,m]=He.useState(!0),[h,_]=He.useState(""),v=He.useCallback(()=>{var we,me;if(!r.current)return;m(!0),_("");const E=r.current.clientWidth,O=r.current.clientHeight;let z;try{z=new fv({antialias:!0,alpha:!0,powerPreference:"default"})}catch(Te){console.error("3D viewer failed to initialize:",Te),_("3D rendering is unavailable on this browser/device."),m(!1);return}z.setSize(E,O),z.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),z.shadowMap.enabled=!0,z.shadowMap.type=N_,z.outputColorSpace=_t,z.toneMapping=I_,z.toneMappingExposure=1.2,r.current.appendChild(z.domElement),o.current=z;const $=new kb;$.background=null,$.fog=new Kf(657930,.045),s.current=$;const P=new an(40,E/O,.1,100);P.position.set(5.5,2.5,0),P.lookAt(0,.6,0),a.current=P;const G=new dA(1712192,.8);$.add(G);const V=new Ml(16774624,2.5);V.position.set(8,10,4),V.castShadow=!0,V.shadow.mapSize.width=1024,V.shadow.mapSize.height=1024,V.shadow.camera.near=.1,V.shadow.camera.far=30,V.shadow.camera.left=-8,V.shadow.camera.right=8,V.shadow.camera.top=8,V.shadow.camera.bottom=-8,V.shadow.bias=-4e-4,$.add(V);const J=new Ml(4227327,1.2);J.position.set(-6,4,-4),$.add(J);const I=new Ml(8405247,.8);I.position.set(-3,6,8),$.add(I);const B=new xv(1862100,1.5,8);B.position.set(0,-.5,0),$.add(B);const H=new Vd(16777215,2,20,Math.PI/6);H.position.set(2,9,1),H.target.position.set(0,0,0),$.add(H),$.add(H.target);const Q=new Vd(16777215,1.5,20,Math.PI/6);Q.position.set(-2,9,-1),Q.target.position.set(0,0,0),$.add(Q),$.add(Q.target);const te=rR();$.add(te);const Y=e||((we=n==null?void 0:n.colors)==null?void 0:we[0])||"Tanzanite Blue",ee=parseInt(((me=Xd[Y])==null?void 0:me.replace("#","0x"))||"0x1C69D4"),ae=Te=>{$.add(Te),l.current=Te,p.current=Te.position.y,m(!1),i==null||i()},he=()=>{const Te=nR(ee,(n==null?void 0:n.modelType)||"sedan");Te.position.y=0,Te.userData.usesProceduralBody=!0,ae(Te)},ge=Te=>{Te.traverse(le=>{le.isMesh&&(le.castShadow=!0,le.receiveShadow=!0)});const Ae=new Jn().setFromObject(Te),b=new N,S=new N;Ae.getSize(b),Ae.getCenter(S);const q=4.6/(Math.max(b.x,b.y,b.z)||1);Te.scale.setScalar(q),Te.position.sub(S.multiplyScalar(q));const K=new Jn().setFromObject(Te);Te.position.y-=K.min.y,Te.userData.usesProceduralBody=!1};n!=null&&n.model3d?new MA().load(n.model3d,Ae=>{const b=Ae.scene;ge(b),ae(b)},void 0,Ae=>{console.error(`Failed to load GLB for ${(n==null?void 0:n.id)||"selected model"}:`,Ae),he()}):he();const Ce=new vn,Ne=80,xe=new Float32Array(Ne*3);for(let Te=0;Te<Ne;Te++)xe[Te*3]=(Math.random()-.5)*14,xe[Te*3+1]=Math.random()*7,xe[Te*3+2]=(Math.random()-.5)*14;Ce.setAttribute("position",new Jt(xe,3));const Ye=new Jf({color:1862100,size:.04,transparent:!0,opacity:.5,sizeAttenuation:!0}),k=new mv(Ce,Ye);$.add(k),g.current=k;let Et=0;const ve=()=>{c.current=requestAnimationFrame(ve),Et+=.01,f.current.isDown||(d.current&&(u.current.target+=.004),u.current.y+=(u.current.target-u.current.y)*.06),l.current&&(l.current.rotation.y=u.current.y,l.current.position.y=p.current+Math.sin(Et*.5)*.025),g.current&&(g.current.rotation.y+=6e-4),B.intensity=1.5+Math.sin(Et*2)*.3,z.render($,P)};ve()},[n,e,i]);He.useEffect(()=>(v(),()=>{var E;if(c.current&&cancelAnimationFrame(c.current),o.current){const O=o.current.domElement;o.current.dispose(),(E=r.current)!=null&&E.contains(O)&&r.current.removeChild(O)}}),[n==null?void 0:n.id]),He.useEffect(()=>{var E,O;if((O=(E=l.current)==null?void 0:E.userData)!=null&&O.usesProceduralBody&&e){const z=Xd[e];if(z){const $=parseInt(z.replace("#",""),16);sR(l.current,$)}}},[e]),He.useEffect(()=>{d.current=t},[t]),He.useEffect(()=>{const E=()=>{if(!r.current||!o.current||!a.current)return;const O=r.current.clientWidth,z=r.current.clientHeight;o.current.setSize(O,z),a.current.aspect=O/z,a.current.updateProjectionMatrix()};return window.addEventListener("resize",E),()=>window.removeEventListener("resize",E)},[]);const y=E=>{f.current.isDown=!0,f.current.lastX=E.clientX},C=E=>{if(!f.current.isDown)return;const O=E.clientX-f.current.lastX;u.current.target+=O*.008,f.current.lastX=E.clientX},R=()=>{f.current.isDown=!1},A=E=>{f.current.isDown=!0,f.current.lastX=E.touches[0].clientX},D=E=>{if(!f.current.isDown)return;const O=E.touches[0].clientX-f.current.lastX;u.current.target+=O*.008,f.current.lastX=E.touches[0].clientX},M=()=>{f.current.isDown=!1};return T.jsxs("div",{className:"relative w-full h-full canvas-container",children:[x&&T.jsx("div",{className:"absolute inset-0 flex items-center justify-center z-10",children:T.jsxs("div",{className:"flex flex-col items-center gap-4",children:[T.jsx("div",{className:"w-12 h-12 border-2 border-bmw-blue/20 border-t-bmw-blue rounded-full animate-spin"}),T.jsx("span",{className:"text-bmw-silver/60 font-body text-sm tracking-widest uppercase",children:"Loading Model"})]})}),!x&&h&&T.jsx("div",{className:"absolute inset-0 flex items-center justify-center z-10 bg-bmw-black/75 px-6",children:T.jsx("p",{className:"text-center text-sm text-white/70 font-body max-w-xs",children:h})}),T.jsx("div",{ref:r,className:"w-full h-full",onMouseDown:y,onMouseMove:C,onMouseUp:R,onMouseLeave:R,onTouchStart:A,onTouchMove:D,onTouchEnd:M}),T.jsxs("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-40",children:[T.jsx("div",{className:"w-4 h-4 border border-white/50 rounded-sm"}),T.jsx("span",{className:"text-white/50 text-xs font-body tracking-widest uppercase",children:"Drag to rotate"})]})]})}const aR=["All","3","5","7","M","X","i"];function lR({selectedModel:n,onSelect:e}){const t=He.useRef(null),[i,r]=He.useState("All"),s=i==="All"?Ei:Ei.filter(a=>a.series===i),o=a=>{var l;(l=t.current)==null||l.scrollBy({left:a*280,behavior:"smooth"})};return T.jsxs("div",{className:"relative",children:[T.jsxs("div",{className:"flex items-center gap-1 mb-6 px-6 overflow-x-auto no-scrollbar",children:[T.jsx("span",{className:"text-xs text-white/30 uppercase tracking-widest mr-3 font-body whitespace-nowrap",children:"Series"}),aR.map(a=>T.jsx("button",{onClick:()=>r(a),className:`px-4 py-1.5 text-xs font-display font-600 tracking-widest uppercase transition-all duration-200 rounded-sm whitespace-nowrap ${i===a?"bg-bmw-blue text-white shadow-[0_0_12px_rgba(28,105,212,0.4)]":"text-white/40 hover:text-white/70 border border-white/10 hover:border-white/20"}`,children:a==="All"?"All":`${a} Series`},a))]}),T.jsx("button",{onClick:()=>o(-1),className:"absolute left-0 top-1/2 translate-y-4 z-10 w-9 h-9 rounded-full bg-bmw-dark-2/90 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-bmw-blue/30 transition-all",children:T.jsx(Ld,{size:18})}),T.jsx("button",{onClick:()=>o(1),className:"absolute right-0 top-1/2 translate-y-4 z-10 w-9 h-9 rounded-full bg-bmw-dark-2/90 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-bmw-blue/30 transition-all",children:T.jsx(xl,{size:18})}),T.jsx("div",{ref:t,className:"flex gap-3 overflow-x-auto no-scrollbar px-6 pb-2",style:{scrollSnapType:"x mandatory"},children:s.map(a=>T.jsx(cR,{model:a,isSelected:(n==null?void 0:n.id)===a.id,onSelect:e},a.id))})]})}function cR({model:n,isSelected:e,onSelect:t}){const i={blue:"bg-bmw-blue/20 text-bmw-blue-light border border-bmw-blue/30",red:"bg-red-500/20 text-red-400 border border-red-500/30",gold:"bg-amber-500/20 text-amber-400 border border-amber-500/30",green:"bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",silver:"bg-white/10 text-white/60 border border-white/20"};return T.jsxs("button",{onClick:()=>t(n),style:{scrollSnapAlign:"start"},className:`flex-shrink-0 w-[220px] rounded-lg border transition-all duration-300 overflow-hidden group ${e?"bg-bmw-blue/15 border-bmw-blue/60 shadow-[0_0_20px_rgba(28,105,212,0.2)]":"bg-bmw-dark-2/60 border-white/8 hover:border-white/20 hover:bg-bmw-dark-3/80"}`,children:[T.jsxs("div",{className:"relative h-[90px] bg-gradient-to-b from-bmw-dark-3 to-bmw-dark-2 flex items-center justify-center overflow-hidden",children:[T.jsx(uR,{modelType:n.modelType,isSelected:e}),e&&T.jsx("div",{className:"absolute inset-0 bg-bmw-blue/5"}),n.badge&&T.jsxs("div",{className:`absolute top-2 right-2 px-2 py-0.5 text-[9px] font-display font-600 uppercase tracking-wider rounded-sm ${i[n.badgeColor]||i.silver}`,children:[n.badge==="Electric"&&T.jsx(L_,{size:7,className:"inline mr-0.5"}),n.badge]})]}),T.jsxs("div",{className:"p-3 text-left",children:[T.jsxs("div",{className:"flex items-baseline justify-between mb-1",children:[T.jsxs("span",{className:`font-display text-base font-700 tracking-wide uppercase ${e?"text-white":"text-white/80"}`,children:["BMW ",n.name]}),T.jsx("span",{className:`text-[10px] font-mono ml-1 ${e?"text-bmw-blue-light":"text-white/30"}`,children:n.year})]}),T.jsx("div",{className:"text-[11px] text-white/40 font-body mb-2 truncate",children:n.category}),T.jsx("div",{className:`text-sm font-display font-600 tracking-wide ${e?"text-bmw-blue-light":"text-white/60"}`,children:n.priceLabel}),T.jsx("div",{className:"mt-2 text-[10px] text-white/30 font-body",children:n.specs.acceleration})]}),e&&T.jsx("div",{className:"h-0.5 bg-gradient-to-r from-transparent via-bmw-blue to-transparent"})]})}function uR({modelType:n,isSelected:e}){const t=e?"#1C69D4":"#444",i={sedan:"M 15,45 L 25,30 L 55,28 L 75,32 L 85,45 L 85,52 L 15,52 Z","sedan-long":"M 10,45 L 20,29 L 55,27 L 78,31 L 88,45 L 88,52 L 10,52 Z","sedan-sport":"M 15,46 L 28,32 L 57,28 L 76,33 L 85,46 L 85,52 L 15,52 Z",coupe:"M 15,46 L 30,31 L 60,27 L 78,33 L 85,46 L 85,52 L 15,52 Z","coupe-sport":"M 14,46 L 28,30 L 60,26 L 78,32 L 86,46 L 86,52 L 14,52 Z","suv-compact":"M 12,43 L 18,28 L 55,25 L 78,28 L 87,43 L 87,52 L 12,52 Z",suv:"M 10,42 L 16,26 L 55,23 L 80,26 L 89,42 L 89,52 L 10,52 Z","suv-large":"M 8,41 L 14,24 L 54,21 L 82,24 L 91,41 L 91,52 L 8,52 Z"},r=i[n]||i.sedan;return T.jsxs("svg",{viewBox:"0 0 100 70",className:"w-full h-full px-2 py-1",fill:"none",children:[T.jsx("path",{d:r,fill:t,opacity:e?.6:.3}),T.jsx("circle",{cx:"28",cy:"52",r:"6",fill:e?"#1C69D4":"#333",opacity:.8}),T.jsx("circle",{cx:"28",cy:"52",r:"3.5",fill:e?"#4A8FE8":"#555",opacity:.6}),T.jsx("circle",{cx:"72",cy:"52",r:"6",fill:e?"#1C69D4":"#333",opacity:.8}),T.jsx("circle",{cx:"72",cy:"52",r:"3.5",fill:e?"#4A8FE8":"#555",opacity:.6}),T.jsx("path",{d:r.replace(/M.*?L/,"M").split("L").slice(0,3).join("L")+" Z",fill:e?"#88aacc":"#2a2a2a",opacity:.4})]})}function pg({model:n,selectedColor:e,onColorChange:t,isRotating:i,onRotateToggle:r}){const[s,o]=He.useState("colors"),[a,l]=He.useState(0);if(!n)return null;const c=d=>o(s===d?null:d);return T.jsxs("div",{className:"flex flex-col h-full overflow-y-auto no-scrollbar",children:[T.jsxs("div",{className:"p-6 border-b border-white/8",children:[T.jsxs("div",{className:"flex items-start justify-between mb-1",children:[T.jsxs("div",{children:[T.jsxs("div",{className:"text-[10px] text-bmw-blue-light font-body tracking-[0.3em] uppercase mb-1",children:["BMW ",n.year]}),T.jsx("h2",{className:"font-display text-3xl font-800 text-white uppercase tracking-wide leading-none",children:n.name}),T.jsx("p",{className:"text-sm text-white/40 font-body mt-1.5 italic",children:n.tagline})]}),T.jsx("button",{onClick:r,className:`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 ${i?"bg-bmw-blue/20 border-bmw-blue text-bmw-blue-light":"border-white/15 text-white/40 hover:border-white/30"}`,title:i?"Pause rotation":"Start rotation",children:i?T.jsx(cS,{size:14}):T.jsx(C_,{size:14})})]}),T.jsxs("div",{className:"mt-4 flex items-baseline gap-2",children:[T.jsx("span",{className:"font-display text-2xl font-700 text-white tracking-wide",children:n.priceLabel}),T.jsx("span",{className:"text-xs text-white/30 font-body",children:"ex-showroom"})]}),n.variants&&T.jsx("div",{className:"mt-4 flex gap-2 flex-wrap",children:n.variants.map((d,f)=>T.jsx("button",{onClick:()=>l(f),className:`px-3 py-1.5 text-xs font-body rounded-sm border transition-all duration-200 ${a===f?"bg-bmw-blue/20 border-bmw-blue/60 text-bmw-blue-light":"border-white/10 text-white/40 hover:border-white/20 hover:text-white/60"}`,children:d.name},f))})]}),T.jsx("div",{className:"grid grid-cols-3 gap-px bg-white/5 border-b border-white/8",children:[{label:"Power",value:n.specs.power,icon:L_},{label:"0–100",value:n.specs.acceleration.split(" ")[0],icon:vp},{label:"Top Speed",value:n.specs.topSpeed,icon:yp}].map(({label:d,value:f,icon:u})=>T.jsxs("div",{className:"bg-bmw-dark/80 p-4 text-center",children:[T.jsx(u,{size:14,className:"text-bmw-blue-light mx-auto mb-1.5 opacity-70"}),T.jsx("div",{className:"font-display text-sm font-700 text-white",children:f}),T.jsx("div",{className:"text-[10px] text-white/30 font-body mt-0.5 uppercase tracking-wider",children:d})]},d))}),T.jsxs("div",{className:"flex-1",children:[T.jsx(Fu,{id:"colors",icon:T.jsx(lS,{size:15}),label:"Exterior Colour",value:e,expanded:s==="colors",onToggle:()=>c("colors"),children:T.jsx("div",{className:"grid grid-cols-2 gap-2",children:n.colors.map(d=>{const f=Xd[d]||"#888888",u=e===d;return T.jsxs("button",{onClick:()=>t(d),className:`flex items-center gap-2.5 p-2 rounded-sm border transition-all duration-200 ${u?"bg-white/8 border-bmw-blue/60":"border-transparent hover:border-white/10 hover:bg-white/4"}`,children:[T.jsx("div",{className:`w-7 h-7 rounded-full flex-shrink-0 border-2 transition-all duration-200 ${u?"border-bmw-blue shadow-[0_0_8px_rgba(28,105,212,0.5)]":"border-white/10"}`,style:{backgroundColor:f}}),T.jsx("span",{className:`text-xs font-body leading-tight text-left ${u?"text-white":"text-white/50"}`,children:d})]},d)})})}),T.jsx(Fu,{id:"specs",icon:T.jsx(vp,{size:15}),label:"Specifications",value:n.specs.engine,expanded:s==="specs",onToggle:()=>c("specs"),children:T.jsx("div",{className:"space-y-2",children:Object.entries(n.specs).map(([d,f])=>T.jsxs("div",{className:"flex justify-between items-center py-1.5 border-b border-white/5",children:[T.jsx("span",{className:"text-xs text-white/40 font-body capitalize tracking-wide",children:d.replace(/([A-Z])/g," $1").trim()}),T.jsx("span",{className:"text-xs font-body text-white/80 text-right ml-4 max-w-[55%]",children:f})]},d))})}),T.jsx(Fu,{id:"features",icon:T.jsx(yp,{size:15}),label:"Key Features",value:`${n.features.length} features`,expanded:s==="features",onToggle:()=>c("features"),children:T.jsx("div",{className:"space-y-2",children:n.features.map((d,f)=>T.jsxs("div",{className:"flex items-start gap-2.5",children:[T.jsx("div",{className:"w-1 h-1 rounded-full bg-bmw-blue mt-1.5 flex-shrink-0"}),T.jsx("span",{className:"text-xs text-white/60 font-body leading-relaxed",children:d})]},f))})})]}),T.jsxs("div",{className:"p-6 border-t border-white/8 space-y-3",children:[T.jsx("button",{className:"w-full py-3.5 bg-bmw-blue hover:bg-bmw-blue-dark text-white font-display font-600 text-sm tracking-[0.15em] uppercase rounded-sm transition-all duration-200 hover:shadow-[0_0_24px_rgba(28,105,212,0.4)]",children:"Configure Your BMW"}),T.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[T.jsx("button",{className:"py-2.5 border border-white/15 hover:border-white/30 text-white/60 hover:text-white font-body text-xs tracking-wide rounded-sm transition-all duration-200",children:"Book Test Drive"}),T.jsx("button",{className:"py-2.5 border border-white/15 hover:border-white/30 text-white/60 hover:text-white font-body text-xs tracking-wide rounded-sm transition-all duration-200",children:"Get Quote"})]})]})]})}function Fu({id:n,icon:e,label:t,value:i,expanded:r,onToggle:s,children:o}){return T.jsxs("div",{className:"border-b border-white/8",children:[T.jsxs("button",{onClick:s,className:"w-full flex items-center justify-between px-6 py-4 hover:bg-white/3 transition-colors duration-200",children:[T.jsxs("div",{className:"flex items-center gap-2.5",children:[T.jsx("span",{className:"text-bmw-blue-light opacity-70",children:e}),T.jsx("span",{className:"text-sm font-body font-500 text-white/80 tracking-wide",children:t})]}),T.jsxs("div",{className:"flex items-center gap-3",children:[T.jsx("span",{className:"text-xs text-white/30 font-body truncate max-w-[100px]",children:i}),T.jsx(R_,{size:14,className:`text-white/30 transition-transform duration-200 ${r?"rotate-180":""}`})]})]}),r&&T.jsx("div",{className:"px-6 pb-5 animate-fade-in",children:o})]})}const dR={Models:["3 Series","5 Series","7 Series","M3 / M4","X3 / X5 / X7","i4 / iX"],Experience:["Test Drive","BMW Events","BMW Museum","Driving Academy"],Services:["Finance & Leasing","Service & Parts","BMW ConnectedDrive","Roadside Assistance"],Company:["About BMW","Careers","Press","Sustainability"]};function fR(){return T.jsx("footer",{className:"bg-bmw-black border-t border-white/5 pt-16 pb-8",children:T.jsxs("div",{className:"max-w-[1400px] mx-auto px-6",children:[T.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-6 gap-10 mb-16",children:[T.jsxs("div",{className:"lg:col-span-2",children:[T.jsxs("div",{className:"flex items-center gap-3 mb-5",children:[T.jsx(hR,{}),T.jsxs("div",{children:[T.jsx("div",{className:"font-display text-base font-700 tracking-[0.25em] text-white uppercase",children:"BMW"}),T.jsx("div",{className:"text-[9px] text-white/30 tracking-[0.4em] uppercase",children:"Showroom India"})]})]}),T.jsx("p",{className:"text-sm text-white/30 font-body leading-relaxed mb-6 max-w-xs",children:"Experience the complete BMW lineup. Configure, explore, and find your perfect driving machine."}),T.jsx("div",{className:"flex gap-3",children:[{icon:sS,label:"Instagram"},{icon:pS,label:"YouTube"},{icon:fS,label:"Twitter"},{icon:oS,label:"LinkedIn"}].map(({icon:n,label:e})=>T.jsx("a",{href:"#","aria-label":e,className:"w-9 h-9 border border-white/10 rounded-sm flex items-center justify-center text-white/40 hover:text-white hover:border-bmw-blue/50 transition-all duration-200",children:T.jsx(n,{size:15})},e))})]}),Object.entries(dR).map(([n,e])=>T.jsxs("div",{children:[T.jsx("h4",{className:"font-display text-xs font-700 tracking-[0.3em] uppercase text-white/40 mb-4",children:n}),T.jsx("ul",{className:"space-y-2.5",children:e.map(t=>T.jsx("li",{children:T.jsxs("a",{href:"#",className:"text-sm text-white/40 hover:text-white font-body transition-colors duration-200 flex items-center gap-1 group",children:[t,T.jsx(rS,{size:10,className:"opacity-0 group-hover:opacity-50 transition-opacity"})]})},t))})]},n))]}),T.jsxs("div",{className:"border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4",children:[T.jsx("p",{className:"text-xs text-white/20 font-body tracking-wide",children:"© 2024 BMW AG, Munich, Germany. All rights reserved."}),T.jsx("div",{className:"flex gap-6",children:["Privacy Policy","Terms of Use","Cookie Settings","Imprint"].map(n=>T.jsx("a",{href:"#",className:"text-xs text-white/20 hover:text-white/50 font-body transition-colors",children:n},n))})]})]})})}function hR(){return T.jsxs("svg",{width:"36",height:"36",viewBox:"0 0 100 100",fill:"none",children:[T.jsx("circle",{cx:"50",cy:"50",r:"48",fill:"#0A0A0A",stroke:"#333",strokeWidth:"3"}),T.jsx("circle",{cx:"50",cy:"50",r:"38",fill:"none",stroke:"#444",strokeWidth:"1.5"}),T.jsx("path",{d:"M50 12 A38 38 0 0 1 88 50 L50 50 Z",fill:"#1C69D4",opacity:"0.8"}),T.jsx("path",{d:"M50 88 A38 38 0 0 1 12 50 L50 50 Z",fill:"#1C69D4",opacity:"0.8"}),T.jsx("path",{d:"M12 50 A38 38 0 0 1 50 12 L50 50 Z",fill:"white",opacity:"0.7"}),T.jsx("path",{d:"M88 50 A38 38 0 0 1 50 88 L50 50 Z",fill:"white",opacity:"0.7"}),T.jsx("circle",{cx:"50",cy:"50",r:"11",fill:"#0A0A0A"}),T.jsx("line",{x1:"50",y1:"12",x2:"50",y2:"88",stroke:"#444",strokeWidth:"1.5"}),T.jsx("line",{x1:"12",y1:"50",x2:"88",y2:"50",stroke:"#444",strokeWidth:"1.5"})]})}const mg=Ei[0];function pR(){const[n,e]=He.useState(mg),[t,i]=He.useState(mg.colors[0]),[r,s]=He.useState(!0),[o,a]=He.useState(!1),[l,c]=He.useState(!0),d=He.useRef(null),f=He.useCallback(g=>{e(g),i(g.colors[0])},[]),u=()=>{o||a(!0),setTimeout(()=>{var g;(g=d.current)==null||g.scrollIntoView({behavior:"smooth"})},100)};He.useEffect(()=>{if(!d.current||o)return;const g=new IntersectionObserver(([x])=>{x.isIntersecting&&a(!0)},{rootMargin:"200px 0px"});return g.observe(d.current),()=>g.disconnect()},[o]);const p=g=>{const m=(Ei.findIndex(h=>h.id===n.id)+g+Ei.length)%Ei.length;f(Ei[m])};return T.jsxs("div",{className:"min-h-screen bg-bmw-black text-white",children:[T.jsx(mS,{onNavigate:()=>{}}),T.jsx(_S,{onExplore:u}),T.jsxs("section",{ref:d,id:"showroom",className:"relative min-h-screen bg-bmw-dark",children:[T.jsx("div",{className:"px-6 pt-16 pb-6 max-w-[1400px] mx-auto",children:T.jsxs("div",{className:"flex items-end justify-between",children:[T.jsxs("div",{children:[T.jsx("div",{className:"text-[10px] text-bmw-blue-light font-body tracking-[0.4em] uppercase mb-2",children:"Virtual Showroom"}),T.jsx("h2",{className:"font-display text-4xl font-800 text-white uppercase tracking-wide",children:"Explore the Lineup"}),T.jsxs("p",{className:"text-white/30 font-body text-sm mt-2",children:[Ei.length," models available · Click any model to view in 3D · Drag to rotate"]})]}),T.jsxs("div",{className:"flex gap-2 lg:hidden",children:[T.jsx("button",{onClick:()=>p(-1),className:"w-9 h-9 border border-white/15 rounded-sm flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all",children:T.jsx(Ld,{size:16})}),T.jsx("button",{onClick:()=>p(1),className:"w-9 h-9 border border-white/15 rounded-sm flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all",children:T.jsx(xl,{size:16})})]})]})}),T.jsx("div",{className:"mb-4 max-w-[1400px] mx-auto",children:T.jsx(lR,{selectedModel:n,onSelect:f})}),T.jsxs("div",{className:"max-w-[1400px] mx-auto px-4 pb-12",children:[T.jsxs("div",{className:"flex gap-4 h-[600px] lg:h-[680px]",children:[T.jsxs("div",{className:"flex-1 relative rounded-xl overflow-hidden border border-white/8 bg-gradient-to-b from-bmw-dark-3 to-bmw-black",children:[T.jsx("div",{className:"absolute top-4 left-4 z-10 flex items-center gap-2",children:T.jsxs("div",{className:"glass px-3 py-1.5 rounded-full flex items-center gap-2",children:[T.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-bmw-blue animate-pulse"}),T.jsxs("span",{className:"text-[10px] text-white/60 font-body tracking-widest uppercase",children:["BMW ",n.name," · ",t]})]})}),o&&T.jsxs("div",{className:"absolute top-4 right-4 z-10 flex items-center gap-2",children:[T.jsx("button",{onClick:()=>c(!l),className:"lg:hidden glass w-8 h-8 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors",title:"Toggle config panel",children:T.jsx(xl,{size:14,className:`transition-transform ${l?"rotate-180":""}`})}),T.jsx("button",{onClick:()=>s(!r),className:`glass w-8 h-8 rounded-full flex items-center justify-center transition-all ${r?"text-bmw-blue-light":"text-white/40"}`,title:"Toggle auto-rotation",children:T.jsx(xp,{size:13,className:r?"animate-spin-slow":""})})]}),o&&T.jsxs(T.Fragment,{children:[T.jsx("button",{onClick:()=>p(-1),className:"absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 glass rounded-full flex items-center justify-center text-white/40 hover:text-white transition-all duration-200 hover:bg-bmw-blue/20",children:T.jsx(Ld,{size:18})}),T.jsx("button",{onClick:()=>p(1),className:"absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 glass rounded-full flex items-center justify-center text-white/40 hover:text-white transition-all duration-200 hover:bg-bmw-blue/20",children:T.jsx(xl,{size:18})})]}),o?T.jsx(oR,{model:n,selectedColor:t,isRotating:r},n.id):T.jsxs("button",{onClick:u,className:"w-full h-full flex flex-col items-center justify-center gap-4 text-white/70 hover:text-white transition-colors bg-gradient-to-b from-bmw-dark-3 to-bmw-black",children:[T.jsx("div",{className:"w-14 h-14 rounded-full border border-white/20 flex items-center justify-center",children:T.jsx(xp,{size:18})}),T.jsx("span",{className:"font-display text-sm tracking-[0.2em] uppercase",children:"Load 3D Showroom"}),T.jsx("span",{className:"text-xs font-body text-white/40",children:"Optimised for smoother first load"})]})]}),T.jsx("div",{className:`transition-all duration-300 overflow-hidden rounded-xl border border-white/8 bg-bmw-dark ${l?"w-[340px] opacity-100":"w-0 opacity-0"} hidden lg:block`,children:T.jsx(pg,{model:n,selectedColor:t,onColorChange:i,isRotating:r,onRotateToggle:()=>s(!r)})})]}),T.jsx("div",{className:"lg:hidden mt-4 rounded-xl border border-white/8 bg-bmw-dark overflow-hidden max-h-[500px]",children:T.jsx(pg,{model:n,selectedColor:t,onColorChange:i,isRotating:r,onRotateToggle:()=>s(!r)})})]})]}),T.jsx("section",{id:"all-models",className:"bg-bmw-black py-20",children:T.jsxs("div",{className:"max-w-[1400px] mx-auto px-6",children:[T.jsxs("div",{className:"mb-12",children:[T.jsx("div",{className:"text-[10px] text-bmw-blue-light font-body tracking-[0.4em] uppercase mb-3",children:"Complete Range"}),T.jsx("h2",{className:"font-display text-4xl font-800 text-white uppercase tracking-wide",children:"All BMW Models"})]}),T.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:Ei.map(g=>T.jsx(mR,{model:g,isSelected:n.id===g.id,onSelect:()=>{var x;f(g),a(!0),(x=d.current)==null||x.scrollIntoView({behavior:"smooth"})}},g.id))})]})}),T.jsx(gR,{}),T.jsx(_R,{}),T.jsx(fR,{})]})}function mR({model:n,isSelected:e,onSelect:t}){const i={blue:"bg-bmw-blue/20 text-bmw-blue-light border-bmw-blue/30",red:"bg-red-500/20 text-red-400 border-red-500/30",gold:"bg-amber-500/20 text-amber-400 border-amber-500/30",green:"bg-emerald-500/20 text-emerald-400 border-emerald-500/30",silver:"bg-white/10 text-white/50 border-white/20"};return T.jsxs("div",{className:`group relative rounded-lg border overflow-hidden transition-all duration-300 cursor-pointer ${e?"border-bmw-blue/60 bg-bmw-blue/8 shadow-[0_0_24px_rgba(28,105,212,0.15)]":"border-white/8 bg-bmw-dark-2/50 hover:border-white/20 hover:bg-bmw-dark-2"}`,onClick:t,children:[T.jsx("div",{className:`h-0.5 w-full transition-all duration-300 ${e?"bg-bmw-blue":"bg-transparent group-hover:bg-white/10"}`}),T.jsxs("div",{className:"p-6",children:[T.jsxs("div",{className:"flex items-start justify-between mb-4",children:[T.jsxs("div",{children:[n.badge&&T.jsx("div",{className:`inline-flex px-2 py-0.5 text-[9px] font-display font-600 uppercase tracking-widest rounded-sm border mb-2 ${i[n.badgeColor]||i.silver}`,children:n.badge}),T.jsxs("h3",{className:"font-display text-xl font-700 text-white uppercase tracking-wide",children:["BMW ",n.name]}),T.jsx("p",{className:"text-xs text-white/30 font-body mt-0.5",children:n.category})]}),T.jsxs("div",{className:"text-right",children:[T.jsx("div",{className:"font-display text-lg font-600 text-white",children:n.priceLabel}),T.jsx("div",{className:"text-[10px] text-white/25 font-body",children:"onwards"})]})]}),T.jsx("div",{className:"grid grid-cols-3 gap-3 mb-4",children:[{label:"Power",val:n.specs.power},{label:"0–100",val:n.specs.acceleration.split(" ")[0]},{label:"Drive",val:n.specs.driveType}].map(({label:r,val:s})=>T.jsxs("div",{className:"text-center p-2 bg-white/3 rounded-sm border border-white/5",children:[T.jsx("div",{className:"text-xs font-display font-600 text-white/80",children:s}),T.jsx("div",{className:"text-[9px] text-white/30 font-body mt-0.5 uppercase tracking-wide",children:r})]},r))}),T.jsx("p",{className:"text-xs text-white/30 font-body italic mb-4",children:n.tagline}),T.jsx("button",{className:`w-full py-2.5 text-xs font-display font-600 tracking-[0.15em] uppercase rounded-sm transition-all duration-200 ${e?"bg-bmw-blue text-white":"border border-white/15 text-white/50 hover:border-bmw-blue/50 hover:text-bmw-blue-light hover:bg-bmw-blue/8"}`,children:e?"Currently Viewing ✓":"View in 3D"})]})]})}function gR(){const n=[{number:"01",title:"M TwinPower Turbo",desc:"Advanced engine technology delivering extraordinary performance with remarkable efficiency."},{number:"02",title:"xDrive AWD",desc:"Intelligent all-wheel drive that distributes power perfectly for maximum traction in any condition."},{number:"03",title:"BMW Curved Display",desc:"Two seamlessly integrated screens creating an immersive digital cockpit experience."},{number:"04",title:"Driving Modes",desc:"COMFORT, SPORT, SPORT+ and ECO PRO modes that transform the character of your BMW."},{number:"05",title:"Adaptive Suspension",desc:"Electronically controlled dampers that read the road and adapt in milliseconds."},{number:"06",title:"ConnectedDrive",desc:"Intelligent connectivity keeping you informed, entertained, and secure at all times."}];return T.jsx("section",{className:"py-24 bg-bmw-dark border-t border-white/5",children:T.jsxs("div",{className:"max-w-[1400px] mx-auto px-6",children:[T.jsxs("div",{className:"grid lg:grid-cols-2 gap-16 items-center mb-16",children:[T.jsxs("div",{children:[T.jsx("div",{className:"text-[10px] text-bmw-blue-light font-body tracking-[0.4em] uppercase mb-3",children:"Engineering Excellence"}),T.jsxs("h2",{className:"font-display text-5xl font-800 text-white uppercase tracking-wide leading-tight",children:["Built to ",T.jsx("br",{}),T.jsx("span",{className:"text-gradient-blue",children:"Perfection"})]})]}),T.jsx("p",{className:"text-white/40 font-body text-base leading-relaxed",children:"Every BMW is engineered with an uncompromising commitment to performance, precision, and innovation. From the iconic kidney grille to the latest electric powertrains, BMW continues to define what driving pleasure means."})]}),T.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4",children:n.map(e=>T.jsxs("div",{className:"group p-6 border border-white/8 rounded-lg hover:border-bmw-blue/30 hover:bg-bmw-blue/5 transition-all duration-300",children:[T.jsx("div",{className:"font-mono text-xs text-bmw-blue/40 mb-3 tracking-widest",children:e.number}),T.jsx("h3",{className:"font-display text-lg font-700 text-white uppercase tracking-wide mb-2 group-hover:text-bmw-blue-light transition-colors",children:e.title}),T.jsx("p",{className:"text-sm text-white/40 font-body leading-relaxed",children:e.desc})]},e.number))})]})})}function _R(){return T.jsxs("section",{className:"py-24 bg-bmw-black relative overflow-hidden",children:[T.jsx("div",{className:"absolute inset-0 bg-gradient-radial from-bmw-blue/8 via-transparent to-transparent"}),T.jsx("div",{className:"absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bmw-blue/40 to-transparent"}),T.jsxs("div",{className:"max-w-2xl mx-auto text-center px-6 relative z-10",children:[T.jsx("div",{className:"text-[10px] text-bmw-blue-light font-body tracking-[0.4em] uppercase mb-4",children:"Begin Your Journey"}),T.jsx("h2",{className:"font-display text-5xl font-800 text-white uppercase tracking-wide leading-tight mb-6",children:"Ready to Drive?"}),T.jsx("p",{className:"text-white/40 font-body text-base leading-relaxed mb-10",children:"Book a personalised test drive experience at your nearest BMW dealership. Feel the ultimate driving machine for yourself."}),T.jsxs("div",{className:"flex items-center justify-center gap-4 flex-wrap",children:[T.jsx("button",{className:"px-8 py-4 bg-bmw-blue hover:bg-bmw-blue-dark text-white font-display font-600 text-sm tracking-[0.2em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(28,105,212,0.5)]",children:"Book Test Drive"}),T.jsx("button",{className:"px-8 py-4 border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-display font-500 text-sm tracking-[0.2em] uppercase rounded-sm transition-all duration-300",children:"Find Dealer"})]})]})]})}Ou.createRoot(document.getElementById("root")).render(T.jsx(Vv.StrictMode,{children:T.jsx(pR,{})}));
