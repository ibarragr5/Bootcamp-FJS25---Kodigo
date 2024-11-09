<?php
// Definir función 
function sumarNumerosPares($array) {
    $suma = 0; // Inicializar la variable suma en 0

    // Recorrer cada elemento del array
    foreach ($array as $numero) {
        // Verificar si el número es par
        if ($numero % 2 == 0) {
            // Sumar el número par a la variable suma
            $suma += $numero;
        }
    }

    // Devolver la suma de los números pares ingresados
    return $suma;
}

// Crear un array vacío para almacenar los números ingresados
$numeros = [];

// Solicitar que ingresen 10 números enteros
echo "Ingrese 10 números enteros:\n";
for ($i = 0; $i < 10; $i++) {
    $numero = readline("Número " . ($i + 1) . ": ");
    // Agregar cada número ingresado al array
    $numeros[] = $numero;
}

// Llamar a la función sumarNumerosPares y almacenar el resultado
$sumaPares = sumarNumerosPares($numeros);

// Imprimir la suma de los números pares
echo "La suma de los números pares es: " . $sumaPares . "\n";
?>