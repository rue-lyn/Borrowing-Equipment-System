document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            // e.preventDefault() - pinipigilan nito ang pag-refresh ng page
            e.preventDefault();

            // Dito niyo pwedeng ipaliwanag sa defense na 
            // "The system captures the credentials and proceeds to the security layer."
            console.log("Login submitted, moving to verification...");
            
            // Redirect sa Verification Page
            window.location.href = 'Verification-page.html';
        });
    }
});