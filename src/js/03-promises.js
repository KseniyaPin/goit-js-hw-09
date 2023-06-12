// notiflix
import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  const formElements = evt.currentTarget.elements;
  let delay = Number.parseInt(formElements.delay.value);
  const step = Number.parseInt(formElements.step.value);
  const amount = Number.parseInt(formElements.amount.value);

  const formData = {
    delay,
    step,
    amount,
  };

  for (let i = 1; i <= amount; i += 1) {
    const position = i;
    createPromise(position, delay);
    delay += step;
  }
  evt.target.reset();
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      } else {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      }
    }, delay);
  });

  promise.then(
    value => {
      console.log(value);
    },
    error => {
      console.log(error);
    }
  );
}
