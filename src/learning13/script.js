import Notiflix from 'notiflix';

// REFERENCE    
const refs = {
    form: document.querySelector(".form")
}
// EVENT SUBMIT
refs.form.addEventListener('submit', handleSubmitForm)
function handleSubmitForm (e){
    e.preventDefault()
        const delay = Number(e.target.elements[0].value)
        const step = Number(e.target.elements[1].value)
        const amound = Number(e.target.elements[2].value)
   
        let currentDelay = delay
            for (let i = 1; i <= amound; i +=1){
                createPromise(i, currentDelay)
                .then(({ position, delay }) => {
                Notiflix.Notify.success('✅ Fulfilled promise ${position} in ${delay}ms');
                })
                .catch(({ position, delay }) => {
                Notiflix.Notify.warning('❌ Rejected promise ${position} in ${delay}ms');

            });
            currentDelay += step
    }
        refs.form.reset()
}
// CREATE PROMISE
function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    return new Promise((res, rej)=>{
        setTimeout(() => {
            if (shouldResolve) {
                res({position, delay})
                } else {
                rej({position, delay})
                }
        }, delay) 
    })
}