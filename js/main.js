/* ============================================
   MAIN.JS — App entry point & misc utilities
   ============================================ */

// Force download for RESUME only
function forceDownload(url, filename) {
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  setTimeout(() => document.body.removeChild(a), 200);
}

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

  // Ripple effect on buttons
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      ripple.style.cssText = `
        position:absolute; border-radius:50%;
        background:rgba(255,255,255,0.3);
        width:${Math.max(rect.width, rect.height) * 2}px;
        height:${Math.max(rect.width, rect.height) * 2}px;
        left:${e.clientX - rect.left - rect.width}px;
        top:${e.clientY - rect.top - rect.height}px;
        transform:scale(0); animation:ripple 0.5s linear; pointer-events:none;
      `;
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  const style = document.createElement('style');
  style.textContent = `@keyframes ripple { to { transform: scale(2.5); opacity: 0; } }`;
  document.head.appendChild(style);

  // ---- CERTIFICATE MODAL ----
  const modal    = document.getElementById('certModal');
  const frame    = document.getElementById('certModalFrame');
  const imgWrap  = document.getElementById('certModalImgWrap');
  const img      = document.getElementById('certModalImg');
  const titleEl  = document.getElementById('certModalTitle');
  const issuerEl = document.getElementById('certModalIssuer');
  const closeBtn = document.getElementById('certModalClose');

  function openModal(src, title, issuer) {
    titleEl.textContent  = title;
    issuerEl.textContent = issuer;

    const isImage = /\.(png|jpe?g|webp|gif)$/i.test(src);
    if (isImage) {
      frame.style.display = 'none';
      imgWrap.style.display = 'flex';
      img.src = src;
      frame.src = '';
    } else {
      imgWrap.style.display = 'none';
      frame.style.display = 'block';
      frame.src = src + '#toolbar=0&navpanes=0&scrollbar=1&view=FitH';
    }
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    frame.src = '';
    img.src = '';
  }

  // Listen for openCertModal events dispatched by certificates.js
  document.addEventListener('openCertModal', e => {
    openModal(e.detail.src, e.detail.title, e.detail.issuer);
  });

  // Support direct clicks on any cert cards already in the DOM
  document.querySelectorAll('.cert-card[data-cert], .achieve-cert-card[data-cert]').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.cert, card.dataset.title, card.dataset.issuer));
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modal)    modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

  // ---- RESUME MODAL ----
  const resumeModal  = document.getElementById('resumeModal');
  const resumeFrame  = document.getElementById('resumeModalFrame');
  const resumeClose  = document.getElementById('resumeModalClose');
  const resumeBtn    = document.getElementById('navResumeBtn');
  const resumeBtnMob = document.getElementById('navResumeBtnMobile');
  const resumeDlBtn  = document.getElementById('resumeModalDownload');

  function openResume() {
    resumeFrame.src = 'assets/resume/abhishek-resume.pdf#toolbar=0&navpanes=0&scrollbar=1&view=FitH';
    resumeModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeResume() {
    resumeModal.classList.remove('open');
    document.body.style.overflow = '';
    resumeFrame.src = '';
  }

  if (resumeDlBtn) {
    resumeDlBtn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      forceDownload('assets/resume/abhishek-resume.pdf', 'Abhishek-Bogam-Resume.pdf');
    });
  }

  if (resumeBtn)    resumeBtn.addEventListener('click', openResume);
  if (resumeBtnMob) resumeBtnMob.addEventListener('click', openResume);
  if (resumeClose)  resumeClose.addEventListener('click', closeResume);
  if (resumeModal)  resumeModal.addEventListener('click', e => { if (e.target === resumeModal) closeResume(); });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (modal?.classList.contains('open'))       closeModal();
      if (resumeModal?.classList.contains('open')) closeResume();
    }
  });

  console.log('%c👋 Hi! Built with care by Bogam Abhishek', 'color:#1a6bcc;font-size:14px;font-weight:bold;');

}); // end sectionsLoaded
