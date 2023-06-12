'use strict';

const bodyEL = document.querySelector('body');
const button = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
}


let timerId = null;

button.start.addEventListener('click', () => {
  timerId = setInterval(() => {
    button.start.disabled = true;
      button.stop.disabled = false;

    bodyEL.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

button.stop.addEventListener('click', () => {
  clearInterval(timerId);
  button.stop.disabled = true;
  button.start.disabled = false;
});


// Рандомні кольори
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
