const letsDoThis = () => {
    Swal.fire({
        title: 'Unable to Access',
        text: 'You must login or create an account first!',
    });
}

const getStartedBtn = document.querySelector('.get-started');

getStartedBtn.addEventListener('click', letsDoThis);