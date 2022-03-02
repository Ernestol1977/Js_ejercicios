/*
Base de datos de mis libros y precios de reventa. Orden:
Menu:
1 Ingresar libro/s (título, Editorial, precio de reventa).
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
    let titulo = prompt("Ingrese en Título de la obra (para finalizar coloque FIN)");
    let editorial = prompt("Ingrese Editorial");
    let precio = parseFloat(prompt("Ingrese precio de reventa"));

    let producto = new Libro(titulo, editorial, precio);
    libros.push(producto);
}

const opcion = prompt("Ingrese la opción:\n1 Ingresar libros.\n2 Mostrar libros.\n3 Salir.");
alert(opcion);



if (opcion == 1) {
    titulo = prompt("Ingrese en Título de la obra (para finalizar coloque FIN)");
    
    while (titulo !== "FIN") {
        editorial = prompt("Ingrese Editorial");
        precio = parseFloat(prompt("Ingrese precio de reventa"));
    
        let producto = new Libro(titulo, editorial, precio);
        libros.push(producto);
    
        titulo = prompt("Ingrese en Título de la obra (para finalizar coloque FIN)");
    }
        
    alert("Finalizó el ingreso de sus libros");
    opcion = prompt("Ingrese la opción:\n1 Ingresar libros.\n2 Mostrar libros.\n3 Salir.");
}

else if (opcion == 2) {
    const opcionMostrar = prompt("Cómo desea que se muestre su lista?\n 1 Completo.\n 2 Título y precio.\n 3 Título y Editorial.\n 4 Volver al menú anterior.");

    if (opcionMostrar == 1) {
        alert(libros);
    }
    else if (opcionMostrar == 2) {
        alert(libros.titulo, libros.precio);
    }
    else if (opcionMostrar == 3) {
        alert(libros.titulo, libros.editorial);
    }
    else if (opcionMostrar == 4) {
        opcion = prompt("Ingrese la opción:\n1 Ingresar libros.\n2 Mostrar libros.\n3 Salir.");
    }
    else {
        alert("Opción incorrecta, reintente: ");
        opcionMostrar = prompt("Cómo desea que se muestre su lista?\n 1 Completo.\n 2 Título y precio.\n 3 Título y Editorial.\n 4 Volver al menú anterior.");
    }

}

else if (opcion == 3) {
    alert("Gracias!!!");
    break;
}

 else {
    alert("Su elección fue erronea, reintente!");
    opcion = prompt("Ingrese la opción:\n1 Ingresar libros.\n2 Mostrar libros.\n3 Salir.");
}

