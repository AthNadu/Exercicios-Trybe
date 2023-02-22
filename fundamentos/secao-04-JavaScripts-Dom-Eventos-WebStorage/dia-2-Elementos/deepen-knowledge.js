// Variáveis capturadas:
const body = document.querySelector('body');

// Criação do header:
const header = document.createElement('header');
header.id = 'header';
header.className = 'header';
body.appendChild(header);

// Criação h1:
const h1 = document.createElement('h1');
h1.innerHTML = 'TrybeTrip - Agência de Viagens';
h1.className = 'title';
header.appendChild(h1);

// Criação da main:
const main = document.createElement('main');
main.className = 'main-content';
body.appendChild(main);

// Criando sectionCenter:
const sectionCenter = document.createElement('section');
sectionCenter.className = 'center-content';
main.appendChild(sectionCenter);

// Criando parágrafo sectionCenter:
const pSectionCenter = document.createElement('p');
pSectionCenter.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra lacus quis eros gravida gravida. Etiam dapibus nisl at dolor laoreet tempus. Duis faucibus vestibulum sodales. Pellentesque vel dolor eget purus molestie pellentesque.';
sectionCenter.appendChild(pSectionCenter);

// Criando sectionLeft:
const sectionLeft = document.createElement('section');
sectionLeft.className = 'left-content';
main.appendChild(sectionLeft);

// Criando sectionRight:
const sectionRight = document.createElement('section');
sectionRight.className = 'right-content';
main.appendChild(sectionRight);

// Criando img:
const img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.className = 'small-image';
sectionLeft.appendChild(img);

// Criando lista não ordenada de um a dez:
const ul = document.createElement('ul');
sectionRight.appendChild(ul);

const li1 = document.createElement('li');
li1.innerHTML = 'Um';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerHTML = 'Dois';
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerHTML = 'Três';
ul.appendChild(li3);
const li4 = document.createElement('li');
li4.innerHTML = 'Quatro';
ul.appendChild(li4);
const li5 = document.createElement('li');
li5.innerHTML = 'Cinco';
ul.appendChild(li5);
const li6 = document.createElement('li');
li6.innerHTML = 'Seis';
ul.appendChild(li6);
const li7 = document.createElement('li');
li7.innerHTML = 'Sete';
ul.appendChild(li7);
const li8 = document.createElement('li');
li8.innerHTML = 'Oito';
ul.appendChild(li8);
const li9 = document.createElement('li');
li9.innerHTML = 'Nove';
ul.appendChild(li9);
const li10 = document.createElement('li');
li10.innerHTML = 'Dez';
ul.appendChild(li10);

// const arrayNumbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis',
// 'Sete', 'Oito', 'Nove', 'Dez']
// for (let num in arrayNumbers) {
// const elementLi = document.createElement('li');
// elementLi.innerHTML = arrayNumbers[num];
// elementUl.appendChild(elementLi);
// }

// Criando 3 h3:
const h3um = document.createElement('h3');
h3um.className = 'description';
h3um.innerHTML = 'Um';
main.appendChild(h3um);
const h3dois = document.createElement('h3');
h3dois.className = 'description';
h3dois.innerHTML = 'Dois';
main.appendChild(h3dois);
const h3tres = document.createElement('h3');
h3tres.className = 'description';
h3tres.innerHTML = 'Três';
main.appendChild(h3tres);

// for (let index = 1; index <= 3; index += 1) {
//   const elementH3 = document.createElement('h3');
//   elementH3.innerHTML = 'Show ' + index;
//   elementMain.appendChild(elementH3);
// }

// const elementsH3 = document.getElementsByTagName('h3');
// for (let index = 0; index < 3; index += 1) {
//   elementsH3[index].className = 'description';
// }

// Removendo a sectionLeft:
main.removeChild(sectionLeft);

// Centralizando a sectionRight:
sectionRight.style.marginRight = 'auto';

// Alterando cor de fundo da sectionCenter:
sectionCenter.style.backgroundColor = 'green';

// Removendo os dois últiomos elementos da lista:
ul.removeChild(li10);
ul.removeChild(li9);

// const ul = document.getElementsByTagName('ul')[0];
// ul.lastChild.remove();
// ul.lastChild.remove();
