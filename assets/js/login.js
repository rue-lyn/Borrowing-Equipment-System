document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Kunin ang tinype sa login boxes
            const email = document.getElementById('emailInput').value;
            const password = document.getElementById('passInput').value;

            // Kunin ang data mula sa localStorage (yung galing sa signup)
            const savedEmail = localStorage.getItem('registeredEmail');
            const savedPass = localStorage.getItem('registeredPass');

            // I-verify kung tugma
            if (email === savedEmail && password === savedPass) {
                alert("Login Successful! Welcome to SportsEQ.");
                // Papunta sa main index ng system
                window.location.href = "../../../index.html"; 
            } else {
                alert("Invalid Email or Password. Please use the account you registered.");
            }
        });
    }
});