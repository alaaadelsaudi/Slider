const carousel = document.querySelector('.carousel');
const firstImg = carousel.querySelectorAll('img')[0];
const arrows = document.querySelectorAll('.wrapper i');
let isDragging = false, prevPageX, prevScrollLeft;
const firstImgWidth = firstImg.clientWidth + 14;

// Arrow click functionality
arrows.forEach(icon => {
    icon.addEventListener('click', () => {
        carousel.scrollLeft += icon.id === 'left' ? -firstImgWidth : firstImgWidth;
    });
});

// Dragging functionality
const dragStart = (e) => {
    isDragging = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    const positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
};

const stop = () => {
    isDragging = false; 
    carousel.classList.remove("dragging");
};

// Event listeners for mouse and touch events
carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('touchstart', dragStart);

carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('touchmove', dragging);

carousel.addEventListener('mouseup', stop);
carousel.addEventListener('mouseleave', stop);
carousel.addEventListener('touchend', stop); 
