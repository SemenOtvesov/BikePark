"use strict";(self.webpackChunkwebpack_to_study=self.webpackChunkwebpack_to_study||[]).push([[316],{8311:function(e,t,a){var r=a(7294);t.Z=function(){return r.createElement("div",{className:"jumper-component"})}},6316:function(e,t,a){a.r(t),a.d(t,{default:function(){return Q}});var r=a(7294),n=a(5771),c=a(5998),i=function(e){var t=e.dispatch,a=e.event.target;if(a.closest("#typeRentButton")){var r=a.closest("#typeRentButton"),c=(document.querySelectorAll("#typeRentButton"),null==r?void 0:r.dataset.rentType),i="day"===c||"hour"===c?c:void 0;if(!i)return;t((0,n.As)(i))}},l=["dispatch","activeTypeRentDate","typeButton"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function m(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=function(e){var t=e.dispatch,a=e.activeTypeRentDate,n=e.typeButton,c=m(e,l);return r.createElement("button",s({},c,{id:"typeRentButton",onClick:function(e){return i({dispatch:t,event:e})},"data-rent-type":"day"===n?"day":"hour",className:"main__preview-bottom-card-radio-item ".concat(u(a,n))}),"day"===n?"По дням":"2 часа")};function u(e,t){return"day"===t?"day"===e&&"active":"hour"===e&&"active"}var d=function(){var e=(0,c.I0)(),t=(0,c.v9)((function(e){return e.calendarsRouter.activeTypeRentDate}));return r.createElement("div",{className:"main__preview-bottom-card-radio"},r.createElement(o,{dispatch:e,activeTypeRentDate:t,typeButton:"day"}),r.createElement(o,{dispatch:e,activeTypeRentDate:t,typeButton:"hour"}))},p=function(){return r.createElement("div",{className:"main__preview-bottom-card"},r.createElement("div",{className:"main__preview-bottom-card-title"},"Тип аренды"),r.createElement("div",{className:"main__preview-bottom-card-input-box"},r.createElement(d,null)))},v=function(e){var t=e.target,a=t.closest("#select");a&&!t.closest("#selectItem")&&a.classList.toggle("active")},_=function(e){var t,a,r,n,c=e.dispatch,i=e.setState,l=e.comparisonState,s=e.item,m=e.e.target;c(i((a=l,r=s,n=Object.values(a).indexOf(r),Object.keys(a)[n]))),null===(t=m.closest("#select"))||void 0===t||t.classList.remove("active")};var y=["setState","state","imit","itemsList","classPrefix","comparisonState"];function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},E.apply(this,arguments)}function f(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=function(e){var t=e.setState,a=e.state,n=e.imit,i=e.itemsList,l=e.classPrefix,s=e.comparisonState,m=f(e,y),o=(0,c.I0)();return r.createElement("div",E({id:"select",onClick:v},m,{className:l?"select-".concat(l,"-box ").concat(m.className?m.className:""):"select-box ".concat(m.className?m.className:"")}),r.createElement("button",{className:l?"select-".concat(l,"-button"):"select-button"},s[a]),r.createElement("div",{id:"selectArrow",className:l?"select-".concat(l,"-arrow"):"select-arrow"},r.createElement("span",null)),r.createElement("ul",{"data-select-list":!0,className:l?"select-".concat(l,"-list"):"select-list"},n?r.createElement("div",{className:"select-list-imit"},"'"):"",i.map((function(e){return r.createElement("li",{id:"selectItem",value:e,className:e===s[a]?"select-item selected":"select-item",key:e,onClick:function(a){return _({dispatch:o,setState:t.mainFn,comparisonState:s,item:e,e:a})}},e)}))))},N=function(){var e=(0,c.v9)((function(e){return e.calendarsRouter.activeTypeRentPlase}));return r.createElement("div",{className:"main__preview-bottom-card"},r.createElement("div",{className:"main__preview-bottom-card-title"},"Доставка"),r.createElement(b,{setState:{mainFn:n.$H},state:e,itemsList:["По адресу","Самовывоз"],imit:!0,comparisonState:n.t0,className:"wide"}))},h=a(969),g=["type"];function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},w.apply(this,arguments)}function B(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var k=function(e){var t=e.type,a=B(e,g);return r.createElement("div",w({},a,{"data-testid":"calendarButton",id:"calendarButton",onClick:h.Z,className:"select-box ".concat(a.className?a.className:"")}),r.createElement("button",{id:"start"===t?"timeStartRent":"timeFinishRent",className:"select-button"}),r.createElement("div",{id:"selectArrow",className:"select-arrow"},r.createElement("span",null)))},R=a(5961),O=function(e){var t=e.scrollWidth,a=(0,c.v9)((function(e){return e.calendarsRouter.selectBikeCalendar}));return t>1024?r.createElement(r.Fragment,null,r.createElement(p,null),r.createElement("div",{className:"main__preview-bottom-card"},r.createElement("div",{className:"main__preview-bottom-card-holder"},r.createElement("div",{className:"main__preview-bottom-card-title"},"Дата и время начала"),r.createElement("div",{className:"main__preview-bottom-card-title"},"Дата и время конца")),r.createElement("div",{className:"main__preview-bottom-card-holder select"},r.createElement(k,{type:"start"}),r.createElement(k,{type:"finish"}),r.createElement("div",{id:"calendar","data-select-list":!0,className:"main__preview-bottom-calendar calendar"},r.createElement(R.Z,{scrollWidth:t,endPoints:a,setEndPoints:n.Uv})))),r.createElement(N,null)):t<1025&&t>425?r.createElement(r.Fragment,null,r.createElement(p,null),r.createElement(N,null),r.createElement("div",{className:"main__preview-bottom-card card-calendar"},r.createElement("div",{className:"main__preview-bottom-card-holder"},r.createElement("div",{className:"main__preview-bottom-card-title"},"Дата и время начала"),r.createElement("div",{className:"main__preview-bottom-card-title"},"Дата и время конца")),r.createElement("div",{className:"main__preview-bottom-card-holder select"},r.createElement(k,{type:"start",className:"wide"}),r.createElement(k,{type:"finish",className:"wide"}),r.createElement("div",{id:"calendar",className:"main__preview-bottom-calendar calendar"},r.createElement(R.Z,{scrollWidth:t,endPoints:a,setEndPoints:n.Uv}))))):t<426?r.createElement(r.Fragment,null,r.createElement(p,null),r.createElement("div",{className:"main__preview-bottom-card"},r.createElement("div",{className:"main__preview-bottom-card-title"},"Дата и время начала"),r.createElement(k,{type:"start",className:"wide"})),r.createElement("div",{className:"main__preview-bottom-card"},r.createElement("div",{className:"main__preview-bottom-card-title"},"Дата и время конца"),r.createElement(k,{type:"finish",className:"wide"})),r.createElement("div",{id:"calendar",className:"main__preview-bottom-calendar calendar"},r.createElement(R.Z,{scrollWidth:t,endPoints:a,setEndPoints:n.Uv})),r.createElement(N,null)):void 0},S=a(6415),T=function(e){return e.scrollWidth>425?r.createElement(r.Fragment,null,r.createElement("div",{className:"main__preview-top-item"},r.createElement("div",{className:"main__preview-title"},"Аренда велосипедов ",r.createElement("br",null)," c доставкой")),r.createElement("div",{className:"main__preview-top-item"},r.createElement("div",{className:"main__preview-top-card aspect_1-5"},r.createElement(S.Z,{imageType:"image",imageName:"helmet",sourseMod:!0}),r.createElement("div",{className:"main__preview-top-card-title"},"Шлем"),r.createElement("div",{className:"main__preview-top-card-prise"},"Бесплатно")),r.createElement("div",{className:"main__preview-top-card aspect_1-5"},r.createElement(S.Z,{imageType:"image",imageName:"lantern",sourseMod:!0}),r.createElement("div",{className:"main__preview-top-card-title"},"Фонарик"),r.createElement("div",{className:"main__preview-top-card-prise"},"Бесплатно")),r.createElement("div",{className:"main__preview-top-card aspect_1-5"},r.createElement(S.Z,{imageType:"image",imageName:"lock",sourseMod:!0}),r.createElement("div",{className:"main__preview-top-card-title"},"Замок"),r.createElement("div",{className:"main__preview-top-card-prise"},"Бесплатно")))):r.createElement(r.Fragment,null,r.createElement("div",{className:"main__preview-top-item"},r.createElement("div",{className:"main__preview-title"},"Аренда велосипедов ",r.createElement("br",null)," c доставкой")),r.createElement("div",{className:"main__preview-top-item"},r.createElement("div",{className:"main__preview-top-card"},r.createElement(S.Z,{imageType:"image",imageName:"helmet",sourseMod:!0}),r.createElement("div",{className:"main__preview-top-card-prise"},"Бесплатно")),r.createElement("div",{className:"main__preview-top-card"},r.createElement(S.Z,{imageType:"image",imageName:"lantern",sourseMod:!0}),r.createElement("div",{className:"main__preview-top-card-prise"},"Бесплатно")),r.createElement("div",{className:"main__preview-top-card"},r.createElement(S.Z,{imageType:"image",imageName:"lock",sourseMod:!0}),r.createElement("div",{className:"main__preview-top-card-prise"},"Бесплатно"))))},x=a(9250),j=function(){var e=(0,x.bx)().scrollWidth;return r.createElement(r.Fragment,null,r.createElement("div",{className:"main__preview wrapper-component"},r.createElement("div",{className:"main__preview-top"},r.createElement(T,{scrollWidth:e})),r.createElement("div",{className:"main__preview-bottom"},r.createElement(O,{scrollWidth:e}))))},C=a(8311),I=a(7546),L=function(e){var t=e.dispatch,a=e.bikeId,r=e.userUid,n=e.event.target;if(console.log(a),r)t((0,I.Z)(a));else{var c=n.closest("button");null==c||c.classList.add("err"),setTimeout((function(){null==c||c.classList.remove("err")}),400)}},Z=a(6542),P=function(e){var t=e.type,a=e.card,n=(0,Z.T)(),i=(0,x.bx)().userUid,l=(0,c.v9)((function(e){return e.userRouter.user.selectBikeList}));return r.createElement("div",{className:"searchResult__card-box"},r.createElement("div",{className:"searchResult__card-title-box"},r.createElement("div",{className:"searchResult__card-title bold"},t),r.createElement("div",{className:"searchResult__card-title"},a.brandName)),r.createElement(S.Z,{imageType:"bikeImage",imageName:a.imgName,sourseMod:!0,modClass:"searchResult__card-image"}),r.createElement("div",{className:"searchResult__card-text"},a.title),r.createElement("div",{className:"searchResult__card-prise"},a.prise," AED/день"),r.createElement("button",{onClick:function(e){return L({dispatch:n,bikeId:a.bikeId,userUid:i,event:e})},className:"searchResult__card-button ".concat(null!=l&&l.includes(a.bikeId)?"blue":"")},r.createElement("span",null,"Выбрать")))},M=function(e){var t=e.quantityCards,a=e.bikeRentInfo,n=(0,x.bx)(),c=(n.userUid,n.scrollWidth<1025?2:4),i=[],l=[];return a.forEach((function(e){e.cards.forEach((function(r){if(i.length<t){var n=a.indexOf(e)===a.length-1;if(l.length<c?l.push({card:r,cardType:e.type}):(i.push(l),(l=[]).push({card:r,cardType:e.type})),n)e.cards.indexOf(r)===e.cards.length-1&&(i.push(l),l=[])}}))})),i.map((function(e){return r.createElement("div",{key:Math.random(),className:"searchResult__card-line"},e.map((function(e){return r.createElement(P,{type:e.cardType,card:e.card,key:e.card.bikeId+"bikeId"})})))}))},F=a(1234),W=a(8380),A=a(2400);function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,n,c,i,l=[],s=!0,m=!1;try{if(c=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;s=!1}else for(;!(s=(r=c.call(a)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){m=!0,n=e}finally{try{if(!s&&null!=a.return&&(i=a.return(),Object(i)!==i))return}finally{if(m)throw n}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return D(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return D(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var q=function(){var e=(0,x.bx)().scrollWidth,t=(0,r.useState)(function(e){return e>425?2:1}(e)),a=U(t,2),n=a[0],i=a[1],l=(0,c.v9)((function(e){return e.rentRouter.localBikeInfo})),s=(0,c.v9)((function(e){return e.rentRouter.activeBikeBrand})),m=(0,c.v9)((function(e){return e.rentRouter.activeBikeSize}));return r.createElement("div",{className:"searchResult wrapper-component"},r.createElement("div",{className:"searchResult__param-box"},r.createElement("div",{className:"searchResult__param"},r.createElement("div",{className:"searchResult__param-title"},"Бренд"),r.createElement(b,{setState:{mainFn:F.Hd,addFn:F.ZR},state:s,itemsList:["Все","Schwinn","Merida","Trek","Cannondale","Kona","Cube","Scott","Santa Cruz"],comparisonState:W.y,imit:!0})),r.createElement("div",{className:"searchResult__param"},r.createElement("div",{className:"searchResult__param-title"},"Размер рамы"),r.createElement(b,{setState:{mainFn:F.NP,addFn:F.ZR},state:m,itemsList:["Все","XS","S","S/M","M","L","XL","XXl"],comparisonState:A.v,imit:!0}))),l[0]?r.createElement(r.Fragment,null,r.createElement(M,{quantityCards:n,bikeRentInfo:l}),r.createElement("button",{onClick:function(e){return i((function(e){return e+2}))},className:"searchResult__button"},"Далее")):"")},X=function(e){var t=e.dispatch,a=e.event.target.closest("#addTypeBike");if(a){var r=a.dataset.typeBike;"alum"!==r&&"carbon"!==r&&"mountain"!==r&&"city"!==r||t((0,F.h9)(r))}},z=function(e){var t,a=e.target.closest("#moreBicycleButton");if(a){var r=null===(t=a.closest("[data-item-list]"))||void 0===t?void 0:t.querySelector("#moreBicycleEl");a.classList.toggle("active"),null==r||r.classList.toggle("active")}},H=r.memo((function(e){var t=e.bikeInfo,a=(0,Z.T)();return t.map((function(e){return r.createElement("li",{key:Math.random(),"data-item-list":!0,className:"typeBicycle__item"},r.createElement(S.Z,{imageType:"image",imageName:e.imgName,sourseMod:!0}),r.createElement("div",{className:"typeBicycle__item-plug"}),r.createElement("div",{className:"typeBicycle__item-content"},r.createElement("div",{className:"typeBicycle__item-content-plug"}),r.createElement("div",{className:"typeBicycle__item-title"},e.title),r.createElement("div",{className:"typeBicycle__item-bottom-box"},r.createElement("div",{className:"typeBicycle__item-prise"},e.prise," AED"),r.createElement("div",{className:"typeBicycle__item-bottom-right"},r.createElement("button",{id:"moreBicycleButton",onClick:z,className:"typeBicycle__item-button icon"},r.createElement(S.Z,{imageType:"icon",imageName:"more",sourseMod:!1})),r.createElement("button",{id:"addTypeBike",onClick:function(e){return X({dispatch:a,event:e})},"data-type-bike":$(e.title),className:"typeBicycle__item-button close"},r.createElement("span",null)))),r.createElement("div",{id:"moreBicycleEl",className:"typeBicycle__item-more"},e.moreText)))}))}));function $(e){return"Алюминий"===e?"alum":"Горный/городской"===e?"mountain":"Городской эконом"===e?"city":"Карбон"===e?"carbon":void 0}var K=function(e){var t=e.target.closest("#typeBicycleSlideButton"),a=document.getElementById("typeBicycleList");if(a){var r=a.querySelectorAll("[data-item-list]"),n=r[0],c=r[r.length-1];if(n){var i=(a.scrollWidth-4*n.scrollWidth)/3;t&&(t.className.includes("active")?a.scrollLeft-=n.scrollWidth+i/2:a.scrollLeft+=n.scrollWidth+i/2,setTimeout((function(){var e=c.getBoundingClientRect().right,r=a.getBoundingClientRect().right;Math.abs(e-r)<=3&&t.classList.add("active");var i=n.getBoundingClientRect().left,l=a.getBoundingClientRect().left;Math.abs(i-l)<=3&&t.classList.remove("active")}),300))}}},G=[{imgName:"aluminiumBike",title:"Алюминий",prise:90,moreText:"Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги."},{imgName:"carbonBike",title:"Карбон",prise:180,moreText:"Легкие и хорошо заглушают вибрацию неровностей. Хорошо подходят для крупных людей – для мало весящих езда будет жесткой."},{imgName:"mountainBike",title:"Горный/городской",prise:90,moreText:"Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги."},{imgName:"economBike",title:"Городской эконом",prise:45,moreText:"Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги."}],J=(0,r.memo)((function(){var e=(0,Z.T)(),t=(0,x.bx)().scrollWidth,a=(0,c.v9)((function(e){return e.rentRouter.activeBike})),n=(0,c.v9)((function(e){return e.calendarsRouter.selectBikeCalendar}));return(0,r.useEffect)((function(){document.querySelectorAll("#addTypeBike").forEach((function(e){var t=e.dataset.typeBike;"alum"!==t&&"carbon"!==t&&"mountain"!==t&&"city"!==t||(a.includes(t)?e.classList.add("active"):e.classList.remove("active"))}))})),r.createElement("div",{className:"typeBicycle wrapper-component"},r.createElement("div",{className:"typeBicycle__title-box"},r.createElement("div",{className:"typeBicycle__title"},"Тип велосипеда"),t>1024?"":r.createElement("div",{id:"typeBicycleSlideButton",onClick:K,className:"typeBicycle__title-slide"},r.createElement(S.Z,{imageType:"icon",imageName:"click",sourseMod:!1}),r.createElement("span",null))),r.createElement("ul",{id:"typeBicycleList",className:"typeBicycle__list"},r.createElement(H,{bikeInfo:G})),r.createElement("button",{onClick:function(){return e((0,F.ZR)(n))},className:"typeBicycle__button"},"Найти"))})),Q=function(){return r.createElement(r.Fragment,null,r.createElement("div",{className:"main__container"},r.createElement(j,null),r.createElement(C.Z,null),r.createElement(J,null),r.createElement(C.Z,null),r.createElement(q,null)))}}}]);