// Quadrado
const n = 5;
const stars = '*';
let line = '';

for (let index = 0; index < n; index += 1) {
    line += stars;
};
for (let index = 0; index < n; index += 1) {
    console.log(line);
};

// Triângulo
let newLine = '';

for (let index = 0; index <= n; index += 1) {
  console.log(newLine);
  newLine += stars;
};

// Triângulo invertido
let inputLine = '';
let inputPosition = n - 1;

for (let index = 0; index < n; index += 1) {
  for (let index2 = 0; index2 < n; index2 += 1) {
    if (index2 < inputPosition) {
      inputLine += ' ';
    } else {
      inputLine += stars;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};

// Pirâmide
let pirLine = '';

let midOfMatrix = (n + 1) / 2;
let left = midOfMatrix;
let right = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > left && columnIndex < right) {
      pirLine += stars;
    } else {
      pirLine += ' ';
    }
  }
  console.log(pirLine);
  pirLine = '';
  right += 1;
  left -= 1
};

// Pirâmide vazia no meio
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;

for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == controlLeft || col == controlRight || line == middle) {
      outputLine += stars;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}
