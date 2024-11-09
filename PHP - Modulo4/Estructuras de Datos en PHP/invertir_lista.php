<?php
// Definir función
function invertirArray($array) {
    // Utilizar la función para invertir array
    return array_reverse($array);
}

// Crear un array vacío para almacenar los números ingresados
$numeros = [];

// Solicitar que se ingresen 5 números
echo "Ingrese 5 números:\n";
for ($i = 0; $i < 5; $i++) {
    $numero = readline("Número " . ($i + 1) . ": ");
    // Agregar el número ingresado al array
    $numeros[] = $numero;
}

// Llamar a la función invertirArray y almacenar el resultado
$numerosInvertidos = invertirArray($numeros);

// Imprimir el array invertido
echo "Array invertido:\n";
print_r($numerosInvertidos);
?>