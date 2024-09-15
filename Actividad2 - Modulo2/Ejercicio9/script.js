// Función para convertir Celsius a Fahrenheit y determinar la categoría de la temperatura
function convertirTemperatura() {
  // Solicitar temperatura en grados Celsius
  let celsius = parseFloat(window.prompt("Ingresa la temperatura en grados Celsius:"));

  // Convertir la temperatura de Celsius a Fahrenheit
  let fahrenheit = (celsius * 9/5) + 32;

  // Mostrar el resultado en Fahrenheit
  alert(`La temperatura en Fahrenheit es: ${fahrenheit.toFixed(2)} ºF`);

  // Determinar la categoría de la temperatura en Fahrenheit
  if (fahrenheit >= 14 && fahrenheit <= 32) {
    alert("Temperatura baja");
  } else if (fahrenheit > 32 && fahrenheit <= 68) {
    alert("Temperatura adecuada");
  } else if (fahrenheit > 68 && fahrenheit <= 96) {
    alert("Temperatura alta");
  } else {
    alert("Temperatura desconocida");
  }
}

convertirTemperatura();
