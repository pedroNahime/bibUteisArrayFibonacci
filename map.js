let unicosArray = function (array) {

    return array.filter(function (x, y, z) {

        return z.indexOf(x) === y;
    });

};

let quadradosArray = function (array) {

    return array.map(function (value) {
        return value * value
    });

};

let somaArray = function (array) {

    return array.reduce(function (x, y) {
        return x + y;
    }, 0);

};

let subtracaoArray = function (array) {

    return array.reduce(function (x, y) {
        return x - y;
    }, 0);

};

let multiplicacaoArray = function (array) {

    return array.reduce(function (x, y, z) {
        if (z === 0) {
            x = 1
        }
        return x * y;
    }, 0);

};

let fibonacci2numeros = function (x, y) {

    let numero = 0;
    let proximo = 1;
    let auxiliar;
    let valor = [];
    while (numero <= y) {
            if (numero >= x) {
                valor.push(numero);
            }
        auxiliar = proximo;
        proximo = proximo + numero;
        numero = auxiliar;
    }
    return valor
};





