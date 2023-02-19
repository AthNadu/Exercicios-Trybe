// Soma saldo conta

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

// Subtrai saldo conta

function subtrai(saldoBanc, valor) {
    let sub = saldoBanc - valor;

    return `O valor retirado de sua conta foi de: ${valor} reais, 
    totalizando: ${sub} reais` 
}

console.log(subtrai(saldoBanc, valor));

// Multiplica taxa conta

function multTaxa(saldoBanc, taxa) {
    let mult = saldoBanc * taxa;

    return `O valor taxeado de sua conta foi de: 10%, 
    totalizando: ${mult} reais` 
}

console.log(multTaxa(saldoBanc, taxa));

// Divida saldo conta

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

// Adicionando novos clientes

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function addClient(nome) {
    if (typeof nome !== 'string') {
        return `Error, tipo inválido`;
    } else {
       clientesTrybeBank.push(nome);
       return `Cliente adicionado(a) com sucesso`;
    };
};

addClient('Lucio');
console.log(clientesTrybeBank);

// Excluindo clientes

function removeClient(nome) {
    if (typeof nome !== 'string') {
        return `Error, tipo inválido`;
    } else {
        clientesTrybeBank.splice(clientesTrybeBank.indexOf(nome), 1);
        return `Cliente removido(a) com sucesso`;
    };

    // else if (clientesTrybeBank.includes(nome)) {
    //     clientesTrybeBank.splice(nome, 1);
    //     return `Cliente removido(a) com sucesso`;
    // };
};

removeClient('Lucio');
console.log(clientesTrybeBank);
