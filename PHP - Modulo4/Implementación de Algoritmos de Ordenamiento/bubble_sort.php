<?php
function bubbleSortDescending(&$arr) {
    $n = count($arr);
    for ($i = 0; $i < $n - 1; $i++) {
        for ($j = 0; $j < $n - $i - 1; $j++) {
            if ($arr[$j] < $arr[$j + 1]) {
                // Intercambiar $arr[$j] y $arr[$j + 1]
                $temp = $arr[$j];
                $arr[$j] = $arr[$j + 1];
                $arr[$j + 1] = $temp;
            }
        }
    }
}

// Lista de números con duplicados y valores negativos
$numbers = [3, -1, 4, 1, 5, 9, -2, 6, 5, 3, 5];

// Mostrar la lista antes de ordenar
echo "Lista antes de ordenar:\n";
print_r($numbers);

// Ordenar la lista en orden descendente
bubbleSortDescending($numbers);

// Mostrar la lista después de ordenar
echo "Lista después de ordenar:\n";
print_r($numbers);
?>