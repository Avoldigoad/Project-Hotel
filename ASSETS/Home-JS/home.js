const nav = document.getElementById("navfx");

window.onscroll = function () {
  if (window.scrollY >= 100) {
    nav.classList.add("navfix");
  } else {
    nav.classList.remove("navfix");
  }
};
