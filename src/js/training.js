import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const btn = document.querySelector('[data-start]');
let userSelectedDate = null;
let interval;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      const selectedDate = selectedDates[0];
      
      if (selectedDate <= new Date()) {
           iziToast.warning({
          title: 'Caution',
          message: 'Please choose a date in the future',
        });
        btn.disabled = true;
      } else {
        userSelectedDate = selectedDate;
        btn.disabled = false;
      }
  },
};

flatpickr('#datetime-picker', options);

btn.addEventListener('click', function () {
    if (userSelectedDate) {
      const timeDifference = userSelectedDate - new Date();
      const { days, hours, minutes, seconds } = convertMs(timeDifference);
        (days, hours, minutes, seconds);
        btn.disabled = true;

      interval = setInterval(() => {
        const { days, hours, minutes, seconds } = convertMs(userSelectedDate - new Date());
        updateTimer(days, hours, minutes, seconds);
      }, 1000);
    }
});

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

 function updateTimer(days, hours, minutes, seconds) {
    document.querySelector('[data-days]').textContent = addLeadingZero(days);
    document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
    document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
    document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);

    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(interval);
      iziToast.success({
        title: `Success`,
        message: `Timer has finished!`
      });
    }
  }

  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  } 



// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";


// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";

// const timer = document.querySelector('.timer');
// const inputTime = document.querySelector('#datetime-picker');
// const startBtn = document.querySelector('button[data-start]')
// let userSelectedDate;
// let interval; 
// function addLeadingZero(value){
// return String(value).padStart(2, '0')
// }

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     const selectedDate = selectedDates[0];
//     if (selectedDates[0] <= new Date){
//       iziToast.show({
//                   title: '',
//                   message: 'Please choose a date in the future'
//               });
//               userSelectedDate = null;
//               startBtn.desabled = true;
//     }
//     userSelectedDate = selectedDate[0];
//     startBtn.desabled = false;
// console.log(userSelectedDate);
//   },
// };

// flatpickr("#datetime-picker", options);

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// function countdown(){
//   if (!userSelectedDate){
//     return
//   };
//   const timeNow = new Date();
//    const deltaTime = userSelectedDate - timeNow;
//    if (deltaTime <= 0){
//     clearInterval(interval);
//    } else {
//     const { days, hours, mins, sec } = convertMs(deltaTime);
//     const countDays = addLeadingZero(days);
//     const countHours = addLeadingZero(hours);
//     const countMins = addLeadingZero(mins);
//     const countSec = addLeadingZero(sec)
//    }


// }





// // let userSelectedDate = null;
// // let currentTime = new Date; 
// // let deltaTime = null;
// // const startBtn = document.querySelector("button[data-start]");
// // const inputTime = document.querySelector("#datetime-picker");

// // const options = {
// //   enableTime: true,
// //   time_24hr: true,
// //   defaultDate: new Date(),
// //   minuteIncrement: 1,
// //   onClose: function(selectedDates) { 
        
// //     if (selectedDates[0].getTime() <= currentTime){
// //       iziToast.show({
// //           title: '',
// //           message: 'Please choose a date in the future'
// //       });
// //       startBtn.disabled = true;
// //      }else {
// //       startBtn.disabled = false;
// //       userSelectedDate = selectedDates[0];
// //      deltaTime = userSelectedDate - currentTime;
        
// //      }
     
// //    },
// // };

// // flatpickr("#datetime-picker", options);



// // function convertMs(ms) {
// //   const second = 1000;
// //   const minute = second * 60;
// //   const hour = minute * 60;
// //   const day = hour * 24;

// //   const days = Math.floor(ms / day);
// //   const hours = Math.floor((ms % day) / hour);
// //   const minutes = Math.floor(((ms % day) % hour) / minute);
// //   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

// //   return { days, hours, minutes, seconds };
// // }

// // console.log(convertMs(deltaTime));

// // console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// // console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// // console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}





// // // function convertMs(ms) {
// // //     // Number of milliseconds per unit of time
// // //     const second = 1000;
// // //     const minute = second * 60;
// // //     const hour = minute * 60;
// // //     const day = hour * 24;
  
// // //     // Remaining days
// // //     const days = Math.floor(ms / day);
// // //     // Remaining hours
// // //     const hours = Math.floor((ms % day) / hour);
// // //     // Remaining minutes
// // //     const minutes = Math.floor(((ms % day) % hour) / minute);
// // //     // Remaining seconds
// // //     const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
// // //     return { days, hours, minutes, seconds };
// // //   }
  
// // // //   console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// // // //   console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// // // //   console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}




import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

  const delay = parseInt(this.querySelector('[name="delay"]').value, 10);
  const state = this.querySelector('[name="state"]:checked').value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

    promise.then(
    (result) => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${result}ms`,
      });
    
    },
    (result) => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${result}ms`,
      });
    }
    ); 

    form.reset();
})
