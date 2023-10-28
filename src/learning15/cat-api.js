import { references } from "./referens";
import { createOptins } from "./createMarkup";
const refs = references()
function fetchBreeds(){
    const url = `https://api.thecatapi.com/v1/breeds`;
    const api_key = 'live_eCj0xxR1987xUJo1pQD3RXEGIdovbeRsa31DTB7fddZmLIkOjxkC6r73L9iyVbRx'
        return fetch(url,{headers: {
            'x-api-key': api_key
          }})
       .then((response) => {
         return response.json();
       })
    }

function fetchCatByBreed(breedId){
    const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
    const api_key = 'live_eCj0xxR1987xUJo1pQD3RXEGIdovbeRsa31DTB7fddZmLIkOjxkC6r73L9iyVbRx'
    refs.loader.classList.replace('hidden', "lds-spinner")
    refs.select.classList.add('hidden')

        return fetch(url,{headers: {
            'x-api-key': api_key
          }})
       .then((response) => {
         return response.json();
       })
}
export {fetchBreeds}
export {fetchCatByBreed}