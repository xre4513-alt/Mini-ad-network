(function () {
  fetch("/getAd")
    .then(res => res.json())
    .then(ad => {
      const adDiv = document.getElementById("ad-slot");
      if (!adDiv) return;

      adDiv.innerHTML = `
        <a href="/click" target="_blank">
          <img src="${ad.image}" width="300" height="250"/>
        </a>
      `;
    });
})();
