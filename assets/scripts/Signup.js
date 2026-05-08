document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Kunin ang mga elements
        const email = document.getElementById('signupEmail');
        const fullName = document.getElementById('fullName');
        const adviserName = document.getElementById('adviserName');
        const studentID = document.getElementById('studentID');
        const password = document.getElementById('pass');
        const confirmPass = document.getElementById('confirmPass');

        // Reset muna natin ang mga kulay (tanggalin ang pula bago mag-check ulit)
        [fullName, adviserName, studentID, password, confirmPass].forEach(input => {
            input.classList.remove('error-border');
        });

        // --- VALIDATION LOGIC ---

        // 1. Full Name & Adviser Name (Check if First and Last Name exists)
        if (!fullName.value.trim().includes(" ")) {
            showError(fullName, "Please enter your full name (First and Last name).");
            return;
        }
        if (!adviserName.value.trim().includes(" ")) {
            showError(adviserName, "Please enter your adviser's full name.");
            return;
        }

        // 2. Student ID (Exactly 9 digits)
        if (studentID.value.length < 9) {
            showError(studentID, "The ID is not enough (Must be 9 digits).");
            return;
        } else if (studentID.value.length > 9) {
            showError(studentID, "The ID exceed (Must be 9 digits).");
            return;
        }

        // 3. Password Length (8-12)
        if (password.value.length < 8 || password.value.length > 12) {
            showError(password, "Password must be 8-12 characters long.");
            return;
        }

        // 4. Password Match
        if (password.value !== confirmPass.value) {
            showError(confirmPass, "Passwords do not match!");
            return;
        }

        // Kung lahat ay tama:
        localStorage.setItem('registeredEmail', email.value);
        localStorage.setItem('registeredPass', password.value);
        alert("Account Created Successfully!");
        window.location.href = "Log-In-page.html";
    });

    // Function para magkulay pula at mag-explain
    function showError(inputElement, message) {
        inputElement.classList.add('error-border'); // Gagawing pula ang border
        alert(message); // Magpapakita ng explanation
        inputElement.focus(); // Itatapat ang cursor sa may error
    }
});