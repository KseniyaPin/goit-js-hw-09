// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';
// notiflix
import Notiflix from 'notiflix';

const buttonStart = document.querySelector('button[data-start]');
const inputEl = document.querySelector('input');

const date = {
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

// к-во секунд с 1970
const currentTime = Date.now();

let timerId = null;

if (inputEl.value < currentTime) {
  buttonStart.disabled = true;
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < currentTime) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      buttonStart.disabled = false;
      buttonStart.addEventListener('click', () => {
        buttonStart.disabled = true;
        timerId = setInterval(() => {
          const currentTime = Date.now();
          // console.log(currentTime);
          console.log(convertMs(selectedDates[0] - currentTime));
          date.days.textContent = result.days;
          date.hours.textContent = result.hours.toString().padStart(2, '0');
          date.minutes.textContent = result.minutes.toString().padStart(2, '0');
          date.seconds.textContent = result.seconds.toString().padStart(2, '0');
          if (
            result.days <= 0 &&
            result.hours <= 0 &&
            result.minutes <= 0 &&
            result.seconds <= 0
          ) {
            clearInterval(timerId);
          }
        }, 1000);
      });
      //
    }
  },
};

inputEl.value = flatpickr('#datetime-picker', options);

// buttonStart.addEventListener('click', () => {
//   buttonStart.disabled = true;
//   timerId = setInterval(() => {
//     // console.log(result);
//     // options.onClose(selectedDates);
//     date.days.textContent = result.days;
//     date.hours.textContent = result.hours.toString().padStart(2, '0');
//     date.minutes.textContent = result.minutes.toString().padStart(2, '0');
//     date.seconds.textContent = result.seconds.toString().padStart(2, '0');
//   }, 1000);
// });

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return (result = { days, hours, minutes, seconds });
}

// enableTime - Boolean false Включает выбор времени
// time_24hr - boolean false Отображает средство выбора времени в 24-часовом режиме
// defaultDate - Устанавливает начальную выбранную дату (даты). Если вы используете режим: «множественный» или календарь диапазона, поставьте объекты Array of Date или массив строк даты, которые следуют за вашим dateFormat. В противном случае вы можете указать один объект Date или строку даты.
//  minuteIncrement - регулирует шаг ввода минут (включая прокрутку)
// onClose	- Функции, запускаемые каждый раз при закрытии календаря.
//selectedDates - это массив выбранных дат, поэтому мы берем первый элемент.
