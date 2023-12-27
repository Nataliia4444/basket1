const refs = {
  buttonAdd: document.querySelectorAll('.product-add-btn'),
};

const KEY = 'checkout';
const array = [];

function btn() {
  refs.buttonAdd.forEach(element => {
    element.addEventListener('click', function (e) {
      const product = element.closest('#product');

      const date = {
        id: product.dataset.id,
        name: product.children[1].children[0].textContent,
        img: product.children[0].src,
        price: product.children[1].children[2].firstElementChild.textContent,
      };
      array.push(date);

      localStorage.setItem(KEY, JSON.stringify(array));
    });
  });
}

console.log(array);
btn();
