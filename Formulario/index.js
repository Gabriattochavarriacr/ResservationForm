document.addEventListener("DOMContentLoaded", function () {
    var formulario = document.querySelector("form");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        var nombre = document.getElementsByName("Nombre")[0].value;
        if (nombre === "") {
            alert("Por favor, ingresa tu nombre.");
            return;
        }
        if (/\d/.test(nombre)) {
            alert("El nombre no debe contener números.");
            return;
        }

        var apellido = document.getElementsByName("Apellido")[0].value;
        if (apellido === "") {
            alert("Por favor, ingresa tu apellido.");
            return;
        }
        if (/\d/.test(apellido)) {
            alert("El apellido no debe contener números.");
            return;
        }

        var correo = document.getElementsByName("Correo")[0].value;
        if (correo === "") {
            alert("Por favor, ingresa tu correo electrónico.");
            return;
        }
        if (!/\S+@\S+\.\S+/.test(correo)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }

        var telefono = document.getElementsByName("Teléfono")[0].value;
        if (telefono === "") {
            alert("Por favor, ingresa tu teléfono.");
            return;
        }
        if (/\D/.test(telefono)) {
            alert("El teléfono no debe contener letras.");
            return;
        }

        var fechaEntrada = document.getElementsByName("FechaEntrada")[0].value;
        var fechaActual = new Date().toISOString().split("T")[0];
        if (fechaEntrada < fechaActual) {
            alert("La fecha de entrada no puede ser anterior a la fecha actual.");
            return;
        }

        var fechaSalida = document.getElementsByName("FechaSalida")[0].value;
        if (fechaSalida < fechaActual) {
            alert("La fecha de salida no puede ser anterior a la fecha actual.");
            return;
        }

        var tipoHabitacionOptions = document.getElementsByName("opción");
        var tipoHabitacionSeleccionada = false;
        for (var i = 0; i < tipoHabitacionOptions.length; i++) {
            if (tipoHabitacionOptions[i].checked) {
                tipoHabitacionSeleccionada = true;
                break;
            }
        }
        if (!tipoHabitacionSeleccionada) {
            alert("Por favor, selecciona al menos una opción para 'Tipo de Habitación'.");
            return;
        }

        var acompananteOptions = document.getElementsByName("opción");
        var acompananteSeleccionada = false;
        for (var i = 0; i < acompananteOptions.length; i++) {
            if (acompananteOptions[i].checked) {
                acompananteSeleccionada = true;
                break;
            }
        }
        if (!acompananteSeleccionada) {
            alert("Por favor, selecciona al menos una opción para 'Acompañante niño menor de 5 años'.");
            return;
        }

        var mascotasOptions = document.getElementsByName("opción");
        var mascotasSeleccionada = false;
        for (var i = 0; i < mascotasOptions.length; i++) {
            if (mascotasOptions[i].checked) {
                mascotasSeleccionada = true;
                break;
            }
        }
        if (!mascotasSeleccionada) {
            alert("Por favor, selecciona al menos una opción para 'Viene con mascotas'.");
            return;
        }

        alert("¡Formulario enviado con éxito!");
        formulario.submit();
    });
});