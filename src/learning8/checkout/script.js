
const KEY = 'checkout';


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
