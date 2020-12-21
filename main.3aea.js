(()=>{var e={323:e=>{e.exports=(e,t,a,r)=>{const n=(e+(r||"")).toString().includes("%");if("string"===typeof e?[e,t,a,r]=e.match(/(0?\.?\d{1,3})%?\b/g).map(Number):void 0!==r&&(r=parseFloat(r)),"number"!==typeof e||"number"!==typeof t||"number"!==typeof a||e>255||t>255||a>255)throw new TypeError("Expected three numbers below 256");if("number"===typeof r){if(!n&&r>=0&&r<=1)r=Math.round(255*r);else{if(!(n&&r>=0&&r<=100))throw new TypeError(`Expected alpha value (${r}) as a fraction or percentage`);r=Math.round(255*r/100)}r=(256|r).toString(16).slice(1)}else r="";return(a|t<<8|e<<16|1<<24).toString(16).slice(1)+r}}},t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={exports:{}};return e[r](n,n.exports,a),n.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=["Shift","Meta","Alt","Control"],t="object"==typeof navigator&&/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"Meta":"Control",r=a(323),n=a.n(r);const o=document.createElement("canvas"),i=e=>{const t=o.cloneNode(),a=t.getContext("2d");return t.width=1,t.height=1,a.fillStyle=e,a.rect(0,0,1,1),a.fill(),t},f=e=>{const t=o.cloneNode(),a=t.getContext("2d");return t.width=50,t.height=50,a.fillStyle=e,a.arc(25,25,24,0,2*Math.PI),a.stroke(),a.fill(),t.toDataURL()},d=e=>document.querySelector(e),l=e=>document.querySelectorAll(e),c=e=>{e.target.select(),document.execCommand("copy")},s=e=>{const t=e.toString(16);return t.length<2?"0"+t:t},u=({R:e,G:t,B:a,A:r})=>[e,t,a,r].map(s).join(""),g=e=>{let t="";for(;0<e--;)t+=(16*Math.random()|0).toString(16);return t},h={black:"000000",silver:"c0c0c0",gray:"808080",white:"ffffff",maroon:"800000",red:"ff0000",purple:"800080",fuchsia:"ff00ff",green:"008000",lime:"00ff00",olive:"808000",yellow:"ffff00",navy:"000080",blue:"0000ff",teal:"008080",aqua:"00ffff",orange:"ffa500",aliceblue:"f0f8ff",antiquewhite:"faebd7",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",blanchedalmond:"ffebcd",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",oldlace:"fdf5e6",olivedrab:"6b8e23",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",whitesmoke:"f5f5f5",yellowgreen:"9acd32",rebeccapurple:"663399"},b=[],p=(e,t)=>{b.push({key:e,cb:t})},{get:m,dispatch:y}=(e=>{let t={},a={},r={dispatch(e,n){if("@dispatch"!==e&&r.dispatch("@dispatch",[e,n,t[e]]),t[e]){let o;t[e].forEach((i=>{let f=t[e].includes(i)&&i(a,n,r);f&&"function"!==typeof f.then&&(a=Object.assign({},a,f),o=Object.assign({},o,f))})),o&&r.dispatch("@changed",o)}},get:()=>a,on:(e,a)=>((t[e]||(t[e]=[])).push(a),()=>{t[e]=t[e].filter((e=>e!==a))})};return e.forEach((e=>{e&&e(r)})),r.dispatch("@init"),r})([({on:e})=>{e("@init",(()=>({R:255,G:255,B:255,A:255,hex:"ffffff"}))),e("@changed",((e,t)=>{b.forEach((a=>{a.key in t&&a.cb(e)}))})),e("hex",((e,t)=>{const a=parseInt(t,16);return{R:a>>24&255,G:a>>16&255,B:a>>8&255,A:255&a,hex:t}})),e("rgba",((e,[t,a])=>{const r=(e=>{const t=Math.abs(~~e);return t>255?255:t})(a);return{[t]:r,hex:u(Object.assign({},e,{[t]:r}))}}))}]),v=d("#inputColor"),w=d("#inputAlpha"),k=d("#picker"),E=d("#rangeRed"),x=d("#numberRed"),S=d("#rangeGreen"),A=d("#numberGreen"),L=d("#rangeBlue"),M=d("#numberBlue"),B=d("#rangeAlpha"),C=d("#numberAlpha"),$=d("#outputImage"),q=d("#outputDataURL"),R=d("#outputBase64"),O=d("#outputCSS"),P=d("#outputBytes"),j=d("#download"),G=d('link[rel="icon"]'),I=new FileReader,U="ff",D=/[^\da-z]/i,N=/[^\da-f]/i,z=/Mac\sOS/gi,T=/Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i,F=e=>y("hex",e),_=({target:e})=>y("rgba",[e.dataset.rgba,e.valueAsNumber]),H=e=>{1!==I.readyState&&I.readAsArrayBuffer(e)},K=e=>{let t=e.trim().toLowerCase().replace(D,"");if(t in h&&(t=h[t]),N.test(t))try{t=n()(e)}catch(e){return[!1]}return 3===t.length&&(t+=t),6===t.length&&(t+=U),8!==t.length?[!1]:[!0,t]};p("hex",(({hex:e})=>{const t=e.slice(0,6),a="#"+e,r=i(a),n=r.toDataURL("image/png"),o=`url(${n})`,d=`background-image: ${o};`;console.log("%c  ",`display:inline-block;border:1px solid #c6e2f7;border-radius:50%;width:1em;height:1em;${d}`,a),r.toBlob(H),location.hash=a,document.title=`1x1 Pixel PNG | ${a}`,G.href=f(a),v.value=t,k.value="#"+t,$.style.backgroundImage=o,$.title=`8-Digit Hex: ${a}`,q.value=n,O.value=d,R.value=n.slice(22),j.href=n,j.download=`1x1_${a}.png`})),p("R",(({R:e})=>{E.value=e,x.value=e})),p("G",(({G:e})=>{S.value=e,A.value=e})),p("B",(({B:e})=>{L.value=e,M.value=e})),p("A",(({A:e})=>{B.value=e,C.value=e,w.value=s(e)})),v.addEventListener("change",(()=>{const[e,t]=K(v.value);e?F(t):v.focus()})),w.addEventListener("change",(()=>{const e=w.value.trim().toLowerCase().replace(N,"");y("rgba",["A",parseInt(2!==e.length?U:e,16)])})),k.addEventListener("change",(()=>{const[e,t]=K(k.value);e&&F(t)})),I.addEventListener("load",(()=>{const e=new Uint8Array(I.result);P.value=e.toString()})),l("[data-rgba]").forEach((e=>{e.addEventListener("change",_)})),l("[data-clipboard]").forEach((e=>{e.addEventListener("click",c)})),d("#rgbaDetails").open=window.innerWidth>701,d("#colorList").appendChild((()=>{const e=new DocumentFragment,t=document.createElement("option");for(let a in h){const r=t.cloneNode();r.value=h[a],r.textContent=a,e.appendChild(r)}return e})()),d("#random").addEventListener("click",(()=>{F(g(6)+U)})),window.addEventListener("popstate",(()=>{const{hex:e}=m(),t=location.hash.slice(1);if(t===e)return;const[a,r]=K(t);a&&F(r)})),(()=>{const a=z.test(navigator.userAgent);if(T.test(navigator.userAgent))d("#history").remove();else{const r=a?".darwin-hint":".win-hint",n=()=>{null===history.state&&history.go(-1)},o=()=>history.go(1);!function(a,r){var n=Object.keys(r).map((function(e){return[(a=e,a.trim().split(" ").map((function(e){var a=e.split("+"),r=a.pop();return[a=a.map((function(e){return"$mod"===e?t:e})),r]}))),r[e]];var a})),o=new Map,i=null;a.addEventListener("keydown",(function(t){t instanceof KeyboardEvent&&(n.forEach((function(a){var r=a[0],n=a[1],i=o.get(r)||r;!function(t,a){return!(a[1].toUpperCase()!==t.key.toUpperCase()&&a[1]!==t.code||a[0].find((function(e){return!t.getModifierState(e)}))||e.find((function(e){return!a[0].includes(e)&&a[1]!==e&&t.getModifierState(e)})))}(t,i[0])?t.getModifierState(t.key)||o.delete(r):i.length>1?o.set(r,i.slice(1)):(o.delete(r),n(t))})),i&&clearTimeout(i),i=setTimeout(o.clear.bind(o),1e3))}))}(window,{"$mod+z":n,"$mod+Shift+z":o}),d("#undo").addEventListener("click",n),d("#redo").addEventListener("click",o),l(r).forEach((e=>{e.hidden=!1}))}(()=>{const e=document.cookie.replace(/(?:(?:^|.*;\s*)cid\s*=\s*([^;]*).*$)|^.*$/,"$1"),t=""!==e?e:g(21),a="https://www.google-analytics.com/collect?v=1&tid=UA-128241641-2&aip=1&t=event&ea=open&dp=&dt=&cid="+t;document.cookie="cid="+t+";domain=shoonia.github.io;path=/;max-age=31536000";let r=!1;try{r=navigator.sendBeacon(a)}catch(e){}r||((new Image).src=a)})();const[r,n]=K(location.hash),o=r?n:g(6)+U;history.pushState(1,null,`#${o}`),F(o)})()})()})();