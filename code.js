// get scroll position in pixels
var y = window.scrollY;
var x = window.scrollX;
// get the element
var document = window.document;

let text = document.querySelector('.text');
let sun = document.getElementById('sun');
let city = document.getElementById('city');
let crane1 = document.getElementById('crane1');
let crane2 = document.getElementById('crane2');
let crane3 = document.getElementById('crane3');
let building3 = document.getElementById('building3');
let building2 = document.getElementById('building2');
let building1 = document.getElementById('building1');
let ground2 = document.getElementById('ground2');
let ground1 = document.getElementById('ground1');

// Get the height of the document
const documentHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);

// Get the height of the viewport
const viewportHeight = Math.max(
    document.documentElement.clientHeight, window.innerHeight || 0
);

// Calculate the maximum scroll position
const maxScrollPosition = documentHeight - viewportHeight;

window.addEventListener('scroll', function () {
    let y = window.scrollY;
    let x = window.scrollX;

    // Calculate the scroll position as a percentage of the maximum scroll position
    const scrollPercentage = Math.min(y / maxScrollPosition, 1);

    
    text.style.marginTop = scrollPercentage * viewportHeight * 2 + 'px';
    text.style.opacity = 1 - scrollPercentage * 3;
    sun.style.left = scrollPercentage * viewportHeight * 1 + 'px';
    sun.style.top = scrollPercentage * viewportHeight * 3 + 'px';
    city.style.top = scrollPercentage * viewportHeight * 1.8 + 'px';
    building3.style.top = scrollPercentage * viewportHeight * 3 + 'px';
    building2.style.left = scrollPercentage * viewportHeight * 2 + 'px';
    building1.style.left = -scrollPercentage * viewportHeight * 3 + 'px';

    crane1.style.left = -scrollPercentage * viewportHeight * 1.5 + 'px';
    crane2.style.left = -scrollPercentage * viewportHeight * 1.5 + 'px';
    crane2.style.top = scrollPercentage * viewportHeight * 0.2 + 'px';
    crane3.style.left = scrollPercentage * viewportHeight * 1.5 + 'px';
    crane3.style.top = scrollPercentage * viewportHeight * 0.5 + 'px';

    if (scrollPercentage > 0.5) {
        city.style.top = viewportHeight * 0.5 + 'px';
    }
});

// links to section is clicked, scroll to that section smoothly
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Select the element to animate
const element = document.querySelector('.content');
const aboutUs = document.querySelector('.about');
const clientImg = document.querySelector('.client-img');
const clinetText = document.querySelector('.about-client');
const serviceContent = document.querySelector('.service-content');
const serviceItem = document.querySelector('.service-item');

// Create a new Intersection Observer instance
const backward = new IntersectionObserver((entries, observer) => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is in the viewport
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('content-animation-forward');
      // Stop observing the element
      observer.unobserve(entry.target);
    }
  });
});

const forward = new IntersectionObserver((entries, observer) => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is in the viewport
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('content-animation-backward');
        // Stop observing the element
        observer.unobserve(entry.target);
      }
    })
});

backward.observe(element);
forward.observe(aboutUs);
forward.observe(clientImg);
backward.observe(clinetText);
forward.observe(serviceContent);
backward.observe(serviceItem);


// Contact form validation
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });
