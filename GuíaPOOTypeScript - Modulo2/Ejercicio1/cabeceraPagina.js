var CabeceraPagina = /** @class */ (function () {
    function CabeceraPagina(titulo, color, fuente) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }
    // Método para obtener título, color y fuente
    CabeceraPagina.prototype.obtenerPropiedades = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo, ", Color: ").concat(this.color, ", Fuente: ").concat(this.fuente));
    };
    // Método para definir la alineación del título
    CabeceraPagina.prototype.definirAlineacion = function (alineacion) {
        console.log("El t\u00EDtulo est\u00E1 alineado a: ".concat(alineacion));
    };
    // Método para imprimir todas las propiedades
    CabeceraPagina.prototype.imprimirPropiedades = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo, ", Color: ").concat(this.color, ", Fuente: ").concat(this.fuente));
    };
    return CabeceraPagina;
}());
// Crear instancia de la clase y llamar los métodos
var cabecera = new CabeceraPagina('Mi Página', 'Azul', 'Arial');
cabecera.obtenerPropiedades();
cabecera.definirAlineacion('centro');
cabecera.imprimirPropiedades();
