"use strict";(self.webpackChunkwebpack_to_study=self.webpackChunkwebpack_to_study||[]).push([[774],{8311:function(e,t,a){var n=a(7294);t.Z=function(){return n.createElement("div",{className:"jumper-component"})}},6774:function(e,t,a){a.r(t),a.d(t,{default:function(){return G}});var n=a(7294),r=a(5771),c=a(5998),i=function(e){var t=e.dispatch,a=e.event.target;if(a.closest("#typeRentButton")){var n=a.closest("#typeRentButton"),c=(document.querySelectorAll("#typeRentButton"),null==n?void 0:n.dataset.rentType),i="day"===c||"hour"===c?c:void 0;if(!i)return;t((0,r.As)(i))}},l=["dispatch","activeTypeRentDate","typeButton"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=function(e){var t=e.dispatch,a=e.activeTypeRentDate,r=e.typeButton,c=m(e,l);return n.createElement("button",s({},c,{id:"typeRentButton",onClick:function(e){return i({dispatch:t,event:e})},"data-rent-type":"day"===r?"day":"hour",className:"main__preview-bottom-card-radio-item ".concat(d(a,r))}),"day"===r?"По дням":"2 часа")};function d(e,t){return"day"===t?"day"===e&&"active":"hour"===e&&"active"}var u=function(){var e=(0,c.I0)(),t=(0,c.v9)((function(e){return e.calendarsRouter.activeTypeRentDate}));return n.createElement("div",{className:"main__preview-bottom-card-radio"},n.createElement(o,{dispatch:e,activeTypeRentDate:t,typeButton:"day"}),n.createElement(o,{dispatch:e,activeTypeRentDate:t,typeButton:"hour"}))},p=function(){return n.createElement("div",{className:"main__preview-bottom-card"},n.createElement("div",{className:"main__preview-bottom-card-title"},"Тип аренды"),n.createElement("div",{className:"main__preview-bottom-card-input-box"},n.createElement(u,null)))},v=function(e){var t=e.target,a=t.closest("#select");a&&!t.closest("#selectItem")&&a.classList.toggle("active")},_=function(e){var t,a,n,r,c=e.dispatch,i=e.setState,l=e.comparisonState,s=e.item,m=e.e.target;c(i((a=l,n=s,r=Object.values(a).indexOf(n),Object.keys(a)[r]))),null===(t=m.closest("#select"))||void 0===t||t.classList.remove("active")};var y=["setState","state","imit","itemsList","classPrefix","comparisonState"];function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},E.apply(this,arguments)}function f(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=function(e){var t=e.setState,a=e.state,r=e.imit,i=e.itemsList,l=e.classPrefix,s=e.comparisonState,m=f(e,y),o=(0,c.I0)();return n.createElement("div",E({id:"select",onClick:v},m,{className:l?"select-".concat(l,"-box ").concat(m.className?m.className:""):"select-box ".concat(m.className?m.className:"")}),n.createElement("button",{className:l?"select-".concat(l,"-button"):"select-button"},s[a]),n.createElement("div",{id:"selectArrow",className:l?"select-".concat(l,"-arrow"):"select-arrow"},n.createElement("span",null)),n.createElement("ul",{"data-select-list":!0,className:l?"select-".concat(l,"-list"):"select-list"},r?n.createElement("div",{className:"select-list-imit"},"'"):"",i.map((function(e){return n.createElement("li",{id:"selectItem",value:e,className:e===s[a]?"select-item selected":"select-item",key:e,onClick:function(a){return _({dispatch:o,setState:t.mainFn,comparisonState:s,item:e,e:a})}},e)}))))},N=function(){var e=(0,c.v9)((function(e){return e.calendarsRouter.activeTypeRentPlase}));return n.createElement("div",{className:"main__preview-bottom-card"},n.createElement("div",{className:"main__preview-bottom-card-title"},"Доставка"),n.createElement(b,{setState:{mainFn:r.$H},state:e,itemsList:["По адресу","Самовывоз"],imit:!0,comparisonState:r.t0,className:"wide"}))},h=a(969),g=["type"];function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},w.apply(this,arguments)}function B(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var k=function(e){var t=e.type,a=B(e,g);return n.createElement("div",w({},a,{"data-testid":"calendarButton",id:"calendarButton",onClick:h.Z,className:"select-box ".concat(a.className?a.className:"")}),n.createElement("button",{id:"start"===t?"timeStartRent":"timeFinishRent",className:"select-button"}),n.createElement("div",{id:"selectArrow",className:"select-arrow"},n.createElement("span",null)))},O=a(5961),R=function(e){var t=e.scrollWidth,a=(0,c.v9)((function(e){return e.calendarsRouter.selectBikeCalendar}));return t>1024?n.createElement(n.Fragment,null,n.createElement(p,null),n.createElement("div",{className:"main__preview-bottom-card"},n.createElement("div",{className:"main__preview-bottom-card-holder"},n.createElement("div",{className:"main__preview-bottom-card-title"},"Дата и время начала"),n.createElement("div",{className:"main__preview-bottom-card-title"},"Дата и время конца")),n.createElement("div",{className:"main__preview-bottom-card-holder select"},n.createElement(k,{type:"start"}),n.createElement(k,{type:"finish"}),n.createElement("div",{id:"calendar","data-select-list":!0,className:"main__preview-bottom-calendar calendar"},n.createElement(O.Z,{scrollWidth:t,endPoints:a,setEndPoints:r.Uv})))),n.createElement(N,null)):t<1025&&t>425?n.createElement(n.Fragment,null,n.createElement(p,null),n.createElement(N,null),n.createElement("div",{className:"main__preview-bottom-card card-calendar"},n.createElement("div",{className:"main__preview-bottom-card-holder"},n.createElement("div",{className:"main__preview-bottom-card-title"},"Дата и время начала"),n.createElement("div",{className:"main__preview-bottom-card-title"},"Дата и время конца")),n.createElement("div",{className:"main__preview-bottom-card-holder select"},n.createElement(k,{type:"start",className:"wide"}),n.createElement(k,{type:"finish",className:"wide"}),n.createElement("div",{id:"calendar",className:"main__preview-bottom-calendar calendar"},n.createElement(O.Z,{scrollWidth:t,endPoints:a,setEndPoints:r.Uv}))))):t<426?n.createElement(n.Fragment,null,n.createElement(p,null),n.createElement("div",{className:"main__preview-bottom-card"},n.createElement("div",{className:"main__preview-bottom-card-title"},"Дата и время начала"),n.createElement(k,{type:"start",className:"wide"})),n.createElement("div",{className:"main__preview-bottom-card"},n.createElement("div",{className:"main__preview-bottom-card-title"},"Дата и время конца"),n.createElement(k,{type:"finish",className:"wide"})),n.createElement("div",{id:"calendar",className:"main__preview-bottom-calendar calendar"},n.createElement(O.Z,{scrollWidth:t,endPoints:a,setEndPoints:r.Uv})),n.createElement(N,null)):void 0},S=a(6415),T=function(e){return e.scrollWidth>425?n.createElement(n.Fragment,null,n.createElement("div",{className:"main__preview-top-item"},n.createElement("div",{className:"main__preview-title"},"Аренда велосипедов ",n.createElement("br",null)," c доставкой")),n.createElement("div",{className:"main__preview-top-item"},n.createElement("div",{className:"main__preview-top-card aspect_1-5"},n.createElement(S.Z,{imageType:"image",imageName:"helmet",sourseMod:!0}),n.createElement("div",{className:"main__preview-top-card-title"},"Шлем"),n.createElement("div",{className:"main__preview-top-card-prise"},"Бесплатно")),n.createElement("div",{className:"main__preview-top-card aspect_1-5"},n.createElement(S.Z,{imageType:"image",imageName:"lantern",sourseMod:!0}),n.createElement("div",{className:"main__preview-top-card-title"},"Фонарик"),n.createElement("div",{className:"main__preview-top-card-prise"},"Бесплатно")),n.createElement("div",{className:"main__preview-top-card aspect_1-5"},n.createElement(S.Z,{imageType:"image",imageName:"lock",sourseMod:!0}),n.createElement("div",{className:"main__preview-top-card-title"},"Замок"),n.createElement("div",{className:"main__preview-top-card-prise"},"Бесплатно")))):n.createElement(n.Fragment,null,n.createElement("div",{className:"main__preview-top-item"},n.createElement("div",{className:"main__preview-title"},"Аренда велосипедов ",n.createElement("br",null)," c доставкой")),n.createElement("div",{className:"main__preview-top-item"},n.createElement("div",{className:"main__preview-top-card"},n.createElement(S.Z,{imageType:"image",imageName:"helmet",sourseMod:!0}),n.createElement("div",{className:"main__preview-top-card-prise"},"Бесплатно")),n.createElement("div",{className:"main__preview-top-card"},n.createElement(S.Z,{imageType:"image",imageName:"lantern",sourseMod:!0}),n.createElement("div",{className:"main__preview-top-card-prise"},"Бесплатно")),n.createElement("div",{className:"main__preview-top-card"},n.createElement(S.Z,{imageType:"image",imageName:"lock",sourseMod:!0}),n.createElement("div",{className:"main__preview-top-card-prise"},"Бесплатно"))))},x=a(9250),j=function(){var e=(0,x.bx)().scrollWidth;return n.createElement(n.Fragment,null,n.createElement("div",{className:"main__preview wrapper-component"},n.createElement("div",{className:"main__preview-top"},n.createElement(T,{scrollWidth:e})),n.createElement("div",{className:"main__preview-bottom"},n.createElement(R,{scrollWidth:e}))))},C=a(8311),Z=a(238),L=a(6542),M=function(e){var t=e.quantityCards,a=e.scrollWidth,r=e.bikeRentInfo,c=(0,L.T)(),i=a<1025?2:4,l=[],s=[];return r.forEach((function(e){e.cards.forEach((function(a){if(l.length<t){var n=r.indexOf(e)===r.length-1;if(s.length<i?s.push({card:a,cardType:e.type}):(l.push(s),(s=[]).push({card:a,cardType:e.type})),n)e.cards.indexOf(a)===e.cards.length-1&&(l.push(s),s=[])}}))})),l.map((function(e){return n.createElement("div",{key:Math.random(),className:"searchResult__card-line"},e.map((function(e){return function(e,t,a){return n.createElement("div",{key:Math.random(),className:"searchResult__card-box"},n.createElement("div",{className:"searchResult__card-title-box"},n.createElement("div",{className:"searchResult__card-title bold"},e),n.createElement("div",{className:"searchResult__card-title"},t.brandName)),n.createElement(S.Z,{imageType:"bikeImage",imageName:t.imgName,sourseMod:!0,modClass:"searchResult__card-image"}),n.createElement("div",{className:"searchResult__card-text"},t.title),n.createElement("div",{className:"searchResult__card-prise"},t.prise," AED/день"),n.createElement("button",{onClick:function(e){return a((0,Z.Z)(t.bikeId))},className:"searchResult__card-button"},n.createElement("span",null,"Выбрать")))}(e.cardType,e.card,c)})))}))},P=a(1234),I=a(8380),W=a(2400);function F(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,c,i,l=[],s=!0,m=!1;try{if(c=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;s=!1}else for(;!(s=(n=c.call(a)).done)&&(l.push(n.value),l.length!==t);s=!0);}catch(e){m=!0,r=e}finally{try{if(!s&&null!=a.return&&(i=a.return(),Object(i)!==i))return}finally{if(m)throw r}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return A(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return A(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var D=function(){var e=(0,x.bx)().scrollWidth,t=(0,n.useState)(function(e){return e>425?2:1}(e)),a=F(t,2),r=a[0],i=a[1],l=(0,c.v9)((function(e){return e.rentRouter.localBikeInfo})),s=(0,c.v9)((function(e){return e.rentRouter.activeBikeBrand})),m=(0,c.v9)((function(e){return e.rentRouter.activeBikeSize}));return n.createElement("div",{className:"searchResult wrapper-component"},n.createElement("div",{className:"searchResult__param-box"},n.createElement("div",{className:"searchResult__param"},n.createElement("div",{className:"searchResult__param-title"},"Бренд"),n.createElement(b,{setState:{mainFn:P.Hd,addFn:P.ZR},state:s,itemsList:["Все","Schwinn","Merida","Trek","Cannondale","Kona","Cube","Scott","Santa Cruz"],comparisonState:I.y,imit:!0})),n.createElement("div",{className:"searchResult__param"},n.createElement("div",{className:"searchResult__param-title"},"Размер рамы"),n.createElement(b,{setState:{mainFn:P.NP,addFn:P.ZR},state:m,itemsList:["Все","XS","S","S/M","M","L","XL","XXl"],comparisonState:W.v,imit:!0}))),l[0]?n.createElement(n.Fragment,null,n.createElement(M,{quantityCards:r,scrollWidth:e,bikeRentInfo:l}),n.createElement("button",{onClick:function(e){return i((function(e){return e+2}))},className:"searchResult__button"},"Далее")):"")},q=function(e){var t=e.dispatch,a=e.event.target.closest("#addTypeBike");if(a){var n=a.dataset.typeBike;"alum"!==n&&"carbon"!==n&&"mountain"!==n&&"city"!==n||t((0,P.h9)(n))}},U=function(e){var t,a=e.target.closest("#moreBicycleButton");if(a){var n=null===(t=a.closest("[data-item-list]"))||void 0===t?void 0:t.querySelector("#moreBicycleEl");a.classList.toggle("active"),null==n||n.classList.toggle("active")}},X=n.memo((function(e){var t=e.bikeInfo,a=(0,L.T)();return t.map((function(e){return n.createElement("li",{key:Math.random(),"data-item-list":!0,className:"typeBicycle__item"},n.createElement(S.Z,{imageType:"image",imageName:e.imgName,sourseMod:!0}),n.createElement("div",{className:"typeBicycle__item-plug"}),n.createElement("div",{className:"typeBicycle__item-content"},n.createElement("div",{className:"typeBicycle__item-content-plug"}),n.createElement("div",{className:"typeBicycle__item-title"},e.title),n.createElement("div",{className:"typeBicycle__item-bottom-box"},n.createElement("div",{className:"typeBicycle__item-prise"},e.prise," AED"),n.createElement("div",{className:"typeBicycle__item-bottom-right"},n.createElement("button",{id:"moreBicycleButton",onClick:U,className:"typeBicycle__item-button icon"},n.createElement(S.Z,{imageType:"icon",imageName:"more",sourseMod:!1})),n.createElement("button",{id:"addTypeBike",onClick:function(e){return q({dispatch:a,event:e})},"data-type-bike":z(e.title),className:"typeBicycle__item-button close"},n.createElement("span",null)))),n.createElement("div",{id:"moreBicycleEl",className:"typeBicycle__item-more"},e.moreText)))}))}));function z(e){return"Алюминий"===e?"alum":"Горный/городской"===e?"mountain":"Городской эконом"===e?"city":"Карбон"===e?"carbon":void 0}var H=function(e){var t=e.target.closest("#typeBicycleSlideButton"),a=document.getElementById("typeBicycleList");if(a){var n=a.querySelectorAll("[data-item-list]"),r=n[0],c=n[n.length-1];if(r){var i=(a.scrollWidth-4*r.scrollWidth)/3;t&&(t.className.includes("active")?a.scrollLeft-=r.scrollWidth+i/2:a.scrollLeft+=r.scrollWidth+i/2,setTimeout((function(){var e=c.getBoundingClientRect().right,n=a.getBoundingClientRect().right;Math.abs(e-n)<=3&&t.classList.add("active");var i=r.getBoundingClientRect().left,l=a.getBoundingClientRect().left;Math.abs(i-l)<=3&&t.classList.remove("active")}),300))}}},$=[{imgName:"aluminiumBike",title:"Алюминий",prise:90,moreText:"Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги."},{imgName:"carbonBike",title:"Карбон",prise:180,moreText:"Легкие и хорошо заглушают вибрацию неровностей. Хорошо подходят для крупных людей – для мало весящих езда будет жесткой."},{imgName:"mountainBike",title:"Горный/городской",prise:90,moreText:"Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги."},{imgName:"economBike",title:"Городской эконом",prise:45,moreText:"Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги."}],K=(0,n.memo)((function(){var e=(0,L.T)(),t=(0,x.bx)().scrollWidth,a=(0,c.v9)((function(e){return e.rentRouter.activeBike})),r=(0,c.v9)((function(e){return e.calendarsRouter.selectBikeCalendar}));return(0,n.useEffect)((function(){document.querySelectorAll("#addTypeBike").forEach((function(e){var t=e.dataset.typeBike;"alum"!==t&&"carbon"!==t&&"mountain"!==t&&"city"!==t||(a.includes(t)?e.classList.add("active"):e.classList.remove("active"))}))})),n.createElement("div",{className:"typeBicycle wrapper-component"},n.createElement("div",{className:"typeBicycle__title-box"},n.createElement("div",{className:"typeBicycle__title"},"Тип велосипеда"),t>1024?"":n.createElement("div",{id:"typeBicycleSlideButton",onClick:H,className:"typeBicycle__title-slide"},n.createElement(S.Z,{imageType:"icon",imageName:"click",sourseMod:!1}),n.createElement("span",null))),n.createElement("ul",{id:"typeBicycleList",className:"typeBicycle__list"},n.createElement(X,{bikeInfo:$})),n.createElement("button",{onClick:function(){return e((0,P.ZR)(r))},className:"typeBicycle__button"},"Найти"))})),G=function(){return n.createElement(n.Fragment,null,n.createElement("div",{className:"main__container"},n.createElement(j,null),n.createElement(C.Z,null),n.createElement(K,null),n.createElement(C.Z,null),n.createElement(D,null)))}}}]);