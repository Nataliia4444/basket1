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
    refs.searchBtn.disabled = true;
    Notiflix.Notify.failure('Відсутні дані запиту')
    return
  }

  refs.loadMore.hidden = false;
  refs.loadMore.style.display = "block"
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
  
})

.catch(() => {
   return Notiflix.Notify.failure('Виникла помилка запиту')
})
.finally(
  () =>{
    refs.form.reset()
    refs.searchBtn.disabled = false
  } 
  )

refs.gallery.innerHTML = '' 
}



refs.loadMore.addEventListener("click", handleOnLoadMore)
function handleOnLoadMore(){
  page += 1
  getImage(query, page)
  .then((data) => {
    if(data.totalHits < page ){
      refs.loadMore.hidden = true;
      Notiflix.Notify.info('Зображення закінчились');
    }
    refs.gallery.insertAdjacentHTML("beforeend", createMarkup(data.hits)) 
}).catch(() => {
   return Notiflix.Notify.failure('Виникла помилка запиту')
})

}

