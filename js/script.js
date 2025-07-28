// Add active navigation highlight on scroll
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  function updateActive() {
    let index = sections.length;
    while (--index && window.scrollY + 150 < sections[index].offsetTop) {}
    navLinks.forEach(link => link.classList.remove('active'));
    navLinks[index].classList.add('active');
  }

  updateActive();
  window.addEventListener('scroll', updateActive);
});
