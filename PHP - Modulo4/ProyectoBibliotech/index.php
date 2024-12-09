<?php
// index.php
require_once __DIR__ . '/controllers/LibroController.php';
require_once __DIR__ . '/controllers/PrestamoController.php';
require_once __DIR__ . '/models/Conexion.php';

$db = new Conexion();
$libroController = new LibroController($db);
$prestamoController = new PrestamoController($db);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['agregarLibro'])) {
        $data = [
            'titulo' => $_POST['titulo'],
            'autor' => $_POST['autor'],
            'categoria' => $_POST['categoria']
        ];
        $libroController->agregarLibro($data);
    } elseif (isset($_POST['solicitarPrestamo'])) {
        $idLibro = $_POST['idLibro'];
        $nombreUsuario = $_POST['nombreUsuario'];
        $fechaPrestamo = $_POST['fechaPrestamo'];
        $fechaDevolucion = $_POST['fechaDevolucion'];
        $prestamoController->solicitarPrestamo($idLibro, $nombreUsuario, $fechaPrestamo, $fechaDevolucion);
    }
}

// Mostrar formularios y listas
if (isset($_GET['view'])) {
    if ($_GET['view'] == 'agregarLibro') {
        include 'views/agregarLibro.php';
    } elseif ($_GET['view'] == 'solicitarPrestamo') {
        $librosDisponibles = $libroController->obtenerLibrosDisponibles();
        include 'views/solicitarPrestamo.php';
    } elseif ($_GET['view'] == 'libros') {
        $libros = $libroController->obtenerLibros();
        include 'views/libros.php';
    } elseif ($_GET['view'] == 'prestamos') {
        $prestamos = $prestamoController->obtenerPrestamos();
        include 'views/prestamos.php';
    }
} else {
    include 'views/index.php';
}