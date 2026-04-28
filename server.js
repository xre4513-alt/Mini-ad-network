const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Test Ad (cat image)
const ad = {
  image: "https://placekitten.com/300/250",
  link: "https://example.com"
};

// API to get ad
app.get("/getAd", (req, res) => {
  res.json(ad);
});

// Click tracking
app.get("/click", (req, res) => {
  console.log("Ad clicked!");
  res.redirect(ad.link);
});

// Serve JS file
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
