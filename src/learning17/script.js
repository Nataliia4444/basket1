import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import "simplelightbox/dist/simple-lightbox.min.css";
import { createMarkup } from './markup';
import { getImage } from './API';
import { refs } from './refs';

let page = 0;
let query = '';




refs.form.addEventListener("submit", handleFormSubmit)
function handleFormSubmit(e){
e.preventDefault()

 query = e.target.elements.searchQuery.value
 page = 1
getImage(query, page)
.then((data) => {
  if(data.total === 0){
    page = 0
    return
  }
   
  refs.gallery.insertAdjacentHTML("beforeend", createMarkup(data.hits))
  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDeloy: 250,
  });
  lightbox.on('show.simplelightbox', function (e) {
    e.preventDefault();
  }); 
  refs.loadMore.hidden = false;
})

.catch(() => {
   return Notiflix.Notify.failure('Виникла помилка запиту')
})
.finally(
  () => refs.form.reset()
  )

refs.gallery.innerHTML = '' 
}



refs.loadMore.addEventListener("click", handleOnLoadMore)
function handleOnLoadMore(){
  gallery.refresh()
  page += 1
  getImage(query, page)
  .then((data) => {
    if(data.totalHits > page){
      refs.loadMore.hidden = true;
      Notiflix.Notify.info('Зображення закінчились');
    }
    refs.gallery.insertAdjacentHTML("beforeend", createMarkup(data.hits)) 
    lightbox.refresh()
}).catch((er) => {
    console.log(er)
   return Notiflix.Notify.failure('Виникла помилка запиту')
})

}


const gallery = document.querySelector(".gallery")
const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDeloy: 250,
});
lightbox.on('show.simplelightbox', function (e) {
  e.preventDefault();
});
const { height: cardHeight } = document
  .querySelector(".gallery")
  .firstElementChild.getBoundingClientRect();

window.scrollBy({
  top: cardHeight * 2,
  behavior: "smooth",
});