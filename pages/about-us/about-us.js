
let currentIndex = 0;
const totalObjects = 6;  

function moveCarousel(direction) {
  const carousel = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel div');
  
  currentIndex += direction;
  
  if (currentIndex < 0) {
    currentIndex = totalObjects - 1;  
  } else if (currentIndex >= totalObjects) {
    currentIndex = 0; 
  }
  
  const itemWidth = items[0].offsetWidth + 20; 
  
  carousel.style.transform = `translateX(${-itemWidth * currentIndex}px)`;
}
