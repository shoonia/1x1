(()=>{var e=["Shift","Meta","Alt","Control"],t="object"==typeof navigator&&/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"Meta":"Control";function a(e,t){return"function"==typeof e.getModifierState&&e.getModifierState(t)}function n(e){return e.trim().split(" ").map((function(e){var a=e.split(/\b\+/),n=a.pop();return[a=a.map((function(e){return"$mod"===e?t:e})),n]}))}function r(t,r){var o;void 0===r&&(r={});var i=null!=(o=r.timeout)?o:1e3,f=Object.keys(t).map((function(e){return[n(e),t[e]]})),l=new Map,d=null;return function(t){t instanceof KeyboardEvent&&(f.forEach((function(n){var r=n[0],o=n[1],i=l.get(r)||r;!function(t,n){return!(n[1].toUpperCase()!==t.key.toUpperCase()&&n[1]!==t.code||n[0].find((function(e){return!a(t,e)}))||e.find((function(e){return!n[0].includes(e)&&n[1]!==e&&a(t,e)})))}(t,i[0])?a(t,t.key)||l.delete(r):i.length>1?l.set(r,i.slice(1)):(l.delete(r),o(t))})),d&&clearTimeout(d),d=setTimeout(l.clear.bind(l),i))}}const o=document.createElement("canvas"),i=(e,t)=>{const a=o.cloneNode(),n=a.getContext("2d",{alpha:255!==t,desynchronized:!0,colorSpace:"srgb"});return a.width=1,a.height=1,n.fillStyle=`#${e}`,n.rect(0,0,1,1),n.fill(),a},f=e=>{const t=o.cloneNode(),a=t.getContext("2d",{alpha:!0,desynchronized:!0});return t.width=50,t.height=50,a.fillStyle=e,a.arc(25,25,24,0,2*Math.PI),a.stroke(),a.fill(),t.toDataURL("image/png",.1)},l=e=>document.querySelector(e),d=e=>document.querySelectorAll(e),c=e=>{e.target.select(),navigator.clipboard.writeText(e.target.value)},s=e=>{const t=e.toString(16);return t.length<2?"0"+t:t},u=e=>{let t="";for(;0<e--;)t+=(16*Math.random()|0).toString(16);return t},g=JSON.parse('{"black":"000000","silver":"c0c0c0","gray":"808080","white":"ffffff","maroon":"800000","red":"ff0000","purple":"800080","fuchsia":"ff00ff","green":"008000","lime":"00ff00","olive":"808000","yellow":"ffff00","navy":"000080","blue":"0000ff","teal":"008080","aqua":"00ffff","orange":"ffa500","aliceblue":"f0f8ff","antiquewhite":"faebd7","aquamarine":"7fffd4","azure":"f0ffff","beige":"f5f5dc","bisque":"ffe4c4","blanchedalmond":"ffebcd","blueviolet":"8a2be2","brown":"a52a2a","burlywood":"deb887","cadetblue":"5f9ea0","chartreuse":"7fff00","chocolate":"d2691e","coral":"ff7f50","cornflowerblue":"6495ed","cornsilk":"fff8dc","crimson":"dc143c","cyan":"00ffff","darkblue":"00008b","darkcyan":"008b8b","darkgoldenrod":"b8860b","darkgray":"a9a9a9","darkgreen":"006400","darkgrey":"a9a9a9","darkkhaki":"bdb76b","darkmagenta":"8b008b","darkolivegreen":"556b2f","darkorange":"ff8c00","darkorchid":"9932cc","darkred":"8b0000","darksalmon":"e9967a","darkseagreen":"8fbc8f","darkslateblue":"483d8b","darkslategray":"2f4f4f","darkslategrey":"2f4f4f","darkturquoise":"00ced1","darkviolet":"9400d3","deeppink":"ff1493","deepskyblue":"00bfff","dimgray":"696969","dimgrey":"696969","dodgerblue":"1e90ff","firebrick":"b22222","floralwhite":"fffaf0","forestgreen":"228b22","gainsboro":"dcdcdc","ghostwhite":"f8f8ff","gold":"ffd700","goldenrod":"daa520","greenyellow":"adff2f","grey":"808080","honeydew":"f0fff0","hotpink":"ff69b4","indianred":"cd5c5c","indigo":"4b0082","ivory":"fffff0","khaki":"f0e68c","lavender":"e6e6fa","lavenderblush":"fff0f5","lawngreen":"7cfc00","lemonchiffon":"fffacd","lightblue":"add8e6","lightcoral":"f08080","lightcyan":"e0ffff","lightgoldenrodyellow":"fafad2","lightgray":"d3d3d3","lightgreen":"90ee90","lightgrey":"d3d3d3","lightpink":"ffb6c1","lightsalmon":"ffa07a","lightseagreen":"20b2aa","lightskyblue":"87cefa","lightslategray":"778899","lightslategrey":"778899","lightsteelblue":"b0c4de","lightyellow":"ffffe0","limegreen":"32cd32","linen":"faf0e6","magenta":"ff00ff","mediumaquamarine":"66cdaa","mediumblue":"0000cd","mediumorchid":"ba55d3","mediumpurple":"9370db","mediumseagreen":"3cb371","mediumslateblue":"7b68ee","mediumspringgreen":"00fa9a","mediumturquoise":"48d1cc","mediumvioletred":"c71585","midnightblue":"191970","mintcream":"f5fffa","mistyrose":"ffe4e1","moccasin":"ffe4b5","navajowhite":"ffdead","oldlace":"fdf5e6","olivedrab":"6b8e23","orangered":"ff4500","orchid":"da70d6","palegoldenrod":"eee8aa","palegreen":"98fb98","paleturquoise":"afeeee","palevioletred":"db7093","papayawhip":"ffefd5","peachpuff":"ffdab9","peru":"cd853f","pink":"ffc0cb","plum":"dda0dd","powderblue":"b0e0e6","rosybrown":"bc8f8f","royalblue":"4169e1","saddlebrown":"8b4513","salmon":"fa8072","sandybrown":"f4a460","seagreen":"2e8b57","seashell":"fff5ee","sienna":"a0522d","skyblue":"87ceeb","slateblue":"6a5acd","slategray":"708090","slategrey":"708090","snow":"fffafa","springgreen":"00ff7f","steelblue":"4682b4","tan":"d2b48c","thistle":"d8bfd8","tomato":"ff6347","turquoise":"40e0d0","violet":"ee82ee","wheat":"f5deb3","whitesmoke":"f5f5f5","yellowgreen":"9acd32","rebeccapurple":"663399","transparent":"00000000","blank":"00000000","empty":"00000000"}'),{getState:h,dispatch:b,connect:p,readyStore:m}=(e=>{let t={},a={},n=[],r=(e,n)=>{if("@dispatch"!==e&&r("@dispatch",[e,n,t[e]]),t[e]){let o;t[e].forEach((r=>{let i=t[e].includes(r)&&r(a,n);i&&"function"!==typeof i.then&&(a={...a,...i},o={...o,...i})})),o&&r("@changed",o)}},o=(e,a)=>((t[e]||(t[e]=[])).push(a),()=>{t[e]=t[e].filter((e=>e!==a))}),i=()=>a,f=e=>r("@set",e);return o("@set",((e,t)=>t)),e.forEach((e=>{e&&e({dispatch:r,on:o,get:i,set:f})})),r("@init"),{dispatch:r,getState:i,setState:f,connect(...e){let t=e.pop();return n.push({keys:e,cb:t}),()=>{n=n.filter((e=>e.cb!==t))}},readyStore:()=>(r("@ready"),o("@changed",((e,t)=>{n.forEach((e=>{e.keys.some((e=>e in t))&&e.cb(a)}))})),Promise.all(n.map((e=>e.cb(a)))))}})([({on:e})=>{e("@init",(()=>({R:255,G:255,B:255,A:255,hex:"ffffffff",canvas:i("fff",255)}))),e("hex",((e,t)=>{const a=parseInt(t,16),n=255&a;return{R:a>>24&255,G:a>>16&255,B:a>>8&255,A:n,hex:t,canvas:i(t,n)}})),e("rgba",((e,[t,a])=>{const n=(e=>{const t=Math.abs(~~e);return t>255?255:t})(a),r={...e,[t]:n},o=(({R:e,G:t,B:a,A:n})=>[e,t,a,n].map(s).join(""))(r);return{[t]:n,hex:o,canvas:i(o,r.A)}}))}]),y="function"===typeof window.showSaveFilePicker,v=l("#inputColor"),w=l("#inputAlpha"),k=l("#picker"),S=l("#rangeRed"),E=l("#numberRed"),x=l("#rangeGreen"),A=l("#numberGreen"),$=l("#rangeBlue"),L=l("#numberBlue"),B=l("#rangeAlpha"),M=l("#numberAlpha"),P=l("#outputImage"),C=l("#outputBadge"),q=l("#outputDataURL"),R=l("#outputBase64"),N=l("#outputCSS"),G=l("#outputBytes"),I=l("#outputLink"),D=l("#download"),U=l('link[rel="icon"]'),z=new FileReader,F="ff",O=/^#/,T=/[^\da-f]/gi,j=/Mac OS/i,W=e=>b("hex",e),H=({target:e})=>b("rgba",[e.dataset.rgba,e.valueAsNumber]),J=e=>{1!==z.readyState&&z.readAsArrayBuffer(e)},K=e=>{let t=e.trim().toLowerCase().replace(O,"");if(t in g&&(t=g[t]),T.test(t))try{t=function(e,t,a,n){const r=(e+(n||"")).toString().includes("%");if("string"===typeof e?[e,t,a,n]=e.match(/(0?\.?\d{1,3})%?\b/g).map((e=>Number(e))):void 0!==n&&(n=Number.parseFloat(n)),"number"!==typeof e||"number"!==typeof t||"number"!==typeof a||e>255||t>255||a>255)throw new TypeError("Expected three numbers below 256");if("number"===typeof n){if(!r&&n>=0&&n<=1)n=Math.round(255*n);else{if(!(r&&n>=0&&n<=100))throw new TypeError(`Expected alpha value (${n}) as a fraction or percentage`);n=Math.round(255*n/100)}n=(256|n).toString(16).slice(1)}else n="";return(a|t<<8|e<<16|1<<24).toString(16).slice(1)+n}(e)}catch{return[!1]}return 3===t.length&&(t+=t),6===t.length&&(t+=F),8!==t.length?[!1]:[!0,t]};if((()=>{const e=document.cookie.replace(/(?:(?:^|.*;\s*)cid\s*=\s*([^;]*).*$)|^.*$/,"$1"),t=""!==e?e:u(21),a=`https://www.google-analytics.com/collect?v=1&tid=UA-128241641-2&aip=1&t=event&ea=open&dp=&dt=&cid=${t}`;let n=!1;try{n=navigator.sendBeacon(a)}catch{}n||((new Image).src=a),document.cookie=`cid=${t};domain=shoonia.github.io;path=/;max-age=31536000`})(),/Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))l("#history").remove();else{const e=j.test(navigator.userAgent)?'[data-hint="darwin"]':'[data-hint="win"]',t=()=>{null===history.state&&history.go(-1)},a=()=>history.go(1);(function(e,t,a){var n;void 0===a&&(a={});var o=null!=(n=a.event)?n:"keydown",i=r(t,a);e.addEventListener(o,i)})(window,{"$mod+z":t,"$mod+Shift+z":a}),l("#undo").addEventListener("click",t),l("#redo").addEventListener("click",a),d(e).forEach((e=>{e.hidden=!1}))}y&&D.addEventListener("click",(e=>{const{download:t}=e.target,{canvas:a}=h();e.preventDefault(),e.stopImmediatePropagation(),(async(e,t)=>{const a=await window.showSaveFilePicker({suggestedName:e});if("granted"===await a.queryPermission()){const[e,n]=await Promise.all([a.createWritable(),new Promise((e=>t.toBlob(e)))]);await e.write(n),await e.close()}})(t,a)}));{const[e,t]=K(location.hash),a=e?t:u(6)+F;history.pushState(1,null,`#${a}`),W(a)}v.addEventListener("change",(()=>{const[e,t]=K(v.value);e?W(t):v.focus()})),w.addEventListener("change",(()=>{const e=w.value.trim().toLowerCase().replace(T,"");b("rgba",["A",parseInt(2!==e.length?F:e,16)])})),k.addEventListener("change",(()=>{const[e,t]=K(k.value);e&&W(t)})),z.addEventListener("load",(()=>{const e=new Uint8Array(z.result);G.value=e.toString(),C.textContent=`1x1 (${e.length} bytes)`})),d("[data-rgba]").forEach((e=>{e.addEventListener("change",H)})),d("[data-clipboard]").forEach((e=>{e.addEventListener("click",c)})),l("#rgbaDetails").open=window.innerWidth>701,l("#colorList").appendChild((()=>{const e=new DocumentFragment,t=document.createElement("option");for(let a in g){const n=t.cloneNode();n.value=g[a],n.textContent=a,e.append(n)}return e})()),l("#random").addEventListener("click",(()=>{W(u(6)+F)})),window.addEventListener("popstate",(()=>{const{hex:e}=h(),t=location.hash.slice(1);if(t===e)return;const[a,n]=K(t);a&&W(n)})),p("hex",(({hex:e,canvas:t})=>{const a=e.slice(0,6),n=`#${e}`,r=t.toDataURL("image/png",.1),o=r.slice(22),i=`url(${r})`,l=`background-image: ${i};`;console.log("%c  ",`display:inline-block;border:1px solid #c6e2f7;border-radius:50%;width:1em;height:1em;${l}`,n),t.toBlob(J),location.hash=n,document.title=`1x1 Pixel PNG | ${n}`,U.href=f(n),v.value=a,k.value=`#${a}`,P.style.backgroundImage=i,P.title=`8-Digit Hex: ${n}`,q.value=r,N.value=l,R.value=o,I.value=location.href,D.href=r,D.download=`1x1_${n}.png`})),p("R",(({R:e})=>{S.value=e,E.value=e})),p("G",(({G:e})=>{x.value=e,A.value=e})),p("B",(({B:e})=>{$.value=e,L.value=e})),p("A",(({A:e})=>{B.value=e,M.value=e,w.value=s(e)})),m()})();