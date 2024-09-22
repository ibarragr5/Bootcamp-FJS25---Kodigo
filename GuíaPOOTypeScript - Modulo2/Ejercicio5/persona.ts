// Definir clase abstracta Persona
abstract class Persona {
  // Atributos
  protected nombre: string;
  protected apellido: string;
  protected direccion: string;
  protected telefono: string;
  protected edad: number;

  // Constructor
  constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
    this.telefono = telefono;
    this.edad = edad;
  }

  // Método para verificar si es mayor de edad
  verificarEdad(): void {
    if (this.edad >= 18) {
      console.log(`${this.nombre} es mayor de edad.`);
    } else {
      console.log(`${this.nombre} es menor de edad.`);
    }
  }

  // Método abstracto para mostrar datos
  abstract mostrarDatos(): void;
}

// Clase Empleado que hereda de Persona
class Empleado extends Persona {
  // Atributo
  private sueldo: number;

  // Constructor
  constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
    super(nombre, apellido, direccion, telefono, edad); // Llama al constructor de Persona
    this.sueldo = sueldo;
  }

  // Método para cargar sueldo
  cargarSueldo(nuevoSueldo: number): void {
    this.sueldo = nuevoSueldo;
    console.log(`Nuevo sueldo cargado: $${this.sueldo}`);
  }

  // Método para imprimir sueldo
  imprimirSueldo(): void {
    console.log(`El sueldo de ${this.nombre} es $${this.sueldo}`);
  }

  // Implementar método abstracto mostrarDatos
  mostrarDatos(): void {
    console.log(`Nombre: ${this.nombre} ${this.apellido}, Dirección: ${this.direccion}, Teléfono: ${this.telefono}, Edad: ${this.edad}`);
  }
}

// Crear un objeto de la clase Empleado
const empleado = new Empleado("Enrique", "Ibarra", "Av. mejor por aquí, que por allá xd", "555-1234", 30, 1500);

// Llamar métodos
empleado.mostrarDatos();  // Imprime los datos del empleado
empleado.verificarEdad();  // Verifica si es mayor de edad
empleado.imprimirSueldo(); // Imprime el sueldo del empleado
empleado.cargarSueldo(1800); // Carga un nuevo sueldo
