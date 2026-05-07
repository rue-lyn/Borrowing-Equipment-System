document.getElementById('loginForm').addEventListener('submit', function(event) {
    // 1. Stop the form from submitting automatically
    event.preventDefault();

    // 2. Get the values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Reset errors
    emailError.innerText = "";
    passwordError.innerText = "";

    let hasError = false;

    // 3. Verification Logic
    // Check if email is a valid format
    if (!email.includes("@")) {
        emailError.innerText = "Please enter a valid email address.";
        hasError = true;
    }

    // Check if password is long enough
    if (password.length < 8) {
        passwordError.innerText = "Password must be at least 8 characters.";
        hasError = true;
    }

    // 4. If everything is correct
    if (!hasError) {
        alert("Verification Successful! Redirecting...");
        
        // Go up 3 levels to find index.html at the root
        window.location.href = "../../../index.html"; 
    }
});