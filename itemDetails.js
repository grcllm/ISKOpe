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
                checkAdminAndShowDeleteButton(itemId);
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
    console.log(item);
    document.getElementById('item-image-individual').src = item.image_url;
    document.getElementById('item-name').textContent = item.name;
    document.getElementById('item-status').textContent = `Status: ${item.status}`;
    document.getElementById('item-category').textContent = `Category: ${item.category}`;
    document.getElementById('item-date').textContent = `Date: ${item.date_status}`;
    document.getElementById('item-time').textContent = item.time_status ? `Time: ${item.time_status}` : 'Time: N/A';
    document.getElementById('item-place').textContent = `Place Last Seen: ${item.place_last_seen}`;
    document.getElementById('item-pickup').textContent = item.pickup_point ? `Pickup Point: ${item.pickup_point}` : 'Pickup Point: N/A';
}

// Check if the user is an admin and show the delete button if isAdmin is 1
function checkAdminAndShowDeleteButton(itemId) {
    // Get the isAdmin value from localStorage
    const isAdmin = localStorage.getItem('isAdmin');
    
    if (isAdmin == 1) {
        // Create and show the delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete Item';
        deleteButton.classList.add('delete-button'); // You can add styles for the button here
        document.body.appendChild(deleteButton); // Add the button to the page

        // Add click event listener for the delete button
        deleteButton.addEventListener('click', function () {
            deleteItem(itemId);
        });
    }
}

// Function to delete the item and redirect to the previous page
function deleteItem(itemId) {
    // Make the DELETE API call
    fetch(`http://127.0.0.1:8000/api/items/${itemId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Pass the token from localStorage in the authorization header
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            alert(data.message);
            window.history.back(); // Go back to the previous page
        } else {
            alert('Failed to delete item.');
        }
    })
    .catch(error => {
        console.error('Error deleting item:', error);
        alert('An error occurred while deleting the item.');
    });
}
