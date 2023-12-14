import { refs } from './refs';
function getDataLS() {
  const getLocalStorage = localStorage.getItem('KEY');
  if (getLocalStorage) {
    const getDate = JSON.parse(getLocalStorage);
    function createMarkup(value) {
      return value
        .map(el => {
          return `
         <li>
         ${el.name}
         <button class="btn-card btn">Delete</button>
         </li>
      `;
        })
        .join('');
    }

    refs.list.insertAdjacentHTML('beforeend', createMarkup(getDate));
  }
  const btnDelete = document.querySelectorAll('.btn-card');
  btnDelete.forEach(el => {
    el.addEventListener('click', function (e) {
      console.log(e.target.closest('li'));
      refs.list.removeChild(e.target.closest('li'));
      localStorage.removeItem('KEY');
    });
  });
}
export { getDataLS };
