//Menu responsive

const menu = document.querySelector(".menu")
const abrirMenu = document.querySelector(".abrir-menu")
const cerrarMenu = document.querySelector(".cerrar-menu")
const bodyMargin = document.querySelector("body")

abrirMenu.addEventListener("click", toggleMenu)
cerrarMenu.addEventListener("click", toggleMenu)

function toggleMenu(){
    menu.classList.toggle("menu-abierto")
    bodyMargin.classList.toggle("body-menu-abierto")
}

// Cambio srollMarginTop responsive

const secciones = document.querySelectorAll(".main-container section");
const medida = matchMedia('(max-width: 770px)');
// console.log(medida)

const changeMedida = mql => {
  mql.matches
   ? secciones.forEach(sec => {
        sec.style.scrollMarginTop= "200px"})
   : secciones.forEach(sec => {
        sec.style.scrollMarginTop= "100px"})
 }


medida.addEventListener("change",changeMedida);
changeMedida(medida);

