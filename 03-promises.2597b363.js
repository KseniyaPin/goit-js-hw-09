!function(){"use strict";var e=document.querySelector(".form");console.log("formData"),e.addEventListener("submit",(function(e){var t=e.currentTarget.elements,o=t.delay.value,r=t.step.value,a=t.amount.value,n={delay:o,step:r,amount:a};if(""!==o&&""!==r&&""!==a)return console.log(n);if(""===o||""===r||""===a)return alert("Пожалуйста, заполните все поля!");for(var l=1;l<=a;l+=1)console.log("delay=",o," step=",r," amount=",a)}))}();
//# sourceMappingURL=03-promises.2597b363.js.map