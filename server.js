const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Store data per publisher
let stats = {};

const ad = {
  image: "https://picsum.photos/300/250",
  link: "https://example.com"
};

// Rates
const CPC = 2;   // ₹ per click
const CPM = 1;   // ₹ per 1000 impressions

// Get Ad
app.get("/getAd", (req, res) => {
  const site = req.query.site || "default";

  if (!stats[site]) {
    stats[site] = { impressions: 0, clicks: 0 };
  }

  stats[site].impressions++;

  res.json(ad);
});

// Click tracking
app.get("/click", (req, res) => {
  const site = req.query.site || "default";

  if (!stats[site]) {
    stats[site] = { impressions: 0, clicks: 0 };
  }

  stats[site].clicks++;

  res.redirect(ad.link);
});

// Stats API
app.get("/stats", (req, res) => {
  let result = {};

  for (let site in stats) {
    let impressions = stats[site].impressions;
    let clicks = stats[site].clicks;

    let earning =
      (clicks * CPC) +
      ((impressions / 1000) * CPM);

    result[site] = {
      impressions,
      clicks,
      earning: earning.toFixed(2)
    };
  }

  res.json(result);
});

// Serve static files
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
