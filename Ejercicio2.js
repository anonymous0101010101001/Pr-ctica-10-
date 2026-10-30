const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumar(numero) {
    if (numero === 1) {
        return 1;
    }

    return numero + sumar(numero - 1);
}

rl.question("Ingrese un numero entero positivo: ", (respuesta) => {
    let numero = Number(respuesta);

    if (isNaN(numero) || !Number.isInteger(numero) || numero <= 0) {
        console.log("Error: Debe ingresar un numero entero positivo.");
    } else {
        let resultado = sumar(numero);

        console.log("La suma total desde 1 hasta " + numero + " es: " + resultado);
    }

    rl.close();
});
