// Obtener referencias a los elementos de error
var errorNombre = document.getElementById("error-nombre");
var errorEmail = document.getElementById("error-email");
var errorNumero = document.getElementById("error-numero");
var errorMensaje = document.getElementById("error-mensaje");

// Validación del nombre
function validacionName() {
  var nombre = document.getElementById("contacto-name").value.trim();
  if (nombre.length == 0) {
    errorNombre.innerHTML = "Completar nombre";
    return false;
  }
  if (!/^[A-Za-z]+\s[A-Za-z]+$/.test(nombre)) {
    errorNombre.innerHTML = "Escribe el nombre completo";
    return false;
  }
  errorNombre.innerHTML = "<i class='bx bxs-check-circle' style='color:#12e02e'></i>";
  return true;
}

// Validación del email
function validacionEmail() {
  var email = document.getElementById("contacto-email").value.trim();
  if (email.length == 0) {
    errorEmail.innerHTML = "Completar email";
    return false;
  }
  if (!/^[A-Za-z._\-0-9]+@[A-Za-z]+\.[a-z]{2,4}$/.test(email)) {
    errorEmail.innerHTML = "Email inválido";
    return false;
  }
  errorEmail.innerHTML = "<i class='bx bxs-check-circle' style='color:#12e02e'></i>";
  return true;
}

// Validación del número de teléfono
function validacionNumero() {
  var numero = document.getElementById("numero").value.trim();
  if (numero.length == 0) {
    errorNumero.innerHTML = "Completar teléfono";
    return false;
  }
  if (numero.length != 10 || !/^[0-9]{10}$/.test(numero)) {
    errorNumero.innerHTML = "Debe tener 10 dígitos y solo números";
    return false;
  }
  errorNumero.innerHTML = "<i class='bx bxs-check-circle' style='color:#12e02e'></i>";
  return true;
}

// Validación del mensaje
function validacionMensaje() {
  var mensaje = document.getElementById("contacto-mensaje").value.trim();
  if (mensaje.length < 10) {
    errorMensaje.innerHTML = "Se necesitan al menos 10 caracteres";
    return false;
  }
  errorMensaje.innerHTML = "<i class='bx bxs-check-circle' style='color:#12e02e'></i>";
  return true;
}

// Validación del formulario antes de enviarlo
function validarFormulario(event) {
  if (!validacionName() || !validacionEmail() || !validacionNumero() || !validacionMensaje()) {
    event.preventDefault();  // Previene el envío del formulario si alguna validación falla
  }
}

// Asignar el evento de validación al formulario de contacto
document.getElementById("formulario-contacto").addEventListener("submit", validarFormulario);

// Obtener referencia al formulario de contacto
var formContacto = document.getElementById("formulario-contacto");

// Agregar evento de envío de formulario para el formulario de contacto
formContacto.addEventListener("submit", function(event) {
  event.preventDefault();

  // Obtener los valores del formulario de contacto
  var nombre = document.getElementById("contacto-name").value;
  var email = document.getElementById("contacto-email").value;
  var numero = document.getElementById("numero").value;
  var mensaje = document.getElementById("contacto-mensaje").value;

  // Guardar los valores en localStorage
  localStorage.setItem("nombre", nombre);
  localStorage.setItem("email", email);
  localStorage.setItem("numero", numero);
  localStorage.setItem("mensaje", mensaje);

  // Mostrar mensaje de confirmación
  alert("Los datos se han guardado correctamente en el localStorage.");
});
