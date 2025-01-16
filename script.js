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
