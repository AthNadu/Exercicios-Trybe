let angA;
let angB;
let angC;

// let erro = angA < 0 || angB < 0 || angC < 0;

if (angA + angB + angC == 180) {
    console.log('True');
}
else if (angA < 0) {
    console.log ('Erro, ângulo inválido');
}
else if (angB < 0) {
    console.log ('Erro, ângulo inválido');
}
else if (angC < 0) {
    console.log ('Erro, ângulo inválido');
}
else if (angA + angB + angC < 180 || angA + angB + angC > 180) {
    console.log('False');
}
