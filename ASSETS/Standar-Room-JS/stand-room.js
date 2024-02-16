const btnch = document.getElementById("ava");
const tersedia = document.querySelector('.tersedia');

btnch.addEventListener('click', tap)
function tap(){
    tersedia.classList.toggle("newbtn")
}