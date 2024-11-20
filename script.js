// JavaScript to control photo slider
document.addEventListener('DOMContentLoaded', () => {
    const photos = [
        "https://assets.onecompiler.app/42yk8vxma/42ynsturc/Desain%20tanpa%20judul%20(1).jpg",
        "https://via.placeholder.com/150"
    ];

    let currentIndex = 0;

    const photoElement = document.querySelector('.photo img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    // Function to update the photo
    function updatePhoto(index) {
        photoElement.style.transform = 'scale(0.8)';
        setTimeout(() => {
            photoElement.src = photos[index];
            photoElement.style.transform = 'scale(1)';
        }, 300);
    }

    // Event listeners for buttons
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? photos.length - 1 : currentIndex - 1;
        updatePhoto(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === photos.length - 1) ? 0 : currentIndex + 1;
        updatePhoto(currentIndex);
    });
});
