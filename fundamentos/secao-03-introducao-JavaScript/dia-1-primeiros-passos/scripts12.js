let movimentoXadrez = 'rei';

switch (movimentoXadrez.toLowerCase()) {
    case 'peao':
        console.log('Peão : somente pra frente, 1 ou 2 casas')
        break;
    
    case 'torre':
        console.log('Torre : frente ou lado, quantas casas quiser')
        break;
    
    case 'cavalo':
        console.log('Cavalo : movimento de L, 2 por 3')
        break;

    case 'bispo':
        console.log('Bispo : diagonal, quantas quiser')
        break;

    case 'rainha':
        console.log('Rainha : qualquer direção, quantas casas quiser')
        break;
    
    case 'rei':
        console.log('Rei : qualquer direção, apenas uma casa')
        break;

    default:
        console.log('Erro, peça inexistente')
        break;
}
