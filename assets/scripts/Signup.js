document.addEventListener('DOMContentLoaded', () => {
    const deptSelect = document.getElementById('collegeDept');
    const courseSelect = document.getElementById('courseSelect');

    // 1. Database of Courses (Exact as per your example)
    const coursesByDept = {
        "Computing": ["Computer Science", "Act Ad", "Nt"],
        "Engineering": ["Electrical Engineering", "Bisystem Engineering", "Mechanical Engineering", "Civil Engineering"]
    };

    // 2. Event Listener para sa pagbabago ng Department
    deptSelect.addEventListener('change', function() {
        // Linisin ang Course dropdown tuwing magpapalit ng Department
        courseSelect.innerHTML = '<option value="" disabled selected>Select Course</option>';

        // Kunin ang listahan base sa napiling value
        const selectedDept = this.value;
        const courses = coursesByDept[selectedDept];

        // 3. I-populate ang Course dropdown
        if (courses) {
            courses.forEach(course => {
                const option = document.createElement('option');
                option.value = course; // Value na ipapadala sa system
                option.textContent = course; // Text na makikita ng user
                courseSelect.appendChild(option);
            });
        }
    });

    // 4. Sign Up Form Logic (Redirecting to Dashboard/Main Part)
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const password = document.getElementById('pass').value;
            const confirmPass = document.getElementById('confirmPass').value;

            if (password !== confirmPass) {
                alert("Passwords do not match!");
                return;
            }

            alert("Account Successfully Created!");
            window.location.href = "../../../index.html"; // Papunta sa main part
        });
    }
});