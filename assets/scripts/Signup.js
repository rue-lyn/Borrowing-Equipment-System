document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const emailInput = document.getElementById('signupEmail');
    const fullNameInput = document.getElementById('fullName');
    const adviserNameInput = document.getElementById('adviserName');

    // --- 1. ANTI-AUTOFILL HIJACK LOGIC ---
    let isSelectingEmail = false;

    // Kapag kinlik ang email field, i-set ang flag
    emailInput.addEventListener('mousedown', () => {
        isSelectingEmail = true;
        setTimeout(() => { isSelectingEmail = false; }, 1500); // 1.5 seconds window
    });

    // Bantayan ang Adviser field kung biglang nalagyan habang nag-e-email
    adviserNameInput.addEventListener('input', () => {
        if (isSelectingEmail) {
            if (fullNameInput.value === "") {
                fullNameInput.value = adviserNameInput.value;
            }
            adviserNameInput.value = ""; // Force clear ang adviser
        }
    });

    // --- 2. DYNAMIC DROPDOWN ---
    const deptSelect = document.getElementById('collegeDept');
    const courseSelect = document.getElementById('courseSelect');
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

    // --- 3. REAL-TIME VALIDATION WITH RED BORDERS & ICONS ---
    const validate = (input, condition) => {
        const icon = input.parentElement.querySelector('.error-icon');
        const text = input.parentElement.querySelector('.error-text');
        if (condition) {
            input.classList.add('error-border');
            if(icon) icon.style.display = 'block';
            if(text) text.style.display = 'block';
        } else {
            input.classList.remove('error-border');
            if(icon) icon.style.display = 'none';
            if(text) text.style.display = 'none';
        }
    };

    fullNameInput.addEventListener('input', function() {
        validate(this, !this.value.trim().includes(" "));
    });

    adviserNameInput.addEventListener('input', function() {
        if (!isSelectingEmail) { // Wag i-validate kung hinahack natin ang autofill
            validate(this, !this.value.trim().includes(" "));
        }
    });

    document.getElementById('studentID').addEventListener('input', function() {
        validate(this, this.value.length !== 9);
    });

    const pass = document.getElementById('pass');
    pass.addEventListener('input', function() {
        validate(this, this.value.length < 8 || this.value.length > 12);
    });

    document.getElementById('confirmPass').addEventListener('input', function() {
        validate(this, this.value !== pass.value);
    });

    // --- 4. FORM SUBMIT ---
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const errors = document.querySelectorAll('.error-border');

        if (errors.length > 0) {
            alert("Please fix the red fields before signing up.");
        } else {
            // Save to LocalStorage para sa Login
            localStorage.setItem('registeredEmail', emailInput.value);
            localStorage.setItem('registeredPass', pass.value);
            alert("Account Created Successfully!");
            window.location.href = "Log-In-page.html";
        }
    });
});