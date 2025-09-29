// Initialize Lucide icons
lucide.createIcons();

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const header = document.getElementById('header');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}


// Close mobile menu when a navigation link is clicked
const navLinks = mobileMenu.getElementsByTagName('a');
for (let link of navLinks) {
    link.addEventListener('click', () => {
        if (!mobileMenu.classList.contains('hidden')) {
             mobileMenu.classList.add('hidden');
        }
    });
}
    
// Header shadow on scroll
window.addEventListener('scroll', () => {
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('shadow-lg');
        } else {
            header.classList.remove('shadow-lg');
        }
    }
});

