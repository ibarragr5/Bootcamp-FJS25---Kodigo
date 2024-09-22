class Calculadora {
  // Método para sumar
  sumar(a: number, b: number): number {
      return a + b;
  }

  // Método para restar
  restar(a: number, b: number): number {
      return a - b;
  }

  // Método para multiplicar
  multiplicar(a: number, b: number): number {
      return a * b;
  }

  // Método para dividir
  dividir(a: number, b: number): number {
      if (b === 0) {
          throw new Error("No se puede dividir entre 0");
      }
      return a / b;
  }

  // Método para calcular la potencia
  potencia(base: number, exponente: number): number {
      return Math.pow(base, exponente);
  }

  // Método para calcular el factorial
  factorial(n: number): number {
      if (n === 0 || n === 1) {
          return 1;
      }
      return n * this.factorial(n - 1);
  }
}

// Ejemplo de uso
const calc = new Calculadora();
console.log("Suma:", calc.sumar(5, 3));           // Resultado: 8
console.log("Resta:", calc.restar(5, 3));         // Resultado: 2
console.log("Multiplicación:", calc.multiplicar(5, 3));  // Resultado: 15
console.log("División:", calc.dividir(6, 2));     // Resultado: 3
console.log("Potencia:", calc.potencia(2, 3));    // Resultado: 8
console.log("Factorial:", calc.factorial(5));     // Resultado: 120
