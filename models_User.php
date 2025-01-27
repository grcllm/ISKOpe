
<?php
class User {
    private $conn;

    public function __construct($conn) {
        $this->conn = $conn;
    }

    public function findByCredentials($studentNumber, $password) {
        $query = "SELECT * FROM users WHERE student_number = ? AND password = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("ss", $studentNumber, $password);
        $stmt->execute();
        return $stmt->get_result()->fetch_assoc();
    }
}
?>
