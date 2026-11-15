const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.hidden = false;
  themeToggle.addEventListener('click', () => {
    const light = document.documentElement.dataset.theme !== 'light';
    document.documentElement.dataset.theme = light ? 'light' : 'dark';
    themeToggle.setAttribute('aria-pressed', String(light));
    themeToggle.textContent = light ? 'Dark mode' : 'Light mode';
  });
}

// One cross-site PIXIE entry point. The destination is a separate service:
// opening it does not transfer page data, authenticate, or claim a shared session.
if (!document.querySelector('.pixie-entry')) {
  const entry = document.createElement('a');
  entry.className = 'pixie-entry';
  entry.href = 'https://pixie-project-companion-production.up.railway.app/';
  entry.target = '_blank';
  entry.rel = 'noopener noreferrer';
  entry.setAttribute('aria-label', 'Open PIXIE Project Companion (external site)');
  entry.title = 'Open PIXIE Project Companion';
  const sigil = document.createElement('img');
  sigil.src = 'https://raw.githubusercontent.com/Loptr-Lab/pixie-ecosystem-guide/main/assets/pixie-sigil-proposal.png';
  sigil.alt = '';
  sigil.width = 60;
  sigil.height = 60;
  entry.appendChild(sigil);
  document.body.appendChild(entry);
}
