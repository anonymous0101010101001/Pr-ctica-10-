const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let contador = 0;
let cantidadProductos = 0;
let acumulador = 0;

function registrarProductos() {
    if (contador === cantidadProductos) {
        let iva = acumulador * 0.13;
        let total = acumulador + iva;

        console.log("\n----- RESUMEN DE COMPRA -----");
        console.log("Cantidad de productos: " + cantidadProductos);
        console.log("Subtotal: $" + acumulador.toFixed(2));
        console.log("IVA (13%): $" + iva.toFixed(2));
        console.log("Total a pagar: $" + total.toFixed(2));
        console.log("-----------------------------");

        rl.close();
        return;
    }

    rl.question("Ingrese el precio del producto " + (contador + 1) + ": $", (respuesta) => {
        let precio = Number(respuesta);

        if (respuesta.trim() === "" || isNaN(precio) || precio < 0) {
            console.log("Error: Ingrese un precio valido mayor o igual a cero.");
            registrarProductos();
        } else {
            acumulador += precio;
            contador++;
            registrarProductos();
        }
    });
}

rl.question("¿Cuantos productos desea registrar?: ", (respuesta) => {
    cantidadProductos = Number(respuesta);

    if (respuesta.trim() === "" || isNaN(cantidadProductos) ||
        !Number.isInteger(cantidadProductos) || cantidadProductos <= 0) {

        console.log("Error: Ingrese una cantidad entera mayor a cero.");
        rl.close();

    } else {
        registrarProductos();
    }
});
