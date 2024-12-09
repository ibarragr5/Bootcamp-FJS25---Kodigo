<!DOCTYPE html>
<html>
<head>
    <title>Lista de Libros</title>
</head>
<body>
    <h1>Lista de Libros</h1>
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Autor</th>
            <th>Categoría</th>
            <th>Estado</th>
        </tr>
        <?php foreach ($libros as $libro): ?>
        <tr>
            <td><?php echo $libro['id']; ?></td>
            <td><?php echo $libro['titulo']; ?></td>
            <td><?php echo $libro['autor']; ?></td>
            <td><?php echo $libro['categoria']; ?></td>
            <td><?php echo $libro['estado']; ?></td>
        </tr>
        <?php endforeach; ?>
    </table>
    <br>
    <a href="index.php"><button>Volver al inicio</button></a>
</body>
</html>