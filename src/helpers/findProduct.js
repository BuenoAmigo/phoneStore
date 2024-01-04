import { phones } from "./phones";

function findProduct(elem) {
    const productId = Number(elem.closest(".js-card").dataset.id);
    return phones.find(({ id }) => id === productId)
};

export {findProduct}