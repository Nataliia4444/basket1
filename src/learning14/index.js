import {fetchSeach} from './api'
import {createMarkup} from './createMarkup'
import {referens} from './refs'


const refs = referens()
refs.form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e){
e.preventDefault()
const id = e.currentTarget.elements[0].value

fetchSeach(id).then((data) => refs.card.innerHTML = createMarkup(data)).catch(() => alert('Not search'))
refs.form.reset()
}


