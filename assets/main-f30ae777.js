var qt=Object.defineProperty;var Gt=(m,t,n)=>t in m?qt(m,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):m[t]=n;var p=(m,t,n)=>(Gt(m,typeof t!="symbol"?t+"":t,n),n),kt=(m,t,n)=>{if(!t.has(m))throw TypeError("Cannot "+n)};var o=(m,t,n)=>(kt(m,t,"read from private field"),n?n.call(m):t.get(m)),g=(m,t,n)=>{if(t.has(m))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(m):t.set(m,n)},M=(m,t,n,h)=>(kt(m,t,"write to private field"),h?h.call(m,n):t.set(m,n),n);var ft=(m,t,n)=>(kt(m,t,"access private method"),n);import"./app-d2e00ec3.js";import{c as at,p as X,m as Zt,n as Kt,q as Jt,r as Qt,S as rt,G as te,s as zt,t as ee,o as ie}from"./gif-2e2b9586.js";import{i as ne}from"./readme-e506e057.js";const se="index.json",ae="index.map.json",oe="./data/xmmt.dituon.petpet";class re{constructor(t){p(this,"urls");p(this,"urlSet",new Set);p(this,"initPromise");p(this,"idMap");p(this,"lengthMap",new Map);p(this,"aliasMap",new Map);p(this,"fonts");p(this,"fontPromises",[]);this.urls=[...new Set(t)],this.initPromise=this.init()}async init(){const t=new Map,n=new Map;await Promise.allSettled(this.urls.map(async h=>{const c=await fetch(`${h}/${se}`).then(b=>b.json()),{dataPath:E=oe,dataList:S,fontList:U}=c;try{const b=await fetch(`${h}/${ae}`).then(I=>I.json());Object.entries(b.length).forEach(([I,W])=>this.lengthMap.set(I,W)),Object.entries(b.alias).forEach(([I,W])=>this.aliasMap.set(I,W))}catch{console.warn(`cannot find index.map.json in ${h} `)}for(const b of S)t.has(b)||t.set(b,`${h}/${E}/${b}`);for(const b of U)n.has(b)||n.set(b,`${h}/${E}/fonts/${b}`);this.urlSet.add(h)})),this.idMap=t;for(let[h,c]of n){h=h.split(".")[0],console.log(h,c);const E=new FontFace(h,`url(${c})`);this.fontPromises.push(E.load().then(S=>{document.fonts.add(S)}))}}async getIdMap(){return await this.initPromise,this.idMap}async getLengthMap(){return await this.initPromise,this.lengthMap}async getPreviewList(){const t=await this.getIdMap(),n=[];for(const[h,c]of t.entries())n.push({key:h,url:c,alias:this.aliasMap.get(h)});return n}async getFonts(){return await this.initPromise,await Promise.all(this.fontPromises),this.fonts}async getUrlSet(){return await this.initPromise,this.urlSet}}const gt=()=>document.createElement("div");var ht,N,Et,At;class Rt{constructor(t){g(this,Et);g(this,ht,void 0);g(this,N,void 0);M(this,ht,t)}show(){if(o(this,N))return;const t=gt();t.className="loading",t.append(gt(),gt(),gt()),o(this,ht).appendChild(t),t.addEventListener("click",ft(this,Et,At)),M(this,N,t)}hide(){o(this,N)&&(o(this,N).remove(),M(this,N,null))}error(){let t="加载失败";throw o(this,N).innerHTML=`<span>${t}</span>`,new Error(t)}}ht=new WeakMap,N=new WeakMap,Et=new WeakSet,At=function(t){t.stopPropagation()};class _t{constructor(){p(this,"element");p(this,"showing");p(this,"timer");this.element=document.createElement("div"),this.element.className="mask",document.body.appendChild(this.element),this.showing=!1}set onclick(t){this.element.onclick=t}show(){this.timer&&(clearTimeout(this.timer),this.timer=null),this.element.style.pointerEvents="auto",this.element.style.display="block",setTimeout(()=>this.element.style.opacity="0.5",10)}hide(){this.element.style.opacity="0",this.element.style.pointerEvents="none",this.timer=setTimeout(()=>this.element.style.display="none",1e3)}toggle(){this.showing?this.hide():this.show()}destroy(){this.element.remove()}}var A,lt,ut,tt,q,G;const Q=class{constructor(t){g(this,A,document.createElement("div"));g(this,lt,void 0);g(this,ut,new Map);g(this,tt,void 0);g(this,q,void 0);g(this,G,0);p(this,"mask",new _t);o(this,A).classList.add("modal-select","hide",Q.ICON_SIZE_LIST[o(this,G)]),o(this,A).addEventListener("contextmenu",n=>{n.preventDefault(),this.changeIconSize()}),document.body.appendChild(o(this,A)),this.mask.onclick=()=>{o(this,q)&&o(this,q).call(this,null),this.hide()},t&&(this.templates=t)}set templates(t){M(this,lt,t);const n=document.createElement("div");n.className="index-list",M(this,tt,n);for(const c of t){const E=document.createElement("div"),S=document.createElement("img");S.src=`${c.url}/0.png`,S.alt=c.key,S.onerror=()=>E.remove(),S.loading="lazy";const U=at(c.key);c.alias&&c.alias.forEach(b=>U.appendChild(at(b,"span"))),E.append(S,U),E.addEventListener("click",async b=>{o(this,q).call(this,await Ft(c)),this.hide()}),o(this,ut).set(c,E),n.appendChild(E)}const h=document.createElement("input");h.placeholder=`🔍 ${X().typeToSearch} / ${X().rightClickOrLongPress}`,h.addEventListener("change",c=>{this.search(h.value.trim())}),o(this,A).append(h,n)}hide(){this.mask.hide(),o(this,A).classList.add("hide")}async show(){return o(this,lt)?(this.mask.show(),o(this,A)&&o(this,A).classList.remove("hide"),new Promise(t=>M(this,q,t))):null}changeIconSize(){const t=(o(this,G)+1)%Q.ICON_SIZE_LIST.length;o(this,A).classList.replace(Q.ICON_SIZE_LIST[o(this,G)],Q.ICON_SIZE_LIST[t]),M(this,G,t)}search(t){o(this,tt).innerHTML="";for(let[n,h]of o(this,ut).entries()){const{key:c,alias:E}=n;!c.includes(t)&&!(E&&E.find(S=>S.includes(t)))||o(this,tt).appendChild(h)}}};let wt=Q;A=new WeakMap,lt=new WeakMap,ut=new WeakMap,tt=new WeakMap,q=new WeakMap,G=new WeakMap,p(wt,"ICON_SIZE_LIST",["big","medium","small"]);async function Ft(m){if(m.type)return m;const t=await fetch(m.url+"/data.json").then(n=>n.json());return{...m,...t}}var F,et,dt,it;class he{constructor(t){g(this,F,document.createElement("div"));g(this,et,void 0);g(this,dt,void 0);p(this,"loading",new Rt(o(this,F)));g(this,it,void 0);p(this,"template");if(M(this,et,new wt(t)),o(this,F).classList.add("template-chooser"),o(this,F).textContent=X().notSelected,o(this,F).addEventListener("click",async()=>{const n=await this.showModal();o(this,it)&&o(this,it).call(this,n)}),!t){this.loading.show();return}this.templates=t}set templates(t){this.loading.hide(),M(this,dt,t),o(this,et).templates=t}async setTemplate(t){if(!t)return;const n=o(this,dt).find(h=>h.key===t);if(!n)throw new Error(`key ${t} not found`);o(this,F).textContent=n.key,this.template=await Ft(n)}get templateKey(){var t;return(t=this.template)==null?void 0:t.key}render(){const t=document.createElement("div");return t.append(at(X().selectTemplate),o(this,F)),t}async showModal(){const t=await o(this,et).show();return t&&(o(this,F).textContent=t.key,this.template=t),t??this.template}set onchange(t){M(this,it,t)}}F=new WeakMap,et=new WeakMap,dt=new WeakMap,it=new WeakMap;var Bt={exports:{}};(function(m,t){(function(n,h){m.exports=h()})(Zt,function(){(function(){for(var u=0,s=["ms","moz","webkit","o"],e=0;e<s.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[s[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[s[e]+"CancelAnimationFrame"]||window[s[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(i,a){var r=new Date().getTime(),l=Math.max(0,16-(r-u)),d=window.setTimeout(function(){i(r+l)},l);return u=r+l,d}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(i){clearTimeout(i)})})(),function(){if(typeof window.CustomEvent=="function")return!1;function u(s,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var i=document.createEvent("CustomEvent");return i.initCustomEvent(s,e.bubbles,e.cancelable,e.detail),i}u.prototype=window.Event.prototype,window.CustomEvent=u}(),function(u){try{return new CustomEvent("test"),!1}catch{}function s(e,i){i=i||{bubbles:!1,cancelable:!1};var a=document.createEvent("MouseEvent");return a.initMouseEvent(e,i.bubbles,i.cancelable,u,0,0,0,0,0,!1,!1,!1,!1,0,null),a}s.prototype=Event.prototype,u.MouseEvent=s}(window);var n=function(u,s){if(!(u instanceof s))throw new TypeError("Cannot call a class as a function")},h=function(){function u(s,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(s,a.key,a)}}return function(s,e,i){return e&&u(s.prototype,e),i&&u(s,i),s}}(),c=function u(s,e,i){s===null&&(s=Function.prototype);var a=Object.getOwnPropertyDescriptor(s,e);if(a===void 0){var r=Object.getPrototypeOf(s);return r===null?void 0:u(r,e,i)}else{if("value"in a)return a.value;var l=a.get;return l===void 0?void 0:l.call(i)}},E=function(u,s){if(typeof s!="function"&&s!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof s);u.prototype=Object.create(s&&s.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(u,s):u.__proto__=s)},S=function(u,s){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s&&(typeof s=="object"||typeof s=="function")?s:u},U=function(){function u(s,e){var i=[],a=!0,r=!1,l=void 0;try{for(var d=s[Symbol.iterator](),v;!(a=(v=d.next()).done)&&(i.push(v.value),!(e&&i.length===e));a=!0);}catch(f){r=!0,l=f}finally{try{!a&&d.return&&d.return()}finally{if(r)throw l}}return i}return function(s,e){if(Array.isArray(s))return s;if(Symbol.iterator in Object(s))return u(s,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),b=function u(s,e,i,a){n(this,u);var r=this;this.position=s,this.constraints=e,this.cursor=i,this.eventBus=a,this.el=document.createElement("div"),this.el.className="croppr-handle",this.el.style.cursor=i,this.el.addEventListener("mousedown",l);function l(f){f.stopPropagation(),document.addEventListener("mouseup",d),document.addEventListener("mousemove",v),r.eventBus.dispatchEvent(new CustomEvent("handlestart",{detail:{handle:r}}))}function d(f){f.stopPropagation(),document.removeEventListener("mouseup",d),document.removeEventListener("mousemove",v),r.eventBus.dispatchEvent(new CustomEvent("handleend",{detail:{handle:r}}))}function v(f){f.stopPropagation(),r.eventBus.dispatchEvent(new CustomEvent("handlemove",{detail:{mouseX:f.clientX,mouseY:f.clientY}}))}},I=function(){function u(s,e,i,a){n(this,u),this.x1=s,this.y1=e,this.x2=i,this.y2=a}return h(u,[{key:"set",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;return this.x1=e??this.x1,this.y1=i??this.y1,this.x2=a??this.x2,this.y2=r??this.y2,this}},{key:"width",value:function(){return Math.abs(this.x2-this.x1)}},{key:"height",value:function(){return Math.abs(this.y2-this.y1)}},{key:"resize",value:function(e,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[0,0],r=this.x1+this.width()*a[0],l=this.y1+this.height()*a[1];return this.x1=r-e*a[0],this.y1=l-i*a[1],this.x2=this.x1+e,this.y2=this.y1+i,this}},{key:"scale",value:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[0,0],a=this.width()*e,r=this.height()*e;return this.resize(a,r,i),this}},{key:"move",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,a=this.width(),r=this.height();return e=e===null?this.x1:e,i=i===null?this.y1:i,this.x1=e,this.y1=i,this.x2=e+a,this.y2=i+r,this}},{key:"getRelativePoint",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[0,0],i=this.width()*e[0],a=this.height()*e[1];return[i,a]}},{key:"getAbsolutePoint",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[0,0],i=this.x1+this.width()*e[0],a=this.y1+this.height()*e[1];return[i,a]}},{key:"constrainToRatio",value:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[0,0],a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"height";if(e!==null){switch(this.width(),this.height(),a){case"height":this.resize(this.width(),this.width()*e,i);break;case"width":this.resize(this.height()*1/e,this.height(),i);break;default:this.resize(this.width(),this.width()*e,i)}return this}}},{key:"constrainToBoundary",value:function(e,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[0,0],r=this.getAbsolutePoint(a),l=U(r,2),d=l[0],v=l[1],f=d,x=v,w=e-d,C=i-v,k=-2*a[0]+1,L=-2*a[1]+1,y=null,z=null;switch(k){case-1:y=f;break;case 0:y=Math.min(f,w)*2;break;case 1:y=w;break}switch(L){case-1:z=x;break;case 0:z=Math.min(x,C)*2;break;case 1:z=C;break}if(this.width()>y){var P=y/this.width();this.scale(P,a)}if(this.height()>z){var T=z/this.height();this.scale(T,a)}return this}},{key:"constrainToSize",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:[0,0],d=arguments.length>5&&arguments[5]!==void 0?arguments[5]:null;if(d&&(d>1?(e=i*1/d,r=r*d):d<1&&(i=e*d,a=r*1/d)),e&&this.width()>e){var v=e,f=d===null?this.height():i;this.resize(v,f,l)}if(i&&this.height()>i){var x=d===null?this.width():e,w=i;this.resize(x,w,l)}if(a&&this.width()<a){var C=a,k=d===null?this.height():r;this.resize(C,k,l)}if(r&&this.height()<r){var L=d===null?this.width():a,y=r;this.resize(L,y,l)}return this}}]),u}();function W(u){u.addEventListener("touchstart",Ct),u.addEventListener("touchend",Ct),u.addEventListener("touchmove",Ct)}function Ct(u){u.preventDefault();var s=u.changedTouches[0],e={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup"};s.target.dispatchEvent(new MouseEvent(e[u.type],{bubbles:!0,cancelable:!0,view:window,clientX:s.clientX,clientY:s.clientY,screenX:s.screenX,screenY:s.screenY}))}var mt=[{position:[0,0],constraints:[1,0,0,1],cursor:"nw-resize"},{position:[.5,0],constraints:[1,0,0,0],cursor:"n-resize"},{position:[1,0],constraints:[1,1,0,0],cursor:"ne-resize"},{position:[1,.5],constraints:[0,1,0,0],cursor:"e-resize"},{position:[1,1],constraints:[0,1,1,0],cursor:"se-resize"},{position:[.5,1],constraints:[0,0,1,0],cursor:"s-resize"},{position:[0,1],constraints:[0,0,1,1],cursor:"sw-resize"},{position:[0,.5],constraints:[0,0,0,1],cursor:"w-resize"}],Nt=function(){function u(s,e){var i=this,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(n(this,u),this.options=u.parseOptions(e||{}),!s.nodeName&&(s=document.querySelector(s),s==null))throw"Unable to find element.";if(!s.getAttribute("src"))throw"Image src not provided.";this._initialized=!1,this._restore={parent:s.parentNode,element:s},a||(s.width===0||s.height===0?s.onload=function(){i.initialize(s)}:this.initialize(s))}return h(u,[{key:"initialize",value:function(e){this.createDOM(e),this.options.convertToPixels(this.cropperEl),this.attachHandlerEvents(),this.attachRegionEvents(),this.attachOverlayEvents(),this.box=this.initializeBox(this.options),this.redraw(),this._initialized=!0,this.options.onInitialize!==null&&this.options.onInitialize(this)}},{key:"createDOM",value:function(e){this.containerEl=document.createElement("div"),this.containerEl.className="croppr-container",this.eventBus=this.containerEl,W(this.containerEl),this.cropperEl=document.createElement("div"),this.cropperEl.className="croppr",this.imageEl=document.createElement("img"),this.imageEl.setAttribute("src",e.getAttribute("src")),this.imageEl.setAttribute("alt",e.getAttribute("alt")),this.imageEl.className="croppr-image",this.imageClippedEl=this.imageEl.cloneNode(),this.imageClippedEl.className="croppr-imageClipped",this.regionEl=document.createElement("div"),this.regionEl.className="croppr-region",this.overlayEl=document.createElement("div"),this.overlayEl.className="croppr-overlay";var i=document.createElement("div");i.className="croppr-handleContainer",this.handles=[];for(var a=0;a<mt.length;a++){var r=new b(mt[a].position,mt[a].constraints,mt[a].cursor,this.eventBus);this.handles.push(r),i.appendChild(r.el)}this.cropperEl.appendChild(this.imageEl),this.cropperEl.appendChild(this.imageClippedEl),this.cropperEl.appendChild(this.regionEl),this.cropperEl.appendChild(this.overlayEl),this.cropperEl.appendChild(i),this.containerEl.appendChild(this.cropperEl),e.parentElement.replaceChild(this.containerEl,e)}},{key:"setImage",value:function(e){var i=this;return this.imageEl.onload=function(){i.box=i.initializeBox(i.options),i.redraw()},this.imageEl.src=e,this.imageClippedEl.src=e,this}},{key:"destroy",value:function(){this._restore.parent.replaceChild(this._restore.element,this.containerEl)}},{key:"initializeBox",value:function(e){var i=e.startSize.width,a=e.startSize.height,r=new I(0,0,i,a);r.constrainToRatio(e.aspectRatio,[.5,.5]);var l=e.minSize,d=e.maxSize;r.constrainToSize(d.width,d.height,l.width,l.height,[.5,.5],e.aspectRatio);var v=this.cropperEl.offsetWidth,f=this.cropperEl.offsetHeight;r.constrainToBoundary(v,f,[.5,.5]);var x=this.cropperEl.offsetWidth/2-r.width()/2,w=this.cropperEl.offsetHeight/2-r.height()/2;return r.move(x,w),r}},{key:"redraw",value:function(){var e=this,i=Math.round(this.box.width()),a=Math.round(this.box.height()),r=Math.round(this.box.x1),l=Math.round(this.box.y1),d=Math.round(this.box.x2),v=Math.round(this.box.y2);window.requestAnimationFrame(function(){e.regionEl.style.transform="translate("+r+"px, "+l+"px)",e.regionEl.style.width=i+"px",e.regionEl.style.height=a+"px",e.imageClippedEl.style.clip="rect("+l+"px, "+d+"px, "+v+"px, "+r+"px)";for(var f=e.box.getAbsolutePoint([.5,.5]),x=f[0]-e.cropperEl.offsetWidth/2>>31,w=f[1]-e.cropperEl.offsetHeight/2>>31,C=(x^w)+w+w+4,k=-2*C+8,L=0;L<e.handles.length;L++){var y=e.handles[L],z=y.el.offsetWidth,P=y.el.offsetHeight,T=r+i*y.position[0]-z/2,Y=l+a*y.position[1]-P/2;y.el.style.transform="translate("+Math.round(T)+"px, "+Math.round(Y)+"px)",y.el.style.zIndex=k==L?5:4}})}},{key:"attachHandlerEvents",value:function(){var e=this.eventBus;e.addEventListener("handlestart",this.onHandleMoveStart.bind(this)),e.addEventListener("handlemove",this.onHandleMoveMoving.bind(this)),e.addEventListener("handleend",this.onHandleMoveEnd.bind(this))}},{key:"attachRegionEvents",value:function(){var e=this.eventBus;this.regionEl.addEventListener("mousedown",i),e.addEventListener("regionstart",this.onRegionMoveStart.bind(this)),e.addEventListener("regionmove",this.onRegionMoveMoving.bind(this)),e.addEventListener("regionend",this.onRegionMoveEnd.bind(this));function i(l){l.stopPropagation(),document.addEventListener("mouseup",r),document.addEventListener("mousemove",a),e.dispatchEvent(new CustomEvent("regionstart",{detail:{mouseX:l.clientX,mouseY:l.clientY}}))}function a(l){l.stopPropagation(),e.dispatchEvent(new CustomEvent("regionmove",{detail:{mouseX:l.clientX,mouseY:l.clientY}}))}function r(l){l.stopPropagation(),document.removeEventListener("mouseup",r),document.removeEventListener("mousemove",a),e.dispatchEvent(new CustomEvent("regionend",{detail:{mouseX:l.clientX,mouseY:l.clientY}}))}}},{key:"attachOverlayEvents",value:function(){var e=4,i=this,a=null;this.overlayEl.addEventListener("mousedown",r);function r(v){v.stopPropagation(),document.addEventListener("mouseup",d),document.addEventListener("mousemove",l);var f=i.cropperEl.getBoundingClientRect(),x=v.clientX-f.left,w=v.clientY-f.top;a=i.box,i.box=new I(x,w,x+1,w+1),i.eventBus.dispatchEvent(new CustomEvent("handlestart",{detail:{handle:i.handles[e]}}))}function l(v){v.stopPropagation(),i.eventBus.dispatchEvent(new CustomEvent("handlemove",{detail:{mouseX:v.clientX,mouseY:v.clientY}}))}function d(v){if(v.stopPropagation(),document.removeEventListener("mouseup",d),document.removeEventListener("mousemove",l),i.box.width()===1&&i.box.height()===1){i.box=a;return}i.eventBus.dispatchEvent(new CustomEvent("handleend",{detail:{mouseX:v.clientX,mouseY:v.clientY}}))}}},{key:"onHandleMoveStart",value:function(e){var i=e.detail.handle,a=[1-i.position[0],1-i.position[1]],r=this.box.getAbsolutePoint(a),l=U(r,2),d=l[0],v=l[1];this.activeHandle={handle:i,originPoint:a,originX:d,originY:v},this.options.onCropStart!==null&&this.options.onCropStart(this.getValue())}},{key:"onHandleMoveMoving",value:function(e){var i=e.detail,a=i.mouseX,r=i.mouseY,l=this.cropperEl.getBoundingClientRect();a=a-l.left,r=r-l.top,a<0?a=0:a>l.width&&(a=l.width),r<0?r=0:r>l.height&&(r=l.height);var d=this.activeHandle.originPoint.slice(),v=this.activeHandle.originX,f=this.activeHandle.originY,x=this.activeHandle.handle,w=x.constraints[0]===1,C=x.constraints[1]===1,k=x.constraints[2]===1,L=x.constraints[3]===1,y=(L||C)&&(w||k),z=L||C?v:this.box.x1,P=L||C?v:this.box.x2,T=w||k?f:this.box.y1,Y=w||k?f:this.box.y2;z=L?a:z,P=C?a:P,T=w?r:T,Y=k?r:Y;var ot=!1,J=!1;if((L||C)&&(ot=L?a>v:a<v),(w||k)&&(J=w?r>f:r<f),ot){var R=z;z=P,P=R,d[0]=1-d[0]}if(J){var $t=T;T=Y,Y=$t,d[1]=1-d[1]}var $=new I(z,T,P,Y);if(this.options.aspectRatio){var Lt=this.options.aspectRatio,St=!1;y?St=r>$.y1+Lt*$.width()||r<$.y2-Lt*$.width():(w||k)&&(St=!0);var jt=St?"width":"height";$.constrainToRatio(Lt,d,jt)}var Tt=this.options.minSize,Ot=this.options.maxSize;$.constrainToSize(Ot.width,Ot.height,Tt.width,Tt.height,d,this.options.aspectRatio);var Vt=this.cropperEl.offsetWidth,Wt=this.cropperEl.offsetHeight;$.constrainToBoundary(Vt,Wt,d),this.box=$,this.redraw(),this.options.onCropMove!==null&&this.options.onCropMove(this.getValue())}},{key:"onHandleMoveEnd",value:function(e){this.options.onCropEnd!==null&&this.options.onCropEnd(this.getValue())}},{key:"onRegionMoveStart",value:function(e){var i=e.detail,a=i.mouseX,r=i.mouseY,l=this.cropperEl.getBoundingClientRect();a=a-l.left,r=r-l.top,this.currentMove={offsetX:a-this.box.x1,offsetY:r-this.box.y1},this.options.onCropStart!==null&&this.options.onCropStart(this.getValue())}},{key:"onRegionMoveMoving",value:function(e){var i=e.detail,a=i.mouseX,r=i.mouseY,l=this.currentMove,d=l.offsetX,v=l.offsetY,f=this.cropperEl.getBoundingClientRect();a=a-f.left,r=r-f.top,this.box.move(a-d,r-v),this.box.x1<0&&this.box.move(0,null),this.box.x2>f.width&&this.box.move(f.width-this.box.width(),null),this.box.y1<0&&this.box.move(null,0),this.box.y2>f.height&&this.box.move(null,f.height-this.box.height()),this.redraw(),this.options.onCropMove!==null&&this.options.onCropMove(this.getValue())}},{key:"onRegionMoveEnd",value:function(e){this.options.onCropEnd!==null&&this.options.onCropEnd(this.getValue())}},{key:"getValue",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;if(e===null&&(e=this.options.returnMode),e=="real"){var i=this.imageEl.naturalWidth,a=this.imageEl.naturalHeight,r=this.imageEl.getBoundingClientRect(),l=r.width,d=r.height,v=i/l,f=a/d;return{x:Math.round(this.box.x1*v),y:Math.round(this.box.y1*f),width:Math.round(this.box.width()*v),height:Math.round(this.box.height()*f)}}else if(e=="ratio"){var x=this.imageEl.getBoundingClientRect(),w=x.width,C=x.height;return{x:vt(this.box.x1/w,3),y:vt(this.box.y1/C,3),width:vt(this.box.width()/w,3),height:vt(this.box.height()/C,3)}}else if(e=="raw")return{x:Math.round(this.box.x1),y:Math.round(this.box.y1),width:Math.round(this.box.width()),height:Math.round(this.box.height())}}}],[{key:"parseOptions",value:function(e){var i={aspectRatio:null,maxSize:{width:null,height:null},minSize:{width:null,height:null},startSize:{width:100,height:100,unit:"%"},returnMode:"real",onInitialize:null,onCropStart:null,onCropMove:null,onCropEnd:null},a=null;e.aspectRatio!==void 0&&(typeof e.aspectRatio=="number"?a=e.aspectRatio:e.aspectRatio instanceof Array&&(a=e.aspectRatio[1]/e.aspectRatio[0]));var r=null;e.maxSize!==void 0&&e.maxSize!==null&&(r={width:e.maxSize[0]||null,height:e.maxSize[1]||null,unit:e.maxSize[2]||"px"});var l=null;e.minSize!==void 0&&e.minSize!==null&&(l={width:e.minSize[0]||null,height:e.minSize[1]||null,unit:e.minSize[2]||"px"});var d=null;e.startSize!==void 0&&e.startSize!==null&&(d={width:e.startSize[0]||null,height:e.startSize[1]||null,unit:e.startSize[2]||"%"});var v=null;typeof e.onInitialize=="function"&&(v=e.onInitialize);var f=null;typeof e.onCropStart=="function"&&(f=e.onCropStart);var x=null;typeof e.onCropEnd=="function"&&(x=e.onCropEnd);var w=null;typeof e.onUpdate=="function"&&(console.warn("Croppr.js: `onUpdate` is deprecated and will be removed in the next major release. Please use `onCropMove` or `onCropEnd` instead."),w=e.onUpdate),typeof e.onCropMove=="function"&&(w=e.onCropMove);var C=null;if(e.returnMode!==void 0){var k=e.returnMode.toLowerCase();if(["real","ratio","raw"].indexOf(k)===-1)throw"Invalid return mode.";C=k}var L=function(P){for(var T=P.offsetWidth,Y=P.offsetHeight,ot=["maxSize","minSize","startSize"],J=0;J<ot.length;J++){var R=ot[J];this[R]!==null&&(this[R].unit=="%"&&(this[R].width!==null&&(this[R].width=this[R].width/100*T),this[R].height!==null&&(this[R].height=this[R].height/100*Y)),delete this[R].unit)}},y=function(P,T){return P!==null?P:T};return{aspectRatio:y(a,i.aspectRatio),maxSize:y(r,i.maxSize),minSize:y(l,i.minSize),startSize:y(d,i.startSize),returnMode:y(C,i.returnMode),onInitialize:y(v,i.onInitialize),onCropStart:y(f,i.onCropStart),onCropMove:y(w,i.onCropMove),onCropEnd:y(x,i.onCropEnd),convertToPixels:L}}}]),u}();function vt(u,s){return+(Math.round(u+"e"+s)+"e-"+s)}var Dt=function(u){E(s,u);function s(e,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return n(this,s),S(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,e,i,a))}return h(s,[{key:"getValue",value:function(i){return c(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"getValue",this).call(this,i)}},{key:"setImage",value:function(i){return c(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"setImage",this).call(this,i)}},{key:"destroy",value:function(){return c(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"destroy",this).call(this)}},{key:"moveTo",value:function(i,a){return this.box.move(i,a),this.redraw(),this.options.onCropEnd!==null&&this.options.onCropEnd(this.getValue()),this}},{key:"resizeTo",value:function(i,a){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[.5,.5];return this.box.resize(i,a,r),this.redraw(),this.options.onCropEnd!==null&&this.options.onCropEnd(this.getValue()),this}},{key:"scaleBy",value:function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[.5,.5];return this.box.scale(i,a),this.redraw(),this.options.onCropEnd!==null&&this.options.onCropEnd(this.getValue()),this}},{key:"reset",value:function(){return this.box=this.initializeBox(this.options),this.redraw(),this.options.onCropEnd!==null&&this.options.onCropEnd(this.getValue()),this}}]),s}(Nt);return Dt})})(Bt);var le=Bt.exports;const ue=Kt(le);var B;class de{constructor(t){g(this,B,document.createElement("div"));p(this,"croppr");p(this,"mask",new _t);p(this,"callback");p(this,"imageFile");p(this,"initPromise");o(this,B).classList.add("avatar-cropper"),this.imageFile=t,this.mask.onclick=()=>this.cancel(),this.initPromise=this.init()}async init(){const t=await Jt(this.imageFile);o(this,B).appendChild(t),document.body.append(o(this,B)),this.croppr=new ue(t,{startSize:[90,60],minSize:[1,1,"px"],returnMode:"real"});const n=document.createElement("div");n.className="button-group";const h=document.createElement("div");h.innerText="Cancel",h.addEventListener("click",()=>this.cancel());const c=document.createElement("div");c.innerText="Save",c.addEventListener("click",()=>this.save()),n.append(h,c),o(this,B).appendChild(n)}cancel(){this.callback(null),this.hide()}save(){const{x:t,y:n,width:h,height:c}=this.croppr.getValue("real");this.callback([t,n,t+h,n+c]),this.hide()}hide(){o(this,B).classList.add("hide"),this.mask.hide()}async show(){return await this.initPromise,this.mask.show(),o(this,B).classList.remove("hide"),new Promise(t=>this.callback=t)}async destroy(){await this.initPromise,o(this,B).remove(),this.croppr.destroy(),this.mask.destroy()}}B=new WeakMap;const Pt=m=>{m.stopPropagation(),m.preventDefault()};var O,j,V,ct,xt;class ce{constructor(t){p(this,"type");g(this,O,document.createElement("label"));g(this,j,void 0);g(this,V,void 0);g(this,ct,void 0);g(this,xt,new Promise(t=>M(this,ct,t)));p(this,"cropPos");this.type=t,o(this,O).title=X().rightClickOrLongPress,o(this,O).setAttribute("type",t),o(this,O).addEventListener("dragenter",Pt,!1),o(this,O).addEventListener("dragover",Pt,!1),o(this,O).addEventListener("drop",h=>{Pt(h),this.setFiles(h.dataTransfer.files)},!1),o(this,O).addEventListener("contextmenu",async h=>{if(h.preventDefault(),!o(this,j))return;const c=this.cropPos,E=new de(o(this,j));this.cropPos=await E.show(),await E.destroy(),this.cropPos!==c&&o(this,V)&&o(this,V).call(this,this)});const n=document.createElement("input");n.type="file",n.accept="image/*",n.addEventListener("change",()=>this.setFiles(n.files)),o(this,O).appendChild(n)}render(){return o(this,O)}set onchange(t){M(this,V,t)}get file(){return o(this,j)}async waitFile(){return await o(this,xt),o(this,j)}setFiles(t){let n=t.item(0);if(n){if(!n.type.startsWith("image"))throw new Error("仅支持图片格式");o(this,O).style.backgroundImage=`url(${URL.createObjectURL(n)})`,o(this,O).style.backgroundSize="cover",M(this,j,n),o(this,ct).call(this),this.cropPos=void 0,o(this,V)&&o(this,V).call(this,this)}}}O=new WeakMap,j=new WeakMap,V=new WeakMap,ct=new WeakMap,xt=new WeakMap;const It=["FROM","TO","BOT","GROUP"];var H,pt,_;class Ht{constructor(){g(this,H,void 0);g(this,pt,new Map(It.map(t=>[t,new ce(t)])));g(this,_,void 0);M(this,H,document.createElement("div")),o(this,H).className="avatar-uploader",o(this,H).innerHTML=X().noAvatar}set types(t){if(!t||t.length===0){o(this,H).innerHTML=X().noAvatar;return}o(this,H).innerHTML="",M(this,_,t.map(n=>o(this,pt).get(n))),o(this,H).append(...o(this,_).map(n=>n.render()))}render(){const t=document.createElement("div");return t.append(at(X().uploadAvatar),o(this,H)),t}get ready(){var t;return(t=o(this,_))!=null&&t.length?o(this,_).some(n=>n.file):!0}set onchange(t){for(const n of o(this,pt).values())n.onchange=()=>this.ready&&t(this)}get data(){var n;const t={};if(!((n=o(this,_))!=null&&n.length))return t;for(const h of o(this,_))t[h.type.toLowerCase()]=h.file;return t}get extraTemplate(){var h;const t={};let n=!1;if(!((h=o(this,_))!=null&&h.length))return t;for(const c of o(this,_))n=n||!!c.cropPos,t[c.type.toLowerCase()]={cropType:Qt.PIXEL,crop:c.cropPos};return n?t:void 0}}H=new WeakMap,pt=new WeakMap,_=new WeakMap,p(Ht,"types",It);class pe{constructor(){p(this,"textModels");p(this,"textDomList",document.createElement("div"));p(this,"settingDom",new rt({add:()=>this.addTextModel()}).render());this.textDomList.appendChild(this.settingDom)}set texts(t){this.textModels=t,this.textDomList.innerHTML="",this.textDomList.appendChild(this.settingDom);for(let n of this.textModels.texts)this.addTextModel(n)}addTextModel(t=this.textModels.addTextModel()){const n=new rt(t.settingObject,t.settingAttributes,`Text - ${this.textModels.texts.length}`);this.textDomList.appendChild(n.render())}render(){const t=document.createElement("div");return t.append(at(X().setText),this.textDomList),t}}const Xt={workers:2,quality:10,background:"#ffffff",dither:!1};async function me(m,t){const n=new te(Xt);return m.forEach(h=>n.addFrame(h,{delay:t})),new Promise(h=>{n.on("finished",h),n.render()})}var nt,D,Z,st,K,bt,Ut,Mt,Yt;class ve{constructor(){g(this,bt);g(this,Mt);g(this,nt,document.createElement("div"));g(this,D,document.createElement("div"));g(this,Z,document.createElement("canvas"));g(this,st,void 0);g(this,K,void 0);o(this,D).className="result-area",o(this,nt).append(at(X().result),o(this,D)),ft(this,bt,Ut).call(this),o(this,D).appendChild(o(this,Z)),M(this,K,new Rt(o(this,D))),o(this,K).show()}set canvas(t){o(this,D).innerHTML="",M(this,Z,t),o(this,D).appendChild(t),ft(this,Mt,Yt).call(this),o(this,K).hide()}set setting(t){o(this,st)&&o(this,st).remove(),M(this,st,t),o(this,nt).appendChild(t)}showLoading(){o(this,K).show()}render(){return o(this,nt)}}nt=new WeakMap,D=new WeakMap,Z=new WeakMap,st=new WeakMap,K=new WeakMap,bt=new WeakSet,Ut=function(){o(this,Z).classList.add("hide")},Mt=new WeakSet,Yt=function(){o(this,Z).classList.remove("hide")};class yt{constructor(t){p(this,"initPromise");p(this,"viewer");p(this,"frames");p(this,"cache");p(this,"prevFramesCache");p(this,"downloadOptions",{download:async()=>await this.download(),copy:async()=>await this.copy(),share:async()=>await this.share()});this.viewer=t,this.initPromise=this.init()}async init(){this.frames=await this.viewer.getFrames()}async getTextFrames(){return await this.viewer.getTextedFrames()}async renderAsync(){await this.initPromise;const t=document.createElement("div");if(this.frames.length!==1){const h=new rt(Xt,{quality:{type:"range",min:"1",max:"20",className:"reversed"}},"GIF Render");t.appendChild(h.render())}const n=new rt(this.downloadOptions,void 0,"Save & Share");return t.append(n.render()),t}async getOptions(){await this.initPromise;const t=await this.getTextFrames();if(this.cache&&this.prevFramesCache===t)return this.cache;if(!this.frames)return;if(this.prevFramesCache=t,t.length===1)return this.cache={blob:await new Promise(h=>t[0].toBlob(c=>h(c))),fileName:`${this.viewer.template.key}.png`},this.cache;const n=this.viewer.delay;return this.cache={blob:await me(n>0?t:t.reverse(),Math.abs(n)),fileName:`${this.viewer.template.key}.gif`},this.cache}async download(){const{blob:t,fileName:n}=await this.getOptions();yt.download(t,n)}async copy(){const{blob:t}=await this.getOptions();if(this.frames.length===1){await yt.copy(t);return}const n=URL.createObjectURL(t),h=`width=${this.frames[0].width}, height=${this.frames[0].height}`;window.open(n,void 0,h),URL.revokeObjectURL(n)}async share(){const{blob:t,fileName:n}=await this.getOptions(),h=new File([t],n,{type:t.type});await navigator.share({url:document.location.href,title:n,files:[h]})}static download(t,n){const h=URL.createObjectURL(t),c=document.createElement("a");c.href=h,c.download=n,document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(h)}static async copy(t){try{await navigator.clipboard.write([new ClipboardItem({[t.type]:t})])}catch(n){console.error(n,n.message)}}}class fe{constructor(t){p(this,"appElement");p(this,"templateChooser");p(this,"avatarUploader");p(this,"textUploader");p(this,"resultArea");p(this,"inputElement",document.createElement("div"));p(this,"outputElement",document.createElement("div"));p(this,"prevTemplate");p(this,"initPromise");p(this,"backgroundLengthMap");p(this,"viewer");this.appElement=document.getElementById(t),this.appElement.classList.add("petpet-app"),this.templateChooser=new he,this.templateChooser.onchange=()=>this.update(),this.avatarUploader=new Ht,this.avatarUploader.onchange=()=>this.update(),this.textUploader=new pe,this.inputElement.append(this.templateChooser.render(),this.avatarUploader.render(),this.textUploader.render()),this.resultArea=new ve,this.outputElement.appendChild(this.resultArea.render()),this.outputElement.style.display="none",this.appElement.append(this.inputElement,this.outputElement),this.initPromise=this.init(),this.update()}async init(){ne();const t=new re(zt.server);this.backgroundLengthMap=await t.getLengthMap(),this.templateChooser.templates=await t.getPreviewList(),await this.templateChooser.setTemplate(zt.template),(await t.getUrlSet()).size||this.templateChooser.loading.error()}async update(){var b,I;await this.initPromise,this.viewer&&this.viewer.destroy();const t=this.templateChooser.template||await this.templateChooser.showModal();if(!t)return;const n=this.templateChooser.templateKey;if(zt.template=n,ee("template",n),this.prevTemplate!==t&&(this.avatarUploader.types=[...new Set((b=t.avatar)==null?void 0:b.map(W=>W.type))]),(I=t.avatar)!=null&&I.length&&!this.avatarUploader.ready){this.outputElement.style.display="none";return}this.outputElement.style.display="flex",this.resultArea.showLoading();const h=new ie(t);h.backgroundLength=this.backgroundLengthMap.get(t.key),h.background=t.url;const c=await h.generate(this.avatarUploader.data,this.avatarUploader.extraTemplate);this.textUploader.texts=h.textModelList,await c.play(),this.resultArea.canvas=c.canvas;const E=document.createElement("div");this.resultArea.setting=E;const S=new rt(c.settingObject,{delay:{type:"range",min:"1",max:"256",step:"1"}});E.appendChild(S.render());const U=new yt(c);E.appendChild(await U.renderAsync()),this.prevTemplate=t,this.viewer=c}}new fe("app");
