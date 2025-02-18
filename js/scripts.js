/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

showCreditsYear();

function showCreditsYear() {
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('year-sm').textContent = new Date().getFullYear();
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Create the intersection observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('anim-left-to-right'); // Add animation class when in view
            entry.target.classList.remove('anim-delay'); // Add animation class when in view
            observer.unobserve(entry.target); // Stop observing after animation starts
        }
    });
}, { threshold: 0.8 }); // Trigger when 80% of the element is in view

// Select the elements you want to observe
const cards = document.querySelectorAll('.anim-delay');

// Start observing each element
cards.forEach(box => observer.observe(box));
  