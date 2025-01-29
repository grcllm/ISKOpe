<?php
require 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $studentNumber = $_POST['student_number'];
    $password = $_POST['password'];

    // Query to check if the user exists
    $query = "SELECT * FROM users WHERE student_number = ? AND password = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("ss", $studentNumber, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        session_start();
        $_SESSION['user'] = $result->fetch_assoc();
        header("Location: profile.php");
        exit;
    } else {
        $error = "Invalid login credentials!";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Login - ISKOpe</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="logo">ISKOpe</div>
    <div class="welcome-message">
        <h1>Welcome to ISKOpe</h1>
        <p>A lost and found system tailored for the entire PUP community.</p>
    </div>
    <div class="container">
        <div class="login-panel">
            <h1>Login</h1>
            <p class="login-subtext">Welcome back! Please login into your account.</p>
            <?php if (isset($error)) echo "<p style='color: red; text-align: center;'>$error</p>"; ?>
            <form method="POST" action="">
                <input type="text" name="student_number" placeholder="Student Number" required>
                <input type="password" name="password" placeholder="Password" required>
                <div class="form-options">
                    <div class="remember-me">
                        <input type="checkbox" id="remember" name="remember">
                        <label for="remember">Remember me</label>
                    </div>
                    <a href="#" class="forgot-password">Forgot password?</a>
                </div>
                <button type="submit">Sign In</button>
            </form>
            <a href="login-admin.php" class="admin-link">Log in as&nbsp;<span style="text-decoration: underline;">admin</span></a>
        </div>
    </div>
</body>
</html>
