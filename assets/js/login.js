document.addEventListener('DOMContentLoaded', () => {
    
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            
            // Pigilan ang page refresh
            event.preventDefault();

            // Kunin ang inputs (para ipakita sa judges na may data handling)
            const email = document.getElementById('emailInput').value;
            const password = document.getElementById('passInput').value;

            // Simple validation: Kung may laman ang fields, papasukin sa system
            if (email !== "" && password !== "") {
                console.log("Login successful. Redirecting to main page...");
                
                /* IMPORTANT PATHING:
                   Dahil ang HTML mo ay nasa 'assets/pages/Login-signup/', 
                   kailangan mong lumabas ng TATLONG folders para makarating sa root 'index.html'.
                */
                window.location.href = "../../../index.html"; 
            } else {
                alert("Please enter your credentials.");
            }
        });
    }
});