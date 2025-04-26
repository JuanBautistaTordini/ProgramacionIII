// Obtenemos referencias a los elementos del DOM
const formulario = document.getElementById('formulario');
const emailInput = document.getElementById('email');
const mensajeDiv = document.getElementById('mensaje');

// Expresión regular para validar el email
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Agregamos un event listener al formulario para el evento submit
formulario.addEventListener('submit', function (evento) {
    // Evitamos que la página se refresque
    evento.preventDefault();

    // Obtenemos el valor del email
    const email = emailInput.value.trim();

    // Validamos el email con la expresión regular
    if (emailRegex.test(email)) {
        // Si el email es válido, mostramos mensaje de éxito
        mensajeDiv.className = 'exito'; //clase exito para diseñarlo
        mensajeDiv.textContent = 'El formulario fue enviado correctamente'; //contenedor del exito

        // Limpiamos el campo de email
        emailInput.value = '';
    } else {
        // Si el email no es válido, mostramos mensaje de error
        mensajeDiv.className = 'error';
        mensajeDiv.textContent = 'Por favor, ingrese un email válido';
    }
});