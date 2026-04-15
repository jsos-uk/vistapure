class VistaFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <!-- Professional Footer -->
      <footer class="bg-white pt-16 pb-8 border-t border-slate-100 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
            
            <!-- Brand - Span 4 -->
            <div class="lg:col-span-4">
              <div class="flex items-center gap-2 mb-6">
                <img 
                  src="images/logo-rectangle.png" 
                  alt="Vista Pure Logo" 
                  class="logo-crisp h-12 w-auto"
                  onerror="this.src='https://placehold.co/200x80?text=Vista+Pure'"
                />
              </div>
              <p class="text-slate-500 mb-8 max-w-sm leading-relaxed">
                Elevating property exteriors with reliable, insured, and professional pure water cleaning technology.
              </p>
              <div class="flex gap-4">
                <a href="#" class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-cyan-50 hover:text-cyan-600 transition-colors">
                  <span class="sr-only">Facebook</span>
                  <i data-lucide="facebook" class="w-5 h-5"></i>
                </a>
                <a href="#" class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-cyan-50 hover:text-cyan-600 transition-colors">
                  <span class="sr-only">Instagram</span>
                  <i data-lucide="instagram" class="w-5 h-5"></i>
                </a>
              </div>
            </div>

            <!-- Services - Span 3 -->
            <div class="lg:col-span-3">
              <h4 class="text-slate-900 font-bold mb-6">Our Services</h4>
              <ul class="space-y-4 text-slate-500 font-medium">
                <li><a href="window-cleaning.html" class="hover:text-cyan-600 transition-colors">Window Cleaning</a></li>
                <li><a href="gutter-clearing.html" class="hover:text-cyan-600 transition-colors">Gutter Clearing</a></li>
                <li><a href="conservatory-roofs.html" class="hover:text-cyan-600 transition-colors">Conservatory Roofs</a></li>
                <li><a href="fascias-soffits.html" class="hover:text-cyan-600 transition-colors">Fascias & Soffits</a></li>
              </ul>
            </div>

            <!-- Explore - Span 2 -->
            <div class="lg:col-span-2">
              <h4 class="text-slate-900 font-bold mb-6">Explore</h4>
              <ul class="space-y-4 text-slate-500 font-medium">
                <li><a href="index.html" class="hover:text-cyan-600 transition-colors">Home</a></li>
                <li><a href="services.html" class="hover:text-cyan-600 transition-colors">All Services</a></li>
                <li><a href="index.html#reviews" class="hover:text-cyan-600 transition-colors">Reviews</a></li>
                <li><a href="index.html#areas" class="hover:text-cyan-600 transition-colors">Areas Covered</a></li>
              </ul>
            </div>

            <!-- Contact Us - Span 3 -->
            <div class="lg:col-span-3">
              <h4 class="text-slate-900 font-bold mb-6">Contact Us</h4>
              <ul class="space-y-4 text-slate-500 font-medium">
                <li><a href="tel:+447834668439" class="flex items-center hover:text-cyan-600 transition-colors"><i data-lucide="phone" class="w-5 h-5 mr-3 text-slate-300"></i>07834 668439</a></li>
                <li><a href="https://wa.me/447834668439" class="flex items-center hover:text-cyan-600 transition-colors"><i data-lucide="message-circle" class="w-5 h-5 mr-3 text-slate-300"></i>WhatsApp Us</a></li>
                <li class="flex items-start"><i data-lucide="map-pin" class="w-5 h-5 mr-3 mt-0.5 text-slate-300"></i><span>Serving the local area<br/>and surrounding districts.</span></li>
              </ul>
            </div>

          </div>
          
          <div class="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400 font-medium text-center md:text-left">
            <div class="flex flex-col md:flex-row md:items-center gap-2">
              <p>&copy; ${new Date().getFullYear()} Vista Pure Window Cleaning. All rights reserved.</p>
              <span class="hidden md:block text-slate-300">|</span>
              <p>Designed by <a href="https://jsos.uk" target="_blank" rel="noopener noreferrer" class="text-cyan-600 hover:text-cyan-700 font-bold transition-colors">JS Office Solutions</a></p>
            </div>
            <div class="flex space-x-6 mt-4 md:mt-0">
              <a href="#" class="hover:text-slate-900 transition-colors">Privacy Policy</a>
              <a href="#" class="hover:text-slate-900 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <!-- Site-wide Floating WhatsApp Button -->
      <a href="https://wa.me/447834668439" target="_blank" rel="noopener noreferrer" class="fixed bottom-6 right-6 z-50 bg-white text-slate-900 p-4 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] border border-slate-100 transition-all flex items-center group cursor-pointer transform hover:-translate-y-1">
        <div class="bg-[#25D366] text-white p-2 rounded-xl mr-3 relative">
          <i data-lucide="message-circle" class="w-6 h-6"></i>
          <span class="absolute -top-1 -right-1 flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-white border-2 border-[#25D366]"></span>
          </span>
        </div>
        <div class="flex flex-col pr-2">
          <span class="text-xs text-slate-500 font-medium">Questions?</span>
          <span class="text-sm font-extrabold text-slate-900">Chat with us</span>
        </div>
      </a>
    `;

    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }
}
customElements.define('vista-footer', VistaFooter);
