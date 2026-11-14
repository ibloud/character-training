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
