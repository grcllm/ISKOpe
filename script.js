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
        
        // Check if "Lost" option is selected
        if (document.getElementById('lost').checked) {
            console.log('Lost option selected');
            
            // Show "Lost" fields
            lostLocationLabel.style.display = 'block';
            lostLocationInput.style.display = 'block';
            // Remove the 'required' attribute for 'lost-location'
            lostLocationInput.setAttribute('required', 'true');
            
            // Hide "Found" fields
            foundLocationLabel.style.display = 'none';
            foundLocationInput.style.display = 'none';
            // Remove the 'required' attribute for 'found-location'
            foundLocationInput.removeAttribute('required');
            
            pickupLocationLabel.style.display = 'none';
            pickupLocationInput.style.display = 'none';
            // Remove the 'required' attribute for 'pickup-location'
            pickupLocationInput.removeAttribute('required');
            
            // Show time section for lost item
            foundTimeSection.style.display = 'block';
            // Add the 'required' attribute for 'time' fields
            document.getElementById('found-hour').setAttribute('required', 'true');
            document.getElementById('found-minute').setAttribute('required', 'true');
            document.getElementById('found-am-pm').setAttribute('required', 'true');
            
        } 
        // Check if "Found" option is selected
        else if (document.getElementById('found').checked) {
            console.log('Found option selected');
            
            // Show "Found" fields
            foundLocationLabel.style.display = 'block';
            foundLocationInput.style.display = 'block';
            // Add the 'required' attribute for 'found-location'
            foundLocationInput.setAttribute('required', 'true');
            
            pickupLocationLabel.style.display = 'block';
            pickupLocationInput.style.display = 'block';
            // Add the 'required' attribute for 'pickup-location'
            pickupLocationInput.setAttribute('required', 'true');
            
            // Hide "Lost" fields
            lostLocationLabel.style.display = 'none';
            lostLocationInput.style.display = 'none';
            // Remove the 'required' attribute for 'lost-location'
            lostLocationInput.removeAttribute('required');
            
            // Hide time section for found item
            foundTimeSection.style.display = 'none';
            // Remove the 'required' attribute for time fields
            document.getElementById('found-hour').removeAttribute('required');
            document.getElementById('found-minute').removeAttribute('required');
            document.getElementById('found-am-pm').removeAttribute('required');
        }
    
        // Always ensure submit button is visible
        submitButton.style.display = 'block';
    }

    // Call toggleFields on load to set default state
    toggleFields();
    
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
