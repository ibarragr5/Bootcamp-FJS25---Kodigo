var Cancion = /** @class */ (function () {
    // Constructor que recibe título y género
    function Cancion(titulo, genero) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = ""; // Inicializamos autor como vacío
    }
    // Método para recibir la propiedad autor
    Cancion.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    // Método para imprimir la propiedad autor
    Cancion.prototype.getAutor = function () {
        return this.autor;
    };
    // Método para mostrar los datos de la canción
    Cancion.prototype.mostrarDatos = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("G\u00E9nero: ".concat(this.genero));
        console.log("Autor: ".concat(this.getAutor())); // Usando el método get para imprimir autor
    };
    return Cancion;
}());
// Ejemplo de uso:
var miCancion = new Cancion("Smells Like Teen Spirit", "Rock");
miCancion.setAutor("Nirvana"); // Asignar autor
miCancion.mostrarDatos(); // Mostrar datos de la canción
