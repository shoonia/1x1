parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"w+t1":[function(require,module,exports) {
"use strict";function e(e){return document.getElementById(e)}function t(e){var t=Math.abs(~~e);if(255<t)return"ff";var n=t.toString(16);return 2>n.length?"0"+n:n}function n(e,t){e.addEventListener("input",function(){t.value=e.value||"0"}),t.addEventListener("input",function(){e.value=t.value||"0"})}function r(e,t){var n;return function(){clearTimeout(n),n=setTimeout(e,t)}}function u(e){var t=!1;try{t=navigator.sendBeacon(e)}catch(n){}t||((new Image).src=e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.id=e,exports.rgbToHex=t,exports.bindInputs=n,exports.debounce=r,exports.sendBeacon=u;
},{}],"2vvv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=l;var t=require("./util"),e=(0,t.id)("outputImage"),o=(0,t.id)("outputDataURL"),n=(0,t.id)("outputBase64"),a=(0,t.id)("outputCSS"),c=(0,t.id)("outputBytes"),i=(0,t.id)("download"),u=new FileReader;function r(t){t.target.select(),document.execCommand("copy")}function d(t){var e=document.createElement("canvas"),o=e.getContext("2d");return e.width=1,e.height=1,o.rect(0,0,1,1),o.fillStyle=t,o.fill(),e}function l(c){var r="#".concat(c),l=d(r),s=l.toDataURL("image/png"),f=s.slice(22);l.toBlob(function(t){u.readAsArrayBuffer(t)}),e.style.backgroundColor=r,e.title="8 Digit Hex: ".concat(r),o.value=s,a.value="background-image: url('".concat(s,"');"),n.value=f,i.href=s,i.download="1x1_".concat(r,".png"),(0,t.sendBeacon)("https://shoonia.wixsite.com/colors/_functions/1x1/".concat(c,"/").concat(encodeURIComponent(f)))}[o,a,n,c].forEach(function(t){t.addEventListener("click",r)}),u.addEventListener("load",function(){var t=new Uint8Array(u.result);c.value=t.toString()});
},{"./util":"w+t1"}],"oL+A":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createOptionList=f,exports.colors=void 0;var e={black:"000",silver:"c0c0c0",gray:"808080",white:"fff",maroon:"800000",red:"ff0000",purple:"800080",fuchsia:"ff00ff",green:"008000",lime:"00ff00",olive:"808000",yellow:"ffff00",navy:"000080",blue:"0000ff",teal:"008080",aqua:"00ffff",orange:"ffa500",aliceblue:"f0f8ff",antiquewhite:"faebd7",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",blanchedalmond:"ffebcd",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",oldlace:"fdf5e6",olivedrab:"6b8e23",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",whitesmoke:"f5f5f5",yellowgreen:"9acd32",rebeccapurple:"663399"};function f(){var f=document.createDocumentFragment(),a=document.createElement("option");for(var d in e){var r=a.cloneNode();r.value=e[d],r.textContent=d,f.appendChild(r)}return f}exports.colors=e;
},{}],"tQzs":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;var e=require("./util");function o(){var e=document.cookie.replace(/(?:(?:^|.*;\s*)cid\s*\=\s*([^;]*).*$)|^.*$/,"$1");if(!e){for(var o=16;0<o--;)e+=(36*Math.random()|0).toString(36);document.cookie="cid=".concat(e,";domain=shoonia.github.io;max-age=").concat(31536e3)}return e}function t(){(0,e.sendBeacon)("https://www.google-analytics.com/collect?v=1&tid=UA-128241641-2&aip=1&t=event&ea=open&dp=&dt=&cid=".concat(o()))}
},{"./util":"w+t1"}],"VJtr":[function(require,module,exports) {
"use strict";var e=require("./util"),n=r(require("./output")),a=require("./colors"),u=r(require("./ga"));function r(e){return e&&e.__esModule?e:{default:e}}var t=(0,e.id)("inputColor"),i=(0,e.id)("rangeRed"),d=(0,e.id)("numberRed"),l=(0,e.id)("rangeGreen"),o=(0,e.id)("numberGreen"),v=(0,e.id)("rangeBlue"),c=(0,e.id)("numberBlue"),s=(0,e.id)("rangeAlpha"),b=(0,e.id)("numberAlpha"),g=(0,e.id)("picker"),f=(0,e.id)("buttonCreate"),p=(0,e.id)("colorList"),h=/[^\da-z]/i,L=/[^\da-f]/i;function E(e){var n=parseInt(e,16);i.value=d.value=n>>16&255,l.value=o.value=n>>8&255,v.value=c.value=255&n}function m(){var u=t.value.trim().toLowerCase().replace(h,"");return a.colors[u]&&(u=a.colors[u]),L.test(u)?t.focus():(3===u.length&&(u+=u),6!==u.length?t.focus():(t.value!==u&&(t.value=u),g.value="#".concat(u),E(u),void(0,n.default)(u+(0,e.rgbToHex)(s.value))))}function x(){var a=(0,e.rgbToHex)(i.value)+(0,e.rgbToHex)(l.value)+(0,e.rgbToHex)(v.value);t.value=a,g.value="#".concat(a),(0,n.default)(a+(0,e.rgbToHex)(s.value))}function H(){t.value=g.value.slice(1),m()}var I=(0,e.debounce)(x,100),T=(0,e.debounce)(m,100);[i,d,l,o,v,c,s,b].forEach(function(e){e.addEventListener("change",I)}),t.addEventListener("change",T),f.addEventListener("click",T),g.addEventListener("change",H),p.addEventListener("change",m),p.appendChild((0,a.createOptionList)()),(0,e.bindInputs)(i,d),(0,e.bindInputs)(l,o),(0,e.bindInputs)(v,c),(0,e.bindInputs)(s,b),m(),(0,u.default)();
},{"./util":"w+t1","./output":"2vvv","./colors":"oL+A","./ga":"tQzs"}]},{},["VJtr"], null)