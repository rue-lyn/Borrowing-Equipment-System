document.addEventListener('DOMContentLoaded', () => {
    
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            
            // Pigilan ang page refresh
            event.preventDefault();

            // Kunin ang inputs (para ipakita sa judges na may data handling)
            const email = document.getElementById('emailInput').value;
            const password = document.getElementById('passInput').value;

            const savedEmail = localStorage.getItem('registeredEmail');
            const savedPass = localStorage.getItem('registeredPass');

            // Simple validation: Kung may laman ang fields, papasukin sa system
            if (emailInput === savedEmail && passInput === savedPass) {
                alert("Login Successful! Welcome to SportsEQ.");
                window.location.href = "../../../index.html"; 
            } else {
                alert("Invalid Email or Password. Please use the account you registered.");
            }
        });
    }
});
