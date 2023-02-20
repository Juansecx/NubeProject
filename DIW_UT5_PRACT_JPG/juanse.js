const $d = document;

let volverBoton = $d.getElementById("volver");

volverBoton.setAttribute("style", "display:none");

$d.addEventListener("scroll", function () {
  volverBoton.removeAttribute("style");

  volverBoton.setAttribute("style", "display:block");
});

// Ejemplo de JavaScript inicial para deshabilitar el envío de formularios si hay campos no válidos
(function () {
  "use strict";

  // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
  var forms = document.querySelectorAll(".needs-validation");

  // Bucle sobre ellos y evitar el envío
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
