const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// - Copie esse arquivo e edite apenas ele;
// - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// Por causa da classe passada a ele, que possui a estilização no css de transform: translateY;


// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
let li = document.querySelectorAll('.container li');
for (let index = 0; index < li.length; index += 1) {
  li[index].addEventListener('click', (event) => {
    const tech = document.querySelector('.tech');
    tech.classList.remove('tech');
    event.target.classList.add('tech');
    input.value = '';
  });
};

// const changeTech = (event) => {
//   const tech = document.querySelector('.tech');
//   tech.classList.remove('tech');
//   event.target.classList.add('tech');
// }

// firstLi.addEventListener('click', changeTech);
// secondLi.addEventListener('click', changeTech);
// thirdLi.addEventListener('click', changeTech);


// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('input', (event) => {
  const li = document.querySelector('.tech');
  const text = event.target.value;
  li.innerText = text;
});


// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?
myWebpage.addEventListener('dblclick', (event) => {
  event.target = window.location.assign('https://www.betrybe.com/');
});


// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener('mouseover', (event) => {
  event.target.style.color = 'red';
});
myWebpage.addEventListener('mouseout', (event) => {
  event.target.style.color = 'unset';
});


// Segue abaixo um exemplo do uso de event.target:

const resetText = (event) => {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.