const le_img = document.getElementById("le-img")
const le_img1 = document.getElementById("le-img1");
const le_img2 = document.getElementById("le-img2");
const le_img3 = document.getElementById("le-img3");
const le_img4 = document.getElementById("le-img4");

const mi_img = document.getElementById("mi-img")
const mi_img1 = document.getElementById("mi-img1")
const mi_img2 = document.getElementById("mi-img2")
const mi_img3 = document.getElementById("mi-img3");

const ri_img = document.getElementById("ri-img")
const ri_img1 = document.getElementById("ri-img1")
const ri_img2 = document.getElementById("ri-img2")
const ri_img3 = document.getElementById("ri-img3");

const btn_gal = document.getElementById("btgal");
const footer = document.getElementById("foot");

btn_gal.addEventListener('click', show);
function show() {
    le_img.classList.toggle("block");
    le_img1.classList.toggle("block");
    le_img2.classList.toggle("block");
    le_img3.classList.toggle("block");
    le_img4.classList.toggle("block");

    mi_img.classList.toggle("block");
    mi_img1.classList.toggle("block");
    mi_img2.classList.toggle("block");
    mi_img3.classList.toggle("block");

    ri_img.classList.toggle("block");
    ri_img1.classList.toggle("block");
    ri_img2.classList.toggle("block");
    ri_img3.classList.toggle("block");

    btn_gal.classList.toggle("down")
    footer.classList.toggle("newfoot")

    if (btn_gal.innerText === "Show More"){
        btn_gal.innerText = "Show Less";
    } else {
        btn_gal.innerText = "Show More";
    }
}