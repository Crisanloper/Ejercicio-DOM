const txtNombre = document.getElementById("txtNombre")
const btnGuardar = document.getElementById("btnGuardar")
alertValidaciones = document.getElementById("alertValidaciones")

btnGuardar.addEventListener("click", function (event) {

    event.preventDefault();
    alertValidaciones.innerHTML = "El nombre no es correcto";
    alertValidaciones.style.display = "none";

    if (txtNombre.value.length < 3) {
        alertValidaciones.innerHTML = "El nombre no es correcto";
        alertValidaciones.style.display = "block";
        return false;
    }//if nombre
    localStorage.setItem("nombre",txtNombre.value)

})