async function loadComponent(id, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

document.addEventListener("DOMContentLoaded", async () => {
  const base = "https://cdn.jsdelivr.net/gh/chentamil/sdjewellers@main";

  // 1. Load HTML first
  await loadComponent("header", base + "/components/header.html");
  await loadComponent("footer", base + "/components/footer.html");

  // 2. THEN load JS (IMPORTANT)
  loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js");

  loadScript(base + "/js/rates.js");
});

// helper
function loadScript(src) {
  const s = document.createElement("script");
  s.src = src;
  s.defer = true;
  document.body.appendChild(s);
}
