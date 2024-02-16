function rest(){
    window.location.href = 'restaurant.html'
}

function pool(){
    window.location.href = 'Kolam renang.html'
}

function gard(){
    window.location.href = 'taman.html'
}

function roof(){
    window.location.href = 'rooftop.html'
}

const nav = document.getElementById("navfx");

window.onscroll = function () {
  if (window.scrollY >= 100) {
    nav.classList.add("navfix");
  } else {
    nav.classList.remove("navfix");
  }
};
