<?php
function insertionSort(&$arr) {
    $n = count($arr);
    for ($i = 1; $i < $n; $i++) {
        $key = $arr[$i];
        $j = $i - 1;

        /* Mover los elementos del arreglo que son mayores que la clave
        a una posición adelante de su posición actual*/
        while ($j >= 0 && $arr[$j] > $key) {
            $arr[$j + 1] = $arr[$j];
            $j = $j - 1;
        }
        $arr[$j + 1] = $key;
    }
}

// Lista de nombres
$names = ["Carlos", "Ana", "Pedro", "Beatriz", "Juan", "Lucía", "María"];

// Mostrar la lista antes de ordenar
echo "Lista antes de ordenar:\n";
print_r($names);

// Ordenar la lista alfabéticamente
insertionSort($names);

// Mostrar la lista después de ordenar
echo "Lista después de ordenar:\n";
print_r($names);
?>