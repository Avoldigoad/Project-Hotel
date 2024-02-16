const label = document.getElementById("lbl");
const label1 = document.getElementById("lbl1");
const input = document.getElementById("ipt");
const input1 = document.getElementById("ipt1");



input.addEventListener("click", move);
function move() {
  label.classList.add("top");
  label.classList.add("change");
  deco.classList.add("animate");
}
input1.addEventListener("click", move1);
function move1() {
  label1.classList.add("top");
  label1.classList.add("change");
  deco1.classList.add("animate");
}

