const refs = {
    form: document.querySelector('.form'),
    list: document.querySelector('.card-list'),
    // btnDelete: document.querySelector
}
let btnDelete = document.querySelector('.btn-card-delete')
btnDelete.addEventListener('click', onClickBtnDelete)
function onClickBtnDelete(e){
    console.log(e.target)
}
console.log(refs.list)
let textContent = null;
refs.form.addEventListener('submit', onSubmitForm)
function onSubmitForm(e){
    e.preventDefault()
     textContent = e.target.elements[0]
    //  console.log(e.target)
    //  console.log(textContent)
 
     refs.list.insertAdjacentHTML('beforeend', createMarkup(textContent.value))
     refs.form.reset()
     let allBtnDelete = document.querySelectorAll('.btn-card-delete')
     allBtnDelete.forEach((el) => {
        el.addEventListener('click', onClickBtnDelete)
        function onClickBtnDelete(e){
            console.log(e.currentTarget.closest('.px'))
        }
     })
    //  allBtnDelete.addEventListener('click', onClickBtnDelete)
    //  function onClickBtnDelete(e){
    //      console.log(e.target)
    //  }
// console.log(e.target.elements[0].value)
}

function createMarkup (value, id){
 return `
 <li class="px-1 px" id=${id}>
  <span class="deletetodo invisible"><i class="far fa-trash-alt"></i></span>${value}
      <button class="btn-card">Write</button><button class="btn-card-delete">Delete</button>
 </li>
 `
}


















// program to check if the string is palindrome or not

// function checkPalindrome(string) {

//     // find the length of a string
//     const len = string.length;

//     // loop through half of the string
//     for (let i = 0; i < len / 2; i++) {
// if(string[ len - 1 - i] !== string[i]){
//     return 'f'
// }
//         // // check if first and last string are same
//         // if (string[i] !== string[len - 1 - i]) {
//         //     return 'It is not a palindrome';
//         // }
//     }
//     return 'It is a palindrome';
// }
// console.log(
//     checkPalindrome("lejghl")
//     )
function shortcut (string) {
  
   return string.replace(/[oiye]/g, "U")
  }

function sumTwoSmallestNumbers(numbers) {  
  
 const firstMin = Math.min(...numbers)
 const newArr = numbers.filter((el) => el !== firstMin)
 const twoMin = Math.min(...newArr)
 return twoMin + firstMin

}
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]))