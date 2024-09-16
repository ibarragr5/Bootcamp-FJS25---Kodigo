//Ingreso y validación de primer número
var valor1 = parseInt(window.prompt("Ingrese un número: "));
while (isNaN(valor1)) {
    valor1 = parseInt(window.prompt("El valor ingresado no es un número. Por favor, ingrese un número válido: "));
}
//Ingreso y validación de segundo número
var valor2 = parseInt(window.prompt("Ingrese otro número: "));
while (isNaN(valor2)) {
    valor2 = parseInt(window.prompt("El valor ingresado no es un número. Por favor, ingrese un número válido: "));
}

// Verificar cuál número es mayor
if (valor1 > valor2) {
    alert("El número mayor es: " + valor1);
} else if (valor1 < valor2) {
    alert("El número mayor es: " + valor2);
} else {
    alert("Ambos números son iguales.");
}
