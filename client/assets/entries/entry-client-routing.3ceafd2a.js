import{j as V,_ as x,s as dt,k as O,m as l,n as E,p as z,q as I,g as j,r as Ce,d as v,t as G,b as u,u as F,v as H,w as h,x as gt,o as g,y as T,z as ht,A as Oe,B as ne,C as re,D as ge,a as pt,l as L,E as Fe,F as Ee,G as mt,H as yt,c as bt,I as Ae,J as xe,K as _t,L as vt,M as Rt,N as oe,i as M,h as St,O as Pt}from"../chunks/chunk-9b1c70a0.js";function C(e){return typeof e!="object"||e===null?!1:Object.getPrototypeOf(e)===null?!0:e.constructor.name==="Object"}function he(e){return"["+e.map(t=>"'"+t+"'").join(", ")+"]"}function q(e,t){const n=Object.getOwnPropertyDescriptor(e,t);return!!n&&!("value"in n)&&!!n.get}function wt(e){return typeof e=="object"&&e!==null&&"then"in e&&V(e.then)}const Ct=["Page"],Ot=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ct},Symbol.toStringTag,{value:"Module"})),Ft=["Page"],Et=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ft},Symbol.toStringTag,{value:"Module"})),At=["Page"],xt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:At},Symbol.toStringTag,{value:"Module"})),Tt=["render","passToClient"],kt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Tt},Symbol.toStringTag,{value:"Module"})),It=["render","clientRouting","hydrationCanBeAborted","prefetchStaticAssets"],jt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:It},Symbol.toStringTag,{value:"Module"})),ie={},Te={},$t={},K={},Nt=[],ke={},Ht=!0,Bt=[],Lt={onBeforeRoute:null},Wt=Object.assign({"/pages/about/index.page.jsx":()=>x(()=>import("./pages_about_index.page.b47cc6b3.js"),["assets/entries/pages_about_index.page.b47cc6b3.js","assets/chunks/chunk-3abbb91c.js","assets/static/index.page.f1aef519.css"]),"/pages/index/index.page.jsx":()=>x(()=>import("./pages_index_index.page.ea0ecf25.js"),["assets/entries/pages_index_index.page.ea0ecf25.js","assets/chunks/chunk-3abbb91c.js","assets/chunks/chunk-83a2ea5a.js","assets/chunks/chunk-39b5b250.js"]),"/renderer/_error.page.jsx":()=>x(()=>import("./renderer_error.page.bc33854f.js"),["assets/entries/renderer_error.page.bc33854f.js","assets/chunks/chunk-3abbb91c.js","assets/chunks/chunk-fffdc91c.js","assets/chunks/chunk-39b5b250.js"])}),Dt={...Wt};ie[".page"]=Dt;const Ut=Object.assign({"/pages/about/index.page.jsx":Ot,"/pages/index/index.page.jsx":Et,"/renderer/_error.page.jsx":xt}),Vt={...Ut};K[".page"]=Vt;const zt=Object.assign({"/renderer/_default.page.server.jsx":kt}),Gt={...zt};K[".page.server"]=Gt;const Kt=Object.assign({}),Yt={...Kt};Te[".page.route"]=Yt;const Mt=Object.assign({"/renderer/_default.page.client.jsx":()=>x(()=>import("./renderer_default.page.client.7940fa2c.js"),["assets/entries/renderer_default.page.client.7940fa2c.js","assets/chunks/chunk-3abbb91c.js","assets/chunks/chunk-83a2ea5a.js","assets/chunks/chunk-39b5b250.js","assets/chunks/chunk-fffdc91c.js","assets/entries/renderer_default.page.server.extractAssets.334717de.js","assets/static/default.page.server.d4835ae9.css"])}),qt={...Mt};ie[".page.client"]=qt;const Jt=Object.assign({"/renderer/_default.page.client.jsx":jt}),Xt={...Jt};K[".page.client"]=Xt;const Qt=Object.assign({"/renderer/_default.page.server.jsx":()=>x(()=>import("./renderer_default.page.server.extractAssets.334717de.js"),["assets/entries/renderer_default.page.server.extractAssets.334717de.js","assets/static/default.page.server.d4835ae9.css"])}),Zt={...Qt};ke[".page.server"]=Zt;const en=Object.freeze(Object.defineProperty({__proto__:null,isGeneratedFile:Ht,neverLoaded:ke,pageConfigGlobal:Lt,pageConfigs:Bt,pageFilesEager:Te,pageFilesExportNamesEager:K,pageFilesExportNamesLazy:$t,pageFilesLazy:ie,pageFilesList:Nt},Symbol.toStringTag,{value:"Module"}));dt(en);function tn(){var e,t,n,r;const o=!!(!((t=(e=window.__REACT_DEVTOOLS_GLOBAL_HOOK__)===null||e===void 0?void 0:e.renderers)===null||t===void 0)&&t.size),i=!!(!((r=(n=window.__REACT_DEVTOOLS_GLOBAL_HOOK__)===null||n===void 0?void 0:n.rendererInterfaces)===null||r===void 0)&&r.size),s=!!window.__vite_plugin_react_preamble_installed__;return o||i||s}function Ie(e,t){const n=Object.keys,r=typeof e;return e&&t&&r==="object"&&r===typeof t?n(e).length===n(t).length&&n(e).every(i=>Ie(e[i],t[i])):e===t}function nn(e,t){return O(e)&&O(t)&&e.constructor===t.constructor&&Ie({...e,stack:null},{...t,stack:null})&&t.message===t.message}function W(e){window.location.href=e}function rn(e){return new Promise(t=>setTimeout(t,e))}function on(e,t){let n=!1;return()=>{n||(n=!0,setTimeout(()=>{n=!1,e()},t))}}l(z());E();const pe=I("navigationState.ts",{}),sn=j(),je={markNavigationChange(){pe.navigationChanged=!0},get noNavigationChangeYet(){return!pe.navigationChanged&&this.isFirstUrl(j())},isFirstUrl(e){return e===sn}};async function an(e,t){const r=Ce(e,t).filter(i=>i.fileType===".page.server");return await Promise.all(r.map(async i=>{i.exportNames||(l(i.loadExportNames,t),await i.loadExportNames())})),{hasOnBeforeRenderServerSideOnlyHook:r.some(({exportNames:i})=>(l(i),i.includes("onBeforeRender")))}}function ln(e,t){if(!C(e))return!1;for(const n of Object.keys(e))if(!t.includes(n))return!1;return!0}function un(e){return typeof e=="object"&&e!==null&&Object.values(e).every(t=>typeof t=="string")}z()&&E();function $e(e,t=!0){l(e.urlOriginal),"urlPathname"in e&&l(q(e,"urlPathname")),Object.defineProperty(e,"urlPathname",{get:He,enumerable:t,configurable:!0}),"url"in e&&l(q(e,"url")),Object.defineProperty(e,"url",{get:cn,enumerable:!1,configurable:!0}),"urlParsed"in e&&l(q(e,"urlParsed")),Object.defineProperty(e,"urlParsed",{get:fn,enumerable:t,configurable:!0})}function Ne(e){var t;let n=e._urlHandler;n||(n=s=>s);const r=(t=e._urlRewrite)!==null&&t!==void 0?t:e.urlOriginal;l(r&&typeof r=="string");const o=n(r),i=e._baseServer;return l(i.startsWith("/")),G(o,i)}function He(){const{pathname:e}=Ne(this),t=e;return l(t.startsWith("/")),t}function cn(){return v(!1,"`pageContext.url` is outdated. Use `pageContext.urlPathname`, `pageContext.urlParsed`, or `pageContext.urlOriginal` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)",{onlyOnce:!0,showStackTrace:!0}),He.call(this)}function fn(){const e=Ne(this),{origin:t,pathname:n,pathnameOriginal:r,search:o,searchAll:i,searchOriginal:s,hash:a,hashOriginal:c}=e,f=p=>{v(z(),`pageContext.urlParsed.${p} isn't available on the server-side (HTTP requests don't include the URL hash by design)`,{onlyOnce:!0,showStackTrace:!0})},d={origin:t,pathname:n,pathnameOriginal:r,search:o,searchAll:i,searchOriginal:s,get hash(){return f("hash"),a},get hashOriginal(){return f("hashOriginal"),c},get hashString(){return v(!1,"pageContext.urlParsed.hashString has been renamed to pageContext.urlParsed.hashOriginal",{onlyOnce:!0,showStackTrace:!0}),f("hashString"),c},get searchString(){return v(!1,"pageContext.urlParsed.searchString has been renamed to pageContext.urlParsed.searchOriginal",{onlyOnce:!0,showStackTrace:!0}),s}};return me(d,"hashString"),me(d,"searchString"),d}function me(e,t){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(e,t,{...n,enumerable:!1})}function dn(e){l(typeof e.urlOriginal=="string"),l(typeof e.urlPathname=="string"),l(C(e.urlParsed)),l(e.urlPathname===e.urlParsed.pathname)}const Be="@",Z=":";function gn(e,t){u(e.startsWith("/")||e==="*",(()=>{t?t=t+" invalid":t="Invalid";const n=[`'${e}'`,e!==""?null:"(empty string)"].filter(Boolean).join(" ");return`${t} Route String ${n}: Route Strings should start with a leading slash '/' (or be '*')`})())}function ee(e,t){gn(e),l(t.startsWith("/"));const n=e.split("/"),r=t.split("/"),o={};hn(e),e==="*"&&(e="/*");for(let i=0;i<Math.max(n.length,r.length);i++){const s=n[i],a=r[i];if(s==="*")return o["*"]=r.slice(Math.max(1,i)).join("/"),{routeParams:o};if(s&&B(s)){if(v(!s.startsWith(Z),`Outdated Route String \`${e}\`, use \`${e.split(Z).join(Be)}\` instead.`,{onlyOnce:!0}),!a)return null;o[s.slice(1)]=a}else if((s||"")!==(a||""))return null}return{routeParams:o}}function hn(e){const t=e.split("*").length-1;u(t<=1,`Invalid Route String '${e}': Route Strings are not allowed to contain more than one glob character '*'`),u(t===0||t===1&&e.endsWith("*"),`Invalid Route String '${e}': make sure your Route String ends with the glob character '*'`)}function A(e){const t=e.split("/").filter(s=>s!==""&&s!=="*");let n=0;for(const s of t){if(B(s))break;n++}const r=t.filter(s=>!B(s)).length,o=t.filter(s=>B(s)).length,i=e.endsWith("*");return{numberOfParameterSegments:o,numberOfStaticSegmentsBeginning:n,numberOfStaticSegements:r,isCatchAll:i}}function B(e){return e.startsWith(Be)||e.startsWith(Z)}function ye(e){const n=ee(e,e);return l(n),Object.keys(n.routeParams).length===0}function pn(e){e.sort(mn).sort(F(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence<0)).sort(F(t=>t.routeType==="STRING"&&ye(t.routeString)===!1)).sort(F(t=>t.routeType==="FUNCTION"&&!t.precedence)).sort(F(t=>t.routeType==="STRING"&&ye(t.routeString)===!0)).sort(F(t=>t.routeType==="FILESYSTEM")).sort(F(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence>0))}function mn(e,t){var n,r;{const o=(n=e.precedence)!==null&&n!==void 0?n:0,i=(r=t.precedence)!==null&&r!==void 0?r:0;if(o!==i)return o>i?-1:1}if(!t.routeString||!e.routeString)return 0;{const i=H(s=>A(s).numberOfStaticSegmentsBeginning)(e.routeString,t.routeString);if(i!==0)return i}{const i=H(s=>A(s).numberOfStaticSegements)(e.routeString,t.routeString);if(i!==0)return i}{const i=H(s=>A(s).numberOfParameterSegments)(e.routeString,t.routeString);if(i!==0)return i}{if(A(t.routeString).isCatchAll)return-1;if(A(e.routeString).isCatchAll)return 1}return 0}async function yn(e,t,n){dn(t);let r=e(t);if(Le(r,`The Route Function ${n}`),r=await r,r===!1)return null;if(r===!0&&(r={}),u(C(r),`The Route Function ${n} should return a boolean or a plain JavaScript object, instead it returns \`${h(r,"constructor")?r.constructor:r}\`.`),"match"in r){const{match:s}=r;if(u(typeof s=="boolean",`The \`match\` value returned by the Route Function ${n} should be a boolean.`),!s)return null}let o=null;"precedence"in r&&(o=r.precedence,u(typeof o=="number",`The \`precedence\` value returned by the Route Function ${n} should be a number.`)),We(r,`The \`routeParams\` object returned by the Route Function ${n} should`);const i=r.routeParams||{};return u(!("pageContext"in r),"Providing `pageContext` in Route Functions is prohibited, see https://vite-plugin-ssr.com/route-function#cannot-provide-pagecontext"),l(C(i)),Object.keys(r).forEach(s=>{u(s==="match"||s==="routeParams"||s==="precedence",`The Route Function ${n} returned an object with an unknown key \`{ ${s} }\`. Allowed keys: ['match', 'routeParams', 'precedence'].`)}),{precedence:o,routeParams:i}}function Le(e,t){v(!wt(e),`${t} returned a promise, but asynchronous routing is deprecated and will be removed in the next major release, see https://vite-plugin-ssr.com/route-function#async`,{onlyOnce:!0})}function We(e,t){l(t.endsWith(" should")),h(e,"routeParams")&&(l(t.endsWith(" should")),u(C(e.routeParams),`${t} be a plain JavaScript object.`),u(un(e.routeParams),`${t} only hold string values.`))}function De(e,{hookName:t,hookFilePath:n}){if(e==null)return;l(!t.endsWith(")"));const r=`The \`pageContext\` object provided by the ${t}() hook defined by ${n}`;u(O(e),`${r} should be an object instead of \`${typeof e}\``),u(!("_objectCreatedByVitePluginSsr"in e),`${r} shouldn't be the whole \`pageContext\` object, see https://vite-plugin-ssr.com/pageContext-manipulation#do-not-return-entire-pagecontext`),v(!("_pageId"in e),`${r} sets \`pageContext._pageId\` which means that vite-plugin-ssr's routing is overriden. This is an experimental feature: make sure to contact a vite-plugin-ssr maintainer before using this.`,{onlyOnce:!0}),u(!("is404"in e),`${r} sets \`pageContext.is404\` which is forbidden, use \`throw render()\` instead, see https://vite-plugin-ssr.com/render`)}async function bn(e,t){let n=e.onBeforeRoute(t);Le(n,`The onBeforeRoute() hook ${e.hookFilePath}`),n=await n;const r=`The onBeforeRoute() hook defined by ${e.hookFilePath}`;if(u(n==null||ln(n,["pageContext"])&&h(n,"pageContext"),`${r} should return \`null\`, \`undefined\`, or a plain JavaScript object \`{ pageContext: { /* ... */ } }\`.`),n==null)return null;if(u(h(n,"pageContext","object"),`${r} returned \`{ pageContext }\` but pageContext should be a plain JavaScript object.`),h(n.pageContext,"_pageId")&&!h(n.pageContext,"_pageId","null")){const i=`${r} returned \`{ pageContext: { _pageId } }\` but _pageId should be`;u(h(n.pageContext,"_pageId","string"),`${i} a string or null`),u(t._allPageIds.includes(n.pageContext._pageId),`${i} one of following values: \`[${t._allPageIds.map(s=>`'${s}'`).join(", ")}]\`.`)}h(n.pageContext,"routeParams")&&We(n.pageContext,`${r} returned \`{ pageContext: { routeParams } }\` but routeParams should`);const o={};return h(n.pageContext,"url")&&(v(!1,`${r} returned \`{ pageContext: { url } }\` but \`pageContext.url\` has been renamed to \`pageContext.urlOriginal\`. Return \`{ pageContext: { urlOriginal } }\` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)`,{onlyOnce:!0}),n.pageContext.urlOriginal=n.pageContext.url,delete n.pageContext.url),h(n.pageContext,"urlOriginal")&&(gt(n.pageContext.urlOriginal,`${r} returned \`{ pageContext: { urlOriginal } }\` but urlOriginal`),g(o,{_urlOriginalPristine:t.urlOriginal})),De(n.pageContext,{hookFilePath:e.hookFilePath,hookName:"onBeforeRoute"}),g(o,n.pageContext),o}var N;function be(...e){var t,n;N||(N=(n=(t=globalThis).__brillout_debug_createDebugger)===null||n===void 0?void 0:n.call(t,"vps:routing")),N&&N(...e)}z()&&E();async function Ue(e){$e(e),be("Pages routes:",e._pageRoutes);const t={};if(e._onBeforeRouteHook){const s=await bn(e._onBeforeRouteHook,e);if(s){if(g(t,s),h(t,"_pageId","string")||h(t,"_pageId","null"))return h(t,"routeParams")?l(h(t,"routeParams","object")):g(t,{routeParams:{}}),g(t,{_routingProvidedByOnBeforeRouteHook:!0,_routeMatches:"CUSTOM_ROUTE"}),{pageContextAddendum:t};g(e,t)}}g(t,{_routingProvidedByOnBeforeRouteHook:!1});const n=e._allPageIds;l(n.length>=0),u(e._pageFilesAll.length>0||e._pageConfigs.length>0,"No *.page.js file found. You must create at least one *.page.js file."),u(n.length>0,"You must create at least one *.page.js file that isn't _default.page.*");const{urlPathname:r}=e;l(r.startsWith("/"));const o=[];await Promise.all(e._pageRoutes.map(async s=>{const{pageId:a,routeType:c}=s;if(s.routeType==="FILESYSTEM"){const{routeString:f}=s,d=ee(f,r);if(d){const{routeParams:p}=d;o.push({pageId:a,routeParams:p,routeString:f,routeType:c})}return}if(s.routeType==="STRING"){const{routeString:f}=s,d=ee(f,r);if(d){const{routeParams:p}=d;l(c==="STRING"),o.push({pageId:a,routeString:f,routeParams:p,routeType:c})}return}if(s.routeType==="FUNCTION"){const{routeFunction:f,routeDefinedAt:d}=s,p=await yn(f,e,d);if(p){const{routeParams:R,precedence:P}=p;o.push({pageId:a,precedence:P,routeParams:R,routeType:c})}return}l(!1)})),pn(o);const i=o[0];if(be(`Route matches for URL \`${r}\` (in precedence order):`,o),g(t,{_routeMatches:o}),!i)return g(t,{_pageId:null,routeParams:{}}),{pageContextAddendum:t};{const{routeParams:s}=i;l(C(s)),g(t,{_pageId:i.pageId,routeParams:i.routeParams})}return{pageContextAddendum:t}}const _e=["urlPathname","urlParsed"],_n=["Page","pageExports","exports"];function Ve(e){[..._n,..._e].forEach(n=>{n in e&&(_e.includes(n)?(l(n.startsWith("url")),v(!1,`\`pageContext.${n}\` is already available in the browser when using Client Routing; including \`${n}\` in \`passToClient\` has no effect.`,{onlyOnce:!0})):v(!1,`\`pageContext.${n}\` is a built-in that cannot be overriden; including \`${n}\` in \`passToClient\` has no effect.`,{onlyOnce:!0}),delete e[n])})}const vn="/";function Rn(e,t,n){const{pathnameOriginal:r,searchOriginal:o,hashOriginal:i}=G(e,vn);e.startsWith("/")&&l(e===`${r}${o||""}${i||""}`,{url:e});const s=r.endsWith("/");let a;return n&&r!=="/"?(s?a=T(r,0,-1):a=r,l(!a.endsWith("/"),{url:e}),l(a!=="")):a=r+(s?"":"/")+"index",l(a),a=a+t,`${a}${o||""}${i||""}`}const Sn=".pageContext.json",Pn=!1;function wn(e){return Rn(e,Sn,Pn)}function D(e,t,n){const r=e.configElements[t];if(!r||Cn(e,t))return null;const{configValue:o,configDefinedAt:i}=r;return n&&u(typeof o===n,`${i} has an invalid type \`${typeof o}\`: is should be a ${n} instead`),o}function Cn(e,t){const n=e.configElements[t];if(!n)return!0;const{codeFilePath:r,configValue:o}=n;return r?!1:o==null}function ze(e,t){const n=t.find(r=>r.pageId===e);return l(t.length>0),l(n),n}function On(e,t,n){l(!n.endsWith(" "));const r=[],o=Object.keys(e);for(const i of o)t.includes(i)||r.push(i);u(r.length===0,[n,"returned an object with following unknown keys:",he(r)+".","Only following keys are allowed:",he(t)+"."].join(" "))}function Fn(e,t){if(e==null)return;const n=`The onBeforeRender() hook defined by ${t}`;u(C(e),`${n} should return a plain JavaScript object or \`undefined\`/\`null\``),On(e,["pageContext"],n),e.pageContext&&De(e.pageContext,{hookName:"onBeforeRender",hookFilePath:t})}function En(e,t){const r=t.filter(({filesystemRoot:i})=>e.startsWith(i)).sort(H(({filesystemRoot:i})=>i.length))[0];let o;if(r){const{filesystemRoot:i,urlRoot:s}=r,a={pageId:e,filesystemRoot:i,urlRoot:s};l(s.startsWith("/")&&e.startsWith("/")&&i.startsWith("/"),a),l(e.startsWith(i),a),i!=="/"?(l(!i.endsWith("/"),a),o=T(e,i.length,0)):o=e,l(o.startsWith("/"),a),o=s+(s.endsWith("/")?"":"/")+T(o,1,0)}else o=e;return l(o.startsWith("/")),o=o.split("/").filter(i=>i!=="pages"&&i!=="src"&&i!=="index").join("/"),l(!o.includes(".page.")),l(!o.endsWith(".")),o.endsWith("/index")&&(o=T(o,0,-6)),o===""&&(o="/"),l(o.startsWith("/")),l(!o.endsWith("/")||o==="/"),o}async function An(e,t,n,r){await Promise.all(e.filter(a=>a.fileType===".page.route").map(a=>{var c;return(c=a.loadFile)===null||c===void 0?void 0:c.call(a)}));const{onBeforeRouteHook:o,filesystemRoots:i}=Tn(e,t,n);return{pageRoutes:xn(i,e,t,r),onBeforeRouteHook:o}}function xn(e,t,n,r){const o=[];let i=[...r];if(n.length>0){l(e===null);const s=!0;n.filter(a=>!a.isErrorPage).forEach(a=>{const c=a.pageId;i=jn(i,c);let f=null;{const d=a.configElements.route;if(d){l("configValue"in d);const p=d.configValue,R=d.configDefinedAt;if(l(R),typeof p=="string")f={pageId:c,comesFromV1PageConfig:s,routeString:p,routeDefinedAt:R,routeType:"STRING"};else{l(V(p));{const P=a.configElements.iKnowThePerformanceRisksOfAsyncRouteFunctions;if(P){const w=P.configValue;l(typeof w=="boolean",`${P.configDefinedAt} should be a boolean`)}}f={pageId:c,comesFromV1PageConfig:s,routeFunction:p,routeDefinedAt:R,routeType:"FUNCTION"}}}}if(!f){const{routeFilesystem:d,routeFilesystemDefinedBy:p}=a;l(d),l(d.startsWith("/")),l(p),f={pageId:c,routeFilesystemDefinedBy:p,comesFromV1PageConfig:s,routeString:d,routeDefinedAt:null,routeType:"FILESYSTEM"}}l(f),o.push(f)})}if(n.length===0){l(e);const s=!1;i.filter(a=>!ht(a)).forEach(a=>{const c=Ge(a,t);if(!c||!("default"in c.fileExports)){const f=En(a,e);l(f.startsWith("/")),l(!f.endsWith("/")||f==="/"),o.push({pageId:a,comesFromV1PageConfig:s,routeString:f,routeDefinedAt:null,routeFilesystemDefinedBy:`${a}.page.*`,routeType:"FILESYSTEM"})}else{const{filePath:f,fileExports:d}=c;if(l(d.default),h(d,"default","string")){const p=d.default;u(p.startsWith("/"),`A Route String should start with a leading slash '/' but ${f} has \`export default '${p}'\`. Make sure to \`export default '/${p}'\` instead.`),o.push({pageId:a,comesFromV1PageConfig:s,routeString:p,routeDefinedAt:f,routeType:"STRING"});return}if(h(d,"default","function")){const p=d.default;{const R="iKnowThePerformanceRisksOfAsyncRouteFunctions";R in d&&u(h(d,R,"boolean"),`The export \`${R}\` of ${f} should be a boolean.`)}o.push({pageId:a,comesFromV1PageConfig:s,routeFunction:p,routeDefinedAt:f,routeType:"FUNCTION"});return}u(!1,`The default export of ${f} should be a string or a function.`)}})}return o}function Tn(e,t,n){if(t.length>0){if(n.onBeforeRoute){const i=n.onBeforeRoute.configValue;if(i){const s=n.onBeforeRoute.codeFilePath;return l(s),u(V(i),`The hook onBeforeRoute() defined by ${s} should be a function.`),{onBeforeRouteHook:{hookFilePath:s,onBeforeRoute:i},filesystemRoots:null}}}return{onBeforeRouteHook:null,filesystemRoots:null}}let r=null;const o=[];return e.filter(i=>i.fileType===".page.route"&&i.isDefaultPageFile).forEach(({filePath:i,fileExports:s})=>{if(l(s),"onBeforeRoute"in s){u(h(s,"onBeforeRoute","function"),`\`export { onBeforeRoute }\` of ${i} should be a function.`);const{onBeforeRoute:a}=s;r={hookFilePath:`${i} > \`export { onBeforeRoute }\``,onBeforeRoute:a}}"filesystemRoutingRoot"in s&&(u(h(s,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${i} should be a string.`),u(h(s,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${i} is \`'${s.filesystemRoutingRoot}'\` but it should start with a leading slash \`/\`.`),o.push({filesystemRoot:In(i),urlRoot:s.filesystemRoutingRoot}))}),{onBeforeRouteHook:r,filesystemRoots:o}}function Ge(e,t){return t.find(n=>n.pageId===e&&n.fileType===".page.route")}function kn(e,t){const n=Ge(e,t);if(!n)return null;const{filePath:r,fileExports:o}=n;l(o);const i=o.guard;if(!i)return null;const s=r;return u(V(i),`guard() defined by ${s} should be a function`),{hookFn:i,hookFilePath:s}}function In(e){l(e.startsWith("/")),l(!e.endsWith("/"));const t=e.split("/"),n=T(t,0,-1).join("/")||"/";return l(n.startsWith("/")),l(!n.endsWith("/")||n==="/"),n}function jn(e,t){const{length:n}=e;return e=e.filter(r=>r!==t),l(e.length===n-1),e}async function $n(e,t){let n;if(e._pageFilesAll.length>0?(l(e._pageConfigs.length===0),n=kn(e._pageId,e._pageFilesAll)):n=Oe(e,"guard"),!n)return;const r=n.hookFn;let o=e;const i=t(e);i&&(o=i);const s=await ne(()=>r(o),"guard",n.hookFilePath);u(s===void 0,`The guard() hook of ${n.hookFilePath} returns a value, but guard() doesn't accept any return value`)}function Nn(e){const t=new Error("AbortRender");return g(t,{_pageContextAbort:e,[Ke]:!0}),t}const Ke="_isAbortError";function J(e){return typeof e=="object"&&e!==null&&Ke in e}function Hn(e){return e._urlRewrite||e._urlRedirect||e._abortStatusCode?(l(h(e,"_abortCall","string")),l(h(e,"_abortCaller","string")),!0):!1}function Bn(e,t,n){var r;if(t)return;const o=(r=n._urlRewrite)!==null&&r!==void 0?r:n.urlOriginal;l(o);const i=e._pageContextAbort._abortCall;re(!1,`${ge.cyan(i)} intercepted while rendering URL ${ge.bold(o)}`,{onlyOnce:!1})}function Ln(e){Wn(e);const t={_urlRewrite:null};return e.forEach(n=>{Object.assign(t,n)}),t}function Wn(e){const t=[];e.forEach(n=>{const r=n._urlRewrite;{const o=t.indexOf(r);if(o!==-1){const i=[...t.slice(o),r].map(s=>`render('${s}')`).join(" => ");u(!1,`Infinite loop of render() calls: ${i}`)}}t.push(r)})}const Ye=I("router/getPageContext.ts",{});async function Dn(e){if(e._isFirstRenderAttempt&&je.isFirstUrl(e.urlOriginal)){l(h(e,"_isFirstRenderAttempt","true"));const t=await Un(e);return ve(t),t}else{l(h(e,"_isFirstRenderAttempt","false"));const t=await zn(e);return ve(t),t}}async function Un(e){const t=pt();Ve(t),g(t,{isHydration:!0,_hasPageContextFromClient:!1}),g(t,await L(e._pageFilesAll,e._pageConfigs,t._pageId));{const n={...e,...t};if(await Yn(n)){const r=await qe(n);g(t,r)}}return t}async function Vn(e){const t=Fe(e._pageFilesAll,e._pageConfigs);if(!t)throw new Error("No error page defined.");const n={isHydration:!1,_pageId:t};return g(n,await Me({...e,...n},!0)),n}async function zn(e){const t={isHydration:!1};return g(t,await Mn(e)),g(t,await Me({...e,...t},!1)),t}async function Me(e,t){let n={};if(g(n,await L(e._pageFilesAll,e._pageConfigs,e._pageId)),!t&&await Gn({...e,...n})){const r=await Xn(e);if(!r._isError)g(n,r);else{const o=Fe(e._pageFilesAll,e._pageConfigs);l(o),n={},g(n,{isHydration:!1,_pageId:o}),g(n,await L(e._pageFilesAll,e._pageConfigs,n._pageId)),l(h(r,"is404","boolean")),l(h(r,"pageProps","object")),l(h(r.pageProps,"is404","boolean")),l(!("serverSideError"in r)),g(n,r)}}else g(n,{_hasPageContextFromServer:!1}),t||await $n({_hasPageContextFromClient:!1,...e,...n},r=>Ee(r,!0));{const r=await qe({...e,...n});g(n,r)}return n}async function qe(e){const t=Oe(e,"onBeforeRender");if(!t)return{_hasPageContextFromClient:!1};const n=t.hookFn,r={_hasPageContextFromClient:!0},o=Ee({...e,...r},!0),i=await ne(()=>n(o),"onBeforeRender",t.hookFilePath);Fn(i,t.hookFilePath);const s=i==null?void 0:i.pageContext;return g(r,s),r}async function Gn(e){return!!Ye.pageContextInitHasClientData||await Kn(e)}function ve(e){e._pageContextInitHasClientData&&(Ye.pageContextInitHasClientData=!0)}async function Kn(e){if(e._pageConfigs.length>0){const t=ze(e._pageId,e._pageConfigs);return D(t,"onBeforeRenderEnv")==="server-only"}else{const{hasOnBeforeRenderServerSideOnlyHook:t}=await an(e._pageFilesAll,e._pageId);return t}}async function Yn(e){if(e._pageConfigs.length>0){const t=ze(e._pageId,e._pageConfigs);return D(t,"onBeforeRenderEnv")==="client-only"}else return!1}async function Mn(e){const n=(await Ue(e)).pageContextAddendum;if(!n._pageId){const r=new Error("No routing match");throw qn(r),r}return l(h(n,"_pageId","string")),n}function qn(e){g(e,{_is404:!0})}function Jn(e){return O(e)&&e._is404===!0}async function Xn(e){var t,n;const r=(n=(t=e._urlRewrite)!==null&&t!==void 0?t:e._urlOriginalPristine)!==null&&n!==void 0?n:e.urlOriginal,o=wn(r),i=await fetch(o);{const c=i.headers.get("content-type"),f="application/json",d=c&&c.includes(f);if(!d&&i.status===404)throw W(e.urlOriginal),Zn();u(d,`Wrong Content-Type for ${o}: it should be ${f} but it's ${c} instead. Make sure to properly use pageContext.httpResponse.headers, see https://vite-plugin-ssr.com/renderPage`)}const s=await i.text(),a=mt(s);if(l(O(a)),"serverSideError"in a)throw yt("`pageContext` could not be fetched from the server as an error occurred on the server; check your server logs.");if(Hn(a))throw Nn(a);return l(h(a,"_pageId","string")),Ve(a),g(a,{_hasPageContextFromServer:!0}),a}function Qn(e){return O(e)&&!!e._alreadyServerSideRouted}function Zn(){const e=new Error("Page doesn't exist");return Object.assign(e,{_alreadyServerSideRouted:!0}),e}function Je(){const e="/";return l(er(e)),e}function er(e){return e.startsWith("/")}const X=I("createPageContext.ts",{});async function Xe(e){X.pageFilesData||(X.pageFilesData=await bt(!0));const{pageFilesAll:t,allPageIds:n,pageConfigs:r,pageConfigGlobal:o}=X.pageFilesData,{pageRoutes:i,onBeforeRouteHook:s}=await An(t,r,o,n),a=Je();l(Ae(a));const c={_objectCreatedByVitePluginSsr:!0,_urlHandler:null,_urlRewrite:null,_baseServer:a,_isProduction:!0,_pageFilesAll:t,_pageConfigs:r,_pageConfigGlobal:o,_allPageIds:n,_pageRoutes:i,_onBeforeRouteHook:s};return g(c,e),$e(c),c}async function Qe(e){const t=await Xe({urlOriginal:e}),n=await Ue(t),r=t._pageFilesAll,o=t._pageConfigs;if(!("pageContextAddendum"in n))return{pageId:null,pageFilesAll:r,pageConfigs:o};const i=n.pageContextAddendum._pageId;return i?{pageId:i,pageFilesAll:r,pageConfigs:o}:{pageId:null,pageFilesAll:r,pageConfigs:o}}function k(e){return e.fileType===".css"?[]:e.exportNames?e.exportNames:(l(e.fileExports,e.filePath),Object.keys(e.fileExports))}function tr({pageFilesClientSide:e,pageFilesServerSide:t,pageId:n}){return{isHtmlOnly:r(),isClientRouting:i()};function r(){return t.some(a=>a.pageId===n&&a.fileType===".page")?(o(),!1):!(!t.some(a=>a.pageId===n&&a.fileType===".page.server")||e.some(a=>a.pageId===n&&a.fileType===".page.client"&&k(a).includes("render")))}function o(){const s=e.some(a=>k(a).includes("render"));u(s,["No client-side `render()` hook found.","See https://vite-plugin-ssr.com/render-modes for more information.",["Loaded client-side page files (none of them `export { render }`):",...e.map((a,c)=>` (${c+1}): ${a.filePath}`)].join(`
`)].join(" "))}function i(){return e.some(a=>k(a).includes("clientRouting"))}}function nr({pageFilesClientSide:e,pageFilesServerSide:t,isHtmlOnly:n,isClientRouting:r}){let o=[];const i=t.filter(a=>!e.includes(a)),s=[];if(s.push(...e.map(a=>({id:a.filePath,onlyAssets:!1,eagerlyImported:!1}))),s.push(...i.map(a=>({id:a.filePath,onlyAssets:!0,eagerlyImported:!1}))),n)o=e.map(a=>a.filePath);else{const a=rr(r);s.push({id:a,onlyAssets:!1,eagerlyImported:!1}),o=[a]}return{clientEntries:o,clientDependencies:s}}function rr(e){return e?"@@vite-plugin-ssr/dist/esm/client/router/entry.js":"@@vite-plugin-ssr/dist/esm/client/entry.js"}function or(e,t){let n=xe(e,t);const r=Ce(e,t),{isHtmlOnly:o,isClientRouting:i}=tr({pageFilesClientSide:n,pageFilesServerSide:r,pageId:t});o&&(n=n.filter(c=>c.isEnv("CLIENT_ONLY")&&!k(c).includes("render")),n=sr(n));const{clientEntries:s,clientDependencies:a}=nr({pageFilesClientSide:n,pageFilesServerSide:r,isHtmlOnly:o,isClientRouting:i});return{isHtmlOnly:o,isClientRouting:i,clientEntries:s,clientDependencies:a,pageFilesClientSide:n,pageFilesServerSide:r}}async function ir(e,t,{sharedPageFilesAlreadyLoaded:n}){const r=xe(e,t);await Promise.all(r.map(async o=>{var i;l(o.isEnv("CLIENT_ONLY")||o.isEnv("CLIENT_AND_SERVER")),!(n&&o.isEnv("CLIENT_AND_SERVER"))&&await((i=o.loadExportNames)===null||i===void 0?void 0:i.call(o))}))}function sr(e){const t=[];for(const n of e)if(t.push(n),k(n).includes("overrideDefaultPages"))break;return t}function ar(e,t,n){var r,o;if(e){const i=(r=D(e,"clientRouting","boolean"))!==null&&r!==void 0?r:!1;return{isClientSideRenderable:(o=D(e,"isClientSideRenderable","boolean"))!==null&&o!==void 0?o:!1,isClientRouting:i}}else{const{isHtmlOnly:i,isClientRouting:s}=or(t,n);return{isClientSideRenderable:!i,isClientRouting:s}}}async function Ze(e){const{pageId:t,pageFilesAll:n,pageConfigs:r}=await Qe(e);if(!t)return!1;await ir(n,t,{sharedPageFilesAlreadyLoaded:!1});const o=_t(r,t),{isClientSideRenderable:i,isClientRouting:s}=ar(o,n,t);return i&&s}function et(e){return!e.startsWith("/")&&!e.startsWith(".")&&!e.startsWith("?")&&e!==""}function tt(e){const t=e.getAttribute("href");return!!(t===null||t===""||et(t)||ur(e)||cr(t)||!fr(t)||!vt(t)||!lr(e))}function lr(e){if(xr()){const n=e.getAttribute("data-vike-link");return n!==null&&n!=="false"}else return!0}function ur(e){const t=e.getAttribute("target"),n=e.getAttribute("rel");return t==="_blank"||t==="_external"||n==="external"||e.hasAttribute("download")}function cr(e){if(e.startsWith("#"))return!0;const t=n=>n.split("#")[0];return!!(e.includes("#")&&t(e)===t(window.location.href))}function fr(e){const t=Je();l(Ae(t));const{hasBaseServer:n}=G(e,t);return n}function dr(e,t){let n=gr(e,t);return n==="viewport"&&!e._isProduction&&(re(!1,"Viewport prefetching is disabled in development",{onlyOnce:!0}),n="hover"),{prefetchStaticAssets:n}}function gr(e,t){{const n=hr(t);if(n!==null)return n}if("prefetchLinks"in e.exports&&u(!1,"`export { prefetchLinks }` is deprecated, use `export { prefetchStaticAssets }` instead."),"prefetchStaticAssets"in e.exports){const{prefetchStaticAssets:n}=e.exports;if(n===!1)return!1;if(n==="hover")return"hover";if(n==="viewport")return"viewport";const r="prefetchStaticAssets value should be false, 'hover', or 'viewport'";u(C(n),r);const o=Object.keys(n);u(o.length===1&&o[0]==="when",r);const{when:i}=n;if(i==="HOVER"||i==="VIEWPORT"){const s=i.toLowerCase();return v(!1,`prefetchStaticAssets value \`{ when: '${i}' }\` is outdated: set prefetchStaticAssets to '${s}' instead`,{onlyOnce:!0}),s}u(!1,r)}return"hover"}function hr(e){const t=e.getAttribute("data-prefetch-static-assets"),n=e.getAttribute("data-prefetch");if(t===null&&n===null)return null;const r="The attribute data-prefetch is outdated, use data-prefetch-static-assets instead.";if(t){if(u(n===null,r),t==="hover"||t==="viewport")return t;if(t==="false")return!1;u(!1,`data-prefetch-static-assets has value "${t}" but it should instead be "false", "hover", or "viewport"`)}if(n){if(l(!t),v(!1,r,{onlyOnce:!0}),n==="true")return"viewport";if(n==="false")return"hover";u(!1,`data-prefetch has value "${n}" but it should instead be "true" or "false"`)}l(!1)}const nt=new Map;function rt(e){const t=it(e);return nt.has(t)}function ot(e){const t=it(e);nt.set(t,!0)}function it(e){return G(e,"/").pathname}E();const Re=new Map;async function Q(e){if(u(Rt(),"prefetch() only works with Client Routing, see https://vite-plugin-ssr.com/prefetch",{showStackTrace:!0}),u(!et(e),`You are trying to prefetch the URL ${e} of another domain which cannot be prefetched`,{showStackTrace:!0}),rt(e))return;ot(e);const{pageId:t,pageFilesAll:n,pageConfigs:r}=await Qe(e);if(t)try{await L(n,r,t)}catch(o){if(oe(o))te(o,!0);else throw o}}function pr(e){ot(e.urlPathname),[...document.getElementsByTagName("A")].forEach(async n=>{if(Re.has(n))return;Re.set(n,!0);const r=n.getAttribute("href");if(tt(n))return;l(r);try{if(!await Ze(r))return}catch{return}if(rt(r))return;const{prefetchStaticAssets:o}=dr(e,n);if(o){if(o==="hover")n.addEventListener("mouseover",()=>Q(r)),n.addEventListener("touchstart",()=>Q(r),{passive:!0});else if(o==="viewport"){const i=new IntersectionObserver(s=>{s.forEach(a=>{a.isIntersecting&&(Q(r),i.disconnect())})});i.observe(n)}}else return})}function st(){let e=window.history.state;e||(e={});let t=!1;"timestamp"in e||(t=!0,e.timestamp=lt()),"scrollPosition"in e||(t=!0,e.scrollPosition=at()),ut(e),t&&ae(e)}function se(){const e=window.history.state||{};return ut(e),e}function at(){return{x:window.scrollX,y:window.scrollY}}function lt(){return new Date().getTime()}function Se(){const e=at(),t=se();ae({...t,scrollPosition:e})}function mr(e,t){if(t)ae(se(),e);else{const n=lt();yr({timestamp:n,scrollPosition:null},e)}}function ut(e){if(l(O(e)),"timestamp"in e){const{timestamp:t}=e;l(typeof t=="number")}if("scrollPosition"in e){const{scrollPosition:t}=e;t!==null&&l(h(t,"x","number")&&h(t,"y","number"))}}function ae(e,t){window.history.replaceState(e,"",t??null)}function yr(e,t){window.history.pushState(e,"",t)}E();const br=I("navigate.ts",{});function _r(e){br.navigate=e}const _=I("useClientRouter.ts",{previousState:U()});Fr();st();function te(e,t){l(oe(e)),_.clientRoutingIsDisabled=!0,t&&console.log(e),re(!1,["Failed to fetch static asset.","This usually happens when a new frontend is deployed.","Falling back to Server Routing.","(The next page navigation will use Server Routing instead of Client Routing.)"].filter(Boolean).join(" "),{onlyOnce:!0})}function vr(){Cr(),Rr((o,{keepScrollPosition:i})=>{r({scrollTarget:i?"preserve-scroll":"scroll-to-top-or-hash",urlOriginal:o,isBackwardNavigation:!1,checkClientSideRenderable:!0})}),Sr((o,i)=>{r({scrollTarget:o,isBackwardNavigation:i})}),_r(async(o,{keepScrollPosition:i=!1,overwriteLastHistoryEntry:s=!1}={})=>{await r({scrollTarget:i?"preserve-scroll":"scroll-to-top-or-hash",urlOriginal:o,overwriteLastHistoryEntry:s,isBackwardNavigation:!1,checkClientSideRenderable:!0})});let e=0,t,n=!1;r({scrollTarget:"preserve-scroll",isBackwardNavigation:null});return;async function r({scrollTarget:o,urlOriginal:i=j(),overwriteLastHistoryEntry:s=!1,isBackwardNavigation:a,checkClientSideRenderable:c,pageContextsFromRewrite:f=[]}){var d,p;if(_.clientRoutingIsDisabled){W(i);return}const R=Ln(f);if(c){const y=(d=R._urlRewrite)!==null&&d!==void 0?d:i;let b;try{b=await Ze(y)}catch(de){if(J(de))b=!0;else throw de}if(!b){W(i);return}}const P={urlOriginal:i,isBackwardNavigation:a,...R},w=++e;l(w>=1),w>1&&n===!1&&((p=_.onPageTransitionStart)===null||p===void 0||p.call(_,P),n=!0);let ue=!1;const Y=()=>w===1&&ue===!1?!1:w!==e,m=await Xe(P);if(Y())return;const ce=w===1;g(m,{_isFirstRenderAttempt:ce});let $,S,fe=!1;try{$=await Dn(m)}catch(y){fe=!0,S=y}if(fe){if(J(S)||console.error(S),we(S,m))return;if(J(S)){const y=S;Bn(S,m._isProduction,m);const b=y._pageContextAbort;if(b._urlRewrite){await r({scrollTarget:o,urlOriginal:i,overwriteLastHistoryEntry:s,isBackwardNavigation:a,pageContextsFromRewrite:[...f,b]});return}if(b._urlRedirect){await r({scrollTarget:"scroll-to-top-or-hash",urlOriginal:b._urlRedirect.url,overwriteLastHistoryEntry:!1,isBackwardNavigation:!1,checkClientSideRenderable:!0});return}l(b._abortStatusCode),g(m,b)}else g(m,{is404:Jn(S)});try{$=await Vn(m)}catch(y){if(we(y,m)||(ce||setTimeout(()=>{window.location.pathname=i},0),nn(S,y)))return;throw y}}if(l($),g(m,$),M(m,"onPageTransitionStart"),_.onPageTransitionStart=m.exports.onPageTransitionStart,m.exports.hydrationCanBeAborted?ue=!0:v(!tn(),"You seem to be using React; we recommend setting `hydrationCanBeAborted` to `true`, see https://vite-plugin-ssr.com/clientRouting",{onlyOnce:!0}),!Y()&&(t&&await t,!Y())){if(Pr(i,s),je.markNavigationChange(),l(t===void 0),t=(async()=>{await St(m,!0),pr(m)})(),await t,t=void 0,m._isFirstRenderAttempt){M(m,"onHydrationEnd");const{onHydrationEnd:y}=m.exports;if(y){const b=m.exportsAll.onHydrationEnd[0].exportSource;l(b),await ne(()=>y(m),"onHydrationEnd",b)}}else w===e&&(m.exports.onPageTransitionEnd&&(M(m,"onPageTransitionEnd"),m.exports.onPageTransitionEnd(m)),n=!1);ct(o),le(),_.initialRenderIsDone=!0}}}function Rr(e){document.addEventListener("click",t);return;function t(o){if(!n(o))return;const i=r(o.target);if(!i)return;const s=i.getAttribute("href");if(tt(i))return;l(s),o.preventDefault();const a=![null,"false"].includes(i.getAttribute("keep-scroll-position"));e(s,{keepScrollPosition:a})}function n(o){return o.button===0&&!o.ctrlKey&&!o.shiftKey&&!o.altKey&&!o.metaKey}function r(o){for(;o.tagName!=="A";){const{parentNode:i}=o;if(!i)return null;o=i}return o}}function Sr(e){window.addEventListener("popstate",()=>{const t=U(),n=t.historyState.scrollPosition||"scroll-to-top-or-hash",r=t.urlWithoutHash===_.previousState.urlWithoutHash,o=!t.historyState.timestamp||!_.previousState.historyState.timestamp?null:t.historyState.timestamp<_.previousState.historyState.timestamp;_.previousState=t,r?window.history.state===null?(st(),_.previousState=U()):ct(n):e(n,o)})}function Pr(e,t){j()!==e&&(le(),mr(e,t),_.previousState=U())}function U(){return{urlWithoutHash:j({withoutHash:!0}),historyState:se()}}function ct(e){if(e==="preserve-scroll")return;let t;if(e==="scroll-to-top-or-hash"){const n=Or();if(n&&n!=="top"){const r=document.getElementById(n)||document.getElementsByName(n)[0];if(r){r.scrollIntoView();return}}t={x:0,y:0}}else l("x"in e&&"y"in e),t=e;wr(t)}function wr(e){const t=()=>window.scrollTo(e.x,e.y),n=()=>window.scrollX===e.x&&window.scrollY===e.y;n()||(t(),!n()&&requestAnimationFrame(()=>{t(),!n()&&setTimeout(async()=>{if(t(),n())return;const r=new Date().getTime();for(;;)if(await rn(10),t(),n()||new Date().getTime()-r>100)return},0)}))}function Cr(){window.addEventListener("scroll",on(Se,Math.ceil(1e3/3)),{passive:!0}),ft(Se)}function Or(){let{hash:e}=window.location;return e===""?null:(l(e.startsWith("#")),e=e.slice(1),e)}function Fr(){Pe(),ft(Pe),Er(()=>_.initialRenderIsDone&&le())}function le(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual")}function Pe(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto")}function ft(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&e()})}function Er(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&e()})}function we(e,t){return!!(Qn(e)||Ar(e,t))}function Ar(e,t){if(!oe(e))return!1;if(t._isFirstRenderAttempt)throw te(e,!1),e;return te(e,!0),W(t.urlOriginal),!0}function xr(){return!!window._disableAutomaticLinkInterception}E();Pt(!0);vr();
