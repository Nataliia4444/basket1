// 1.паралелизм - многопоточность
// 2.дж может виполнять только последоватульно
// 3.web workers - можливість браузера зробити код многопотоковим
// 4.Кеширование
// *plan
// видео Репети - до 23.00
// Потом или реализация часи или event loop дод 01.00
// 5.В нативном js немає планування задач
// 6.Це чатина браузера API or Node.js API
// 7. Інтерпрітатор зустрічає функцію і ставить її на стек
// 8. анонімна вкладка
// 9. web Apis  - планувальник
//! Практика
// console.log(' before setTimeout');
// const timerId = setTimeout(
//   u => {
//     console.log('setTimeout', u);
//   },
//   2000,
//   50
// );

// console.log('after setTimeout');
// const cancelTimer = true;
// if (cancelTimer) {
//   clearTimeout(timerId);
// }
// console.log(timerId);
// const canselInterval = setInterval(() => {
//   alert('hello world');
// }, 5000);
// if (cancelTimer) {
//   clearInterval(canselInterval);
// }
// const refs = {
//   notification: document.querySelector('.alert'),
// };
// let intervalId = null;
// let quntityRepet = 0;

// refs.notification.addEventListener('click', onNotifivationClick);
// notification();
// function notification() {
//   intervalId = setInterval(() => {
//     quntityRepet += 1;
//     if (quntityRepet === 4) {
//       clearInterval(intervalId);
//     }
//     showNotification();
//   }, 3000);
// }
// function showNotification() {
//   refs.notification.classList.replace('alert', 'is-visible');
// }
// function hideNotification() {
//   refs.notification.classList.add('alert');
// }
// function onNotifivationClick() {
//   hideNotification();
// }
