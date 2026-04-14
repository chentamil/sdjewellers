async function loadComponent(id, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}
document.addEventListener("DOMContentLoaded", async () => {
  //const base = "https://cdn.jsdelivr.net/gh/chentamil/sdjewellers@main";
 const base = "https://cdn.jsdelivr.net/gh/chentamil/sdjewellers@195a8b2729ab3da9fcaabe536d80fda8805382f2";

  // 1. Load header & footer
  await loadComponent("header", base + "/components/header.html");
  await loadComponent("footer", base + "/components/footer.html");

  // 2. Load Bootstrap (ONLY ONCE)
  await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js");

  // 3. Load rate.js properly
  await loadScript(base + "/js/ratev1.js");

  // 4. Call function AFTER everything is ready
  if (typeof loadRates === "function") {
    loadRates();
  } else {
    console.error("loadRates not found");
  }
});
// helper
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;

    s.onload = () => resolve();
    s.onerror = () => reject("Failed to load " + src);

    document.body.appendChild(s);
  });
}
