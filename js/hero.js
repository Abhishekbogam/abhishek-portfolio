/* ============================================
   HERO.JS — Typed role animation
   ============================================ */

document.addEventListener('sectionsLoaded', () => {
  const el = document.getElementById('heroTyped');
  if (!el) return;

  const phrases = [
    'Gen AI Engineer',
    'Agentic RAG Builder',
    'LLM Orchestration Expert',
    'Multi-Agent Architect',
    'AI Systems Developer',
  ];

  let pi = 0, ci = 0, deleting = false;
  const SPEED_TYPE = 68, SPEED_DEL = 38, PAUSE = 1800;

  function type() {
    const current = phrases[pi];
    if (!deleting) {
      el.textContent = current.slice(0, ++ci);
      if (ci === current.length) {
        deleting = true;
        setTimeout(type, PAUSE);
        return;
      }
    } else {
      el.textContent = current.slice(0, --ci);
      if (ci === 0) {
        deleting = false;
        pi = (pi + 1) % phrases.length;
      }
    }
    setTimeout(type, deleting ? SPEED_DEL : SPEED_TYPE);
  }

  setTimeout(type, 1000);
});
