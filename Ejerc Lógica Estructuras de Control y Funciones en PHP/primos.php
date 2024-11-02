<!-- ejecutar en terminal con el comando: php primos.php 
se pide ingresar números desde teclado-->
<?php
// Definir la función esPrimo que recibe un número como parámetro
function esPrimo($numero) {
    // Si el número es menor que 2, no es primo
    if ($numero < 2) {
        return false;
    }

    // Verificar si el número tiene divisores distintos de 1 y de sí mismo
    for ($i = 2; $i <= sqrt($numero); $i++) {
        if ($numero % $i == 0) {
            return false; // Si encontramos un divisor, el número no es primo
        }
    }

    // Si no encontramos divisores, el número es primo
    return true;
}

// Solicitar al usuario que ingrese un número
echo "Ingrese un número (o 'salir' para terminar): ";
while ($linea = trim(fgets(STDIN))) {
    if (strtolower($linea) == 'salir') {
        break;
    }

    // Convertir la entrada a un número entero
    $numero = intval($linea);

    // Verificar si el número es primo y mostrar el resultado
    if (esPrimo($numero)) {
        echo "$numero es un número primo.\n";
    } else {
        echo "$numero no es un número primo.\n";
    }

    // Solicitar al usuario que ingrese otro número
    echo "Ingrese otro número (o 'salir' para terminar): ";
}
?>