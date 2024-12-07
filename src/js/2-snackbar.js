import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const inputDelay = document.querySelector('input[name="delay"]');
form.addEventListener('submit', makePromise);

function makePromise(event) {
  event.preventDefault();
  let delay = inputDelay.value;

  inputDelay.value = '';
  let radioBtn = document.querySelector('[name="state"]:checked').value;

  const promise = new Promise((resolve, reject) => {
    if (radioBtn === 'fulfilled') {
      setTimeout(() => {resolve(`✅ Fulfilled promise in ${delay}ms`)        
        }, delay),
        
      document.querySelector('[value="fulfilled"]').checked = false
    } else if (radioBtn === 'rejected') {
      setTimeout(() => { reject(`❌ Rejected promise in ${delay}ms`)
        }, delay), 
    document.querySelector('[value="rejected"]').checked = false}
  });

  promise
    .then(value => {
      iziToast.show({
        messageColor: 'white',
        backgroundColor: 'green',
        position: 'topRight',
        close: false,
        title: '',
        message: value,
      });;
    })
    .catch(value => {
       iziToast.show({
        messageColor: 'white',
        backgroundColor: 'red',
        position: 'topRight',
        close: false,
        title: '',
        message: value,
      });
    });
}
