 <!-- gold rate Json start -->
        <div class="rate-bar">
        <marquee scrollamount="8" behavior="scroll" direction="right">
            💰 <span class="me-4">Gold: ₹<span id="gold-rate"></span>/g</span> 
            🥈 <span class="me-4">Silver: ₹<span id="silver-rate"></span>/g</span>
            📅 <span class="me-4">Updated: <span id="last-updated"></span></span>
        </marquee>
        </div>

       <script>
            // // Replace with the raw GitHub URL for the JSON file or Google Drive link
            // // URL to your JSON file hosted via JSDelivr CDN
            // const jsonUrl = 'https://cdn.jsdelivr.net/gh/chentamil/sdjewellers@main/rate.json';

            // fetch(jsonUrl)
            //     .then(response => response.json())
            //     .then(data => {
            //     document.getElementById('gold-rate').innerText = data.gold_rate;
            //     document.getElementById('silver-rate').innerText = data.silver_rate;
            //     document.getElementById('last-updated').innerText = data.last_updated;
            //     })
            //     .catch(error => {
            //     console.error('Error fetching data:', error);
            //     });


            // // https://docs.google.com/spreadsheets/d/1PmqYry7OrIzqm9I0cR7rmcyXspDmmDQhjMkqKwXw59o/edit?gid=0#gid=0
        //     const jsonUrl = 'https://opensheet.elk.sh/1PmqYry7OrIzqm9I0cR7rmcyXspDmmDQhjMkqKwXw59o/Sheet1';
        //     fetch(jsonUrl)
        //     .then(response => response.json())
        //     .then(data => {
        //         const rates = data[0];

        //         document.getElementById('gold-rate').innerText = rates.gold_rate;
        //         document.getElementById('silver-rate').innerText = rates.silver_rate;
        //         document.getElementById('last-updated').innerText = rates.last_updated;
        //     })
        //     .catch(error => {
        //         console.error('Error fetching data:', error);
        //     });

function loadRates() {
  console.log("Loading rates...");

  fetch(
    "https://opensheet.elk.sh/1PmqYry7OrIzqm9I0cR7rmcyXspDmmDQhjMkqKwXw59o/Sheet1"
  )
    .then((r) => r.json())
    .then((data) => {
      console.log("Rates data:", data);

      const rates = data[0];

      const gold = document.getElementById("gold-rate");
      const silver = document.getElementById("silver-rate");
      const updated = document.getElementById("last-updated");

      console.log("Elements:", { gold, silver, updated });

      if (gold) gold.innerText = rates.gold_rate;
      if (silver) silver.innerText = rates.silver_rate;
      if (updated) updated.innerText = rates.last_updated;
    })
    .catch((err) => console.error("Rate error:", err));
}
        </script>
    <!-- gold rate Json end -->
