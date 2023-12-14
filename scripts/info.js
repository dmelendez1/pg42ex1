document.addEventListener("DOMContentLoaded", () => {
    // get the stored name & role
    const userName = localStorage.getItem('userName');
    const userRole = localStorage.getItem('userRole');

    // display name and role if avialbale
    if (userName && userRole) {
        document.getElementById('name').innerText = userName;
        document.getElementById('role').innerText = userRole === 'student' ? 'Student' : 'Instructor';
    }
});
