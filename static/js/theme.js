(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('aten-theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    root.dataset.theme = savedTheme;
  } else if (prefersDark) {
    root.dataset.theme = 'dark';
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = nextTheme;
      localStorage.setItem('aten-theme', nextTheme);
    });
  }
})();
