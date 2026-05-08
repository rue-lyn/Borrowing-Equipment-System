document.addEventListener('DOMContentLoaded', () => {
    const deptSelect = document.getElementById('collegeDept');
    const courseSelect = document.getElementById('courseSelect');
    const signupForm = document.getElementById('signupForm');

    // 1. DATABASE NG MGA COURSES
    const coursesByDept = {
        "College of Computing Studies": ["Computer Science", "Act Ad", "Nt"],
        "College of Engineering": ["Electrical Engineering", "Bisystem Engineering", "Mechanical Engineering", "Civil Engineering"],
        "College of Education": ["BEEd Elementary Education", "BSEd Secondary Education"],
        "College of Nursing": ["BS Nursing"]
    };

    // 2. LOGIC PARA SA DYNAMIC DROPDOWN
    deptSelect.addEventListener('change', function() {
        courseSelect.innerHTML = '<option value="" disabled selected>Select Course</option>';
        const courses = coursesByDept[this.value];
        if (courses) {
            courses.forEach(c => {
                let opt = document.createElement('option');
                opt.value = c; 
                opt.textContent = c;
                courseSelect.appendChild(opt);
            });
        }
    });

    // 3. FORM VALIDATION AT SUBMISSION
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Kunin ang mga HTML elements
        const email = document.getElementById('signupEmail');
        const fullName = document.getElementById('fullName');
        const adviserName = document.getElementById('adviserName');
        const studentID = document.getElementById('studentID');
        const password = document.getElementById('pass');
        const confirmPass = document.getElementById('confirmPass');

        // Reset: Tanggalin ang mga error color (red border) bago mag-check ulit
        const inputs = [fullName, adviserName, studentID, password, confirmPass];
        inputs.forEach(input => input.classList.remove('error-border'));

        // --- MGA VALIDATION CHECKS ---

        // A. Full Name Check (Dapat may space/First & Last Name)
        if (!fullName.value.trim().includes(" ")) {
            showError(fullName, "Please enter your full name (First name and Last name).");
            return;
        }

        // B. Adviser Name Check
        if (!adviserName.value.trim().includes(" ")) {
            showError(adviserName, "Please enter your adviser's full name (First name and Last name).");
            return;
        }

        // C. Student ID Check (Exact 9 Digits)
        if (studentID.value.length < 9) {
            showError(studentID, "The ID is not enough (Must be exactly 9 digits).");
            return;
        } else if (studentID.value.length > 9) {
            showError(studentID, "The ID exceed (Must be exactly 9 digits).");
            return;
        }

        // D. Password Length Check (8-12 characters)
        if (password.value.length < 8 || password.value.length > 12) {
            showError(password, "Password must be 8-12 characters long.");
            return;
        }

        // E. Password Match Check
        if (password.value !== confirmPass.value) {
            showError(confirmPass, "Passwords do not match!");
            return;
        }

        // --- KUNG LAHAT AY TAMA (SUCCESS) ---
        
        // I-save sa LocalStorage para mabasa ng Login Page
        localStorage.setItem('registeredEmail', email.value);
        localStorage.setItem('registeredPass', password.value);

        alert("Account Created Successfully! You can now login.");
        
        // Diretso sa Login Page
        window.location.href = "Log-In-page.html";
    });

    // FUNCTION PARA SA ERROR (RED BORDER AT MESSAGE)
    function showError(inputElement, message) {
        inputElement.classList.add('error-border'); // Ito yung magpapakulay pula sa border
        alert(message); // Explanation kung bakit error
        inputElement.focus(); // Itatapat ang cursor sa may error na box
    }
});