// Definindo funções

const backColor = (color) => {
  const main = document.querySelector('main')
  main.style.backgroundColor = color;
  localStorage.setItem('backgroundColor', color)
};

const fontColor = (color) => {
  const main = document.querySelector('main')
  main.style.color = color;
  localStorage.setItem('fontColor', color)
};

const fontSize = (size) => {
  const main = document.querySelector('main')
  main.style.fontSize = size;
  localStorage.setItem('sizeFont', size)
};

const spacementLines = (spacement) => {
  const main = document.querySelector('main')
  main.style.lineHeight = spacement;
  localStorage.setItem('lineHeight', spacement)
};

const fontFamily = (font) => {
  const main = document.querySelector('main')
  main.style.fontFamily = font;
  localStorage.setItem('family', font)
};


// Atribuindo função do back groud color


const bgBtnWhite = document.querySelectorAll('.bgcolor button')[0]
bgBtnWhite.addEventListener('click', (event) => {
  event.target = backColor('unset');
});

const bgBtnBlack = document.querySelectorAll('.bgcolor button')[1]
bgBtnBlack.addEventListener('click', (event) => {
  event.target = backColor('black');
});

const bgBtnGreen = document.querySelectorAll('.bgcolor button')[2]
bgBtnGreen.addEventListener('click', (event) => {
  event.target = backColor('green');
});

const bgBtnBlue = document.querySelectorAll('.bgcolor button')[3]
bgBtnBlue.addEventListener('click', (event) => {
  event.target = backColor('blue');
});

const bgBtnYellow = document.querySelectorAll('.bgcolor button')[4]
bgBtnYellow.addEventListener('click', (event) => {
  event.target = backColor('yellow');
});

// let backgroundColorButtons = document.querySelectorAll("#background-color>button")
// for (let index = 0; index < backgroundColorButtons.length; index += 1) {
//   backgroundColorButtons[index].addEventListener("click", (event) => {
//     setBackgroundColor(event.target.innerHTML)
//   })
// }

// Atribuindo função da font color

const colorBtnBlack = document.querySelectorAll('.fontcolor button')[0]
colorBtnBlack.addEventListener('click', (event) => {
  event.target = fontColor('black');
});

const colorBtnRed = document.querySelectorAll('.fontcolor button')[1]
colorBtnRed.addEventListener('click', (event) => {
  event.target = fontColor('red');
});

const colorBtnWhite = document.querySelectorAll('.fontcolor button')[2]
colorBtnWhite.addEventListener('click', (event) => {
  event.target = fontColor('white');
});

// let fontColorButtons = document.querySelectorAll("#font-color>button")
// for (let index = 0; index < fontColorButtons.length; index += 1) {
//   fontColorButtons[index].addEventListener("click", (event) => {
//     setFontColor(event.target.innerHTML)
//   })
// }

// Atribuindo função da font size

const sizeFontBtn1 = document.querySelectorAll('.sizefont button')[0]
sizeFontBtn1.addEventListener('click', (event) => {
  event.target = fontSize('8pt');
});

const sizeFontBtn2 = document.querySelectorAll('.sizefont button')[1]
sizeFontBtn2.addEventListener('click', (event) => {
  event.target = fontSize('10pt');
});

const sizeFontBtn3 = document.querySelectorAll('.sizefont button')[2]
sizeFontBtn3.addEventListener('click', (event) => {
  event.target = fontSize('12pt');
});

const sizeFontBtn4 = document.querySelectorAll('.sizefont button')[3]
sizeFontBtn4.addEventListener('click', (event) => {
  event.target = fontSize('14pt');
});

const sizeFontBtn5 = document.querySelectorAll('.sizefont button')[4]
sizeFontBtn5.addEventListener('click', (event) => {
  event.target = fontSize('20pt');
});

// let fontSizeButtons = document.querySelectorAll("#font-size>button")
// for (let index = 0; index < fontSizeButtons.length; index += 1) {
//   fontSizeButtons[index].addEventListener("click", (event) => {
//     setFontSize(event.target.innerHTML)
//   })
// }

// Atribuindo função da font spacement

const spacementBtn1 = document.querySelectorAll('.spacement button')[0]
spacementBtn1.addEventListener('click', (event) => {
  event.target = spacementLines('1');
});

const spacementBtn2 = document.querySelectorAll('.spacement button')[1]
spacementBtn2.addEventListener('click', (event) => {
  event.target = spacementLines('unset');
});

const spacementBtn3 = document.querySelectorAll('.spacement button')[2]
spacementBtn3.addEventListener('click', (event) => {
  event.target = spacementLines('1.5');
});

const spacementBtn4 = document.querySelectorAll('.spacement button')[3]
spacementBtn4.addEventListener('click', (event) => {
  event.target = spacementLines('2');
});

const spacementBtn5 = document.querySelectorAll('.spacement button')[4]
spacementBtn5.addEventListener('click', (event) => {
  event.target = spacementLines('3');
});

// let lineHeightButtons = document.querySelectorAll("#line-height>button")
// for (let index = 0; index < lineHeightButtons.length; index += 1) {
//   lineHeightButtons[index].addEventListener("click", (event) => {
//     setLineHeight(event.target.innerHTML)
//   })
// }

// Atribuindo função da font family

const familyBtnArial = document.querySelectorAll('.fonttype button')[0]
familyBtnArial.addEventListener('click', (event) => {
  event.target = fontFamily('Arial');
});

const familyBtnTimes = document.querySelectorAll('.fonttype button')[1]
familyBtnTimes.addEventListener('click', (event) => {
  event.target = fontFamily('Times new roman');
});

const familyBtnMedieval = document.querySelectorAll('.fonttype button')[2]
familyBtnMedieval.addEventListener('click', (event) => {
  event.target = fontFamily('charm');
});

// let fontFamilyButtons = document.querySelectorAll("#font-family>button")
// for (let index = 0; index < fontFamilyButtons.length; index += 1) {
//   fontFamilyButtons[index].addEventListener("click", (event) => {
//     setFontFamily(event.target.innerHTML)
//   })
// }

const initialize = () => {
  const bgcolor = localStorage.getItem('backgroundColor')
  if (bgcolor) {
    backColor(bgcolor);
  };
  const fontcolor = localStorage.getItem('fontColor')
  if (fontColor) {
    fontColor(fontcolor);
  };
  const fontsize = localStorage.getItem('sizeFont')
  if (fontsize) {
    fontSize(fontsize);
  };
  const spacement = localStorage.getItem('lineHeight')
  if (spacement) {
    spacementLines(spacement);
  };
  const family = localStorage.getItem('family')
  if (family) {
    fontFamily(family);
  };
};


initialize();
