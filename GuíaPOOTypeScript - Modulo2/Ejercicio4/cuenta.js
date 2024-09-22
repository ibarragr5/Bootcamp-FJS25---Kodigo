var Cuenta = /** @class */ (function () {
    function Cuenta(nombre, cantidad, tipoCuenta, numeroCuenta) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }
    Cuenta.prototype.depositar = function (cantidad) {
        if (cantidad < 5) {
            console.log("El valor a depositar debe ser mayor a $5.00");
        }
        else {
            this.cantidad += cantidad;
            console.log("Se ha depositado correctamente: $".concat(cantidad, ". Saldo actual: $").concat(this.cantidad, "."));
        }
    };
    Cuenta.prototype.retirar = function (valor) {
        if (this.cantidad <= 5) {
            console.log("No hay suficiente dinero en la cuenta.");
        }
        else {
            this.cantidad -= valor;
            console.log("Has retirado: $".concat(valor, ". Saldo actual: $").concat(this.cantidad, "."));
        }
    };
    Cuenta.prototype.mostrarDatos = function () {
        console.log("Nombre: ".concat(this.nombre, ", Tipo de Cuenta: ").concat(this.tipoCuenta, ", N\u00FAmero de Cuenta: ").concat(this.numeroCuenta));
    };
    return Cuenta;
}());
// Definir un objeto de la clase Cuenta
var miCuenta = new Cuenta("Enrique Ibarra", 100, "Ahorros", "12345678");
// Llamar a los métodos
miCuenta.mostrarDatos();
miCuenta.depositar(10); // Prueba de depósito
miCuenta.retirar(50); // Prueba de retiro
miCuenta.retirar(4); // Prueba de retiro que debería fallar
