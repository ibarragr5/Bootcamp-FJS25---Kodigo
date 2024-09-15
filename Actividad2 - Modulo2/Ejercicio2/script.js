var nombre;
var carnet;

// Validar nombre y carnet
do {
    nombre = window.prompt("Ingrese nombre del alumno: ");
} while (!/^[a-zA-Z\s]+$/.test(nombre)); // Solo permite letras y espacios

do {
    carnet = window.prompt("Ingrese número de carnet: ");
} while (!/^[a-zA-Z0-9]+$/.test(carnet)); // Solo permite letras y números

var examen;
var tareas;
var asistencia;
var investigacion;

// Función para validar notas
function obtenerNota(mensaje) {
    let nota;
    do {
        nota = window.prompt(mensaje);
        nota = parseFloat(nota); // Convertir a número decimal
        if (isNaN(nota) || nota < 0 || nota > 10) {
            alert("Entrada no válida. Asegúrese de ingresar un número entre 0 y 10.");
        }
    } while (isNaN(nota) || nota < 0 || nota > 10);
    return nota;
}

// Obtener notas
examen = obtenerNota("Ingrese nota de examen (0-10): ");
tareas = obtenerNota("Ingrese nota de tareas (0-10): ");
asistencia = obtenerNota("Ingrese nota de asistencia (0-10): ");
investigacion = obtenerNota("Ingrese nota de investigación (0-10): ");

// Cálculo de la nota final
const notaFinal = (examen * 0.2) + (tareas * 0.4) + (asistencia * 0.1) + (investigacion * 0.3);

// Mostrar resultados y cálculo de nota
alert("Alumno: " + nombre + ". \nNúmero de carnet: " + carnet + ". \nNota Final: " + notaFinal.toFixed(2));