<?php
require_once __DIR__ . '/../models/Prestamo.php';
require_once __DIR__ . '/../models/Libro.php';
require_once __DIR__ . '/../models/Usuario.php';

/**
 * Clase PrestamoController
 * Controlador para manejar las operaciones relacionadas con los préstamos de libros.
 */
class PrestamoController {
    private $prestamo;
    private $libro;
    private $usuario;

    /**
     * Constructor de la clase PrestamoController.
     * 
     * @param Conexion $db La conexión a la base de datos.
     */
    public function __construct($db) {
        $this->prestamo = new Prestamo($db);
        $this->libro = new Libro($db);
        $this->usuario = new Usuario($db);
    }

    /**
     * Solicita un préstamo de libro.
     * 
     * @param int $idLibro El ID del libro.
     * @param string $nombreUsuario El nombre del usuario.
     * @param string $fechaPrestamo La fecha del préstamo.
     * @param string $fechaDevolucion La fecha de devolución.
     */
    public function solicitarPrestamo($idLibro, $nombreUsuario, $fechaPrestamo, $fechaDevolucion) {
        // Verificar el estado del libro
        $libro = $this->libro->obtenerLibroPorId($idLibro);
        if ($libro['estado'] != 'disponible') {
            echo "El libro no está disponible para préstamo.";
            return;
        }

        // Buscar o crear el usuario
        $usuario = $this->usuario->buscarOCrearUsuario($nombreUsuario);
        $idUsuario = $usuario['id'];

        // Registrar el préstamo
        $data = [
            'idLibro' => $idLibro,
            'idUsuario' => $idUsuario,
            'fechaPrestamo' => $fechaPrestamo,
            'fechaDevolucion' => $fechaDevolucion
        ];
        $this->prestamo->agregar($data);
        $this->libro->actualizarEstadoLibro($idLibro, 'prestado');
    }

    /**
     * Obtiene todos los préstamos.
     * 
     * @return array Un array de préstamos.
     */
    public function obtenerPrestamos() {
        return $this->prestamo->obtenerPrestamos();
    }
}
?>