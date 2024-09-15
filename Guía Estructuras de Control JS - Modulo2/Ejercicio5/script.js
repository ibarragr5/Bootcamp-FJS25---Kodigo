document.getElementById('formCarro').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir que el formulario se envíe automáticamente

    const carro = document.getElementById('carro').value;
    let descuento = 0;
    let mensaje = '';
    let imagen = '';

    // Validar opción seleccionada
    if (carro === '') {
        mensaje = 'Por favor, selecciona un vehículo.';
    } else {
        switch (carro) {
            case 'Fiesta':
                descuento = 5;
                imagen = 'https://www.elcarrocolombiano.com/wp-content/uploads/2021/09/20211609-Ford-Fiesta-ST-2022-1.jpg'; // Imagen Ford Fiesta
                break;
            case 'Focus':
                descuento = 10;
                imagen = 'https://cdn.motor1.com/images/mgl/eEeXK/s3/2022-ford-focus-sedan-front-unofficial-rendering.jpg'; // Imagen Ford Focus
                break;
            case 'Escape':
                descuento = 20;
                imagen = 'https://images.carexpert.com.au/app/uploads/2022/03/2022-Ford-Escape-Vignale-AWD-HERO.jpg'; // Imagen Ford Escape
                break;
            default:
                descuento = 0;
        }

        // Mensaje con vehículo seleccionado y descuento a aplicar
        mensaje = `Has seleccionado un FORD ${carro}. Se aplicará un descuento del ${descuento}%.`;
    }

    // Mostrar el resultado en el HTML
    document.getElementById('resultado').innerHTML = mensaje;

    // Mostrar la imagen de vehículo seleccionado
    if (imagen) {
        document.getElementById('imagenCarro').innerHTML = `<img src="${imagen}" alt="Imagen de Ford ${carro}">`;
    } else {
        document.getElementById('imagenCarro').innerHTML = '';
    }
});
