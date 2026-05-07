document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Kunin ang form gamit ang ID nito
    const loginForm = document.getElementById('loginForm');

    // 2. Siguraduhin na nag-e-exist ang form sa page bago patakbuhin ang code
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            
            // Pipigilan nito ang default na pag-refresh ng page
            event.preventDefault();

            // Kunin ang nilalaman ng email at password inputs
            const email = document.getElementById('emailInput').value;
            const password = document.getElementById('passInput').value;

            // Simple validation para sa defense
            if (email !== "" && password !== "") {
                console.log("Credentials accepted. Redirecting...");
                
                // I-redirect ang user sa Verification Page
                window.location.href = 'Verification-page.html';
            } else {
                alert("Please complete both email and password fields.");
            }
        });
    }

});