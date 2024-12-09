<?php

/**
 * Clase Usuario
 * Maneja las operaciones relacionadas con los usuarios.
 */
class Usuario {
    private $conexion;

    /**
     * Constructor de la clase Usuario.
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
     * Busca un usuario por nombre o lo crea si no existe.
     * 
     * @param string $nombre El nombre del usuario.
     * @return array Un array con los datos del usuario.
     */
    public function buscarOCrearUsuario($nombre) {
        $nombre = $this->escape_string($nombre);

        // Buscar el usuario por nombre
        $query = "SELECT * FROM usuarios WHERE nombre = '$nombre'";
        $resultado = $this->conexion->query($query);
        $usuario = $resultado->fetch_assoc();

        // Si el usuario no existe, crearlo
        if (!$usuario) {
            $query = "INSERT INTO usuarios (nombre) VALUES ('$nombre')";
            $this->conexion->query($query);
            $usuario_id = $this->conexion->insert_id();
            $usuario = ['id' => $usuario_id, 'nombre' => $nombre];
        }

        return $usuario;
    }
}
?>