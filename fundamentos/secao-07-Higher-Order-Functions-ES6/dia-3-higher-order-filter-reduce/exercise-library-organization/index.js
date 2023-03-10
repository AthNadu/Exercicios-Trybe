const { books } = require('./library');

// Requisito 1
const fantasyOrScienceFiction = () => books.filter((book) =>
  book.genre === 'Ficção Científica' || book.genre === 'Fantasia');

// Requisito 2
const oldBooksOrdered = (year) => books.filter((book) =>
  (year - book.releaseYear) >= 60).sort((a, b) =>
  a.releaseYear - b.releaseYear);

// Requisito 3
const booksByAuthorBirthYear = (birthYear) => books.filter((book) =>
  book.author.birthYear === birthYear).map((name) => name.name);

// Requisito 4
const fantasyOrScienceFictionAuthors = () =>
  fantasyOrScienceFiction().filter((book) => book.author.name)
    .map((author) => author.author.name).sort();

// Requisito 5
const oldBooks = (year) => books.filter((book) =>
  (year - book.releaseYear) >= 60).map((name) => name.name);

// Requisito 6
const authorWith3DotsOnName = () => books.filter((book) =>
  book.author.name[1] === '.' && book.author.name[4] === '.'
    && book.author.name[7] === '.')[0].name;
