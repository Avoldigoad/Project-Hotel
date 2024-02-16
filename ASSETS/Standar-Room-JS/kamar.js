const nav = document.getElementById("navfx");

window.onscroll = function () {
  if (window.scrollY >= 100) {
    nav.classList.add("navfix");
  } else {
    nav.classList.remove("navfix");
  }
}

const liroom1 = document.getElementById("liroom1");
const liroom2 = Document.getElementById("liroom2");
const liroom3 = document.getElementById("liroom3");
const liroom4 = document.getElementById("liroom4");
const liroom5 = document.getElementById("liroom5");

liroom1.addEventListener('click', standard);
function standard(){
  window.open("standard room.html")
}

