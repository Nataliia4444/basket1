const refs = {
  buttonAdd: document.querySelectorAll('.product-add-btn'),
};

const KEY = 'checkout';
let productCard = '';
console.log(refs.buttonAdd);
// refs.buttonAdd.addEventListener('click', handleAdd);
function btn() {
  refs.buttonAdd.forEach(element => {
    element.addEventListener('click', function (e) {
      const product = element.closest('#product');
      console.log(product);
      const date = {
        id: product.dataset.id,
        name: product.children[1].textContent,
        img: product.children[0].src,
      };
      console.log(date);
      localStorage.setItem(KEY, JSON.stringify(date));
    });
  });
}
btn();
// function handleAdd(e) {
//   console.log(e.target);

//

// }
