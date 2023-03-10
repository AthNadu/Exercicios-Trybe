const books = require('./books');

const formatedAuthorNamesBirth = () => books.map((b) => `${b.author.name} - ${b.author.birthYear}`);

console.log(formatedAuthorNamesBirth());

module.exports = { formatedAuthorNamesBirth };
