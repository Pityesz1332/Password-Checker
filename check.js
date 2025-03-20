document.addEventListener('DOMContentLoaded', function () {
    let  passwordInput = document.getElementById('password');
    let  strengthText = document.getElementById('strength');

    passwordInput.addEventListener('input', function () {
        let password = passwordInput.value;
        let strength = 0;

        if (password.length >= 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/\d]/.test(password)) strength++;
        if (/[\W_]/.test(password)) strength++;

        let feedback = ['Very weak', 'Weak', 'Mid', 'Strong', 'Very Strong'];
        let colors = ['weak', 'weak', 'medium', 'strong', 'strong'];

        strengthText.innerText = `Password strength: ${feedback[strength]}`;

        strengthText.className = "";
        strengthText.classList.add(colors[strength]);
    });
});