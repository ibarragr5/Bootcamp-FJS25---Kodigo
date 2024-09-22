class Cancion {
  private autor: string; // Atributo privado
  public titulo: string; // Atributo público
  public genero: string; // Atributo público

  // Constructor que recibe título y género
  constructor(titulo: string, genero: string) {
      this.titulo = titulo;
      this.genero = genero;
      this.autor = ""; // Inicializamos autor como vacío
  }

  // Método para recibir la propiedad autor
  setAutor(autor: string): void {
      this.autor = autor;
  }

  // Método para imprimir la propiedad autor
  getAutor(): string {
      return this.autor;
  }

  // Método para mostrar los datos de la canción
  mostrarDatos(): void {
      console.log(`Título: ${this.titulo}`);
      console.log(`Género: ${this.genero}`);
      console.log(`Autor: ${this.getAutor()}`); // Usando el método get para imprimir autor
  }
}

// Ejemplo de uso:
const miCancion = new Cancion("Smells Like Teen Spirit", "Rock");
miCancion.setAutor("Nirvana"); // Asignar autor
miCancion.mostrarDatos();     // Mostrar datos de la canción
