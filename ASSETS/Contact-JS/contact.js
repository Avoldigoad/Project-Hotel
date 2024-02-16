const lbl = document.getElementById("lbl");
const lbl1 = document.getElementById("lbl1");
const lbl2 = document.getElementById("lbl2");
const ipt = document.getElementById("ipt");
const ipt1 = document.getElementById("ipt1");
const ipt2 = document.getElementById("ipt2");

ipt.addEventListener("click", click)
function click(){
    lbl.classList.toggle("top0");
}

ipt1.addEventListener("click", click1);
function click1() {
  lbl1.classList.toggle("top0");
}

ipt2.addEventListener("click", click2);
function click2() {
  lbl2.classList.toggle("top0");
}