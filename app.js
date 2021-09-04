const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuBtn.classList.add("circle");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuBtn.classList.remove("circle");
    menuOpen = false;
  }
});
