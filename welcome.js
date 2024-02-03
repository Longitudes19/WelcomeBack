function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var agreeTerms = document.getElementById('agreeTerms').checked;

    if (email === '' || password === '' || !agreeTerms) {
        alert('Please fill in all required fields.');
    } else {
        alert('Login successful!');
    }
}

function register() {
    alert('Redirect to registration page');
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var togglePasswordBtn = document.querySelector('.toggle-password');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordBtn.textContent = '👁️/';
    } else {
        passwordInput.type = 'password';
        togglePasswordBtn.textContent = '👁️';
    }
}
