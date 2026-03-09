/* ============================================
   CONTACT.JS — Form handler
   ============================================ */

document.addEventListener('sectionsLoaded', () => {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name    = document.getElementById('formName')?.value.trim();
    const email   = document.getElementById('formEmail')?.value.trim();
    const subject = document.getElementById('formSubject')?.value.trim();
    const message = document.getElementById('formMessage')?.value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }

    const mailSubject = encodeURIComponent(subject || `Portfolio message from ${name}`);
    const mailBody    = encodeURIComponent(
      `Hi Abhishek,\n\n${message}\n\n---\nFrom: ${name}\nEmail: ${email}`
    );

    window.location.href =
      `mailto:bogamabhishek27@gmail.com?subject=${mailSubject}&body=${mailBody}`;

    if (feedback) {
      feedback.style.display = 'block';
      setTimeout(() => (feedback.style.display = 'none'), 5000);
    }

    form.reset();
  });
});
