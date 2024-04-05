window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("userForm").addEventListener("submit", userType);
});

function userType(event) {
    event.preventDefault(); // Prevent form submission

    // Get the selected value of the userType dropdown
    var userType = document.getElementById("userType").value;

    // Redirect based on the selected value
    switch (userType) {
        case "coach":
            window.location.href = "coachhomepage.html";
            break;
        case "member":
            window.location.href = "member.html";
            break;
        case "admin":
            window.location.href = "staffhomepage.html";
            break;
        case "treasurer":
            window.location.href = "treasurer.html";
            break;
        default:
            // Handle invalid selection
            alert("Please select a valid user type.");
            break;
    }
}
