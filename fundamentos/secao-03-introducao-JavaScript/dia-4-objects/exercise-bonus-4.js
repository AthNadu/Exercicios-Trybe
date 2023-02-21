let moradores = {
  blocoUm: [
    {
      nome: 'Luíza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

// Capturando elementos do objeto
let bloco1 = moradores['blocoUm']
let bloco2 = moradores['blocoDois']

// let nameMorador2Bloco2 = bloco2[1].nome;
// let lasnameMorador2Bloco2 = bloco2[1].sobrenome;
// let andarMorador2Bloco2 = bloco2[1].andar;
// let apMorador2Bloco2 = bloco2[1].apartamento;

// Mensagem requisitada
// console.log(`O morador do bloco 2 de nome ${nameMorador2Bloco2} ${lasnameMorador2Bloco2} mora no ${andarMorador2Bloco2}° andar, apartamento ${apMorador2Bloco2}.`);

// Imprimir o nome e sobrenome dos moradores do blocos1

for (let index = 0; index < bloco1.length; index += 1) {
  let bloco = bloco1[index];

  let name = bloco.nome;
  let lastname = bloco.sobrenome;
  let andar = bloco.andar;
  let apartamento = bloco.apartamento

  let message = `O morador do bloco 1 de nome ${name} ${lastname} mora no ${andar}° andar, apartamento ${apartamento}.`

  console.log(message);
};

// Imprimir o nome e sobrenome dos moradores do blocos2

for (let index = 0; index < bloco2.length; index += 1) {
  let bloco = bloco2[index];

  let name = bloco.nome;
  let lastname = bloco.sobrenome;
  let andar = bloco.andar;
  let apartamento = bloco.apartamento

  let message = `O morador do bloco 2 de nome ${name} ${lastname} mora no ${andar}° andar, apartamento ${apartamento}.`

  console.log(message);
};
