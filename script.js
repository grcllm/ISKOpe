const uploadInput = document.getElementById('profile-upload');
const pictureContainer = document.querySelector('.profile-picture-container');

uploadInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            pictureContainer.style.backgroundImage = `url('${e.target.result}')`;
            pictureContainer.style.backgroundSize = 'cover';
            pictureContainer.style.backgroundPosition = 'center';
        };
        reader.readAsDataURL(file);
    }
});
