class Cuenta {
  private nombre: string;
  private cantidad: number;
  private tipoCuenta: string;
  private numeroCuenta: string;

  constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
      this.nombre = nombre;
      this.cantidad = cantidad;
      this.tipoCuenta = tipoCuenta;
      this.numeroCuenta = numeroCuenta;
  }

  depositar(cantidad: number): void {
      if (cantidad < 5) {
          console.log("El valor a depositar debe ser mayor a $5.00");
      } else {
          this.cantidad += cantidad;
          console.log(`Se ha depositado correctamente: $${cantidad}. Saldo actual: $${this.cantidad}.`);
      }
  }

  retirar(valor: number): void {
      if (this.cantidad <= 5) {
          console.log("No hay suficiente dinero en la cuenta.");
      } else {
          this.cantidad -= valor;
          console.log(`Has retirado: $${valor}. Saldo actual: $${this.cantidad}.`);
      }
  }

  mostrarDatos(): void {
      console.log(`Nombre: ${this.nombre}, Tipo de Cuenta: ${this.tipoCuenta}, Número de Cuenta: ${this.numeroCuenta}`);
  }
}

// Definir un objeto de la clase Cuenta
const miCuenta = new Cuenta("Enrique Ibarra", 100, "Ahorros", "12345678");

// Llamar a los métodos
miCuenta.mostrarDatos();
miCuenta.depositar(10);  // Prueba de depósito
miCuenta.retirar(50);    // Prueba de retiro
miCuenta.retirar(60);    // Prueba de retiro
