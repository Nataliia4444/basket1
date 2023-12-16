import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createMarkup } from './markup';
import { getImage } from './API';
import { refs } from './refs';

let page = 0;
let query = '';

refs.form.addEventListener('submit', handleFormSubmit);
function handleFormSubmit(e) {
  e.preventDefault();

  query = e.target.elements.searchQuery.value;
  page = 1;
  getImage(query, page)
    .then(data => {
      if (data.total === 0) {
        page = 0;
        refs.searchBtn.disabled = true;
        Notiflix.Notify.failure('Відсутні дані запиту');
        return;
      }

      refs.loadMore.hidden = false;
      refs.loadMore.style.display = 'block';
      refs.gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));
      const lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDeloy: 250,
      });
      lightbox.on('show.simplelightbox', function (e) {
        e.preventDefault();
      });
    })

    .catch(() => {
      return Notiflix.Notify.failure('Виникла помилка запиту');
    })
    .finally(() => {
      refs.form.reset();
      refs.searchBtn.disabled = false;
    });

  refs.gallery.innerHTML = '';
}

refs.loadMore.addEventListener('click', handleOnLoadMore);
function handleOnLoadMore() {
  page += 1;
  getImage(query, page)
    .then(data => {
      if (data.totalHits < page) {
        refs.loadMore.hidden = true;
        Notiflix.Notify.info('Зображення закінчились');
      }
      refs.gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));
    })
    .catch(() => {
      return Notiflix.Notify.failure('Виникла помилка запиту');
    });
}

// /! FETCH
// import axios from 'axios';

// function serviceCountry() {
//   const URL = "https://restcountries.com/v3.1/name/Ukraine";
//   return axios.get(URL)
// }

// serviceCountry().then((res) => console.log(res)).catch(console.log);
// function getImage (q = "bmw", pag = 1){
//   const params = new URLSearchParams({
//       key: "39036273-6668926e4f0bebacaced31faa",
//       q,
//       image_type: "photo",
//       orientation: "horizontal",
//       savesearch:   "true",
//       page: pag,
//       per_page: 40,
//   });
//   const URL = "https://pixabay.com/api/"
//   return  axios.get(`${URL}?${params}`)
// }
// export {getImage}
// getImage().then((date) => console.log(date.data))
// const number = 8.3
// console.log(isSafeInteger(8.1))

// String.prototype.toJadenCase = function () {
//   // const arr = str.split(' ')

//   return 5
// };
// var str = "How can mirrors be real if our eyes aren't real";
// console.log((str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real"))
// function toJadenCase(str){
//   const arr =  str.split(' ')
//   return arr.map((el) => {
//     console.log(el)
//     // const newArr = el.split('')
//     // newArr[0].toUpperCase()

//     // return newArr[0].toUpperCase()
//   })

//   // return arr
// };
// console.log(toJadenCase( "How can mirrors be real if our eyes aren't real"))
