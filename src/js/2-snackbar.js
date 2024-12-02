import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const inputDelay = document.querySelector('input[name="delay"]');
form.addEventListener('submit', makePromise);
let delay = null;
inputDelay.addEventListener('input', makeDelay);
console.log(delay);
function makeDelay(){
    delay = inputDelay.value;
   return delay;
}

function makePromise(event){
    event.preventDefault();
    // inputDelay.value = "";
 
    const radioBtn = document.querySelector('[name="state"]:checked').value;

    const promise = new Promise ((resolve, reject) =>{
               if (radioBtn === "fulfilled"){
                resolve(
                     iziToast.show({
                            title: '',
                            message: `✅ Fulfilled promise in ${delay}ms`
                               })
               );
            }else if (radioBtn === "rejected"){
                reject(
                   
                iziToast.show({
                    title: '',
                    message: `❌ Rejected promise in ${delay}ms`
                       })); 
            }
    })
    
    promise
    .then(value => {
        setTimeout(() =>{
           value
        }, delay)
        
    })
    .catch(value => {
        setTimeout(() =>{
            value
         }, delay)
    })
    .finally(() => {
        inputDelay.value = "" ;
        document.querySelector('[name="state"]').checked = false;
    });
}









// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";

// const form = document.querySelector('.form');
// let delay = document.querySelector('input[name="delay"]').value;

// form.addEventListener('submit', makePromise);

// function makePromise(event){
//     event.preventDefault();
    
//     const radioBtn = document.querySelector('input[name="state"]').value;

//     const promise = new Promise ((resolve, reject) =>{
           
//         if (radioBtn === "fulfilled"){
//                 resolve(
//                     setTimeout(() =>{
//                         iziToast.show({
//                             title: '',
//                             message: `✅ Fulfilled promise in ${result}ms`
//                                })
//                     }, delay)
//                );
//             }else if(radioBtn === "rejected"){
//                 reject(
//                     setTimeout(() =>{
//                 iziToast.show({
//                     title: '',
//                     message: `❌ Rejected promise in ${delay}ms`
//                        })}, delay)); 
//             }
//     })
    
//     promise
//     .then(value) => {
//         value
//     }
//     .catch(value) => {
//         value
//     }
//     .finally
// }











// let inputDelay = document.querySelector('input[name="delay"]').value;
// const state = document.querySelector('input[type="radio"]');
// const form = document.querySelector('.form');

// form.addEventListener('submit', makeNotification);

// function makeNotification(event) {
//     event.preventDefault();
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (state.checked) {
//                 resolve(inputDelay);
//             } else {
//                 reject(inputDelay);
//             }
//         }, inputDelay);
//     });

//     promise
//     .then(
//    (result) => {
//         iziToast.show({
//             title: '',
//             message: `✅ Fulfilled promise in ${result}ms`,
//                });
//     },
//     (result) => {
//         iziToast.show({
//             title: '',
//             message: '❌ Rejected promise in ${result}ms'
//                });
//     }
// );
// // .catch(error){
// //     iziToast.show({
// //         title: '',
// //         message: '❌ Rejected promise in ${result}ms'
// //            });
// // }

// form.reset();
// }