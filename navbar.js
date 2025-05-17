const btn = document.getElementById("btnNavbar");
const sidebar = document.querySelector(".sidebar_");

btn.addEventListener("click", (e) => {
  e.stopPropagation(); 
  sidebar.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (
    sidebar.classList.contains("active") &&
    !sidebar.contains(e.target) &&
    !btn.contains(e.target)  
  ) {
    sidebar.classList.remove("active");
  }
});
