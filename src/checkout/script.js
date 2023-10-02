// import { createMarkup } from '../templates/checkoutProduct';

const refs = {
  totalPrice: document.getElementById('totalPrice'),
  clearBtn: document.getElementById('clearBtn'),
  checkoutList: document.getElementById('product'),
};
// const KEY = 'checkout';

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
const products = JSON.parse(localStorage.getItem('checkout 3')) ?? [];
refs.checkoutList.insertAdjacentHTML('beforeend', products);
console.log(products);
