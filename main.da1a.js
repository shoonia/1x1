(()=>{var e=["Shift","Meta","Alt","Control"],t="object"==typeof navigator&&/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"Meta":"Control";function a(e,t){return"function"==typeof e.getModifierState&&e.getModifierState(t)}function n(n,r){var o;void 0===r&&(r={});var i=null!=(o=r.timeout)?o:1e3,l=Object.keys(n).map((function(e){return[(a=e,a.trim().split(" ").map((function(e){var a=e.split(/\b\+/),n=a.pop();return[a=a.map((function(e){return"$mod"===e?t:e})),n]}))),n[e]];var a})),f=new Map,d=null;return function(t){t instanceof KeyboardEvent&&(l.forEach((function(n){var r=n[0],o=n[1],i=f.get(r)||r;!function(t,n){return!(n[1].toUpperCase()!==t.key.toUpperCase()&&n[1]!==t.code||n[0].find((function(e){return!a(t,e)}))||e.find((function(e){return!n[0].includes(e)&&n[1]!==e&&a(t,e)})))}(t,i[0])?a(t,t.key)||f.delete(r):i.length>1?f.set(r,i.slice(1)):(f.delete(r),o(t))})),d&&clearTimeout(d),d=setTimeout(f.clear.bind(f),i))}}const r=document.createElement("canvas"),o=(e,t)=>{const a=r.cloneNode(),n=a.getContext("2d",{alpha:255!==t,desynchronized:!0,colorSpace:"srgb"});return a.width=1,a.height=1,n.fillStyle="#"+e,n.rect(0,0,1,1),n.fill(),a},i=e=>{const t=r.cloneNode(),a=t.getContext("2d",{alpha:!0,desynchronized:!0});return t.width=50,t.height=50,a.fillStyle=e,a.arc(25,25,24,0,2*Math.PI),a.stroke(),a.fill(),t.toDataURL("image/png",.1)},l=e=>document.querySelector(e),f=e=>document.querySelectorAll(e),d=e=>{e.target.select(),navigator.clipboard.writeText(e.target.value)},c=e=>{const t=e.toString(16);return t.length<2?"0"+t:t},s=e=>{let t="";for(;0<e--;)t+=(16*Math.random()|0).toString(16);return t};var u=JSON.parse('{"black":"000000","silver":"c0c0c0","gray":"808080","white":"ffffff","maroon":"800000","red":"ff0000","purple":"800080","fuchsia":"ff00ff","green":"008000","lime":"00ff00","olive":"808000","yellow":"ffff00","navy":"000080","blue":"0000ff","teal":"008080","aqua":"00ffff","orange":"ffa500","aliceblue":"f0f8ff","antiquewhite":"faebd7","aquamarine":"7fffd4","azure":"f0ffff","beige":"f5f5dc","bisque":"ffe4c4","blanchedalmond":"ffebcd","blueviolet":"8a2be2","brown":"a52a2a","burlywood":"deb887","cadetblue":"5f9ea0","chartreuse":"7fff00","chocolate":"d2691e","coral":"ff7f50","cornflowerblue":"6495ed","cornsilk":"fff8dc","crimson":"dc143c","cyan":"00ffff","darkblue":"00008b","darkcyan":"008b8b","darkgoldenrod":"b8860b","darkgray":"a9a9a9","darkgreen":"006400","darkgrey":"a9a9a9","darkkhaki":"bdb76b","darkmagenta":"8b008b","darkolivegreen":"556b2f","darkorange":"ff8c00","darkorchid":"9932cc","darkred":"8b0000","darksalmon":"e9967a","darkseagreen":"8fbc8f","darkslateblue":"483d8b","darkslategray":"2f4f4f","darkslategrey":"2f4f4f","darkturquoise":"00ced1","darkviolet":"9400d3","deeppink":"ff1493","deepskyblue":"00bfff","dimgray":"696969","dimgrey":"696969","dodgerblue":"1e90ff","firebrick":"b22222","floralwhite":"fffaf0","forestgreen":"228b22","gainsboro":"dcdcdc","ghostwhite":"f8f8ff","gold":"ffd700","goldenrod":"daa520","greenyellow":"adff2f","grey":"808080","honeydew":"f0fff0","hotpink":"ff69b4","indianred":"cd5c5c","indigo":"4b0082","ivory":"fffff0","khaki":"f0e68c","lavender":"e6e6fa","lavenderblush":"fff0f5","lawngreen":"7cfc00","lemonchiffon":"fffacd","lightblue":"add8e6","lightcoral":"f08080","lightcyan":"e0ffff","lightgoldenrodyellow":"fafad2","lightgray":"d3d3d3","lightgreen":"90ee90","lightgrey":"d3d3d3","lightpink":"ffb6c1","lightsalmon":"ffa07a","lightseagreen":"20b2aa","lightskyblue":"87cefa","lightslategray":"778899","lightslategrey":"778899","lightsteelblue":"b0c4de","lightyellow":"ffffe0","limegreen":"32cd32","linen":"faf0e6","magenta":"ff00ff","mediumaquamarine":"66cdaa","mediumblue":"0000cd","mediumorchid":"ba55d3","mediumpurple":"9370db","mediumseagreen":"3cb371","mediumslateblue":"7b68ee","mediumspringgreen":"00fa9a","mediumturquoise":"48d1cc","mediumvioletred":"c71585","midnightblue":"191970","mintcream":"f5fffa","mistyrose":"ffe4e1","moccasin":"ffe4b5","navajowhite":"ffdead","oldlace":"fdf5e6","olivedrab":"6b8e23","orangered":"ff4500","orchid":"da70d6","palegoldenrod":"eee8aa","palegreen":"98fb98","paleturquoise":"afeeee","palevioletred":"db7093","papayawhip":"ffefd5","peachpuff":"ffdab9","peru":"cd853f","pink":"ffc0cb","plum":"dda0dd","powderblue":"b0e0e6","rosybrown":"bc8f8f","royalblue":"4169e1","saddlebrown":"8b4513","salmon":"fa8072","sandybrown":"f4a460","seagreen":"2e8b57","seashell":"fff5ee","sienna":"a0522d","skyblue":"87ceeb","slateblue":"6a5acd","slategray":"708090","slategrey":"708090","snow":"fffafa","springgreen":"00ff7f","steelblue":"4682b4","tan":"d2b48c","thistle":"d8bfd8","tomato":"ff6347","turquoise":"40e0d0","violet":"ee82ee","wheat":"f5deb3","whitesmoke":"f5f5f5","yellowgreen":"9acd32","rebeccapurple":"663399","transparent":"00000000","blank":"00000000","empty":"00000000"}');const g=(e=>{let t={},a={},n={dispatch(e,r){if("@dispatch"!==e&&n.dispatch("@dispatch",[e,r,t[e]]),t[e]){let o;t[e].forEach((i=>{let l=t[e].includes(i)&&i(a,r,n);l&&"function"!==typeof l.then&&(a={...a,...l},o={...o,...l})})),o&&n.dispatch("@changed",o)}},get:()=>a,on:(e,a)=>((t[e]||(t[e]=[])).push(a),()=>{t[e]=t[e].filter((e=>e!==a))})};return e.forEach((e=>{e&&e(n)})),n.dispatch("@init"),n})([e=>{let{on:t}=e;t("@init",(()=>({R:255,G:255,B:255,A:255,hex:"ffffffff",canvas:o("fff",255)}))),t("hex",((e,t)=>{const a=parseInt(t,16),n=255&a;return{R:a>>24&255,G:a>>16&255,B:a>>8&255,A:n,hex:t,canvas:o(t,n)}})),t("rgba",((e,t)=>{let[a,n]=t;const r=(e=>{const t=Math.abs(~~e);return t>255?255:t})(n),i={...e,[a]:r},l=(e=>{let{R:t,G:a,B:n,A:r}=e;return[t,a,n,r].map(c).join("")})(i);return{[a]:r,hex:l,canvas:o(l,i.A)}}))}]),{getState:h,dispatch:b,connect:p}=(e=>{let t=Symbol(),a=[];return e.on(t,((e,t)=>t)),e.on("@changed",((e,t)=>{a.some((a=>{a.keys.some((e=>e in t))&&a.cb(e)}))})),{getState:e.get,dispatch:e.dispatch,setState(a){e.dispatch(t,a)},connect(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];let o=n.pop();return n.length&&a.push({keys:n,cb:o}),o(e.get()),()=>{a=a.filter((e=>e.cb!==o))}}}})(g),m="function"===typeof window.showSaveFilePicker,v=l("#inputColor"),y=l("#inputAlpha"),w=l("#picker"),k=l("#rangeRed"),S=l("#numberRed"),E=l("#rangeGreen"),x=l("#numberGreen"),A=l("#rangeBlue"),L=l("#numberBlue"),B=l("#rangeAlpha"),M=l("#numberAlpha"),C=l("#outputImage"),P=l("#outputBadge"),q=l("#outputDataURL"),R=l("#outputBase64"),I=l("#outputCSS"),N=l("#outputBytes"),G=l("#outputLink"),U=l("#download"),D=l('link[rel="icon"]'),$=new FileReader,z="ff",F=/^#/,O=/[^\da-f]/gi,T=/Mac OS/i,j=e=>b("hex",e),W=e=>{let{target:t}=e;return b("rgba",[t.dataset.rgba,t.valueAsNumber])},_=e=>{1!==$.readyState&&$.readAsArrayBuffer(e)},H=e=>{let t=e.trim().toLowerCase().replace(F,"");if(t in u&&(t=u[t]),O.test(t))try{t=function(e,t,a,n){const r=(e+(n||"")).toString().includes("%");if("string"===typeof e?[e,t,a,n]=e.match(/(0?\.?\d{1,3})%?\b/g).map((e=>Number(e))):void 0!==n&&(n=Number.parseFloat(n)),"number"!==typeof e||"number"!==typeof t||"number"!==typeof a||e>255||t>255||a>255)throw new TypeError("Expected three numbers below 256");if("number"===typeof n){if(!r&&n>=0&&n<=1)n=Math.round(255*n);else{if(!(r&&n>=0&&n<=100))throw new TypeError("Expected alpha value ("+n+") as a fraction or percentage");n=Math.round(255*n/100)}n=(256|n).toString(16).slice(1)}else n="";return(a|t<<8|e<<16|1<<24).toString(16).slice(1)+n}(e)}catch{return[!1]}return 3===t.length&&(t+=t),6===t.length&&(t+=z),8!==t.length?[!1]:[!0,t]};if((()=>{const e=document.cookie.replace(/(?:(?:^|.*;\s*)cid\s*=\s*([^;]*).*$)|^.*$/,"$1"),t=""!==e?e:s(21),a="https://www.google-analytics.com/collect?v=1&tid=UA-128241641-2&aip=1&t=event&ea=open&dp=&dt=&cid="+t;let n=!1;try{n=navigator.sendBeacon(a)}catch{}n||((new Image).src=a),document.cookie="cid="+t+";domain=shoonia.github.io;path=/;max-age=31536000"})(),/Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))l("#history").remove();else{const e=T.test(navigator.userAgent)?'[data-hint="darwin"]':'[data-hint="win"]',t=()=>{null===history.state&&history.go(-1)},a=()=>history.go(1);(function(e,t,a){var r;void 0===a&&(a={});var o=null!=(r=a.event)?r:"keydown",i=n(t,a);e.addEventListener(o,i)})(window,{"$mod+z":t,"$mod+Shift+z":a}),l("#undo").addEventListener("click",t),l("#redo").addEventListener("click",a),f(e).forEach((e=>{e.hidden=!1}))}m&&U.addEventListener("click",(e=>{const{download:t}=e.target,{canvas:a}=h();e.preventDefault(),e.stopImmediatePropagation(),(async(e,t)=>{const a=await window.showSaveFilePicker({suggestedName:e});if("granted"===await a.queryPermission()){const[e,n]=await Promise.all([a.createWritable(),new Promise((e=>t.toBlob(e)))]);await e.write(n),await e.close()}})(t,a)}));{const[e,t]=H(location.hash),a=e?t:s(6)+z;history.pushState(1,null,"#"+a),j(a)}v.addEventListener("change",(()=>{const[e,t]=H(v.value);e?j(t):v.focus()})),y.addEventListener("change",(()=>{const e=y.value.trim().toLowerCase().replace(O,"");b("rgba",["A",parseInt(2!==e.length?z:e,16)])})),w.addEventListener("change",(()=>{const[e,t]=H(w.value);e&&j(t)})),$.addEventListener("load",(()=>{const e=new Uint8Array($.result);N.value=e.toString(),P.textContent="1x1 ("+e.length+" bytes)"})),f("[data-rgba]").forEach((e=>{e.addEventListener("change",W)})),f("[data-clipboard]").forEach((e=>{e.addEventListener("click",d)})),l("#rgbaDetails").open=window.innerWidth>701,l("#colorList").appendChild((()=>{const e=new DocumentFragment,t=document.createElement("option");for(let a in u){const n=t.cloneNode();n.value=u[a],n.textContent=a,e.append(n)}return e})()),l("#random").addEventListener("click",(()=>{j(s(6)+z)})),window.addEventListener("popstate",(()=>{const{hex:e}=h(),t=location.hash.slice(1);if(t===e)return;const[a,n]=H(t);a&&j(n)})),p("hex",(e=>{let{hex:t,canvas:a}=e;const n=t.slice(0,6),r="#"+t,o=a.toDataURL("image/png",.1),l=o.slice(22),f="url("+o+")",d="background-image: "+f+";";console.log("%c  ","display:inline-block;border:1px solid #c6e2f7;border-radius:50%;width:1em;height:1em;"+d,r),a.toBlob(_),location.hash=r,document.title="1x1 Pixel PNG | "+r,D.href=i(r),v.value=n,w.value="#"+n,C.style.backgroundImage=f,C.title="8-Digit Hex: "+r,q.value=o,I.value=d,R.value=l,G.value=location.href,U.href=o,U.download="1x1_"+r+".png",96===l.length&&navigator.sendBeacon("https://shoonia.wixsite.com/colors/_functions/ping/"+t+"/"+encodeURIComponent(l))})),p("R",(e=>{let{R:t}=e;k.value=t,S.value=t})),p("G",(e=>{let{G:t}=e;E.value=t,x.value=t})),p("B",(e=>{let{B:t}=e;A.value=t,L.value=t})),p("A",(e=>{let{A:t}=e;B.value=t,M.value=t,y.value=c(t)}))})();