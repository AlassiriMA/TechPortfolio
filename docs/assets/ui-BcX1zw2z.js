import{r as s,R as S,a as X,b as Z}from"./vendor-CEZfti6T.js";var $={exports:{}},A={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G=s,H=Symbol.for("react.element"),Q=Symbol.for("react.fragment"),ee=Object.prototype.hasOwnProperty,te=G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ne={key:!0,ref:!0,__self:!0,__source:!0};function V(e,t,n){var r,o={},i=null,c=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(c=t.ref);for(r in t)ee.call(t,r)&&!ne.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:H,type:e,key:i,ref:c,props:o,_owner:te.current}}A.Fragment=Q;A.jsx=V;A.jsxs=V;$.exports=A;var P=$.exports;function D(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function re(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function z(...e){return t=>e.forEach(n=>re(n,t))}function b(...e){return s.useCallback(z(...e),e)}function oe(e,t=[]){let n=[];function r(i,c){const a=s.createContext(c),l=n.length;n=[...n,c];function u(p){const{scope:d,children:v,...m}=p,E=(d==null?void 0:d[e][l])||a,y=s.useMemo(()=>m,Object.values(m));return P.jsx(E.Provider,{value:y,children:v})}function f(p,d){const v=(d==null?void 0:d[e][l])||a,m=s.useContext(v);if(m)return m;if(c!==void 0)return c;throw new Error(`\`${p}\` must be used within \`${i}\``)}return u.displayName=i+"Provider",[u,f]}const o=()=>{const i=n.map(c=>s.createContext(c));return function(a){const l=(a==null?void 0:a[e])||i;return s.useMemo(()=>({[`__scope${e}`]:{...a,[e]:l}}),[a,l])}};return o.scopeName=e,[r,se(o,...t)]}function se(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const c=r.reduce((a,{useScope:l,scopeName:u})=>{const p=l(i)[`__scope${u}`];return{...a,...p}},{});return s.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return n.scopeName=t.scopeName,n}var _=s.forwardRef((e,t)=>{const{children:n,...r}=e,o=s.Children.toArray(n),i=o.find(ce);if(i){const c=i.props.children,a=o.map(l=>l===i?s.Children.count(c)>1?s.Children.only(null):s.isValidElement(c)?c.props.children:null:l);return P.jsx(L,{...r,ref:t,children:s.isValidElement(c)?s.cloneElement(c,void 0,a):null})}return P.jsx(L,{...r,ref:t,children:n})});_.displayName="Slot";var L=s.forwardRef((e,t)=>{const{children:n,...r}=e;if(s.isValidElement(n)){const o=ue(n);return s.cloneElement(n,{...ae(r,n.props),ref:t?z(t,o):o})}return s.Children.count(n)>1?s.Children.only(null):null});L.displayName="SlotClone";var ie=({children:e})=>P.jsx(P.Fragment,{children:e});function ce(e){return s.isValidElement(e)&&e.type===ie}function ae(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...a)=>{i(...a),o(...a)}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}function ue(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function we(e){const t=e+"CollectionProvider",[n,r]=oe(t),[o,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),c=v=>{const{scope:m,children:E}=v,y=S.useRef(null),C=S.useRef(new Map).current;return P.jsx(o,{scope:m,itemMap:C,collectionRef:y,children:E})};c.displayName=t;const a=e+"CollectionSlot",l=S.forwardRef((v,m)=>{const{scope:E,children:y}=v,C=i(a,E),R=b(m,C.collectionRef);return P.jsx(_,{ref:R,children:y})});l.displayName=a;const u=e+"CollectionItemSlot",f="data-radix-collection-item",p=S.forwardRef((v,m)=>{const{scope:E,children:y,...C}=v,R=S.useRef(null),O=b(m,R),x=i(u,E);return S.useEffect(()=>(x.itemMap.set(R,{ref:R,...C}),()=>void x.itemMap.delete(R))),P.jsx(_,{[f]:"",ref:O,children:y})});p.displayName=u;function d(v){const m=i(e+"CollectionConsumer",v);return S.useCallback(()=>{const y=m.collectionRef.current;if(!y)return[];const C=Array.from(y.querySelectorAll(`[${f}]`));return Array.from(m.itemMap.values()).sort((x,M)=>C.indexOf(x.ref.current)-C.indexOf(M.ref.current))},[m.collectionRef,m.itemMap])}return[{Provider:c,Slot:l,ItemSlot:p},d,r]}function _e(e,t=[]){let n=[];function r(i,c){const a=s.createContext(c),l=n.length;n=[...n,c];const u=p=>{var C;const{scope:d,children:v,...m}=p,E=((C=d==null?void 0:d[e])==null?void 0:C[l])||a,y=s.useMemo(()=>m,Object.values(m));return P.jsx(E.Provider,{value:y,children:v})};u.displayName=i+"Provider";function f(p,d){var E;const v=((E=d==null?void 0:d[e])==null?void 0:E[l])||a,m=s.useContext(v);if(m)return m;if(c!==void 0)return c;throw new Error(`\`${p}\` must be used within \`${i}\``)}return[u,f]}const o=()=>{const i=n.map(c=>s.createContext(c));return function(a){const l=(a==null?void 0:a[e])||i;return s.useMemo(()=>({[`__scope${e}`]:{...a,[e]:l}}),[a,l])}};return o.scopeName=e,[r,le(o,...t)]}function le(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const c=r.reduce((a,{useScope:l,scopeName:u})=>{const p=l(i)[`__scope${u}`];return{...a,...p}},{});return s.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return n.scopeName=t.scopeName,n}var de=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],W=de.reduce((e,t)=>{const n=s.forwardRef((r,o)=>{const{asChild:i,...c}=r,a=i?_:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),P.jsx(a,{...c,ref:o})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function fe(e,t){e&&X.flushSync(()=>e.dispatchEvent(t))}function N(e){const t=s.useRef(e);return s.useEffect(()=>{t.current=e}),s.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function me(e,t=globalThis==null?void 0:globalThis.document){const n=N(e);s.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var pe="DismissableLayer",I="dismissableLayer.update",ve="dismissableLayer.pointerDownOutside",Ee="dismissableLayer.focusOutside",k,q=s.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),K=s.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:i,onInteractOutside:c,onDismiss:a,...l}=e,u=s.useContext(q),[f,p]=s.useState(null),d=(f==null?void 0:f.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,v]=s.useState({}),m=b(t,h=>p(h)),E=Array.from(u.layers),[y]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),C=E.indexOf(y),R=f?E.indexOf(f):-1,O=u.layersWithOutsidePointerEventsDisabled.size>0,x=R>=C,M=ye(h=>{const g=h.target,B=[...u.branches].some(T=>T.contains(g));!x||B||(o==null||o(h),c==null||c(h),h.defaultPrevented||a==null||a())},d),U=Ce(h=>{const g=h.target;[...u.branches].some(T=>T.contains(g))||(i==null||i(h),c==null||c(h),h.defaultPrevented||a==null||a())},d);return me(h=>{R===u.layers.size-1&&(r==null||r(h),!h.defaultPrevented&&a&&(h.preventDefault(),a()))},d),s.useEffect(()=>{if(f)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(k=d.body.style.pointerEvents,d.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(f)),u.layers.add(f),F(),()=>{n&&u.layersWithOutsidePointerEventsDisabled.size===1&&(d.body.style.pointerEvents=k)}},[f,d,n,u]),s.useEffect(()=>()=>{f&&(u.layers.delete(f),u.layersWithOutsidePointerEventsDisabled.delete(f),F())},[f,u]),s.useEffect(()=>{const h=()=>v({});return document.addEventListener(I,h),()=>document.removeEventListener(I,h)},[]),P.jsx(W.div,{...l,ref:m,style:{pointerEvents:O?x?"auto":"none":void 0,...e.style},onFocusCapture:D(e.onFocusCapture,U.onFocusCapture),onBlurCapture:D(e.onBlurCapture,U.onBlurCapture),onPointerDownCapture:D(e.onPointerDownCapture,M.onPointerDownCapture)})});K.displayName=pe;var he="DismissableLayerBranch",Y=s.forwardRef((e,t)=>{const n=s.useContext(q),r=s.useRef(null),o=b(t,r);return s.useEffect(()=>{const i=r.current;if(i)return n.branches.add(i),()=>{n.branches.delete(i)}},[n.branches]),P.jsx(W.div,{...e,ref:o})});Y.displayName=he;function ye(e,t=globalThis==null?void 0:globalThis.document){const n=N(e),r=s.useRef(!1),o=s.useRef(()=>{});return s.useEffect(()=>{const i=a=>{if(a.target&&!r.current){let l=function(){J(ve,n,u,{discrete:!0})};const u={originalEvent:a};a.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=l,t.addEventListener("click",o.current,{once:!0})):l()}else t.removeEventListener("click",o.current);r.current=!1},c=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(c),t.removeEventListener("pointerdown",i),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function Ce(e,t=globalThis==null?void 0:globalThis.document){const n=N(e),r=s.useRef(!1);return s.useEffect(()=>{const o=i=>{i.target&&!r.current&&J(Ee,n,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function F(){const e=new CustomEvent(I);document.dispatchEvent(e)}function J(e,t,n,{discrete:r}){const o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?fe(o,i):o.dispatchEvent(i)}var Ae=K,Me=Y,j=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{},Pe="Portal",Re=s.forwardRef((e,t)=>{var a;const{container:n,...r}=e,[o,i]=s.useState(!1);j(()=>i(!0),[]);const c=n||o&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return c?Z.createPortal(P.jsx(W.div,{...r,ref:t}),c):null});Re.displayName=Pe;function xe(e,t){return s.useReducer((n,r)=>t[n][r]??n,e)}var Se=e=>{const{present:t,children:n}=e,r=be(t),o=typeof n=="function"?n({present:r.isPresent}):s.Children.only(n),i=b(r.ref,Ne(o));return typeof n=="function"||r.isPresent?s.cloneElement(o,{ref:i}):null};Se.displayName="Presence";function be(e){const[t,n]=s.useState(),r=s.useRef({}),o=s.useRef(e),i=s.useRef("none"),c=e?"mounted":"unmounted",[a,l]=xe(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return s.useEffect(()=>{const u=w(r.current);i.current=a==="mounted"?u:"none"},[a]),j(()=>{const u=r.current,f=o.current;if(f!==e){const d=i.current,v=w(u);e?l("MOUNT"):v==="none"||(u==null?void 0:u.display)==="none"?l("UNMOUNT"):l(f&&d!==v?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,l]),j(()=>{if(t){let u;const f=t.ownerDocument.defaultView??window,p=v=>{const E=w(r.current).includes(v.animationName);if(v.target===t&&E&&(l("ANIMATION_END"),!o.current)){const y=t.style.animationFillMode;t.style.animationFillMode="forwards",u=f.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=y)})}},d=v=>{v.target===t&&(i.current=w(r.current))};return t.addEventListener("animationstart",d),t.addEventListener("animationcancel",p),t.addEventListener("animationend",p),()=>{f.clearTimeout(u),t.removeEventListener("animationstart",d),t.removeEventListener("animationcancel",p),t.removeEventListener("animationend",p)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:s.useCallback(u=>{u&&(r.current=getComputedStyle(u)),n(u)},[])}}function w(e){return(e==null?void 0:e.animationName)||"none"}function Ne(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Te({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,o]=Oe({defaultProp:t,onChange:n}),i=e!==void 0,c=i?e:r,a=N(n),l=s.useCallback(u=>{if(i){const p=typeof u=="function"?u(e):u;p!==e&&a(p)}else o(u)},[i,e,o,a]);return[c,l]}function Oe({defaultProp:e,onChange:t}){const n=s.useState(e),[r]=n,o=s.useRef(r),i=N(t);return s.useEffect(()=>{o.current!==r&&(i(r),o.current=r)},[r,o,i]),n}export{Me as B,W as P,Ae as R,_e as a,Te as b,we as c,Se as d,N as e,D as f,Re as g,j as h,fe as i,P as j,b as u};
