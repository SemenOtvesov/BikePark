"use strict";(self.webpackChunkwebpack_to_study=self.webpackChunkwebpack_to_study||[]).push([[961],{5961:function(t,e,n){n.d(e,{Z:function(){return g}});var a=n(7294),r=n(6542),o=n(969),i=n(6415),c=n(5998);function s(t,e,n,a,r){var o=t.startPoint.year,i=t.endPoint.year;if(o&&(e===o&&n===t.startPoint.month&&a===t.startPoint.day&&r.classList.add("active"),i&&(e===i&&n===t.endPoint.month&&a===t.endPoint.day&&r.classList.add("active"),e>=o&&e<=i))){var c=t.startPoint.month,s=t.endPoint.month,l=t.startPoint.day,u=t.endPoint.day;if(void 0===c)return;if(void 0===s)return;if(o<i){if(!l)return;if(!u)return;e<i&&(n===c&&a>l&&r.classList.add("jumper"),n>c&&r.classList.add("jumper")),e===i&&(n<s&&r.classList.add("jumper"),n===s&&a<u&&r.classList.add("jumper"))}if(o===i&&n>=c&&n<=s){if(!l)return;if(!u)return;c===s?a>l&&a<u&&r.classList.add("jumper"):n===c?a>l&&r.classList.add("jumper"):(n<s||a<u)&&r.classList.add("jumper"),a>l&&a<u&&r.classList.add("jumper")}}}function l(t,e){for(var n=0==e?new Date(t-1,11,0).getDate():new Date(t,e,0).getDate(),r=new Date(t,e+1,0).getDate(),o=[],i=1,c=1,s=new Date(t,e,1).getDay(),l=0;l<6;l++){for(var u=[],d=1,m=0;m<7;m++)i<=r?1===s?u.push(a.createElement("li",{"data-number":i,"data-month":e,"data-year":t,id:"number",key:Math.random(),className:"calendar__item-bottom-number"},i++)):i<=s?u.push(a.createElement("li",{id:"number","data-number":n-(--s-i),"data-month":0===e?11:e-1,"data-year":0===e?t-1:t,key:Math.random(),className:"calendar__item-bottom-number last-month"},n-(s-i))):0===s&&(u.push(a.createElement("li",{id:"number","data-number":n-(6-d),"data-month":0===e?11:e-1,"data-year":0===e?t-1:t,key:Math.random(),className:"calendar__item-bottom-number last-month"},n-(6-d++))),7===d&&s++):u.push(a.createElement("li",{id:"number","data-number":c,"data-month":11===e?0:e+1,"data-year":11===e?t+1:t,key:Math.random(),className:"calendar__item-bottom-number last-month"},c++));o.push(a.createElement("ul",{key:Math.random(),className:"calendar__item-bottom-line"},u))}return o}var u=function(t){t((function(t){return 11!==t.currMonth?{currYear:t.currYear,currMonth:t.currMonth+1}:{currYear:t.currYear+1,currMonth:0}}))},d=function(t){t((function(t){return 0!==t.currMonth?{currYear:t.currYear,currMonth:t.currMonth-1}:{currYear:t.currYear-1,currMonth:11}}))};var m=function(t){var e=t.dispatch,n=t.endPoints,a=t.setEndPoints,r=t.event.target.closest("#number"),o=r.dataset.year?+r.dataset.year:NaN,i=r.dataset.month?+r.dataset.month:NaN,c=r.dataset.number?+r.dataset.number:NaN,s=document.querySelector(".active#typeRentButton");e(a(function(t){var e=t.points,n=t.year,a=t.month,r=t.day,o=t.typeRent;if("hour"===o)return{startPoint:{year:n,month:a,day:r},endPoint:{year:n,month:a,day:r}};if(e.startPoint.year&&e.startPoint.month&&e.startPoint.day){if(e.startPoint.year>n||e.startPoint.month>=a){if(e.startPoint.year===n){if(e.startPoint.day>r&&e.startPoint.month===a)return"day"===o?{startPoint:{year:n,month:a,day:r},endPoint:{year:n,month:a,day:r+1}}:{startPoint:{year:n,month:a,day:r},endPoint:{}};if(e.startPoint.month>a)return"day"===o?{startPoint:{year:n,month:a,day:r},endPoint:{year:n,month:a,day:r+1}}:{startPoint:{year:n,month:a,day:r},endPoint:{}}}if(e.startPoint.year>n)return"day"===o?{startPoint:{year:n,month:a,day:r},endPoint:{year:n,month:a,day:r+1}}:{startPoint:{year:n,month:a,day:r},endPoint:{}}}return e.endPoint.year||e.startPoint.year!==n||e.startPoint.month!==a||e.startPoint.day!==r?e.endPoint.year&&e.endPoint.month&&e.endPoint.day?e.endPoint.year===n&&e.endPoint.month===a&&e.endPoint.day===r?{startPoint:e.startPoint,endPoint:{}}:e.startPoint.year===n&&e.startPoint.month===a&&e.startPoint.day===r?{startPoint:{year:n,month:a,day:r},endPoint:{}}:e.endPoint.year>n||e.endPoint.month>a||e.endPoint.day>r||e.endPoint.year<n||e.endPoint.month<a||e.endPoint.day<r?{startPoint:e.startPoint,endPoint:{year:n,month:a,day:r}}:{startPoint:{},endPoint:{}}:{startPoint:e.startPoint,endPoint:{year:n,month:a,day:r}}:{startPoint:{},endPoint:{}}}return"day"===o?{startPoint:{year:n,month:a,day:r},endPoint:{year:n,month:a,day:r+1}}:{startPoint:{year:n,month:a,day:r},endPoint:{}}}({points:n,year:o,month:i,day:c,typeRent:null==s?void 0:s.dataset.rentType})))},y=n(5771);function h(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var a,r,o,i,c=[],s=!0,l=!1;try{if(o=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;s=!1}else for(;!(s=(a=o.call(n)).done)&&(c.push(a.value),c.length!==e);s=!0);}catch(t){l=!0,r=t}finally{try{if(!s&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw r}}return c}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function v(t){t.classList.add("warning"),setTimeout((function(){return t.classList.remove("warning")}),300)}var P=["ПН","ВТ","СР","ЧТ","ПТ","СУ","ВС"],p=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],_=function(t){var e=t.dispatch,n=t.current,r=t.currentTwo,o=t.timeStart,i=t.setCurrent,c=t.setCurrentTwo,s=t.endPoints,f=t.setEndPoints;return a.createElement(a.Fragment,null,a.createElement("div",{id:"calendarOneGen","data-curent":!0,"data-year":n.currYear,"data-month":n.currMonth,className:"calendar__item"},a.createElement("div",{className:"calendar__item-top"},a.createElement("div",{className:"calendar__item-top-right"},a.createElement("div",{className:"calendar__item-title"},p[n.currMonth]),a.createElement("div",{className:"calendar__item-arrow-box"},a.createElement("span",{id:"calendarLastMonth",onClick:function(){return d(i)},className:"calendar__item-arrow up"}),a.createElement("span",{id:"calendarNextMonth",onClick:function(){return u(i)},className:"calendar__item-arrow down"}))),a.createElement("input",{id:"startTimeInput",onChange:function(t){return function(t,e){var n=e.target.closest("#startTimeInput"),a=h(n.value.split(":"),2),r=a[0],o=void 0===r?"":r,i=a[1],c=void 0===i?"":i,s={hour:o,min:c};if(o&&!isNaN(+o)?(o.length>2?(s.hour=o[0]+o[1],s.min=o[2]):+o>23&&(s.hour="23"),+o<10&&1===o.length&&+o>2&&(s.hour="0".concat(o))):(s.hour="12",v(n)),isNaN(+c)?(s.min="00",v(n)):+c>59&&(s.min="59"),!o)return t((0,y.V2)(""));n.value.length>=3?t((0,y.V2)("".concat(s.hour,":").concat(s.min))):t((0,y.V2)("".concat(s.hour)))}(e,t)},value:o,className:"calendar__item-input"})),a.createElement("div",{onClick:function(t){return m({dispatch:e,endPoints:s,setEndPoints:f,event:t})},className:"calendar__item-bottom"},a.createElement("ul",{className:"calendar__item-bottom-line"},P.map((function(t){return a.createElement("li",{key:Math.random(),className:"calendar__item-bottom-day"},t)}))),l(n.currYear,n.currMonth))),a.createElement("div",{id:"calendarOneGen","data-two-curent":!0,"data-year":r.currYear,"data-month":r.currMonth,className:"calendar__item"},a.createElement("div",{className:"calendar__item-top"},a.createElement("div",{className:"calendar__item-top-right"},a.createElement("div",{className:"calendar__item-title"},p[r.currMonth]),a.createElement("div",{className:"calendar__item-arrow-box"},a.createElement("span",{id:"calendarLastTwoMonth",onClick:function(){return d(c)},className:"calendar__item-arrow up"}),a.createElement("span",{id:"calendarNextTwoMonth",onClick:function(){return u(c)},className:"calendar__item-arrow down"}))),a.createElement("div",{id:"finishTimeInput",className:"calendar__item-input"},"12:00")),a.createElement("div",{onClick:function(t){return m({dispatch:e,endPoints:s,setEndPoints:f,event:t})},className:"calendar__item-bottom"},a.createElement("ul",{className:"calendar__item-bottom-line"},P.map((function(t){return a.createElement("li",{key:Math.random(),className:"calendar__item-bottom-day"},t)}))),l(r.currYear,r.currMonth))))};function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var a,r,o,i,c=[],s=!0,l=!1;try{if(o=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;s=!1}else for(;!(s=(a=o.call(n)).done)&&(c.push(a.value),c.length!==e);s=!0);}catch(t){l=!0,r=t}finally{try{if(!s&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw r}}return c}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return E(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}var N=new Date;function g(t){var e=t.scrollWidth,n=t.endPoints,l=t.setEndPoints,u=(0,r.T)(),d=b((0,a.useState)({currYear:N.getFullYear(),currMonth:N.getMonth()}),2),m=d[0],y=d[1],h=b((0,a.useState)({currYear:11!==m.currMonth?m.currYear:m.currYear+1,currMonth:11!==m.currMonth?m.currMonth+1:0}),2),f=h[0],v=h[1],P=(0,c.v9)((function(t){return t.calendarsRouter.timeStart}));return(0,a.useEffect)((function(){document.querySelectorAll("[data-number]").forEach((function(t){t.classList.remove("active","jumper");var e=t.dataset.number?+t.dataset.number:NaN,a=t.closest("#calendarOneGen");if(a){var r=t.dataset.year?+t.dataset.year:NaN,o=t.dataset.month?+t.dataset.month:NaN;a.dataset.curent&&s(n,r,o,e,t),a.dataset.twoCurent&&s(n,r,o,e,t)}}));var t=document.querySelector("#startTimeInput"),e=document.querySelector("#finishTimeInput"),a=document.querySelector(".active#typeRentButton"),r=null==a?void 0:a.dataset.rentType;if(t&&e){if(!r)return;"day"===r?(t.value=P,e.innerHTML=P):(t.value=P,e.innerHTML="".concat(+P.split(":")[0]+2,":").concat(P.split(":")[1]))}})),(0,a.useEffect)((function(){var t=document.querySelector("#timeStartRent"),e=document.querySelector("#timeFinishRent");if(e&&t){var a=document.querySelector(".active#typeRentButton"),r=null==a?void 0:a.dataset.rentType;o(e,n.endPoint,"finish"),o(t,n.startPoint)}function o(t,e,n){if(e.year){var a=e.day,o=e.month,i=e.year%100,c=n&&"hour"===r?"".concat(+P.split(":")[0]+2,":").concat(P.split(":")[1]):P;void 0!==a&&void 0!==o&&void 0!==i&&(t.innerHTML="".concat(a,".").concat(o+1,".").concat(i," ").concat(c))}else t.innerHTML=""}}),[n]),e>768?a.createElement(_,{dispatch:u,current:m,setCurrent:y,currentTwo:f,setCurrentTwo:v,timeStart:P,endPoints:n,setEndPoints:l}):e<769?a.createElement(a.Fragment,null,a.createElement("div",{className:"calendar__box"},a.createElement("div",{id:"calendarButton",onClick:o.Z,className:"calendar__box-close"},a.createElement("span",null)),a.createElement("div",{className:"calendar__box-title"},"Свободные даты для бронирования"),a.createElement("div",{className:"calendar__box-text"},"Городской велосипед Schwinn Traveler 20” "),a.createElement("div",{className:"calendar__box-content"},a.createElement(_,{dispatch:u,current:m,setCurrent:y,currentTwo:f,setCurrentTwo:v,timeStart:P,endPoints:n,setEndPoints:l})),a.createElement("div",{className:"calendar__box-notification"},a.createElement(i.Z,{imageType:"icon",imageName:"notification",sourseMod:!0}),a.createElement("div",{className:"calendar__box-notification-text"},"При изменении дат выбранные велосипеды сбрасываются.")),a.createElement("button",{id:"calendarButton",onClick:o.Z,className:"calendar__box-button"},"Применить"))):void 0}},969:function(t,e,n){var a=n(9570);e.Z=function(t){t.target;var e=document.getElementById("calendar");document.querySelectorAll("#calendarButton").forEach((function(t){return t.classList.toggle("active")})),null==e||e.classList.toggle("active"),(0,a.z)()<769&&document.body.classList.toggle("backBlurActive")}}}]);