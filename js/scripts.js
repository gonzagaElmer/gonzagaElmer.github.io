/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Resume - start
showAndroidExp();

function showAndroidExp() {
    // start date (April 2022)
    const startDate = new Date(2022, 3);

    // Get the current date
    const currentDate = new Date();

    // Calculate year and month difference
    let yearDiff = currentDate.getFullYear() - startDate.getFullYear();
    let monthDiff = currentDate.getMonth() - startDate.getMonth();

    // Adjust if month difference is negative
    if (monthDiff < 0) {
        yearDiff--;
        monthDiff += 12;
    }

    // Display the result
    document.getElementById("exp-year-month").textContent = `${yearDiff} years ${ (monthDiff > 0) ? ` and ${monthDiff} months` : ``}`;
}
// Resume - end

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
  