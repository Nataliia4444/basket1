// const refs = {
//   btn: document.querySelector('.buttons'),
//   input: document.querySelector('.input'),
// };
// // const zero = '0';
// // const one = '1';
// // const too = '2';
// // const three = '3';
// // const four = '4';
// // const five = '5';
// // const six = '6';
// // const seven = '7';
// // const eight = '8';
// // const nine = '10';
// const add = '+';
// const pull = '-';

// refs.btn.addEventListener('click', onClickBtn);
// function onClickBtn(e) {
//   //   console.log(e.target.textContent);
//   //   refs.input.textContent = e.target.textContent;
//   //   if ((e.target.textContent = '+')) {
//   //     console.log(firstEl);
//   //   }
// }
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];
// let quont = 0;
// const reduce = tweets.reduce((acc, value) => {
//   //   console.log(value.tags);
//   // return value.tags;
//   //   acc[value.tags];
//   value.tags.forEach(element => {
//     // console.log(element);
//     acc[element] = (acc[element] || 0) + 1;
//   });
//   return acc;
// }, {});
// console.log(reduce);
// const string = 'Hello my name Nataliia';
// const replace = string.replaceAll(' ', '');
// console.log(replace);
const number = [1, 2, 3, 4, 5, 6];
const sum = number.map(num => {
  console.log(num);
  return num * num;
});

console.log(sum);
