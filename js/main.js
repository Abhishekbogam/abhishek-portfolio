/* ============================================
   MAIN.JS — App entry point & misc utilities
   ============================================ */

// Tooltip on skill tags (optional enhancement)
document.addEventListener('sectionsLoaded', () => {

  // Back to top on logo click
  const logo = document.querySelector('.nav-logo');
  if (logo) {
    logo.addEventListener('click', e => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Dynamic year in footer
  const yearEl = document.getElementById('footerYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Add hover ripple effect to buttons
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      ripple.style.cssText = `
        position:absolute;
        border-radius:50%;
        background:rgba(255,255,255,0.3);
        width:${Math.max(rect.width, rect.height) * 2}px;
        height:${Math.max(rect.width, rect.height) * 2}px;
        left:${e.clientX - rect.left - rect.width}px;
        top:${e.clientY - rect.top - rect.height}px;
        transform:scale(0);
        animation:ripple 0.5s linear;
        pointer-events:none;
      `;
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Inject ripple keyframes
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple {
      to { transform: scale(2.5); opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  console.log('%c👋 Hi! Built with care by Bogam Abhishek', 'color:#1a6bcc;font-size:14px;font-weight:bold;');
});
