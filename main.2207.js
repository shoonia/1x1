const e=JSON.parse(document.getElementById("colors").textContent),t=/^#/,r=/[^\da-f]/,n=e=>{let t="";for(;e--;)t+=(16*Math.random()|0).toString(16);return t},a=e=>{const t=e.toString(16);return t.length<2?"0"+t:t},s=({r:e,g:t,b:r,a:n})=>[e,t,r,n].map(a).join(""),o=e=>e.split("").map((e=>e+e)).join(""),i=n=>{let a=n.trim().toLowerCase().replace(t,"");if(a in e&&(a=e[a]),r.test(a))try{a=function(e,t,r,n){const a=(e+(n||"")).toString().includes("%");if("string"===typeof e?[e,t,r,n]=e.match(/(0?\.?\d+)%?\b/g).map((e=>Number(e))):void 0!==n&&(n=Number.parseFloat(n)),"number"!==typeof e||"number"!==typeof t||"number"!==typeof r||e>255||t>255||r>255)throw new TypeError("Expected three numbers below 256");if("number"===typeof n){if(!a&&n>=0&&n<=1)n=Math.round(255*n);else{if(!(a&&n>=0&&n<=100))throw new TypeError(`Expected alpha value (${n}) as a fraction or percentage`);n=Math.round(255*n/100)}n=(256|n).toString(16).slice(1)}else n="";return(r|t<<8|e<<16|1<<24).toString(16).slice(1)+n}(n)}catch{return}switch(a.length){case 8:return a;case 6:return a+"ff";case 4:return o(a);case 3:return o(a)+"ff"}},{readyStore:l,connect:c,dispatch:h,setState:d,getState:u}=(e=>{let t={},r={},n=[],a=(e,n)=>{if("@dispatch"!==e&&a("@dispatch",[e,n,t[e]]),t[e]){let s;t[e].forEach((a=>{let o=t[e].includes(a)&&a(r,n);o&&"function"!==typeof o.then&&(r={...r,...o},s={...s,...o})})),s&&a("@changed",s)}},s=(e,r)=>((t[e]||(t[e]=[])).push(r),()=>{t[e]=t[e].filter((e=>e!==r))}),o=()=>r,i=e=>a("@set",e);return s("@set",((e,t)=>t)),e.forEach((e=>{e&&e({dispatch:a,on:s,get:o,set:i})})),a("@init"),{dispatch:a,getState:o,setState:i,connect(...e){let t=e.pop();return n.push({keys:e,cb:t}),()=>{n=n.filter((e=>e.cb!==t))}},readyStore:()=>(a("@ready"),s("@changed",((e,t)=>{n.forEach((e=>{e.keys.some((e=>e in t))&&e.cb(r)}))})),Promise.all(n.map((e=>e.cb(r)))))}})([e=>{e.on("@init",(()=>({r:0,g:0,b:0,a:0,hex:"00000000",radix:16}))),e.on("rgba",((e,[t,r])=>({hex:s({...e,[t]:r}),[t]:r}))),e.on("hex",((e,t)=>{const r=t.length<8?t+"ff":t,n=parseInt(r,16);return((e,t)=>{const r={};for(const n in t)e[n]!==t[n]&&(r[n]=t[n]);return r})(e,{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:255&n,hex:r})}))}]);let p=(e,t)=>{Array.isArray(t)?t.some((t=>p(e,t))):null!=t&&!1!==t&&e.append(t)},f=e=>{let t=new DocumentFragment;return p(t,e.children),t},g=new Map,m=new Set(["ref","children","__ns"]),b=new Set(["innerHTML","value","muted"]),v=(e,t)=>{if("function"===typeof e)return e(t);let r,n;for(r in e="string"===typeof e?t.__ns?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e):e,t)if(!m.has(r))if(n=t[r],g.has(r))g.get(r)(e,n);else if("style"===r)if("string"===typeof n)e.style.cssText=n;else for(r in n)r.startsWith("--")?e.style.setProperty(r,n[r]):e.style[r]=n[r];else b.has(r)||r.startsWith("on")&&r in e?e[r]=n:null==n||"boolean"===typeof n&&"-"!==r[4]?n?e.setAttribute(r,""):e.removeAttribute(r):e.setAttribute(r,n);return p("template"===e.localName?e.content:e,t.children),n=t.ref,n&&("function"===typeof n?n(e):n.current=e),e},x=e=>Object.seal({current:e}),y=e=>{let t=new Text(e);return[t,e=>{t.textContent=e}]};const w=()=>v("button",{type:"button","aria-label":"random color",class:"j",onclick:()=>{h("hex",n(6)+"ff")},children:v("svg",{height:"40",width:"40",viewBox:"0 0 290 221","aria-hidden":!0,fill:"currentColor",__ns:1,children:[v("path",{d:"M239 128l-36 79c-1 3-4 5-8 6l-86 8c-4 0-7-2-9-5l-50-70c-2-3-3-7-1-10l36-79c1-3 4-5 8-6l86-8c4 0 7 2 9 5l50 70c2 3 3 7 1 10zm-88 5l44 61 31-70-43-61-32 70zm32 67l-42-59-74 6 42 60 74-7zM64 134l75-7 32-70-75 7-32 70zM54 43c7-15 20-23 35-25l2 6c-14 2-25 9-31 22l-6-3zM23 170c-9-13-11-28-6-43l7 2c-4 13-4 26 5 37l-6 4zM181 13c15 1 25 7 34 20l-6 4c-6-11-17-17-29-17l1-7zm89 92c7 15 6 30-2 44l-6-3c7-12 8-25 2-38l6-3zM46 31C53 16 65 8 81 6l1 6c-13 2-24 9-30 22l-6-3zM9 172c-10-13-11-28-6-43l6 2c-4 13-3 26 5 37l-5 4zM183 0c16 0 29 7 38 20l-5 4c-8-11-19-18-33-17V0zm102 106c7 15 5 30-2 44l-6-3c7-12 8-25 2-38l6-3z",__ns:1}),v("circle",{transform:"matrix(-.67 -.29 .04 -.97 188.24 152.27)",r:"14",__ns:1}),v("circle",{transform:"matrix(-.65 -.28 .07 -.94 188.32 98.63)",r:"14",__ns:1}),v("circle",{transform:"matrix(.69 .43 -.47 .38 132.73 156.33)",r:"14",__ns:1}),v("circle",{transform:"matrix(.69 .43 -.47 .38 95.04 160.39)",r:"14",__ns:1}),v("circle",{transform:"matrix(.69 .43 -.47 .38 153.61 186.19)",r:"14",__ns:1}),v("circle",{transform:"matrix(.69 .43 -.47 .38 115.92 190.25)",r:"14",__ns:1}),v("circle",{transform:"matrix(-.93 .28 -.11 .94 114.82 96.89)",r:"14",__ns:1})]})}),k=()=>v("div",{class:"k",children:[v("svg",{"aria-label":"flag of Ukraine",viewBox:"0 0 3 2",width:"2em",role:"img",__ns:1,children:[v("path",{fill:"#005bbb",d:"M0 0h3v1H0z",__ns:1}),v("path",{fill:"#ffd500",d:"M0 1h3v1H0z",__ns:1})]}),v("a",{href:"https://u24.gov.ua/",children:"Support Ukraine"})]}),M=(e,t=0,r=1)=>e>r?r:e<t?t:e,S=(e,t=0,r=Math.pow(10,t))=>Math.round(r*e)/r,_=(Math,e=>("#"===e[0]&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:4===e.length?S(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:8===e.length?S(parseInt(e.substring(6,8),16)/255,2):1})),C=({h:e,s:t,v:r,a:n})=>{const a=(200-t)*r/100;return{h:S(e),s:S(a>0&&a<200?t*r/100/(a<=100?a:200-a)*100:0),l:S(a/2),a:S(n,2)}},E=e=>{const{h:t,s:r,l:n}=C(e);return`hsl(${t}, ${r}%, ${n}%)`},L=e=>{const{h:t,s:r,l:n,a}=C(e);return`hsla(${t}, ${r}%, ${n}%, ${a})`},$=e=>{const t=e.toString(16);return t.length<2?"0"+t:t},z=(e,t)=>{if(e===t)return!0;for(const r in e)if(e[r]!==t[r])return!1;return!0},A={},P=e=>{let t=A[e];return t||(t=document.createElement("template"),t.innerHTML=e,A[e]=t),t},B=(e,t,r)=>{e.dispatchEvent(new CustomEvent(t,{bubbles:!0,detail:r}))};let I=!1;const N=e=>"touches"in e,H=(e,t)=>{const r=N(t)?t.touches[0]:t,n=e.el.getBoundingClientRect();B(e.el,"move",e.getMove({x:M((r.pageX-(n.left+window.pageXOffset))/n.width),y:M((r.pageY-(n.top+window.pageYOffset))/n.height)}))};class T{constructor(e,t,r,n){const a=P(`<div role="slider" tabindex="0" part="${t}" ${r}><div part="${t}-pointer"></div></div>`);e.appendChild(a.content.cloneNode(!0));const s=e.querySelector(`[part=${t}]`);s.addEventListener("mousedown",this),s.addEventListener("touchstart",this),s.addEventListener("keydown",this),this.el=s,this.xy=n,this.nodes=[s.firstChild,s]}set dragging(e){const t=e?document.addEventListener:document.removeEventListener;t(I?"touchmove":"mousemove",this),t(I?"touchend":"mouseup",this)}handleEvent(e){switch(e.type){case"mousedown":case"touchstart":if(e.preventDefault(),!(e=>!(I&&!N(e))&&(I||(I=N(e)),!0))(e)||!I&&0!=e.button)return;this.el.focus(),H(this,e),this.dragging=!0;break;case"mousemove":case"touchmove":e.preventDefault(),H(this,e);break;case"mouseup":case"touchend":this.dragging=!1;break;case"keydown":((e,t)=>{const r=t.keyCode;r>40||e.xy&&r<37||r<33||(t.preventDefault(),B(e.el,"move",e.getMove({x:39===r?.01:37===r?-.01:34===r?.05:33===r?-.05:35===r?1:36===r?-1:0,y:40===r?.01:38===r?-.01:0},!0)))})(this,e)}}style(e){e.forEach(((e,t)=>{for(const r in e)this.nodes[t].style.setProperty(r,e[r])}))}}class U extends T{constructor(e){super(e,"hue",'aria-label="Hue" aria-valuemin="0" aria-valuemax="360"',!1)}update({h:e}){this.h=e,this.style([{left:e/360*100+"%",color:E({h:e,s:100,v:100,a:1})}]),this.el.setAttribute("aria-valuenow",`${S(e)}`)}getMove(e,t){return{h:t?M(this.h+360*e.x,0,360):360*e.x}}}class j extends T{constructor(e){super(e,"saturation",'aria-label="Color"',!0)}update(e){this.hsva=e,this.style([{top:100-e.v+"%",left:`${e.s}%`,color:E(e)},{"background-color":E({h:e.h,s:100,v:100,a:1})}]),this.el.setAttribute("aria-valuetext",`Saturation ${S(e.s)}%, Brightness ${S(e.v)}%`)}getMove(e,t){return{s:t?M(this.hsva.s+100*e.x,0,100):100*e.x,v:t?M(this.hsva.v-100*e.y,0,100):Math.round(100-100*e.y)}}}const D=Symbol("same"),O=Symbol("color"),G=Symbol("hsva"),R=Symbol("update"),F=Symbol("parts"),q=Symbol("css"),W=Symbol("sliders");class V extends HTMLElement{static get observedAttributes(){return["color"]}get[q](){return[':host{display:flex;flex-direction:column;position:relative;width:200px;height:200px;user-select:none;-webkit-user-select:none;cursor:default}:host([hidden]){display:none!important}[role=slider]{position:relative;touch-action:none;user-select:none;-webkit-user-select:none;outline:0}[role=slider]:last-child{border-radius:0 0 8px 8px}[part$=pointer]{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;display:flex;place-content:center center;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}[part$=pointer]::after{content:"";width:100%;height:100%;border-radius:inherit;background-color:currentColor}[role=slider]:focus [part$=pointer]{transform:translate(-50%,-50%) scale(1.1)}',"[part=hue]{flex:0 0 24px;background:linear-gradient(to right,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}[part=hue-pointer]{top:50%;z-index:2}","[part=saturation]{flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,rgba(255,255,255,0));box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}[part=saturation-pointer]{z-index:3}"]}get[W](){return[j,U]}get color(){return this[O]}set color(e){if(!this[D](e)){const t=this.colorModel.toHsva(e);this[R](t),this[O]=e}}constructor(){super();const e=P(`<style>${this[q].join("")}</style>`),t=this.attachShadow({mode:"open"});t.appendChild(e.content.cloneNode(!0)),t.addEventListener("move",this),this[F]=this[W].map((e=>new e(t)))}connectedCallback(){if(this.hasOwnProperty("color")){const e=this.color;delete this.color,this.color=e}else this.color||(this.color=this.colorModel.defaultColor)}attributeChangedCallback(e,t,r){const n=this.colorModel.fromAttr(r);this[D](n)||(this.color=n)}handleEvent(e){const t=this[G],r={...t,...e.detail};let n;this[R](r),z(r,t)||this[D](n=this.colorModel.fromHsva(r))||(this[O]=n,B(this,"color-changed",{value:n}))}[D](e){return this.color&&this.colorModel.equal(e,this.color)}[R](e){this[G]=e,this[F].forEach((t=>t.update(e)))}}class X extends T{constructor(e){super(e,"alpha",'aria-label="Alpha" aria-valuemin="0" aria-valuemax="1"',!1)}update(e){this.hsva=e;const t=L({...e,a:0}),r=L({...e,a:1}),n=100*e.a;this.style([{left:`${n}%`,color:L(e)},{"--gradient":`linear-gradient(90deg, ${t}, ${r}`}]);const a=S(n);this.el.setAttribute("aria-valuenow",`${a}`),this.el.setAttribute("aria-valuetext",`${a}%`)}getMove(e,t){return{a:t?M(this.hsva.a+e.x):e.x}}}class J extends V{get[q](){return[...super[q],'[part=alpha]{flex:0 0 24px}[part=alpha]::after{display:block;content:"";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:inherit;background-image:var(--gradient);box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}[part^=alpha]{background-color:#fff;background-image:url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><rect x="8" width="8" height="8"/><rect y="8" width="8" height="8"/></svg>\')}[part=alpha-pointer]{top:50%}']}get[W](){return[...super[W],X]}}const K={defaultColor:"#0001",toHsva:e=>(({r:e,g:t,b:r,a:n})=>{const a=Math.max(e,t,r),s=a-Math.min(e,t,r),o=s?a===e?(t-r)/s:a===t?2+(r-e)/s:4+(e-t)/s:0;return{h:S(60*(o<0?o+6:o)),s:S(a?s/a*100:0),v:S(a/255*100),a:n}})(_(e)),fromHsva:e=>(({r:e,g:t,b:r,a:n})=>{const a=n<1?$(S(255*n)):"";return"#"+$(e)+$(t)+$(r)+a})((({h:e,s:t,v:r,a:n})=>{e=e/360*6,t/=100,r/=100;const a=Math.floor(e),s=r*(1-t),o=r*(1-(e-a)*t),i=r*(1-(1-e+a)*t),l=a%6;return{r:S(255*[r,o,s,s,i,r][l]),g:S(255*[i,r,r,o,s,s][l]),b:S(255*[s,s,i,r,r,o][l]),a:S(n,2)}})(e)),equal:(e,t)=>e.toLowerCase()===t.toLowerCase()||z(_(e),_(t)),fromAttr:e=>e};class Q extends J{get colorModel(){return K}}customElements.define("hex-alpha-color-picker",class extends Q{});const Y=({open:e,title:t,children:r})=>v("details",{open:e,class:"J",children:[v("summary",{class:"K",children:t}),v("fieldset",{children:r})]}),Z=()=>{const e=window.matchMedia("(min-width:700px)").matches;return v(Y,{open:e,title:"Picker",children:v("hex-alpha-color-picker",{ref:e=>{c("hex",(t=>{e.color="#"+t.hex})),e.addEventListener("color-changed",(e=>{h("hex",e.detail.value.slice(1))}))},class:"l"})})},ee=({id:t})=>{const r=v(f,{});let n;for(n in e)r.append(v("option",{value:e[n],children:n}));return v("datalist",{id:t,children:r})},te=()=>{const e=x(),t=x(),a="e"+n(4);return c("hex",(({hex:t})=>{e.current.value=t.slice(0,6)})),c("a",(({hex:e})=>{t.current.value=e.slice(6)})),v(Y,{open:!0,title:"HEX",children:v("div",{class:"m",children:[v("input",{ref:e,type:"text",list:a,autoComplete:"on",placeholder:"ffffff",spellcheck:"false",class:"n",onchange:()=>{const t=i(e.current.value);t&&h("hex",t)},"aria-label":"color"}),v(ee,{id:a}),v("input",{ref:t,type:"text",placeholder:"ff",maxLength:2,spellcheck:"false",class:"n",onchange:()=>{const e=t.current.value.trim().toLowerCase().replace(r,"");h("rgba",["a",2!==e.length?255:parseInt(e,16)])},"aria-label":"alpha (opacity)"})]})})},re=({param:e})=>{const t=x(),r=x(),n=`color channel "${e}"`,a=t=>{const r=~~t.target.valueAsNumber;h("rgba",[e,r>255?255:r])};return c(e,(n=>{const a=n[e];t.current.valueAsNumber=a,r.current.valueAsNumber=a})),v("div",{class:"F",children:[v("span",{class:"G",children:e}),v("input",{ref:t,type:"number",class:"H",oninput:a,max:255,min:0,step:1,"aria-label":n}),v("input",{ref:r,type:"range",class:"I",oninput:a,max:255,min:0,step:1,"aria-label":n})]})},ne=()=>v(Y,{open:!0,title:"RGBA",children:[v(re,{param:"r"}),v(re,{param:"g"}),v(re,{param:"b"}),v(re,{param:"a"})]}),ae=e=>{const t=e.target;t.select(),navigator.clipboard.writeText(t.value)},se=({label:e,ref:t})=>v("label",{children:[e,v("input",{ref:t,onclick:ae,class:"D",type:"text",spellcheck:"false",readOnly:!0})]}),oe=v("canvas",{width:1,height:1}),ie=v("canvas",{width:50,height:50}),le=(e,t)=>{const r=oe.cloneNode(),n=r.getContext("2d",{alpha:255!==t,desynchronized:!0,colorSpace:"srgb"});return n&&(n.fillStyle="#"+e,n.rect(0,0,1,1),n.fill()),r},ce=e=>{const t=ie.cloneNode(),r=t.getContext("2d",{alpha:!0,desynchronized:!0,colorSpace:"srgb"});return r&&(r.fillStyle=e,r.arc(25,25,24,0,2*Math.PI),r.stroke(),r.fill()),t.toDataURL("image/png",.1)},he="image/png",de=e=>`1x1_#${e.toUpperCase()}.png`,ue=e=>{e.addEventListener("click",(()=>{const{hex:t,a:r}=u(),n=le(t,r);e.download=de(t),e.href=n.toDataURL(he,.1)}))},pe=e=>{e.addEventListener("click",(async()=>{const{hex:e,a:t}=u(),r=le(e,t),n=await window.showSaveFilePicker({suggestedName:de(e)});if("granted"===await n.queryPermission()){const[e,t]=await Promise.all([n.createWritable(),new Promise((e=>r.toBlob(e,he,.1)))]);t&&await e.write(t),await e.close()}}))},fe=()=>{const e=v(f,{children:[v("svg",{viewBox:"0 0 768 768",height:"1em",width:"1em","aria-hidden":!0,__ns:1,children:v("path",{fill:"currentColor",d:"M691.199 499.2v153.6c0 10.598-4.262 20.16-11.251 27.149s-16.55 11.251-27.149 11.251H115.2c-10.598 0-20.16-4.262-27.149-11.251S76.8 663.399 76.8 652.8V499.2c0-21.196-17.204-38.4-38.4-38.4S0 478.003 0 499.2v153.6c0 31.796 12.941 60.672 33.754 81.446S83.405 768 115.2 768h537.599c31.795 0 60.672-12.941 81.446-33.754s33.754-49.651 33.754-81.446V499.2c0-21.196-17.203-38.4-38.4-38.4s-38.4 17.203-38.4 38.4zM422.4 406.503V38.401c0-21.197-17.204-38.4-38.4-38.4s-38.4 17.203-38.4 38.4v368.102L219.149 280.052c-15.015-15.015-39.322-15.015-54.298 0s-15.015 39.322 0 54.298L356.85 526.349c3.532 3.533 7.757 6.375 12.442 8.333s9.716 2.919 14.707 2.919c9.831 0 19.66-3.763 27.148-11.251l191.999-191.999c15.015-15.015 15.015-39.322 0-54.298s-39.322-15.015-54.298 0z",__ns:1})}),"Download"]});return"function"===typeof window.showSaveFilePicker?v("button",{ref:pe,type:"button",class:"L",children:e}):v("a",{ref:ue,role:"button",class:"L",href:"#",children:e})},ge=({color:e,title:t})=>v("li",{class:"N",children:v("a",{href:e,style:`background-color:${e}`,class:"O",title:t})}),me=()=>v("ul",{class:"M",children:[v(ge,{color:"#ffffffff",title:"White"}),v(ge,{color:"#000000ff",title:"Black"}),v(ge,{color:"#00000000",title:"Transparent"})]}),be=()=>{const e=[16,10,8,2].map((e=>v("option",{value:e,children:e})));return v("select",{ref:e=>{e.addEventListener("change",(()=>{d({radix:~~e.value})}))},class:"E","aria-label":"byte base",children:e})},ve=()=>{const e=new FileReader,t=document.querySelector('link[rel="icon"]'),r=x(),n=x(),a=x(),s=x(),o=x(),[i,l]=y("1x1 (82 bytes)"),[h,d]=y("#00000000");let p;const g=t=>{1!==e.readyState&&t&&e.readAsArrayBuffer(t)};return e.addEventListener("load",(()=>{if(e.result instanceof ArrayBuffer){const{radix:t}=u(),r=Array.from(new Uint8Array(e.result),(e=>e.toString(t)));s.current.value=r.join(" "),l(`1x1 (${r.length} bytes)`)}})),c("hex","radix",(({hex:e,a:s})=>{const i="#"+e,l=le(e,s),c=l.toDataURL("image/png",.1),h=`url(${c})`;d(i),l.toBlob(g),r.current.style.backgroundImage=h,n.current.value=c,o.current.value=c.slice(22),a.current.value="https://shoonia.github.io/1x1/"+i,clearTimeout(p),p=window.setTimeout((()=>{const e="display:inline-block;border:1px solid #c6e2f7;border-radius:50%;width:1em;height:1em;background-image:"+h;location.hash=i,t.href=ce(i),console.log("%c  ",e,i)}),300)})),v(f,{children:[v("div",{ref:r,class:"o",children:[v("code",{class:"r",children:h}),v("code",{class:"s",children:i}),v("div",{class:"t",children:v(me,{})})]}),v("fieldset",{class:"p",children:[v(se,{ref:n,label:"Data URL:"}),v(se,{ref:o,label:"Base64:"}),v("div",{class:"q",children:[v(se,{ref:s,label:"Bytes:"}),v(be,{})]}),v(se,{ref:a,label:"Share Link:"})]}),v(fe,{})]})};var xe=["Shift","Meta","Alt","Control"],ye="object"==typeof navigator&&/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"Meta":"Control";function we(e,t){return"function"==typeof e.getModifierState&&e.getModifierState(t)}function ke(e){return e.trim().split(" ").map((function(e){var t=e.split(/\b\+/),r=t.pop();return[t=t.map((function(e){return"$mod"===e?ye:e})),r]}))}function Me(e,t){var r;void 0===t&&(t={});var n=null!=(r=t.timeout)?r:1e3,a=Object.keys(e).map((function(t){return[ke(t),e[t]]})),s=new Map,o=null;return function(e){e instanceof KeyboardEvent&&(a.forEach((function(t){var r=t[0],n=t[1],a=s.get(r)||r;!function(e,t){return!(t[1].toUpperCase()!==e.key.toUpperCase()&&t[1]!==e.code||t[0].find((function(t){return!we(e,t)}))||xe.find((function(r){return!t[0].includes(r)&&t[1]!==r&&we(e,r)})))}(e,a[0])?we(e,e.key)||s.delete(r):a.length>1?s.set(r,a.slice(1)):(s.delete(r),n(e))})),o&&clearTimeout(o),o=setTimeout(s.clear.bind(s),n))}}const Se="x",_e=()=>{null===history.state&&history.go(-1)},Ce=()=>history.go(1);window.addEventListener("popstate",(()=>{const e=u(),t=location.hash.slice(1);if(t!==e.hex){const e=i(t);e&&h("hex",e)}})),function(e,t,r){var n;void 0===r&&(r={});var a=null!=(n=r.event)?n:"keydown",s=Me({"$mod+z":_e,"$mod+Shift+z":Ce},r);e.addEventListener(a,s)}(window);const Ee=()=>{const e=/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"⌘":"Ctrl";return v("div",{class:"u",children:[v("div",{children:[v("div",{children:"Undo:"}),v("button",{type:"button",class:"v",onclick:_e,children:v("kbd",{class:"w",children:[v("span",{class:Se,children:e}),v("span",{class:Se,children:"z"})]})})]}),v("div",{children:[v("div",{children:"Redo:"}),v("button",{type:"button",class:"v",onclick:Ce,children:v("kbd",{class:"w",children:[v("span",{class:Se,children:e}),v("span",{class:Se,children:"Shift"}),v("span",{class:Se,children:"z"})]})})]})]})},Le=()=>{const[e,t]=y("-");return fetch("https://api.github.com/repos/shoonia/1x1").then((e=>e.json())).then((e=>t(e.stargazers_count))),v("div",{class:"y",children:[v("a",{href:"https://github.com/shoonia/1x1","aria-label":"Star on GitHub",tabIndex:0,class:"A z",children:[v("svg",{height:"1.4em",width:"1.4em",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":!0,__ns:1,children:v("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.43-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z",__ns:1})}),"Stars"]}),v("a",{href:"https://github.com/shoonia/1x1/stargazers",tabIndex:0,class:"B z",children:e})]})},$e=()=>{const e=new URL("https://shoonia.github.io/pixel-gif/");return v("a",{ref:t=>{c("hex",(r=>{e.hash=r.hex.slice(0,6),t.href=e.href}))},href:e.href,class:"C","aria-label":"One pixel Base64 encoded GIF generator",children:["1x1 Pixel GIF ",v("small",{children:"(43 bytes)"})]})};function ze(...e){window.dataLayer.push(arguments)}window.dataLayer??=[];const Ae=i(location.hash)||n(6)+"ff";h("hex",Ae),history.pushState(1,"","#"+Ae),document.body.append(v((({ready:e})=>v("div",{ref:e,class:"a",children:[v("header",{class:"b",children:[v("a",{href:"./",class:"f","aria-current":"page",children:"1x1 Pixel PNG"}),v("div",{class:"g",children:[v(k,{}),v(w,{})]})]}),v("aside",{class:"c",children:[v(te,{}),v(ne,{}),v(Z,{})]}),v("main",{class:"d",children:v("div",{class:"i",children:[v("h1",{class:"h",children:"One pixel Base64 encoded transparent PNG generator"}),v(ve,{})]})}),v("footer",{class:"e",children:[v("div",{class:"f",children:v(Ee,{})}),v("div",{class:"g",children:[v(Le,{}),v($e,{})]})]})]})),{ready:l}),v((()=>(ze("js",new Date),ze("config","G-2W35Q7B86C"),v("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-2W35Q7B86C"}))),{}));