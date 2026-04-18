// Helper: Load external HTML into an element
async function loadComponent(id, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

// Helper: Load external JS dynamically
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.onload = () => resolve();
    s.onerror = () => reject("Failed to load " + src);
    document.body.appendChild(s);
  });
}

// Initialize Back-to-Top button
function initBackToTop() {
  const backToTopBtn = document.getElementById("backToTop");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 3000) backToTopBtn.classList.add("show");
    else backToTopBtn.classList.remove("show");
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Initialize Bootstrap Carousel manually after dynamic load
function initCarousels() {
  const heroCarousel = document.querySelector('#carouselExample');
  if (heroCarousel) {
    new bootstrap.Carousel(heroCarousel, {
      interval: 3000,
      ride: 'carousel'
    });
  }

  const testimonialCarousel = document.querySelector('#testimonialCarousel');
  if (testimonialCarousel) {
    new bootstrap.Carousel(testimonialCarousel, {
      interval: 4000,
      ride: 'carousel'
    });
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const base = "https://cdn.jsdelivr.net/gh/chentamil/sdjewellers@main";

  // 1. Load header & footer dynamically
  await loadComponent("header", base + "/components/header.html");
  await loadComponent("footer", base + "/components/footer.html");

  // 2. Load Bootstrap JS dynamically (only once)
  await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js");

  // 3. Load your gold/silver rates script
  await loadScript(base + "/js/ratev1.js");

  // 4. Initialize rates if function exists
  if (typeof loadRates === "function") loadRates();

  // 5. Initialize back-to-top button
  initBackToTop();

  // 6. Initialize all carousels manually
  initCarousels();
});
