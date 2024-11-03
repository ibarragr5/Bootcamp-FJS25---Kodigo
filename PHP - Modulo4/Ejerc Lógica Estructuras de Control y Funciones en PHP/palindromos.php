<?php
// Definir la función esPalindromo que recibe una cadena de texto como parámetro
function esPalindromo($cadena) {
    // Convertir la cadena a minúsculas para evitar problemas de mayúsculas/minúsculas
    $cadena = strtolower($cadena);

    // Eliminar todos los caracteres que no sean letras o números
    $cadena = preg_replace("/[^a-z0-9]/", "", $cadena);

    // Invertir la cadena
    $cadenaInvertida = strrev($cadena);

    // Verificar si la cadena original es igual a la cadena invertida
    return $cadena == $cadenaInvertida;
}

// Probar la función esPalindromo con algunos ejemplos
$frases = [
    "Dábale arroz a la zorra el abad"
    "A man, a plan, a canal, Panama",
    "Somos o no somos"
    "Isaac no ronca así"
    "Anita lava la tina"
    "Luz azul"
    "Yo hago yoga hoy"
    "Ana lava lana"
    "No 'x' in Nixon",
    "Hello, World!",
    "Anita lava la tina"
];

foreach ($frases as $frase) {
    if (esPalindromo($frase)) {
        echo "\"$frase\" es un palíndromo.\n";
    } else {
        echo "\"$frase\" no es un palíndromo.\n";
    }
}
?>
