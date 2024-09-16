document.getElementById('formViaje').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir envío automático del formulario

  const origen = document.getElementById('origen').value.trim();
  const destino = document.getElementById('destino').value;
  let descuento = 0;
  let mensaje = '';

  // Validar que se introduzcan ambos valores
  if (origen === "" || destino === "") {
      mensaje = "Por favor, ingresa la ciudad de origen y selecciona un destino.";
  } else {
      // Cálculo de descuento según destino seleccionado
      if (origen.toLowerCase() === "la palma") {
          switch (destino) {
              case "Costa del Sol":
                  descuento = 5;
                  break;
              case "Panchimalco":
                  descuento = 10;
                  break;
              case "Puerto el Triunfo":
                  descuento = 15;
                  break;
              default:
                  descuento = 0;
          }

          // Mensaje con destino seleccionado y el descuento a aplicar
          mensaje = `Origen: ${origen}<br>
                     Destino: ${destino}<br>
                     Descuento aplicado: ${descuento}%`;
      } else {
          mensaje = "El descuento solamente aplica si el origen es La Palma.";
      }
  }

  // Mostrar resultado
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = mensaje;
  resultadoDiv.style.display = 'block';
});
