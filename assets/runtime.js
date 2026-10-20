const preact=(()=>{// Preact, MIT License
var n,l,u,i,t,o,r={},f=[],e=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(e,n){for(var t in n)e[t]=n[t];return e}function s(e){var n=e.parentNode;n&&n.removeChild(e)}function a(e,n,t){var _,l,o,r=arguments,i={};for(o in n)"key"==o?_=n[o]:"ref"==o?l=n[o]:i[o]=n[o];if(arguments.length>3)for(t=[t],o=3;o<arguments.length;o++)t.push(r[o]);if(null!=t&&(i.children=t),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===i[o]&&(i[o]=e.defaultProps[o]);return v(e,i,_,l,null)}function v(e,t,_,l,o){var r={type:e,props:t,key:_,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++n.__v:o};return null!=n.vnode&&n.vnode(r),r}function h(){return{current:null}}function y(e){return e.children}function p(e,n){this.props=e,this.context=n}function d(e,n){if(null==n)return e.__?d(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?d(e):null}function _(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return _(e)}}function k(e){(!e.__d&&(e.__d=!0)&&u.push(e)&&!b.__r++||t!==n.debounceRendering)&&((t=n.debounceRendering)||i)(b)}function b(){for(var e;b.__r=u.length;)e=u.sort(function(e,n){return e.__v.__b-n.__v.__b}),u=[],e.some(function(e){var n,t,l,o,r,i;e.__d&&(r=(o=(n=e).__v).__e,(i=n.__P)&&(t=[],(l=c({},o)).__v=o.__v+1,I(i,o,l,n.__n,void 0!==i.ownerSVGElement,null!=o.__h?[r]:null,t,null==r?d(o):r,o.__h),T(t,o),o.__e!=r&&_(o)))})}function m(e,n,t,_,l,o,i,u,s,c){var p,a,h,m,k,b,C,P=_&&_.__k||f,S=P.length;for(t.__k=[],p=0;p<n.length;p++)if(null!=(m=t.__k[p]=null==(m=n[p])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?v(null,m,null,null,m):Array.isArray(m)?v(y,{children:m},null,null,null):m.__b>0?v(m.type,m.props,m.key,null,m.__v):m)){if(m.__=t,m.__b=t.__b+1,null===(h=P[p])||h&&m.key==h.key&&m.type===h.type)P[p]=void 0;else for(a=0;a<S;a++){if((h=P[a])&&m.key==h.key&&m.type===h.type){P[a]=void 0;break}h=null}I(e,m,h=h||r,l,o,i,u,s,c),k=m.__e,(a=m.ref)&&h.ref!=a&&(C||(C=[]),h.ref&&C.push(h.ref,null,m),C.push(a,m.__c||k,m)),null!=k?(null==b&&(b=k),"function"==typeof m.type&&null!=m.__k&&m.__k===h.__k?m.__d=s=g(m,s,e):s=x(e,m,h,P,k,s),c||"option"!==t.type?"function"==typeof t.type&&(t.__d=s):e.value=""):s&&h.__e==s&&s.parentNode!=e&&(s=d(h))}for(t.__e=b,p=S;p--;)null!=P[p]&&("function"==typeof t.type&&null!=P[p].__e&&P[p].__e==t.__d&&(t.__d=d(_,p+1)),L(P[p],P[p]));if(C)for(p=0;p<C.length;p++)z(C[p],C[++p],C[++p])}function g(e,n,t){var _,l;for(_=0;_<e.__k.length;_++)(l=e.__k[_])&&(l.__=e,n="function"==typeof l.type?g(l,n,t):x(t,l,l,e.__k,l.__e,n));return n}function w(e,n){return n=n||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some(function(e){w(e,n)}):n.push(e)),n}function x(e,n,t,_,l,o){var r,i,u;if(void 0!==n.__d)r=n.__d,n.__d=void 0;else if(null==t||l!=o||null==l.parentNode)e:if(null==o||o.parentNode!==e)e.appendChild(l),r=null;else{for(i=o,u=0;(i=i.nextSibling)&&u<_.length;u+=2)if(i==l)break e;e.insertBefore(l,o),r=o}return void 0!==r?r:l.nextSibling}function A(e,n,t,_,l){var o;for(o in t)"children"===o||"key"===o||o in n||C(e,o,null,t[o],_);for(o in n)l&&"function"!=typeof n[o]||"children"===o||"key"===o||"value"===o||"checked"===o||t[o]===n[o]||C(e,o,n[o],t[o],_)}function P(n,t,_){"-"===t[0]?n.setProperty(t,_):n[t]=null==_?"":"number"!=typeof _||e.test(t)?_:_+"px"}function C(e,n,t,_,l){var o;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(n in _)t&&n in t||P(e.style,n,"");if(t)for(n in t)_&&t[n]===_[n]||P(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])o=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+o]=t,t?_||e.addEventListener(n,o?H:$,o):e.removeEventListener(n,o?H:$,o);else if("dangerouslySetInnerHTML"!==n){if(l)n=n.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null!=t&&(!1!==t||"a"===n[0]&&"r"===n[1])?e.setAttribute(n,t):e.removeAttribute(n))}}function $(e){this.l[e.type+!1](n.event?n.event(e):e)}function H(e){this.l[e.type+!0](n.event?n.event(e):e)}function I(e,t,_,l,o,r,i,u,s){var f,a,d,h,v,k,g,b,C,x,P,S=t.type;if(void 0!==t.constructor)return null;null!=_.__h&&(s=_.__h,u=t.__e=_.__e,t.__h=null,r=[u]),(f=n.__b)&&f(t);try{e:if("function"==typeof S){if(b=t.props,C=(f=S.contextType)&&l[f.__c],x=f?C?C.props.value:f.__:l,_.__c?g=(a=t.__c=_.__c).__=a.__E:("prototype"in S&&S.prototype.render?t.__c=a=new S(b,x):(t.__c=a=new p(b,x),a.constructor=S,a.render=M),C&&C.sub(a),a.props=b,a.state||(a.state={}),a.context=x,a.__n=l,d=a.__d=!0,a.__h=[]),null==a.__s&&(a.__s=a.state),null!=S.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=c({},a.__s)),c(a.__s,S.getDerivedStateFromProps(b,a.__s))),h=a.props,v=a.state,d)null==S.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else{if(null==S.getDerivedStateFromProps&&b!==h&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(b,x),!a.__e&&null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(b,a.__s,x)||t.__v===_.__v){a.props=b,a.state=a.__s,t.__v!==_.__v&&(a.__d=!1),a.__v=t,t.__e=_.__e,t.__k=_.__k,t.__k.forEach(function(e){e&&(e.__=t)}),a.__h.length&&i.push(a);break e}null!=a.componentWillUpdate&&a.componentWillUpdate(b,a.__s,x),null!=a.componentDidUpdate&&a.__h.push(function(){a.componentDidUpdate(h,v,k)})}a.context=x,a.props=b,a.state=a.__s,(f=n.__r)&&f(t),a.__d=!1,a.__v=t,a.__P=e,f=a.render(a.props,a.state,a.context),a.state=a.__s,null!=a.getChildContext&&(l=c(c({},l),a.getChildContext())),d||null==a.getSnapshotBeforeUpdate||(k=a.getSnapshotBeforeUpdate(h,v)),P=null!=f&&f.type===y&&null==f.key?f.props.children:f,m(e,Array.isArray(P)?P:[P],t,_,l,o,r,i,u,s),a.base=t.__e,t.__h=null,a.__h.length&&i.push(a),g&&(a.__E=a.__=null),a.__e=!1}else null==r&&t.__v===_.__v?(t.__k=_.__k,t.__e=_.__e):t.__e=j(_.__e,t,_,l,o,r,i,s);(f=n.diffed)&&f(t)}catch(e){t.__v=null,(s||null!=r)&&(t.__e=u,t.__h=!!s,r[r.indexOf(u)]=null),n.__e(e,t,_)}}function T(e,t){n.__c&&n.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){n.__e(e,t.__v)}})}function j(e,n,t,_,l,o,i,u){var c,p,a,d,h=t.props,v=n.props,y=n.type,k=0;if("svg"===y&&(l=!0),null!=o)for(;k<o.length;k++)if((c=o[k])&&(c===e||(y?c.localName==y:3==c.nodeType))){e=c,o[k]=null;break}if(null==e){if(null===y)return document.createTextNode(v);e=l?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,v.is&&v),o=null,u=!1}if(null===y)h===v||u&&e.data===v||(e.data=v);else{if(o=o&&f.slice.call(e.childNodes),p=(h=t.props||r).dangerouslySetInnerHTML,a=v.dangerouslySetInnerHTML,!u){if(null!=o)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(a||p)&&(a&&(p&&a.__html==p.__html||a.__html===e.innerHTML)||(e.innerHTML=a&&a.__html||""))}if(A(e,v,h,l,u),a)n.__k=[];else if(k=n.props.children,m(e,Array.isArray(k)?k:[k],n,t,_,l&&"foreignObject"!==y,o,i,e.firstChild,u),null!=o)for(k=o.length;k--;)null!=o[k]&&s(o[k]);u||("value"in v&&void 0!==(k=v.value)&&(k!==e.value||"progress"===y&&!k)&&C(e,"value",k,h.value,!1),"checked"in v&&void 0!==(k=v.checked)&&k!==e.checked&&C(e,"checked",k,h.checked,!1))}return e}function z(e,t,_){try{"function"==typeof e?e(t):e.current=t}catch(e){n.__e(e,_)}}function L(e,t,_){var l,o,r;if(n.unmount&&n.unmount(e),(l=e.ref)&&(l.current&&l.current!==e.__e||z(l,null,t)),_||"function"==typeof e.type||(_=null!=(o=e.__e)),e.__e=e.__d=void 0,null!=(l=e.__c)){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(e){n.__e(e,t)}l.base=l.__P=null}if(l=e.__k)for(r=0;r<l.length;r++)l[r]&&L(l[r],t,_);null!=o&&s(o)}function M(e,n,t){return this.constructor(e,t)}function N(e,t,_){var l,o,i;n.__&&n.__(e,t),o=(l="function"==typeof _)?null:_&&_.__k||t.__k,i=[],I(t,e=(!l&&_||t).__k=a(y,null,[e]),o||r,r,void 0!==t.ownerSVGElement,!l&&_?[_]:o?null:t.firstChild?f.slice.call(t.childNodes):null,i,!l&&_?_:o?o.__e:t.firstChild,l),T(i,e)}function O(e,n){N(e,n,O)}function S(e,n,t){var _,l,o,r=arguments,i=c({},e.props);for(o in n)"key"==o?_=n[o]:"ref"==o?l=n[o]:i[o]=n[o];if(arguments.length>3)for(t=[t],o=3;o<arguments.length;o++)t.push(r[o]);return null!=t&&(i.children=t),v(e.type,i,_||e.key,l||e.ref,null)}function q(e,n){var t={__c:n="__cC"+o++,__:e,Consumer:function(e,n){return e.children(n)},Provider:function(e){var t,_;return this.getChildContext||(t=[],(_={})[n]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&t.some(k)},this.sub=function(e){t.push(e);var n=e.componentWillUnmount;e.componentWillUnmount=function(){t.splice(t.indexOf(e),1),n&&n.call(e)}}),e.children}};return t.Provider.__=t.Consumer.contextType=t}n={__e:function(e,n){for(var t,_,l;n=n.__;)if((t=n.__c)&&!t.__)try{if((_=t.constructor)&&null!=_.getDerivedStateFromError&&(t.setState(_.getDerivedStateFromError(e)),l=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(e),l=t.__d),l)return t.__E=t}catch(n){e=n}throw e},__v:0},l=function(e){return null!=e&&void 0===e.constructor},p.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof e&&(e=e(c({},t),this.props)),e&&c(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),k(this))},p.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),k(this))},p.prototype.render=y,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,b.__r=0,o=0;return {render:N,h:a,Fragment:y,options:n};})();
const {h,Fragment,options}=preact;
// Small React-compatible hook layer for Preact 10. Licensed under MIT with Preact.

