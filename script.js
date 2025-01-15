// Image upload handling
const uploadInput = document.getElementById('upload-picture');
const pictureContainer = document.getElementById('picture-container');
const uploadText = document.getElementById('upload-text');
const uploadPrompt = document.querySelector('.upload-prompt');

uploadInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            pictureContainer.style.backgroundImage = `url('${e.target.result}')`;
            pictureContainer.style.backgroundSize = 'cover';
            pictureContainer.style.backgroundPosition = 'center';
            uploadText.style.display = 'none';
            uploadPrompt.style.display = 'none';
        };
        reader.readAsDataURL(file);
    }
});

// Form validation
const form = document.getElementById('profileForm');
const emailInput = document.getElementById('email');
const contactInput = document.getElementById('contact');
const studentNumberInput = document.getElementById('student-number');

// Email validation
emailInput.addEventListener('input', function () {
    const errorElement = document.getElementById('email-error');
    if (!this.value.includes('@')) {
        this.classList.add('invalid');
        this.classList.remove('valid');
        errorElement.style.display = 'block';
    } else {
        this.classList.remove('invalid');
        this.classList.add('valid');
        errorElement.style.display = 'none';
    }
});

// Contact number validation - numbers only
contactInput.addEventListener('input', function () {
    const errorElement = document.getElementById('contact-error');
    this.value = this.value.replace(/[^0-9]/g, '');

    if (this.value.length > 0 && /^\d+$/.test(this.value)) {
        this.classList.remove('invalid');
        this.classList.add('valid');
        errorElement.style.display = 'none';
    } else {
        this.classList.add('invalid');
        this.classList.remove('valid');
        errorElement.style.display = 'block';
    }
});

// Form submission handling
form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Check all validations
    const isEmailValid = emailInput.value.includes('@');
    const isContactValid = contactInput.value.length > 0 && /^\d+$/.test(contactInput.value);

    if (isEmailValid && isContactValid) {
        // If all validations pass, you can submit the form
        alert('Profile updated successfully!');
    } else {
        alert('Please fix the errors in the form before submitting.');
    }
});

