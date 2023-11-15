const signupForm = document.querySelector('form');
console.log(signupForm);

signupForm.addEventListener('submit', (event) => {
    console.log(signupForm);
    event.preventDefault();
    signupForm.classList.remove('no-validate');
})
