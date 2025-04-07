document.addEventListener('DOMContentLoaded', () => {
  console.log('Page Loaded Successfully');

  // Smooth scrolling for nav links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', event => {
      event.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Form submission alert
  const form = document.querySelector('form');
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('Thank you for reaching out!');
    form.reset();
  });
});
