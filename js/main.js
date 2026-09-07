(function () {
  "use strict";

  /* ------------------------------------------------------------
     Nav: fondo sólido al hacer scroll
     ------------------------------------------------------------ */
  var nav = document.getElementById("nav");
  var toggleNav = function () {
    if (window.scrollY > 12) {
      nav.classList.add("is-scrolled");
    } else {
      nav.classList.remove("is-scrolled");
    }
  };
  toggleNav();
  window.addEventListener("scroll", toggleNav, { passive: true });

  /* ------------------------------------------------------------
     Reveal on scroll (un único patrón, respeta reduced-motion)
     ------------------------------------------------------------ */
  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  var revealEls = document.querySelectorAll(".reveal");

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ------------------------------------------------------------
     Placeholder de WhatsApp: evita que el botón navegue a "#"
     hasta que se agregue el enlace real. Ver README.
     ------------------------------------------------------------ */
  var waButton = document.querySelector("[data-whatsapp-placeholder]");
  if (waButton) {
    waButton.addEventListener("click", function (e) {
      e.preventDefault();
      console.info(
        "Alive Studio: reemplaza WHATSAPP_URL_AQUI en index.html (bloque #cierre) por el enlace real de WhatsApp."
      );
    });
  }

  /* ------------------------------------------------------------
     Smooth scroll fallback para navegadores sin soporte CSS
     ------------------------------------------------------------ */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      if (id.length > 1) {
        var target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: prefersReducedMotion ? "auto" : "smooth",
            block: "start",
          });
        }
      }
    });
  });
})();
