function sumar(a, b) {
    return a+b;
}

function restar(a, b) {
    return a-b;
}

function multiplicar(a, b) {
    return a*b;
}

function dividir(a, b) {
    if (b == 0) {
        console.log("No se puede dividir por 0");
    } else {
        return a/b;
    }
}

function raizCuadrada(a) {

    if (a < 0) {
        console.log("El numero tiene que ser positivo")
    }
    return Math.sqrt(a);  // :P
}

function elevar(a,b) {
    if (b === 0) {
        return 1;
    } 

    let resultado = 1;

    for (let i = 0; i < b; i++) {
        resultado *= a;
    }
    return resultado;
}
