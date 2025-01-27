document.querySelector('.submit-item-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form data
    const name = document.getElementById('item-name').value;
    const status = document.querySelector('input[name="item-status"]:checked').value;
    const category = document.getElementById('category').value;
    const month = document.getElementById('month').value;
    const day = document.getElementById('day').value;
    const year = document.getElementById('year').value;
    const date = `${month} ${day} ${year}`;
    
    // If item is 'lost', time is mandatory; if 'found', pickup_point is mandatory
    const time = status === 'lost' ? document.getElementById('found-hour').value + ':' + document.getElementById('found-minute').value + ' ' + document.getElementById('found-am-pm').value : null;
    const pickupPoint = status === 'found' ? document.getElementById('pickup-location').value : null;

    // Where the item was last seen (depending on the status)
    const lastSeen = status === 'lost' ? document.getElementById('lost-location').value : document.getElementById('found-location').value;

    // Image file
    const fileInput = document.getElementById('item-image');
    const file = fileInput.files[0];

    // Check if the file is selected
    if (!file) {
        alert('Please upload an image.');
        return;
    }

    // Create FormData object and append the necessary fields
    const formData = new FormData();
    formData.append('name', name);
    formData.append('status', status);
    formData.append('category', category);
    formData.append('date', date);
    
    // Conditionally add 'time' or 'pickup_point' based on item status
    if (status === 'lost') {
        formData.append('time', time);
    } else if (status === 'found') {
        formData.append('pickup_point', pickupPoint);
    }

    formData.append('last_seen', lastSeen);
    formData.append('file', file);

    for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }
    

    // Send the data via fetch to your API endpoint
    fetch('http://localhost:8000/api/items', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.status == 201) {
            alert('Item submitted successfully!');
            // Optionally, redirect or clear the form
        } else {
            alert('Failed to submit item: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error submitting item:', error);
        alert('An error occurred while submitting the item.');
    });
});
