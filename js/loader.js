/* ============================================
   LOADER.JS — Injects HTML sections into page
   ============================================ */

const sections = {
  'nav-placeholder':           'sections/nav.html',
  'hero-placeholder':          'sections/hero.html',
  'about-placeholder':         'sections/about.html',
  'experience-placeholder':    'sections/experience.html',
  'skills-placeholder':        'sections/skills.html',
  'projects-placeholder':      'sections/projects.html',
  'achievements-placeholder':  'sections/achievements.html',
  'certifications-placeholder':'sections/certifications.html',
  'education-placeholder':     'sections/education.html',
  'contact-placeholder':       'sections/contact.html',
  'footer-placeholder':        'sections/footer.html',
};

async function loadSection(id, file) {
  try {
    const res = await fetch(file);
    if (!res.ok) return;
    const html = await res.text();
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  } catch (e) {
    console.warn(`Could not load section: ${file}`, e);
  }
}

async function loadAll() {
  const promises = Object.entries(sections).map(([id, file]) => loadSection(id, file));
  await Promise.all(promises);
  // Dispatch event so other JS modules know DOM is ready
  document.dispatchEvent(new Event('sectionsLoaded'));
}

loadAll();
