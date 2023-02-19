// Introduction functions

function cumprimentaCliente(cliente) {
    return 'Olá, ' + cliente + '. Essa é sua conta do TrybeBank'
  }
  
console.log(cumprimentaCliente('Isaac'))

// Example functions
// Soma saldo

let valor = 500;
let saldoBanc = 500;
let taxa = 0.9;
let div = 2;

function soma(saldoBanc, valor) {
    let soma = saldoBanc + valor;

    return `O valor adicionado a sua conta foi de:  ${valor} reais, 
    totalizando: ${soma} reais` 
}

console.log(soma(saldoBanc, valor));

// Subtrai saldo

function subtrai(saldoBanc, valor) {
    let sub = saldoBanc - valor;

    return `O valor retirado de sua conta foi de: ${valor} reais, 
    totalizando: ${sub} reais` 
}

console.log(subtrai(saldoBanc, valor));

// Multiplica taxa

function multTaxa(saldoBanc, taxa) {
    let mult = saldoBanc * taxa;

    return `O valor taxeado de sua conta foi de: 10%, 
    totalizando: ${mult} reais` 
}

console.log(multTaxa(saldoBanc, taxa));

// Divida saldo

function divSaldo(saldoBanc, div) {
    let divisao = saldoBanc / div;

    return `Dividimos pra outras contas seu saldo como requisitado, ${div} ao todo, 
    totalizando: ${divisao} reais nesta conta` 
}

console.log(divSaldo(saldoBanc, div));


// RETIRADO DO GABARITO
// let saldo = 100;

// function somaSaldo(valor) {
//   return valor + saldo;
// };

// function subtraiSaldo(valor) {
//   return saldo - valor;
// };

// function multiplicaSaldo(valor) {
//   return valor * saldo;
// };

// function divideSaldo(valor) {
//   return saldo / valor;
// };

// console.log(somaSaldo(300)); // 400
// console.log(subtraiSaldo(50)); // 50
// console.log(multiplicaSaldo(2)); // 200
// console.log(divideSaldo(5)); // 20