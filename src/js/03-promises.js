'use strict';

const form = document.querySelector('.form');

console.log("formData");
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  // evt.preventDefault();

  const formElements = evt.currentTarget.elements;
  const delay = formElements.delay.value;
  const step = formElements.step.value;
  const amount = formElements.amount.value;

  const formData = {
    delay,
    step,
    amount,
  };

  if (delay !== '' && step !== '' && amount !== '') {
    return console.log(formData);
  }

  if (delay === '' || step === '' || amount === '') {
    return alert('Пожалуйста, заполните все поля!');
  }
  //
  for (let i = 1; i <= amount; i += 1) {
      // const position = i;
      console.log('delay=', delay, ' step=', step, ' amount=', amount);
      // createPromise(position, delay);
      // delay += step;
  }

  // evt.target.reset();
}

