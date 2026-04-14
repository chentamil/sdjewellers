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

  // 3. Load rate script
  loadScript(base + "/js/rate.js");

  // 4. 🔥 FIX: ensure rates run AFTER script loads + DOM is ready
  waitForRatesThenRun();
});

// helper
function loadScript(src) {
  const s = document.createElement("script");
  s.src = src;
  s.defer = true;
  document.body.appendChild(s);
}

/* =========================
   🔥 FIX SECTION (ADDED ONLY)
   ========================= */

function waitForRatesThenRun() {
  const check = setInterval(() => {
    const gold = document.getElementById("gold-rate");
    const silver = document.getElementById("silver-rate");
    const updated = document.getElementById("last-updated");

    if (gold && silver && updated && typeof loadRates === "function") {
      clearInterval(check);
      loadRates(); // safely trigger AFTER DOM + script ready
    }
  }, 100);
}
