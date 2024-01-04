
function createMarkup(arr, list) {
  let markup;
  if (arr.length) {
    markup = arr.map(({ id, name, img, price }) => `
    <li data-id="${id}" class="js-card">
  <img src="${img}" alt="${name}" width="400" height"200">
  <h2>${name}</h2>
  <h3>${price}</h3>
  <p><a class="product-info js-info" href="#">More information</a></p>
  <div class="button-container">
    <button class="button-item js-favorite">Add to favorite</button>
    <button class="button-item js-basket">Add to basket</button>
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

export { createMarkup };