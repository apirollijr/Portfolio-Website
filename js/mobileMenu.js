export function setupMobileMenu() {
    const toggleBtn = document.querySelector('#menu-toggle');
    const nav = document.querySelector('#nav-menu');
  
    if (!toggleBtn || !nav) return;
  
    // On small screens only
    const isMobile = () => window.innerWidth <= 768;
  
    toggleBtn.addEventListener('click', () => {
      if (isMobile()) {
        nav.classList.toggle('open');
      }
    });
  
    // Optional: remove .open on resize to desktop
    window.addEventListener('resize', () => {
      if (!isMobile()) {
        nav.classList.remove('open');
      }
    });
  }
  