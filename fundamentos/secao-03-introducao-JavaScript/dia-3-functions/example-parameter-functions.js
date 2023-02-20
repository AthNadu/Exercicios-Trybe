// Exemplo de função sem parâmetro

let sistema = 'deslogado'; // o status padrão é deslogado

function logarDeslogar() { // aqui criamos uma função para verificar o status
  if (sistema === 'deslogado') { // se a pessoa usuária estiver deslogada, alteramos o status para logado
    sistema = 'logado';
  } else { // caso esteja logado, alteramos para deslogado
    sistema = 'deslogado';
  }
}

console.log(sistema); // deslogado

logarDeslogar();
console.log(sistema); // logado

logarDeslogar();
console.log(sistema); // deslogado

console.log('O usuário está ' + sistema + ' no sistema TrybeBank'); // O usuário está deslogado no sistema TrybeBank

// Exemplo de função com mais de um parâmetro

function sacar(valor, saldo) {
    if (valor >= 1 && saldo >= 0) {
        if (valor <= saldo) {
            return "Saque realizado com sucesso. Novo saldo: R$ " + (saldo - valor) + ",00";
        } else {
            return "Saldo insuficiente. Seu saldo atual é: R$ " + saldo + ",00";
        }
    } else {
        return "Valor ou saldo inválido. O valor deve ser maior ou igual a 1 e saldo deve ser maior ou igual a 0. Seu saldo atual é de: R$ " + saldo + ",00";
    }
}
  
// function validaParametros(valor, saldo) {
//     if (valor >= 1 && saldo >= 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  
//   function verificaSaldo(valor, saldo) {
//     if (valor <= saldo) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  
//   function sacar(valor, saldo) {
//     if (validaParametros(valor, saldo) === false) {
//       return "Valor ou saldo inválido. O valor deve ser maior ou igual a 1 e saldo deve ser maior ou igual a 0.";
//     };
  
//     if (verificaSaldo(valor, saldo) === true) {
//       return "Saque realizado com sucesso. Novo saldo: " + (saldo - valor);
//     } else {
//       return "Saldo insuficiente. Seu saldo atual é: " + saldo;
//     };
//   }

console.log(sacar(2, 20)); // Saque realizado com sucesso. Novo saldo: R$ 18,00
console.log(sacar(2, -5)); // Valor ou saldo inválido. O valor deve ser maior ou igual a 1 e saldo deve ser maior que 0.
console.log(sacar(2, 0)); // Saldo insuficiente. Seu saldo atual é: R$ 0,00

// Exemplo de function

let clientes = ['Paulo', 'Marta', 'Jose'];
let sorvetes = ['Creme', 'Morango', 'Chocolate'];

// function sorveteEscolhido(nome, sabor) {
//     let clienteValido = false;
//     let sorveteValido = false;

//     for (let index = 0; index < clientes.length; index += 1) {
//         if (clientes[index] === nome) {
//             clienteValido = true;
//         };
//     };

//     for (let index = 0; index < sorvetes.length; index += 1) {
//         if (sorvetes[index] === sabor) {
//             sorveteValido = true;
//         };
//     };

// //     if (clienteValido === true && sorveteValido === true) {
// //         return `${nome}, pague seu sorvete de ${sabor}, no caixa`
// //     } else {
// //         return `cliente ${nome} e, ou, sorvete de ${sabor} inexistente`
// //     };

//     if (clienteValido && sorveteValido) {
//         return `${nome}, pague seu sorvete de ${sabor}, no caixa`
//     } else {
//         return `cliente ${nome} e, ou, sorvete de ${sabor} inexistente`
//     };
// };

function sorveteEscolhido(nome, sabor) {
    if (clientes.includes(nome) && sorvetes.includes(sabor)) {           // Podemos refatorar toda a função de cima em apenas
        return `${nome}, pague seu sorvete de ${sabor}, no caixa`        // alguns códigos, usar o includes nos permite
    } else {                                                             // verificar os arrays sem precisar do For.
        return `Cliente ${nome} e, ou, sorvete de ${sabor} inexistente`
    };
};

console.log(sorveteEscolhido('Paulo', 'Morango'));
console.log(sorveteEscolhido('Arthur', 'Flocos'));
