parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"w+t1":[function(require,module,exports) {
"use strict";function e(e){return document.getElementById(e)}function t(e){var t=Math.abs(~~e);if(255<t)return"ff";var n=t.toString(16);return 2>n.length?"0"+n:n}function n(e,t){e.addEventListener("input",function(){t.value=e.value||"0"}),t.addEventListener("input",function(){e.value=t.value||"0"})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getById=e,exports.rgbToHex=t,exports.bindInputs=n;
},{}],"2vvv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=c;var e=require("./util"),t=(0,e.getById)("outputImage"),r=(0,e.getById)("outputDataURL"),u=(0,e.getById)("outputBase64"),a=(0,e.getById)("outputBuffer");function n(e){e.target.select(),document.execCommand("copy")}function i(e){var t=new Uint8Array(e),r=new Blob([t],{type:"image/png"});return URL.createObjectURL(r)}function c(e){e.error||(t.style.backgroundImage="url("+i(e.buffer)+")",r.value="data:image/png;base64,"+e.title,u.value=e.title,a.value=JSON.stringify(e.buffer))}r.addEventListener("click",n),u.addEventListener("click",n),a.addEventListener("click",n);
},{"./util":"w+t1"}],"oL+A":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={black:"000",silver:"c0c0c0",gray:"808080",white:"fff",maroon:"800000",red:"ff0000",purple:"800080",fuchsia:"ff00ff",green:"008000",lime:"00ff00",olive:"808000",yellow:"ffff00",navy:"000080",blue:"0000ff",teal:"008080",aqua:"00ffff",orange:"ffa500",aliceblue:"f0f8ff",antiquewhite:"faebd7",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",blanchedalmond:"ffebcd",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",oldlace:"fdf5e6",olivedrab:"6b8e23",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",whitesmoke:"f5f5f5",yellowgreen:"9acd32",rebeccapurple:"663399"};exports.default=e;
},{}],"+cZF":[function(require,module,exports) {
"use strict";function t(t){return fetch("https://shoonia.wixsite.com/1x1-pixel/_functions/hex8/"+t).then(function(t){return t.json()}).catch(function(t){return{error:t}})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.fetchData=t;
},{}],"VJtr":[function(require,module,exports) {
"use strict";var e=require("./util"),t=n(require("./output")),u=n(require("./colors")),a=require("./api");function n(e){return e&&e.__esModule?e:{default:e}}var r=(0,e.getById)("inputColor"),l=(0,e.getById)("rangeRed"),d=(0,e.getById)("numberRed"),i=(0,e.getById)("rangeGreen"),v=(0,e.getById)("numberGreen"),c=(0,e.getById)("rangeBlue"),g=(0,e.getById)("numberBlue"),o=(0,e.getById)("rangeAlpha"),s=(0,e.getById)("numberAlpha"),I=document.querySelectorAll(".buttonsCreate");function f(){var u=r.value,n=(0,e.rgbToHex)(o.value);(0,a.fetchData)(u+n).then(t.default)}function b(){var e=r.value.replace(/[^0-9a-z]/gi,"");if(u.default[e]&&(e=u.default[e]),3===e.length&&(e+=e),r.value!==e&&(r.value=e),6===e.length){var t=parseInt(e.slice(0,2),16),a=parseInt(e.slice(2,4),16),n=parseInt(e.slice(4),16);l.value=t,d.value=t,i.value=a,v.value=a,c.value=n,g.value=n}}function p(){var t=(0,e.rgbToHex)(l.value),u=(0,e.rgbToHex)(i.value),a=(0,e.rgbToHex)(c.value);r.value=t+u+a}r.addEventListener("change",b),[l,d,i,v,c,g].forEach(function(e){e.addEventListener("change",p)}),[].forEach.call(I,function(e){e.addEventListener("click",f)}),(0,e.bindInputs)(l,d),(0,e.bindInputs)(i,v),(0,e.bindInputs)(c,g),(0,e.bindInputs)(o,s),b(),f();
},{"./util":"w+t1","./output":"2vvv","./colors":"oL+A","./api":"+cZF"}]},{},["VJtr"], null)