var mt=Object.defineProperty,_t=Object.defineProperties;var gt=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var yt=Object.prototype.hasOwnProperty,At=Object.prototype.propertyIsEnumerable;var X=(s,t,e)=>t in s?mt(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,z=(s,t)=>{for(var e in t||(t={}))yt.call(t,e)&&X(s,e,t[e]);if(Q)for(var e of Q(t))At.call(t,e)&&X(s,e,t[e]);return s},B=(s,t)=>_t(s,gt(t));const bt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}};bt();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=window,J=M.ShadowRoot&&(M.ShadyCSS===void 0||M.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,F=Symbol(),Y=new WeakMap;class dt{constructor(t,e,i){if(this._$cssResult$=!0,i!==F)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(J&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Y.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Y.set(e,t))}return t}toString(){return this.cssText}}const Et=s=>new dt(typeof s=="string"?s:s+"",void 0,F),St=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,n,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+s[r+1],s[0]);return new dt(e,s,F)},wt=(s,t)=>{J?s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=M.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,s.appendChild(i)})},tt=J?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Et(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var I;const T=window,et=T.trustedTypes,Ct=et?et.emptyScript:"",it=T.reactiveElementPolyfillSupport,Z={toAttribute(s,t){switch(t){case Boolean:s=s?Ct:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},ut=(s,t)=>t!==s&&(t==t||s==s),j={attribute:!0,type:String,converter:Z,reflect:!1,hasChanged:ut};class y extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;(e=this.h)!==null&&e!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=j){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const r=this[t];this[e]=n,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||j}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(tt(n))}else t!==void 0&&e.push(tt(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return wt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=j){var n;const r=this.constructor._$Ep(t,i);if(r!==void 0&&i.reflect===!0){const o=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:Z).toAttribute(e,i.type);this._$El=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,r=n._$Ev.get(t);if(r!==void 0&&this._$El!==r){const o=n.getPropertyOptions(r),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:Z;this._$El=r,this[r]=c.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||ut)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,r)=>this[r]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdate)===null||r===void 0?void 0:r.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}y.finalized=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},it==null||it({ReactiveElement:y}),((I=T.reactiveElementVersions)!==null&&I!==void 0?I:T.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var q;const L=window,b=L.trustedTypes,st=b?b.createPolicy("lit-html",{createHTML:s=>s}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,pt="?"+m,xt=`<${pt}>`,E=document,P=(s="")=>E.createComment(s),N=s=>s===null||typeof s!="object"&&typeof s!="function",vt=Array.isArray,Pt=s=>vt(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nt=/-->/g,rt=/>/g,_=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ot=/'/g,lt=/"/g,$t=/^(?:script|style|textarea|title)$/i,Nt=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),p=Nt(1),S=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),at=new WeakMap,Ht=(s,t,e)=>{var i,n;const r=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let o=r._$litPart$;if(o===void 0){const c=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=o=new O(t.insertBefore(P(),c),c,void 0,e!=null?e:{})}return o._$AI(s),o},A=E.createTreeWalker(E,129,null,!1),Ut=(s,t)=>{const e=s.length-1,i=[];let n,r=t===2?"<svg>":"",o=C;for(let l=0;l<e;l++){const a=s[l];let v,h,d=-1,$=0;for(;$<a.length&&(o.lastIndex=$,h=o.exec(a),h!==null);)$=o.lastIndex,o===C?h[1]==="!--"?o=nt:h[1]!==void 0?o=rt:h[2]!==void 0?($t.test(h[2])&&(n=RegExp("</"+h[2],"g")),o=_):h[3]!==void 0&&(o=_):o===_?h[0]===">"?(o=n!=null?n:C,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,v=h[1],o=h[3]===void 0?_:h[3]==='"'?lt:ot):o===lt||o===ot?o=_:o===nt||o===rt?o=C:(o=_,n=void 0);const R=o===_&&s[l+1].startsWith("/>")?" ":"";r+=o===C?a+xt:d>=0?(i.push(v),a.slice(0,d)+"$lit$"+a.slice(d)+m+R):a+m+(d===-2?(i.push(void 0),l):R)}const c=r+(s[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[st!==void 0?st.createHTML(c):c,i]};class H{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let r=0,o=0;const c=t.length-1,l=this.parts,[a,v]=Ut(t,e);if(this.el=H.createElement(a,i),A.currentNode=this.el.content,e===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(n=A.nextNode())!==null&&l.length<c;){if(n.nodeType===1){if(n.hasAttributes()){const h=[];for(const d of n.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(m)){const $=v[o++];if(h.push(d),$!==void 0){const R=n.getAttribute($.toLowerCase()+"$lit$").split(m),k=/([.?@])?(.*)/.exec($);l.push({type:1,index:r,name:k[2],strings:R,ctor:k[1]==="."?Rt:k[1]==="?"?Mt:k[1]==="@"?Tt:D})}else l.push({type:6,index:r})}for(const d of h)n.removeAttribute(d)}if($t.test(n.tagName)){const h=n.textContent.split(m),d=h.length-1;if(d>0){n.textContent=b?b.emptyScript:"";for(let $=0;$<d;$++)n.append(h[$],P()),A.nextNode(),l.push({type:2,index:++r});n.append(h[d],P())}}}else if(n.nodeType===8)if(n.data===pt)l.push({type:2,index:r});else{let h=-1;for(;(h=n.data.indexOf(m,h+1))!==-1;)l.push({type:7,index:r}),h+=m.length-1}r++}}static createElement(t,e){const i=E.createElement("template");return i.innerHTML=t,i}}function w(s,t,e=s,i){var n,r,o,c;if(t===S)return t;let l=i!==void 0?(n=e._$Cl)===null||n===void 0?void 0:n[i]:e._$Cu;const a=N(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(s),l._$AT(s,e,i)),i!==void 0?((o=(c=e)._$Cl)!==null&&o!==void 0?o:c._$Cl=[])[i]=l:e._$Cu=l),l!==void 0&&(t=w(s,l._$AS(s,t.values),l,i)),t}class Ot{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:n}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:E).importNode(i,!0);A.currentNode=r;let o=A.nextNode(),c=0,l=0,a=n[0];for(;a!==void 0;){if(c===a.index){let v;a.type===2?v=new O(o,o.nextSibling,this,t):a.type===1?v=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(v=new Lt(o,this,t)),this.v.push(v),a=n[++l]}c!==(a==null?void 0:a.index)&&(o=A.nextNode(),c++)}return r}m(t){let e=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class O{constructor(t,e,i,n){var r;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$C_=(r=n==null?void 0:n.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$C_}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=w(this,t,e),N(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==S&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):Pt(t)?this.O(t):this.$(t)}S(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==u&&N(this._$AH)?this._$AA.nextSibling.data=t:this.k(E.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:n}=t,r=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=H.createElement(n.h,this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.m(i);else{const o=new Ot(r,this),c=o.p(this.options);o.m(i),this.k(c),this._$AH=o}}_$AC(t){let e=at.get(t.strings);return e===void 0&&at.set(t.strings,e=new H(t)),e}O(t){vt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const r of t)n===e.length?e.push(i=new O(this.S(P()),this.S(P()),this,this.options)):i=e[n],i._$AI(r),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$C_=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class D{constructor(t,e,i,n,r){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const r=this.strings;let o=!1;if(r===void 0)t=w(this,t,e,0),o=!N(t)||t!==this._$AH&&t!==S,o&&(this._$AH=t);else{const c=t;let l,a;for(t=r[0],l=0;l<r.length-1;l++)a=w(this,c[i+l],e,l),a===S&&(a=this._$AH[l]),o||(o=!N(a)||a!==this._$AH[l]),a===u?t=u:t!==u&&(t+=(a!=null?a:"")+r[l+1]),this._$AH[l]=a}o&&!n&&this.P(t)}P(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Rt extends D{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===u?void 0:t}}const kt=b?b.emptyScript:"";class Mt extends D{constructor(){super(...arguments),this.type=4}P(t){t&&t!==u?this.element.setAttribute(this.name,kt):this.element.removeAttribute(this.name)}}class Tt extends D{constructor(t,e,i,n,r){super(t,e,i,n,r),this.type=5}_$AI(t,e=this){var i;if((t=(i=w(this,t,e,0))!==null&&i!==void 0?i:u)===S)return;const n=this._$AH,r=t===u&&n!==u||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==u&&(n===u||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Lt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){w(this,t)}}const ht=L.litHtmlPolyfillSupport;ht==null||ht(H,O),((q=L.litHtmlVersions)!==null&&q!==void 0?q:L.litHtmlVersions=[]).push("2.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var V,W;class x extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Ht(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return S}}x.finalized=!0,x._$litElement$=!0,(V=globalThis.litElementHydrateSupport)===null||V===void 0||V.call(globalThis,{LitElement:x});const ct=globalThis.litElementPolyfillSupport;ct==null||ct({LitElement:x});((W=globalThis.litElementVersions)!==null&&W!==void 0?W:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt=s=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(s,t):((e,i)=>{const{kind:n,elements:r}=i;return{kind:n,elements:r,finisher(o){customElements.define(e,o)}}})(s,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zt=(s,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?B(z({},t),{finisher(e){e.createProperty(t.key,s)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,s)}};function ft(s){return(t,e)=>e!==void 0?((i,n,r)=>{n.constructor.createProperty(r,i)})(s,t,e):zt(s,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Bt(s){return ft(B(z({},s),{state:!0}))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var K;((K=window.HTMLSlotElement)===null||K===void 0?void 0:K.prototype.assignedElements)!=null;var It=Object.defineProperty,jt=Object.getOwnPropertyDescriptor,G=(s,t,e,i)=>{for(var n=i>1?void 0:i?jt(t,e):t,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&It(t,e,n),n};const qt="adaptive-scaffold";let U=class extends x{constructor(){super(...arguments),this.breakpoint=0,this.tabs=!1}render(){return p` ${this.getStyles()} ${this.renderNavigation()}`}renderNavigation(){const s=this.getNavigation(),t=this.getNavItems();switch(s){case f.Tabs:return p`
          <main class="column">
            ${this.getAppBar()}
            <nav class="tabs">
              ${t.map(e=>p`
                  <div class="tab">
                    <input
                      type="radio"
                      name="nav"
                      value=${e.href}
                      id=${e.href}
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
        `;case f.DrawerPinned:return p`
          <main class="row">
            <div class="navigation-drawer">
              <section>
                ${t.map(e=>p`
                    <div class="list-tile">
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
        `;case f.NavigationRail:return p`
          <main class="row">
            <aside class="navigation-rail">
              <slot name="fab"></slot>
              <nav>
                ${t.map(e=>p`
                    <input
                      type="radio"
                      name="nav"
                      value=${e.href}
                      id=${e.href}
                    />
                    <label for=${e.href}>
                      <i class="material-icons">${e.icon}</i>
                      <span>${e.label}</span>
                    </label>
                  `)}
              </nav>
            </aside>
            <section class="column">
              ${this.getAppBar()}
              <div class="content"><slot></slot></div>
            </section>
          </main>
        `;case f.BottomNavigation:return p`
          <main class="column">
            ${this.getAppBar()}
            <div class="content">
              <div class="fixed"><slot name="fab"></slot></div>
              <slot></slot>
            </div>
            <nav class="navigation-bar">
              ${t.map(e=>p`
                  <input
                    type="radio"
                    name="bottom-nav-icons"
                    value=${e.href}
                    id=${e.href}
                  />
                  <label for=${e.href}>
                    <i class="material-icons">${e.icon}</i>
                    <span>${e.label}</span>
                  </label>
                `)}
            </nav>
          </main>
        `;default:return p`Drawer Hidden`}}getAppBar(){return p`
      <header class="top-app-bar small">
        <div class="title"><slot name="title"></slot></div>
        <slot name="actions"> </slot>
      </header>
    `}getStyles(){return p`
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
    `}firstUpdated(){[640,1024].forEach(t=>{window.matchMedia(`(min-width: ${t}px)`).addEventListener("change",this.onResize.bind(this))}),this.onResize()}onResize(){const s=this.getBreakpoint();s!==this.breakpoint&&(this.breakpoint=s)}getBreakpoint(){const s=window.innerWidth;return s<720?g.Small:s<1440?g.Medium:g.Large}getNavigation(){const s=this.getNavItems().length;if(this.tabs)return f.Tabs;if(s>=2&&s<=5)switch(this.breakpoint){case g.Small:return f.BottomNavigation;case g.Medium:return f.NavigationRail;case g.Large:return f.DrawerPinned}return f.DrawerHidden}getNavItems(){var e,i,n,r,o;const s=[],t=this.querySelector("nav");for(const c of Array.from(t.children)){const l=(i=(e=c.querySelector("label").textContent)!=null?e:c.textContent)!=null?i:"",a=(n=c.getAttribute("href"))!=null?n:"",v=(o=(r=c.querySelector("i"))==null?void 0:r.textContent)!=null?o:"";s.push({href:a,label:l,icon:v})}return s}};U.styles=St`
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
    .navigation-rail {
      height: 100%;
      box-sizing: border-box;
    }
  `;G([Bt()],U.prototype,"breakpoint",2);G([ft({type:Boolean})],U.prototype,"tabs",2);U=G([Dt(qt)],U);var g=(s=>(s[s.Small=0]="Small",s[s.Medium=1]="Medium",s[s.Large=2]="Large",s))(g||{}),f=(s=>(s[s.DrawerPinned=0]="DrawerPinned",s[s.DrawerHidden=1]="DrawerHidden",s[s.BottomNavigation=2]="BottomNavigation",s[s.NavigationRail=3]="NavigationRail",s[s.Tabs=4]="Tabs",s))(f||{});
