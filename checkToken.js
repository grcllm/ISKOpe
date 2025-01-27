// Check if the 'token' exists in localStorage
const token = localStorage.getItem('token');

// If the token doesn't exist, redirect to the login page
if (!token) {
    window.location.href = '/login.html';
}
