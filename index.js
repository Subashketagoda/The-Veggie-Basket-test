// Smooth Reveal on Scroll
const revealElements = document.querySelectorAll('.reveal');

function reveal() {
  revealElements.forEach(el => {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', reveal);
// Initial check
reveal();

// Navbar Background Change on Scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.padding = '0.8rem 5%';
    nav.style.background = 'rgba(255, 255, 255, 0.98)';
    nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)';
  } else {
    nav.style.padding = '1.2rem 5%';
    nav.style.background = 'rgba(255, 255, 255, 0.85)';
    nav.style.boxShadow = 'none';
  }
});

// Smooth Scrolling for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Subtle Parallax effect on Hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scroll = window.pageYOffset;
    hero.style.backgroundPositionY = (scroll * 0.5) + 'px';
});

// Review Slider Auto-scroll (Optional)
// const slider = document.querySelector('.review-slider');
// setInterval(() => {
//     slider.scrollLeft += 350;
//     if (slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth)) {
//         slider.scrollLeft = 0;
//     }
// }, 5000);
