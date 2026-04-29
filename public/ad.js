(function () {
  const API = "https://mini-ad-network.onrender.com";
  const SITE_ID = "site1"; // change per website

  fetch(API + "/getAd?site=" + SITE_ID)
    .then(res => res.json())
    .then(ad => {
      const adDiv = document.getElementById("ad-slot");
      if (!adDiv) return;

      adDiv.innerHTML = `
        <a href="${API}/click?site=${SITE_ID}" target="_blank">
          <img src="${ad.image}" width="300" height="250"/>
        </a>
      `;
    });
})();
