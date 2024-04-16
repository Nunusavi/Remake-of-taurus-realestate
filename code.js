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


