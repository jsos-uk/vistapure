class VistaNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav id="navbar" class="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md py-4 border-b border-slate-100 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center">
            
            <!-- Logo -->
            <a href="index.html" class="flex-shrink-0 flex items-center cursor-pointer group">
              <img src="images/logo-rectangle.png" alt="Vista Pure Logo" class="logo-crisp h-10 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-105" onerror="this.src='https://placehold.co/200x80?text=Vista+Pure'" />
            </a>

            <!-- Desktop Menu -->
            <div class="hidden md:flex items-center">
              <div class="flex items-center space-x-2 mr-4 px-4 py-1.5 rounded-full bg-slate-100/80 border border-slate-200/50">
                <a href="index.html" class="px-4 py-2 text-sm font-semibold rounded-full text-slate-600 hover:text-slate-900 hover:bg-white shadow-sm transition-all">Home</a>
                
                <!-- Desktop Services Dropdown -->
                <div class="relative group h-full flex items-center">
                  <a href="services.html" class="px-4 py-2 text-sm font-semibold rounded-full text-slate-600 hover:text-slate-900 hover:bg-white shadow-sm transition-all inline-flex items-center">
                    Services <i data-lucide="chevron-down" class="w-4 h-4 ml-1 opacity-70 group-hover:rotate-180 transition-transform duration-300"></i>
                  </a>
                  
                  <!-- Hover Dropdown Menu -->
                  <div class="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left scale-95 group-hover:scale-100 bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 p-2 z-50">
                    <a href="services.html" class="block px-4 py-2.5 text-sm font-bold text-slate-800 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-colors mb-1 border-b border-slate-50">View All Services</a>
                    <a href="window-cleaning.html" class="block px-4 py-2 text-sm font-medium text-slate-600 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-colors">Window Cleaning</a>
                    <a href="gutter-clearing.html" class="block px-4 py-2 text-sm font-medium text-slate-600 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-colors">Gutter Clearing</a>
                    <a href="conservatory-roofs.html" class="block px-4 py-2 text-sm font-medium text-slate-600 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-colors">Conservatory Roofs</a>
                    <a href="fascias-soffits.html" class="block px-4 py-2 text-sm font-medium text-slate-600 hover:text-cyan-600 hover:bg-slate-50 rounded-xl transition-colors">Fascias & Soffits</a>
                  </div>
                </div>

                <a href="index.html#process" class="px-4 py-2 text-sm font-semibold rounded-full text-slate-600 hover:text-slate-900 hover:bg-white shadow-sm transition-all">Our Process</a>
                <a href="index.html#reviews" class="px-4 py-2 text-sm font-semibold rounded-full text-slate-600 hover:text-slate-900 hover:bg-white shadow-sm transition-all">Reviews</a>
              </div>
              
              <!-- Desktop Action Buttons -->
              <div class="flex items-center space-x-2">
                <a href="tel:+447000000000" class="flex items-center px-5 py-2.5 text-sm font-bold text-slate-700 border-2 border-slate-200 rounded-full hover:bg-slate-50 hover:text-cyan-600 hover:border-cyan-200 transition-all">
                  <i data-lucide="phone" class="w-4 h-4 mr-2"></i> Call Us
                </a>
                <a href="index.html#quote-form" class="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white transition-all rounded-full bg-slate-900 hover:bg-cyan-700 shadow-md">
                  Get a Quote
                </a>
              </div>
            </div>

            <!-- Mobile Hamburger Button -->
            <div class="md:hidden flex items-center">
              <button id="mobile-menu-btn" class="p-2 rounded-full focus:outline-none text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors">
                <i data-lucide="menu" id="menu-icon" class="w-6 h-6"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile Menu Container -->
        <div id="mobile-menu" class="absolute top-full left-0 w-full bg-white border-t border-slate-100 px-4 pt-4 pb-6 shadow-2xl hidden flex-col gap-2 max-h-[80vh] overflow-y-auto">
          <a href="index.html" class="mobile-link px-4 py-3 text-base font-bold text-slate-800 hover:bg-blue-50 rounded-xl transition-colors">Home</a>
          
          <!-- Mobile Services Accordion -->
          <div class="flex flex-col">
            <button id="mobile-services-btn" class="w-full flex justify-between items-center px-4 py-3 text-base font-bold text-slate-800 hover:bg-blue-50 rounded-xl transition-colors focus:outline-none">
              Services
              <i data-lucide="chevron-down" id="mobile-services-icon" class="w-5 h-5 text-cyan-600 transition-transform duration-300"></i>
            </button>
            <div id="mobile-services-dropdown" class="hidden flex-col gap-1 pl-6 pr-4 py-2 bg-slate-50/50 rounded-xl mt-1 border border-slate-100">
              <a href="services.html" class="mobile-link block px-4 py-2.5 text-sm font-bold text-slate-800 hover:text-cyan-600 hover:bg-blue-50 rounded-lg transition-colors border-b border-slate-200">View All Services</a>
              <a href="window-cleaning.html" class="mobile-link block px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-cyan-600 hover:bg-blue-50 rounded-lg transition-colors mt-1">Window Cleaning</a>
              <a href="gutter-clearing.html" class="mobile-link block px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-cyan-600 hover:bg-blue-50 rounded-lg transition-colors">Gutter Clearing</a>
              <a href="conservatory-roofs.html" class="mobile-link block px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-cyan-600 hover:bg-blue-50 rounded-lg transition-colors">Conservatory Roofs</a>
              <a href="fascias-soffits.html" class="mobile-link block px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-cyan-600 hover:bg-blue-50 rounded-lg transition-colors">Fascias & Soffits</a>
            </div>
          </div>

          <a href="index.html#process" class="mobile-link px-4 py-3 text-base font-bold text-slate-800 hover:bg-blue-50 rounded-xl transition-colors">Our Process</a>
          <a href="index.html#reviews" class="mobile-link px-4 py-3 text-base font-bold text-slate-800 hover:bg-blue-50 rounded-xl transition-colors">Reviews & FAQs</a>
          <a href="index.html#areas" class="mobile-link px-4 py-3 text-base font-bold text-slate-800 hover:bg-blue-50 rounded-xl transition-colors">Areas Covered</a>
          
          <!-- Mobile Action Buttons -->
          <div class="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-3">
            <a href="tel:+447000000000" class="flex items-center justify-center w-full px-5 py-3 text-slate-700 font-bold border-2 border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              <i data-lucide="phone" class="w-5 h-5 mr-2"></i> Call Us
            </a>
            <a href="index.html#quote-form" class="flex items-center justify-center w-full px-5 py-4 text-base font-bold text-white bg-slate-900 rounded-xl shadow-md hover:bg-cyan-700 transition-colors">
              Get a Quote
            </a>
          </div>
        </div>
      </nav>
    `;

    // Re-render icons for injected HTML
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }

    // Master Mobile Menu Toggle
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

    // Mobile Services Accordion Toggle
    const mobileServicesBtn = this.querySelector('#mobile-services-btn');
    const mobileServicesDropdown = this.querySelector('#mobile-services-dropdown');
    const mobileServicesIcon = this.querySelector('#mobile-services-icon');
    let isServicesOpen = false;

    if (mobileServicesBtn && mobileServicesDropdown) {
      mobileServicesBtn.addEventListener('click', (e) => {
        e.preventDefault();
        isServicesOpen = !isServicesOpen;
        if (isServicesOpen) {
          mobileServicesDropdown.classList.remove('hidden');
          mobileServicesDropdown.classList.add('flex');
          mobileServicesIcon.classList.add('rotate-180');
        } else {
          mobileServicesDropdown.classList.add('hidden');
          mobileServicesDropdown.classList.remove('flex');
          mobileServicesIcon.classList.remove('rotate-180');
        }
      });
    }

    // Navbar Scroll Background Effect
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
