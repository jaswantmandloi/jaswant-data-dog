(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8287)}])},9749:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(l){c=!0,i=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}t.default=function(e){var t=e.src,n=e.sizes,r=e.unoptimized,c=void 0!==r&&r,l=e.priority,u=void 0!==l&&l,h=e.loading,p=e.lazyRoot,j=void 0===p?null:p,k=e.lazyBoundary,E=void 0===k?"200px":k,_=e.className,N=e.quality,R=e.width,P=e.height,q=e.style,L=e.objectFit,C=e.objectPosition,M=e.onLoadingComplete,W=e.loader,D=void 0===W?O:W,U=e.placeholder,T=void 0===U?"empty":U,B=e.blurDataURL,F=b(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),H=s.useContext(m.ImageConfigContext),G=s.useMemo((function(){var e=v||H||f.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return y({},e,{allSizes:t,deviceSizes:n})}),[H]),V=F,J=n?"responsive":"intrinsic";"layout"in V&&(V.layout&&(J=V.layout),delete V.layout);var X="";if(function(e){return"object"===typeof e&&(x(e)||function(e){return void 0!==e.src}(e))}(t)){var $=x(t)?t.default:t;if(!$.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify($)));if(B=B||$.blurDataURL,X=$.src,(!J||"fill"!==J)&&(P=P||$.height,R=R||$.width,!$.height||!$.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify($)))}t="string"===typeof t?t:X;var Q=z(R),K=z(P),Y=z(N),Z=!u&&("lazy"===h||"undefined"===typeof h);(t.startsWith("data:")||t.startsWith("blob:"))&&(c=!0,Z=!1);w.has(t)&&(Z=!1);var ee,te=o(g.useIntersection({rootRef:j,rootMargin:E,disabled:!Z}),2),ne=te[0],re=te[1],ie=!Z||re,oe={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ae={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ce=!1,le={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:L,objectPosition:C};0;0;var ue=Object.assign({},q,"raw"===J?{aspectRatio:"".concat(Q," / ").concat(K)}:le),se="blur"===T?{filter:"blur(20px)",backgroundSize:L||"cover",backgroundImage:'url("'.concat(B,'")'),backgroundPosition:C||"0% 0%"}:{};if("fill"===J)oe.display="block",oe.position="absolute",oe.top=0,oe.left=0,oe.bottom=0,oe.right=0;else if("undefined"!==typeof Q&&"undefined"!==typeof K){var de=K/Q,fe=isNaN(de)?"100%":"".concat(100*de,"%");"responsive"===J?(oe.display="block",oe.position="relative",ce=!0,ae.paddingTop=fe):"intrinsic"===J?(oe.display="inline-block",oe.position="relative",oe.maxWidth="100%",ce=!0,ae.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(Q,"%27%20height=%27").concat(K,"%27/%3e")):"fixed"===J&&(oe.display="inline-block",oe.position="relative",oe.width=Q,oe.height=K)}else 0;var ge={src:S,srcSet:void 0,sizes:void 0};ie&&(ge=A({config:G,src:t,unoptimized:c,layout:J,width:Q,quality:Y,sizes:n,loader:D}));var me=t;0;var he,pe="imagesrcset",ye="imagesizes";pe="imageSrcSet",ye="imageSizes";var be=(i(he={},pe,ge.srcSet),i(he,ye,ge.sizes),he),ve=s.default.useLayoutEffect,we=s.useRef(M),Se=s.useRef(null);s.useEffect((function(){we.current=M}),[M]),ve((function(){ne(Se.current)}),[ne]),s.useEffect((function(){!function(e,t,n,r,i){var o=function(){var n=e.current;n&&(n.src!==S&&("decode"in n?n.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.current&&(w.add(t),"blur"===r&&(n.style.filter="",n.style.backgroundSize="",n.style.backgroundImage="",n.style.backgroundPosition=""),i.current)){var o=n.naturalWidth,a=n.naturalHeight;i.current({naturalWidth:o,naturalHeight:a})}})))};e.current&&(e.current.complete?o():e.current.onload=o)}(Se,me,0,T,we)}),[me,J,T,ie]);var je=y({isLazy:Z,imgAttributes:ge,heightInt:K,widthInt:Q,qualityInt:Y,layout:J,className:_,imgStyle:ue,blurStyle:se,imgRef:Se,loading:h,config:G,unoptimized:c,placeholder:T,loader:D,srcString:me},V);return s.default.createElement(s.default.Fragment,null,"raw"===J?s.default.createElement(I,Object.assign({},je)):s.default.createElement("span",{style:oe},ce?s.default.createElement("span",{style:ae},ee?s.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,s.default.createElement(I,Object.assign({},je))),u?s.default.createElement(d.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ge.src+ge.srcSet+ge.sizes,rel:"preload",as:"image",href:ge.srcSet?void 0:ge.src},be))):null)};var l,u,s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),d=(l=n(3121))&&l.__esModule?l:{default:l},f=n(139),g=n(9246),m=n(8730),h=(n(670),n(2700));function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){p(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}function b(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}u={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",experimentalLayoutRaw:!1};var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",experimentalLayoutRaw:!1},w=new Set,S=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var j=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(h.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t.path).concat(k(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(k(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(k(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function x(e){return void 0!==e.default}function A(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.layout,o=e.width,c=e.quality,l=e.sizes,u=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var s=function(e,t,n,r){var i=e.deviceSizes,o=e.allSizes;if(r&&("fill"===n||"responsive"===n||"raw"===n)){for(var c,l=/(^|\s)(1?\d?\d)vw/g,u=[];c=l.exec(r);c)u.push(parseInt(c[2]));if(u.length){var s,d=.01*(s=Math).min.apply(s,a(u));return{widths:o.filter((function(e){return e>=i[0]*d})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return o.find((function(t){return t>=e}))||o[o.length-1]})))),kind:"x"}}(t,o,i,l),d=s.widths,f=s.kind,g=d.length-1;return{sizes:l||"w"!==f?l:"100vw",srcSet:d.map((function(e,r){return"".concat(u({config:t,src:n,quality:c,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:u({config:t,src:n,quality:c,width:d[g]})}}function z(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function O(e){var t,n=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",r=j.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}var I=function(e){var t=e.imgAttributes,n=e.heightInt,r=e.widthInt,i=e.qualityInt,o=e.layout,a=e.className,c=e.imgStyle,l=e.blurStyle,u=e.isLazy,d=e.imgRef,f=e.placeholder,g=e.loading,m=e.sizes,h=e.srcString,p=e.config,v=e.unoptimized,w=e.loader,S=b(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","imgRef","placeholder","loading","sizes","srcString","config","unoptimized","loader"]);return s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},S,t,"raw"!==o||m?{}:{height:n,width:r},{decoding:"async","data-nimg":o,className:a,ref:d,style:y({},c,l)})),(u||"blur"===f)&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},S,A({config:p,src:h,unoptimized:v,layout:o,width:r,quality:i,sizes:m,loader:w}),"raw"!==o||m?{}:{height:n,width:r},{decoding:"async","data-nimg":o,style:c,className:a,loading:g||"lazy"}))))};function k(e){return"/"===e[0]?e.slice(1):e}},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(l){c=!0,i=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!c,s=o.useRef(),d=i(o.useState(!1),2),f=d[0],g=d[1],m=i(o.useState(t?t.current:null),2),h=m[0],p=m[1],y=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=u.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=l.get(r):(t=l.get(n),u.push(n));if(t)return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(n,t={id:n,observer:o,elements:i}),t}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),l.delete(i);var t=u.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&u.splice(t,1)}}}(e,(function(e){return e&&g(e)}),{root:h,rootMargin:n}))}),[r,h,n,f]);return o.useEffect((function(){if(!c&&!f){var e=a.requestIdleCallback((function(){return g(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),o.useEffect((function(){t&&p(t.current)}),[t]),[y,f]};var o=n(7294),a=n(4686),c="undefined"!==typeof IntersectionObserver;var l=new Map,u=[]},8287:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(5893),i=n(9008),o=n(5675),a={};function c(){return(0,r.jsxs)("div",{className:a.container,children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"Create Next App"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("main",{className:a.main,children:[(0,r.jsxs)("h1",{className:a.title,children:["Welcome to ",(0,r.jsx)("a",{href:"https://nextjs.org",children:"Next.js!"})]}),(0,r.jsxs)("p",{className:a.description,children:["Get started by editing"," ",(0,r.jsx)("code",{className:a.code,children:"pages/index.js"})]})]}),(0,r.jsx)("footer",{className:a.footer,children:(0,r.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,r.jsx)("span",{className:a.logo,children:(0,r.jsx)(o.default,{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})})]})})]})}},9008:function(e,t,n){e.exports=n(3121)},5675:function(e,t,n){e.exports=n(9749)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);