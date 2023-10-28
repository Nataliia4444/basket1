function fetchSeach (id){
    return  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>{
        
        return res.json()

    } )
 };

 export {fetchSeach}