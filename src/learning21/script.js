import { refs } from './refs';
import { getDataLS } from './getLS';

const data = [];
const newArr = [];

refs.btnAdd.addEventListener('click', onClickBtnAdd);
document.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') onClickBtnAdd();
});
function onClickBtnAdd(e) {
  if (refs.input.value.trim().length > 0) {
    const li = document.createElement('li');
    li.textContent = refs.input.value;
    refs.list.appendChild(li);

    const btnDelete = document.createElement('button');
    btnDelete.className = 'btn-card btn';
    btnDelete.textContent = 'Delete';
    li.appendChild(btnDelete);

    const btnWrite = document.createElement('button');
    btnWrite.textContent = 'Write';
    li.appendChild(btnWrite);

    btnDelete.addEventListener('click', function (e) {
      refs.list.removeChild(li);
    });
    refs.input.value = '';

    btnWrite.addEventListener('click', function () {
      const el = btnWrite.parentNode.firstChild;
      const taskName = {
        name: el.textContent,
      };
      let getLocalStorage = localStorage.getItem('KEY');
      if (getLocalStorage) {
        const getDate = JSON.parse(getLocalStorage);
        getDate.map(el => data.push(el));
      }

      data.push(taskName);
      btnWrite.disabled = true;
      btnWrite.classList.add('btn-disabled');

      data.map(el => {
        newArr.push(el.name);
      });

      let result = [];
      const sortData = Array.from(new Set(newArr));
      sortData.map(el => {
        const arr = {
          name: el,
        };
        result.push(arr);
      });
      localStorage.setItem('KEY', JSON.stringify(result));
    });
  }
}
refs.btnWriteName.addEventListener('click', e => {
  refs.inputName.placeholder = `${refs.inputName.value}`;
  refs.inputName.value = '';
});
getDataLS();
// function validatePIN(pin) {
//   const arr = pin.split('');
//   if (arr.length === 4 || arr.length === 6) {
//     // for (const el of arr) {
//     //   if (el === ' ') {
//     //     return false;
//     //   }
//     // }
//     return arr.every(number => {
//       // console.log(number.trim());
//       return !number.includes(' ') && !isNaN(Number(number));
//     });
//   } else {
//     return false;
//   }
// }
// console.log(validatePIN('12345'), false);
// console.log(validatePIN('1234567'), false);
// console.log(validatePIN('-1234'), false);
// console.log(validatePIN('1.234'), false);
// console.log(validatePIN('1234'), true, "Wrong output for '1234'");
// console.log(validatePIN('0000'), true, "Wrong output for '0000'");
// console.log(validatePIN('a111'), false, "Wrong output for '1111'");
// console.log(validatePIN('123456'), true, "Wrong output for '123456'");
// console.log(validatePIN('886 '));
