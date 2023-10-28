// import { createMarkup } from '../templates/checkoutProduct';

// const refs = {
//   totalPrice: document.getElementById('totalPrice'),
//   clearBtn: document.getElementById('clearBtn'),
//   checkoutList: document.getElementById('product'),
// };
const KEY = 'checkout';

// const products = JSON.parse(localStorage.getItem(KEY)) ?? [];
// let totalCost = 0;
// if (products.length) {
//   refs.clearBtn.hidden = false;
//   totalCost = products.reduce(
//     (sum, { price, quantity }) => sum + quantity * price,
//     0
//   );
// }

// refs.totalPrice.textContent =
//   totalCost !== 0 ? `Total cost: ${totalCost} UAN` : 'You cart is empty';
// refs.checkoutList.insertAdjacentHTML('beforeend', createMarkup(products));

// refs.clearBtn.addEventListener('click', clearCard);
// function clearCard() {
//   localStorage.removeItem(KEY);
//   window.location.href = '../index.html';
// }
// const products = JSON.parse(localStorage.getItem('checkout 3')) ?? [];
// refs.checkoutList.insertAdjacentHTML('beforeend', products);
// console.log(products);

//!
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

// import instruments from './products.json';
// import { createMarkup } from './templates/product'
const answer = localStorage.getItem(KEY);
const parseLS = JSON.parse(answer);
console.log(parseLS);
function createMarkup(array) {
  return array.map(
    ({
      id,
      name,
      img,
    }) => `<figure class="snip1418" data-id="9" class="product-card" id="${id}">
  <img src="${img}" alt="sample92" />
  <figcaption>
    <h3 class="product-title">${name}</h3>
    <p class="product-description">If your knees aren't green by the end of the day, you ought to seriously re-examine
      your life. </p>
    <div class="price">
      <s>$24.00</s>$19.00
    </div>
</figure>`
  );
}
list = document.querySelector('#checkoutList');
total = document.querySelector('#totalPrice');
console.log(createMarkup(parseLS));
list.insertAdjacentHTML('beforeend', createMarkup(parseLS));
function totalPrice(array) {
  return array.reduce((total, { price }) => {
    const arrayTotal = price.split('');
    const number = arrayTotal.splice(0, 1);
    const result = arrayTotal.join('');
    const pars = parseInt(result);
    return total + pars;
  }, 0);
}
total.textContent = `TOTAL: ${totalPrice(parseLS)}`;
console.log(totalPrice(parseLS));
const clearBtn = document.querySelector('.clear-cart-btn')
clearBtn.addEventListener('click', handleClickBtn)
function handleClickBtn (e){
list.innerHTML = ''
e.target.hidden = true
total.textContent = 'TOTAL:'
}
// const number = parseLS[0].price.split('');
// const j = number.splice(0, 1);
// const pr = number.join('');
// console.log(parseInt(pr));
// console.log(parseLS[0].price.split('').splice(0, 1));
