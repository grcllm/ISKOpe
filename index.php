
<?php
require 'db.php';

$query = "SELECT * FROM items ORDER BY date DESC LIMIT 5";
$result = $conn->query($query);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ISKOpe - Home</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="logo">ISKOpe</div>
        <div class="search-bar-container">
            <input type="text" class="search-bar" placeholder="Search for lost items...">
        </div>
        <div class="nav-buttons">
            <a href="about.html" class="nav-button about-us">About Us</a>
            <a href="profile.php">
                <img src="assets/Profile White.png" alt="Profile" class="profile-icon">
            </a>
        </div>
    </header>
    <main>
        <section class="most-recent">
            <h2>Most Recent</h2>
            <div class="recent-items">
                <?php if ($result->num_rows > 0): ?>
                    <?php while ($row = $result->fetch_assoc()): ?>
                        <div class="item">
                            <h3><?= htmlspecialchars($row['item_name']) ?></h3>
                            <p><?= htmlspecialchars($row['category']) ?></p>
                            <p><?= htmlspecialchars($row['date']) ?></p>
                        </div>
                    <?php endwhile; ?>
                <?php else: ?>
                    <p class="no-items">No items have been posted yet.</p>
                <?php endif; ?>
            </div>
        </section>
        <section class="categories">
            <h2>Categories</h2>
            <div class="category-grid">
                <div onclick="location.href='electronicspanel.php';" class="category-item">
                    <p>Electronics</p>
                </div>
                <div onclick="location.href='bagspanel.php';" class="category-item">
                    <p>Bags</p>
                </div>
                <!-- Add more categories as needed -->
            </div>
        </section>
    </main>
</body>
</html>
