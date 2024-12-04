import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const inputDelay = document.querySelector('input[name="delay"]');
form.addEventListener('submit', makePromise);
let delay = null;

inputDelay.addEventListener('input', makeDelay);
console.log(delay);

function makeDelay() {
  delay = inputDelay.value;
  return delay;
}

function makePromise(event) {
  event.preventDefault();
  inputDelay.value = '';
  let radioBtn = document.querySelector('[name="state"]:checked').value;

  const promise = new Promise((resolve, reject) => {
    if (radioBtn === 'fulfilled') {
      resolve(
        setTimeout(() => {
          iziToast.show({
            messageColor: 'white',
            backgroundColor: 'green',
            position: 'topRight',
            close: false,
            title: '',
            message: `✅ Fulfilled promise in ${delay}ms`,
          });
        }, delay),
        (document.querySelector('[value="fulfilled"]').checked = false)
      );
    } else if (radioBtn === 'rejected') {
      reject(
        setTimeout(() => {
          iziToast.show({
            messageColor: 'white',
            backgroundColor: 'red',
            position: 'topRight',
            close: false,
            title: '',
            message: `❌ Rejected promise in ${delay}ms`,
          });
        }, delay),
        (document.querySelector('[value="rejected"]').checked = false)
      );
    }
  });

  promise
    .then(value => {
      value;
    })
    .catch(value => {
      value;
    });
}
