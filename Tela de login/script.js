document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginFormContainer = document.getElementById('login-form-container');
    const successMessage = document.getElementById('success-message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === 'Sandro' && password === '123') {
            loginFormContainer.style.opacity = '0';
            loginFormContainer.style.transform = 'translateY(-20px)';
            loginFormContainer.style.pointerEvents = 'none';

            setTimeout(() => {
                loginFormContainer.style.display = 'none';
                successMessage.style.display = 'block';
                setTimeout(() => {
                    successMessage.classList.add('visible');
                }, 50);
            }, 500);
        } else {
            alert('Usuário ou senha incorretos. Tente novamente.');
            usernameInput.value = '';
            passwordInput.value = '';
            usernameInput.focus();
        }
    });
});