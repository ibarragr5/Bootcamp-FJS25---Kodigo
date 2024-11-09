<?php
// Definir la función
function imprimirPiramide($altura) {
    // Recorrer cada nivel de la pirámide
    for ($i = 1; $i <= $altura; $i++) {
        // Imprimir los espacios en blanco antes de los asteriscos
        for ($j = $i; $j < $altura; $j++) {
            echo " ";
        }
        // Imprimir asteriscos
        for ($k = 1; $k <= (2 * $i - 1); $k++) {
            echo "*";
        }
        // Imprimir un salto de línea después de cada nivel
        echo "\n";
    }
}

// Solicitar altura deseada de la pirámide
echo "Ingrese la altura deseada de la pirámide:\n";
$altura = (int)readline();

// Llamar a la función imprimirPiramide con la altura ingresada
imprimirPiramide($altura);
?>