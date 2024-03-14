document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    let currentIndex = 0;

    function showSlide(index) {
        carouselContainer.style.transform = `translateX(-${index * 340}px)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        showSlide(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        const maxIndex = carouselContainer.children.length - 1;
        currentIndex = Math.min(currentIndex + 1, maxIndex-4);
        showSlide(currentIndex);
    });
});
