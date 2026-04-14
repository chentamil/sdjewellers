async function loadComponent(id, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

// Favicon Injection (Patchable Section)
async function loadFavicon() {
  const faviconLink = document.createElement("link");
  faviconLink.rel = "icon";
  faviconLink.href = "https://cdn.jsdelivr.net/gh/chentamil/sdjewellers@main/images/sdj-logo.jpg";  // Your Favicon URL
  faviconLink.type = "image/jpeg";
  document.head.appendChild(faviconLink);
}

document.addEventListener("DOMContentLoaded", async () => {
  const base = "https://cdn.jsdelivr.net/gh/chentamil/sdjewellers@main";
  // const base = "https://cdn.jsdelivr.net/gh/chentamil/sdjewellers@195a8b2729ab3da9fcaabe536d80fda8805382f2";

  // 1. Load Favicon
  await loadFavicon();

  // 2. Load header & footer
  await loadComponent("header", base + "/components/header.html");
  await loadComponent("footer", base + "/components/footer.html");

  // 3. Load Bootstrap (ONLY ONCE)
  await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js");

  // 4. Load rate.js properly
  await loadScript(base + "/js/ratev1.js");

  // 5. Call function AFTER everything is ready
  if (typeof loadRates === "function") {
    loadRates();
  } else {
    console.error("loadRates not found");
  }
});

// Helper to load external scripts
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;

    s.onload = () => resolve();
    s.onerror = () => reject("Failed to load " + src);

    document.body.appendChild(s);
  });
}