let currentComponent = null;
let hookIndex = 0;
const oldRender = options.__r;
const oldUnmount = options.unmount;
options.__r = vnode => {
  if (oldRender) oldRender(vnode);
  currentComponent = vnode.__c;
  if(currentComponent) currentComponent.__dheUnmounted = false;
  hookIndex = 0;
};
options.unmount = vnode => {
  const comp = vnode.__c;
  if(comp) comp.__dheUnmounted = true;
  if (comp && comp.__customHooks) {
    for (const hook of comp.__customHooks) if (hook && hook.cleanup) hook.cleanup();
  }
  if (oldUnmount) oldUnmount(vnode);
};
function hooks() {
  if (!currentComponent) throw new Error('Hooks must be called inside a component');
  return currentComponent.__customHooks || (currentComponent.__customHooks=[]);
}
function same(a,b){return !!a && !!b && a.length === b.length && a.every((x,i)=>Object.is(x,b[i]));}
function useState(value) {
  const comp = currentComponent;
  const idx = hookIndex++;
  const all = hooks();
  if (!all[idx]) {
    const state = {value:typeof value === 'function' ? value() : value};
    state.set = (next) => {
      const val=typeof next === 'function' ? next(state.value):next;
      if (!Object.is(state.value,val)) {state.value=val;comp.setState({});}
    };
    all[idx]=state;
  }
  return [all[idx].value, all[idx].set];
}
function useMemo(fn, deps) {
  const idx=hookIndex++;const all=hooks();let slot=all[idx];
  if(!slot || !same(slot.deps,deps)) {slot={value:fn(),deps};all[idx]=slot;}
  return slot.value;
}
function useEffect(fn,deps){
  const owner = currentComponent;
  const idx=hookIndex++;const all=hooks();let slot=all[idx];
  if(!slot){slot={deps:undefined,cleanup:null,version:0};all[idx]=slot;}
  if(!same(slot.deps,deps)){
    slot.deps=deps;const v=++slot.version;
    Promise.resolve().then(()=>{
      if(slot.version!==v||!owner||owner.__dheUnmounted)return;
      if(typeof slot.cleanup==='function')slot.cleanup();
      slot.cleanup=fn()||null;
    });
  }
}
const React={createElement:h,Fragment,StrictMode:Fragment,useState,useMemo,useEffect};



