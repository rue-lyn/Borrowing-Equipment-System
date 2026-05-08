document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const emailInput = document.getElementById('signupEmail');
    const fullNameInput = document.getElementById('fullName');
    const adviserNameInput = document.getElementById('adviserName');
    const deptSelect = document.getElementById('collegeDept');
    const courseSelect = document.getElementById('courseSelect');

    const coursesByDept = {
        "College of Agriculture (CA)": ["BS in Agriculture", "BS in Agricultural and Biosystems Engineering"],
        "College of Architecture (CA)": ["BS in Architecture"],
        "College of Asian and Islamic Studies (CAIS)": ["AB in Asian Studies", "AB in Islamic Studies"],
        "College of Computing Studies (CCS)": ["BS in Computer Science", "BS in Information Technology", "Associate in Computer Technology (ACT)"],
        "College of Criminal Justice Education (CCJE)": ["BS in Criminology"],
        "College of Engineering (CE)": ["BS in Civil Engineering", "BS in Electrical Engineering", "BS in Mechanical Engineering", "BS in Geodetic Engineering", "BS in Industrial Engineering", "BS in Sanitary Engineering"],
        "College of Forestry and Environmental Studies (CFES)": ["BS in Forestry", "BS in Environmental Science"],
        "College of Home Economics (CHE)": ["BS in Food Technology", "BS in Nutrition and Dietetics", "BS in Home Economics", "BS in Hospitality Management", "BS in Tourism Management"],
        "College of Liberal Arts (CLA)": ["AB in English Language", "AB in Political Science", "AB in Psychology", "AB in Mass Communication", "AB in Philosophy", "AB in History", "AB in Sociology"],
        "College of Nursing (CN)": ["BS in Nursing"],
        "College of Public Administration and Development Studies (CPADS)": ["BS in Public Administration"],
        "College of Science and Mathematics (CSM)": ["BS in Biology", "BS in Chemistry", "BS in Mathematics", "BS in Physics", "BS in Statistics"],
        "College of Social Work and Community Development (CSWCD)": ["BS in Social Work", "BS in Community Development"],
        "College of Teacher Education (CTE)": ["Bachelor of Elementary Education (BEEd)", "Bachelor of Secondary Education (BSEd)", "Bachelor of Early Childhood Education (BECEd)", "Bachelor of Special Needs Education (BSNEd)", "Bachelor of Technical-Vocational Teacher Education (BTVTED)"],
        "College of Sports and Physical Education (CSPE)": ["Bachelor of Physical Education (BPEd)", "BS in Exercise and Sports Sciences (BSESS)"]
    };

    // 1. Cascading Dropdown
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

    // 2. Anti-Autofill Hijack
    let isSelectingEmail = false;
    emailInput.addEventListener('mousedown', () => {
        isSelectingEmail = true;
        setTimeout(() => { isSelectingEmail = false; }, 1500); 
    });

    adviserNameInput.addEventListener('input', () => {
        if (isSelectingEmail) {
            if (fullNameInput.value === "") fullNameInput.value = adviserNameInput.value;
            adviserNameInput.value = "";
        }
    });

    // 3. Real-time Validation Helper
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

    // Listeners
    fullNameInput.addEventListener('input', function() { validate(this, !this.value.trim().includes(" ")); });
    adviserNameInput.addEventListener('input', function() { if(!isSelectingEmail) validate(this, !this.value.trim().includes(" ")); });
    document.getElementById('studentID').addEventListener('input', function() { validate(this, this.value.length !== 9); });
    const pass = document.getElementById('pass');
    pass.addEventListener('input', function() { validate(this, this.value.length < 8 || this.value.length > 12); });
    document.getElementById('confirmPass').addEventListener('input', function() { validate(this, this.value !== pass.value); });

    // 4. Final Submit
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (document.querySelectorAll('.error-border').length > 0) {
            alert("Please fix the errors first!");
        } else {
            localStorage.setItem('registeredEmail', emailInput.value);
            localStorage.setItem('registeredPass', pass.value);
            localStorage.setItem('isVerified', 'false'); // Pending Admin Approval
            alert("Account created! Redirecting for Admin Verification...");
            window.location.href = "Verification-page.html";
        }
    });
});