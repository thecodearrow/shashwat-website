// WhatsApp Contact Function
function openWhatsApp() {
    // Replace with your actual phone number with country code
    const phoneNumber = "919986269997"; // Example: 919876543210 for +91 9876543210
    
    // Custom message that will be pre-filled
    const message = "Hi! I'm interested in the High Altitude Trail Running Bootcamp in May 2025.";
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create the WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    // Initialize slideshow
    showSlides(1);
    // Auto-advance slides every 5 seconds
    setInterval(function() { 
        plusSlides(1);
    }, 5000);
});

// Responsive navigation for mobile
window.addEventListener('resize', adjustNavigation);

function adjustNavigation() {
    const nav = document.querySelector('nav');
    const windowWidth = window.innerWidth;
    
    if (windowWidth <= 768) {
        nav.classList.add('mobile-nav');
    } else {
        nav.classList.remove('mobile-nav');
    }
}

// Initialize on page load
adjustNavigation();
// Image Slider functionality
let slideIndex = 1;

// When the page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded");
    
    // Initialize the slider if slides exist
    const slides = document.getElementsByClassName("slide");
    if (slides.length > 0) {
        console.log("Slides found:", slides.length);
        showSlides(slideIndex);
        
        // Auto slide every 5 seconds
        setInterval(function() {
            changeSlide(1);
        }, 5000);
    } else {
        console.log("No slides found");
    }
    
    // Make sure all "Register Now" buttons trigger WhatsApp
    const registerButtons = document.querySelectorAll('.cta-button, .cta-button-large');
    registerButtons.forEach(button => {
        // Check if this button should open WhatsApp
        if (button.getAttribute('href') === '#register' || 
            button.textContent.includes('Register') || 
            button.textContent.includes('Join') ||
            button.textContent.includes('Reserve')) {
            
            button.setAttribute('href', 'javascript:void(0)');
            button.onclick = function(e) {
                e.preventDefault();
                openWhatsApp();
            };
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Mobile navigation
    createMobileNav();
    
    // Update on window resize
    window.addEventListener('resize', createMobileNav);
    
    // Add animation on scroll
    const elementsToAnimate = document.querySelectorAll('.feature, .testimonial, .team-member');
    
    // Initially set these elements invisible
    elementsToAnimate.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run animation check on load and scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});

// Next/previous controls
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    
    // Handle edge cases
    if (!slides.length) return;
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Remove active class from all dots
    for (i = 0; i < dots.length; i++) {
        if (dots[i]) {
            dots[i].classList.remove("active");
        }
    }
    
    // Show the current slide
    if (slides[slideIndex-1]) {
        slides[slideIndex-1].style.display = "block";
    }
    
    // Set active dot if available
    if (dots.length > 0 && dots[slideIndex-1]) {
        dots[slideIndex-1].classList.add("active");
    }
}

// Create mobile navigation
function createMobileNav() {
    if (window.innerWidth <= 768 && !document.querySelector('.mobile-nav-toggle')) {
        const nav = document.querySelector('nav');
        const navLinks = document.querySelector('.nav-links');
        
        if (!nav || !navLinks) return;
        
        const mobileNavToggle = document.createElement('button');
        mobileNavToggle.className = 'mobile-nav-toggle';
        mobileNavToggle.innerHTML = '☰';
        mobileNavToggle.style.background = 'none';
        mobileNavToggle.style.border = 'none';
        mobileNavToggle.style.fontSize = '1.5rem';
        mobileNavToggle.style.cursor = 'pointer';
        mobileNavToggle.style.color = 'var(--primary-color)';
        
        nav.insertBefore(mobileNavToggle, navLinks);
        
        navLinks.style.position = 'fixed';
        navLinks.style.top = '80px';
        navLinks.style.right = '-100%';
        navLinks.style.backgroundColor = 'white';
        navLinks.style.width = '80%';
        navLinks.style.maxWidth = '300px';
        navLinks.style.height = 'calc(100vh - 80px)';
        navLinks.style.flexDirection = 'column';
        navLinks.style.padding = '40px 20px';
        navLinks.style.boxShadow = 'var(--shadow)';
        navLinks.style.transition = 'right 0.3s ease';
        navLinks.style.zIndex = '99';
        
        mobileNavToggle.addEventListener('click', () => {
            if (navLinks.style.right === '-100%') {
                navLinks.style.right = '0';
                mobileNavToggle.innerHTML = '✕';
            } else {
                navLinks.style.right = '-100%';
                mobileNavToggle.innerHTML = '☰';
            }
        });
        
        // Close mobile menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.style.right = '-100%';
                mobileNavToggle.innerHTML = '☰';
            });
        });
    } else if (window.innerWidth > 768) {
        const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
        if (mobileNavToggle) {
            mobileNavToggle.remove();
        }
        
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            navLinks.removeAttribute('style');
        }
    }
}

// Animation on scroll function
function animateOnScroll() {
    const elementsToAnimate = document.querySelectorAll('.feature, .testimonial, .team-member');
    
    elementsToAnimate.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
}