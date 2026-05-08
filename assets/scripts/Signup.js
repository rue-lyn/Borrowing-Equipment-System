document.addEventListener('DOMContentLoaded', () => {
    const deptSelect = document.getElementById('collegeDept');
    const courseSelect = document.getElementById('courseSelect');
    const signupForm = document.getElementById('signupForm');

    // Object list ng mga courses bawat department
    const courseData = {
        "CCS": ["BS Information Technology", "BS Computer Science"],
        "COE": ["BS Civil Engineering", "BS Mechanical Engineering", "BS Electrical Engineering"],
        "CED": ["BEEd Elementary Education", "BSEd Secondary Education"],
        "CON": ["BS Nursing"]
    };

    // Function para mag-update ng courses
    deptSelect.addEventListener('change', function() {
        // 1. Linisin muna ang kasalukuyang courses
        courseSelect.innerHTML = '<option value="" disabled selected>Select Course</option>';

        // 2. Kunin ang napiling department key (e.g., "CCS")
        const selectedDept = this.value;
        const courses = courseData[selectedDept];

        // 3. I-loop ang mga courses at ilagay sa dropdown
        if (courses) {
            courses.forEach(course => {
                const option = document.createElement('option');
                option.value = course;
                option.textContent = course;
                courseSelect.appendChild(option);
            });
        }
    });

    // Sign Up Submission Logic
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const password = document.getElementById('pass').value;
            const confirmPassword = document.getElementById('confirmPass').value;

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            alert("Account Created Successfully!");
            window.location.href = "../../../index.html";
        });
    }
});