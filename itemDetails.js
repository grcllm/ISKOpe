document.addEventListener('DOMContentLoaded', function () {
    // Get the item ID from the URL query string
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get('id');

    // If no ID is found, show an error and stop further execution
    if (!itemId) {
        alert('Item not found.');
        return;
    }

    // API URL for fetching the item details
    const apiUrl = `http://127.0.0.1:8000/api/items/${itemId}`;

    // Fetch the item details
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.item) {
                const item = data.item;
                populateItemDetails(item);
            } else {
                alert('Item not found.');
            }
        })
        .catch(error => {
            console.error('Error fetching item details:', error);
            alert('An error occurred while fetching the item details.');
        });
});

// Function to populate the item details on the page
function populateItemDetails(item) {
    document.getElementById('item-name').textContent = item.name;
    document.getElementById('item-status').textContent = `Status: ${item.status}`;
    document.getElementById('item-category').textContent = `Category: ${item.category}`;
    document.getElementById('item-date').textContent = `Date: ${item.date_status}`;
    document.getElementById('item-time').textContent = item.time_status ? `Time: ${item.time_status}` : 'Time: N/A';
    document.getElementById('item-place').textContent = `Place Last Seen: ${item.place_last_seen}`;
    document.getElementById('item-pickup').textContent = item.pickup_point ? `Pickup Point: ${item.pickup_point}` : 'Pickup Point: N/A';
}
