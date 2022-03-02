/*
Base de datos de mis libros y precios de reventa. Orden:
Menu:
1 Ingresar libro/s.
1.1 Ingresar título.
1.2 Ingresar Editorial.
1.3 Precio estimado de reventa.
2 Mostrar, según pida el usuario:
2.1 Completo. 
2.2 Título+precio.
2.3 Título+editorial.
3 Salir.
*/

class Libro {
    constructor(titulo, editorial, precio) {
        this.titulo = titulo;
        this.editorial = editorial;
        this.precio = precio;
        this.estaDisponible = true;
    }
}

let libros = [];

function agregarLibro() {
    let titulo = prompt("Ingrese en Título de la obra");
    let editorial = prompt("Ingrese Editorial");
    let precio = parseFloat(prompt("Ingrese precio de reventa"));
}
let producto = new Libro(titulo, editorial, precio);
libros.push(producto);

for (let i = 0; i < 1; i++) {
    agregarLibro();
}

const opcion = prompt("Ingrese una opción:\n 1 Ingresar libro/s.\n 2 Mostrar lista de libros.\n 3 Modificar un libro.");
alert(opcion);

if (opcion == 1) {
    let producto = new Libro(titulo, editorial, precio);
    libros.push(producto);
} else if (opcion == 2) {
    const opcionMostrar = prompt("Cómo desea que se muestre su lista?\n 1 Completo.\n 2 Tí      tulo y precio.\n 3 Título y Editorial.\n 4 Volver al menú anterior.");
    alert(opcionMostrar);

    if (opcionMostrar == 1) {
        alert(libros);
    } else if (opcionMostrar == 2) {
        alert(libros.titulo, libros.precio);
    } else if (opcionMostrar == 3) {
        alert(libros.titulo, libros.editorial);
    } else if (opcionMostrar == 4) {
        alert(opcion);
    } else {
        alert("Opción incorrecta, reintente: " + opcionMostrar);
    }

} else if (opcion == 3) {
    
} else {
    alert("Su opción no se encuentre, vuelva a reintentar");
}
