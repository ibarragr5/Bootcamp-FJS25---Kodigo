<?php
function mergeSort(&$arr) {
    if (count($arr) <= 1) {
        return;
    }

    $mid = count($arr) / 2;
    $left = array_slice($arr, 0, $mid);
    $right = array_slice($arr, $mid);

    mergeSort($left);
    mergeSort($right);

    $arr = merge($left, $right);
}

function merge($left, $right) {
    $result = [];
    $i = 0;
    $j = 0;

    while ($i < count($left) && $j < count($right)) {
        if ($left[$i] < $right[$j]) {
            $result[] = $left[$i];
            $i++;
        } else {
            $result[] = $right[$j];
            $j++;
        }
    }

    while ($i < count($left)) {
        $result[] = $left[$i];
        $i++;
    }

    while ($j < count($right)) {
        $result[] = $right[$j];
        $j++;
    }

    return $result;
}

// Lista de palabras
$words = ["manzana", "naranja", "banana", "kiwi", "fresa", "uva", "mango"];

// Mostrar la lista antes de ordenar
echo "Lista antes de ordenar:\n";
print_r($words);

// Ordenar la lista alfabéticamente
mergeSort($words);

// Mostrar la lista después de ordenar
echo "Lista después de ordenar:\n";
print_r($words);
?>