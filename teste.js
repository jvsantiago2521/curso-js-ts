function criaMultiplicador (multiplicador) {
    return function (numero) {
        return numero * multiplicador;
    };
}

duplicador = criaMultiplicador(2);
triplicador = criaMultiplicador(3);
quadriplicador = criaMultiplicador(4);

console.log(duplicador(2));
console.log(triplicador(2));
console.log(quadriplicador(2));
