var mt=Object.defineProperty,_t=Object.defineProperties;var gt=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var yt=Object.prototype.hasOwnProperty,At=Object.prototype.propertyIsEnumerable;var X=(s,t,e)=>t in s?mt(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,C=(s,t)=>{for(var e in t||(t={}))yt.call(t,e)&&X(s,e,t[e]);if(Q)for(var e of Q(t))At.call(t,e)&&X(s,e,t[e]);return s},x=(s,t)=>_t(s,gt(t));const bt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=e(n);fetch(n.href,o)}};bt();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=window,J=T.ShadowRoot&&(T.ShadyCSS===void 0||T.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,F=Symbol(),Y=new WeakMap;class dt{constructor(t,e,i){if(this._$cssResult$=!0,i!==F)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(J&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Y.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Y.set(e,t))}return t}toString(){return this.cssText}}const Et=s=>new dt(typeof s=="string"?s:s+"",void 0,F),St=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,n,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+s[o+1],s[0]);return new dt(e,s,F)},wt=(s,t)=>{J?s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=T.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,s.appendChild(i)})},tt=J?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Et(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var B;const D=window,et=D.trustedTypes,Ct=et?et.emptyScript:"",it=D.reactiveElementPolyfillSupport,Z={toAttribute(s,t){switch(t){case Boolean:s=s?Ct:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},ut=(s,t)=>t!==s&&(t==t||s==s),j={attribute:!0,type:String,converter:Z,reflect:!1,hasChanged:ut};class y extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;(e=this.h)!==null&&e!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=j){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const o=this[t];this[e]=n,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||j}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(tt(n))}else t!==void 0&&e.push(tt(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return wt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=j){var n;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:Z).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,o=n._$Ev.get(t);if(o!==void 0&&this._$El!==o){const r=n.getPropertyOptions(o),c=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Z;this._$El=o,this[o]=c.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||ut)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,o)=>this[o]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var o;return(o=n.hostUpdate)===null||o===void 0?void 0:o.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}y.finalized=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},it==null||it({ReactiveElement:y}),((B=D.reactiveElementVersions)!==null&&B!==void 0?B:D.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var q;const I=window,b=I.trustedTypes,st=b?b.createPolicy("lit-html",{createHTML:s=>s}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,pt="?"+m,xt=`<${pt}>`,E=document,k=(s="")=>E.createComment(s),H=s=>s===null||typeof s!="object"&&typeof s!="function",vt=Array.isArray,Pt=s=>vt(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nt=/-->/g,ot=/>/g,_=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),rt=/'/g,lt=/"/g,$t=/^(?:script|style|textarea|title)$/i,Nt=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),v=Nt(1),S=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),at=new WeakMap,kt=(s,t,e)=>{var i,n;const o=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let r=o._$litPart$;if(r===void 0){const c=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:null;o._$litPart$=r=new R(t.insertBefore(k(),c),c,void 0,e!=null?e:{})}return r._$AI(s),r},A=E.createTreeWalker(E,129,null,!1),Ht=(s,t)=>{const e=s.length-1,i=[];let n,o=t===2?"<svg>":"",r=P;for(let l=0;l<e;l++){const a=s[l];let f,h,d=-1,p=0;for(;p<a.length&&(r.lastIndex=p,h=r.exec(a),h!==null);)p=r.lastIndex,r===P?h[1]==="!--"?r=nt:h[1]!==void 0?r=ot:h[2]!==void 0?($t.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=_):h[3]!==void 0&&(r=_):r===_?h[0]===">"?(r=n!=null?n:P,d=-1):h[1]===void 0?d=-2:(d=r.lastIndex-h[2].length,f=h[1],r=h[3]===void 0?_:h[3]==='"'?lt:rt):r===lt||r===rt?r=_:r===nt||r===ot?r=P:(r=_,n=void 0);const M=r===_&&s[l+1].startsWith("/>")?" ":"";o+=r===P?a+xt:d>=0?(i.push(f),a.slice(0,d)+"$lit$"+a.slice(d)+m+M):a+m+(d===-2?(i.push(void 0),l):M)}const c=o+(s[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[st!==void 0?st.createHTML(c):c,i]};class U{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,r=0;const c=t.length-1,l=this.parts,[a,f]=Ht(t,e);if(this.el=U.createElement(a,i),A.currentNode=this.el.content,e===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(n=A.nextNode())!==null&&l.length<c;){if(n.nodeType===1){if(n.hasAttributes()){const h=[];for(const d of n.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(m)){const p=f[r++];if(h.push(d),p!==void 0){const M=n.getAttribute(p.toLowerCase()+"$lit$").split(m),L=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:L[2],strings:M,ctor:L[1]==="."?Ot:L[1]==="?"?Mt:L[1]==="@"?Lt:z})}else l.push({type:6,index:o})}for(const d of h)n.removeAttribute(d)}if($t.test(n.tagName)){const h=n.textContent.split(m),d=h.length-1;if(d>0){n.textContent=b?b.emptyScript:"";for(let p=0;p<d;p++)n.append(h[p],k()),A.nextNode(),l.push({type:2,index:++o});n.append(h[d],k())}}}else if(n.nodeType===8)if(n.data===pt)l.push({type:2,index:o});else{let h=-1;for(;(h=n.data.indexOf(m,h+1))!==-1;)l.push({type:7,index:o}),h+=m.length-1}o++}}static createElement(t,e){const i=E.createElement("template");return i.innerHTML=t,i}}function w(s,t,e=s,i){var n,o,r,c;if(t===S)return t;let l=i!==void 0?(n=e._$Cl)===null||n===void 0?void 0:n[i]:e._$Cu;const a=H(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(s),l._$AT(s,e,i)),i!==void 0?((r=(c=e)._$Cl)!==null&&r!==void 0?r:c._$Cl=[])[i]=l:e._$Cu=l),l!==void 0&&(t=w(s,l._$AS(s,t.values),l,i)),t}class Ut{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:n}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:E).importNode(i,!0);A.currentNode=o;let r=A.nextNode(),c=0,l=0,a=n[0];for(;a!==void 0;){if(c===a.index){let f;a.type===2?f=new R(r,r.nextSibling,this,t):a.type===1?f=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(f=new Tt(r,this,t)),this.v.push(f),a=n[++l]}c!==(a==null?void 0:a.index)&&(r=A.nextNode(),c++)}return o}m(t){let e=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class R{constructor(t,e,i,n){var o;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$C_=(o=n==null?void 0:n.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$C_}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=w(this,t,e),H(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==S&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):Pt(t)?this.O(t):this.$(t)}S(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==u&&H(this._$AH)?this._$AA.nextSibling.data=t:this.k(E.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=U.createElement(n.h,this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.m(i);else{const r=new Ut(o,this),c=r.p(this.options);r.m(i),this.k(c),this._$AH=r}}_$AC(t){let e=at.get(t.strings);return e===void 0&&at.set(t.strings,e=new U(t)),e}O(t){vt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const o of t)n===e.length?e.push(i=new R(this.S(k()),this.S(k()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$C_=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class z{constructor(t,e,i,n,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const o=this.strings;let r=!1;if(o===void 0)t=w(this,t,e,0),r=!H(t)||t!==this._$AH&&t!==S,r&&(this._$AH=t);else{const c=t;let l,a;for(t=o[0],l=0;l<o.length-1;l++)a=w(this,c[i+l],e,l),a===S&&(a=this._$AH[l]),r||(r=!H(a)||a!==this._$AH[l]),a===u?t=u:t!==u&&(t+=(a!=null?a:"")+o[l+1]),this._$AH[l]=a}r&&!n&&this.P(t)}P(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Ot extends z{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===u?void 0:t}}const Rt=b?b.emptyScript:"";class Mt extends z{constructor(){super(...arguments),this.type=4}P(t){t&&t!==u?this.element.setAttribute(this.name,Rt):this.element.removeAttribute(this.name)}}class Lt extends z{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=w(this,t,e,0))!==null&&i!==void 0?i:u)===S)return;const n=this._$AH,o=t===u&&n!==u||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==u&&(n===u||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Tt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){w(this,t)}}const ht=I.litHtmlPolyfillSupport;ht==null||ht(U,R),((q=I.litHtmlVersions)!==null&&q!==void 0?q:I.litHtmlVersions=[]).push("2.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var V,W;class N extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=kt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return S}}N.finalized=!0,N._$litElement$=!0,(V=globalThis.litElementHydrateSupport)===null||V===void 0||V.call(globalThis,{LitElement:N});const ct=globalThis.litElementPolyfillSupport;ct==null||ct({LitElement:N});((W=globalThis.litElementVersions)!==null&&W!==void 0?W:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt=s=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(s,t):((e,i)=>{const{kind:n,elements:o}=i;return{kind:n,elements:o,finisher(r){customElements.define(e,r)}}})(s,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const It=(s,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?x(C({},t),{finisher(e){e.createProperty(t.key,s)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,s)}};function ft(s){return(t,e)=>e!==void 0?((i,n,o)=>{n.constructor.createProperty(o,i)})(s,t,e):It(s,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function zt(s){return ft(x(C({},s),{state:!0}))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var K;((K=window.HTMLSlotElement)===null||K===void 0?void 0:K.prototype.assignedElements)!=null;var Bt=Object.defineProperty,jt=Object.getOwnPropertyDescriptor,G=(s,t,e,i)=>{for(var n=i>1?void 0:i?jt(t,e):t,o=s.length-1,r;o>=0;o--)(r=s[o])&&(n=(i?r(t,e,n):r(n))||n);return i&&n&&Bt(t,e,n),n};const qt="adaptive-scaffold";let O=class extends N{constructor(){super(...arguments),this.breakpoint=0,this.tabs=!1}render(){return v` ${this.getStyles()} ${this.renderNavigation()}`}renderNavigation(){const s=this.getNavigation(),t=this.getNavItems();switch(s){case $.Tabs:return v`
          <main class="column">
            ${this.getAppBar()}
            <nav class="tabs">
              ${t.map(e=>v`
                  <div class="tab" route=${e.href} @click=${this.onLink}>
                    <input
                      type="radio"
                      name="nav"
                      value=${e.href}
                      id=${e.href}
                      ?checked=${e.selected}
                    />
                    <label for=${e.href}>${e.label}</label>
                  </div>
                `)}
            </nav>
            <div class="content">
              <div class="fixed"><slot name="fab"></slot></div>
              <slot></slot>
            </div>
          </main>
        `;case $.DrawerPinned:return v`
          <main class="row">
            <div class="navigation-drawer">
              <section>
                ${t.map(e=>v`
                    <div class="list-tile" route=${e.href} @click=${this.onLink}>
                      <i class="leading material-icons">${e.icon}</i>
                      <span class="title">${e.label}</span>
                    </div>
                  `)}
              </section>
            </div>
            <section class="column">
              ${this.getAppBar()}
              <div class="content">
                <div class="fixed"><slot name="fab"></slot></div>
                <slot></slot>
              </div>
            </section>
          </main>
        `;case $.NavigationRail:return v`
          <main class="row">
            <aside class="navigation-rail">
              <slot name="fab"></slot>
              <nav>
                ${t.map(e=>this.buildNavIcon(x(C({},e),{group:"side-nav"})))}
              </nav>
            </aside>
            <section class="column">
              ${this.getAppBar()}
              <div class="content"><slot></slot></div>
            </section>
          </main>
        `;case $.BottomNavigation:return v`
          <main class="column">
            ${this.getAppBar()}
            <div class="content">
              <div class="fixed"><slot name="fab"></slot></div>
              <slot></slot>
            </div>
            <nav class="navigation-bar">
              ${t.map(e=>this.buildNavIcon(x(C({},e),{group:"bottom-nav-icons"})))}
            </nav>
          </main>
        `;default:return v`Drawer Hidden`}}buildNavIcon({icon:s,label:t,href:e,group:i,selected:n}){return v`<input type="radio" name=${i} value=${e} id=${e} ?checked=${n} />
      <label class="navigation-icon" for=${e} route=${e} @click=${this.onLink}>
        <i class="material-icons">${s}</i>
        <span>${t}</span>
      </label>`}onLink(s){const e=s.target.getAttribute("route");e&&(window.location.href=e)}getAppBar(){return v`
      <header class="top-app-bar small">
        <div class="title"><slot name="title"></slot></div>
        <slot name="actions"> </slot>
      </header>
    `}getStyles(){return v`
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link
        rel="stylesheet"
        href="https://rodydavis.github.io/material-design-lite/css/mdl.min.css"
      />
      <link
        rel="stylesheet"
        href="https://rodydavis.github.io/material-design-lite/css/icons.module.css"
      />
    `}firstUpdated(){[720,1440].forEach(t=>{window.matchMedia(`(min-width: ${t}px)`).addEventListener("change",this.onResize.bind(this))}),this.onResize()}onResize(){const s=this.getBreakpoint();s!==this.breakpoint&&(this.breakpoint=s)}getBreakpoint(){const s=window.innerWidth;return s<720?g.Small:s<1440?g.Medium:g.Large}getNavigation(){const s=this.getNavItems().length;if(this.tabs)return $.Tabs;if(s>=2&&s<=5)switch(this.breakpoint){case g.Small:return $.BottomNavigation;case g.Medium:return $.NavigationRail;case g.Large:return $.DrawerPinned}return $.DrawerHidden}getNavItems(){var e,i,n;const s=[],t=this.querySelector("nav");for(const o of Array.from(t.children)){const r=o.querySelector("label"),c=o.querySelector("i"),l=(e=o.getAttribute("href"))!=null?e:"",a=o.getAttribute("selected")!==null;s.push({href:l,selected:a,label:(i=r==null?void 0:r.textContent)!=null?i:"",icon:(n=c==null?void 0:c.textContent)!=null?n:""})}return s}};O.styles=St`
    :host {
      font-family: Roboto, sans-serif;
    }
    main,
    section,
    .content {
      width: 100%;
      height: 100%;
    }
    .row {
      display: flex;
      flex-direction: row;
    }
    .column {
      display: flex;
      flex-direction: column;
    }
    .content {
      box-sizing: border-box;
      padding: 20px;
      position: relative;
    }
    .fixed {
      position: absolute;
      bottom: 20px;
      right: 20px;
    }
    .navigation-drawer {
      position: relative;
    }
    .navigation-rail {
      height: 100%;
      box-sizing: border-box;
    }
  `;G([zt()],O.prototype,"breakpoint",2);G([ft({type:Boolean})],O.prototype,"tabs",2);O=G([Dt(qt)],O);var g=(s=>(s[s.Small=0]="Small",s[s.Medium=1]="Medium",s[s.Large=2]="Large",s))(g||{}),$=(s=>(s[s.DrawerPinned=0]="DrawerPinned",s[s.DrawerHidden=1]="DrawerHidden",s[s.BottomNavigation=2]="BottomNavigation",s[s.NavigationRail=3]="NavigationRail",s[s.Tabs=4]="Tabs",s))($||{});
