document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const deptSelect = document.getElementById('collegeDept');
    const courseSelect = document.getElementById('courseSelect');

    // 1. Course Data
    const coursesByDept = {
        "College of Computing Studies": ["Computer Science", "Act Ad", "Nt"],
        "College of Engineering": ["Electrical Engineering", "Bisystem Engineering", "Mechanical Engineering", "Civil Engineering"]
    };

    // 2. Cascading Dropdown
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

    // 3. Helper Function for Real-time Validation
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

    // 4. Input Listeners (Real-time checks)
    document.getElementById('fullName').addEventListener('input', function() {
        validate(this, !this.value.trim().includes(" "));
    });

    document.getElementById('adviserName').addEventListener('input', function() {
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

    // 5. Final Submit
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const errors = document.querySelectorAll('.error-border');

        if (errors.length > 0) {
            alert("Please fix the red fields first!");
        } else {
            // Save for login
            localStorage.setItem('registeredEmail', document.getElementById('signupEmail').value);
            localStorage.setItem('registeredPass', pass.value);
            
            alert("Account Created!");
            window.location.href = "Log-In-page.html";
        }
    });
});