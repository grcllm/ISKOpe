
<?php
class Item {
    private $conn;

    public function __construct($conn) {
        $this->conn = $conn;
    }

    public function getAllItems() {
        $query = "SELECT * FROM items";
        $result = $this->conn->query($query);
        return $result->fetch_all(MYSQLI_ASSOC);
    }
}
?>
