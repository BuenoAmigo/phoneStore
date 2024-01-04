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

// list.addEventListener("mouseover", changeImg);

// function changeImg(evt) {
//     evt.preventDefault();
//     if (evt.target.classList.contains("phones-list")) {
//         evt.target.img.src = 'https://media.currys.biz/i/currysprod/M10230581_black_001?$l-large$&fmt=auto'
//     }

// }