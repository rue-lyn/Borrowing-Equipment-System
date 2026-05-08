document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const emailInput = document.getElementById('signupEmail');
    const fullNameInput = document.getElementById('fullName');
    const adviserNameInput = document.getElementById('adviserName');

    // 1. AUTOFILL LOGIC
    // Kapag pinili ang gmail sa choices, binabantayan natin kung may pumasok na value
    emailInput.addEventListener('change', () => {
        // Binibigyan natin ng kaunting delay (100ms) para hayaan ang browser na mag-autofill muna
        setTimeout(() => {
            if (adviserNameInput.value !== "" && fullNameInput.value === "") {
                // Kung aksidenteng napunta sa adviser name, ilipat natin sa full name
                fullNameInput.value = adviserNameInput.value;
                adviserNameInput.value = ""; // Linisin ang adviser name
            }
        }, 100);
    });

    // 2. REAL-TIME VALIDATION HELPER
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

    // 3. REAL-TIME LISTENERS
    fullNameInput.addEventListener('input', function() {
        validate(this, !this.value.trim().includes(" "));
    });

    adviserNameInput.addEventListener('input', function() {
        validate(this, !this.value.trim().includes(" "));
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

    // 4. SUBMIT LOGIC
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const errors = document.querySelectorAll('.error-border');

        if (errors.length > 0) {
            alert("Please fix the red fields first!");
        } else {
            localStorage.setItem('registeredEmail', emailInput.value);
            localStorage.setItem('registeredPass', pass.value);
            alert("Account Created!");
            window.location.href = "Log-In-page.html";
        }
    });

    // CASCADING DROPDOWN (Computing vs Engineering)
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
});