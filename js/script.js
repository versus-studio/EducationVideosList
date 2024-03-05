function popupMsg() {
  const popupContainer = document.getElementById("popup");
  const closeBtn = document.getElementById("close-btn");

  popupContainer.style.right = "10px";

  closeBtn.addEventListener("click", () => {
    popupContainer.style.right = "-400px";
  });

  window.addEventListener("scroll", function () {
    if (popupContainer.style.display !== "none") {
      var scrolled = window.pageYOffset || document.documentElement.scrollTop;
      popupContainer.style.top = scrolled + 90 + "px";
    }
  });
}
