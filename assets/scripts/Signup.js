document.addEventListener('DOMContentLoaded', () => {
    const deptSelect = document.getElementById('collegeDept');
    const courseSelect = document.getElementById('courseSelect');
    const signupForm = document.getElementById('signupForm');

    // 1. Dynamic Dropdown Data
    const coursesByDept = {
        "College of Computing Studies": ["Computer Science", "Act Ad", "Nt"],
        "College of Engineering": ["Electrical Engineering", "Bisystem Engineering", "Mechanical Engineering", "Civil Engineering"]
    };

    deptSelect.addEventListener('change', function() {
        courseSelect.innerHTML = '<option value="" disabled selected>Select Course</option>';
        const courses = coursesByDept[this.value];
        if (courses) {
            courses.forEach(c => {
                let opt = document.createElement('option');
                opt.value = c; opt.textContent = c;
                courseSelect.appendChild(opt);
            });
        }
    });

    // 2. Validation and Registration Logic
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get Values
        const email = document.getElementById('signupEmail').value;
        const fullName = document.getElementById('fullName').value.trim();
        const adviserName = document.getElementById('adviserName').value.trim();
        const studentID = document.getElementById('studentID').value;
        const password = document.getElementById('pass').value;
        const confirmPass = document.getElementById('confirmPass').value;

        // A. Full Name Validation (Check if there are at least two words)
        const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+/;
        if (!nameRegex.test(fullName)) {
            alert("Please enter your full name (First name and Last name).");
            return;
        }
        if (!nameRegex.test(adviserName)) {
            alert("Please enter your adviser's full name (First name and Last name).");
            return;
        }

        // B. Student ID Validation (Must be exactly 9 digits)
        if (studentID.length < 9) {
            alert("The ID is not enough (Must be 9 digits).");
            return;
        } else if (studentID.length > 9) {
            alert("The ID exceed (Must be 9 digits).");
            return;
        }

        // C. Password Length (8-12 characteristics)
        if (password.length < 8 || password.length > 12) {
            alert("Password must be between 8 to 12 characters.");
            return;
        }

        // D. Password Match
        if (password !== confirmPass) {
            alert("Passwords do not match!");
            return;
        }

        // E. STORAGE LOGIC (Saving credentials for Login)
        localStorage.setItem('registeredEmail', email);
        localStorage.setItem('registeredPass', password);

        alert("Account Created Successfully! Redirecting to Login...");
        window.location.href = "Log-In-page.html";
    });
});