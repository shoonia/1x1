parcelRequire=function(e){var r="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,i={};function u(e,u){if(e in i)return i[e];var t="function"==typeof parcelRequire&&parcelRequire;if(!u&&t)return t(e,!0);if(r)return r(e,!0);if(n&&"string"==typeof e)return n(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return u.register=function(e,r){i[e]=r},i=e(u),u.modules=i,u}(function (require) {const b=e=>document.getElementById(e);const D=e=>{e.target.select(),document.execCommand("copy")};const E=e=>{const t=document.createElement("canvas"),$=t.getContext("2d");return t.width=1,t.height=1,$.rect(0,0,1,1),$.fillStyle=e,$.fill(),t};const F=e=>{const t=Math.abs(~~e);return t>255?255:t};const m=e=>{const t=e.toString(16);return t.length<2?"0"+t:t};const G=({R:e,G:t,B:$})=>[e,t,$].map(m).join("");const q=e=>{let t="";for(;0<e--;)t+=(16*Math.random()|0).toString(16);return t};const H=()=>{const t=document.cookie.replace(/(?:(?:^|.*;\s*)cid\s*=\s*([^;]*).*$)|^.*$/,"$1"),e=""!==t?t:q(21),o="https://www.google-analytics.com/collect?v=1&tid=UA-128241641-2&aip=1&t=event&ea=open&dp=&dt=&cid="+e;document.cookie="cid="+e+";domain=shoonia.github.io;path=/;max-age=31536000";let a=!1;try{a=navigator.sendBeacon(o)}catch{}a||(new Image().src=o)};const j={black:"000000",silver:"c0c0c0",gray:"808080",white:"ffffff",maroon:"800000",red:"ff0000",purple:"800080",fuchsia:"ff00ff",green:"008000",lime:"00ff00",olive:"808000",yellow:"ffff00",navy:"000080",blue:"0000ff",teal:"008080",aqua:"00ffff",orange:"ffa500",aliceblue:"f0f8ff",antiquewhite:"faebd7",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",blanchedalmond:"ffebcd",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",oldlace:"fdf5e6",olivedrab:"6b8e23",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",whitesmoke:"f5f5f5",yellowgreen:"9acd32",rebeccapurple:"663399"};const I=()=>{const e=new DocumentFragment,f=document.createElement("option");for(let a in j){const r=f.cloneNode();r.value=j[a]+"ff",r.textContent=a,e.appendChild(r)}return e};let J=t=>{let e={},r={},h={dispatch(t,o){if("@dispatch"!==t&&h.dispatch("@dispatch",[t,o,e[t]]),e[t]){let c,a={};e[t].forEach(i=>{let p=e[t].includes(i)&&i(r,o,h);p&&"function"!=typeof p.then&&(c=r={...r,...p},a={...a,...p})}),c&&h.dispatch("@changed",a)}},get:()=>r,on:(t,r)=>((e[t]||(e[t]=[])).push(r),()=>{e[t]=e[t].filter(t=>t!==r)})};return t.forEach(t=>{t&&t(h)}),h.dispatch("@init"),h};const x=[],d=($,e)=>{x.push({key:$,cb:e})},K=({on:$})=>{$("@init",()=>({R:255,G:255,B:255,A:255,hex:"ffffff"})),$("@changed",($,e)=>{x.forEach(r=>{r.key in e&&r.cb($)})}),$("hex",($,e)=>{const r=parseInt(e,16);return{R:r>>16&255,G:r>>8&255,B:255&r,hex:e}}),$("rgba",($,[e,r])=>{const t=F(r);return{[e]:t,hex:G({...$,[e]:t})}})},{dispatch:s}=J([K]);const g=b("inputColor"),u=b("inputAlpha"),w=b("picker"),L=b("rangeRed"),M=b("numberRed"),N=b("rangeGreen"),O=b("numberGreen"),P=b("rangeBlue"),Q=b("numberBlue"),R=b("rangeAlpha"),S=b("numberAlpha"),y=b("outputImage"),T=b("outputDataURL"),U=b("outputBase64"),V=b("outputCSS"),W=b("outputBytes"),z=b("download"),k=new FileReader,X=/[^\da-z]/i,A=/[^\da-f]/i,Y=/.{1,6}/g,l=a=>s("hex",a),Z=({target:a})=>s("rgba",[a.dataset.rgba,a.valueAsNumber]),B=a=>s("rgba",["A",parseInt(a,16)]),_=a=>{1!==k.readyState&&k.readAsArrayBuffer(a)},C=()=>{let a=g.value.trim().toLowerCase().replace(X,"");if(a in j&&(a=j[a]),A.test(a))return g.focus();if(3===a.length&&(a+=a),8===a.length){let $;[a,$]=a.match(Y),B($)}if(6!==a.length)return g.focus();l(a)};d("hex",({hex:a,A:$})=>{const r="#"+a,e=r+m($),v=E(e),t=v.toDataURL("image/png"),o="url(".concat(t,")"),i="background-image: ".concat(o,";"),n="display:inline-block;border:1px solid #c6e2f7;border-radius:50%;width:1em;height:1em;".concat(i);console.log("%c  ",n,e),v.toBlob(_),g.value=a,w.value=r,y.style.backgroundImage=o,y.title="8-Digit Hex: ".concat(e),T.value=t,V.value=i,U.value=t.slice(22),z.href=t,z.download="1x1_".concat(e,".png")}),d("R",({R:a})=>{L.value=a,M.value=a}),d("G",({G:a})=>{N.value=a,O.value=a}),d("B",({B:a})=>{P.value=a,Q.value=a}),d("A",({A:a})=>{R.value=a,S.value=a,u.value=m(a)}),g.addEventListener("change",C),b("create").addEventListener("click",C),u.addEventListener("change",()=>{const a=u.value.trim().toLowerCase().replace(A,""),$=2!==a.length?"ff":a;B($)}),w.addEventListener("change",()=>{l(w.value.slice(1))}),k.addEventListener("load",()=>{const a=new Uint8Array(k.result);W.value=a.toString()}),document.querySelectorAll("[data-rgba]").forEach(a=>{a.addEventListener("change",Z)}),document.querySelectorAll("[data-clipboard]").forEach(a=>{a.addEventListener("click",D)}),"localhost"!==document.location.hostname&&H(),b("rgbaDetails").open=window.innerWidth>701,b("colorList").appendChild(I()),b("random").addEventListener("click",()=>{l(q(6))}),l(q(6));return{"QvaY":{}};});