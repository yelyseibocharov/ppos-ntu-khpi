let currentIndex = 0;

function moveCarousel(step) {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Calculate new index
    currentIndex += step;

    // Loop around if out of bounds
    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    // Calculate the shift and apply transform
    const shift = currentIndex * (items[0].offsetWidth + 20); // 20px for margin
    carousel.style.transform = `translateX(-${shіft}px)`;
}