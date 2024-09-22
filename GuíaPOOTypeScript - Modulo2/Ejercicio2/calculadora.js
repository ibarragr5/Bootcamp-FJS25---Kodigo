var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    // Método para sumar
    Calculadora.prototype.sumar = function (a, b) {
        return a + b;
    };
    // Método para restar
    Calculadora.prototype.restar = function (a, b) {
        return a - b;
    };
    // Método para multiplicar
    Calculadora.prototype.multiplicar = function (a, b) {
        return a * b;
    };
    // Método para dividir
    Calculadora.prototype.dividir = function (a, b) {
        if (b === 0) {
            throw new Error("No se puede dividir entre 0");
        }
        return a / b;
    };
    // Método para calcular la potencia
    Calculadora.prototype.potencia = function (base, exponente) {
        return Math.pow(base, exponente);
    };
    // Método para calcular el factorial
    Calculadora.prototype.factorial = function (n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * this.factorial(n - 1);
    };
    return Calculadora;
}());
// Ejemplo de uso
var calc = new Calculadora();
console.log("Suma:", calc.sumar(5, 3)); // Resultado: 8
console.log("Resta:", calc.restar(5, 3)); // Resultado: 2
console.log("Multiplicación:", calc.multiplicar(5, 3)); // Resultado: 15
console.log("División:", calc.dividir(6, 2)); // Resultado: 3
console.log("Potencia:", calc.potencia(2, 3)); // Resultado: 8
console.log("Factorial:", calc.factorial(5)); // Resultado: 120
