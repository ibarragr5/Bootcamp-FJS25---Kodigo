// Función principal para ingresar valores y realizar las validaciones
function procesarValores() {
  let negativos = 0;
  let positivos = 0;
  let multiplo15 = 0;
  let acumuladoPares = 0;
  
  alert(`Ingresa 10 valores para ser validados.`);
  // Ciclo para ingresar los 10 valores
  for (let i = 1; i <= 10; i++) {
    let valor = parseInt(window.prompt(`Ingresa el valor ${i}:`), 10);

    // Verificar si el valor es negativo o positivo y sumarlo al acumulado de negativos o positivos
    if (valor < 0) {
      negativos++;
    } else if (valor > 0) {
      positivos++;
    }

    // Verificar si el valor es múltiplo de 15 y sumarlo al acumulado de múltiplos de 15
    if (valor % 15 === 0) {
      multiplo15++;
    }

    // Verificar si el valor es par y sumarlo al acumulado de pares
    if (valor % 2 === 0) {
      acumuladoPares += valor;
    }
  }

  // Mostrar resultados
  alert(`Cantidad de valores negativos: ${negativos}`+` \nCantidad de valores positivos: ${positivos}`+` \nCantidad de múltiplos de 15: ${multiplo15}`+` \nValor acumulado de números pares: ${acumuladoPares}`);
}

procesarValores();