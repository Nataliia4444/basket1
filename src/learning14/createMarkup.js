function createMarkup(pokemon){
    return  `
   <div class="img">
   <img src="${pokemon.sprites.back_default}" alt="j">
   </div>
   
   <div class="text">
     <p class="h3">Name: ${pokemon.abilities[0].ability.name}</p>
     <p class="p"> Weight: ${pokemon.weight } </p>
   </div>
   `
   }
export {createMarkup}