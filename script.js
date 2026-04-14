async function loadComponent(id, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

// load everything first
document.addEventListener("DOMContentLoaded", async () => {
  await loadComponent("header", "/components/header.html");
  await loadComponent("footer", "/components/footer.html");

  // NOW load rates AFTER DOM exists
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/gh/chentamil/sdjewellers@main/js/rates.js";
  document.body.appendChild(script);
});
