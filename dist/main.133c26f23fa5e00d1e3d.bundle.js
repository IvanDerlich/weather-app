!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(5)},function(e,t,n){var r=n(2),i=n(3);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],s=t.base?o[0]+t.base:o[0],u=n[s]||0,d="".concat(s," ").concat(u);n[s]=u+1;var l=c(d),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==l?(a[l].references++,a[l].updater(f)):a.push({identifier:d,updater:y(f,t),references:1}),r.push(d)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,l=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function p(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,h=0;function y(e,t){var n,r,i;if(t.singleton){var o=h++;n=m||(m=u(t)),r=f.bind(null,n,o,!1),i=f.bind(null,n,o,!0)}else n=u(t),r=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=c(n[r]);a[i].references--}for(var o=s(e,t),u=0;u<n.length;u++){var d=c(n[u]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=o}}}},function(e,t,n){(t=n(4)(!1)).push([e.i,"body{background-color:#ddcfcf;text-align:center}.panel{background-color:#c6c7ee;width:50%;margin:20px auto;border-width:1px;border-style:solid;border-color:white;border-radius:20px;padding:10px;margin-top:30px}.results>*{margin-top:15px}.units{cursor:all-scroll;width:5vw;background-color:#9090af}.fahrenheit{background-color:#8dadad}.hide{display:none}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}var a,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&i[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";n.r(t);n(1);function r(e,t){e.error=t,e.clean()}function i(e){let t=9*e;return t/=5,t+=32,Math.round(100*t)/100}function o(e){let t=e-32;return t*=5,t/=9,Math.round(100*t)/100}const a={city:"",temp:"",feels:"",humidity:"",windSpeed:"",windDir:"",error:"",message:"",response:"",degreesType:"ºC",url:"http://api.openweathermap.org/data/2.5/weather?appid=b93ac565c07c898f8ab078f813afa920&units=metric",switchImperial:()=>{a.feels=i(a.feels),a.temp=i(a.temp)},switchMetric:()=>{a.feels=o(a.feels),a.temp=o(a.temp)},clean:()=>{a.temp="",a.feels="",a.humidity="",a.windSpeed="",a.windDir=""}};var c=a;const s=document.querySelector("#city"),u=document.querySelector("#error"),d=document.querySelector("#feels"),l=document.querySelector("#humidity"),f=document.querySelector("#temp"),p=document.querySelector("#winds"),m=document.querySelector("#units"),h=document.querySelector("#message"),y=document.querySelector("#data"),v=document.querySelector("#comm");function g(){200===c.error?(v.classList.add("hide"),y.classList.remove("hide"),m.classList.remove("hide"),m.innerHTML=c.degreesType,u.classList.remove("hide"),h.innerHTML="City: "+s.value,c.temp&&(f.innerHTML=`Temperature: ${c.temp} ${c.degreesType} `),c.windSpeed&&c.windDir&&(p.innerHTML=`Winds: ${c.windSpeed} m/s from ${c.windDir}º`),c.feels&&(d.innerHTML=`Feels: ${c.feels} ${c.degreesType}`),c.humidity&&(l.innerHTML=`Humidity: ${c.humidity} %`)):(v.classList.remove("hide"),h.innerHTML="There was an error",u.innerHTML="Error: "+c.error,y.classList.add("hide"))}m.addEventListener("click",()=>{m.classList.contains("fahrenheit")?(m.classList.remove("fahrenheit"),c.degreesType="ºC",c.switchMetric(),g()):(m.classList.add("fahrenheit"),c.degreesType="ºF",c.switchImperial(),g())}),window.onload=()=>{y.classList.add("hide"),h.innerHTML="Type the city"},s.addEventListener("keyup",()=>{c.city=s.value,m.classList.remove("hide"),function(e,t){e.message="Fetching data...",e.error="",t();const n=`${e.url}&q=${e.city}`;fetch(n).then(e=>e.json()).then(n=>{e.response=n;try{if(200!==n.cod)throw n.message;e.error=200,e.temp=Math.round(100*n.main.temp)/100,e.feels=Math.round(100*n.main.feels_like)/100,e.windSpeed=n.wind.speed,e.windDir=n.wind.deg,e.humidity=n.main.humidity}catch(t){r(e,t)}t()}).catch(t=>{r(e,t)})}(c,g)})}]);