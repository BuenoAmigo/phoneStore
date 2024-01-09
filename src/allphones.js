import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import { phones } from "./helpers/phones";
import { common } from './common';
import { createMarkup } from './helpers/createMarkup';
import { onClick } from './helpers/onClick';


const inputSearch = document.querySelector('.js-search');
const list = document.querySelector('.js-list');
const favoriteArr = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
const basketArr = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];

createMarkup(phones, list);
list.addEventListener("click", onClick);

// const sortPhones = document.querySelector('.js-phone-sort');
// sortPhones.addEventListener('click', onSort);

// function onSort(evt) {
//     evt.preventDefault();
//     console.dir(evt.currentTarget)
// }
