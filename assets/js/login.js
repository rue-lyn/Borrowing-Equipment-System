document.addEventListener('DOMContentLoaded', () => {
    
    // Kunin ang form gamit ang ID nito
    const loginForm = document.getElementById('loginForm');

    // Kapag pinindot ang Login button
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            
            // PIGILAN ANG PAGE NA MAG-REFRESH (Importante para sa defense!)
            event.preventDefault();

            // Kunin ang nilalaman ng inputs
            const email = document.getElementById('emailInput').value;
            const password = document.getElementById('passInput').value;

            // Simple check kung may laman (Defense logic)
            if (email !== "" && password !== "") {
                console.log("Credentials accepted. Redirecting to OTP...");
                
                // I-redirect ang user sa Verification Page
                window.location.href = "Verification-page.html";
            } else {
                alert("Please enter both email and password.");
            }
        });
    }

});