<!DOCTYPE html>
<html>
<head>
    <title>Lista de Préstamos</title>
</head>
<body>
    <h1>Lista de Préstamos</h1>
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Libro</th>
            <th>Solicitante</th>
            <th>Fecha de Préstamo</th>
            <th>Fecha de Devolución</th>
        </tr>
        <?php foreach ($prestamos as $prestamo): ?>
        <tr>
            <td><?php echo $prestamo['id']; ?></td>
            <td><?php echo $prestamo['nombre_libro']; ?></td>
            <td><?php echo $prestamo['nombre_solicitante']; ?></td>
            <td><?php echo $prestamo['fecha_prestamo']; ?></td>
            <td><?php echo $prestamo['fecha_devolucion']; ?></td>
        </tr>
        <?php endforeach; ?>
    </table>
    <br>
    <a href="index.php"><button>Volver al inicio</button></a>
</body>
</html>