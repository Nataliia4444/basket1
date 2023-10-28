// IMPORT
import Notiflix from 'notiflix';
import { fetchBreeds } from "./cat-api"
import { references } from "./referens"
import { createMarkup } from "./createMarkup"
import { createOptins } from './createMarkup';
import { fetchCatByBreed } from "./cat-api"


// REFERENCES
const refs = references()


// LOADER
refs.loader.classList.replace('hidden', 'lds-spinner')


//FETCHBREEDS
fetchBreeds()
    .then((data) => 
    {
        refs.loader.classList.replace('lds-spinner', 'hidden')
        refs.select.insertAdjacentHTML('beforeend', createOptins(data))
   
   })
   .catch(() => Notiflix.Notify.failure('ANN ERROR OCCURRED '))


// EVENT
refs.select.addEventListener('change' ,onChange)
function onChange(e){
const id = e.target.value

fetchCatByBreed(id)
    .then((date) => 
    { 
        refs.loader.classList.replace('lds-spinner', 'hidden')
        refs.select.classList.remove('hidden')
        return refs.card.innerHTML = createMarkup(date)
    })   
    .catch(() => Notiflix.Notify.failure('ANN ERROR OCCURRED '))
    refs.card.innerHTML = ''
}

