let custo = 1;
let venda = 3;

let custototal = custo * 1.2;
let lucrototal = (venda - custototal) * 1000;

if (custo >= 0 && venda >=0) {
    console.log (lucrototal);
}
else {
    console.log ('Erro nos valores');
}
