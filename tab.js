const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tabName = btn.getAttribute("data-tab");

    // Xóa trạng thái active của tất cả tab buttons
    tabButtons.forEach((b) => {
      b.classList.remove("text-black", "border-b-2", "border-black");
      b.classList.add("text-[#818585]");
    });

    // Ẩn tất cả panel
    tabPanels.forEach((panel) => {
      panel.classList.add("hidden");
    });

    // Hiện panel tương ứng
    const targetPanel = document.querySelector(`.tab-panel[data-tab="${tabName}"]`);
    console.log(targetPanel);
    
    if (targetPanel) {
      targetPanel.classList.remove("hidden");
    }

    // Kích hoạt tab được chọn
    btn.classList.add("text-black", "border-b-2", "border-black");
    btn.classList.remove("text-[#818585]");
  });
});
