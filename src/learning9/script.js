import flatpickr from 'flatpickr';
import 'flatpickr/dist/themes/dark.css';
const refs = {
  days: document.querySelectorAll('.value')[0],

  hours: document.querySelectorAll('.value')[1],

  minutes: document.querySelectorAll('.value')[2],

  seconds: document.querySelectorAll('.value')[3],
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
const timePickr = document.querySelector('#datetime-picker');

flatpickr(timePickr);

const currentTime = Date.now();
const timer = {
  start() {
    setInterval(() => {
      const newTime = Date.now();
      const time = newTime - currentTime;
      console.log(convertMs(time));
    }, 1000);
  },
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = minutes;

  refs.seconds.textContent = seconds;

  return { days, hours, minutes, seconds };
}
function pad(value) {
  return String(value).padStart(2, '0');
}
timer.start();
