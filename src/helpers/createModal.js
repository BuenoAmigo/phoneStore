import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

function createModal(product) {
  const instance = basicLightbox.create(`
    <div class="modal-card">
  <img src="${product.img}" alt="${product.name}" width="500">
  <h2>${product.name}</h2>
  <h3>${product.price}</h3>
  <p>${product.description}</p>
  <div>
  <button class="button-item js-favorite">Add to favorite</button>
  </div>
  <div>
  <button class="button-item js-basket">Add to basket</button>
</div>
</div>
`);
  instance.show();
}

export { createModal }