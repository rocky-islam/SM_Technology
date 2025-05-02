const navToggle = document.getElementById("navToggle");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");

// Toggle mobile menu
navToggle.addEventListener("click", () => {
  navbar.classList.toggle("expanded");
});

// Highlight active link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
    navbar.classList.remove("expanded"); // Auto close on link click (mobile)
  });
});

const sliderImg = document.getElementById("slider");
let scrollAmount = 0;

function autoScrollLogos() {
  scrollAmount += 1;

  if (scrollAmount >= sliderImg.scrollWidth / 2) {
    scrollAmount = 0;
  }

  sliderImg.style.transform = `translateX(-${scrollAmount}px)`;
}

setInterval(autoScrollLogos, 20);

// card
// business slider
const businessSlider = document.getElementById("sliderTrack");
const businessSlide = document.querySelectorAll(".slideCard");
let scrollIndex = 0;
const totalBusinessSlides = businessSlide.length;

function updateSlider() {
  const slideWidth = businessSlide[0].offsetWidth + 20;
  businessSlider.style.transform = `translateX(-${scrollIndex * slideWidth}px)`;
}

function slideNext() {
  scrollIndex = (scrollIndex + 1) % totalBusinessSlides;
  updateSlider();
}

// Auto play every 3 seconds
setInterval(slideNext, 3000);

// Recalculate on window resize
window.addEventListener("resize", updateSlider);

// Initial position
window.addEventListener("load", updateSlider);

// business play
const slider = document.getElementById("sliderTrack2");
const slides = document.querySelectorAll(".slideCard2");
let index = 0;
const totalSlides = slides.length;

function updateBusinessSlider() {
  const slideWidth = slides[0].offsetWidth + 20; // including margin
  slider.style.transform = `translateX(-${index * slideWidth}px)`;
}

function handleSlideNext() {
  index = (index + 1) % totalSlides;
  updateBusinessSlider();
}



// Auto play every 3 seconds
setInterval(handleSlideNext, 3000);

// Recalculate on window resize
window.addEventListener("resize", updateBusinessSlider);

// Initial position
window.addEventListener("load", updateBusinessSlider);



const clientSliderImg = document.getElementById("clientCardTrack");
let ClientScrollAmount = 0;

function clientAutoScrollLogos() {
  ClientScrollAmount += 1;

  if (ClientScrollAmount >= clientSliderImg.scrollWidth / 4) {
    ClientScrollAmount = 0;
  }

  clientSliderImg.style.transform = `translateX(-${ClientScrollAmount}px)`;
}

setInterval(clientAutoScrollLogos, 30);

// Accordion
document.querySelectorAll('.accordion').forEach(item => {
    const header = item.querySelector('.accordion-header');
    const icon = item.querySelector('.icon');

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.accordion').forEach(acc => {
        acc.classList.remove('active');
        acc.querySelector('.icon').textContent = '+';
      });

      if (!isActive) {
        item.classList.add('active');
        icon.textContent = '−';
      }
    });
  });


//   animation
const sections = document.querySelectorAll('.animation-section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // this enables repeat!
      }
    });
  }, {
    threshold: 0.2 // You can tweak this for earlier or later triggers
  });

  sections.forEach(section => {
    observer.observe(section);
  });
