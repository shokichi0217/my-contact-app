(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function L1(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Gh={exports:{}},Sa={},Kh={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xm;function M1(){if(Xm)return Re;Xm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),w=Symbol.iterator;function S(O){return O===null||typeof O!="object"?null:(O=w&&O[w]||O["@@iterator"],typeof O=="function"?O:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,$={};function q(O,G,Se){this.props=O,this.context=G,this.refs=$,this.updater=Se||L}q.prototype.isReactComponent={},q.prototype.setState=function(O,G){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,G,"setState")},q.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function J(){}J.prototype=q.prototype;function te(O,G,Se){this.props=O,this.context=G,this.refs=$,this.updater=Se||L}var fe=te.prototype=new J;fe.constructor=te,U(fe,q.prototype),fe.isPureReactComponent=!0;var Ee=Array.isArray,Oe=Object.prototype.hasOwnProperty,Ie={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function R(O,G,Se){var Ae,Ce={},Pe=null,ze=null;if(G!=null)for(Ae in G.ref!==void 0&&(ze=G.ref),G.key!==void 0&&(Pe=""+G.key),G)Oe.call(G,Ae)&&!k.hasOwnProperty(Ae)&&(Ce[Ae]=G[Ae]);var Le=arguments.length-2;if(Le===1)Ce.children=Se;else if(1<Le){for(var He=Array(Le),Bt=0;Bt<Le;Bt++)He[Bt]=arguments[Bt+2];Ce.children=He}if(O&&O.defaultProps)for(Ae in Le=O.defaultProps,Le)Ce[Ae]===void 0&&(Ce[Ae]=Le[Ae]);return{$$typeof:i,type:O,key:Pe,ref:ze,props:Ce,_owner:Ie.current}}function C(O,G){return{$$typeof:i,type:O.type,key:G,ref:O.ref,props:O.props,_owner:O._owner}}function x(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function N(O){var G={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Se){return G[Se]})}var V=/\/+/g;function I(O,G){return typeof O=="object"&&O!==null&&O.key!=null?N(""+O.key):G.toString(36)}function he(O,G,Se,Ae,Ce){var Pe=typeof O;(Pe==="undefined"||Pe==="boolean")&&(O=null);var ze=!1;if(O===null)ze=!0;else switch(Pe){case"string":case"number":ze=!0;break;case"object":switch(O.$$typeof){case i:case e:ze=!0}}if(ze)return ze=O,Ce=Ce(ze),O=Ae===""?"."+I(ze,0):Ae,Ee(Ce)?(Se="",O!=null&&(Se=O.replace(V,"$&/")+"/"),he(Ce,G,Se,"",function(Bt){return Bt})):Ce!=null&&(x(Ce)&&(Ce=C(Ce,Se+(!Ce.key||ze&&ze.key===Ce.key?"":(""+Ce.key).replace(V,"$&/")+"/")+O)),G.push(Ce)),1;if(ze=0,Ae=Ae===""?".":Ae+":",Ee(O))for(var Le=0;Le<O.length;Le++){Pe=O[Le];var He=Ae+I(Pe,Le);ze+=he(Pe,G,Se,He,Ce)}else if(He=S(O),typeof He=="function")for(O=He.call(O),Le=0;!(Pe=O.next()).done;)Pe=Pe.value,He=Ae+I(Pe,Le++),ze+=he(Pe,G,Se,He,Ce);else if(Pe==="object")throw G=String(O),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return ze}function je(O,G,Se){if(O==null)return O;var Ae=[],Ce=0;return he(O,Ae,"","",function(Pe){return G.call(Se,Pe,Ce++)}),Ae}function Be(O){if(O._status===-1){var G=O._result;G=G(),G.then(function(Se){(O._status===0||O._status===-1)&&(O._status=1,O._result=Se)},function(Se){(O._status===0||O._status===-1)&&(O._status=2,O._result=Se)}),O._status===-1&&(O._status=0,O._result=G)}if(O._status===1)return O._result.default;throw O._result}var Fe={current:null},Z={transition:null},ce={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:Z,ReactCurrentOwner:Ie};function ne(){throw Error("act(...) is not supported in production builds of React.")}return Re.Children={map:je,forEach:function(O,G,Se){je(O,function(){G.apply(this,arguments)},Se)},count:function(O){var G=0;return je(O,function(){G++}),G},toArray:function(O){return je(O,function(G){return G})||[]},only:function(O){if(!x(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Re.Component=q,Re.Fragment=t,Re.Profiler=o,Re.PureComponent=te,Re.StrictMode=s,Re.Suspense=g,Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,Re.act=ne,Re.cloneElement=function(O,G,Se){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ae=U({},O.props),Ce=O.key,Pe=O.ref,ze=O._owner;if(G!=null){if(G.ref!==void 0&&(Pe=G.ref,ze=Ie.current),G.key!==void 0&&(Ce=""+G.key),O.type&&O.type.defaultProps)var Le=O.type.defaultProps;for(He in G)Oe.call(G,He)&&!k.hasOwnProperty(He)&&(Ae[He]=G[He]===void 0&&Le!==void 0?Le[He]:G[He])}var He=arguments.length-2;if(He===1)Ae.children=Se;else if(1<He){Le=Array(He);for(var Bt=0;Bt<He;Bt++)Le[Bt]=arguments[Bt+2];Ae.children=Le}return{$$typeof:i,type:O.type,key:Ce,ref:Pe,props:Ae,_owner:ze}},Re.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},Re.createElement=R,Re.createFactory=function(O){var G=R.bind(null,O);return G.type=O,G},Re.createRef=function(){return{current:null}},Re.forwardRef=function(O){return{$$typeof:m,render:O}},Re.isValidElement=x,Re.lazy=function(O){return{$$typeof:E,_payload:{_status:-1,_result:O},_init:Be}},Re.memo=function(O,G){return{$$typeof:y,type:O,compare:G===void 0?null:G}},Re.startTransition=function(O){var G=Z.transition;Z.transition={};try{O()}finally{Z.transition=G}},Re.unstable_act=ne,Re.useCallback=function(O,G){return Fe.current.useCallback(O,G)},Re.useContext=function(O){return Fe.current.useContext(O)},Re.useDebugValue=function(){},Re.useDeferredValue=function(O){return Fe.current.useDeferredValue(O)},Re.useEffect=function(O,G){return Fe.current.useEffect(O,G)},Re.useId=function(){return Fe.current.useId()},Re.useImperativeHandle=function(O,G,Se){return Fe.current.useImperativeHandle(O,G,Se)},Re.useInsertionEffect=function(O,G){return Fe.current.useInsertionEffect(O,G)},Re.useLayoutEffect=function(O,G){return Fe.current.useLayoutEffect(O,G)},Re.useMemo=function(O,G){return Fe.current.useMemo(O,G)},Re.useReducer=function(O,G,Se){return Fe.current.useReducer(O,G,Se)},Re.useRef=function(O){return Fe.current.useRef(O)},Re.useState=function(O){return Fe.current.useState(O)},Re.useSyncExternalStore=function(O,G,Se){return Fe.current.useSyncExternalStore(O,G,Se)},Re.useTransition=function(){return Fe.current.useTransition()},Re.version="18.3.1",Re}var Ym;function $a(){return Ym||(Ym=1,Kh.exports=M1()),Kh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm;function b1(){if(Jm)return Sa;Jm=1;var i=$a(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,y){var E,w={},S=null,L=null;y!==void 0&&(S=""+y),g.key!==void 0&&(S=""+g.key),g.ref!==void 0&&(L=g.ref);for(E in g)s.call(g,E)&&!l.hasOwnProperty(E)&&(w[E]=g[E]);if(m&&m.defaultProps)for(E in g=m.defaultProps,g)w[E]===void 0&&(w[E]=g[E]);return{$$typeof:e,type:m,key:S,ref:L,props:w,_owner:o.current}}return Sa.Fragment=t,Sa.jsx=h,Sa.jsxs=h,Sa}var Zm;function F1(){return Zm||(Zm=1,Gh.exports=b1()),Gh.exports}var z=F1(),lt=$a(),yu={},Qh={exports:{}},Qt={},Xh={exports:{}},Yh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eg;function U1(){return eg||(eg=1,(function(i){function e(Z,ce){var ne=Z.length;Z.push(ce);e:for(;0<ne;){var O=ne-1>>>1,G=Z[O];if(0<o(G,ce))Z[O]=ce,Z[ne]=G,ne=O;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var ce=Z[0],ne=Z.pop();if(ne!==ce){Z[0]=ne;e:for(var O=0,G=Z.length,Se=G>>>1;O<Se;){var Ae=2*(O+1)-1,Ce=Z[Ae],Pe=Ae+1,ze=Z[Pe];if(0>o(Ce,ne))Pe<G&&0>o(ze,Ce)?(Z[O]=ze,Z[Pe]=ne,O=Pe):(Z[O]=Ce,Z[Ae]=ne,O=Ae);else if(Pe<G&&0>o(ze,ne))Z[O]=ze,Z[Pe]=ne,O=Pe;else break e}}return ce}function o(Z,ce){var ne=Z.sortIndex-ce.sortIndex;return ne!==0?ne:Z.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var g=[],y=[],E=1,w=null,S=3,L=!1,U=!1,$=!1,q=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function fe(Z){for(var ce=t(y);ce!==null;){if(ce.callback===null)s(y);else if(ce.startTime<=Z)s(y),ce.sortIndex=ce.expirationTime,e(g,ce);else break;ce=t(y)}}function Ee(Z){if($=!1,fe(Z),!U)if(t(g)!==null)U=!0,Be(Oe);else{var ce=t(y);ce!==null&&Fe(Ee,ce.startTime-Z)}}function Oe(Z,ce){U=!1,$&&($=!1,J(R),R=-1),L=!0;var ne=S;try{for(fe(ce),w=t(g);w!==null&&(!(w.expirationTime>ce)||Z&&!N());){var O=w.callback;if(typeof O=="function"){w.callback=null,S=w.priorityLevel;var G=O(w.expirationTime<=ce);ce=i.unstable_now(),typeof G=="function"?w.callback=G:w===t(g)&&s(g),fe(ce)}else s(g);w=t(g)}if(w!==null)var Se=!0;else{var Ae=t(y);Ae!==null&&Fe(Ee,Ae.startTime-ce),Se=!1}return Se}finally{w=null,S=ne,L=!1}}var Ie=!1,k=null,R=-1,C=5,x=-1;function N(){return!(i.unstable_now()-x<C)}function V(){if(k!==null){var Z=i.unstable_now();x=Z;var ce=!0;try{ce=k(!0,Z)}finally{ce?I():(Ie=!1,k=null)}}else Ie=!1}var I;if(typeof te=="function")I=function(){te(V)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,je=he.port2;he.port1.onmessage=V,I=function(){je.postMessage(null)}}else I=function(){q(V,0)};function Be(Z){k=Z,Ie||(Ie=!0,I())}function Fe(Z,ce){R=q(function(){Z(i.unstable_now())},ce)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Z){Z.callback=null},i.unstable_continueExecution=function(){U||L||(U=!0,Be(Oe))},i.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<Z?Math.floor(1e3/Z):5},i.unstable_getCurrentPriorityLevel=function(){return S},i.unstable_getFirstCallbackNode=function(){return t(g)},i.unstable_next=function(Z){switch(S){case 1:case 2:case 3:var ce=3;break;default:ce=S}var ne=S;S=ce;try{return Z()}finally{S=ne}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(Z,ce){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var ne=S;S=Z;try{return ce()}finally{S=ne}},i.unstable_scheduleCallback=function(Z,ce,ne){var O=i.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?O+ne:O):ne=O,Z){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=ne+G,Z={id:E++,callback:ce,priorityLevel:Z,startTime:ne,expirationTime:G,sortIndex:-1},ne>O?(Z.sortIndex=ne,e(y,Z),t(g)===null&&Z===t(y)&&($?(J(R),R=-1):$=!0,Fe(Ee,ne-O))):(Z.sortIndex=G,e(g,Z),U||L||(U=!0,Be(Oe))),Z},i.unstable_shouldYield=N,i.unstable_wrapCallback=function(Z){var ce=S;return function(){var ne=S;S=ce;try{return Z.apply(this,arguments)}finally{S=ne}}}})(Yh)),Yh}var tg;function j1(){return tg||(tg=1,Xh.exports=U1()),Xh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ng;function B1(){if(ng)return Qt;ng=1;var i=$a(),e=j1();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},w={};function S(n){return g.call(w,n)?!0:g.call(E,n)?!1:y.test(n)?w[n]=!0:(E[n]=!0,!1)}function L(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function U(n,r,a,c){if(r===null||typeof r>"u"||L(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function $(n,r,a,c,d,f,v){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=f,this.removeEmptyString=v}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){q[n]=new $(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];q[r]=new $(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){q[n]=new $(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){q[n]=new $(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){q[n]=new $(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){q[n]=new $(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){q[n]=new $(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){q[n]=new $(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){q[n]=new $(n,5,!1,n.toLowerCase(),null,!1,!1)});var J=/[\-:]([a-z])/g;function te(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(J,te);q[r]=new $(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(J,te);q[r]=new $(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(J,te);q[r]=new $(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){q[n]=new $(n,1,!1,n.toLowerCase(),null,!1,!1)}),q.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){q[n]=new $(n,1,!1,n.toLowerCase(),null,!0,!0)});function fe(n,r,a,c){var d=q.hasOwnProperty(r)?q[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(U(r,a,d,c)&&(a=null),c||d===null?S(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var Ee=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oe=Symbol.for("react.element"),Ie=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),N=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),je=Symbol.for("react.memo"),Be=Symbol.for("react.lazy"),Fe=Symbol.for("react.offscreen"),Z=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var ne=Object.assign,O;function G(n){if(O===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var Se=!1;function Ae(n,r){if(!n||Se)return"";Se=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(j){var c=j}Reflect.construct(n,[],r)}else{try{r.call()}catch(j){c=j}n.call(r.prototype)}else{try{throw Error()}catch(j){c=j}n()}}catch(j){if(j&&c&&typeof j.stack=="string"){for(var d=j.stack.split(`
`),f=c.stack.split(`
`),v=d.length-1,A=f.length-1;1<=v&&0<=A&&d[v]!==f[A];)A--;for(;1<=v&&0<=A;v--,A--)if(d[v]!==f[A]){if(v!==1||A!==1)do if(v--,A--,0>A||d[v]!==f[A]){var P=`
`+d[v].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=v&&0<=A);break}}}finally{Se=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?G(n):""}function Ce(n){switch(n.tag){case 5:return G(n.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return n=Ae(n.type,!1),n;case 11:return n=Ae(n.type.render,!1),n;case 1:return n=Ae(n.type,!0),n;default:return""}}function Pe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case Ie:return"Portal";case C:return"Profiler";case R:return"StrictMode";case I:return"Suspense";case he:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case N:return(n.displayName||"Context")+".Consumer";case x:return(n._context.displayName||"Context")+".Provider";case V:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case je:return r=n.displayName||null,r!==null?r:Pe(n.type)||"Memo";case Be:r=n._payload,n=n._init;try{return Pe(n(r))}catch{}}return null}function ze(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pe(r);case 8:return r===R?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Le(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function He(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Bt(n){var r=He(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,f=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,f.call(this,v)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function ps(n){n._valueTracker||(n._valueTracker=Bt(n))}function No(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=He(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function xr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ms(n,r){var a=r.checked;return ne({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function nl(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Le(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function gs(n,r){r=r.checked,r!=null&&fe(n,"checked",r,!1)}function ki(n,r){gs(n,r);var a=Le(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?ct(n,r.type,a):r.hasOwnProperty("defaultValue")&&ct(n,r.type,Le(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function xo(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ct(n,r,a){(r!=="number"||xr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var st=Array.isArray;function vn(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Le(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function Do(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Vo(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(st(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Le(a)}}function rl(n,r){var a=Le(r.value),c=Le(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Dr(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function Oo(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ys(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?Oo(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Vr,il=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Vr=Vr||document.createElement("div"),Vr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Vr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Ni(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Or={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sl=["Webkit","ms","Moz","O"];Object.keys(Or).forEach(function(n){sl.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Or[r]=Or[n]})});function Lr(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Or.hasOwnProperty(n)&&Or[n]?(""+r).trim():r+"px"}function _s(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Lr(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Lo=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function En(n,r){if(r){if(Lo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function vs(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mr=null;function Es(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var sr=null,or=null,rt=null;function Mo(n){if(n=ua(n)){if(typeof sr!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Dl(r),sr(n.stateNode,n.type,r))}}function br(n){or?rt?rt.push(n):rt=[n]:or=n}function Fr(){if(or){var n=or,r=rt;if(rt=or=null,Mo(n),r)for(n=0;n<r.length;n++)Mo(r[n])}}function ol(n,r){return n(r)}function al(){}var Vn=!1;function ll(n,r,a){if(Vn)return n(r,a);Vn=!0;try{return ol(n,r,a)}finally{Vn=!1,(or!==null||rt!==null)&&(al(),Fr())}}function xi(n,r){var a=n.stateNode;if(a===null)return null;var c=Dl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var Ur=!1;if(m)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){Ur=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{Ur=!1}function ul(n,r,a,c,d,f,v,A,P){var j=Array.prototype.slice.call(arguments,3);try{r.apply(a,j)}catch(Q){this.onError(Q)}}var ar=!1,On=null,ws=!1,cn=null,cl={onError:function(n){ar=!0,On=n}};function hl(n,r,a,c,d,f,v,A,P){ar=!1,On=null,ul.apply(cl,arguments)}function bo(n,r,a,c,d,f,v,A,P){if(hl.apply(this,arguments),ar){if(ar){var j=On;ar=!1,On=null}else throw Error(t(198));ws||(ws=!0,cn=j)}}function wn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Fo(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function dl(n){if(wn(n)!==n)throw Error(t(188))}function fl(n){var r=n.alternate;if(!r){if(r=wn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var f=d.alternate;if(f===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===a)return dl(d),n;if(f===c)return dl(d),r;f=f.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=f;else{for(var v=!1,A=d.child;A;){if(A===a){v=!0,a=d,c=f;break}if(A===c){v=!0,c=d,a=f;break}A=A.sibling}if(!v){for(A=f.child;A;){if(A===a){v=!0,a=f,c=d;break}if(A===c){v=!0,c=f,a=d;break}A=A.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function pl(n){return n=fl(n),n!==null?Di(n):null}function Di(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Di(n);if(r!==null)return r;n=n.sibling}return null}var Uo=e.unstable_scheduleCallback,Ts=e.unstable_cancelCallback,Vi=e.unstable_shouldYield,lr=e.unstable_requestPaint,Qe=e.unstable_now,Sc=e.unstable_getCurrentPriorityLevel,Is=e.unstable_ImmediatePriority,jo=e.unstable_UserBlockingPriority,Oi=e.unstable_NormalPriority,Bo=e.unstable_LowPriority,Ss=e.unstable_IdlePriority,Li=null,Zt=null;function ml(n){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Li,n,void 0,(n.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:Mi,Ln=Math.log,hn=Math.LN2;function Mi(n){return n>>>=0,n===0?32:31-(Ln(n)/hn|0)|0}var Mn=64,Br=4194304;function Ue(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ur(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,f=n.pingedLanes,v=a&268435455;if(v!==0){var A=v&~d;A!==0?c=Ue(A):(f&=v,f!==0&&(c=Ue(f)))}else v=a&~d,v!==0?c=Ue(v):f!==0&&(c=Ue(f));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,f=r&-r,d>=f||d===16&&(f&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-en(r),d=1<<a,c|=n[a],r&=~d;return c}function bi(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fi(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,f=n.pendingLanes;0<f;){var v=31-en(f),A=1<<v,P=d[v];P===-1?((A&a)===0||(A&c)!==0)&&(d[v]=bi(A,r)):P<=r&&(n.expiredLanes|=A),f&=~A}}function zo(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function $o(){var n=Mn;return Mn<<=1,(Mn&4194240)===0&&(Mn=64),n}function qo(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Ui(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-en(r),n[r]=a}function Ac(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-en(a),f=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~f}}function Ho(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-en(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var De=0;function bn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Wo,As,Go,Ko,Qo,Fn=!1,Rs=[],Un=null,jn=null,St=null,ji=new Map,cr=new Map,tn=[],gl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zr(n,r){switch(n){case"focusin":case"focusout":Un=null;break;case"dragenter":case"dragleave":jn=null;break;case"mouseover":case"mouseout":St=null;break;case"pointerover":case"pointerout":ji.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":cr.delete(r.pointerId)}}function Tn(n,r,a,c,d,f){return n===null||n.nativeEvent!==f?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:f,targetContainers:[d]},r!==null&&(r=ua(r),r!==null&&As(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function yl(n,r,a,c,d){switch(r){case"focusin":return Un=Tn(Un,n,r,a,c,d),!0;case"dragenter":return jn=Tn(jn,n,r,a,c,d),!0;case"mouseover":return St=Tn(St,n,r,a,c,d),!0;case"pointerover":var f=d.pointerId;return ji.set(f,Tn(ji.get(f)||null,n,r,a,c,d)),!0;case"gotpointercapture":return f=d.pointerId,cr.set(f,Tn(cr.get(f)||null,n,r,a,c,d)),!0}return!1}function Cs(n){var r=qi(n.target);if(r!==null){var a=wn(r);if(a!==null){if(r=a.tag,r===13){if(r=Fo(a),r!==null){n.blockedOn=r,Qo(n.priority,function(){Go(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function We(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Ps(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Mr=c,a.target.dispatchEvent(c),Mr=null}else return r=ua(a),r!==null&&As(r),n.blockedOn=a,!1;r.shift()}return!0}function _l(n,r,a){We(n)&&a.delete(r)}function Rc(){Fn=!1,Un!==null&&We(Un)&&(Un=null),jn!==null&&We(jn)&&(jn=null),St!==null&&We(St)&&(St=null),ji.forEach(_l),cr.forEach(_l)}function $r(n,r){n.blockedOn===r&&(n.blockedOn=null,Fn||(Fn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Rc)))}function qr(n){function r(d){return $r(d,n)}if(0<Rs.length){$r(Rs[0],n);for(var a=1;a<Rs.length;a++){var c=Rs[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Un!==null&&$r(Un,n),jn!==null&&$r(jn,n),St!==null&&$r(St,n),ji.forEach(r),cr.forEach(r),a=0;a<tn.length;a++)c=tn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<tn.length&&(a=tn[0],a.blockedOn===null);)Cs(a),a.blockedOn===null&&tn.shift()}var hr=Ee.ReactCurrentBatchConfig,dr=!0;function Bn(n,r,a,c){var d=De,f=hr.transition;hr.transition=null;try{De=1,Xo(n,r,a,c)}finally{De=d,hr.transition=f}}function vl(n,r,a,c){var d=De,f=hr.transition;hr.transition=null;try{De=4,Xo(n,r,a,c)}finally{De=d,hr.transition=f}}function Xo(n,r,a,c){if(dr){var d=Ps(n,r,a,c);if(d===null)bc(n,r,c,zn,a),zr(n,c);else if(yl(d,n,r,a,c))c.stopPropagation();else if(zr(n,c),r&4&&-1<gl.indexOf(n)){for(;d!==null;){var f=ua(d);if(f!==null&&Wo(f),f=Ps(n,r,a,c),f===null&&bc(n,r,c,zn,a),f===d)break;d=f}d!==null&&c.stopPropagation()}else bc(n,r,c,null,a)}}var zn=null;function Ps(n,r,a,c){if(zn=null,n=Es(c),n=qi(n),n!==null)if(r=wn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Fo(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return zn=n,null}function ks(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sc()){case Is:return 1;case jo:return 4;case Oi:case Bo:return 16;case Ss:return 536870912;default:return 16}default:return 16}}var nn=null,Ns=null,fr=null;function El(){if(fr)return fr;var n,r=Ns,a=r.length,c,d="value"in nn?nn.value:nn.textContent,f=d.length;for(n=0;n<a&&r[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&r[a-c]===d[f-c];c++);return fr=d.slice(n,1<c?1-c:void 0)}function Bi(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function $n(){return!0}function Yo(){return!1}function Dt(n){function r(a,c,d,f,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var A in n)n.hasOwnProperty(A)&&(a=n[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?$n:Yo,this.isPropagationStopped=Yo,this}return ne(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$n)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$n)},persist:function(){},isPersistent:$n}),r}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zi=Dt(qn),Hr=ne({},qn,{view:0,detail:0}),xs=Dt(Hr),Ds,Vs,rn,$i=ne({},Hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:we,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==rn&&(rn&&n.type==="mousemove"?(Ds=n.screenX-rn.screenX,Vs=n.screenY-rn.screenY):Vs=Ds=0,rn=n),Ds)},movementY:function(n){return"movementY"in n?n.movementY:Vs}}),Jo=Dt($i),wl=ne({},$i,{dataTransfer:0}),Tl=Dt(wl),Os=ne({},Hr,{relatedTarget:0}),At=Dt(Os),Il=ne({},qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Sl=Dt(Il),Wr=ne({},qn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),u=Dt(Wr),p=ne({},qn,{data:0}),_=Dt(p),T={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},b={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ee(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=B[n])?!!r[n]:!1}function we(){return ee}var ot=ne({},Hr,{key:function(n){if(n.key){var r=T[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Bi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?b[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:we,charCode:function(n){return n.type==="keypress"?Bi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Bi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),qe=Dt(ot),ht=ne({},$i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sn=Dt(ht),pr=ne({},Hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:we}),Hn=Dt(pr),Wn=ne({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ls=Dt(Wn),Zo=ne({},$i,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),k0=Dt(Zo),N0=[9,13,27,32],Cc=m&&"CompositionEvent"in window,ea=null;m&&"documentMode"in document&&(ea=document.documentMode);var x0=m&&"TextEvent"in window&&!ea,zf=m&&(!Cc||ea&&8<ea&&11>=ea),$f=" ",qf=!1;function Hf(n,r){switch(n){case"keyup":return N0.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ms=!1;function D0(n,r){switch(n){case"compositionend":return Wf(r);case"keypress":return r.which!==32?null:(qf=!0,$f);case"textInput":return n=r.data,n===$f&&qf?null:n;default:return null}}function V0(n,r){if(Ms)return n==="compositionend"||!Cc&&Hf(n,r)?(n=El(),fr=Ns=nn=null,Ms=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return zf&&r.locale!=="ko"?null:r.data;default:return null}}var O0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!O0[n.type]:r==="textarea"}function Kf(n,r,a,c){br(c),r=kl(r,"onChange"),0<r.length&&(a=new zi("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var ta=null,na=null;function L0(n){dp(n,0)}function Al(n){var r=Bs(n);if(No(r))return n}function M0(n,r){if(n==="change")return r}var Qf=!1;if(m){var Pc;if(m){var kc="oninput"in document;if(!kc){var Xf=document.createElement("div");Xf.setAttribute("oninput","return;"),kc=typeof Xf.oninput=="function"}Pc=kc}else Pc=!1;Qf=Pc&&(!document.documentMode||9<document.documentMode)}function Yf(){ta&&(ta.detachEvent("onpropertychange",Jf),na=ta=null)}function Jf(n){if(n.propertyName==="value"&&Al(na)){var r=[];Kf(r,na,n,Es(n)),ll(L0,r)}}function b0(n,r,a){n==="focusin"?(Yf(),ta=r,na=a,ta.attachEvent("onpropertychange",Jf)):n==="focusout"&&Yf()}function F0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Al(na)}function U0(n,r){if(n==="click")return Al(r)}function j0(n,r){if(n==="input"||n==="change")return Al(r)}function B0(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var In=typeof Object.is=="function"?Object.is:B0;function ra(n,r){if(In(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(r,d)||!In(n[d],r[d]))return!1}return!0}function Zf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ep(n,r){var a=Zf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Zf(a)}}function tp(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?tp(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function np(){for(var n=window,r=xr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=xr(n.document)}return r}function Nc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function z0(n){var r=np(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&tp(a.ownerDocument.documentElement,a)){if(c!==null&&Nc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,f=Math.min(c.start,d);c=c.end===void 0?f:Math.min(c.end,d),!n.extend&&f>c&&(d=c,c=f,f=d),d=ep(a,f);var v=ep(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),f>c?(n.addRange(r),n.extend(v.node,v.offset)):(r.setEnd(v.node,v.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var $0=m&&"documentMode"in document&&11>=document.documentMode,bs=null,xc=null,ia=null,Dc=!1;function rp(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Dc||bs==null||bs!==xr(c)||(c=bs,"selectionStart"in c&&Nc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ia&&ra(ia,c)||(ia=c,c=kl(xc,"onSelect"),0<c.length&&(r=new zi("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=bs)))}function Rl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Fs={animationend:Rl("Animation","AnimationEnd"),animationiteration:Rl("Animation","AnimationIteration"),animationstart:Rl("Animation","AnimationStart"),transitionend:Rl("Transition","TransitionEnd")},Vc={},ip={};m&&(ip=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function Cl(n){if(Vc[n])return Vc[n];if(!Fs[n])return n;var r=Fs[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in ip)return Vc[n]=r[a];return n}var sp=Cl("animationend"),op=Cl("animationiteration"),ap=Cl("animationstart"),lp=Cl("transitionend"),up=new Map,cp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(n,r){up.set(n,r),l(r,[n])}for(var Oc=0;Oc<cp.length;Oc++){var Lc=cp[Oc],q0=Lc.toLowerCase(),H0=Lc[0].toUpperCase()+Lc.slice(1);Gr(q0,"on"+H0)}Gr(sp,"onAnimationEnd"),Gr(op,"onAnimationIteration"),Gr(ap,"onAnimationStart"),Gr("dblclick","onDoubleClick"),Gr("focusin","onFocus"),Gr("focusout","onBlur"),Gr(lp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),W0=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function hp(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,bo(c,r,void 0,n),n.currentTarget=null}function dp(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var f=void 0;if(r)for(var v=c.length-1;0<=v;v--){var A=c[v],P=A.instance,j=A.currentTarget;if(A=A.listener,P!==f&&d.isPropagationStopped())break e;hp(d,A,j),f=P}else for(v=0;v<c.length;v++){if(A=c[v],P=A.instance,j=A.currentTarget,A=A.listener,P!==f&&d.isPropagationStopped())break e;hp(d,A,j),f=P}}}if(ws)throw n=cn,ws=!1,cn=null,n}function Xe(n,r){var a=r[$c];a===void 0&&(a=r[$c]=new Set);var c=n+"__bubble";a.has(c)||(fp(r,n,2,!1),a.add(c))}function Mc(n,r,a){var c=0;r&&(c|=4),fp(a,n,c,r)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function oa(n){if(!n[Pl]){n[Pl]=!0,s.forEach(function(a){a!=="selectionchange"&&(W0.has(a)||Mc(a,!1,n),Mc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Pl]||(r[Pl]=!0,Mc("selectionchange",!1,r))}}function fp(n,r,a,c){switch(ks(r)){case 1:var d=Bn;break;case 4:d=vl;break;default:d=Xo}a=d.bind(null,r,a,n),d=void 0,!Ur||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function bc(n,r,a,c,d){var f=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var A=c.stateNode.containerInfo;if(A===d||A.nodeType===8&&A.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;A!==null;){if(v=qi(A),v===null)return;if(P=v.tag,P===5||P===6){c=f=v;continue e}A=A.parentNode}}c=c.return}ll(function(){var j=f,Q=Es(a),X=[];e:{var K=up.get(n);if(K!==void 0){var re=zi,ae=n;switch(n){case"keypress":if(Bi(a)===0)break e;case"keydown":case"keyup":re=qe;break;case"focusin":ae="focus",re=At;break;case"focusout":ae="blur",re=At;break;case"beforeblur":case"afterblur":re=At;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=Jo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=Tl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=Hn;break;case sp:case op:case ap:re=Sl;break;case lp:re=Ls;break;case"scroll":re=xs;break;case"wheel":re=k0;break;case"copy":case"cut":case"paste":re=u;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=sn}var le=(r&4)!==0,at=!le&&n==="scroll",M=le?K!==null?K+"Capture":null:K;le=[];for(var D=j,F;D!==null;){F=D;var Y=F.stateNode;if(F.tag===5&&Y!==null&&(F=Y,M!==null&&(Y=xi(D,M),Y!=null&&le.push(aa(D,Y,F)))),at)break;D=D.return}0<le.length&&(K=new re(K,ae,null,a,Q),X.push({event:K,listeners:le}))}}if((r&7)===0){e:{if(K=n==="mouseover"||n==="pointerover",re=n==="mouseout"||n==="pointerout",K&&a!==Mr&&(ae=a.relatedTarget||a.fromElement)&&(qi(ae)||ae[mr]))break e;if((re||K)&&(K=Q.window===Q?Q:(K=Q.ownerDocument)?K.defaultView||K.parentWindow:window,re?(ae=a.relatedTarget||a.toElement,re=j,ae=ae?qi(ae):null,ae!==null&&(at=wn(ae),ae!==at||ae.tag!==5&&ae.tag!==6)&&(ae=null)):(re=null,ae=j),re!==ae)){if(le=Jo,Y="onMouseLeave",M="onMouseEnter",D="mouse",(n==="pointerout"||n==="pointerover")&&(le=sn,Y="onPointerLeave",M="onPointerEnter",D="pointer"),at=re==null?K:Bs(re),F=ae==null?K:Bs(ae),K=new le(Y,D+"leave",re,a,Q),K.target=at,K.relatedTarget=F,Y=null,qi(Q)===j&&(le=new le(M,D+"enter",ae,a,Q),le.target=F,le.relatedTarget=at,Y=le),at=Y,re&&ae)t:{for(le=re,M=ae,D=0,F=le;F;F=Us(F))D++;for(F=0,Y=M;Y;Y=Us(Y))F++;for(;0<D-F;)le=Us(le),D--;for(;0<F-D;)M=Us(M),F--;for(;D--;){if(le===M||M!==null&&le===M.alternate)break t;le=Us(le),M=Us(M)}le=null}else le=null;re!==null&&pp(X,K,re,le,!1),ae!==null&&at!==null&&pp(X,at,ae,le,!0)}}e:{if(K=j?Bs(j):window,re=K.nodeName&&K.nodeName.toLowerCase(),re==="select"||re==="input"&&K.type==="file")var ue=M0;else if(Gf(K))if(Qf)ue=j0;else{ue=F0;var pe=b0}else(re=K.nodeName)&&re.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(ue=U0);if(ue&&(ue=ue(n,j))){Kf(X,ue,a,Q);break e}pe&&pe(n,K,j),n==="focusout"&&(pe=K._wrapperState)&&pe.controlled&&K.type==="number"&&ct(K,"number",K.value)}switch(pe=j?Bs(j):window,n){case"focusin":(Gf(pe)||pe.contentEditable==="true")&&(bs=pe,xc=j,ia=null);break;case"focusout":ia=xc=bs=null;break;case"mousedown":Dc=!0;break;case"contextmenu":case"mouseup":case"dragend":Dc=!1,rp(X,a,Q);break;case"selectionchange":if($0)break;case"keydown":case"keyup":rp(X,a,Q)}var me;if(Cc)e:{switch(n){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else Ms?Hf(n,a)&&(ye="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(zf&&a.locale!=="ko"&&(Ms||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Ms&&(me=El()):(nn=Q,Ns="value"in nn?nn.value:nn.textContent,Ms=!0)),pe=kl(j,ye),0<pe.length&&(ye=new _(ye,n,null,a,Q),X.push({event:ye,listeners:pe}),me?ye.data=me:(me=Wf(a),me!==null&&(ye.data=me)))),(me=x0?D0(n,a):V0(n,a))&&(j=kl(j,"onBeforeInput"),0<j.length&&(Q=new _("onBeforeInput","beforeinput",null,a,Q),X.push({event:Q,listeners:j}),Q.data=me))}dp(X,r)})}function aa(n,r,a){return{instance:n,listener:r,currentTarget:a}}function kl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=xi(n,a),f!=null&&c.unshift(aa(n,f,d)),f=xi(n,r),f!=null&&c.push(aa(n,f,d))),n=n.return}return c}function Us(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function pp(n,r,a,c,d){for(var f=r._reactName,v=[];a!==null&&a!==c;){var A=a,P=A.alternate,j=A.stateNode;if(P!==null&&P===c)break;A.tag===5&&j!==null&&(A=j,d?(P=xi(a,f),P!=null&&v.unshift(aa(a,P,A))):d||(P=xi(a,f),P!=null&&v.push(aa(a,P,A)))),a=a.return}v.length!==0&&n.push({event:r,listeners:v})}var G0=/\r\n?/g,K0=/\u0000|\uFFFD/g;function mp(n){return(typeof n=="string"?n:""+n).replace(G0,`
`).replace(K0,"")}function Nl(n,r,a){if(r=mp(r),mp(n)!==r&&a)throw Error(t(425))}function xl(){}var Fc=null,Uc=null;function jc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Bc=typeof setTimeout=="function"?setTimeout:void 0,Q0=typeof clearTimeout=="function"?clearTimeout:void 0,gp=typeof Promise=="function"?Promise:void 0,X0=typeof queueMicrotask=="function"?queueMicrotask:typeof gp<"u"?function(n){return gp.resolve(null).then(n).catch(Y0)}:Bc;function Y0(n){setTimeout(function(){throw n})}function zc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),qr(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);qr(r)}function Kr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function yp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var js=Math.random().toString(36).slice(2),Gn="__reactFiber$"+js,la="__reactProps$"+js,mr="__reactContainer$"+js,$c="__reactEvents$"+js,J0="__reactListeners$"+js,Z0="__reactHandles$"+js;function qi(n){var r=n[Gn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[mr]||a[Gn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=yp(n);n!==null;){if(a=n[Gn])return a;n=yp(n)}return r}n=a,a=n.parentNode}return null}function ua(n){return n=n[Gn]||n[mr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Bs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Dl(n){return n[la]||null}var qc=[],zs=-1;function Qr(n){return{current:n}}function Ye(n){0>zs||(n.current=qc[zs],qc[zs]=null,zs--)}function Ge(n,r){zs++,qc[zs]=n.current,n.current=r}var Xr={},Vt=Qr(Xr),qt=Qr(!1),Hi=Xr;function $s(n,r){var a=n.type.contextTypes;if(!a)return Xr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in a)d[f]=r[f];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Ht(n){return n=n.childContextTypes,n!=null}function Vl(){Ye(qt),Ye(Vt)}function _p(n,r,a){if(Vt.current!==Xr)throw Error(t(168));Ge(Vt,r),Ge(qt,a)}function vp(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,ze(n)||"Unknown",d));return ne({},a,c)}function Ol(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Xr,Hi=Vt.current,Ge(Vt,n),Ge(qt,qt.current),!0}function Ep(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=vp(n,r,Hi),c.__reactInternalMemoizedMergedChildContext=n,Ye(qt),Ye(Vt),Ge(Vt,n)):Ye(qt),Ge(qt,a)}var gr=null,Ll=!1,Hc=!1;function wp(n){gr===null?gr=[n]:gr.push(n)}function e1(n){Ll=!0,wp(n)}function Yr(){if(!Hc&&gr!==null){Hc=!0;var n=0,r=De;try{var a=gr;for(De=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}gr=null,Ll=!1}catch(d){throw gr!==null&&(gr=gr.slice(n+1)),Uo(Is,Yr),d}finally{De=r,Hc=!1}}return null}var qs=[],Hs=0,Ml=null,bl=0,dn=[],fn=0,Wi=null,yr=1,_r="";function Gi(n,r){qs[Hs++]=bl,qs[Hs++]=Ml,Ml=n,bl=r}function Tp(n,r,a){dn[fn++]=yr,dn[fn++]=_r,dn[fn++]=Wi,Wi=n;var c=yr;n=_r;var d=32-en(c)-1;c&=~(1<<d),a+=1;var f=32-en(r)+d;if(30<f){var v=d-d%5;f=(c&(1<<v)-1).toString(32),c>>=v,d-=v,yr=1<<32-en(r)+d|a<<d|c,_r=f+n}else yr=1<<f|a<<d|c,_r=n}function Wc(n){n.return!==null&&(Gi(n,1),Tp(n,1,0))}function Gc(n){for(;n===Ml;)Ml=qs[--Hs],qs[Hs]=null,bl=qs[--Hs],qs[Hs]=null;for(;n===Wi;)Wi=dn[--fn],dn[fn]=null,_r=dn[--fn],dn[fn]=null,yr=dn[--fn],dn[fn]=null}var on=null,an=null,Ze=!1,Sn=null;function Ip(n,r){var a=yn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function Sp(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,on=n,an=Kr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,on=n,an=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Wi!==null?{id:yr,overflow:_r}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=yn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,on=n,an=null,!0):!1;default:return!1}}function Kc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Qc(n){if(Ze){var r=an;if(r){var a=r;if(!Sp(n,r)){if(Kc(n))throw Error(t(418));r=Kr(a.nextSibling);var c=on;r&&Sp(n,r)?Ip(c,a):(n.flags=n.flags&-4097|2,Ze=!1,on=n)}}else{if(Kc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ze=!1,on=n}}}function Ap(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;on=n}function Fl(n){if(n!==on)return!1;if(!Ze)return Ap(n),Ze=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!jc(n.type,n.memoizedProps)),r&&(r=an)){if(Kc(n))throw Rp(),Error(t(418));for(;r;)Ip(n,r),r=Kr(r.nextSibling)}if(Ap(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){an=Kr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}an=null}}else an=on?Kr(n.stateNode.nextSibling):null;return!0}function Rp(){for(var n=an;n;)n=Kr(n.nextSibling)}function Ws(){an=on=null,Ze=!1}function Xc(n){Sn===null?Sn=[n]:Sn.push(n)}var t1=Ee.ReactCurrentBatchConfig;function ca(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,f=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===f?r.ref:(r=function(v){var A=d.refs;v===null?delete A[f]:A[f]=v},r._stringRef=f,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ul(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Cp(n){var r=n._init;return r(n._payload)}function Pp(n){function r(M,D){if(n){var F=M.deletions;F===null?(M.deletions=[D],M.flags|=16):F.push(D)}}function a(M,D){if(!n)return null;for(;D!==null;)r(M,D),D=D.sibling;return null}function c(M,D){for(M=new Map;D!==null;)D.key!==null?M.set(D.key,D):M.set(D.index,D),D=D.sibling;return M}function d(M,D){return M=si(M,D),M.index=0,M.sibling=null,M}function f(M,D,F){return M.index=F,n?(F=M.alternate,F!==null?(F=F.index,F<D?(M.flags|=2,D):F):(M.flags|=2,D)):(M.flags|=1048576,D)}function v(M){return n&&M.alternate===null&&(M.flags|=2),M}function A(M,D,F,Y){return D===null||D.tag!==6?(D=Bh(F,M.mode,Y),D.return=M,D):(D=d(D,F),D.return=M,D)}function P(M,D,F,Y){var ue=F.type;return ue===k?Q(M,D,F.props.children,Y,F.key):D!==null&&(D.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===Be&&Cp(ue)===D.type)?(Y=d(D,F.props),Y.ref=ca(M,D,F),Y.return=M,Y):(Y=uu(F.type,F.key,F.props,null,M.mode,Y),Y.ref=ca(M,D,F),Y.return=M,Y)}function j(M,D,F,Y){return D===null||D.tag!==4||D.stateNode.containerInfo!==F.containerInfo||D.stateNode.implementation!==F.implementation?(D=zh(F,M.mode,Y),D.return=M,D):(D=d(D,F.children||[]),D.return=M,D)}function Q(M,D,F,Y,ue){return D===null||D.tag!==7?(D=ts(F,M.mode,Y,ue),D.return=M,D):(D=d(D,F),D.return=M,D)}function X(M,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Bh(""+D,M.mode,F),D.return=M,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Oe:return F=uu(D.type,D.key,D.props,null,M.mode,F),F.ref=ca(M,null,D),F.return=M,F;case Ie:return D=zh(D,M.mode,F),D.return=M,D;case Be:var Y=D._init;return X(M,Y(D._payload),F)}if(st(D)||ce(D))return D=ts(D,M.mode,F,null),D.return=M,D;Ul(M,D)}return null}function K(M,D,F,Y){var ue=D!==null?D.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return ue!==null?null:A(M,D,""+F,Y);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Oe:return F.key===ue?P(M,D,F,Y):null;case Ie:return F.key===ue?j(M,D,F,Y):null;case Be:return ue=F._init,K(M,D,ue(F._payload),Y)}if(st(F)||ce(F))return ue!==null?null:Q(M,D,F,Y,null);Ul(M,F)}return null}function re(M,D,F,Y,ue){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return M=M.get(F)||null,A(D,M,""+Y,ue);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case Oe:return M=M.get(Y.key===null?F:Y.key)||null,P(D,M,Y,ue);case Ie:return M=M.get(Y.key===null?F:Y.key)||null,j(D,M,Y,ue);case Be:var pe=Y._init;return re(M,D,F,pe(Y._payload),ue)}if(st(Y)||ce(Y))return M=M.get(F)||null,Q(D,M,Y,ue,null);Ul(D,Y)}return null}function ae(M,D,F,Y){for(var ue=null,pe=null,me=D,ye=D=0,Tt=null;me!==null&&ye<F.length;ye++){me.index>ye?(Tt=me,me=null):Tt=me.sibling;var be=K(M,me,F[ye],Y);if(be===null){me===null&&(me=Tt);break}n&&me&&be.alternate===null&&r(M,me),D=f(be,D,ye),pe===null?ue=be:pe.sibling=be,pe=be,me=Tt}if(ye===F.length)return a(M,me),Ze&&Gi(M,ye),ue;if(me===null){for(;ye<F.length;ye++)me=X(M,F[ye],Y),me!==null&&(D=f(me,D,ye),pe===null?ue=me:pe.sibling=me,pe=me);return Ze&&Gi(M,ye),ue}for(me=c(M,me);ye<F.length;ye++)Tt=re(me,M,ye,F[ye],Y),Tt!==null&&(n&&Tt.alternate!==null&&me.delete(Tt.key===null?ye:Tt.key),D=f(Tt,D,ye),pe===null?ue=Tt:pe.sibling=Tt,pe=Tt);return n&&me.forEach(function(oi){return r(M,oi)}),Ze&&Gi(M,ye),ue}function le(M,D,F,Y){var ue=ce(F);if(typeof ue!="function")throw Error(t(150));if(F=ue.call(F),F==null)throw Error(t(151));for(var pe=ue=null,me=D,ye=D=0,Tt=null,be=F.next();me!==null&&!be.done;ye++,be=F.next()){me.index>ye?(Tt=me,me=null):Tt=me.sibling;var oi=K(M,me,be.value,Y);if(oi===null){me===null&&(me=Tt);break}n&&me&&oi.alternate===null&&r(M,me),D=f(oi,D,ye),pe===null?ue=oi:pe.sibling=oi,pe=oi,me=Tt}if(be.done)return a(M,me),Ze&&Gi(M,ye),ue;if(me===null){for(;!be.done;ye++,be=F.next())be=X(M,be.value,Y),be!==null&&(D=f(be,D,ye),pe===null?ue=be:pe.sibling=be,pe=be);return Ze&&Gi(M,ye),ue}for(me=c(M,me);!be.done;ye++,be=F.next())be=re(me,M,ye,be.value,Y),be!==null&&(n&&be.alternate!==null&&me.delete(be.key===null?ye:be.key),D=f(be,D,ye),pe===null?ue=be:pe.sibling=be,pe=be);return n&&me.forEach(function(O1){return r(M,O1)}),Ze&&Gi(M,ye),ue}function at(M,D,F,Y){if(typeof F=="object"&&F!==null&&F.type===k&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case Oe:e:{for(var ue=F.key,pe=D;pe!==null;){if(pe.key===ue){if(ue=F.type,ue===k){if(pe.tag===7){a(M,pe.sibling),D=d(pe,F.props.children),D.return=M,M=D;break e}}else if(pe.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===Be&&Cp(ue)===pe.type){a(M,pe.sibling),D=d(pe,F.props),D.ref=ca(M,pe,F),D.return=M,M=D;break e}a(M,pe);break}else r(M,pe);pe=pe.sibling}F.type===k?(D=ts(F.props.children,M.mode,Y,F.key),D.return=M,M=D):(Y=uu(F.type,F.key,F.props,null,M.mode,Y),Y.ref=ca(M,D,F),Y.return=M,M=Y)}return v(M);case Ie:e:{for(pe=F.key;D!==null;){if(D.key===pe)if(D.tag===4&&D.stateNode.containerInfo===F.containerInfo&&D.stateNode.implementation===F.implementation){a(M,D.sibling),D=d(D,F.children||[]),D.return=M,M=D;break e}else{a(M,D);break}else r(M,D);D=D.sibling}D=zh(F,M.mode,Y),D.return=M,M=D}return v(M);case Be:return pe=F._init,at(M,D,pe(F._payload),Y)}if(st(F))return ae(M,D,F,Y);if(ce(F))return le(M,D,F,Y);Ul(M,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,D!==null&&D.tag===6?(a(M,D.sibling),D=d(D,F),D.return=M,M=D):(a(M,D),D=Bh(F,M.mode,Y),D.return=M,M=D),v(M)):a(M,D)}return at}var Gs=Pp(!0),kp=Pp(!1),jl=Qr(null),Bl=null,Ks=null,Yc=null;function Jc(){Yc=Ks=Bl=null}function Zc(n){var r=jl.current;Ye(jl),n._currentValue=r}function eh(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function Qs(n,r){Bl=n,Yc=Ks=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Wt=!0),n.firstContext=null)}function pn(n){var r=n._currentValue;if(Yc!==n)if(n={context:n,memoizedValue:r,next:null},Ks===null){if(Bl===null)throw Error(t(308));Ks=n,Bl.dependencies={lanes:0,firstContext:n}}else Ks=Ks.next=n;return r}var Ki=null;function th(n){Ki===null?Ki=[n]:Ki.push(n)}function Np(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,th(r)):(a.next=d.next,d.next=a),r.interleaved=a,vr(n,c)}function vr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Jr=!1;function nh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Er(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Zr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Me&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,vr(n,a)}return d=c.interleaved,d===null?(r.next=r,th(c)):(r.next=d.next,d.next=r),c.interleaved=r,vr(n,a)}function zl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Ho(n,a)}}function Dp(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};f===null?d=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?d=f=r:f=f.next=r}else d=f=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function $l(n,r,a,c){var d=n.updateQueue;Jr=!1;var f=d.firstBaseUpdate,v=d.lastBaseUpdate,A=d.shared.pending;if(A!==null){d.shared.pending=null;var P=A,j=P.next;P.next=null,v===null?f=j:v.next=j,v=P;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,A=Q.lastBaseUpdate,A!==v&&(A===null?Q.firstBaseUpdate=j:A.next=j,Q.lastBaseUpdate=P))}if(f!==null){var X=d.baseState;v=0,Q=j=P=null,A=f;do{var K=A.lane,re=A.eventTime;if((c&K)===K){Q!==null&&(Q=Q.next={eventTime:re,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var ae=n,le=A;switch(K=r,re=a,le.tag){case 1:if(ae=le.payload,typeof ae=="function"){X=ae.call(re,X,K);break e}X=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=le.payload,K=typeof ae=="function"?ae.call(re,X,K):ae,K==null)break e;X=ne({},X,K);break e;case 2:Jr=!0}}A.callback!==null&&A.lane!==0&&(n.flags|=64,K=d.effects,K===null?d.effects=[A]:K.push(A))}else re={eventTime:re,lane:K,tag:A.tag,payload:A.payload,callback:A.callback,next:null},Q===null?(j=Q=re,P=X):Q=Q.next=re,v|=K;if(A=A.next,A===null){if(A=d.shared.pending,A===null)break;K=A,A=K.next,K.next=null,d.lastBaseUpdate=K,d.shared.pending=null}}while(!0);if(Q===null&&(P=X),d.baseState=P,d.firstBaseUpdate=j,d.lastBaseUpdate=Q,r=d.shared.interleaved,r!==null){d=r;do v|=d.lane,d=d.next;while(d!==r)}else f===null&&(d.shared.lanes=0);Yi|=v,n.lanes=v,n.memoizedState=X}}function Vp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ha={},Kn=Qr(ha),da=Qr(ha),fa=Qr(ha);function Qi(n){if(n===ha)throw Error(t(174));return n}function rh(n,r){switch(Ge(fa,r),Ge(da,n),Ge(Kn,ha),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ys(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ys(r,n)}Ye(Kn),Ge(Kn,r)}function Xs(){Ye(Kn),Ye(da),Ye(fa)}function Op(n){Qi(fa.current);var r=Qi(Kn.current),a=ys(r,n.type);r!==a&&(Ge(da,n),Ge(Kn,a))}function ih(n){da.current===n&&(Ye(Kn),Ye(da))}var et=Qr(0);function ql(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var sh=[];function oh(){for(var n=0;n<sh.length;n++)sh[n]._workInProgressVersionPrimary=null;sh.length=0}var Hl=Ee.ReactCurrentDispatcher,ah=Ee.ReactCurrentBatchConfig,Xi=0,tt=null,yt=null,Et=null,Wl=!1,pa=!1,ma=0,n1=0;function Ot(){throw Error(t(321))}function lh(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!In(n[a],r[a]))return!1;return!0}function uh(n,r,a,c,d,f){if(Xi=f,tt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Hl.current=n===null||n.memoizedState===null?o1:a1,n=a(c,d),pa){f=0;do{if(pa=!1,ma=0,25<=f)throw Error(t(301));f+=1,Et=yt=null,r.updateQueue=null,Hl.current=l1,n=a(c,d)}while(pa)}if(Hl.current=Ql,r=yt!==null&&yt.next!==null,Xi=0,Et=yt=tt=null,Wl=!1,r)throw Error(t(300));return n}function ch(){var n=ma!==0;return ma=0,n}function Qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?tt.memoizedState=Et=n:Et=Et.next=n,Et}function mn(){if(yt===null){var n=tt.alternate;n=n!==null?n.memoizedState:null}else n=yt.next;var r=Et===null?tt.memoizedState:Et.next;if(r!==null)Et=r,yt=n;else{if(n===null)throw Error(t(310));yt=n,n={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},Et===null?tt.memoizedState=Et=n:Et=Et.next=n}return Et}function ga(n,r){return typeof r=="function"?r(n):r}function hh(n){var r=mn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=yt,d=c.baseQueue,f=a.pending;if(f!==null){if(d!==null){var v=d.next;d.next=f.next,f.next=v}c.baseQueue=d=f,a.pending=null}if(d!==null){f=d.next,c=c.baseState;var A=v=null,P=null,j=f;do{var Q=j.lane;if((Xi&Q)===Q)P!==null&&(P=P.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),c=j.hasEagerState?j.eagerState:n(c,j.action);else{var X={lane:Q,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};P===null?(A=P=X,v=c):P=P.next=X,tt.lanes|=Q,Yi|=Q}j=j.next}while(j!==null&&j!==f);P===null?v=c:P.next=A,In(c,r.memoizedState)||(Wt=!0),r.memoizedState=c,r.baseState=v,r.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do f=d.lane,tt.lanes|=f,Yi|=f,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function dh(n){var r=mn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,f=r.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do f=n(f,v.action),v=v.next;while(v!==d);In(f,r.memoizedState)||(Wt=!0),r.memoizedState=f,r.baseQueue===null&&(r.baseState=f),a.lastRenderedState=f}return[f,c]}function Lp(){}function Mp(n,r){var a=tt,c=mn(),d=r(),f=!In(c.memoizedState,d);if(f&&(c.memoizedState=d,Wt=!0),c=c.queue,fh(Up.bind(null,a,c,n),[n]),c.getSnapshot!==r||f||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,ya(9,Fp.bind(null,a,c,d,r),void 0,null),wt===null)throw Error(t(349));(Xi&30)!==0||bp(a,r,d)}return d}function bp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=tt.updateQueue,r===null?(r={lastEffect:null,stores:null},tt.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function Fp(n,r,a,c){r.value=a,r.getSnapshot=c,jp(r)&&Bp(n)}function Up(n,r,a){return a(function(){jp(r)&&Bp(n)})}function jp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!In(n,a)}catch{return!0}}function Bp(n){var r=vr(n,1);r!==null&&Pn(r,n,1,-1)}function zp(n){var r=Qn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:n},r.queue=n,n=n.dispatch=s1.bind(null,tt,n),[r.memoizedState,n]}function ya(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=tt.updateQueue,r===null?(r={lastEffect:null,stores:null},tt.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function $p(){return mn().memoizedState}function Gl(n,r,a,c){var d=Qn();tt.flags|=n,d.memoizedState=ya(1|r,a,void 0,c===void 0?null:c)}function Kl(n,r,a,c){var d=mn();c=c===void 0?null:c;var f=void 0;if(yt!==null){var v=yt.memoizedState;if(f=v.destroy,c!==null&&lh(c,v.deps)){d.memoizedState=ya(r,a,f,c);return}}tt.flags|=n,d.memoizedState=ya(1|r,a,f,c)}function qp(n,r){return Gl(8390656,8,n,r)}function fh(n,r){return Kl(2048,8,n,r)}function Hp(n,r){return Kl(4,2,n,r)}function Wp(n,r){return Kl(4,4,n,r)}function Gp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Kp(n,r,a){return a=a!=null?a.concat([n]):null,Kl(4,4,Gp.bind(null,r,n),a)}function ph(){}function Qp(n,r){var a=mn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&lh(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function Xp(n,r){var a=mn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&lh(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Yp(n,r,a){return(Xi&21)===0?(n.baseState&&(n.baseState=!1,Wt=!0),n.memoizedState=a):(In(a,r)||(a=$o(),tt.lanes|=a,Yi|=a,n.baseState=!0),r)}function r1(n,r){var a=De;De=a!==0&&4>a?a:4,n(!0);var c=ah.transition;ah.transition={};try{n(!1),r()}finally{De=a,ah.transition=c}}function Jp(){return mn().memoizedState}function i1(n,r,a){var c=ri(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Zp(n))em(r,a);else if(a=Np(n,r,a,c),a!==null){var d=$t();Pn(a,n,c,d),tm(a,r,c)}}function s1(n,r,a){var c=ri(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Zp(n))em(r,d);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=r.lastRenderedReducer,f!==null))try{var v=r.lastRenderedState,A=f(v,a);if(d.hasEagerState=!0,d.eagerState=A,In(A,v)){var P=r.interleaved;P===null?(d.next=d,th(r)):(d.next=P.next,P.next=d),r.interleaved=d;return}}catch{}finally{}a=Np(n,r,d,c),a!==null&&(d=$t(),Pn(a,n,c,d),tm(a,r,c))}}function Zp(n){var r=n.alternate;return n===tt||r!==null&&r===tt}function em(n,r){pa=Wl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function tm(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Ho(n,a)}}var Ql={readContext:pn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},o1={readContext:pn,useCallback:function(n,r){return Qn().memoizedState=[n,r===void 0?null:r],n},useContext:pn,useEffect:qp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Gl(4194308,4,Gp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Gl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Gl(4,2,n,r)},useMemo:function(n,r){var a=Qn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Qn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=i1.bind(null,tt,n),[c.memoizedState,n]},useRef:function(n){var r=Qn();return n={current:n},r.memoizedState=n},useState:zp,useDebugValue:ph,useDeferredValue:function(n){return Qn().memoizedState=n},useTransition:function(){var n=zp(!1),r=n[0];return n=r1.bind(null,n[1]),Qn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=tt,d=Qn();if(Ze){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),wt===null)throw Error(t(349));(Xi&30)!==0||bp(c,r,a)}d.memoizedState=a;var f={value:a,getSnapshot:r};return d.queue=f,qp(Up.bind(null,c,f,n),[n]),c.flags|=2048,ya(9,Fp.bind(null,c,f,a,r),void 0,null),a},useId:function(){var n=Qn(),r=wt.identifierPrefix;if(Ze){var a=_r,c=yr;a=(c&~(1<<32-en(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=ma++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=n1++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},a1={readContext:pn,useCallback:Qp,useContext:pn,useEffect:fh,useImperativeHandle:Kp,useInsertionEffect:Hp,useLayoutEffect:Wp,useMemo:Xp,useReducer:hh,useRef:$p,useState:function(){return hh(ga)},useDebugValue:ph,useDeferredValue:function(n){var r=mn();return Yp(r,yt.memoizedState,n)},useTransition:function(){var n=hh(ga)[0],r=mn().memoizedState;return[n,r]},useMutableSource:Lp,useSyncExternalStore:Mp,useId:Jp,unstable_isNewReconciler:!1},l1={readContext:pn,useCallback:Qp,useContext:pn,useEffect:fh,useImperativeHandle:Kp,useInsertionEffect:Hp,useLayoutEffect:Wp,useMemo:Xp,useReducer:dh,useRef:$p,useState:function(){return dh(ga)},useDebugValue:ph,useDeferredValue:function(n){var r=mn();return yt===null?r.memoizedState=n:Yp(r,yt.memoizedState,n)},useTransition:function(){var n=dh(ga)[0],r=mn().memoizedState;return[n,r]},useMutableSource:Lp,useSyncExternalStore:Mp,useId:Jp,unstable_isNewReconciler:!1};function An(n,r){if(n&&n.defaultProps){r=ne({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function mh(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:ne({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Xl={isMounted:function(n){return(n=n._reactInternals)?wn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=$t(),d=ri(n),f=Er(c,d);f.payload=r,a!=null&&(f.callback=a),r=Zr(n,f,d),r!==null&&(Pn(r,n,d,c),zl(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=$t(),d=ri(n),f=Er(c,d);f.tag=1,f.payload=r,a!=null&&(f.callback=a),r=Zr(n,f,d),r!==null&&(Pn(r,n,d,c),zl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=$t(),c=ri(n),d=Er(a,c);d.tag=2,r!=null&&(d.callback=r),r=Zr(n,d,c),r!==null&&(Pn(r,n,c,a),zl(r,n,c))}};function nm(n,r,a,c,d,f,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,f,v):r.prototype&&r.prototype.isPureReactComponent?!ra(a,c)||!ra(d,f):!0}function rm(n,r,a){var c=!1,d=Xr,f=r.contextType;return typeof f=="object"&&f!==null?f=pn(f):(d=Ht(r)?Hi:Vt.current,c=r.contextTypes,f=(c=c!=null)?$s(n,d):Xr),r=new r(a,f),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Xl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=f),r}function im(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Xl.enqueueReplaceState(r,r.state,null)}function gh(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},nh(n);var f=r.contextType;typeof f=="object"&&f!==null?d.context=pn(f):(f=Ht(r)?Hi:Vt.current,d.context=$s(n,f)),d.state=n.memoizedState,f=r.getDerivedStateFromProps,typeof f=="function"&&(mh(n,r,f,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Xl.enqueueReplaceState(d,d.state,null),$l(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ys(n,r){try{var a="",c=r;do a+=Ce(c),c=c.return;while(c);var d=a}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:n,source:r,stack:d,digest:null}}function yh(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function _h(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var u1=typeof WeakMap=="function"?WeakMap:Map;function sm(n,r,a){a=Er(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){ru||(ru=!0,Vh=c),_h(n,r)},a}function om(n,r,a){a=Er(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){_h(n,r)}}var f=n.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(a.callback=function(){_h(n,r),typeof c!="function"&&(ti===null?ti=new Set([this]):ti.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})}),a}function am(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new u1;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=I1.bind(null,n,r,a),r.then(n,n))}function lm(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function um(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Er(-1,1),r.tag=2,Zr(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var c1=Ee.ReactCurrentOwner,Wt=!1;function zt(n,r,a,c){r.child=n===null?kp(r,null,a,c):Gs(r,n.child,a,c)}function cm(n,r,a,c,d){a=a.render;var f=r.ref;return Qs(r,d),c=uh(n,r,a,c,f,d),a=ch(),n!==null&&!Wt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,wr(n,r,d)):(Ze&&a&&Wc(r),r.flags|=1,zt(n,r,c,d),r.child)}function hm(n,r,a,c,d){if(n===null){var f=a.type;return typeof f=="function"&&!jh(f)&&f.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=f,dm(n,r,f,c,d)):(n=uu(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(f=n.child,(n.lanes&d)===0){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:ra,a(v,c)&&n.ref===r.ref)return wr(n,r,d)}return r.flags|=1,n=si(f,c),n.ref=r.ref,n.return=r,r.child=n}function dm(n,r,a,c,d){if(n!==null){var f=n.memoizedProps;if(ra(f,c)&&n.ref===r.ref)if(Wt=!1,r.pendingProps=c=f,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Wt=!0);else return r.lanes=n.lanes,wr(n,r,d)}return vh(n,r,a,c,d)}function fm(n,r,a){var c=r.pendingProps,d=c.children,f=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(Zs,ln),ln|=a;else{if((a&1073741824)===0)return n=f!==null?f.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Ge(Zs,ln),ln|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=f!==null?f.baseLanes:a,Ge(Zs,ln),ln|=c}else f!==null?(c=f.baseLanes|a,r.memoizedState=null):c=a,Ge(Zs,ln),ln|=c;return zt(n,r,d,a),r.child}function pm(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function vh(n,r,a,c,d){var f=Ht(a)?Hi:Vt.current;return f=$s(r,f),Qs(r,d),a=uh(n,r,a,c,f,d),c=ch(),n!==null&&!Wt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,wr(n,r,d)):(Ze&&c&&Wc(r),r.flags|=1,zt(n,r,a,d),r.child)}function mm(n,r,a,c,d){if(Ht(a)){var f=!0;Ol(r)}else f=!1;if(Qs(r,d),r.stateNode===null)Jl(n,r),rm(r,a,c),gh(r,a,c,d),c=!0;else if(n===null){var v=r.stateNode,A=r.memoizedProps;v.props=A;var P=v.context,j=a.contextType;typeof j=="object"&&j!==null?j=pn(j):(j=Ht(a)?Hi:Vt.current,j=$s(r,j));var Q=a.getDerivedStateFromProps,X=typeof Q=="function"||typeof v.getSnapshotBeforeUpdate=="function";X||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(A!==c||P!==j)&&im(r,v,c,j),Jr=!1;var K=r.memoizedState;v.state=K,$l(r,c,v,d),P=r.memoizedState,A!==c||K!==P||qt.current||Jr?(typeof Q=="function"&&(mh(r,a,Q,c),P=r.memoizedState),(A=Jr||nm(r,a,A,c,K,P,j))?(X||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(r.flags|=4194308)):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=P),v.props=c,v.state=P,v.context=j,c=A):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{v=r.stateNode,xp(n,r),A=r.memoizedProps,j=r.type===r.elementType?A:An(r.type,A),v.props=j,X=r.pendingProps,K=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=pn(P):(P=Ht(a)?Hi:Vt.current,P=$s(r,P));var re=a.getDerivedStateFromProps;(Q=typeof re=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(A!==X||K!==P)&&im(r,v,c,P),Jr=!1,K=r.memoizedState,v.state=K,$l(r,c,v,d);var ae=r.memoizedState;A!==X||K!==ae||qt.current||Jr?(typeof re=="function"&&(mh(r,a,re,c),ae=r.memoizedState),(j=Jr||nm(r,a,j,c,K,ae,P)||!1)?(Q||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ae,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ae,P)),typeof v.componentDidUpdate=="function"&&(r.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof v.componentDidUpdate!="function"||A===n.memoizedProps&&K===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&K===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=ae),v.props=c,v.state=ae,v.context=P,c=j):(typeof v.componentDidUpdate!="function"||A===n.memoizedProps&&K===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&K===n.memoizedState||(r.flags|=1024),c=!1)}return Eh(n,r,a,c,f,d)}function Eh(n,r,a,c,d,f){pm(n,r);var v=(r.flags&128)!==0;if(!c&&!v)return d&&Ep(r,a,!1),wr(n,r,f);c=r.stateNode,c1.current=r;var A=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&v?(r.child=Gs(r,n.child,null,f),r.child=Gs(r,null,A,f)):zt(n,r,A,f),r.memoizedState=c.state,d&&Ep(r,a,!0),r.child}function gm(n){var r=n.stateNode;r.pendingContext?_p(n,r.pendingContext,r.pendingContext!==r.context):r.context&&_p(n,r.context,!1),rh(n,r.containerInfo)}function ym(n,r,a,c,d){return Ws(),Xc(d),r.flags|=256,zt(n,r,a,c),r.child}var wh={dehydrated:null,treeContext:null,retryLane:0};function Th(n){return{baseLanes:n,cachePool:null,transitions:null}}function _m(n,r,a){var c=r.pendingProps,d=et.current,f=!1,v=(r.flags&128)!==0,A;if((A=v)||(A=n!==null&&n.memoizedState===null?!1:(d&2)!==0),A?(f=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ge(et,d&1),n===null)return Qc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(v=c.children,n=c.fallback,f?(c=r.mode,f=r.child,v={mode:"hidden",children:v},(c&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=v):f=cu(v,c,0,null),n=ts(n,c,a,null),f.return=r,n.return=r,f.sibling=n,r.child=f,r.child.memoizedState=Th(a),r.memoizedState=wh,n):Ih(r,v));if(d=n.memoizedState,d!==null&&(A=d.dehydrated,A!==null))return h1(n,r,v,c,A,d,a);if(f){f=c.fallback,v=r.mode,d=n.child,A=d.sibling;var P={mode:"hidden",children:c.children};return(v&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=P,r.deletions=null):(c=si(d,P),c.subtreeFlags=d.subtreeFlags&14680064),A!==null?f=si(A,f):(f=ts(f,v,a,null),f.flags|=2),f.return=r,c.return=r,c.sibling=f,r.child=c,c=f,f=r.child,v=n.child.memoizedState,v=v===null?Th(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},f.memoizedState=v,f.childLanes=n.childLanes&~a,r.memoizedState=wh,c}return f=n.child,n=f.sibling,c=si(f,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function Ih(n,r){return r=cu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Yl(n,r,a,c){return c!==null&&Xc(c),Gs(r,n.child,null,a),n=Ih(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function h1(n,r,a,c,d,f,v){if(a)return r.flags&256?(r.flags&=-257,c=yh(Error(t(422))),Yl(n,r,v,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(f=c.fallback,d=r.mode,c=cu({mode:"visible",children:c.children},d,0,null),f=ts(f,d,v,null),f.flags|=2,c.return=r,f.return=r,c.sibling=f,r.child=c,(r.mode&1)!==0&&Gs(r,n.child,null,v),r.child.memoizedState=Th(v),r.memoizedState=wh,f);if((r.mode&1)===0)return Yl(n,r,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var A=c.dgst;return c=A,f=Error(t(419)),c=yh(f,c,void 0),Yl(n,r,v,c)}if(A=(v&n.childLanes)!==0,Wt||A){if(c=wt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,vr(n,d),Pn(c,n,d,-1))}return Uh(),c=yh(Error(t(421))),Yl(n,r,v,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=S1.bind(null,n),d._reactRetry=r,null):(n=f.treeContext,an=Kr(d.nextSibling),on=r,Ze=!0,Sn=null,n!==null&&(dn[fn++]=yr,dn[fn++]=_r,dn[fn++]=Wi,yr=n.id,_r=n.overflow,Wi=r),r=Ih(r,c.children),r.flags|=4096,r)}function vm(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),eh(n.return,r,a)}function Sh(n,r,a,c,d){var f=n.memoizedState;f===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(f.isBackwards=r,f.rendering=null,f.renderingStartTime=0,f.last=c,f.tail=a,f.tailMode=d)}function Em(n,r,a){var c=r.pendingProps,d=c.revealOrder,f=c.tail;if(zt(n,r,c.children,a),c=et.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&vm(n,a,r);else if(n.tag===19)vm(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ge(et,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&ql(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),Sh(r,!1,d,a,f);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&ql(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Sh(r,!0,a,null,f);break;case"together":Sh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Jl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function wr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Yi|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=si(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=si(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function d1(n,r,a){switch(r.tag){case 3:gm(r),Ws();break;case 5:Op(r);break;case 1:Ht(r.type)&&Ol(r);break;case 4:rh(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;Ge(jl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(Ge(et,et.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?_m(n,r,a):(Ge(et,et.current&1),n=wr(n,r,a),n!==null?n.sibling:null);Ge(et,et.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return Em(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ge(et,et.current),c)break;return null;case 22:case 23:return r.lanes=0,fm(n,r,a)}return wr(n,r,a)}var wm,Ah,Tm,Im;wm=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ah=function(){},Tm=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Qi(Kn.current);var f=null;switch(a){case"input":d=ms(n,d),c=ms(n,c),f=[];break;case"select":d=ne({},d,{value:void 0}),c=ne({},c,{value:void 0}),f=[];break;case"textarea":d=Do(n,d),c=Do(n,c),f=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=xl)}En(a,c);var v;a=null;for(j in d)if(!c.hasOwnProperty(j)&&d.hasOwnProperty(j)&&d[j]!=null)if(j==="style"){var A=d[j];for(v in A)A.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(o.hasOwnProperty(j)?f||(f=[]):(f=f||[]).push(j,null));for(j in c){var P=c[j];if(A=d!=null?d[j]:void 0,c.hasOwnProperty(j)&&P!==A&&(P!=null||A!=null))if(j==="style")if(A){for(v in A)!A.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&A[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(f||(f=[]),f.push(j,a)),a=P;else j==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,A=A?A.__html:void 0,P!=null&&A!==P&&(f=f||[]).push(j,P)):j==="children"?typeof P!="string"&&typeof P!="number"||(f=f||[]).push(j,""+P):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(o.hasOwnProperty(j)?(P!=null&&j==="onScroll"&&Xe("scroll",n),f||A===P||(f=[])):(f=f||[]).push(j,P))}a&&(f=f||[]).push("style",a);var j=f;(r.updateQueue=j)&&(r.flags|=4)}},Im=function(n,r,a,c){a!==c&&(r.flags|=4)};function _a(n,r){if(!Ze)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Lt(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function f1(n,r,a){var c=r.pendingProps;switch(Gc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(r),null;case 1:return Ht(r.type)&&Vl(),Lt(r),null;case 3:return c=r.stateNode,Xs(),Ye(qt),Ye(Vt),oh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Fl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Sn!==null&&(Mh(Sn),Sn=null))),Ah(n,r),Lt(r),null;case 5:ih(r);var d=Qi(fa.current);if(a=r.type,n!==null&&r.stateNode!=null)Tm(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Lt(r),null}if(n=Qi(Kn.current),Fl(r)){c=r.stateNode,a=r.type;var f=r.memoizedProps;switch(c[Gn]=r,c[la]=f,n=(r.mode&1)!==0,a){case"dialog":Xe("cancel",c),Xe("close",c);break;case"iframe":case"object":case"embed":Xe("load",c);break;case"video":case"audio":for(d=0;d<sa.length;d++)Xe(sa[d],c);break;case"source":Xe("error",c);break;case"img":case"image":case"link":Xe("error",c),Xe("load",c);break;case"details":Xe("toggle",c);break;case"input":nl(c,f),Xe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!f.multiple},Xe("invalid",c);break;case"textarea":Vo(c,f),Xe("invalid",c)}En(a,f),d=null;for(var v in f)if(f.hasOwnProperty(v)){var A=f[v];v==="children"?typeof A=="string"?c.textContent!==A&&(f.suppressHydrationWarning!==!0&&Nl(c.textContent,A,n),d=["children",A]):typeof A=="number"&&c.textContent!==""+A&&(f.suppressHydrationWarning!==!0&&Nl(c.textContent,A,n),d=["children",""+A]):o.hasOwnProperty(v)&&A!=null&&v==="onScroll"&&Xe("scroll",c)}switch(a){case"input":ps(c),xo(c,f,!0);break;case"textarea":ps(c),Dr(c);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(c.onclick=xl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Oo(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Gn]=r,n[la]=c,wm(n,r,!1,!1),r.stateNode=n;e:{switch(v=vs(a,c),a){case"dialog":Xe("cancel",n),Xe("close",n),d=c;break;case"iframe":case"object":case"embed":Xe("load",n),d=c;break;case"video":case"audio":for(d=0;d<sa.length;d++)Xe(sa[d],n);d=c;break;case"source":Xe("error",n),d=c;break;case"img":case"image":case"link":Xe("error",n),Xe("load",n),d=c;break;case"details":Xe("toggle",n),d=c;break;case"input":nl(n,c),d=ms(n,c),Xe("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ne({},c,{value:void 0}),Xe("invalid",n);break;case"textarea":Vo(n,c),d=Do(n,c),Xe("invalid",n);break;default:d=c}En(a,d),A=d;for(f in A)if(A.hasOwnProperty(f)){var P=A[f];f==="style"?_s(n,P):f==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&il(n,P)):f==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Ni(n,P):typeof P=="number"&&Ni(n,""+P):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?P!=null&&f==="onScroll"&&Xe("scroll",n):P!=null&&fe(n,f,P,v))}switch(a){case"input":ps(n),xo(n,c,!1);break;case"textarea":ps(n),Dr(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Le(c.value));break;case"select":n.multiple=!!c.multiple,f=c.value,f!=null?vn(n,!!c.multiple,f,!1):c.defaultValue!=null&&vn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=xl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Lt(r),null;case 6:if(n&&r.stateNode!=null)Im(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Qi(fa.current),Qi(Kn.current),Fl(r)){if(c=r.stateNode,a=r.memoizedProps,c[Gn]=r,(f=c.nodeValue!==a)&&(n=on,n!==null))switch(n.tag){case 3:Nl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Nl(c.nodeValue,a,(n.mode&1)!==0)}f&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Gn]=r,r.stateNode=c}return Lt(r),null;case 13:if(Ye(et),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ze&&an!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Rp(),Ws(),r.flags|=98560,f=!1;else if(f=Fl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(t(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[Gn]=r}else Ws(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Lt(r),f=!1}else Sn!==null&&(Mh(Sn),Sn=null),f=!0;if(!f)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(et.current&1)!==0?_t===0&&(_t=3):Uh())),r.updateQueue!==null&&(r.flags|=4),Lt(r),null);case 4:return Xs(),Ah(n,r),n===null&&oa(r.stateNode.containerInfo),Lt(r),null;case 10:return Zc(r.type._context),Lt(r),null;case 17:return Ht(r.type)&&Vl(),Lt(r),null;case 19:if(Ye(et),f=r.memoizedState,f===null)return Lt(r),null;if(c=(r.flags&128)!==0,v=f.rendering,v===null)if(c)_a(f,!1);else{if(_t!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(v=ql(n),v!==null){for(r.flags|=128,_a(f,!1),c=v.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)f=a,n=c,f.flags&=14680066,v=f.alternate,v===null?(f.childLanes=0,f.lanes=n,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=v.childLanes,f.lanes=v.lanes,f.child=v.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=v.memoizedProps,f.memoizedState=v.memoizedState,f.updateQueue=v.updateQueue,f.type=v.type,n=v.dependencies,f.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ge(et,et.current&1|2),r.child}n=n.sibling}f.tail!==null&&Qe()>eo&&(r.flags|=128,c=!0,_a(f,!1),r.lanes=4194304)}else{if(!c)if(n=ql(v),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),_a(f,!0),f.tail===null&&f.tailMode==="hidden"&&!v.alternate&&!Ze)return Lt(r),null}else 2*Qe()-f.renderingStartTime>eo&&a!==1073741824&&(r.flags|=128,c=!0,_a(f,!1),r.lanes=4194304);f.isBackwards?(v.sibling=r.child,r.child=v):(a=f.last,a!==null?a.sibling=v:r.child=v,f.last=v)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=Qe(),r.sibling=null,a=et.current,Ge(et,c?a&1|2:a&1),r):(Lt(r),null);case 22:case 23:return Fh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(ln&1073741824)!==0&&(Lt(r),r.subtreeFlags&6&&(r.flags|=8192)):Lt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function p1(n,r){switch(Gc(r),r.tag){case 1:return Ht(r.type)&&Vl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Xs(),Ye(qt),Ye(Vt),oh(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return ih(r),null;case 13:if(Ye(et),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ws()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Ye(et),null;case 4:return Xs(),null;case 10:return Zc(r.type._context),null;case 22:case 23:return Fh(),null;case 24:return null;default:return null}}var Zl=!1,Mt=!1,m1=typeof WeakSet=="function"?WeakSet:Set,oe=null;function Js(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){it(n,r,c)}else a.current=null}function Rh(n,r,a){try{a()}catch(c){it(n,r,c)}}var Sm=!1;function g1(n,r){if(Fc=dr,n=np(),Nc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,f=c.focusNode;c=c.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,A=-1,P=-1,j=0,Q=0,X=n,K=null;t:for(;;){for(var re;X!==a||d!==0&&X.nodeType!==3||(A=v+d),X!==f||c!==0&&X.nodeType!==3||(P=v+c),X.nodeType===3&&(v+=X.nodeValue.length),(re=X.firstChild)!==null;)K=X,X=re;for(;;){if(X===n)break t;if(K===a&&++j===d&&(A=v),K===f&&++Q===c&&(P=v),(re=X.nextSibling)!==null)break;X=K,K=X.parentNode}X=re}a=A===-1||P===-1?null:{start:A,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Uc={focusedElem:n,selectionRange:a},dr=!1,oe=r;oe!==null;)if(r=oe,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,oe=n;else for(;oe!==null;){r=oe;try{var ae=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ae!==null){var le=ae.memoizedProps,at=ae.memoizedState,M=r.stateNode,D=M.getSnapshotBeforeUpdate(r.elementType===r.type?le:An(r.type,le),at);M.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var F=r.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Y){it(r,r.return,Y)}if(n=r.sibling,n!==null){n.return=r.return,oe=n;break}oe=r.return}return ae=Sm,Sm=!1,ae}function va(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var f=d.destroy;d.destroy=void 0,f!==void 0&&Rh(r,a,f)}d=d.next}while(d!==c)}}function eu(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function Ch(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function Am(n){var r=n.alternate;r!==null&&(n.alternate=null,Am(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Gn],delete r[la],delete r[$c],delete r[J0],delete r[Z0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Rm(n){return n.tag===5||n.tag===3||n.tag===4}function Cm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Rm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ph(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=xl));else if(c!==4&&(n=n.child,n!==null))for(Ph(n,r,a),n=n.sibling;n!==null;)Ph(n,r,a),n=n.sibling}function kh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(kh(n,r,a),n=n.sibling;n!==null;)kh(n,r,a),n=n.sibling}var Rt=null,Rn=!1;function ei(n,r,a){for(a=a.child;a!==null;)Pm(n,r,a),a=a.sibling}function Pm(n,r,a){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Li,a)}catch{}switch(a.tag){case 5:Mt||Js(a,r);case 6:var c=Rt,d=Rn;Rt=null,ei(n,r,a),Rt=c,Rn=d,Rt!==null&&(Rn?(n=Rt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Rt.removeChild(a.stateNode));break;case 18:Rt!==null&&(Rn?(n=Rt,a=a.stateNode,n.nodeType===8?zc(n.parentNode,a):n.nodeType===1&&zc(n,a),qr(n)):zc(Rt,a.stateNode));break;case 4:c=Rt,d=Rn,Rt=a.stateNode.containerInfo,Rn=!0,ei(n,r,a),Rt=c,Rn=d;break;case 0:case 11:case 14:case 15:if(!Mt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var f=d,v=f.destroy;f=f.tag,v!==void 0&&((f&2)!==0||(f&4)!==0)&&Rh(a,r,v),d=d.next}while(d!==c)}ei(n,r,a);break;case 1:if(!Mt&&(Js(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(A){it(a,r,A)}ei(n,r,a);break;case 21:ei(n,r,a);break;case 22:a.mode&1?(Mt=(c=Mt)||a.memoizedState!==null,ei(n,r,a),Mt=c):ei(n,r,a);break;default:ei(n,r,a)}}function km(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new m1),r.forEach(function(c){var d=A1.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Cn(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var f=n,v=r,A=v;e:for(;A!==null;){switch(A.tag){case 5:Rt=A.stateNode,Rn=!1;break e;case 3:Rt=A.stateNode.containerInfo,Rn=!0;break e;case 4:Rt=A.stateNode.containerInfo,Rn=!0;break e}A=A.return}if(Rt===null)throw Error(t(160));Pm(f,v,d),Rt=null,Rn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(j){it(d,r,j)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Nm(r,n),r=r.sibling}function Nm(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Cn(r,n),Xn(n),c&4){try{va(3,n,n.return),eu(3,n)}catch(le){it(n,n.return,le)}try{va(5,n,n.return)}catch(le){it(n,n.return,le)}}break;case 1:Cn(r,n),Xn(n),c&512&&a!==null&&Js(a,a.return);break;case 5:if(Cn(r,n),Xn(n),c&512&&a!==null&&Js(a,a.return),n.flags&32){var d=n.stateNode;try{Ni(d,"")}catch(le){it(n,n.return,le)}}if(c&4&&(d=n.stateNode,d!=null)){var f=n.memoizedProps,v=a!==null?a.memoizedProps:f,A=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{A==="input"&&f.type==="radio"&&f.name!=null&&gs(d,f),vs(A,v);var j=vs(A,f);for(v=0;v<P.length;v+=2){var Q=P[v],X=P[v+1];Q==="style"?_s(d,X):Q==="dangerouslySetInnerHTML"?il(d,X):Q==="children"?Ni(d,X):fe(d,Q,X,j)}switch(A){case"input":ki(d,f);break;case"textarea":rl(d,f);break;case"select":var K=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var re=f.value;re!=null?vn(d,!!f.multiple,re,!1):K!==!!f.multiple&&(f.defaultValue!=null?vn(d,!!f.multiple,f.defaultValue,!0):vn(d,!!f.multiple,f.multiple?[]:"",!1))}d[la]=f}catch(le){it(n,n.return,le)}}break;case 6:if(Cn(r,n),Xn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,f=n.memoizedProps;try{d.nodeValue=f}catch(le){it(n,n.return,le)}}break;case 3:if(Cn(r,n),Xn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{qr(r.containerInfo)}catch(le){it(n,n.return,le)}break;case 4:Cn(r,n),Xn(n);break;case 13:Cn(r,n),Xn(n),d=n.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(Dh=Qe())),c&4&&km(n);break;case 22:if(Q=a!==null&&a.memoizedState!==null,n.mode&1?(Mt=(j=Mt)||Q,Cn(r,n),Mt=j):Cn(r,n),Xn(n),c&8192){if(j=n.memoizedState!==null,(n.stateNode.isHidden=j)&&!Q&&(n.mode&1)!==0)for(oe=n,Q=n.child;Q!==null;){for(X=oe=Q;oe!==null;){switch(K=oe,re=K.child,K.tag){case 0:case 11:case 14:case 15:va(4,K,K.return);break;case 1:Js(K,K.return);var ae=K.stateNode;if(typeof ae.componentWillUnmount=="function"){c=K,a=K.return;try{r=c,ae.props=r.memoizedProps,ae.state=r.memoizedState,ae.componentWillUnmount()}catch(le){it(c,a,le)}}break;case 5:Js(K,K.return);break;case 22:if(K.memoizedState!==null){Vm(X);continue}}re!==null?(re.return=K,oe=re):Vm(X)}Q=Q.sibling}e:for(Q=null,X=n;;){if(X.tag===5){if(Q===null){Q=X;try{d=X.stateNode,j?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(A=X.stateNode,P=X.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,A.style.display=Lr("display",v))}catch(le){it(n,n.return,le)}}}else if(X.tag===6){if(Q===null)try{X.stateNode.nodeValue=j?"":X.memoizedProps}catch(le){it(n,n.return,le)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===n)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===n)break e;for(;X.sibling===null;){if(X.return===null||X.return===n)break e;Q===X&&(Q=null),X=X.return}Q===X&&(Q=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:Cn(r,n),Xn(n),c&4&&km(n);break;case 21:break;default:Cn(r,n),Xn(n)}}function Xn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(Rm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Ni(d,""),c.flags&=-33);var f=Cm(n);kh(n,f,d);break;case 3:case 4:var v=c.stateNode.containerInfo,A=Cm(n);Ph(n,A,v);break;default:throw Error(t(161))}}catch(P){it(n,n.return,P)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function y1(n,r,a){oe=n,xm(n)}function xm(n,r,a){for(var c=(n.mode&1)!==0;oe!==null;){var d=oe,f=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||Zl;if(!v){var A=d.alternate,P=A!==null&&A.memoizedState!==null||Mt;A=Zl;var j=Mt;if(Zl=v,(Mt=P)&&!j)for(oe=d;oe!==null;)v=oe,P=v.child,v.tag===22&&v.memoizedState!==null?Om(d):P!==null?(P.return=v,oe=P):Om(d);for(;f!==null;)oe=f,xm(f),f=f.sibling;oe=d,Zl=A,Mt=j}Dm(n)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,oe=f):Dm(n)}}function Dm(n){for(;oe!==null;){var r=oe;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Mt||eu(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Mt)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:An(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var f=r.updateQueue;f!==null&&Vp(r,f,c);break;case 3:var v=r.updateQueue;if(v!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Vp(r,v,a)}break;case 5:var A=r.stateNode;if(a===null&&r.flags&4){a=A;var P=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var j=r.alternate;if(j!==null){var Q=j.memoizedState;if(Q!==null){var X=Q.dehydrated;X!==null&&qr(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mt||r.flags&512&&Ch(r)}catch(K){it(r,r.return,K)}}if(r===n){oe=null;break}if(a=r.sibling,a!==null){a.return=r.return,oe=a;break}oe=r.return}}function Vm(n){for(;oe!==null;){var r=oe;if(r===n){oe=null;break}var a=r.sibling;if(a!==null){a.return=r.return,oe=a;break}oe=r.return}}function Om(n){for(;oe!==null;){var r=oe;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{eu(4,r)}catch(P){it(r,a,P)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(P){it(r,d,P)}}var f=r.return;try{Ch(r)}catch(P){it(r,f,P)}break;case 5:var v=r.return;try{Ch(r)}catch(P){it(r,v,P)}}}catch(P){it(r,r.return,P)}if(r===n){oe=null;break}var A=r.sibling;if(A!==null){A.return=r.return,oe=A;break}oe=r.return}}var _1=Math.ceil,tu=Ee.ReactCurrentDispatcher,Nh=Ee.ReactCurrentOwner,gn=Ee.ReactCurrentBatchConfig,Me=0,wt=null,dt=null,Ct=0,ln=0,Zs=Qr(0),_t=0,Ea=null,Yi=0,nu=0,xh=0,wa=null,Gt=null,Dh=0,eo=1/0,Tr=null,ru=!1,Vh=null,ti=null,iu=!1,ni=null,su=0,Ta=0,Oh=null,ou=-1,au=0;function $t(){return(Me&6)!==0?Qe():ou!==-1?ou:ou=Qe()}function ri(n){return(n.mode&1)===0?1:(Me&2)!==0&&Ct!==0?Ct&-Ct:t1.transition!==null?(au===0&&(au=$o()),au):(n=De,n!==0||(n=window.event,n=n===void 0?16:ks(n.type)),n)}function Pn(n,r,a,c){if(50<Ta)throw Ta=0,Oh=null,Error(t(185));Ui(n,a,c),((Me&2)===0||n!==wt)&&(n===wt&&((Me&2)===0&&(nu|=a),_t===4&&ii(n,Ct)),Kt(n,c),a===1&&Me===0&&(r.mode&1)===0&&(eo=Qe()+500,Ll&&Yr()))}function Kt(n,r){var a=n.callbackNode;Fi(n,r);var c=ur(n,n===wt?Ct:0);if(c===0)a!==null&&Ts(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&Ts(a),r===1)n.tag===0?e1(Mm.bind(null,n)):wp(Mm.bind(null,n)),X0(function(){(Me&6)===0&&Yr()}),a=null;else{switch(bn(c)){case 1:a=Is;break;case 4:a=jo;break;case 16:a=Oi;break;case 536870912:a=Ss;break;default:a=Oi}a=qm(a,Lm.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function Lm(n,r){if(ou=-1,au=0,(Me&6)!==0)throw Error(t(327));var a=n.callbackNode;if(to()&&n.callbackNode!==a)return null;var c=ur(n,n===wt?Ct:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=lu(n,c);else{r=c;var d=Me;Me|=2;var f=Fm();(wt!==n||Ct!==r)&&(Tr=null,eo=Qe()+500,Zi(n,r));do try{w1();break}catch(A){bm(n,A)}while(!0);Jc(),tu.current=f,Me=d,dt!==null?r=0:(wt=null,Ct=0,r=_t)}if(r!==0){if(r===2&&(d=zo(n),d!==0&&(c=d,r=Lh(n,d))),r===1)throw a=Ea,Zi(n,0),ii(n,c),Kt(n,Qe()),a;if(r===6)ii(n,c);else{if(d=n.current.alternate,(c&30)===0&&!v1(d)&&(r=lu(n,c),r===2&&(f=zo(n),f!==0&&(c=f,r=Lh(n,f))),r===1))throw a=Ea,Zi(n,0),ii(n,c),Kt(n,Qe()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:es(n,Gt,Tr);break;case 3:if(ii(n,c),(c&130023424)===c&&(r=Dh+500-Qe(),10<r)){if(ur(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){$t(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Bc(es.bind(null,n,Gt,Tr),r);break}es(n,Gt,Tr);break;case 4:if(ii(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var v=31-en(c);f=1<<v,v=r[v],v>d&&(d=v),c&=~f}if(c=d,c=Qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*_1(c/1960))-c,10<c){n.timeoutHandle=Bc(es.bind(null,n,Gt,Tr),c);break}es(n,Gt,Tr);break;case 5:es(n,Gt,Tr);break;default:throw Error(t(329))}}}return Kt(n,Qe()),n.callbackNode===a?Lm.bind(null,n):null}function Lh(n,r){var a=wa;return n.current.memoizedState.isDehydrated&&(Zi(n,r).flags|=256),n=lu(n,r),n!==2&&(r=Gt,Gt=a,r!==null&&Mh(r)),n}function Mh(n){Gt===null?Gt=n:Gt.push.apply(Gt,n)}function v1(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],f=d.getSnapshot;d=d.value;try{if(!In(f(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ii(n,r){for(r&=~xh,r&=~nu,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-en(r),c=1<<a;n[a]=-1,r&=~c}}function Mm(n){if((Me&6)!==0)throw Error(t(327));to();var r=ur(n,0);if((r&1)===0)return Kt(n,Qe()),null;var a=lu(n,r);if(n.tag!==0&&a===2){var c=zo(n);c!==0&&(r=c,a=Lh(n,c))}if(a===1)throw a=Ea,Zi(n,0),ii(n,r),Kt(n,Qe()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,es(n,Gt,Tr),Kt(n,Qe()),null}function bh(n,r){var a=Me;Me|=1;try{return n(r)}finally{Me=a,Me===0&&(eo=Qe()+500,Ll&&Yr())}}function Ji(n){ni!==null&&ni.tag===0&&(Me&6)===0&&to();var r=Me;Me|=1;var a=gn.transition,c=De;try{if(gn.transition=null,De=1,n)return n()}finally{De=c,gn.transition=a,Me=r,(Me&6)===0&&Yr()}}function Fh(){ln=Zs.current,Ye(Zs)}function Zi(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Q0(a)),dt!==null)for(a=dt.return;a!==null;){var c=a;switch(Gc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Vl();break;case 3:Xs(),Ye(qt),Ye(Vt),oh();break;case 5:ih(c);break;case 4:Xs();break;case 13:Ye(et);break;case 19:Ye(et);break;case 10:Zc(c.type._context);break;case 22:case 23:Fh()}a=a.return}if(wt=n,dt=n=si(n.current,null),Ct=ln=r,_t=0,Ea=null,xh=nu=Yi=0,Gt=wa=null,Ki!==null){for(r=0;r<Ki.length;r++)if(a=Ki[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,f=a.pending;if(f!==null){var v=f.next;f.next=d,c.next=v}a.pending=c}Ki=null}return n}function bm(n,r){do{var a=dt;try{if(Jc(),Hl.current=Ql,Wl){for(var c=tt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Wl=!1}if(Xi=0,Et=yt=tt=null,pa=!1,ma=0,Nh.current=null,a===null||a.return===null){_t=1,Ea=r,dt=null;break}e:{var f=n,v=a.return,A=a,P=r;if(r=Ct,A.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var j=P,Q=A,X=Q.tag;if((Q.mode&1)===0&&(X===0||X===11||X===15)){var K=Q.alternate;K?(Q.updateQueue=K.updateQueue,Q.memoizedState=K.memoizedState,Q.lanes=K.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var re=lm(v);if(re!==null){re.flags&=-257,um(re,v,A,f,r),re.mode&1&&am(f,j,r),r=re,P=j;var ae=r.updateQueue;if(ae===null){var le=new Set;le.add(P),r.updateQueue=le}else ae.add(P);break e}else{if((r&1)===0){am(f,j,r),Uh();break e}P=Error(t(426))}}else if(Ze&&A.mode&1){var at=lm(v);if(at!==null){(at.flags&65536)===0&&(at.flags|=256),um(at,v,A,f,r),Xc(Ys(P,A));break e}}f=P=Ys(P,A),_t!==4&&(_t=2),wa===null?wa=[f]:wa.push(f),f=v;do{switch(f.tag){case 3:f.flags|=65536,r&=-r,f.lanes|=r;var M=sm(f,P,r);Dp(f,M);break e;case 1:A=P;var D=f.type,F=f.stateNode;if((f.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(ti===null||!ti.has(F)))){f.flags|=65536,r&=-r,f.lanes|=r;var Y=om(f,A,r);Dp(f,Y);break e}}f=f.return}while(f!==null)}jm(a)}catch(ue){r=ue,dt===a&&a!==null&&(dt=a=a.return);continue}break}while(!0)}function Fm(){var n=tu.current;return tu.current=Ql,n===null?Ql:n}function Uh(){(_t===0||_t===3||_t===2)&&(_t=4),wt===null||(Yi&268435455)===0&&(nu&268435455)===0||ii(wt,Ct)}function lu(n,r){var a=Me;Me|=2;var c=Fm();(wt!==n||Ct!==r)&&(Tr=null,Zi(n,r));do try{E1();break}catch(d){bm(n,d)}while(!0);if(Jc(),Me=a,tu.current=c,dt!==null)throw Error(t(261));return wt=null,Ct=0,_t}function E1(){for(;dt!==null;)Um(dt)}function w1(){for(;dt!==null&&!Vi();)Um(dt)}function Um(n){var r=$m(n.alternate,n,ln);n.memoizedProps=n.pendingProps,r===null?jm(n):dt=r,Nh.current=null}function jm(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=f1(a,r,ln),a!==null){dt=a;return}}else{if(a=p1(a,r),a!==null){a.flags&=32767,dt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{_t=6,dt=null;return}}if(r=r.sibling,r!==null){dt=r;return}dt=r=n}while(r!==null);_t===0&&(_t=5)}function es(n,r,a){var c=De,d=gn.transition;try{gn.transition=null,De=1,T1(n,r,a,c)}finally{gn.transition=d,De=c}return null}function T1(n,r,a,c){do to();while(ni!==null);if((Me&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var f=a.lanes|a.childLanes;if(Ac(n,f),n===wt&&(dt=wt=null,Ct=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||iu||(iu=!0,qm(Oi,function(){return to(),null})),f=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||f){f=gn.transition,gn.transition=null;var v=De;De=1;var A=Me;Me|=4,Nh.current=null,g1(n,a),Nm(a,n),z0(Uc),dr=!!Fc,Uc=Fc=null,n.current=a,y1(a),lr(),Me=A,De=v,gn.transition=f}else n.current=a;if(iu&&(iu=!1,ni=n,su=d),f=n.pendingLanes,f===0&&(ti=null),ml(a.stateNode),Kt(n,Qe()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(ru)throw ru=!1,n=Vh,Vh=null,n;return(su&1)!==0&&n.tag!==0&&to(),f=n.pendingLanes,(f&1)!==0?n===Oh?Ta++:(Ta=0,Oh=n):Ta=0,Yr(),null}function to(){if(ni!==null){var n=bn(su),r=gn.transition,a=De;try{if(gn.transition=null,De=16>n?16:n,ni===null)var c=!1;else{if(n=ni,ni=null,su=0,(Me&6)!==0)throw Error(t(331));var d=Me;for(Me|=4,oe=n.current;oe!==null;){var f=oe,v=f.child;if((oe.flags&16)!==0){var A=f.deletions;if(A!==null){for(var P=0;P<A.length;P++){var j=A[P];for(oe=j;oe!==null;){var Q=oe;switch(Q.tag){case 0:case 11:case 15:va(8,Q,f)}var X=Q.child;if(X!==null)X.return=Q,oe=X;else for(;oe!==null;){Q=oe;var K=Q.sibling,re=Q.return;if(Am(Q),Q===j){oe=null;break}if(K!==null){K.return=re,oe=K;break}oe=re}}}var ae=f.alternate;if(ae!==null){var le=ae.child;if(le!==null){ae.child=null;do{var at=le.sibling;le.sibling=null,le=at}while(le!==null)}}oe=f}}if((f.subtreeFlags&2064)!==0&&v!==null)v.return=f,oe=v;else e:for(;oe!==null;){if(f=oe,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:va(9,f,f.return)}var M=f.sibling;if(M!==null){M.return=f.return,oe=M;break e}oe=f.return}}var D=n.current;for(oe=D;oe!==null;){v=oe;var F=v.child;if((v.subtreeFlags&2064)!==0&&F!==null)F.return=v,oe=F;else e:for(v=D;oe!==null;){if(A=oe,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:eu(9,A)}}catch(ue){it(A,A.return,ue)}if(A===v){oe=null;break e}var Y=A.sibling;if(Y!==null){Y.return=A.return,oe=Y;break e}oe=A.return}}if(Me=d,Yr(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Li,n)}catch{}c=!0}return c}finally{De=a,gn.transition=r}}return!1}function Bm(n,r,a){r=Ys(a,r),r=sm(n,r,1),n=Zr(n,r,1),r=$t(),n!==null&&(Ui(n,1,r),Kt(n,r))}function it(n,r,a){if(n.tag===3)Bm(n,n,a);else for(;r!==null;){if(r.tag===3){Bm(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ti===null||!ti.has(c))){n=Ys(a,n),n=om(r,n,1),r=Zr(r,n,1),n=$t(),r!==null&&(Ui(r,1,n),Kt(r,n));break}}r=r.return}}function I1(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=$t(),n.pingedLanes|=n.suspendedLanes&a,wt===n&&(Ct&a)===a&&(_t===4||_t===3&&(Ct&130023424)===Ct&&500>Qe()-Dh?Zi(n,0):xh|=a),Kt(n,r)}function zm(n,r){r===0&&((n.mode&1)===0?r=1:(r=Br,Br<<=1,(Br&130023424)===0&&(Br=4194304)));var a=$t();n=vr(n,r),n!==null&&(Ui(n,r,a),Kt(n,a))}function S1(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),zm(n,a)}function A1(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),zm(n,a)}var $m;$m=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||qt.current)Wt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Wt=!1,d1(n,r,a);Wt=(n.flags&131072)!==0}else Wt=!1,Ze&&(r.flags&1048576)!==0&&Tp(r,bl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Jl(n,r),n=r.pendingProps;var d=$s(r,Vt.current);Qs(r,a),d=uh(null,r,c,n,d,a);var f=ch();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Ht(c)?(f=!0,Ol(r)):f=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,nh(r),d.updater=Xl,r.stateNode=d,d._reactInternals=r,gh(r,c,n,a),r=Eh(null,r,c,!0,f,a)):(r.tag=0,Ze&&f&&Wc(r),zt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(Jl(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=C1(c),n=An(c,n),d){case 0:r=vh(null,r,c,n,a);break e;case 1:r=mm(null,r,c,n,a);break e;case 11:r=cm(null,r,c,n,a);break e;case 14:r=hm(null,r,c,An(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:An(c,d),vh(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:An(c,d),mm(n,r,c,d,a);case 3:e:{if(gm(r),n===null)throw Error(t(387));c=r.pendingProps,f=r.memoizedState,d=f.element,xp(n,r),$l(r,c,null,a);var v=r.memoizedState;if(c=v.element,f.isDehydrated)if(f={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){d=Ys(Error(t(423)),r),r=ym(n,r,c,a,d);break e}else if(c!==d){d=Ys(Error(t(424)),r),r=ym(n,r,c,a,d);break e}else for(an=Kr(r.stateNode.containerInfo.firstChild),on=r,Ze=!0,Sn=null,a=kp(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ws(),c===d){r=wr(n,r,a);break e}zt(n,r,c,a)}r=r.child}return r;case 5:return Op(r),n===null&&Qc(r),c=r.type,d=r.pendingProps,f=n!==null?n.memoizedProps:null,v=d.children,jc(c,d)?v=null:f!==null&&jc(c,f)&&(r.flags|=32),pm(n,r),zt(n,r,v,a),r.child;case 6:return n===null&&Qc(r),null;case 13:return _m(n,r,a);case 4:return rh(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Gs(r,null,c,a):zt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:An(c,d),cm(n,r,c,d,a);case 7:return zt(n,r,r.pendingProps,a),r.child;case 8:return zt(n,r,r.pendingProps.children,a),r.child;case 12:return zt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,f=r.memoizedProps,v=d.value,Ge(jl,c._currentValue),c._currentValue=v,f!==null)if(In(f.value,v)){if(f.children===d.children&&!qt.current){r=wr(n,r,a);break e}}else for(f=r.child,f!==null&&(f.return=r);f!==null;){var A=f.dependencies;if(A!==null){v=f.child;for(var P=A.firstContext;P!==null;){if(P.context===c){if(f.tag===1){P=Er(-1,a&-a),P.tag=2;var j=f.updateQueue;if(j!==null){j=j.shared;var Q=j.pending;Q===null?P.next=P:(P.next=Q.next,Q.next=P),j.pending=P}}f.lanes|=a,P=f.alternate,P!==null&&(P.lanes|=a),eh(f.return,a,r),A.lanes|=a;break}P=P.next}}else if(f.tag===10)v=f.type===r.type?null:f.child;else if(f.tag===18){if(v=f.return,v===null)throw Error(t(341));v.lanes|=a,A=v.alternate,A!==null&&(A.lanes|=a),eh(v,a,r),v=f.sibling}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===r){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}zt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Qs(r,a),d=pn(d),c=c(d),r.flags|=1,zt(n,r,c,a),r.child;case 14:return c=r.type,d=An(c,r.pendingProps),d=An(c.type,d),hm(n,r,c,d,a);case 15:return dm(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:An(c,d),Jl(n,r),r.tag=1,Ht(c)?(n=!0,Ol(r)):n=!1,Qs(r,a),rm(r,c,d),gh(r,c,d,a),Eh(null,r,c,!0,n,a);case 19:return Em(n,r,a);case 22:return fm(n,r,a)}throw Error(t(156,r.tag))};function qm(n,r){return Uo(n,r)}function R1(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(n,r,a,c){return new R1(n,r,a,c)}function jh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function C1(n){if(typeof n=="function")return jh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===V)return 11;if(n===je)return 14}return 2}function si(n,r){var a=n.alternate;return a===null?(a=yn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function uu(n,r,a,c,d,f){var v=2;if(c=n,typeof n=="function")jh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case k:return ts(a.children,d,f,r);case R:v=8,d|=8;break;case C:return n=yn(12,a,r,d|2),n.elementType=C,n.lanes=f,n;case I:return n=yn(13,a,r,d),n.elementType=I,n.lanes=f,n;case he:return n=yn(19,a,r,d),n.elementType=he,n.lanes=f,n;case Fe:return cu(a,d,f,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case x:v=10;break e;case N:v=9;break e;case V:v=11;break e;case je:v=14;break e;case Be:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=yn(v,a,r,d),r.elementType=n,r.type=c,r.lanes=f,r}function ts(n,r,a,c){return n=yn(7,n,c,r),n.lanes=a,n}function cu(n,r,a,c){return n=yn(22,n,c,r),n.elementType=Fe,n.lanes=a,n.stateNode={isHidden:!1},n}function Bh(n,r,a){return n=yn(6,n,null,r),n.lanes=a,n}function zh(n,r,a){return r=yn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function P1(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qo(0),this.expirationTimes=qo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qo(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function $h(n,r,a,c,d,f,v,A,P){return n=new P1(n,r,a,A,P),r===1?(r=1,f===!0&&(r|=8)):r=0,f=yn(3,null,null,r),n.current=f,f.stateNode=n,f.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},nh(f),n}function k1(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ie,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function Hm(n){if(!n)return Xr;n=n._reactInternals;e:{if(wn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Ht(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Ht(a))return vp(n,a,r)}return r}function Wm(n,r,a,c,d,f,v,A,P){return n=$h(a,c,!0,n,d,f,v,A,P),n.context=Hm(null),a=n.current,c=$t(),d=ri(a),f=Er(c,d),f.callback=r??null,Zr(a,f,d),n.current.lanes=d,Ui(n,d,c),Kt(n,c),n}function hu(n,r,a,c){var d=r.current,f=$t(),v=ri(d);return a=Hm(a),r.context===null?r.context=a:r.pendingContext=a,r=Er(f,v),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Zr(d,r,v),n!==null&&(Pn(n,d,v,f),zl(n,d,v)),v}function du(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Gm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function qh(n,r){Gm(n,r),(n=n.alternate)&&Gm(n,r)}function N1(){return null}var Km=typeof reportError=="function"?reportError:function(n){console.error(n)};function Hh(n){this._internalRoot=n}fu.prototype.render=Hh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));hu(n,r,null,null)},fu.prototype.unmount=Hh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Ji(function(){hu(null,n,null,null)}),r[mr]=null}};function fu(n){this._internalRoot=n}fu.prototype.unstable_scheduleHydration=function(n){if(n){var r=Ko();n={blockedOn:null,target:n,priority:r};for(var a=0;a<tn.length&&r!==0&&r<tn[a].priority;a++);tn.splice(a,0,n),a===0&&Cs(n)}};function Wh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function pu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Qm(){}function x1(n,r,a,c,d){if(d){if(typeof c=="function"){var f=c;c=function(){var j=du(v);f.call(j)}}var v=Wm(r,c,n,0,null,!1,!1,"",Qm);return n._reactRootContainer=v,n[mr]=v.current,oa(n.nodeType===8?n.parentNode:n),Ji(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var A=c;c=function(){var j=du(P);A.call(j)}}var P=$h(n,0,!1,null,null,!1,!1,"",Qm);return n._reactRootContainer=P,n[mr]=P.current,oa(n.nodeType===8?n.parentNode:n),Ji(function(){hu(r,P,a,c)}),P}function mu(n,r,a,c,d){var f=a._reactRootContainer;if(f){var v=f;if(typeof d=="function"){var A=d;d=function(){var P=du(v);A.call(P)}}hu(r,v,n,d)}else v=x1(a,r,n,d,c);return du(v)}Wo=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Ue(r.pendingLanes);a!==0&&(Ho(r,a|1),Kt(r,Qe()),(Me&6)===0&&(eo=Qe()+500,Yr()))}break;case 13:Ji(function(){var c=vr(n,1);if(c!==null){var d=$t();Pn(c,n,1,d)}}),qh(n,1)}},As=function(n){if(n.tag===13){var r=vr(n,134217728);if(r!==null){var a=$t();Pn(r,n,134217728,a)}qh(n,134217728)}},Go=function(n){if(n.tag===13){var r=ri(n),a=vr(n,r);if(a!==null){var c=$t();Pn(a,n,r,c)}qh(n,r)}},Ko=function(){return De},Qo=function(n,r){var a=De;try{return De=n,r()}finally{De=a}},sr=function(n,r,a){switch(r){case"input":if(ki(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=Dl(c);if(!d)throw Error(t(90));No(c),ki(c,d)}}}break;case"textarea":rl(n,a);break;case"select":r=a.value,r!=null&&vn(n,!!a.multiple,r,!1)}},ol=bh,al=Ji;var D1={usingClientEntryPoint:!1,Events:[ua,Bs,Dl,br,Fr,bh]},Ia={findFiberByHostInstance:qi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},V1={bundleType:Ia.bundleType,version:Ia.version,rendererPackageName:Ia.rendererPackageName,rendererConfig:Ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=pl(n),n===null?null:n.stateNode},findFiberByHostInstance:Ia.findFiberByHostInstance||N1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gu.isDisabled&&gu.supportsFiber)try{Li=gu.inject(V1),Zt=gu}catch{}}return Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D1,Qt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wh(r))throw Error(t(200));return k1(n,r,null,a)},Qt.createRoot=function(n,r){if(!Wh(n))throw Error(t(299));var a=!1,c="",d=Km;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=$h(n,1,!1,null,null,a,!1,c,d),n[mr]=r.current,oa(n.nodeType===8?n.parentNode:n),new Hh(r)},Qt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=pl(r),n=n===null?null:n.stateNode,n},Qt.flushSync=function(n){return Ji(n)},Qt.hydrate=function(n,r,a){if(!pu(r))throw Error(t(200));return mu(null,n,r,!0,a)},Qt.hydrateRoot=function(n,r,a){if(!Wh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,f="",v=Km;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),r=Wm(r,null,n,1,a??null,d,!1,f,v),n[mr]=r.current,oa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new fu(r)},Qt.render=function(n,r,a){if(!pu(r))throw Error(t(200));return mu(null,n,r,!1,a)},Qt.unmountComponentAtNode=function(n){if(!pu(n))throw Error(t(40));return n._reactRootContainer?(Ji(function(){mu(null,null,n,!1,function(){n._reactRootContainer=null,n[mr]=null})}),!0):!1},Qt.unstable_batchedUpdates=bh,Qt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!pu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return mu(n,r,a,!1,c)},Qt.version="18.3.1-next-f1338f8080-20240426",Qt}var rg;function z1(){if(rg)return Qh.exports;rg=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Qh.exports=B1(),Qh.exports}var ig;function $1(){if(ig)return yu;ig=1;var i=z1();return yu.createRoot=i.createRoot,yu.hydrateRoot=i.hydrateRoot,yu}var q1=$1();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),t_=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var W1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=lt.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:l,iconNode:h,...m},g)=>lt.createElement("svg",{ref:g,...W1,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:t_("lucide",o),...m},[...h.map(([y,E])=>lt.createElement(y,E)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=(i,e)=>{const t=lt.forwardRef(({className:s,...o},l)=>lt.createElement(G1,{ref:l,iconNode:e,className:t_(`lucide-${H1(i)}`,s),...o}));return t.displayName=`${i}`,t};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=Jt("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=Jt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=Jt("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=Jt("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=Jt("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=Jt("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=Jt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=Jt("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=Jt("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=Jt("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=Jt("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tE=Jt("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=Jt("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=Jt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var no={},ed={exports:{}},td,og;function rE(){if(og)return td;og=1;var i="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return td=i,td}var nd,ag;function iE(){if(ag)return nd;ag=1;var i=rE();function e(){}function t(){}return t.resetWarningCache=e,nd=function(){function s(h,m,g,y,E,w){if(w!==i){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}s.isRequired=s;function o(){return s}var l={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:o,element:s,elementType:s,instanceOf:o,node:s,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:e};return l.PropTypes=l,l},nd}var lg;function i_(){return lg||(lg=1,ed.exports=iE()()),ed.exports}var rd,ug;function s_(){return ug||(ug=1,rd={L:1,M:0,Q:3,H:2}),rd}var id,cg;function o_(){return cg||(cg=1,id={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8}),id}var sd,hg;function sE(){if(hg)return sd;hg=1;var i=o_();function e(t){this.mode=i.MODE_8BIT_BYTE,this.data=t}return e.prototype={getLength:function(t){return this.data.length},write:function(t){for(var s=0;s<this.data.length;s++)t.put(this.data.charCodeAt(s),8)}},sd=e,sd}var od,dg;function oE(){if(dg)return od;dg=1;var i=s_();function e(t,s){this.totalCount=t,this.dataCount=s}return e.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],e.getRSBlocks=function(t,s){var o=e.getRsBlockTable(t,s);if(o==null)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+s);for(var l=o.length/3,h=new Array,m=0;m<l;m++)for(var g=o[m*3+0],y=o[m*3+1],E=o[m*3+2],w=0;w<g;w++)h.push(new e(y,E));return h},e.getRsBlockTable=function(t,s){switch(s){case i.L:return e.RS_BLOCK_TABLE[(t-1)*4+0];case i.M:return e.RS_BLOCK_TABLE[(t-1)*4+1];case i.Q:return e.RS_BLOCK_TABLE[(t-1)*4+2];case i.H:return e.RS_BLOCK_TABLE[(t-1)*4+3];default:return}},od=e,od}var ad,fg;function aE(){if(fg)return ad;fg=1;function i(){this.buffer=new Array,this.length=0}return i.prototype={get:function(e){var t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)==1},put:function(e,t){for(var s=0;s<t;s++)this.putBit((e>>>t-s-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},ad=i,ad}var ld,pg;function a_(){if(pg)return ld;pg=1;for(var i={glog:function(t){if(t<1)throw new Error("glog("+t+")");return i.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return i.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},e=0;e<8;e++)i.EXP_TABLE[e]=1<<e;for(var e=8;e<256;e++)i.EXP_TABLE[e]=i.EXP_TABLE[e-4]^i.EXP_TABLE[e-5]^i.EXP_TABLE[e-6]^i.EXP_TABLE[e-8];for(var e=0;e<255;e++)i.LOG_TABLE[i.EXP_TABLE[e]]=e;return ld=i,ld}var ud,mg;function l_(){if(mg)return ud;mg=1;var i=a_();function e(t,s){if(t.length==null)throw new Error(t.length+"/"+s);for(var o=0;o<t.length&&t[o]==0;)o++;this.num=new Array(t.length-o+s);for(var l=0;l<t.length-o;l++)this.num[l]=t[l+o]}return e.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var s=new Array(this.getLength()+t.getLength()-1),o=0;o<this.getLength();o++)for(var l=0;l<t.getLength();l++)s[o+l]^=i.gexp(i.glog(this.get(o))+i.glog(t.get(l)));return new e(s,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var s=i.glog(this.get(0))-i.glog(t.get(0)),o=new Array(this.getLength()),l=0;l<this.getLength();l++)o[l]=this.get(l);for(var l=0;l<t.getLength();l++)o[l]^=i.gexp(i.glog(t.get(l))+s);return new e(o,0).mod(t)}},ud=e,ud}var cd,gg;function lE(){if(gg)return cd;gg=1;var i=o_(),e=l_(),t=a_(),s={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},o={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(l){for(var h=l<<10;o.getBCHDigit(h)-o.getBCHDigit(o.G15)>=0;)h^=o.G15<<o.getBCHDigit(h)-o.getBCHDigit(o.G15);return(l<<10|h)^o.G15_MASK},getBCHTypeNumber:function(l){for(var h=l<<12;o.getBCHDigit(h)-o.getBCHDigit(o.G18)>=0;)h^=o.G18<<o.getBCHDigit(h)-o.getBCHDigit(o.G18);return l<<12|h},getBCHDigit:function(l){for(var h=0;l!=0;)h++,l>>>=1;return h},getPatternPosition:function(l){return o.PATTERN_POSITION_TABLE[l-1]},getMask:function(l,h,m){switch(l){case s.PATTERN000:return(h+m)%2==0;case s.PATTERN001:return h%2==0;case s.PATTERN010:return m%3==0;case s.PATTERN011:return(h+m)%3==0;case s.PATTERN100:return(Math.floor(h/2)+Math.floor(m/3))%2==0;case s.PATTERN101:return h*m%2+h*m%3==0;case s.PATTERN110:return(h*m%2+h*m%3)%2==0;case s.PATTERN111:return(h*m%3+(h+m)%2)%2==0;default:throw new Error("bad maskPattern:"+l)}},getErrorCorrectPolynomial:function(l){for(var h=new e([1],0),m=0;m<l;m++)h=h.multiply(new e([1,t.gexp(m)],0));return h},getLengthInBits:function(l,h){if(1<=h&&h<10)switch(l){case i.MODE_NUMBER:return 10;case i.MODE_ALPHA_NUM:return 9;case i.MODE_8BIT_BYTE:return 8;case i.MODE_KANJI:return 8;default:throw new Error("mode:"+l)}else if(h<27)switch(l){case i.MODE_NUMBER:return 12;case i.MODE_ALPHA_NUM:return 11;case i.MODE_8BIT_BYTE:return 16;case i.MODE_KANJI:return 10;default:throw new Error("mode:"+l)}else if(h<41)switch(l){case i.MODE_NUMBER:return 14;case i.MODE_ALPHA_NUM:return 13;case i.MODE_8BIT_BYTE:return 16;case i.MODE_KANJI:return 12;default:throw new Error("mode:"+l)}else throw new Error("type:"+h)},getLostPoint:function(l){for(var h=l.getModuleCount(),m=0,g=0;g<h;g++)for(var y=0;y<h;y++){for(var E=0,w=l.isDark(g,y),S=-1;S<=1;S++)if(!(g+S<0||h<=g+S))for(var L=-1;L<=1;L++)y+L<0||h<=y+L||S==0&&L==0||w==l.isDark(g+S,y+L)&&E++;E>5&&(m+=3+E-5)}for(var g=0;g<h-1;g++)for(var y=0;y<h-1;y++){var U=0;l.isDark(g,y)&&U++,l.isDark(g+1,y)&&U++,l.isDark(g,y+1)&&U++,l.isDark(g+1,y+1)&&U++,(U==0||U==4)&&(m+=3)}for(var g=0;g<h;g++)for(var y=0;y<h-6;y++)l.isDark(g,y)&&!l.isDark(g,y+1)&&l.isDark(g,y+2)&&l.isDark(g,y+3)&&l.isDark(g,y+4)&&!l.isDark(g,y+5)&&l.isDark(g,y+6)&&(m+=40);for(var y=0;y<h;y++)for(var g=0;g<h-6;g++)l.isDark(g,y)&&!l.isDark(g+1,y)&&l.isDark(g+2,y)&&l.isDark(g+3,y)&&l.isDark(g+4,y)&&!l.isDark(g+5,y)&&l.isDark(g+6,y)&&(m+=40);for(var $=0,y=0;y<h;y++)for(var g=0;g<h;g++)l.isDark(g,y)&&$++;var q=Math.abs(100*$/h/h-50)/5;return m+=q*10,m}};return cd=o,cd}var hd,yg;function uE(){if(yg)return hd;yg=1;var i=sE(),e=oE(),t=aE(),s=lE(),o=l_();function l(m,g){this.typeNumber=m,this.errorCorrectLevel=g,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var h=l.prototype;return h.addData=function(m){var g=new i(m);this.dataList.push(g),this.dataCache=null},h.isDark=function(m,g){if(m<0||this.moduleCount<=m||g<0||this.moduleCount<=g)throw new Error(m+","+g);return this.modules[m][g]},h.getModuleCount=function(){return this.moduleCount},h.make=function(){if(this.typeNumber<1){var m=1;for(m=1;m<40;m++){for(var g=e.getRSBlocks(m,this.errorCorrectLevel),y=new t,E=0,w=0;w<g.length;w++)E+=g[w].dataCount;for(var w=0;w<this.dataList.length;w++){var S=this.dataList[w];y.put(S.mode,4),y.put(S.getLength(),s.getLengthInBits(S.mode,m)),S.write(y)}if(y.getLengthInBits()<=E*8)break}this.typeNumber=m}this.makeImpl(!1,this.getBestMaskPattern())},h.makeImpl=function(m,g){this.moduleCount=this.typeNumber*4+17,this.modules=new Array(this.moduleCount);for(var y=0;y<this.moduleCount;y++){this.modules[y]=new Array(this.moduleCount);for(var E=0;E<this.moduleCount;E++)this.modules[y][E]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(m,g),this.typeNumber>=7&&this.setupTypeNumber(m),this.dataCache==null&&(this.dataCache=l.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,g)},h.setupPositionProbePattern=function(m,g){for(var y=-1;y<=7;y++)if(!(m+y<=-1||this.moduleCount<=m+y))for(var E=-1;E<=7;E++)g+E<=-1||this.moduleCount<=g+E||(0<=y&&y<=6&&(E==0||E==6)||0<=E&&E<=6&&(y==0||y==6)||2<=y&&y<=4&&2<=E&&E<=4?this.modules[m+y][g+E]=!0:this.modules[m+y][g+E]=!1)},h.getBestMaskPattern=function(){for(var m=0,g=0,y=0;y<8;y++){this.makeImpl(!0,y);var E=s.getLostPoint(this);(y==0||m>E)&&(m=E,g=y)}return g},h.createMovieClip=function(m,g,y){var E=m.createEmptyMovieClip(g,y),w=1;this.make();for(var S=0;S<this.modules.length;S++)for(var L=S*w,U=0;U<this.modules[S].length;U++){var $=U*w,q=this.modules[S][U];q&&(E.beginFill(0,100),E.moveTo($,L),E.lineTo($+w,L),E.lineTo($+w,L+w),E.lineTo($,L+w),E.endFill())}return E},h.setupTimingPattern=function(){for(var m=8;m<this.moduleCount-8;m++)this.modules[m][6]==null&&(this.modules[m][6]=m%2==0);for(var g=8;g<this.moduleCount-8;g++)this.modules[6][g]==null&&(this.modules[6][g]=g%2==0)},h.setupPositionAdjustPattern=function(){for(var m=s.getPatternPosition(this.typeNumber),g=0;g<m.length;g++)for(var y=0;y<m.length;y++){var E=m[g],w=m[y];if(this.modules[E][w]==null)for(var S=-2;S<=2;S++)for(var L=-2;L<=2;L++)S==-2||S==2||L==-2||L==2||S==0&&L==0?this.modules[E+S][w+L]=!0:this.modules[E+S][w+L]=!1}},h.setupTypeNumber=function(m){for(var g=s.getBCHTypeNumber(this.typeNumber),y=0;y<18;y++){var E=!m&&(g>>y&1)==1;this.modules[Math.floor(y/3)][y%3+this.moduleCount-8-3]=E}for(var y=0;y<18;y++){var E=!m&&(g>>y&1)==1;this.modules[y%3+this.moduleCount-8-3][Math.floor(y/3)]=E}},h.setupTypeInfo=function(m,g){for(var y=this.errorCorrectLevel<<3|g,E=s.getBCHTypeInfo(y),w=0;w<15;w++){var S=!m&&(E>>w&1)==1;w<6?this.modules[w][8]=S:w<8?this.modules[w+1][8]=S:this.modules[this.moduleCount-15+w][8]=S}for(var w=0;w<15;w++){var S=!m&&(E>>w&1)==1;w<8?this.modules[8][this.moduleCount-w-1]=S:w<9?this.modules[8][15-w-1+1]=S:this.modules[8][15-w-1]=S}this.modules[this.moduleCount-8][8]=!m},h.mapData=function(m,g){for(var y=-1,E=this.moduleCount-1,w=7,S=0,L=this.moduleCount-1;L>0;L-=2)for(L==6&&L--;;){for(var U=0;U<2;U++)if(this.modules[E][L-U]==null){var $=!1;S<m.length&&($=(m[S]>>>w&1)==1);var q=s.getMask(g,E,L-U);q&&($=!$),this.modules[E][L-U]=$,w--,w==-1&&(S++,w=7)}if(E+=y,E<0||this.moduleCount<=E){E-=y,y=-y;break}}},l.PAD0=236,l.PAD1=17,l.createData=function(m,g,y){for(var E=e.getRSBlocks(m,g),w=new t,S=0;S<y.length;S++){var L=y[S];w.put(L.mode,4),w.put(L.getLength(),s.getLengthInBits(L.mode,m)),L.write(w)}for(var U=0,S=0;S<E.length;S++)U+=E[S].dataCount;if(w.getLengthInBits()>U*8)throw new Error("code length overflow. ("+w.getLengthInBits()+">"+U*8+")");for(w.getLengthInBits()+4<=U*8&&w.put(0,4);w.getLengthInBits()%8!=0;)w.putBit(!1);for(;!(w.getLengthInBits()>=U*8||(w.put(l.PAD0,8),w.getLengthInBits()>=U*8));)w.put(l.PAD1,8);return l.createBytes(w,E)},l.createBytes=function(m,g){for(var y=0,E=0,w=0,S=new Array(g.length),L=new Array(g.length),U=0;U<g.length;U++){var $=g[U].dataCount,q=g[U].totalCount-$;E=Math.max(E,$),w=Math.max(w,q),S[U]=new Array($);for(var J=0;J<S[U].length;J++)S[U][J]=255&m.buffer[J+y];y+=$;var te=s.getErrorCorrectPolynomial(q),fe=new o(S[U],te.getLength()-1),Ee=fe.mod(te);L[U]=new Array(te.getLength()-1);for(var J=0;J<L[U].length;J++){var Oe=J+Ee.getLength()-L[U].length;L[U][J]=Oe>=0?Ee.get(Oe):0}}for(var Ie=0,J=0;J<g.length;J++)Ie+=g[J].totalCount;for(var k=new Array(Ie),R=0,J=0;J<E;J++)for(var U=0;U<g.length;U++)J<S[U].length&&(k[R++]=S[U][J]);for(var J=0;J<w;J++)for(var U=0;U<g.length;U++)J<L[U].length&&(k[R++]=L[U][J]);return k},hd=l,hd}var _u={},_g;function cE(){if(_g)return _u;_g=1,Object.defineProperty(_u,"__esModule",{value:!0});var i=Object.assign||function(y){for(var E=1;E<arguments.length;E++){var w=arguments[E];for(var S in w)Object.prototype.hasOwnProperty.call(w,S)&&(y[S]=w[S])}return y},e=i_(),t=l(e),s=$a(),o=l(s);function l(y){return y&&y.__esModule?y:{default:y}}function h(y,E){var w={};for(var S in y)E.indexOf(S)>=0||Object.prototype.hasOwnProperty.call(y,S)&&(w[S]=y[S]);return w}var m={bgColor:t.default.oneOfType([t.default.object,t.default.string]).isRequired,bgD:t.default.string.isRequired,fgColor:t.default.oneOfType([t.default.object,t.default.string]).isRequired,fgD:t.default.string.isRequired,size:t.default.number.isRequired,title:t.default.string,viewBoxSize:t.default.number.isRequired,xmlns:t.default.string},g=(0,s.forwardRef)(function(y,E){var w=y.bgColor,S=y.bgD,L=y.fgD,U=y.fgColor,$=y.size,q=y.title,J=y.viewBoxSize,te=y.xmlns,fe=te===void 0?"http://www.w3.org/2000/svg":te,Ee=h(y,["bgColor","bgD","fgD","fgColor","size","title","viewBoxSize","xmlns"]);return o.default.createElement("svg",i({},Ee,{height:$,ref:E,viewBox:"0 0 "+J+" "+J,width:$,xmlns:fe}),q?o.default.createElement("title",null,q):null,o.default.createElement("path",{d:S,fill:w}),o.default.createElement("path",{d:L,fill:U}))});return g.displayName="QRCodeSvg",g.propTypes=m,_u.default=g,_u}var vg;function hE(){if(vg)return no;vg=1,Object.defineProperty(no,"__esModule",{value:!0}),no.QRCode=void 0;var i=Object.assign||function($){for(var q=1;q<arguments.length;q++){var J=arguments[q];for(var te in J)Object.prototype.hasOwnProperty.call(J,te)&&($[te]=J[te])}return $},e=i_(),t=w(e),s=s_(),o=w(s),l=uE(),h=w(l),m=$a(),g=w(m),y=cE(),E=w(y);function w($){return $&&$.__esModule?$:{default:$}}function S($,q){var J={};for(var te in $)q.indexOf(te)>=0||Object.prototype.hasOwnProperty.call($,te)&&(J[te]=$[te]);return J}var L={bgColor:t.default.oneOfType([t.default.object,t.default.string]),fgColor:t.default.oneOfType([t.default.object,t.default.string]),level:t.default.string,size:t.default.number,value:t.default.string.isRequired},U=(0,m.forwardRef)(function($,q){var J=$.bgColor,te=J===void 0?"#FFFFFF":J,fe=$.fgColor,Ee=fe===void 0?"#000000":fe,Oe=$.level,Ie=Oe===void 0?"L":Oe,k=$.size,R=k===void 0?256:k,C=$.value,x=S($,["bgColor","fgColor","level","size","value"]),N=new h.default(-1,o.default[Ie]);N.addData(C),N.make();var V=N.modules;return g.default.createElement(E.default,i({},x,{bgColor:te,bgD:V.map(function(I,he){return I.map(function(je,Be){return je?"":"M "+Be+" "+he+" l 1 0 0 1 -1 0 Z"}).join(" ")}).join(" "),fgColor:Ee,fgD:V.map(function(I,he){return I.map(function(je,Be){return je?"M "+Be+" "+he+" l 1 0 0 1 -1 0 Z":""}).join(" ")}).join(" "),ref:q,size:R,viewBoxSize:V.length}))});return no.QRCode=U,U.displayName="QRCode",U.propTypes=L,no.default=U,no}var dE=hE();const fE=L1(dE),pE=()=>{};var Eg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},mE=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=i[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=i[t++],h=i[t++],m=i[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const l=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},c_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const l=i[o],h=o+1<i.length,m=h?i[o+1]:0,g=o+2<i.length,y=g?i[o+2]:0,E=l>>2,w=(l&3)<<4|m>>4;let S=(m&15)<<2|y>>6,L=y&63;g||(L=64,h||(S=64)),s.push(t[E],t[w],t[S],t[L])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(u_(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):mE(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const l=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const y=o<i.length?t[i.charAt(o)]:64;++o;const w=o<i.length?t[i.charAt(o)]:64;if(++o,l==null||m==null||y==null||w==null)throw new gE;const S=l<<2|m>>4;if(s.push(S),y!==64){const L=m<<4&240|y>>2;if(s.push(L),w!==64){const U=y<<6&192|w;s.push(U)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class gE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yE=function(i){const e=u_(i);return c_.encodeByteArray(e,!0)},bu=function(i){return yE(i).replace(/\./g,"")},h_=function(i){try{return c_.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE=()=>_E().__FIREBASE_DEFAULTS__,EE=()=>{if(typeof process>"u"||typeof Eg>"u")return;const i=Eg.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},wE=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&h_(i[1]);return e&&JSON.parse(e)},rc=()=>{try{return pE()||vE()||EE()||wE()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},d_=i=>{var e,t;return(t=(e=rc())==null?void 0:e.emulatorHosts)==null?void 0:t[i]},TE=i=>{const e=d_(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},f_=()=>{var i;return(i=rc())==null?void 0:i.config},p_=i=>{var e;return(e=rc())==null?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function m_(i){return(await fetch(i,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,l=i.sub||i.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...i};return[bu(JSON.stringify(t)),bu(JSON.stringify(h)),""].join(".")}const ka={};function AE(){const i={prod:[],emulator:[]};for(const e of Object.keys(ka))ka[e]?i.emulator.push(e):i.prod.push(e);return i}function RE(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let wg=!1;function g_(i,e){if(typeof window>"u"||typeof document>"u"||!To(window.location.host)||ka[i]===e||ka[i]||wg)return;ka[i]=e;function t(S){return`__firebase__banner__${S}`}const s="__firebase__banner",l=AE().prod.length>0;function h(){const S=document.getElementById(s);S&&S.remove()}function m(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function g(S,L){S.setAttribute("width","24"),S.setAttribute("id",L),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function y(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{wg=!0,h()},S}function E(S,L){S.setAttribute("id",L),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function w(){const S=RE(s),L=t("text"),U=document.getElementById(L)||document.createElement("span"),$=t("learnmore"),q=document.getElementById($)||document.createElement("a"),J=t("preprendIcon"),te=document.getElementById(J)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const fe=S.element;m(fe),E(q,$);const Ee=y();g(te,J),fe.append(te,U,q,Ee),document.body.appendChild(fe)}l?(U.innerText="Preview backend disconnected.",te.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(te.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,U.innerText="Preview backend running in this workspace."),U.setAttribute("id",L)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function CE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jt())}function PE(){var e;const i=(e=rc())==null?void 0:e.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function NE(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function xE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function DE(){const i=jt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function VE(){return!PE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function OE(){try{return typeof indexedDB=="object"}catch{return!1}}function LE(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)==null?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME="FirebaseError";class Nr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=ME,Object.setPrototypeOf(this,Nr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qa.prototype.create)}}class qa{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?bE(l,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Nr(o,m,s)}}function bE(i,e){return i.replace(FE,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const FE=/\{\$([^}]+)}/g;function UE(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function as(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=i[o],h=e[o];if(Tg(l)&&Tg(h)){if(!as(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Tg(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function jE(i,e){const t=new BE(i,e);return t.subscribe.bind(t)}class BE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");zE(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=dd),o.error===void 0&&(o.error=dd),o.complete===void 0&&(o.complete=dd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zE(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function dd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(i){return i&&i._delegate?i._delegate:i}class ls{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new IE;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(HE(e))try{this.getOrInitializeService({instanceIdentifier:rs})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=rs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=rs){return this.instances.has(e)}getOptions(e=rs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(l);s===m&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const l=this.instances.get(s);return l&&e(l,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:qE(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=rs){return this.component?this.component.multipleInstances?e:rs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qE(i){return i===rs?void 0:i}function HE(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new $E(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ke||(ke={}));const GE={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},KE=ke.INFO,QE={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},XE=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=QE[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xd{constructor(e){this.name=e,this._logLevel=KE,this._logHandler=XE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?GE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const YE=(i,e)=>e.some(t=>i instanceof t);let Ig,Sg;function JE(){return Ig||(Ig=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ZE(){return Sg||(Sg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const y_=new WeakMap,Sd=new WeakMap,__=new WeakMap,fd=new WeakMap,Yd=new WeakMap;function ew(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",l),i.removeEventListener("error",h)},l=()=>{t(fi(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",l),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&y_.set(t,i)}).catch(()=>{}),Yd.set(e,i),e}function tw(i){if(Sd.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",l),i.removeEventListener("error",h),i.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",l),i.addEventListener("error",h),i.addEventListener("abort",h)});Sd.set(i,e)}let Ad={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Sd.get(i);if(e==="objectStoreNames")return i.objectStoreNames||__.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return fi(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function nw(i){Ad=i(Ad)}function rw(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(pd(this),e,...t);return __.set(s,e.sort?e.sort():[e]),fi(s)}:ZE().includes(i)?function(...e){return i.apply(pd(this),e),fi(y_.get(this))}:function(...e){return fi(i.apply(pd(this),e))}}function iw(i){return typeof i=="function"?rw(i):(i instanceof IDBTransaction&&tw(i),YE(i,JE())?new Proxy(i,Ad):i)}function fi(i){if(i instanceof IDBRequest)return ew(i);if(fd.has(i))return fd.get(i);const e=iw(i);return e!==i&&(fd.set(i,e),Yd.set(e,i)),e}const pd=i=>Yd.get(i);function sw(i,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(i,e),m=fi(h);return s&&h.addEventListener("upgradeneeded",g=>{s(fi(h.result),g.oldVersion,g.newVersion,fi(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}const ow=["get","getKey","getAll","getAllKeys","count"],aw=["put","add","delete","clear"],md=new Map;function Ag(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(md.get(e))return md.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=aw.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||ow.includes(t)))return;const l=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let y=g.store;return s&&(y=y.index(m.shift())),(await Promise.all([y[t](...m),o&&g.done]))[0]};return md.set(e,l),l}nw(i=>({...i,get:(e,t,s)=>Ag(e,t)||i.get(e,t,s),has:(e,t)=>!!Ag(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(uw(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function uw(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rd="@firebase/app",Rg="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new Xd("@firebase/app"),cw="@firebase/app-compat",hw="@firebase/analytics-compat",dw="@firebase/analytics",fw="@firebase/app-check-compat",pw="@firebase/app-check",mw="@firebase/auth",gw="@firebase/auth-compat",yw="@firebase/database",_w="@firebase/data-connect",vw="@firebase/database-compat",Ew="@firebase/functions",ww="@firebase/functions-compat",Tw="@firebase/installations",Iw="@firebase/installations-compat",Sw="@firebase/messaging",Aw="@firebase/messaging-compat",Rw="@firebase/performance",Cw="@firebase/performance-compat",Pw="@firebase/remote-config",kw="@firebase/remote-config-compat",Nw="@firebase/storage",xw="@firebase/storage-compat",Dw="@firebase/firestore",Vw="@firebase/ai",Ow="@firebase/firestore-compat",Lw="firebase",Mw="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd="[DEFAULT]",bw={[Rd]:"fire-core",[cw]:"fire-core-compat",[dw]:"fire-analytics",[hw]:"fire-analytics-compat",[pw]:"fire-app-check",[fw]:"fire-app-check-compat",[mw]:"fire-auth",[gw]:"fire-auth-compat",[yw]:"fire-rtdb",[_w]:"fire-data-connect",[vw]:"fire-rtdb-compat",[Ew]:"fire-fn",[ww]:"fire-fn-compat",[Tw]:"fire-iid",[Iw]:"fire-iid-compat",[Sw]:"fire-fcm",[Aw]:"fire-fcm-compat",[Rw]:"fire-perf",[Cw]:"fire-perf-compat",[Pw]:"fire-rc",[kw]:"fire-rc-compat",[Nw]:"fire-gcs",[xw]:"fire-gcs-compat",[Dw]:"fire-fst",[Ow]:"fire-fst-compat",[Vw]:"fire-vertex","fire-js":"fire-js",[Lw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu=new Map,Fw=new Map,Pd=new Map;function Cg(i,e){try{i.container.addComponent(e)}catch(t){Ar.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function po(i){const e=i.name;if(Pd.has(e))return Ar.debug(`There were multiple attempts to register component ${e}.`),!1;Pd.set(e,i);for(const t of Fu.values())Cg(t,i);for(const t of Fw.values())Cg(t,i);return!0}function Jd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function kn(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pi=new qa("app","Firebase",Uw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ls("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=Mw;function v_(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s={name:Cd,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw pi.create("bad-app-name",{appName:String(o)});if(t||(t=f_()),!t)throw pi.create("no-options");const l=Fu.get(o);if(l){if(as(t,l.options)&&as(s,l.config))return l;throw pi.create("duplicate-app",{appName:o})}const h=new WE(o);for(const g of Pd.values())h.addComponent(g);const m=new jw(t,s,h);return Fu.set(o,m),m}function E_(i=Cd){const e=Fu.get(i);if(!e&&i===Cd&&f_())return v_();if(!e)throw pi.create("no-app",{appName:i});return e}function mi(i,e,t){let s=bw[i]??i;t&&(s+=`-${t}`);const o=s.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&h.push("and"),l&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ar.warn(h.join(" "));return}po(new ls(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw="firebase-heartbeat-database",zw=1,La="firebase-heartbeat-store";let gd=null;function w_(){return gd||(gd=sw(Bw,zw,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(La)}catch(t){console.warn(t)}}}}).catch(i=>{throw pi.create("idb-open",{originalErrorMessage:i.message})})),gd}async function $w(i){try{const t=(await w_()).transaction(La),s=await t.objectStore(La).get(T_(i));return await t.done,s}catch(e){if(e instanceof Nr)Ar.warn(e.message);else{const t=pi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ar.warn(t.message)}}}async function Pg(i,e){try{const s=(await w_()).transaction(La,"readwrite");await s.objectStore(La).put(e,T_(i)),await s.done}catch(t){if(t instanceof Nr)Ar.warn(t.message);else{const s=pi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ar.warn(s.message)}}}function T_(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw=1024,Hw=30;class Ww{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Kw(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=kg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>Hw){const h=Qw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ar.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=kg(),{heartbeatsToSend:s,unsentEntries:o}=Gw(this._heartbeatsCache.heartbeats),l=bu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Ar.warn(t),""}}}function kg(){return new Date().toISOString().substring(0,10)}function Gw(i,e=qw){const t=[];let s=i.slice();for(const o of i){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),Ng(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Ng(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Kw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return OE()?LE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await $w(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Pg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Pg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ng(i){return bu(JSON.stringify({version:2,heartbeats:i})).length}function Qw(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(i){po(new ls("platform-logger",e=>new lw(e),"PRIVATE")),po(new ls("heartbeat",e=>new Ww(e),"PRIVATE")),mi(Rd,Rg,i),mi(Rd,Rg,"esm2020"),mi("fire-js","")}Xw("");var Yw="firebase",Jw="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mi(Yw,Jw,"app");var xg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gi,I_;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,R){function C(){}C.prototype=R.prototype,k.F=R.prototype,k.prototype=new C,k.prototype.constructor=k,k.D=function(x,N,V){for(var I=Array(arguments.length-2),he=2;he<arguments.length;he++)I[he-2]=arguments[he];return R.prototype[N].apply(x,I)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,R,C){C||(C=0);const x=Array(16);if(typeof R=="string")for(var N=0;N<16;++N)x[N]=R.charCodeAt(C++)|R.charCodeAt(C++)<<8|R.charCodeAt(C++)<<16|R.charCodeAt(C++)<<24;else for(N=0;N<16;++N)x[N]=R[C++]|R[C++]<<8|R[C++]<<16|R[C++]<<24;R=k.g[0],C=k.g[1],N=k.g[2];let V=k.g[3],I;I=R+(V^C&(N^V))+x[0]+3614090360&4294967295,R=C+(I<<7&4294967295|I>>>25),I=V+(N^R&(C^N))+x[1]+3905402710&4294967295,V=R+(I<<12&4294967295|I>>>20),I=N+(C^V&(R^C))+x[2]+606105819&4294967295,N=V+(I<<17&4294967295|I>>>15),I=C+(R^N&(V^R))+x[3]+3250441966&4294967295,C=N+(I<<22&4294967295|I>>>10),I=R+(V^C&(N^V))+x[4]+4118548399&4294967295,R=C+(I<<7&4294967295|I>>>25),I=V+(N^R&(C^N))+x[5]+1200080426&4294967295,V=R+(I<<12&4294967295|I>>>20),I=N+(C^V&(R^C))+x[6]+2821735955&4294967295,N=V+(I<<17&4294967295|I>>>15),I=C+(R^N&(V^R))+x[7]+4249261313&4294967295,C=N+(I<<22&4294967295|I>>>10),I=R+(V^C&(N^V))+x[8]+1770035416&4294967295,R=C+(I<<7&4294967295|I>>>25),I=V+(N^R&(C^N))+x[9]+2336552879&4294967295,V=R+(I<<12&4294967295|I>>>20),I=N+(C^V&(R^C))+x[10]+4294925233&4294967295,N=V+(I<<17&4294967295|I>>>15),I=C+(R^N&(V^R))+x[11]+2304563134&4294967295,C=N+(I<<22&4294967295|I>>>10),I=R+(V^C&(N^V))+x[12]+1804603682&4294967295,R=C+(I<<7&4294967295|I>>>25),I=V+(N^R&(C^N))+x[13]+4254626195&4294967295,V=R+(I<<12&4294967295|I>>>20),I=N+(C^V&(R^C))+x[14]+2792965006&4294967295,N=V+(I<<17&4294967295|I>>>15),I=C+(R^N&(V^R))+x[15]+1236535329&4294967295,C=N+(I<<22&4294967295|I>>>10),I=R+(N^V&(C^N))+x[1]+4129170786&4294967295,R=C+(I<<5&4294967295|I>>>27),I=V+(C^N&(R^C))+x[6]+3225465664&4294967295,V=R+(I<<9&4294967295|I>>>23),I=N+(R^C&(V^R))+x[11]+643717713&4294967295,N=V+(I<<14&4294967295|I>>>18),I=C+(V^R&(N^V))+x[0]+3921069994&4294967295,C=N+(I<<20&4294967295|I>>>12),I=R+(N^V&(C^N))+x[5]+3593408605&4294967295,R=C+(I<<5&4294967295|I>>>27),I=V+(C^N&(R^C))+x[10]+38016083&4294967295,V=R+(I<<9&4294967295|I>>>23),I=N+(R^C&(V^R))+x[15]+3634488961&4294967295,N=V+(I<<14&4294967295|I>>>18),I=C+(V^R&(N^V))+x[4]+3889429448&4294967295,C=N+(I<<20&4294967295|I>>>12),I=R+(N^V&(C^N))+x[9]+568446438&4294967295,R=C+(I<<5&4294967295|I>>>27),I=V+(C^N&(R^C))+x[14]+3275163606&4294967295,V=R+(I<<9&4294967295|I>>>23),I=N+(R^C&(V^R))+x[3]+4107603335&4294967295,N=V+(I<<14&4294967295|I>>>18),I=C+(V^R&(N^V))+x[8]+1163531501&4294967295,C=N+(I<<20&4294967295|I>>>12),I=R+(N^V&(C^N))+x[13]+2850285829&4294967295,R=C+(I<<5&4294967295|I>>>27),I=V+(C^N&(R^C))+x[2]+4243563512&4294967295,V=R+(I<<9&4294967295|I>>>23),I=N+(R^C&(V^R))+x[7]+1735328473&4294967295,N=V+(I<<14&4294967295|I>>>18),I=C+(V^R&(N^V))+x[12]+2368359562&4294967295,C=N+(I<<20&4294967295|I>>>12),I=R+(C^N^V)+x[5]+4294588738&4294967295,R=C+(I<<4&4294967295|I>>>28),I=V+(R^C^N)+x[8]+2272392833&4294967295,V=R+(I<<11&4294967295|I>>>21),I=N+(V^R^C)+x[11]+1839030562&4294967295,N=V+(I<<16&4294967295|I>>>16),I=C+(N^V^R)+x[14]+4259657740&4294967295,C=N+(I<<23&4294967295|I>>>9),I=R+(C^N^V)+x[1]+2763975236&4294967295,R=C+(I<<4&4294967295|I>>>28),I=V+(R^C^N)+x[4]+1272893353&4294967295,V=R+(I<<11&4294967295|I>>>21),I=N+(V^R^C)+x[7]+4139469664&4294967295,N=V+(I<<16&4294967295|I>>>16),I=C+(N^V^R)+x[10]+3200236656&4294967295,C=N+(I<<23&4294967295|I>>>9),I=R+(C^N^V)+x[13]+681279174&4294967295,R=C+(I<<4&4294967295|I>>>28),I=V+(R^C^N)+x[0]+3936430074&4294967295,V=R+(I<<11&4294967295|I>>>21),I=N+(V^R^C)+x[3]+3572445317&4294967295,N=V+(I<<16&4294967295|I>>>16),I=C+(N^V^R)+x[6]+76029189&4294967295,C=N+(I<<23&4294967295|I>>>9),I=R+(C^N^V)+x[9]+3654602809&4294967295,R=C+(I<<4&4294967295|I>>>28),I=V+(R^C^N)+x[12]+3873151461&4294967295,V=R+(I<<11&4294967295|I>>>21),I=N+(V^R^C)+x[15]+530742520&4294967295,N=V+(I<<16&4294967295|I>>>16),I=C+(N^V^R)+x[2]+3299628645&4294967295,C=N+(I<<23&4294967295|I>>>9),I=R+(N^(C|~V))+x[0]+4096336452&4294967295,R=C+(I<<6&4294967295|I>>>26),I=V+(C^(R|~N))+x[7]+1126891415&4294967295,V=R+(I<<10&4294967295|I>>>22),I=N+(R^(V|~C))+x[14]+2878612391&4294967295,N=V+(I<<15&4294967295|I>>>17),I=C+(V^(N|~R))+x[5]+4237533241&4294967295,C=N+(I<<21&4294967295|I>>>11),I=R+(N^(C|~V))+x[12]+1700485571&4294967295,R=C+(I<<6&4294967295|I>>>26),I=V+(C^(R|~N))+x[3]+2399980690&4294967295,V=R+(I<<10&4294967295|I>>>22),I=N+(R^(V|~C))+x[10]+4293915773&4294967295,N=V+(I<<15&4294967295|I>>>17),I=C+(V^(N|~R))+x[1]+2240044497&4294967295,C=N+(I<<21&4294967295|I>>>11),I=R+(N^(C|~V))+x[8]+1873313359&4294967295,R=C+(I<<6&4294967295|I>>>26),I=V+(C^(R|~N))+x[15]+4264355552&4294967295,V=R+(I<<10&4294967295|I>>>22),I=N+(R^(V|~C))+x[6]+2734768916&4294967295,N=V+(I<<15&4294967295|I>>>17),I=C+(V^(N|~R))+x[13]+1309151649&4294967295,C=N+(I<<21&4294967295|I>>>11),I=R+(N^(C|~V))+x[4]+4149444226&4294967295,R=C+(I<<6&4294967295|I>>>26),I=V+(C^(R|~N))+x[11]+3174756917&4294967295,V=R+(I<<10&4294967295|I>>>22),I=N+(R^(V|~C))+x[2]+718787259&4294967295,N=V+(I<<15&4294967295|I>>>17),I=C+(V^(N|~R))+x[9]+3951481745&4294967295,k.g[0]=k.g[0]+R&4294967295,k.g[1]=k.g[1]+(N+(I<<21&4294967295|I>>>11))&4294967295,k.g[2]=k.g[2]+N&4294967295,k.g[3]=k.g[3]+V&4294967295}s.prototype.v=function(k,R){R===void 0&&(R=k.length);const C=R-this.blockSize,x=this.C;let N=this.h,V=0;for(;V<R;){if(N==0)for(;V<=C;)o(this,k,V),V+=this.blockSize;if(typeof k=="string"){for(;V<R;)if(x[N++]=k.charCodeAt(V++),N==this.blockSize){o(this,x),N=0;break}}else for(;V<R;)if(x[N++]=k[V++],N==this.blockSize){o(this,x),N=0;break}}this.h=N,this.o+=R},s.prototype.A=function(){var k=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);k[0]=128;for(var R=1;R<k.length-8;++R)k[R]=0;R=this.o*8;for(var C=k.length-8;C<k.length;++C)k[C]=R&255,R/=256;for(this.v(k),k=Array(16),R=0,C=0;C<4;++C)for(let x=0;x<32;x+=8)k[R++]=this.g[C]>>>x&255;return k};function l(k,R){var C=m;return Object.prototype.hasOwnProperty.call(C,k)?C[k]:C[k]=R(k)}function h(k,R){this.h=R;const C=[];let x=!0;for(let N=k.length-1;N>=0;N--){const V=k[N]|0;x&&V==R||(C[N]=V,x=!1)}this.g=C}var m={};function g(k){return-128<=k&&k<128?l(k,function(R){return new h([R|0],R<0?-1:0)}):new h([k|0],k<0?-1:0)}function y(k){if(isNaN(k)||!isFinite(k))return w;if(k<0)return q(y(-k));const R=[];let C=1;for(let x=0;k>=C;x++)R[x]=k/C|0,C*=4294967296;return new h(R,0)}function E(k,R){if(k.length==0)throw Error("number format error: empty string");if(R=R||10,R<2||36<R)throw Error("radix out of range: "+R);if(k.charAt(0)=="-")return q(E(k.substring(1),R));if(k.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=y(Math.pow(R,8));let x=w;for(let V=0;V<k.length;V+=8){var N=Math.min(8,k.length-V);const I=parseInt(k.substring(V,V+N),R);N<8?(N=y(Math.pow(R,N)),x=x.j(N).add(y(I))):(x=x.j(C),x=x.add(y(I)))}return x}var w=g(0),S=g(1),L=g(16777216);i=h.prototype,i.m=function(){if($(this))return-q(this).m();let k=0,R=1;for(let C=0;C<this.g.length;C++){const x=this.i(C);k+=(x>=0?x:4294967296+x)*R,R*=4294967296}return k},i.toString=function(k){if(k=k||10,k<2||36<k)throw Error("radix out of range: "+k);if(U(this))return"0";if($(this))return"-"+q(this).toString(k);const R=y(Math.pow(k,6));var C=this;let x="";for(;;){const N=Ee(C,R).g;C=J(C,N.j(R));let V=((C.g.length>0?C.g[0]:C.h)>>>0).toString(k);if(C=N,U(C))return V+x;for(;V.length<6;)V="0"+V;x=V+x}},i.i=function(k){return k<0?0:k<this.g.length?this.g[k]:this.h};function U(k){if(k.h!=0)return!1;for(let R=0;R<k.g.length;R++)if(k.g[R]!=0)return!1;return!0}function $(k){return k.h==-1}i.l=function(k){return k=J(this,k),$(k)?-1:U(k)?0:1};function q(k){const R=k.g.length,C=[];for(let x=0;x<R;x++)C[x]=~k.g[x];return new h(C,~k.h).add(S)}i.abs=function(){return $(this)?q(this):this},i.add=function(k){const R=Math.max(this.g.length,k.g.length),C=[];let x=0;for(let N=0;N<=R;N++){let V=x+(this.i(N)&65535)+(k.i(N)&65535),I=(V>>>16)+(this.i(N)>>>16)+(k.i(N)>>>16);x=I>>>16,V&=65535,I&=65535,C[N]=I<<16|V}return new h(C,C[C.length-1]&-2147483648?-1:0)};function J(k,R){return k.add(q(R))}i.j=function(k){if(U(this)||U(k))return w;if($(this))return $(k)?q(this).j(q(k)):q(q(this).j(k));if($(k))return q(this.j(q(k)));if(this.l(L)<0&&k.l(L)<0)return y(this.m()*k.m());const R=this.g.length+k.g.length,C=[];for(var x=0;x<2*R;x++)C[x]=0;for(x=0;x<this.g.length;x++)for(let N=0;N<k.g.length;N++){const V=this.i(x)>>>16,I=this.i(x)&65535,he=k.i(N)>>>16,je=k.i(N)&65535;C[2*x+2*N]+=I*je,te(C,2*x+2*N),C[2*x+2*N+1]+=V*je,te(C,2*x+2*N+1),C[2*x+2*N+1]+=I*he,te(C,2*x+2*N+1),C[2*x+2*N+2]+=V*he,te(C,2*x+2*N+2)}for(k=0;k<R;k++)C[k]=C[2*k+1]<<16|C[2*k];for(k=R;k<2*R;k++)C[k]=0;return new h(C,0)};function te(k,R){for(;(k[R]&65535)!=k[R];)k[R+1]+=k[R]>>>16,k[R]&=65535,R++}function fe(k,R){this.g=k,this.h=R}function Ee(k,R){if(U(R))throw Error("division by zero");if(U(k))return new fe(w,w);if($(k))return R=Ee(q(k),R),new fe(q(R.g),q(R.h));if($(R))return R=Ee(k,q(R)),new fe(q(R.g),R.h);if(k.g.length>30){if($(k)||$(R))throw Error("slowDivide_ only works with positive integers.");for(var C=S,x=R;x.l(k)<=0;)C=Oe(C),x=Oe(x);var N=Ie(C,1),V=Ie(x,1);for(x=Ie(x,2),C=Ie(C,2);!U(x);){var I=V.add(x);I.l(k)<=0&&(N=N.add(C),V=I),x=Ie(x,1),C=Ie(C,1)}return R=J(k,N.j(R)),new fe(N,R)}for(N=w;k.l(R)>=0;){for(C=Math.max(1,Math.floor(k.m()/R.m())),x=Math.ceil(Math.log(C)/Math.LN2),x=x<=48?1:Math.pow(2,x-48),V=y(C),I=V.j(R);$(I)||I.l(k)>0;)C-=x,V=y(C),I=V.j(R);U(V)&&(V=S),N=N.add(V),k=J(k,I)}return new fe(N,k)}i.B=function(k){return Ee(this,k).h},i.and=function(k){const R=Math.max(this.g.length,k.g.length),C=[];for(let x=0;x<R;x++)C[x]=this.i(x)&k.i(x);return new h(C,this.h&k.h)},i.or=function(k){const R=Math.max(this.g.length,k.g.length),C=[];for(let x=0;x<R;x++)C[x]=this.i(x)|k.i(x);return new h(C,this.h|k.h)},i.xor=function(k){const R=Math.max(this.g.length,k.g.length),C=[];for(let x=0;x<R;x++)C[x]=this.i(x)^k.i(x);return new h(C,this.h^k.h)};function Oe(k){const R=k.g.length+1,C=[];for(let x=0;x<R;x++)C[x]=k.i(x)<<1|k.i(x-1)>>>31;return new h(C,k.h)}function Ie(k,R){const C=R>>5;R%=32;const x=k.g.length-C,N=[];for(let V=0;V<x;V++)N[V]=R>0?k.i(V+C)>>>R|k.i(V+C+1)<<32-R:k.i(V+C);return new h(N,k.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,I_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=E,gi=h}).apply(typeof xg<"u"?xg:typeof self<"u"?self:typeof window<"u"?window:{});var vu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var S_,Aa,A_,Ru,kd,R_,C_,P_;(function(){var i,e=Object.defineProperty;function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof vu=="object"&&vu];for(var p=0;p<u.length;++p){var _=u[p];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=t(this);function o(u,p){if(p)e:{var _=s;u=u.split(".");for(var T=0;T<u.length-1;T++){var b=u[T];if(!(b in _))break e;_=_[b]}u=u[u.length-1],T=_[u],p=p(T),p!=T&&p!=null&&e(_,u,{configurable:!0,writable:!0,value:p})}}o("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(u){return u||function(p){var _=[],T;for(T in p)Object.prototype.hasOwnProperty.call(p,T)&&_.push([T,p[T]]);return _}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},h=this||self;function m(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function g(u,p,_){return u.call.apply(u.bind,arguments)}function y(u,p,_){return y=g,y.apply(null,arguments)}function E(u,p){var _=Array.prototype.slice.call(arguments,1);return function(){var T=_.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function w(u,p){function _(){}_.prototype=p.prototype,u.Z=p.prototype,u.prototype=new _,u.prototype.constructor=u,u.Ob=function(T,b,B){for(var ee=Array(arguments.length-2),we=2;we<arguments.length;we++)ee[we-2]=arguments[we];return p.prototype[b].apply(T,ee)}}var S=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function L(u){const p=u.length;if(p>0){const _=Array(p);for(let T=0;T<p;T++)_[T]=u[T];return _}return[]}function U(u,p){for(let T=1;T<arguments.length;T++){const b=arguments[T];var _=typeof b;if(_=_!="object"?_:b?Array.isArray(b)?"array":_:"null",_=="array"||_=="object"&&typeof b.length=="number"){_=u.length||0;const B=b.length||0;u.length=_+B;for(let ee=0;ee<B;ee++)u[_+ee]=b[ee]}else u.push(b)}}class ${constructor(p,_){this.i=p,this.j=_,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function q(u){h.setTimeout(()=>{throw u},0)}function J(){var u=k;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class te{constructor(){this.h=this.g=null}add(p,_){const T=fe.get();T.set(p,_),this.h?this.h.next=T:this.g=T,this.h=T}}var fe=new $(()=>new Ee,u=>u.reset());class Ee{constructor(){this.next=this.g=this.h=null}set(p,_){this.h=p,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Oe,Ie=!1,k=new te,R=()=>{const u=Promise.resolve(void 0);Oe=()=>{u.then(C)}};function C(){for(var u;u=J();){try{u.h.call(u.g)}catch(_){q(_)}var p=fe;p.j(u),p.h<100&&(p.h++,u.next=p.g,p.g=u)}Ie=!1}function x(){this.u=this.u,this.C=this.C}x.prototype.u=!1,x.prototype.dispose=function(){this.u||(this.u=!0,this.N())},x.prototype[Symbol.dispose]=function(){this.dispose()},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var V=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};h.addEventListener("test",_,p),h.removeEventListener("test",_,p)}catch{}return u})();function I(u){return/^[\s\xa0]*$/.test(u)}function he(u,p){N.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,p)}w(he,N),he.prototype.init=function(u,p){const _=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget,p||(_=="mouseover"?p=u.fromElement:_=="mouseout"&&(p=u.toElement)),this.relatedTarget=p,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&he.Z.h.call(this)},he.prototype.h=function(){he.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var je="closure_listenable_"+(Math.random()*1e6|0),Be=0;function Fe(u,p,_,T,b){this.listener=u,this.proxy=null,this.src=p,this.type=_,this.capture=!!T,this.ha=b,this.key=++Be,this.da=this.fa=!1}function Z(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function ce(u,p,_){for(const T in u)p.call(_,u[T],T,u)}function ne(u,p){for(const _ in u)p.call(void 0,u[_],_,u)}function O(u){const p={};for(const _ in u)p[_]=u[_];return p}const G="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Se(u,p){let _,T;for(let b=1;b<arguments.length;b++){T=arguments[b];for(_ in T)u[_]=T[_];for(let B=0;B<G.length;B++)_=G[B],Object.prototype.hasOwnProperty.call(T,_)&&(u[_]=T[_])}}function Ae(u){this.src=u,this.g={},this.h=0}Ae.prototype.add=function(u,p,_,T,b){const B=u.toString();u=this.g[B],u||(u=this.g[B]=[],this.h++);const ee=Pe(u,p,T,b);return ee>-1?(p=u[ee],_||(p.fa=!1)):(p=new Fe(p,this.src,B,!!T,b),p.fa=_,u.push(p)),p};function Ce(u,p){const _=p.type;if(_ in u.g){var T=u.g[_],b=Array.prototype.indexOf.call(T,p,void 0),B;(B=b>=0)&&Array.prototype.splice.call(T,b,1),B&&(Z(p),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Pe(u,p,_,T){for(let b=0;b<u.length;++b){const B=u[b];if(!B.da&&B.listener==p&&B.capture==!!_&&B.ha==T)return b}return-1}var ze="closure_lm_"+(Math.random()*1e6|0),Le={};function He(u,p,_,T,b){if(Array.isArray(p)){for(let B=0;B<p.length;B++)He(u,p[B],_,T,b);return null}return _=xo(_),u&&u[je]?u.J(p,_,m(T)?!!T.capture:!1,b):Bt(u,p,_,!1,T,b)}function Bt(u,p,_,T,b,B){if(!p)throw Error("Invalid event type");const ee=m(b)?!!b.capture:!!b;let we=gs(u);if(we||(u[ze]=we=new Ae(u)),_=we.add(p,_,T,ee,B),_.proxy)return _;if(T=ps(),_.proxy=T,T.src=u,T.listener=_,u.addEventListener)V||(b=ee),b===void 0&&(b=!1),u.addEventListener(p.toString(),T,b);else if(u.attachEvent)u.attachEvent(ms(p.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return _}function ps(){function u(_){return p.call(u.src,u.listener,_)}const p=nl;return u}function No(u,p,_,T,b){if(Array.isArray(p))for(var B=0;B<p.length;B++)No(u,p[B],_,T,b);else T=m(T)?!!T.capture:!!T,_=xo(_),u&&u[je]?(u=u.i,B=String(p).toString(),B in u.g&&(p=u.g[B],_=Pe(p,_,T,b),_>-1&&(Z(p[_]),Array.prototype.splice.call(p,_,1),p.length==0&&(delete u.g[B],u.h--)))):u&&(u=gs(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Pe(p,_,T,b)),(_=u>-1?p[u]:null)&&xr(_))}function xr(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[je])Ce(p.i,u);else{var _=u.type,T=u.proxy;p.removeEventListener?p.removeEventListener(_,T,u.capture):p.detachEvent?p.detachEvent(ms(_),T):p.addListener&&p.removeListener&&p.removeListener(T),(_=gs(p))?(Ce(_,u),_.h==0&&(_.src=null,p[ze]=null)):Z(u)}}}function ms(u){return u in Le?Le[u]:Le[u]="on"+u}function nl(u,p){if(u.da)u=!0;else{p=new he(p,this);const _=u.listener,T=u.ha||u.src;u.fa&&xr(u),u=_.call(T,p)}return u}function gs(u){return u=u[ze],u instanceof Ae?u:null}var ki="__closure_events_fn_"+(Math.random()*1e9>>>0);function xo(u){return typeof u=="function"?u:(u[ki]||(u[ki]=function(p){return u.handleEvent(p)}),u[ki])}function ct(){x.call(this),this.i=new Ae(this),this.M=this,this.G=null}w(ct,x),ct.prototype[je]=!0,ct.prototype.removeEventListener=function(u,p,_,T){No(this,u,p,_,T)};function st(u,p){var _,T=u.G;if(T)for(_=[];T;T=T.G)_.push(T);if(u=u.M,T=p.type||p,typeof p=="string")p=new N(p,u);else if(p instanceof N)p.target=p.target||u;else{var b=p;p=new N(T,u),Se(p,b)}b=!0;let B,ee;if(_)for(ee=_.length-1;ee>=0;ee--)B=p.g=_[ee],b=vn(B,T,!0,p)&&b;if(B=p.g=u,b=vn(B,T,!0,p)&&b,b=vn(B,T,!1,p)&&b,_)for(ee=0;ee<_.length;ee++)B=p.g=_[ee],b=vn(B,T,!1,p)&&b}ct.prototype.N=function(){if(ct.Z.N.call(this),this.i){var u=this.i;for(const p in u.g){const _=u.g[p];for(let T=0;T<_.length;T++)Z(_[T]);delete u.g[p],u.h--}}this.G=null},ct.prototype.J=function(u,p,_,T){return this.i.add(String(u),p,!1,_,T)},ct.prototype.K=function(u,p,_,T){return this.i.add(String(u),p,!0,_,T)};function vn(u,p,_,T){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();let b=!0;for(let B=0;B<p.length;++B){const ee=p[B];if(ee&&!ee.da&&ee.capture==_){const we=ee.listener,ot=ee.ha||ee.src;ee.fa&&Ce(u.i,ee),b=we.call(ot,T)!==!1&&b}}return b&&!T.defaultPrevented}function Do(u,p){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=y(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:h.setTimeout(u,p||0)}function Vo(u){u.g=Do(()=>{u.g=null,u.i&&(u.i=!1,Vo(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class rl extends x{constructor(p,_){super(),this.m=p,this.l=_,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Vo(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Dr(u){x.call(this),this.h=u,this.g={}}w(Dr,x);var Oo=[];function ys(u){ce(u.g,function(p,_){this.g.hasOwnProperty(_)&&xr(p)},u),u.g={}}Dr.prototype.N=function(){Dr.Z.N.call(this),ys(this)},Dr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vr=h.JSON.stringify,il=h.JSON.parse,Ni=class{stringify(u){return h.JSON.stringify(u,void 0)}parse(u){return h.JSON.parse(u,void 0)}};function Or(){}function sl(){}var Lr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function _s(){N.call(this,"d")}w(_s,N);function Lo(){N.call(this,"c")}w(Lo,N);var En={},vs=null;function Mr(){return vs=vs||new ct}En.Ia="serverreachability";function Es(u){N.call(this,En.Ia,u)}w(Es,N);function sr(u){const p=Mr();st(p,new Es(p))}En.STAT_EVENT="statevent";function or(u,p){N.call(this,En.STAT_EVENT,u),this.stat=p}w(or,N);function rt(u){const p=Mr();st(p,new or(p,u))}En.Ja="timingevent";function Mo(u,p){N.call(this,En.Ja,u),this.size=p}w(Mo,N);function br(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){u()},p)}function Fr(){this.g=!0}Fr.prototype.ua=function(){this.g=!1};function ol(u,p,_,T,b,B){u.info(function(){if(u.g)if(B){var ee="",we=B.split("&");for(let qe=0;qe<we.length;qe++){var ot=we[qe].split("=");if(ot.length>1){const ht=ot[0];ot=ot[1];const sn=ht.split("_");ee=sn.length>=2&&sn[1]=="type"?ee+(ht+"="+ot+"&"):ee+(ht+"=redacted&")}}}else ee=null;else ee=B;return"XMLHTTP REQ ("+T+") [attempt "+b+"]: "+p+`
`+_+`
`+ee})}function al(u,p,_,T,b,B,ee){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+b+"]: "+p+`
`+_+`
`+B+" "+ee})}function Vn(u,p,_,T){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+xi(u,_)+(T?" "+T:"")})}function ll(u,p){u.info(function(){return"TIMEOUT: "+p})}Fr.prototype.info=function(){};function xi(u,p){if(!u.g)return p;if(!p)return null;try{const B=JSON.parse(p);if(B){for(u=0;u<B.length;u++)if(Array.isArray(B[u])){var _=B[u];if(!(_.length<2)){var T=_[1];if(Array.isArray(T)&&!(T.length<1)){var b=T[0];if(b!="noop"&&b!="stop"&&b!="close")for(let ee=1;ee<T.length;ee++)T[ee]=""}}}}return Vr(B)}catch{return p}}var Ur={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},jr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ul;function ar(){}w(ar,Or),ar.prototype.g=function(){return new XMLHttpRequest},ul=new ar;function On(u){return encodeURIComponent(String(u))}function ws(u){var p=1;u=u.split(":");const _=[];for(;p>0&&u.length;)_.push(u.shift()),p--;return u.length&&_.push(u.join(":")),_}function cn(u,p,_,T){this.j=u,this.i=p,this.l=_,this.S=T||1,this.V=new Dr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new cl}function cl(){this.i=null,this.g="",this.h=!1}var hl={},bo={};function wn(u,p,_){u.M=1,u.A=ur(hn(p)),u.u=_,u.R=!0,Fo(u,null)}function Fo(u,p){u.F=Date.now(),Di(u),u.B=hn(u.A);var _=u.B,T=u.S;Array.isArray(T)||(T=[String(T)]),Ko(_.i,"t",T),u.C=0,_=u.j.L,u.h=new cl,u.g=wl(u.j,_?p:null,!u.u),u.P>0&&(u.O=new rl(y(u.Y,u,u.g),u.P)),p=u.V,_=u.g,T=u.ba;var b="readystatechange";Array.isArray(b)||(b&&(Oo[0]=b.toString()),b=Oo);for(let B=0;B<b.length;B++){const ee=He(_,b[B],T||p.handleEvent,!1,p.h||p);if(!ee)break;p.g[ee.key]=ee}p=u.J?O(u.J):{},u.u?(u.v||(u.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,p)):(u.v="GET",u.g.ea(u.B,u.v,null,p)),sr(),ol(u.i,u.v,u.B,u.l,u.S,u.u)}cn.prototype.ba=function(u){u=u.target;const p=this.O;p&&Bn(u)==3?p.j():this.Y(u)},cn.prototype.Y=function(u){try{if(u==this.g)e:{const we=Bn(this.g),ot=this.g.ya(),qe=this.g.ca();if(!(we<3)&&(we!=3||this.g&&(this.h.h||this.g.la()||vl(this.g)))){this.K||we!=4||ot==7||(ot==8||qe<=0?sr(3):sr(2)),Ts(this);var p=this.g.ca();this.X=p;var _=dl(this);if(this.o=p==200,al(this.i,this.v,this.B,this.l,this.S,we,p),this.o){if(this.U&&!this.L){t:{if(this.g){var T,b=this.g;if((T=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(T)){var B=T;break t}}B=null}if(u=B)Vn(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Qe(this,u);else{this.o=!1,this.m=3,rt(12),lr(this),Vi(this);break e}}if(this.R){u=!0;let ht;for(;!this.K&&this.C<_.length;)if(ht=pl(this,_),ht==bo){we==4&&(this.m=4,rt(14),u=!1),Vn(this.i,this.l,null,"[Incomplete Response]");break}else if(ht==hl){this.m=4,rt(15),Vn(this.i,this.l,_,"[Invalid Chunk]"),u=!1;break}else Vn(this.i,this.l,ht,null),Qe(this,ht);if(fl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),we!=4||_.length!=0||this.h.h||(this.m=1,rt(16),u=!1),this.o=this.o&&u,!u)Vn(this.i,this.l,_,"[Invalid Chunked Response]"),lr(this),Vi(this);else if(_.length>0&&!this.W){this.W=!0;var ee=this.j;ee.g==this&&ee.aa&&!ee.P&&(ee.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),zi(ee),ee.P=!0,rt(11))}}else Vn(this.i,this.l,_,null),Qe(this,_);we==4&&lr(this),this.o&&!this.K&&(we==4?Ds(this.j,this):(this.o=!1,Di(this)))}else Xo(this.g),p==400&&_.indexOf("Unknown SID")>0?(this.m=3,rt(12)):(this.m=0,rt(13)),lr(this),Vi(this)}}}catch{}finally{}};function dl(u){if(!fl(u))return u.g.la();const p=vl(u.g);if(p==="")return"";let _="";const T=p.length,b=Bn(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return lr(u),Vi(u),"";u.h.i=new h.TextDecoder}for(let B=0;B<T;B++)u.h.h=!0,_+=u.h.i.decode(p[B],{stream:!(b&&B==T-1)});return p.length=0,u.h.g+=_,u.C=0,u.h.g}function fl(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function pl(u,p){var _=u.C,T=p.indexOf(`
`,_);return T==-1?bo:(_=Number(p.substring(_,T)),isNaN(_)?hl:(T+=1,T+_>p.length?bo:(p=p.slice(T,T+_),u.C=T+_,p)))}cn.prototype.cancel=function(){this.K=!0,lr(this)};function Di(u){u.T=Date.now()+u.H,Uo(u,u.H)}function Uo(u,p){if(u.D!=null)throw Error("WatchDog timer not null");u.D=br(y(u.aa,u),p)}function Ts(u){u.D&&(h.clearTimeout(u.D),u.D=null)}cn.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(ll(this.i,this.B),this.M!=2&&(sr(),rt(17)),lr(this),this.m=2,Vi(this)):Uo(this,this.T-u)};function Vi(u){u.j.I==0||u.K||Ds(u.j,u)}function lr(u){Ts(u);var p=u.O;p&&typeof p.dispose=="function"&&p.dispose(),u.O=null,ys(u.V),u.g&&(p=u.g,u.g=null,p.abort(),p.dispose())}function Qe(u,p){try{var _=u.j;if(_.I!=0&&(_.g==u||Bo(_.h,u))){if(!u.L&&Bo(_.h,u)&&_.I==3){try{var T=_.Ba.g.parse(p)}catch{T=null}if(Array.isArray(T)&&T.length==3){var b=T;if(b[0]==0){e:if(!_.v){if(_.g)if(_.g.F+3e3<u.F)xs(_),nn(_);else break e;qn(_),rt(18)}}else _.xa=b[1],0<_.xa-_.K&&b[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=br(y(_.Va,_),6e3));Oi(_.h)<=1&&_.ta&&(_.ta=void 0)}else rn(_,11)}else if((u.L||_.g==u)&&xs(_),!I(p))for(b=_.Ba.g.parse(p),p=0;p<b.length;p++){let qe=b[p];const ht=qe[0];if(!(ht<=_.K))if(_.K=ht,qe=qe[1],_.I==2)if(qe[0]=="c"){_.M=qe[1],_.ba=qe[2];const sn=qe[3];sn!=null&&(_.ka=sn,_.j.info("VER="+_.ka));const pr=qe[4];pr!=null&&(_.za=pr,_.j.info("SVER="+_.za));const Hn=qe[5];Hn!=null&&typeof Hn=="number"&&Hn>0&&(T=1.5*Hn,_.O=T,_.j.info("backChannelRequestTimeoutMs_="+T)),T=_;const Wn=u.g;if(Wn){const Ls=Wn.g?Wn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ls){var B=T.h;B.g||Ls.indexOf("spdy")==-1&&Ls.indexOf("quic")==-1&&Ls.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(Ss(B,B.h),B.h=null))}if(T.G){const Zo=Wn.g?Wn.g.getResponseHeader("X-HTTP-Session-Id"):null;Zo&&(T.wa=Zo,Ue(T.J,T.G,Zo))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-u.F,_.j.info("Handshake RTT: "+_.T+"ms")),T=_;var ee=u;if(T.na=Jo(T,T.L?T.ba:null,T.W),ee.L){Li(T.h,ee);var we=ee,ot=T.O;ot&&(we.H=ot),we.D&&(Ts(we),Di(we)),T.g=ee}else Dt(T);_.i.length>0&&fr(_)}else qe[0]!="stop"&&qe[0]!="close"||rn(_,7);else _.I==3&&(qe[0]=="stop"||qe[0]=="close"?qe[0]=="stop"?rn(_,7):ks(_):qe[0]!="noop"&&_.l&&_.l.qa(qe),_.A=0)}}sr(4)}catch{}}var Sc=class{constructor(u,p){this.g=u,this.map=p}};function Is(u){this.l=u||10,h.PerformanceNavigationTiming?(u=h.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function jo(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Oi(u){return u.h?1:u.g?u.g.size:0}function Bo(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function Ss(u,p){u.g?u.g.add(p):u.h=p}function Li(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Is.prototype.cancel=function(){if(this.i=Zt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Zt(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const _ of u.g.values())p=p.concat(_.G);return p}return L(u.i)}var ml=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function en(u,p){if(u){u=u.split("&");for(let _=0;_<u.length;_++){const T=u[_].indexOf("=");let b,B=null;T>=0?(b=u[_].substring(0,T),B=u[_].substring(T+1)):b=u[_],p(b,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function Ln(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;u instanceof Ln?(this.l=u.l,Mi(this,u.j),this.o=u.o,this.g=u.g,Mn(this,u.u),this.h=u.h,Br(this,Qo(u.i)),this.m=u.m):u&&(p=String(u).match(ml))?(this.l=!1,Mi(this,p[1]||"",!0),this.o=bi(p[2]||""),this.g=bi(p[3]||"",!0),Mn(this,p[4]),this.h=bi(p[5]||"",!0),Br(this,p[6]||"",!0),this.m=bi(p[7]||"")):(this.l=!1,this.i=new De(null,this.l))}Ln.prototype.toString=function(){const u=[];var p=this.j;p&&u.push(Fi(p,$o,!0),":");var _=this.g;return(_||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Fi(p,$o,!0),"@"),u.push(On(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&u.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Fi(_,_.charAt(0)=="/"?Ui:qo,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Fi(_,Ho)),u.join("")},Ln.prototype.resolve=function(u){const p=hn(this);let _=!!u.j;_?Mi(p,u.j):_=!!u.o,_?p.o=u.o:_=!!u.g,_?p.g=u.g:_=u.u!=null;var T=u.h;if(_)Mn(p,u.u);else if(_=!!u.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var b=p.h.lastIndexOf("/");b!=-1&&(T=p.h.slice(0,b+1)+T)}if(b=T,b==".."||b==".")T="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){T=b.lastIndexOf("/",0)==0,b=b.split("/");const B=[];for(let ee=0;ee<b.length;){const we=b[ee++];we=="."?T&&ee==b.length&&B.push(""):we==".."?((B.length>1||B.length==1&&B[0]!="")&&B.pop(),T&&ee==b.length&&B.push("")):(B.push(we),T=!0)}T=B.join("/")}else T=b}return _?p.h=T:_=u.i.toString()!=="",_?Br(p,Qo(u.i)):_=!!u.m,_&&(p.m=u.m),p};function hn(u){return new Ln(u)}function Mi(u,p,_){u.j=_?bi(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Mn(u,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);u.u=p}else u.u=null}function Br(u,p,_){p instanceof De?(u.i=p,Rs(u.i,u.l)):(_||(p=Fi(p,Ac)),u.i=new De(p,u.l))}function Ue(u,p,_){u.i.set(p,_)}function ur(u){return Ue(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function bi(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Fi(u,p,_){return typeof u=="string"?(u=encodeURI(u).replace(p,zo),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function zo(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var $o=/[#\/\?@]/g,qo=/[#\?:]/g,Ui=/[#\?]/g,Ac=/[#\?@]/g,Ho=/#/g;function De(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function bn(u){u.g||(u.g=new Map,u.h=0,u.i&&en(u.i,function(p,_){u.add(decodeURIComponent(p.replace(/\+/g," ")),_)}))}i=De.prototype,i.add=function(u,p){bn(this),this.i=null,u=Fn(this,u);let _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(p),this.h+=1,this};function Wo(u,p){bn(u),p=Fn(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function As(u,p){return bn(u),p=Fn(u,p),u.g.has(p)}i.forEach=function(u,p){bn(this),this.g.forEach(function(_,T){_.forEach(function(b){u.call(p,b,T,this)},this)},this)};function Go(u,p){bn(u);let _=[];if(typeof p=="string")As(u,p)&&(_=_.concat(u.g.get(Fn(u,p))));else for(u=Array.from(u.g.values()),p=0;p<u.length;p++)_=_.concat(u[p]);return _}i.set=function(u,p){return bn(this),this.i=null,u=Fn(this,u),As(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},i.get=function(u,p){return u?(u=Go(this,u),u.length>0?String(u[0]):p):p};function Ko(u,p,_){Wo(u,p),_.length>0&&(u.i=null,u.g.set(Fn(u,p),L(_)),u.h+=_.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(let T=0;T<p.length;T++){var _=p[T];const b=On(_);_=Go(this,_);for(let B=0;B<_.length;B++){let ee=b;_[B]!==""&&(ee+="="+On(_[B])),u.push(ee)}}return this.i=u.join("&")};function Qo(u){const p=new De;return p.i=u.i,u.g&&(p.g=new Map(u.g),p.h=u.h),p}function Fn(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Rs(u,p){p&&!u.j&&(bn(u),u.i=null,u.g.forEach(function(_,T){const b=T.toLowerCase();T!=b&&(Wo(this,T),Ko(this,b,_))},u)),u.j=p}function Un(u,p){const _=new Fr;if(h.Image){const T=new Image;T.onload=E(St,_,"TestLoadImage: loaded",!0,p,T),T.onerror=E(St,_,"TestLoadImage: error",!1,p,T),T.onabort=E(St,_,"TestLoadImage: abort",!1,p,T),T.ontimeout=E(St,_,"TestLoadImage: timeout",!1,p,T),h.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else p(!1)}function jn(u,p){const _=new Fr,T=new AbortController,b=setTimeout(()=>{T.abort(),St(_,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:T.signal}).then(B=>{clearTimeout(b),B.ok?St(_,"TestPingServer: ok",!0,p):St(_,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(b),St(_,"TestPingServer: error",!1,p)})}function St(u,p,_,T,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),T(_)}catch{}}function ji(){this.g=new Ni}function cr(u){this.i=u.Sb||null,this.h=u.ab||!1}w(cr,Or),cr.prototype.g=function(){return new tn(this.i,this.h)};function tn(u,p){ct.call(this),this.H=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}w(tn,ct),i=tn.prototype,i.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=p,this.readyState=1,Tn(this)},i.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(p.body=u),(this.H||h).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,zr(this)),this.readyState=0},i.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Tn(this)),this.g&&(this.readyState=3,Tn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;gl(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function gl(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}i.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?zr(this):Tn(this),this.readyState==3&&gl(this)}},i.Oa=function(u){this.g&&(this.response=this.responseText=u,zr(this))},i.Na=function(u){this.g&&(this.response=u,zr(this))},i.ga=function(){this.g&&zr(this)};function zr(u){u.readyState=4,u.l=null,u.j=null,u.B=null,Tn(u)}i.setRequestHeader=function(u,p){this.A.append(u,p)},i.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var _=p.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=p.next();return u.join(`\r
`)};function Tn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(tn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function yl(u){let p="";return ce(u,function(_,T){p+=T,p+=":",p+=_,p+=`\r
`}),p}function Cs(u,p,_){e:{for(T in _){var T=!1;break e}T=!0}T||(_=yl(_),typeof u=="string"?_!=null&&On(_):Ue(u,p,_))}function We(u){ct.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}w(We,ct);var _l=/^https?$/i,Rc=["POST","PUT"];i=We.prototype,i.Fa=function(u){this.H=u},i.ea=function(u,p,_,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ul.g(),this.g.onreadystatechange=S(y(this.Ca,this));try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(B){$r(this,B);return}if(u=_||"",_=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var b in T)_.set(b,T[b]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const B of T.keys())_.set(B,T.get(B));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(_.keys()).find(B=>B.toLowerCase()=="content-type"),b=h.FormData&&u instanceof h.FormData,!(Array.prototype.indexOf.call(Rc,p,void 0)>=0)||T||b||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,ee]of _)this.g.setRequestHeader(B,ee);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch(B){$r(this,B)}};function $r(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.o=5,qr(u),dr(u)}function qr(u){u.A||(u.A=!0,st(u,"complete"),st(u,"error"))}i.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,st(this,"complete"),st(this,"abort"),dr(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),dr(this,!0)),We.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?hr(this):this.Xa())},i.Xa=function(){hr(this)};function hr(u){if(u.h&&typeof l<"u"){if(u.v&&Bn(u)==4)setTimeout(u.Ca.bind(u),0);else if(st(u,"readystatechange"),Bn(u)==4){u.h=!1;try{const B=u.ca();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var _;if(!(_=p)){var T;if(T=B===0){let ee=String(u.D).match(ml)[1]||null;!ee&&h.self&&h.self.location&&(ee=h.self.location.protocol.slice(0,-1)),T=!_l.test(ee?ee.toLowerCase():"")}_=T}if(_)st(u,"complete"),st(u,"success");else{u.o=6;try{var b=Bn(u)>2?u.g.statusText:""}catch{b=""}u.l=b+" ["+u.ca()+"]",qr(u)}}finally{dr(u)}}}}function dr(u,p){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const _=u.g;u.g=null,p||st(u,"ready");try{_.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function Bn(u){return u.g?u.g.readyState:0}i.ca=function(){try{return Bn(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),il(p)}};function vl(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Xo(u){const p={};u=(u.g&&Bn(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(I(u[T]))continue;var _=ws(u[T]);const b=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const B=p[b]||[];p[b]=B,B.push(_)}ne(p,function(T){return T.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function zn(u,p,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||p}function Ps(u){this.za=0,this.i=[],this.j=new Fr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=zn("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=zn("baseRetryDelayMs",5e3,u),this.Za=zn("retryDelaySeedMs",1e4,u),this.Ta=zn("forwardChannelMaxRetries",2,u),this.va=zn("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new Is(u&&u.concurrentRequestLimit),this.Ba=new ji,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=Ps.prototype,i.ka=8,i.I=1,i.connect=function(u,p,_,T){rt(0),this.W=u,this.H=p||{},_&&T!==void 0&&(this.H.OSID=_,this.H.OAID=T),this.F=this.X,this.J=Jo(this,null,this.W),fr(this)};function ks(u){if(Ns(u),u.I==3){var p=u.V++,_=hn(u.J);if(Ue(_,"SID",u.M),Ue(_,"RID",p),Ue(_,"TYPE","terminate"),$n(u,_),p=new cn(u,u.j,p),p.M=2,p.A=ur(hn(_)),_=!1,h.navigator&&h.navigator.sendBeacon)try{_=h.navigator.sendBeacon(p.A.toString(),"")}catch{}!_&&h.Image&&(new Image().src=p.A,_=!0),_||(p.g=wl(p.j,null),p.g.ea(p.A)),p.F=Date.now(),Di(p)}$i(u)}function nn(u){u.g&&(zi(u),u.g.cancel(),u.g=null)}function Ns(u){nn(u),u.v&&(h.clearTimeout(u.v),u.v=null),xs(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&h.clearTimeout(u.m),u.m=null)}function fr(u){if(!jo(u.h)&&!u.m){u.m=!0;var p=u.Ea;Oe||R(),Ie||(Oe(),Ie=!0),k.add(p,u),u.D=0}}function El(u,p){return Oi(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=p.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=br(y(u.Ea,u,p),Vs(u,u.D)),u.D++,!0)}i.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const b=new cn(this,this.j,u);let B=this.o;if(this.U&&(B?(B=O(B),Se(B,this.U)):B=this.U),this.u!==null||this.R||(b.J=B,B=null),this.S)e:{for(var p=0,_=0;_<this.i.length;_++){t:{var T=this.i[_];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(p+=T,p>4096){p=_;break e}if(p===4096||_===this.i.length-1){p=_+1;break e}}p=1e3}else p=1e3;p=Yo(this,b,p),_=hn(this.J),Ue(_,"RID",u),Ue(_,"CVER",22),this.G&&Ue(_,"X-HTTP-Session-Id",this.G),$n(this,_),B&&(this.R?p="headers="+On(yl(B))+"&"+p:this.u&&Cs(_,this.u,B)),Ss(this.h,b),this.Ra&&Ue(_,"TYPE","init"),this.S?(Ue(_,"$req",p),Ue(_,"SID","null"),b.U=!0,wn(b,_,null)):wn(b,_,p),this.I=2}}else this.I==3&&(u?Bi(this,u):this.i.length==0||jo(this.h)||Bi(this))};function Bi(u,p){var _;p?_=p.l:_=u.V++;const T=hn(u.J);Ue(T,"SID",u.M),Ue(T,"RID",_),Ue(T,"AID",u.K),$n(u,T),u.u&&u.o&&Cs(T,u.u,u.o),_=new cn(u,u.j,_,u.D+1),u.u===null&&(_.J=u.o),p&&(u.i=p.G.concat(u.i)),p=Yo(u,_,1e3),_.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),Ss(u.h,_),wn(_,T,p)}function $n(u,p){u.H&&ce(u.H,function(_,T){Ue(p,T,_)}),u.l&&ce({},function(_,T){Ue(p,T,_)})}function Yo(u,p,_){_=Math.min(u.i.length,_);const T=u.l?y(u.l.Ka,u.l,u):null;e:{var b=u.i;let we=-1;for(;;){const ot=["count="+_];we==-1?_>0?(we=b[0].g,ot.push("ofs="+we)):we=0:ot.push("ofs="+we);let qe=!0;for(let ht=0;ht<_;ht++){var B=b[ht].g;const sn=b[ht].map;if(B-=we,B<0)we=Math.max(0,b[ht].g-100),qe=!1;else try{B="req"+B+"_"||"";try{var ee=sn instanceof Map?sn:Object.entries(sn);for(const[pr,Hn]of ee){let Wn=Hn;m(Hn)&&(Wn=Vr(Hn)),ot.push(B+pr+"="+encodeURIComponent(Wn))}}catch(pr){throw ot.push(B+"type="+encodeURIComponent("_badmap")),pr}}catch{T&&T(sn)}}if(qe){ee=ot.join("&");break e}}ee=void 0}return u=u.i.splice(0,_),p.G=u,ee}function Dt(u){if(!u.g&&!u.v){u.Y=1;var p=u.Da;Oe||R(),Ie||(Oe(),Ie=!0),k.add(p,u),u.A=0}}function qn(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=br(y(u.Da,u),Vs(u,u.A)),u.A++,!0)}i.Da=function(){if(this.v=null,Hr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=br(y(this.Wa,this),u)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,rt(10),nn(this),Hr(this))};function zi(u){u.B!=null&&(h.clearTimeout(u.B),u.B=null)}function Hr(u){u.g=new cn(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var p=hn(u.na);Ue(p,"RID","rpc"),Ue(p,"SID",u.M),Ue(p,"AID",u.K),Ue(p,"CI",u.F?"0":"1"),!u.F&&u.ia&&Ue(p,"TO",u.ia),Ue(p,"TYPE","xmlhttp"),$n(u,p),u.u&&u.o&&Cs(p,u.u,u.o),u.O&&(u.g.H=u.O);var _=u.g;u=u.ba,_.M=1,_.A=ur(hn(p)),_.u=null,_.R=!0,Fo(_,u)}i.Va=function(){this.C!=null&&(this.C=null,nn(this),qn(this),rt(19))};function xs(u){u.C!=null&&(h.clearTimeout(u.C),u.C=null)}function Ds(u,p){var _=null;if(u.g==p){xs(u),zi(u),u.g=null;var T=2}else if(Bo(u.h,p))_=p.G,Li(u.h,p),T=1;else return;if(u.I!=0){if(p.o)if(T==1){_=p.u?p.u.length:0,p=Date.now()-p.F;var b=u.D;T=Mr(),st(T,new Mo(T,_)),fr(u)}else Dt(u);else if(b=p.m,b==3||b==0&&p.X>0||!(T==1&&El(u,p)||T==2&&qn(u)))switch(_&&_.length>0&&(p=u.h,p.i=p.i.concat(_)),b){case 1:rn(u,5);break;case 4:rn(u,10);break;case 3:rn(u,6);break;default:rn(u,2)}}}function Vs(u,p){let _=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(_*=2),_*p}function rn(u,p){if(u.j.info("Error code "+p),p==2){var _=y(u.bb,u),T=u.Ua;const b=!T;T=new Ln(T||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Mi(T,"https"),ur(T),b?Un(T.toString(),_):jn(T.toString(),_)}else rt(2);u.I=0,u.l&&u.l.pa(p),$i(u),Ns(u)}i.bb=function(u){u?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function $i(u){if(u.I=0,u.ja=[],u.l){const p=Zt(u.h);(p.length!=0||u.i.length!=0)&&(U(u.ja,p),U(u.ja,u.i),u.h.i.length=0,L(u.i),u.i.length=0),u.l.oa()}}function Jo(u,p,_){var T=_ instanceof Ln?hn(_):new Ln(_);if(T.g!="")p&&(T.g=p+"."+T.g),Mn(T,T.u);else{var b=h.location;T=b.protocol,p=p?p+"."+b.hostname:b.hostname,b=+b.port;const B=new Ln(null);T&&Mi(B,T),p&&(B.g=p),b&&Mn(B,b),_&&(B.h=_),T=B}return _=u.G,p=u.wa,_&&p&&Ue(T,_,p),Ue(T,"VER",u.ka),$n(u,T),T}function wl(u,p,_){if(p&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Aa&&!u.ma?new We(new cr({ab:_})):new We(u.ma),p.Fa(u.L),p}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Tl(){}i=Tl.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function Os(){}Os.prototype.g=function(u,p){return new At(u,p)};function At(u,p){ct.call(this),this.g=new Ps(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(u?u["X-WebChannel-Client-Profile"]=p.sa:u={"X-WebChannel-Client-Profile":p.sa}),this.g.U=u,(u=p&&p.Qb)&&!I(u)&&(this.g.u=u),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!I(p)&&(this.g.G=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new Wr(this)}w(At,ct),At.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){ks(this.g)},At.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.v&&(_={},_.__data__=Vr(u),u=_);p.i.push(new Sc(p.Ya++,u)),p.I==3&&fr(p)},At.prototype.N=function(){this.g.l=null,delete this.j,ks(this.g),delete this.g,At.Z.N.call(this)};function Il(u){_s.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const _ in p){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}w(Il,_s);function Sl(){Lo.call(this),this.status=1}w(Sl,Lo);function Wr(u){this.g=u}w(Wr,Tl),Wr.prototype.ra=function(){st(this.g,"a")},Wr.prototype.qa=function(u){st(this.g,new Il(u))},Wr.prototype.pa=function(u){st(this.g,new Sl)},Wr.prototype.oa=function(){st(this.g,"b")},Os.prototype.createWebChannel=Os.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,P_=function(){return new Os},C_=function(){return Mr()},R_=En,kd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ur.NO_ERROR=0,Ur.TIMEOUT=8,Ur.HTTP_ERROR=6,Ru=Ur,jr.COMPLETE="complete",A_=jr,sl.EventType=Lr,Lr.OPEN="a",Lr.CLOSE="b",Lr.ERROR="c",Lr.MESSAGE="d",ct.prototype.listen=ct.prototype.J,Aa=sl,We.prototype.listenOnce=We.prototype.K,We.prototype.getLastError=We.prototype.Ha,We.prototype.getLastErrorCode=We.prototype.ya,We.prototype.getStatus=We.prototype.ca,We.prototype.getResponseJson=We.prototype.La,We.prototype.getResponseText=We.prototype.la,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Fa,S_=We}).apply(typeof vu<"u"?vu:typeof self<"u"?self:typeof window<"u"?window:{});const Dg="@firebase/firestore",Vg="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let So="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=new Xd("@firebase/firestore");function ro(){return us.logLevel}function ie(i,...e){if(us.logLevel<=ke.DEBUG){const t=e.map(Zd);us.debug(`Firestore (${So}): ${i}`,...t)}}function Rr(i,...e){if(us.logLevel<=ke.ERROR){const t=e.map(Zd);us.error(`Firestore (${So}): ${i}`,...t)}}function mo(i,...e){if(us.logLevel<=ke.WARN){const t=e.map(Zd);us.warn(`Firestore (${So}): ${i}`,...t)}}function Zd(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,k_(i,s,t)}function k_(i,e,t){let s=`FIRESTORE (${So}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Rr(s),new Error(s)}function $e(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||k_(e,o,s)}function Te(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends Nr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Zw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ft.UNAUTHENTICATED)))}shutdown(){}}class eT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class tT{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){$e(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let l=new ss;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new ss,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},m=g=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>m(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new ss)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?($e(typeof s.accessToken=="string",31837,{l:s}),new N_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return $e(e===null||typeof e=="string",2055,{h:e}),new Ft(e)}}class nT{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class rT{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new nT(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ft.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Og{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iT{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,kn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){$e(this.o===void 0,3512);const s=l=>{l.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,ie("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const o=l=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Og(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?($e(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Og(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=sT(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%62))}return s}}function Ne(i,e){return i<e?-1:i>e?1:0}function Nd(i,e){const t=Math.min(i.length,e.length);for(let s=0;s<t;s++){const o=i.charAt(s),l=e.charAt(s);if(o!==l)return yd(o)===yd(l)?Ne(o,l):yd(o)?1:-1}return Ne(i.length,e.length)}const oT=55296,aT=57343;function yd(i){const e=i.charCodeAt(0);return e>=oT&&e<=aT}function go(i,e,t){return i.length===e.length&&i.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg="__name__";class Yn{constructor(e,t,s){t===void 0?t=0:t>e.length&&ge(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ge(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Yn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Yn?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=Yn.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Ne(e.length,t.length)}static compareSegments(e,t){const s=Yn.isNumericId(e),o=Yn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Yn.extractNumericId(e).compare(Yn.extractNumericId(t)):Nd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return gi.fromString(e.substring(4,e.length-2))}}class Ke extends Yn{construct(e,t,s){return new Ke(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new se(H.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new Ke(t)}static emptyPath(){return new Ke([])}}const lT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends Yn{construct(e,t,s){return new kt(e,t,s)}static isValidIdentifier(e){return lT.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Lg}static keyField(){return new kt([Lg])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new se(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new se(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new se(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(l(),o++)}if(l(),h)throw new se(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kt(t)}static emptyPath(){return new kt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(Ke.fromString(e))}static fromName(e){return new de(Ke.fromString(e).popFirst(5))}static empty(){return new de(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ke.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new Ke(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(i,e,t){if(!t)throw new se(H.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function uT(i,e,t,s){if(e===!0&&s===!0)throw new se(H.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Mg(i){if(!de.isDocumentKey(i))throw new se(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function bg(i){if(de.isDocumentKey(i))throw new se(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function D_(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function ic(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":ge(12329,{type:typeof i})}function yi(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new se(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ic(i);throw new se(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(i,e){const t={typeString:i};return e&&(t.value=e),t}function Wa(i,e){if(!D_(i))throw new se(H.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new se(H.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=-62135596800,Ug=1e6;class Je{static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Ug);return new Je(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new se(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new se(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Fg)throw new se(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ug}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Je._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Wa(e,Je._jsonSchema))return new Je(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Fg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Je._jsonSchemaVersion="firestore/timestamp/1.0",Je._jsonSchema={type:mt("string",Je._jsonSchemaVersion),seconds:mt("number"),nanoseconds:mt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{static fromTimestamp(e){return new ve(e)}static min(){return new ve(new Je(0,0))}static max(){return new ve(new Je(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=-1;function cT(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=ve.fromTimestamp(s===1e9?new Je(t+1,0):new Je(t,s));return new Ei(o,de.empty(),e)}function hT(i){return new Ei(i.readTime,i.key,Ma)}class Ei{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ei(ve.min(),de.empty(),Ma)}static max(){return new Ei(ve.max(),de.empty(),Ma)}}function dT(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=de.comparator(i.documentKey,e.documentKey),t!==0?t:Ne(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ao(i){if(i.code!==H.FAILED_PRECONDITION||i.message!==fT)throw i;ie("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ge(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new W(((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof W?t:W.resolve(t)}catch(t){return W.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):W.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):W.reject(t)}static resolve(e){return new W(((t,s)=>{t(e)}))}static reject(e){return new W(((t,s)=>{s(e)}))}static waitFor(e){return new W(((t,s)=>{let o=0,l=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++l,h&&l===o&&t()}),(g=>s(g)))})),h=!0,l===o&&t()}))}static or(e){let t=W.resolve(!1);for(const s of e)t=t.next((o=>o?W.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,l)=>{s.push(t.call(this,o,l))})),this.waitFor(s)}static mapArray(e,t){return new W(((s,o)=>{const l=e.length,h=new Array(l);let m=0;for(let g=0;g<l;g++){const y=g;t(e[y]).next((E=>{h[y]=E,++m,m===l&&s(h)}),(E=>o(E)))}}))}static doWhile(e,t){return new W(((s,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):s()};l()}))}}function mT(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ro(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}sc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf=-1;function oc(i){return i==null}function Uu(i){return i===0&&1/i==-1/0}function gT(i){return typeof i=="number"&&Number.isInteger(i)&&!Uu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_="";function yT(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=jg(e)),e=_T(i.get(t),e);return jg(e)}function _T(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const l=i.charAt(o);switch(l){case"\0":t+="";break;case V_:t+="";break;default:t+=l}}return t}function jg(i){return i+V_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Ci(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function O_(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t){this.comparator=e,this.root=t||Pt.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Eu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Eu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Eu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Eu(this.root,e,this.comparator,!0)}}class Eu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pt{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??Pt.RED,this.left=o??Pt.EMPTY,this.right=l??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new Pt(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Pt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ge(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ge(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ge(27949);return e+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw ge(57766)}get value(){throw ge(16141)}get color(){throw ge(16727)}get left(){throw ge(29726)}get right(){throw ge(36894)}copy(e,t,s,o,l){return this}insert(e,t,s){return new Pt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new zg(this.data.getIterator())}getIteratorFrom(e){return new zg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new vt(this.comparator);return t.data=e,t}}class zg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.fields=e,e.sort(kt.comparator)}static empty(){return new un([])}unionWith(e){let t=new vt(kt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new un(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return go(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new L_("Invalid base64 string: "+l):l}})(e);return new xt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new xt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const vT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wi(i){if($e(!!i,39018),typeof i=="string"){let e=0;const t=vT.exec(i);if($e(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ut(i.seconds),nanos:ut(i.nanos)}}function ut(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Ti(i){return typeof i=="string"?xt.fromBase64String(i):xt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_="server_timestamp",b_="__type__",F_="__previous_value__",U_="__local_write_time__";function nf(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[b_])==null?void 0:s.stringValue)===M_}function ac(i){const e=i.mapValue.fields[F_];return nf(e)?ac(e):e}function ba(i){const e=wi(i.mapValue.fields[U_].timestampValue);return new Je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,t,s,o,l,h,m,g,y,E){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=y,this.isUsingEmulator=E}}const ju="(default)";class Fa{constructor(e,t){this.projectId=e,this.database=t||ju}static empty(){return new Fa("","")}get isDefaultDatabase(){return this.database===ju}isEqual(e){return e instanceof Fa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_="__type__",wT="__max__",wu={mapValue:{}},B_="__vector__",Bu="value";function Ii(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?nf(i)?4:IT(i)?9007199254740991:TT(i)?10:11:ge(28295,{value:i})}function ir(i,e){if(i===e)return!0;const t=Ii(i);if(t!==Ii(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return ba(i).isEqual(ba(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=wi(o.timestampValue),m=wi(l.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,l){return Ti(o.bytesValue).isEqual(Ti(l.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,l){return ut(o.geoPointValue.latitude)===ut(l.geoPointValue.latitude)&&ut(o.geoPointValue.longitude)===ut(l.geoPointValue.longitude)})(i,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return ut(o.integerValue)===ut(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=ut(o.doubleValue),m=ut(l.doubleValue);return h===m?Uu(h)===Uu(m):isNaN(h)&&isNaN(m)}return!1})(i,e);case 9:return go(i.arrayValue.values||[],e.arrayValue.values||[],ir);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},m=l.mapValue.fields||{};if(Bg(h)!==Bg(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!ir(h[g],m[g])))return!1;return!0})(i,e);default:return ge(52216,{left:i})}}function Ua(i,e){return(i.values||[]).find((t=>ir(t,e)))!==void 0}function yo(i,e){if(i===e)return 0;const t=Ii(i),s=Ii(e);if(t!==s)return Ne(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ne(i.booleanValue,e.booleanValue);case 2:return(function(l,h){const m=ut(l.integerValue||l.doubleValue),g=ut(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1})(i,e);case 3:return $g(i.timestampValue,e.timestampValue);case 4:return $g(ba(i),ba(e));case 5:return Nd(i.stringValue,e.stringValue);case 6:return(function(l,h){const m=Ti(l),g=Ti(h);return m.compareTo(g)})(i.bytesValue,e.bytesValue);case 7:return(function(l,h){const m=l.split("/"),g=h.split("/");for(let y=0;y<m.length&&y<g.length;y++){const E=Ne(m[y],g[y]);if(E!==0)return E}return Ne(m.length,g.length)})(i.referenceValue,e.referenceValue);case 8:return(function(l,h){const m=Ne(ut(l.latitude),ut(h.latitude));return m!==0?m:Ne(ut(l.longitude),ut(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return qg(i.arrayValue,e.arrayValue);case 10:return(function(l,h){var S,L,U,$;const m=l.fields||{},g=h.fields||{},y=(S=m[Bu])==null?void 0:S.arrayValue,E=(L=g[Bu])==null?void 0:L.arrayValue,w=Ne(((U=y==null?void 0:y.values)==null?void 0:U.length)||0,(($=E==null?void 0:E.values)==null?void 0:$.length)||0);return w!==0?w:qg(y,E)})(i.mapValue,e.mapValue);case 11:return(function(l,h){if(l===wu.mapValue&&h===wu.mapValue)return 0;if(l===wu.mapValue)return 1;if(h===wu.mapValue)return-1;const m=l.fields||{},g=Object.keys(m),y=h.fields||{},E=Object.keys(y);g.sort(),E.sort();for(let w=0;w<g.length&&w<E.length;++w){const S=Nd(g[w],E[w]);if(S!==0)return S;const L=yo(m[g[w]],y[E[w]]);if(L!==0)return L}return Ne(g.length,E.length)})(i.mapValue,e.mapValue);default:throw ge(23264,{he:t})}}function $g(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Ne(i,e);const t=wi(i),s=wi(e),o=Ne(t.seconds,s.seconds);return o!==0?o:Ne(t.nanos,s.nanos)}function qg(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=yo(t[o],s[o]);if(l)return l}return Ne(t.length,s.length)}function _o(i){return xd(i)}function xd(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=wi(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return Ti(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return de.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=xd(l);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${xd(t.fields[h])}`;return o+"}"})(i.mapValue):ge(61005,{value:i})}function Cu(i){switch(Ii(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ac(i);return e?16+Cu(e):16;case 5:return 2*i.stringValue.length;case 6:return Ti(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,l)=>o+Cu(l)),0)})(i.arrayValue);case 10:case 11:return(function(s){let o=0;return Ci(s.fields,((l,h)=>{o+=l.length+Cu(h)})),o})(i.mapValue);default:throw ge(13486,{value:i})}}function Hg(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function Dd(i){return!!i&&"integerValue"in i}function rf(i){return!!i&&"arrayValue"in i}function Wg(i){return!!i&&"nullValue"in i}function Gg(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Pu(i){return!!i&&"mapValue"in i}function TT(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[j_])==null?void 0:s.stringValue)===B_}function Na(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return Ci(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Na(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Na(i.arrayValue.values[t]);return e}return{...i}}function IT(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===wT}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.value=e}static empty(){return new Yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Pu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Na(t)}setAll(e){let t=kt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Na(h):o.push(m.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());Pu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ir(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Pu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Ci(t,((o,l)=>e[o]=l));for(const o of s)delete e[o]}clone(){return new Yt(Na(this.value))}}function z_(i){const e=[];return Ci(i.fields,((t,s)=>{const o=new kt([t]);if(Pu(s)){const l=z_(s.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new un(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t,s,o,l,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Ut(e,0,ve.min(),ve.min(),ve.min(),Yt.empty(),0)}static newFoundDocument(e,t,s,o){return new Ut(e,1,t,ve.min(),s,o,0)}static newNoDocument(e,t){return new Ut(e,2,t,ve.min(),ve.min(),Yt.empty(),0)}static newUnknownDocument(e,t){return new Ut(e,3,t,ve.min(),ve.min(),Yt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,t){this.position=e,this.inclusive=t}}function Kg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const l=e[o],h=i.position[o];if(l.field.isKeyField()?s=de.comparator(de.fromName(h.referenceValue),t.key):s=yo(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function Qg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!ir(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,t="asc"){this.field=e,this.dir=t}}function ST(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{}class pt extends $_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new RT(e,t,s):t==="array-contains"?new kT(e,s):t==="in"?new NT(e,s):t==="not-in"?new xT(e,s):t==="array-contains-any"?new DT(e,s):new pt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new CT(e,s):new PT(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(yo(t,this.value)):t!==null&&Ii(this.value)===Ii(t)&&this.matchesComparison(yo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dn extends $_{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Dn(e,t)}matches(e){return q_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function q_(i){return i.op==="and"}function H_(i){return AT(i)&&q_(i)}function AT(i){for(const e of i.filters)if(e instanceof Dn)return!1;return!0}function Vd(i){if(i instanceof pt)return i.field.canonicalString()+i.op.toString()+_o(i.value);if(H_(i))return i.filters.map((e=>Vd(e))).join(",");{const e=i.filters.map((t=>Vd(t))).join(",");return`${i.op}(${e})`}}function W_(i,e){return i instanceof pt?(function(s,o){return o instanceof pt&&s.op===o.op&&s.field.isEqual(o.field)&&ir(s.value,o.value)})(i,e):i instanceof Dn?(function(s,o){return o instanceof Dn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((l,h,m)=>l&&W_(h,o.filters[m])),!0):!1})(i,e):void ge(19439)}function G_(i){return i instanceof pt?(function(t){return`${t.field.canonicalString()} ${t.op} ${_o(t.value)}`})(i):i instanceof Dn?(function(t){return t.op.toString()+" {"+t.getFilters().map(G_).join(" ,")+"}"})(i):"Filter"}class RT extends pt{constructor(e,t,s){super(e,t,s),this.key=de.fromName(s.referenceValue)}matches(e){const t=de.comparator(e.key,this.key);return this.matchesComparison(t)}}class CT extends pt{constructor(e,t){super(e,"in",t),this.keys=K_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class PT extends pt{constructor(e,t){super(e,"not-in",t),this.keys=K_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function K_(i,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>de.fromName(s.referenceValue)))}class kT extends pt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return rf(t)&&Ua(t.arrayValue,this.value)}}class NT extends pt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ua(this.value.arrayValue,t)}}class xT extends pt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ua(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ua(this.value.arrayValue,t)}}class DT extends pt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!rf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Ua(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e,t=null,s=[],o=[],l=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=m,this.Te=null}}function Xg(i,e=null,t=[],s=[],o=null,l=null,h=null){return new VT(i,e,t,s,o,l,h)}function sf(i){const e=Te(i);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Vd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),oc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>_o(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>_o(s))).join(",")),e.Te=t}return e.Te}function of(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!ST(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!W_(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Qg(i.startAt,e.startAt)&&Qg(i.endAt,e.endAt)}function Od(i){return de.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,t=null,s=[],o=[],l=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=m,this.endAt=g,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function OT(i,e,t,s,o,l,h,m){return new Ga(i,e,t,s,o,l,h,m)}function af(i){return new Ga(i)}function Yg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function Q_(i){return i.collectionGroup!==null}function xa(i){const e=Te(i);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new vt(kt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((y=>{y.isInequality()&&(m=m.add(y.field))}))})),m})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new $u(l,s))})),t.has(kt.keyField().canonicalString())||e.Ie.push(new $u(kt.keyField(),s))}return e.Ie}function Jn(i){const e=Te(i);return e.Ee||(e.Ee=LT(e,xa(i))),e.Ee}function LT(i,e){if(i.limitType==="F")return Xg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new $u(o.field,l)}));const t=i.endAt?new zu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new zu(i.startAt.position,i.startAt.inclusive):null;return Xg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function Ld(i,e){const t=i.filters.concat([e]);return new Ga(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function Md(i,e,t){return new Ga(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function lc(i,e){return of(Jn(i),Jn(e))&&i.limitType===e.limitType}function X_(i){return`${sf(Jn(i))}|lt:${i.limitType}`}function io(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>G_(o))).join(", ")}]`),oc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>_o(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>_o(o))).join(",")),`Target(${s})`})(Jn(i))}; limitType=${i.limitType})`}function uc(i,e){return e.isFoundDocument()&&(function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):de.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(i,e)&&(function(s,o){for(const l of xa(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(i,e)&&(function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0})(i,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,g){const y=Kg(h,m,g);return h.inclusive?y<=0:y<0})(s.startAt,xa(s),o)||s.endAt&&!(function(h,m,g){const y=Kg(h,m,g);return h.inclusive?y>=0:y>0})(s.endAt,xa(s),o))})(i,e)}function MT(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function Y_(i){return(e,t)=>{let s=!1;for(const o of xa(i)){const l=bT(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function bT(i,e,t){const s=i.field.isKeyField()?de.comparator(e.key,t.key):(function(l,h,m){const g=h.data.field(l),y=m.data.field(l);return g!==null&&y!==null?yo(g,y):ge(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return ge(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ci(this.inner,((t,s)=>{for(const[o,l]of s)e(o,l)}))}isEmpty(){return O_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT=new nt(de.comparator);function Cr(){return FT}const J_=new nt(de.comparator);function Ra(...i){let e=J_;for(const t of i)e=e.insert(t.key,t);return e}function Z_(i){let e=J_;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function is(){return Da()}function ev(){return Da()}function Da(){return new ds((i=>i.toString()),((i,e)=>i.isEqual(e)))}const UT=new nt(de.comparator),jT=new vt(de.comparator);function xe(...i){let e=jT;for(const t of i)e=e.add(t);return e}const BT=new vt(Ne);function zT(){return BT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Uu(e)?"-0":e}}function tv(i){return{integerValue:""+i}}function $T(i,e){return gT(e)?tv(e):lf(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(){this._=void 0}}function qT(i,e,t){return i instanceof qu?(function(o,l){const h={fields:{[b_]:{stringValue:M_},[U_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&nf(l)&&(l=ac(l)),l&&(h.fields[F_]=l),{mapValue:h}})(t,e):i instanceof ja?rv(i,e):i instanceof Ba?iv(i,e):(function(o,l){const h=nv(o,l),m=Jg(h)+Jg(o.Ae);return Dd(h)&&Dd(o.Ae)?tv(m):lf(o.serializer,m)})(i,e)}function HT(i,e,t){return i instanceof ja?rv(i,e):i instanceof Ba?iv(i,e):t}function nv(i,e){return i instanceof Hu?(function(s){return Dd(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class qu extends cc{}class ja extends cc{constructor(e){super(),this.elements=e}}function rv(i,e){const t=sv(e);for(const s of i.elements)t.some((o=>ir(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Ba extends cc{constructor(e){super(),this.elements=e}}function iv(i,e){let t=sv(e);for(const s of i.elements)t=t.filter((o=>!ir(o,s)));return{arrayValue:{values:t}}}class Hu extends cc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Jg(i){return ut(i.integerValue||i.doubleValue)}function sv(i){return rf(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function WT(i,e){return i.field.isEqual(e.field)&&(function(s,o){return s instanceof ja&&o instanceof ja||s instanceof Ba&&o instanceof Ba?go(s.elements,o.elements,ir):s instanceof Hu&&o instanceof Hu?ir(s.Ae,o.Ae):s instanceof qu&&o instanceof qu})(i.transform,e.transform)}class GT{constructor(e,t){this.version=e,this.transformResults=t}}class xn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new xn}static exists(e){return new xn(void 0,e)}static updateTime(e){return new xn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ku(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class hc{}function ov(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new uf(i.key,xn.none()):new Ka(i.key,i.data,xn.none());{const t=i.data,s=Yt.empty();let o=new vt(kt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new Pi(i.key,s,new un(o.toArray()),xn.none())}}function KT(i,e,t){i instanceof Ka?(function(o,l,h){const m=o.value.clone(),g=ey(o.fieldTransforms,l,h.transformResults);m.setAll(g),l.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(i,e,t):i instanceof Pi?(function(o,l,h){if(!ku(o.precondition,l))return void l.convertToUnknownDocument(h.version);const m=ey(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(av(o)),g.setAll(m),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(i,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Va(i,e,t,s){return i instanceof Ka?(function(l,h,m,g){if(!ku(l.precondition,h))return m;const y=l.value.clone(),E=ty(l.fieldTransforms,g,h);return y.setAll(E),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null})(i,e,t,s):i instanceof Pi?(function(l,h,m,g){if(!ku(l.precondition,h))return m;const y=ty(l.fieldTransforms,g,h),E=h.data;return E.setAll(av(l)),E.setAll(y),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),m===null?null:m.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((w=>w.field)))})(i,e,t,s):(function(l,h,m){return ku(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(i,e,t)}function QT(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),l=nv(s.transform,o||null);l!=null&&(t===null&&(t=Yt.empty()),t.set(s.field,l))}return t||null}function Zg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&go(s,o,((l,h)=>WT(l,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Ka extends hc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Pi extends hc{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function av(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function ey(i,e,t){const s=new Map;$e(i.length===t.length,32656,{Re:t.length,Ve:i.length});for(let o=0;o<t.length;o++){const l=i[o],h=l.transform,m=e.data.field(l.field);s.set(l.field,HT(h,m,t[o]))}return s}function ty(i,e,t){const s=new Map;for(const o of i){const l=o.transform,h=t.data.field(o.field);s.set(o.field,qT(l,h,e))}return s}class uf extends hc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class XT extends hc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&KT(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Va(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Va(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=ev();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let m=this.applyToLocalView(h,l.mutatedFields);m=t.has(o.key)?null:m;const g=ov(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(ve.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),xe())}isEqual(e){return this.batchId===e.batchId&&go(this.mutations,e.mutations,((t,s)=>Zg(t,s)))&&go(this.baseMutations,e.baseMutations,((t,s)=>Zg(t,s)))}}class cf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){$e(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return UT})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,s[h].version);return new cf(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ft,Ve;function eI(i){switch(i){case H.OK:return ge(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return ge(15467,{code:i})}}function lv(i){if(i===void 0)return Rr("GRPC error has no .code"),H.UNKNOWN;switch(i){case ft.OK:return H.OK;case ft.CANCELLED:return H.CANCELLED;case ft.UNKNOWN:return H.UNKNOWN;case ft.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case ft.INTERNAL:return H.INTERNAL;case ft.UNAVAILABLE:return H.UNAVAILABLE;case ft.UNAUTHENTICATED:return H.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case ft.NOT_FOUND:return H.NOT_FOUND;case ft.ALREADY_EXISTS:return H.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return H.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case ft.ABORTED:return H.ABORTED;case ft.OUT_OF_RANGE:return H.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return H.UNIMPLEMENTED;case ft.DATA_LOSS:return H.DATA_LOSS;default:return ge(39323,{code:i})}}(Ve=ft||(ft={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI=new gi([4294967295,4294967295],0);function ny(i){const e=tI().encode(i),t=new I_;return t.update(e),new Uint8Array(t.digest())}function ry(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new gi([t,s],0),new gi([o,l],0)]}class hf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ca(`Invalid padding: ${t}`);if(s<0)throw new Ca(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ca(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ca(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=gi.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(gi.fromNumber(s)));return o.compare(nI)===1&&(o=new gi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=ny(e),[s,o]=ry(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(s,o,l);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new hf(l,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.ge===0)return;const t=ny(e),[s,o]=ry(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(s,o,l);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ca extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Qa.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new dc(ve.min(),o,new nt(Ne),Cr(),xe())}}class Qa{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Qa(s,t,xe(),xe(),xe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class uv{constructor(e,t){this.targetId=e,this.Ce=t}}class cv{constructor(e,t,s=xt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class iy{constructor(){this.ve=0,this.Fe=sy(),this.Me=xt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=xe(),t=xe(),s=xe();return this.Fe.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:ge(38017,{changeType:l})}})),new Qa(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=sy()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,$e(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class rI{constructor(e){this.Ge=e,this.ze=new Map,this.je=Cr(),this.Je=Tu(),this.He=Tu(),this.Ye=new nt(Ne)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:ge(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const l=o.target;if(Od(l))if(s===0){const h=new de(l.path);this.et(t,h,Ut.newNoDocument(h,ve.min()))}else $e(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const m=this.ut(e),g=m?this.ct(m,e,h):1;if(g!==0){this.it(t);const y=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,y)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let h,m;try{h=Ti(s).toUint8Array()}catch(g){if(g instanceof L_)return mo("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new hf(h,o,l)}catch(g){return mo(g instanceof Ca?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((l=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(m)||(this.et(t,l,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((l,h)=>{const m=this.ot(h);if(m){if(l.current&&Od(m.target)){const g=new de(m.target.path);this.It(g).has(h)||this.Et(h,g)||this.et(h,g,Ut.newNoDocument(g,e))}l.Be&&(t.set(h,l.ke()),l.qe())}}));let s=xe();this.He.forEach(((l,h)=>{let m=!0;h.forEachWhile((g=>{const y=this.ot(g);return!y||y.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(l))})),this.je.forEach(((l,h)=>h.setReadTime(e)));const o=new dc(e,t,this.Ye,this.je,s);return this.je=Cr(),this.Je=Tu(),this.He=Tu(),this.Ye=new nt(Ne),o}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new iy,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new vt(Ne),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new vt(Ne),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ie("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new iy),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Tu(){return new nt(de.comparator)}function sy(){return new nt(de.comparator)}const iI={asc:"ASCENDING",desc:"DESCENDING"},sI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},oI={and:"AND",or:"OR"};class aI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function bd(i,e){return i.useProto3Json||oc(e)?e:{value:e}}function Wu(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hv(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function lI(i,e){return Wu(i,e.toTimestamp())}function Zn(i){return $e(!!i,49232),ve.fromTimestamp((function(t){const s=wi(t);return new Je(s.seconds,s.nanos)})(i))}function df(i,e){return Fd(i,e).canonicalString()}function Fd(i,e){const t=(function(o){return new Ke(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?t:t.child(e)}function dv(i){const e=Ke.fromString(i);return $e(yv(e),10190,{key:e.toString()}),e}function Ud(i,e){return df(i.databaseId,e.path)}function _d(i,e){const t=dv(e);if(t.get(1)!==i.databaseId.projectId)throw new se(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new se(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new de(pv(t))}function fv(i,e){return df(i.databaseId,e)}function uI(i){const e=dv(i);return e.length===4?Ke.emptyPath():pv(e)}function jd(i){return new Ke(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function pv(i){return $e(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function oy(i,e,t){return{name:Ud(i,e),fields:t.value.mapValue.fields}}function cI(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:ge(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(y,E){return y.useProto3Json?($e(E===void 0||typeof E=="string",58123),xt.fromBase64String(E||"")):($e(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),xt.fromUint8Array(E||new Uint8Array))})(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(y){const E=y.code===void 0?H.UNKNOWN:lv(y.code);return new se(E,y.message||"")})(h);t=new cv(s,o,l,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=_d(i,s.document.name),l=Zn(s.document.updateTime),h=s.document.createTime?Zn(s.document.createTime):ve.min(),m=new Yt({mapValue:{fields:s.document.fields}}),g=Ut.newFoundDocument(o,l,h,m),y=s.targetIds||[],E=s.removedTargetIds||[];t=new Nu(y,E,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=_d(i,s.document),l=s.readTime?Zn(s.readTime):ve.min(),h=Ut.newNoDocument(o,l),m=s.removedTargetIds||[];t=new Nu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=_d(i,s.document),l=s.removedTargetIds||[];t=new Nu([],l,o,null)}else{if(!("filter"in e))return ge(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,h=new ZT(o,l),m=s.targetId;t=new uv(m,h)}}return t}function hI(i,e){let t;if(e instanceof Ka)t={update:oy(i,e.key,e.value)};else if(e instanceof uf)t={delete:Ud(i,e.key)};else if(e instanceof Pi)t={update:oy(i,e.key,e.data),updateMask:EI(e.fieldMask)};else{if(!(e instanceof XT))return ge(16599,{Vt:e.type});t={verify:Ud(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,h){const m=h.transform;if(m instanceof qu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof ja)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Ba)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Hu)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw ge(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:lI(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:ge(27497)})(i,e.precondition)),t}function dI(i,e){return i&&i.length>0?($e(e!==void 0,14353),i.map((t=>(function(o,l){let h=o.updateTime?Zn(o.updateTime):Zn(l);return h.isEqual(ve.min())&&(h=Zn(l)),new GT(h,o.transformResults||[])})(t,e)))):[]}function fI(i,e){return{documents:[fv(i,e.path)]}}function pI(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=fv(i,o);const l=(function(y){if(y.length!==0)return gv(Dn.create(y,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(y){if(y.length!==0)return y.map((E=>(function(S){return{field:so(S.field),direction:yI(S.dir)}})(E)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=bd(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{ft:t,parent:o}}function mI(i){let e=uI(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){$e(s===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=(function(w){const S=mv(w);return S instanceof Dn&&H_(S)?S.getFilters():[S]})(t.where));let h=[];t.orderBy&&(h=(function(w){return w.map((S=>(function(U){return new $u(oo(U.field),(function(q){switch(q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(U.direction))})(S)))})(t.orderBy));let m=null;t.limit&&(m=(function(w){let S;return S=typeof w=="object"?w.value:w,oc(S)?null:S})(t.limit));let g=null;t.startAt&&(g=(function(w){const S=!!w.before,L=w.values||[];return new zu(L,S)})(t.startAt));let y=null;return t.endAt&&(y=(function(w){const S=!w.before,L=w.values||[];return new zu(L,S)})(t.endAt)),OT(e,o,h,l,m,"F",g,y)}function gI(i,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function mv(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=oo(t.unaryFilter.field);return pt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=oo(t.unaryFilter.field);return pt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=oo(t.unaryFilter.field);return pt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=oo(t.unaryFilter.field);return pt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ge(61313);default:return ge(60726)}})(i):i.fieldFilter!==void 0?(function(t){return pt.create(oo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ge(58110);default:return ge(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return Dn.create(t.compositeFilter.filters.map((s=>mv(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ge(1026)}})(t.compositeFilter.op))})(i):ge(30097,{filter:i})}function yI(i){return iI[i]}function _I(i){return sI[i]}function vI(i){return oI[i]}function so(i){return{fieldPath:i.canonicalString()}}function oo(i){return kt.fromServerFormat(i.fieldPath)}function gv(i){return i instanceof pt?(function(t){if(t.op==="=="){if(Gg(t.value))return{unaryFilter:{field:so(t.field),op:"IS_NAN"}};if(Wg(t.value))return{unaryFilter:{field:so(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Gg(t.value))return{unaryFilter:{field:so(t.field),op:"IS_NOT_NAN"}};if(Wg(t.value))return{unaryFilter:{field:so(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:so(t.field),op:_I(t.op),value:t.value}}})(i):i instanceof Dn?(function(t){const s=t.getFilters().map((o=>gv(o)));return s.length===1?s[0]:{compositeFilter:{op:vI(t.op),filters:s}}})(i):ge(54877,{filter:i})}function EI(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function yv(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,t,s,o,l=ve.min(),h=ve.min(),m=xt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new di(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e){this.yt=e}}function TI(i){const e=mI({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Md(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(){this.Cn=new SI}addToCollectionParentIndex(e,t){return this.Cn.add(t),W.resolve()}getCollectionParents(e,t){return W.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return W.resolve()}deleteFieldIndex(e,t){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,t){return W.resolve()}getDocumentsMatchingTarget(e,t){return W.resolve(null)}getIndexType(e,t){return W.resolve(0)}getFieldIndexes(e,t){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,t){return W.resolve(Ei.min())}getMinOffsetFromCollectionGroup(e,t){return W.resolve(Ei.min())}updateCollectionGroup(e,t,s){return W.resolve()}updateIndexEntries(e,t){return W.resolve()}}class SI{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new vt(Ke.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new vt(Ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},_v=41943040;class Xt{static withCacheSize(e){return new Xt(e,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt.DEFAULT_COLLECTION_PERCENTILE=10,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xt.DEFAULT=new Xt(_v,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xt.DISABLED=new Xt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new vo(0)}static cr(){return new vo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly="LruGarbageCollector",AI=1048576;function uy([i,e],[t,s]){const o=Ne(i,t);return o===0?Ne(e,s):o}class RI{constructor(e){this.Ir=e,this.buffer=new vt(uy),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();uy(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class CI{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ie(ly,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ro(t)?ie(ly,"Ignoring IndexedDB error during garbage collection: ",t):await Ao(t)}await this.Vr(3e5)}))}}class PI{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return W.resolve(sc.ce);const s=new RI(t);return this.mr.forEachTarget(e,(o=>s.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>s.Ar(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(ay)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ay):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,o,l,h,m,g,y;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((w=>(w>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),o=this.params.maximumSequenceNumbersToCollect):o=w,h=Date.now(),this.nthSequenceNumber(e,o)))).next((w=>(s=w,m=Date.now(),this.removeTargets(e,s,t)))).next((w=>(l=w,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((w=>(y=Date.now(),ro()<=ke.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${l} targets in `+(g-m)+`ms
	Removed ${w} documents in `+(y-g)+`ms
Total Duration: ${y-E}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:w}))))}}function kI(i,e){return new PI(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(){this.changes=new ds((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?W.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Va(s.mutation,o,un.empty(),Je.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,xe()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=xe()){const o=is();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((l=>{let h=Ra();return l.forEach(((m,g)=>{h=h.insert(m,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=is();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,xe())))}populateOverlays(e,t,s){const o=[];return s.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let l=Cr();const h=Da(),m=(function(){return Da()})();return t.forEach(((g,y)=>{const E=s.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof Pi)?l=l.insert(y.key,y):E!==void 0?(h.set(y.key,E.mutation.getFieldMask()),Va(E.mutation,y,E.mutation.getFieldMask(),Je.now())):h.set(y.key,un.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((y,E)=>h.set(y,E))),t.forEach(((y,E)=>m.set(y,new xI(E,h.get(y)??null)))),m)))}recalculateAndSaveOverlays(e,t){const s=Da();let o=new nt(((h,m)=>h-m)),l=xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((g=>{const y=t.get(g);if(y===null)return;let E=s.get(g)||un.empty();E=m.applyToLocalView(y,E),s.set(g,E);const w=(o.get(m.batchId)||xe()).add(g);o=o.insert(m.batchId,w)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),y=g.key,E=g.value,w=ev();E.forEach((S=>{if(!l.has(S)){const L=ov(t.get(S),s.get(S));L!==null&&w.set(S,L),l=l.add(S)}})),h.push(this.documentOverlayCache.saveOverlays(e,y,w))}return W.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return de.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Q_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):W.resolve(is());let m=Ma,g=l;return h.next((y=>W.forEach(y,((E,w)=>(m<w.largestBatchId&&(m=w.largestBatchId),l.get(E)?W.resolve():this.remoteDocumentCache.getEntry(e,E).next((S=>{g=g.insert(E,S)}))))).next((()=>this.populateOverlays(e,y,l))).next((()=>this.computeViews(e,g,y,xe()))).next((E=>({batchId:m,changes:Z_(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new de(t)).next((s=>{let o=Ra();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=Ra();return this.indexManager.getCollectionParents(e,l).next((m=>W.forEach(m,(g=>{const y=(function(w,S){return new Ga(S,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,s,o).next((E=>{E.forEach(((w,S)=>{h=h.insert(w,S)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o)))).next((h=>{l.forEach(((g,y)=>{const E=y.getKey();h.get(E)===null&&(h=h.insert(E,Ut.newInvalidDocument(E)))}));let m=Ra();return h.forEach(((g,y)=>{const E=l.get(g);E!==void 0&&Va(E.mutation,y,un.empty(),Je.now()),uc(t,y)&&(m=m.insert(g,y))})),m}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return W.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:Zn(o.createTime)}})(t)),W.resolve()}getNamedQuery(e,t){return W.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(o){return{name:o.name,query:TI(o.bundledQuery),readTime:Zn(o.readTime)}})(t)),W.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(){this.overlays=new nt(de.comparator),this.qr=new Map}getOverlay(e,t){return W.resolve(this.overlays.get(t))}getOverlays(e,t){const s=is();return W.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&s.set(o,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,l)=>{this.St(e,t,l)})),W.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.qr.delete(s)),W.resolve()}getOverlaysForCollection(e,t,s){const o=is(),l=t.length+1,h=new de(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,y=g.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&g.largestBatchId>s&&o.set(g.getKey(),g)}return W.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new nt(((y,E)=>y-E));const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>s){let E=l.get(y.largestBatchId);E===null&&(E=is(),l=l.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const m=is(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((y,E)=>m.set(y,E))),!(m.size()>=o)););return W.resolve(m)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new JT(t,s));let l=this.qr.get(t);l===void 0&&(l=xe(),this.qr.set(t,l)),this.qr.set(t,l.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(){this.sessionToken=xt.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,W.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(){this.Qr=new vt(It.$r),this.Ur=new vt(It.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new It(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new It(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new de(new Ke([])),s=new It(t,e),o=new It(t,e+1),l=[];return this.Ur.forEachInRange([s,o],(h=>{this.Gr(h),l.push(h.key)})),l}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new de(new Ke([])),s=new It(t,e),o=new It(t,e+1);let l=xe();return this.Ur.forEachInRange([s,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new It(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class It{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return de.comparator(e.key,t.key)||Ne(e.Yr,t.Yr)}static Kr(e,t){return Ne(e.Yr,t.Yr)||de.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new vt(It.$r)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new YT(l,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Zr=this.Zr.add(new It(m.key,l)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return W.resolve(h)}lookupMutationBatch(e,t){return W.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ei(s),l=o<0?0:o;return W.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?tf:this.tr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new It(t,0),o=new It(t,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([s,o],(h=>{const m=this.Xr(h.Yr);l.push(m)})),W.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new vt(Ne);return t.forEach((o=>{const l=new It(o,0),h=new It(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,h],(m=>{s=s.add(m.Yr)}))})),W.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;de.isDocumentKey(l)||(l=l.child(""));const h=new It(new de(l),0);let m=new vt(Ne);return this.Zr.forEachWhile((g=>{const y=g.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(m=m.add(g.Yr)),!0)}),h),W.resolve(this.ti(m))}ti(e){const t=[];return e.forEach((s=>{const o=this.Xr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){$e(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return W.forEach(t.mutations,(o=>{const l=new It(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new It(t,0),o=this.Zr.firstAfterOrEqual(s);return W.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e){this.ri=e,this.docs=(function(){return new nt(de.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return W.resolve(s?s.document.mutableCopy():Ut.newInvalidDocument(t))}getEntries(e,t){let s=Cr();return t.forEach((o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():Ut.newInvalidDocument(o))})),W.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=Cr();const h=t.path,m=new de(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:y,value:{document:E}}=g.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||dT(hT(E),s)<=0||(o.has(E.key)||uc(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return W.resolve(l)}getAllFromCollectionGroup(e,t,s,o){ge(9500)}ii(e,t){return W.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new FI(this)}getSize(e){return W.resolve(this.size)}}class FI extends NI{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)})),W.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e){this.persistence=e,this.si=new ds((t=>sf(t)),of),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.oi=0,this._i=new ff,this.targetCount=0,this.ai=vo.ur()}forEachTarget(e,t){return this.si.forEach(((s,o)=>t(o))),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),W.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new vo(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,W.resolve()}updateTargetData(e,t){return this.Pr(t),W.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.si.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.si.delete(h),l.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),W.waitFor(l).next((()=>o))}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return W.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),W.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),W.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),W.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return W.resolve(s)}containsKey(e,t){return W.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e,t){this.ui={},this.overlays={},this.ci=new sc(0),this.li=!1,this.li=!0,this.hi=new LI,this.referenceDelegate=e(this),this.Pi=new UI(this),this.indexManager=new II,this.remoteDocumentCache=(function(o){return new bI(o)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new wI(t),this.Ii=new VI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new OI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new MI(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){ie("MemoryPersistence","Starting transaction:",e);const o=new jI(this.ci.next());return this.referenceDelegate.Ei(),s(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ai(e,t){return W.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class jI extends pT{constructor(e){super(),this.currentSequenceNumber=e}}class pf{constructor(e){this.persistence=e,this.Ri=new ff,this.Vi=null}static mi(e){return new pf(e)}get fi(){if(this.Vi)return this.Vi;throw ge(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),W.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),W.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),W.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((o=>this.fi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.fi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.fi,(s=>{const o=de.fromPath(s);return this.gi(e,o).next((l=>{l||t.removeEntry(o,ve.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return W.or([()=>W.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Gu{constructor(e,t){this.persistence=e,this.pi=new ds((s=>yT(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=kI(this,t)}static mi(e,t){return new Gu(e,t)}Ei(){}di(e){return W.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return W.forEach(this.pi,((s,o)=>this.br(e,s,o).next((l=>l?W.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ii(e,(h=>this.br(e,h,t).next((m=>{m||(s++,l.removeEntry(h,ve.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),W.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),W.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),W.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Cu(e.data.value)),t}br(e,t,s){return W.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return W.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=o}static As(e,t){let s=xe(),o=xe();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new mf(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return VE()?8:mT(jt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.ys(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ws(e,t,o,s).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new BI;return this.Ss(e,t,h).next((m=>{if(l.result=m,this.Vs)return this.bs(e,t,h,m.size)}))})).next((()=>l.result))}bs(e,t,s,o){return s.documentReadCount<this.fs?(ro()<=ke.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",io(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),W.resolve()):(ro()<=ke.DEBUG&&ie("QueryEngine","Query:",io(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(ro()<=ke.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",io(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Jn(t))):W.resolve())}ys(e,t){if(Yg(t))return W.resolve(null);let s=Jn(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Md(t,null,"F"),s=Jn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const h=xe(...l);return this.ps.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((g=>{const y=this.Ds(t,m);return this.Cs(t,y,h,g.readTime)?this.ys(e,Md(t,null,"F")):this.vs(e,y,t,g)}))))})))))}ws(e,t,s,o){return Yg(t)||o.isEqual(ve.min())?W.resolve(null):this.ps.getDocuments(e,s).next((l=>{const h=this.Ds(t,l);return this.Cs(t,h,s,o)?W.resolve(null):(ro()<=ke.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),io(t)),this.vs(e,h,t,cT(o,Ma)).next((m=>m)))}))}Ds(e,t){let s=new vt(Y_(e));return t.forEach(((o,l)=>{uc(e,l)&&(s=s.add(l))})),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}Ss(e,t,s){return ro()<=ke.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",io(t)),this.ps.getDocumentsMatchingQuery(e,t,Ei.min(),s)}vs(e,t,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf="LocalStore",$I=3e8;class qI{constructor(e,t,s,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new nt(Ne),this.xs=new ds((l=>sf(l)),of),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new DI(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function HI(i,e,t,s){return new qI(i,e,t,s)}async function Ev(i,e){const t=Te(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((l=>(o=l,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const h=[],m=[];let g=xe();for(const y of o){h.push(y.batchId);for(const E of y.mutations)g=g.add(E.key)}for(const y of l){m.push(y.batchId);for(const E of y.mutations)g=g.add(E.key)}return t.localDocuments.getDocuments(s,g).next((y=>({Ls:y,removedBatchIds:h,addedBatchIds:m})))}))}))}function WI(i,e){const t=Te(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),l=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(m,g,y,E){const w=y.batch,S=w.keys();let L=W.resolve();return S.forEach((U=>{L=L.next((()=>E.getEntry(g,U))).next(($=>{const q=y.docVersions.get(U);$e(q!==null,48541),$.version.compareTo(q)<0&&(w.applyToRemoteDocument($,y),$.isValidDocument()&&($.setReadTime(y.commitVersion),E.addEntry($)))}))})),L.next((()=>m.mutationQueue.removeMutationBatch(g,w)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let g=xe();for(let y=0;y<m.mutationResults.length;++y)m.mutationResults[y].transformResults.length>0&&(g=g.add(m.batch.mutations[y].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function wv(i){const e=Te(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function GI(i,e){const t=Te(i),s=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const m=[];e.targetChanges.forEach(((E,w)=>{const S=o.get(w);if(!S)return;m.push(t.Pi.removeMatchingKeys(l,E.removedDocuments,w).next((()=>t.Pi.addMatchingKeys(l,E.addedDocuments,w))));let L=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(w)!==null?L=L.withResumeToken(xt.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):E.resumeToken.approximateByteSize()>0&&(L=L.withResumeToken(E.resumeToken,s)),o=o.insert(w,L),(function($,q,J){return $.resumeToken.approximateByteSize()===0||q.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=$I?!0:J.addedDocuments.size+J.modifiedDocuments.size+J.removedDocuments.size>0})(S,L,E)&&m.push(t.Pi.updateTargetData(l,L))}));let g=Cr(),y=xe();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))})),m.push(KI(l,h,e.documentUpdates).next((E=>{g=E.ks,y=E.qs}))),!s.isEqual(ve.min())){const E=t.Pi.getLastRemoteSnapshotVersion(l).next((w=>t.Pi.setTargetsMetadata(l,l.currentSequenceNumber,s)));m.push(E)}return W.waitFor(m).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,y))).next((()=>g))})).then((l=>(t.Ms=o,l)))}function KI(i,e,t){let s=xe(),o=xe();return t.forEach((l=>s=s.add(l))),e.getEntries(i,s).next((l=>{let h=Cr();return t.forEach(((m,g)=>{const y=l.get(m);g.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(ve.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!y.isValidDocument()||g.version.compareTo(y.version)>0||g.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):ie(gf,"Ignoring outdated watch update for ",m,". Current version:",y.version," Watch version:",g.version)})),{ks:h,qs:o}}))}function QI(i,e){const t=Te(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=tf),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function XI(i,e){const t=Te(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.Pi.getTargetData(s,e).next((l=>l?(o=l,W.resolve(o)):t.Pi.allocateTargetId(s).next((h=>(o=new di(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function Bd(i,e,t){const s=Te(i),o=s.Ms.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Ro(h))throw h;ie(gf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function cy(i,e,t){const s=Te(i);let o=ve.min(),l=xe();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,y,E){const w=Te(g),S=w.xs.get(E);return S!==void 0?W.resolve(w.Ms.get(S)):w.Pi.getTargetData(y,E)})(s,h,Jn(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(h,m.targetId).next((g=>{l=g}))})).next((()=>s.Fs.getDocumentsMatchingQuery(h,e,t?o:ve.min(),t?l:xe()))).next((m=>(YI(s,MT(e),m),{documents:m,Qs:l})))))}function YI(i,e,t){let s=i.Os.get(e)||ve.min();t.forEach(((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),i.Os.set(e,s)}class hy{constructor(){this.activeTargetIds=zT()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class JI{constructor(){this.Mo=new hy,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new hy,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy="ConnectivityMonitor";class fy{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ie(dy,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ie(dy,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Iu=null;function zd(){return Iu===null?Iu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Iu++,"0x"+Iu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd="RestConnection",eS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class tS{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===ju?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,t,s,o,l){const h=zd(),m=this.zo(e,t.toUriEncodedString());ie(vd,`Sending RPC '${e}' ${h}:`,m,s);const g={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(g,o,l);const{host:y}=new URL(m),E=To(y);return this.Jo(e,m,g,s,E).then((w=>(ie(vd,`Received RPC '${e}' ${h}: `,w),w)),(w=>{throw mo(vd,`RPC '${e}' ${h} failed with error: `,w,"url: ",m,"request:",s),w}))}Ho(e,t,s,o,l,h){return this.Go(e,t,s,o,l)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+So})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),s&&s.headers.forEach(((o,l)=>e[l]=o))}zo(e,t){const s=eS[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="WebChannelConnection";class rS extends tS{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,l){const h=zd();return new Promise(((m,g)=>{const y=new S_;y.setWithCredentials(!0),y.listenOnce(A_.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case Ru.NO_ERROR:const w=y.getResponseJson();ie(bt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(w)),m(w);break;case Ru.TIMEOUT:ie(bt,`RPC '${e}' ${h} timed out`),g(new se(H.DEADLINE_EXCEEDED,"Request time out"));break;case Ru.HTTP_ERROR:const S=y.getStatus();if(ie(bt,`RPC '${e}' ${h} failed with status:`,S,"response text:",y.getResponseText()),S>0){let L=y.getResponseJson();Array.isArray(L)&&(L=L[0]);const U=L==null?void 0:L.error;if(U&&U.status&&U.message){const $=(function(J){const te=J.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(te)>=0?te:H.UNKNOWN})(U.status);g(new se($,U.message))}else g(new se(H.UNKNOWN,"Server responded with status "+y.getStatus()))}else g(new se(H.UNAVAILABLE,"Connection failed."));break;default:ge(9055,{l_:e,streamId:h,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{ie(bt,`RPC '${e}' ${h} completed.`)}}));const E=JSON.stringify(o);ie(bt,`RPC '${e}' ${h} sending request:`,o),y.send(t,"POST",E,s,15)}))}T_(e,t,s){const o=zd(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=P_(),m=C_(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(g.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(g.useFetchStreams=!0),this.jo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const E=l.join("");ie(bt,`Creating RPC '${e}' stream ${o}: ${E}`,g);const w=h.createWebChannel(E,g);this.I_(w);let S=!1,L=!1;const U=new nS({Yo:q=>{L?ie(bt,`Not sending because RPC '${e}' stream ${o} is closed:`,q):(S||(ie(bt,`Opening RPC '${e}' stream ${o} transport.`),w.open(),S=!0),ie(bt,`RPC '${e}' stream ${o} sending:`,q),w.send(q))},Zo:()=>w.close()}),$=(q,J,te)=>{q.listen(J,(fe=>{try{te(fe)}catch(Ee){setTimeout((()=>{throw Ee}),0)}}))};return $(w,Aa.EventType.OPEN,(()=>{L||(ie(bt,`RPC '${e}' stream ${o} transport opened.`),U.o_())})),$(w,Aa.EventType.CLOSE,(()=>{L||(L=!0,ie(bt,`RPC '${e}' stream ${o} transport closed`),U.a_(),this.E_(w))})),$(w,Aa.EventType.ERROR,(q=>{L||(L=!0,mo(bt,`RPC '${e}' stream ${o} transport errored. Name:`,q.name,"Message:",q.message),U.a_(new se(H.UNAVAILABLE,"The operation could not be completed")))})),$(w,Aa.EventType.MESSAGE,(q=>{var J;if(!L){const te=q.data[0];$e(!!te,16349);const fe=te,Ee=(fe==null?void 0:fe.error)||((J=fe[0])==null?void 0:J.error);if(Ee){ie(bt,`RPC '${e}' stream ${o} received error:`,Ee);const Oe=Ee.status;let Ie=(function(C){const x=ft[C];if(x!==void 0)return lv(x)})(Oe),k=Ee.message;Ie===void 0&&(Ie=H.INTERNAL,k="Unknown error status: "+Oe+" with message "+Ee.message),L=!0,U.a_(new se(Ie,k)),w.close()}else ie(bt,`RPC '${e}' stream ${o} received:`,te),U.u_(te)}})),$(m,R_.STAT_EVENT,(q=>{q.stat===kd.PROXY?ie(bt,`RPC '${e}' stream ${o} detected buffering proxy`):q.stat===kd.NOPROXY&&ie(bt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{U.__()}),0),U}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function Ed(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(i){return new aI(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e,t,s=1e3,o=1.5,l=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=o,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&ie("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py="PersistentStream";class Iv{constructor(e,t,s,o,l,h,m,g){this.Mi=e,this.S_=s,this.b_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Tv(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===H.RESOURCE_EXHAUSTED?(Rr(t.toString()),Rr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===t&&this.G_(s,o)}),(s=>{e((()=>{const o=new se(H.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ie(py,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(ie(py,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class iS extends Iv{constructor(e,t,s,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=cI(this.serializer,e),s=(function(l){if(!("targetChange"in l))return ve.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?ve.min():h.readTime?Zn(h.readTime):ve.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=jd(this.serializer),t.addTarget=(function(l,h){let m;const g=h.target;if(m=Od(g)?{documents:fI(l,g)}:{query:pI(l,g).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=hv(l,h.resumeToken);const y=bd(l,h.expectedCount);y!==null&&(m.expectedCount=y)}else if(h.snapshotVersion.compareTo(ve.min())>0){m.readTime=Wu(l,h.snapshotVersion.toTimestamp());const y=bd(l,h.expectedCount);y!==null&&(m.expectedCount=y)}return m})(this.serializer,e);const s=gI(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=jd(this.serializer),t.removeTarget=e,this.q_(t)}}class sS extends Iv{constructor(e,t,s,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return $e(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,$e(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){$e(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=dI(e.writeResults,e.commitTime),s=Zn(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=jd(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>hI(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{}class aS extends oS{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new se(H.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Go(e,Fd(t,s),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new se(H.UNKNOWN,l.toString())}))}Ho(e,t,s,o,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Ho(e,Fd(t,s),o,h,m,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new se(H.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class lS{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Rr(t),this.aa=!1):ie("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs="RemoteStore";class uS{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo((h=>{s.enqueueAndForget((async()=>{fs(this)&&(ie(cs,"Restarting streams for network reachability change."),await(async function(g){const y=Te(g);y.Ea.add(4),await Xa(y),y.Ra.set("Unknown"),y.Ea.delete(4),await pc(y)})(this))}))})),this.Ra=new lS(s,o)}}async function pc(i){if(fs(i))for(const e of i.da)await e(!0)}async function Xa(i){for(const e of i.da)await e(!1)}function Sv(i,e){const t=Te(i);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Ef(t)?vf(t):Co(t).O_()&&_f(t,e))}function yf(i,e){const t=Te(i),s=Co(t);t.Ia.delete(e),s.O_()&&Av(t,e),t.Ia.size===0&&(s.O_()?s.L_():fs(t)&&t.Ra.set("Unknown"))}function _f(i,e){if(i.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Co(i).Y_(e)}function Av(i,e){i.Va.Ue(e),Co(i).Z_(e)}function vf(i){i.Va=new rI({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ia.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),Co(i).start(),i.Ra.ua()}function Ef(i){return fs(i)&&!Co(i).x_()&&i.Ia.size>0}function fs(i){return Te(i).Ea.size===0}function Rv(i){i.Va=void 0}async function cS(i){i.Ra.set("Online")}async function hS(i){i.Ia.forEach(((e,t)=>{_f(i,e)}))}async function dS(i,e){Rv(i),Ef(i)?(i.Ra.ha(e),vf(i)):i.Ra.set("Unknown")}async function fS(i,e,t){if(i.Ra.set("Online"),e instanceof cv&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const m of l.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ia.delete(m),o.Va.removeTarget(m))})(i,e)}catch(s){ie(cs,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ku(i,s)}else if(e instanceof Nu?i.Va.Ze(e):e instanceof uv?i.Va.st(e):i.Va.tt(e),!t.isEqual(ve.min()))try{const s=await wv(i.localStore);t.compareTo(s)>=0&&await(function(l,h){const m=l.Va.Tt(h);return m.targetChanges.forEach(((g,y)=>{if(g.resumeToken.approximateByteSize()>0){const E=l.Ia.get(y);E&&l.Ia.set(y,E.withResumeToken(g.resumeToken,h))}})),m.targetMismatches.forEach(((g,y)=>{const E=l.Ia.get(g);if(!E)return;l.Ia.set(g,E.withResumeToken(xt.EMPTY_BYTE_STRING,E.snapshotVersion)),Av(l,g);const w=new di(E.target,g,y,E.sequenceNumber);_f(l,w)})),l.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){ie(cs,"Failed to raise snapshot:",s),await Ku(i,s)}}async function Ku(i,e,t){if(!Ro(e))throw e;i.Ea.add(1),await Xa(i),i.Ra.set("Offline"),t||(t=()=>wv(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{ie(cs,"Retrying IndexedDB access"),await t(),i.Ea.delete(1),await pc(i)}))}function Cv(i,e){return e().catch((t=>Ku(i,t,e)))}async function mc(i){const e=Te(i),t=Si(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:tf;for(;pS(e);)try{const o=await QI(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,mS(e,o)}catch(o){await Ku(e,o)}Pv(e)&&kv(e)}function pS(i){return fs(i)&&i.Ta.length<10}function mS(i,e){i.Ta.push(e);const t=Si(i);t.O_()&&t.X_&&t.ea(e.mutations)}function Pv(i){return fs(i)&&!Si(i).x_()&&i.Ta.length>0}function kv(i){Si(i).start()}async function gS(i){Si(i).ra()}async function yS(i){const e=Si(i);for(const t of i.Ta)e.ea(t.mutations)}async function _S(i,e,t){const s=i.Ta.shift(),o=cf.from(s,e,t);await Cv(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await mc(i)}async function vS(i,e){e&&Si(i).X_&&await(async function(s,o){if((function(h){return eI(h)&&h!==H.ABORTED})(o.code)){const l=s.Ta.shift();Si(s).B_(),await Cv(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o))),await mc(s)}})(i,e),Pv(i)&&kv(i)}async function my(i,e){const t=Te(i);t.asyncQueue.verifyOperationInProgress(),ie(cs,"RemoteStore received new credentials");const s=fs(t);t.Ea.add(3),await Xa(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await pc(t)}async function ES(i,e){const t=Te(i);e?(t.Ea.delete(2),await pc(t)):e||(t.Ea.add(2),await Xa(t),t.Ra.set("Unknown"))}function Co(i){return i.ma||(i.ma=(function(t,s,o){const l=Te(t);return l.sa(),new iS(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(i.datastore,i.asyncQueue,{Xo:cS.bind(null,i),t_:hS.bind(null,i),r_:dS.bind(null,i),H_:fS.bind(null,i)}),i.da.push((async e=>{e?(i.ma.B_(),Ef(i)?vf(i):i.Ra.set("Unknown")):(await i.ma.stop(),Rv(i))}))),i.ma}function Si(i){return i.fa||(i.fa=(function(t,s,o){const l=Te(t);return l.sa(),new sS(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(i.datastore,i.asyncQueue,{Xo:()=>Promise.resolve(),t_:gS.bind(null,i),r_:vS.bind(null,i),ta:yS.bind(null,i),na:_S.bind(null,i)}),i.da.push((async e=>{e?(i.fa.B_(),await mc(i)):(await i.fa.stop(),i.Ta.length>0&&(ie(cs,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))}))),i.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new ss,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,m=new wf(e,t,h,o,l);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tf(i,e){if(Rr("AsyncQueue",`${e}: ${i}`),Ro(i))return new se(H.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{static emptySet(e){return new lo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||de.comparator(t.key,s.key):(t,s)=>de.comparator(t.key,s.key),this.keyedMap=Ra(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof lo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new lo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(){this.ga=new nt(de.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):ge(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Eo{constructor(e,t,s,o,l,h,m,g,y){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=y}static fromInitialDocuments(e,t,s,o,l){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new Eo(e,t,lo.emptySet(t),h,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&lc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class TS{constructor(){this.queries=yy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=Te(t),l=o.queries;o.queries=yy(),l.forEach(((h,m)=>{for(const g of m.Sa)g.onError(s)}))})(this,new se(H.ABORTED,"Firestore shutting down"))}}function yy(){return new ds((i=>X_(i)),lc)}async function IS(i,e){const t=Te(i);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.ba()&&e.Da()&&(s=2):(l=new wS,s=e.Da()?0:1);try{switch(s){case 0:l.wa=await t.onListen(o,!0);break;case 1:l.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=Tf(h,`Initialization of query '${io(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&If(t)}async function SS(i,e){const t=Te(i),s=e.query;let o=3;const l=t.queries.get(s);if(l){const h=l.Sa.indexOf(e);h>=0&&(l.Sa.splice(h,1),l.Sa.length===0?o=e.Da()?0:1:!l.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function AS(i,e){const t=Te(i);let s=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const m of h.Sa)m.Fa(o)&&(s=!0);h.wa=o}}s&&If(t)}function RS(i,e,t){const s=Te(i),o=s.queries.get(e);if(o)for(const l of o.Sa)l.onError(t);s.queries.delete(e)}function If(i){i.Ca.forEach((e=>{e.next()}))}var $d,_y;(_y=$d||($d={})).Ma="default",_y.Cache="cache";class CS{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Eo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Eo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==$d.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e){this.key=e}}class xv{constructor(e){this.key=e}}class PS{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=xe(),this.mutatedKeys=xe(),this.eu=Y_(e),this.tu=new lo(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new gy,o=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,w)=>{const S=o.get(E),L=uc(this.query,w)?w:null,U=!!S&&this.mutatedKeys.has(S.key),$=!!L&&(L.hasLocalMutations||this.mutatedKeys.has(L.key)&&L.hasCommittedMutations);let q=!1;S&&L?S.data.isEqual(L.data)?U!==$&&(s.track({type:3,doc:L}),q=!0):this.su(S,L)||(s.track({type:2,doc:L}),q=!0,(g&&this.eu(L,g)>0||y&&this.eu(L,y)<0)&&(m=!0)):!S&&L?(s.track({type:0,doc:L}),q=!0):S&&!L&&(s.track({type:1,doc:S}),q=!0,(g||y)&&(m=!0)),q&&(L?(h=h.add(L),l=$?l.add(E):l.delete(E)):(h=h.delete(E),l=l.delete(E)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),l=l.delete(E.key),s.track({type:1,doc:E})}return{tu:h,iu:s,Cs:m,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((E,w)=>(function(L,U){const $=q=>{switch(q){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge(20277,{Rt:q})}};return $(L)-$(U)})(E.type,w.type)||this.eu(E.doc,w.doc))),this.ou(s),o=o??!1;const m=t&&!o?this._u():[],g=this.Xa.size===0&&this.current&&!o?1:0,y=g!==this.Za;return this.Za=g,h.length!==0||y?{snapshot:new Eo(this.query,e.tu,l,h,e.mutatedKeys,g===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new gy,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=xe(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new xv(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new Nv(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=xe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Eo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Sf="SyncEngine";class kS{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class NS{constructor(e){this.key=e,this.hu=!1}}class xS{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new ds((m=>X_(m)),lc),this.Iu=new Map,this.Eu=new Set,this.du=new nt(de.comparator),this.Au=new Map,this.Ru=new ff,this.Vu={},this.mu=new Map,this.fu=vo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function DS(i,e,t=!0){const s=bv(i);let o;const l=s.Tu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.lu()):o=await Dv(s,e,t,!0),o}async function VS(i,e){const t=bv(i);await Dv(t,e,!0,!1)}async function Dv(i,e,t,s){const o=await XI(i.localStore,Jn(e)),l=o.targetId,h=i.sharedClientState.addLocalQueryTarget(l,t);let m;return s&&(m=await OS(i,e,l,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&Sv(i.remoteStore,o),m}async function OS(i,e,t,s,o){i.pu=(w,S,L)=>(async function($,q,J,te){let fe=q.view.ru(J);fe.Cs&&(fe=await cy($.localStore,q.query,!1).then((({documents:k})=>q.view.ru(k,fe))));const Ee=te&&te.targetChanges.get(q.targetId),Oe=te&&te.targetMismatches.get(q.targetId)!=null,Ie=q.view.applyChanges(fe,$.isPrimaryClient,Ee,Oe);return Ey($,q.targetId,Ie.au),Ie.snapshot})(i,w,S,L);const l=await cy(i.localStore,e,!0),h=new PS(e,l.Qs),m=h.ru(l.documents),g=Qa.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),y=h.applyChanges(m,i.isPrimaryClient,g);Ey(i,t,y.au);const E=new kS(e,t,h);return i.Tu.set(e,E),i.Iu.has(t)?i.Iu.get(t).push(e):i.Iu.set(t,[e]),y.snapshot}async function LS(i,e,t){const s=Te(i),o=s.Tu.get(e),l=s.Iu.get(o.targetId);if(l.length>1)return s.Iu.set(o.targetId,l.filter((h=>!lc(h,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Bd(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&yf(s.remoteStore,o.targetId),qd(s,o.targetId)})).catch(Ao)):(qd(s,o.targetId),await Bd(s.localStore,o.targetId,!0))}async function MS(i,e){const t=Te(i),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),yf(t.remoteStore,s.targetId))}async function bS(i,e,t){const s=qS(i);try{const o=await(function(h,m){const g=Te(h),y=Je.now(),E=m.reduce(((L,U)=>L.add(U.key)),xe());let w,S;return g.persistence.runTransaction("Locally write mutations","readwrite",(L=>{let U=Cr(),$=xe();return g.Ns.getEntries(L,E).next((q=>{U=q,U.forEach(((J,te)=>{te.isValidDocument()||($=$.add(J))}))})).next((()=>g.localDocuments.getOverlayedDocuments(L,U))).next((q=>{w=q;const J=[];for(const te of m){const fe=QT(te,w.get(te.key).overlayedDocument);fe!=null&&J.push(new Pi(te.key,fe,z_(fe.value.mapValue),xn.exists(!0)))}return g.mutationQueue.addMutationBatch(L,y,J,m)})).next((q=>{S=q;const J=q.applyToLocalDocumentSet(w,$);return g.documentOverlayCache.saveOverlays(L,q.batchId,J)}))})).then((()=>({batchId:S.batchId,changes:Z_(w)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,g){let y=h.Vu[h.currentUser.toKey()];y||(y=new nt(Ne)),y=y.insert(m,g),h.Vu[h.currentUser.toKey()]=y})(s,o.batchId,t),await Ya(s,o.changes),await mc(s.remoteStore)}catch(o){const l=Tf(o,"Failed to persist write");t.reject(l)}}async function Vv(i,e){const t=Te(i);try{const s=await GI(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Au.get(l);h&&($e(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?$e(h.hu,14607):o.removedDocuments.size>0&&($e(h.hu,42227),h.hu=!1))})),await Ya(t,s,e)}catch(s){await Ao(s)}}function vy(i,e,t){const s=Te(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach(((l,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const g=Te(h);g.onlineState=m;let y=!1;g.queries.forEach(((E,w)=>{for(const S of w.Sa)S.va(m)&&(y=!0)})),y&&If(g)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function FS(i,e,t){const s=Te(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),l=o&&o.key;if(l){let h=new nt(de.comparator);h=h.insert(l,Ut.newNoDocument(l,ve.min()));const m=xe().add(l),g=new dc(ve.min(),new Map,new nt(Ne),h,m);await Vv(s,g),s.du=s.du.remove(l),s.Au.delete(e),Af(s)}else await Bd(s.localStore,e,!1).then((()=>qd(s,e,t))).catch(Ao)}async function US(i,e){const t=Te(i),s=e.batch.batchId;try{const o=await WI(t.localStore,e);Lv(t,s,null),Ov(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Ya(t,o)}catch(o){await Ao(o)}}async function jS(i,e,t){const s=Te(i);try{const o=await(function(h,m){const g=Te(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let E;return g.mutationQueue.lookupMutationBatch(y,m).next((w=>($e(w!==null,37113),E=w.keys(),g.mutationQueue.removeMutationBatch(y,w)))).next((()=>g.mutationQueue.performConsistencyCheck(y))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(y,E,m))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E))).next((()=>g.localDocuments.getDocuments(y,E)))}))})(s.localStore,e);Lv(s,e,t),Ov(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Ya(s,o)}catch(o){await Ao(o)}}function Ov(i,e){(i.mu.get(e)||[]).forEach((t=>{t.resolve()})),i.mu.delete(e)}function Lv(i,e,t){const s=Te(i);let o=s.Vu[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function qd(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Iu.get(e))i.Tu.delete(s),t&&i.Pu.yu(s,t);i.Iu.delete(e),i.isPrimaryClient&&i.Ru.jr(e).forEach((s=>{i.Ru.containsKey(s)||Mv(i,s)}))}function Mv(i,e){i.Eu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(yf(i.remoteStore,t),i.du=i.du.remove(e),i.Au.delete(t),Af(i))}function Ey(i,e,t){for(const s of t)s instanceof Nv?(i.Ru.addReference(s.key,e),BS(i,s)):s instanceof xv?(ie(Sf,"Document no longer in limbo: "+s.key),i.Ru.removeReference(s.key,e),i.Ru.containsKey(s.key)||Mv(i,s.key)):ge(19791,{wu:s})}function BS(i,e){const t=e.key,s=t.path.canonicalString();i.du.get(t)||i.Eu.has(s)||(ie(Sf,"New document in limbo: "+t),i.Eu.add(s),Af(i))}function Af(i){for(;i.Eu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Eu.values().next().value;i.Eu.delete(e);const t=new de(Ke.fromString(e)),s=i.fu.next();i.Au.set(s,new NS(t)),i.du=i.du.insert(t,s),Sv(i.remoteStore,new di(Jn(af(t.path)),s,"TargetPurposeLimboResolution",sc.ce))}}async function Ya(i,e,t){const s=Te(i),o=[],l=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,g)=>{h.push(s.pu(g,e,t).then((y=>{var E;if((y||t)&&s.isPrimaryClient){const w=y?!y.fromCache:(E=t==null?void 0:t.targetChanges.get(g.targetId))==null?void 0:E.current;s.sharedClientState.updateQueryState(g.targetId,w?"current":"not-current")}if(y){o.push(y);const w=mf.As(g.targetId,y);l.push(w)}})))})),await Promise.all(h),s.Pu.H_(o),await(async function(g,y){const E=Te(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>W.forEach(y,(S=>W.forEach(S.Es,(L=>E.persistence.referenceDelegate.addReference(w,S.targetId,L))).next((()=>W.forEach(S.ds,(L=>E.persistence.referenceDelegate.removeReference(w,S.targetId,L)))))))))}catch(w){if(!Ro(w))throw w;ie(gf,"Failed to update sequence numbers: "+w)}for(const w of y){const S=w.targetId;if(!w.fromCache){const L=E.Ms.get(S),U=L.snapshotVersion,$=L.withLastLimboFreeSnapshotVersion(U);E.Ms=E.Ms.insert(S,$)}}})(s.localStore,l))}async function zS(i,e){const t=Te(i);if(!t.currentUser.isEqual(e)){ie(Sf,"User change. New user:",e.toKey());const s=await Ev(t.localStore,e);t.currentUser=e,(function(l,h){l.mu.forEach((m=>{m.forEach((g=>{g.reject(new se(H.CANCELLED,h))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ya(t,s.Ls)}}function $S(i,e){const t=Te(i),s=t.Au.get(e);if(s&&s.hu)return xe().add(s.key);{let o=xe();const l=t.Iu.get(e);if(!l)return o;for(const h of l){const m=t.Tu.get(h);o=o.unionWith(m.view.nu)}return o}}function bv(i){const e=Te(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=Vv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$S.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=FS.bind(null,e),e.Pu.H_=AS.bind(null,e.eventManager),e.Pu.yu=RS.bind(null,e.eventManager),e}function qS(i){const e=Te(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=US.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=jS.bind(null,e),e}class Qu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=fc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return HI(this.persistence,new zI,e.initialUser,this.serializer)}Cu(e){return new vv(pf.mi,this.serializer)}Du(e){return new JI}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Qu.provider={build:()=>new Qu};class HS extends Qu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){$e(this.persistence.referenceDelegate instanceof Gu,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new CI(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Xt.withCacheSize(this.cacheSizeBytes):Xt.DEFAULT;return new vv((s=>Gu.mi(s,t)),this.serializer)}}class Hd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>vy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=zS.bind(null,this.syncEngine),await ES(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new TS})()}createDatastore(e){const t=fc(e.databaseInfo.databaseId),s=(function(l){return new rS(l)})(e.databaseInfo);return(function(l,h,m,g){return new aS(l,h,m,g)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,l,h,m){return new uS(s,o,l,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>vy(this.syncEngine,t,0)),(function(){return fy.v()?new fy:new ZI})())}createSyncEngine(e,t){return(function(o,l,h,m,g,y,E){const w=new xS(o,l,h,m,g,y);return E&&(w.gu=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Te(o);ie(cs,"RemoteStore shutting down."),l.Ea.add(5),await Xa(l),l.Aa.shutdown(),l.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Hd.provider={build:()=>new Hd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Rr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai="FirestoreClient";class GS{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ft.UNAUTHENTICATED,this.clientId=ef.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async h=>{ie(Ai,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(ie(Ai,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ss;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Tf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function wd(i,e){i.asyncQueue.verifyOperationInProgress(),ie(Ai,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await Ev(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function wy(i,e){i.asyncQueue.verifyOperationInProgress();const t=await KS(i);ie(Ai,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>my(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>my(e.remoteStore,o))),i._onlineComponents=e}async function KS(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ie(Ai,"Using user provided OfflineComponentProvider");try{await wd(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===H.FAILED_PRECONDITION||o.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;mo("Error using user provided cache. Falling back to memory cache: "+t),await wd(i,new Qu)}}else ie(Ai,"Using default OfflineComponentProvider"),await wd(i,new HS(void 0));return i._offlineComponents}async function Fv(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ie(Ai,"Using user provided OnlineComponentProvider"),await wy(i,i._uninitializedComponentsProvider._online)):(ie(Ai,"Using default OnlineComponentProvider"),await wy(i,new Hd))),i._onlineComponents}function QS(i){return Fv(i).then((e=>e.syncEngine))}async function Ty(i){const e=await Fv(i),t=e.eventManager;return t.onListen=DS.bind(null,e.syncEngine),t.onUnlisten=LS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=VS.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=MS.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv="firestore.googleapis.com",Sy=!0;class Ay{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new se(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=jv,this.ssl=Sy}else this.host=e.host,this.ssl=e.ssl??Sy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=_v;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<AI)throw new se(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Uv(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new se(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new se(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new se(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ay({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ay(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new Zw;switch(s.type){case"firstParty":return new rT(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new se(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Iy.get(t);s&&(ie("ComponentProvider","Removing Datastore"),Iy.delete(t),s.terminate())})(this),Promise.resolve()}}function XS(i,e,t,s={}){var y;i=yi(i,gc);const o=To(e),l=i._getSettings(),h={...l,emulatorOptions:i._getEmulatorOptions()},m=`${e}:${t}`;o&&(m_(`https://${m}`),g_("Firestore",!0)),l.host!==jv&&l.host!==m&&mo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...l,host:m,ssl:o,emulatorOptions:s};if(!as(g,h)&&(i._setSettings(g),s.mockUserToken)){let E,w;if(typeof s.mockUserToken=="string")E=s.mockUserToken,w=Ft.MOCK_USER;else{E=SE(s.mockUserToken,(y=i._app)==null?void 0:y.options.projectId);const S=s.mockUserToken.sub||s.mockUserToken.user_id;if(!S)throw new se(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new Ft(S)}i._authCredentials=new eT(new N_(E,w))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Po(this.firestore,e,this._query)}}class gt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _i(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}toJSON(){return{type:gt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Wa(t,gt._jsonSchema))return new gt(e,s||null,new de(Ke.fromString(t.referencePath)))}}gt._jsonSchemaVersion="firestore/documentReference/1.0",gt._jsonSchema={type:mt("string",gt._jsonSchemaVersion),referencePath:mt("string")};class _i extends Po{constructor(e,t,s){super(e,t,af(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new de(e))}withConverter(e){return new _i(this.firestore,e,this._path)}}function Su(i,e,...t){if(i=Nt(i),x_("collection","path",e),i instanceof gc){const s=Ke.fromString(e,...t);return bg(s),new _i(i,null,s)}{if(!(i instanceof gt||i instanceof _i))throw new se(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ke.fromString(e,...t));return bg(s),new _i(i.firestore,null,s)}}function xu(i,e,...t){if(i=Nt(i),arguments.length===1&&(e=ef.newId()),x_("doc","path",e),i instanceof gc){const s=Ke.fromString(e,...t);return Mg(s),new gt(i,null,new de(s))}{if(!(i instanceof gt||i instanceof _i))throw new se(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ke.fromString(e,...t));return Mg(s),new gt(i.firestore,i instanceof _i?i.converter:null,new de(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry="AsyncQueue";class Cy{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Tv(this,"async_queue_retry"),this._c=()=>{const s=Ed();s&&ie(Ry,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Ed();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Ed();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new ss;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ro(e))throw e;ie(Ry,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Rr("INTERNAL UNHANDLED ERROR: ",Py(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=wf.createAndSchedule(this,e,t,s,(l=>this.hc(l)));return this.tc.push(o),o}uc(){this.nc&&ge(47125,{Pc:Py(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Py(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(i){return(function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of s)if(l in o&&typeof o[l]=="function")return!0;return!1})(i,["next","error","complete"])}class wo extends gc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new Cy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Cy(e),this._firestoreClient=void 0,await e}}}function YS(i,e){const t=typeof i=="object"?i:E_(),s=typeof i=="string"?i:ju,o=Jd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=TE("firestore");l&&XS(o,...l)}return o}function Bv(i){if(i._terminated)throw new se(H.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||JS(i),i._firestoreClient}function JS(i){var s,o,l;const e=i._freezeSettings(),t=(function(m,g,y,E){return new ET(m,g,y,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,Uv(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)})(i._databaseId,((s=i._app)==null?void 0:s.options.appId)||"",i._persistenceKey,e);i._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((l=e.localCache)!=null&&l._onlineComponentProvider)&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new GS(i._authCredentials,i._appCheckCredentials,i._queue,t,i._componentsProvider&&(function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}})(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _n(xt.fromBase64String(e))}catch(t){throw new se(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new _n(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:_n._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Wa(e,_n._jsonSchema))return _n.fromBase64String(e.bytes)}}_n._jsonSchemaVersion="firestore/bytes/1.0",_n._jsonSchema={type:mt("string",_n._jsonSchemaVersion),bytes:mt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new se(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new se(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new se(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:er._jsonSchemaVersion}}static fromJSON(e){if(Wa(e,er._jsonSchema))return new er(e.latitude,e.longitude)}}er._jsonSchemaVersion="firestore/geoPoint/1.0",er._jsonSchema={type:mt("string",er._jsonSchemaVersion),latitude:mt("number"),longitude:mt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:tr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Wa(e,tr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new tr(e.vectorValues);throw new se(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}tr._jsonSchemaVersion="firestore/vectorValue/1.0",tr._jsonSchema={type:mt("string",tr._jsonSchemaVersion),vectorValues:mt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=/^__.*__$/;class eA{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Pi(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ka(e,this.data,t,this.fieldTransforms)}}class zv{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Pi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function $v(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge(40011,{Ac:i})}}class Cf{constructor(e,t,s,o,l,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Cf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Xu(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if($v(this.Ac)&&ZS.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class tA{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||fc(e)}Cc(e,t,s,o=!1){return new Cf({Ac:e,methodName:t,Dc:s,path:kt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pf(i){const e=i._freezeSettings(),t=fc(i._databaseId);return new tA(i._databaseId,!!e.ignoreUndefinedProperties,t)}function nA(i,e,t,s,o,l={}){const h=i.Cc(l.merge||l.mergeFields?2:0,e,t,o);kf("Data must be an object, but it was:",h,s);const m=qv(s,h);let g,y;if(l.merge)g=new un(h.fieldMask),y=h.fieldTransforms;else if(l.mergeFields){const E=[];for(const w of l.mergeFields){const S=Wd(e,w,t);if(!h.contains(S))throw new se(H.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);Wv(E,S)||E.push(S)}g=new un(E),y=h.fieldTransforms.filter((w=>g.covers(w.field)))}else g=null,y=h.fieldTransforms;return new eA(new Yt(m),g,y)}class _c extends Rf{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof _c}}function rA(i,e,t,s){const o=i.Cc(1,e,t);kf("Data must be an object, but it was:",o,s);const l=[],h=Yt.empty();Ci(s,((g,y)=>{const E=Nf(e,g,t);y=Nt(y);const w=o.yc(E);if(y instanceof _c)l.push(E);else{const S=Ja(y,w);S!=null&&(l.push(E),h.set(E,S))}}));const m=new un(l);return new zv(h,m,o.fieldTransforms)}function iA(i,e,t,s,o,l){const h=i.Cc(1,e,t),m=[Wd(e,s,t)],g=[o];if(l.length%2!=0)throw new se(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<l.length;S+=2)m.push(Wd(e,l[S])),g.push(l[S+1]);const y=[],E=Yt.empty();for(let S=m.length-1;S>=0;--S)if(!Wv(y,m[S])){const L=m[S];let U=g[S];U=Nt(U);const $=h.yc(L);if(U instanceof _c)y.push(L);else{const q=Ja(U,$);q!=null&&(y.push(L),E.set(L,q))}}const w=new un(y);return new zv(E,w,h.fieldTransforms)}function sA(i,e,t,s=!1){return Ja(t,i.Cc(s?4:3,e))}function Ja(i,e){if(Hv(i=Nt(i)))return kf("Unsupported field value:",e,i),qv(i,e);if(i instanceof Rf)return(function(s,o){if(!$v(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,o){const l=[];let h=0;for(const m of s){let g=Ja(m,o.wc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(i,e)}return(function(s,o){if((s=Nt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return $T(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Je.fromDate(s);return{timestampValue:Wu(o.serializer,l)}}if(s instanceof Je){const l=new Je(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Wu(o.serializer,l)}}if(s instanceof er)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof _n)return{bytesValue:hv(o.serializer,s._byteString)};if(s instanceof gt){const l=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:df(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof tr)return(function(h,m){return{mapValue:{fields:{[j_]:{stringValue:B_},[Bu]:{arrayValue:{values:h.toArray().map((y=>{if(typeof y!="number")throw m.Sc("VectorValues must only contain numeric values.");return lf(m.serializer,y)}))}}}}}})(s,o);throw o.Sc(`Unsupported field value: ${ic(s)}`)})(i,e)}function qv(i,e){const t={};return O_(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ci(i,((s,o)=>{const l=Ja(o,e.mc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function Hv(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Je||i instanceof er||i instanceof _n||i instanceof gt||i instanceof Rf||i instanceof tr)}function kf(i,e,t){if(!Hv(t)||!D_(t)){const s=ic(t);throw s==="an object"?e.Sc(i+" a custom object"):e.Sc(i+" "+s)}}function Wd(i,e,t){if((e=Nt(e))instanceof yc)return e._internalPath;if(typeof e=="string")return Nf(i,e);throw Xu("Field path arguments must be of type string or ",i,!1,void 0,t)}const oA=new RegExp("[~\\*/\\[\\]]");function Nf(i,e,t){if(e.search(oA)>=0)throw Xu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new yc(...e.split("."))._internalPath}catch{throw Xu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Xu(i,e,t,s,o){const l=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new se(H.INVALID_ARGUMENT,m+i+g)}function Wv(i,e){return i.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new aA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(xf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class aA extends Gv{data(){return super.data()}}function xf(i,e){return typeof e=="string"?Nf(i,e):e instanceof yc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new se(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Df{}class uA extends Df{}function Ny(i,e,...t){let s=[];e instanceof Df&&s.push(e),s=s.concat(t),(function(l){const h=l.filter((g=>g instanceof Vf)).length,m=l.filter((g=>g instanceof vc)).length;if(h>1||h>0&&m>0)throw new se(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)i=o._apply(i);return i}class vc extends uA{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new vc(e,t,s)}_apply(e){const t=this._parse(e);return Kv(e._query,t),new Po(e.firestore,e.converter,Ld(e._query,t))}_parse(e){const t=Pf(e.firestore);return(function(l,h,m,g,y,E,w){let S;if(y.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new se(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){Vy(w,E);const U=[];for(const $ of w)U.push(Dy(g,l,$));S={arrayValue:{values:U}}}else S=Dy(g,l,w)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||Vy(w,E),S=sA(m,h,w,E==="in"||E==="not-in");return pt.create(y,E,S)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function xy(i,e,t){const s=e,o=xf("where",i);return vc._create(o,s,t)}class Vf extends Df{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Vf(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Dn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const m=l.getFlattenedFilters();for(const g of m)Kv(h,g),h=Ld(h,g)})(e._query,t),new Po(e.firestore,e.converter,Ld(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Dy(i,e,t){if(typeof(t=Nt(t))=="string"){if(t==="")throw new se(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Q_(e)&&t.indexOf("/")!==-1)throw new se(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Ke.fromString(t));if(!de.isDocumentKey(s))throw new se(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Hg(i,new de(s))}if(t instanceof gt)return Hg(i,t._key);throw new se(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ic(t)}.`)}function Vy(i,e){if(!Array.isArray(i)||i.length===0)throw new se(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Kv(i,e){const t=(function(o,l){for(const h of o)for(const m of h.getFlattenedFilters())if(l.indexOf(m.op)>=0)return m.op;return null})(i.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new se(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new se(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class cA{convertValue(e,t="none"){switch(Ii(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ut(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ti(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ge(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Ci(e,((o,l)=>{s[o]=this.convertValue(l,t)})),s}convertVectorValue(e){var s,o,l;const t=(l=(o=(s=e.fields)==null?void 0:s[Bu].arrayValue)==null?void 0:o.values)==null?void 0:l.map((h=>ut(h.doubleValue)));return new tr(t)}convertGeoPoint(e){return new er(ut(e.latitude),ut(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=ac(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(ba(e));default:return null}}convertTimestamp(e){const t=wi(e);return new Je(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ke.fromString(e);$e(yv(s),9688,{name:e});const o=new Fa(s.get(1),s.get(3)),l=new de(s.popFirst(5));return o.isEqual(t)||Rr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hA(i,e,t){let s;return s=i?i.toFirestore(e):e,s}class Pa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class os extends Gv{constructor(e,t,s,o,l,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Du(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(xf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new se(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=os._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}os._jsonSchemaVersion="firestore/documentSnapshot/1.0",os._jsonSchema={type:mt("string",os._jsonSchemaVersion),bundleSource:mt("string","DocumentSnapshot"),bundleName:mt("string"),bundle:mt("string")};class Du extends os{data(e={}){return super.data(e)}}class uo{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Pa(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Du(this._firestore,this._userDataWriter,s.key,s,new Pa(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new se(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const g=new Du(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Pa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>l||m.type!==3)).map((m=>{const g=new Du(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Pa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return m.type!==0&&(y=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),E=h.indexOf(m.doc.key)),{type:dA(m.type),doc:g,oldIndex:y,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new se(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=uo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ef.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function dA(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ge(61501,{type:i})}}uo._jsonSchemaVersion="firestore/querySnapshot/1.0",uo._jsonSchema={type:mt("string",uo._jsonSchemaVersion),bundleSource:mt("string","QuerySnapshot"),bundleName:mt("string"),bundle:mt("string")};class Qv extends cA{constructor(e){super(),this.firestore=e}convertBytes(e){return new _n(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,t)}}function Oy(i,e,t,...s){i=yi(i,gt);const o=yi(i.firestore,wo),l=Pf(o);let h;return h=typeof(e=Nt(e))=="string"||e instanceof yc?iA(l,"updateDoc",i._key,e,t,s):rA(l,"updateDoc",i._key,e),Of(o,[h.toMutation(i._key,xn.exists(!0))])}function fA(i){return Of(yi(i.firestore,wo),[new uf(i._key,xn.none())])}function Ly(i,e){const t=yi(i.firestore,wo),s=xu(i),o=hA(i.converter,e);return Of(t,[nA(Pf(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,xn.exists(!1))]).then((()=>s))}function My(i,...e){var g,y,E;i=Nt(i);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||ky(e[s])||(t=e[s++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(ky(e[s])){const w=e[s];e[s]=(g=w.next)==null?void 0:g.bind(w),e[s+1]=(y=w.error)==null?void 0:y.bind(w),e[s+2]=(E=w.complete)==null?void 0:E.bind(w)}let l,h,m;if(i instanceof gt)h=yi(i.firestore,wo),m=af(i._key.path),l={next:w=>{e[s]&&e[s](pA(h,i,w))},error:e[s+1],complete:e[s+2]};else{const w=yi(i,Po);h=yi(w.firestore,wo),m=w._query;const S=new Qv(h);l={next:L=>{e[s]&&e[s](new uo(h,S,w,L))},error:e[s+1],complete:e[s+2]},lA(i._query)}return(function(S,L,U,$){const q=new WS($),J=new CS(L,q,U);return S.asyncQueue.enqueueAndForget((async()=>IS(await Ty(S),J))),()=>{q.Nu(),S.asyncQueue.enqueueAndForget((async()=>SS(await Ty(S),J)))}})(Bv(h),m,o,l)}function Of(i,e){return(function(s,o){const l=new ss;return s.asyncQueue.enqueueAndForget((async()=>bS(await QS(s),o,l))),l.promise})(Bv(i),e)}function pA(i,e,t){const s=t.docs.get(e._key),o=new Qv(i);return new os(i,o,e._key,s,new Pa(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){So=o})(Io),po(new ls("firestore",((s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),m=new wo(new tT(s.getProvider("auth-internal")),new iT(h,s.getProvider("app-check-internal")),(function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new se(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fa(y.options.projectId,E)})(h,o),h);return l={useFetchStreams:t,...l},m._setSettings(l),m}),"PUBLIC").setMultipleInstances(!0)),mi(Dg,Vg,e),mi(Dg,Vg,"esm2020")})();function Xv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mA=Xv,Yv=new qa("auth","Firebase",Xv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu=new Xd("@firebase/auth");function gA(i,...e){Yu.logLevel<=ke.WARN&&Yu.warn(`Auth (${Io}): ${i}`,...e)}function Vu(i,...e){Yu.logLevel<=ke.ERROR&&Yu.error(`Auth (${Io}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(i,...e){throw Lf(i,...e)}function nr(i,...e){return Lf(i,...e)}function Jv(i,e,t){const s={...mA(),[e]:t};return new qa("auth","Firebase",s).create(e,{appName:i.name})}function vi(i){return Jv(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Lf(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return Yv.create(i,...e)}function _e(i,e,...t){if(!i)throw Lf(e,...t)}function Ir(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Vu(e),new Error(e)}function kr(i,e){i||Ir(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function yA(){return by()==="http:"||by()==="https:"}function by(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yA()||NE()||"connection"in navigator)?navigator.onLine:!0}function vA(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,t){this.shortDelay=e,this.longDelay=t,kr(t>e,"Short delay should be less than long delay!"),this.isMobile=CE()||xE()}get(){return _A()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(i,e){kr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],TA=new Za(3e4,6e4);function Ec(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function ko(i,e,t,s,o={}){return e0(i,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const m=Ha({key:i.config.apiKey,...h}).slice(1),g=await i._getAdditionalHeaders();g["Content-Type"]="application/json",i.languageCode&&(g["X-Firebase-Locale"]=i.languageCode);const y={method:e,headers:g,...l};return kE()||(y.referrerPolicy="no-referrer"),i.emulatorConfig&&To(i.emulatorConfig.host)&&(y.credentials="include"),Zv.fetch()(await n0(i,i.config.apiHost,t,m),y)})}async function e0(i,e,t){i._canInitEmulator=!1;const s={...EA,...e};try{const o=new IA(i),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Au(i,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const m=l.ok?h.errorMessage:h.error.message,[g,y]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Au(i,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Au(i,"email-already-in-use",h);if(g==="USER_DISABLED")throw Au(i,"user-disabled",h);const E=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Jv(i,E,y);Pr(i,E)}}catch(o){if(o instanceof Nr)throw o;Pr(i,"network-request-failed",{message:String(o)})}}async function t0(i,e,t,s,o={}){const l=await ko(i,e,t,s,o);return"mfaPendingCredential"in l&&Pr(i,"multi-factor-auth-required",{_serverResponse:l}),l}async function n0(i,e,t,s){const o=`${e}${t}?${s}`,l=i,h=l.config.emulator?Mf(i.config,o):`${i.config.apiScheme}://${o}`;return wA.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}class IA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(nr(this.auth,"network-request-failed")),TA.get())})}}function Au(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=nr(i,e,s);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SA(i,e){return ko(i,"POST","/v1/accounts:delete",e)}async function Ju(i,e){return ko(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AA(i,e=!1){const t=Nt(i),s=await t.getIdToken(e),o=bf(s);_e(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:Oa(Td(o.auth_time)),issuedAtTime:Oa(Td(o.iat)),expirationTime:Oa(Td(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Td(i){return Number(i)*1e3}function bf(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Vu("JWT malformed, contained fewer than 3 sections"),null;try{const o=h_(t);return o?JSON.parse(o):(Vu("Failed to decode base64 JWT payload"),null)}catch(o){return Vu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Fy(i){const e=bf(i);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function za(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Nr&&RA(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function RA({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oa(this.lastLoginAt),this.creationTime=Oa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zu(i){var w;const e=i.auth,t=await i.getIdToken(),s=await za(i,Ju(e,{idToken:t}));_e(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];i._notifyReloadListener(o);const l=(w=o.providerUserInfo)!=null&&w.length?r0(o.providerUserInfo):[],h=kA(i.providerData,l),m=i.isAnonymous,g=!(i.email&&o.passwordHash)&&!(h!=null&&h.length),y=m?g:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Kd(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(i,E)}async function PA(i){const e=Nt(i);await Zu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kA(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function r0(i){return i.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NA(i,e){const t=await e0(i,{},async()=>{const s=Ha({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=i.config,h=await n0(i,o,"/v1/token",`key=${l}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return i.emulatorConfig&&To(i.emulatorConfig.host)&&(g.credentials="include"),Zv.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function xA(i,e){return ko(i,"POST","/v2/accounts:revokeToken",Ec(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=Fy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await NA(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new co;return s&&(_e(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(_e(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(_e(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new co,this.toJSON())}_performRefresh(){return Ir("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(i,e){_e(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Nn{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new CA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Kd(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await za(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return AA(this,e)}reload(){return PA(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Nn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Zu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kn(this.auth.app))return Promise.reject(vi(this.auth));const e=await this.getIdToken();return await za(this,SA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,l=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,g=t._redirectEventId??void 0,y=t.createdAt??void 0,E=t.lastLoginAt??void 0,{uid:w,emailVerified:S,isAnonymous:L,providerData:U,stsTokenManager:$}=t;_e(w&&$,e,"internal-error");const q=co.fromJSON(this.name,$);_e(typeof w=="string",e,"internal-error"),ai(s,e.name),ai(o,e.name),_e(typeof S=="boolean",e,"internal-error"),_e(typeof L=="boolean",e,"internal-error"),ai(l,e.name),ai(h,e.name),ai(m,e.name),ai(g,e.name),ai(y,e.name),ai(E,e.name);const J=new Nn({uid:w,auth:e,email:o,emailVerified:S,displayName:s,isAnonymous:L,photoURL:h,phoneNumber:l,tenantId:m,stsTokenManager:q,createdAt:y,lastLoginAt:E});return U&&Array.isArray(U)&&(J.providerData=U.map(te=>({...te}))),g&&(J._redirectEventId=g),J}static async _fromIdTokenResponse(e,t,s=!1){const o=new co;o.updateFromServerResponse(t);const l=new Nn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Zu(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];_e(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?r0(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),m=new co;m.updateFromIdToken(s);const g=new Nn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Kd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,y),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy=new Map;function Sr(i){kr(i instanceof Function,"Expected a class definition");let e=Uy.get(i);return e?(kr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Uy.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}i0.type="NONE";const jy=i0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(i,e,t){return`firebase:${i}:${e}:${t}`}class ho{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=Ou(this.userKey,o.apiKey,l),this.fullPersistenceKey=Ou("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ju(this.auth,{idToken:e}).catch(()=>{});return t?Nn._fromGetAccountInfoResponse(this.auth,t,e):null}return Nn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new ho(Sr(jy),e,s);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Sr(jy);const h=Ou(s,e.config.apiKey,e.name);let m=null;for(const y of t)try{const E=await y._get(h);if(E){let w;if(typeof E=="string"){const S=await Ju(e,{idToken:E}).catch(()=>{});if(!S)break;w=await Nn._fromGetAccountInfoResponse(e,S,E)}else w=Nn._fromJSON(e,E);y!==l&&(m=w),l=y;break}}catch{}const g=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new ho(l,e,s):(l=g[0],m&&await l._set(h,m.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(h)}catch{}})),new ho(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(l0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(s0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(c0(e))return"Blackberry";if(h0(e))return"Webos";if(o0(e))return"Safari";if((e.includes("chrome/")||a0(e))&&!e.includes("edge/"))return"Chrome";if(u0(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function s0(i=jt()){return/firefox\//i.test(i)}function o0(i=jt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function a0(i=jt()){return/crios\//i.test(i)}function l0(i=jt()){return/iemobile/i.test(i)}function u0(i=jt()){return/android/i.test(i)}function c0(i=jt()){return/blackberry/i.test(i)}function h0(i=jt()){return/webos/i.test(i)}function Ff(i=jt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function DA(i=jt()){var e;return Ff(i)&&!!((e=window.navigator)!=null&&e.standalone)}function VA(){return DE()&&document.documentMode===10}function d0(i=jt()){return Ff(i)||u0(i)||h0(i)||c0(i)||/windows phone/i.test(i)||l0(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(i,e=[]){let t;switch(i){case"Browser":t=By(jt());break;case"Worker":t=`${By(jt())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Io}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,m)=>{try{const g=e(l);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LA(i,e={}){return ko(i,"GET","/v2/passwordPolicy",Ec(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA=6;class bA{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??MA,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zy(this),this.idTokenSubscription=new zy(this),this.beforeStateQueue=new OA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Sr(t)),this._initializationPromise=this.queue(async()=>{var s,o,l;if(!this._deleted&&(this.persistenceManager=await ho.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ju(this,{idToken:e}),s=await Nn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(kn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(l=this.redirectUser)==null?void 0:l._redirectEventId,m=s==null?void 0:s._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(s=g.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Zu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(kn(this.app))return Promise.reject(vi(this));const t=e?Nt(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return kn(this.app)?Promise.reject(vi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return kn(this.app)?Promise.reject(vi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await LA(this),t=new bA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new qa("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await xA(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Sr(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await ho.create(this,[Sr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(m,this,"internal-error"),m.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=f0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(kn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&gA(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function wc(i){return Nt(i)}class zy{constructor(e){this.auth=e,this.observer=null,this.addObserver=jE(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function UA(i){Uf=i}function jA(i){return Uf.loadJS(i)}function BA(){return Uf.gapiScript}function zA(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(i,e){const t=Jd(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(as(l,e??{}))return o;Pr(o,"already-initialized")}return t.initialize({options:e})}function qA(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Sr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function HA(i,e,t){const s=wc(i);_e(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=p0(e),{host:h,port:m}=WA(e),g=m===null?"":`:${m}`,y={url:`${l}//${h}${g}/`},E=Object.freeze({host:h,port:m,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){_e(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),_e(as(y,s.config.emulator)&&as(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,To(h)?(m_(`${l}//${h}${g}`),g_("Auth",!0)):GA()}function p0(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function WA(i){const e=p0(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:$y(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:$y(h)}}}function $y(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function GA(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ir("not implemented")}_getIdTokenResponse(e){return Ir("not implemented")}_linkToIdToken(e,t){return Ir("not implemented")}_getReauthenticationResolver(e){return Ir("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fo(i,e){return t0(i,"POST","/v1/accounts:signInWithIdp",Ec(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA="http://localhost";class hs extends m0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new hs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Pr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...l}=t;if(!s||!o)return null;const h=new hs(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return fo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,fo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,fo(e,t)}buildRequest(){const e={requestUri:KA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ha(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el extends g0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends el{constructor(){super("facebook.com")}static credential(e){return hs._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return li.credential(e.oauthAccessToken)}catch{return null}}}li.FACEBOOK_SIGN_IN_METHOD="facebook.com";li.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends el{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return hs._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ui.credential(t,s)}catch{return null}}}ui.GOOGLE_SIGN_IN_METHOD="google.com";ui.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends el{constructor(){super("github.com")}static credential(e){return hs._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ci.credential(e.oauthAccessToken)}catch{return null}}}ci.GITHUB_SIGN_IN_METHOD="github.com";ci.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends el{constructor(){super("twitter.com")}static credential(e,t){return hs._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return hi.credential(t,s)}catch{return null}}}hi.TWITTER_SIGN_IN_METHOD="twitter.com";hi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QA(i,e){return t0(i,"POST","/v1/accounts:signUp",Ec(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await Nn._fromIdTokenResponse(e,s,o),h=qy(s);return new Ri({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=qy(s);return new Ri({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function qy(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XA(i){var o;if(kn(i.app))return Promise.reject(vi(i));const e=wc(i);if(await e._initializationPromise,(o=e.currentUser)!=null&&o.isAnonymous)return new Ri({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await QA(e,{returnSecureToken:!0}),s=await Ri._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec extends Nr{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,ec.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new ec(e,t,s,o)}}function y0(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?ec._fromErrorAndOperation(i,l,e,s):l})}async function YA(i,e,t=!1){const s=await za(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Ri._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JA(i,e,t=!1){const{auth:s}=i;if(kn(s.app))return Promise.reject(vi(s));const o="reauthenticate";try{const l=await za(i,y0(s,o,e,i),t);_e(l.idToken,s,"internal-error");const h=bf(l.idToken);_e(h,s,"internal-error");const{sub:m}=h;return _e(i.uid===m,s,"user-mismatch"),Ri._forOperation(i,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Pr(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZA(i,e,t=!1){if(kn(i.app))return Promise.reject(vi(i));const s="signIn",o=await y0(i,s,e),l=await Ri._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(l.user),l}function e2(i,e,t,s){return Nt(i).onIdTokenChanged(e,t,s)}function t2(i,e,t){return Nt(i).beforeAuthStateChanged(e,t)}function n2(i,e,t,s){return Nt(i).onAuthStateChanged(e,t,s)}const tc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(tc,"1"),this.storage.removeItem(tc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r2=1e3,i2=10;class v0 extends _0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=d0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);VA()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,i2):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},r2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}v0.type="LOCAL";const s2=v0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0 extends _0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}E0.type="SESSION";const w0=E0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o2(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Tc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async y=>y(t.origin,l)),g=await o2(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Tc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((m,g)=>{const y=jf("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(w){const S=w;if(S.data.eventId===y)switch(S.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),m(S.data.response);break;default:clearTimeout(E),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(){return window}function l2(i){rr().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(){return typeof rr().WorkerGlobalScope<"u"&&typeof rr().importScripts=="function"}async function u2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function c2(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function h2(){return T0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0="firebaseLocalStorageDb",d2=1,nc="firebaseLocalStorage",S0="fbase_key";class tl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ic(i,e){return i.transaction([nc],e?"readwrite":"readonly").objectStore(nc)}function f2(){const i=indexedDB.deleteDatabase(I0);return new tl(i).toPromise()}function Qd(){const i=indexedDB.open(I0,d2);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(nc,{keyPath:S0})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(nc)?e(s):(s.close(),await f2(),e(await Qd()))})})}async function Hy(i,e,t){const s=Ic(i,!0).put({[S0]:e,value:t});return new tl(s).toPromise()}async function p2(i,e){const t=Ic(i,!1).get(e),s=await new tl(t).toPromise();return s===void 0?null:s.value}function Wy(i,e){const t=Ic(i,!0).delete(e);return new tl(t).toPromise()}const m2=800,g2=3;class A0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>g2)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return T0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tc._getInstance(h2()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await u2(),!this.activeServiceWorker)return;this.sender=new a2(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||c2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qd();return await Hy(e,tc,"1"),await Wy(e,tc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Hy(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>p2(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Wy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Ic(o,!1).getAll();return new tl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),m2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}A0.type="LOCAL";const y2=A0;new Za(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _2(i,e){return e?Sr(e):(_e(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf extends m0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return fo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return fo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function v2(i){return ZA(i.auth,new Bf(i),i.bypassAuthState)}function E2(i){const{auth:e,user:t}=i;return _e(t,e,"internal-error"),JA(t,new Bf(i),i.bypassAuthState)}async function w2(i){const{auth:e,user:t}=i;return _e(t,e,"internal-error"),YA(t,new Bf(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return v2;case"linkViaPopup":case"linkViaRedirect":return w2;case"reauthViaPopup":case"reauthViaRedirect":return E2;default:Pr(this.auth,"internal-error")}}resolve(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2=new Za(2e3,1e4);class ao extends R0{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,ao.currentPopupAction&&ao.currentPopupAction.cancel(),ao.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){kr(this.filter.length===1,"Popup operations only handle one event");const e=jf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(nr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(nr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ao.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,T2.get())};e()}}ao.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I2="pendingRedirect",Lu=new Map;class S2 extends R0{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Lu.get(this.auth._key());if(!e){try{const s=await A2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Lu.set(this.auth._key(),e)}return this.bypassAuthState||Lu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function A2(i,e){const t=P2(e),s=C2(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function R2(i,e){Lu.set(i._key(),e)}function C2(i){return Sr(i._redirectPersistence)}function P2(i){return Ou(I2,i.config.apiKey,i.name)}async function k2(i,e,t=!1){if(kn(i.app))return Promise.reject(vi(i));const s=wc(i),o=_2(s,e),h=await new S2(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N2=600*1e3;class x2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!D2(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!C0(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(nr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=N2&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gy(e))}saveEventToCache(e){this.cachedEventUids.add(Gy(e)),this.lastProcessedEventTime=Date.now()}}function Gy(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function C0({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function D2(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return C0(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V2(i,e={}){return ko(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,L2=/^https?/;async function M2(i){if(i.config.emulator)return;const{authorizedDomains:e}=await V2(i);for(const t of e)try{if(b2(t))return}catch{}Pr(i,"unauthorized-domain")}function b2(i){const e=Gd(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!L2.test(t))return!1;if(O2.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F2=new Za(3e4,6e4);function Ky(){const i=rr().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function U2(i){return new Promise((e,t)=>{var o,l,h;function s(){Ky(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ky(),t(nr(i,"network-request-failed"))},timeout:F2.get()})}if((l=(o=rr().gapi)==null?void 0:o.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((h=rr().gapi)!=null&&h.load)s();else{const m=zA("iframefcb");return rr()[m]=()=>{gapi.load?s():t(nr(i,"network-request-failed"))},jA(`${BA()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw Mu=null,e})}let Mu=null;function j2(i){return Mu=Mu||U2(i),Mu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B2=new Za(5e3,15e3),z2="__/auth/iframe",$2="emulator/auth/iframe",q2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},H2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function W2(i){const e=i.config;_e(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Mf(e,$2):`https://${i.config.authDomain}/${z2}`,s={apiKey:e.apiKey,appName:i.name,v:Io},o=H2.get(i.config.apiHost);o&&(s.eid=o);const l=i._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${Ha(s).slice(1)}`}async function G2(i){const e=await j2(i),t=rr().gapi;return _e(t,i,"internal-error"),e.open({where:document.body,url:W2(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:q2,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=nr(i,"network-request-failed"),m=rr().setTimeout(()=>{l(h)},B2.get());function g(){rr().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Q2=500,X2=600,Y2="_blank",J2="http://localhost";class Qy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Z2(i,e,t,s=Q2,o=X2){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g={...K2,width:s.toString(),height:o.toString(),top:l,left:h},y=jt().toLowerCase();t&&(m=a0(y)?Y2:t),s0(y)&&(e=e||J2,g.scrollbars="yes");const E=Object.entries(g).reduce((S,[L,U])=>`${S}${L}=${U},`,"");if(DA(y)&&m!=="_self")return eR(e||"",m),new Qy(null);const w=window.open(e||"",m,E);_e(w,i,"popup-blocked");try{w.focus()}catch{}return new Qy(w)}function eR(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR="__/auth/handler",nR="emulator/auth/handler",rR=encodeURIComponent("fac");async function Xy(i,e,t,s,o,l){_e(i.config.authDomain,i,"auth-domain-config-required"),_e(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:Io,eventId:o};if(e instanceof g0){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",UE(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,w]of Object.entries({}))h[E]=w}if(e instanceof el){const E=e.getScopes().filter(w=>w!=="");E.length>0&&(h.scopes=E.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const g=await i._getAppCheckToken(),y=g?`#${rR}=${encodeURIComponent(g)}`:"";return`${iR(i)}?${Ha(m).slice(1)}${y}`}function iR({config:i}){return i.emulator?Mf(i,nR):`https://${i.authDomain}/${tR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="webStorageSupport";class sR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=w0,this._completeRedirectFn=k2,this._overrideRedirectResult=R2}async _openPopup(e,t,s,o){var h;kr((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const l=await Xy(e,t,s,Gd(),o);return Z2(e,l,jf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await Xy(e,t,s,Gd(),o);return l2(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(kr(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await G2(e),s=new x2(e);return t.register("authEvent",o=>(_e(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Id,{type:Id},o=>{var h;const l=(h=o==null?void 0:o[0])==null?void 0:h[Id];l!==void 0&&t(!!l),Pr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=M2(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return d0()||o0()||Ff()}}const oR=sR;var Yy="@firebase/auth",Jy="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lR(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function uR(i){po(new ls("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;_e(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:f0(i)},y=new FA(s,o,l,g);return qA(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),po(new ls("auth-internal",e=>{const t=wc(e.getProvider("auth").getImmediate());return(s=>new aR(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),mi(Yy,Jy,lR(i)),mi(Yy,Jy,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=300,hR=p_("authIdTokenMaxAge")||cR;let Zy=null;const dR=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>hR)return;const o=t==null?void 0:t.token;Zy!==o&&(Zy=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function fR(i=E_()){const e=Jd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=$A(i,{popupRedirectResolver:oR,persistence:[y2,s2,w0]}),s=p_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=dR(l.toString());t2(t,h,()=>h(t.currentUser)),e2(t,m=>h(m))}}const o=d_("auth");return o&&HA(t,`http://${o}`),t}function pR(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}UA({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const l=nr("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",pR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});uR("Browser");const mR={apiKey:"AIzaSyCB1Gth4lKqcJ3-c3o_dE9JdJ3d5HholxE",authDomain:"my-contact-app-a475b.firebaseapp.com",projectId:"my-contact-app-a475b",storageBucket:"my-contact-app-a475b.firebasestorage.app",messagingSenderId:"526245275416",appId:"1:526245275416:web:b32e5e7791acae5aa8a06d",measurementId:"G-S8GDY4XJ6T"},P0=v_(mR),ns=YS(P0),e_=fR(P0);function gR(){const i=new URLSearchParams(window.location.search),e=i.get("mode"),t=i.get("room")||"共通ロビー",s=i.get("limit");if(e==="admin")return z.jsx(yR,{});const[o,l]=lt.useState(null),[h,m]=lt.useState(null),[g,y]=lt.useState([]),[E,w]=lt.useState([]),[S,L]=lt.useState([]),[U,$]=lt.useState("register"),[q,J]=lt.useState(!1),[te,fe]=lt.useState({name:"",contactType:"email",contactValue:""});if(lt.useEffect(()=>{if(s){const he=new Date(s);if(!isNaN(he.getTime())&&new Date>he){J(!0);return}}const I=n2(e_,he=>{he?m(he.uid):XA(e_).catch(je=>console.error("Login failed:",je))});return()=>I()},[s]),lt.useEffect(()=>{const I=Ny(Su(ns,"users"),xy("room","==",t)),he=My(I,Fe=>{const Z=Fe.docs.map(ne=>({id:ne.id,...ne.data()}));y(Z);const ce=Z.find(ne=>ne.uid===h);ce&&(l(ce),U==="register"&&!te.name&&$("participants"))}),je=Ny(Su(ns,"requests"),xy("room","==",t)),Be=My(je,Fe=>{const Z=Fe.docs.map(ne=>({id:ne.id,...ne.data()}));w(Z);const ce=Z.filter(ne=>ne.status==="matched"&&(ne.fromUid===h||ne.toUid===h));L(ce)});return()=>{he(),Be()}},[t,h]),q)return z.jsx("div",{className:"min-h-screen bg-gray-100 flex items-center justify-center p-4",children:z.jsxs("div",{className:"bg-white max-w-md w-full p-8 rounded-2xl shadow-xl text-center",children:[z.jsx("div",{className:"inline-block p-4 bg-gray-200 rounded-full mb-6",children:z.jsx(Q1,{className:"w-12 h-12 text-gray-500"})}),z.jsx("h1",{className:"text-2xl font-bold text-gray-800 mb-4",children:"受付期間が終了しました"}),z.jsxs("p",{className:"text-gray-600 mb-6",children:["イベント「",t,"」は終了しました。"]})]})});const Ee=async()=>{if(!(!te.name||!te.contactValue||!h))try{const I=g.find(he=>he.uid===h);if(I){const he=xu(ns,"users",I.id);await Oy(he,{name:te.name,contactType:te.contactType,contactValue:te.contactValue})}else await Ly(Su(ns,"users"),{uid:h,name:te.name,contactType:te.contactType,contactValue:te.contactValue,room:t,createdAt:new Date});fe({name:"",contactType:"email",contactValue:""}),$("participants")}catch(I){alert("処理に失敗しました。再読み込みしてください。"),console.error(I)}},Oe=()=>{o&&(fe({name:o.name,contactType:o.contactType,contactValue:o.contactValue}),$("register"))},Ie=async I=>{if(o)try{await Ly(Su(ns,"requests"),{room:t,fromUid:o.uid,fromName:o.name,fromContactType:o.contactType,fromContactValue:o.contactValue,toUid:I.uid,toName:I.name,toContactType:I.contactType,toContactValue:I.contactValue,status:"pending",createdAt:new Date})}catch(he){console.error(he)}},k=async I=>{try{const he=xu(ns,"requests",I.id);await Oy(he,{status:"matched"})}catch(he){console.error(he)}},R=async I=>{try{await fA(xu(ns,"requests",I.id))}catch(he){console.error(he)}},C=E.filter(I=>I.toUid===h&&I.status==="pending"),x=E.filter(I=>I.fromUid===h&&I.status==="pending"),N=I=>{switch(I){case"email":return z.jsx(sg,{className:"w-4 h-4"});case"line":return z.jsx(r_,{className:"w-4 h-4"});case"phone":return z.jsx(J1,{className:"w-4 h-4"});case"url":return z.jsx(Y1,{className:"w-4 h-4"});default:return z.jsx(sg,{className:"w-4 h-4"})}},V=I=>{switch(I){case"email":return"メール";case"line":return"LINE ID";case"phone":return"電話番号";case"url":return"URL";default:return"連絡先"}};return U==="register"?z.jsx("div",{className:"min-h-screen bg-gradient-to-br from-pink-50 to-red-50 p-4",children:z.jsx("div",{className:"max-w-md mx-auto pt-12",children:z.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8",children:[z.jsxs("div",{className:"text-center mb-8",children:[z.jsx("div",{className:"inline-block p-3 bg-pink-100 rounded-full mb-4",children:z.jsx(Jh,{className:"w-12 h-12 text-pink-500"})}),z.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2",children:"連絡先交換アプリ"}),z.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-1 bg-pink-50 text-pink-600 rounded-full text-sm font-bold mb-2",children:["会場: ",t]}),z.jsx("p",{className:"text-gray-600",children:o?"登録内容の修正":"婚活パーティー専用"})]}),z.jsxs("div",{className:"space-y-6",children:[z.jsxs("div",{children:[z.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"お名前"}),z.jsx("input",{type:"text",value:te.name,onChange:I=>fe({...te,name:I.target.value}),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500",placeholder:"山田太郎"})]}),z.jsxs("div",{children:[z.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"連絡先の種類"}),z.jsx("div",{className:"grid grid-cols-2 gap-3",children:["email","line","phone","url"].map(I=>z.jsxs("button",{type:"button",onClick:()=>fe({...te,contactType:I}),className:`flex items-center justify-center gap-2 p-3 border-2 rounded-lg transition ${te.contactType===I?"border-pink-500 bg-pink-50":"border-gray-300"}`,children:[N(I),z.jsx("span",{children:V(I)})]},I))})]}),z.jsxs("div",{children:[z.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:V(te.contactType)}),z.jsx("input",{type:te.contactType==="phone"?"tel":"text",value:te.contactValue,onChange:I=>fe({...te,contactValue:I.target.value}),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500",placeholder:"連絡先を入力"})]}),z.jsxs("div",{className:"flex gap-3",children:[o&&z.jsx("button",{type:"button",onClick:()=>$("participants"),className:"flex-1 bg-gray-200 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-300 transition",children:"キャンセル"}),z.jsx("button",{type:"button",onClick:Ee,disabled:!h,className:"flex-1 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-3 rounded-lg hover:from-pink-600 shadow-lg disabled:opacity-50",children:o?"更新する":"登録して参加する"})]})]})]})})}):z.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-pink-50 to-red-50",children:[z.jsx("div",{className:"bg-white shadow-sm border-b",children:z.jsx("div",{className:"max-w-6xl mx-auto px-4 py-4",children:z.jsx("div",{className:"flex items-center justify-between",children:z.jsxs("div",{className:"flex items-center gap-3",children:[z.jsx("div",{className:"p-2 bg-pink-100 rounded-full",children:z.jsx(Jh,{className:"w-6 h-6 text-pink-500"})}),z.jsxs("div",{children:[z.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"連絡先交換アプリ"}),z.jsxs("div",{className:"flex items-center gap-2",children:[z.jsxs("p",{className:"text-sm text-gray-600",children:[o==null?void 0:o.name,"さん"]}),z.jsxs("button",{onClick:Oe,className:"flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded hover:bg-gray-200 transition",children:[z.jsx(tE,{className:"w-3 h-3"}),"編集"]}),z.jsx("span",{className:"text-xs bg-pink-50 text-pink-600 px-2 py-1 rounded font-bold",children:t})]})]})]})})})}),z.jsx("div",{className:"bg-white border-b",children:z.jsx("div",{className:"max-w-6xl mx-auto px-4",children:z.jsxs("div",{className:"flex gap-8",children:[z.jsx("button",{onClick:()=>$("participants"),className:`py-4 px-2 font-medium border-b-2 ${U==="participants"?"border-pink-500 text-pink-600":"text-gray-500"}`,children:"参加者一覧"}),z.jsxs("button",{onClick:()=>$("requests"),className:`py-4 px-2 font-medium border-b-2 relative ${U==="requests"?"border-pink-500 text-pink-600":"text-gray-500"}`,children:["リクエスト",C.length>0&&z.jsx("span",{className:"absolute -top-1 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center",children:C.length})]}),z.jsxs("button",{onClick:()=>$("matches"),className:`py-4 px-2 font-medium border-b-2 ${U==="matches"?"border-pink-500 text-pink-600":"text-gray-500"}`,children:["マッチ (",S.length,")"]})]})})}),z.jsxs("div",{className:"max-w-6xl mx-auto p-4",children:[U==="participants"&&z.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-4",children:[g.filter(I=>I.uid!==h).map(I=>{const he=x.some(Be=>Be.toUid===I.uid),je=S.some(Be=>Be.fromUid===I.uid||Be.toUid===I.uid);return z.jsxs("div",{className:"bg-white rounded-xl shadow-md p-6",children:[z.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[z.jsx("div",{className:"p-3 bg-gray-100 rounded-full",children:z.jsx(Zh,{className:"w-6 h-6 text-gray-600"})}),z.jsxs("div",{children:[z.jsx("h3",{className:"font-bold text-lg text-gray-800",children:I.name}),z.jsxs("p",{className:"text-sm text-gray-500 flex items-center gap-1",children:[N(I.contactType),V(I.contactType)]})]})]}),je?z.jsx("div",{className:"bg-green-50 text-green-700 py-2 px-4 rounded-lg text-center font-medium",children:"マッチ済み"}):he?z.jsx("div",{className:"bg-gray-100 text-gray-600 py-2 px-4 rounded-lg text-center",children:"リクエスト送信済み"}):z.jsx("button",{onClick:()=>Ie(I),className:"w-full bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 font-medium",children:"交換リクエストを送る"})]},I.uid)}),g.length<=1&&z.jsx("div",{className:"col-span-full text-center py-12 text-gray-500",children:"他の参加者がまだいません"})]}),U==="requests"&&z.jsxs("div",{className:"space-y-6",children:[z.jsxs("div",{children:[z.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-4",children:"受信リクエスト"}),z.jsxs("div",{className:"space-y-3",children:[C.map(I=>z.jsxs("div",{className:"bg-white rounded-xl shadow-md p-6 flex justify-between items-center",children:[z.jsxs("div",{className:"flex items-center gap-3",children:[z.jsx("div",{className:"p-3 bg-pink-100 rounded-full",children:z.jsx(Zh,{className:"w-6 h-6 text-pink-600"})}),z.jsxs("div",{children:[z.jsxs("h3",{className:"font-bold text-gray-800",children:[I.fromName,"さん"]}),z.jsx("p",{className:"text-sm text-gray-600",children:"リクエストが届いています"})]})]}),z.jsxs("div",{className:"flex gap-2",children:[z.jsx("button",{onClick:()=>k(I),className:"p-2 bg-green-500 text-white rounded-lg hover:bg-green-600",children:z.jsx(n_,{className:"w-5 h-5"})}),z.jsx("button",{onClick:()=>R(I),className:"p-2 bg-red-500 text-white rounded-lg hover:bg-red-600",children:z.jsx(nE,{className:"w-5 h-5"})})]})]},I.id)),C.length===0&&z.jsx("div",{className:"text-center py-12 text-gray-500",children:"受信リクエストはありません"})]})]}),z.jsxs("div",{children:[z.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-4",children:"送信済みリクエスト"}),z.jsxs("div",{className:"space-y-3",children:[x.map(I=>z.jsxs("div",{className:"bg-white rounded-xl shadow-md p-6 flex justify-between items-center",children:[z.jsxs("div",{className:"flex items-center gap-3",children:[z.jsx("div",{className:"p-3 bg-gray-100 rounded-full",children:z.jsx(Zh,{className:"w-6 h-6 text-gray-600"})}),z.jsxs("div",{children:[z.jsxs("h3",{className:"font-bold text-gray-800",children:[I.toName,"さん"]}),z.jsx("p",{className:"text-sm text-gray-600",children:"承認待ちです"})]})]}),z.jsx("div",{className:"text-sm text-gray-500",children:"送信済み"})]},I.id)),x.length===0&&z.jsx("div",{className:"text-center py-12 text-gray-500",children:"送信済みリクエストはありません"})]})]})]}),U==="matches"&&z.jsxs("div",{className:"space-y-4",children:[S.map(I=>{const he=I.fromUid===h,je=he?I.toName:I.fromName,Be=he?I.toContactType:I.fromContactType,Fe=he?I.toContactValue:I.fromContactValue;return z.jsx("div",{className:"bg-white rounded-xl shadow-md p-6 flex items-start justify-between",children:z.jsxs("div",{className:"flex items-center gap-4",children:[z.jsx("div",{className:"p-3 bg-pink-100 rounded-full",children:z.jsx(Jh,{className:"w-8 h-8 text-pink-500"})}),z.jsxs("div",{children:[z.jsxs("h3",{className:"font-bold text-xl text-gray-800 mb-2",children:[je,"さん"]}),z.jsxs("div",{className:"flex items-center gap-2 text-gray-700",children:[N(Be),Be==="url"?z.jsx("a",{href:Fe,target:"_blank",rel:"noopener noreferrer",className:"font-medium text-blue-600 hover:underline",children:"リンクを開く"}):z.jsx("span",{className:"font-medium",children:Fe})]})]})]})},I.id)}),S.length===0&&z.jsx("div",{className:"text-center py-12 text-gray-500",children:"まだマッチがありません"})]})]})]})}function yR(){const[i,e]=lt.useState(""),[t,s]=lt.useState(""),[o,l]=lt.useState(""),[h,m]=lt.useState(!1);lt.useEffect(()=>{let E=window.location.origin+window.location.pathname;const w=[];i&&w.push(`room=${encodeURIComponent(i)}`),t&&w.push(`limit=${t}`),w.length>0&&(E+="?"+w.join("&")),l(E),m(!1)},[i,t]);const g=()=>{navigator.clipboard.writeText(o),m(!0),setTimeout(()=>m(!1),2e3)};return z.jsx("div",{className:"min-h-screen bg-gray-50 p-6",children:z.jsxs("div",{className:"max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8",children:[z.jsxs("div",{className:"flex items-center gap-3 mb-8 pb-4 border-b",children:[z.jsx("div",{className:"p-3 bg-gray-900 rounded-lg",children:z.jsx(eE,{className:"w-6 h-6 text-white"})}),z.jsxs("div",{children:[z.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"管理者コンソール"}),z.jsx("p",{className:"text-gray-500",children:"イベント用リンク生成ツール"})]})]}),z.jsxs("div",{className:"space-y-8",children:[z.jsxs("div",{children:[z.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2",children:[z.jsx(r_,{className:"w-4 h-4"}),"合言葉（会場名・店舗名）"]}),z.jsx("input",{type:"text",value:i,onChange:y=>e(y.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg",placeholder:"例：銀座店、12月24日の会"})]}),z.jsxs("div",{children:[z.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2",children:[z.jsx(K1,{className:"w-4 h-4"}),"有効期限（任意）"]}),z.jsx("input",{type:"date",value:t,onChange:y=>s(y.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg"})]}),z.jsxs("div",{className:"bg-gray-100 p-6 rounded-xl",children:[z.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2",children:[z.jsx(Z1,{className:"w-4 h-4"}),"参加者に配布するURLとQRコード"]}),z.jsxs("div",{className:"flex gap-2 mb-6",children:[z.jsx("input",{readOnly:!0,type:"text",value:o,className:"flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-600 font-mono text-sm"}),z.jsxs("button",{onClick:g,className:`px-6 py-3 rounded-lg font-medium transition flex items-center gap-2 ${h?"bg-green-500 text-white":"bg-gray-900 text-white"}`,children:[h?z.jsx(n_,{className:"w-5 h-5"}):z.jsx(X1,{className:"w-5 h-5"}),h?"完了":"コピー"]})]}),z.jsx("div",{className:"bg-white p-6 rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center",children:z.jsx("div",{className:"p-4 bg-white rounded-lg shadow-sm border border-gray-100",children:z.jsx(fE,{value:o,size:160})})})]})]})]})})}q1.createRoot(document.getElementById("root")).render(z.jsx(lt.StrictMode,{children:z.jsx(gR,{})}));
