// Function to get the value of a cookie by name
function getCookie(name) {
    let cookieArr = document.cookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
        let cookie = cookieArr[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

// Check if the 'token' cookie exists
const token = getCookie('token');

// If the token doesn't exist, redirect to the login page
if (!token) {
    window.location.href = '/login.html';
}
