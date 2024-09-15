let promedios = {
  mañana: 0,
  tarde: 0,
  noche: 0
};

let edadesIngresadas = {
  mañana: false,
  tarde: false,
  noche: false
};

// Función para ingresar edades y calcular el promedio de cada turno
function ingresarEdades(turno, cantidad) {
  let totalEdad = 0;

  // Ciclo para solicitar las edades de los estudiantes de cada turno
  for (let i = 1; i <= cantidad; i++) {
    let edad = parseInt(window.prompt(`Ingresa la edad del estudiante ${i} del turno ${turno}:`));

    // Validar si el valor ingresado es un número
    while (isNaN(edad) || edad <= 0) {
      edad = parseInt(window.prompt(`Edad no válida. Ingresa de nuevo la edad del estudiante ${i} del turno ${turno}:`));
    }

    totalEdad += edad;
  }

  // Calcular el promedio
  let promedio = totalEdad / cantidad;
  promedios[turno] = promedio;
  edadesIngresadas[turno] = true; // Marcar como ingresado

  alert(`Promedio de edades del turno ${turno}: ${promedio.toFixed(2)} años`);
}

// Función para evaluar y mostrar cuál turno tiene el promedio mayor
function evaluarPromedios() {
  // Verificar si todas las edades han sido ingresadas
  if (!edadesIngresadas.mañana || !edadesIngresadas.tarde || !edadesIngresadas.noche) {
    alert('Debes ingresar las edades de todos los turnos antes de evaluar.');
    return;
  }

  // Mostrar los promedios en pantalla
  mostrarPromedios();

  // Determinar cuál turno tiene el promedio mayor
  mostrarTurnoConMayorPromedio();
}

// Función para mostrar los promedios en pantalla
function mostrarPromedios() {
  let mensaje = `Promedio de edades por turno:<br>
                 Turno Mañana: ${promedios.mañana.toFixed(2)} años<br>
                 Turno Tarde: ${promedios.tarde.toFixed(2)} años<br>
                 Turno Noche: ${promedios.noche.toFixed(2)} años`;

  document.getElementById("resultadoPromedios").innerHTML = mensaje;
}

// Función para determinar cuál turno tiene el mayor promedio
function mostrarTurnoConMayorPromedio() {
  let mayorPromedio = Math.max(promedios.mañana, promedios.tarde, promedios.noche);
  let mensaje = '';

  // Determinar turno con mayor promedio
  if (mayorPromedio === promedios.mañana) {
    mensaje = 'El turno con el mayor promedio de edades es el turno de la Mañana.';
  } else if (mayorPromedio === promedios.tarde) {
    mensaje = 'El turno con el mayor promedio de edades es el turno de la Tarde.';
  } else if (mayorPromedio === promedios.noche) {
    mensaje = 'El turno con el mayor promedio de edades es el turno de la Noche.';
  }

  document.getElementById("mensajeTurnoMayor").textContent = mensaje;
}
