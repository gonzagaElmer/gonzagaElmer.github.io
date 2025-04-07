// Contact -----------------------------------------------------------------------------------
var submitBtn = document.getElementsById("submitButton");

if (submitBtn != null || submitBtn.length > 0) {
    for (var i = 0; i < submitBtn.length; i++) {
        submitBtn[i].addEventListener('click', function() {
            alert('The form will be live soon!');
        });
    }
}

// Projects -----------------------------------------------------------------------------------
var animFromBottom = document.getElementsByClassName("anim-from-bottom");

if (animFromBottom != null) {
    setProjectsAnim();
}

function setProjectsAnim() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('anim-from-bottom'); // Add animation class when in view
                entry.target.classList.remove('anim-delay'); // Add animation class when in view
                observer.unobserve(entry.target); // Stop observing after animation starts
            }
        });
    }, { threshold: 0.8 }); // Trigger when 80% of the element is in view
    
    // Select the elements you want to observe
    const cards = document.querySelectorAll('.anim-delay');
    
    // Start observing each element
    cards.forEach(box => observer.observe(box));
}


// Resume  -----------------------------------------------------------------------------------

var expYearMonth = document.getElementById("exp-year-month");
if (expYearMonth != null) {
    showResumeAndroidExp();
}

function showResumeAndroidExp() {
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
    if (expYearMonth != null) {
        document.getElementById("exp-year-month").textContent = `${yearDiff} years ${ (monthDiff > 0) ? ` and ${monthDiff} months` : ``}`;
    }
}


// General -----------------------------------------------------------------------------------
var siteTitle = document.getElementById('site-title');
var year = document.getElementById('year');

if (siteTitle != null) {
    setGenSiteTitle();
}

if (year != null) {
    var yearSm = document.getElementById('year-sm');
    setGenCreditsYear();
}

function setGenSiteTitle() {
    siteTitle.textContent = "EBG";
}

function setGenCreditsYear() {
    if (year != null && yearSm != null) {
        year.textContent = new Date().getFullYear();
        yearSm.textContent = new Date().getFullYear();
    }
}

// click bottom tab links
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
  