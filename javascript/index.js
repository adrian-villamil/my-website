document.getElementsByClassName("barras")[0].addEventListener("click", () => {
    var contenedorEnlaces = document.getElementById("contenedor-enlaces");
    contenedorEnlaces.classList.toggle("enlaces-responsive");
})

Array.from(document.getElementsByClassName("enlace")).forEach((item) => {
    item.addEventListener("click", () => {
        document.getElementById("contenedor-enlaces").className = "enlaces";
    });
});