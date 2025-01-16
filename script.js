const uploadInput = document.getElementById('item-image');
const imageContainer = document.querySelector('.image-upload');

uploadInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imageContainer.style.backgroundImage = `url('${e.target.result}')`;
            imageContainer.style.backgroundSize = 'cover';
            imageContainer.style.backgroundPosition = 'center';
        };
        reader.readAsDataURL(file);
    }
});