function parametro(numero) {
    if (numero > 0){
        return 'positive';
    }
    else if (numero < 0){
        return 'negative';
    }
    else {
        return 'zero';
    }
}

console.log(parametro(-15));
