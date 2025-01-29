
<?php
// Database connection settings
$host = "localhost";
$dbname = "iskope"; // Replace with your database name
$username = "root"; // Default username for XAMPP
$password = "";     // Default password for XAMPP

// Create a connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