const createRoot=(node)=>({render(element){preact.render(element,node)}});
// Minimal inline SVG icon set for the DHE-KIT prototype (Lucide-inspired geometry).

const paths={
Activity:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
ArrowDownRight:'<path d="m7 7 10 10M17 7v10H7"/>',
ArrowLeft:'<path d="m12 19-7-7 7-7M19 12H5"/>',
ArrowRight:'<path d="M5 12h14m-7-7 7 7-7 7"/>',
Award:'<circle cx="12" cy="8" r="6"/><path d="m8.2 13.3-1.1 9L12 19l4.9 3.3-1.1-9"/>',
Bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
BookOpen:'<path d="M12 7v14M3 18V5a2 2 0 0 1 2-2h3a4 4 0 0 1 4 4 4 4 0 0 1 4-4h3a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2h-3a4 4 0 0 0-4 4 4 4 0 0 0-4-4H5a2 2 0 0 0-2 2z"/>',
CalendarDays:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01"/>',
Check:'<path d="m20 6-11 11-5-5"/>',
CheckCheck:'<path d="m18 6-7 7-3-3M22 10l-9 9-5-5M2 12l4 4"/>',
CheckCircle2:'<circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/>',
ChevronDown:'<path d="m6 9 6 6 6-6"/>',
ChevronLeft:'<path d="m15 18-6-6 6-6"/>',
ChevronRight:'<path d="m9 18 6-6-6-6"/>',
CircleAlert:'<circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>',
ClipboardCheck:'<rect x="4" y="5" width="16" height="17" rx="2"/><rect x="9" y="2" width="6" height="5" rx="1"/><path d="m8 15 3 3 5-6"/>',
Clock3:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
Dumbbell:'<path d="m6.5 6.5 11 11m3-5-8 8m-9-9 8-8M4 7 7 4m10 16 3-3M2 10l8-8m4 20 8-8"/>',
Flame:'<path d="M12 22c4.5 0 8-3 8-8 0-3-1.4-5.2-5-8 0 4-3 5-3 5S10 6 9 2C6 6 4 9 4 14c0 4.5 3.5 8 8 8z"/><path d="M12 22c2.4 0 4-2 4-4 0-2-1.5-3.1-3-4-1 2-4 3-4 5 0 1.5 1.3 3 3 3"/>',
Footprints:'<path d="M5 3c2-1 4 1 4 5 0 3-2 4-4 3S3 4 5 3ZM19 12c-2-1-4 1-4 5 0 3 2 4 4 3s2-7 0-8ZM4 15l4 2M16 7l4 2"/>',
Heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
HeartHandshake:'<path d="m2 12 5-5 5 5 3-3c2-2 5-2 7 0v7l-6 6-6-3-4 1-4-4v-4Z"/><path d="m12 12-2 2 4 4M17 13l-3 3"/>',
HeartPulse:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/><path d="M2 12h5l2-4 3 8 2-4h8"/>',
Home:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10Z"/><path d="M9 21v-8h6v8"/>',
Info:'<circle cx="12" cy="12" r="10"/><path d="M12 11v5M12 7h.01"/>',
Leaf:'<path d="M20 4c-10 0-16 4-16 11a5 5 0 0 0 5 5c7 0 11-6 11-16ZM3 21c1-6 6-10 12-12"/>',
Menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
Minus:'<path d="M5 12h14"/>',
MoreHorizontal:'<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
Pause:'<path d="M7 4h4v16H7zM15 4h4v16h-4z"/>',
Play:'<path d="m7 3 14 9-14 9V3Z"/>',
Plus:'<path d="M12 5v14M5 12h14"/>',
Search:'<circle cx="10.8" cy="10.8" r="7.5"/><path d="m16.3 16.3 5 5"/>',
ShieldCheck:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
Sparkles:'<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3ZM20 17l.8 2.2L23 20l-2.2.8L20 23l-.8-2.2L17 20l2.2-.8L20 17Z"/>',
Stethoscope:'<path d="M6 3v5a6 6 0 0 0 12 0V3M4 3h4M16 3h4M12 14v2a5 5 0 0 0 10 0v-1"/><circle cx="20" cy="12" r="2"/>',
Target:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
Timer:'<circle cx="12" cy="13" r="9"/><path d="M12 13V8M10 2h4M18 5l2-2"/>',
TrendingUp:'<path d="m3 17 6-6 4 4 8-8M15 7h6v6"/>',
Waves:'<path d="M2 7c3 0 3-2 5-2s3 2 5 2 3-2 5-2 3 2 5 2M2 13c3 0 3-2 5-2s3 2 5 2 3-2 5-2 3 2 5 2M2 19c3 0 3-2 5-2s3 2 5 2 3-2 5-2 3 2 5 2"/>',
X:'<path d="M18 6 6 18M6 6l12 12"/>'};
function componentFor(name){const contents=paths[name]||paths.Info;return function Icon({size=24,strokeWidth=2,color='currentColor',fill='none',className='',...other}={}){return h('svg',{xmlns:'http://www.w3.org/2000/svg',width:size,height:size,viewBox:'0 0 24 24',fill,stroke:color,strokeWidth,strokeLinecap:'round',strokeLinejoin:'round',className,...other,dangerouslySetInnerHTML:{__html:contents}})};}
const Activity=componentFor('Activity'),ArrowDownRight=componentFor('ArrowDownRight'),ArrowLeft=componentFor('ArrowLeft'),ArrowRight=componentFor('ArrowRight'),Award=componentFor('Award'),Bell=componentFor('Bell'),BookOpen=componentFor('BookOpen'),CalendarDays=componentFor('CalendarDays'),Check=componentFor('Check'),CheckCheck=componentFor('CheckCheck'),CheckCircle2=componentFor('CheckCircle2'),ChevronDown=componentFor('ChevronDown'),ChevronLeft=componentFor('ChevronLeft'),ChevronRight=componentFor('ChevronRight'),CircleAlert=componentFor('CircleAlert'),ClipboardCheck=componentFor('ClipboardCheck'),Clock3=componentFor('Clock3'),Dumbbell=componentFor('Dumbbell'),Flame=componentFor('Flame'),Footprints=componentFor('Footprints'),Heart=componentFor('Heart'),HeartHandshake=componentFor('HeartHandshake'),HeartPulse=componentFor('HeartPulse'),Home=componentFor('Home'),Info=componentFor('Info'),Leaf=componentFor('Leaf'),Menu=componentFor('Menu'),Minus=componentFor('Minus'),MoreHorizontal=componentFor('MoreHorizontal'),Pause=componentFor('Pause'),Play=componentFor('Play'),Plus=componentFor('Plus'),Search=componentFor('Search'),ShieldCheck=componentFor('ShieldCheck'),Sparkles=componentFor('Sparkles'),Stethoscope=componentFor('Stethoscope'),Target=componentFor('Target'),Timer=componentFor('Timer'),TrendingUp=componentFor('TrendingUp'),Waves=componentFor('Waves'),X=componentFor('X');
