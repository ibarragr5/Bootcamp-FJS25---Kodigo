<?php
/**
 * Clase Conexion
 * Maneja la conexión a la base de datos.
 */
class Conexion {
    private $host = 'localhost';
    private $db = 'bibliotech';
    private $user = 'root';
    private $pass = '';
    private $conexion;

    /**
     * Constructor de la clase Conexion.
     * Establece la conexión a la base de datos.
     */
    public function __construct() {
        $this->conexion = new mysqli($this->host, $this->user, $this->pass, $this->db);

        if ($this->conexion->connect_error) {
            die('Error de Conexión (' . $this->conexion->connect_errno . ') ' . $this->conexion->connect_error);
        }
    }

    /**
     * Ejecuta una consulta SQL.
     * 
     * @param string $sql La consulta SQL a ejecutar.
     * @return mixed El resultado de la consulta.
     */
    public function query($sql) {
        return $this->conexion->query($sql);
    }

    /**
     * Escapa una cadena para su uso en una consulta SQL.
     * 
     * @param string $string La cadena a escapar.
     * @return string La cadena escapada.
     */
    public function escape_string($string) {
        return $this->conexion->real_escape_string($string);
    }

    /**
     * Obtiene el ID de la última inserción.
     * 
     * @return int El ID de la última inserción.
     */
    public function insert_id() {
        return $this->conexion->insert_id;
    }

    /**
     * Destructor de la clase Conexion.
     * Cierra la conexión a la base de datos.
     */
    public function __destruct() {
        $this->conexion->close();
    }
}
?>