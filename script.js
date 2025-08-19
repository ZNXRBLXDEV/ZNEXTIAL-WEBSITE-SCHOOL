/* ============================= */
/* PARTICLES.JS SETUP */
/* ============================= */
particlesJS('particles-js', {
  particles: {
    number: { value: 100 },
    color: { value: '#00bfff' },
    shape: {
      type: 'circle',
      stroke: { width: 0, color: '#000' }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0.2 }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: true, speed: 2, size_min: 0.5 }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00bfff",
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 1 } },
      bubble: { distance: 200, size: 6, duration: 2, opacity: 0.8, speed: 3 },
      repulse: { distance: 120, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});

/* ============================= */
/* SCROLL ANIMATIONS */
/* ============================= */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('section, .hero').forEach(el => observer.observe(el));

/* ============================= */
/* SMOOTH SCROLL FOR NAV BUTTONS */
/* ============================= */
const schoolBtn = document.getElementById("school-policy-btn");
const directorsBtn = document.getElementById("directors-btn");
const contactBtn = document.getElementById("contact-btn");

schoolBtn.addEventListener("click", () => {
  document.querySelector(".hero").scrollIntoView({ behavior: "smooth" });
});

directorsBtn.addEventListener("click", () => {
  document.querySelector(".directors").scrollIntoView({ behavior: "smooth" });
});

contactBtn.addEventListener("click", () => {
  document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
});

/* ============================= */
/* OPTIONAL: BUTTON CLICK EFFECT */
/* ============================= */
document.querySelectorAll("nav button").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.95)";
    setTimeout(() => { btn.style.transform = "scale(1)"; }, 150);
  });
});

/* ============================= */
/* FUTURE EXPANSION IDEAS */
/* ============================= */
// 1. Add modal popups for School Policy and Directors info
// 2. Animate neon glow on buttons when clicked
// 3. Add typing effect for hero text
