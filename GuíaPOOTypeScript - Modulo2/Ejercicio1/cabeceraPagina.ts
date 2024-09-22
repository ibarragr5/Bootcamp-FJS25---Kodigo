class CabeceraPagina {
  private titulo: string;
  private color: string;
  private fuente: string;

  constructor(titulo: string, color: string, fuente: string) {
      this.titulo = titulo;
      this.color = color;
      this.fuente = fuente;
  }

  // Método para obtener título, color y fuente
  obtenerPropiedades(): void {
      console.log(`Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}`);
  }

  // Método para definir la alineación del título
  definirAlineacion(alineacion: 'centro' | 'derecha' | 'izquierda'): void {
      console.log(`El título está alineado a: ${alineacion}`);
  }

  // Método para imprimir todas las propiedades
  imprimirPropiedades(): void {
      console.log(`Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}`);
  }
}

// Crear instancia de la clase y llamar los métodos
const cabecera = new CabeceraPagina('Mi Página', 'Azul', 'Arial');
cabecera.obtenerPropiedades();
cabecera.definirAlineacion('centro');
cabecera.imprimirPropiedades();
