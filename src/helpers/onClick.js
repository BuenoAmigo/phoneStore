import { createModal } from "./createModal";
import { findProduct } from "./findProduct";
import { common } from "../common";


const favoriteArr = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
const basketArr = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];

function onClick(evt) {
    evt.preventDefault();
    if (evt.target.classList.contains("js-info")) {
        const product = findProduct(evt.target);
        createModal(product);
    }

    if (evt.target.classList.contains('js-favorite')) {
        const product = findProduct(evt.target);
        const inFavorite = favoriteArr.some(({ id }) => id === product.id);
        if (inFavorite) {
            return
        }
        favoriteArr.push(product);
        localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(favoriteArr));
    };

    if (evt.target.classList.contains("js-basket")) {
        const product = findProduct(evt.target);
        const inBasket = basketArr.some(({ id }) => id === product.id);
        if (inBasket) {
            return
        }
        basketArr.push(product);
        localStorage.setItem(common.KEY_BASKET, JSON.stringify(basketArr));
    }
    const elem = evt.target;
    findProduct(elem);
}

export { onClick }