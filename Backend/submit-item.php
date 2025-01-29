
<?php
require 'db.php';
session_start();

if (!isset($_SESSION['user'])) {
    header("Location: login.php");
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $itemName = $_POST['item_name'];
    $category = $_POST['category'];
    $date = $_POST['date'];
    $status = $_POST['status'];
    $location = $_POST['location'];
    $userId = $_SESSION['user']['id'];

    $query = "INSERT INTO items (user_id, item_name, category, date, status, location) VALUES (?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("isssss", $userId, $itemName, $category, $date, $status, $location);
    if ($stmt->execute()) {
        $success = "Item submitted successfully!";
    } else {
        $error = "Failed to submit the item.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Submit Item - ISKOpe</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="logo">ISKOpe</div>
        <a href="index.php">Home</a>
    </header>
    <main>
        <h1>Submit an Item</h1>
        <?php if (isset($success)) echo "<p style='color: green;'>$success</p>"; ?>
        <?php if (isset($error)) echo "<p style='color: red;'>$error</p>"; ?>
        <form method="POST" action="">
            <label for="item_name">Item Name:</label>
            <input type="text" id="item_name" name="item_name" required>

            <label for="category">Category:</label>
            <select id="category" name="category" required>
                <option value="Electronics">Electronics</option>
                <option value="Wallets">Wallets</option>
                <option value="Bags">Bags</option>
                <option value="IDs">IDs</option>
                <option value="Documents">Documents</option>
                <option value="Books">Books</option>
                <option value="Clothing">Clothing</option>
                <option value="Fashion Accessories">Fashion Accessories</option>
                <option value="Jewelry">Jewelry</option>
                <option value="Others">Others</option>
            </select>

            <label for="date">Date:</label>
            <input type="date" id="date" name="date" required>

            <label for="status">Status:</label>
            <select id="status" name="status" required>
                <option value="Lost">Lost</option>
                <option value="Found">Found</option>
            </select>

            <label for="location">Location:</label>
            <input type="text" id="location" name="location" required>

            <button type="submit">Submit</button>
        </form>
    </main>
</body>
</html>
