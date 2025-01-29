
<?php
require_once '../models/User.php';

class UserController {
    private $userModel;

    public function __construct($conn) {
        $this->userModel = new User($conn);
    }

    public function login($data) {
        $studentNumber = $data['student_number'];
        $password = md5($data['password']); // Use MD5 hashing (or replace with bcrypt if needed)
        return $this->userModel->findByCredentials($studentNumber, $password);
    }
}
?>
