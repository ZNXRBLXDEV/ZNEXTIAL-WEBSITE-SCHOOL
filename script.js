// Smooth scroll to sections
function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });
}

// Optional: Animate sections on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.team-cards .card, .policy, .contact').forEach(el => {
  observer.observe(el);
});
