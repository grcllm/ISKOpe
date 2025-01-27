
<?php
require_once '../config/db.php';
require_once '../controllers/UserController.php';
require_once '../controllers/ItemController.php';

header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];
$action = $_GET['action'] ?? '';

$conn = $GLOBALS['conn'];
$userController = new UserController($conn);
$itemController = new ItemController($conn);

if ($method === 'POST' && $action === 'login') {
    $data = json_decode(file_get_contents("php://input"), true);
    $user = $userController->login($data);

    if ($user) {
        echo json_encode(['success' => true, 'user' => $user]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Invalid credentials']);
    }
} elseif ($method === 'GET' && $action === 'items') {
    $items = $itemController->getAllItems();
    echo json_encode(['success' => true, 'items' => $items]);
}
?>
