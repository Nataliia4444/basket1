const refs = {
  option: document.querySelectorAll('.option'),
  title: document.querySelector('.title'),
  select: document.getElementById('standard-select'),
};
console.log(refs.option);
refs.option.forEach(el => {
  console.log(el);
  el.addEventlistener('click', function (e) {
    console.log(e);
  });
});

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', function () {
//   console.log(refs.select.value);
// });
