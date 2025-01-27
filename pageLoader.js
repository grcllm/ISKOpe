document.addEventListener('DOMContentLoaded', function () {
    // Map the current page to the category
    const categoryMap = {
        'bagspanel.html': 'bags',
        'bookspanel.html': 'books',
        'clothingpanel.html': 'clothing',
        'documentspanel.html': 'documents',
        'electronicspanel.html': 'electronics',
        'fashionpanel.html': 'fashion',
        'idpanel.html': 'ids',
        'jewelrypanel.html': 'jewelry',
        'otherspanel.html': 'others',
        'walletspanel.html': 'wallets'
    };

    const currentPage = window.location.pathname.split('/').pop(); // Get the current HTML page
    const category = categoryMap[currentPage];

    if (!category) {
        console.error('Category not found for this page.');
        return;
    }

    // Fetch items based on the category
    fetchItems(category);
});

function fetchItems(category) {
    // API URL
    const apiUrl = `http://127.0.0.1:8000/api/items?category=${category}`;

    // Make the API request
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.items && data.items.length > 0) {
                // Populate the items grid
                populateItemsGrid(data.items);
            } else {
                console.log('No items found.');
                showNoItemsMessage();
            }
        })
        .catch(error => {
            console.error('Error fetching items:', error);
            alert('An error occurred while fetching items.');
        });
}

function populateItemsGrid(items) {
    const lostItemsGrid = document.getElementById('lost-items-grid'); // Assuming this is the grid for lost items
    const foundItemsGrid = document.getElementById('found-items-grid'); // Assuming this is the grid for found items
    lostItemsGrid.innerHTML = ''; // Clear the grid first
    foundItemsGrid.innerHTML = ''; // Clear the grid first

    items.forEach(item => {
        const itemDiv = createItemDiv(item);

        // Check if the item is lost or found and append it to the correct grid
        if (item.status === 'lost') {
            lostItemsGrid.appendChild(itemDiv);
        } else if (item.status === 'found') {
            foundItemsGrid.appendChild(itemDiv);
        }
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

function showNoItemsMessage() {
    const lostItemsGrid = document.querySelector('.items-grid');
    const foundItemsGrid = document.querySelector('.items-grid');
    lostItemsGrid.innerHTML = '<p class="no-items">No lost items have been posted yet.</p>';
    foundItemsGrid.innerHTML = '<p class="no-items">No found items have been reported yet.</p>';
}
