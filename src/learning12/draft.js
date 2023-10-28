
// function isPangram(string){
//   const alphabet = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z','A', 'E', 'I', 'O', 'U', 'Y']

//   const array = string.split('')
//   const result = []
//   for(const letter of alphabet){
   
//     for(const arr of array){
//       if(letter.toLowerCase() === arr.toLowerCase()){
//         result.push(letter)
//       }
//     }
  
//   }
//   if(result.length > alphabet.length){
//     console.log(result.length, alphabet.length)
//     return true
//   }else{
//     return false
//   }

// }
// function isPangram(string) {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   const chars = new Set(string.toLowerCase().split(''));
//   console.log(chars)
//   return alphabet.split('').every(letter => chars.has(letter));
// }

// function createPromise(text, number){
//   return new Promise((resolve, rejected) => {
//         const rand = number

//     if(rand > 5){
//       resolve(text)
//     }else{
//       rejected('rejected')
//     }
//   })

// }
// const firstPromise = createPromise("1", 8)
// const promise = createPromise('2', 9)
// const lastPromise = createPromise('3', 1)
// Promise.race([firstPromise, promise, lastPromise]).then(value => {throw new Error('error njmk')}).catch((er) => {console.log(er)}).finally(() => {console.log('dojeodjoe')})


// const people = [
//     "Nataliia", 
//     "Alina",
//     "Olga",
//     "Margo", 
//     "Olga"
//   ]
  // console.log(people.length)
//   function createPromise(name){
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(`Name: ${name}`)
//       rej('error')
//     }, 1000)
//   })
//   }
  // createPromise("Joni", 1000).then((name) => console.log(name))
  // const nameGirl = people.map(createPromise)
  
//   for(let i = 0; i < people.length ; i+= 1){
//    const promis = createPromise(people[i]).then(n => console.log(n))
//     }
  
  
  // Promise.all(nameGirl).then((name) => console.log(name))
  
  // Promise.all(promis).then(n => console.log(n))
  // function sumArray(array) {
  //   if(!array){
  //     return 0
  //   }
  //   const min = Math.min(...array)
  //   const max = Math.max(...array)
  //   array.map((el, i) => {
  //     if(el === max){
  //       array.splice(i, 1)
      
  //     }
     
  //   })
  //   array.map((el, i) => {
  //     if(el === min){
  //       array.splice(i, 1)
  //     }})
  
  //   return array.reduce((total, number) => {return total + number} , 0)
  
  // }
  // console.log(sumArray(null)                     , 0 )
  // console.log(sumArray([ ])                      , 0 )
  // console.log(sumArray([ 3, 5 ])                 , 0 )
  // console.log(sumArray([ 6, 2, 1, 8, 10])       , 16 )
  // console.log(sumArray([ 0, 1, 6, 10, 10 ])      , 17 )
  // console.log(sumArray([ -6, -20, -1, -10, -12 ]), -28 )
  // console.log(sumArray([ -6, 20, -1, 10, -12 ])  , 3 )
  // const fill = (arraySize, value) => {
  //   // return  new Array(arraySize).fill(value)
  //   // const arr =[ ]
  //   // for(let i =0; i<= arraySize - 1; i+=1){
  //   //   arr.push("a")
  //   // }
  //   // return arr
  //  }
   
  //  const data = 3;
  //  const valueToFill = 'a';
  //  console.log(fill(data, valueToFill)) // ['a', 'a', 'a']
/**
  * Описание задачи: Напишите функцию, которая разворачивает массив в обратном порядке.
  * Ожидаемый результат: [1, 2, 3] => [3, 2, 1]
  * Сложность задачи: 1 of 5
  // * @param {Array} array - Массив любых элементов
//   // * @returns {Array}
// */
// const arr = []
// const reverse = (array) => {
//   for(let i = array.length - 1; i >= 0 ; i-=1){
//    arr.push(array[i])
    
//   }
//   return arr
//  }
 
//  const data = [1, 2, 3];
//  console.log(reverse(data)); // [3, 2, 1]



 /**
  * Описание задачи: Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
  * Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
  * Сложность задачи: 1 of 5
//   // * @param {Array} array - Массив любых элементов
//   // * @returns {Array}
// */
// const compact = (array) => {
//   return array.filter((el) => el !== true)
//  }
 
//  const data = [0, 1, false, 2, undefined, '', 3, null];
//  console.log(compact(data)) // [1, 2, 3]

//  function compact(arr){
// const newArr=[]
//  arr.map((el) => {
//   if(el){
// newArr.push(el)
//   }
// })
// return newArr
//  }
//  const data = [0, 1, false, 2, undefined, '', 3, null];
//  console.log(compact(data)) // [1, 2, 3]
function sumNumber(arr, target){
  const array =[]
const result = {}

for(let i =0; i < arr.length; i += 1){
 result[arr[i]] = arr[i]


}
for(let j = 0; j< arr.length; j += 1){
  const dift = target - arr[j]
  console.log(dift, 'dift')
  console.log(result[dift], 'result[dift]')
  if(result[arr[j]] === dift){
    array.push(arr[j])
    array.push(dift)
  }
}
console.log(result)
return array
}
console.log(sumNumber([1, 4, 7, 8, 9], 8))