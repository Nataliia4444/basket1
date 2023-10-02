// import instruments from './products.json';
// import { createMarkup } from './templates/product';
const refs = {
  productsList: document.getElementById('productsList'),
};
const KEY = 'checkout';
// console.log(refs.productsList.firstElementChild.dataset.id);
// refs.productsList.insertAdjacentHTML('beforeend', createMarkup(instruments));
refs.productsList.addEventListener('click', handleAdd);
function handleAdd(e) {
  console.log(e.target.type);
  if (e.target.type !== 'button') {
    return;
  }

  const product = e.target.closest('#product');
  console.log(product.innerHTML);
  const productId = Number(product.dataset.id);
  console.log(productId);
  // if (refs.productsList.firstElementChild.dataset.id === productId) {
  //   console.log(refs.productsList.firstElementChild.dataset.id);
  // }
  // const currentProduct = productsList.find(({ id }) => id === productId);
  // const prodacts = JSON.parse(localStorage.getItem(KEY)) ?? [];
  // const checkoutId = prodacts.findIndex(({ id }) => id === productId);
  // if (checkoutId === -1) {
  //   currentProduct.quantity = 1;
  //   prodacts.push(currentProduct);
  // } else {
  //   prodacts[checkoutId].quantity += 1;
  // }

  localStorage.setItem(
    ` checkout ${product.dataset.id}`,
    JSON.stringify(product.innerHTML)
  );
}
