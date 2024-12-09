<?php

/**
 * Clase Prestamo
 * Maneja las operaciones relacionadas con los préstamos de libros.
 */
class Prestamo {
    private $conexion;

    /**
     * Constructor de la clase Prestamo.
     * 
     * @param Conexion $db La conexión a la base de datos.
     */
    public function __construct($db) {
        $this->conexion = $db;
    }

    /**
     * Escapa una cadena para su uso en una consulta SQL.
     * 
     * @param string $string La cadena a escapar.
     * @return string La cadena escapada.
     */
    private function escape_string($string) {
        return $this->conexion->escape_string($string);
    }

    /**
     * Ejecuta una consulta SQL.
     * 
     * @param string $sql La consulta SQL a ejecutar.
     * @return mixed El resultado de la consulta.
     */
    private function query($sql) {
        return $this->conexion->query($sql);
    }

    /**
     * Solicita un préstamo de libro.
     * 
     * @param array $data Los datos del préstamo.
     * @return bool El resultado de la inserción.
     */
    public function agregar($data) {
        $idLibro = $this->escape_string($data['idLibro']);
        $idUsuario = $this->escape_string($data['idUsuario']);
        $fechaPrestamo = $this->escape_string($data['fechaPrestamo']);
        $fechaDevolucion = $this->escape_string($data['fechaDevolucion']);

        $query = "INSERT INTO prestamos (id_libro, id_usuario, fecha_prestamo, fecha_devolucion) 
                  VALUES ('$idLibro', '$idUsuario', '$fechaPrestamo', '$fechaDevolucion')";
        return $this->query($query);
    }

    /**
     * Obtiene todos los préstamos de la base de datos.
     * 
     * @return array Un array de préstamos.
     */
    public function obtenerPrestamos() {
        $query = "SELECT prestamos.id, libros.titulo AS nombre_libro, usuarios.nombre AS nombre_solicitante, prestamos.fecha_prestamo, prestamos.fecha_devolucion 
                  FROM prestamos 
                  JOIN libros ON prestamos.id_libro = libros.id 
                  JOIN usuarios ON prestamos.id_usuario = usuarios.id";
        $resultado = $this->query($query);
        return $resultado->fetch_all(MYSQLI_ASSOC);
    }
}
?>