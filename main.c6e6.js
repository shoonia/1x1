const e=(t,r)=>{Array.isArray(t)?t.some((t=>e(t,r))):null!=t&&!1!==t&&r.append(t)},t=t=>{const r=new DocumentFragment;return e(t,r),r},r=new Set(["ns","children","ref"]),a=new Map,n=new Set(["value"]),s=(t,s)=>{let o,i,l=s.ns?document.createElementNS(s.ns,t):document.createElement(t);for(o in s)if(!r.has(o))if(i=s[o],a.has(o))a.get(o)(l,i,o);else if("style"===o)if("string"===typeof i)l.style.cssText=i;else for(o in i)o.startsWith("--")?l.style.setProperty(o,i[o]):l.style[o]=i[o];else n.has(o)||o.startsWith("on")&&o in l?l[o]=i:null==i||"boolean"===typeof i&&"-"!==o[4]?i&&l.setAttribute(o,""):l.setAttribute(o,i);return e(s.children,"template"===t?l.content:l),(i=s.ref)&&("function"===typeof i?i(l):i.current=l),l},o=e=>Object.seal({current:e}),i=e=>{const t=new Text(e);return[t,r=>{e!==r&&(t.textContent=e=r)}]},l="http://www.w3.org/2000/svg",c=JSON.parse(document.getElementById("colors").textContent),h=/^#/,d=/[^\da-f]/,u=e=>{let t="";for(;e--;)t+=(16*Math.random()|0).toString(16);return t},p=e=>{const t=e.toString(16);return t.length<2?"0"+t:t},f=({r:e,g:t,b:r,a})=>[e,t,r,a].map(p).join(""),g=e=>e.split("").map((e=>e+e)).join(""),m=e=>{let t=e.trim().toLowerCase().replace(h,"");if(t in c)t=c[t];else if(d.test(t))try{t=function(e,t,r,a){let n=(e+(a||"")).toString().includes("%");if("string"!==typeof e||t)void 0!==a&&(a=Number.parseFloat(a));else{const s=(e=>{const t=e.replace(/rgba?\(([^)]+)\)/,"$1").split(/[,\s/]+/).filter(Boolean);if(t.length<3)return;const r=(e,t)=>(e=e.trim()).endsWith("%")?Math.min(Number.parseFloat(e)*t/100,t):Math.min(Number.parseFloat(e),t),a=r(t[0],255),n=r(t[1],255),s=r(t[2],255);let o;return 4===t.length&&(o=r(t[3],1)),[a,n,s,o]})(e);if(!s)throw new TypeError("Invalid or unsupported color format.");n=!1,[e,t,r,a]=s}if("number"!==typeof e||"number"!==typeof t||"number"!==typeof r||e>255||t>255||r>255)throw new TypeError("Expected three numbers below 256");if("number"===typeof a){if(!n&&a>=0&&a<=1)a=Math.round(255*a);else{if(!(n&&a>=0&&a<=100))throw new TypeError(`Expected alpha value (${a}) as a fraction or percentage`);a=Math.round(255*a/100)}a=(256|a).toString(16).slice(1)}else a="";return((e,t,r,a)=>(r|t<<8|e<<16|1<<24).toString(16).slice(1)+a)(e,t,r,a)}(e)}catch{return}switch(t.length){case 8:return t;case 6:return t+"ff";case 4:return g(t);case 3:return g(t)+"ff"}},{readyStore:b,connect:v,dispatch:x,setState:y,getState:w}=(e=>{let t={},r={},a=[],n=(e,a)=>{if("@dispatch"!==e&&n("@dispatch",[e,a]),t[e]){let s;t[e].forEach((e=>{let t=e(r,a);t&&"function"!==typeof t.then&&(r={...r,...t},s={...s,...t})})),s&&n("@changed",s)}},s=(e,r)=>((t[e]??=[]).push(r),()=>{t[e]=t[e].filter((e=>e!==r))}),o=()=>r,i=e=>n("@set",e);return s("@set",((e,t)=>t)),e.forEach((e=>{e&&e({dispatch:n,on:s,get:o,set:i})})),n("@init"),{dispatch:n,getState:o,setState:i,connect(...e){let t=e.pop();return a.push({keys:e,cb:t}),()=>{a=a.filter((e=>e.cb!==t))}},readyStore:()=>(n("@ready"),s("@changed",((e,t)=>{a.forEach((e=>{e.keys.some((e=>e in t))&&e.cb(r)}))})),Promise.all(a.map((e=>e.cb(r)))))}})([e=>{e.on("@init",(()=>({r:0,g:0,b:0,a:0,hex:"00000000",radix:16,toast:!1}))),e.on("rgba",((e,[t,r])=>({hex:f({...e,[t]:r}),[t]:r}))),e.on("hex",((e,t)=>{const r=t.length<8?t+"ff":t,a=parseInt(r,16);return((e,t,r)=>{for(const a in t)e[a]!==t[a]&&(r[a]=t[a]);return r})(e,{r:a>>24&255,g:a>>16&255,b:a>>8&255,a:255&a},{hex:r})}))}]),k=(e,t=0,r=1)=>e>r?r:e<t?t:e,M=(e,t=0,r=Math.pow(10,t))=>Math.round(r*e)/r,S=(Math,e=>("#"===e[0]&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:4===e.length?M(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:8===e.length?M(parseInt(e.substring(6,8),16)/255,2):1})),E=({h:e,s:t,v:r,a})=>{const n=(200-t)*r/100;return{h:M(e),s:M(n>0&&n<200?t*r/100/(n<=100?n:200-n)*100:0),l:M(n/2),a:M(a,2)}},C=e=>{const{h:t,s:r,l:a}=E(e);return`hsl(${t}, ${r}%, ${a}%)`},L=e=>{const{h:t,s:r,l:a,a:n}=E(e);return`hsla(${t}, ${r}%, ${a}%, ${n})`},$=e=>{const t=e.toString(16);return t.length<2?"0"+t:t},z=(e,t)=>{if(e===t)return!0;for(const r in e)if(e[r]!==t[r])return!1;return!0},A={},B=e=>{let t=A[e];return t||(t=document.createElement("template"),t.innerHTML=e,A[e]=t),t},P=(e,t,r)=>{e.dispatchEvent(new CustomEvent(t,{bubbles:!0,detail:r}))};let I=!1;const N=e=>"touches"in e,T=(e,t)=>{const r=N(t)?t.touches[0]:t,a=e.el.getBoundingClientRect();P(e.el,"move",e.getMove({x:k((r.pageX-(a.left+window.pageXOffset))/a.width),y:k((r.pageY-(a.top+window.pageYOffset))/a.height)}))};class H{constructor(e,t,r,a){const n=B(`<div role="slider" tabindex="0" part="${t}" ${r}><div part="${t}-pointer"></div></div>`);e.appendChild(n.content.cloneNode(!0));const s=e.querySelector(`[part=${t}]`);s.addEventListener("mousedown",this),s.addEventListener("touchstart",this),s.addEventListener("keydown",this),this.el=s,this.xy=a,this.nodes=[s.firstChild,s]}set dragging(e){const t=e?document.addEventListener:document.removeEventListener;t(I?"touchmove":"mousemove",this),t(I?"touchend":"mouseup",this)}handleEvent(e){switch(e.type){case"mousedown":case"touchstart":if(e.preventDefault(),!(e=>!(I&&!N(e))&&(I||(I=N(e)),!0))(e)||!I&&0!=e.button)return;this.el.focus(),T(this,e),this.dragging=!0;break;case"mousemove":case"touchmove":e.preventDefault(),T(this,e);break;case"mouseup":case"touchend":this.dragging=!1;break;case"keydown":((e,t)=>{const r=t.keyCode;r>40||e.xy&&r<37||r<33||(t.preventDefault(),P(e.el,"move",e.getMove({x:39===r?.01:37===r?-.01:34===r?.05:33===r?-.05:35===r?1:36===r?-1:0,y:40===r?.01:38===r?-.01:0},!0)))})(this,e)}}style(e){e.forEach(((e,t)=>{for(const r in e)this.nodes[t].style.setProperty(r,e[r])}))}}class j extends H{constructor(e){super(e,"hue",'aria-label="Hue" aria-valuemin="0" aria-valuemax="360"',!1)}update({h:e}){this.h=e,this.style([{left:e/360*100+"%",color:C({h:e,s:100,v:100,a:1})}]),this.el.setAttribute("aria-valuenow",`${M(e)}`)}getMove(e,t){return{h:t?k(this.h+360*e.x,0,360):360*e.x}}}class U extends H{constructor(e){super(e,"saturation",'aria-label="Color"',!0)}update(e){this.hsva=e,this.style([{top:100-e.v+"%",left:`${e.s}%`,color:C(e)},{"background-color":C({h:e.h,s:100,v:100,a:1})}]),this.el.setAttribute("aria-valuetext",`Saturation ${M(e.s)}%, Brightness ${M(e.v)}%`)}getMove(e,t){return{s:t?k(this.hsva.s+100*e.x,0,100):100*e.x,v:t?k(this.hsva.v-100*e.y,0,100):Math.round(100-100*e.y)}}}const D=Symbol("same"),O=Symbol("color"),G=Symbol("hsva"),R=Symbol("update"),F=Symbol("parts"),W=Symbol("css"),q=Symbol("sliders");class V extends HTMLElement{static get observedAttributes(){return["color"]}get[W](){return[':host{display:flex;flex-direction:column;position:relative;width:200px;height:200px;user-select:none;-webkit-user-select:none;cursor:default}:host([hidden]){display:none!important}[role=slider]{position:relative;touch-action:none;user-select:none;-webkit-user-select:none;outline:0}[role=slider]:last-child{border-radius:0 0 8px 8px}[part$=pointer]{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;display:flex;place-content:center center;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}[part$=pointer]::after{content:"";width:100%;height:100%;border-radius:inherit;background-color:currentColor}[role=slider]:focus [part$=pointer]{transform:translate(-50%,-50%) scale(1.1)}',"[part=hue]{flex:0 0 24px;background:linear-gradient(to right,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}[part=hue-pointer]{top:50%;z-index:2}","[part=saturation]{flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,rgba(255,255,255,0));box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}[part=saturation-pointer]{z-index:3}"]}get[q](){return[U,j]}get color(){return this[O]}set color(e){if(!this[D](e)){const t=this.colorModel.toHsva(e);this[R](t),this[O]=e}}constructor(){super();const e=B(`<style>${this[W].join("")}</style>`),t=this.attachShadow({mode:"open"});t.appendChild(e.content.cloneNode(!0)),t.addEventListener("move",this),this[F]=this[q].map((e=>new e(t)))}connectedCallback(){if(this.hasOwnProperty("color")){const e=this.color;delete this.color,this.color=e}else this.color||(this.color=this.colorModel.defaultColor)}attributeChangedCallback(e,t,r){const a=this.colorModel.fromAttr(r);this[D](a)||(this.color=a)}handleEvent(e){const t=this[G],r={...t,...e.detail};let a;this[R](r),z(r,t)||this[D](a=this.colorModel.fromHsva(r))||(this[O]=a,P(this,"color-changed",{value:a}))}[D](e){return this.color&&this.colorModel.equal(e,this.color)}[R](e){this[G]=e,this[F].forEach((t=>t.update(e)))}}class Q extends H{constructor(e){super(e,"alpha",'aria-label="Alpha" aria-valuemin="0" aria-valuemax="1"',!1)}update(e){this.hsva=e;const t=L({...e,a:0}),r=L({...e,a:1}),a=100*e.a;this.style([{left:`${a}%`,color:L(e)},{"--gradient":`linear-gradient(90deg, ${t}, ${r}`}]);const n=M(a);this.el.setAttribute("aria-valuenow",`${n}`),this.el.setAttribute("aria-valuetext",`${n}%`)}getMove(e,t){return{a:t?k(this.hsva.a+e.x):e.x}}}class X extends V{get[W](){return[...super[W],'[part=alpha]{flex:0 0 24px}[part=alpha]::after{display:block;content:"";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:inherit;background-image:var(--gradient);box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}[part^=alpha]{background-color:#fff;background-image:url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><rect x="8" width="8" height="8"/><rect y="8" width="8" height="8"/></svg>\')}[part=alpha-pointer]{top:50%}']}get[q](){return[...super[q],Q]}}const J={defaultColor:"#0001",toHsva:e=>(({r:e,g:t,b:r,a})=>{const n=Math.max(e,t,r),s=n-Math.min(e,t,r),o=s?n===e?(t-r)/s:n===t?2+(r-e)/s:4+(e-t)/s:0;return{h:M(60*(o<0?o+6:o)),s:M(n?s/n*100:0),v:M(n/255*100),a}})(S(e)),fromHsva:e=>(({r:e,g:t,b:r,a})=>{const n=a<1?$(M(255*a)):"";return"#"+$(e)+$(t)+$(r)+n})((({h:e,s:t,v:r,a})=>{e=e/360*6,t/=100,r/=100;const n=Math.floor(e),s=r*(1-t),o=r*(1-(e-n)*t),i=r*(1-(1-e+n)*t),l=n%6;return{r:M(255*[r,o,s,s,i,r][l]),g:M(255*[i,r,r,o,s,s][l]),b:M(255*[s,s,i,r,r,o][l]),a:M(a,2)}})(e)),equal:(e,t)=>e.toLowerCase()===t.toLowerCase()||z(S(e),S(t)),fromAttr:e=>e},K=({open:e,title:t,children:r})=>s("details",{open:e,class:"M",children:[s("summary",{class:"N",children:t}),s("fieldset",{children:r})]});customElements.define("color-picker",class extends X{get colorModel(){return J}});const Y=({param:e})=>{const t=o(),r=o(),a=`color channel "${e}"`,n=t=>{const r=~~t.target.valueAsNumber;x("rgba",[e,r>255?255:r])};return v(e,(a=>{const n=a[e];t.current.valueAsNumber=n,r.current.valueAsNumber=n})),s("div",{class:"H",children:[s("span",{class:"I",children:e}),s("input",{ref:t,type:"number",class:"J",oninput:n,max:255,min:0,step:1,"aria-label":a}),s("input",{ref:r,type:"range",class:"K",oninput:n,max:255,min:0,step:1,"aria-label":a})]})},_=e=>{const t=e.target;t.select(),navigator.clipboard.writeText(t.value),y({toast:!0})},Z=({label:e,ref:t})=>s("label",{children:[e,s("input",{ref:t,onclick:_,class:"G",type:"text",spellcheck:"false",readonly:""})]}),ee=s("canvas",{width:1,height:1}),te=(e,t)=>{const r=ee.cloneNode(),a=r.getContext("2d",{alpha:t<255,desynchronized:!0,colorSpace:"srgb"});return a&&(a.fillStyle="#"+e,a.rect(0,0,1,1),a.fill()),r},re=s("canvas",{width:50,height:50}),ae=re.getContext("2d",{alpha:!0,desynchronized:!0,colorSpace:"srgb"});ae.arc(25,25,24,0,2*Math.PI);const ne=e=>(ae.fillStyle=e,ae.stroke(),ae.fill(),re.toDataURL("image/png",.1)),se="image/png",oe=e=>`1x1_#${e.toUpperCase()}.png`,ie=t([s("svg",{width:"1em",height:"1em",viewBox:"0 0 768 768",children:s("path",{fill:"currentcolor",d:"M691.199 499.2v153.6c0 10.598-4.262 20.16-11.251 27.149s-16.55 11.251-27.149 11.251H115.2c-10.598 0-20.16-4.262-27.149-11.251S76.8 663.399 76.8 652.8V499.2c0-21.196-17.204-38.4-38.4-38.4S0 478.003 0 499.2v153.6c0 31.796 12.941 60.672 33.754 81.446S83.405 768 115.2 768h537.599c31.795 0 60.672-12.941 81.446-33.754s33.754-49.651 33.754-81.446V499.2c0-21.196-17.203-38.4-38.4-38.4s-38.4 17.203-38.4 38.4zM422.4 406.503V38.401c0-21.197-17.204-38.4-38.4-38.4s-38.4 17.203-38.4 38.4v368.102L219.149 280.052c-15.015-15.015-39.322-15.015-54.298 0s-15.015 39.322 0 54.298L356.85 526.349c3.532 3.533 7.757 6.375 12.442 8.333s9.716 2.919 14.707 2.919c9.831 0 19.66-3.763 27.148-11.251l191.999-191.999c15.015-15.015 15.015-39.322 0-54.298s-39.322-15.015-54.298 0z",ns:l}),ns:l}),"Download"]),le=({color:e,title:t})=>s("li",{class:"Q",children:s("a",{href:e,style:{backgroundColor:e},class:"R",title:t})}),ce=()=>{const e=[16,10,8,2].map((e=>s("option",{value:e,children:e})));return s("select",{ref:e=>e.addEventListener("change",(()=>y({radix:~~e.value}))),class:"L","aria-label":"byte base",children:e})};var he=["Shift","Meta","Alt","Control"],de="object"==typeof navigator?navigator.platform:"",ue=/Mac|iPod|iPhone|iPad/.test(de),pe=ue?"Meta":"Control",fe="Win32"===de?["Control","Alt"]:ue?["Alt"]:[];function ge(e,t){return"function"==typeof e.getModifierState&&(e.getModifierState(t)||fe.includes(t)&&e.getModifierState("AltGraph"))}function me(e){return e.trim().split(" ").map((function(e){var t=e.split(/\b\+/),r=t.pop();return[t=t.map((function(e){return"$mod"===e?pe:e})),r]}))}function be(e,t){var r;void 0===t&&(t={});var a=null!=(r=t.timeout)?r:1e3,n=Object.keys(e).map((function(t){return[me(t),e[t]]})),s=new Map,o=null;return function(e){e instanceof KeyboardEvent&&(n.forEach((function(t){var r=t[0],a=t[1],n=s.get(r)||r;!function(e,t){return!(t[1].toUpperCase()!==e.key.toUpperCase()&&t[1]!==e.code||t[0].find((function(t){return!ge(e,t)}))||he.find((function(r){return!t[0].includes(r)&&t[1]!==r&&ge(e,r)})))}(e,n[0])?ge(e,e.key)||s.delete(r):n.length>1?s.set(r,n.slice(1)):(s.delete(r),a(e))})),o&&clearTimeout(o),o=setTimeout(s.clear.bind(s),a))}}const ve="B",xe=/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"⌘":"Ctrl",ye=()=>{null===history.state&&history.go(-1)},we=()=>history.go(1);addEventListener("popstate",(()=>{const e=w(),t=location.hash.slice(1);if(t!==e.hex){const e=m(t);e&&x("hex",e)}})),function(e,t,r){var a;void 0===r&&(r={});var n=null!=(a=r.event)?a:"keydown",s=be({"$mod+z":ye,"$mod+Shift+z":we},r);e.addEventListener(n,s)}(window);const ke=new URL("https://shoonia.github.io/pixel-gif/");function Me(e,t){window.dataLayer.push(arguments)}window.dataLayer=[],Me("js",new Date),Me("config","G-2W35Q7B86C");const Se=m(location.hash)||u(6)+"ff";x("hex",Se),history.replaceState(1,"","#"+Se),document.body.append(t([s("div",{ref:b,class:"a",children:[s("header",{class:"b",children:[s("a",{href:"./",class:"f","aria-current":"page",children:"1x1 Pixel PNG"}),s("div",{class:"g",children:[s("div",{class:"k",children:[s("svg",{"aria-label":"flag of Ukraine",viewBox:"0 0 3 2",width:"2em",children:[s("path",{fill:"#005bbb",d:"M0 0h3v1H0z",ns:l}),s("path",{fill:"#ffd500",d:"M0 1h3v1H0z",ns:l})],ns:l}),s("a",{href:"https://u24.gov.ua/",children:"Support Ukraine"})]}),s("button",{type:"button","aria-label":"random color",class:"j",onclick:()=>x("hex",u(6)+"ff"),children:s("svg",{width:"40",height:"40",fill:"currentcolor",viewBox:"0 0 290 221",children:[s("path",{d:"m239 128-36 79c-1 3-4 5-8 6l-86 8c-4 0-7-2-9-5l-50-70c-2-3-3-7-1-10l36-79c1-3 4-5 8-6l86-8c4 0 7 2 9 5l50 70c2 3 3 7 1 10zm-88 5 44 61 31-70-43-61-32 70zm32 67-42-59-74 6 42 60 74-7zM64 134l75-7 32-70-75 7-32 70zM54 43c7-15 20-23 35-25l2 6c-14 2-25 9-31 22l-6-3zM23 170c-9-13-11-28-6-43l7 2c-4 13-4 26 5 37l-6 4zM181 13c15 1 25 7 34 20l-6 4c-6-11-17-17-29-17l1-7zm89 92c7 15 6 30-2 44l-6-3c7-12 8-25 2-38l6-3zM46 31C53 16 65 8 81 6l1 6c-13 2-24 9-30 22l-6-3zM9 172c-10-13-11-28-6-43l6 2c-4 13-3 26 5 37l-5 4zM183 0c16 0 29 7 38 20l-5 4c-8-11-19-18-33-17V0zm102 106c7 15 5 30-2 44l-6-3c7-12 8-25 2-38l6-3z",ns:l}),s("circle",{r:"14",transform:"matrix(-.7 -.3 0 -1 188 152)",ns:l}),s("circle",{r:"14",transform:"matrix(-.7 -.3 0 -1 188 99)",ns:l}),s("circle",{r:"14",transform:"matrix(.7 .4 -.5 .4 133 156)",ns:l}),s("circle",{r:"14",transform:"matrix(.7 .4 -.5 .4 95 160)",ns:l}),s("circle",{r:"14",transform:"matrix(.7 .4 -.5 .4 154 186)",ns:l}),s("circle",{r:"14",transform:"matrix(.7 .4 -.5 .4 116 190)",ns:l}),s("circle",{r:"14",transform:"matrix(-.9 .3 -.1 1 115 97)",ns:l})],ns:l})})]})]}),s("aside",{class:"c",children:[K({open:!0,title:"HEX",children:s("search",{class:"l",children:[s("input",{ref:e=>{e.addEventListener("change",(()=>{const t=m(e.value);t&&x("hex",t)})),v("hex",(t=>{e.value=t.hex.slice(0,6)}))},type:"search",list:"color-list",autocomplete:"on",placeholder:"ffffff",minlength:3,maxlength:25,spellcheck:"false",class:"m","aria-label":"color"}),s("input",{ref:e=>{e.addEventListener("change",(()=>{const t=e.value.trim().toLowerCase().replace(d,"");x("rgba",["a",2!==t.length?255:parseInt(t,16)])})),v("a",(t=>{e.value=t.hex.slice(6)}))},type:"text",placeholder:"ff",maxlength:2,spellcheck:"false",class:"m","aria-label":"alpha (opacity)"}),s("datalist",{id:"color-list",children:Object.keys(c).map((e=>s("option",{value:c[e],children:e})))})]})}),K({open:!0,title:"RGBA",children:[Y({param:"r"}),Y({param:"g"}),Y({param:"b"}),Y({param:"a"})]}),K({open:matchMedia("(min-width:700px)").matches,title:"Picker",children:s("color-picker",{ref:e=>{v("hex",(t=>{e.color="#"+t.hex})),e.addEventListener("color-changed",(e=>x("hex",e.detail.value.slice(1))))},class:"n"})})]}),s("main",{class:"d",children:s("div",{class:"i",children:[s("h1",{class:"h",children:"One pixel Base64 encoded transparent PNG generator"}),(()=>{const e=new FileReader,r=document.querySelector('link[rel="icon"]'),a=o(),n=o(),l=o(),c=o(),h=o(),[d,u]=i(0),[p,f]=i("#00000000");let g;const m=t=>{1!==e.readyState&&t&&e.readAsArrayBuffer(t)};return e.addEventListener("load",(()=>{if(e.result instanceof ArrayBuffer){const{radix:t}=w(),r=Array.from(new Uint8Array(e.result),(e=>e.toString(t)));c.current.value=r.join(" "),u(r.length)}})),v("hex","radix",(({hex:e,a:t})=>{const s="#"+e,o=te(e,t),i=o.toDataURL("image/png",.1),c=`url(${i})`;f(s),o.toBlob(m),a.current.style.backgroundImage=c,n.current.value=i,h.current.value=i.slice(22),l.current.value="https://shoonia.github.io/1x1/"+s,clearTimeout(g),g=setTimeout((()=>{const e="display:inline-block;border:1px solid #c6e2f7;border-radius:50%;width:1em;height:1em;background-image:"+c;location.hash=s,r.href=ne(s),console.log("%c  ",e,s)}),300)})),t([s("div",{ref:a,class:"o",children:[s("code",{class:"r",children:p}),s("code",{class:"s",children:["1x1 (",d," bytes)"]}),s("div",{class:"t",children:s("ul",{class:"P",children:[le({color:"#ffffffff",title:"White"}),le({color:"#000000ff",title:"Black"}),le({color:"#00000000",title:"Transparent"})]})})]}),s("fieldset",{class:"p",children:[Z({ref:n,label:"Data URL:"}),Z({ref:h,label:"Base64:"}),s("div",{class:"q",children:[Z({ref:c,label:"Bytes:"}),ce()]}),Z({ref:l,label:"Share Link:"})]}),"function"===typeof showSaveFilePicker?s("button",{onclick:async()=>{const{hex:e,a:t}=w(),r=te(e,t),a=await showSaveFilePicker({suggestedName:oe(e)}),n=await new Promise((e=>r.toBlob(e,se,.1)));if(n){const e=await a.createWritable();await e.write(n),await e.close()}},type:"button",class:"O",children:ie}):s("a",{ref:e=>e.addEventListener("click",(()=>{const{hex:t,a:r}=w(),a=te(t,r);e.download=oe(t),e.href=a.toDataURL(se,.1)})),role:"button",class:"O",href:"#",children:ie})])})()]})}),s("div",{ref:e=>{let t;v("toast",(r=>{r.toast&&(clearTimeout(t),e.classList.add("E"),t=setTimeout((()=>e.classList.remove("E")),3e3))}))},class:"D",role:"status",children:"Copied to clipboard"}),s("footer",{class:"e",children:[s("div",{class:"f",children:s("div",{class:"y",children:[s("div",{children:[s("div",{children:"Undo:"}),s("button",{type:"button",class:"z",onclick:ye,children:s("kbd",{class:"A",children:[s("span",{class:ve,children:xe}),s("span",{class:ve,children:"z"})]})})]}),s("div",{children:[s("div",{children:"Redo:"}),s("button",{type:"button",class:"z",onclick:we,children:s("kbd",{class:"A",children:[s("span",{class:ve,children:xe}),s("span",{class:ve,children:"Shift"}),s("span",{class:ve,children:"z"})]})})]})]})}),s("div",{class:"g",children:[s("div",{class:"u",children:[s("a",{href:"https://github.com/shoonia/1x1","aria-label":"Star on GitHub",tabindex:0,class:"w v",children:[s("svg",{width:"1.4em",height:"1.4em",fill:"currentcolor",viewBox:"0 0 16 16",children:s("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.43-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z",ns:l}),ns:l}),"Stars"]}),s("a",{href:"https://github.com/shoonia/1x1/stargazers",tabindex:0,class:"x v",children:(()=>{const[e,t]=i("-");return fetch("https://api.github.com/repos/shoonia/1x1").then((e=>e.json())).then((e=>t(e.stargazers_count||"-"))),e})()})]}),s("a",{ref:e=>{v("hex",(t=>{ke.hash=t.hex.slice(0,6),e.href=ke.href}))},href:ke.href,class:"C","aria-label":"One pixel Base64 encoded GIF generator",children:["1x1 Pixel GIF ",s("small",{children:"(43 bytes)"})]})]})]})]}),s("script",{async:"",src:"https://www.googletagmanager.com/gtag/js?id=G-2W35Q7B86C"})]));