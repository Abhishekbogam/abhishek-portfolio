/* ============================================
   CERTIFICATES.JS
   Reads data/certificates.json and renders
   cert cards automatically.

   ✅ TO ADD A NEW CERTIFICATE:
      1. Drop the PDF into assets/certificates/
      2. Add one entry to data/certificates.json
      3. Done — no HTML to touch!
   ============================================ */

async function loadCertificates() {
  const grid = document.getElementById('certsGrid');
  if (!grid) return;

  try {
    const res   = await fetch('data/certificates.json');
    const certs = await res.json();

    grid.innerHTML = certs.map((cert, i) => `
      <div class="cert-card"
           data-delay="${i * 70}"
           data-cert="${cert.file}"
           data-title="${cert.title}"
           data-issuer="${cert.issuer}">
        <div class="cert-logo">${cert.icon}</div>
        <div class="cert-issuer">${cert.issuer}</div>
        <div class="cert-name">${cert.title}</div>
        <div class="cert-view">View Certificate ↗</div>
      </div>
    `).join('');

    // Animate cards in with staggered delay (bypass IntersectionObserver timing issue)
    grid.querySelectorAll('.cert-card').forEach((card, i) => {
      setTimeout(() => card.classList.add('visible'), 100 + i * 70);
    });

    // Wire up click → open modal
    grid.querySelectorAll('.cert-card[data-cert]').forEach(card => {
      card.addEventListener('click', () => {
        document.dispatchEvent(new CustomEvent('openCertModal', {
          detail: {
            src:    card.dataset.cert,
            title:  card.dataset.title,
            issuer: card.dataset.issuer
          }
        }));
      });
    });

  } catch (err) {
    console.error('Could not load certificates.json:', err);
    grid.innerHTML = '<p style="color:var(--muted);text-align:center;padding:40px">Could not load certificates.</p>';
  }
}

document.addEventListener('sectionsLoaded', loadCertificates);
