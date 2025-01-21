document.addEventListener('DOMContentLoaded', function() {
    // Profile Page: Handle profile image upload
    const profileUploadInput = document.getElementById('profile-upload');
    const profilePictureContainer = document.querySelector('.profile-picture-container');
    
    if (profileUploadInput && profilePictureContainer) {
        profileUploadInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    profilePictureContainer.style.backgroundImage = `url('${e.target.result}')`;
                    profilePictureContainer.style.backgroundSize = 'cover';
                    profilePictureContainer.style.backgroundPosition = 'center';
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Submit Item Page: Handle item image upload
    const itemUploadInput = document.getElementById('item-image');
    const itemImageContainer = document.querySelector('.image-upload');
    
    if (itemUploadInput && itemImageContainer) {
        itemUploadInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    itemImageContainer.style.backgroundImage = `url('${e.target.result}')`;
                    itemImageContainer.style.backgroundSize = 'cover';
                    itemImageContainer.style.backgroundPosition = 'center';
                };
                reader.readAsDataURL(file);
            }
        });
    }
});


function toggleFields() {
    const lostLocationLabel = document.getElementById('lost-location-label');
    const lostLocationInput = document.getElementById('lost-location');
    const foundLocationLabel = document.getElementById('found-location-label');
    const foundLocationInput = document.getElementById('found-location');
    const pickupLocationLabel = document.getElementById('pickup-location-label');
    const pickupLocationInput = document.getElementById('pickup-location');
    const foundTimeSection = document.getElementById('found-time-section'); // Time section for found item
    const submitButton = document.getElementById('submit-button'); // Submit button

    // Check if "Lost" option is selected
    if (document.getElementById('lost').checked) {
        console.log('Lost option selected');
        // Show "Lost" fields
        lostLocationLabel.style.display = 'block';
        lostLocationInput.style.display = 'block';
        // Hide "Found" fields
        foundLocationLabel.style.display = 'none';
        foundLocationInput.style.display = 'none';
        pickupLocationLabel.style.display = 'none';
        pickupLocationInput.style.display = 'none';
        // Show time section for lost item
        foundTimeSection.style.display = 'block';
    } 
    // Check if "Found" option is selected
    else if (document.getElementById('found').checked) {
        console.log('Found option selected');
        // Show "Found" fields
        foundLocationLabel.style.display = 'block';
        foundLocationInput.style.display = 'block';
        pickupLocationLabel.style.display = 'block';
        pickupLocationInput.style.display = 'block';
        // Hide "Lost" fields
        lostLocationLabel.style.display = 'none';
        lostLocationInput.style.display = 'none';
        // Hide time section for found item
        foundTimeSection.style.display = 'none';
    }

    // Always ensure submit button is visible
    submitButton.style.display = 'block';
}

// Call toggleFields on load to set default state
toggleFields();
