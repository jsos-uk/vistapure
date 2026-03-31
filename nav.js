class VistaNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav id="navbar" class="fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md py-4 border-b border-slate-100 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center">
            <a href="index.html" class="flex-shrink-0 flex items-center cursor-pointer group">
              <img src="/images/logo-rectangle.png" alt="Vista Pure Logo" class="logo-crisp h-10 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-105" onerror="this.src='https://placehold.co/200x80?text=Vista+Pure'" />
            </a>

            <div class="hidden md:flex items-center space-x-1">
              <div class="flex space-x-2 mr-6 px-4 py-1.5 rounded-full bg-slate-100/80 border border-slate-200/50">
                <a href="index.html" class="px-4 py-2 text-sm font-semibold rounded-full text-slate-600 hover:text-slate-900 hover:bg-white shadow-sm transition-all">Home</a>
                <a href="services.html" class="px-4 py-2 text-sm font-semibold rounded-full text-slate-600 hover:text-slate-900 hover:bg-white shadow-sm transition-all">Services</a>
                <a href="index.html#reviews" class="px-4 py-2 text-sm font-semibold rounded-full text-slate-600 hover:text-slate-900 hover:bg-white shadow-sm transition-all">Reviews</a>
              </div>
              <a href="index.html#quote-form" class="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white transition-all rounded-full bg-slate-900 hover:bg-cyan-700 shadow-md">
                Get a Quote
              </a>
            </div>

            <div class="md:hidden flex items-center">
              <button id="mobile-menu-btn" class="p-2 rounded-full focus:outline-none text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors">
                <i data-lucide="menu" id="menu-icon" class="w-6 h-6"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="absolute top-full left-0 w-full bg-white border-t border-slate-100 px-4 pt-4 pb-6 shadow-2xl hidden flex-col gap-2">
          <a href="index.html" class="mobile-link px-4 py-3 text-base font-bold text-slate-800 hover:bg-blue-50 rounded-xl transition-colors">Home</a>
          <a href="services.html" class="mobile-link px-4 py-3 text-base font-bold text-slate-800 hover:bg-blue-50 rounded-xl transition-colors">Services</a>
          <a href="index.html#reviews" class="mobile-link px-4 py-3 text-base font-bold text-slate-800 hover:bg-blue-50 rounded-xl transition-colors">Reviews & FAQs</a>
          <a href="tel:+447000000000" class="mt-2 flex items-center justify-center w-full px-5 py-4 text-base font-bold text-white bg-slate-900 rounded-xl shadow-md">
            <i data-lucide="phone" class="w-5 h-5 mr-2"></i> Call Now
          </a>
        </div>
      </nav>
    `;

    // 1. Re-render icons for the newly injected HTML
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }

    // 2. Mobile Menu Toggle Logic
    const menuBtn = this.querySelector('#mobile-menu-btn');
    const mobileMenu = this.querySelector('#mobile-menu');
    const menuIcon = this.querySelector('#menu-icon');
    let isMenuOpen = false;

    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
          mobileMenu.classList.remove('hidden');
          mobileMenu.classList.add('flex');
          menuIcon.setAttribute('data-lucide', 'x');
        } else {
          mobileMenu.classList.add('hidden');
          mobileMenu.classList.remove('flex');
          menuIcon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons();
      });
    }

    // 3. Navbar Scroll Effect Logic
    const navbar = this.querySelector('#navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('bg-white/95', 'backdrop-blur-xl', 'border-b', 'border-slate-200', 'shadow-sm', 'py-3');
        navbar.classList.remove('bg-white/90', 'backdrop-blur-md', 'py-4', 'border-b', 'border-slate-100', 'shadow-sm');
      } else {
        navbar.classList.add('bg-white/90', 'backdrop-blur-md', 'py-4', 'border-b', 'border-slate-100', 'shadow-sm');
        navbar.classList.remove('bg-white/95', 'backdrop-blur-xl', 'border-b', 'border-slate-200', 'shadow-sm', 'py-3');
      }
    });
  }
}
customElements.define('vista-nav', VistaNav);