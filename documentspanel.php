
<?php
require 'db.php';

$category = "Documentspanel";
$query = "SELECT * FROM items WHERE category = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("s", $category);
$stmt->execute();
$result = $stmt->get_result();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Documentspanel - ISKOpe</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="logo">ISKOpe</div>
        <a href="index.php">Home</a>
    </header>
    <main>
        <h1>Documentspanel</h1>
        <div class="items-grid">
            <?php if ($result->num_rows > 0): ?>
                <?php while ($row = $result->fetch_assoc()): ?>
                    <div class="item">
                        <h3><?= htmlspecialchars($row['item_name']) ?></h3>
                        <p>Location: <?= htmlspecialchars($row['location']) ?></p>
                        <p>Date: <?= htmlspecialchars($row['date']) ?></p>
                    </div>
                <?php endwhile; ?>
            <?php else: ?>
                <p class="no-items">No items found.</p>
            <?php endif; ?>
        </div>
    </main>
</body>
</html>
