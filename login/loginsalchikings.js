


function iniciarSesion(e) {
    e.preventDefault();

    let user = document.getElementById("usuario").value.trim().toLowerCase();
    let pass = document.getElementById("contraseña").value.trim();

    console.log("Usuario:", user, "Contraseña:", pass);

    if (user === "esteban" && pass === "1234") {
        localStorage.setItem("logueado", "true");
        alert("¡Sesión iniciada correctamente!");
        window.location.href = "../Salchikings/salchikings.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}


  

