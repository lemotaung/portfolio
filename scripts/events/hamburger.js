export function animateHamburger() {
    const hamburger = document.querySelector('.navTrigger');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav__link');
    
    hamburger.addEventListener('click', (e) => {
      hamburger.classList.toggle('active');

      mobileNav.classList.toggle('toggle-nav');

      mobileNavLinks.forEach((link) => {
        link.classList.toggle('slide-in');
      });
    });
}