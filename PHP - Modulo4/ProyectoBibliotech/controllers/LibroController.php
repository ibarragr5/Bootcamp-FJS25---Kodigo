<?php
require_once __DIR__ . '/../models/Libro.php';

/**
 * Clase LibroController
 * Controlador para manejar las operaciones relacionadas con los libros.
 */
class LibroController {
    private $libro;

    /**
     * Constructor de la clase LibroController.
     * 
     * @param Conexion $db La conexión a la base de datos.
     */
    public function __construct($db) {
        $this->libro = new Libro($db);
    }

    /**
     * Agrega un nuevo libro.
     * 
     * @param array $data Los datos del libro.
     */
    public function agregarLibro($data) {
        $this->libro->agregar($data);
    }

    /**
     * Obtiene todos los libros.
     * 
     * @return array Un array de libros.
     */
    public function obtenerLibros() {
        return $this->libro->obtenerLibros();
    }

    /**
     * Obtiene todos los libros disponibles.
     * 
     * @return array Un array de libros disponibles.
     */
    public function obtenerLibrosDisponibles() {
        return $this->libro->obtenerLibrosDisponibles();
    }

    /**
     * Edita un libro.
     * 
     * @param int $id El ID del libro.
     * @param array $data Los datos del libro.
     */
    public function editarLibro($id, $data) {
        $this->libro->editar($id, $data);
    }

    /**
     * Elimina un libro.
     * 
     * @param int $id El ID del libro.
     */
    public function eliminarLibro($id) {
        $this->libro->eliminar($id);
    }

    /**
     * Actualiza el estado de un libro.
     * 
     * @param int $idLibro El ID del libro.
     * @param string $estado El nuevo estado del libro.
     */
    public function actualizarEstadoLibro($idLibro, $estado) {
        $this->libro->actualizarEstadoLibro($idLibro, $estado);
    }
}
?>