
<?php
require_once '../models/Item.php';

class ItemController {
    private $itemModel;

    public function __construct($conn) {
        $this->itemModel = new Item($conn);
    }

    public function getAllItems() {
        return $this->itemModel->getAllItems();
    }
}
?>
