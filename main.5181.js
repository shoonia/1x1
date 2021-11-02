(()=>{var e=["Shift","Meta","Alt","Control"],t="object"==typeof navigator&&/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"Meta":"Control";const a=document.createElement("canvas"),n=(e,t)=>{const n=a.cloneNode(),r=n.getContext("2d",{alpha:255!==t,desynchronized:!0,colorSpace:"srgb"});return n.width=1,n.height=1,r.fillStyle="#"+e,r.rect(0,0,1,1),r.fill(),n},r=e=>{const t=a.cloneNode(),n=t.getContext("2d",{alpha:!0,desynchronized:!0});return t.width=50,t.height=50,n.fillStyle=e,n.arc(25,25,24,0,2*Math.PI),n.stroke(),n.fill(),t.toDataURL("image/png",.1)},o=e=>document.querySelector(e),i=e=>document.querySelectorAll(e),l=e=>{e.target.select(),navigator.clipboard.writeText(e.target.value)},d=e=>{const t=e.toString(16);return t.length<2?"0"+t:t},f=e=>{let t="";for(;0<e--;)t+=(16*Math.random()|0).toString(16);return t};var c=JSON.parse('{"black":"000000","silver":"c0c0c0","gray":"808080","white":"ffffff","maroon":"800000","red":"ff0000","purple":"800080","fuchsia":"ff00ff","green":"008000","lime":"00ff00","olive":"808000","yellow":"ffff00","navy":"000080","blue":"0000ff","teal":"008080","aqua":"00ffff","orange":"ffa500","aliceblue":"f0f8ff","antiquewhite":"faebd7","aquamarine":"7fffd4","azure":"f0ffff","beige":"f5f5dc","bisque":"ffe4c4","blanchedalmond":"ffebcd","blueviolet":"8a2be2","brown":"a52a2a","burlywood":"deb887","cadetblue":"5f9ea0","chartreuse":"7fff00","chocolate":"d2691e","coral":"ff7f50","cornflowerblue":"6495ed","cornsilk":"fff8dc","crimson":"dc143c","cyan":"00ffff","darkblue":"00008b","darkcyan":"008b8b","darkgoldenrod":"b8860b","darkgray":"a9a9a9","darkgreen":"006400","darkgrey":"a9a9a9","darkkhaki":"bdb76b","darkmagenta":"8b008b","darkolivegreen":"556b2f","darkorange":"ff8c00","darkorchid":"9932cc","darkred":"8b0000","darksalmon":"e9967a","darkseagreen":"8fbc8f","darkslateblue":"483d8b","darkslategray":"2f4f4f","darkslategrey":"2f4f4f","darkturquoise":"00ced1","darkviolet":"9400d3","deeppink":"ff1493","deepskyblue":"00bfff","dimgray":"696969","dimgrey":"696969","dodgerblue":"1e90ff","firebrick":"b22222","floralwhite":"fffaf0","forestgreen":"228b22","gainsboro":"dcdcdc","ghostwhite":"f8f8ff","gold":"ffd700","goldenrod":"daa520","greenyellow":"adff2f","grey":"808080","honeydew":"f0fff0","hotpink":"ff69b4","indianred":"cd5c5c","indigo":"4b0082","ivory":"fffff0","khaki":"f0e68c","lavender":"e6e6fa","lavenderblush":"fff0f5","lawngreen":"7cfc00","lemonchiffon":"fffacd","lightblue":"add8e6","lightcoral":"f08080","lightcyan":"e0ffff","lightgoldenrodyellow":"fafad2","lightgray":"d3d3d3","lightgreen":"90ee90","lightgrey":"d3d3d3","lightpink":"ffb6c1","lightsalmon":"ffa07a","lightseagreen":"20b2aa","lightskyblue":"87cefa","lightslategray":"778899","lightslategrey":"778899","lightsteelblue":"b0c4de","lightyellow":"ffffe0","limegreen":"32cd32","linen":"faf0e6","magenta":"ff00ff","mediumaquamarine":"66cdaa","mediumblue":"0000cd","mediumorchid":"ba55d3","mediumpurple":"9370db","mediumseagreen":"3cb371","mediumslateblue":"7b68ee","mediumspringgreen":"00fa9a","mediumturquoise":"48d1cc","mediumvioletred":"c71585","midnightblue":"191970","mintcream":"f5fffa","mistyrose":"ffe4e1","moccasin":"ffe4b5","navajowhite":"ffdead","oldlace":"fdf5e6","olivedrab":"6b8e23","orangered":"ff4500","orchid":"da70d6","palegoldenrod":"eee8aa","palegreen":"98fb98","paleturquoise":"afeeee","palevioletred":"db7093","papayawhip":"ffefd5","peachpuff":"ffdab9","peru":"cd853f","pink":"ffc0cb","plum":"dda0dd","powderblue":"b0e0e6","rosybrown":"bc8f8f","royalblue":"4169e1","saddlebrown":"8b4513","salmon":"fa8072","sandybrown":"f4a460","seagreen":"2e8b57","seashell":"fff5ee","sienna":"a0522d","skyblue":"87ceeb","slateblue":"6a5acd","slategray":"708090","slategrey":"708090","snow":"fffafa","springgreen":"00ff7f","steelblue":"4682b4","tan":"d2b48c","thistle":"d8bfd8","tomato":"ff6347","turquoise":"40e0d0","violet":"ee82ee","wheat":"f5deb3","whitesmoke":"f5f5f5","yellowgreen":"9acd32","rebeccapurple":"663399","transparent":"00000000","blank":"00000000","empty":"00000000"}');const s=(e=>{let t={},a={},n={dispatch(e,r){if("@dispatch"!==e&&n.dispatch("@dispatch",[e,r,t[e]]),t[e]){let o;t[e].forEach((i=>{let l=t[e].includes(i)&&i(a,r,n);l&&"function"!==typeof l.then&&(a={...a,...l},o={...o,...l})})),o&&n.dispatch("@changed",o)}},get:()=>a,on:(e,a)=>((t[e]||(t[e]=[])).push(a),()=>{t[e]=t[e].filter((e=>e!==a))})};return e.forEach((e=>{e&&e(n)})),n.dispatch("@init"),n})([e=>{let{on:t}=e;t("@init",(()=>({R:255,G:255,B:255,A:255,hex:"ffffffff",canvas:n("fff",255)}))),t("hex",((e,t)=>{const a=parseInt(t,16),r=255&a;return{R:a>>24&255,G:a>>16&255,B:a>>8&255,A:r,hex:t,canvas:n(t,r)}})),t("rgba",((e,t)=>{let[a,r]=t;const o=(e=>{const t=Math.abs(~~e);return t>255?255:t})(r),i={...e,[a]:o},l=(e=>{let{R:t,G:a,B:n,A:r}=e;return[t,a,n,r].map(d).join("")})(i);return{[a]:o,hex:l,canvas:n(l,i.A)}}))}]),{getState:u,dispatch:g,connect:h}=(e=>{let t=Symbol(),a=[];return e.on(t,((e,t)=>t)),e.on("@changed",((e,t)=>{a.some((a=>{a.keys.some((e=>e in t))&&a.cb(e)}))})),{getState:e.get,dispatch:e.dispatch,setState(a){e.dispatch(t,a)},connect(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];let o=n.pop();return n.length&&a.push({keys:n,cb:o}),o(e.get()),()=>{a=a.filter((e=>e.cb!==o))}}}})(s),b="function"===typeof window.showSaveFilePicker,p=o("#inputColor"),m=o("#inputAlpha"),v=o("#picker"),y=o("#rangeRed"),w=o("#numberRed"),k=o("#rangeGreen"),S=o("#numberGreen"),E=o("#rangeBlue"),x=o("#numberBlue"),A=o("#rangeAlpha"),L=o("#numberAlpha"),B=o("#outputImage"),M=o("#outputBadge"),C=o("#outputDataURL"),P=o("#outputBase64"),q=o("#outputCSS"),R=o("#outputBytes"),I=o("#outputLink"),N=o("#download"),G=o('link[rel="icon"]'),U=new FileReader,D="ff",$=/^#/,z=/[^\da-f]/gi,F=/Mac OS/i,O=e=>g("hex",e),T=e=>{let{target:t}=e;return g("rgba",[t.dataset.rgba,t.valueAsNumber])},j=e=>{1!==U.readyState&&U.readAsArrayBuffer(e)},W=e=>{let t=e.trim().toLowerCase().replace($,"");if(t in c&&(t=c[t]),z.test(t))try{t=function(e,t,a,n){const r=(e+(n||"")).toString().includes("%");if("string"===typeof e?[e,t,a,n]=e.match(/(0?\.?\d{1,3})%?\b/g).map((e=>Number(e))):void 0!==n&&(n=Number.parseFloat(n)),"number"!==typeof e||"number"!==typeof t||"number"!==typeof a||e>255||t>255||a>255)throw new TypeError("Expected three numbers below 256");if("number"===typeof n){if(!r&&n>=0&&n<=1)n=Math.round(255*n);else{if(!(r&&n>=0&&n<=100))throw new TypeError("Expected alpha value ("+n+") as a fraction or percentage");n=Math.round(255*n/100)}n=(256|n).toString(16).slice(1)}else n="";return(a|t<<8|e<<16|1<<24).toString(16).slice(1)+n}(e)}catch{return[!1]}return 3===t.length&&(t+=t),6===t.length&&(t+=D),8!==t.length?[!1]:[!0,t]};if((()=>{const e=document.cookie.replace(/(?:(?:^|.*;\s*)cid\s*=\s*([^;]*).*$)|^.*$/,"$1"),t=""!==e?e:f(21),a="https://www.google-analytics.com/collect?v=1&tid=UA-128241641-2&aip=1&t=event&ea=open&dp=&dt=&cid="+t;let n=!1;try{n=navigator.sendBeacon(a)}catch{}n||((new Image).src=a),document.cookie="cid="+t+";domain=shoonia.github.io;path=/;max-age=31536000"})(),/Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))o("#history").remove();else{const a=F.test(navigator.userAgent)?'[data-hint="darwin"]':'[data-hint="win"]',n=()=>{null===history.state&&history.go(-1)},r=()=>history.go(1);(function(a,n,r){var o,i;void 0===r&&(r={});var l=null!=(o=r.timeout)?o:1e3,d=null!=(i=r.event)?i:"keydown",f=Object.keys(n).map((function(e){return[(a=e,a.trim().split(" ").map((function(e){var a=e.split(/\b\+/),n=a.pop();return[a=a.map((function(e){return"$mod"===e?t:e})),n]}))),n[e]];var a})),c=new Map,s=null;a.addEventListener(d,(function(t){t instanceof KeyboardEvent&&(f.forEach((function(a){var n=a[0],r=a[1],o=c.get(n)||n;!function(t,a){return!(a[1].toUpperCase()!==t.key.toUpperCase()&&a[1]!==t.code||a[0].find((function(e){return!t.getModifierState(e)}))||e.find((function(e){return!a[0].includes(e)&&a[1]!==e&&t.getModifierState(e)})))}(t,o[0])?t.getModifierState(t.key)||c.delete(n):o.length>1?c.set(n,o.slice(1)):(c.delete(n),r(t))})),s&&clearTimeout(s),s=setTimeout(c.clear.bind(c),l))}))})(window,{"$mod+z":n,"$mod+Shift+z":r}),o("#undo").addEventListener("click",n),o("#redo").addEventListener("click",r),i(a).forEach((e=>{e.hidden=!1}))}b&&N.addEventListener("click",(e=>{const{download:t}=e.target,{canvas:a}=u();e.preventDefault(),e.stopImmediatePropagation(),(async(e,t)=>{const a=await window.showSaveFilePicker({suggestedName:e});if("granted"===await a.queryPermission()){const[e,n]=await Promise.all([a.createWritable(),new Promise((e=>t.toBlob(e)))]);await e.write(n),await e.close()}})(t,a)}));{const[e,t]=W(location.hash),a=e?t:f(6)+D;history.pushState(1,null,"#"+a),O(a)}p.addEventListener("change",(()=>{const[e,t]=W(p.value);e?O(t):p.focus()})),m.addEventListener("change",(()=>{const e=m.value.trim().toLowerCase().replace(z,"");g("rgba",["A",parseInt(2!==e.length?D:e,16)])})),v.addEventListener("change",(()=>{const[e,t]=W(v.value);e&&O(t)})),U.addEventListener("load",(()=>{const e=new Uint8Array(U.result);R.value=e.toString(),M.textContent="1x1 ("+e.length+" bytes)"})),i("[data-rgba]").forEach((e=>{e.addEventListener("change",T)})),i("[data-clipboard]").forEach((e=>{e.addEventListener("click",l)})),o("#rgbaDetails").open=window.innerWidth>701,o("#colorList").appendChild((()=>{const e=new DocumentFragment,t=document.createElement("option");for(let a in c){const n=t.cloneNode();n.value=c[a],n.textContent=a,e.append(n)}return e})()),o("#random").addEventListener("click",(()=>{O(f(6)+D)})),window.addEventListener("popstate",(()=>{const{hex:e}=u(),t=location.hash.slice(1);if(t===e)return;const[a,n]=W(t);a&&O(n)})),h("hex",(e=>{let{hex:t,canvas:a}=e;const n=t.slice(0,6),o="#"+t,i=a.toDataURL("image/png",.1),l=i.slice(22),d="url("+i+")",f="background-image: "+d+";";console.log("%c  ","display:inline-block;border:1px solid #c6e2f7;border-radius:50%;width:1em;height:1em;"+f,o),a.toBlob(j),location.hash=o,document.title="1x1 Pixel PNG | "+o,G.href=r(o),p.value=n,v.value="#"+n,B.style.backgroundImage=d,B.title="8-Digit Hex: "+o,C.value=i,q.value=f,P.value=l,I.value=location.href,N.href=i,N.download="1x1_"+o+".png",96===l.length&&navigator.sendBeacon("https://shoonia.wixsite.com/colors/_functions/ping/"+t+"/"+encodeURIComponent(l))})),h("R",(e=>{let{R:t}=e;y.value=t,w.value=t})),h("G",(e=>{let{G:t}=e;k.value=t,S.value=t})),h("B",(e=>{let{B:t}=e;E.value=t,x.value=t})),h("A",(e=>{let{A:t}=e;A.value=t,L.value=t,m.value=d(t)}))})();