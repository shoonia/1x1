parcelRequire=function(e){var r="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,i={};function u(e,u){if(e in i)return i[e];var t="function"==typeof parcelRequire&&parcelRequire;if(!u&&t)return t(e,!0);if(r)return r(e,!0);if(n&&"string"==typeof e)return n(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return u.register=function(e,r){i[e]=r},i=e(u),u.modules=i,u}(function (require) {function a(t){return document.getElementById(t)}function c(t){var e=Math.abs(~~t);if(255<e)return"ff";var o=e.toString(16);return 2>o.length?"0"+o:o}function d(t,e){t.addEventListener("input",function(){e.value=t.value||"0"}),e.addEventListener("input",function(){t.value=e.value||"0"})}function p(t,e){var o;return function(){clearTimeout(o),o=setTimeout(t,e)}}function A(){var t=Math.floor(16777215*Math.random()).toString(16);return t.length<6?t+"0":t}var q=a("outputImage"),s=a("outputDataURL"),u=a("outputBase64"),w=a("outputCSS"),r=a("outputBytes"),x=a("download"),l=new FileReader;function B(v){v.target.select(),document.execCommand("copy")}function C(v){var $=document.createElement("canvas"),t=$.getContext("2d");return $.width=1,$.height=1,t.rect(0,0,1,1),t.fillStyle=v,t.fill(),$}[s,w,u,r].forEach(function(v){v.addEventListener("click",B)}),l.addEventListener("load",function(){var v=new Uint8Array(l.result);r.value=v.toString()});var t=function(v){var $="#"+v,t=C($),a=t.toDataURL("image/png"),r="url("+a+")";t.toBlob(function(v){l.readAsArrayBuffer(v)}),q.style.backgroundImage=r,q.title="8 Digit Hex: "+$,s.value=a,w.value="background-image: "+r+";",u.value=a.slice(22),x.href=a,x.download="1x1_"+$+".png"};var g={black:"000",silver:"c0c0c0",gray:"808080",white:"fff",maroon:"800000",red:"ff0000",purple:"800080",fuchsia:"ff00ff",green:"008000",lime:"00ff00",olive:"808000",yellow:"ffff00",navy:"000080",blue:"0000ff",teal:"008080",aqua:"00ffff",orange:"ffa500",aliceblue:"f0f8ff",antiquewhite:"faebd7",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",blanchedalmond:"ffebcd",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",oldlace:"fdf5e6",olivedrab:"6b8e23",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",whitesmoke:"f5f5f5",yellowgreen:"9acd32",rebeccapurple:"663399"};function D(){var e=document.createDocumentFragment(),f=document.createElement("option");for(var a in g){var r=f.cloneNode();r.value=g[a],r.textContent=a,e.appendChild(r)}return e}function E(){for(var t=16,e="";0<t--;)e+=(36*Math.random()|0).toString(36);return e}function F(){var t=document.cookie.replace(/(?:(?:^|.*;\s*)cid\s*=\s*([^;]*).*$)|^.*$/,"$1"),e=""!==t?t:E();return document.cookie="cid="+e+";domain=shoonia.github.io;max-age=31536000",e}var G=function(){var t="https://www.google-analytics.com/collect?v=1&tid=UA-128241641-2&aip=1&t=event&ea=open&dp=&dt=&cid="+F(),e=!1;try{e=navigator.sendBeacon(t)}catch(a){}e||(new Image().src=t)};var b=a("inputColor"),e=a("rangeRed"),m=a("numberRed"),f=a("rangeGreen"),n=a("numberGreen"),h=a("rangeBlue"),o=a("numberBlue"),i=a("rangeAlpha"),v=a("numberAlpha"),j=a("picker"),H=a("buttonCreate"),y=a("colorList"),I=/[^\da-z]/i,J=/[^\da-f]/i;function K(r){var $=parseInt(r,16);j.value="#"+r,e.value=m.value=$>>16&255,f.value=n.value=$>>8&255,h.value=o.value=255&$}function k(){var r=b.value.trim().toLowerCase().replace(I,"");return void 0!==g[r]&&(r=g[r]),J.test(r)?b.focus():(3===r.length&&(r+=r),6!==r.length?b.focus():(b.value!==r&&(b.value=r),K(r),void t(r+c(i.value))))}function L(){var r=c(e.value)+c(f.value)+c(h.value);b.value=r,j.value="#"+r,t(r+c(i.value))}function M(){b.value=j.value.slice(1),k()}var N=p(L,100),z=p(k,100);[e,m,f,n,h,o,i,v].forEach(function(r){r.addEventListener("change",N)}),b.addEventListener("change",z),H.addEventListener("click",z),j.addEventListener("change",M),y.addEventListener("change",k),y.appendChild(D()),d(e,m),d(f,n),d(h,o),d(i,v),b.value=A(),k(),"localhost"!==document.location.hostname&&G();return{"VJtr":{}};});