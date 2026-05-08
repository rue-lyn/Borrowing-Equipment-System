document.addEventListener('DOMContentLoaded', () => {
    const deptSelect = document.getElementById('collegeDept');
    const courseSelect = document.getElementById('courseSelect');
    const signupForm = document.getElementById('signupForm');

    // 1. DATABASE NG MGA COURSES (Eksaktong binigay mo)
    const coursesByDept = {
        "Computing": ["Computer Science", "Act Ad", "Nt"],
        "Engineering": ["Electrical Engineering", "Bisystem Engineering", "Mechanical Engineering", "Civil Engineering"]
    };

    // 2. DYNAMIC DROPDOWN LOGIC
    deptSelect.addEventListener('change', function() {
        // Linisin ang course dropdown muna
        courseSelect.innerHTML = '<option value="" disabled selected>Select Course</option>';

        const selectedDept = this.value;
        const courses = coursesByDept[selectedDept];

        if (courses) {
            courses.forEach(course => {
                const option = document.createElement('option');
                option.value = course;
                option.textContent = course;
                courseSelect.appendChild(option);
            });
        }
    });

    // 3. FORM SUBMISSION LOGIC
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Iwas refresh ng page

            const password = document.getElementById('pass').value;
            const confirmPassword = document.getElementById('confirmPass').value;

            // Password Validation
            if (password !== confirmPassword) {
                alert("Passwords do not match! Please check again.");
                return;
            }

            // Kapag success
            alert("Account Created Successfully! Welcome to SportsEQ.");

            /* REDIRECTION TO MAIN PART
               Lalabas ng 3 levels (Login-signup -> pages -> assets) para makita ang index.html sa root.
            */
            window.location.href = "../../../index.html";
        });
    }
});