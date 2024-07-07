const mainImage = document.querySelector('.main-image img');
const thumbnails = document.querySelectorAll('.thumbnail');

let currentImageIndex = 0;

// Function to update the main image
function updateMainImage() {
  mainImage.src = thumbnails[currentImageIndex].querySelector('img').src;
}

// Function to cycle through images
function cycleImages() {
  currentImageIndex = (currentImageIndex + 1) % thumbnails.length;
  updateMainImage();
}

// Add event listeners to thumbnails
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    currentImageIndex = Array.prototype.indexOf.call(thumbnails, thumbnail);
    updateMainImage();
  });
});

// Start the slideshow
setInterval(cycleImages, 3000); // change the interval time to your liking (in milliseconds)