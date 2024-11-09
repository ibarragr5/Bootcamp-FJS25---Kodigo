<?php
// Definir función
function calcularFrecuenciaCaracteres($cadena) {
    // Inicializar array vacío para almacenar la frecuencia de caracteres
    $frecuencia = [];

    // Recorrer cada carácter de la cadena
    for ($i = 0; $i < strlen($cadena); $i++) {
        $caracter = $cadena[$i];
        // Verificar si el carácter ya existe en el array
        if (isset($frecuencia[$caracter])) {
            // Incrementar la frecuencia del carácter
            $frecuencia[$caracter]++;
        } else {
            // Inicializar la frecuencia del carácter en 1
            $frecuencia[$caracter] = 1;
        }
    }

    // Devolver el array con la frecuencia de caracteres
    return $frecuencia;
}

// Solicitar que se ingrese una cadena de caracteres
echo "Ingrese cualquier oración que desee:\n";
$cadena = readline();

// Llamar a la función calcularFrecuenciaCaracteres y almacenar el resultado
$frecuenciaCaracteres = calcularFrecuenciaCaracteres($cadena);

// Imprimir la frecuencia de cada carácter
print_r($frecuenciaCaracteres);
?>