parcelRequire=function(e){var r="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,i={};function u(e,u){if(e in i)return i[e];var t="function"==typeof parcelRequire&&parcelRequire;if(!u&&t)return t(e,!0);if(r)return r(e,!0);if(n&&"string"==typeof e)return n(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return u.register=function(e,r){i[e]=r},i=e(u),u.modules=i,u}(function (require) {var E=["Shift","Meta","Alt","Control"],F="object"==typeof navigator&&/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"Meta":"Control",G=function(e,t){var n=Object.keys(t).map(function(e){return[(n=e,n.trim().split(" ").map(function(e){var t=e.split("+"),n=t.pop();return[t=t.map(function(e){return"$mod"===e?F:e}),n]})),t[e]];var n}),r=new Map,o=null,a=function(e){e instanceof KeyboardEvent&&(n.forEach(function(t){var n=t[0],o=t[1],a=r.get(n)||n;!function(e,t){return!(t[1].toUpperCase()!==e.key.toUpperCase()&&t[1]!==e.code||t[0].find(function(t){return!e.getModifierState(t)})||E.find(function(n){return!t[0].includes(n)&&t[1]!==n&&e.getModifierState(n)}))}(e,a[0])?e.getModifierState(e.key)||r.delete(n):a.length>1?r.set(n,a.slice(1)):(r.delete(n),o(e))}),o&&clearTimeout(o),o=setTimeout(r.clear.bind(r),1e3))};return e.addEventListener("keydown",a),function(){e.removeEventListener("keydown",a)}};const y=document.createElement("canvas"),H=e=>{const t=y.cloneNode(),$=t.getContext("2d");return t.width=1,t.height=1,$.fillStyle=e,$.rect(0,0,1,1),$.fill(),t};const I=e=>{const t=y.cloneNode(),$=t.getContext("2d");return t.width=50,t.height=50,Object.assign($,{fillStyle:e,lineWidth:4,strokeStyle:"#c6e2f7"}),$.beginPath(),$.arc(25,25,20,0,2*Math.PI),$.stroke(),$.fill(),t.toDataURL("image/png")};const b=e=>document.getElementById(e);const q=e=>document.querySelectorAll(e);const J=e=>{e.target.select(),document.execCommand("copy")};const K=e=>{const t=Math.abs(~~e);return t>255?255:t};const z=e=>{const t=e.toString(16);return t.length<2?"0"+t:t};const L=({R:e,G:t,B:$,A:o})=>[e,t,$,o].map(z).join("");const s=e=>{let t="";for(;0<e--;)t+=(16*Math.random()|0).toString(16);return t};const M=()=>{const t=document.cookie.replace(/(?:(?:^|.*;\s*)cid\s*=\s*([^;]*).*$)|^.*$/,"$1"),e=""!==t?t:s(21),o="https://www.google-analytics.com/collect?v=1&tid=UA-128241641-2&aip=1&t=event&ea=open&dp=&dt=&cid="+e;document.cookie="cid="+e+";domain=shoonia.github.io;path=/;max-age=31536000";let a=!1;try{a=navigator.sendBeacon(o)}catch{}a||(new Image().src=o)};const j={black:"000000",silver:"c0c0c0",gray:"808080",white:"ffffff",maroon:"800000",red:"ff0000",purple:"800080",fuchsia:"ff00ff",green:"008000",lime:"00ff00",olive:"808000",yellow:"ffff00",navy:"000080",blue:"0000ff",teal:"008080",aqua:"00ffff",orange:"ffa500",aliceblue:"f0f8ff",antiquewhite:"faebd7",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",blanchedalmond:"ffebcd",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",oldlace:"fdf5e6",olivedrab:"6b8e23",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",whitesmoke:"f5f5f5",yellowgreen:"9acd32",rebeccapurple:"663399"};const N=()=>{const e=new DocumentFragment,f=document.createElement("option");for(let a in j){const r=f.cloneNode();r.value=j[a],r.textContent=a,e.appendChild(r)}return e};let O=t=>{let e={},r={},h={dispatch(t,o){if("@dispatch"!==t&&h.dispatch("@dispatch",[t,o,e[t]]),e[t]){let c,a={};e[t].forEach(i=>{let p=e[t].includes(i)&&i(r,o,h);p&&"function"!=typeof p.then&&(c=r={...r,...p},a={...a,...p})}),c&&h.dispatch("@changed",a)}},get:()=>r,on:(t,r)=>((e[t]||(e[t]=[])).push(r),()=>{e[t]=e[t].filter(t=>t!==r)})};return t.forEach(t=>{t&&t(h)}),h.dispatch("@init"),h};const A=[],d=($,e)=>{A.push({key:$,cb:e})},P=({on:$})=>{$("@init",()=>({R:255,G:255,B:255,A:255,hex:"ffffff"})),$("@changed",($,e)=>{A.forEach(t=>{t.key in e&&t.cb($)})}),$("hex",($,e)=>{const t=parseInt(e,16);return{R:t>>24&255,G:t>>16&255,B:t>>8&255,A:255&t,hex:e}}),$("rgba",($,[e,t])=>{const r=K(t);return{[e]:r,hex:L({...$,[e]:r})}})},{get:Q,dispatch:u}=O([P]);const k=b("inputColor"),w=b("inputAlpha"),x=b("picker"),R=b("rangeRed"),S=b("numberRed"),T=b("rangeGreen"),U=b("numberGreen"),V=b("rangeBlue"),W=b("numberBlue"),X=b("rangeAlpha"),Y=b("numberAlpha"),B=b("outputImage"),Z=b("outputDataURL"),_=b("outputBase64"),aa=b("outputCSS"),ba=b("outputBytes"),C=b("download"),ca=b("favicon"),l=new FileReader,da=/[^\da-z]/i,D=/[^\da-f]/i,ea=/Mac\sOS/gi,fa=/Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i,g=a=>u("hex",a),ga=({target:a})=>u("rgba",[a.dataset.rgba,a.valueAsNumber]),ha=a=>u("rgba",["A",parseInt(a,16)]),ia=a=>{1!==l.readyState&&l.readAsArrayBuffer(a)},m=a=>{let $=a.trim().toLowerCase().replace(da,"");return $ in j&&($=j[$]),D.test($)?[!1]:(3===$.length&&($+=$),6===$.length&&($+="ff"),8!==$.length?[!1]:[!0,$])};d("hex",({hex:a})=>{const $=a.slice(0,6),r="#"+a,e=H(r),v=e.toDataURL("image/png"),t="url(".concat(v,")"),i="background-image: ".concat(t,";"),o="display:inline-block;border:1px solid #c6e2f7;border-radius:50%;width:1em;height:1em;".concat(i);console.log("%c  ",o,r),e.toBlob(ia),location.hash=r,document.title="1x1 Pixel PNG | ".concat(r),ca.href=I(r),k.value=$,x.value="#"+$,B.style.backgroundImage=t,B.title="8-Digit Hex: ".concat(r),Z.value=v,aa.value=i,_.value=v.slice(22),C.href=v,C.download="1x1_".concat(r,".png")}),d("R",({R:a})=>{R.value=a,S.value=a}),d("G",({G:a})=>{T.value=a,U.value=a}),d("B",({B:a})=>{V.value=a,W.value=a}),d("A",({A:a})=>{X.value=a,Y.value=a,w.value=z(a)}),k.addEventListener("change",()=>{const[a,$]=m(k.value);a?g($):k.focus()}),w.addEventListener("change",()=>{const a=w.value.trim().toLowerCase().replace(D,""),$=2!==a.length?"ff":a;ha($)}),x.addEventListener("change",()=>{const[a,$]=m(x.value);a&&g($)}),l.addEventListener("load",()=>{const a=new Uint8Array(l.result);ba.value=a.toString()}),q("[data-rgba]").forEach(a=>{a.addEventListener("change",ga)}),q("[data-clipboard]").forEach(a=>{a.addEventListener("click",J)}),b("rgbaDetails").open=window.innerWidth>701,b("colorList").appendChild(N()),b("random").addEventListener("click",()=>{g(s(6)+"ff")}),window.addEventListener("popstate",()=>{const{hex:a}=Q(),$=location.hash.slice(1);if($===a)return;const[r,e]=m($);r&&g(e)}),(()=>{const a=ea.test(navigator.userAgent);if(fa.test(navigator.userAgent))b("history").remove();else{const $=a?".darwin-hint":".win-hint",r=()=>{null===history.state&&history.go(-1)},e=()=>history.go(1);G(window,{"$mod+z":r,"$mod+Shift+z":e}),b("undo").addEventListener("click",r),b("redo").addEventListener("click",e),q($).forEach(a=>{a.hidden=!1})}"localhost"!==location.hostname&&M();const[$,r]=m(location.hash),e=$?r:s(6)+"ff";history.pushState(1,null,"#".concat(e)),g(e)})();return{"QvaY":{}};});