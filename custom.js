
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

let opcion = 0
do{
    opcion = parseInt(prompt("Ingrese la opción:\n1 Ingresar libros.\n2 Mostrar libros.\n3 Salir."));//3

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
    }else if (opcion == 2) {
        let opcionMostrar = parseInt(prompt("Cómo desea que se muestre su lista?\n 1 Completo.\n 2 Título y precio.\n 3 Título y Editorial.\n 4 Volver al menú anterior."));
    
        if (opcionMostrar == 1) {
            for(item of libros){
                alert(` El titulo es: ${item.titulo}, la editorial: ${item.editorial}, y su precio es: $${item.precio}.`)
            }
        }
        else if (opcionMostrar == 2) {
            for(item of libros){
                alert(` El titulo es: ${item.titulo}, y su precio es: $${item.precio}.`)
            }
        }
        else if (opcionMostrar == 3) {
            for(item of libros){
                alert(` El titulo es: ${item.titulo} , la editorial: ${item.editorial}.`)
            }
        }
        else if (opcionMostrar == 4) {
        }
        else {
            alert("Opción incorrecta, reintente: ");
        }
    
    }else if (opcion == 3) {
        alert("Gracias!!!");    
    }else {
        alert("Su elección fue erronea, reintente!");
    }


}while(opcion != 3)






