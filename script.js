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

// observe sections and hero if present
document.querySelectorAll('section, .hero').forEach(el => {
  if (el) observer.observe(el);
});

/* ============================= */
/* SMOOTH SCROLL FOR NAV BUTTONS */
/* ============================= */
const schoolBtn = document.getElementById("school-policy-btn");
const directorsBtn = document.getElementById("directors-btn");
const contactBtn = document.getElementById("contact-btn");

if (schoolBtn) {
  schoolBtn.addEventListener("click", () => {
    const el = document.getElementById('policy') || document.querySelector('.policy') || document.querySelector('.hero');
    if (el) el.scrollIntoView({ behavior: "smooth" });
  });
}

if (directorsBtn) {
  directorsBtn.addEventListener("click", () => {
    const el = document.getElementById('directors') || document.querySelector('.directors');
    if (el) el.scrollIntoView({ behavior: "smooth" });
  });
}

if (contactBtn) {
  contactBtn.addEventListener("click", () => {
    const el = document.querySelector('footer') || document.getElementById('contact') || document.querySelector('.contact');
    if (el) el.scrollIntoView({ behavior: "smooth" });
  });
}

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
/* BACKGROUND MUSIC AUTOPLAY HANDLING */
/* - Adds automatic play attempt and resumes on first interaction if blocked */
/* - Expects an <audio id="bg-music"> element in the page with a valid source */
/* ============================= */
(function() {
  const bg = document.getElementById('bg-music');
  if (!bg) return;

  // sensible default volume (0.0 - 1.0)
  try { bg.volume = 0.35; } catch (e) {}

  // small helper to attempt play and attach resume listeners if blocked
  function attemptPlay() {
    const p = bg.play();
    if (p !== undefined) {
      p.catch(() => {
        // autoplay blocked — resume on first meaningful user interaction
        const resume = () => {
          bg.play().catch(()=>{});
          document.removeEventListener('click', resume);
          document.removeEventListener('scroll', resume);
          document.removeEventListener('keydown', resume);
        };
        document.addEventListener('click', resume, { once: true });
        document.addEventListener('scroll', resume, { once: true });
        document.addEventListener('keydown', resume, { once: true });
      });
    }
  }

  // Try on load (with tiny delay for some browsers)
  window.addEventListener('load', () => setTimeout(attemptPlay, 250));
})();

/* ============================= */
/* FUTURE EXPANSION IDEAS (comments) */
/* ============================= */
// 1. Add modal popups for School Policy and Directors info
// 2. Animate neon glow on buttons when clicked
// 3. Add typing effect for hero text
