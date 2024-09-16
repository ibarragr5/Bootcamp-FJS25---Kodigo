var edad;
do {
  // Solicitar edad
  edad = window.prompt("Por favor, ingrese su edad:");

  // Convertir entrada de teclado a número
  edad = parseInt(edad);

  // Validación que la entrada de teclado sea un número y se encuentre en el rango correcto
  if (isNaN(edad) || edad < 1 || edad > 120) {
    alert("Entrada no válida. \n¿Está seguro que usted tiene " +edad +" años de edad?"
    );
  }
} while (isNaN(edad) || edad < 1 || edad > 120);

// Comprobar si la edad ingresada es mayor o igual a 18
if (edad >= 18) {
  alert("Usted es mayor de edad");
} else {
  alert("Usted es menor de edad");
}
