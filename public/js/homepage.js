// const { default: Swal } = require("sweetalert2");

// const getStarted = () => {
//     if(logged_in === true) {
//         document.location.replace('/schedule');
//     } else {
//         Swal.fire({
//             title: 'User Access Error',
//             text: 'You must login or create an account first',
//             icon: 'error',
//             color: '#df2c14',
//             confirmButtonText: 'Got It!'
//         });
//     }
// }


const getStarted = () => {
    document.location.replace('/schedule');
}

document.querySelector('#getStarted').addEventListener('click', getStarted);

