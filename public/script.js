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