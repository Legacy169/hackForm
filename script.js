window.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('exampleInputUsername');
    const passwordInput = document.getElementById('exampleInputPassword');
    const button = document.getElementById('submit-btn');
    const password = "1234";
    const username = "admin";


    button.addEventListener('click', () => {
        if (usernameInput.value === username && passwordInput.value === password) {
            document.querySelector('form').remove();
        }

        else {
            usernameInput.value = null;
            passwordInput.value = null;
        }
    })
})