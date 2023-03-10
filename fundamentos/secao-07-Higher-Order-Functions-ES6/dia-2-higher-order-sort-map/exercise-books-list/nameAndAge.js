const books = require('./books');

const nameAndAge = () => books.map((book) => {
  const obj = {
    author: book.author.name,
    age: book.releaseYear - book.author.birthYear,
  };
  return obj;
}).sort((a, b) => a.age - b.age);

console.log(nameAndAge());

module.exports = { nameAndAge };
