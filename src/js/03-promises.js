import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form')
}

refs.form.addEventListener('submit', onFormSubmit)

function onFormSubmit(e) {  
  e.preventDefault();
  let delay = +refs.form.delay.value;
  const step = +refs.form.step.value;
  const amount = +refs.form.amount.value;
  if (delay === 0 || step === 0 || amount === 0) {
    Notiflix.Notify.warning('First delay, Delay step and Amount cannot be zeros'); 
    return;
  } 

  for (let position = 1; position <= amount; position += 1) {   
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
      
    delay += step;
  }
} 

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {    
    const shouldResolve = Math.random() > 0.3;
    console.log(shouldResolve);
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);   
  })  
}