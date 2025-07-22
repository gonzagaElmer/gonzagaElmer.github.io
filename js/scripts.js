// SPA / MPA mode ---------------------------------------------------------------------------
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const isSpaValue = urlParams.get('is_mode_spa');
const isSpaMode = (isSpaValue === 'true');

var navModeBtnText = document.getElementById("navbarDropdownModeLink")
if (isSpaMode) {
    navModeBtnText.textContent = "SPA Mode"
    setScrollHighlighting();
} else {
    navModeBtnText.textContent = "MPA Mode"
}

function setScrollHighlighting() {
    document.addEventListener('DOMContentLoaded', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        const aboutMeSubNavLinks = document.querySelectorAll('.about-subnav');

        // home nav click listener - scroll to topmost
        document.getElementById("spaNavHome").addEventListener('click', function(event) {
            event.preventDefault();
            window.scrollTo(0, 0);
        }); 

        // scroll listener
        window.addEventListener('scroll', highlightNavLink);
        highlightNavLink();

        function highlightNavLink() {
            let currentSectionId = null;
            const scrollPosition = window.scrollY;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                const headerHeight = document.querySelector('nav').offsetHeight || 0;
                const offsetTolerance = 50;

                if (scrollPosition >= sectionTop - headerHeight - offsetTolerance &&
                    scrollPosition < sectionTop + sectionHeight - headerHeight - offsetTolerance) {
                    currentSectionId = section.id;
                }

                navLinks.forEach(link => {
                    link.classList.remove('text-primary');

                    if (link.getAttribute('href') === `#${currentSectionId}`) {
                        // Home, Projects and Contact nav highlighting
                        link.classList.add('text-primary');

                        // Close the shown About me's menu when scroll position is not within About me sections
                        document.getElementById("aboutNav").classList.remove("show");
                        document.getElementById("aboutSubNav").classList.remove("show");
                    } else {
                        // About me nav highlighting
                        const aboutMeSections = ["section-overView", "section-workExp", "section-techSkills", "section-education"];
                        if (aboutMeSections.includes(currentSectionId)) {
                            document.getElementById("aboutNav").classList.add("text-primary");
                        }
                    }
                });

                // About me sub-navs highlighting
                aboutMeSubNavLinks.forEach(subLink => {
                    subLink.classList.remove('text-primary');
                    if (subLink.getAttribute('href') === `#${currentSectionId}`) {
                        subLink.classList.add('text-primary');
                    }
                })
            });
        }
    });
}


// Navbar toggling ------------------------------------------------------------------------------------
const NAV = document.querySelector('nav');
let timer = null;
let isMouseOverNav = false;
const delaySec = 1000;

// Ensure nav is visible when mouse is over it   
NAV.addEventListener('mouseenter', function() {
    isMouseOverNav = true;
    if (timer !== null) {
        clearTimeout(timer);
        timer = null;
    }
    NAV.classList.add('sticky-top'); 
});

// Only hide if the mouse is truly outside the nav and its descendants
NAV.addEventListener('mouseleave', function() {
  isMouseOverNav = false;
  // Start a timer to hide the nav if the mouse remains outside
  timer = setTimeout(function() {
    if (!isMouseOverNav) {
      NAV.classList.remove('sticky-top');
    }
  }, delaySec);
});

// Always show nav when scrolling
window.addEventListener('scroll', function() {
  // Clear any active hide timer if scrolling starts
  if (timer !== null) {
    clearTimeout(timer);
    timer = null;
  }
  NAV.classList.add('sticky-top'); 

  timer = setTimeout(function() {
    if (!isMouseOverNav) {
      NAV.classList.remove('sticky-top');
    }
  }, delaySec);
}, false);


// Animate upward -----------------------------------------------------------------------------------

var animUpwardDelay = document.getElementsByClassName("anim-delay-upward");

if (animUpwardDelay != null) {
    setAnimUpwardDelay();
}

function setAnimUpwardDelay() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('anim-from-bottom'); // Add animation class when in view
                entry.target.classList.remove('anim-delay-upward'); // Add animation class when in view
                observer.unobserve(entry.target); // Stop observing after animation starts
            }
        });
    }, { threshold: 0.8 }); // Trigger when 80% of the element is in view
    
    // Select the elements you want to observe
    const cards = document.querySelectorAll('.anim-delay-upward');
    
    // Start observing each element
    cards.forEach(box => observer.observe(box));
}


// Animate zoom -----------------------------------------------------------------------------------

var animZoomDelay = document.getElementsByClassName("anim-delay-zoom");

if (animZoomDelay != null) {
    setAnimZoomDelay();
}

function setAnimZoomDelay() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('anim-to-zoom'); // Add animation class when in view
                entry.target.classList.remove('anim-delay-zoom'); // Add animation class when in view
                observer.unobserve(entry.target); // Stop observing after animation starts
            }
        });
    }, { threshold: 0.8 }); // Trigger when 80% of the element is in view
    
    // Select the elements you want to observe
    const cards = document.querySelectorAll('.anim-delay-zoom');
    
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
  