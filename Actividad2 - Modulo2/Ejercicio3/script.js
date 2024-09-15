var nombre;
// Validar nombre
do {
    nombre = window.prompt("Ingrese el nombre del empleado: ");
} while (!/^[a-zA-Z\s]+$/.test(nombre)); // Solo permite letras y espacios

var salario;
// Validar salario
do {
    salario = window.prompt("Ingrese el salario: ");
    salario = parseFloat(salario); // Convertir a número decimal
    if (isNaN(salario) || salario <= 0) {
        alert("Entrada no válida. Asegúrese de ingresar un número positivo.");
    }
} while (isNaN(salario) || salario <= 0);

var categoria;
// Validar categoría ingresada
do {
    categoria = window.prompt("Ingrese la categoría del empleado: ");
    if (categoria.length > 2 || !/^[a-zA-Z]+$/.test(categoria)) {
        alert("Entrada no válida. Asegúrese de ingresar solo letras y no más de 1 caracter.");
    }
} while (categoria.length > 5 || !/^[a-zA-Z]+$/.test(categoria));

var aumento = 0;
// Validar categoría de empleado y aumento que corresponde
switch (categoria.toUpperCase()) { // Convertir a mayúsculas para evitar problemas de mayúsculas/minúsculas
    case "A":
        aumento = salario * 0.15;
        break;
    case "B":
        aumento = salario * 0.3;
        break;
    case "C":
        aumento = salario * 0.1;
        break;
    case "D":
        aumento = salario * 0.2;
        break;
    default:
        alert("Por favor, selecciona una categoría válida.");
}

// Mostrar datos de empleado y aumento
alert("Nombre de empleado: " + nombre + ". \nSalario: $" + salario.toFixed(2) + ". \nCategoría: " + categoria.toUpperCase() + ". \nAumento: $" + aumento.toFixed(2));