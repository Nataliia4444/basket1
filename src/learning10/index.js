// const time = new Date();
// console.log('🚀 ~ file: index.js:2 ~ time:', time);

// const currentTime = time.toLocaleTimeString();
// console.log('🚀 ~ file: index.js:5 ~ currentTime:', currentTime);
const refs = {
  day: document.querySelector('.date-day'),
  date: document.querySelector('.date'),
  month: document.querySelector('.date-month'),
  year: document.querySelector('.date-year'),
  clock: document.querySelector('.digital-clock'),
  seconds: document.querySelector('.clock-seconds__arrow'),
  minutes: document.querySelector('.clock-minutes__arrow'),
  hours: document.querySelector('.clock-hours__arrow'),
};

const arrDay = [
  'Неділя',
  'Понеділок',
  'Вівторок',
  'Середа',
  'Четвер',
  'П`ятниця',
  'Субота',
];

const namesOfMonth = [
  'Січень',
  'Лютий',
  'Березень',
  'Квітень',
  'Травень',
  'Червень',
  'Липень',
  'Серпень',
  'Вересень',
  'Жовтень',
  'Листопад',
  'Грудень',
];
setInterval(() => {
  const currentTime = new Date();

  const day = currentTime.getDay();
  const date = currentTime.getDate();
  const month = currentTime.getMonth();
  const year = currentTime.getFullYear();

  const time = currentTime.toLocaleTimeString('uk-UA');
  refs.day.textContent = arrDay[day];
  refs.date.textContent = date;
  refs.month.textContent = namesOfMonth[month];
  refs.year.textContent = year;
  refs.clock.textContent = time;

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const hoursDeg = (360 / 12) * hours + (360 / 12 / 60) * minutes;
  const minutesDeg = (360 / 60) * minutes;
  const secondsDeg = (360 / 60) * seconds;

  refs.seconds.style.transform = `rotate(${secondsDeg}deg)`;
  refs.minutes.style.transform = `rotate(${minutesDeg}deg)`;
  refs.hours.style.transform = `rotate(${hoursDeg}deg)`;
}, 1000);
// const string = 'my name is Natasha';
// const firstValue = ['a', 'e', 'i', 'u', 'o'];

// function foo(string) {
//   const lastValue = [];
//   const array = string.split('');
//   array.map(el => {
//     if (el === firstValue[0]) {
//       lastValue.push(el);
//     } else if (el === firstValue[1]) {
//       lastValue.push(el);
//     } else if (el === firstValue[2]) {
//       lastValue.push(el);
//     } else if (el === firstValue[3]) {
//       lastValue.push(el);
//     } else if (el === firstValue[4]) {
//       lastValue.push(el);
//     }
//   });
//   return lastValue.length;
// }
// console.log(foo(string));
