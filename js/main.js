$(document).ready(function() {
    console.log('DAVA - Tienda de bisutería cargada');

    // Ejemplo: Añadir producto al carrito
    $('.btn-primario').on('click', function(e) {
        if ($(this).hasClass('añadir-carrito')) {
            e.preventDefault();
            alert('Producto añadido al carrito');
            // Aquí iría la lógica real del carrito
        }
    });

    // Ejemplo: Cambiar imagen en página de producto
    $('.miniatura').on('click', function() {
        let nuevaImagen = $(this).attr('src');
        $('#imagen-principal').attr('src', nuevaImagen);
    });

    // Ejemplo: Validación básica de formulario
    $('#form-contacto').on('submit', function(e) {
        let email = $('#email').val();
        if (!email.includes('@')) {
            e.preventDefault();
            alert('Por favor, introduce un email válido.');
        }
    });
});