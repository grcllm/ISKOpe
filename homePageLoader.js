document.addEventListener('DOMContentLoaded', function () {
    // Fetch most recent items
    fetchRecentItems();
});

function fetchRecentItems() {
    const apiUrl = 'http://127.0.0.1:8000/api/recent';

    // Fetch the recent items from the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.items && data.items.length > 0) {
                populateRecentItems(data.items);
            } else {
                document.querySelector('.recent-items').innerHTML = '<p class="no-items">No recent items have been posted yet.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching recent items:', error);
            alert('An error occurred while fetching recent items.');
        });
}

function populateRecentItems(items) {
    const recentItemsGrid = document.getElementById('recent-items-grid');
    recentItemsGrid.innerHTML = ''; // Clear any existing content

    items.forEach(item => {
        const itemDiv = createItemDiv(item);
        recentItemsGrid.appendChild(itemDiv);
    });
}

function createItemDiv(item) {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    // Add the item image and name
    itemDiv.innerHTML = `
        <img src="${item.image_url}" alt="${item.name}" class="item-image" style="width: 200px; height: 200px; object-fit: cover;">
        <p class="item-name">${item.name}</p>
    `;

    // Make the item div clickable and redirect to item detail page
    itemDiv.addEventListener('click', function () {
        // Redirect to item detail page (item.html)
        window.location.href = `item.html?id=${item.id}`;
    });

    return itemDiv;
}
