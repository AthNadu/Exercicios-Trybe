const books = require('./books');

const formatedBookNames = () => books.map((bo) => `${bo.name} - ${bo.genre} - ${bo.author.name}`);

console.log(formatedBookNames());

module.exports = { formatedBookNames };
