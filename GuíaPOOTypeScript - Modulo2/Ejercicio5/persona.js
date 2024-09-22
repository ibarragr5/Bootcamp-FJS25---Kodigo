var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Definir clase abstracta Persona
var Persona = /** @class */ (function () {
    // Constructor
    function Persona(nombre, apellido, direccion, telefono, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }
    // Método para verificar si es mayor de edad
    Persona.prototype.verificarEdad = function () {
        if (this.edad >= 18) {
            console.log("".concat(this.nombre, " es mayor de edad."));
        }
        else {
            console.log("".concat(this.nombre, " es menor de edad."));
        }
    };
    return Persona;
}());
// Clase Empleado que hereda de Persona
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    // Constructor
    function Empleado(nombre, apellido, direccion, telefono, edad, sueldo) {
        var _this = _super.call(this, nombre, apellido, direccion, telefono, edad) || this; // Llama al constructor de Persona
        _this.sueldo = sueldo;
        return _this;
    }
    // Método para cargar sueldo
    Empleado.prototype.cargarSueldo = function (nuevoSueldo) {
        this.sueldo = nuevoSueldo;
        console.log("Nuevo sueldo cargado: $".concat(this.sueldo));
    };
    // Método para imprimir sueldo
    Empleado.prototype.imprimirSueldo = function () {
        console.log("El sueldo de ".concat(this.nombre, " es $").concat(this.sueldo));
    };
    // Implementar método abstracto mostrarDatos
    Empleado.prototype.mostrarDatos = function () {
        console.log("Nombre: ".concat(this.nombre, " ").concat(this.apellido, ", Direcci\u00F3n: ").concat(this.direccion, ", Tel\u00E9fono: ").concat(this.telefono, ", Edad: ").concat(this.edad));
    };
    return Empleado;
}(Persona));
// Crear un objeto de la clase Empleado
var empleado = new Empleado("Enrique", "Ibarra", "Av. por aquí, por no estar por allá xd", "555-1234", 30, 1500);
// Llamar métodos
empleado.mostrarDatos(); // Imprime los datos del empleado
empleado.verificarEdad(); // Verifica si es mayor de edad
empleado.imprimirSueldo(); // Imprime el sueldo del empleado
empleado.cargarSueldo(1800); // Carga un nuevo sueldo
