<?php

/**
 * Clase Libro
 * Maneja las operaciones relacionadas con los libros.
 */
class Libro {
    private $conexion;

    /**
     * Constructor de la clase Libro.
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
     * Obtiene el ID de la última inserción.
     * 
     * @return int El ID de la última inserción.
     */
    private function insert_id() {
        return $this->conexion->insert_id;
    }

    /**
     * Agrega un nuevo libro a la base de datos.
     * 
     * @param array $data Los datos del libro.
     * @return bool El resultado de la inserción.
     */
    public function agregar($data) {
        $titulo = $this->escape_string($data['titulo']);
        $autor = $this->escape_string($data['autor']);
        $categoria = $this->escape_string($data['categoria']);
        $estado = 'disponible'; // Estado por defecto

        // Insertar autor si no existe
        $queryAutor = "SELECT id FROM autores WHERE nombre = '$autor'";
        $resultadoAutor = $this->query($queryAutor);
        if ($resultadoAutor->num_rows > 0) {
            $autor_id = $resultadoAutor->fetch_assoc()['id'];
        } else {
            $queryInsertAutor = "INSERT INTO autores (nombre) VALUES ('$autor')";
            $this->query($queryInsertAutor);
            $autor_id = $this->insert_id();
        }

        // Insertar categoría si no existe
        $queryCategoria = "SELECT id FROM categorias WHERE nombre = '$categoria'";
        $resultadoCategoria = $this->query($queryCategoria);
        if ($resultadoCategoria->num_rows > 0) {
            $categoria_id = $resultadoCategoria->fetch_assoc()['id'];
        } else {
            $queryInsertCategoria = "INSERT INTO categorias (nombre) VALUES ('$categoria')";
            $this->query($queryInsertCategoria);
            $categoria_id = $this->insert_id();
        }

        // Insertar libro
        $query = "INSERT INTO libros (titulo, autor_id, categoria_id, estado) VALUES ('$titulo', $autor_id, $categoria_id, '$estado')";
        return $this->query($query);
    }

    /**
     * Edita un libro en la base de datos.
     * 
     * @param int $id El ID del libro.
     * @param array $data Los datos del libro.
     * @return bool El resultado de la actualización.
     */
    public function editar($id, $data) {
        $titulo = $this->escape_string($data['titulo']);
        $autor_id = $this->escape_string($data['autor_id']);
        $categoria_id = $this->escape_string($data['categoria_id']);
        $estado = $this->escape_string($data['estado']);

        $query = "UPDATE libros SET titulo = '$titulo', autor_id = $autor_id, categoria_id = $categoria_id, estado = '$estado' WHERE id = $id";
        return $this->query($query);
    }

    /**
     * Elimina un libro de la base de datos.
     * 
     * @param int $id El ID del libro.
     * @return bool El resultado de la eliminación.
     */
    public function eliminar($id) {
        $query = "DELETE FROM libros WHERE id = $id";
        return $this->query($query);
    }

    /**
     * Obtiene todos los libros de la base de datos.
     * 
     * @return array Un array de libros.
     */
    public function obtenerLibros() {
        $query = "SELECT libros.id, libros.titulo, autores.nombre AS autor, categorias.nombre AS categoria, libros.estado 
                  FROM libros 
                  JOIN autores ON libros.autor_id = autores.id 
                  JOIN categorias ON libros.categoria_id = categorias.id";
        $resultado = $this->query($query);
        return $resultado->fetch_all(MYSQLI_ASSOC);
    }

    /**
     * Obtiene todos los libros disponibles de la base de datos.
     * 
     * @return array Un array de libros disponibles.
     */
    public function obtenerLibrosDisponibles() {
        $query = "SELECT id, titulo, estado FROM libros WHERE estado = 'disponible'";
        $resultado = $this->query($query);
        return $resultado->fetch_all(MYSQLI_ASSOC);
    }

    /**
     * Obtiene un libro por su ID.
     * 
     * @param int $id El ID del libro.
     * @return array Los datos del libro.
     */
    public function obtenerLibroPorId($id) {
        $query = "SELECT * FROM libros WHERE id = $id";
        $resultado = $this->query($query);
        return $resultado->fetch_assoc();
    }

    /**
     * Actualiza el estado de un libro.
     * 
     * @param int $idLibro El ID del libro.
     * @param string $estado El nuevo estado del libro.
     * @return bool El resultado de la actualización.
     */
    public function actualizarEstadoLibro($idLibro, $estado) {
        $query = "UPDATE libros SET estado = '$estado' WHERE id = $idLibro";
        return $this->query($query);
    }
}
?>