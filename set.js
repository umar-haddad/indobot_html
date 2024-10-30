document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    validateForm();
});

function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const terms = document.getElementById('terms').checked;

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const termsError = document.getElementById('termsError');

   
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    termsError.textContent = '';

    let isValid = true;

    
    if (username.trim() === '') {
        usernameError.textContent = 'Username harus diisi.';
        isValid = false;
    }

  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.trim() === '') {
        emailError.textContent = 'Email harus diisi.';
        isValid = false;
    } else if (!email.match(emailPattern)) {
        emailError.textContent = 'Format email tidak valid.';
        isValid = false;
    }

   
    if (password.trim() === '') {
        passwordError.textContent = 'Password harus diisi.';
        isValid = false;
    } else if (password.length < 12) {
        passwordError.textContent = 'Password minimal 12 karakter.';
        isValid = false;
    }

   
    if (!terms) {
        termsError.textContent = 'Anda harus menyetujui syarat dan ketentuan.';
        isValid = false;
    }

    const formMessage = document.getElementById('formMessage');
    const messageText = document.getElementById('messageText'); 

    if (isValid) {
        messageText.textContent = 'Terima kasih sudah mengisi 😘';
        messageText.style.color = 'green';
        formMessage.style.display = 'block';
    } else {
        messageText.textContent = 'Lengkapi dulu';
        messageText.style.color = 'red';
        formMessage.style.display = 'block'; 
    }
}
