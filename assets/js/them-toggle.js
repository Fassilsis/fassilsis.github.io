<script>
  document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      body.classList.add(savedTheme);
    } else {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark');
      } else {
        body.classList.add('light');
      }
    }

    function updateButton() {
      if (body.classList.contains('dark')) {
        toggleBtn.textContent = 'Switch to Light Mode';
      } else {
        toggleBtn.textContent = 'Switch to Dark Mode';
      }
    }

    updateButton();

    toggleBtn.addEventListener('click', () => {
      if (body.classList.contains('dark')) {
        body.classList.replace('dark', 'light');
        localStorage.setItem('theme', 'light');
      } else {
        body.classList.replace('light', 'dark');
        localStorage.setItem('theme', 'dark');
      }
      updateButton();
    });
  });
</script>
