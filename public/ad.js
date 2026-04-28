(function () {
  const API = "https://mini-ad-network.onrender.com";

  fetch(API + "/getAd")
    .then(res => res.json())
    .then(ad => {
      const adDiv = document.getElementById("ad-slot");
      if (!adDiv) return;

      adDiv.innerHTML = `
        <a href="${API}/click" target="_blank">
          <img src="${ad.image}" width="300" height="250"/>
        </a>
      `;
    });
})();
