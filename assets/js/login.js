document.addEventListener('DOMContentLoaded', () => {
    
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            
            event.preventDefault(); // Stop refresh

            const email = document.getElementById('emailInput').value;
            const password = document.getElementById('passInput').value;

            // Simple validation
            if (email !== "" && password !== "") {
                console.log("Redirecting to verification...");
                
                // Dahil ang HTML ay nasa pages/Login-signup/, 
                // at ang Verification-page.html ay nandun din:
                window.location.href = "Verification-page.html";
            } else {
                alert("Please enter both email and password.");
            }
        });
    }
});