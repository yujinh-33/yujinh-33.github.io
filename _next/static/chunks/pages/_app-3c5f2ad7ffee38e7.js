(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(3807)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,r=n(7273).Z,l=o(n(7294)),u=n(1003),a=n(7795),f=n(4465),c=n(2692),i=n(8245),s=n(9246),d=n(227),p=n(3468);let h=new Set;function v(e,t,n,o){if(u.isLocalURL(t)){if(!o.bypassPrefetchedCheck){let r=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+r;if(h.has(l))return;h.add(l)}Promise.resolve(e.prefetch(t,n,o)).catch(e=>{})}}function y(e){return"string"==typeof e?e:a.formatUrl(e)}let _=l.default.forwardRef(function(e,t){let n,o;let{href:a,as:h,children:_,prefetch:b,passHref:g,replace:j,shallow:x,scroll:m,locale:C,onClick:E,onMouseEnter:M,onTouchStart:P,legacyBehavior:k=!1}=e,O=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=_,k&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let w=!1!==b,L=l.default.useContext(c.RouterContext),T=l.default.useContext(i.AppRouterContext),I=null!=L?L:T,S=!L,{href:N,as:R}=l.default.useMemo(()=>{if(!L){let e=y(a);return{href:e,as:h?y(h):e}}let[t,n]=u.resolveHref(L,a,!0);return{href:t,as:h?u.resolveHref(L,h):n||t}},[L,a,h]),D=l.default.useRef(N),K=l.default.useRef(R);k&&(o=l.default.Children.only(n));let U=k?o&&"object"==typeof o&&o.ref:t,[H,A,B]=s.useIntersection({rootMargin:"200px"}),X=l.default.useCallback(e=>{(K.current!==R||D.current!==N)&&(B(),K.current=R,D.current=N),H(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[R,U,N,B,H]);l.default.useEffect(()=>{I&&A&&w&&v(I,N,R,{locale:C})},[R,N,A,C,w,null==L?void 0:L.locale,I]);let Z={ref:X,onClick(e){k||"function"!=typeof E||E(e),k&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,n,o,r,a,f,c,i,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:a,locale:c,scroll:f}):t[r?"replace":"push"](o||n,{forceOptimisticNavigation:!s})};i?l.default.startTransition(h):h()}(e,I,N,R,j,x,m,C,S,w)},onMouseEnter(e){k||"function"!=typeof M||M(e),k&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),I&&(w||!S)&&v(I,N,R,{locale:C,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){k||"function"!=typeof P||P(e),k&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),I&&(w||!S)&&v(I,N,R,{locale:C,priority:!0,bypassPrefetchedCheck:!0})}};if(!k||g||"a"===o.type&&!("href"in o.props)){let q=void 0!==C?C:null==L?void 0:L.locale,z=(null==L?void 0:L.isLocaleDomain)&&d.getDomainLocale(R,q,null==L?void 0:L.locales,null==L?void 0:L.domainLocales);Z.href=z||p.addBasePath(f.addLocale(R,q,null==L?void 0:L.defaultLocale))}return k?l.default.cloneElement(o,Z):l.default.createElement("a",Object.assign({},O,Z),n)});t.default=_,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:f}=e,c=f||!l,[i,s]=o.useState(!1),[d,p]=o.useState(null);o.useEffect(()=>{if(l){if(!c&&!i&&d&&d.tagName){let e=function(e,t,n){let{id:o,observer:r,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},o=a.find(e=>e.root===n.root&&e.margin===n.margin);if(o&&(t=u.get(o)))return t;let r=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:r},a.push(n),u.set(n,t),t}(n);return l.set(e,t),r.observe(e),function(){if(l.delete(e),r.unobserve(e),0===l.size){r.disconnect(),u.delete(o);let t=a.findIndex(e=>e.root===o.root&&e.margin===o.margin);t>-1&&a.splice(t,1)}}}(d,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!i){let o=r.requestIdleCallback(()=>s(!0));return()=>r.cancelIdleCallback(o)}},[d,c,n,t,i]);let h=o.useCallback(()=>{s(!1)},[]);return[p,i,h]};var o=n(7294),r=n(4686);let l="function"==typeof IntersectionObserver,u=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3807:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var o=n(5893),r=n(7294),l=n(1664),u=n.n(l),a=n(6023),f=n.n(a);let c=()=>(0,o.jsx)("h1",{className:f().logo,children:"Iyunyu' next blog"}),i=()=>(0,o.jsxs)("header",{children:[(0,o.jsx)(u(),{href:"/",children:(0,o.jsx)(c,{})}),(0,o.jsx)("nav",{children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(u(),{href:"/posts",children:"Posts"})}),(0,o.jsx)("li",{children:(0,o.jsx)(u(),{href:"/contect",children:"Contect"})})]})})]}),s=e=>(0,o.jsxs)(r.Fragment,{children:[(0,o.jsx)(i,{}),(0,o.jsx)("main",{children:e.children})]});function d(e){let{Component:t,pageProps:n}=e;return(0,o.jsx)(s,{children:(0,o.jsx)(t,{...n})})}n(7595),n(454)},6023:function(e){e.exports={logo:"logo_logo__soPE7"}},7595:function(){},454:function(){},1664:function(e,t,n){e.exports=n(1551)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);