// script.js for ZNEXTIAL

document.addEventListener('DOMContentLoaded', () => {

  /* =============================
     Particles.js
     ============================= */
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: { value: 100 },
        color: { value: '#00bfff' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0.2 } },
        size: { value: 3, random: true, anim: { enable: true, speed: 2, size_min: 0.5 } },
        line_linked: { enable: true, distance: 150, color: "#00bfff", opacity: 0.3, width: 1 },
        move: { enable: true, speed: 1.5, random: true, out_mode: "out" }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" }
        },
        modes: {
          repulse: { distance: 120, duration: 0.4 },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });
  }

  /* =============================
     Scroll Animations
     ============================= */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('section, .hero').forEach(el => observer.observe(el));

  /* =============================
     Smooth Nav Buttons
     ============================= */
  const schoolBtn = document.getElementById("school-policy-btn");
  const directorsBtn = document.getElementById("directors-btn");
  const contactBtn = document.getElementById("contact-btn");

  if (schoolBtn) schoolBtn.addEventListener("click", () => {
    document.querySelector(".hero").scrollIntoView({ behavior: "smooth" });
  });

  if (directorsBtn) directorsBtn.addEventListener("click", () => {
    document.querySelector(".directors").scrollIntoView({ behavior: "smooth" });
  });

  if (contactBtn) contactBtn.addEventListener("click", () => {
    document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
  });

  /* =============================
     Button Click Effect
     ============================= */
  document.querySelectorAll("nav button").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.style.transform = "scale(0.95)";
      setTimeout(() => { btn.style.transform = "scale(1)"; }, 150);
    });
  });

  /* =============================
     Background Music
     ============================= */
  const music = document.getElementById('bg-music');
  if (music) {
    music.volume = 0.35;

    function tryPlay() {
      music.play().catch(() => {
        const resume = () => {
          music.play().catch(()=>{});
          document.removeEventListener('click', resume);
          document.removeEventListener('scroll', resume);
          document.removeEventListener('keydown', resume);
        };
        document.addEventListener('click', resume, { once: true });
        document.addEventListener('scroll', resume, { once: true });
        document.addEventListener('keydown', resume, { once: true });
      });
    }

    window.addEventListener('load', () => setTimeout(tryPlay, 200));
  }

});
