function createOptins (data){
    return data.map(({name, id}) => {
        return ` <option class="option" value="${id}" >${name}</option>`
    })

}
export {createOptins}

function createMarkup(data){
    return `
    <div class="card">
         <div class="image">
            <img src="${ data[0].url}" alt="cat image"  width="250px">
        </div>
        <div class="content">
           <a href="#">
             <span class="title">
             ${data[0].breeds[0].name}
             </span>
           </a>
        <p class="desc">
        ${data[0].breeds[0].description}
        </p>
        </div>
    </div>
    `
}
export{createMarkup}