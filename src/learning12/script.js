import * as basicLightbox from 'basiclightbox'
import '/node_modules/basiclightbox/dist/basicLightbox.min.css';



const refs = {
  container: document.querySelector('.js-container'),
  start: document.querySelector('.js-start'),
};
refs.start.addEventListener('click', startGame);
function startGame() {
    const promises = [...refs.container.children].map(() => createPromise());
    console.log(promises);
    Promise.allSettled(promises).then((item) => {
    const isWinner = 
    item.every(item => item.status === 'rejected')||
    item.every(item => item.status === 'fulfilled')
    console.log(isWinner)

    item.forEach((items, i) => {
    refs.container.children[i].textContent = ' '
     setTimeout(()=>{
       refs.container.children[i].textContent = items.reason || items.value

       if(i === item.length -1 ){
        const instance = basicLightbox.create(`
        <div class="modal">
            <p>${isWinner ? 'Winner' : 'Loser'}</p>
            <a>Close</a>
        </div>
    `, {
        onShow: (instance) => {
            instance.element().querySelector('a').onclick = instance.close
        }
    })
    // (`<h1>${isWinner ? 'Winner' : 'Loser'}</h1>`)
        instance.show()
       }
   
     }, 1000 * (i + 1))

    })
})
  
    
}
function createPromise() {
  return new Promise((res, rej) => {
    const rand = Math.random();
    if (rand > 0.5) {
      res('🤡');
    } else {
      rej('👽');
    }
  });
}
// // }

