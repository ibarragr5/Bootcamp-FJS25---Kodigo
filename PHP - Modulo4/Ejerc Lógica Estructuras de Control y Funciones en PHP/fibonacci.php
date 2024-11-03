<?php
// Definir la función generarFibonacci que recibe un número n como parámetro
function generarFibonacci($n) {
    $fibonacci = [];

    // Verificar si n es mayor o igual a 1 para agregar el primer número
    if ($n >= 1) {
        $fibonacci[] = 0; // Primer número de la serie
    }

    // Verificar si n es mayor o igual a 2 para agregar el segundo número
    if ($n >= 2) {
        $fibonacci[] = 1; // Segundo número de la serie
    }

    // Generar los números restantes de la serie
    for ($i = 2; $i < $n; $i++) {
        // Cada término es la suma de los dos términos anteriores
        $fibonacci[] = $fibonacci[$i - 1] + $fibonacci[$i - 2];
    }

    // Devolver el array con los términos de la serie Fibonacci
    return $fibonacci;
}

// Llamar a la función generarFibonacci con un valor de ejemplo y almacenar el resultado
$n = 10; // Cantidad de números a generar
$fibonacciSeries = generarFibonacci($n);

// Imprimir los números generados
echo "Los primeros $n términos de la serie Fibonacci son: " . implode(", ", $fibonacciSeries);
?>
