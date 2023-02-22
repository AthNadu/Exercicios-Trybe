// Adicionando constante da paleta de cores:

const colorPalette = document.getElementById('color-palette');

// Adicionando paleta de cores:

for (let index = 0; index < 4; index += 1) {
  const color = document.createElement('div');
  color.className = 'color';
  colorPalette.appendChild(color);
}

// Criando botão

const buttom = document.createElement('button');
buttom.id = 'button-random-color';
buttom.className = 'button';
buttom.innerHTML = 'Cores aleatórias';
colorPalette.appendChild(buttom);

// Adicionando cores as paletas:
// pesquisando achei no site hora de codar esta função e peguei como base para gerar as cores
// ela recebe os valores hexadecimais e referimos a ela o # que refere ao valor hexadecimal

const colors = document.getElementsByClassName('color');
colors[0].style.backgroundColor = '#000000';

const generateColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let index = 0; index < 6; index += 1) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }

  return color;
};

// Adicionando o evento ao botão:

buttom.addEventListener('click', () => {
  for (let index = 1; index < colors.length; index += 1) {
    colors[index].style.backgroundColor = generateColor();
  }
});

// Adicionando ao localStorage as cores:
const saveColors = () => {
  const savedColors = [];

  for (let index = 0; index < colors.length; index += 1) {
    const cor = colors[index].style.backgroundColor;
    savedColors.push(cor);
  }
  localStorage.setItem('colorPalette', JSON.stringify(savedColors));
};

buttom.addEventListener('click', saveColors);

const loadColors = () => {
  const savedColors = JSON.parse(localStorage.getItem('colorPalette'));

  if (savedColors !== null) {
    for (let index = 1; index < colors.length; index += 1) {
      colors[index].style.backgroundColor = savedColors[index];
    }
  }
};

// Criando pixel board

const pixelBoard = document.getElementById('pixel-board');

for (let index = 0; index < 25; index += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixel.style.backgroundColor = 'white';
  pixelBoard.appendChild(pixel);
}

// Criando evento select:

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', (event) => {
    const selectItem = document.querySelector('.selected');
    if (selectItem !== null) {
      selectItem.classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

// Criando const dos pixels:

const pixels = document.getElementsByClassName('pixel');

// Adicionando ao localStage alterações nos pixels:

const savePixels = () => {
  const savedPixels = [];

  for (let index = 0; index < pixels.length; index += 1) {
    savedPixels.push(pixels[index].style.backgroundColor);
  }
  localStorage.setItem('pixelBoard', JSON.stringify(savedPixels));
};

const loadPixels = () => {
  const savedPixels = JSON.parse(localStorage.getItem('pixelBoard'));

  if (savedPixels !== null) {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = savedPixels[index];
    }
  }
};

// Selecionando as cores:

const selectPixel = (event) => {
  const pixel = event.target;
  const color = document.querySelector('.selected').style.backgroundColor;
  pixel.style.backgroundColor = color;
  savePixels();
};

for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', selectPixel);
}

// Buscando buttom reset e adicionando evento:

const resetButtom = document.getElementById('clear-board');

resetButtom.addEventListener('click', () => {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});

// Window.onload:

window.onload = () => {
  if (localStorage.getItem('colorPalette') === null) {
    for (let index = 1; index < colors.length; index += 1) {
      colors[index].style.backgroundColor = generateColor();
    }
  } else if (localStorage.getItem('colorPalette') !== null) {
    loadColors();
  }
  if (localStorage.getItem('pixelBoard') !== null) {
    loadPixels();
  }
  colors[0].classList.add('selected');
};
