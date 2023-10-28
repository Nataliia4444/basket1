let idInterval = null;
const refs = {
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
};

refs.btnStart.addEventListener('click', handleClickStart);
function handleClickStart() {
  idInterval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
refs.btnStop.addEventListener('click', handleClickStop);
function handleClickStop() {
  clearInterval(idInterval);
}
