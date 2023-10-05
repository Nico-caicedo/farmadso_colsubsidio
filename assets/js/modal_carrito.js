function abrir() {
    document.getElementById("vent").style.display = "block";
    document.body.style.overflow = "hidden"; // Desactiva el scroll en el body
    window.scrollTo(0, 0); // Mueve el scroll al principio
}


function cerrar() {
    document.getElementById("vent").style.display = "none";
    document.body.style.overflow = "auto"; // Reactiva el scroll en el body
}