(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function l(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=l(r);fetch(r.href,o)}})();const Ve=t=>localStorage.theme==="dark"||!("theme"in localStorage)&&t?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),We=window.matchMedia("(prefers-color-scheme: dark)");Ve(We.matches);We.addEventListener("change",t=>Ve(t.matches));function w(){}const rt=t=>t;function Ke(t,e){for(const l in e)t[l]=e[l];return t}function lt(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function xe(t){return t()}function ge(){return Object.create(null)}function q(t){t.forEach(xe)}function ae(t){return typeof t=="function"}function T(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ot(t){return Object.keys(t).length===0}function Ze(t,e,l,n){if(t){const r=Ge(t,e,l,n);return t[0](r)}}function Ge(t,e,l,n){return t[1]&&n?Ke(l.ctx.slice(),t[1](n(e))):l.ctx}function Je(t,e,l,n){if(t[2]&&n){const r=t[2](n(l));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(e.dirty.length,r.length);for(let i=0;i<c;i+=1)o[i]=e.dirty[i]|r[i];return o}return e.dirty|r}return e.dirty}function Qe(t,e,l,n,r,o){if(r){const c=Ge(e,l,n,o);t.p(c,r)}}function Xe(t){if(t.ctx.length>32){const e=[],l=t.ctx.length/32;for(let n=0;n<l;n++)e[n]=-1;return e}return-1}const Ye=typeof window<"u";let ct=Ye?()=>window.performance.now():()=>Date.now(),_e=Ye?t=>requestAnimationFrame(t):w;const x=new Set;function et(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&_e(et)}function it(t){let e;return x.size===0&&_e(et),{promise:new Promise(l=>{x.add(e={c:t,f:l})}),abort(){x.delete(e)}}}function E(t,e){t.appendChild(e)}function tt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function st(t){const e=L("style");return ft(tt(t),e),e.sheet}function ft(t,e){return E(t.head||t,e),e.sheet}function g(t,e,l){t.insertBefore(e,l||null)}function p(t){t.parentNode&&t.parentNode.removeChild(t)}function de(t,e){for(let l=0;l<t.length;l+=1)t[l]&&t[l].d(e)}function L(t){return document.createElement(t)}function O(t){return document.createTextNode(t)}function R(){return O(" ")}function N(){return O("")}function $e(t,e,l,n){return t.addEventListener(e,l,n),()=>t.removeEventListener(e,l,n)}function re(t,e,l){l==null?t.removeAttribute(e):t.getAttribute(e)!==l&&t.setAttribute(e,l)}const ut=["width","height"];function at(t,e){const l=Object.getOwnPropertyDescriptors(t.__proto__);for(const n in e)e[n]==null?t.removeAttribute(n):n==="style"?t.style.cssText=e[n]:n==="__value"?t.value=t[n]=e[n]:l[n]&&l[n].set&&ut.indexOf(n)===-1?t[n]=e[n]:re(t,n,e[n])}function _t(t,e){Object.keys(e).forEach(l=>{dt(t,l,e[l])})}function dt(t,e,l){e in t?t[e]=typeof t[e]=="boolean"&&l===""?!0:l:re(t,e,l)}function be(t){return/-/.test(t)?_t:at}function wn(t){let e;return{p(...l){e=l,e.forEach(n=>t.push(n))},r(){e.forEach(l=>t.splice(t.indexOf(l),1))}}}function mt(t){return Array.from(t.childNodes)}function me(t,e){e=""+e,t.data!==e&&(t.data=e)}function ye(t,e,l){t.classList[l?"add":"remove"](e)}function pt(t,e,{bubbles:l=!1,cancelable:n=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,l,n,e),r}function ke(t,e){return new t(e)}const te=new Map;let ne=0;function ht(t){let e=5381,l=t.length;for(;l--;)e=(e<<5)-e^t.charCodeAt(l);return e>>>0}function gt(t,e){const l={stylesheet:st(e),rules:{}};return te.set(t,l),l}function we(t,e,l,n,r,o,c,i=0){const s=16.666/n;let f=`{
`;for(let v=0;v<=1;v+=s){const b=e+(l-e)*o(v);f+=v*100+`%{${c(b,1-b)}}
`}const _=f+`100% {${c(l,1-l)}}
}`,u=`__svelte_${ht(_)}_${i}`,d=tt(t),{stylesheet:a,rules:$}=te.get(d)||gt(d,t);$[u]||($[u]=!0,a.insertRule(`@keyframes ${u} ${_}`,a.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${u} ${n}ms linear ${r}ms 1 both`,ne+=1,u}function $t(t,e){const l=(t.style.animation||"").split(", "),n=l.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),r=l.length-n.length;r&&(t.style.animation=n.join(", "),ne-=r,ne||bt())}function bt(){_e(()=>{ne||(te.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&p(e)}),te.clear())})}let J;function j(t){J=t}function yt(){if(!J)throw new Error("Function called outside component initialization");return J}function kt(t,e){const l=t.$$.callbacks[e.type];l&&l.slice().forEach(n=>n.call(this,e))}const K=[],ve=[];let Z=[];const Ee=[],wt=Promise.resolve();let fe=!1;function vt(){fe||(fe=!0,wt.then(pe))}function Q(t){Z.push(t)}const oe=new Set;let W=0;function pe(){if(W!==0)return;const t=J;do{try{for(;W<K.length;){const e=K[W];W++,j(e),Et(e.$$)}}catch(e){throw K.length=0,W=0,e}for(j(null),K.length=0,W=0;ve.length;)ve.pop()();for(let e=0;e<Z.length;e+=1){const l=Z[e];oe.has(l)||(oe.add(l),l())}Z.length=0}while(K.length);for(;Ee.length;)Ee.pop()();fe=!1,oe.clear(),j(t)}function Et(t){if(t.fragment!==null){t.update(),q(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Q)}}function Ot(t){const e=[],l=[];Z.forEach(n=>t.indexOf(n)===-1?e.push(n):l.push(n)),l.forEach(n=>n()),Z=e}let G;function Nt(){return G||(G=Promise.resolve(),G.then(()=>{G=null})),G}function ce(t,e,l){t.dispatchEvent(pt(`${e?"intro":"outro"}${l}`))}const ee=new Set;let D;function F(){D={r:0,c:[],p:D}}function I(){D.r||q(D.c),D=D.p}function m(t,e){t&&t.i&&(ee.delete(t),t.i(e))}function h(t,e,l,n){if(t&&t.o){if(ee.has(t))return;ee.add(t),D.c.push(()=>{ee.delete(t),n&&(l&&t.d(1),n())}),t.o(e)}else n&&n()}const St={duration:0};function Oe(t,e,l,n){const r={direction:"both"};let o=e(t,l,r),c=n?0:1,i=null,s=null,f=null;function _(){f&&$t(t,f)}function u(a,$){const y=a.b-c;return $*=Math.abs(y),{a:c,b:a.b,d:y,duration:$,start:a.start,end:a.start+$,group:a.group}}function d(a){const{delay:$=0,duration:y=300,easing:v=rt,tick:b=w,css:H}=o||St,V={start:ct()+$,b:a};a||(V.group=D,D.r+=1),i||s?s=V:(H&&(_(),f=we(t,c,a,y,$,v,H)),a&&b(0,1),i=u(V,y),Q(()=>ce(t,a,"start")),it(U=>{if(s&&U>s.start&&(i=u(s,y),s=null,ce(t,i.b,"start"),H&&(_(),f=we(t,c,i.b,i.duration,0,v,o.css))),i){if(U>=i.end)b(c=i.b,1-c),ce(t,i.b,"end"),s||(i.b?_():--i.group.r||q(i.group.c)),i=null;else if(U>=i.start){const X=U-i.start;c=i.a+i.d*v(X/i.duration),b(c,1-c)}}return!!(i||s)}))}return{run(a){ae(o)?Nt().then(()=>{o=o(r),d(a)}):d(a)},end(){_(),i=s=null}}}function Pt(t,e){const l=e.token={};function n(r,o,c,i){if(e.token!==l)return;e.resolved=i;let s=e.ctx;c!==void 0&&(s=s.slice(),s[c]=i);const f=r&&(e.current=r)(s);let _=!1;e.block&&(e.blocks?e.blocks.forEach((u,d)=>{d!==o&&u&&(F(),h(u,1,1,()=>{e.blocks[d]===u&&(e.blocks[d]=null)}),I())}):e.block.d(1),f.c(),m(f,1),f.m(e.mount(),e.anchor),_=!0),e.block=f,e.blocks&&(e.blocks[o]=f),_&&pe()}if(lt(t)){const r=yt();if(t.then(o=>{j(r),n(e.then,1,e.value,o),j(null)},o=>{if(j(r),n(e.catch,2,e.error,o),j(null),!e.hasCatch)throw o}),e.current!==e.pending)return n(e.pending,0),!0}else{if(e.current!==e.then)return n(e.then,1,e.value,t),!0;e.resolved=t}}function Lt(t,e,l){const n=e.slice(),{resolved:r}=t;t.current===t.then&&(n[t.value]=r),t.current===t.catch&&(n[t.error]=r),t.block.p(n,l)}function Ct(t,e){h(t,1,1,()=>{e.delete(t.key)})}function Mt(t,e,l,n,r,o,c,i,s,f,_,u){let d=t.length,a=o.length,$=d;const y={};for(;$--;)y[t[$].key]=$;const v=[],b=new Map,H=new Map,V=[];for($=a;$--;){const k=u(r,o,$),M=l(k);let A=c.get(M);A?n&&V.push(()=>A.p(k,e)):(A=f(M,k),A.c()),b.set(M,v[$]=A),M in y&&H.set(M,Math.abs($-y[M]))}const U=new Set,X=new Set;function le(k){m(k,1),k.m(i,_),c.set(k.key,k),_=k.first,a--}for(;d&&a;){const k=v[a-1],M=t[d-1],A=k.key,Y=M.key;k===M?(_=k.first,d--,a--):b.has(Y)?!c.has(A)||U.has(A)?le(k):X.has(Y)?d--:H.get(A)>H.get(Y)?(X.add(A),le(k)):(U.add(Y),d--):(s(M,c),d--)}for(;d--;){const k=t[d];b.has(k.key)||s(k,c)}for(;a;)le(v[a-1]);return q(V),v}function At(t,e){const l={},n={},r={$$scope:1};let o=t.length;for(;o--;){const c=t[o],i=e[o];if(i){for(const s in c)s in i||(n[s]=1);for(const s in i)r[s]||(l[s]=i[s],r[s]=1);t[o]=i}else for(const s in c)r[s]=1}for(const c in n)c in l||(l[c]=void 0);return l}function C(t){t&&t.c()}function S(t,e,l,n){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,l),n||Q(()=>{const c=t.$$.on_mount.map(xe).filter(ae);t.$$.on_destroy?t.$$.on_destroy.push(...c):q(c),t.$$.on_mount=[]}),o.forEach(Q)}function P(t,e){const l=t.$$;l.fragment!==null&&(Ot(l.after_update),q(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function Rt(t,e){t.$$.dirty[0]===-1&&(K.push(t),vt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function B(t,e,l,n,r,o,c,i=[-1]){const s=J;j(t);const f=t.$$={fragment:null,ctx:[],props:o,update:w,not_equal:r,bound:ge(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:ge(),dirty:i,skip_bound:!1,root:e.target||s.$$.root};c&&c(f.root);let _=!1;if(f.ctx=l?l(t,e.props||{},(u,d,...a)=>{const $=a.length?a[0]:d;return f.ctx&&r(f.ctx[u],f.ctx[u]=$)&&(!f.skip_bound&&f.bound[u]&&f.bound[u]($),_&&Rt(t,u)),d}):[],f.update(),_=!0,q(f.before_update),f.fragment=n?n(f.ctx):!1,e.target){if(e.hydrate){const u=mt(e.target);f.fragment&&f.fragment.l(u),u.forEach(p)}else f.fragment&&f.fragment.c();e.intro&&m(t.$$.fragment),S(t,e.target,e.anchor,e.customElement),pe()}j(s)}class z{$destroy(){P(this,1),this.$destroy=w}$on(e,l){if(!ae(l))return w;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(l),()=>{const r=n.indexOf(l);r!==-1&&n.splice(r,1)}}$set(e){this.$$set&&!ot(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function jt(t){let e,l,n,r,o;const c=t[1].default,i=Ze(c,t,t[0],null);return{c(){e=L("div"),l=L("h2"),l.textContent="Error",n=R(),r=L("p"),i&&i.c(),re(e,"class","error svelte-fepqhh")},m(s,f){g(s,e,f),E(e,l),E(e,n),E(e,r),i&&i.m(r,null),o=!0},p(s,[f]){i&&i.p&&(!o||f&1)&&Qe(i,c,s,s[0],o?Je(c,s[0],f,null):Xe(s[0]),null)},i(s){o||(m(i,s),o=!0)},o(s){h(i,s),o=!1},d(s){s&&p(e),i&&i.d(s)}}}function Dt(t,e,l){let{$$slots:n={},$$scope:r}=e;return t.$$set=o=>{"$$scope"in o&&l(0,r=o.$$scope)},[r,n]}class he extends z{constructor(e){super(),B(this,e,Dt,jt,T,{})}}const Tt=Object.freeze(Object.defineProperty({__proto__:null,default:he},Symbol.toStringTag,{value:"Module"}));function Ft(t){const e=t-1;return e*e*e+1}function Ne(t,{delay:e=0,duration:l=400,easing:n=Ft,axis:r="y"}={}){const o=getComputedStyle(t),c=+o.opacity,i=r==="y"?"height":"width",s=parseFloat(o[i]),f=r==="y"?["top","bottom"]:["left","right"],_=f.map(b=>`${b[0].toUpperCase()}${b.slice(1)}`),u=parseFloat(o[`padding${_[0]}`]),d=parseFloat(o[`padding${_[1]}`]),a=parseFloat(o[`margin${_[0]}`]),$=parseFloat(o[`margin${_[1]}`]),y=parseFloat(o[`border${_[0]}Width`]),v=parseFloat(o[`border${_[1]}Width`]);return{delay:e,duration:l,easing:n,css:b=>`overflow: hidden;opacity: ${Math.min(b*20,1)*c};${i}: ${b*s}px;padding-${f[0]}: ${b*u}px;padding-${f[1]}: ${b*d}px;margin-${f[0]}: ${b*a}px;margin-${f[1]}: ${b*$}px;border-${f[0]}-width: ${b*y}px;border-${f[1]}-width: ${b*v}px;`}}const ue=(t,e)=>{let l="";const n=t.pop().split(e);return n[1]&&(l=n[1],delete n[1]),[...t,l,n.join("")]};function Se(t,e,l){const n=t.slice();n[10]=e[l],n[14]=l;const r=n[0]+(n[10].key||"i"+n[14]);n[11]=r;const o=+(localStorage.getItem(n[2](n[11]))||"0");return n[12]=o,n}const It=t=>({piece:t&2}),Pe=t=>({piece:t[10].body});function Le(t){let e=t[0],l,n=t[0]&&ie(t);return{c(){n&&n.c(),l=N()},m(r,o){n&&n.m(r,o),g(r,l,o)},p(r,o){r[0]?e?T(e,r[0])?(n.d(1),n=ie(r),e=r[0],n.c(),n.m(l.parentNode,l)):n.p(r,o):(n=ie(r),e=r[0],n.c(),n.m(l.parentNode,l)):e&&(n.d(1),n=null,e=r[0])},d(r){r&&p(l),n&&n.d(r)}}}function Ce(t){let e,l=t[10].index+"",n,r;return{c(){e=L("sup"),n=O(l),r=R()},m(o,c){g(o,e,c),E(e,n),g(o,r,c)},p(o,c){c&2&&l!==(l=o[10].index+"")&&me(n,l)},d(o){o&&p(e),o&&p(r)}}}function ie(t){let e,l=t[10].title+"",n,r,o,c,i=t[10].index&&Ce(t),s=[{"data-id":r=t[11]}],f={};for(let u=0;u<s.length;u+=1)f=Ke(f,s[u]);function _(...u){return t[8](t[12],t[11],...u)}return{c(){e=L(t[0]),i&&i.c(),n=O(l),be(t[0])(e,f),ye(e,"collapsed",t[12])},m(u,d){g(u,e,d),i&&i.m(e,null),E(e,n),o||(c=[$e(e,"click",_),$e(e,"keydown",t[7])],o=!0)},p(u,d){t=u,t[10].index?i?i.p(t,d):(i=Ce(t),i.c(),i.m(e,n)):i&&(i.d(1),i=null),d&2&&l!==(l=t[10].title+"")&&me(n,l),be(t[0])(e,f=At(s,[d&3&&r!==(r=t[11])&&{"data-id":r}])),ye(e,"collapsed",t[12])},d(u){u&&p(e),i&&i.d(),o=!1,q(c)}}}function Me(t){let e,l,n,r;const o=t[6].default,c=Ze(o,t,t[5],Pe);return{c(){e=L("section"),c&&c.c(),l=R()},m(i,s){g(i,e,s),c&&c.m(e,null),E(e,l),r=!0},p(i,s){c&&c.p&&(!r||s&34)&&Qe(c,o,i,i[5],r?Je(o,i[5],s,It):Xe(i[5]),Pe)},i(i){r||(m(c,i),Q(()=>{r&&(n||(n=Oe(e,Ne,{duration:100},!0)),n.run(1))}),r=!0)},o(i){h(c,i),n||(n=Oe(e,Ne,{duration:100},!1)),n.run(0),r=!1},d(i){i&&p(e),c&&c.d(i),i&&n&&n.end()}}}function Ae(t,e){let l,n,r,o,c=e[10].title&&Le(e),i=e[10].body&&!e[12]&&Me(e);return{key:t,first:null,c(){l=N(),c&&c.c(),n=R(),i&&i.c(),r=N(),this.first=l},m(s,f){g(s,l,f),c&&c.m(s,f),g(s,n,f),i&&i.m(s,f),g(s,r,f),o=!0},p(s,f){e=s,e[10].title?c?c.p(e,f):(c=Le(e),c.c(),c.m(n.parentNode,n)):c&&(c.d(1),c=null),e[10].body&&!e[12]?i?(i.p(e,f),f&3&&m(i,1)):(i=Me(e),i.c(),m(i,1),i.m(r.parentNode,r)):i&&(F(),h(i,1,1,()=>{i=null}),I())},i(s){o||(m(i),o=!0)},o(s){h(i),o=!1},d(s){s&&p(l),c&&c.d(s),s&&p(n),i&&i.d(s),s&&p(r)}}}function qt(t){let e=[],l=new Map,n,r,o=t[1];const c=i=>i[10].key||i[14];for(let i=0;i<o.length;i+=1){let s=Se(t,o,i),f=c(s);l.set(f,e[i]=Ae(f,s))}return{c(){for(let i=0;i<e.length;i+=1)e[i].c();n=N()},m(i,s){for(let f=0;f<e.length;f+=1)e[f]&&e[f].m(i,s);g(i,n,s),r=!0},p(i,[s]){s&39&&(o=i[1],F(),e=Mt(e,s,c,1,i,o,l,n.parentNode,Ct,Ae,n,Se),I())},i(i){if(!r){for(let s=0;s<o.length;s+=1)m(e[s]);r=!0}},o(i){for(let s=0;s<e.length;s+=1)h(e[s]);r=!1},d(i){for(let s=0;s<e.length;s+=1)e[s].d(i);i&&p(n)}}}function Bt(t,e,l){let{$$slots:n={},$$scope:r}=e,{regExp:o}=e,{h:c}=e,{content:i}=e;const s=i.split(o);let f=[{body:(s==null?void 0:s[0])||""}];for(let a=1;a<s.length-1;a=a+2){const[$,y,v]=ue(ue([s[a]],/\s*{key:(\d+)}\s*/),/\s*{i:(\d+)}\s*/);f.push({key:$,index:y,title:v,body:(s==null?void 0:s[a+1])||""})}const _=a=>"collapsed:"+a;function u(a){kt.call(this,t,a)}const d=(a,$,y)=>{a?(y.currentTarget.classList.remove("collapsed"),localStorage.removeItem(_($))):(y.currentTarget.classList.add("collapsed"),localStorage.setItem(_($),"1")),l(1,f=[...f])};return t.$$set=a=>{"regExp"in a&&l(3,o=a.regExp),"h"in a&&l(0,c=a.h),"content"in a&&l(4,i=a.content),"$$scope"in a&&l(5,r=a.$$scope)},[c,f,_,o,i,r,n,u,d]}class nt extends z{constructor(e){super(),B(this,e,Bt,qt,T,{regExp:3,h:0,content:4})}}const zt="modulepreload",Ht=function(t){return"/"+t},Re={},se=function(e,l,n){if(!l||l.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(l.map(o=>{if(o=Ht(o),o in Re)return;Re[o]=!0;const c=o.endsWith(".css"),i=c?'[rel="stylesheet"]':"";if(!!n)for(let _=r.length-1;_>=0;_--){const u=r[_];if(u.href===o&&(!c||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${i}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":zt,c||(f.as="script",f.crossOrigin=""),f.href=o,document.head.appendChild(f),c)return new Promise((_,u)=>{f.addEventListener("load",_),f.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())},Ut=(t,e)=>{const l=t[e];return l?typeof l=="function"?l():Promise.resolve(l):new Promise((n,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e)))})};function je(t,e,l){const n=t.slice();return n[2]=e[l],n[4]=l,n}function Vt(t){const e=t.slice(),l=e[2].match(/\[(.*?)\]\((.*?)\)/);return e[5]=l[1],e[6]=l[2],e}function Wt(t){let e=t[2]+"",l;return{c(){l=O(e)},m(n,r){g(n,l,r)},p:w,d(n){n&&p(l)}}}function De(t){let e,l=t[5]+"",n;return{c(){e=L("a"),n=O(l),re(e,"href",t[6])},m(r,o){g(r,e,o),E(e,n)},p:w,d(r){r&&p(e)}}}function Te(t){let e;function l(c,i){if(c[4]%2!==0)return De;if(c[2])return Wt}function n(c,i){return i===De?Vt(c):c}let r=l(t),o=r&&r(n(t,r));return{c(){o&&o.c(),e=N()},m(c,i){o&&o.m(c,i),g(c,e,i)},p(c,i){o&&o.p(n(c,r),i)},d(c){o&&o.d(c),c&&p(e)}}}function Kt(t){let e,l=t[0],n=[];for(let r=0;r<l.length;r+=1)n[r]=Te(je(t,l,r));return{c(){for(let r=0;r<n.length;r+=1)n[r].c();e=N()},m(r,o){for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(r,o);g(r,e,o)},p(r,[o]){if(o&1){l=r[0];let c;for(c=0;c<l.length;c+=1){const i=je(r,l,c);n[c]?n[c].p(i,o):(n[c]=Te(i),n[c].c(),n[c].m(e.parentNode,e))}for(;c<n.length;c+=1)n[c].d(1);n.length=l.length}},i:w,o:w,d(r){de(n,r),r&&p(e)}}}function xt(t,e,l){let{content:n}=e;const r=n.split(/(\[.*?\]\(.*?\))/g);return t.$$set=o=>{"content"in o&&l(1,n=o.content)},[r,n]}class Zt extends z{constructor(e){super(),B(this,e,xt,Kt,T,{content:1})}}function Fe(t,e,l){const n=t.slice();return n[2]=e[l],n[4]=l,n}function Ie(t){const e=t.slice(),l=ue([e[2]],/\s*{i:(\d+)}\s*/);return e[5]=l[0],e[6]=l[1],e}function Gt(t){let e,l,n,r=t[4]+1+"",o,c,i,s,f,_=t[5]&&Jt(t);return i=new Zt({props:{content:t[6]}}),{c(){e=L("p"),_&&_.c(),l=R(),n=L("sup"),o=O(r),c=R(),C(i.$$.fragment),s=R()},m(u,d){g(u,e,d),_&&_.m(e,null),E(e,l),E(e,n),E(n,o),E(e,c),S(i,e,null),E(e,s),f=!0},p(u,d){u[5]&&_.p(u,d)},i(u){f||(m(i.$$.fragment,u),f=!0)},o(u){h(i.$$.fragment,u),f=!1},d(u){u&&p(e),_&&_.d(),P(i)}}}function Jt(t){let e,l=t[5]+"",n;return{c(){e=L("sup"),n=O(l)},m(r,o){g(r,e,o),E(e,n)},p:w,d(r){r&&p(e)}}}function qe(t){let e,l,n=t[2]&&Gt(Ie(t));return{c(){n&&n.c(),e=N()},m(r,o){n&&n.m(r,o),g(r,e,o),l=!0},p(r,o){r[2]&&n.p(Ie(r),o)},i(r){l||(m(n),l=!0)},o(r){h(n),l=!1},d(r){n&&n.d(r),r&&p(e)}}}function Qt(t){let e,l,n=t[0],r=[];for(let c=0;c<n.length;c+=1)r[c]=qe(Fe(t,n,c));const o=c=>h(r[c],1,1,()=>{r[c]=null});return{c(){for(let c=0;c<r.length;c+=1)r[c].c();e=N()},m(c,i){for(let s=0;s<r.length;s+=1)r[s]&&r[s].m(c,i);g(c,e,i),l=!0},p(c,[i]){if(i&1){n=c[0];let s;for(s=0;s<n.length;s+=1){const f=Fe(c,n,s);r[s]?(r[s].p(f,i),m(r[s],1)):(r[s]=qe(f),r[s].c(),m(r[s],1),r[s].m(e.parentNode,e))}for(F(),s=n.length;s<r.length;s+=1)o(s);I()}},i(c){if(!l){for(let i=0;i<n.length;i+=1)m(r[i]);l=!0}},o(c){r=r.filter(Boolean);for(let i=0;i<r.length;i+=1)h(r[i]);l=!1},d(c){de(r,c),c&&p(e)}}}function Xt(t,e,l){let{content:n}=e;const r=n.split(/(?:^#.*)*\s*\n+\s*/gms);return t.$$set=o=>{"content"in o&&l(1,n=o.content)},[r,n]}class Yt extends z{constructor(e){super(),B(this,e,Xt,Qt,T,{content:1})}}function Be(t,e,l){const n=t.slice();return n[2]=e[l],n[4]=l,n}function en(t){let e,l;return e=new Yt({props:{content:t[2]}}),{c(){C(e.$$.fragment)},m(n,r){S(e,n,r),l=!0},p:w,i(n){l||(m(e.$$.fragment,n),l=!0)},o(n){h(e.$$.fragment,n),l=!1},d(n){P(e,n)}}}function tn(t){let e,l,n={ctx:t,current:null,token:null,hasCatch:!0,pending:on,then:ln,catch:nn,value:5,blocks:[,,,]};return Pt(Ut(Object.assign({"../Account.svelte":()=>se(()=>import("./Account-7695ea59.js"),[]),"../DarkMode.svelte":()=>se(()=>import("./DarkMode-f20e587c.js"),[]),"../Err.svelte":()=>se(()=>Promise.resolve().then(()=>Tt),void 0)}),`../${t[2]}.svelte`),n),{c(){e=N(),n.block.c()},m(r,o){g(r,e,o),n.block.m(r,n.anchor=o),n.mount=()=>e.parentNode,n.anchor=e,l=!0},p(r,o){t=r,Lt(n,t,o)},i(r){l||(m(n.block),l=!0)},o(r){for(let o=0;o<3;o+=1){const c=n.blocks[o];h(c)}l=!1},d(r){r&&p(e),n.block.d(r),n.token=null,n=null}}}function nn(t){let e,l,n;return e=new he({props:{$$slots:{default:[rn]},$$scope:{ctx:t}}}),{c(){C(e.$$.fragment),l=R()},m(r,o){S(e,r,o),g(r,l,o),n=!0},p(r,o){const c={};o&64&&(c.$$scope={dirty:o,ctx:r}),e.$set(c)},i(r){n||(m(e.$$.fragment,r),n=!0)},o(r){h(e.$$.fragment,r),n=!1},d(r){P(e,r),r&&p(l)}}}function rn(t){let e,l=t[2]+"",n,r;return{c(){e=O("Component "),n=O(l),r=O(" not found")},m(o,c){g(o,e,c),g(o,n,c),g(o,r,c)},p:w,d(o){o&&p(e),o&&p(n),o&&p(r)}}}function ln(t){let e,l,n;var r=t[5].default;function o(c){return{}}return r&&(e=ke(r,o())),{c(){e&&C(e.$$.fragment),l=R()},m(c,i){e&&S(e,c,i),g(c,l,i),n=!0},p(c,i){if(r!==(r=c[5].default)){if(e){F();const s=e;h(s.$$.fragment,1,0,()=>{P(s,1)}),I()}r?(e=ke(r,o()),C(e.$$.fragment),m(e.$$.fragment,1),S(e,l.parentNode,l)):e=null}},i(c){n||(e&&m(e.$$.fragment,c),n=!0)},o(c){e&&h(e.$$.fragment,c),n=!1},d(c){e&&P(e,c),c&&p(l)}}}function on(t){return{c:w,m:w,p:w,i:w,o:w,d:w}}function ze(t){let e,l,n,r;const o=[tn,en],c=[];function i(s,f){return s[4]%2!==0?0:1}return e=i(t),l=c[e]=o[e](t),{c(){l.c(),n=N()},m(s,f){c[e].m(s,f),g(s,n,f),r=!0},p(s,f){l.p(s,f)},i(s){r||(m(l),r=!0)},o(s){h(l),r=!1},d(s){c[e].d(s),s&&p(n)}}}function cn(t){let e,l,n=t[0],r=[];for(let c=0;c<n.length;c+=1)r[c]=ze(Be(t,n,c));const o=c=>h(r[c],1,1,()=>{r[c]=null});return{c(){for(let c=0;c<r.length;c+=1)r[c].c();e=N()},m(c,i){for(let s=0;s<r.length;s+=1)r[s]&&r[s].m(c,i);g(c,e,i),l=!0},p(c,[i]){if(i&1){n=c[0];let s;for(s=0;s<n.length;s+=1){const f=Be(c,n,s);r[s]?(r[s].p(f,i),m(r[s],1)):(r[s]=ze(f),r[s].c(),m(r[s],1),r[s].m(e.parentNode,e))}for(F(),s=n.length;s<r.length;s+=1)o(s);I()}},i(c){if(!l){for(let i=0;i<n.length;i+=1)m(r[i]);l=!0}},o(c){r=r.filter(Boolean);for(let i=0;i<r.length;i+=1)h(r[i]);l=!1},d(c){de(r,c),c&&p(e)}}}function sn(t,e,l){let{content:n}=e;const r=n.split(/<([A-Z][^>\s]*)\s*\/>/g);return t.$$set=o=>{"content"in o&&l(1,n=o.content)},[r,n]}class fn extends z{constructor(e){super(),B(this,e,sn,cn,T,{content:1})}}function un(t){let e,l;return e=new fn({props:{content:t[1]}}),{c(){C(e.$$.fragment)},m(n,r){S(e,n,r),l=!0},p(n,r){const o={};r&2&&(o.content=n[1]),e.$set(o)},i(n){l||(m(e.$$.fragment,n),l=!0)},o(n){h(e.$$.fragment,n),l=!1},d(n){P(e,n)}}}function an(t){let e,l;return e=new nt({props:{h:"h2",regExp:new RegExp(/^##(?!#)\s*(.*)\n+/gm),content:t[0],$$slots:{default:[un,({piece:n})=>({1:n}),({piece:n})=>n?2:0]},$$scope:{ctx:t}}}),{c(){C(e.$$.fragment)},m(n,r){S(e,n,r),l=!0},p(n,[r]){const o={};r&1&&(o.content=n[0]),r&6&&(o.$$scope={dirty:r,ctx:n}),e.$set(o)},i(n){l||(m(e.$$.fragment,n),l=!0)},o(n){h(e.$$.fragment,n),l=!1},d(n){P(e,n)}}}function _n(t,e,l){let{content:n}=e;return t.$$set=r=>{"content"in r&&l(0,n=r.content)},[n]}class dn extends z{constructor(e){super(),B(this,e,_n,an,T,{content:0})}}function mn(t){let e,l;return e=new dn({props:{content:t[1]}}),{c(){C(e.$$.fragment)},m(n,r){S(e,n,r),l=!0},p(n,r){const o={};r&2&&(o.content=n[1]),e.$set(o)},i(n){l||(m(e.$$.fragment,n),l=!0)},o(n){h(e.$$.fragment,n),l=!1},d(n){P(e,n)}}}function pn(t){let e,l;return e=new nt({props:{h:"h1",regExp:new RegExp(/^#(?!#)\s*(.*)\n+/gm),content:t[0],$$slots:{default:[mn,({piece:n})=>({1:n}),({piece:n})=>n?2:0]},$$scope:{ctx:t}}}),{c(){C(e.$$.fragment)},m(n,r){S(e,n,r),l=!0},p(n,[r]){const o={};r&1&&(o.content=n[0]),r&6&&(o.$$scope={dirty:r,ctx:n}),e.$set(o)},i(n){l||(m(e.$$.fragment,n),l=!0)},o(n){h(e.$$.fragment,n),l=!1},d(n){P(e,n)}}}function hn(t,e,l){let{content:n}=e;return t.$$set=r=>{"content"in r&&l(0,n=r.content)},[n]}class gn extends z{constructor(e){super(),B(this,e,hn,pn,T,{content:0})}}function He(t){let e,l;return e=new gn({props:{content:t[0]}}),{c(){C(e.$$.fragment)},m(n,r){S(e,n,r),l=!0},p(n,r){const o={};r&1&&(o.content=n[0]),e.$set(o)},i(n){l||(m(e.$$.fragment,n),l=!0)},o(n){h(e.$$.fragment,n),l=!1},d(n){P(e,n)}}}function Ue(t){let e,l;return e=new he({props:{$$slots:{default:[$n]},$$scope:{ctx:t}}}),{c(){C(e.$$.fragment)},m(n,r){S(e,n,r),l=!0},p(n,r){const o={};r&6&&(o.$$scope={dirty:r,ctx:n}),e.$set(o)},i(n){l||(m(e.$$.fragment,n),l=!0)},o(n){h(e.$$.fragment,n),l=!1},d(n){P(e,n)}}}function $n(t){let e;return{c(){e=O(t[1])},m(l,n){g(l,e,n)},p(l,n){n&2&&me(e,l[1])},d(l){l&&p(e)}}}function bn(t){let e,l,n,r=t[0]&&He(t),o=t[1]&&Ue(t);return{c(){r&&r.c(),e=R(),o&&o.c(),l=N()},m(c,i){r&&r.m(c,i),g(c,e,i),o&&o.m(c,i),g(c,l,i),n=!0},p(c,[i]){c[0]?r?(r.p(c,i),i&1&&m(r,1)):(r=He(c),r.c(),m(r,1),r.m(e.parentNode,e)):r&&(F(),h(r,1,1,()=>{r=null}),I()),c[1]?o?(o.p(c,i),i&2&&m(o,1)):(o=Ue(c),o.c(),m(o,1),o.m(l.parentNode,l)):o&&(F(),h(o,1,1,()=>{o=null}),I())},i(c){n||(m(r),m(o),n=!0)},o(c){h(r),h(o),n=!1},d(c){r&&r.d(c),c&&p(e),o&&o.d(c),c&&p(l)}}}function yn(t,e,l){let n,r;return fetch("https://gist.githubusercontent.com/troylsite/2a2c912a9d9b4221dae69b7129dadad1/raw/4526a25b3fabf4e2006e1e4c3704dbb6b28f7077/troyl.md?t="+Date.now()).then(o=>{if(o.status!==200)throw new Error(""+o.status+" "+o.statusText);return o.text()}).then(o=>{l(0,n=o)}).catch(o=>l(1,r=o.message)),[n,r]}class kn extends z{constructor(e){super(),B(this,e,yn,bn,T,{})}}new kn({target:document.querySelector("main")});export{z as S,g as a,wn as b,R as c,p as d,L as e,re as f,E as g,B as i,$e as l,w as n,q as r,T as s,O as t};
