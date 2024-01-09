import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import { common } from './common';
// import { createMarkup } from './helpers/createMarkup';
import { onClick } from './helpers/onClick';
import { createMarkup } from './helpers/createMarkup';
import { findProduct } from './helpers/findProduct';

const list = document.querySelector('.js-list');
const basket = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];

// createMarkup(basket, list);
// list.addEventListener("click", onClick);
createBasketMarkup(basket, list);
list.addEventListener('click', onClick)

function createBasketMarkup(arr, list) {
    let markup;
    if (arr.length) {
        markup = arr.map(({ id, name, img, price }) => `
    <li data-id="${id}" class="js-card">
  <img src="${img}" alt="${name}" width="400" height"200">
  <h2>${name}</h2>
  <h3>${price}</h3>
  <p><a class="product-info js-info" href="#">More information</a></p>
  <div class="button-container">
    <button class="button-item js-remove-basket">Remove from basket</button>
  </div>
</li>`).join('');
    }
    else {
        markup = `
    <li>
  <img src="https://i.pinimg.com/originals/44/8b/70/448b7040d44cfc0a620c03c63df26680.png" alt="404" width="700" height"500">`;
    }
    list.innerHTML = markup;
};


list.addEventListener("click", removeItem);

function removeItem(evt) {
    evt.preventDefault();
    if (evt.target.classList.contains("js-remove-basket")) {
        const product = findProduct(evt.target);
        localStorage.removeItem(product);
        // createMarkup(basket, list);
    }
}