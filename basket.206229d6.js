var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var i=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,i.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=i),i("9B8F0");var o=i("UDlvM"),r=i("gyp8y"),a=i("dEdDu"),l=i("8C1lk");const c=document.querySelector(".js-list"),s=JSON.parse(localStorage.getItem(o.common.KEY_BASKET))??[];!function(e,n){let t;t=e.length?e.map((({id:e,name:n,img:t,price:i})=>`\n    <li data-id="${e}" class="js-card">\n  <img src="${t}" alt="${n}" width="400" height"200">\n  <h2>${n}</h2>\n  <h3>${i}</h3>\n  <p><a class="product-info js-info" href="#">More information</a></p>\n  <div class="button-container">\n    <button class="button-item js-remove-basket">Remove from basket</button>\n  </div>\n</li>`)).join(""):'\n    <li>\n  <img src="https://i.pinimg.com/originals/44/8b/70/448b7040d44cfc0a620c03c63df26680.png" alt="404" width="700" height"500">';n.innerHTML=t}(s,c),c.addEventListener("click",r.onClick),c.addEventListener("click",(function(e){if(e.preventDefault(),e.target.classList.contains("js-remove-basket")){const n=(0,l.findProduct)(e.target);localStorage.removeItem(n),(0,a.createMarkup)(s,c)}}));
//# sourceMappingURL=basket.206229d6.js.map
