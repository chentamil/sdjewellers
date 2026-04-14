async function loadComponent(id, file) {
  try {
    const res = await fetch(file);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
  } catch (err) {
    console.error("Error loading component:", file, err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const base = "https://cdn.jsdelivr.net/gh/chentamil/sdjewellers@main";

  loadComponent("header", base + "/components/header.html");
  loadComponent("footer", base + "/components/footer.html");
});
