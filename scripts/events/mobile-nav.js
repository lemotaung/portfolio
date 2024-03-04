export function controlNav() {
    const hamburger = document.querySelector('.navTrigger');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav__link');

    // Function to open/close mobile nav
    const toggleNav = () => {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('toggle-nav');

      mobileNavLinks.forEach((link) => {
        link.classList.toggle('slide-in');
      });
    }
    
    hamburger.addEventListener('click', (e) => {
      toggleNav();
    });

    mobileNavLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        toggleNav();
      });
    });
}