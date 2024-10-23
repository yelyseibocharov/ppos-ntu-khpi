const sponsorContainer = document.querySelector('.sponsor');
let scrollAmount = 0;
let scrollStep = 1; 
const cloneElements = () => {
  const children = Array.from(sponsorContainer.children);
  children.forEach(child => {
    const clone = child.cloneNode(true);
    sponsorContainer.appendChild(clone);
  });
};

cloneElements();

function autoScroll() {
  sponsorContainer.scrollLeft += scrollStep; 

  if (sponsorContainer.scrollLeft >= sponsorContainer.scrollWidth / 2) {
    sponsorContainer.scrollLeft = 0; 
  }
}

setInterval(autoScroll, 20);


const carousel = document.querySelector('.carousel');

function moveCarousel(direction) {
  const scrollAmount = 400;
  carousel.scrollBy({
    left: scrollAmount * direction,   
    behavior: 'smooth' 
  });
}
