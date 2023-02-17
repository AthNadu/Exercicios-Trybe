//Exercício 1:

const addp = (elemento, string) => {
    elemento.innerHTML = string;
};

addp(document.getElementsByTagName("p")[1], 'Estar progredindo na minha carreira como DEV');

//Exercício 2 e 3:

const changeBG = (elemento, cor) => {
    elemento.style.backgroundColor = cor;
};

changeBG(document.getElementsByClassName('main-content')[0], 'rgb(76, 164, 109)');

changeBG(document.getElementsByClassName('center-content')[0], 'white');

//Exercício 4:

const correctTitlle =(elemento, string) => {
    elemento.innerHTML = string;
}

correctTitlle(document.getElementsByTagName('h1')[0], 'Desafio - JavaScript');

//Exercício 5:

const changeLetters = (elemento, funcao) => {
    elemento.innerHTML = funcao;
};

changeLetters(document.getElementsByTagName('p')[0], document.getElementsByTagName('p')[0].innerHTML.toUpperCase())

// Exercício 6:

const cont = (elemento) => {
    let local = document.querySelectorAll('.main-content p');
    let change = '';

    for (let index = 0; index < local.length; index += 1){
        change += `${local[index].innerHTML} `;
    }

    elemento.innerHTML = change;
};

cont(document.querySelector('footer p'));