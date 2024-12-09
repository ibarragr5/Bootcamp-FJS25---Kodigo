<!DOCTYPE html>
<html>
<head>
    <title>Solicitar Préstamo</title>
    <script>
        function actualizarEstado() {
            var select = document.getElementById("idLibro");
            var estado = select.options[select.selectedIndex].getAttribute("data-estado");
            document.getElementById("estadoLibro").value = estado;
        }

        function validarPrestamo() {
            var estado = document.getElementById("estadoLibro").value;
            if (estado !== "disponible") {
                alert("El libro seleccionado no está disponible para préstamo.");
                return false;
            }
            return true;
        }
    </script>
</head>
<body>
    <h1>Solicitar Préstamo</h1>
    <form action="index.php" method="POST" onsubmit="return validarPrestamo()">
        <label for="idLibro">Seleccione un Libro:</label>
        <select id="idLibro" name="idLibro" onchange="actualizarEstado()" required>
            <option value="">Seleccione un libro</option>
            <?php foreach ($librosDisponibles as $libro): ?>
                <option value="<?php echo $libro['id']; ?>" data-estado="<?php echo $libro['estado']; ?>">
                    <?php echo $libro['titulo']; ?>
                </option>
            <?php endforeach; ?>
        </select><br>
        <label for="estadoLibro">Estado del Libro:</label>
        <input type="text" id="estadoLibro" name="estadoLibro" readonly><br>
        <label for="nombreUsuario">Nombre del Usuario:</label>
        <input type="text" id="nombreUsuario" name="nombreUsuario" required><br>
        <label for="fechaPrestamo">Fecha de Préstamo:</label>
        <input type="date" id="fechaPrestamo" name="fechaPrestamo" required><br>
        <label for="fechaDevolucion">Fecha de Devolución:</label>
        <input type="date" id="fechaDevolucion" name="fechaDevolucion" required><br>
        <button type="submit" name="solicitarPrestamo">Solicitar Préstamo</button>
    </form>
    <br>
    <a href="index.php"><button>Volver al inicio</button></a>
</body>
</html>