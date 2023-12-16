const refs = {
  option: document.querySelectorAll('.option'),
  title: document.querySelector('.title'),
  select: document.getElementById('standard-select'),
  button: document.querySelector('.btn'),
};
console.log(refs.option);
// refs.option.forEach(el => {
//   el.addEventlistener('select', function (e) {
//     console.log(e);
//   });
// });

refs.button.addEventlistener('click', function () {
  console.log('agsge');
});
