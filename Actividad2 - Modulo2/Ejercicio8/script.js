// Función que muestra la tabla de multiplicar
function mostrarTablaMultiplicar() {
  // Solicitar el número al usuario
  let numero = parseInt(window.prompt("Ingresa un número entre 1 y 10 para mostrar su tabla de multiplicar:"), 10);

  // Validar si el número está entre 1 y 10
  if (numero >= 1 && numero <= 10) {
    // Variable para almacenar el resultado de la tabla de multiplicar
    let resultado = `Tabla de multiplicar del ${numero}:\n`;

    for (let i = 1; i <= 10; i++) {
      resultado += `${numero} x ${i} = ${numero * i}\n`;
    }

    // Mostrar el resultado
    alert(resultado);
  } else {
    // Mostrar mensaje si el número no está en el rango
    alert("Por favor, ingresa un número válido entre 1 y 10.");
  }
}

mostrarTablaMultiplicar();
