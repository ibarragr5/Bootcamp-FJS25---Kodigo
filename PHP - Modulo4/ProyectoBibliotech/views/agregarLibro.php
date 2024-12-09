<!DOCTYPE html>
<html>
<head>
    <title>Agregar Libro</title>
</head>
<body>
    <h1>Agregar Libro</h1>
    <form action="index.php" method="POST">
        <label for="titulo">Título:</label>
        <input type="text" id="titulo" name="titulo" required><br>
        <label for="autor">Autor:</label>
        <input type="text" id="autor" name="autor" required><br>
        <label for="categoria">Categoría:</label>
        <input type="text" id="categoria" name="categoria" required><br>
        <button type="submit" name="agregarLibro">Agregar Libro</button>
    </form>
    <br>
    <a href="index.php"><button>Volver al inicio</button></a>
</body>
</html>