// Check the value of the "admin" cookie
var cookies = document.cookie.split(';');
var isAdmin = false;

for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.indexOf("admin=") === 0) {
        if (cookie.substring("admin=".length) === "1") {
            isAdmin = true;
            break;
        }
    }
}

if (isAdmin) {
    // Display a message for admin (admin == 1)
    alert("Welcome, Administrator! You have special access.");
} else {
    // Display a message for non-admin (admin == 0)
    alert("Welcome, User. You do not have admin privileges.");
}
