import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import errorImage from '../img/bi_x-octagon.svg';

let userSelectedDate = null;
// let interval = 0;
const startBtn = document.querySelector('button[data-start]');
const inputTime = document.querySelector('#datetime-picker')
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate <= new Date){
      iziToast.show({
        
        messageColor: 'white',
        backgroundColor: 'red',
        position: 'topRight',
        iconUrl: `${errorImage}`,
        close: false,
        title: '',
        message: 'Please choose a date in the future'
           });
    startBtn.disabled = true;
    }else{
      userSelectedDate = selectedDate;
            startBtn.disabled = false;
    }
    console.log(userSelectedDate)
  },
};


flatpickr('#datetime-picker', options);
startBtn.addEventListener('click', startCountdown);



function startCountdown(event) {
  event.preventDefault();
  setDeltaTime();
 
 setInterval(() => {
    setDeltaTime();
  }, 1000);
}




function setDeltaTime() {
  const deltaTime = Date.parse(userSelectedDate) - Date.now();
  if (deltaTime<=0){
    startBtn.disabled = true;
    inputTime.disabled = false;
      return;
  }
  const { days, hours, minutes, seconds } = convertMs(deltaTime);
  document.querySelector('[data-days]').textContent = addLeadingZero(days);
  document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
  document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
  document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);
 }

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
} 

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
  return { days, hours, minutes, seconds };
}

