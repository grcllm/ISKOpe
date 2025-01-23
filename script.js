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

    // Submit Item Page: Toggles input fields 
    function toggleFields() {
        const lostLocationLabel = document.getElementById('lost-location-label');
        const lostLocationInput = document.getElementById('lost-location');
        const foundLocationLabel = document.getElementById('found-location-label');
        const foundLocationInput = document.getElementById('found-location');
        const pickupLocationLabel = document.getElementById('pickup-location-label');
        const pickupLocationInput = document.getElementById('pickup-location');
        const foundTimeSection = document.getElementById('found-time-section');
        const submitButton = document.getElementById('submit-button');
        
        if (document.getElementById('lost').checked) {
            // Show "Lost" fields
            lostLocationLabel.style.display = 'block';
            lostLocationInput.style.display = 'block';
            foundLocationLabel.style.display = 'none';
            foundLocationInput.style.display = 'none';
            pickupLocationLabel.style.display = 'none';
            pickupLocationInput.style.display = 'none';
            foundTimeSection.style.display = 'block';
        } else if (document.getElementById('found').checked) {
            // Show "Found" fields
            foundLocationLabel.style.display = 'block';
            foundLocationInput.style.display = 'block';
            pickupLocationLabel.style.display = 'block';
            pickupLocationInput.style.display = 'block';
            lostLocationLabel.style.display = 'none';
            lostLocationInput.style.display = 'none';
            foundTimeSection.style.display = 'none';
        }

        submitButton.style.display = 'block';
    }

    toggleFields();
});

// Show the logout confirmation popup
function showLogoutPopup() {
    document.getElementById("logoutPopup").style.display = "flex";
}

// Close the popup
function closePopup() {
    document.getElementById("logoutPopup").style.display = "none";
}

// Perform the logout and redirect to the login page
function logout() {
    window.location.href = 'login.html'; // Redirect to login page
}
