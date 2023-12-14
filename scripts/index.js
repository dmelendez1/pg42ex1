document.addEventListener("DOMContentLoaded", () => {
    
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // get name &the selected role
        const userName = document.getElementById('nameInput').value;
        const userRole = document.querySelector('input[name="role"]:checked').value;

        // to make sure a name is actaully entered, if not an alert will pop
        if (userName.trim() === '') {
            alert('You MUST enter a name.');
            return;
        }

        // store it
        localStorage.setItem('userName', userName);
        localStorage.setItem('userRole', userRole);

        // send it to the info html
        window.location.href = "info.html";
    });
});
