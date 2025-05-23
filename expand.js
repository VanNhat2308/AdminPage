document.addEventListener("DOMContentLoaded", function () {
  const expandBtn = document.getElementById("expandBtn");
  const backBtn = document.getElementById("backBtn");
  const mapDiv = document.getElementById("map");

  expandBtn.addEventListener("click", () => {
    mapDiv.classList.add("fullscreen-map");
    expandBtn.classList.add("hidden");
    backBtn.classList.remove("hidden");
    setTimeout(() => {
      map.invalidateSize();
    }, 300);
  });

  backBtn.addEventListener("click", () => {
    mapDiv.classList.remove("fullscreen-map");
    expandBtn.classList.remove("hidden");
    backBtn.classList.add("hidden");
    setTimeout(() => {
      map.invalidateSize();
    }, 300);
  });
});