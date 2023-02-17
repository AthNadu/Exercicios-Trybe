const pessoaEstudante = {};

pessoaEstudante.nome = 'Arthur Nadu';
pessoaEstudante['email'] = 'arthurnadu98@gmail.com';

let newKey = 'telefone'
const telefone = 999999999;
pessoaEstudante[newKey] = telefone;

newKey = 'github';
const github = 'AthNadu'

const addProperity = (objeto, chave, valor) => {
    objeto[chave] = valor;
};

addProperity(pessoaEstudante, newKey, github);

newKey = 'linkedin';
const linkedin = 'Arthur Bernardo Nadu Braga';

addProperity(pessoaEstudante, newKey, linkedin);

console.log(pessoaEstudante);
