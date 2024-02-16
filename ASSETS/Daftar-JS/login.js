const label = document.getElementById("lbl");
const label1 = document.getElementById("lbl1");
const label2 = document.getElementById("lbl2");
const input = document.getElementById("ipt");
const input1 = document.getElementById("ipt1");
const input2 = document.getElementById("ipt2");
const deco = document.getElementById("deco");
const deco1 = document.getElementById("deco1");

input.addEventListener("click", move);
function move() {
  label.classList.toggle("top");
  label.classList.toggle("change");
  deco.classList.toggle("animate");
}

input1.addEventListener("click", move1);
function move1() {
  label1.classList.toggle("top");
  label1.classList.toggle("change");
  deco1.classList.toggle("animate");
}

input2.addEventListener("click", move2);
function move2() {
  label2.classList.toggle("top");
  label2.classList.toggle("change");
  deco2.classList.toggle("animate");
}
