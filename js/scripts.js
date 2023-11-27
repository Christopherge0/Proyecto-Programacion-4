// scripts.js

// Función para mostrar los horarios
// scripts.js

// Función para mostrar los horarios
function mostrarHorarios(checkboxId) {
    // Obtener el checkbox y el combobox correspondiente
    var checkbox = document.getElementById(checkboxId);
    var contenedorHorarios = document.getElementById("contenedorHorarios" + checkboxId.charAt(0).toUpperCase() + checkboxId.slice(1)); // Construir el identificador del contenedor del combobox

    // Obtener el combobox dentro del contenedor
    var combobox = contenedorHorarios.querySelector("select");

    // Limpiar opciones del combobox
    combobox.innerHTML = '';

    // Definir opciones según el checkbox seleccionado
    var opciones;
    if (checkboxId === "manana") {
        opciones = ["Lunes a Viernes 8:00 am", "Lunes a Viernes 10:00 am", "Lunes a Viernes 11:20 am"];
    } else if (checkboxId === "tarde") {
        opciones = ["Lunes a Viernes 1:00 pm", "Lunes a Viernes 3:00 pm", "Lunes a Viernes 5:00 pm"];
    }

    // Si el checkbox está marcado, mostrar el combobox
    if (checkbox.checked) {
        contenedorHorarios.style.display = "block";

        // Agregar opciones al combobox
        for (var i = 0; i < opciones.length; i++) {
            var opcion = document.createElement("option");
            opcion.text = opciones[i];
            combobox.add(opcion);
        }
    } else {
        // Si el checkbox no está marcado, ocultar el combobox
        contenedorHorarios.style.display = "none";
    }
}
function multiplicar() {
    // Obtener el valor del campo de texto
    var numeroNinos = document.getElementById("numero").value;
    // Convertir el valor a un número
    numeroNinos = Number(numeroNinos);
    // Obtener el elemento donde se mostrará el resultado
    var resultado = document.getElementById("resultado");
    // Si el valor es válido, realizar la multiplicación
    if (!isNaN(numeroNinos)) {
      // Multiplicar el valor por 2
      var totalMtricula = numeroNinos * 160000;
      // Mostrar el resultado
      resultado.textContent = "La cantidad total de alumnos a inscribir es de " + numeroNinos + " y el total apagar de matricula corresponde a: " + totalMtricula;
      alert("¡Espacio reservado con exito!");
    } else {
      // Mostrar un mensaje de error
      resultado.textContent = "No se an ingresado alumnos a inscribir";
      alert("No se an ingresado alumnos a inscribir");
    }
  }
  function validarInput(input) {
    if (input.value < 0) {
        input.value = '';
        alert('Por favor, ingresa un número positivo.');
    }
}
function validarInput(input) {
    var valor = input.value;
    var numerico = /^[0-9]+$/;
    if(!valor.match(numerico)) {
        input.value = '';
        alert('Por favor, ingresa solo números.');
    }
}

// Otro código de tu archivo scripts.js, si lo tienes
// ...


